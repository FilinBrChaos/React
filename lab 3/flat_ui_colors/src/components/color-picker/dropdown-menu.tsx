import { Menu } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface DropdownMenuProps {
    title: string
    buttons: {title: string, onClick: () => void}[]
}

export function DropdownMenu(props: DropdownMenuProps){
    let key = 0
    return(
        <div>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                <Menu.Button className="inline-flex font-medium tracking-wide text-base leading-4 w-72 h-9 justify-center rounded bg-black px-4 py-2 text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    {props.title}
                </Menu.Button>
                </div>
                    <Menu.Items className="absolute top-44 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 origin-center">
                        <motion.div className="bg-white shadow-lg rounded overflow-hidden"
                        animate={{scaleX: [0.8, 1.05, 1], scaleY: [0.6, 1.1, 0.9, 1], transition:{duration:0.6}}}>
                            {props.buttons.map(button => <DropdownMenuButton id={key++} title={button.title} onClick={button.onClick}></DropdownMenuButton>)}
                        </motion.div>
                    </Menu.Items>
            </Menu>
        </div>
    )
}

interface DropdownMenuButtonProps {
    id: number
    title: string
    onClick: () => void
}

function DropdownMenuButton(props: DropdownMenuButtonProps){
    return(
        <Menu.Item key={props.id}>
            {({ active }) => (
                <button
                    className={`${active ? ' bg-black text-white' : 'text-gray-900'} 
                    group flex w-full h-10 items-center justify-center text-base`}
                    onClick={() => props.onClick()}>
                    {props.title}
                </button>
            )}
        </Menu.Item>
    )
}