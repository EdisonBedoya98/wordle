Stack
ReactJS + Vite + Tailwind + Redux

Diseño
Se sigue las dimensiones que se definieron en el Figma, con respecto al tamaño se sigue a nivel de pixel,
tambien se usa Roboto como como fuente para los textos, la cual se configura a nivel de proyecto.

Diccionario de palabras
Se filtraron las palabras haciendo uso uso de un servicio /words?length=5 que está dentro de la carpeta
data, este servicio lleva el nombre de server.js y recibe el numero de letras que una palabra
deba tener a traves de un query param llamado length. Las palabras filtradas del diccionario
se retorna con las que cumplen la condición de length y como el teclado del juego no admite tildes se valida a traves de una expresión regular que solo se retornen las palabras que se puedan crear
a partir del teclado del juego, esto con el fin de generar un archivo mas liviano y que los tiempos
de carga y procesamiento se optimicen. Esta solución sale apartir de que cargar el archivo del diccionario pasado en este reto es de alrededor de 7.5MB lo cual se reduce a 105KB, esto generar que los usuarios con dispositivos con recursos de procesamiento y conexión a internet limitados no precenten problemas para hacer uso del juego.
El resultado del endpoint se carga dentro de la carpeta public/data/filtered_words.json
