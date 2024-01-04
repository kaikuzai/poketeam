from django.core.management.base import BaseCommand
import os 
import django 
import requests


class Command(BaseCommand):
    help = 'add all of the pokemon types to the type model'

    def handle(self, *args, **options):
        os.environ['PYTHONDONTWRITEBYTECODE'] = '1'
        
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "poketeam_backend.settings")
        django.setup()

        BASE_URL = 'https://pokeapi.co/api/v2/' 
        TYPES = 'type/'
        
        data = requests.get(BASE_URL + TYPES).json()['results']

        self.stdout.write(self.style.SUCCESS("connection has been made"))

        from poketeam_bck.models import PokemonTypes

        for types in data: 
            type_dict = {'type_name': types['name']}
            type_response = requests.get(types['url']).json()
            type_dict.update({'double_damage_from':[i['name'] for i in type_response['damage_relations']['double_damage_from']]})
            type_dict.update({'double_damage_to': [i['name'] for i in type_response['damage_relations']['double_damage_to']]})
            type_dict.update({'half_damage_from': [i['name'] for i in type_response['damage_relations']['half_damage_from']]})
            type_dict.update({'half_damage_to': [i['name'] for i in type_response['damage_relations']['half_damage_to']]})
            type_dict.update({'no_damage_from': [i['name'] for i in type_response['damage_relations']['no_damage_from']]})
            type_dict.update({'no_damage_to': [i['name'] for i in type_response['damage_relations']['no_damage_to']]})
            type_dict.update({'pokemon_in_type': [i['pokemon']['name'] for i in type_response['pokemon']]}) 

            new_type = PokemonTypes(** type_dict)
            new_type.save()

            self.stdout.write(self.style.SUCCESS(f"{type_dict['type_name']} has been added"))

        
