from django.shortcuts import render
from products.models import Product

# Create your views here.


def index(request):
    """A view to return home page"""
    products = Product.objects.all()[:3]

    context = {
    "products": products,
    }

    return render(request, "home/index.html", context)


def handle_404_page(request, exception):
    return render(request, "404_page.html")
