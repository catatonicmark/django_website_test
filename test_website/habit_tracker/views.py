from django.shortcuts import render, redirect
from django.forms import formset_factory
from .forms import habitForm


# Create your views here.

def get_habit(request):
    habitFormSet = formset_factory(habitForm)
    if request.method == 'POST':
        formset = habitFormSet(request.POST, request.FILES) 
        if formset.is_valid():
            return redirect('/data/')
    else:
        formset = habitFormSet()

    return render(request, 'habit_tracker/tracker.html', {'formset': formset})
