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
			</div>{' '}
			<div className="grid grid-cols-1 lg:grid-cols-2 space-x-10 mt-10">
				<div className="flex flex-col items-start">
					<img
						src="/images/about1.jpg"
						alt="Sobre nós"
						className="w-full h-128 object-cover rounded-2xl mb-4"
					/>
				</div>
				<div>
					<h3 className="text-2xl font-semibold text-white">Nossa Missão</h3>
					<p className="text-gray-400 mt-2">
						Promover a união e o amor entre os membros da nossa comunidade.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
