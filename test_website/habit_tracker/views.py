from django.shortcuts import render, redirect
from .forms import habitModelFormSet, initial_data
from .models import habitModel


# Create your views here.

def get_habit(request):
    if request.method == 'POST':
        formset = habitModelFormSet(request.POST, request.FILES, initial=initial_data) 
        if formset.is_valid():
            formset.save()
            return redirect('/data/')
    else:
        formset = habitModelFormSet()

    return render(request, 'habit_tracker/tracker.html', {'formset': formset})
