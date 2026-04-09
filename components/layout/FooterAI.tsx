'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useClientFetch } from '@/lib/hooks/useClientFetch';
import { getSiteSettings } from '@/lib/api';


export default function FooterAI() {
  const { data } = useClientFetch(getSiteSettings);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid" style={{ alignItems: 'flex-start' }}>
          <div>
            <Link className="logo" href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <Image
                src="/images/gofamintLogo.png"
                alt="GOFAMINT Logo"
                width={48}
                height={48}
                style={{ objectFit: 'contain', filter: 'brightness(1.2)' }}
              />
              <span style={{ color: 'white', fontSize: '1.4rem', fontWeight: '800' }}>
                GOFAMINT <span style={{ color: '#fb7185' }}>Pacesetters</span>
              </span>
            </Link>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.8' }}>
              We are a Spirit-led family in Ogba, Lagos, dedicated to raising kingdom
              pacesetters who lead with excellence, love, and divine purpose.
            </p>
          </div>

          <div style={{ paddingTop: '20px' }}>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/about">Our Vision & Mission</Link></li>
              <li><Link href="/pastor-corner">{"Pastor's Corner"}</Link></li>
              <li><Link href="/media">Media Library</Link></li>
              <li><Link href="/about">Statement of Purpose</Link></li>
            </ul>
          </div>

          <div style={{ paddingTop: '20px' }}>
            <h4>Contact Details</h4>
            <ul style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '16px' }}>
                <strong style={{ display: 'block', color: 'white', marginBottom: '4px' }}>Address</strong>
                {data?.address}
              </li>
              <li style={{ marginBottom: '16px' }}>
                <strong style={{ display: 'block', color: 'white', marginBottom: '4px' }}>Phone</strong>
                {data?.contactPhone}
              </li>
              <li>
                <strong style={{ display: 'block', color: 'white', marginBottom: '4px' }}>Email</strong>
                {data?.contactEmail}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GOFAMINT Pacesetters Ogba. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
