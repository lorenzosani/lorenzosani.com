from django.db import models

class AboutText(models.Model):
    content = models.TextField()
    def __str__(self):
        return self.content
    def save(self, *args, **kwargs):
        if not self.pk and AboutText.objects.exists():
            raise ValidationError('There can be only one About Text')
        return super(AboutText, self).save(*args, **kwargs)
