import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridForm from '@/components/builder/elements/GridForm';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridImage from '@/components/builder/elements/GridImage';

export default function Section1() {
	return (
		<BlockLayout
			blockId={"hd0BrR"}
			htmlId={"hd0BrR"}
			blockClassName={"block block--desktop-first-visible block--mobile-first-visible"}
			className={"block-layout block-layout--layout"}
			style={{
				"--rows": 18,
				"--width": "1224px",
				"--row-gap": "16px",
				"--row-size": "48px",
				"--block-padding-top": "16px",
				"--block-padding": "16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "56px 16px 56px 16px",
				"--m-grid-template-rows": "13.61vw auto 9.72vw auto 11.94vw auto 12.22vw auto 57px",
				"--t-grid-template-rows": "minmax(49px, auto) minmax(194px, auto) minmax(35px, auto) minmax(109px, auto) minmax(43px, auto) minmax(488px, auto) minmax(44px, auto) minmax(546px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(11.76vw, auto) minmax(13.15vw, auto) minmax(2.53vw, auto) minmax(4.41vw, auto) minmax(6.05vw, auto) minmax(40.52vw, auto) 17.08vw",
				"--grid-template-rows": "minmax(144px, auto) minmax(161px, auto) minmax(31px, auto) minmax(54px, auto) minmax(74px, auto) minmax(496px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "40.52% 8.99% 4.66% 5.31% 40.52%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1565px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1169px"
			}}
			background={{
				color: "#0D1117",
				current: "color",
				isTransparent: false
			}}
		>
			<LayoutElement
				elementId={"HV_FZx"}
				className={"layout-element layout-element--layout"}
				style={{
					"--justify": "center",
					"--z-index": 1,
					"--grid-row": "6/7",
					"--grid-column": "1/2",
					"--m-grid-row": "6/7",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridForm
					id={"HV_FZx"}
					formId={"Contact form"}
					elementId={"HV_FZx"}
					collectionName={"contact_form"}
					fields={[
						{
							key: "name",
							sourceName: "Name",
							label: "Nombre",
							required: true,
							placeholder: "Tu nombre",
							type: "text",
							control: "text"
						},
						{
							key: "last_name",
							sourceName: "Last name",
							label: "Apellido",
							required: false,
							placeholder: "Tu apellido",
							type: "text",
							control: "text"
						},
						{
							key: "your_email",
							sourceName: "Your email",
							label: "Correo electrónico",
							required: true,
							placeholder: "tu@email.com",
							type: "text",
							control: "text"
						},
						{
							key: "message",
							sourceName: "Message",
							label: "Mensaje",
							required: true,
							placeholder: "Escribe tu mensaje aquí...",
							type: "text",
							control: "textarea"
						}
					]}
					successMessage={"¡Gracias por contactarnos!"}
					formBorderColor={"#38BDF8"}
					inputFillColor={"#313539"}
					inputFillColorHover={"#4d5054"}
					inputTextColor={"#ffffff"}
					labelTextColor={"#38BDF8"}
					inputBorderColor={"#38BDF8"}
					submitButtonBackgroundColor={"#2563EB"}
					submitButtonBackgroundColorHover={"#5082ef"}
					submitButtonFontColor={"#ffffff"}
					submitButtonFontColorHover={"#ffffff"}
					submitButtonBorderColor={"#2563EB"}
					submitButtonBorderColorHover={"#00000000"}
					submitButtonBorderWidth={0}
					submitLabel={"Enviar"}
					submitAlign={"start"}
					className={"layout-element__component layout-element__component--GridForm"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"GyoEtP"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--z-index": 2,
					"--grid-row": "2/3",
					"--grid-column": "1/4",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"GyoEtP"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(248, 250, 252);\">¡Hola!</h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"xKfxjA"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--z-index": 3,
					"--grid-row": "4/5",
					"--grid-column": "1/3",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"xKfxjA"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(226, 232, 240);\"><span style=\"color: rgb(226, 232, 240);\">¿Tienes alguna consulta o propuesta de colaboración? Estamos aquí para ayudarte a transformar tus ideas en soluciones innovadoras.</span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"CfdGhV"}
				className={"layout-element layout-element--layout"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 4,
					"--grid-row": "2/7",
					"--grid-column": "5/6",
					"--m-grid-row": "8/9",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridImage
					id={"CfdGhV"}
					src={"https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/eb3d0r-zR8IczfaAPD5OtYz.png?width=768&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/eb3d0r-zR8IczfaAPD5OtYz.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/eb3d0r-zR8IczfaAPD5OtYz.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/eb3d0r-zR8IczfaAPD5OtYz.png?width=1024&fit=crop 1024w"}
					alt={"A sleek modern tech office workstation setup in Global Spanish / International style, showcasing a minimalistic desk with a laptop, ambient soft bright electric blue and dark obsidian blue backlighting, subtle cyan sky blue glows, ultra-clean architectural aesthetics, cinematic soft focus background, professional photography."}
					objectFit={"cover"}
					desktopWidth={496}
					desktopHeight={816}
					mobileWidth={328}
					desktopBorderRadius={"0px"}
					mobileBorderRadius={"0px"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
