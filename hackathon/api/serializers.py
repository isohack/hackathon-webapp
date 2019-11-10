from rest_framework import serializers

from hackathon.models import ProblemCategory, ProblemStatement, HackathonTeam


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
