import { component$, Slot } from '@builder.io/qwik';
import { MainNav } from '~/components/nav/MainNav';
import { FloatingWhatsApp } from '~/components/FloatingWhatsApp';
import { Footer } from '~/components/Footer';

export default component$(() => {
  return (
    <div class="min-h-screen flex flex-col">
      <MainNav />
      <main class="flex-1">
        <Slot />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
});