"use client"

import { User } from "@prisma/client";

    

export default function Sponsor({ user }: { user: User }) {
    return (

        <>

            <h1>
                {!user.hasBrand &&

                    <div className=" bg-gray-900 flex items-center justify-center">
                        <div className="bg-gray-800 p-8  shadow-lg w-full max-w-md">
                            <h2 className="text-2xl font-semibold text-white mb-6">Create a sponsor account</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="brandName" className="block text-sm font-medium text-gray-300">
                                        Brand Name
                                    </label>
                                    <input
                                        id="brandName"
                                        type="text"
                                        placeholder="Enter your brand name"
                                        defaultValue={user.name}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="brandDescription" className="block text-sm font-medium text-gray-300">
                                        Brand Description
                                    </label>
                                    <textarea
                                        id="brandDescription"
                                        placeholder="We specialize in creating..."
                                        rows={4}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Create
                                </button>
                                <h3 className="text-center text-orange-500">Obtain 200 credits for free on signup!</h3>
                            </form>
                        </div>
                    </div>
                }
            </h1>

        </>
    )
}
