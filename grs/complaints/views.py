from .serializer import ComplaintSerializer
from rest_framework import viewsets
from .models import Complaint
from django.shortcuts import render


def home(request):
    return render(request, 'complaints/home.html')


class ComplaintViewSet(viewsets.ModelViewSet):
    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer
