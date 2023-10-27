from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17)
    sold = models.BooleanField(default=False)


class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.IntegerField()

    def get_api_url(self):
        return reverse("api_salesperson", kwargs={"employee_id": self.employee_id})

    def __str__(self):
        return f"{self.employee_id} - {self.first_name}/{self.last_name}"

    class Meta:
        ordering = ("employee_id", "first_name", "last_name")


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone_number = models.IntegerField()

    def get_api_url(self):
        return reverse("api_customer", kwargs={"pk": self.pk})

    def __str__(self):
        return (
            f"{self.first_name} - {self.last_name}/{self.address}/{self.phone_number}"
        )

    class Meta:
        ordering = ("first_name", "last_name", "address", "phone_number")


class Sale(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.PROTECT,
    )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sales",
        on_delete=models.PROTECT,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sales",
        on_delete=models.PROTECT,
    )
    price = models.PositiveIntegerField()
