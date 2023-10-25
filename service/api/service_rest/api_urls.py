from django.urls import path

from .api_views import (
    api_list_appointments,
    api_view_appointment,
    api_list_technicians,
    api_view_technician,
    api_view_automobile,
)

urlpatterns = [
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/<int:pk>/", api_view_appointment, name="api_view_appointment"),
    path("appointments/<int:pk>/cancel/", api_view_appointment, name="api_view_appointment"),
    path("appointments/<int:pk>/finish/", api_view_appointment, name="api_view_appointment"),
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("technicians/<str:employee_id>/", api_view_technician, name="api_view_technician"),
    path("automobiles/<str:vin>/", api_view_automobile, name="api_view_automobile"),
]
