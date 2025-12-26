"use client";

import { usePathname } from "next/navigation";

export function HeaderSpacer() {
    const pathname = usePathname();

    // Pages that handle their own header overlap (transparent header effect)
    const isTransparentHeaderPage = pathname === "/" || pathname === "/home-legacy";

    if (isTransparentHeaderPage) {
        return null;
    }

    // Default spacer height to match LovableHeader (approx 80px-90px)
    // h-20 = 5rem = 80px
    // sm:h-24 = 6rem = 96px
    return <div aria-hidden="true" className="h-20 sm:h-24" />;
}
