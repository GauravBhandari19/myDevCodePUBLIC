from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

def detail(request, question_id,question1_id):
    return HttpResponse("You're looking at question %s." % question_id)

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)

def index22(request):
    template = loader.get_template('test1/index.html')
    context = {
        'latest_question_list': 'BLA BLA BLA LIST',
    }
    #latest_question_list = "BLA BLA"
    #output = ', '.join([q.question_text for q in latest_question_list])
    output = 'BLA BLA'
    return HttpResponse(template.render(context, request))

def index(request):
    context = {'Bla': 'BLA BLA BLA'}
    return render(request, 'test1/index.html', context)

def index1(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)