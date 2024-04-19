import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

import { teacherData } from '../../data/teacherData';

export function DialogBox(props) {

    // ---------------- props
    const { teacherClicked, setTeacherClicked, teacher } = props;

    // ---------------- state variables
    const [teachings, setTeachings] = useState(null);

    // ---------------- useEffect
    useEffect(() => {
        if (teacher === "My Parents") {
            setTeachings(teacherData.myParents.teachings);
        } else if (teacher === "Shree Ram") {
            setTeachings(teacherData.shreeRam.teachings);
        } else if (teacher === "Shree Krishna") {
            setTeachings(teacherData.shreeKrishna.teachings);
        } else if (teacher === "Sir Sean Morrow") {
            setTeachings(teacherData.sirSeanMorrow.teachings);
        }
    }, [teacher]);

    // ---------------- event handlers
    function closeModal() {
        setTeacherClicked(false);
    }

    return (
        <>
            <Transition appear show={teacherClicked} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl text-center font-bold leading-6 text-black"
                                    >
                                        {teacher}
                                    </Dialog.Title>
                                    <div className="mt-2 font-semibold text-sm eading-normal">
                                        <div dangerouslySetInnerHTML={{ __html: teachings }} />
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    )
}
