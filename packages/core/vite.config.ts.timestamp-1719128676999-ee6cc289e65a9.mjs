// vite.config.ts
import { defineConfig } from "file:///home/akshayvs/Projects/Web%20Apps/OpenSource/Frameworks/artemis-js/node_modules/.pnpm/vite@5.3.1_@types+node@20.11.24_sass@1.77.6/node_modules/vite/dist/node/index.js";
import react from "file:///home/akshayvs/Projects/Web%20Apps/OpenSource/Frameworks/artemis-js/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.0_@swc+helpers@0.5.11_vite@5.3.1_@types+node@20.11.24_sass@1.77.6_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { resolve } from "path";
import tsconfigPaths from "file:///home/akshayvs/Projects/Web%20Apps/OpenSource/Frameworks/artemis-js/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.5.2_vite@5.3.1_@types+node@20.11.24_sass@1.77.6_/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///home/akshayvs/Projects/Web%20Apps/OpenSource/Frameworks/artemis-js/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.11.24_rollup@4.18.0_typescript@5.5.2_vite@5.3.1_@types+node@20.11.24_sass@1.77.6_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/akshayvs/Projects/Web Apps/OpenSource/Frameworks/artemis-js/packages/core";
var vite_config_default = defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ rollupTypes: true })],
  build: {
    // output entry settings
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "artimis-core",
      fileName: "artimis-core"
    },
    // bundler option
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ha3NoYXl2cy9Qcm9qZWN0cy9XZWIgQXBwcy9PcGVuU291cmNlL0ZyYW1ld29ya3MvYXJ0ZW1pcy1qcy9wYWNrYWdlcy9jb3JlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ha3NoYXl2cy9Qcm9qZWN0cy9XZWIgQXBwcy9PcGVuU291cmNlL0ZyYW1ld29ya3MvYXJ0ZW1pcy1qcy9wYWNrYWdlcy9jb3JlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2Frc2hheXZzL1Byb2plY3RzL1dlYiUyMEFwcHMvT3BlblNvdXJjZS9GcmFtZXdvcmtzL2FydGVtaXMtanMvcGFja2FnZXMvY29yZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCB0c2NvbmZpZ1BhdGhzKCksIGR0cyh7IHJvbGx1cFR5cGVzOiB0cnVlIH0pXSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBvdXRwdXQgZW50cnkgc2V0dGluZ3NcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ2FydGltaXMtY29yZScsXG4gICAgICBmaWxlTmFtZTogJ2FydGltaXMtY29yZScsXG4gICAgfSxcbiAgICAvLyBidW5kbGVyIG9wdGlvblxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC9qc3gtcnVudGltZSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgICAgICAncmVhY3QvanN4LXJ1bnRpbWUnOiAnanN4UnVudGltZSdcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpYSxTQUFTLG9CQUFvQjtBQUM5YixPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sU0FBUztBQUpoQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLGNBQWMsR0FBRyxJQUFJLEVBQUUsYUFBYSxLQUFLLENBQUMsQ0FBQztBQUFBLEVBQzlELE9BQU87QUFBQTtBQUFBLElBRUwsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBO0FBQUEsSUFFQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxhQUFhLG1CQUFtQjtBQUFBLE1BQ3BELFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxVQUNiLHFCQUFxQjtBQUFBLFFBQ3ZCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
