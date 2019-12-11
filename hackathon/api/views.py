from rest_framework.filters import OrderingFilter
from rest_framework.pagination import LimitOffsetPagination
from django.http import HttpResponse, JsonResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from backend.settings import LATEST_COMMIT_VERSION, LATEST_COMMIT_DATE, app_status

from hackathon.models import (ProblemStatement,
                              ProblemCategory,
                              HackathonTeam,
                              HackathonTiming,
                              HackathonEvent)
from .permissions import (
    IsAdminOrSuperUser,
    )

from hackathon.api.serializers import (ProblemCategorySerializer,
                                       ProblemStatementSerializer,
                                       HackathonTeamSerializer,
                                       HackathonEventSerializer)

from rest_framework import generics, mixins
from django.utils import timezone


class HackathonCommitVersion(APIView):
    permission_classes = []

    def get(self, request):
        return Response({'version': LATEST_COMMIT_VERSION})


class HackathonLastUpdated(APIView):
    permission_classes = []

    def get(self, request):
        return Response({'date': LATEST_COMMIT_DATE})


class HackathonAppStatus(APIView):
    permission_classes = []

    def get(self, request):
        return Response({'status': app_status})


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


class ProblemCategoryClass(generics.RetrieveUpdateDestroyAPIView):


    lookup_field = 'pk'
    permission_classes = (IsAdminOrSuperUser,)
    serializer_class = ProblemCategorySerializer

    def get_queryset(self):
        return ProblemCategory.objects.all()



    # def get_problem_category(request):
    #     category = ProblemCategory.objects.all().values('id','category','description','created_at')
    #     listed = list(category)
    #     return JsonResponse(listed, safe=False)





class ProblemStatementClass(generics.RetrieveUpdateDestroyAPIView):

    lookup_field = 'category_id'
    permission_classes = (IsAdminOrSuperUser,)
    serializer_class = ProblemCategorySerializer

    def get_queryset(self,):
        category_id = self.kwargs['category_id']
        return ProblemCategory.objects.filter(category=category_id)

    # def get_problem_statements(request, category_id):
    #     statements = ProblemStatement.objects.filter(category=category_id).values("id","statement","description","created_at","category_id")
    #     listed = list(statements)
    #     return JsonResponse(listed, safe=False)


