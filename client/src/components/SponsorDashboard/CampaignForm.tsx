'use client'

import { useState } from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ArrowRightAltRounded, X } from '@mui/icons-material';
import { SvgIconComponent } from '@mui/icons-material'
import { Dialog, DialogContent, DialogTitle, IconButton, Switch } from '@mui/material';
import { Modal, Tabs, Tab, TextField, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';

interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
}

const brands = [
    { name: 'YouTube', icon: <YouTubeIcon fontSize="inherit" style={{ color: '#FF0000' }} />, color: '#FF0000' }, // Red
    { name: 'Facebook', icon: <FacebookIcon fontSize="inherit" style={{ color: '#4267B2' }} />, color: '#4267B2' }, // Facebook Blue
    { name: 'Instagram', icon: <InstagramIcon fontSize="inherit" style={{ color: '#E1306C' }} />, color: '#E1306C' }, // Instagram Pink
    { name: 'X', icon: <X fontSize="inherit" style={{ color: 'white' }} />, color: '#1DA1F2' }, // Twitter Blue
];


const CampaignForm = (props: SimpleDialogProps) => {
    const [selectedBrand, setSelectedBrand] = useState(null);

    const handleClick = (brand) => {
        setSelectedBrand(brand);
    };

    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    const [likeChecked, setLikeChecked] = useState(true)

    const handleLikeChange = (event) => {
        setLikeChecked(event.target.checked);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onCampaignFormSubmit = () => {

    }


    return (
        <>


            <Dialog
                onClose={handleClose}
                open={open}
                fullWidth
                maxWidth='lg'

                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: '#131b29',
                        color: 'white',
                    },
                }}
            >
                <DialogTitle>

                    <h1 className='font-bold text-3xl text-center'>New campaign</h1>

                </DialogTitle>
                <hr className='border-b-white-700' />

                <DialogContent>

                    <h1 className='font-bold text-xl'>Select a type</h1>

                    <div className="p-4">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {brands.map((brand, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center justify-center p-4 cursor-pointer transition-transform duration-100 ${selectedBrand === brand.name &&
                                        'border-white border-2 scale-105 shadow-white shadow-md bg-black'
                                        }`}
                                    onClick={() => handleClick(brand.name)}
                                >
                                    <IconButton
                                        className="text-inherit" // Ensures icon uses its default color
                                        size="large"
                                        aria-label={brand.name}
                                    >
                                        <span className="text-6xl">{brand.icon}</span> {/* Extra large font size */}
                                    </IconButton>
                                    <h1 className="text-center font-semibold mt-2 text-lg">
                                        {brand.name}
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="modal-content p-4">
                        {selectedBrand == null &&
                            <h1>Select a type</h1>
                        }

                        {selectedBrand == 'YouTube' &&
                            <>
                                <form className="space-y-4 mt-10" onSubmit={handleSubmit(onCampaignFormSubmit)}>

                                    <div className='grid grid-cols-10 gap-2'>

                                        <div className='col-span-7 justify-center align'>
                                            <label className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Video link</label>
                                        </div>

                                        <div className='col-span-3 justify-center'>
                                            <label className="mb-2 text-lg font-bold text-gray-900 dark:text-white">View quantity</label>

                                        </div>

                                        <div className='col-span-7 justify-center align'>
                                            <div className="flex w-full">
                                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                                </span>
                                                <input disabled={!likeChecked} type="text" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. https://youtu.be/iu2d_NpR0Ic?list=UU5nc_d21..." />
                                            </div>
                                        </div>

                                        <div className='col-span-3 justify-center'>
                                            <div className="flex w-full">
                                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                </span>
                                                <input disabled={!likeChecked} type="number" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. https://youtu.be/iu2d_NpR0Ic?list=UU5nc_d21..." />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="grid grid-cols-2 gap-3">

                                        <div className="flex">
                                            <label className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Video link</label>
                                        </div>



                                        <div className="flex items-center ml-2 space-x-2">
                                            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">View quantity</label>
                                        </div>

                                        <div className="flex space-x-2">
                                            <div className="flex w-full">
                                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                                </span>
                                                <input disabled={!likeChecked} type="text" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. https://youtu.be/iu2d_NpR0Ic?list=UU5nc_d21..." />
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <div className="flex">
                                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                                </span>
                                                <input type="text" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. https://youtu.be/iu2d_NpR0Ic?list=UU5nc_d21..." />
                                            </div>
                                        </div>



                                    </div>

                                </form>

                            </>
                        }

                        {selectedBrand == 'Facebook' &&
                            <h1>Add post/video link</h1>
                        }

                        {selectedBrand == 'Instagram' &&
                            <h1>Add post/reel link</h1>
                        }

                        {selectedBrand == 'X' &&
                            <h1>Add tweet link</h1>
                        }


                    </div>

                </DialogContent>
            </Dialog >

        </>
    );
};

export default CampaignForm;
