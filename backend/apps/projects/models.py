from django.db import models


class Technology(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(
        max_length=100,
        blank=True,
    )
    icon = models.CharField(
        max_length=100,
        blank=True,
    )

    def __str__(self):
        return self.name


class Project(models.Model):

    PROJECT_TYPE_CHOICES = [
        ("research", "Research"),
        ("personal", "Personal"),
        ("academic", "Academic"),
        ("professional", "Professional"),
        ("team", "Team"),
        ("open_source", "Open Source"),
    ]

    STATUS_CHOICES = [
        ("completed", "Completed"),
        ("in_progress", "In Progress"),
        ("archived", "Archived"),
    ]

    title = models.CharField(max_length=200)

    slug = models.SlugField(
        max_length=220,
        unique=True,
    )

    short_description = models.CharField(
        max_length=300,
    )

    description = models.TextField()

    project_type = models.CharField(
        max_length=30,
        choices=PROJECT_TYPE_CHOICES,
    )

    status = models.CharField(
        max_length=30,
        choices=STATUS_CHOICES,
        default="in_progress",
    )

    start_date = models.DateField(
        blank=True,
        null=True,
    )

    end_date = models.DateField(
        blank=True,
        null=True,
    )

    featured = models.BooleanField(
        default=False,
    )

    github_url = models.URLField(
        blank=True,
    )

    demo_url = models.URLField(
        blank=True,
    )

    thumbnail = models.ImageField(
        upload_to="projects/thumbnails/",
        blank=True,
        null=True,
    )

    technologies = models.ManyToManyField(
        Technology,
        blank=True,
        related_name="projects",
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    def __str__(self):
        return self.title


class ProjectImage(models.Model):
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name="images",
    )

    image = models.ImageField(
        upload_to="projects/images/",
    )

    caption = models.CharField(
        max_length=255,
        blank=True,
    )

    alt_text = models.CharField(
        max_length=255,
        blank=True,
    )

    order = models.PositiveIntegerField(
        default=0,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return f"{self.project.title} - Image {self.id}"


class ProjectVideo(models.Model):

    VIDEO_TYPE_CHOICES = [
        ("upload", "Uploaded Video"),
        ("youtube", "YouTube"),
        ("vimeo", "Vimeo"),
    ]

    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name="videos",
    )

    title = models.CharField(
        max_length=200,
    )

    video_type = models.CharField(
        max_length=20,
        choices=VIDEO_TYPE_CHOICES,
    )

    video_file = models.FileField(
        upload_to="projects/videos/",
        blank=True,
        null=True,
    )

    external_url = models.URLField(
        blank=True,
        null=True,
    )

    thumbnail = models.ImageField(
        upload_to="projects/video-thumbnails/",
        blank=True,
        null=True,
    )

    caption = models.CharField(
        max_length=255,
        blank=True,
    )

    order = models.PositiveIntegerField(
        default=0,
    )

    def __str__(self):
        return self.title