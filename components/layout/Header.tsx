'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/nav-config';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from '@/components/ui/sheet';
import Image from 'next/image';

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 pl-3 pr-4 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className=" flex h-16 items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center gap-2 px-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                        {/* Placeholder for Logo - adjust width/height as needed */}
                        <Image
                            src="/images/gofamintLogo.png"
                            alt="GOFAMINT Logo"
                            width={40}
                            height={40}
                            priority
                            style={{ objectFit: 'contain', filter: 'brightness(1.1)' }}
                        />
                        <span className="text-primary hidden md:inline-block">GOFAMINT <span className='text-[#c72b43ff]'>Pascesetters</span></span>
                        <span className="text-primary md:hidden">GOFAMINT</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.filter(link => link.title !== 'Admin').map((link) => {
                        const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === link.href ? "text-primary" : "text-muted-foreground",
                                    isActive ? "border-b-2 border-[#fb7185]" : ""
                                )}
                            >
                                {link.title}
                            </Link>
                        )
                    })}
                    {/* Example Action Button */}
                    <Button variant="default" size="sm" asChild>
                        <Link href="/contact-us">Join Us</Link>
                    </Button>
                </nav>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle className="text-left font-bold">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-4 mt-6 px-3">
                            {navLinks.map((link) => (
                                <SheetClose asChild key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-lg font-medium transition-colors hover:text-primary",
                                            pathname === link.href ? "text-[#c72b43ff]" : "text-muted-foreground"
                                        )}
                                    >
                                        {link.title}
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
