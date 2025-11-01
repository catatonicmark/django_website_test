from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    context = {'message': 'Do hard things'}
    return render(request, 'testapp/test_template.html', context)
