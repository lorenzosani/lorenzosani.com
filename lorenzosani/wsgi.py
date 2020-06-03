"""
WSGI config for lorenzosani project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'lorenzosani.settings')
os.environ.setdefault('SECRET_KEY', '1vs$kv7muvk2s*l_6837-w)u3brw1x+i%qha9osh)0@a%u(rb_')

application = get_wsgi_application()
