<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>



<!DOCTYPE html>
<html>
<head>
    <title>Spring MVC Example</title>
</head>
<body>
<h1>${message}</h1>

<table>
    <tr> <th>ID</th>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Age</th>
    </tr>
    <c:forEach var="student" items="${students}" varStatus="loop" >
        <tr>
            <td>${loop.index}</td>
            <td>${student.nom}</td>
            <td>${student.prenom}</td>
            <td>${student.email}</td>
        </tr>
    </c:forEach>
</table>

<a href="formstudent" class="btn btn-primary">Ajouter un étudiant</a>
</body>
</html>
