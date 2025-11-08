from django import forms
from datetime import date

class habitForm(forms.Form):
    completed = forms.BooleanField(label="Completed")
    habit_name = forms.CharField(label="Habit Name", max_length=100)
    date = forms.DateField(initial=date.today())
    duration = forms.DurationField(label="Time of Activity")
