# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


codigo para la pantalla de carga 

<div class="spinner"></div>

<style>
.spinner {
   position: relative;
   width: 22.4px;
   height: 22.4px;
}

.spinner::before,
.spinner::after {
   content: '';
   width: 100%;
   height: 100%;
   display: block;
   animation: spinner-b4c8mmmd 0.5s backwards, spinner-49opz7md 1.25s 0.5s infinite ease;
   border: 5.6px solid #dc2021;
   border-radius: 50%;
   box-shadow: 0 -33.6px 0 -5.6px #dc2021;
   position: absolute;
}

.spinner::after {
   animation-delay: 0s, 1.25s;
}

@keyframes spinner-b4c8mmmd {
   from {
      box-shadow: 0 0 0 -5.6px #dc2021;
   }
}

@keyframes spinner-49opz7md {
   to {
      transform: rotate(360deg);
   }
}
</style>

