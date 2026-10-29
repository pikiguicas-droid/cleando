# CLEANDO — pequeños pasos, un espacio más ligero

CLEANDO es una PWA para convertir el desorden en acciones pequeñas y concretas. Está diseñada para usarse primero en móvil, con especial cuidado en reducir decisiones, mantener una tarea principal visible y celebrar los avances sin culpa.

## Lo que incluye esta versión

- Captura con cámara o selección de una imagen de la galería.
- Redimensionado y compresión local de fotos para reducir el uso de memoria y almacenamiento.
- Detección de objetos en el navegador con TensorFlow.js / COCO-SSD cuando el modelo se puede descargar y cargar.
- Plan genérico de respaldo si no hay conexión, el modelo no carga o no detecta objetos útiles.
- Selección de una sesión breve de 2, 5, 10 o 15 minutos; el plan se ajusta a la duración elegida sin cortar tareas a la mitad.
- Tareas una por una, resaltado del objeto cuando existe una detección, selección manual de zona, temporizador con pausa/reanudación y ajuste de tiempo.
- Acompañamiento por voz opcional, según las voces y APIs disponibles en el navegador.
- Resumen, historial local y comparación antes/después.
- Persistencia en IndexedDB y PWA instalable.
- Respeto por la preferencia del sistema para reducir movimiento y posibilidad de ampliar el texto con el zoom del navegador.

## Requisitos

- macOS con Node.js 20.9 o posterior (recomendado: versión LTS actual).
- npm, incluido con Node.js.
- Para probarlo en iPhone como PWA, una URL HTTPS. La cámara y algunas funciones del navegador no están disponibles en cualquier URL HTTP de red local.

## Ejecutarlo en el Mac

1. Descomprime el ZIP.
2. Abre Terminal y entra en la carpeta del proyecto:

   ```bash
   cd /ruta/a/cleando
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el modo de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre `http://localhost:3000` en el navegador.

Para crear la versión de producción estática:

```bash
npm run build
```

La configuración está preparada para exportación estática y GitHub Pages. La salida de Next.js se genera en `out/`.

## Usarlo en iPhone 11

La forma más sencilla es publicar la versión estática en una URL HTTPS, por ejemplo con GitHub Pages:

1. Crea un repositorio privado o público en GitHub y sube el contenido del proyecto.
2. En GitHub, abre **Settings → Pages** y selecciona GitHub Actions como fuente si aún no está configurado.
3. El workflow incluido en `.github/workflows/deploy.yml` publica el sitio al subir cambios a la rama configurada. Comprueba el nombre de la rama en ese workflow.
4. Cuando termine la acción, abre la URL HTTPS publicada en Safari en el iPhone.
5. Pulsa **Compartir → Añadir a pantalla de inicio** y confirma.
6. Abre CLEANDO desde el icono de la pantalla de inicio.

La instalación como PWA no requiere una suscripción ni una API key de pago. GitHub Pages es una opción de alojamiento estático sin coste dentro de sus condiciones y límites vigentes; no se ha configurado ningún servicio de pago.

## Privacidad, conexión y límites importantes

- Las fotos se procesan en el navegador y se guardan localmente en IndexedDB; el código de la aplicación no envía la foto a un servidor propio.
- La primera detección puede necesitar conexión para descargar las bibliotecas o los pesos del modelo. Si no están disponibles, CLEANDO ofrece un plan genérico.
- La detección COCO-SSD reconoce un conjunto limitado de objetos cotidianos; no entiende todo el contexto de una habitación y puede equivocarse. El resaltado automático solo debe aparecer cuando existe una detección. La selección manual sirve como alternativa.
- El reconocimiento de comandos de voz depende del navegador. En algunos navegadores puede no estar disponible o depender de servicios del sistema. La síntesis de voz utiliza las voces instaladas en el dispositivo.
- El modo sin conexión no garantiza la primera carga del modelo de visión. La interfaz y los recursos que ya se hayan almacenado en caché pueden seguir disponibles, pero una instalación nueva necesita conexión.
- El historial y las fotos guardadas ocupan espacio en el dispositivo. Borrar los datos del sitio desde los ajustes del navegador puede borrar el historial local.

## Solución de problemas

- **No se abre la cámara:** usa Safari, comprueba los permisos y asegúrate de abrir una URL HTTPS cuando pruebes desde el iPhone.
- **No detecta objetos:** espera a que se descargue el modelo o elige continuar con el plan genérico; también puedes marcar manualmente una zona en la pantalla de tarea.
- **La voz no funciona:** activa el acompañamiento en Ajustes y comprueba que el navegador admita síntesis o reconocimiento de voz. La voz no es necesaria para completar una sesión.
- **No aparece la versión nueva tras actualizar:** cierra y vuelve a abrir la PWA. El service worker usa una nueva versión de caché para invalidar los recursos anteriores.

## Costes

El proyecto no integra claves de API facturables, suscripciones ni servicios de inferencia de pago. El alojamiento y el uso de los servicios externos que decidas utilizar están sujetos a sus propias condiciones. El modelo de visión puede requerir descargar archivos de modelo desde la red, pero no requiere pagar por petición.
