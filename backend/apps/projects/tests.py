from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .models import Project, Technology


class ProjectAPITestCase(APITestCase):

    def setUp(self):
        self.python = Technology.objects.create(
            name="Python",
            category="Programming Language",
        )

        self.javascript = Technology.objects.create(
            name="JavaScript",
            category="Programming Language",
        )

        self.project = Project.objects.create(
            title="Test Project",
            slug="test-project",
            short_description="A test project",
            description="Project description",
            project_type="personal",
            status="completed",
            featured=True,
        )

        self.project.technologies.add(
            self.python,
            self.javascript,
        )

        self.second_project = Project.objects.create(
            title="Another Project",
            slug="another-project",
            short_description="Another test project",
            description="Another project description",
            project_type="academic",
            status="in_progress",
            featured=False,
        )

    def test_project_list(self):
        response = self.client.get(
            reverse("project-list")
        )

        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK,
        )

        self.assertEqual(
            response.data["count"],
            2,
        )

    def test_project_detail(self):
        response = self.client.get(
            reverse(
                "project-detail",
                kwargs={
                    "slug": self.project.slug
                },
            )
        )

        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK,
        )

        self.assertEqual(
            response.data["slug"],
            "test-project",
        )

        self.assertEqual(
            response.data["title"],
            "Test Project",
        )

    def test_featured_filter(self):
        response = self.client.get(
            reverse("project-list"),
            {"featured": "true"},
        )

        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK,
        )

        self.assertEqual(
            response.data["count"],
            1,
        )

        self.assertEqual(
            response.data["results"][0]["slug"],
            "test-project",
        )

    def test_status_filter(self):
        response = self.client.get(
            reverse("project-list"),
            {"status": "in_progress"},
        )

        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK,
        )

        self.assertEqual(
            response.data["count"],
            1,
        )

        self.assertEqual(
            response.data["results"][0]["slug"],
            "another-project",
        )

    def test_project_type_filter(self):
        response = self.client.get(
            reverse("project-list"),
            {"project_type": "academic"},
        )

        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK,
        )

        self.assertEqual(
            response.data["count"],
            1,
        )

        self.assertEqual(
            response.data["results"][0]["slug"],
            "another-project",
        )

    def test_project_search(self):
        response = self.client.get(
            reverse("project-list"),
            {"search": "Python"},
        )

        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK,
        )

        self.assertEqual(
            response.data["count"],
            0,
        )

        response = self.client.get(
            reverse("project-list"),
            {"search": "Another"},
        )

        self.assertEqual(
            response.data["count"],
            1,
        )

        self.assertEqual(
            response.data["results"][0]["slug"],
            "another-project",
        )

    def test_project_technologies(self):
        response = self.client.get(
            reverse(
                "project-detail",
                kwargs={
                    "slug": self.project.slug
                },
            )
        )

        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK,
        )

        technologies = response.data["technologies"]

        self.assertEqual(
            len(technologies),
            2,
        )

        technology_names = {
            technology["name"]
            for technology in technologies
        }

        self.assertEqual(
            technology_names,
            {"Python", "JavaScript"},
        )

    def test_project_not_found(self):
        response = self.client.get(
            reverse(
                "project-detail",
                kwargs={
                    "slug": "does-not-exist"
                },
            )
        )

        self.assertEqual(
            response.status_code,
            status.HTTP_404_NOT_FOUND,
        )