import { useRef } from 'react';
import { Block } from 'components/common/container';
import { KeepPlayingHero } from 'components/homepage-hero';
import { TextBanner } from 'components/text-banner';
import { VideoSection } from 'components/video-section';
import { DriveRevenue } from 'components/drive-revenue';
import { AffiliateSection } from 'components/affiliates';
import { TestimonialsCarousel } from '../components/testimonials';

export default function Home() {
	return (
		<>
			<KeepPlayingHero />
			<TextBanner title="More Memorable Rounds" />
			<VideoSection />
			<DriveRevenue />
			<AffiliateSection />
			<TestimonialsCarousel />
		</>
	);
}
