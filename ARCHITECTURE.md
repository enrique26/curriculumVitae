╔═══════════════════════════════════════════════════════════════════════════╗
║ ARQUITECTURA DEL PROYECTO ║
║ Portfolio CV - React + TypeScript + Tailwind ║
╚═══════════════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────────────────┐
│ PUNTO DE ENTRADA │
├─────────────────────────────────────────────────────────────────────────────┤
│ index.html → main.tsx → App.tsx │
│ │
│ • index.html: HTML básico que carga React │
│ • main.tsx: Monta la aplicación en #root │
│ • App.tsx: Componente raíz, gestiona estado de temas │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ FLUJO DE DATOS │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ App.tsx (Estado global) │
│ │ │
│ ├─→ currentTheme (useState) │
│ │ └─→ Aplicado con: applyTheme() de themes.ts │
│ │ └─→ Guardado en: localStorage │
│ │ │
│ ├─→ handleThemeChange(themeName) │
│ │ └─→ Cambia tema dinámicamente │
│ │ └─→ Pasa a ThemeSwitcher como prop │
│ │ │
│ └─→ Props a componentes: │
│ ├─→ Hero (hero data) │
│ ├─→ About (paragraphs) │
│ ├─→ Skills (skills array) │
│ ├─→ Experience (experience array) │
│ ├─→ Education (education array) │
│ └─→ ThemeSwitcher (currentTheme, onThemeChange) │
│ │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ ESTRUCTURA DE COMPONENTES │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ ┌──────────────────────────────────────────────────────────────────────┐ │
│ │ App │ │
│ ├──────────────────────────────────────────────────────────────────────┤ │
│ │ │ │
│ │ ┌─ Navbar ─────────────────────────────────────────────────────┐ │ │
│ │ │ Logo + Links de navegación │ │ │
│ │ └────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ ┌─ Hero ───────────────────────────────────────────────────────┐ │ │
│ │ │ Nombre + Título + Descripción + Foto/Placeholder │ │ │
│ │ │ Botones de CTA │ │ │
│ │ └────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ ┌─ About ───────────────────────────────────────────────────────┐ │ │
│ │ │ 3 párrafos con borde de acento │ │ │
│ │ └────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ ┌─ Skills ──────────────────────────────────────────────────────┐ │ │
│ │ │ Grid responsive de habilidades (2→3→4 columnas) │ │ │
│ │ │ Cards con hover effect │ │ │
│ │ └────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ ┌─ Experience ──────────────────────────────────────────────────┐ │ │
│ │ │ Timeline vertical con experiencia laboral │ │ │
│ │ │ Empresa, rol, fechas, descripción │ │ │
│ │ └────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ ┌─ Education ───────────────────────────────────────────────────┐ │ │
│ │ │ Grid de tarjetas con educación │ │ │
│ │ │ Grado, institución, año │ │ │
│ │ └────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ ┌─ Footer ──────────────────────────────────────────────────────┐ │ │
│ │ │ Links de redes sociales + Copyright │ │ │
│ │ └────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ ┌─ ThemeSwitcher (Flotante) ───────────────────────────────────┐ │ │
│ │ │ 🎨 Botón con dropdown de temas │ │ │
│ │ │ Bottom-right corner │ │ │
│ │ └────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ └──────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ SISTEMA DE TEMAS │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ src/config/themes.ts │
│ ├─ blueTech: Theme │
│ ├─ slateMinimal: Theme │
│ ├─ emeraldNight: Theme │
│ │ │
│ ├─ themes: Record<string, Theme> [Mapa de temas] │
│ ├─ DEFAULT_THEME: string │
│ ├─ getTheme(themeName): Theme │
│ └─ applyTheme(theme): void │
│ └─→ Establece variables CSS en <html> │
│ │
│ Cada tema define 9 colores: │
│ • primary, primary-light, primary-dark │
│ • secondary │
│ • background, background-alt │
│ • text, text-muted │
│ • accent │
│ │
│ Variables CSS en globals.css: │
│ • --color-primary │
│ • --color-primary-light │
│ • ... etc │
│ │
│ Tailwind extensions en tailwind.config.js: │
│ • primary: var(--color-primary) │
│ • background: var(--color-background) │
│ • text: var(--color-text) │
│ • ... etc │
│ │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ DATOS Y CONFIGURACIÓN │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ src/data/cv.ts │
│ └─ cvData: CVData │
│ ├─ hero: { name, title, description, imageUrl } │
│ ├─ about: string[] (3 párrafos) │
│ ├─ skills: string[] (12+ habilidades) │
│ ├─ experience: Experience[] (4 entradas) │
│ │ └─ { company, role, startDate, endDate, description } │
│ └─ education: Education[] (2 entradas) │
│ └─ { degree, institution, year } │
│ │
│ src/types/index.ts │
│ ├─ CVData │
│ ├─ ThemeName: 'blue-tech' | 'slate-minimal' | 'emerald-night' │
│ └─ Theme { name, label, colors } │
│ │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ ESTILOS │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ src/styles/globals.css │
│ ├─ Reset CSS │
│ ├─ Variables CSS de temas (:root) │
│ ├─ Tailwind directives (@tailwind base/components/utilities) │
│ ├─ Transiciones suaves │
│ └─ Estilos globales │
│ │
│ tailwind.config.js │
│ ├─ Content scanning (src/\*_/_.{js,ts,jsx,tsx}) │
│ ├─ Color extensions (variables dinámicas) │
│ └─ Plugins (ninguno) │
│ │
│ postcss.config.js │
│ ├─ tailwindcss │
│ └─ autoprefixer │
│ │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ BUILD Y CONFIGURACIÓN │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ package.json │
│ ├─ Scripts: │
│ │ ├─ dev: vite (puerto 5173) │
│ │ ├─ build: tsc && vite build │
│ │ ├─ preview: vite preview │
│ │ └─ deploy: build && gh-pages -d dist │
│ │ │
│ ├─ Dependencias: React, React DOM │
│ └─ DevDependencies: TypeScript, Vite, Tailwind, PostCSS, gh-pages │
│ │
│ vite.config.ts │
│ ├─ Base: '/curriculumVitae/' (para GitHub Pages) │
│ ├─ Plugin: @vitejs/plugin-react │
│ └─ Alias: @ → src/ │
│ │
│ tsconfig.json │
│ ├─ strict: true (máximo tipado) │
│ ├─ target: ES2020 │
│ ├─ jsx: react-jsx │
│ └─ Rutas base configuradas │
│ │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ FLUJO DE CAMBIO DE TEMA │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ 1. Usuario hace click en botón de tema │
│ └─→ ThemeSwitcher.tsx captura el evento │
│ │
│ 2. Llama a onThemeChange(themeName) │
│ └─→ Pase a App.tsx │
│ │
│ 3. App.tsx actualiza state: setCurrentTheme(themeName) │
│ └─→ Trigger del useEffect │
│ │
│ 4. useEffect obtiene el tema: const theme = getTheme(currentTheme) │
│ └─→ De themes.ts │
│ │
│ 5. Aplica el tema: applyTheme(theme) │
│ └─→ Establece variables CSS en document.documentElement │
│ │
│ 6. Guarda en localStorage: localStorage.setItem('theme', currentTheme) │
│ └─→ Para persistencia entre sesiones │
│ │
│ 7. Tailwind CSS usa las variables │
│ └─→ Todas las clases se actualizan automáticamente │
│ │
│ 8. Transiciones CSS suaves (0.3s) │
│ └─→ Definidas en globals.css │
│ │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ RESPONSABILIDAD DE ARCHIVOS │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ App.tsx → Orquestación, estado de tema │
│ src/components/\*.tsx → UI individual, sin lógica compleja │
│ src/config/themes.ts → Definición y aplicación de temas │
│ src/data/cv.ts → Datos mockup del CV │
│ src/types/index.ts → Contratos TypeScript │
│ src/styles/globals.css → Variables CSS, reset, transiciones │
│ tailwind.config.js → Configuración de Tailwind │
│ vite.config.ts → Configuración de Vite │
│ tsconfig.json → Configuración de TypeScript │
│ │
└─────────────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════
¡LISTO PARA PRODUCCIÓN!
═══════════════════════════════════════════════════════════════════════════════
