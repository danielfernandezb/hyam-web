import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridButton from '@/components/builder/elements/GridButton';

export default function Section4() {
	return (
		<BlockLayout
			blockId={"EHHXN-"}
			htmlId={"EHHXN-"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--rows": 3,
				"--width": "1224px",
				"--row-gap": "16px",
				"--row-size": "48px",
				"--block-padding-top": "16px",
				"--block-padding": "16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "56px 16px 56px 16px",
				"--m-grid-template-rows": "13.33vw auto 6.67vw auto 47px",
				"--t-grid-template-rows": "minmax(48px, auto) minmax(32px, auto) minmax(24px, auto) minmax(50px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(6.54vw, auto) minmax(4.00vw, auto) minmax(2.53vw, auto) minmax(4.08vw, auto) 6.86vw",
				"--grid-template-rows": "minmax(80px, auto) minmax(49px, auto) minmax(31px, auto) minmax(50px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "33.66% 32.68% 33.66%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "201px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "294px"
			}}
			background={{
				color: "#E2E8F0",
				current: "color",
				isTransparent: false
			}}
		>
			<LayoutElement
				elementId={"BCr_Z1"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "center",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "1/4",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"BCr_Z1"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(13, 17, 23);\">VER TODO</h5>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"sxg2SZ"}
				className={"layout-element layout-element--layout"}
				style={{
					"--z-index": 2,
					"--grid-row": "4/5",
					"--grid-column": "2/3",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridButton
					id={"sxg2SZ"}
					text={"Servicios"}
					type={"primary"}
					href={"#"}
					target={"_blank"}
					borderRadius={0}
					borderWidth={1}
					backgroundColor={"#0D1117"}
					fontColor={"#F8FAFC"}
					borderColor={"#000000"}
					backgroundColorHover={"#1d1e20"}
					fontColorHover={"#ffffff"}
					borderColorHover={"#000000"}
					mobileWidthVw={"91.11111111111111vw"}
					mobileHeightVw={"13.88888888888889vw"}
					className={"layout-element__component layout-element__component--GridButton"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
