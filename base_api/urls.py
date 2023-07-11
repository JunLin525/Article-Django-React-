from django.urls import path, include
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (

    TokenRefreshView,
)


urlpatterns = [
    path('tokens', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(),
         name='token_refresh_view'),
]
