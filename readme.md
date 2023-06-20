# 🚀 WORDLE

### 🔥 Stack usado

- ReactJS
- Vite
- Tailwind
- Redux

Se hace uso de **ReactJs + Vite** debido a la flexibilidad que ofrece, comparados con frameworks como **NextJs** o **Gatsby** los cuales tienden ser más rígidos, ya que tienen arquitecturas ya definidas, además se hace uso de **Redux** para el manejo de estado global porque es una librería que permite escalar fácilmente y al tener la propiedad de que no muta el estado hace que sea mucho más fácil seguir la trazabilidad del estado, para los estilos se hace uso de Tailwind que nos ayuda de gran manera a manejar un estándar a nivel de estilo y nos evita uno de los mayores retos cuando se trabaja con **css** y es escribir nombres de clases, debido a que la labor de escribir buenos nombres es bastante compleja.

### 🔧 Instalación

Para realizar la instacion del proyecto se deben tener instalados [Git](https://git-scm.com/downloads) y [node](https://nodejs.org/es/download) recomiendo la versión LTS.
Con esto listo se procede a realizar los siguientes pasos

_Se clona el repositorio_

```
git clone https://github.com/EdisonBedoya98/wordle.git
```

_Se ingresa a la carpeta del proyecto_

```
cd wordle
```

_Se instalan las dependencias_

```
npm i
```

_Y listo, se inicia el proyecto_

```
npm run dev
```

### 🎨 Diseño

El diseño sigue las dimensiones que se definieron dentro del [Figma](https://www.figma.com/file/1ItfWDdmg93m4yfj0BAvCn/DD3-Worlde?node-id=0%3A1) esto a nivel de pixel, también se usa **Roboto** como fuente principal, la cual se configura a nivel de proyecto y se implementa el modo oscuro.

### 📙 Diccionario de palabras

#### Decisiones tomadas

- Teniendo en cuenta el total de palabras que contiene el [diccionario](https://gitlab.com/d2945/words/-/raw/main/words.txt") que son **646.615**, basado en el requerimiento del juego solo se van a usar las palabras que contengan 5 letras y como el teclado que maneja el juego tampoco admite tildes se filtran las que cumplan estas condiciones y nos queda un diccionario dirigido para el juego con **8.080** palabras.

- Para realizar el filtro se crea un servicio con la ayuda de **Express** que se encuentra dentro de la ruta **data/server.js**, este servicio se encarga de cargar el diccionario y luego con una **expresión regular** filtra las palabras que cumplen las condiciones anteriormente descritas y finalmente retorna un JSON que contiene un array con las palabras.

- El endpoint se puede acceder con **/words?length=5** donde **length** es un query param para poder definir el número de letras que requerimos y así poder reutilizar a necesidad.

- El diccionario pasa de pesar **7.5MB** a **105KB**, lo cual lo hace mucho más manejable a la hora de que los usuarios con dispositivos con recursos de procesamiento y conexión a internet limitados puedan acceder al juego.
- El archivo con las palabras filtradas se puede encontrar en el directorio **public/data/filtered_words.json**

### 🎮 Juego

Para poder acceder a la versión desplegada realiza clic [acá](https://teal-dodol-276981.netlify.app/)

## Autor ✒️

- **Edison Bedoya García** - _Desarrollo juego_ - [edison](https://github.com/EdisonBedoya98)

La mente es el límite. Mientras que la mente puede imaginar el hecho de que puedes hacer algo, lo puedes hacer, siempre y cuando realmente lo crees 100 por ciento.
_Arnold Schwarzenegger_
