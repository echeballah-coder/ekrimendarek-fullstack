"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { useReducedMotion } from "framer-motion" // Reusing framer hook for convenience consistency

export function HeroTitleAnimated() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const underlineRef = useRef<SVGPathElement>(null)
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        if (shouldReduceMotion) return

        // Text reveal animation
        const titleAnimation = anime.timeline({
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 300 // Slight delay after page load
        })

        // Select all letters (we'll split them manually in JSX or use a helper, 
        // strictly for this component simple generic words split is easier/cleaner)
        // Here we target specific spans we will put in the JSX

        titleAnimation
            .add({
                targets: '.hero-title-word',
                translateY: [20, 0],
                opacity: [0, 1],
                delay: anime.stagger(100),
                easing: 'easeOutExpo'
            })
            .add({
                targets: underlineRef.current,
                strokeDashoffset: [anime.setDashoffset, 0],
                opacity: [0, 1],
                easing: 'easeInOutSine',
                duration: 800
            }, '-=600') // Overlap with text

        return () => {
            titleAnimation.pause()
        }
    }, [shouldReduceMotion])

    // Static fallback for reduced motion is simply the initial state being visible via CSS or logic.
    // However, anime.js operates on DOM. To ensure visibility without JS or with reduced motion,
    // we can set initial styles in CSS, or just rely on the fact that if we don't run anime, 
    // we need them to be visible.
    // Strategy: Elements start visible. Anime hides them initially if it runs? 
    // Better: Elements start invisible only if animation is going to run. 
    // Or simpler: Use a class to hide initially, remove it if reduced motion.

    // Simplest robust approach:
    // Default opacity 1. 
    // In useEffect, if not reduced motion, set opacity 0 and animate to 1. 
    // (This might cause a flash).
    // Better: "opacity-0" class in JSX, and if reduced motion, we force opacity 1 via style or class replacement.

    // Let's use Tailwind "opacity-0" and remove it if reduced motion? No, logic is complex.
    // Let's stick to standard anime.js pattern: 
    // Set initial state via anime.set immediately in effect? Yes.

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

            {/* If reduced motion/no-js fallback needed, CSS would be ideal, 
                but for this demo we assume standard modern browser behavior. 
                If reduced motion, the effect simply won't run, 
                so we need to ensure they are visible.
                We can use a simple style injection or class toggle. */}
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
