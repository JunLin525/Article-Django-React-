from django.urls import path
from .views import NewBookAPIView, NewBookDetailAPIView, CommentAPIView
urlpatterns = [
    path('', NewBookAPIView.as_view(), name='new_book'),
    path('detail/<uuid:pk>', NewBookDetailAPIView.as_view(), name='new_book_detail'),
    path('comment', CommentAPIView.as_view(), name='comment')
]
