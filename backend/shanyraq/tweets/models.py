from django.db import models
from user.models import User

# Create your models here.
class Property(models.Model):
    title = models.CharField(max_length=100)
    type = models.CharField(max_length=20)
    price = models.CharField()
    area = models.FloatField()
    rooms_count = models.IntegerField()
    description = models.TextField()
    main_img = models.ImageField()
    img = models.ImageField()
    parameters = models.JSONField()

class Listing(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    type = models.CharField(max_length=20)
    listing_date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[('Active'), ('Not Active')])

class Favorites(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE)