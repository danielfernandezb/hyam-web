# Contribuir

Proyecto mantenido por una sola persona, pero con el flujo de un equipo. Si vas a
enviar un cambio, sigue esto.

## Entorno

```bash
nvm use          # Node 20 (.nvmrc)
npm ci           # instalación reproducible desde el lockfile
npm run dev      # http://localhost:3000
```

## Antes de abrir un PR

```bash
npm run lint
npm run build
```

Los tres pasos deben pasar sin errores. El CI corre exactamente lo mismo, así que
un fallo local es un fallo del PR.

## Ramas

| Prefijo | Uso |
| --- | --- |
| `feat/` | funcionalidad nueva |
| `fix/` | corrección de bug |
| `chore/` | dependencias, CI, configuración |
| `docs/` | documentación |

Ejemplo: `feat/hero-video-fondo`.

## Commits

Formato [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(hero): añadir video de fondo en desktop
fix(menu): corregir precio desalineado en móvil
chore(deps): actualizar vite a 7.3.8
```

Tipos permitidos: `feat`, `fix`, `chore`, `docs`, `refactor`, `perf`, `test`, `style`.

## Reglas del proyecto

- Nada de secretos, tokens ni datos reales de clientes en el repositorio.
- Cambios visuales: incluir captura antes/después en el PR.
- Si tocas el hero o el menú, revisa móvil (≤ 760 px) y escritorio.
- Actualiza `CHANGELOG.md` cuando el cambio sea visible para el usuario.
- No subir `dist/` ni `node_modules/`: el CI construye desde cero.
