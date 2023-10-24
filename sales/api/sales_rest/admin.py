from django.contrib import admin
from .models import AutomobileVO
# from .models import Salesperson
# from .models import Sale
# from .models import Customer


@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass
