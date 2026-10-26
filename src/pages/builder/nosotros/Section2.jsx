import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridButton from '@/components/builder/elements/GridButton';

export default function Section2() {
	return (
		<BlockLayout
			blockId={"0DAXH_"}
			htmlId={"0DAXH_"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--rows": 11,
				"--width": "1224px",
				"--row-gap": "16px",
				"--row-size": "48px",
				"--block-padding-top": "16px",
				"--block-padding": "16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "56px 16px 56px 16px",
				"--m-grid-template-rows": "13.61vw auto 3.89vw auto 58px",
				"--t-grid-template-rows": "minmax(49px, auto) minmax(194px, auto) minmax(14px, auto) minmax(43px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(11.76vw, auto) minmax(26.23vw, auto) minmax(3.59vw, auto) minmax(4.17vw, auto) 14.54vw",
				"--grid-template-rows": "minmax(144px, auto) minmax(321px, auto) minmax(44px, auto) minmax(51px, auto) 1fr",
				"--m-grid-template-columns": "33.84% 66.16%",
				"--grid-template-columns": "24.26% 7.76% 67.97%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "358px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "738px"
			}}
			background={{
				path: "nkmlfh-cp0scXZPrXlTVtPn.png",
				origin: "assets",
				current: "image",
				imagePath: "nkmlfh-cp0scXZPrXlTVtPn.png",
				isTransparent: true,
				"overlay-opacity": "0.40",
				src: "https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/nkmlfh-cp0scXZPrXlTVtPn.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/nkmlfh-cp0scXZPrXlTVtPn.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/nkmlfh-cp0scXZPrXlTVtPn.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/nkmlfh-cp0scXZPrXlTVtPn.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/nkmlfh-cp0scXZPrXlTVtPn.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/nkmlfh-cp0scXZPrXlTVtPn.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/nkmlfh-cp0scXZPrXlTVtPn.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"3Ht8g8"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "1/3",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"3Ht8g8"}
					content={"<h1 style=\"color: rgb(248, 250, 252)\"><span style=\"color: rgb(248, 250, 252);\">¡Hablemos!</span></h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"0MR54z"}
				className={"layout-element layout-element--layout"}
				style={{
					"--z-index": 2,
					"--grid-row": "4/5",
					"--grid-column": "1/2",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridButton
					id={"0MR54z"}
					text={"Enviar"}
					type={"primary"}
					href={"#"}
					target={"_self"}
					borderRadius={0}
					borderWidth={1}
					backgroundColor={"#38BDF8"}
					fontColor={"#0D1117"}
					borderColor={"#000000"}
					backgroundColorHover={"#f1f1f1"}
					fontColorHover={"#222d2d"}
					borderColorHover={"#0a0a0a"}
					mobileWidthVw={"30.833333333333332vw"}
					mobileHeightVw={"11.944444444444445vw"}
					className={"layout-element__component layout-element__component--GridButton"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
