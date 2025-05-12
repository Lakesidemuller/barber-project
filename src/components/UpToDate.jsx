import React from 'react'
import UpTo from '../assets/Up to date.png'

function UpToDate() {
  return (
    <div className='scrollbar-hide overflow-y-scroll h-[100%] flex flex-col gap-8 pl-10'>
        <div>
            <h1 className='text-2xl font-bold'>Sign today to receive the latest news and updates</h1>
            <p>Cconsectetur adipiscing elit. Nulla non libero dolor. Aliquam diam dolor, suscipit id aliquam a, malesuada nec lacus. Vestibulum ac nulla nec lorem porttitor ultricies. Curabitur in efficitur est. Mauris ut tincidunt diam. In dapibus vitae felis sit amet iaculis. Nullam in augue pharetra, fermentum ex quis, scelerisque nisi. Donec laoreet posuere augue et scelerisque. Maecenas lobortis facilisis iaculis.</p>

            <h1 className='text-2xl font-bold'>Curabitur in efficitur est</h1>
            <p>Phasellus fringilla, leo eu dapibus congue, diam felis lacinia urna, vitae tincidunt tortor est quis est. Nunc dictum, felis ac rutrum molestie, ipsum lacus accumsan lorem, sed rhoncus mauris tellus in tellus. Vivamus nec vulputate neque. Pellentesque ultricies pellentesque quam sagittis scelerisque. Morbi lectus metus, iaculis in diam et, malesuada viverra sem. Donec sit amet felis eu elit egestas condimentum at in mi.</p>

            <h1 className='text-2xl font-bold'>Lorem Ipsum</h1>
            <p>Cconsectetur adipiscing elit. Nulla non libero dolor. Aliquam diam dolor, suscipit id aliquam a, malesuada nec lacus. Vestibulum ac nulla nec lorem porttitor ultricies. Curabitur in efficitur est. Mauris ut tincidunt diam. In dapibus vitae felis sit amet iaculis. Nullam in augue pharetra, fermentum ex quis, scelerisque nisi. Donec laoreet posuere augue et scelerisque. Maecenas lobortis facilisis iaculis.</p>
        </div>

        <img src={UpTo} alt="" />
    </div>
  )
}

export default UpToDate