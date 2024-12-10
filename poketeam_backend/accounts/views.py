from django.contrib.auth import login, authenticate, logout 
from django.contrib.auth.models import User
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.middleware.csrf import get_token

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
            return Response({'name':f'{name}',
                             'request_session': request.session,
                             'is_authenticated': request.user.is_authenticated,
                             'is_anonymous': request.user.is_anonymous,
                             }
                             , status=200)
        else:
            return Response({'response':'False'})


# Sign up 
@method_decorator(csrf_protect, name='dispatch')
class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data 

        username = data['username']
        password = data['password']
        repassword = data['repassword']

        if password == repassword:
            if User.objects.filter(username=username).exists():
                return Response({'response': 'This username already exists'})
            else:
                if len(password) < 6:
                    return Response({'response':'Password must have atleast 6 characters'})
                else:
                    user = User.objects.create_user(username=username, password=password)
                    user.save()

                    user = User.objects.get(username=username)

                    user_profile = UserProfileModel(user=user)
                    user_profile.save()

                    return Response({'response': 'user was created successfully!'})

        else:
            return Response({'response': 'Passwords do not match'})



# Receive CSRF Token
@method_decorator(ensure_csrf_cookie, name='dispatch')       
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        csrf_token = get_token(request)

        return Response({'success': 'CSRF Token was set',
                         'token': csrf_token})
    

# Login view 
@method_decorator(csrf_protect, name='dispatch') 
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
                return Response({'response': 'Succeeded'})
            except Exception as e:
                print(f'Something went wrong authenticating {username}', e)
        else:
            return Response({'response': 'Failed'})
        

# Logout View 
class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        logout(request)
        return Response({'success':'User logged out'})