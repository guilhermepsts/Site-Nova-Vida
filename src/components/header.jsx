import React, { useEffect, useState } from 'react';

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50); // altera quando passar de 50px
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
				scrolled ? 'bg-black/90' : 'bg-transparent'
			}`}
		>
			<div className="p-4 flex flex-col items-center">
				<a href="./">
					<img
						src="src/assets/nova-vida.svg"
						alt="Igreja Nova Vida do Grajaú"
					/>
				</a>
				<nav className="font-gotham font-light text-xl text-white mt-4">
					<ul className="flex justify-center space-x-8">
						<li>sobre nós</li>
						<li>eventos</li>
						<li>ministérios</li>
						<li>oferta</li>
						<li>contato</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
