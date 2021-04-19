from django.db import models

# Create your models here.

class Student(models.Model):
    image = models.ImageField(upload_to='uploads/images', null=True, blank=True)
    name  = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(max_length=100, null=False, blank=False)
    address = models.TextField(blank=True, null=True);
    phone = models.CharField(max_length=15)

    def __str__(self):
        return self.name
