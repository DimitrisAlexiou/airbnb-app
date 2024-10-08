'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo: React.FC = () => {
	const router = useRouter();

	return (
		<Image
			alt="Airbnb"
			className="hidden md:block cursor-pointer"
			src="/images/airbnb.png"
			width={100}
			height={100}
			onClick={() => router.push('/')}
		/>
	);
};

export default Logo;
