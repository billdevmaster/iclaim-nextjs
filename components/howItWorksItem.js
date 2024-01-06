/* eslint-disable prettier/prettier */

import { useState } from "react"

const HowItWorksItem = ({ number, title, detail }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div class="inline-flex rounded-[10px] items-center px-[20px] hover:bg-pink-200 hover:small-shadow" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <span class={`w-[60px] h-[60px] flex justify-center items-center rounded-full ${hover ? 'bg-pink-main text-white' : 'text-pink-main'} text-[48px] font-soleSerifHeadlineBold mr-[20px]`}>{number}</span>
        <div class="text-left w-full">
          <p class="font-semibold text-[24px] capitalize text-black-light">{title}</p>
          <p class="text-[16px] text-brown-main">{detail}</p>
        </div>
      </div>
    </>
  )
}

export default HowItWorksItem

