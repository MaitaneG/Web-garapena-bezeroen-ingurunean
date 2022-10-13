from django.urls import path
from . import views

urlpatterns=[
    path('',views.index,name='index'),
    path('menua/',views.menua,name='menua'),
    path('menua/add/',views.add,name='add'),
    path('menua/add/addrecord/',views.addrecord,name='addrecord'),
    path('menua/delete/<int:id>',views.delete,name='delete'),
    path('menua/update/<int:id>',views.update,name='update'),
    path('menua/update/updaterecord/<int:id>', views.updaterecord, name='updaterecord'),
    path('menua/addcart/<int:id>',views.addcart,name='addcart'),
    path('menua/cartamountplus/<int:id>',views.cartamountplus,name='cartamountplus'),
    path('menua/cartamountminus/<int:id>',views.cartamountminus,name='cartamountminus'),
    path('menua/deletecart/<int:id>',views.deletecart,name='deletecart'),
    path('menua/buy/',views.buy,name='buy'),
]