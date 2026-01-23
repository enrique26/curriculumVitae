# Portfolio CV - React Developer

Landing page estática y responsiva para presentar un currículum técnico de un desarrollador React / React Native.

## Stack

- **React** 18.2+
- **TypeScript** 5.0+
- **Vite** 4.3+
- **Tailwind CSS** 3.3+

## Estructura del Proyecto

```
src/
├── components/           # Componentes React reutilizables
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── ThemeSwitcher.tsx
│   └── Footer.tsx
├── config/
│   └── themes.ts        # Sistema de temas (3 temas predefinidos)
├── data/
│   └── cv.ts           # Datos del CV (información personal, experiencia, skills)
├── types/
│   └── index.ts        # Tipos TypeScript
├── styles/
│   └── globals.css     # Estilos globales
├── App.tsx             # Componente raíz
└── main.tsx            # Punto de entrada
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Se abrirá en `http://localhost:5173/curriculumVitae/`

## Build

```bash
npm run build
```

Genera la carpeta `dist/` lista para desplegar.

## Despliegue en GitHub Pages

### Requisitos previos

1. Tener el repositorio en GitHub
2. Habilitar GitHub Pages en la configuración del repositorio

### Pasos

1. Actualizar `package.json` - cambiar `homepage`:

```json
"homepage": "https://TU_USERNAME.github.io/curriculumVitae"
```

2. Instalar `gh-pages`:

```bash
npm install --save-dev gh-pages
```

3. Desplegar:

```bash
npm run deploy
```

El sitio estará disponible en: `https://TU_USERNAME.github.io/curriculumVitae/`

## Cambiar Tema

### Opción 1: Desde la UI

Usa el botón flotante de "🎨 Tema" en la esquina inferior derecha para cambiar entre los 3 temas disponibles.

### Opción 2: Por defecto (código)

En `src/config/themes.ts`, cambia la variable `DEFAULT_THEME`:

```typescript
export const DEFAULT_THEME = "blue-tech"; // Cambiar a 'slate-minimal' o 'emerald-night'
```

### Temas disponibles

- **blue-tech**: Azul profesional (colores fríos, fondo claro)
- **slate-minimal**: Pizarra minimalista (tonos neutros, fondo claro)
- **emerald-night**: Verde esmeralda nocturno (colores fríos, fondo oscuro)

## Modificar Datos del CV

Edita `src/data/cv.ts` con tu información:

```typescript
export const cvData: CVData = {
  hero: {
    name: 'Tu Nombre',
    title: 'Tu Título Profesional',
    description: 'Descripción breve',
    imageUrl: 'https://enlace-a-tu-imagen.jpg', // Opcional
  },
  about: ['Párrafo 1', 'Párrafo 2', 'Párrafo 3'],
  skills: ['React', 'TypeScript', ...],
  experience: [
    {
      id: 'exp-1',
      company: 'Empresa',
      role: 'Rol',
      startDate: 'Ene 2023',
      endDate: 'Dic 2023',
      description: 'Descripción opcional',
    },
    // ...
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'Grado',
      institution: 'Institución',
      year: '2023',
    },
    // ...
  ],
};
```

## Personalizar Temas

En `src/config/themes.ts`, modifica los colores de los temas existentes o crea nuevos:

```typescript
const miTema: Theme = {
  name: "mi-tema",
  label: "Mi Tema",
  colors: {
    primary: "#0366d6",
    "primary-light": "#54a3ff",
    "primary-dark": "#0256c7",
    secondary: "#6f42c1",
    background: "#ffffff",
    "background-alt": "#f6f8fa",
    text: "#24292f",
    "text-muted": "#57606a",
    accent: "#0366d6",
  },
};

export const themes: Record<string, Theme> = {
  "mi-tema": miTema,
  // ... resto de temas
};
```

## Características

✅ **Responsive** - Mobile, tablet y desktop
✅ **Dark mode listo** - Sistema de temas flexible
✅ **Accesible** - Semántica HTML correcta
✅ **Rápido** - Vite + optimizaciones de Tailwind
✅ **GitHub Pages compatible** - Configuración lista
✅ **TypeScript strict** - Tipado completo
✅ **Sin dependencias externas de UI** - Solo Tailwind

## Licencia

MIT
