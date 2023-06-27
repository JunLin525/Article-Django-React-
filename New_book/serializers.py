from rest_framework import serializers
from .models import New_Book, Comments


class NewBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = New_Book
        fields = ("pk", "NewBookName", "author_book",
                  "publisher",  "Abstract", "ISBN", "Cover")


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ("article", "title", "author", "text")
