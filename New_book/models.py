from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
import uuid
from django.conf import settings
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
    Cover = models.ImageField(upload_to="covers/", blank=True, null=True)
    Abstract = models.TextField()

    def __str__(self):
        return self.NewBookName

    class Meta:
        verbose_name_plural = 'New_Books'
        verbose_name = 'New_book'


class Comments(models.Model):
    article = models.ForeignKey(New_Book, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    text = models.TextField()

    def __str__(self):
        return f'{self.article} - {self.title}'
