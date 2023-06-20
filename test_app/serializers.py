from rest_framework import serializers

from .models import article


class ArticleSerializers(serializers.ModelSerializer):
    class Meta:
        model = article
        fields = ("title", "body")
