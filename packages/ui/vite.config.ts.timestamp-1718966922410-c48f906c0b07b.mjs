// vite.config.ts
import { defineConfig } from "file:///home/akshayvs/Projects/Web%20Apps/OpenSource/Frameworks/artemis-js/node_modules/.pnpm/vite@5.3.1_@types+node@20.11.24_sass@1.77.6/node_modules/vite/dist/node/index.js";
import react from "file:///home/akshayvs/Projects/Web%20Apps/OpenSource/Frameworks/artemis-js/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.0_@swc+helpers@0.5.11_vite@5.3.1_@types+node@20.11.24_sass@1.77.6_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { resolve } from "path";
import tsconfigPaths from "file:///home/akshayvs/Projects/Web%20Apps/OpenSource/Frameworks/artemis-js/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.5_vite@5.3.1_@types+node@20.11.24_/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///home/akshayvs/Projects/Web%20Apps/OpenSource/Frameworks/artemis-js/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.11.24_rollup@4.18.0_typescript@5.4.5_vite@5.3.1_@types+node@20.11.24_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/akshayvs/Projects/Web Apps/OpenSource/Frameworks/artemis-js/packages/ui";
var vite_config_default = defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ rollupTypes: true })],
  build: {
    // output entry settings
    lib: {
      entry: resolve(__vite_injected_original_dirname, "components/index.ts"),
      name: "artimisjs",
      fileName: "artimisjs"
    },
    // bundler optiona
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ha3NoYXl2cy9Qcm9qZWN0cy9XZWIgQXBwcy9PcGVuU291cmNlL0ZyYW1ld29ya3MvYXJ0ZW1pcy1qcy9wYWNrYWdlcy91aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvYWtzaGF5dnMvUHJvamVjdHMvV2ViIEFwcHMvT3BlblNvdXJjZS9GcmFtZXdvcmtzL2FydGVtaXMtanMvcGFja2FnZXMvdWkvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvYWtzaGF5dnMvUHJvamVjdHMvV2ViJTIwQXBwcy9PcGVuU291cmNlL0ZyYW1ld29ya3MvYXJ0ZW1pcy1qcy9wYWNrYWdlcy91aS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCB0c2NvbmZpZ1BhdGhzKCksIGR0cyh7IHJvbGx1cFR5cGVzOiB0cnVlIH0pXSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBvdXRwdXQgZW50cnkgc2V0dGluZ3NcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ2NvbXBvbmVudHMvaW5kZXgudHMnKSxcbiAgICAgIG5hbWU6ICdhcnRpbWlzanMnLFxuICAgICAgZmlsZU5hbWU6ICdhcnRpbWlzanMnLFxuICAgIH0sXG4gICAgLy8gYnVuZGxlciBvcHRpb25hXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0L2pzeC1ydW50aW1lJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3RET00nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQTJaLFNBQVMsb0JBQW9CO0FBQ3hiLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxTQUFTO0FBSmhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsY0FBYyxHQUFHLElBQUksRUFBRSxhQUFhLEtBQUssQ0FBQyxDQUFDO0FBQUEsRUFDOUQsT0FBTztBQUFBO0FBQUEsSUFFTCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcscUJBQXFCO0FBQUEsTUFDL0MsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQTtBQUFBLElBRUEsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsYUFBYSxtQkFBbUI7QUFBQSxNQUNwRCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
