"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui";

const benefits = [
  {
    title: "Unified Talent Dashboard",
    description: "Single source of truth for all talent data, skills, and development progress.",
    icon: LayoutDashboard,
    color: "blue",
  },
  {
    title: "Strategic Succession Planning",
    description: "Identify and develop future leaders with AI-powered insights.",
    icon: TrendingUp,
    color: "violet",
  },
  {
    title: "AI-Powered Skill Matching",
    description: "Automatically match employees to opportunities and roles.",
    icon: Sparkles,
    color: "amber",
  },
  {
    title: "Enterprise Security & Scale",
    description: "SOC 2 compliant, SSO integration, built for any size organization.",
    icon: ShieldCheck,
    color: "emerald",
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; icon: string }> = {
  blue: { bg: "bg-blue-50", iconBg: "bg-blue-100", icon: "text-blue-600" },
  violet: { bg: "bg-violet-50", iconBg: "bg-violet-100", icon: "text-violet-600" },
  amber: { bg: "bg-amber-50", iconBg: "bg-amber-100", icon: "text-amber-600" },
  emerald: { bg: "bg-emerald-50", iconBg: "bg-emerald-100", icon: "text-emerald-600" },
};

export function BenefitsGrid() {
  return (
    <Section background="white" id="features">
      <div className="text-center mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose MetrixAI
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Enterprise-ready platform built for modern talent management
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {benefits.map((benefit, index) => {
          const colors = colorMap[benefit.color];
          const Icon = benefit.icon;

          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`${colors.bg} rounded-2xl p-6 sm:p-8 h-full hover:shadow-lg transition-shadow`}>
                <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
