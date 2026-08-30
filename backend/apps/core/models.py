from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=150)
    headline = models.CharField(max_length=255, blank=True)
    bio = models.TextField(blank=True)

    location = models.CharField(max_length=150, blank=True)
    email = models.EmailField(blank=True)

    profile_image = models.ImageField(
        upload_to="profile/",
        blank=True,
        null=True,
    )

    resume = models.FileField(
        upload_to="resume/",
        blank=True,
        null=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class SocialLink(models.Model):
    PLATFORM_CHOICES = [
        ("github", "GitHub"),
        ("linkedin", "LinkedIn"),
        ("email", "Email"),
        ("researchgate", "ResearchGate"),
        ("other", "Other"),
    ]

    platform = models.CharField(
        max_length=50,
        choices=PLATFORM_CHOICES,
    )

    url = models.URLField()

    icon = models.CharField(
        max_length=100,
        blank=True,
    )

    order = models.PositiveIntegerField(default=0)

    visible = models.BooleanField(default=True)

    def __str__(self):
        return self.get_platform_display()