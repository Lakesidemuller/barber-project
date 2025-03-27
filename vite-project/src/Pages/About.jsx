import React from 'react'
import Top from '../AboutPage/Top'
import NewFile from '../components/NewFile'
import Accordion from '../components/Accordion'
import LastComp from '../components/LastComp'
import ImgFlex from '../components/ImgFlex'
import BottomSection from '../components/BottomSection'


function About() {
  return (
    <main>
       <Top />
       <NewFile />
       <Accordion />
       <LastComp />
       <ImgFlex />
       <BottomSection />
    </main>
  )
}

export default About