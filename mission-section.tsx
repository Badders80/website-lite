"use client"

import { ArrowRight, Globe, Users, TrendingUp } from "lucide-react"

export default function Component() {
  return (
    <section className="relative min-h-screen bg-black">
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header Section - Ultra clean side by side */}
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-start mb-40">
            {/* Left side - Mission label */}
            <div className="lg:col-span-1">
              <div className="space-y-3">
                <span className="text-xs font-medium tracking-[0.3em] uppercase text-gray-500">Our Mission</span>
                <div className="w-8 h-px bg-[#d4a964]" />
              </div>
            </div>

            {/* Right side - Main content */}
            <div className="lg:col-span-4 space-y-12">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-bw-gradual)] leading-[0.95] text-white tracking-tight">
                Experience a <span className="text-[#d4a964]">new era</span> of racehorse ownership
              </h1>
              <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed font-light max-w-3xl">
                Accessible, transparent, and built today for tomorrow's owners.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center gap-3 text-[#d4a964] text-sm font-medium tracking-wide cursor-pointer group">
                  <span>Discover the Evolution</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid - Dynamic cards with equal heights */}
          <div className="grid grid-cols-3 gap-6 lg:gap-16 items-stretch">
            {/* Feature 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-full min-h-[320px] flex flex-col p-8 lg:p-10 rounded-2xl border border-gray-900/20 bg-gray-950/10 transition-all duration-700 hover:bg-gray-900/20 hover:border-gray-800/30">
                {/* Animated icon container */}
                <div className="relative mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#d4a964]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#d4a964]/20 group-hover:scale-110">
                    <TrendingUp className="w-4 h-4 text-[#d4a964] transition-all duration-500 group-hover:scale-110" />
                  </div>
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 w-8 h-8 rounded-full bg-[#d4a964]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                </div>

                <div className="flex-1 flex flex-col justify-between transition-transform duration-500 group-hover:translate-y-[-2px]">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-[family-name:var(--font-bw-gradual)] text-white transition-colors duration-300 group-hover:text-[#d4a964]/90">
                      Redefining Ownership
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg transition-colors duration-300 group-hover:text-gray-300">
                      Simple, exciting, accessible—whether you've backed winners for decades or you're placing your
                      first stake. This is your ticket from spectator to stakeholder.
                    </p>
                  </div>
                </div>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-10 right-10 lg:left-12 lg:right-12 h-px bg-gradient-to-r from-transparent via-[#d4a964]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-full min-h-[320px] flex flex-col p-8 lg:p-10 rounded-2xl border border-gray-900/20 bg-gray-950/10 transition-all duration-700 hover:bg-gray-900/20 hover:border-gray-800/30">
                {/* Animated icon container */}
                <div className="relative mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#d4a964]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#d4a964]/20 group-hover:scale-110">
                    <Users className="w-4 h-4 text-[#d4a964] transition-all duration-500 group-hover:scale-110" />
                  </div>
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 w-8 h-8 rounded-full bg-[#d4a964]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                </div>

                <div className="flex-1 flex flex-col justify-between transition-transform duration-500 group-hover:translate-y-[-2px]">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-[family-name:var(--font-bw-gradual)] text-white transition-colors duration-300 group-hover:text-[#d4a964]/90">
                      A New Era for Racing
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg transition-colors duration-300 group-hover:text-gray-300">
                      A modern ownership community driving the sport forward—more engagement, more energy and more
                      owners sharing in the thrill.
                    </p>
                  </div>
                </div>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-10 right-10 lg:left-12 lg:right-12 h-px bg-gradient-to-r from-transparent via-[#d4a964]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-full min-h-[320px] flex flex-col p-8 lg:p-10 rounded-2xl border border-gray-900/20 bg-gray-950/10 transition-all duration-700 hover:bg-gray-900/20 hover:border-gray-800/30">
                {/* Animated icon container */}
                <div className="relative mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#d4a964]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#d4a964]/20 group-hover:scale-110">
                    <Globe className="w-4 h-4 text-[#d4a964] transition-all duration-500 group-hover:scale-110" />
                  </div>
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 w-8 h-8 rounded-full bg-[#d4a964]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                </div>

                <div className="flex-1 flex flex-col justify-between transition-transform duration-500 group-hover:translate-y-[-2px]">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-[family-name:var(--font-bw-gradual)] text-white transition-colors duration-300 group-hover:text-[#d4a964]/90">
                      Global Access, Local Roots
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg transition-colors duration-300 group-hover:text-gray-300">
                      A global network for racehorse ownership—connecting New Zealand's finest bloodstock with an
                      international community of engaged investors.
                    </p>
                  </div>
                </div>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-10 right-10 lg:left-12 lg:right-12 h-px bg-gradient-to-r from-transparent via-[#d4a964]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
