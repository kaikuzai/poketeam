from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework import generics 
from .models import Pokemon, PokemonTypes
from rest_framework.response import Response
from .serializer import PokemonSerializer,  TypeSerializer
from rest_framework.decorators import api_view


# Create your views here
class PokemonDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer

class PokemonModelViewset(ModelViewSet):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer 
    lookup_field = 'pokemon_id'


# Function based views

@api_view(['GET'])
def getAllPokemon(request):
    response = PokemonSerializer(Pokemon.objects.all(), many=True)
    return Response(response.data)


@api_view(['GET'])
def getPokemon(request, pokemon_id):
    response = PokemonSerializer(Pokemon.objects.get(pokemon_id=pokemon_id), many=False)
    return Response(response.data)


@api_view(['GET'])
def getAllTypes(reqeust):
    response = TypeSerializer(PokemonTypes.objects.all(), many=True)
    return Response(response.data)

@api_view(['GET'])
def getType(request, type_name):
    response = TypeSerializer(PokemonTypes.objects.get(type_name=type_name), many=False)
    return Response(response.data)