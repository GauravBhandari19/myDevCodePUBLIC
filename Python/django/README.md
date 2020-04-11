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

## Stant Django Server (You have to me in directory where manage.py is. 8111 in the command is port number)
```
 python manage.py runserver 8111
```
