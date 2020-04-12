from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def index1(request):
    return HttpResponse("Hello, world. You're at the polls index !!!!!!.")