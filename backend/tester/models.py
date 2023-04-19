from django.db import models
from django.contrib.auth.models import User

# Session by user 
class UserSession(models.Model):
    user = models.ForeignKey(User, related_name='user_sessions',on_delete=models.CASCADE)
    start_time = models.DateTimeField(null=True, blank=True)
    end_time = models.DateTimeField(null=True, blank=True)    

    def get_duration(self):
        if self.end_time is not None:
            duration = self.end_time - self.start_time
            return duration.total_seconds() // 60
        else:
            return None

# For every button
class ButtonClick(models.Model):
    user = models.ForeignKey(User, related_name='button_clicks', on_delete=models.CASCADE)
    button_number = models.IntegerField()
    click_count = models.IntegerField()

# Regular User
class LandingPage(models.Model):
    tittle = models.TextField(default='tittle')
    logo = models.ImageField(upload_to='landing_page/', null=True, blank=True)
    description = models.TextField(default='description')    