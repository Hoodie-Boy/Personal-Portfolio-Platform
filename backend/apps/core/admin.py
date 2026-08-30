from django.contrib import admin

from .models import Profile, SocialLink


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "headline",
        "email",
        "updated_at",
    )


@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = (
        "platform",
        "url",
        "visible",
        "order",
    )

    list_filter = (
        "platform",
        "visible",
    )

    ordering = (
        "order",
    )