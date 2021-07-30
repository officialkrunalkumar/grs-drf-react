from rest_framework import serializers
from .models import Complaint


class ComplaintSerializer(serializers.ModelSerializer):


    def create(self, validated_data):
        complaint = Complaint(
            title = self.validated_data['title'],
            name = self.validated_data['name'],
            complaint_for = self.validated_data['complaint_for'],
            complaint_to = self.validated_data['complaint_to'],
            cohort = self.validated_data['cohort'],
            level = self.validated_data['level'],
            description = self.validated_data['description'],
            category = self.validated_data['category'],
            user_role = self.validated_data['user_role']
        )
        complaint.save()
        return complaint

    class Meta:
        model = Complaint
        fields = '__all__'
        read_only_fields = ['id']
