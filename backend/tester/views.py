from django.shortcuts import render

from rest_framework import viewsets, status
from django.utils import timezone
from django.http import JsonResponse

from django.contrib.auth.models import User, Group
from django.contrib.auth.hashers import make_password

from rest_framework.response import Response

from .serializers import UserSessionSerializer, ButtonClickSerializer, UserSerializer, UserDetail, LandingSerializer

from .models import UserSession, ButtonClick, LandingPage

class UserSessionView(viewsets.ModelViewSet):
    serializer_class = UserSessionSerializer
    queryset = UserSession.objects.all()

    def patch(self, request, *args, **kwargs):
        user_id = request.user.id
        time = request.query_params.get('time')

        try:
            session = UserSession.objects.get(user=user_id)
            if time == '1':
                session.end_time = timezone.now()
            elif time == '0':
                session.start_time = timezone.now()
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
            session.save()
            return Response(status=status.HTTP_200_OK)
        except UserSession.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class ButtonClickView(viewsets.ModelViewSet):
    serializer_class = ButtonClickSerializer
    queryset = ButtonClick.objects.all()

    def patch(self, request, *args, **kwargs):
        user_id = request.user.id
        button_number = request.query_params.get('button_number')

        try:
            button_click = ButtonClick.objects.get(
                user=user_id, button_number=button_number)
            button_click.click_count += 1
            button_click.save()
            return Response(status=status.HTTP_200_OK)
        except ButtonClick.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class Users(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.filter(groups__id=2) # regular
    

class UserDetail(viewsets.ModelViewSet):
    serializer_class = UserDetail
    queryset = User.objects.all()
    lookup_field = 'username'


class LandingView(viewsets.ModelViewSet):
    serializer_class = LandingSerializer
    queryset = LandingPage.objects.all()

# To create automatic users
def createUsersview(request):
    regular_group = Group.objects.get(name='regular')

    for i in range(1, 36):
        username = f'user{i}'
        password = make_password(f'password{i}')
        user = User.objects.create(username=username, password=password)
        user.groups.add(regular_group)

        start_time = timezone.now()
        end_time = start_time + timezone.timedelta(hours=i)
        UserSession.objects.create(user=user, start_time=start_time, end_time=end_time)
        ButtonClick.objects.create(user=user, button_number=1, click_count=i)
        ButtonClick.objects.create(user=user, button_number=2, click_count=i)

    response_data = {'message': 'Users created successfully.'}
    return JsonResponse(response_data)
