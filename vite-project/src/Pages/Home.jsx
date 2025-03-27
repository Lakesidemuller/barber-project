import Accordion from "../components/Accordion"
import BottomSection from "../components/BottomSection"
import ImgFlex from "../components/ImgFlex"
import LastComp from "../components/LastComp"
import NewFile from "../components/NewFile"
import TopPrice from "../HomePage/TopPrice"
import TopSection from "../HomePage/TopSection"

function Home() {
  return (
    <main>
        <TopSection />
        <NewFile />
        <TopPrice />
        <Accordion />
        <LastComp />
        <ImgFlex />
        <BottomSection />
        
    </main>
  )
}

export default Home