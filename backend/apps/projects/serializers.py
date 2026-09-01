from rest_framework import serializers

from .models import (
    Project,
    ProjectImage,
    ProjectVideo,
    Technology,
)


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = [
            "id",
            "name",
            "category",
            "icon",
        ]


class ProjectImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = ProjectImage
        fields = [
            "id",
            "image",
            "caption",
            "alt_text",
            "order",
        ]

    def get_image(self, obj):
        request = self.context.get("request")

        if not obj.image:
            return None

        url = obj.image.url

        if request:
            return request.build_absolute_uri(url)

        return url

class ProjectVideoSerializer(serializers.ModelSerializer):
    video_file = serializers.SerializerMethodField()
    thumbnail = serializers.SerializerMethodField()

    class Meta:
        model = ProjectVideo
        fields = [
            "id",
            "title",
            "video_type",
            "video_file",
            "external_url",
            "thumbnail",
            "caption",
            "order",
        ]

    def get_video_file(self, obj):
        request = self.context.get("request")

        if not obj.video_file:
            return None

        url = obj.video_file.url

        if request:
            return request.build_absolute_uri(url)

        return url

    def get_thumbnail(self, obj):
        request = self.context.get("request")

        if not obj.thumbnail:
            return None

        url = obj.thumbnail.url

        if request:
            return request.build_absolute_uri(url)

        return url


class ProjectSerializer(serializers.ModelSerializer):
    thumbnail = serializers.SerializerMethodField()

    technologies = TechnologySerializer(
        many=True,
        read_only=True,
    )

    images = ProjectImageSerializer(
        many=True,
        read_only=True,
    )

    videos = ProjectVideoSerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        model = Project

        fields = [
            "id",
            "title",
            "slug",
            "short_description",
            "description",
            "project_type",
            "status",
            "start_date",
            "end_date",
            "featured",
            "github_url",
            "demo_url",
            "thumbnail",
            "technologies",
            "images",
            "videos",
            "created_at",
            "updated_at",
        ]

    def get_thumbnail(self, obj):
        request = self.context.get("request")

        if not obj.thumbnail:
            return None

        url = obj.thumbnail.url

        if request:
            return request.build_absolute_uri(url)

        return url
    
    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "slug",
            "short_description",
            "description",
            "project_type",
            "status",
            "start_date",
            "end_date",
            "featured",
            "github_url",
            "demo_url",
            "thumbnail",
            "technologies",
            "images",
            "videos",
            "created_at",
            "updated_at",
        ]