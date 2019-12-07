from django.urls import path, re_path

from .views import (ProblemCategoryAPIView, HackathonEventAPIView,
                    HackathonCommitVersion, HackathonLastUpdated,
                    HackathonAppStatus,ProblemCategoryClass)

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('release/version/', HackathonCommitVersion.as_view(), name='hackathon-version'),
    path('release/date/', HackathonLastUpdated.as_view(), name='hackathon-last-updated'),
    path('status/', HackathonAppStatus.as_view(), name='hackathon-app-status'),
    path('categories/', ProblemCategoryAPIView.as_view(), name='hackathon-problem-category'),
    path('events/', HackathonEventAPIView.as_view(), name='hackathon-event'),
    path('problem/category', ProblemCategoryClass.get_problem_category, name='hackathon-event'),
    path('problem/category/<category_id>', ProblemCategoryClass.get_problem_statements, name='hackathon-event'),
]
