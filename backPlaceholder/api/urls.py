from django.urls import path
from api.views import form_reader

urlpatterns = [
    path('new-ad/submit', form_reader),
]
