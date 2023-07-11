import uuid
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.


class SEA_Book(models.Model):
    book_name = models.CharField(max_length=75)
    author = models.CharField(max_length=50)
    publishing_house = models.CharField(max_length=100)
    ISBN = models.PositiveIntegerField(
        validators=[
            MaxValueValidator(9999999999999),
            MinValueValidator(0000000000000)
        ]
    )
    Abstract = models.TextField()

    def __str__(self):
        return self.book_name

    class Meta:
        verbose_name_plural = "SEA_BOOKs"
        verbose_name = "SEA_BOOK"
