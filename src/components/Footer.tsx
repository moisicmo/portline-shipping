import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
} from "lucide-qwik";
export const Footer = component$(() => {
  const footerLinks = [
    {
      title: "Contacto",
      items: [
        { label: "hola@mallvirtual.com", href: "mailto:hola@mallvirtual.com", icon: MailIcon },
        { label: "+591 700 000 00", href: "tel:+59170000000", icon: PhoneIcon },
        { label: "La Paz, Bolivia", href: "#", icon: MapPinIcon },
      ],
    },
  ];

  const socialLinks = [
    { label: "Facebook", icon: FacebookIcon, href: "#" },
    { label: "Instagram", icon: InstagramIcon, href: "#" },
    { label: "Twitter", icon: TwitterIcon, href: "#" },
    { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
  ];

  return (
    <footer class="bg-black text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          {/* Brand */}
          <div class="lg:max-w-md">
            <Link href="/" class="text-xl font-bold">
              Portline Shipping SRL
            </Link>
            <p class="text-sm text-gray-300 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi
              risus tempus nulla.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Links */}
            {footerLinks.map(({ title, items }) => (
              <nav key={title} class="" aria-labelledby={`footer-${title}`}>
                <h3 id={`footer-${title}`} class="font-semibold mb-3">
                  {title}
                </h3>
                <ul class="space-y-2 text-sm">
                  {items.map(({ label, href, ...rest }) => {
                    const Icon = "icon" in rest ? rest.icon : undefined;
                    return (
                      <li key={label}>
                        <Link href={href} class="flex items-center gap-2 hover:underline transition text-gray-300">
                          {Icon && <Icon class="w-4 h-4" />}
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            ))}

            {/* Social */}
            <div>
              <h3 class="font-semibold mb-3">Síguenos</h3>
              <ul class="flex space-x-3">
                {socialLinks.map(({ label, icon: Icon, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      aria-label={label}
                      title={label}
                      class="text-gray-300 hover:bg-white/10 rounded-lg p-2.5 inline-flex items-center"
                    >
                      <Icon class="w-5 h-5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
