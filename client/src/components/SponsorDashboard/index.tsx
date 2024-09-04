'use client'

import { Add, Info } from "@mui/icons-material";
import { Sponsor } from "@prisma/client";
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CampaignForm from "./CampaignForm";


export default function SponsorDBComponent({ sponsor }: { sponsor: Sponsor }) {
    const [campaignModalOpen, setCampaignModalOpen] = useState(false);

    const handleNewCampaignModalOpen = () => {
        setCampaignModalOpen(true);
    };

    const handleNewCampaignModalClosed = () => {
        setCampaignModalOpen(false);
    };

    const handleClose = () => {}


    return (
        <>
            <div className="flex h-full">
                <div className="w-1/6 bg-gray-800 p-4 flex flex-col space-y-3">

                    <button
                        onClick={handleNewCampaignModalOpen}
                        className="flex items-center justify-start px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md shadow-md hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-transform transform hover:scale-103 active:scale-95">
                        <Add className="mr-2" />
                        New Campaign
                    </button>

                    <CampaignForm
                        open={campaignModalOpen}
                        onClose={handleNewCampaignModalClosed}
                    />


                    <button className="flex items-center justify-start px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-transform transform hover:scale-103 active:scale-95">
                        <Info className="mr-2" />
                        Info
                    </button>
                </div>

                <div className="flex-1 bg-black px-4">
                    <h1 className="text-2xl font-bold mb-4">My campaigns</h1>
                    <p>Welcome to your dashboard. Here you can manage your campaigns and view other information.</p>
                </div>
            </div>

        </>
    )
}