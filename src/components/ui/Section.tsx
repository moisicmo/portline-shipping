import { Slot, component$ } from '@builder.io/qwik';

export const Section = component$<{ id?: string; title?: string; subtitle?: string }>(
  ({ id, title, subtitle }) => {
    return (
      <section id={id} class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {title && (
          <div class="mb-8">
            <h2 class="text-3xl font-bold animate-fade-in-up">{title}</h2>
            {subtitle && <p class="text-muted-foreground mt-2 animate-fade-in-up delay-75">{subtitle}</p>}
          </div>
        )}
        <Slot />
      </section>
    );
  }
);
