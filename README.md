# Ascencio Tax – Shared Package

Paquete central con tipos, validaciones e i18n compartidos entre API, Web y Mobile.

## Qué incluye

- **Types & interfaces**: contratos de dominio y DTOs reutilizables.
- **Schemas (Zod)**: validaciones de entrada consistentes para clientes y servidor.
- **i18n keys**: catálogo de claves de validación y textos comunes.
- **Constants/Enums**: valores compartidos por los módulos.

## Instalación

Usa el registro o la referencia Git según tu flujo:

```bash
# npm
npm install github:ayunierto/ascencio-tax-shared#main

# pnpm
pnpm add github:ayunierto/ascencio-tax-shared#main

# yarn
yarn add github:ayunierto/ascencio-tax-shared#main
```

## Uso rápido

```ts
import { createUserSchema } from '@ascencio/shared/schemas';
import { UsersMessages } from '@ascencio/shared/i18n';

const parsed = createUserSchema.parse(payload);
```

## Scripts de desarrollo

- `npm run build`: compila TypeScript y emite artefactos.
- `npm test`: ejecuta pruebas (si existen en el paquete).
- `npm run lint`: valida estilo y tipos.

## Estructura principal

- `src/schemas`: validaciones Zod.
- `src/i18n`: llaves de mensajes de validación (por módulo y comunes).
- `src/interfaces`: contratos compartidos.
- `src/schemas/index.ts`: export central de esquemas.

## Convenciones de i18n

- Las claves de validación residen en `src/i18n/*-keys.ts` y se centralizan en `src/i18n/index.ts`.
- Claves repetidas entre módulos van en `src/i18n/common-keys.ts`.
- Los diccionarios de texto viven en el repo web (`ascencio-tax-web/dictionaries`). Usa `en.json` como fuente de verdad y sincroniza `es.json` y `fr-CA.json`.

## Publicación

Empuja a `main` y etiqueta versión si usas release automation. Asegura que `npm run build` pase antes de publicar.

## Soporte

Abre un issue en el monorepo o contacta al equipo de plataforma.
