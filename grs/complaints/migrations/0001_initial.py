# Generated by Django 3.2.4 on 2021-06-26 09:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Complaint',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('name', models.CharField(blank=True, max_length=255)),
                ('user_role', models.CharField(choices=[('M', 'Mentor'), ('T', 'Trainee')], default='T', max_length=1)),
                ('date', models.DateTimeField(auto_now=True)),
                ('complaint_for', models.CharField(choices=[('M', 'Management'), ('E', 'Education'), ('D', 'Deployment'), ('S', 'Salary'), ('G', 'General')], default='G', max_length=1)),
                ('complaint_to', models.CharField(choices=[('A', 'Admin'), ('M', 'Mentor')], default='M', max_length=1)),
                ('cohort', models.CharField(choices=[('P', 'Python'), ('J', 'Java'), ('R', 'React'), ('A', 'Android'), ('L', 'Linux'), ('C', 'Cybersecurity'), ('U', 'Unknown')], default='U', max_length=1)),
                ('level', models.CharField(choices=[('I', 'Individual'), ('G', 'General')], default='I', max_length=1)),
                ('description', models.TextField(max_length=500)),
                ('category', models.CharField(choices=[('A', 'Anonymous'), ('I', 'Identifiable')], default='I', max_length=1)),
                ('status', models.CharField(choices=[('P', 'Pending'), ('N', 'Need Clarification'), ('R', 'Resolved')], default='P', max_length=1)),
                ('resoultion', models.TextField(blank=True, max_length=500)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]