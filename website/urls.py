from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('sections/about/', views.about, name='about'),
    path('sections/projects/', views.projects, name='projects'),
]