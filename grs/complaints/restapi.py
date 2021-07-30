from rest_framework import viewsets
from .serializer import ComplaintSerializer
from .models import Complaint
from rest_framework.authentication import (TokenAuthentication,
                                           BasicAuthentication,
                                           SessionAuthentication)
from rest_framework.permissions import IsAuthenticated
# AllowAny can be used


class ComplaintViewSet(viewsets.ModelViewSet):
    serializer_class = ComplaintSerializer
    queryset = Complaint.objects.all()
    authentication_classes = (BasicAuthentication,
                              TokenAuthentication,
                              SessionAuthentication,
                              )
    permission_classes = (IsAuthenticated, )
