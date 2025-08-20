import { component$ } from '@builder.io/qwik';
import {
  AnchorIcon,
  PlaneIcon,
  TruckIcon,
  BanknoteIcon,
} from 'lucide-qwik';
import { Section } from './Section';
import { Link } from '@builder.io/qwik-city';

export const Services = component$(() => {
  const servicios = [
    {
      title: 'Transporte Marítimo',
      href: '/servicios/maritimo',
      desc: 'FCL & LCL a los principales puertos.',
      Icon: AnchorIcon,
    },
    {
      title: 'Transporte Aéreo',
      href: '/servicios/aereo',
      desc: 'Cargas urgentes y sensibles.',
      Icon: PlaneIcon,
    },
    {
      title: 'Transporte Terrestre',
      href: '/servicios/terrestre',
      desc: 'Ruta regional y última milla.',
      Icon: TruckIcon,
    },
    {
      title: 'Pago a Proveedores',
      href: '/servicios/pago-proveedores',
      desc: 'Pagos internacionales confiables.',
      Icon: BanknoteIcon,
    },
  ];

  return (
    <Section id="servicios" title="Detalle de Servicios">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicios.map(({ title, href, desc, Icon }) => (
          <Link
            key={title}
            href={href}
            class="border rounded-xl p-6 hover:shadow-lg transition bg-white/80 backdrop-blur"
          >
            <div class="flex items-center gap-3 mb-3">
              <Icon class="w-6 h-6 text-red-600" />
              <h3 class="font-semibold text-lg">{title}</h3>
            </div>
            <p class="text-sm text-muted-foreground  delay-75">{desc}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
});
