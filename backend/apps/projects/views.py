from rest_framework import viewsets

from .models import Project, Technology
from .serializers import (
    ProjectSerializer,
    TechnologySerializer,
)


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = (
        Project.objects
        .prefetch_related(
            "technologies",
            "images",
            "videos",
        )
        .all()
    )

    serializer_class = ProjectSerializer
    lookup_field = "slug"

    filterset_fields = [
        "status",
        "project_type",
        "featured",
    ]

    search_fields = [
        "title",
        "short_description",
        "description",
    ]
    
class TechnologyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Technology.objects.order_by(
        "category",
        "name",
    )

    serializer_class = TechnologySerializer

    search_fields = [
        "name",
        "category",
    ]