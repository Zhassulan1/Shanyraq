import json


def form_reader(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print(data)