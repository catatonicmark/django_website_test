from django import forms
from datetime import date

class Html5DateInput(forms.DateInput):
    input_type = 'date'

class habitForm(forms.Form):
    completed = forms.BooleanField(label="Completed", required=False)
    habit_name = forms.CharField(label="Habit Name", max_length=100)
    date = forms.DateField(widget=Html5DateInput, initial=date.today())
    duration = forms.DurationField(label="Time of Activity")
