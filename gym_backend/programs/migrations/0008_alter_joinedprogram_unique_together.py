# Generated by Django 5.1.5 on 2025-02-08 17:24

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('programs', '0007_joinedprogram_delete_enrollment'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='joinedprogram',
            unique_together={('user', 'program')},
        ),
    ]
