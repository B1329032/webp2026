from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging

from .models import Course_table

logger = logging.getLogger('django')

@api_view(['GET'])
def addcourse(request):
    department = request.GET.get('Department' , '')
    title = request.GET.get('CourseTitle' , '')
    instructor = request.GET.get('Instructor' , '')

    new_course = Course_table()
    new_course.Department = department
    new_course.CourseTitle = title
    new_course.Instructor = instructor
    new_course.save()
    logger.debug(" ************** addcourse: " + title)
    if title:
        return Response({"data": title + " insert!"}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter missing"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
@api_view(['GET'])
def courselist(request):
    courses = Course_table.objects.all().values()
    return JsonResponse(list(courses), safe=False)
    return Response({"data":
                    json.dumps(
                        list(courses),
                        sort_keys = True,
                        indent = 1,
                        cls = DjangoJSONEncoder)},
                    status=status.HTTP_200_OK)