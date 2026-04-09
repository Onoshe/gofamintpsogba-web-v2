import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ABOUT_DATA, gofamintAim, gofamintAimBibleRef, bibleVerses } from "@/lib/constants";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white text-center">
                <div className=" px-4 md:px-6">
                    <Badge variant="outline" className="px-4 py-1 text-yellow-400 border-yellow-400 mb-4">
                        Our Story
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl mb-4">
                        About GOFAMINT
                    </h1>
                    <p className="max-w-[800px] mx-auto text-slate-300 md:text-xl">
                        {ABOUT_DATA.statementOfPurpose}
                    </p>
                </div>
            </section>

            <div className="flex flex-col justify-center items-center w-full lg:px-8 xl:px-16">
                {/* Pacesetters Section */}
                <section className="w-full py-10 bg-white">
                    <div className=" px-4 md:px-6">
                        <h2 className="text-3xl font-bold mb-8 text-primary">Pacesetters Assembly</h2>
                        <div className="prose max-w-none text-slate-700 space-y-4">
                            {ABOUT_DATA.pacesetters.map((text, i) => (
                                <p key={i} className="leading-relaxed">{text}</p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Worldwide Section */}
                <section className="w-full pb-12 bg-slate-50">
                    <div className=" px-4 md:px-6">
                        <h2 className="text-3xl font-bold mb-8 text-primary">GOFAMINT Worldwide</h2>
                        <div className="prose max-w-none text-slate-700 space-y-4 text-justify">
                            {ABOUT_DATA.worldwide.map((text, i) => (
                                <p key={i} className="leading-relaxed">{text}</p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Beliefs Section */}
                <section className="w-full py-12 bg-slate-50 border-y">
                    <div className=" px-4 md:px-6">
                        <h2 className="text-3xl font-bold mb-6 text-primary">What We Believe</h2>
                        <p className="text-slate-700 mb-10 leading-relaxed">
                            {gofamintAim[0]}
                        </p>
                        <div className="grid grid-cols-1  gap-x-8 gap-y-6">
                            {gofamintAim.slice(1).map((aim, i) => (
                                <div key={i} className="flex gap-4 group ">
                                    <div className="flex flex-none items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                        {i + 1}
                                    </div>
                                    <div className="space-y-1 relative w-full">
                                        <p className="text-slate-800 font-medium leading-snug">
                                            {aim.replace(/^\d+\.\s*/, '')}
                                        </p>
                                        <p className="text-sm text-slate-500 italic peer cursor-pointer w-fit">
                                            {gofamintAimBibleRef[i + 1]}
                                        </p>
                                        <h1 className="hidden mt-2 peer-hover:block  absolute bottom-12  duration-100">
                                            <span className="float-rightss w-full flex justify-center text-white p-2 rounded-lg text-[12px] smc:text-[14px] md:text-[15px]  bg-[#310252]">
                                                {bibleVerses[i]}
                                            </span>
                                        </h1>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Covenants Section */}
                <section className="w-full pb-12 bg-white">
                    <div className=" px-4 md:px-6">
                        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Our Membership Covenants</h2>
                        <div className="flex justify-evenly flex-wrap gap-6">
                            {ABOUT_DATA.covenants.map((item, i) => (
                                <Card key={i} className="hover:shadow-lg transition-shadow border-t-4 border-t-primary w-[400px]">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
