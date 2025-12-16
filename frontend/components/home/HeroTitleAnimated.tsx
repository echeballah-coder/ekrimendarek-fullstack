"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"

export function HeroTitleAnimated() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const underlineRef = useRef<SVGPathElement>(null)
    const hasAnimatedRef = useRef(false) // Prevent re-animation on re-renders
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        // Skip if reduced motion is preferred
        if (shouldReduceMotion) return

        // Skip if already animated (prevent re-runs)
        if (hasAnimatedRef.current) return

        // Mark as animated
        hasAnimatedRef.current = true

        // Lazy-load anime.js only when needed (non-blocking)
        import("animejs")
            .then((anime) => {
                const animeInstance = anime.default

                // Text reveal animation
                const titleAnimation = animeInstance.timeline({
                    easing: 'easeOutExpo',
                    duration: 1000,
                    delay: 300 // Slight delay after page load
                })

                titleAnimation
                    .add({
                        targets: '.hero-title-word',
                        translateY: [20, 0],
                        opacity: [0, 1],
                        delay: animeInstance.stagger(100),
                        easing: 'easeOutExpo'
                    })
                    .add({
                        targets: underlineRef.current,
                        strokeDashoffset: [animeInstance.setDashoffset, 0],
                        opacity: [0, 1],
                        easing: 'easeInOutSine',
                        duration: 800
                    }, '-=600') // Overlap with text
            })
            .catch((error) => {
                console.error('Failed to load anime.js:', error)
                // Fallback: show content immediately if animation fails
                const words = document.querySelectorAll('.hero-title-word')
                const path = underlineRef.current
                words.forEach(word => {
                    (word as HTMLElement).style.opacity = '1';
                    (word as HTMLElement).style.transform = 'none'
                })
                if (path) {
                    path.style.opacity = '1'
                    path.style.strokeDashoffset = '0'
                }
            })
    }, [shouldReduceMotion]) // Dependencies: only shouldReduceMotion

    return (
        <div className="relative inline-block">
            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text max-w-4xl mx-auto relative z-10">
                <span className="hero-title-word inline-block opacity-0">Louez</span>{' '}
                <span className="hero-title-word inline-block opacity-0">une</span>{' '}
                <span className="hero-title-word inline-block opacity-0">voiture</span>{' '}
                <span className="hero-title-word inline-block opacity-0">facilement</span>{' '}
                <br className="hidden sm:block" />
                <span className="hero-title-word inline-block opacity-0 text-transparent bg-clip-text bg-brand-gradient pb-2">
                    partout
                </span>{' '}
                <span className="hero-title-word inline-block opacity-0 text-transparent bg-clip-text bg-brand-gradient pb-2">
                    en
                </span>{' '}
                <span className="hero-title-word inline-block opacity-0 text-transparent bg-clip-text bg-brand-gradient pb-2 relative">
                    Algérie
                    {/* SVG Accent under "Algérie" */}
                    <svg
                        className="absolute w-full h-3 -bottom-1 left-0 pointer-events-none"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                    >
                        <path
                            ref={underlineRef}
                            d="M0 5 Q 50 10 100 5"
                            fill="none"
                            stroke="url(#gradient-accent)"
                            strokeWidth="3"
                            className="opacity-0"
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="gradient-accent" x1="0" x2="1" y1="0" y2="0">
                                <stop offset="0%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </h1>

            {/* CSS fallback for prefers-reduced-motion */}
            <style jsx global>{`
                @media (prefers-reduced-motion: reduce) {
                    .hero-title-word, path {
                        opacity: 1 !important;
                        transform: none !important;
                        stroke-dashoffset: 0 !important;
                    }
                }
            `}</style>
        </div>
    )
}
