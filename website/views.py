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
    projects = Project.objects.all().order_by('-date_finished')
    for project in projects:
        project.labels = project.technologies_used.values_list('name', flat=True)
    context = { "projects" : projects }
    return HttpResponse(template.render(context, request))

def contact(request):
    template = loader.get_template('website/contact.html')
    return HttpResponse(template.render({}, request))

def filterProjects(request):
    template = loader.get_template('website/projects-carousel.html')
    filters = request.GET
    if 'true' not in filters.values():
        projects = Project.objects.all().order_by('-date_finished')
        for project in projects:
            project.labels = project.technologies_used.values_list('name', flat=True)
        return HttpResponse(template.render({ "projects" : projects }, request))
    tag_names = []
    for i in filters.items():
        if i[1] == 'true':
            tag_names.append(i[0])
    projects = Project.objects.filter(tags__in=tag_names).distinct().order_by('-date_finished')
    for project in projects:
        project.labels = project.technologies_used.values_list('name', flat=True)
    return HttpResponse(template.render({ "projects" : projects }, request))