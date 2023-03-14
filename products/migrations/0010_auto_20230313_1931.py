# Generated by Django 3.2 on 2023-03-13 19:31

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("products", "0009_alter_productreview_author"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="new_arrived",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="product",
            name="old_price",
            field=models.DecimalField(
                decimal_places=2, default=0, max_digits=6
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="product",
            name="on_sale",
            field=models.BooleanField(default=False),
        ),
    ]