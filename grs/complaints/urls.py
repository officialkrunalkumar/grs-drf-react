from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('complaint', views.ComplaintViewSet, basename='complaint')


urlpatterns = [
    path('complaints/', include(router.urls)),
    #path('', TemplateView.as_view(template_name='index.html')),
]
