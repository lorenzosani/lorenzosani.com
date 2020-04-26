from django.http import HttpResponse, JsonResponse
from django.template import loader
from django.shortcuts import render

from website.models import AboutText, Project

def index(request):
    template = loader.get_template('website/index.html')
    return HttpResponse(template.render({}, request))

def about(request):
    template = loader.get_template('website/about.html')
    content = AboutText.objects.all()
    return HttpResponse(template.render({ "about_text" : content[0].content }, request))

def projects(request):
    template = loader.get_template('website/projects.html')
    projects = Project.objects.all()
    context = { "projects" : projects }
    return HttpResponse(template.render(context, request))