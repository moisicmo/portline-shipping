import { component$, useSignal } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { NAV } from '~/config/nav';

const isActive = (url: URL, href?: string) => {
  if (!href) return false;
  try {
    if (href === '/') return url.pathname === '/';
    return url.pathname.startsWith(href);
  } catch {
    return false;
  }
};

export const MainNav = component$(() => {
  const open = useSignal(false);
  const loc = useLocation();
  const submenuOpen = useSignal<string | null>(null);


  return (
    <nav class="bg-white/70 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" class="text-2xl font-bold tracking-tight text-primary">
          Portline Shipping SRL
        </Link>

        <div class="flex items-center gap-4">
          <ul class="hidden md:flex gap-6 items-center">
            {NAV.map((item) => (
              <li key={item.label} class="relative" onMouseEnter$={() => submenuOpen.value = item.label} onMouseLeave$={() => submenuOpen.value = null}>
                {item.children ? (
                  <>
                    <button
                      class="inline-flex items-center gap-1 font-medium text-sm hover:text-primary transition"
                      aria-haspopup="menu"
                      aria-expanded={submenuOpen.value === item.label}
                    >
                      {item.label} <span>▾</span>
                    </button>

                    {submenuOpen.value === item.label && (
                      <ul class="absolute z-50 bg-white border rounded shadow-lg  min-w-[180px]">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              class={`block px-4 py-2 text-sm hover:bg-muted transition ${isActive(loc.url, c.href) ? 'font-semibold text-primary' : ''
                                }`}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    class={`text-sm font-medium hover:text-primary transition ${isActive(loc.url, item.href) ? 'font-semibold text-primary' : ''
                      }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>

            ))}
          </ul>

          <button
            class="md:hidden p-2 border rounded hover:bg-muted focus:outline-none focus:ring"
            onClick$={() => (open.value = !open.value)}
            aria-expanded={open.value}
            aria-controls="mobile-nav"
            aria-label="Abrir menú"
          >
            {open.value ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open.value && (
        <div id="mobile-nav" class="md:hidden px-4 pb-6 bg-white border-t">
          <ul class="flex flex-col">
            {NAV.map((item) => (
              <li key={item.label} class="border-b last:border-none">
                {item.children ? (
                  <details>
                    <summary class="py-3 cursor-pointer select-none font-medium">
                      {item.label}
                    </summary>
                    <ul class="pl-4 pb-3 flex flex-col gap-2">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            class="block py-1 text-sm"
                            onClick$={() => (open.value = false)}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.href!}
                    class="block py-3 text-sm font-medium"
                    onClick$={() => (open.value = false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
});
