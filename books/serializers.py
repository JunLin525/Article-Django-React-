from rest_framework import serializers

from .models import SEA_Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = SEA_Book
        fields = ("pk", "book_name", "author",
                  "publishing_house", "ISBN", "Abstract")
