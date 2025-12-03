"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, User, Check } from "lucide-react";
import { Section } from "@/components/ui";

const personas = [
  {
    title: "HR & L&D Leaders",
    icon: Users,
    color: "blue",
    benefits: [
      "Unified view of organizational talent and skills",
      "Data-driven succession planning",
      "Automated development recommendations",
    ],
  },
  {
    title: "Managers",
    icon: Briefcase,
    color: "violet",
    benefits: [
      "Identify team skill gaps instantly",
      "Build personalized growth plans",
      "Discover internal candidates for open roles",
    ],
  },
  {
    title: "Employees",
    icon: User,
    color: "emerald",
    benefits: [
      "Clear career path visibility",
      "Personalized learning recommendations",
      "Skills-based opportunity matching",
    ],
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; icon: string; check: string }> = {
  blue: { bg: "bg-blue-50", iconBg: "bg-blue-100", icon: "text-blue-600", check: "text-blue-500" },
  violet: { bg: "bg-violet-50", iconBg: "bg-violet-100", icon: "text-violet-600", check: "text-violet-500" },
  emerald: { bg: "bg-emerald-50", iconBg: "bg-emerald-100", icon: "text-emerald-600", check: "text-emerald-500" },
};

export function PersonaCards() {
  return (
    <Section background="gray" id="personas">
      <div className="text-center mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Built for Everyone
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            MetrixAI delivers value across all levels of your workforce
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {personas.map((persona, index) => {
          const colors = colorMap[persona.color];
          const Icon = persona.icon;

          return (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4 sm:mb-6`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${colors.icon}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {persona.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {persona.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 sm:gap-3">
                      <Check className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.check} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm sm:text-base text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
