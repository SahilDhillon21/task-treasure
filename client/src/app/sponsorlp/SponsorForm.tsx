'use client';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type SponsorForm = {
    brandName: string,
    brandDescription: string
}

export default function SponsorAccordion({ name }: { name: string }) {
    const { register, handleSubmit, formState: { errors } } = useForm<SponsorForm>();

    const onSponsorFormSubmit: SubmitHandler<SponsorForm> = async (data) => {
        // Handle form submission, e.g., sending data to an API
        console.log('Form submitted:', data);
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
                        defaultValue={name}
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
                >
                    Create
                </button>
                <h3 className="text-center text-orange-500">Get 200 credits for free on account creation!</h3>
            </form>

        </div>
    );
}