import { Phone, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
	return (
		<section
			id="contact"
			className="mt-40 space-y-10 px-8 max-w-5xl items-center mx-auto"
		>
			<div className="flex items-center gap-8">
				<h2 className="font-medium text-4xl text-white" data-aos="fade-down">
					precisa <br /> conversar?
				</h2>
				<hr className="flex-grow border-gray-700" data-aos="fade-down" />
			</div>

			<div
				className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8"
				data-aos="fade-up"
			>
				<div className="space-y-4" data-aos="fade-up">
					<h2 className="text-white mb-4 text-xl">
						Faça uma visita ou entre em contato conosco!
					</h2>
					<a
						href="https://wa.me/5521978866421"
						target="_blank"
						className="
      				bg-green-500 px-6 py-3 rounded-3xl text-black font-semibold 
      				shadow-[4px_4px_0px_black] 
      				transition-all duration-150 
      				hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_black]
      				active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
      				w-full text-center inline-flex items-center justify-center gap-2"
					>
						<MessageCircle size={20} /> WhatsApp: 21 97886 6421
					</a>

					<a
						href="tel:+552122088391"
						className="
      				bg-yellow-400 px-6 py-3 rounded-3xl text-black font-semibold 
      				shadow-[4px_4px_0px_black] 
      				transition-all duration-150 
      				hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_black]
      				active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
      				w-full text-center inline-flex items-center justify-center gap-2"
					>
						<Phone size={20} />
						Telefone: 21 2208-8391
					</a>

					<a
						href="https://www.instagram.com/invgrajau/"
						tagerget="_blank"
						className="
      				bg-pink-700 px-6 py-3 rounded-3xl text-black font-semibold 
      				shadow-[4px_4px_0px_black] 
      				transition-all duration-150 
      				hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_black]
      				active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
      				w-full text-center inline-flex items-center justify-center gap-2"
					>
						<Instagram size={20} /> Instagram: @invgrajau
					</a>
				</div>

				<div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2061.435456520722!2d-43.25724897315302!3d-22.923800206309455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997de3eec15b85%3A0x3d188c18851665be!2sIgreja%20Nova%20Vida%20do%20Graja%C3%BA!5e0!3m2!1spt-BR!2sbr!4v1755555041743!5m2!1spt-BR!2sbr"
						className="w-full h-full "
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default Contact;
