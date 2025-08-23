from django.contrib import admin

from django.urls import path
from . import views
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from django.http import Http404

urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('about/', views.AboutView.as_view(), name='about'),
    path('generate_pdf/', views.AboutView.as_view(), name='generate_pdf'),
    path('base/', TemplateView.as_view(template_name='base.html'), name='base'),
    # path('about/', TemplateView.as_view(template_name='about.html'), name='about'),
    path('resume/', TemplateView.as_view(template_name='resume.html'), name='resume'),
    path('services/', TemplateView.as_view(template_name='services.html'), name='services'),
    path('faq/', TemplateView.as_view(template_name='faq.html'), name='faq'),
    path('projects/', TemplateView.as_view(template_name='projects.html'), name='projects'),
    path('blog/', TemplateView.as_view(template_name='blog.html'), name='blog'),
    path('clients/', TemplateView.as_view(template_name='clients.html'), name='clients'),
    path('help/', TemplateView.as_view(template_name='help.html'), name='help'),
    path('pricing/', TemplateView.as_view(template_name='pricing.html'), name='pricing'),
    path('privacy_policy/', TemplateView.as_view(template_name='privacy_policy.html'), name='privacy_policy'),
    path('privacy/', TemplateView.as_view(template_name='privacy.html'), name='privacy'),
    path('terms_of_service/', TemplateView.as_view(template_name='terms_of_service.html'), name='terms_of_service'),
    path('testimonial/', TemplateView.as_view(template_name='testimonial.html'), name='testimonial'),
    path('error404/', TemplateView.as_view(template_name='error404.html'), name='error404'),
    path('clients/', TemplateView.as_view(template_name='clients.html'), name='clients'),
    path('ExtraSection/', views.ExtraSection, name='ExtraSection'),
    path('terms/', views.terms, name='terms'),
    path('logo-demo/', TemplateView.as_view(template_name='logo-demo.html'), name='logo_demo'),


    path('read_more/<int:article_id>/', views.read_more, name='read_more'),
    path('article/<int:article_id>/', views.read_more, name='read_more'),
    path('article_not_found/', views.article_not_found, name='article_not_found'),
    path('article/', views.article_list, name='article_list'),
    path('article_detail/', views.article_detail, name='article_detail'),
    path('contact/', views.contact, name='contact'),
# ]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
]
# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL_PORTFOLIO, document_root=settings.MEDIA_ROOT_PORTFOLIO)