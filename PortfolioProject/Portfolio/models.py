# from django.db import models

# # # Create your models here.

# class PortfolioItem(models.Model):
#     title = models.CharField(max_length=100)
#     description = models.TextField()
#     image = models.ImageField(upload_to='portfolio/images/')
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.title

#     def get(self):
#         # Define your custom 'get' method logic here
#         # You can access and manipulate the model's attributes
#         return f"Custom 'get' method result for {self.title}"

#     # Fields and methods as before

#     def custom_get(self, arg1, arg2):
#         # Define your custom logic here, using arg1 and arg2
#         return f"Custom 'get' method result for {self.title} with arguments {arg1} and {arg2}"


# from django import forms
# from tinymce.widgets import TinyMCETextare


from django.db import models

class HomeItem(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='HomePage/images')
    created_at = models.DateTimeField(auto_now_add=True)
    # my_field = models.CharField(widget=TinyMCETextarea)

    def __str__(self):
        return self.title

    def custom_get(self):
        # Define your custom logic here
        return f"Custom 'get' method result for {self.title}"





# class Content(models.Model):
#     title = models.CharField(max_length=200)
#     body = models.TextField()

#     def __str__(self):
#         return self.title
    
#     def custom_get(self):
#         # Define your custom logic here
#         return f"Custom 'get' method result for {self.title}"



# class Article(models.Model):
#     article_id = models.CharField(max_length=50, unique=True)  # Add unique=True
#     article_id = models.BigAutoField(primary_key=True, default=1)
#     title = models.CharField(max_length=200)
#     content = models.TextField()

#     def __str__(self):
#         return self.title
    

# from django.db import models

# class Article(models.Model):
#     # article_id = models.CharField(max_length=50, primary_key=True)  # Use CharField as primary key
#     article_id = models.CharField(max_length=50, unique=True)  # Add unique=True
#     title = models.CharField(max_length=200)
#     content = models.TextField()

#     def __str__(self):
#         return self.title



# from django.db import models

# class Article(models.Model):
#     id = models.AutoField(primary_key=True)  # Ensure that the id field is defined as the primary key
#     article_id = models.CharField(max_length=50, unique=True)
#     title = models.CharField(max_length=200)
#     content = models.TextField()

#     def __str__(self):
#         return self.title







# from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.CharField(max_length=100)
    pub_date = models.DateTimeField('date published')
    # id = models.AutoField(primary_key=True, default=1)
    # id = models.AutoField(primary_key=True, default=1000)
    id = models.AutoField(primary_key=True)
    
    
    short_description = models.TextField(blank=True)
    def save(self, *args, **kwargs):
        # Automatically generate the short description when saving the article
        if not self.short_description:
            self.short_description = self.content[:100]  # Extract the first 100 characters as a short description
        super(Article, self).save(*args, **kwargs)

    def __str__(self):
        return self.title




class Contact(models.Model):
    sno = models.AutoField(primary_key=True)
    # first_name = models.CharField(max_length=100)
    # last_name = models.CharField(max_length=100)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=13)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    # timeStamp = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return 'Message From' + ' ' + self.name + ' - ' + self.email
    
        # return f"{self.first_name} {self.last_name}"