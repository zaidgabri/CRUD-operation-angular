<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
</head>
<body>
<h3>Welcome, Enter The Student Details</h3>

<%--@elvariable id="etudiant" type="com.example.spring_config"--%>
<form:form method="post" modelAttribute="etudiant">
    <table>
        <tr>
            <td><form:label path="nom">Nom</form:label></td>
            <td><form:input path="nom"/></td>
        </tr>
        <tr>
            <td><form:label path="prenom">Prenom</form:label></td>
            <td><form:input path="prenom"/></td>
        </tr>
        <tr>
            <td><form:label path="email">Email</form:label></td>
            <td><form:input path="email"/></td>
        </tr>
        <tr>
            <td><input type="submit" value="Submit"/></td>
        </tr>
    </table>
</form:form>

</body>
</html>
