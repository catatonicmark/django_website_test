from django.shortcuts import render, redirect

from .forms import habitForm

# Create your views here.

def tracker(request):
    return render(request, 'habit_tracker/tracker.html')

def get_habit(request):
    if request.method == 'POST':
        form = habitForm(request.POST)
        if form.is_valid():
            return HttpResponseRedirect('/data/')
    else:
        form = habitForm()

    return render(request, 'habit_tracker/tracker.html', {'form': form})
