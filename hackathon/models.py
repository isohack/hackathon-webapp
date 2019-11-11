from django.db import models
from account.models import User
import uuid


class ProblemCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.CharField(max_length=80)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


class ProblemStatement(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.ForeignKey(ProblemCategory, on_delete=models.CASCADE)
    statement = models.TextField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


class HackathonTeam(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    team_name = models.CharField(max_length=128)
    team_members = models.ManyToManyField(User)
    college_name = models.CharField(max_length=80)
    city = models.CharField(max_length=80)
    state = models.CharField(max_length=80)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.team_name


class HackathonTiming(models.Model):
    registration_time = models.DateTimeField(blank=True, null=True)
    registration_end_time = models.DateTimeField(blank=True, null=True)
    preparation_time = models.DateTimeField(blank=True, null=True)
    preparation_end_time = models.DateTimeField(blank=True, null=True)
    category_start_time = models.DateTimeField(blank=True, null=True)
    category_end_time = models.DateTimeField(blank=True, null=True)
    problem_start_time = models.DateTimeField(blank=True, null=True)
    problem_end_time = models.DateTimeField(blank=True, null=True)
    event_start_time = models.DateTimeField(blank=True, null=True)
    event_end_time = models.DateTimeField(blank=True, null=True)
    final_start_time = models.DateTimeField(blank=True, null=True)
    final_end_time = models.DateTimeField(blank=True, null=True)


class HackathonEvent(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    event_name = models.CharField(max_length=80)
    event_description = models.TextField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    location = models.CharField(max_length=80)
    created_at = models.DateTimeField(auto_now_add=True)
