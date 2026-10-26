import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
	MessageCircle,
	Instagram,
	MapPin,
	Phone,
	Mail,
	Menu,
	X,
	Flame,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
if (typeof document !== 'undefined' && !document.getElementById('hyam-photo-refinement')) {
  const photoStyles = document.createElement('style');
  photoStyles.id = 'hyam-photo-refinement';
  photoStyles.textContent = "img[alt*='HYAM CLASSIC'],img[alt*='CRISPY CHICKEN'],img[alt*='CHORI SMOKE'],img[alt*='COSTILLAS'],img[alt*='TACOS'],img[alt*='CANASTILLAS'],img[alt*='CROQUETAS']{display:block;width:100%;aspect-ratio:4/3;object-fit:cover;object-position:center;border-radius:16px;filter:saturate(1.08) contrast(1.04);transition:transform .28s ease,filter .28s ease}img[alt*='HYAM CLASSIC']:hover,img[alt*='CRISPY CHICKEN']:hover,img[alt*='CHORI SMOKE']:hover,img[alt*='COSTILLAS']:hover,img[alt*='TACOS']:hover,img[alt*='CANASTILLAS']:hover,img[alt*='CROQUETAS']:hover{transform:scale(1.025);filter:saturate(1.14) contrast(1.06)}img[alt^='Experiencia HYAM']{display:block;width:100%;aspect-ratio:1/1;object-fit:cover;object-position:center;border-radius:14px;transition:transform .28s ease,filter .28s ease}@media(prefers-reduced-motion:reduce){img[alt*='HYAM CLASSIC'],img[alt*='CRISPY CHICKEN'],img[alt*='CHORI SMOKE'],img[alt*='COSTILLAS'],img[alt*='TACOS'],img[alt*='CANASTILLAS'],img[alt*='CROQUETAS'],img[alt^='Experiencia HYAM']{transition:none}}";
  document.head.appendChild(photoStyles);
}
const WHATSAPP_URL =
	'https://wa.me/573160538877?text=Hola%20HYAM%2C%20quiero%20hacer%20un%20pedido';
const INSTAGRAM_URL = 'https://instagram.com/hyam.co';

const IMG = {
	heroBurger:
		'https://images.hostinger.com/670b7861-cc95-4d36-a5b6-b9bd4b3fe8e3.png',
	mascot:
		'https://images.hostinger.com/365c0163-6aa9-4ecd-9494-160e70ed7c3e.png',
	classic:
		'https://images.hostinger.com/a0d08424-8e8c-4ae4-b775-d5981712dbd6.png',
	crispy:
		'https://images.hostinger.com/61526ada-c77a-4903-931e-35eb347035be.png',
	chori:
		'https://images.hostinger.com/de4d94e0-7471-4c36-ad20-634bf3a7cf69.png',
	costillas:
		'https://images.hostinger.com/a5a9e960-26e9-48a2-8e0a-a63450f521c6.png',
	tacos:
		'https://images.hostinger.com/ec42423e-ec0c-4eed-8c75-a17630678d9c.png',
	canastillas:
		'https://images.hostinger.com/d9e14a81-c73b-4573-971b-b4446a1d2475.png',
	croquetas:
		'https://images.hostinger.com/dd298ad0-5f96-4063-973a-39ff500b8a0c.png',
	gallery: [
		'https://images.hostinger.com/80fbd07e-5907-4b0f-9d1e-fdeb9b1feff8.png',
		'https://images.hostinger.com/b51dd670-3007-4320-9a75-792df6e0cf09.png',
		'https://images.hostinger.com/cfc64b73-f845-4272-ae47-93d07392870a.png',
		'https://images.hostinger.com/294094f8-ffe1-4156-bee9-55d7af4f012c.png',
		'https://images.hostinger.com/3828e34f-f2ef-4603-a8ac-5296c24f5c71.png',
	],
};

const NAV_LINKS = [
	{ label: 'INICIO', href: '#inicio' },
	{ label: 'HISTORIA', href: '#historia' },
	{ label: 'CREACIONES', href: '#creaciones' },
	{ label: 'ESPECIALIDADES', href: '#especialidades' },
	{ label: 'GALERÍA', href: '#galeria' },
	{ label: 'CONTACTO', href: '#contacto' },
];

const BURGERS = [
	{
		name: 'HYAM CLASSIC',
		description:
			'La hamburguesa que inició todo. Carne premium, cheddar fundido, cebolla crispy, lechuga fresca y salsa especial de la casa.',
		image: IMG.classic,
	},
	{
		name: 'CRISPY CHICKEN',
		description:
			'Crujiente por fuera, jugosa por dentro. Pollo crujiente, lechuga, tomate, cebolla y dip de queso crema.',
		image: IMG.crispy,
	},
	{
		name: 'CHORI SMOKE',
		description:
			'Una experiencia ahumada con chorizo artesanal, mozzarella, chimichurri, lechuga y salsa de la casa.',
		image: IMG.chori,
	},
];

const SPECIALS = [
	{
		name: 'TACOS DE PICAÑA',
		description: 'Picaña madurada, guacamole y pico de gallo con piña.',
		image: IMG.tacos,
	},
	{
		name: 'CANASTILLAS RELLENAS',
		description: 'Cuatro canastillas de patacón con picaña o camarón.',
		image: IMG.canastillas,
	},
	{
		name: 'CROQUETAS DE JAIBA Y CAMARÓN',
		description: 'Croquetas cremosas con un toque especial del chef.',
		image: IMG.croquetas,
	},
];

function Logo({ compact = false }) {
	return (
		<a href="#inicio" className="flex items-center gap-3 group">
			<img
				src="https://horizons-cdn.hostinger.com/73669978-8922-4308-9a82-6a910af83cdc/da98efa9ed43b925a7f93c454b349ad7.png"
				alt="HYAM Hamburguesas y Algo Más"
				className="h-14 w-14 rounded-full object-contain transition-transform duration-300 group-hover:rotate-6"
			/>
			{!compact && (
				<span className="hidden sm:flex flex-col leading-tight">
					<span className="font-display text-lg font-bold tracking-[0.2em] text-[#f3ead8]">
						HYAM
					</span>
					<span className="text-[10px] uppercase tracking-[0.3em] text-[#caa14a]">
						Hamburguesas y Algo Más
					</span>
				</span>
			)}
		</a>
	);
}

function GoldButton({ children, href = WHATSAPP_URL, className = '' }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`inline-flex items-center justify-center gap-2 rounded-md bg-[#d2a24a] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-[#1a1408] transition-all duration-200 hover:bg-[#e4b65e] hover:-translate-y-0.5 active:scale-[0.98] ${className}`}
		>
			<MessageCircle className="h-4 w-4" strokeWidth={2.2} />
			{children}
		</a>
	);
}

function OutlineButton({ children, href = WHATSAPP_URL, className = '' }) {
	return (
		<a
			href={href}
			target={href.startsWith('#') ? undefined : '_blank'}
			rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
			className={`inline-flex items-center justify-center gap-2 rounded-md border border-[#d2a24a]/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-[#e8d9b5] transition-all duration-200 hover:bg-[#d2a24a]/10 hover:border-[#d2a24a] active:scale-[0.98] ${className}`}
		>
			{children}
		</a>
	);
}

function SectionLabel({ children }) {
	return (
		<p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#caa14a]">
			{children}
		</p>
	);
}

function Embers() {
	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
			{[...Array(10)].map((_, i) => (
				<span
					key={i}
					className="ember"
					style={{
						left: `${6 + i * 9.5}%`,
						bottom: `${(i * 13) % 40}%`,
						animationDelay: `${i * 0.9}s`,
						animationDuration: `${5 + (i % 4)}s`,
					}}
				/>
			))}
		</div>
	);
}

function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0806]/90 backdrop-blur-md">
			<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
				<Logo compact />
				<nav className="hidden lg:flex items-center gap-8">
					{NAV_LINKS.map((link, i) => (
						<a
							key={link.label}
							href={link.href}
							className={`relative text-[11px] font-medium uppercase tracking-[0.25em] transition-colors duration-200 hover:text-[#d2a24a] ${
								i === 0 ? 'text-[#d2a24a]' : 'text-[#cfc4ae]'
							}`}
						>
							{link.label}
							{i === 0 && (
								<span className="absolute -bottom-2 left-0 h-px w-full bg-[#d2a24a]" />
							)}
						</a>
					))}
				</nav>
				<div className="flex items-center gap-3">
					<a
						href={WHATSAPP_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="hidden sm:inline-flex items-center gap-2 rounded-md border border-[#d2a24a]/70 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8d9b5] transition-all duration-200 hover:bg-[#d2a24a] hover:text-[#1a1408] active:scale-[0.98]"
					>
						Pedir ahora
						<MessageCircle className="h-4 w-4" strokeWidth={2.2} />
					</a>
					<button
						type="button"
						onClick={() => setOpen(!open)}
						className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#d2a24a]/40 text-[#e8d9b5]"
						aria-label="Abrir menú"
					>
						{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</div>
			</div>
			{open && (
				<nav className="lg:hidden border-t border-white/5 bg-[#0a0806] px-5 py-4">
					{NAV_LINKS.map((link) => (
						<a
							key={link.label}
							href={link.href}
							onClick={() => setOpen(false)}
							className="block py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#cfc4ae] hover:text-[#d2a24a]"
						>
							{link.label}
						</a>
					))}
				</nav>
			)}
		</header>
	);
}

function Hero() {
	return (
		<section
			id="inicio"
			className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[#0a0806] pt-20"
		>
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						'radial-gradient(ellipse 60% 50% at 70% 40%, rgba(210,162,74,0.12), transparent 60%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(120,60,20,0.15), transparent 60%)',
				}}
			/>
			<Embers />
			<div className="relative mx-auto grid w-full max-w-7xl items-center gap-2 px-5 py-10 sm:gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-8">
				<Reveal>
					<div>
						<h1 className="font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl xl:text-6xl">
							<span className="block text-[#f3ead8]">MÁS QUE COMIDA.</span>
							<span className="block text-[#d2a24a]">UNA EXPERIENCIA.</span>
						</h1>
						<p className="mt-4 max-w-lg text-sm leading-relaxed text-[#b8ab90] sm:text-base">
							Sabores creados para sorprender. Hamburguesas artesanales,
							especialidades ahumadas y experiencias gastronómicas diseñadas
							para quienes buscan algo extraordinario.
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<GoldButton>Pedir por WhatsApp</GoldButton>
							<OutlineButton href="#especialidades">
								Ver experiencias
							</OutlineButton>
						</div>
					</div>
				</Reveal>
				<Reveal delay={0.15}>
					<div className="relative flex min-h-[18rem] items-center justify-center lg:-mr-16 lg:min-h-[34rem] lg:justify-end">
						<div
							className="hero-fire pointer-events-none absolute inset-[-8%] rounded-[48%]"
							aria-hidden="true"
						/>
						<div
							className="pointer-events-none absolute inset-10 blur-3xl"
							style={{
								background:
									'radial-gradient(circle at 52% 52%, rgba(210,162,74,0.30), transparent 64%)',
							}}
						/>
						<img
							src={IMG.heroBurger}
							alt="Hamburguesa artesanal HYAM con cheddar fundido y cebolla crispy"
							className="hero-burger-image relative z-10 w-full max-w-[40rem] origin-center object-contain mix-blend-screen drop-shadow-[0_30px_35px_rgba(0,0,0,0.8)] transition-transform duration-700 hover:scale-[1.03] sm:w-[90%] lg:w-[125%] lg:max-w-none"
							style={{ WebkitMaskImage: 'radial-gradient(ellipse 90% 82% at 50% 50%, #000 68%, transparent 100%)' }}
							loading="eager"
						/>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

function Laboratorio() {
	return (
		<section id="historia" className="relative overflow-hidden bg-[#0d0a07] py-24">
			<div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
				<Reveal>
					<div>
						<SectionLabel>El laboratorio HYAM</SectionLabel>
						<h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-[#f3ead8] sm:text-5xl">
							Donde nacen los sabores extraordinarios.
						</h2>
						<p className="mt-6 max-w-md text-base leading-relaxed text-[#b8ab90]">
							En HYAM creemos que una hamburguesa debe emocionar tanto como
							sorprender. Por eso experimentamos, perfeccionamos y
							transformamos ingredientes de calidad en experiencias únicas.
						</p>
						<p className="font-script mt-8 text-3xl text-[#d2a24a]">
							Mentes locas. Sabores extraordinarios.
						</p>
					</div>
				</Reveal>
				<Reveal delay={0.15}>
					<div className="relative mx-auto max-w-sm">
						<div
							className="pointer-events-none absolute inset-0 blur-3xl"
							style={{
								background:
									'radial-gradient(circle at 50% 70%, rgba(210,162,74,0.2), transparent 65%)',
							}}
						/>
						<img
							src={IMG.mascot}
							alt="Chef científico, mascota del laboratorio HYAM"
							className="relative w-full rounded-2xl object-cover"
							loading="lazy"
						/>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

function BurgerCard({ burger, index }) {
	return (
		<Reveal delay={index * 0.1}>
			<article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#2b241a] bg-[#15110c] transition-all duration-300 hover:border-[#d2a24a]/50 hover:-translate-y-1.5">
				<div className="overflow-hidden">
					<img
						src={burger.image}
						alt={burger.name}
						className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
						loading="lazy"
					/>
				</div>
				<div className="flex flex-1 flex-col p-6">
					<h3 className="font-display text-xl font-semibold tracking-wide text-[#f3ead8]">
						{burger.name}
					</h3>
					<p className="mt-3 flex-1 text-sm leading-relaxed text-[#a89a80]">
						{burger.description}
					</p>
					<a
						href={WHATSAPP_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-4 inline-flex items-center justify-center gap-2 rounded-md border border-[#d2a24a]/50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#e8d9b5] transition-all duration-200 hover:bg-[#d2a24a] hover:text-[#1a1408] active:scale-[0.98]"
					>
						<MessageCircle className="h-4 w-4" strokeWidth={2.2} />
						Pedir ahora
					</a>
				</div>
			</article>
		</Reveal>
	);
}

function Creaciones() {
	return (
		<section id="creaciones" className="relative bg-[#0a0806] py-24">
			<div className="mx-auto max-w-7xl px-5 lg:px-8">
				<Reveal>
					<div className="text-center">
						<SectionLabel>Nuestras creaciones</SectionLabel>
						<h2 className="font-display mt-4 text-4xl font-semibold text-[#f3ead8] sm:text-5xl">
							Hamburguesas Legendarias
						</h2>
					</div>
				</Reveal>
				<div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{BURGERS.map((burger, i) => (
						<BurgerCard key={burger.name} burger={burger} index={i} />
					))}
				</div>
				<Reveal>
					<div className="mt-12 text-center">
						<OutlineButton href="#especialidades">
							Ver todas las hamburguesas
						</OutlineButton>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

function Especialidades() {
	return (
		<section id="especialidades" className="relative overflow-hidden bg-[#0d0a07] py-24">
			<Embers />
			<div className="relative mx-auto max-w-7xl px-5 lg:px-8">
				<Reveal>
					<div className="text-center">
						<SectionLabel>Especialidades del laboratorio</SectionLabel>
						<h2 className="font-display mt-4 text-4xl font-semibold text-[#f3ead8] sm:text-5xl">
							Más que hamburguesas, experiencias.
						</h2>
					</div>
				</Reveal>

				<Reveal>
					<article className="group mt-14 grid overflow-hidden rounded-xl border border-[#2b241a] bg-[#15110c] transition-colors duration-300 hover:border-[#d2a24a]/50 lg:grid-cols-5">
						<div className="overflow-hidden lg:col-span-3">
							<img
								src={IMG.costillas}
								alt="Costillas ahumadas con papas fritas"
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								loading="lazy"
							/>
						</div>
						<div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-10">
							<h3 className="font-display text-2xl font-semibold tracking-wide text-[#f3ead8]">
								COSTILLAS AHUMADAS
							</h3>
							<p className="mt-4 text-sm leading-relaxed text-[#a89a80]">
								Preparadas lentamente para lograr una textura perfecta y un
								sabor inolvidable que se roba toda la atención.
							</p>
							<div className="mt-6">
								<OutlineButton className="px-6 py-3 text-xs">
									<MessageCircle className="h-4 w-4" strokeWidth={2.2} />
									Pedir ahora
								</OutlineButton>
							</div>
						</div>
					</article>
				</Reveal>

				<div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{SPECIALS.map((item, i) => (
						<Reveal key={item.name} delay={i * 0.1}>
							<article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#2b241a] bg-[#15110c] transition-all duration-300 hover:border-[#d2a24a]/50 hover:-translate-y-1.5">
								<div className="overflow-hidden">
									<img
										src={item.image}
										alt={item.name}
										className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
										loading="lazy"
									/>
								</div>
								<div className="flex flex-1 flex-col p-6">
									<h3 className="font-display text-lg font-semibold tracking-wide text-[#f3ead8]">
										{item.name}
									</h3>
									<p className="mt-2 flex-1 text-sm leading-relaxed text-[#a89a80]">
										{item.description}
									</p>
								</div>
							</article>
						</Reveal>
					))}
				</div>

				<Reveal>
					<div className="mt-12 text-center">
						<OutlineButton href={WHATSAPP_URL}>
							Ver todas las especialidades
						</OutlineButton>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

function Galeria() {
	return (
		<section id="galeria" className="bg-[#0a0806] py-24">
			<div className="mx-auto max-w-7xl px-5 lg:px-8">
				<Reveal>
					<div className="text-center">
						<SectionLabel>Galería HYAM</SectionLabel>
						<h2 className="font-display mt-4 text-4xl font-semibold text-[#f3ead8] sm:text-5xl">
							Vive la experiencia
						</h2>
					</div>
				</Reveal>
				<div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
					{IMG.gallery.map((src, i) => (
						<Reveal key={src} delay={i * 0.08}>
							<div className="group overflow-hidden rounded-lg border border-[#2b241a]">
								<img
									src={src}
									alt={`Experiencia HYAM ${i + 1}`}
									className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
									loading="lazy"
								/>
							</div>
						</Reveal>
					))}
				</div>
				<Reveal>
					<div className="mt-12 text-center">
						<a
							href={INSTAGRAM_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-2 rounded-md border border-[#d2a24a]/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-[#e8d9b5] transition-all duration-200 hover:bg-[#d2a24a]/10 hover:border-[#d2a24a] active:scale-[0.98]"
						>
							<Instagram className="h-4 w-4" strokeWidth={2.2} />
							Síguenos en Instagram
						</a>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

function CtaFinal() {
	return (
		<section className="relative overflow-hidden bg-[#0d0a07] py-24">
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						'radial-gradient(ellipse 50% 60% at 75% 50%, rgba(210,162,74,0.14), transparent 65%)',
				}}
			/>
			<Embers />
			<div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
				<Reveal>
					<div>
						<h2 className="font-display text-5xl font-bold leading-tight text-[#d2a24a] sm:text-6xl">
							HECHO PARA VOLVER.
						</h2>
						<p className="mt-4 text-lg text-[#b8ab90]">
							Cada visita, un recuerdo inolvidable.
						</p>
						<div className="mt-9">
							<GoldButton>Pedir por WhatsApp</GoldButton>
						</div>
					</div>
				</Reveal>
				<Reveal delay={0.15}>
					<div className="relative mx-auto max-w-xs lg:ml-auto">
						<img
							src={IMG.mascot}
							alt="Mascota HYAM invitándote a volver"
							className="w-full rounded-2xl object-cover"
							loading="lazy"
						/>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer id="contacto" className="border-t border-[#2b241a] bg-[#080604]">
			<div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
				<div>
					<Logo />
					<p className="mt-5 flex items-center gap-2 text-sm text-[#a89a80]">
						<Flame className="h-4 w-4 text-[#d2a24a]" />
						Mentes locas. Sabores extraordinarios.
					</p>
				</div>
				<div>
					<h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#caa14a]">
						Navegación
					</h4>
					<ul className="mt-5 space-y-3">
						{NAV_LINKS.map((link) => (
							<li key={link.label}>
								<a
									href={link.href}
									className="text-sm text-[#b8ab90] transition-colors hover:text-[#d2a24a]"
								>
									{link.label.charAt(0) + link.label.slice(1).toLowerCase()}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#caa14a]">
						Información
					</h4>
					<ul className="mt-5 space-y-3 text-sm text-[#b8ab90]">
						<li>
							<a href="#historia" className="transition-colors hover:text-[#d2a24a]">
								Sobre HYAM
							</a>
						</li>
						<li>
							<a href="#contacto" className="transition-colors hover:text-[#d2a24a]">
								Términos y condiciones
							</a>
						</li>
						<li>
							<a href="#contacto" className="transition-colors hover:text-[#d2a24a]">
								Política de privacidad
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#caa14a]">
						Contacto
					</h4>
					<ul className="mt-5 space-y-3 text-sm text-[#b8ab90]">
						<li className="flex items-center gap-2">
							<MapPin className="h-4 w-4 shrink-0 text-[#d2a24a]" />
							Bayunca, Cartagena
						</li>
						<li>
							<a
								href={WHATSAPP_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 transition-colors hover:text-[#d2a24a]"
							>
								<Phone className="h-4 w-4 shrink-0 text-[#d2a24a]" />
								316 053 8877
							</a>
						</li>
						<li>
							<a
								href="mailto:reposteria4dukeller@gmail.com"
								className="flex items-center gap-2 break-all transition-colors hover:text-[#d2a24a]"
							>
								<Mail className="h-4 w-4 shrink-0 text-[#d2a24a]" />
								reposteria4dukeller@gmail.com
							</a>
						</li>
						<li>
							<a
								href="mailto:support@hyamfood.com"
								className="flex items-center gap-2 break-all transition-colors hover:text-[#d2a24a]"
							>
								<Mail className="h-4 w-4 shrink-0 text-[#d2a24a]" />
								support@hyamfood.com
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="border-t border-[#2b241a] py-6 text-center text-xs text-[#7a6f5a]">
				© 2025 HYAM - Hamburguesas y Algo Más. Todos los derechos reservados.
			</div>
		</footer>
	);
}

export default function HyamPage() {
	return (
		<div className="min-h-screen bg-[#0a0806] font-body text-[#f3ead8] antialiased">
			<Helmet>
				<title>HYAM | Hamburguesas y Algo Más — Más que comida, una experiencia</title>
				<meta
					name="description"
					content="HYAM Hamburguesas y Algo Más en Bayunca, Cartagena. Hamburguesas artesanales, costillas ahumadas y especialidades del laboratorio. Pide por WhatsApp."
				/>
			</Helmet>
			<Header />
			<main>
				<Hero />
				<Laboratorio />
				<Creaciones />
				<Especialidades />
				<Galeria />
				<CtaFinal />
			</main>
			<Footer />
		</div>
	);
}
