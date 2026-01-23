# 📖 Índice de Documentación

Bienvenido al Portfolio CV. Este archivo te guiará por toda la documentación disponible.

## 🚀 Comienza Aquí

### Para empezar rápidamente:

- [QUICK_START.md](QUICK_START.md) - Guía de primeros pasos (5 minutos)
- [STATUS.txt](STATUS.txt) - Estado actual del proyecto

### Para entender el proyecto:

- [README.md](README.md) - Documentación completa
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Resumen técnico detallado
- [IMPLEMENTATION_REPORT.md](IMPLEMENTATION_REPORT.md) - Reporte de implementación

### Para comandos útiles:

- [COMMANDS.sh](COMMANDS.sh) - Scripts de referencia

---

## 📚 Guía por Secciones

### 1️⃣ Instalación y Configuración

**Archivo**: [QUICK_START.md](QUICK_START.md)

- Instalar dependencias
- Iniciar servidor de desarrollo
- Verificar que todo funciona

### 2️⃣ Personalizar tu CV

**Archivo**: [QUICK_START.md#3️⃣-personalizar-tu-cv](QUICK_START.md)
**Archivo de datos**: `src/data/cv.ts`

Qué editar:

- Nombre y título profesional
- Párrafos de experiencia (about)
- Habilidades técnicas
- Historial laboral
- Educación

### 3️⃣ Cambiar Temas

**Archivo**: [QUICK_START.md#4️⃣-cambiar-tema-por-defecto](QUICK_START.md)
**Archivo de temas**: `src/config/themes.ts`

Opciones:

- `blue-tech` (Azul profesional)
- `slate-minimal` (Gris minimalista)
- `emerald-night` (Verde esmeralda)

O usa el selector flotante 🎨 en la esquina inferior derecha.

### 4️⃣ Build y Despliegue

**Archivo**: [QUICK_START.md#5️⃣-build-para-producción](QUICK_START.md)
**Archivo**: [QUICK_START.md#6️⃣-desplegar-en-github-pages](QUICK_START.md)

Pasos:

1. `npm run build` - Generar archivos de producción
2. `npm run deploy` - Desplegar a GitHub Pages

---

## 🏗️ Estructura del Proyecto

```
curriculumVitae/
├── src/
│   ├── components/          [Componentes React]
│   ├── config/              [Configuración de temas]
│   ├── data/                [Datos del CV]
│   ├── types/               [Tipos TypeScript]
│   ├── styles/              [Estilos globales]
│   ├── App.tsx              [Componente raíz]
│   └── main.tsx             [Punto de entrada]
├── package.json             [Dependencias]
├── vite.config.ts           [Config Vite]
├── tailwind.config.js       [Config Tailwind]
├── tsconfig.json            [Config TypeScript]
└── [Documentación]
    ├── README.md
    ├── QUICK_START.md
    ├── PROJECT_SUMMARY.md
    ├── IMPLEMENTATION_REPORT.md
    ├── COMMANDS.sh
    ├── STATUS.txt
    └── INDEX.md (este archivo)
```

---

## 💡 Tareas Comunes

### Cambiar el nombre en el sitio

1. Abre `src/data/cv.ts`
2. Busca `hero.name`
3. Cambia `'Juan García'` por tu nombre

### Agregar una foto

1. Abre `src/data/cv.ts`
2. Busca `hero.imageUrl`
3. Cambia `undefined` por una URL: `'https://...jpg'`

### Cambiar el tema principal

1. Abre `src/config/themes.ts`
2. Busca `export const DEFAULT_THEME`
3. Cambia `'blue-tech'` por otro tema

### Crear un nuevo tema

1. Abre `src/config/themes.ts`
2. Crea un nuevo objeto `Theme` con tus colores
3. Agrégalo al objeto `themes`
4. Úsalo en `DEFAULT_THEME`

---

## 🔍 Archivos Clave

| Archivo                | Propósito                          | Editar                                |
| ---------------------- | ---------------------------------- | ------------------------------------- |
| `src/data/cv.ts`       | Información personal y profesional | ✅ Sí                                 |
| `src/config/themes.ts` | Definición de temas                | ✅ Sí (avanzado)                      |
| `src/components/*.tsx` | Componentes de UI                  | ⚠️ Solo si sabes React                |
| `src/App.tsx`          | Lógica principal                   | ❌ No necesario                       |
| `tailwind.config.js`   | Config de Tailwind                 | ❌ No tocar                           |
| `package.json`         | Dependencias                       | ⚠️ Solo si necesitas nuevas librerías |

---

## 📞 Soporte Rápido

### El sitio no se ve bien

- Limpia caché: `Ctrl + F5` (Windows) o `Cmd + Shift + R` (Mac)
- Recarga el servidor: Ctrl+C en terminal y `npm run dev` de nuevo

### Código roto después de editar

- Verifica que el TypeScript compila: `npx tsc --noEmit`
- Abre la consola del navegador: F12 → Console

### El tema no cambia

- Abre DevTools → Application → localStorage
- Elimina la clave `theme`
- Recarga la página

### GitHub Pages no muestra el sitio

- Verifica que `package.json` tiene la URL correcta
- Espera 1-2 minutos después de hacer deploy
- Recarga la página: Ctrl+Shift+R

---

## 🎓 Recursos Adicionales

### TypeScript

- [Tipos](src/types/index.ts) - Ver tipos definidos

### React

- [Componentes](src/components/) - Todos los componentes
- [App.tsx](src/App.tsx) - Cómo se unen los componentes

### Tailwind CSS

- [Estilos globales](src/styles/globals.css) - Variables CSS

### Temas

- [Configuración de temas](src/config/themes.ts) - Cómo funcionan los temas

---

## ✅ Checklist Antes de Producción

- [ ] Edité `src/data/cv.ts` con mi información
- [ ] Agregué una foto (opcional)
- [ ] Cambié el tema predeterminado (si lo deseo)
- [ ] Probé el sitio localmente: `npm run dev`
- [ ] El TypeScript compila: `npx tsc --noEmit`
- [ ] El build es exitoso: `npm run build`
- [ ] Actualicé `package.json` con mi URL de GitHub
- [ ] Ejecuté `npm run deploy`
- [ ] El sitio está disponible en mi URL de GitHub Pages

---

## 📝 Notas

- Este proyecto es **estático** y no requiere servidor backend
- Los datos están en archivos TypeScript, fáciles de editar
- Los temas se guardan en `localStorage` del navegador
- El proyecto es completamente **responsive** y funciona en mobile
- No tiene dependencias externas de UI (solo React, Tailwind, TypeScript)

---

## 🎉 ¡Listo!

Tu portfolio está listo para personalizar y desplegar.

Comienza editando `src/data/cv.ts` y luego ejecuta `npm run dev`.

¡Buena suerte! 🚀

---

**Última actualización**: 22 de Enero, 2026
