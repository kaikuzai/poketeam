from django.db import models
from django.contrib.auth.models import User


# User profile model 
class UserProfileModel(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    trainer_status = models.CharField(max_length=255, default='trainer')
    pokemon_teams_created = models.IntegerField(default=0 )
    city = models.CharField(max_length=255, default='Pallet Town')

    def __str__(self):
        return self.user.username
