# 🚀 WORDLE

### 🔥 Stack usado

- ReactJS
- Vite
- Tailwind
- Redux

Se hace uso de **ReactJs + Vite** debido a la flexibilidad que ofrece, comparados con frameworks como **NextJs** o **Gatsby** los cuales tienden ser mas rigidos con respecto a esto ya que tienen arquitecturas ya definidas, ademas se hace uso de **Redux** para el manejo de estado global ya que es una libreria que permite escalar fácilmente, para los estilos se hace uso de Tailwind que nos ayuda de gran manera a manejar un estandar a nivel de estilo y nos evita una de los mayores retos cuando se trabaja con **css** y es escribir nombres de clases, debido a que la lavor de escribir buenos nombres es bastante compleja.

### 🎨 Diseño

El diseño sigue las dimensiones que se definieron dentro del Figma esto a nivel de pixel, tambien se usa **Roboto** como fuente principal, la cual se configura a nivel de proyecto y se implementa el modo oscuro.

### 📙 Diccionario de palabras

####Decisiones tomadas

- Teniendo en cuenta el total de palabras que contiene el [diccionario](https://gitlab.com/d2945/words/-/raw/main/words.txt") que son **646.615**, basado en el requerimiento del juego solo se van a usar las palbras que contengan 5 letras y como el teclado que maneja el juego tampoco admite tildes se filtran las que cumplan estas condiciones y nos queda un diccionario dirigido para el juego con **8.080** palabras.

- Para realizar el filtro se crea un servicio con la ayuda de **Express** que se encuentra dentro de la ruta **data/server.js**, este servicio se encarga de cargar el diccionario y luego con una expresión regular filtra las palabras que cumplen las condiciones anteriormente descritas y finalmente retorna un JSON que contiene un array de las palabras filtradas.

- El endpoint se puede acceder con **/words?length=5** donde **length** es un query param para poder definir el numero de letras que requerimos y así poder reutilizar a necesidad.

- El diccionario pasa de pesar 7.5MB a 105KB lo cual lo hace mucho mas manejable a la hora de que los usuarios con dispositivos con recursos de procesamiento y conexión a internet limitados puedan acceder al juego.
- El archivo con las palabras filtradas se puede encontrar en el directorio **public/data/filtered_words.json**

### 🎮 Juego

Para poder acceder a la versión desplegada realiza click [acá](https://teal-dodol-276981.netlify.app/)
