from django.urls import path
from .views import getBooks
from .views import BookAPIView
from .views import BookDetailAPIVIEW
urlpatterns = [
    path('', BookAPIView.as_view(), name='book_list'),
    path('detail/<int:pk>', BookDetailAPIVIEW.as_view(), name='book_detail'),
    path('test',  getBooks),
]
