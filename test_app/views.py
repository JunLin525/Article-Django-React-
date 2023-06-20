from django.shortcuts import render
from rest_framework import generics
from .models import article
from .serializers import ArticleSerializers
# Create your views here.


class ArticleView(generics.ListCreateAPIView):
    queryset = article.objects.all()
    serializer_class = ArticleSerializers


class Article_APIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = article.objects.all()
    serializer_class = ArticleSerializers
