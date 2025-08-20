import { component$ } from '@builder.io/qwik';
import { SITE } from '~/config/site';

export const FloatingWhatsApp = component$(() => {
  const href = `https://wa.me/${SITE.whatsapp}`;
  return (
    <a
      href={href}
      target="_blank"
      class="fixed bottom-5 right-5 h-12 w-12 rounded-full shadow-lg border flex items-center justify-center hover:scale-105 transition bg-green-500 text-white"
      aria-label="WhatsApp"
    >
      🟢
    </a>
  );
});