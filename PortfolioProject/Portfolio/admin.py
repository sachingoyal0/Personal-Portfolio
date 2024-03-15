from django.contrib import admin

# Register your models here.
from .models import HomeItem
# from .models import Content

admin.site.register(HomeItem)

# admin.site.register(Content)
# myblogapp/admin.py
# from django.contrib import admin
# from .models import Article

# admin.site.register(Article)



# myblogapp/admin.py
# from django.contrib import admin
# from .models import Article

# class ArticleAdmin(admin.ModelAdmin):
#     fields = ('article_id', 'title', 'content')  # Specify the fields to display

# admin.site.register(Article, ArticleAdmin)



# from .forms import ArticleForm  # Import your ArticleForm

# class ArticleAdmin(admin.ModelAdmin):
#     form = ArticleForm  # Set the form to use for the admin

# admin.site.register(Article, ArticleAdmin)




# from django.contrib import admin
# from .models import Article

# class ArticleAdmin(admin.ModelAdmin):
#     # Your admin configuration here
#     form = ArticleForm  # Set the form to use for the admin

# admin.site.register(Article, ArticleAdmin)



# from django.contrib import admin
# from .models import Article
# from .forms import ArticleForm

# class ArticleAdmin(admin.ModelAdmin):
#     form = ArticleForm
#     list_display = ('article_id', 'title', 'content')
#     readonly_fields = ('article_id',)  # Make the article_id field read-only

# admin.site.register(Article, ArticleAdmin)







# from django.contrib import admin
# from .models import Article

# admin.site.register(Article)



from django.contrib import admin
from .models import Article

class ArticleAdmin(admin.ModelAdmin):
    # list_display = ('title', 'author', 'pub_date')  # Customize what's displayed in the list view
    list_display = ('title', 'author', 'pub_date', 'short_description')  # Customize what's displayed in the list view
    search_fields = ('title', 'author')  # Enable search by title and author
    list_filter = ('pub_date',)  # Add filters for publication date

admin.site.register(Article, ArticleAdmin)

from Portfolio.models import Contact
admin.site.register(Contact)