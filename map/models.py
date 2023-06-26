from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.


class SEA_MAP(models.Model):
    shop_name = models.CharField(max_length=100)
    address = models.CharField(max_length=250)
    rate = models.FloatField(
        validators=[MinValueValidator(1.0), MaxValueValidator(5.0)]
    )
    special = models.TextField(max_length=2000)
    cover = models.ImageField(upload_to="covers/", blank=True)

    def __str__(self):
        return self.shop_name

    class Meta:
        verbose_name_plural = "SEA_MAPs"
        verbose_name = "SEA_MAP"
