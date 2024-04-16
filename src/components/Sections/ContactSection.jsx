import { Section } from "./Section"
import { useForm, ValidationError } from '@formspree/react';

export const ContactSection = () => {

    const [state, handleSubmit] = useForm("mnqeoeqb");

    return (
        <Section>
            <h2 className="text-5xl font-bold text-white">Contact me</h2>
            <div className="mt-8 mb-2 px-8 py-6 rounded-md bg-white max-h-fit w-96 max-w-full">
                {state.succeeded ?
                    <p className="text-gray-900 text-center">Thanks for reaching out. I'll get back to you soon!</p>
                    :
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                        />
                        <ValidationError
                            className="mt-2 text-red-500"
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                        <label
                            htmlFor="email"
                            className={`font-medium text-gray-900 block mb-1 ${state.errors ? "mt-5" : "mt-8"}`}
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                        />
                        <ValidationError
                            className="mt-2 text-red-500"
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label
                            htmlFor="email"
                            className={`font-medium text-gray-900 block mb-1 ${state.errors ? "mt-5" : "mt-8"}`}
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"

                        />
                        <ValidationError
                            className="mt-2 text-red-500"
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <ValidationError className="mt-2 text-red-500" errors={state.errors} />
                        <button
                            disabled={state.submitting} className={`bg-indigo-600 text-white ${state.errors ? "mt-7" : "mt-16"} py-4 px-8 rounded-lg font-bold text-lg`}>
                            Submit
                        </button>
                    </form>
                }
            </div>
        </Section>
    );
};