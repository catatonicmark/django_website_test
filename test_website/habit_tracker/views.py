from django.shortcuts import render, redirect
from .forms import habitModelFormSet, initial_data
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
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
    if request.method == 'POST':
        return Response({"message": "Got some data!", "data": request.data})
    return Response({"message": "Hello, world!"}) 
