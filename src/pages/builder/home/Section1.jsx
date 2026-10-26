import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridButton from '@/components/builder/elements/GridButton';

export default function Section1() {
	return (
		<BlockLayout
			blockId={"smiAqi"}
			htmlId={"smiAqi"}
			blockClassName={"block block--desktop-first-visible block--mobile-first-visible"}
			className={"block-layout block-layout--layout"}
			style={{
				"--rows": 16,
				"--width": "1224px",
				"--row-gap": "16px",
				"--row-size": "48px",
				"--block-padding-top": "0px",
				"--block-padding": "0px 0 0px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "0px",
				"--block-padding-left": "0",
				"--m-block-padding": "164px 16px 80px 16px",
				"--m-grid-template-rows": "25.00vw auto 8.33vw auto 104px",
				"--t-grid-template-rows": "minmax(90px, auto) minmax(94px, auto) minmax(30px, auto) minmax(50px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(19.61vw, auto) minmax(21.73vw, auto) minmax(3.59vw, auto) minmax(4.08vw, auto) 24.75vw",
				"--grid-template-rows": "minmax(240px, auto) minmax(266px, auto) minmax(44px, auto) minmax(50px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "8.42% 25.25% 32.68% 25.25% 8.42%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "368px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "903px"
			}}
			background={{
				path: "ietxey-qoOHDLnh4gin37vH.png",
				origin: "assets",
				current: "image",
				imagePath: "ietxey-qoOHDLnh4gin37vH.png",
				isTransparent: true,
				"overlay-opacity": "0.40",
				src: "https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/ietxey-qoOHDLnh4gin37vH.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/ietxey-qoOHDLnh4gin37vH.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/ietxey-qoOHDLnh4gin37vH.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/ietxey-qoOHDLnh4gin37vH.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/ietxey-qoOHDLnh4gin37vH.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/ietxey-qoOHDLnh4gin37vH.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/ietxey-qoOHDLnh4gin37vH.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"bL6L4B"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "center",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "2/5",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"bL6L4B"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(248, 250, 252); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 70px; --fontSizeDesktop: 200px;\"><span style=\"color: rgb(248, 250, 252); font-family: Lobster; font-weight: 400;\">Futuro</span></h1>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"gHYFHr"}
				className={"layout-element layout-element--layout"}
				style={{
					"--z-index": 2,
					"--grid-row": "4/5",
					"--grid-column": "3/4",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridButton
					id={"gHYFHr"}
					text={"Explorar"}
					type={"primary"}
					href={"#"}
					target={"_blank"}
					borderRadius={0}
					borderWidth={1}
					backgroundColor={"#F8FAFC"}
					fontColor={"#0D1117"}
					borderColor={"#000000"}
					backgroundColorHover={"#f1f1f1"}
					fontColorHover={"#222d2d"}
					borderColorHover={"#000000"}
					mobileWidthVw={"91.11111111111111vw"}
					mobileHeightVw={"13.88888888888889vw"}
					className={"layout-element__component layout-element__component--GridButton"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
