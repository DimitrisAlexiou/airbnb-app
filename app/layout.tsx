import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import RentModal from './components/modals/RentModal';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToastProvider';
import getCurrentUser from './actions/getCurrentUser';
import SearchModal from './components/modals/SearchModal';

export const metadata: Metadata = {
	title: 'Airbnb',
	description: 'Airbnb app',
};

const font = Nunito({
	subsets: ['latin'],
});

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const currentUser = await getCurrentUser();

	return (
		<html lang="en">
			<body className={font.className}>
				<ToasterProvider />
				<SearchModal />
				<RentModal />
				<LoginModal />
				<RegisterModal />
				<Navbar currentUser={currentUser} />
				<div className="pb-20 pt-28">{children}</div>
			</body>
		</html>
	);
}
