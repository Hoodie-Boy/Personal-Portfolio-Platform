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


class TechnologyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Technology.objects.order_by(
        "category",
        "name",
    )

    serializer_class = TechnologySerializer