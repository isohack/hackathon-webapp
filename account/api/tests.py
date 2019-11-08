from rest_framework.reverse import reverse as api_reverse
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from rest_framework import status

User = get_user_model()


# TODO: Create Test for Update user profile
class UserTestCase(APITestCase):
    admin_login = {
        'email': 'admin@gmail.com',
        'password': 'randompassword',
    }
    participant_login = {
        'email': 'participant@gmail.com',
        'password': 'randompassword',
    }

    def setUp(self):
        user_obj1 = User(email=self.admin_login['email'], is_admin=True)
        user_obj1.set_password('randompassword')
        user_obj2 = User(email=self.participant_login['email'])
        user_obj2.set_password('randompassword')
        user_obj1.save()
        user_obj2.save()

    def test_user_count(self):
        user_count = User.objects.count()
        self.assertEqual(user_count, 2)

    # def get_user_token(self, data):
    #
    #     url = api_reverse("api-accounts:login")
    #     response = self.client.post(url, data)
    #
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     return response.data.get('token')
