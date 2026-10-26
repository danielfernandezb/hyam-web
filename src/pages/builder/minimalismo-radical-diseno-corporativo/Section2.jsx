import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section2() {
	return (
		<BlockLayout
			blockId={"dAiSBf"}
			htmlId={"blog-post-content"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--width": "1224px",
				"--m-block-padding": "56px 16px 56px 16px",
				"--m-grid-template-rows": "auto 0px",
				"--t-grid-template-rows": "minmax(1370px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(6.54vw, auto) minmax(65.36vw, auto) 6.54vw",
				"--grid-template-rows": "minmax(80px, auto) minmax(800px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "16.83% 66.34% 16.83%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1370px",
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
				elementId={"3jjVRC"}
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
					id={"3jjVRC"}
					content={"<p class=\"body\" style=\"color: rgb(26, 26, 26)\">El ruido visual se ha convertido en el mayor enemigo de la claridad estratégica en el entorno empresarial moderno. Las marcas que hoy lideran sus respectivos sectores no buscan gritar más fuerte, sino comunicarse con una precisión que solo el minimalismo bien ejecutado puede ofrecer. Esta tendencia no es una cuestión de moda pasajera, sino una respuesta lógica a la sobrecarga de información que define nuestra era.</p><h3>La arquitectura del vacío productivo</h3><p class=\"body\" style=\"color: rgb(26, 26, 26)\">En el diseño de vanguardia, el espacio en blanco no se considera ausencia de contenido, sino una herramienta de jerarquía deliberada. Permite que el mensaje central de la organización respire y elimina las distracciones que suelen entorpecer la toma de decisiones del usuario final. Un lienzo despejado proyecta una seguridad que las composiciones saturadas simplemente no pueden replicar.</p><h3>Eliminando lo superfluo con rigor</h3><p class=\"body\" style=\"color: rgb(26, 26, 26)\">Una estética limpia y depurada proyecta una organización interna impecable y una visión clara hacia el futuro. Al reducir los elementos visuales a su esencia mínima, comunicamos una sofisticación técnica que el exceso ornamental nunca logrará alcanzar. La clave reside en elegir cada elemento por su funcionalidad y su capacidad de representar los valores nucleares de la marca.</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
