from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def form_reader(request):
    if request.method == "POST":
        print(request.body)
        
        return JsonResponse({"deleted": True})