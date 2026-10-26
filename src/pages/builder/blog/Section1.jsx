import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section1() {
	return (
		<BlockLayout
			blockId={"g-nkJk"}
			htmlId={"g-nkJk"}
			blockClassName={"block block--desktop-first-visible block--mobile-first-visible"}
			className={"block-layout block-layout--layout"}
			style={{
				"--rows": 8,
				"--width": "1224px",
				"--row-gap": "16px",
				"--row-size": "48px",
				"--block-padding-top": "16px",
				"--block-padding": "16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "56px 16px 25px 16px",
				"--m-grid-template-rows": "13.61vw auto 3.89vw auto 27px",
				"--t-grid-template-rows": "minmax(49px, auto) minmax(194px, auto) minmax(14px, auto) minmax(195px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(11.76vw, auto) minmax(13.15vw, auto) minmax(2.53vw, auto) minmax(11.52vw, auto) 11.76vw",
				"--grid-template-rows": "minmax(144px, auto) minmax(161px, auto) minmax(31px, auto) minmax(141px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "16.99% 8.50% 49.02% 8.50% 16.99%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "479px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "621px"
			}}
			background={{
				color: "#0D1117",
				current: "color",
				isTransparent: false
			}}
		>
			<LayoutElement
				elementId={"7Y9Azq"}
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
					id={"7Y9Azq"}
					content={"<h1 style=\"color: rgb(248, 250, 252)\">Artículos</h1>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"Nwslgj"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "center",
					"--z-index": 2,
					"--grid-row": "4/5",
					"--grid-column": "3/4",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"Nwslgj"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(226, 232, 240);\"><span style=\"color: rgb(226, 232, 240);\">Explora análisis vanguardistas sobre tecnología, innovación digital y tendencias globales. Contenido técnico y estratégico para líderes del sector.</span></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(226, 232, 240);\"><br style=\"color: rgb(226, 232, 240);\"></p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
