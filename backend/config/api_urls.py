from rest_framework.routers import DefaultRouter

from apps.core.views import (
    ProfileViewSet,
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
    "profile",
    ProfileViewSet,
    basename="profile",
)

router.register(
    "social-links",
    SocialLinkViewSet,
    basename="social-link",
)


urlpatterns = router.urls