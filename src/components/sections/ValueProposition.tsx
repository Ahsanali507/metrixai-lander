"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui";

export function ValueProposition() {
  return (
    <section id="demo-video" className="bg-gradient-to-br from-blue-400 via-blue-500 to-violet-500 py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white italic">
            Empowering Growth. Engineering Futures.
          </h2>
          <div className="w-48 sm:w-64 h-1 bg-white/30 mx-auto mt-4 sm:mt-6" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed mb-6 sm:mb-8">
              <span className="text-white font-semibold">Reskill your workforce.</span>{" "}
              Cultivate tomorrow&apos;s leaders. Build resilient succession pipelines.
              Minimize turnover costs. All while giving every employee a clear path
              forward — with purpose, visibility, and momentum.
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium mb-8 sm:mb-10">
              This is MetrixAI. Where talent meets transformation.
            </p>

            <Link href="/demo">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-blue-700 px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Request a Full Demo
              </Button>
            </Link>
          </motion.div>

          {/* Right Content - Loom Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-full max-w-lg">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe
                    src="https://www.loom.com/embed/d653c1da05f345c6ace594116c9d2755?sid=auto"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none"
                    }}
                  />
                </div>
              </div>
              <p className="text-blue-200 text-sm sm:text-base text-center mt-3 sm:mt-4">
                watch a short demo
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
