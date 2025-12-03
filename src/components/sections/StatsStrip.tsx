"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui";

const stats = [
  { value: "40%", label: "Faster Promotions" },
  { value: "3x", label: "Internal Mobility" },
  { value: "25%", label: "Less Turnover" },
  { value: "5x", label: "Training ROI" },
];

export function StatsStrip() {
  return (
    <Section background="dark" spacing="md" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-blue-600/20" />
      <div className="absolute -top-24 -left-24 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 sm:w-96 sm:h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Proven Results
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Results based on customer case studies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-xs sm:text-sm lg:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
