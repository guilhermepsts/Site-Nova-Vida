import React, { useState, useEffect } from 'react';

const images = [
	'src/assets/imgs/img1.jpg',
	'src/assets/imgs/img2.png',
	'src/assets/imgs/img3.png',
];

export default function Slider() {
	const [current, setCurrent] = useState(0);

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % images.length);
	};

	const prevSlide = () => {
		setCurrent((prev) => (prev - 1 + images.length) % images.length);
	};

	// Autoplay a cada 5 segundos
	useEffect(() => {
		const interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval);
	}, [current]);

	return (
		<div className="relative w-full max-h-screen overflow-hidden">
			<div
				className="flex transition-transform duration-700 ease-in-out"
				style={{ transform: `translateX(-${current * 100}%)` }}
			>
				{images.map((img, idx) => (
					<img
						key={idx}
						src={img}
						alt={`slide ${idx}`}
						className="w-full flex-shrink-0 object-cover"
					/>
				))}
			</div>

			{/* Botões de navegação */}
			<button
				onClick={prevSlide}
				className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-10"
			>
				<img
					src="src/assets/arrow-left.svg"
					alt="Voltar Imagem"
					className="h-[40px] w-[40px]"
				/>
			</button>

			<button
				onClick={nextSlide}
				className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-10"
			>
				<img
					src="src/assets/arrow-right.svg"
					alt="Próxima Imagem"
					className="h-[40px] w-[40px]"
				/>
			</button>

			{/* Indicadores */}
			<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
				{images.map((_, idx) => (
					<button
						key={idx}
						onClick={() => setCurrent(idx)}
						className={`h-3 w-3 rounded-full ${
							current === idx ? 'bg-white' : 'bg-white/50'
						}`}
					/>
				))}
			</div>
		</div>
	);
}
