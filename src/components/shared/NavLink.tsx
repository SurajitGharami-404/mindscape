"use client";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, type FC } from 'react'

interface Props {
    href: string,
    children: React.ReactNode,
    className?: string
}

const NavLink: FC<Props> = ({children, href, className}) => {
    const pathname = usePathname();
    const active = useMemo(()=>pathname.includes(href),[href, pathname]);
  return (
    <Link 
    href={href}
    className={cn(
        'flex items-center gap-x-1 text-sm font-medium text-custom-foreground transition ease-linear hover:text-custom-success',
        active && "text-custom-success",
        className
    )}
    >
        {children}
    </Link>
  )
}

export default NavLink;