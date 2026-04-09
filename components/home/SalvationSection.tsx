'use client';

import { useClientFetch } from '@/lib/hooks/useClientFetch';
import { getHomePayload } from '@/lib/api';
import SalvationCard from './SalvationCards';
import Link from 'next/link';

export default function SalvationSection() {
  const { data } = useClientFetch(getHomePayload);

  return (
    <section className="py-8 relative w-full flex justify-center">
      <div className="max-w-7xl px-6 w-full mx-auto">
        <div className="flex flex-col md:flex-row w-full justify-between gap-12 lg:gap-16">
          <div className="fade-in w-full md:w-[48%]">
            <div>
              <header className="max-w-[700px] py-4 text-center md:text-left mx-auto fade-in">
                <span className="text-red-600 font-bold uppercase tracking-wider text-lg">The Gospel</span>
                <h2 className="text-3xl lg:text-5xl font-bold my-4 text-indigo-800">A moment to begin again.</h2>
                <p className="text-muted-foreground text-lg">Salvation is the gift of God to all who believe. Discover the hope and peace that only Christ can provide.</p>
              </header>
            </div>
            <div className="bg-white p-8 border-2 shadow-2xl mt-12 rounded-lg">
              <h3 className="mb-4 text-2xl font-bold text-indigo-800">New to faith?</h3>
              <p className="section-description mb-8" style={{ fontSize: '1rem' }}>
                If you have questions about faith or want someone to pray with you,
                our pastoral team is here to support you.
              </p>
              <div className="flex justify-center w-full">
                <Link className="button font-bold hover:border-2 hover:bg-indigo-500 hover:shadow-lg hover:border-cyan-400 py-3 w-full rounded-full bg-indigo-800 text-white text-center self-center" href="/contact-us">
                  Connect With Us
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[48%]">
            <header className="p-4 text-center md:text-left gap-2 md:mt-5">
              <span className="text-[maroon] font-bold uppercase tracking-wider">Have You Been Saved?</span>
              <h2 className="text-2xl font-bold text-indigo-800">Steps to Salvation</h2>
            </header>
            <SalvationCard
              photo={'/images/salvation/step1.jpeg'}
              topic="Acknowledge your sins. Romans 3:23"
              transform={"translateX(-200px)"}
              transition={"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.15s"} />
            <SalvationCard
              photo={'/images/salvation/step2.jpeg'}
              topic="Confess your sins and repent of them. Gal.5:19-21; Acts 3:19"
              transform={"translateX(-200px)"}
              transition={"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.15s"} />
            <SalvationCard
              photo={'/images/salvation/step3.jpg'}
              topic="Believe on the Lord Jesus Christ as your Lord and Saviour. Romans 10:9-10"
              transform={"translateX(-200px)"}
              transition={"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.15s"} />
            <SalvationCard
              photo={'/images/salvation/step4.jpg'}
              topic="Join a Bible believing Church. Hebrew 10:25"
              transform={"translateX(-200px)"}
              transition={"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.15s"} />
          </div>
          <div className="hidden fade-in" style={{ animationDelay: '0.2s' }}>
            <div
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <iframe
                title="Salvation video"
                src={data?.salvationVideo}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
