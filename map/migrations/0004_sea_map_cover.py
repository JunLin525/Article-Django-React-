# Generated by Django 4.2 on 2023-06-24 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0003_alter_sea_map_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='sea_map',
            name='cover',
            field=models.ImageField(blank=True, upload_to='covers/'),
        ),
    ]
