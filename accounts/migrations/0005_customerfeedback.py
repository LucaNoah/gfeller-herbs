# Generated by Django 3.2 on 2023-03-14 14:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("accounts", "0004_alter_useraccount_has_newsletter_sub"),
    ]

    operations = [
        migrations.CreateModel(
            name="CustomerFeedback",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "reason",
                    models.CharField(
                        choices=[
                            ("PR", "Products/Product Range"),
                            ("CH", "Order/Payment"),
                            ("ST", "Store Structure/Design"),
                            ("GE", "General Improvement Suggestions"),
                            ("OT", "Other"),
                        ],
                        default="GE",
                        max_length=2,
                    ),
                ),
                ("content", models.TextField()),
                ("date", models.DateTimeField(auto_now_add=True)),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="customer_feedback",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
