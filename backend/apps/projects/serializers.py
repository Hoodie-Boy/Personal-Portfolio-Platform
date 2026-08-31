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
    class Meta:
        model = ProjectImage
        fields = [
            "id",
            "image",
            "caption",
            "alt_text",
            "order",
        ]


class ProjectVideoSerializer(serializers.ModelSerializer):
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


class ProjectSerializer(serializers.ModelSerializer):
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