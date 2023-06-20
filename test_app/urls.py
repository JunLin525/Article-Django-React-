from django.contrib import admin
from django.urls import path
from .views import Article_APIView
from .views import ArticleView
urlpatterns = [
    path('', ArticleView.as_view(), name='article_list'),
    path('/<int:pk>', Article_APIView.as_view(), name='article_detail'),
]
