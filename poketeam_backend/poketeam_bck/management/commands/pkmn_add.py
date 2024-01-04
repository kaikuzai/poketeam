import os 
import django
import requests 
from django.core.management.base import BaseCommand 
from django.db import models 
from django.contrib.postgres.fields import ArrayField
from poketeam_bck.models import Pokemon 

class Command(BaseCommand): 
    help = 'import first generation pokemon'


    def handle(self, *args, **options):
        os.environ['PYTHONDONTWRITEBYTECODE'] = '1'

        os.environ.setdefault("DJANGO_SETTINGS_MODULE","poketeam_backend.settings")
        django.setup()
        
        BASE_URL = 'https://pokeapi.co/api/v2/'
        POKEMON = 'pokemon/'
        GEN_1 = 151 

        data = requests.get(BASE_URL + POKEMON + f'?limit={GEN_1}').json()['results']

        self.stdout.write(self.style.SUCCESS("api connection completed"))

        for index in data:
            pokemon_url = index['url']
            pokemon_data = requests.get(pokemon_url).json()

            pokemon_object = {
            'pokemon_id': pokemon_data['id'],
            'pokemon_name':pokemon_data['name'],
            'pokemon_abilities': [listed_abilities['ability']['name']for listed_abilities in pokemon_data['abilities']],
            'pokemon_types': [listed_types['type']['name'] for listed_types in pokemon_data['types']],
            'pokemon_url': pokemon_data['sprites']['other']['official-artwork']['front_default'],
            }

            new_pokemon = Pokemon(**pokemon_object)
            new_pokemon.save()

            self.stdout.write(self.style.SUCCESS(f"{pokemon_object['pokemon_name']} has been added!"))
