import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = ({ title, events, id }) => {
	const carouselRef = useRef(null);

	const scroll = (direction) => {
		if (!carouselRef.current) return;
		const scrollAmount = 300; // pixels para rolar
		carouselRef.current.scrollBy({
			left: direction === 'left' ? -scrollAmount : scrollAmount,
			behavior: 'smooth',
		});
	};

	const [firstWord, ...rest] = title.split(' ');

	return (
		<section
			id={id}
			className="mt-40 space-y-20 px-8 max-w-5xl items-center mx-auto"
		>
			{/* Cabeçalho */}
			<div className="flex items-center gap-8">
				<h2 className="font-medium text-4xl text-white">
					{firstWord} <br /> {rest.join(' ')}
				</h2>
				<hr className="flex-grow border-gray-700" />
			</div>

			{/* Área do carrossel com botões */}
			<div className="relative">
				{/* Botão Esquerda */}
				<button
					onClick={() => scroll('left')}
					className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900/70 hover:bg-gray-900 p-3 rounded-full z-10"
				>
					<ChevronLeft className="text-white" />
				</button>

				{/* Lista de cards */}
				<div
					ref={carouselRef}
					className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
				>
					{events.map((event, index) => (
						<div
							key={index}
							className="bg-gray-800 p-10 rounded-lg shadow-lg flex-shrink-0 w-80 snap-center"
						>
							<h3 className="text-xl font-semibold text-white">
								{event.title}
							</h3>
							<p className="text-gray-400 mt-2">{event.description}</p>
						</div>
					))}
				</div>

				{/* Botão Direita */}
				<button
					onClick={() => scroll('right')}
					className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900/70 hover:bg-gray-900 p-3 rounded-full z-10"
				>
					<ChevronRight className="text-white" />
				</button>
			</div>
		</section>
	);
};

export default Gallery;
