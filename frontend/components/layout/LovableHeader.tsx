"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    Menu,
    X,
    Sun,
    Moon,
    Globe,
    Settings,
    User,
    LogIn,
    ChevronDown,
    Phone
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Véhicules", href: "/vehicules" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export function LovableHeader() {
    const [scrollY, setScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLoggedIn] = useState(false); // Demo: user not logged in
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    // Calculate progressive transparency based on scroll
    const scrollProgress = Math.min(scrollY / 100, 1);
    const bgOpacity = scrollProgress * 0.95;
    const blurAmount = scrollProgress * 12;
    const shadowOpacity = scrollProgress * 0.1;
    const paddingY = 24 - (scrollProgress * 8); // 24px -> 16px

    // For non-home pages, we might want a solid background initially, 
    // but sticking to the requested "LandingHeader" behavior for now as per instructions.

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-[padding] duration-300"
            style={{
                backgroundColor: `hsl(var(--lovable-background) / ${bgOpacity})`,
                backdropFilter: `blur(${blurAmount}px)`,
                boxShadow: scrollProgress > 0.1 ? `0 1px 3px rgba(0,0,0,${shadowOpacity})` : 'none',
                paddingTop: `${paddingY}px`,
                paddingBottom: `${paddingY}px`,
            }}
        >
            <div className="container-emd">
                <nav className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 text-lovable-foreground hover:opacity-80 transition-opacity"
                    >
                        <svg
                            width="32"
                            height="24"
                            viewBox="0 0 48 36"
                            fill="none"
                            className="text-lovable-primary"
                        >
                            <path d="M0 0h16v16H0V0z" fill="currentColor" />
                            <path d="M16 0l20 16H16V0z" fill="currentColor" />
                            <path d="M0 16h16v20L0 16z" fill="currentColor" />
                        </svg>
                        <span className="text-xl font-sans font-semibold tracking-tight text-lovable-foreground">
                            Kerya
                        </span>
                    </Link>

                    {/* Center Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-muted/60 hover:text-lovable-foreground transition-colors duration-200"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side: Dropdown Menu + CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Utility Dropdown Menu */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted/60 hover:text-lovable-foreground hover:bg-lovable-card rounded-lg transition-colors border border-transparent hover:border-border/50"
                                    aria-label="Menu options"
                                >
                                    <Menu className="w-4 h-4" />
                                    <ChevronDown className="w-3 h-3" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="w-56 bg-lovable-surface-elevated border border-border shadow-lg z-50 text-lovable-foreground"
                            >
                                {/* Dark/Light Mode Toggle */}
                                <DropdownMenuItem
                                    onClick={toggleDarkMode}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    {isDarkMode ? (
                                        <Sun className="w-4 h-4" />
                                    ) : (
                                        <Moon className="w-4 h-4" />
                                    )}
                                    <span>{isDarkMode ? "Mode clair" : "Mode sombre"}</span>
                                </DropdownMenuItem>

                                {/* Language */}
                                <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
                                    <Globe className="w-4 h-4" />
                                    <span>Langue (FR)</span>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                {/* Account Section */}
                                {isLoggedIn ? (
                                    <>
                                        <DropdownMenuItem
                                            onClick={() => router.push("/account")}
                                            className="flex items-center gap-3 cursor-pointer"
                                        >
                                            <User className="w-4 h-4" />
                                            <span>Mon compte</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() => router.push("/settings")}
                                            className="flex items-center gap-3 cursor-pointer"
                                        >
                                            <Settings className="w-4 h-4" />
                                            <span>Paramètres</span>
                                        </DropdownMenuItem>
                                    </>
                                ) : (
                                    <DropdownMenuItem
                                        onClick={() => router.push("/auth/login")}
                                        className="flex items-center gap-3 cursor-pointer"
                                    >
                                        <LogIn className="w-4 h-4" />
                                        <span>Connexion / Adhésion</span>
                                    </DropdownMenuItem>
                                )}

                                <DropdownMenuSeparator />

                                {/* Contact */}
                                <DropdownMenuItem
                                    onClick={() => router.push("/contact")}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>Nous contacter</span>
                                </DropdownMenuItem>

                                {/* Settings */}
                                <DropdownMenuItem
                                    onClick={() => router.push("/settings")}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <Settings className="w-4 h-4" />
                                    <span>Paramètres</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* CTA Button */}
                        <button
                            onClick={() => router.push("/reservation/start")}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-lovable-primary text-lovable-primary-foreground font-medium rounded-full transition-all duration-300 hover:bg-lovable-primary/90 shadow-lg hover:-translate-y-0.5"
                        >
                            Réserver
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden p-2 rounded-xl hover:bg-lovable-card transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-lovable-foreground" />
                        ) : (
                            <Menu className="w-6 h-6 text-lovable-foreground" />
                        )}
                    </button>
                </nav>

                {/* Mobile menu */}
                <div
                    className={cn(
                        "lg:hidden overflow-hidden transition-all duration-300",
                        isMobileMenuOpen ? "max-h-[600px] mt-4" : "max-h-0"
                    )}
                >
                    <div className="py-4 px-4 bg-lovable-surface-elevated rounded-2xl border border-border space-y-1">
                        {/* Navigation Links */}
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-3 text-sm font-medium text-lovable-foreground hover:bg-lovable-card rounded-xl transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className="border-t border-border my-3" />

                        {/* Mobile Utility Options */}
                        <button
                            onClick={toggleDarkMode}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-lovable-foreground hover:bg-lovable-card rounded-xl transition-colors"
                        >
                            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            <span>{isDarkMode ? "Mode clair" : "Mode sombre"}</span>
                        </button>

                        <button
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-lovable-foreground hover:bg-lovable-card rounded-xl transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            <span>Langue (FR)</span>
                        </button>

                        {isLoggedIn ? (
                            <Link
                                href="/account"
                                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-lovable-foreground hover:bg-lovable-card rounded-xl transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <User className="w-4 h-4" />


                                <span>Mon compte</span>
                            </Link>
                        ) : (
                            <Link
                                href="/auth/login"
                                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-lovable-foreground hover:bg-lovable-card rounded-xl transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <LogIn className="w-4 h-4" />
                                <span>Connexion / Adhésion</span>
                            </Link>
                        )}

                        <Link
                            href="/contact"
                            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-lovable-foreground hover:bg-lovable-card rounded-xl transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Phone className="w-4 h-4" />
                            <span>Nous contacter</span>
                        </Link>

                        <div className="pt-4 mt-3 border-t border-border px-2">
                            <button
                                onClick={() => {
                                    router.push("/reservation/start");
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full px-6 py-3 bg-lovable-primary text-lovable-primary-foreground font-medium rounded-full transition-all duration-300 hover:bg-lovable-primary/90"
                            >
                                Réserver
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
