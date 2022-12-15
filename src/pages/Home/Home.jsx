import KaneraLogo from '/kanera.svg';

const Home = () => {
	return (
		<div className='home'>
			<div className='home__logo'>
				<img src={KaneraLogo} alt='Kanera image' />
			</div>
			<div className='home__hero'>
				<div className='home__hero--green'>
					<h1>Budget</h1>
					<h1>Budget</h1>
				</div>

				<div className='home__hero--beige'>
					<h1>Smart</h1>
					<h1>Simple</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;
