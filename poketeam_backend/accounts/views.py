from django.contrib.auth import login, authenticate, logout 
from django.contrib.auth.models import User
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect

from rest_framework import permissions 
from rest_framework.views import APIView
from rest_framework.response import Response

from user_profiles.models import UserProfileModel

# Check if user is authenticated
@method_decorator(csrf_protect, name='dispatch') 
class CheckAuthenticatedView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        isAuthenticated = User.is_authenticated
        name = request.user 

        if isAuthenticated:
            return Response({'isAuthenticated': f'True as {name}'})
        else:
            return Response({'isAuthenticated':'False'})


# Sign up 
@method_decorator(csrf_protect, name='dispatch')
class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data 

        username = data['username']
        password = data['password']
        repassword = data['re-password']

        if password == repassword:
            if User.objects.filter(username=username).exists():
                return Response({'error': 'This username already exists'})
            else:
                if len(password) < 6:
                    return Response({'error':'Password must have atleast 6 characters'})
                else:
                    user = User.objects.create_user(username=username, password=password)
                    user.save()

                    user = User.objects.get(username=username)

                    user_profile = UserProfileModel(user=user)
                    user_profile.save()

                    return Response({'success': 'user was created successfully!'})

        else:
            return Response({'error': 'Passwords do not match'})



# Receive CSRF Token
@method_decorator(ensure_csrf_cookie, name='dispatch')       
class GetCSFRToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):

        return Response({'success': 'CSRF Token was set'})
    

# Login view 
# @method_decorator(csrf_protect, name='dispatch') // fix later 
class LoginView(APIView):
    permission_classes = [permissions.AllowAny]
    
    def post(self, request, format=None):
        data = self.request.data

        username = data['username']
        password = data['password']

        user = authenticate(username=username, password=password)

        print(user)

        if user is not None:
            try:
                login(request, user)
                return Response({'success': f'{user.username} is logged in'})
            except Exception as e:
                print(f'Something went wrong authenticating {username}', e)
        else:
            return Response({'error': 'Failed authentication'})
        

# Logout View 
class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        logout(request)
        return Response({'success':'User logged out'})