from django.contrib import admin

from .models import  GymProgram ,BlogPost,MembershipPlan,Blog

# Register your models here.
admin.site.register(GymProgram)
admin.site.register(BlogPost)
admin.site.register(MembershipPlan)
admin.site.register(Blog)


