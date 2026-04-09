'use client';

import { useClientFetch } from '@/lib/hooks/useClientFetch';
import { getHomePayload } from '@/lib/api';
import SectionHeader from '@/components/shared/SectionHeader';

export default function UpcomingProgram() {
  const { data } = useClientFetch(getHomePayload);
  const spotlight = data?.programs?.[0];

  return (
    <section className="section alt">
      <div className="container">
        <SectionHeader
          kicker="Weekly Events"
          title="Mark your calendar."
          description={data?.programs?.[0]?.description ?? "Connect with us this week!"}
        />

        <div className="grid cols-2 fade-in" style={{ animationDelay: '0.1s' }}>
          {spotlight && (
            <div className="card highlight">
              <span className="section-kicker" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Featured Event
              </span>
              <h2 className="mb-8" style={{ fontSize: '2rem' }}>{spotlight.title}</h2>
              <div className="grid cols-2 mt-auto" style={{ gap: '16px' }}>
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.08)', borderRadius: '12px' }}>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.8 }}>When</p>
                  <p style={{ fontWeight: '600' }}>{spotlight.date}</p>
                </div>
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.08)', borderRadius: '12px' }}>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.8 }}>Where</p>
                  <p style={{ fontWeight: '600' }}>{spotlight.location}</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid" style={{ gap: '20px' }}>
            {data?.programs?.slice(1, 3).map((program) => (
              <div key={program.title} className="card compact">
                <span className="section-kicker" style={{ fontSize: '0.7rem' }}>Upcoming</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{program.title}</h3>
                <p className="kicker" style={{ fontSize: '0.85rem' }}>
                  {program.date} • {program.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
