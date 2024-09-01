"use client"

import React, { useState } from 'react';
import Button from '../Common/Button';
import UserProfileDetails from './profile';
import Sponsor from './sponsor';

type Tab = {
    id: string;
    label: string;
};

const tabs: Tab[] = [
    { id: 'profile', label: 'Profile' },
    { id: 'sponsor', label: 'Sponsor' },
    { id: 'settings', label: 'Settings' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'security', label: 'Security' },
    { id: 'help', label: 'Help' }
];


export default function UserPage({ user }) {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };



    const getActiveTabContent = () => {
        switch (activeTab) {
            case 'profile':
                return <UserProfileDetails user={user} />;
            case 'sponsor':
                return <Sponsor user={user} />;
            case 'settings':
                return <p>This is the Settings content.</p>;
            case 'notifications':
                return <p>This is the Notifications content.</p>;
            case 'security':
                return <p>This is the Security content.</p>;
            case 'help':
                return <p>This is the Help content.</p>;
            default:
                return null;
        }
    };


    return (
        <div className="md:flex">
            <ul className="flex-col space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                {tabs.map(tab => (
                    <li key={tab.id}>
                        <Button
                            label={tab.label}
                            variant={activeTab === tab.id ? 'primary' : 'secondary'}
                            className={`w-full ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => handleTabClick(tab.id)}
                        />
                    </li>
                ))}
            </ul>
            <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {tabs.find(tab => tab.id === activeTab)?.label}
                </h1>
                {getActiveTabContent()}
            </div>
        </div>
    );
}
