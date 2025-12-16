"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"

export function HeroTitleAnimated() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const underlineRef = useRef<SVGPathElement>(null)
    const hasAnimatedRef = useRef(false)
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        // Skip if reduced motion is preferred
        if (shouldReduceMotion) return

        // Skip if already animated (prevent re-runs)
        if (hasAnimatedRef.current) return

        // Mark as animated
        hasAnimatedRef.current = true

        // Get colors from CSS variables (EMD tokens)
        const root = document.documentElement
        const computedStyle = getComputedStyle(root)

        // Extract RGB values and convert to hex for anime.js
        const brand = `rgb(${computedStyle.getPropertyValue('--brand').trim()})`
        const brand2 = `rgb(${computedStyle.getPropertyValue('--brand2').trim()})`

        // Set will-change for performance
        const words = document.querySelectorAll('.hero-title-word')
        words.forEach(word => {
            (word as HTMLElement).style.willChange = 'transform, opacity'
        })

        // Lazy-load anime.js only when needed (non-blocking)
        import("animejs")
            .then((anime) => {
                const animeInstance = anime.default

                // Text reveal animation
                const titleAnimation = animeInstance.timeline({
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: 200
                })

                titleAnimation
                    .add({
                        targets: '.hero-title-word',
                        translateY: [15, 0],
                        opacity: [0, 1],
                        delay: animeInstance.stagger(80),
                        easing: 'easeOutExpo'
                    })
                    .add({
                        targets: underlineRef.current,
                        strokeDashoffset: [animeInstance.setDashoffset, 0],
                        opacity: [0, 1],
                        easing: 'easeInOutSine',
                        duration: 600
                    }, '-=400') // Overlap with text

                // Apply token colors to SVG inline
                if (underlineRef.current) {
                    underlineRef.current.style.stroke = brand2
                }
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
            .finally(() => {
                // Remove will-change after animation
                setTimeout(() => {
                    words.forEach(word => {
                        (word as HTMLElement).style.willChange = 'auto'
                    })
                }, 1200)
            })
    }, [shouldReduceMotion])

    return (
        <div className="relative">
            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text max-w-4xl relative z-10">
                <span className="hero-title-word inline-block opacity-0">Louez</span>{' '}
                <span className="hero-title-word inline-block opacity-0">une</span>{' '}
                <span className="hero-title-word inline-block opacity-0">voiture</span>{' '}
                <span className="hero-title-word inline-block opacity-0">en</span>{' '}
                <span className="hero-title-word inline-block opacity-0 text-brand relative">
                    Algérie
                    {/* SVG Underline signature sous "Algérie" */}
                    <svg
                        className="absolute w-full h-3 -bottom-1 left-0 pointer-events-none"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            ref={underlineRef}
                            d="M0 5 Q 50 10 100 5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="opacity-0 text-brand2"
                            strokeLinecap="round"
                        />
                    </svg>
                </span>,{' '}
                <br className="hidden sm:block" />
                <span className="hero-title-word inline-block opacity-0">en</span>{' '}
                <span className="hero-title-word inline-block opacity-0">toute</span>{' '}
                <span className="hero-title-word inline-block opacity-0">confiance.</span>
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
