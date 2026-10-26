# Política de seguridad

## Versiones soportadas

Se mantiene únicamente la rama `main`, que es la que se despliega en producción.

## Reportar una vulnerabilidad

Si encuentras un fallo de seguridad, **no abras un issue público**. Escríbeme a
**danielfernandezb04@gmail.com** con:

- Descripción del problema y su impacto.
- Pasos para reproducirlo (o una prueba de concepto).
- Versión, navegador o entorno donde lo detectaste.

Respondo en un máximo de 5 días hábiles. Si el reporte es válido, publico la
corrección y te acredito si lo deseas.

## Alcance

Este repositorio contiene **solo el frontend**. No incluye base de datos, binarios
de PocketBase, builds ni credenciales: las claves viven en variables de entorno del
servidor (`PB_SUPERUSER_PASSWORD`, `BUILDER_MAILER_API_KEY`).

Quedan fuera de alcance: ingeniería social, denegación de servicio, spam y pruebas
sobre infraestructura de terceros (Hostinger, CDN o WhatsApp).

## Prácticas del repositorio

- CI obligatorio en cada push y pull request (lint, build y presupuesto de bundle).
- Análisis estático con CodeQL en cada cambio y semanalmente.
- Dependabot con actualizaciones semanales de dependencias y mensuales de Actions.
- Ningún secreto versionado; `.env*` está en `.gitignore`.
