# 🚀 Guía Rápida

## 1️⃣ Instalar dependencias

```bash
npm install
```

## 2️⃣ Desarrollo local

```bash
npm run dev
```

Abre `http://localhost:5173/curriculumVitae/`

## 3️⃣ Personalizar tu CV

**Archivo**: `src/data/cv.ts`

Actualiza:

- `hero.name` → Tu nombre
- `hero.title` → Tu título profesional
- `hero.description` → Descripción breve
- `hero.imageUrl` → Link a tu foto (opcional)
- `about` → Tus párrafos de experiencia
- `skills` → Tus habilidades técnicas
- `experience` → Tu historial laboral
- `education` → Tu educación

## 4️⃣ Cambiar tema por defecto

**Archivo**: `src/config/themes.ts`

```typescript
export const DEFAULT_THEME = "blue-tech";
// Opciones: 'blue-tech' | 'slate-minimal' | 'emerald-night'
```

O usa el selector de temas flotante en la UI (🎨 botón).

## 5️⃣ Build para producción

```bash
npm run build
```

Genera carpeta `dist/` lista para desplegar.

## 6️⃣ Desplegar en GitHub Pages

```bash
# 1. Actualizar package.json - cambiar homepage a tu repo:
"homepage": "https://TU_USERNAME.github.io/curriculumVitae"

# 2. Desplegar
npm run deploy
```

Sitio en vivo: `https://TU_USERNAME.github.io/curriculumVitae/`

---

**Notas:**

- Los temas se guardan en localStorage - persisten entre sesiones
- Totalmente responsive (mobile/tablet/desktop)
- GitHub Pages compatible desde el start
- TypeScript + Tailwind para máxima calidad
