from rest_framework import serializers
from .models import habitModel

class habitSerializer(serializers.ModelSerializer):
    class Meta:
        model = habitModel
        fields='__all__'
