from rest_framework import serializers

from .models import Profile, SocialLink


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            "id",
            "name",
            "headline",
            "bio",
            "location",
            "email",
            "profile_image",
            "resume",
            "created_at",
            "updated_at",
        ]


class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = [
            "id",
            "platform",
            "url",
            "icon",
            "order",
            "visible",
        ]