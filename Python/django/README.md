# Install Django
```
python -m pip install Django
```

# Create your first Django Project
```
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
```
 python manage.py runserver 8111
```

## Create new App, Poll, in the python project
```
python manage.py startapp polls
```

## Create Database Table (Database info in Settings.py, look for 'DATABASES = {')
```
python manage.py migrate
```

## Create Superuser Admin User
```
python manage.py createsuperuser
```

## Login to Admin (Go to the below URL in your browser)
```
http://127.0.0.1:8111/admin/
```

## How components are linked in Python

![Semantic description of image](overviewModel.svg "Image Title")