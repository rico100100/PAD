
# GLASS (Infrainguinal) + GLASS-AI (Propuesto) + TASC — PAD (React)

## Desarrollo
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy en GitHub Pages
- Este proyecto usa **HashRouter**, por lo que funciona bien en Pages (sin 404).
- Si tu repositorio es de tipo *Project Page* (no user/org), puedes dejar `base: ''` en `vite.config.ts` o poner `base: '/<tu-repo>/'` si quieres rutas absolutas para assets.
- Sube el contenido de `dist/` a la rama `gh-pages` y habilita Pages apuntando a esa rama.

## Contenido
- GLASS infrainguinal (FP/IP), matriz y calculadora.
- GLASS-AI propuesto para aortoilíaco (mapeo TASC y grados AI-0..4).
- TASC II (resumen práctico) y algoritmo integrado (PLAN/WIfI/TAP).
