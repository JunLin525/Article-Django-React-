from django.shortcuts import render
from rest_framework import generics
from .models import New_Book
from .serializers import NewBookSerializer
from rest_framework import filters

# Create your views here.


class NewBookAPIView(generics.ListCreateAPIView):
    queryset = New_Book.objects.all()
    serializer_class = NewBookSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['NewBookName', 'author_book']


class NewBookDetailAPIView(generics.RetrieveAPIView):
    queryset = New_Book.objects.all()
    serializer_class = NewBookSerializer
