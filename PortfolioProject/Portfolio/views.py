from typing import Self
from django.shortcuts import render

# Create your views here.
from django.templatetags.static import static
from django.views import View
from .models import HomeItem
from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa
from django.shortcuts import render, get_object_or_404, redirect
from .models import Article  # Import your Article model
from django.http import Http404
from django.http import HttpResponse
from django.views import View
from django.template import loader
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.http import FileResponse
import os
from django.http import HttpResponse
from django.shortcuts import redirect

class HomeView(View):
    template_name = 'index.html'
    def home(request):
    # Add logic to retrieve data or perform any necessary operations
    # Example: data = MyModel.objects.all()
        context = {
            # Pass data or variables to the template
            # Example: 'data': data
        }
        return render(request, 'index.html', context)

    def get(self, request):
        home_items = HomeItem.objects.all()
        context = {'portfolio_items': home_items}
        return render(request, self.template_name, context)


class AboutView(View):
    template_name = 'index.html'

    def about(self, request, *args, **kwargs):
        # Add logic or data retrieval for the about page
        context = {
            # Add context variables as needed
        }
        return render(request, 'index.html', context)
    



    def generate_pdf(request):
        # Path to the pre-generated PDF file
        pdf_file_path = 'portfolio/media/resume.pdf'

        # Check if the file exists
        if pdf_file_path and os.path.exists(pdf_file_path):
            # Open the PDF file
            with open(pdf_file_path, 'rb') as pdf_file:
                # Create a response with the PDF content
                response = HttpResponse(pdf_file.read(), content_type='application/pdf')
                response['Content-Disposition'] = 'attachment; filename="SachinGoyal_cv.pdf"'



            # from reportlab.pdfgen import canvas
            # from django.http import HttpResponse
            # # Create a PDF object, using the response object as its "file."
            # p = canvas.Canvas(response)

            # # Draw things on the PDF. Here's where the PDF generation happens.
            # # See the ReportLab documentation for the full list of functionality.
            # p.drawString(100, 100, "Hello world.")

            # # Close the PDF object cleanly, and we're done.
            # p.showPage()
            # p.save()



            return response
        else:
            return HttpResponse(request, Self.template_name, f"File not found: {pdf_file_path}")
    








    def get(self, request):
        # Add logic or data retrieval for the about page
        user_data = {
            'name': 'John Doe',
            'age': 25,
            'location': 'City',
            'profession': 'Web Developer',
            'bio': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'achievements': 'Lorem ipsum achievements.',
            'education': 'Lorem ipsum education.',
            'skills': 'Lorem ipsum skills.',
            'interests': 'Lorem ipsum interests.',
            'projects': 'Lorem ipsum projects.',
            'hobbies': 'Lorem ipsum hobbies.',
            'contact_info': 'Email: john.doe@example.com | Phone: 123-456-7890',
        }
        
        context = {'user_data': user_data}
        return render(request, self.template_name, context)



# class GeneratePDFView(View):
# def generate_pdf(self, request, *args, **kwargs):
# def generate_pdf(request):
#     # Path to the pre-generated PDF file
#     pdf_file_path = 'portfolio/media/resume.pdf'

#     # Check if the file exists
#     if pdf_file_path and os.path.exists(pdf_file_path):
#         # Open the PDF file
#         with open(pdf_file_path, 'rb') as pdf_file:
#             # Create a response with the PDF content
#             response = HttpResponse(pdf_file.read(), content_type='application/pdf')
#             response['Content-Disposition'] = 'attachment; filename="SachinGoyal_cv.pdf"'



#             # from reportlab.pdfgen import canvas
#             # from django.http import HttpResponse
#             # # Create a PDF object, using the response object as its "file."
#             # p = canvas.Canvas(response)

#             # # Draw things on the PDF. Here's where the PDF generation happens.
#             # # See the ReportLab documentation for the full list of functionality.
#             # p.drawString(100, 100, "Hello world.")

#             # # Close the PDF object cleanly, and we're done.
#             # p.showPage()
#             # p.save()



#         return response
#     else:
#         return HttpResponse(f"File not found: {pdf_file_path}")
    


class ResumeView(View):
    template_name = 'resume.html'  # Template path for the custom page

    def get(self, request):
        # Add logic and data retrieval for the custom page
        return render(request, self.template_name)


def services(request):
    return render(request, 'services.html')

def portfolio(request):
    return render(request, 'portfolio.html')

def ExtraSection(request):
    return render(request, 'ExtraSection.html')

def terms(request):
    return render(request, 'terms.html')

def base(request):
    return render(request, 'base.html')

def error404(request):
    return render(request, 'error404.html')


def blog(request):
    articles = Article.objects.all()
    return render(request, 'blog.html', {'articles': articles})

def read_more(request, article_id):
    # article = Article.objects.get(pk=article_id)
    # article = get_object_or_404(Article, pk=article_id)
    article = Article.objects.filter(pk=article_id).first()
    if article:
        return render(request, 'read_more.html', {'article': article})
    else:
        return render(request, 'article_not_found.html')

def article_not_found(request, exception):
    raise Http404("Article not found")

def article_list(request):
    articles = Article.objects.all()
    return render(request, 'article_list.html', {'articles': articles})

# def article_detail(request, article_id):
def article_detail(request):
    # article = Article.objects.get(pk=article_id)
    articles = Article.objects.all()
    return render(request, 'article_detail.html', {'articles': articles})




from Portfolio.models import Contact
def contact(request):
    if request.method=='POST':
        name = request.POST['name']
        email = request.POST['email']
        phone = request.POST['phone']
        message = request.POST['message']
        # print(name, email, phone, message)
        # print("herhfjdskhajkhdjkdshkj sdhjhsd  sdksh sdkfh khfsdkf sdf hsdjkfjksdfsd fhsd fjkhsdf hfkj hsflaskjfhslkfjhs alkfjhsflskf jhsfkhsdf h")
        contact = Contact(name=name, email=email, phone=phone, message=message)
        contact.save()
    return render(request, 'contact.html')

