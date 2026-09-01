from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .models import Project


class ProjectAPITestCase(APITestCase):

    def setUp(self):
        self.project = Project.objects.create(
            title="Test Project",
            slug="test-project",
            short_description="A test project",
            description="Project description",
            project_type="personal",
            status="completed",
        )

    def test_project_list(self):
        response = self.client.get(
            reverse("project-list")
        )

        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK,
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