from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.

def index(request):
    template = loader.get_template('test1/index.html')
    context={"one":"two"}
    return HttpResponse(template.render(context, request))