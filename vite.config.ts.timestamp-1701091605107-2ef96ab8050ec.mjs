// vite.config.ts
import { defineConfig } from "file:///Users/omar/Downloads/Repos/TCreditScoreUi/node_modules/vite/dist/node/index.js";
import react from "file:///Users/omar/Downloads/Repos/TCreditScoreUi/node_modules/@vitejs/plugin-react/dist/index.mjs";
import * as path from "path";
var vite_config_default = defineConfig(({ mode }) => {
  return {
    server: {
      port: 3e3
    },
    resolve: {
      alias: [
        { find: "src", replacement: path.posix.resolve("/", "/src") },
        { find: "state", replacement: path.posix.resolve("/", "/src/state") },
        { find: "components", replacement: path.posix.resolve("/", "/src/components") },
        { find: "types", replacement: path.posix.resolve("/", "/src/types") },
        { find: "data", replacement: path.posix.resolve("/", "/src/data") }
      ]
    },
    plugins: [
      react({
        include: "**/*.tsx"
      })
    ],
    // https://github.com/vitejs/vite/issues/8644
    esbuild: {
      logOverride: { "this-is-undefined-in-esm": "silent" },
      target: "ESNEXT"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvb21hci9Eb3dubG9hZHMvUmVwb3MvVENyZWRpdFNjb3JlVWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9vbWFyL0Rvd25sb2Fkcy9SZXBvcy9UQ3JlZGl0U2NvcmVVaS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvb21hci9Eb3dubG9hZHMvUmVwb3MvVENyZWRpdFNjb3JlVWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2VydmVyOiB7XG4gICAgICBwb3J0OiAzMDAwXG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczogW1xuICAgICAgICB7ZmluZDogXCJzcmNcIiwgcmVwbGFjZW1lbnQ6IHBhdGgucG9zaXgucmVzb2x2ZShcIi9cIiwgXCIvc3JjXCIpfSxcbiAgICAgICAge2ZpbmQ6IFwic3RhdGVcIiwgcmVwbGFjZW1lbnQ6IHBhdGgucG9zaXgucmVzb2x2ZShcIi9cIiwgXCIvc3JjL3N0YXRlXCIpfSxcbiAgICAgICAge2ZpbmQ6IFwiY29tcG9uZW50c1wiLCByZXBsYWNlbWVudDogcGF0aC5wb3NpeC5yZXNvbHZlKFwiL1wiLCBcIi9zcmMvY29tcG9uZW50c1wiKX0sXG4gICAgICAgIHtmaW5kOiBcInR5cGVzXCIsIHJlcGxhY2VtZW50OiBwYXRoLnBvc2l4LnJlc29sdmUoXCIvXCIsIFwiL3NyYy90eXBlc1wiKX0sXG4gICAgICAgIHtmaW5kOiBcImRhdGFcIiwgcmVwbGFjZW1lbnQ6IHBhdGgucG9zaXgucmVzb2x2ZShcIi9cIiwgXCIvc3JjL2RhdGFcIil9XG4gICAgICBdXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICByZWFjdCh7XG4gICAgICAgIGluY2x1ZGU6IFwiKiovKi50c3hcIlxuICAgICAgfSksXG4gICAgXSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdml0ZWpzL3ZpdGUvaXNzdWVzLzg2NDRcbiAgICBlc2J1aWxkOiB7XG4gICAgICBsb2dPdmVycmlkZTogeyBcInRoaXMtaXMtdW5kZWZpbmVkLWluLWVzbVwiOiBcInNpbGVudFwiIH0sXG4gICAgICB0YXJnZXQ6IFwiRVNORVhUXCJcbiAgICB9XG4gIH07XG59KTtcblxuXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdULFNBQVMsb0JBQTZCO0FBQ3RWLE9BQU8sV0FBVztBQUNsQixZQUFZLFVBQVU7QUFFdEIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsU0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEVBQUMsTUFBTSxPQUFPLGFBQWtCLFdBQU0sUUFBUSxLQUFLLE1BQU0sRUFBQztBQUFBLFFBQzFELEVBQUMsTUFBTSxTQUFTLGFBQWtCLFdBQU0sUUFBUSxLQUFLLFlBQVksRUFBQztBQUFBLFFBQ2xFLEVBQUMsTUFBTSxjQUFjLGFBQWtCLFdBQU0sUUFBUSxLQUFLLGlCQUFpQixFQUFDO0FBQUEsUUFDNUUsRUFBQyxNQUFNLFNBQVMsYUFBa0IsV0FBTSxRQUFRLEtBQUssWUFBWSxFQUFDO0FBQUEsUUFDbEUsRUFBQyxNQUFNLFFBQVEsYUFBa0IsV0FBTSxRQUFRLEtBQUssV0FBVyxFQUFDO0FBQUEsTUFDbEU7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsUUFDSixTQUFTO0FBQUEsTUFDWCxDQUFDO0FBQUEsSUFDSDtBQUFBO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUCxhQUFhLEVBQUUsNEJBQTRCLFNBQVM7QUFBQSxNQUNwRCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
