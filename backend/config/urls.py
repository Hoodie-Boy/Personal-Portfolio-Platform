from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from django.contrib import admin



admin.site.site_url = "http://localhost:3000/"
admin.site.site_title = "Portfolio Admin"
admin.site.index_title = "Portfolio Management"


urlpatterns = [
    path("admin/", admin.site.urls),

    path(
        "api/v1/",
        include("config.api_urls"),
    ),
]


if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT,
    )