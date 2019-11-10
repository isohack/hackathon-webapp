from rest_framework.filters import OrderingFilter
from rest_framework.pagination import LimitOffsetPagination

from hackathon.models import ProblemStatement, ProblemCategory, HackathonTeam
from .permissions import (
    IsAdminOrSuperUser,
    CustomOrIsAdminOrSuperUserPermission)

from hackathon.api.serializers import (ProblemCategorySerializer,
                                       ProblemStatementSerializer,
                                       HackathonTeamSerializer)

from rest_framework import generics, mixins


class ProblemCategoryAPIView(generics.ListAPIView):
    serializer_class = ProblemCategorySerializer
    permission_classes = (IsAdminOrSuperUser,)
    # filter_backends = [OrderingFilter]
    # pagination_class = LimitOffsetPagination

    def get_queryset(self):
        return ProblemCategory.objects.all()
