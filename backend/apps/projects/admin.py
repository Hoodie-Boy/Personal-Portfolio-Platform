from django.contrib import admin
from django.utils.html import format_html

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
        "image_preview",
        "image",
        "caption",
        "alt_text",
        "order",
    )

    readonly_fields = (
        "image_preview",
    )

    def image_preview(self, obj):
        if not obj.image:
            return "No image"

        return format_html(
            '<img src="{}" width="120" height="80" '
            'style="object-fit: cover; border-radius: 6px;" />',
            obj.image.url,
        )

    image_preview.short_description = "Preview"

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

    ordering = (
        "order",
    )

@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "icon",
    )

    list_filter = (
        "category",
    )

    search_fields = (
        "name",
        "category",
    )

    ordering = (
        "category",
        "name",
    )

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "project_type",
        "status",
        "featured",
        "start_date",
        "end_date",
        "updated_at",
    )

    list_display_links = (
        "title",
    )

    list_editable = (
        "status",
        "featured",
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
        "technologies__name",
    )

    prepopulated_fields = {
        "slug": ("title",)
    }

    filter_horizontal = (
        "technologies",
    )

    ordering = (
        "-featured",
        "-start_date",
        "-created_at",
    )

    date_hierarchy = "start_date"

    fieldsets = (
        (
            "Basic Information",
            {
                "fields": (
                    "title",
                    "slug",
                    "short_description",
                    "description",
                )
            },
        ),
        (
            "Project Classification",
            {
                "fields": (
                    "project_type",
                    "status",
                    "featured",
                    "technologies",
                )
            },
        ),
        (
            "Timeline",
            {
                "fields": (
                    "start_date",
                    "end_date",
                )
            },
        ),
        (
            "Links",
            {
                "fields": (
                    "github_url",
                    "demo_url",
                )
            },
        ),
        (
            "Media",
            {
                "fields": (
                    "thumbnail",
                )
            },
        ),
    )

    (
        "Metadata",
        {
            "fields": (
                "created_at",
                "updated_at",
            )
        },
    ),

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

    list_display_links = (
        "title",
    )

    list_editable = (
        "order",
    )

    list_filter = (
        "video_type",
        "project",
    )

    search_fields = (
        "title",
        "caption",
        "project__title",
    )

    ordering = (
        "project",
        "order",
    )