'use client';

import SectionHeader from "../shared/SectionHeader";

const defUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.767520443916!2d3.3364!3d6.6212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b939eb90a38af%3A0xe100908869911e3b!2sOgba%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng";
const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.084343144778!2d3.348355449513512!3d6.636447395177593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e8cca0dd7d%3A0x596e77e2296ced9c!2sGOFAMINT%20PACESETTERS%2C%20OGBA%20LAGOS!5e0!3m2!1sen!2sng!4v1677087742110!5m2!1sen!2sng";
export default function MapEmbed() {
  return (
    <section className="py-16">
      <div className="w-full">
        <SectionHeader
          kicker="Worship With Us"
          title="Find us in Ogba, Lagos."
          description="We are easy to locate and ready to welcome you. Use the map below to find the best route to our sanctuary."
          centered
        />
        <div
          className="max-w-[1400px] w-full mx-auto flex justify-center items-center mt-6"
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            height: '450px',
            border: '8px solid white'
          }}
        >
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps location"
          />
        </div>
      </div>
    </section>
  );
}
