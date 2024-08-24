import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

type ButtonProps = {
    label: string;
    iconSrc?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    className?: string;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, iconSrc, variant = 'primary', className, onClick }) => {
    const baseStyles = 'flex items-center justify-center px-4 py-2  rounded-lg font-semibold transition ease-in-out duration-150';

    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-800 text-white hover:bg-gray-700',
        outline: 'border-2 border-gray-600 text-gray-600 hover:bg-gray-100',
        danger: 'bg-red-600 text-white hover:bg-red-700'
    };

    return (
        <button
            onClick={onClick}
            className={clsx(baseStyles, variantStyles[variant], className)}
        >
            {iconSrc && <Image src={iconSrc} alt="icon" width={20} height={20} className="mr-2" />}
            {label}
        </button>
    );
};

export default Button;
