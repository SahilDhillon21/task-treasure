from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    credit = models.IntegerField(default=0, null=False, blank=False)
    description = models.TextField()
    sponsor_name = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.user.username

class Task(models.Model):
    title = models.CharField(max_length=200, null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    reward = models.IntegerField(null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    sponsor = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='tasks')

    def __str__(self) -> str:
        return self.title