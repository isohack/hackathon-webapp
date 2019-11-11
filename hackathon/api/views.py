from rest_framework.filters import OrderingFilter
from rest_framework.pagination import LimitOffsetPagination

from hackathon.models import (ProblemStatement,
                              ProblemCategory,
                              HackathonTeam,
                              HackathonTiming,
                              HackathonEvent)
from .permissions import (
    IsAdminOrSuperUser,
    CustomOrIsAdminOrSuperUserPermission)

from hackathon.api.serializers import (ProblemCategorySerializer,
                                       ProblemStatementSerializer,
                                       HackathonTeamSerializer,
                                       HackathonEventSerializer)

from rest_framework import generics, mixins
from django.utils import timezone


class ProblemCategoryAPIView(generics.ListAPIView):
    serializer_class = ProblemCategorySerializer
    permission_classes = (IsAdminOrSuperUser,)
    # filter_backends = [OrderingFilter]
    # pagination_class = LimitOffsetPagination

    def get_queryset(self):
        hackathon_timing = HackathonTiming.objects.all()
        if hackathon_timing:
            category_start_time = hackathon_timing[0].category_start_time
            now = timezone.now()
            if now > category_start_time:
                return ProblemCategory.objects.all()


class HackathonEventAPIView(generics.ListAPIView):
    serializer_class = HackathonEventSerializer
    permission_classes = (IsAdminOrSuperUser,)
    # filter_backends = [OrderingFilter]
    # pagination_class = LimitOffsetPagination

    def get_queryset(self):
        return HackathonEvent.objects.all()
