import { defineConfig, type Plugin } from 'vite';
import type { Plugin as EsbuildPlugin } from 'esbuild';
import react from '@vitejs/plugin-react';

// Strip broken/missing sourcemap references from lucide-react during dev
function stripLucideSourcemaps(): Plugin {
  return {
    name: 'strip-lucide-sourcemaps',
    apply: 'serve',
    enforce: 'pre',
    transform(code, id) {
      const norm = id.replace(/\\/g, '/');
      if (norm.includes('/node_modules/lucide-react/dist/esm/')) {
        return {
          code: code.replace(/\/\/#[\s]*sourceMappingURL=.*$/gm, ''),
          map: null,
        };
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [stripLucideSourcemaps(), react()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'strip-lucide-sourcemaps-esbuild',
          setup(build) {
            const filter = /node_modules[\\\/]lucide-react[\\\/]dist[\\\/]esm[\\\/].*\.js$/;
            build.onLoad({ filter }, async (args) => {
              const fsMod = await import('fs');
              let code = await fsMod.promises.readFile(args.path, 'utf8');
              code = code.replace(/\/\/#[\s]*sourceMappingURL=.*$/gm, '');
              return { contents: code, loader: 'js' };
            });
          },
        } as EsbuildPlugin,
      ],
    },
  },
});
