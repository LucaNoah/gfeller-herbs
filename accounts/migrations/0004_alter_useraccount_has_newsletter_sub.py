# Generated by Django 3.2 on 2023-03-13 20:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20230306_1828'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='has_newsletter_sub',
            field=models.BooleanField(default=False),
        ),
    ]