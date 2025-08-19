const Footer = () => {
	return (
		<footer className="text-white py-10 px-6 mt-20">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
				<div className="flex flex-col gap-2 text-center md:text-left">
					<p>Telefone: (21) 2208-8391</p>
					<p>Email: secretaria@invgrajau.org.br</p>
					<p>Endereço: Rua Barão de Mesquita 1047, Grajaú </p>
				</div>
				{/* Logo */}
				<div className="flex items-center justify-center">
					<a href="./">
						<picture>
							<source
								srcSet="/images/favicon.svg"
								media="(min-width: 1024px)"
							/>

							<img
								src="src/assets/images/nova-vida.svg"
								className="h-16"
								alt="Igreja Nova Vida do Grajaú"
							/>
						</picture>
					</a>
				</div>

				{/* Informações de Contato */}
			</div>

			<div className="mt-6 text-center text-sm text-gray-400">
				© {new Date().getFullYear()} Igreja Nova Vida do Grajaú. Todos os
				direitos reservados.
			</div>
		</footer>
	);
};

export default Footer;
