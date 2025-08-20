import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';


export const Hero = component$(() => {
  return (
<section
  class="relative bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/70 before:to-black/30 before:z-0 overflow-hidden"
  style={{ backgroundImage: 'url(/src/assets/images/containers.gif)' }}
>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-44 grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h1 class="text-5xl lg:text-6xl font-extrabold text-white leading-snug animate-fade-in-up">
        Soluciones Globales de Transporte
        <br /> & Logística Internacional
      </h1>
      <p class="mt-4 text-lg text-white animate-fade-in-up delay-100">
        Marítimo, Aéreo y Terrestre. Servicios FCL / LCL y Pagos a Proveedores.
      </p>
      <div class="mt-6 flex gap-4 animate-fade-in-up delay-200">
        <Link
          href="#servicios"
          class="px-6 py-3 rounded bg-red-600 text-white hover:bg-red-700 transition"
        >
          Ver Servicios
        </Link>
        <Link
          href="#contacto"
          class="px-6 py-3 rounded border border-white text-white hover:bg-white hover:text-black transition"
        >
          Contacto
        </Link>
      </div>
    </div>
  </div>
</section>

  );
});