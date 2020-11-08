from django.contrib import admin
from django.urls import path, re_path, include
from django.conf import settings
from django.contrib.staticfiles.urls import static
from .views import Home
from . import views

admin.site.site_header = "AtaOta Blog Admin"
admin.site.site_title = "AtaOta Blog"
urlpatterns = [

    path('ataota__blogAdmin/', admin.site.urls),
]
urlpatterns += [
    re_path('', views.Home, name="Home"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

