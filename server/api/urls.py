from django.urls import path
from .views import TaskListAPIView

urlpatterns = [
    path('getTasks', TaskListAPIView.as_view(), name='task-list')
]