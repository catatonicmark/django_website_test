from django.shortcuts import render, redirect
from django.template import loader
from django.http import HttpResponse, JsonResponse
from django.db.models import Count, F, Sum, Avg
from django.db.models.functions import ExtractYear, ExtractMonth, ExtractDay

from .forms import habitModelFormSet, initial_data
from .models import habitModel

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

# Create your views here.

def get_habit(request):
    if request.method == 'POST':
        formset = habitModelFormSet(request.POST, request.FILES, initial=initial_data) 
        if formset.is_valid():
            formset.save()
            return redirect('data/')
    else:
        formset = habitModelFormSet()

    return render(request, 'habit_tracker/tracker.html', {'formset': formset})

@api_view()
@permission_classes([AllowAny]) # this allows Any User to access data, so this should just be used for testing purposes. 
def data(request):
    habits = habitModel.objects.all().values()
    template = loader.get_template('habit_tracker/habit_view.html')
    context = {
        'habits': habits
    }
    return HttpResponse(template.render(context, request))

def get_filter_options(request):
    habits = habitModel.objects.values_list('habit_name', flat=True).distinct() 

    return JsonResponse({
        "habits": list(habits),
    })
