# CLEANDO — empezar aquí

## Requisitos
- macOS con Node.js LTS instalado.
- Conexión a internet para instalar dependencias la primera vez.

## Ejecutar en el Mac
1. Descomprime `CLEANDO-foto-corregida.zip`.
2. En Terminal, entra en la carpeta descomprimida. Por ejemplo:
   ```bash
   cd ~/Downloads/cleando-fix
   ```
   (El nombre de la carpeta puede variar según dónde lo descomprimas.)
3. Instala dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor:
   ```bash
   npm run dev
   ```
5. Abre `http://localhost:3000`.

## Fotos
Los botones “Hacer una foto y empezar” y “Elegir una foto de la galería” abren el selector del navegador. En Mac, el primero también puede abrir el selector de imágenes: un navegador de escritorio no tiene por qué abrir una cámara física automáticamente. En iPhone Safari, la opción de cámara depende de iOS y de los permisos del navegador.

Si el navegador no muestra el selector:
- Asegúrate de que la ventana de Terminal sigue mostrando que el servidor está listo.
- Recarga la página.
- Prueba primero “Elegir una foto de la galería”.
- Revisa la consola del navegador si sigue fallando.

## Privacidad y limitaciones
La selección y la compresión de la foto se realizan localmente en el navegador. El reconocimiento de objetos puede necesitar descargar el modelo de visión la primera vez. No se incluyen APIs de pago.
