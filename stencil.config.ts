// stencil.config.ts

import { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';

export const config: Config = {
  namespace: 'component-lib',
  globalStyle: './src/global/app.css',
  plugins: [
    postcss(),
    tailwind(),
    tailwindHMR(),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: 'loader', // Changed from '../loader' to 'loader'
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
