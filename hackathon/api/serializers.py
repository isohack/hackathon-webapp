from rest_framework import serializers

from hackathon.models import ProblemCategory, ProblemStatement, HackathonTeam, HackathonEvent, HackathonTeamProgress


class ProblemCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProblemCategory
        fields = [
            'id',
            'category',
            'description',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']


class ProblemStatementSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProblemStatement
        fields = [
            'id',
            'category',
            'statement',
            'description'
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']


class HackathonTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = HackathonTeam
        fields = [
            'id',
            'team_name',
            'team_members',
            'college_name',
            'city',
            'state',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']


class HackathonEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = HackathonEvent
        fields = [
            'id',
            'event_name',
            'event_description',
            'start_time',
            'end_time',
            'location',
            'created_at'
        ]
        read_only_fields = ['id', 'created_at']

class HackathonTeamProgressSerializer(serializers.ModelSerializer):
	class Meta:
		model = HackathonTeamProgress
		fields = [
            'team_name',	
			'arrival_time', 
			'team_number', 
			'is_kit_received',
			'problem_statement',
			'problem_statement_select_time'
			'project_name', 
			'is_repo_private',
			'tech_stack', 
			'first_midnight_snack_status',
			'first_breakfast_status',
			'first_lunch_status',
			'first_dinner_status',
			'second_midnidht_snack_status',
			'second_breakfast_status',
			'second_lunch_status',
			'second_dinner_status',
			'drinks_count',
			'day_one_evaluation_one',
			'day_one_evaluation_two',
			'day_two_evaluation_one',
			'day_two_evaluation_two',
			#break_time_in_minutes = #sleep time #to be discussed
			#final_position = #top 15 or top 20 #to be 
			#review_rating = #most probably separate model
			'created_at',  
			'updated_at'
        ]
		read_only_fields = ['team_name', 'created_at', 'updated_at', 'problem_statement']