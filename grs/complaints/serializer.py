from rest_framework import serializers
from .models import Complaint


class ComplaintSerializer(serializers.ModelSerializer):

    class Meta:
        model = Complaint
        fields = ['id', 'title', 'name', 'complaint_for', 'complaint_to',
                  'cohort', 'level', 'description', 'category']
