from django.shortcuts import render
from rest_framework import generics
from .models import New_Book
from .serializers import NewBookSerializer

# Create your views here.


class NewBookAPIView(generics.ListCreateAPIView):
    queryset = New_Book.objects.all()
    serializer_class = NewBookSerializer


class NewBookDetailAPIView(generics.RetrieveAPIView):
    queryset = New_Book.objects.all()
    serializer_class = NewBookSerializer
