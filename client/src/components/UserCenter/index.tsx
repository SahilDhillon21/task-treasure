import React, { useState } from 'react';
import Button from '../Common/Button';
import UserProfileDetails from './profile';

type Tab = {
    id: string;
    label: string;
    content: React.ReactNode;
};

const tabs: Tab[] = [
    { id: 'profile', label: 'Profile', content: < UserProfileDetails /> },
    { id: 'settings', label: 'Settings', content: <p>This is the Settings content.</p> },
    { id: 'notifications', label: 'Notifications', content: <p>This is the Notifications content.</p> },
    { id: 'security', label: 'Security', content: <p>This is the Security content.</p> },
    { id: 'help', label: 'Help', content: <p>This is the Help content.</p> }
];

export default function VerticalTabs() {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

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
                {activeTabContent}
            </div>
        </div>
    );
}
