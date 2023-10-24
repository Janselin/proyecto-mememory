// vite.config.js
export default {
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        // Agrega esta opción para trabajar con módulos ES6
        esmoduleInterop: true,
    },
};