from rest_framework import serializers
from .models import New_Book, Comments


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ("article","title", "author", "text")


class NewBookSerializer(serializers.ModelSerializer):
    comments = CommentsSerializer(many=True, read_only=True)

    class Meta:
        model = New_Book
        fields = ("pk", "NewBookName", "author_book",
                  "publisher",  "Abstract", "ISBN", "Cover", "comments")
