from rest_framework import serializers

from .models import SEA_MAP


class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = SEA_MAP
        fields = ("pk", "shop_name", "address",
                  "rate", "special", "cover")
