from rest_framework.filters import OrderingFilter
from rest_framework.pagination import LimitOffsetPagination
from django.http import HttpResponse, JsonResponse
from django.core.mail import send_mail
from email.message import EmailMessage
import smtplib
from django.conf import settings

from jinja2 import Template ,Environment, FileSystemLoader
from rest_framework.views import APIView
from rest_framework.response import Response
from backend.settings import LATEST_COMMIT_VERSION, LATEST_COMMIT_DATE, app_status

from hackathon.models import (ProblemStatement,
                              ProblemCategory,
                              HackathonTeam,
                              HackathonTiming,
                              HackathonEvent,
                              HackathonTeamProgress)
from .permissions import (
    IsAdminOrSuperUser,
    )

from hackathon.api.serializers import (ProblemCategorySerializer,
                                       ProblemStatementSerializer,
                                       HackathonTeamSerializer,
                                       HackathonEventSerializer,
									   HackathonTeamProgressSerializer)

from rest_framework import generics, mixins
from django.utils import timezone
import json


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


class HackathonTeamProgressAPIView(generics.ListAPIView):
    serializer_class = HackathonTeamProgressSerializer
    permission_classes = (IsAdminOrSuperUser,)
    # filter_backends = [OrderingFilter]
    # pagination_class = LimitOffsetPagination

    def get_queryset(self):
        return HackathonTeamProgress.objects.all()

class ProblemCategoryClass(generics.ListAPIView):
    permission_classes = []
    serializer_class = ProblemCategorySerializer

    def get_queryset(self):
        return ProblemCategory.objects.all()


class ProblemStatementClass(generics.ListAPIView):
    permission_classes = []
    serializer_class = ProblemStatementSerializer

    def get_queryset(self,):
        category_id = self.kwargs['category_id']
        print(category_id)
        return ProblemStatement.objects.filter(category=category_id)


def Send_to_Email(request):
    email_to = "harshzf2@gmail.com"
    subject = 'Thank you for registering to our site'
    message = ' message'
    email_from = "taacropolis@gmail.com"
    recipient_list = [email_to]

    send_mail(subject, message, email_from, recipient_list)
    print("mail sent")
    response = json.dumps([{'message': 'mail sent'}])
    return HttpResponse(response, content_type='text/json')


# this will return all the team data
class HackathonTeamClass(generics.ListAPIView):
    permission_classes = []
    serializer_class = HackathonTeamSerializer

    def get_queryset(self):
        return HackathonTeam.objects.all()





def send_mail_html(request):
    payload = json.loads(request.body)
    data = {}
    data['name']="Harsh"
    file_loader = FileSystemLoader("templates")
    env = Environment(loader=file_loader)
    template = env.get_template("email_template.html")

    msg = EmailMessage()
    msg['From'] = settings.EMAIL_HOST_USER

    msg['Subject'] = "IsoHack mail"
    msg['To'] = "harshzf2@gmail.com"
    msg.set_content("Thank you for shopping with us")


    html_output = template.render(data=data)
    msg.add_alternative(html_output,subtype='html')


    with smtplib.SMTP_SSL('smtp.gmail.com',465) as smtp:
        smtp.login(settings.EMAIL_HOST_USER,settings.EMAIL_HOST_PASSWORD)
        smtp.send_message(msg)

    return HttpResponse(html_output)



