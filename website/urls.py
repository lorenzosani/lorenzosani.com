from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('sections/about/', views.about, name='about'),
    path('sections/projects/', views.projects, name='projects'),
    path('sections/contact/', views.contact, name='contact'),
    path('projects/filter/', views.filterProjects, name='filter_projects'),
    path('mindlayer/', views.mindlayer, name='mindlayer'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)