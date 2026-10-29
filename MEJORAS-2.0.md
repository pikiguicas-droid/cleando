# CLEANDO · actualización de experiencia 2.0

## Qué cambia
- La sesión ahora tiene una barra de progreso con porcentaje y un encabezado que orienta la mirada hacia la zona de la foto.
- La tarjeta de tarea distingue mejor la instrucción principal, el tiempo estimado y el temporizador.
- Se añade un recordatorio breve y amable para reducir presión y mantener el foco en un solo paso.
- Los controles de pausar/continuar y hecho tienen una jerarquía visual más clara y permanecen accesibles en pantallas pequeñas.
- Se refina el lenguaje visual con marfil cálido, lavanda, azul iOS y verde menta, conservando el temporizador y el ajuste de ±30 segundos.
- Se elimina el bloque `<head>` manual duplicado del layout; los metadatos de la aplicación ya se gestionan desde la Metadata API de Next.js.

## Sobre el error de hidratación
La captura muestra una diferencia dentro de `Next.Metadata` (código interno de Next.js), no un error de una tarea concreta. Quitar las etiquetas duplicadas es una limpieza razonable, pero no puedo confirmar que elimine el aviso sin ejecutar la app en el navegador. Si sigue apareciendo, prueba una ventana privada sin extensiones: la propia pantalla de Next.js indica que una extensión puede alterar el HTML antes de que React arranque.

## Ejecutar en Mac
1. Descomprime el ZIP en una carpeta nueva.
2. Abre Terminal dentro de esa carpeta.
3. Ejecuta `npm install` y después `npm run dev`.
4. Abre `http://localhost:3000`.

No se han añadido servicios de pago ni claves de API.
