import Navbar from "../components/common/Navbar"
import SideDrawer from "../components/index/SideDrawer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <SideDrawer />
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
