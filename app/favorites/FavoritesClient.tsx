'use client';

import Container from '@/app/components/Container';
import useLoginModal from '@/app/hooks/useLoginModal';
import { SafeListing, SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';
import Heading from '../components/Heading';
import ListingCard from '../components/listings/ListingCard';

interface FavoritesClientProps {
	listings: SafeListing[];
	currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
	listings,
	currentUser,
}) => {
	const loginModal = useLoginModal();
	const router = useRouter();

	return (
		<Container>
			<Heading
				title="Favorites"
				subtitle="List of places you have favorited!"
			/>
			<div
				className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    xl:grid-cols-5 2xl:grid-cols-6 gap-8"
			>
				{listings.map((listing) => (
					<ListingCard
						currentUser={currentUser}
						key={listing.id}
						data={listing}
					/>
				))}
			</div>
		</Container>
	);
};

export default FavoritesClient;
