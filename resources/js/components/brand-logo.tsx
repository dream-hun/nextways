import type { ComponentPropsWithoutRef } from "react";

export const BRAND_LOGO_PATH = "/logo-Photoroom.png";
export const BRAND_ICON_PATH = BRAND_LOGO_PATH;

type BrandLogoProps = ComponentPropsWithoutRef<"img"> & {
    variant?: "logo" | "icon";
};

export default function BrandLogo({
    alt = "Next Ways Ltd",
    variant = "logo",
    ...props
}: BrandLogoProps) {
    return (
        <img
            {...props}
            src={variant === "icon" ? BRAND_ICON_PATH : BRAND_LOGO_PATH}
            alt={alt}
        />
    );
}
