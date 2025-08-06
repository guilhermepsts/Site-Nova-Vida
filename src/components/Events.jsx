const Events = () => {
	return (
		<section
			id="events"
			className="mt-40 space-y-20 px-8 max-w-5xl items-center mx-auto"
		>
			<div className="grid grid-cols-[1fr_2fr] gap-8 items-center">
				<h2 className="font-medium text-4xl text-white">
					nossos <br /> eventos
				</h2>
				<hr />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div className="bg-gray-800 p-10 rounded-lg shadow-lg">
					<h3 className="text-xl font-semibold text-white">Evento 1</h3>
					<p className="text-gray-400 mt-2">Descrição do evento 1.</p>
				</div>
				<div className="bg-gray-800 p-10 rounded-lg shadow-lg">
					<h3 className="text-xl font-semibold text-white">Evento 2</h3>
					<p className="text-gray-400 mt-2">Descrição do evento 2.</p>
				</div>
				<div className="bg-gray-800 p-10 rounded-lg shadow-lg">
					<h3 className="text-xl font-semibold text-white">Evento 3</h3>
					<p className="text-gray-400 mt-2">Descrição do evento 3.</p>
				</div>
			</div>
		</section>
	);
};

export default Events;
