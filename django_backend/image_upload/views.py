from django.shortcuts import render

#from rest_framework.response import Response
#from rest_framework.decorators import api_view

from .serializers import StudentSerializer
from .models import Student
from rest_framework import viewsets


class StudentView(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


# Create your views here.





# @api_view(['GET'])
# def showAllStudents(request):

#     students = Student.objects.all()
#     serilizer = StudentSerializer(students, many=True)
#     return Response(serilizer.data)
    


# @api_view(['GET'])
# def showSingleStudent(request, pk):

#     student = Student.objects.get(id=pk)
#     serilizer = StudentSerializer(student, many=False)
#     return Response(serilizer.data)

# @api_view(['POST'])
# def addStudent(request):
#     serilizer = StudentSerializer(data=request.data)

#     if serilizer.is_valid():
#         serilizer.save()

#     return Response(serilizer.data)


# @api_view(['PUT'])
# def updateStudent(request,pk):
#     student = Student.objects.get(id=pk)
#     serilizer = StudentSerializer(instance=student, data=request.data)

#     if serilizer.is_valid():
#         serilizer.save()

#     return Response(serilizer.data)


# @api_view(['DELETE'])
# def deleteProduct(request, pk):
#     product = Student.objects.get(id=pk)
#     product.delete()

#     return Response('Items delete successfully!')









