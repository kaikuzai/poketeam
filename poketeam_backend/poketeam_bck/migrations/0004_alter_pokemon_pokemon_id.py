# Generated by Django 4.2.8 on 2023-12-25 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('poketeam_bck', '0003_alter_pokemon_pokemon_types'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pokemon',
            name='pokemon_id',
            field=models.IntegerField(unique=True),
        ),
    ]
