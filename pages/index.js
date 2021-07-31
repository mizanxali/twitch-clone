import Navbar from '../components/common/Navbar'
import RecommendedCategories from '../components/index/RecommendedCategories/RecommendedCategories'
import RecommendedStreams from '../components/index/RecommendedStreams/RecommendedStreams'
import SideDrawer from '../components/index/SideDrawer/SideDrawer'

export default function Home() {
	return (
		<div className='m-0 h-full'>
			<Navbar />
			<div className='flex h-screen'>
					<SideDrawer />
				<div className='w-full bg-gray-darkest text-white overflow-scroll ok'>
					{/* <header className='m-3'>
						<Carousel />
					</header> */}
					<RecommendedStreams />
					<RecommendedCategories />
				</div>
			</div>
			
			<style global jsx>{`
			html,
			body,
			body > div:first-child,
			div#__next,
			div#__next > div {
			height: 100vh;
			margin: 0;
			padding: 0;
			overflow: hidden;
			}

			.ok::-webkit-scrollbar {
				display: none;
			}
		`}</style>
		</div>
	)
}
