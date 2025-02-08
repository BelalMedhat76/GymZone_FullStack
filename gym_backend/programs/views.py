from rest_framework import viewsets,status # type: ignore
from .models import GymProgram,Blog
from .serializers import GymProgramSerializer,BlogSerializer,MembershipPlanSerializer
from django.http import JsonResponse
from .models import BlogPost,MembershipPlan
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, CreateAPIView, ListCreateAPIView , RetrieveAPIView # type: ignore
from rest_framework.decorators import api_view,permission_classes
from rest_framework import status



class GymProgramViewSet(viewsets.ModelViewSet):
    queryset = GymProgram.objects.all()
    serializer_class = GymProgramSerializer


def get_blog_posts(request):
    posts = BlogPost.objects.all().order_by('-created_at')
    data = [
        {
            "id": post.id,
            "title": post.title,
            "image": request.build_absolute_uri(post.image.url),
            "description": post.description,
            "content": post.content,
            "created_at": post.created_at,
        }
        for post in posts
    ]
    return JsonResponse(data, safe=False)

class BlogListCreateView(ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer


class BlogDetailView(RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    
    

class MembershipPlanListView(ListAPIView):
    queryset = MembershipPlan.objects.all()
    serializer_class = MembershipPlanSerializer

class MembershipJoinView(CreateAPIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        plan_id = request.data.get("plan_id")

        if not user.is_authenticated:
            return Response({"error": "User must be logged in"}, status=status.HTTP_401_UNAUTHORIZED)

        try:
            plan = MembershipPlan.objects.get(id=plan_id)
            # Here, you can save the user’s membership details in another model.
            return Response({"message": f"You have successfully joined the {plan.name} plan!"}, status=status.HTTP_200_OK)
        except MembershipPlan.DoesNotExist:
            return Response({"error": "Plan not found"}, status=status.HTTP_404_NOT_FOUND)
