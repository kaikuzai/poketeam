"""poketeam_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path, include, re_path
from poketeam_bck import views 

urlpatterns = [
    path('admin/', admin.site.urls),

    # API endpoints 
    path('pokemon/', views.getAllPokemon, name='function-all-Pokemon'),
    path('pokemon/<int:pokemon_id>', views.getPokemon, name='function-specific-Pokemon'),
    path('pokemon-types/', views.getAllTypes, name='function-all-types'),
    path('pokemon-types/<str:type_name>', views.getType, name='function-specific-type'),
    path('api/<int:pokemon_id>/', views.PokemonModelViewset.as_view({'get':'retrieve'}), name='pokemon-detail'),

    # Authentication and Authorization
    path('api-auth/', include('rest_framework.urls')),
    path('accounts/', include('accounts.urls')),
    path('profiles/', include('user_profiles.urls')),
]

