from rest_framework import serializers

from .models import Profile, SocialLink


class ProfileSerializer(serializers.ModelSerializer):
    profile_image = serializers.SerializerMethodField()
    resume = serializers.SerializerMethodField()

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

    def get_profile_image(self, obj):
        request = self.context.get("request")

        if not obj.profile_image:
            return None

        url = obj.profile_image.url

        if request:
            return request.build_absolute_uri(url)

        return url

    def get_resume(self, obj):
        request = self.context.get("request")

        if not obj.resume:
            return None

        url = obj.resume.url

        if request:
            return request.build_absolute_uri(url)

        return url


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