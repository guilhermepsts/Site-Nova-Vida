import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import Slider from './components/Slider';
import Contact from './components/Contact';
import About from './components/About';

function App() {
	const eventos = [
		{
			title: 'Evento 1',
			description: 'Descrição do evento 1.',
			spanCols: 2,
			spanRows: 2,
		},
		{
			title: 'Evento 2',
			description: 'Descrição do evento 2.',
		},
		{
			title: 'Evento 3',
			description: 'Descrição do evento 3.',
		},
		{
			title: 'Evento 4',
			description: 'Descrição do evento 4.',
		},
	];

	const ministerios = [
		{
			title: 'Ministério 1',
			description: 'Descrição do ministério 1.',
		},
		{
			title: 'Ministério 2',
			description: 'Descrição do ministério 2.',
		},
		{
			title: 'Ministério 3',
			description: 'Descrição do ministério 3.',
		},
		{
			title: 'Ministério 4',
			description: 'Descrição do ministério 3.',
		},
	];

	return (
		<div className="">
			<Header />
			<Slider />
			<About />
			<Services />
			<Gallery title="nossos eventos" events={eventos} id="events" />
			<Gallery title="nossos ministérios" events={ministerios} id="ministres" />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
