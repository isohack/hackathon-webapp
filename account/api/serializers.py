from rest_framework import serializers
from django.contrib.auth.hashers import make_password

from account.models import User


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'pk',
            'email',
            'phone_number',
            'first_name',
            'last_name',
            'gender',
            'date_joined',
            'avatar',
        ]
        read_only_fields = ['pk', 'email', 'date_joined']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'pk',
            'email',
            'phone_number',
            'first_name',
            'last_name',
            'gender',
            'last_activity',
            'date_joined',
            'avatar',
            'password',
        ]
        extra_kwargs = {'password': {'write_only': True}}
        read_only_fields = ['pk', 'date_joined']

    def validate_email(self, value):
        qs = User.objects.filter(email__iexact=value)
        if qs.exists():
            raise serializers.ValidationError("Email should be unique")
        return value

    # TODO: Finalize phone number structure
    def validate_phone_number(self, value):
        if value[0] == '+':
            value = value[1:]
        if 8 <= len(value) <= 10:
            return value

    # TODO: Validate password based on numbers, special characters, uniqueness
    def validate_password(self, value: str) -> str:
        if len(value) < 7:
            raise serializers.ValidationError("Password Length should be greater than 8")
        else:
            return make_password(value)
