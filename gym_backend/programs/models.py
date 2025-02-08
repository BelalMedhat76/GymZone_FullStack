from django.db import models



class GymProgram(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    duration_weeks = models.IntegerField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to="programs/")

    def __str__(self):
        return self.name




class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='blog_images/')
    description = models.TextField()
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Blog(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    description = models.TextField(default="Default description")  # Add a default value
    image = models.ImageField(upload_to="blog_images/")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class MembershipPlan(models.Model):
    name = models.CharField(max_length=50)
    price = models.CharField(max_length=20)
    features = models.TextField()  # Store as a comma-separated string

    def get_features(self):
        return self.features.split(",")

    def __str__(self):
        return self.name

    