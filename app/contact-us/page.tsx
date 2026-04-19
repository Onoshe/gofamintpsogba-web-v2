import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_DATA } from "@/lib/constants";
import { MapPin, Clock, CreditCard, Phone, Mail, Globe } from "lucide-react";
import SendMail from "@/components/contactUs/RightColumn";
import RightColumn from "@/components/contactUs/RightColumn";
import CopyButton from "@/components/contactUs/CopyButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact GOFAMINT Ogba",
    description:
        "Contact The Gospel Faith Mission International (GOFAMINT) Pacesetters Assembly, Ogba, Ikeja, Lagos for worship times, location, and inquiries.",
    alternates: {
        canonical: "/contact-us/",
    },
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen w-full">
            {/* Hero Section */}
            <section
                className="w-full py-12 md:py-24 lg:py-32 text-white text-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "linear-gradient(rgb(15, 23, 42), rgba(15, 23, 42, 0.85)), url('/images/bgroundHome.jpg')" }}
            >
                <div className=" px-4 md:px-6">
                    <Badge variant="outline" className="px-4 py-1 text-yellow-400 border-yellow-400 mb-4">
                        Get in Touch
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl mb-4">
                        Contact Us
                    </h1>
                    <p className="max-w-[800px] mx-auto text-slate-300 md:text-xl">
                        Have questions or want to learn more? We&apos;d love to hear from you.
                    </p>
                </div>
            </section>

            <div className="px-4 md:px-6 py-12 w-full flex justify-center items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Info */}
                    <div className="space-y-8">
                        {/* Address */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-primary" /> Visit Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-slate-600">
                                {CONTACT_DATA.addressPSA.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Direct Contact */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Phone className="h-5 w-5 text-primary" /> Direct Contact
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-slate-600">
                                <div className="space-y-1">
                                    <p className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                                        <Phone className="h-4 w-4" /> Phone
                                    </p>
                                    {CONTACT_DATA.phones.map((phone, i) => (
                                        <p key={i}><a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">{phone}</a></p>
                                    ))}
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                                        <Mail className="h-4 w-4" /> E-mail
                                    </p>
                                    <p><a href={`mailto:${CONTACT_DATA.email}`} className="hover:text-primary transition-colors">{CONTACT_DATA.email}</a></p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                                        <Globe className="h-4 w-4" /> Website
                                    </p>
                                    <p><a href={`https://${CONTACT_DATA.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{CONTACT_DATA.website}</a></p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Service Times */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-primary" /> Service Times
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                {CONTACT_DATA.services.map((service, i) => (
                                    <div key={i} className="flex justify-between items-center border-b pb-2 last:border-0">
                                        <span className="font-medium">{service.name}</span>
                                        <div className="text-right text-sm text-slate-500">
                                            <p>{service.day}</p>
                                            <p>{service.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Giving */}
                        <Card className="bg-slate-900 text-white border-slate-800">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-yellow-500">
                                    <CreditCard className="h-5 w-5" /> Giving & Offering
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p className="text-sm text-slate-400">Bank Details</p>
                                <div className="flex items-center">
                                    <p className="font-mono text-xl">{CONTACT_DATA.bankDetails.accountNumber}</p>
                                    <CopyButton textToCopy={CONTACT_DATA.bankDetails.accountNumber} />
                                </div>
                                <p className="font-bold">{CONTACT_DATA.bankDetails.bank}</p>
                                <p className="text-sm text-slate-400">{CONTACT_DATA.bankDetails.accountName}</p>
                            </CardContent>
                        </Card>
                    </div>

                    <RightColumn />
                </div>
            </div>
        </div>
    );
}
