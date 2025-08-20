import { component$ } from "@builder.io/qwik";

export const Contact = component$(() => {
  return (
    <section id="contacto" class="bg-muted py-16 animate-fade-in-up">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold mb-8">Contáctanos</h2>
        <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Nombre" class="p-3 border rounded" required />
          <input type="email" placeholder="Correo electrónico" class="p-3 border rounded" required />
          <input type="text" placeholder="Teléfono (opcional)" class="p-3 border rounded md:col-span-2" />
          <textarea placeholder="Mensaje" rows={4} class="p-3 border rounded md:col-span-2" required></textarea>
          <button type="submit" class="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition md:col-span-2">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
});