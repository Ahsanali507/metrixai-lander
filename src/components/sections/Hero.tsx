"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Layer 1 - Brand */}
            <div className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
              MetrixAI
            </div>

            {/* Layer 2 - Category */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
              The{" "}
              <span className="gradient-text">Talent Intelligence</span>{" "}
              Platform
            </h1>

            {/* Layer 3 - Meaning */}
            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-700 mb-4 sm:mb-6 max-w-xl mx-auto lg:mx-0">
              Powering internal growth through readiness, mobility, and talent-driven decisions.
            </p>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Most organizations don&apos;t lack talent — they lack visibility. MetrixAI helps companies clearly see employee skills, readiness, and growth potential so leaders can make confident decisions about development, mobility, and internal advancement — without relying on gut feel or familiarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center lg:justify-start">
              <Link href="/demo" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto group">
                  Request a Full Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#demo-video" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </a>
            </div>

          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-3xl blur-2xl" />

            {/* Dashboard */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Browser chrome */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-2 sm:mx-4">
                  <div className="bg-white rounded-md px-3 py-1.5 text-xs sm:text-sm text-gray-400 border border-gray-200 truncate">
                    app.metrixai.io/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-4 sm:p-6 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-5 w-32 bg-gray-800 rounded font-semibold text-sm flex items-center">
                      <span className="px-2 text-white">Dashboard</span>
                    </div>
                    <div className="h-3 w-24 bg-gray-200 rounded mt-2" />
                  </div>
                  <div className="h-8 w-20 sm:w-24 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-medium">+ Add</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {[
                    { label: "Employees", value: "2,847", color: "bg-blue-500" },
                    { label: "Skills", value: "12.5K", color: "bg-violet-500" },
                    { label: "Plans", value: "1,204", color: "bg-emerald-500" },
                    { label: "Promoted", value: "156", color: "bg-amber-500" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-3">
                      <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${stat.color}`} />
                        <span className="text-sm sm:text-base font-bold text-gray-900">{stat.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-xs font-medium text-gray-700 mb-3">Performance Trend</div>
                  <div className="flex items-end justify-between h-24 gap-1 sm:gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all hover:from-blue-700 hover:to-blue-500"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* List */}
                <div className="space-y-2">
                  {[
                    { name: "Sarah Johnson", role: "Engineering Lead", status: "Ready" },
                    { name: "Mike Chen", role: "Product Manager", status: "In Progress" },
                    { name: "Emily Davis", role: "Designer", status: "Ready" },
                  ].map((person, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-violet-400 rounded-full flex items-center justify-center text-white text-xs font-medium">
                        {person.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">{person.name}</div>
                        <div className="text-xs text-gray-500 truncate">{person.role}</div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${person.status === "Ready" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                        {person.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
