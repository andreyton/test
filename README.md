# Descripción de la aplicación

La aplicación es una interfaz de consola de administración que permite a un usuario administrador y 35 usuarios regulares acceder a la plataforma. La aplicación se desarrolló utilizando Django para el backend, Django REST Framework para la API y React con Ant Design para el frontend.

Entre las funcionalidades que ofrece la aplicación se incluyen:
- Acceso de administrador para ver analíticas de los usuarios regulares.
- Acceso para usuarios regulares a una landing page con dos botones contadores.
- Registro de inicio de sesión y clics en botones para cada usuario.
- Creación automática de 35 usuarios regulares mediante un método HTTP.

# Modelo 

La aplicación se realizo con base en:
- Clase User integrada en Django, para autenticación y manejo de usuarios.
- Clase UserSession, para el manejo de tiempos de sesion.
- Clase ButtonClick, para un manejo separado del usuario en cada boton, solo vinculado a un id de usuario y no como atributo.
- Clase LandingPage, donde se almacena la información de la pagina.

# Instrucciones para clonar el repositorio y ejecutar la aplicación

1. Clonar el repositorio desde Github:

```
git clone https://github.com/andreyton/test.git
```

2. Iniciar el servidor Django. Primero, ubicarse en la carpeta "test" o principal del proyecto para activar el entorno virtual y luego ubicarse en la carpeta backend para ejecutar el servidor:

```
env/scripts/activate
cd backend
python manage.py runserver
```

3. Iniciar la aplicación React. Ubicarse en la carpeta frontend y ejecutar el comando para instalar las librerias ya que no existe la carpeta Node_modules, luego de instaladas se ejecuta el comando para iniciar la aplicación:

```
cd frontend
npm install
npm start
```

# Credenciales de usuario

Para acceder a la aplicación y probar las diferentes funcionalidades, se pueden utilizar las siguientes credenciales de usuario:

- Usuario admin: 
    - Usuario: kevin 
    - Contraseña: 12345678

- Hay 35 Usuarios regulares, todos listados con el siguiente formato:
    - Usuario: user1 , user2 ... user35
    - Contraseña: password1 , password2 ... password35

Se pueden crear automáticamente los 35 usuarios regulares mediante el siguiente método HTTP:
- http://localhost:8000/create_users/

Es importante tener en cuenta que este método solo funciona una vez en el sistema. Para volver a ejecutarlo es necesario eliminar previamente los usuarios creados anteriormente.

# Funcionamiento del API

Se debe tener presente que para realizar las llamadas HTTP es necesario de un token de autenticación. Sin embargo, para agregar ciertos datos al sistema se dispone de la siguiente dirección:
- http://localhost:8000/admin/
