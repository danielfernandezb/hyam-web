import React from 'react';
import BlockNavigation from '@/components/builder/blocks/BlockNavigation';

export default function Header() {
	return (
		<BlockNavigation
			logoSrc={"https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/42mfwr-g2MO3u2UtwYBJtdA.png?width=768&fit=scale-down"}
			logoText={"Home"}
			logoHref={"/"}
			logoHeightDesktop={52}
			logoHeightMobile={26}
			isLogoVisible
			layout={"desktop-1"}
			mobileLayout={"mobile-1"}
			mobileLinksAlignment={"right"}
			isSticky
			cartIconSize={"24px"}
			style={{
				"--width": "1240px",
				"--padding-top": "30px",
				"--padding": "30px 16px 30px 16px",
				"--padding-right": "16px",
				"--padding-bottom": "30px",
				"--padding-left": "16px",
				"--m-padding-top": "24px",
				"--m-padding": "24px 16px 24px 16px",
				"--m-padding-right": "16px",
				"--m-padding-bottom": "24px",
				"--m-padding-left": "16px",
				"--logo-width": "166px",
				"--cartIconSize": "24px",
				"--link-spacing": "56px",
				"--m-logo-width": "86px",
				"--m-link-spacing": "64px",
				"--element-spacing": "30px",
				"--contrastBackgroundColor": "rgb(198, 207, 219)",
				"--nav-bg": "#0D1117",
				"--nav-link-color": "rgb(248, 250, 252)",
				"--nav-link-text-color": "rgb(248, 250, 252)",
				"--nav-link-color-hover": "rgb(250, 251, 252)",
				"--nav-link-text-color-hover": "rgb(250, 251, 252)"
			}}
			nav={[
				{
					id: "Pg32bRFpC",
					href: "/blog",
					text: "Blog",
					isHidden: false,
					hasDropdown: false
				},
				{
					id: "n9imQPKO9",
					href: "/nosotros",
					text: "Nosotros",
					isHidden: false,
					hasDropdown: false
				},
				{
					id: "2QuchMKA2",
					href: "/contacto",
					text: "Contacto",
					isHidden: false,
					hasDropdown: false
				}
			]}
		/>
	);
}
