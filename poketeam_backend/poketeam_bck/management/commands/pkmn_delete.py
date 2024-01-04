from django.core.management.base import BaseCommand
import os 
import django 


class Command(BaseCommand):
    help = 'delete all of the pokemon that are in the database currently'

    def handle(self, *args, **options):
        os.environ['PYTHONDONTWRITEBYTECODE'] = '1'
        
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "poketeam_backend.settings")
        django.setup()

        from poketeam_bck.models import Pokemon
        Pokemon.objects.all().delete()

        self.stdout.write(self.style.SUCCESS("all pokemon have been deleted"))
