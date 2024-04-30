import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ cardData, reference }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
      drag
      dragConstraints={reference}
      className='relative w-60 h-64 bg-zinc-700 rounded-3xl text-white p-4 overflow-hidden flex-shrink-0'
    >

      <FaRegFileAlt />
      <p className='py-4'>{cardData.description}</p>


      <div className='line-break flex w-full'>
        <div className='line-break w-96 bg-slate-300/40 h-[1px]'></div>
      </div>


      <div className='footer w-full absolute bottom-0 left-0'>
        <div className='footerPart1 mb-4 w-full flex text-center items-center justify-between px-4 '>
          <p>{cardData.fileSize}</p>

          {cardData.close ?
            <IoMdClose className='cursor-pointer' /> :
            <MdFileDownload className='cursor-pointer' />
          }

        </div>

        {
          cardData.footerTag.isOpen && (
            <div className={`footerPart2 ${cardData.footerTag.footerColor} w-full h-9 flex justify-center items-center cursor-pointer`}>
              <p>{cardData.footerTag.footerTitle}</p>
            </div>
          )
        }

      </div>
    </motion.div>
  )
}

export default Card