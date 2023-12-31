from django.urls import path
from .views import NewBookAPIView, NewBookDetailAPIView, CommentAPIView, CommentDetailView
urlpatterns = [
    path('', NewBookAPIView.as_view(), name='new_book'),
    path('detail/<uuid:pk>', NewBookDetailAPIView.as_view(), name='new_book_detail'),
    path('comment', CommentAPIView.as_view(), name='comments'),
    path('comment/detail/<int:pk>',
         CommentDetailView.as_view(), name='comment_detail'),

]
