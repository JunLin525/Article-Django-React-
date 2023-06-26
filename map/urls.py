from django.contrib import admin
from django.urls import path
from .views import MAPAPIView
from .views import MapDetailAPIView
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', MAPAPIView.as_view(), name='map_list'),
    path('detail/<int:pk>', MapDetailAPIView.as_view(), name='MAP_detail'),
]
