from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.


class Pokemon(models.Model):

    pokemon_id = models.IntegerField(null=False, blank=False, unique=True)
    pokemon_name = models.CharField(max_length = 20, null=False, blank=False)
    pokemon_abilities = ArrayField((models.CharField(max_length=15)), blank=True, null=True)
    pokemon_types = ArrayField((models.CharField(max_length=15)), default=list , blank=True, null=True)
    pokemon_url = models.URLField(max_length = 300, default='')

    def __str__(self) -> str:
        return self.pokemon_name 
    
class PokemonTypes(models.Model):
    type_name = models.CharField(max_length = 30, null=False, blank=False)
    double_damage_from = ArrayField((models.CharField(max_length=40)), default=list, blank=True, null=True)
    double_damage_to = ArrayField((models.CharField(max_length=40)), default=list, blank=True, null=True)
    half_damage_from = ArrayField((models.CharField(max_length=40)), default=list, blank=True, null=True)
    half_damage_to = ArrayField((models.CharField(max_length=40)), default=list, blank=True, null=True)
    no_damage_from = ArrayField((models.CharField(max_length=40)), default=list, blank=True, null=True)
    no_damage_to = ArrayField((models.CharField(max_length=40)), default=list, blank=True, null=True)
    pokemon_in_type = ArrayField((models.CharField(max_length=40)), default=list, blank=True, null=True)

    def __str__(self) -> str:
        return self.type_name