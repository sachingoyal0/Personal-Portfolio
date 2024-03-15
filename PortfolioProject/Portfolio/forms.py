# # # # from django import forms
# # # # from .models import Article  # Import your Article model

# # # # class ArticleForm(forms.ModelForm):
# # # #     class Meta:
# # # #         model = Article
# # # #         fields = ['article_id', 'title', 'content']  # Add 'article_id' field here




# # # # from django.contrib import admin
# # # # from .models import Article
# # # # from .forms import ArticleForm

# # # # class ArticleAdmin(admin.ModelAdmin):
# # # #     form = ArticleForm  # Set the form to use for the admin
# # # #     list_display = ('article_id', 'title', 'content')  # Display these fields in the list view

# # # # admin.site.register(Article, ArticleAdmin)



# # # # from django import forms
# # # # from .models import Article

# # # # class ArticleForm(forms.ModelForm):
# # # #     class Meta:
# # # #         model = Article
# # # #         fields = '__all__'  # Include all fields from the Article model

# # # #     # If 'article_id' is a ForeignKey field, use ModelChoiceField
# # # #     article_id = forms.ModelChoiceField(
# # # #         # queryset=YourOtherModel.objects.all(),  # Replace YourOtherModel with the actual model
# # # #         required=False,  # Set this to True or False based on your requirements
# # # #         label='Article ID'  # Customize the label
# # # #     )

# # # # # Now, you can use ArticleForm in your ArticleAdmin

# # # from django.contrib import admin
# # # from .models import Article
# # # from .forms import ArticleForm

# # # class ArticleAdmin(admin.ModelAdmin):
# # #     form = ArticleForm  # Set the form to use for the admin
# # #     list_display = ('article_id', 'title', 'content')  # Display these fields in the list view

# # # admin.site.register(Article, ArticleAdmin)


# # from django import forms
# # from .models import Article  # Import the Article model

# # class ArticleForm(forms.ModelForm):
# #     class Meta:
# #         model = Article
# #         fields = '__all__'

# #     # If 'article_id' is a ForeignKey field, use ModelChoiceField
# #     article_id = forms.ModelChoiceField(
# #         # queryset=YourOtherModel.objects.all(),  # Replace YourOtherModel with the actual model
# #         required=False,
# #         label='Article ID'
# #     )



# from django import forms
# from .models import Article

# class ArticleForm(forms.ModelForm):
#     class Meta:
#         model = Article
#         fields = '__all__'

#     # Replace 'YourOtherModel' with the actual model you want to use for choices
#     article_id = forms.ModelChoiceField(
#         queryset=Article.all(),  # Provide the correct queryset here
#         required=False,
#         label='Article ID'
#     )



# from django import forms
# from .models import Article

# class ArticleForm(forms.ModelForm):
#     class Meta:
#         model = Article
#         fields = '__all__'

#     # ModelChoiceField should be here
#     article_id = forms.ModelChoiceField(
#         queryset=Article.objects.all(),  # Use Article.objects.all() to fetch all articles
#         required=False,
#         label='Article ID'
#     )