import React, { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

// type ButtonProps = {
//     title: string
//     onClick: () => void
// }

export const Button = ({ title, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick}>{title}</button>
    );
};

