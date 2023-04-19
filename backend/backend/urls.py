from django.contrib import admin

# add include to the path
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

from rest_framework.authtoken.views import ObtainAuthToken
from django.contrib.auth.views import LoginView

# import views from tester
from tester import views
 
# import routers from the REST framework
# it is necessary for routing
from rest_framework import routers
 
# create a router object
router = routers.DefaultRouter()
 
# register the router
router.register(r'sessions', views.UserSessionView, 'user-session')
router.register(r'button-clicks', views.ButtonClickView, 'button-clicks')
router.register(r'users', views.Users, 'users')
router.register(r'detail', views.UserDetail, 'detail')
router.register(r'landing', views.LandingView, 'landing')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', ObtainAuthToken.as_view(), name='api_token_auth'),
    path('login/', LoginView.as_view(), name='login'),
    path('api/', include(router.urls)),
    path('create_users/', views.createUsersview, name='create_users'),    
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)