'use client';

import * as React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, MapPin, Video } from 'lucide-react';
import Image from 'next/image';


export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className=" bg-slate-900 text-slate-200 mt-auto">
            <div className=" py-20 px-4 md:px-6 max-w-[1250px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_1fr_1fr] gap-8 lg:gap-12">
                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 px-2">
                            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                                <Image
                                    src="/images/gofamintLogo.png"
                                    alt="GOFAMINT Logo"
                                    width={40}
                                    height={40}
                                    priority
                                    style={{ objectFit: 'contain', filter: 'brightness(1.1)' }}
                                />
                                <span className=" text-white inline-block">GOFAMINT <span className='text-[#fb7185]'>Pascesetters</span></span>
                            </Link>
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-slate-400 text-justify">
                            The Gospel Faith Mission International (GOFAMINT) Pacesetters Assembly, Ogba, is the District Headquarters Church of Ogba District.
                            GOFAMINT is the Church with the Word for the World, founded on the Solid Rock by God, through a small group of committed
                            men and women led by the late Pastor (Dr) R. A. George at Iwaya, Yaba Lagos, has transformed into a divine legacy
                            that has today assumed a global dimension.
                        </p>
                    </div>
                    <div className='flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 md:col-span-1 lg:col-span-2'>
                        {/* Column 2: Connect */}
                        <div className="flex flex-col">
                            <h3 className="text-xl pb-3 font-bold tracking-tighter text-white">
                                Resources
                            </h3>
                            <Link href={'/about'} className="py-1 text-sm md:text-base text-slate-400 hover:text-white">
                                Our Vision & Mission
                            </Link>
                            <Link href={'/pastor-corner'} className="py-1 text-sm md:text-base text-slate-400 hover:text-white">
                                {"Pastor's Corner"}
                            </Link>
                            <Link href={'/about'} className="py-1 text-sm md:text-base text-slate-400 hover:text-white">
                                Membership Covenant
                            </Link>
                            <Link href={'/about'} className="py-1 text-sm md:text-base text-slate-400 hover:text-white">
                                Statement of Purpose
                            </Link>

                        </div>

                        {/* Column 3: Connect */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold tracking-tighter text-white">
                                Connect with Us
                            </h3>
                            <div className="space-y-2 text-sm md:text-base text-slate-400">
                                <p>Don&apos;t miss our services!</p>
                                <p>Our Sunday services are broadcasted live on Facebook.</p>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <SocialLink href="https://www.facebook.com/profile.php?id=100083487785406" label="Facebook" icon={<Facebook className="h-5 w-5" />} />
                                <SocialLink href="https://instagram.com" label="Instagram" icon={<Instagram className="h-5 w-5" />} />
                                <SocialLink href="#" label="Zoom" icon={<Video className="h-5 w-5" />} />
                                <SocialLink href="https://www.google.com/maps/place/GOFAMINT+PACESETTERS,+OGBA,+IKEJA+LAGOS/@6.6390215,3.3292248,17z/data=!3m1!4b1!4m6!3m5!1s0x103b93e8cca0dd7d:0x596e77e2296ced9c!8m2!3d6.6390215!4d3.3292248!16s%2Fg%2F11cp5df86d?hl=en&entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D" label="Maps" icon={<MapPin className="h-5 w-5" />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-slate-800 bg-slate-950 py-6 text-center text-sm text-slate-500">
                <p>© {currentYear} GOFAMINT Pacesetters Assembly, Ogba. All rights reserved.</p>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 rounded-full bg-slate-800 hover:bg-yellow-500 hover:text-slate-900 transition-colors"
            aria-label={label}
        >
            {icon}
        </a>
    )
}
