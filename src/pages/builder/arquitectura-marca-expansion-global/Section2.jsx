import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section2() {
	return (
		<BlockLayout
			blockId={"4McW8w"}
			htmlId={"blog-post-content"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--width": "1224px",
				"--m-block-padding": "56px 16px 56px 16px",
				"--m-grid-template-rows": "auto 0px",
				"--t-grid-template-rows": "minmax(1462px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(6.54vw, auto) minmax(65.36vw, auto) 6.54vw",
				"--grid-template-rows": "minmax(80px, auto) minmax(800px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "16.83% 66.34% 16.83%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1462px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "960px"
			}}
			background={{
				color: "#ffffff",
				current: "color",
				isTransparent: false
			}}
		>
			<LayoutElement
				elementId={"iMsrn-"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "2/3",
					"--m-grid-row": "1/2",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"iMsrn-"}
					content={"<p class=\"body\" style=\"color: rgb(26, 26, 26)\">Escalar una marca hacia nuevos territorios requiere un equilibrio sumamente delicado entre la estandarización global y la relevancia cultural. La coherencia visual funciona como el ancla que permite a la empresa navegar por diversos mercados manteniendo su prestigio intacto. Sin una arquitectura de marca sólida, la expansión corre el riesgo de fragmentar la identidad corporativa y confundir al consumidor.</p><h3>Sistemas visuales flexibles y robustos</h3><p class=\"body\" style=\"color: rgb(26, 26, 26)\">Los sistemas de identidad corporativa deben ser lo suficientemente elásticos para incorporar variaciones regionales sin perder el ADN original. Esto se consigue mediante la creación de una guía de estilo rigurosa que defina claramente los elementos innegociables del diseño. La flexibilidad no es debilidad, sino la capacidad de una marca inteligente para hablar diferentes idiomas visuales con una sola voz.</p><h3>Generar confianza mediante la consistencia</h3><p class=\"body\" style=\"color: rgb(26, 26, 26)\">La profesionalidad de una organización se demuestra en los pequeños detalles que se repiten con precisión en todos los puntos de contacto. Cuando un cliente potencial reconoce la marca instantáneamente, independientemente de su ubicación geográfica, la barrera de entrada al mercado disminuye. La consistencia es, en última instancia, la forma más efectiva de construir autoridad a largo plazo.</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
