import { Hero, ServicesOverview, WhyChooseUs, CTASection } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero
        title="Building Compliant, People-First Workplaces"
        subtitle="Expert HR consulting that transforms compliance into competitive advantage. From audits to strategy, we help your business scale with confidence."
        highlights={[
          'Full-spectrum HR support from compliance to strategic planning',
          'Fractional HR expertise without full-time overhead',
          'Federal & state compliant solutions tailored to your business',
          'Trusted partner for startups and established enterprises',
        ]}
        primaryCTA={{ text: 'Schedule Consultation', href: '/contact' }}
        secondaryCTA={{ text: 'Explore Services', href: '/services' }}
      />

      <ServicesOverview />

      <WhyChooseUs />

      <CTASection />
    </>
  );
}
