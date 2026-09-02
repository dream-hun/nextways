import type { PropsWithChildren } from 'react';
import { MarketingShell } from '@/components/marketing/site';

export default function MarketingLayout({ children }: PropsWithChildren) {
    return <MarketingShell>{children}</MarketingShell>;
}
