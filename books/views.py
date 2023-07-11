from django.shortcuts import render
from rest_framework import generics
from .models import SEA_Book
from .serializers import BookSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated


class BookAPIView(generics.ListCreateAPIView):
    queryset = SEA_Book.objects.all()
    serializer_class = BookSerializer


class BookDetailAPIVIEW(generics.RetrieveUpdateDestroyAPIView):
    queryset = SEA_Book.objects.all()
    serializer_class = BookSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getBooks(request):
    queryset = SEA_Book.objects.all()
    serializer = BookSerializer(queryset, many=True)
    return Response(serializer.data)
