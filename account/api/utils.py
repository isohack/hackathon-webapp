from .serializers import UserSerializer


# We want token as response with Primary key so that more info can be fetched
def jwt_response_payload_handler(token, user=None, request=None):
    user = UserSerializer(user, context={'request': request}).data
    return {
        'token': token,
        'user_id': user['pk'],
    }
