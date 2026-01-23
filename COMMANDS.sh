#!/bin/bash
# Útil para referencia rápida

# ========================================
# DESARROLLO LOCAL
# ========================================

# Instalar dependencias (solo una vez)
npm install

# Iniciar servidor de desarrollo
npm run dev
# Acceso: http://localhost:5173/curriculumVitae/

# Verificar que el TypeScript compila
npx tsc --noEmit

# ========================================
# EDITAR DATOS
# ========================================

# Editar información del CV
# Archivo: src/data/cv.ts
# - Nombre, título, descripción
# - Párrafos de "about"
# - Skills
# - Experiencia
# - Educación

# Cambiar tema predeterminado
# Archivo: src/config/themes.ts
# Línea: export const DEFAULT_THEME = 'blue-tech';
# Opciones: 'blue-tech' | 'slate-minimal' | 'emerald-night'

# ========================================
# CREAR NUEVO TEMA (Opcional)
# ========================================

# Editar: src/config/themes.ts
# Agregar nuevo objeto Theme y añadir a themes{}

# ========================================
# PRODUCCIÓN
# ========================================

# Build optimizado
npm run build
# Resultado: carpeta dist/

# Preview del build local
npm run preview

# ========================================
# DESPLEGAR EN GITHUB PAGES
# ========================================

# 1. Actualizar package.json (cambiar TU_USERNAME)
# "homepage": "https://TU_USERNAME.github.io/curriculumVitae"

# 2. Asegurarse de tener gh-pages instalado
npm list gh-pages

# 3. Desplegar
npm run deploy

# Resultado: https://TU_USERNAME.github.io/curriculumVitae/

# ========================================
# TROUBLESHOOTING
# ========================================

# El puerto 5173 ya está en uso
npm run dev -- --port 3000

# Limpiar caché de node_modules
rm -rf node_modules package-lock.json
npm install

# Build falla
npm run build 2>&1 | head -20

# Verificar versión de TypeScript
npx tsc --version
