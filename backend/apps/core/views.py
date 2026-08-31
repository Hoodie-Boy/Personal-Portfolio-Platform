from rest_framework import viewsets

from .models import Profile, SocialLink
from .serializers import (
    ProfileSerializer,
    SocialLinkSerializer,
)


class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class SocialLinkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SocialLink.objects.filter(
        visible=True
    )
    serializer_class = SocialLinkSerializer