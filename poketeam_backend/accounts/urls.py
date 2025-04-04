from django.urls import path 
from .views import (
                   LoginView,
                   LogoutView,
                   SignupView, 
                   GetCSRFToken,
                   CheckAuthenticatedView,
                   )

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='csrf cookie'),
    path('register/', SignupView.as_view(), name='register'),
    path('csrf-cookie/', GetCSRFToken.as_view(), name='csrf cookie'),
    path('authenticated/', CheckAuthenticatedView.as_view(), name='authenticated'),
]