from django.contrib import admin

from .models import (
    Project,
    ProjectImage,
    ProjectVideo,
    Technology,
)


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1
    fields = (
        "image",
        "caption",
        "alt_text",
        "order",
    )


class ProjectVideoInline(admin.TabularInline):
    model = ProjectVideo
    extra = 1
    fields = (
        "title",
        "video_type",
        "video_file",
        "external_url",
        "thumbnail",
        "caption",
        "order",
    )


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
    )

    search_fields = (
        "name",
    )


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "project_type",
        "status",
        "featured",
        "updated_at",
    )

    list_filter = (
        "project_type",
        "status",
        "featured",
        "technologies",
    )

    search_fields = (
        "title",
        "short_description",
        "description",
    )

    prepopulated_fields = {
        "slug": ("title",)
    }

    filter_horizontal = (
        "technologies",
    )

    inlines = [
        ProjectImageInline,
        ProjectVideoInline,
    ]


@admin.register(ProjectImage)
class ProjectImageAdmin(admin.ModelAdmin):
    list_display = (
        "project",
        "order",
        "created_at",
    )

    list_filter = (
        "project",
    )


@admin.register(ProjectVideo)
class ProjectVideoAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "project",
        "video_type",
        "order",
    )

    list_filter = (
        "video_type",
        "project",
    )