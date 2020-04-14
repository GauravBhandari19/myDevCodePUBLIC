# Install Django
```python
python -m pip install Django
```

# Create your first Django Project
```python
django-admin startproject mysite
```

## Directory Structure
```
mysite/ -->Root Directory, can be any name, we got this name while creating project
    manage.py -->
    mysite/ --> This Directory contains the actual Python Package
        __init__.py --> This tells Python that the folder is a Python Package
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

## Start Django Server (You have to be in directory where manage.py is. 8111 in the command is port number)
```python
 python manage.py runserver 8111
```

## Create new App, Poll, in the python project
```python
python manage.py startapp polls
```

## Create Database Table (Database info in Settings.py, look for 'DATABASES = {')
```python
python manage.py migrate
```

## Create Superuser Admin User
```python
python manage.py createsuperuser
```

## Login to Admin (Go to the below URL in your browser)
```python
http://127.0.0.1:8111/admin/
```

## How components are linked in Python

![Semantic description of image](overviewModel.svg "Image Title")


# Some Commands and code reference

## How to load an HTML (The template should be in templates folder of your app)
```python
from django.http import HttpResponse
from django.template import loader

def index(request):
    template = loader.get_template('test1/index.html')
    context = {
        'Bla': 'BLA BLA BLA LIST',
    }
    output = 'BLA BLA'
    return HttpResponse(template.render(context, request))
```

## Another way to load an HTML Template

```python
from django.shortcuts import render

def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'Bla': 'BLA BLA BLA'}
    return render(request, 'test1/index.html', context)
```

## Way to add CSS (Should be added under static folder in the app). 
```
Note: You should restart the server for static files to load. Once a static file is loaded and change in CSS will not need restart
```

```python
{% load static %}

<link rel="stylesheet" type="text/css" href="{% static 'test1/style.css' %}">
```


# Work with Models (Models are used mainly for databases)

## Define model
```
Define the model in models.py file

```
```python
from django.db import models

# Create your models here.

class Employee(models.Model):
    employeeid = models.CharField(max_length=200)
    employeename = models.CharField(max_length=200)
    employeedesignation = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    def __str__(self):
        return self.employeename
```

## Steps to add model

```
1. In your main project settings.py file add your installed file
INSTALLED_APPS = [
    'test1.apps.Test1Config', --> Test1Config name should be in app.py of Test1 app

2. Run the following command to store the model as migration
python manage.py makemigrations test1

3. You can view the SQL script which migrate will run with the following command
python manage.py sqlmigrate test1 0001

4. Finally, Run migration to create database table

python manage.py migrate
```

## Work with Database

Open Shell

```python
python manage.py shell
```

Execute the following

```
>>>from test1.models import Employee

and Then 

>>>Question.objects.all()
```

## Insert Data

```
>>> q = Question(question_text="What's new?", pub_date=timezone.now())
>>> q.save()

To Verify the data, you should be able to query with the below command
>>>q.employeename
```

## View Data using Django Admin

Create Admin user
```
python manage.py createsuperuser
```

Start Server (To log into Admin)
```
python manage.py runserver
```

## Connect your model to Django Admin 

Register your app model with admin by adding the following in admin.py file of your app (test1/admin.py). After server restarts, you should be able to view the model on Django admin UI

```python
from django.contrib import admin

from .models import Question

admin.site.register(Question)
```



