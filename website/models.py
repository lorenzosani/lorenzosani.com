from django.db import models

class AboutText(models.Model):
    content = models.TextField()
    def __str__(self):
        return self.content
    def save(self, *args, **kwargs):
        if not self.pk and AboutText.objects.exists():
            raise ValidationError('There can be only one About Text')
        return super(AboutText, self).save(*args, **kwargs)

class ProjectTag(models.Model):
    name = models.CharField(max_length=20)
    def __str__(self):
        return self.name

class ProjectTechnology(models.Model):
    name = models.CharField(max_length=20)
    def __str__(self):
        return self.name

class Project(models.Model):
    image = models.ImageField(upload_to ='static/')
    title = models.CharField(max_length=30, primary_key=True)
    description = models.TextField(max_length=100)
    long_description = models.TextField(blank=True)
    date_finished = models.DateField()
    tags = models.ManyToManyField("ProjectTag")
    technologies_used = models.ManyToManyField("ProjectTechnology", blank=True)
    def __str__(self):
        return self.title

