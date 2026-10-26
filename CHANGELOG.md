# Changelog

Todos los cambios relevantes de este proyecto se documentan aquí.
El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el
versionado [SemVer](https://semver.org/lang/es/).

## [1.1.0] — 2026-10-26

### Añadido

- Pruebas de interfaz con Playwright (24 casos) en escritorio (1280×900) y móvil (Pixel 5):
  titular del hero, CTA de WhatsApp, anclas del menú, menú móvil, desbordamiento
  horizontal, texto alternativo, metadatos y errores de consola.
- Cobertura de pruebas con `@vitest/coverage-v8` y umbrales mínimos sobre los
  módulos con pruebas unitarias (`src/lib/format.js`, `src/lib/utils.js`,
  `src/components/builder/blocks/blogHelpers.js`).
- `public/og-cover.jpg` (1200×630, generado del propio hero) y metadatos
  `og:image`, `twitter:card`, `canonical` y favicon en `index.html`.
- Jobs de CI para cobertura y e2e, con artefactos de cobertura y reporte de
  Playwright.

## [1.0.0] — 2026-10-26

### Añadido

- Publicación del código fuente del frontend de la landing de HYAM.
- README con contexto del proyecto, stack, estructura y guía de ejecución local.
- Metadatos de SEO y Open Graph en `index.html` (título, descripción, `og:*`).
- Pipeline de CI: lint, tests, build en Node 20 y 22, presupuesto de bundle y artefacto.
- Tests unitarios con Vitest para utilidades de formato, clases y helpers del blog.
- Análisis estático de seguridad con CodeQL y auditoría de dependencias.
- Dependabot para npm (semanal, con agrupación) y GitHub Actions (mensual).
- Estándares de repositorio: `.editorconfig`, `.gitattributes`, `.nvmrc`,
  plantillas de issue y pull request, `SECURITY.md` y `CONTRIBUTING.md`.

### Cambiado

- `npm run build` genera `dist/` dentro del repositorio y funciona en Windows
  (antes dependía de `|| true`, que no existe en `cmd`).
- `npm run lint` usa una invocación portable de ESLint.
