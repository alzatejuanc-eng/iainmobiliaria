# SinergIA · Diagnóstico de Madurez Digital v3.0
## Instrucciones de instalación y uso

### Archivos incluidos

| Archivo | Descripción |
|---|---|
| `diagnostico.html` | Herramienta principal de diagnóstico (32 preguntas, 8 áreas) |
| `historial.html` | Panel con todas las evaluaciones guardadas |
| `datos.js` | Datos compartidos: preguntas, opciones y mapa de Sprints |
| `estilos.css` | Estilos compartidos entre ambas páginas |
| `README.md` | Este archivo |

### Uso en local (sin servidor)

1. Descargue los 4 archivos en la **misma carpeta**
2. Abra `diagnostico.html` directamente en su navegador (doble clic)
3. Complete el diagnóstico — los resultados se guardan automáticamente
4. Haga clic en **"Ver historial"** para ver evaluaciones anteriores

> **Importante:** Todos los archivos deben estar en la misma carpeta.
> Si falta alguno, el diagnóstico no cargará correctamente.

### Uso en servidor web

Suba los 4 archivos al mismo directorio de su servidor y acceda a:
```
https://su-dominio.com/ruta/diagnostico.html
```

No requiere base de datos ni configuración de servidor. Funciona con cualquier hosting estático (GitHub Pages, Netlify, Vercel, etc.).

### Almacenamiento de datos

Los diagnósticos se guardan en el **localStorage del navegador** del dispositivo donde se completan. Esto significa:

- ✓ Los datos persisten entre sesiones en el mismo navegador
- ✓ No se envía ningún dato a servidores externos
- ✓ Funciona sin conexión a internet (excepto las fuentes de Google Fonts)
- ⚠ Los datos NO se comparten entre dispositivos distintos
- ⚠ Los datos se pierden si se borra la caché del navegador
- ⚠ En modo incógnito/privado los datos no persisten al cerrar

### Características principales

**Diagnóstico:**
- 32 preguntas en 8 áreas con pesos ponderados
- Puntaje global /100 con etiqueta de madurez (Crítico / Deficiente / En desarrollo / Maduro / Optimizado)
- Guardado automático de progreso — puede cerrar y continuar después
- Guardado automático al completar
- Roadmap de 4 Sprints personalizado según puntaje
- Bloque ROI con estimación de horas y valor anual

**Historial:**
- Vista de todas las evaluaciones guardadas
- Expandible con puntajes por área y roadmap
- Detalle completo de respuestas por pregunta
- Imprimir evaluación individual (PDF)
- Copiar resumen al portapapeles
- Exportar todo el historial como archivo .txt
- Eliminar evaluaciones individuales o todas

### Compatibilidad

| Navegador | Soporte |
|---|---|
| Chrome 90+ | ✓ Completo |
| Firefox 88+ | ✓ Completo |
| Safari 14+ | ✓ Completo |
| Edge 90+ | ✓ Completo |
| IE 11 | ✗ No soportado |

---
SinergIA by Human+AI · IA que multiplica, no reemplaza · 2026
