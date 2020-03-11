from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

from website.models import AboutText

def index(request):
    template = loader.get_template('website/index.html')
    return HttpResponse(template.render({}, request))

def about(request):
    template = loader.get_template('website/about.html')
    content = AboutText.objects.all()
    return HttpResponse(template.render({ "about_text" : content[0].content }, request))
