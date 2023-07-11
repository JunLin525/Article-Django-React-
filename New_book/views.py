# from rest_framework import generics
from .models import New_Book, Comments
from .serializers import NewBookSerializer, CommentsSerializer
from rest_framework import filters
from rest_framework import viewsets
from rest_framework import generics
from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
# Create your views here.


class NewBookAPIView(generics.ListCreateAPIView):
    queryset = New_Book.objects.all()
    serializer_class = NewBookSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['NewBookName', 'author_book']


class NewBookDetailAPIView(generics.RetrieveAPIView):
    queryset = New_Book.objects.all()
    serializer_class = NewBookSerializer


class CommentAPIView(generics.ListCreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
