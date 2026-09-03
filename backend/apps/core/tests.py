from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .models import Profile, SocialLink


class ProfileAPITestCase(APITestCase):

    def setUp(self):
        self.profile = Profile.objects.create(
            name="Amir Mohammadi",
            headline="Electrical Engineer",
            bio="Electrical engineering and software development.",
            location="Tehran",
            email="amir@example.com",
        )

    def test_profile_endpoint(self):
        response = self.client.get(
            reverse("profile")
        )

        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK,
        )

        self.assertEqual(
            response.data["name"],
            "Amir Mohammadi",
        )

        self.assertEqual(
            response.data["headline"],
            "Electrical Engineer",
        )

        self.assertEqual(
            response.data["location"],
            "Tehran",
        )

        self.assertEqual(
            response.data["email"],
            "amir@example.com",
        )


class SocialLinkAPITestCase(APITestCase):

    def setUp(self):
        self.github = SocialLink.objects.create(
            platform="github",
            url="https://github.com/example",
            visible=True,
            order=1,
        )

        self.linkedin = SocialLink.objects.create(
            platform="linkedin",
            url="https://linkedin.com/in/example",
            visible=True,
            order=2,
        )

        self.hidden_link = SocialLink.objects.create(
            platform="other",
            url="https://example.com/hidden",
            visible=False,
            order=3,
        )

    def test_social_links_endpoint(self):
        response = self.client.get(
            reverse("social-link-list")
        )

        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK,
        )

        self.assertEqual(
            response.data["count"],
            2,
        )

    def test_hidden_social_links_are_not_returned(self):
        response = self.client.get(
            reverse("social-link-list")
        )

        urls = [
            link["url"]
            for link in response.data["results"]
        ]

        self.assertIn(
            "https://github.com/example",
            urls,
        )

        self.assertIn(
            "https://linkedin.com/in/example",
            urls,
        )

        self.assertNotIn(
            "https://example.com/hidden",
            urls,
        )

    def test_social_links_order(self):
        response = self.client.get(
            reverse("social-link-list")
        )

        self.assertEqual(
            response.data["results"][0]["platform"],
            "github",
        )

        self.assertEqual(
            response.data["results"][1]["platform"],
            "linkedin",
        )