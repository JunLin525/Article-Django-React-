from rest_framework import serializers
from .models import New_Book


class NewBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = New_Book
        fields = ("pk", "NewBookName", "author_book",
                  "publisher", "ISBN", "Abstract")
