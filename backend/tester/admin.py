from django.contrib import admin
 
# import the model LandingPage, UserSession y ButtonClick
from .models import UserSession, ButtonClick, LandingPage
 
# create a class for the UserSession integration
class UserSessionAdmin(admin.ModelAdmin):
    list_display = ("user", "start_time", "end_time")

    # create a class for the LandingPage integration
class LandingPageAdmin(admin.ModelAdmin):
    list_display = ("tittle", "logo", "description")

# create a class for the ButtonClick integration
class ButtonClickAdmin(admin.ModelAdmin):
    list_display = ("user", "button_number", "click_count")

# register models and class
admin.site.register(UserSession, UserSessionAdmin)
admin.site.register(ButtonClick, ButtonClickAdmin)
admin.site.register(LandingPage, LandingPageAdmin)