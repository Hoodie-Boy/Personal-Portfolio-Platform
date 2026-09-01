from rest_framework import generics, viewsets

from .models import Profile, SocialLink
from .serializers import (
    ProfileSerializer,
    SocialLinkSerializer,
)


class ProfileView(generics.RetrieveAPIView):
    serializer_class = ProfileSerializer

    def get_object(self):
        return Profile.objects.first()


class SocialLinkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SocialLink.objects.filter(
        visible=True
    ).order_by("order")

    serializer_class = SocialLinkSerializer