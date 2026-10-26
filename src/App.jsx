import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import ScrollToTop from '@/components/ScrollToTop';
import HyamPage from '@/pages/hyam/HyamPage';

function App() {
	return (
		<TooltipProvider>
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<HyamPage />} />
					<Route path="*" element={<HyamPage />} />
				</Routes>
			</Router>
			<Toaster />
		</TooltipProvider>
	);
}

export default App;
