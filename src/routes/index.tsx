import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Section } from '~/components/ui/Section';
import { useLocation } from '@builder.io/qwik-city';
import { VolumeCalculator } from '~/components/VolumeCalculator';
import { Hero } from '~/components/ui/Hero';
import { Services } from '~/components/ui/Services';
import { Contact } from '~/components/ui/Contact';

export default component$(() => {
  // Admin mode via ?admin=1
  const loc = useLocation();
  const isAdmin = loc.url.searchParams.get('admin') === '1';

  // Estado editable (simulado). En prod, cargar desde API/DB.
  const tipoCambio = useSignal<number>(6.96);
  const usdt = useSignal<number>(7.2);
  const uef = useSignal<number>(2.5);

  // Demo: persistir en localStorage
  useVisibleTask$(() => {
    const saved = localStorage.getItem('rates');
    if (saved) {
      const o = JSON.parse(saved);
      tipoCambio.value = o.tipoCambio ?? tipoCambio.value;
      usdt.value = o.usdt ?? usdt.value;
      uef.value = o.uef ?? uef.value;
    }
  });

  const saveRates = () => {
    localStorage.setItem('rates', JSON.stringify({ tipoCambio: tipoCambio.value, usdt: usdt.value, uef: uef.value }));
    alert('Valores guardados localmente (demo).');
  };

  return (
    <>
      {/* Hero simple */}
      <Hero />

      {/* Detalle de Servicios */}
      <Services/>

      {/* LCL / FCL & Tipo de cambio */}
      <Section title="Herramientas & Indicadores">
        <div class="grid lg:grid-cols-2 gap-8">
          {/* LCL/FCL */}
          <div class="border rounded-xl p-5">
            <h3 class="font-semibold text-lg">Servicios LCL y FCL</h3>
            <p class="text-muted-foreground mt-2">Consolidación (LCL) y contenedor completo (FCL) según tu necesidad, optimizando costos y tiempos.</p>
            <ul class="list-disc ml-5 mt-3 text-sm">
              <li>LCL: ideal para volúmenes pequeños/medianos.</li>
              <li>FCL: control total del contenedor, menor manipulación.</li>
              <li>Asesoría en rutas y tiempos.</li>
            </ul>
          </div>

          {/* Indicadores editables */}
          <div class="border rounded-xl p-5">
            <h3 class="font-semibold text-lg">Indicadores de Cambio</h3>
            {!isAdmin ? (
              <div class="grid md:grid-cols-3 gap-4 mt-3">
                <div class="border rounded p-4 text-center">
                  <div class="text-sm text-muted-foreground">Tipo de cambio</div>
                  <div class="text-2xl font-bold">{tipoCambio.value.toFixed(2)}</div>
                </div>
                <div class="border rounded p-4 text-center">
                  <div class="text-sm text-muted-foreground">USDT</div>
                  <div class="text-2xl font-bold">{usdt.value.toFixed(2)}</div>
                </div>
                <div class="border rounded p-4 text-center">
                  <div class="text-sm text-muted-foreground">UEF</div>
                  <div class="text-2xl font-bold">{uef.value.toFixed(2)}</div>
                </div>
              </div>
            ) : (
              // eslint-disable-next-line qwik/valid-lexical-scope
              <form preventdefault:submit onSubmit$={saveRates} class="grid gap-3 md:grid-cols-3 mt-3">
                <label class="grid gap-1">
                  <span class="text-sm">Tipo de cambio</span>
                  <input class="border rounded px-3 py-2" type="number" step="0.01" value={tipoCambio.value}
                    onInput$={(e: any) => (tipoCambio.value = parseFloat(e.target.value))} />
                </label>
                <label class="grid gap-1">
                  <span class="text-sm">USDT</span>
                  <input class="border rounded px-3 py-2" type="number" step="0.01" value={usdt.value}
                    onInput$={(e: any) => (usdt.value = parseFloat(e.target.value))} />
                </label>
                <label class="grid gap-1">
                  <span class="text-sm">UEF</span>
                  <input class="border rounded px-3 py-2" type="number" step="0.01" value={uef.value}
                    onInput$={(e: any) => (uef.value = parseFloat(e.target.value))} />
                </label>
                <button class="md:col-span-3 bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
              </form>
            )}
            <p class="text-xs text-muted-foreground mt-2">*Modo admin con <code>?admin=1</code> (demo). Integra tu API en producción.</p>
          </div>
        </div>
      </Section>

      {/* Calculadora de M3 */}
      <Section title="Calculadora de M3" subtitle="Ingresa las medidas para obtener el volumen">
        <VolumeCalculator />
      </Section>

      {/* Testimonios */}
      <Section title="Testimonios de Clientes">
        <div class="grid md:grid-cols-3 gap-6">
          {[
            { name: 'María G.', text: 'Excelente gestión puerta a puerta.' },
            { name: 'J. Fernández', text: 'Mi carga llegó antes de lo previsto.' },
            { name: 'Ind. Andina', text: 'Transparencia en costos y seguimiento 24/7.' },
          ].map((t) => (
            <blockquote key={t.name} class="border rounded-xl p-5 bg-white">
              <p class="italic">“{t.text}”</p>
              <footer class="mt-3 text-sm text-muted-foreground">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </Section>

      {/* Incoterms */}
      <Section title="Incoterms más conocidos">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['EXW','FOB','CIF','DAP','DDP','FCA','CFR','CPT'].map((i) => (
            <div key={i} class="border rounded-xl p-4">
              <div class="font-semibold">{i}</div>
              <p class="text-sm text-muted-foreground mt-1">Descripción breve del Incoterm {i}.</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Últimas salidas de contenedores */}
      <Section title="Últimas salidas de contenedores">
        <div class="space-y-3">
          {[
            { country: 'China', date: '2025-08-10', desc: 'Contenedor FCL 40” hacia Arica' },
            { country: 'USA', date: '2025-08-08', desc: 'LCL bodega Miami consolidado' },
            { country: 'Brasil', date: '2025-08-02', desc: 'FCL 20” Sao Paulo → SCZ' },
          ].map((c, idx) => (
            <div key={idx} class="border rounded-xl p-4 flex items-center justify-between">
              <div>
                <div class="font-medium">{c.country}</div>
                <div class="text-sm text-muted-foreground">{c.desc}</div>
              </div>
              <div class="text-sm opacity-70">{c.date}</div>
            </div>
          ))}
        </div>
      </Section>
      <Contact/>
    </>
  );
});