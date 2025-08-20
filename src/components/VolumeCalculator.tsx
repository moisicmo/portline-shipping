import { component$, useSignal } from '@builder.io/qwik';

export const VolumeCalculator = component$(() => {
  const largo = useSignal<number>(1);
  const ancho = useSignal<number>(1);
  const alto = useSignal<number>(1);
  const unit = useSignal<'m' | 'cm'>('m');

  const toMeters = (v: number) => (unit.value === 'm' ? v : v / 100);
  const volumen = () => {
    const L = toMeters(largo.value);
    const A = toMeters(ancho.value);
    const H = toMeters(alto.value);
    return +(L * A * H).toFixed(4);
  };

  return (
    <div class="border rounded-xl p-5 grid gap-3">
      <div class="flex gap-3 items-end">
        <label class="grid gap-1 flex-1">
          <span class="text-sm">Largo</span>
          <input class="border rounded px-3 py-2" type="number" min={0} step="0.01" value={largo.value}
            onInput$={(e: any) => (largo.value = parseFloat(e.target.value || '0'))} />
        </label>
        <label class="grid gap-1 flex-1">
          <span class="text-sm">Ancho</span>
          <input class="border rounded px-3 py-2" type="number" min={0} step="0.01" value={ancho.value}
            onInput$={(e: any) => (ancho.value = parseFloat(e.target.value || '0'))} />
        </label>
        <label class="grid gap-1 flex-1">
          <span class="text-sm">Alto</span>
          <input class="border rounded px-3 py-2" type="number" min={0} step="0.01" value={alto.value}
            onInput$={(e: any) => (alto.value = parseFloat(e.target.value || '0'))} />
        </label>
        <label class="grid gap-1 w-28">
          <span class="text-sm">Unidad</span>
          <select class="border rounded px-3 py-2" value={unit.value} onChange$={(e: any) => (unit.value = e.target.value)}>
            <option value="m">Metros</option>
            <option value="cm">Centímetros</option>
          </select>
        </label>
      </div>
      <div class="text-lg">Volumen: <span class="font-semibold">{volumen()}</span> m³</div>
      <p class="text-xs text-muted-foreground">* Para múltiples bultos, calcula cada uno y suma.</p>
    </div>
  );
});