from django.urls import path, re_path

from .views import (UserAPIView,
                    UserProfileAPIView,
                    OnlineUserAPIView)

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('user/', UserAPIView.as_view(), name='user-list'),
    path('login/', obtain_jwt_token, name='login'),
    re_path(r'user/(?P<pk>[0-9a-f-]+)/$', UserProfileAPIView.as_view(), name='profile'),
    path('online/', OnlineUserAPIView.as_view(), name='online')
]
