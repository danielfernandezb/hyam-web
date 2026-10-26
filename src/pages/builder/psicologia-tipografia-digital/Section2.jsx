import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section2() {
	return (
		<BlockLayout
			blockId={"BLDbSA"}
			htmlId={"blog-post-content"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--width": "1224px",
				"--m-block-padding": "56px 16px 56px 16px",
				"--m-grid-template-rows": "auto 0px",
				"--t-grid-template-rows": "minmax(1360px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(6.54vw, auto) minmax(65.36vw, auto) 6.54vw",
				"--grid-template-rows": "minmax(80px, auto) minmax(800px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "16.83% 66.34% 16.83%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1360px",
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
				elementId={"9YJNCV"}
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
					id={"9YJNCV"}
					content={"<p class=\"body\" style=\"color: rgb(26, 26, 26)\">La tipografía actúa como la voz visual de una marca y su tono determina la recepción inmediata del mensaje por parte del público. En un ecosistema digital saturado, la legibilidad y el carácter distintivo deben coexistir en una armonía perfecta para capturar la atención. Cada curva y cada remate de una letra envía señales subconscientes sobre la profesionalidad y la seriedad de la empresa.</p><h3>Geometría y confianza institucional</h3><p class=\"body\" style=\"color: rgb(26, 26, 26)\">Las fuentes sans-serif de proporciones geométricas transmiten una sensación de estabilidad y modernidad tecnológica de manera inmediata. Cada trazo está diseñado para proyectar precisión quirúrgica, eliminando cualquier rastro de ambigüedad en la comunicación corporativa. Esta limpieza visual es fundamental para establecer una relación de confianza con usuarios que valoran la eficiencia y la transparencia.</p><h3>Escalabilidad en la era multidispositivo</h3><p class=\"body\" style=\"color: rgb(26, 26, 26)\">Una tipografía verdaderamente profesional debe rendir con la misma nitidez en una pantalla móvil que en una proyección de gran formato. La adaptabilidad técnica no es solo una necesidad de desarrollo, sino una forma de respeto hacia el tiempo y la atención del cliente. La elección tipográfica correcta asegura que el prestigio de la marca se mantenga intacto en cualquier punto de contacto.</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
