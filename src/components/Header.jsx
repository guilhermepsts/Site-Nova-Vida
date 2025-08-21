import React, { useEffect, useState } from 'react';

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 100);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 w-full h-[100px] lg:h-auto z-50 transition-colors duration-500 ${
				scrolled ? 'bg-black/100' : 'header-shadow-top'
			}`}
		>
			<div className="p-4 flex flex-col items-center">
				<a href="./">
					<picture>
						<source
							srcSet="src/assets/images/nova-vida.svg"
							media="(min-width: 1024px)"
						/>

						<img
							src="/images/favicon.svg"
							className="h-16"
							alt="Igreja Nova Vida do Grajaú"
						/>
					</picture>
				</a>
				<nav className="font-gotham font-light text-xl text-white mt-4">
					<ul className="justify-center space-x-8 hidden lg:flex">
						<li>
							<a href="#about">sobre nós</a>
						</li>
						<li>
							<a href="#services">encontros</a>
						</li>
						<li>
							<a href="#events">eventos</a>
						</li>
						<li>
							<a href="#ministres">ministérios</a>
						</li>
						<li>
							<a href="#contact">contato</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
