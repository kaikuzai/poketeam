from rest_framework import serializers
from .models import Pokemon, PokemonTypes

class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon 
        fields = ['pokemon_name', 'pokemon_id', 'pokemon_abilities', 'pokemon_types', 'pokemon_url']

class TypeSerializer(serializers.ModelSerializer):
    class Meta: 
        model = PokemonTypes
        fields = '__all__'