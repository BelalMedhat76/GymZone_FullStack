from django.urls import path, include
from rest_framework.routers import DefaultRouter # type: ignore
from .views import GymProgramViewSet, MembershipJoinView, MembershipPlanListView, get_blog_posts
from .views import BlogListCreateView, BlogDetailView 
router = DefaultRouter()
router.register(r'programs', GymProgramViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path("api/blog/", BlogListCreateView.as_view(), name="blog_posts"),  
    path("api/blog/<int:pk>/", BlogDetailView.as_view(), name="blog_detail"), 
    path("api/membership-plans/", MembershipPlanListView.as_view(), name="membership-plans"),

]
