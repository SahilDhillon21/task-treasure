'use client'

import { useState } from 'react'
import { IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SvgIconComponent } from '@mui/icons-material'
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
}

const brands = [
    { name: 'YouTube', icon: <YouTubeIcon fontSize="inherit" style={{ color: '#FF0000' }} />, color: '#FF0000' }, // Red
    { name: 'Facebook', icon: <FacebookIcon fontSize="inherit" style={{ color: '#4267B2' }} />, color: '#4267B2' }, // Facebook Blue
    { name: 'Instagram', icon: <InstagramIcon fontSize="inherit" style={{ color: '#E1306C' }} />, color: '#E1306C' }, // Instagram Pink
    { name: 'Twitter', icon: <TwitterIcon fontSize="inherit" style={{ color: '#1DA1F2' }} />, color: '#1DA1F2' }, // Twitter Blue
];

type CampaignListOptions = {
    label: string,
    icon: SvgIconComponent
}

const CampaignForm = (props: SimpleDialogProps) => {
    const [selectedBrand, setSelectedBrand] = useState(null);

    const handleClick = (brand) => {
        setSelectedBrand(brand);
    };


    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

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
                        {selectedBrand && (
                            <div className="mt-4 text-center">
                                Selected: <strong>{selectedBrand}</strong>
                            </div>
                        )}
                    </div>


                </DialogContent>
            </Dialog>

        </>
    );
};

export default CampaignForm;
