import React from 'react'
import works from '../assets/How does it work.png'

function Works() {
  return (
    <div className='overflow-y-scroll h-[100%] flex flex-col gap-8 pl-10 scrollbar-hide'>
        <div>
            <h1 className="text-2xl font-bold">Everything works</h1>
            <p>Ccsectetur adipiscing elit. There is no pain free. Some diam pain, it receives some a, not expected nor lake. There is no shipping and no shipping service. The chat is done. Mauris as tincidunt diam. In the protein of life the cat should be targeted. There is nothing in the propaganda quiver, yeast from anyone, except chocolate. Until the laoreet put the advertisement and the chocolate. Maecenas is an easy target.</p>

            <h1 className="text-2xl font-bold">Curabitur in efficitur est</h1>
            <p>Phasellus fringilla, leo eu dapibus congue, diam felis lacinia urna, vitae tincidunt tortor est who is. Now it has been said, the felis and the makeup of the molestie, the very lake of the accumsan lorem, but the rhoncus mauris in the region. We live neither vulputate nor Bullets kill kids rather than shooting chocolate. The fear of the disease was raised, he was shot in the diam, Until it's a lot of football, I want to tell the story but in my mind.</p>

            <h1 className="text-2xl font-bold">Lorem Ipsum</h1>
            <p>Ccsectetur adipiscing elit. There is no pain free. Some diam pain, it receives some a, not expected nor lake. There is no shipping and no shipping service. The chat is done. Mauris as tincidunt diam. In the protein of life the cat should be targeted. There is nothing in the propaganda quiver, yeast from anyone, except chocolate. Until the laoreet put the advertisement and the chocolate. Maecenas is an easy target.</p>
        </div>

        <div className='h-fit'>
            <img src={works} alt="" />
        </div>
    </div>
  )
}

export default Works