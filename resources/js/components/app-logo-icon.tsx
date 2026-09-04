import type { ComponentPropsWithoutRef } from 'react';

import BrandLogo from '@/components/brand-logo';

export default function AppLogoIcon(
    props: Omit<ComponentPropsWithoutRef<'img'>, 'src'>,
) {
    return <BrandLogo {...props} variant="icon" />;
}
