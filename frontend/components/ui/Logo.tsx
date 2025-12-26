"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LogoProps {
    variant?: "dark" | "light" | "gradient" | "outline" | "solid" | "auto";
    className?: string;
    width?: number;
    height?: number;
}

export function Logo({
    variant = "auto",
    className = "",
    width = 40,
    height = 40
}: LogoProps) {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Determine logo path based on variant and theme
    const getLogoPath = () => {
        if (variant !== "auto") {
            return `/logos/logo-${variant}.svg`;
        }

        // Auto mode: adapt to theme
        if (!mounted) {
            return "/logos/logo-dark.svg"; // Default fallback
        }

        const currentTheme = theme === "system" ? systemTheme : theme;
        return currentTheme === "dark"
            ? "/logos/logo-light.svg"
            : "/logos/logo-dark.svg";
    };

    if (!mounted) {
        // Render placeholder during SSR
        return (
            <div
                style={{ width, height }}
                className={className}
                aria-label="EkriMenDarek Logo"
            />
        );
    }

    return (
        <Image
            src={getLogoPath()}
            alt="EkriMenDarek"
            width={width}
            height={height}
            className={className}
            priority
        />
    );
}
