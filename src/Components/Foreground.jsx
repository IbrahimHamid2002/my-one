import React, {useRef} from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "This is the first card.",
            fileSize: ".4MB",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green",
            },
        },
        {
            desc: "This is the second card with something new",
            fileSize: ".9MB",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green",
            },
        },
        {
            desc: "This is the third card with new color.",
            fileSize: "1.9MB",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Upload",
                tagColor: "blue",
            },
        },
        {
            desc: "This is the last card! With nothing new 🤣",
            fileSize: ".07MB",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green",
            },
        },
    ];
    return (
        <div ref={ref} className='fixed p-5 top-0 left-0 z-[3] w-full h-screen flex gap-10 flex-wrap'>
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground
