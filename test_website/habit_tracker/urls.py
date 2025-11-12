from django.urls import path 

from . import views

urlpatterns = [
    path("", views.get_habit, name="get_habit"),
    path("data/", views.data, name="get_data"),
    path("data/filter-options/", views.get_filter_options, name="chat-filter-options:")
]
