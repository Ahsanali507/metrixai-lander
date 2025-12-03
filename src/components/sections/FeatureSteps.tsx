"use client";

import { motion } from "framer-motion";
import { Upload, Brain, Target, BarChart3 } from "lucide-react";
import { Section } from "@/components/ui";

const steps = [
  {
    title: "Resume Upload",
    description: "Import employee profiles and HR data. Our AI processes information across your entire workforce.",
    icon: Upload,
    color: "blue",
  },
  {
    title: "AI Skill Analysis",
    description: "Advanced AI maps skills, identifies gaps, and discovers hidden talents in real-time.",
    icon: Brain,
    color: "violet",
  },
  {
    title: "Development Plans",
    description: "Generate tailored learning paths for every employee based on goals and company needs.",
    icon: Target,
    color: "emerald",
  },
  {
    title: "Succession Dashboards",
    description: "Visualize talent pipelines and ensure leadership continuity with predictive analytics.",
    icon: BarChart3,
    color: "amber",
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; icon: string }> = {
  blue: { bg: "bg-blue-50", iconBg: "bg-blue-100", icon: "text-blue-600" },
  violet: { bg: "bg-violet-50", iconBg: "bg-violet-100", icon: "text-violet-600" },
  emerald: { bg: "bg-emerald-50", iconBg: "bg-emerald-100", icon: "text-emerald-600" },
  amber: { bg: "bg-amber-50", iconBg: "bg-amber-100", icon: "text-amber-600" },
};

export function FeatureSteps() {
  return (
    <Section background="white" id="how-it-works">
      <div className="text-center mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            How MetrixAI Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Four powerful steps to transform your talent strategy
          </p>
        </motion.div>
      </div>

      {/* Grid layout for all screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {steps.map((step, index) => {
          const colors = colorMap[step.color];
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`${colors.bg} rounded-2xl p-6 h-full`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <span className="text-sm font-semibold text-gray-400">Step {index + 1}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
