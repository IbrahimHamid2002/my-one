import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.1} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className='relative w-60 h-72 rounded-[45px] px-8 py-10 overflow-hidden bg-zinc-900/90 text-white'>
            <FaRegFileAlt />
            <p className='text-sm font-semibold mt-5 leading-tight'>{data.desc}</p>
            <div className='footer absolute bottom-0 left-0 w-full'>
                <div className='flex items-center justify-between px-8 py-3 mb-2'>
                    <h5 className='text-sm'>{data.fileSize}</h5>
                    <span className='flex items-center justify-center h-7 w-7 rounded-full bg-zinc-600 text-white text-sm'>
                        {data.close ? <IoClose /> : <LuDownload />}
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center py-3`}>
                            <h5 className='text-sm font-semibold'>{data.tag.tagTitle}</h5>
                        </div>
                    )
                }
            </div>
        </motion.div>
    )
}

export default Card
