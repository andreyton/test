from rest_framework import serializers

from django.contrib.auth.models import User, Group
 
from .models import UserSession, ButtonClick, LandingPage
 
class UserSessionSerializer(serializers.ModelSerializer):
    duration = serializers.SerializerMethodField()
    class Meta:
        model = UserSession
        fields = ('id', 'user', 'start_time', 'end_time', 'duration')

    def get_duration(self, obj):
        return obj.get_duration()

class ButtonClickSerializer(serializers.ModelSerializer):
    class Meta:
        model = ButtonClick
        fields = ('id', 'user','button_number','click_count')

class LandingPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = LandingPage
        fields = ('id', 'image', 'logo', 'description')

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name')

class UserDetail(serializers.ModelSerializer):
    groups = GroupSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('id', 'groups')
   
class UserSerializer(serializers.ModelSerializer):
    user_sessions = UserSessionSerializer(many=True, read_only=True, source='user_sessions.all')
    button_clicks = ButtonClickSerializer(many=True, read_only=True, source='button_clicks.all')

    class Meta:
        model = User
        fields = ('id', 'username', 'groups', 'user_sessions', 'button_clicks')

class LandingSerializer(serializers.ModelSerializer):
    class Meta:
        model = LandingPage
        fields = '__all__'
