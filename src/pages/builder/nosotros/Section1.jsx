import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridImage from '@/components/builder/elements/GridImage';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section1() {
	return (
		<BlockLayout
			blockId={"-YSSwe"}
			htmlId={"-YSSwe"}
			blockClassName={"block block--desktop-first-visible block--mobile-first-visible"}
			className={"block-layout block-layout--layout"}
			style={{
				"--rows": 17,
				"--width": "1224px",
				"--row-gap": "16px",
				"--row-size": "48px",
				"--block-padding-top": "16px",
				"--block-padding": "16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "56px 16px 56px 16px",
				"--m-grid-template-rows": "13.61vw auto 9.44vw auto 9.44vw auto 57px",
				"--t-grid-template-rows": "minmax(49px, auto) minmax(417px, auto) minmax(34px, auto) minmax(292px, auto) minmax(34px, auto) minmax(494px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(11.76vw, auto) minmax(26.23vw, auto) minmax(1.23vw, auto) minmax(27.04vw, auto) minmax(8.33vw, auto) 17.08vw",
				"--grid-template-rows": "minmax(144px, auto) minmax(321px, auto) minmax(15px, auto) minmax(331px, auto) minmax(102px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "49.02% 1.96% 8.50% 40.52%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1377px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1122px"
			}}
			background={{
				color: "#0D1117",
				current: "color",
				isTransparent: false
			}}
		>
			<LayoutElement
				elementId={"-ZFuvH"}
				className={"layout-element layout-element--layout"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 40px 0",
					"--z-index": 1,
					"--grid-row": "2/6",
					"--grid-column": "1/2",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridImage
					id={"-ZFuvH"}
					src={"https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/kcotfr-YhhGPprZ4whkN1Pm.png?width=768&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/kcotfr-YhhGPprZ4whkN1Pm.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/kcotfr-YhhGPprZ4whkN1Pm.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/kcotfr-YhhGPprZ4whkN1Pm.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/kcotfr-YhhGPprZ4whkN1Pm.png?width=1440&fit=crop 1440w"}
					alt={"A sleek modern technology office in a Global Spanish / International metropolitan center. Sophisticated glass architectural details, ambient lighting in sky blue and dark navy tones, featuring professional team members collaborating in a clean, minimalist executive environment. High-end editorial corporate photography."}
					objectFit={"cover"}
					desktopWidth={600}
					desktopHeight={769}
					mobileWidth={328}
					desktopBorderRadius={"0px"}
					mobileBorderRadius={"0px"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z8v0hY"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--z-index": 2,
					"--grid-row": "2/3",
					"--grid-column": "3/5",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"z8v0hY"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(56, 189, 248);\">Sobre nosotros</h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"3m-rlR"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--z-index": 3,
					"--grid-row": "4/5",
					"--grid-column": "4/5",
					"--m-grid-row": "6/7",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"3m-rlR"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(226, 232, 240);\"><span style=\"color: rgb(226, 232, 240);\">Somos un equipo apasionado de innovadores y estrategas dedicados a transformar ideas complejas en soluciones digitales de alto impacto. Desde nuestra fundación, hemos impulsado a empresas líderes a escalar sus fronteras tecnológicas mediante arquitectura de software avanzada, diseño vanguardista y procesos enfocados en la máxima excelencia operativa.</span></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(226, 232, 240);\"><span style=\"color: rgb(226, 232, 240);\">Nuestra misión es liderar el futuro digital con la máxima sofisticación y confianza.</span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
