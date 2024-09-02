'use client';

import { User } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Bars } from 'react-loader-spinner';

type SponsorForm = {
    brandName: string,
    brandDescription: string
}

export default function SponsorAccordion({ user }: { user: User }) {
    const [loading, setLoading] = useState(false)

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<SponsorForm>();

    const onSponsorFormSubmit: SubmitHandler<SponsorForm> = async (data) => {
        setLoading(true)

        const reqData = {
            ...user,
            brandName: data.brandName,
            brandDescription: data.brandDescription
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            const res = await axios.post('/api/createSponsorAccount', reqData)
            alert(res)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            router.push('/sponsor_dashboard')
        }


    };

    return (
        <div className="w-full max-w-md mx-auto">
            <form className="space-y-4 mt-10" onSubmit={handleSubmit(onSponsorFormSubmit)}>
                <div>
                    <label htmlFor="brandName" className="block text-sm font-bold text-white">
                        Brand Name
                    </label>
                    <input
                        id="brandName"
                        type="text"
                        {...register('brandName', {
                            required: 'Brand name is required',
                            minLength: {
                                value: 2,
                                message: 'Brand name must be at least 2 characters long'
                            }
                        })}
                        defaultValue={user.name}
                        placeholder="Enter your brand name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.brandName && <p className="text-red-500 text-sm mt-1">{errors.brandName.message?.toString()}</p>}
                </div>

                <div>
                    <label htmlFor="brandDescription" className="block text-sm font-bold text-white">
                        Brand Description
                    </label>
                    <textarea
                        id="brandDescription"
                        {...register('brandDescription')}
                        placeholder="We specialize in creating..."
                        rows={4}
                        className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={loading}
                >
                    {loading ? <Bars wrapperClass='flex justify-center items-center' color='white' height={20} /> : 'Create'}

                </button>
                <h3 className="text-center text-orange-500">Get 200 credits for free on account creation!</h3>
            </form>

        </div>
    );
}