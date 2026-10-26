import React from 'react';
import BlockBlogHeader from '@/components/builder/blocks/BlockBlogHeader';

export default function Section1() {
	return (
		<BlockBlogHeader
			blockId={"P9Dwis"}
			blockClassName={"block block--blog-header block--desktop-first-visible block--mobile-first-visible transition transition--slide transition--root-hidden"}
			style={{
				"--align": "flex-start",
				"--text-align": "left",
				"--block-padding-top": "45px",
				"--block-padding": "45px 30px 45px 30px",
				"--block-padding-right": "30px",
				"--block-padding-bottom": "45px",
				"--block-padding-left": "30px",
				"--content-width": "954px",
				"--m-block-padding": "16px 16px 16px 16px",
				"--blog-post-header-text-color": "rgb(13, 17, 23)",
				backgroundColor: "rgb(56, 189, 248)"
			}}
			shownItems={{
				date: true,
				avatar: false,
				categories: true,
				description: true,
				minutesToRead: true,
				authorFullName: false
			}}
			blogTitleFontSize={32}
			post={{
				title: "Integración ética de la inteligencia artificial en procesos creativos",
				description: "Analizamos el equilibrio necesario entre la eficiencia algorítmica y la intuición humana para preservar la autenticidad.",
				authorName: "",
				date: "2026-08-28T22:34:37.667Z",
				minutesToRead: "1",
				categories: [
					"BzgQAw"
				]
			}}
			blogCategories={{
				BzgQAw: {
					name: "Innovación y Tendencias"
				},
				OTYROs: {
					name: "Arquitectura de Marca"
				},
				rT7V4d: {
					name: "Diseño Estratégico"
				}
			}}
			blogReadingTimeText={"min read"}
			background={{
				color: "rgb(56, 189, 248)",
				current: "color"
			}}
		/>
	);
}
