const About = () => {
	return (
		<section
			id="about"
			className="mt-32 space-y-28 px-8 max-w-5xl items-center mx-auto"
		>
			<div>
				<p className="text-3xl text-gray-white text-center">
					"Por isso, nós, que somos muitos, formamos um corpo em Cristo, e cada
					membro está ligado a todos os outros."
				</p>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mt-20 px-4 lg:px-20">
				<div data-aos="fade-down" className="w-full">
					<img
						src="/images/about1.jpg"
						alt="Sobre nós"
						className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
					/>
				</div>

				<div data-aos="fade-up" className="space-y-6 max-w-lg">
					<span className="text-yellow uppercase font-semibold tracking-widest">
						Conheça nossa família
					</span>

					<div>
						<h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
							Nossa missão é
						</h2>
						<p className="text-gray-300 leading-relaxed">
							fazer discípulos de todas as nações, batizando-os em nome do Pai,
							do Filho e do Espírito Santo, e ensinando-os a obedecer a todos os
							mandamentos de Jesus. Isso envolve proclamar o evangelho,
							testemunhar do amor de Deus e servir ao próximo.
						</p>
					</div>

					<a
						href="/about"
						className="bg-yellow px-6 py-3 rounded-3xl text-black font-semibold 
      shadow-[4px_4px_0px_black] 
      transition-all duration-150 
      hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_black]
      active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
      inline-block w-auto"
					>
						Sobre nós
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
