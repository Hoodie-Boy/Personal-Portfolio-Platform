from django.urls import path
from rest_framework.routers import DefaultRouter

from apps.core.views import (
    ProfileView,
    SocialLinkViewSet,
)

from apps.projects.views import (
    ProjectViewSet,
    TechnologyViewSet,
)


router = DefaultRouter()

router.register(
    "projects",
    ProjectViewSet,
    basename="project",
)

router.register(
    "technologies",
    TechnologyViewSet,
    basename="technology",
)

router.register(
    "social-links",
    SocialLinkViewSet,
    basename="social-link",
)


urlpatterns = [
    path(
        "profile/",
        ProfileView.as_view(),
        name="profile",
    ),
]

urlpatterns += router.urls