"use client"

import {Fragment, ReactNode, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {useRouter} from "next/navigation";
import {XMarkIcon} from "@heroicons/react/24/solid";

export default function Modal({
    title,
    description,
    children
}: {
    title: ReactNode
    description: ReactNode
    children: ReactNode
}) {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        if (!isOpen) router.back()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                onClose={() => router.back()}
            >

                {/* Backdrop */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-dark/20 backdrop-blur-sm" />
                </Transition.Child>

                {/* Full-screen scrollable */}
                <div className="fixed inset-0 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-8">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-dark-700 p-6 relative">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4"
                                >
                                    <XMarkIcon
                                        className="w-6 aspect-square fill-white/50 stroke-1 stroke-white/50"
                                    />
                                </button>
                                <Dialog.Title
                                    className="text-h1"
                                >
                                    {title}
                                </Dialog.Title>
                                <Dialog.Description
                                    className="text-big opacity-80 italic mt-1 mb-4"
                                >
                                    {description}
                                </Dialog.Description>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}