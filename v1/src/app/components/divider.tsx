"use client"

type Rotate = {
    rotation?: number
}

export default function DividerMountain({rotation = 0}: Rotate) {
    return(
        <div className={"relative mt-[-1px] leading-none"}>
            <img
                src="/forme/montagne.svg"
                alt="Montagne Divider"
                className="block w-full h-auto m-0 p-0"
                style={{ transform:`rotate(${rotation}deg)` }}
            />
        </div>
    )
}