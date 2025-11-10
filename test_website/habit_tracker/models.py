from django.db import models
from django.forms import ModelForm

# Create your models here.
class habitModel(models.Model):
    completed = models.BooleanField(blank=True)
    habit_name = models.CharField(max_length=100)
    date = models.DateField()
    duration = models.DurationField(blank=True)

