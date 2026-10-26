import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section2() {
	return (
		<BlockLayout
			blockId={"CvIFWC"}
			htmlId={"blog-post-content"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--width": "1224px",
				"--m-block-padding": "56px 16px 56px 16px",
				"--m-grid-template-rows": "auto 0px",
				"--t-grid-template-rows": "minmax(1343px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(6.54vw, auto) minmax(65.36vw, auto) 6.54vw",
				"--grid-template-rows": "minmax(80px, auto) minmax(800px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "16.83% 66.34% 16.83%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1343px",
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
				elementId={"hUOEoo"}
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
					id={"hUOEoo"}
					content={"<p class=\"body\" style=\"color: rgb(26, 26, 26)\">La fricción en la navegación digital es una barrera invisible que erosiona la confianza del usuario más sofisticado de manera casi instantánea. Las interfaces modernas deben responder con una fluidez intuitiva que se anticipe a las necesidades de interacción del cliente. Un diseño que no fluye se percibe como una falta de profesionalidad y una carencia de visión técnica.</p><h3>Transiciones que cuentan una historia</h3><p class=\"body\" style=\"color: rgb(26, 26, 26)\">El movimiento en una plataforma digital no debe ser meramente ornamental, sino cumplir una función clara de guía jerárquica. Una transición bien ejecutada reduce la carga cognitiva del usuario al explicar visualmente de dónde viene la información y hacia dónde se dirige. La elegancia del movimiento es lo que separa a un sitio web genérico de una experiencia de marca de alto nivel.</p><h3>La optimización técnica como prioridad</h3><p class=\"body\" style=\"color: rgb(26, 26, 26)\">Un diseño vanguardista carece de valor real si no está respaldado por una infraestructura técnica impecable que garantice velocidad. La rapidez de carga y la respuesta táctil inmediata son componentes críticos de una identidad de marca moderna y profesional. En el mundo del diseño de alto rendimiento, la belleza estética y la velocidad operativa son dos caras de la misma moneda.</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
