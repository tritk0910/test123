'use client';
import CloseIcon from '@/app/icon/close';
import Logo from '@/app/icon/logo';
import MenuIcon from '@/app/icon/menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';

const navLink = [
  {
    label: 'Trang chủ',
    url: '/',
  },
  {
    label: 'Về Amor',
    url: '/about',
  },
  {
    label: 'Menu',
    url: '/menu',
  },
  {
    label: 'Khởi nghiệp',
    url: '/idk',
  },
];

export default function Navbar() {
  const { y } = useWindowScroll();
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const [isNotOnTop, setIsNotOnTop] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (y > 0) {
      setIsNotOnTop(true);
    } else {
      setIsNotOnTop(false);
    }
  }, [y]);

  useEffect(() => {
    if (isNavbarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isNavbarOpen]);

  return (
    <>
      <div
        className={cn('fixed top-0 z-[9000] w-full transition-all', {
          'shadow-[0_4px_4px_rgba(0,0,0,0.04)] backdrop-blur-[75px]': isNotOnTop && !isNavbarOpen,
          'bg-black/40': isNotOnTop && pathname !== '/about' && !isNavbarOpen,
        })}
      >
        <div
          className={cn(
            'text-background relative z-[9000] flex h-full w-full items-end justify-between px-5 pt-12 pb-3 md:items-center md:px-10 md:py-6',
            {
              'text-[#824435]': pathname === '/about',
            },
          )}
        >
          <div className="flex w-full max-w-[925px] items-center justify-between">
            <Link href={'/'}>
              <Logo className="w-[120px]" />
            </Link>
            <div className="max-md:hidden">
              <ul
                className={cn('flex gap-[60px]', {
                  'text-foreground': pathname === '/about',
                })}
              >
                {navLink.map(({ label, url }, index) => (
                  <li
                    key={index}
                    className={cn('text-sm/6 tracking-[2%] uppercase', {
                      'font-bold': pathname === url,
                    })}
                  >
                    <Link href={url}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            className={cn('cursor-pointer md:hidden', { 'text-foreground': pathname === '/about' })}
          >
            {isNavbarOpen ? <CloseIcon className="m-1.75" /> : <MenuIcon className="m-1.75" />}
          </button>
        </div>
      </div>
      <div
        ref={navRef}
        className={cn(
          'fixed inset-0 z-50 h-dvh w-full backdrop-blur-[75px] transition-all duration-300',
          {
            '-translate-y-full': !isNavbarOpen,
          },
        )}
      >
        <ul
          className={cn(
            'text-background flex size-full flex-col items-center gap-[28px] pt-[113px]',
            {
              'text-foreground': pathname === '/about',
            },
          )}
        >
          {navLink.map(({ label, url }, index) => (
            <li
              key={index}
              onClick={() => {
                setIsNavbarOpen(false);
                router.push(url);
              }}
              className={cn('cursor-pointer text-base/6 tracking-[2%] uppercase', {
                'font-bold': pathname === url,
              })}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
