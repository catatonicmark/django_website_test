from django.db import models
from django.forms import ModelForm

# Create your models here.
class habitModel(models.Model):
    completed = models.BooleanField()
    habit_name = models.CharField(max_length=100, on_delete=models.CASCADE)
    date = models.DateField()
    duration = models.DurationField(blank=True)

class habitForm(ModelForm):
    class Meta:
        model = habitModel
        fields = ["completed", "habit_name", "date", "duration"]
