import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section2() {
	return (
		<BlockLayout
			blockId={"eLFihw"}
			htmlId={"blog-post-content"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--width": "1224px",
				"--m-block-padding": "56px 16px 56px 16px",
				"--m-grid-template-rows": "auto 0px",
				"--t-grid-template-rows": "minmax(1387px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(6.54vw, auto) minmax(65.36vw, auto) 6.54vw",
				"--grid-template-rows": "minmax(80px, auto) minmax(800px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "16.83% 66.34% 16.83%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1387px",
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
				elementId={"_YnIOo"}
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
					id={"_YnIOo"}
					content={"<p class=\"body\" style=\"color: rgb(26, 26, 26)\">La inteligencia artificial ha dejado de ser una promesa futurista para convertirse en el motor principal de la eficiencia operativa en las industrias creativas. Sin embargo, el valor real de estas herramientas no reside en su capacidad de automatización masiva, sino en cómo la direccionamos para potenciar el ingenio humano. La sofisticación nace de la curaduría manual que transforma datos brutos en experiencias de marca memorables.</p><h3>El copiloto de la visión humana</h3><p class=\"body\" style=\"color: rgb(26, 26, 26)\">Las herramientas generativas deben actuar siempre como extensiones de nuestra capacidad analítica y nunca como sustitutos del criterio estético profesional. Un proceso innovador utiliza la tecnología para explorar miles de iteraciones en segundos, permitiendo que el diseñador se concentre en la toma de decisiones conceptuales. Esta simbiosis asegura resultados que son técnicamente perfectos y emocionalmente resonantes.</p><h3>Manteniendo la esencia de la marca</h3><p class=\"body\" style=\"color: rgb(26, 26, 26)\">La innovación técnica solo es efectiva si refuerza la identidad única de la organización sin diluir su mensaje original. Priorizar la coherencia visual garantiza que la tecnología sirva al propósito superior de la empresa, evitando los resultados genéricos que a menudo produce la IA sin supervisión. El futuro pertenece a quienes dominen la herramienta manteniendo intacta su voz creativa.</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
