import React, { useState, useEffect } from 'react';

const images = ['/images/img1.jpg', '/images/img2.png', '/images/img3.png'];

export default function Slider() {
	const [current, setCurrent] = useState(0);

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % images.length);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval);
	}, [current]);

	return (
		<div className="relative w-full max-h-screen overflow-hidden ">
			<div
				className="flex transition-transform duration-700 ease-in-out"
				style={{ transform: `translateX(-${current * 100}%)` }}
			>
				{images.map((img, idx) => (
					<img
						key={idx}
						src={img}
						alt={`slide ${idx}`}
						className="w-full h-screen flex-shrink-0 object-cover"
					/>
				))}
			</div>
			<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
				{images.map((_, idx) => (
					<button
						key={idx}
						onClick={() => setCurrent(idx)}
						className={`h-2 w-2 rounded-full ${
							current === idx ? 'bg-white' : 'bg-white/50'
						}`}
					/>
				))}
			</div>
		</div>
	);
}
