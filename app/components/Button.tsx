'use client';

import { IconType } from 'react-icons';

interface ButtonProps {
	label: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	outline?: boolean;
	small?: boolean;
	icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	disabled,
	outline,
	small,
	icon: Icon,
}) => {
	return (
		<button
			className={`${
				outline
					? 'border border-gray-300 text-gray-600 hover:bg-gray-50'
					: 'bg-rose-500 text-white hover:bg-rose-600'
			} ${
				small
					? 'px-2 py-1 text-sm font-light border-[1px]'
					: 'px-4 py-2 text-md font-semibold border-2'
			} relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg 
                hover:opacity-80 transition w-full`}
			onClick={onClick}
			disabled={disabled}
		>
			{Icon && <Icon size={24} className="absolute left-4 top-3" />}
			{label}
		</button>
	);
};

export default Button;
