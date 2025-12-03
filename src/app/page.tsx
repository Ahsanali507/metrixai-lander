import {
  Hero,
  ValueProposition,
  Problem,
  FeatureSteps,
  PersonaCards,
  BenefitsGrid,
  StatsStrip,
  PricingCards,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Problem />
      <FeatureSteps />
      <BenefitsGrid />
      <PersonaCards />
      <StatsStrip />
      <PricingCards />
      <CTASection />
    </>
  );
}
