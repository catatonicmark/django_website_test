from django import forms
from .models import habitModel
from django.forms import modelformset_factory
from datetime import date

class Html5DateInput(forms.DateInput):
    input_type = 'date'

habitModelFormSet = modelformset_factory(
    habitModel,
    fields='__all__',
    widgets={
        'date': Html5DateInput()
    }
)

initial_data = [
    {'date': date.today()}
]
