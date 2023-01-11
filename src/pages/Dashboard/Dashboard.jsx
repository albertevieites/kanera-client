import TodayCard from '../../components/TodayCard/TodayCard';

function Dashboard() {
	return (
		<div className='dashboard'>
			<h2>Dashboard</h2>
			<div className='dashboard__top'>
				<TodayCard />
			</div>
		</div>
	);
}

export default Dashboard;
