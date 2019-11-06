from django.utils import timezone

from account.models import User
from django.utils.deprecation import MiddlewareMixin
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer


class UpdateLastActivityMiddleware(MiddlewareMixin):
    """
    Update last activity of any particular user based on calls and action
    """
    def process_view(self, request, view_func, view_args, view_kwargs):
        token = request.META.get('HTTP_AUTHORIZATION')
        if token:
            token = token.split(' ')[-1]
            try:
                valid_data = VerifyJSONWebTokenSerializer().validate({'token': token})
            except:
                return
            if valid_data and valid_data['user']:
                user = valid_data['user']
                User.objects.filter(pk=user.pk) \
                    .update(last_activity=timezone.now())
