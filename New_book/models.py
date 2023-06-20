from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
import uuid
# Create your models here.


class New_Book(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False)
    NewBookName = models.CharField(max_length=150)
    author_book = models.CharField(max_length=100)
    publisher = models.CharField(max_length=100)
    ISBN = models.PositiveIntegerField(
        validators=[
            MaxValueValidator(9999999999999),
            MinValueValidator(0000000000000)
        ]
    )
    Abstract = models.TextField()

    def __str__(self):
        return self.NewBookName

    class Meta:
        verbose_name_plural = 'New_Books'
        verbose_name = 'New_book'
