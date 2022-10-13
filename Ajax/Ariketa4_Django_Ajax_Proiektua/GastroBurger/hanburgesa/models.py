from django.db import models
from django.core.validators import MinValueValidator

# Create your models here.
class Hanburgesa(models.Model):
    id = models.AutoField(primary_key=True)
    izena = models.CharField(max_length=50)
    deskribapena = models.CharField(max_length=100)
    prezioa = models.DecimalField(max_digits=4, decimal_places=2, validators=[
        MinValueValidator(0)])

    #def __str__(self) -> str:
    #    return super().__str__()

    def __str__(self):
        return u'%s'%self.izena


class Karritoa(models.Model):
    id =  models.AutoField(primary_key=True)
    id_hanburgesa =  models.ForeignKey(Hanburgesa, on_delete=models.CASCADE)
    kantitatea =  models.IntegerField(validators=[
        MinValueValidator(1)])

    def __str__(self):
        return u'%s'%self.id_hanburgesa + ' %d'%self.kantitatea