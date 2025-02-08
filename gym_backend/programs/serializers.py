from rest_framework import serializers
from .models import GymProgram,Blog, MembershipPlan


class GymProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = GymProgram
        fields = "__all__"

        
        
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = "__all__"
        
        


class MembershipPlanSerializer(serializers.ModelSerializer):
    features = serializers.SerializerMethodField()

    class Meta:
        model = MembershipPlan
        fields = ["id", "name", "price", "features"]

    def get_features(self, obj):
        return obj.get_features()