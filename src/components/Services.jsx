const Services = () => {
	return (
		<section
			id="services"
			className="mt-40 space-y-20 px-8 max-w-5xl items-center mx-auto"
		>
			<div className="grid grid-cols-[1fr_2fr] gap-8 items-center">
				<h2 className="font-medium text-4xl text-white" data-aos="fade-down">
					nossos <br /> encontros
				</h2>
				<hr data-aos="fade-down" />
			</div>

			<div
				class="grid grid-cols-[1fr_2fr] tracking-tighter gap-4 max-w-4xl font-light text-2xl lg:text-3xl"
				data-aos="fade-up"
			>
				<div class="text-right pr-4 border-r border-white/30 font-light">
					domingo
				</div>
				<div class="text-lg pl-4 space-y-1">
					<p>Escola Bíblica - 7h30</p>
					<p>Culto de Maturidade - 9h</p>
					<p>Culto de Louvor e Adoração - 18h</p>
				</div>

				<div class="text-right pr-4 border-r border-white/30 font-light">
					segunda
				</div>
				<div class="text-lg pl-4">
					<p>Reunião de Oração - 15h</p>
				</div>

				<div class="text-right pr-4 border-r border-white/30 font-light">
					terça
				</div>
				<div class="text-lg pl-4">
					<p>Reunião de Oração - 7h</p>
				</div>

				<div class="text-right pr-4 border-r border-white/30 font-light">
					quarta
				</div>
				<div class="text-lg pl-4">
					<p>Culto de Louvor e Adoração - 19h30</p>
				</div>

				<div class="text-right pr-4 border-r border-white/30 font-light">
					sexta
				</div>
				<div class="text-lg pl-4">
					<p>Reunião Desperta Débora - 17h</p>
				</div>
			</div>

			<p className="text-center">
				Nosso desejo é que você possa nos visitar e participar de nossos
				encontros. <br />
				Nosso espaço é aberto a todos! Temos certeza de que você será muito
				abençoado e bem recebido!
			</p>
		</section>
	);
};

export default Services;
