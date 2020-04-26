from django.contrib import admin

from .models import AboutText, Project, ProjectTag, ProjectTechnology

admin.site.register(AboutText)
admin.site.register(Project)
admin.site.register(ProjectTag)
admin.site.register(ProjectTechnology)
