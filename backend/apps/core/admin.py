from django.contrib import admin

from .models import Profile, SocialLink


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "headline",
        "email",
        "location",
        "updated_at",
    )

    fieldsets = (
        (
            "Personal Information",
            {
                "fields": (
                    "name",
                    "headline",
                    "bio",
                    "location",
                )
            },
        ),
        (
            "Contact",
            {
                "fields": (
                    "email",
                )
            },
        ),
        (
            "Media",
            {
                "fields": (
                    "profile_image",
                    "resume",
                )
            },
        ),
        (
            "Metadata",
            {
                "fields": (
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    def has_add_permission(self, request):
        return not Profile.objects.exists()


@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = (
        "platform",
        "url",
        "visible",
        "order",
    )

    list_display_links = (
        "platform",
    )

    list_editable = (
        "visible",
        "order",
    )

    list_filter = (
        "platform",
        "visible",
    )

    search_fields = (
        "url",
        "icon",
    )

    ordering = (
        "order",
    )