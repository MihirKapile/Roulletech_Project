from django.urls import path,include
from .views import TaskListCreate, TaskRetrieveUpdateDestroy, NoteListCreate, NoteRetrieveUpdateDestroy
from django.contrib import admin


urlpatterns = [
    path('tasks/', TaskListCreate.as_view(), name='task-list-create'),
    path('tasks/<int:pk>/', TaskRetrieveUpdateDestroy.as_view(), name='task-retrieve-update-destroy'),
    path('notes/', NoteListCreate.as_view(), name='note-list-create'),
    path('notes/<int:pk>/', NoteRetrieveUpdateDestroy.as_view(), name='note-retrieve-update-destroy'),
]
