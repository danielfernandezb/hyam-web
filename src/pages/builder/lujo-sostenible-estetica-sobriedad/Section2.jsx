import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section2() {
	return (
		<BlockLayout
			blockId={"iumz1n"}
			htmlId={"blog-post-content"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--width": "1224px",
				"--m-block-padding": "56px 16px 56px 16px",
				"--m-grid-template-rows": "auto 0px",
				"--t-grid-template-rows": "minmax(1251px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(6.54vw, auto) minmax(65.36vw, auto) 6.54vw",
				"--grid-template-rows": "minmax(80px, auto) minmax(800px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "16.83% 66.34% 16.83%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1251px",
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
				elementId={"xmQv21"}
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
					id={"xmQv21"}
					content={"<p class=\"body\" style=\"color: rgb(26, 26, 26)\">La sofisticación contemporánea está intrínsecamente ligada a la responsabilidad ambiental y al consumo consciente de recursos. El diseño de vanguardia ya no solo debe parecer excelente a la vista, sino que debe nacer de procesos que respeten profundamente el entorno global. Esta evolución ha dado lugar a una nueva estética donde la sobriedad y la honestidad de los materiales son los protagonistas.</p><h3>Materialidad y textura en el mundo digital</h3><p class=\"body\" style=\"color: rgb(26, 26, 26)\">La estética del lujo actual se inclina hacia lo orgánico y lo táctil, incluso cuando hablamos de interfaces puramente digitales. Buscamos paletas de colores que evoquen la naturaleza de manera refinada, utilizando tonos tierra, verdes profundos y grises minerales. Estas texturas sugieren una durabilidad y una calidad que los colores sintéticos y vibrantes no pueden comunicar.</p><h3>La longevidad como valor diferencial</h3><p class=\"body\" style=\"color: rgb(26, 26, 26)\">Diseñar pensando en la permanencia es el acto más revolucionario en una economía marcada por lo efímero. Crear sistemas visuales que resistan con elegancia el paso del tiempo es la mayor prueba de madurez y profesionalismo de una marca. El lujo hoy no es lo que más brilla, sino lo que permanece relevante y funcional a través de los años.</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
