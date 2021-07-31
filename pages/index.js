import Navbar from '../components/common/Navbar'
import Carousel from '../components/index/Carousel/Carousel'
import RecommendedStreams from '../components/index/RecommendedStreams/RecommendedStreams'
import SideDrawer from '../components/index/SideDrawer/SideDrawer'

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className='flex h-full'>
				<SideDrawer />
				<div className='w-full bg-gray-darkest text-white'>
					{/* <header className='m-3'>
						<Carousel />
					</header> */}
					<RecommendedStreams />
				</div>
			</div>
			
			<style global jsx>{`
			html,
			body,
			body > div:first-child,
			div#__next,
			div#__next > div {
			height: 100%;
			}
		`}</style>
		</div>
	)
}
