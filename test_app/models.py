from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.


class article(models.Model):
    title = models.CharField(max_length=100)
    body = models.CharField(max_length=5000)

    def __str__(self):
        return self.title
