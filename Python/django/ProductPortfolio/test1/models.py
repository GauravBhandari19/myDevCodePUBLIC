from django.db import models

# Create your models here.

class Employee(models.Model):
    employeeid = models.CharField(max_length=200)
    employeename = models.CharField(max_length=200)
    employeedesignation = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    def __str__(self):
        return self.employeename