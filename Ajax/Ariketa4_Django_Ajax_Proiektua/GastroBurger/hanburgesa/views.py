from django.urls import reverse
from django.http import HttpResponseRedirect
from django.shortcuts import render

from hanburgesa.models import Hanburgesa, Karritoa

# Create your views here.


def index(request):
    return render(request, 'index.html')


def menua(request):
    hanburgesak = Hanburgesa.objects.all
    karritoa = Karritoa.objects.all
    return render(request, 'menua.html', {'hanburgesa': hanburgesak, 'karritoa':karritoa})


def add(request):
    return render(request, 'add.html')


def addrecord(request):
    izena = request.POST['izena']
    deskribapena = request.POST['deskribapena']
    prezioa = request.POST['prezioa']

    hanburgesa= Hanburgesa(izena=izena, deskribapena=deskribapena, prezioa=prezioa)
    hanburgesa.save()
    return HttpResponseRedirect(reverse('menua'))

def update(request, id):
    hanburgesa = Hanburgesa.objects.get(id=id)
    return render(request, 'update.html', {'hanburgesa': hanburgesa})

def updaterecord(request, id):
    izena = request.POST['izena']
    deskribapena = request.POST['deskribapena']
    prezioa = request.POST['prezioa']
    hanburgesa = Hanburgesa.objects.get(id=id)
    hanburgesa.izena = izena
    hanburgesa.deskribapena = deskribapena
    hanburgesa.prezioa = prezioa
    hanburgesa.save()
    return HttpResponseRedirect(reverse('menua'))

def delete(request, id):
    hanburgesa = Hanburgesa.objects.get(id=id)
    hanburgesa.delete()
    return HttpResponseRedirect(reverse('menua'))

def addcart(request, id):
    hanburgesa = Hanburgesa.objects.get(id=id)
    karritoa = Karritoa.objects.all()

    if karritoa:
        for kar in karritoa:
            if kar.id_hanburgesa == hanburgesa:
                kar.kantitatea = kar.kantitatea + 1
                kar.save()
            else:
                kar =Karritoa(id_hanburgesa=hanburgesa,kantitatea=1)
                kar.save()
    else:
        karri= Karritoa(id_hanburgesa=hanburgesa,kantitatea=1)
        karri.save()
    return HttpResponseRedirect(reverse('menua'))

def cartamountplus(request, id):
    karritoa = Karritoa.objects.get(id=id)
    karritoa.kantitatea = karritoa.kantitatea + 1
    karritoa.save()
    return HttpResponseRedirect(reverse('menua'))

def cartamountminus(request, id):
    karritoa = Karritoa.objects.get(id=id)
    karritoa.kantitatea = karritoa.kantitatea - 1
    karritoa.save()
    if karritoa.kantitatea==0:
        karritoa.delete()
    return HttpResponseRedirect(reverse('menua'))

def deletecart(request, id):
    karritoa = Karritoa.objects.get(id=id)
    karritoa.delete()
    return HttpResponseRedirect(reverse('menua'))

def buy(request):
    karritoa = Karritoa.objects.all()
    karritoa.delete()
    return HttpResponseRedirect(reverse('menua'))