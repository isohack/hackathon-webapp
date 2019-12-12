from django.db import models
from account.models import User
import uuid


class ProblemCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.CharField(max_length=80)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


class ProblemDomain(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=127)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class ProblemStatement(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.ForeignKey(ProblemCategory, on_delete=models.CASCADE)
    statement = models.TextField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    domain = models.ManyToManyField(ProblemDomain)


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


<<<<<<< HEAD
class HackathonTeamProgress(models.Model):
	team_name = models.TextField(primary_key=True, null=False)	
	arrival_time = models.DateTimeField() 
	team_number = models.IntegerField(unique=True, null=True) 
	is_kit_received = models.BooleanField(default=False) 
	problem_statement = models.ForeignKey(ProblemStatement, on_delete=models.CASCADE, null=True)
	problem_statement_select_time = models.DateTimeField(null=True) 
	project_name = models.TextField(null=True) 
	is_repo_private = models.BooleanField()
	tech_stack = models.TextField() 
	first_midnight_snack_status = models.BooleanField()
	first_breakfast_status = models.BooleanField()
	first_lunch_status = models.BooleanField()
	first_dinner_status = models.BooleanField()
	second_midnidht_snack_status = models.BooleanField()
	second_breakfast_status = models.BooleanField()
	second_lunch_status = models.BooleanField()
	second_dinner_status = models.BooleanField()
	drinks_count = models.IntegerField()
	day_one_evaluation_one = models.FloatField()
	day_one_evaluation_two = models.FloatField()
	day_two_evaluation_one = models.FloatField()
	day_two_evaluation_two = models.FloatField()
	#break_time_in_minutes = #sleep time #to be discussed
	#final_position = #top 15 or top 20 #to be 
	#review_rating = #most probably separate model
	created_at = models.DateTimeField(auto_now_add=True) 
	updated_at = models.DateTimeField(auto_now_add=True) 
=======
>>>>>>> c3ab826fd1eaec98a219b8838c3d80bd226576c7
