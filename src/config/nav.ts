export type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };

export const NAV: NavItem[] = [
  {
    label: 'Empresa',
    children: [
      { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
      { label: 'Visión', href: '/vision' },
      { label: 'Misión', href: '/mision' },
      { label: 'Valores', href: '/valores' },
      { label: 'Historia', href: '/historia' },
      { label: 'Galería de Imágenes', href: '/galeria' },
    ],
  },
  { label: 'Todo sobre Comercio', href: '/comercio' },
  {
    label: 'Servicios',
    children: [
      { label: 'Marítimo', href: '/servicios/maritimo' },
      { label: 'Terrestre', href: '/servicios/terrestre' },
      { label: 'Aéreo', href: '/servicios/aereo' },
      { label: 'Pago a proveedores', href: '/servicios/pago-proveedores' },
    ],
  },
  { label: 'Contacto', href: '#contacto' },
];