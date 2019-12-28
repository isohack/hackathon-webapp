from django.urls import path, re_path

from .views import (ProblemCategoryAPIView, HackathonEventAPIView,
                    HackathonCommitVersion, HackathonLastUpdated,
                    HackathonAppStatus,ProblemCategoryClass,ProblemStatementClass,
                    Send_to_Email,HackathonTeamClass,send_mail_html)

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('release/version/', HackathonCommitVersion.as_view(), name='hackathon-version'),
    path('release/date/', HackathonLastUpdated.as_view(), name='hackathon-last-updated'),
    path('status/', HackathonAppStatus.as_view(), name='hackathon-app-status'),
    path('categories/', ProblemCategoryAPIView.as_view(), name='hackathon-problem-category'),
    path('events/', HackathonEventAPIView.as_view(), name='hackathon-event'),
    path('problem/category', ProblemCategoryClass.as_view(), name='hackathon-problem-categoryAPI'),
    path('problem/category/<category_id>', ProblemStatementClass.as_view(), name='hackathon-problem_statementAPI'),
    path('mail/', Send_to_Email),
    path('teams/', HackathonTeamClass.as_view(), name='hackathon-teams'),
    path('send_mail_html/', send_mail_html, name='hackathon-template'),

]
