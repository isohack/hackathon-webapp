from django.urls import path, re_path

from .views import (ProblemCategoryAPIView, HackathonEventAPIView,
                    HackathonCommitVersion, HackathonLastUpdated)

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('version/', HackathonCommitVersion.as_view(), name='hackathon-version'),
    path('version/timestamp/', HackathonLastUpdated.as_view(), name='hackathon-last-updated'),
    path('categories/', ProblemCategoryAPIView.as_view(), name='hackathon-problem-category'),
    path('events/', HackathonEventAPIView.as_view(), name='hackathon-event'),
]
