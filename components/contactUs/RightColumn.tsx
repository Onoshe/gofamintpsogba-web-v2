'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_DATA } from "@/lib/constants";
import { handlePostMail } from "@/lib/handlePostMail";


export default function RightColumn() {
    const [formData, setFormData] = React.useState({ firstname: '', lastName: '', email: '', message: '' });
    const [sendingMail, setSendingMail] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSendMail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSendingMail(true);
        await handlePostMail({ form: formData }).then((res) => {
            //console.log(res);
            setSendingMail(false);
            if (res?.ok) { setFormData({ firstname: '', lastName: '', email: '', message: '' }) }
        });
    };

    return (
        <>
            {/* Right Column: Form */}
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                    <form className="space-y-4" onSubmit={handleSendMail}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                                <Input id="first-name" required placeholder="John" name="firstname" value={formData.firstname} onChange={handleChange} />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                                <Input id="last-name" required placeholder="Doe" name="lastName" value={formData.lastName} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" required placeholder="john@example.com" type="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <Textarea className="min-h-[150px]" required id="message" placeholder="How can we help you?" name="message" value={formData.message} onChange={handleChange} />
                        </div>
                        <Button type="submit" className={`w-full cursor-pointer ${sendingMail ? 'bg-gray-400' : ''}`}>{sendingMail ? "Sending Mail..." : "Send Message"}</Button>
                    </form>
                </div>

                {/* HQs Info*/}
                <div className="p-6 bg-slate-50 rounded-lg text-sm text-slate-500 space-y-4">
                    <h3 className="font-bold text-slate-900">National Headquarters</h3>
                    <div>
                        {CONTACT_DATA.addressHqt.map((line, i) => <p key={i}>{line}</p>)}
                        <a href="mailto:forms@gofamint.org" className="text-primary hover:underline block mt-1">forms@gofamint.org</a>
                    </div>
                </div>

                {/* HQs Info */}
                <div className="p-6 bg-slate-50 rounded-lg text-sm text-slate-500 space-y-4">
                    <h3 className="font-bold text-slate-900">International Headquarters</h3>
                    <div>
                        {CONTACT_DATA.addressInt.map((line, i) => <p key={i}>{line}</p>)}

                    </div>
                </div>
            </div>
        </>
    );
}
