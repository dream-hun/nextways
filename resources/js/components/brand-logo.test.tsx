import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import AppLogoIcon from '@/components/app-logo-icon';
import BrandLogo, {
    BRAND_ICON_PATH,
    BRAND_LOGO_PATH,
} from '@/components/brand-logo';

describe('brand logo', () => {
    it('renders the supplied logo image', () => {
        const markup = renderToStaticMarkup(<BrandLogo />);

        expect(markup).toContain(`src="${BRAND_LOGO_PATH}"`);
        expect(markup).toContain('alt="Next Ways Ltd"');
    });

    it('renders the icon derived from the supplied logo', () => {
        const markup = renderToStaticMarkup(<AppLogoIcon />);

        expect(markup).toContain(`src="${BRAND_ICON_PATH}"`);
        expect(markup).toContain('alt="Next Ways Ltd"');
    });
});
