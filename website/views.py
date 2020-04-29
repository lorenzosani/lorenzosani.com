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
    projects = Project.objects.all().order_by('date_finished')
    context = { "projects" : projects }
    return HttpResponse(template.render(context, request))

def filterProjects(request):
    template = loader.get_template('website/projects-carousel.html')
    filters = request.GET
    if 'true' not in filters.values():
        return HttpResponse(template.render({ "projects" : Project.objects.all() }, request))
    tag_names = []
    for i in filters.items():
        if i[1] == 'true':
            tag_names.append(i[0])
    projects = Project.objects.filter(tags__in=tag_names).distinct().order_by('date_finished')
    return HttpResponse(template.render({ "projects" : projects }, request))