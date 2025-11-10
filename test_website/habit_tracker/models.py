from django.db import models

# Create your models here.
class habit(models.Model):
    completed = models.BooleanField()
    habit_name = models.CharField(max_length=100, on_delete=models.CASCADE)
    date = models.DateField()
    duration = models.DurationField(blank=True)
