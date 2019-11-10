from django.urls import path, re_path

from .views import (ProblemCategoryAPIView,)

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('categories/', ProblemCategoryAPIView.as_view(), name='hackathon-problem-category'),
]
