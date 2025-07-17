"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function TokinvestSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/tokinvest-section-image.png"
            alt="Tokinvest Section"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Right Side - Features */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Tokenise. Invest. Own.</h2>
          <p className="text-gray-300">The future of ownership is here. Invest in tokenised assets with confidence.</p>

          {/* Feature 1 */}
          <div
            className={`p-6 rounded-lg shadow-md ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"} transition-all duration-700`}
          >
            <h3 className="text-xl font-semibold">Purpose-Built for the Real World</h3>
            <p className="text-gray-300">Designed for tokenising real-world assets. Shaped for racing.</p>
          </div>

          {/* Feature 2 */}
          <div
            className={`p-6 rounded-lg shadow-md ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0 translate-y-10"} transition-all duration-700`}
          >
            <h3 className="text-xl font-semibold">Confidence Through Regulation</h3>
            <p className="text-gray-300">
              Operating within VARA — the world's first regulated environment for digital assets.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className={`p-6 rounded-lg shadow-md ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0 translate-y-10"} transition-all duration-700`}
          >
            <h3 className="text-xl font-semibold">Everything in One Place</h3>
            <p className="text-gray-300">One platform. One account. Everything you need to manage your ownership.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
