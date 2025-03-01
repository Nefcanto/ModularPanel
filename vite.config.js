// https://github.com/vitejs/vite/issues/5310
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "@tailwindcss/vite"
import svgr from "vite-plugin-svgr"
import generateMergedExports from "./GenerateMergedExports"
import findAliases from "./FindAliases"
import findBreadcrumbProviders from "./FindBreadcrumbProviders"
import findBrowsersAndLookups from "./FindBrowsersAndLookups"
import findClientInitializers from "./FindClientInitializers"
import findDependencies from "./FindDependencies"
import findEntityRenderers from "./FindEntityRenderers"
import findParts from "./FindParts"
import findRichTextComponents from "./FindRichTextComponents"
// import findHeaderActionAugmenters from "./FindHeaderActionAugmenters"
import findBundles from "./FindBundles"
import addPartAndType from "./AddPartAndType"

generateMergedExports()
const parts = findParts()
findBrowsersAndLookups(parts)
findEntityRenderers()
findBreadcrumbProviders()
findRichTextComponents()
findClientInitializers(parts)
// findHeaderActionAugmenters()
const aliases = findAliases()
findDependencies(parts)
const bundles = findBundles(parts)

export default defineConfig(({ mode }) => {

    function inspect() {
        return {
            name: "vite-plugin-inspect",
            enforce: "pre",
            transform(css, id) {
                if (id.endsWith(".css")) {
                    console.log(css)
                }
            },
        }
    }

    return {
        resolve: {
            alias: aliases,
            preserveSymlinks: true
        },
        plugins: [
            react(),
            addPartAndType(),
            tailwindcss(),
            inspect(),
            svgr()
        ],
        server: {
            host: "0.0.0.0",
            allowedHosts: true
        },
        build: {
            minify: true,
            rollupOptions: {
                // input: bundles,
                // output: {
                //     entryFileNames: 'assets/[name]-[hash].js',
                //     chunkFileNames: 'assets/[name]-[hash].js',
                //     assetFileNames: 'assets/[name]-[hash][extname]',
                // },
            },
            // outDir: 'dist',
            // emptyOutDir: true,
        },
        // devServer: {
        //     hot: false,
        //     liveReload: false
        // }
    }
})
