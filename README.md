# HYAM — Sitio web de restaurante

Landing de una sola página para **HYAM**, hamburguesería artesanal y ahumada en Cartagena. Estética oscura con acentos dorados, hero cinematográfico, menú, galería, pedidos por WhatsApp y selector de idioma.

[![Demo en vivo](https://img.shields.io/badge/demo-hyamfood.com-d2a24a?style=for-the-badge&labelColor=101a2b)](https://hyamfood.com)
[![CI](https://github.com/danielfernandezb/hyam-web/actions/workflows/ci.yml/badge.svg)](https://github.com/danielfernandezb/hyam-web/actions/workflows/ci.yml)
[![CodeQL](https://github.com/danielfernandezb/hyam-web/actions/workflows/codeql.yml/badge.svg)](https://github.com/danielfernandezb/hyam-web/actions/workflows/codeql.yml)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=101a2b&labelColor=101a2b)](#)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=101a2b)](#)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white&labelColor=101a2b)](#)
[![PocketBase](https://img.shields.io/badge/PocketBase-B8DBE4?style=flat-square&logo=pocketbase&logoColor=101a2b&labelColor=101a2b)](#)

**En vivo:** https://hyamfood.com

---

## Contexto

Proyecto comercial real: la marca necesitaba una presencia web propia —no una plantilla de delivery— que transmitiera el producto y convirtiera visitas en pedidos por WhatsApp.

Este repositorio contiene el **código fuente del frontend**. La versión publicada corre sobre Hostinger Horizons; aquí está el código tal como se construyó y ajustó, sin datos de producción ni credenciales.

## Stack

| Capa | Tecnología |
| --- | --- |
| UI | React 18, React Router 7 |
| Build | Vite 7 |
| Estilos | Tailwind CSS 3, CSS propio por sección |
| Componentes | Radix UI + shadcn/ui, lucide-react |
| Animación | Framer Motion, transiciones CSS |
| Datos | PocketBase (cliente REST) |
| Calidad | ESLint 9, knip |

## Qué incluye

- **Hero** con imagen de producto, titular en dos tonos y CTAs de conversión («Pedir por WhatsApp» / «Ver experiencias»).
- **Navegación anclada** a las secciones: inicio, historia, creaciones, especialidades, galería y contacto.
- **Menú de creaciones** con fichas de producto, imagen, descripción y precios.
- **Galería** de ambiente y producto.
- **Pedido directo por WhatsApp** como único funnel de conversión.
- **Selector de idioma** con banderas servidas por CDN.
- **Responsive** y respeto por `prefers-reduced-motion`.
- **Metadatos para SEO** (título, descripción, Open Graph).

## Estructura

```
hyam-web/
├── index.html                  # Shell + meta tags
├── src/
│   ├── App.jsx                 # Router (una sola ruta: la landing)
│   ├── main.jsx
│   ├── pages/
│   │   ├── hyam/HyamPage.jsx   # La landing completa (~690 líneas)
│   │   └── builder/            # Páginas de plantilla del builder
│   ├── components/
│   │   ├── ui/                 # Primitivos shadcn/ui
│   │   └── builder/            # Bloques reutilizables
│   ├── lib/                    # Cliente PocketBase, utilidades
│   └── data/                   # Contenido del menú
├── plugins/                    # Plugins de Vite del editor visual
└── tools/
```

## Cómo correrlo

Requiere Node 18+ (probado con 18/20).

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # genera dist/
npm run lint
```

**Nota sobre datos:** el cliente de PocketBase apunta al endpoint del hosting (`/hcgi/platform`). En local la interfaz se renderiza completa, pero las llamadas a datos necesitan ese backend; para probarlas, cambia `src/lib/pocketbaseClient.js` a tu propia instancia.

## Calidad y CI

| Control | Herramienta | Se ejecuta |
| --- | --- | --- |
| Lint | ESLint 9 | push y PR |
| Tests unitarios | Vitest (32 casos) | push y PR |
| Build | Vite 7 en Node 20 y 22 | push y PR |
| Presupuesto de bundle | JS ≤ 800 KB | push y PR |
| Auditoría de dependencias | `npm audit` (high/critical) | push y PR |
| Análisis estático | CodeQL `security-and-quality` | push, PR y semanal |
| Actualizaciones | Dependabot | semanal (npm) / mensual (Actions) |

```bash
npm ci            # instalación reproducible
npm run lint      # ESLint
npm run test      # Vitest
npm run check     # lint + tests + build de una vez
```

## Notas de ingeniería

- **Un solo componente de página** para toda la landing: el estado visual vive en `HyamPage.jsx` (secciones, animaciones y datos del menú), sin dependencias de estado global.
- **Pedido por WhatsApp sin backend propio**: menos superficie de ataque, cero fricción para la marca.
- **Sin secretos en el repo**: las credenciales de PocketBase y del mailer se leen de variables de entorno en el servidor.
- Fuera del repositorio: base de datos real, binario de PocketBase, builds y notas internas.

## Autor

**Daniel Alberto Fernández Botero** — Desarrollador Full Stack · Ingeniero de Sistemas
[Portafolio](https://danielfernandezb.github.io/portafolio-daniel/) · [LinkedIn](https://www.linkedin.com/in/daniel-fern%C3%A1ndez-100552263/) · [GitHub](https://github.com/danielfernandezb)

---

### English summary

Real commercial project: a single-page restaurant site for **HYAM**, an artisan smoked-burger brand in Cartagena, Colombia. Dark UI with gold accents, cinematic hero, menu, gallery and a WhatsApp-only ordering funnel.

Built with **React 18 + Vite 7 + Tailwind CSS 3**, Radix/shadcn primitives and a PocketBase REST client. Live at [hyamfood.com](https://hyamfood.com). No credentials, production data or build artifacts are included in this repository.
