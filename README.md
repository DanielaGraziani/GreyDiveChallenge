# Grey Dive Challenge

Este challenge tiene como finalidad desarrollar una aplicación web en React.js que lea un archivo JSON y genere una interfaz
de encuesta con una estética diferente a la de Google Forms. La aplicación podrá enviar las respuestas de la encuesta a una
base de datos, especificamente a Firebase, debiendo mostrar las respuestas en otra ruta de la aplicación.

## Herramientas

* React.js
* Firebase
* TailwindCSS
* Formik
* Yup
* React Router Dom
* Sweet Alert
* Lottie


## Instalación

Para instalar el proyecto, deberas:

1. Clonar este repositorio en tu computadora.
2. Acceder a la carpeta del proyecto utilizando líneas de comando.
3. Ejecutar el comando npm install para instalar las dependencias del proyecto.

## Uso

Para utilizar el proyecto, deberas:

1. Ejecutar el comando npm start para iniciar el servidor de desarrollo.
2. Acceder a la aplicacion en tu navegador a traves de la url 'http://localhost:3000'.
3. Completar el formulario utilizando la interfaz generada.

![form](https://user-images.githubusercontent.com/63439379/211728834-9d6f27db-943e-4c7a-93de-cea7c60dc568.png)

4. Luego de completar el formulario, presiona el boton Enviar para enviar las respuestas a Firebase.

5. Para poder visualizar la lista de respuestas enviadas, accede a la ruta information  'http://localhost:3000/information'

![information](https://user-images.githubusercontent.com/63439379/211730458-3f5672d2-d063-4fdf-a899-fa8ab57f069d.png)


## Configuración

Antes de usar el proyecto, es necesario configurar la conexion a la base de datos de Firebase.

1. Crea un proyecto en Firebase y habilita la autenticación con una cuenta de correo electrónico y contraseña.
2. Crea una base de datos en Firebase y habilita la escritura y lectura de datos.
3. En el archivo src/firebase.js, reemplaza el valor de la variable firebaseConfig con la configuración proporcionada en la consola de Firebase para tu proyecto.

## Contacto

* Ante cualquier duda o consulta, me puedes contactar a mi correo ddiazgraziani@gmail.com.
* Tambien te invito a visitar mi portafolio: https://danielagraziani-portfolio.vercel.app/
