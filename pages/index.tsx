import { AffiliateSection } from 'components/affiliates';
import { DriveRevenue } from 'components/drive-revenue';
import { KeepPlayingHero } from 'components/homepage-hero';
import { TextBanner } from 'components/text-banner';
import { VideoSection } from 'components/video-section';
import { TestimonialsCarousel } from '../components/testimonials';
import { InstagramSection } from 'components/instagram';
import { NewsletterSection } from 'components/newsletter';

export default function Home() {
	return (
		<>
			<KeepPlayingHero
				subtext={`Leave your lunchbox at home. Order fresh provisions and cocktails from the clubhouse, delivered to your exact location on the course.`}
				title={'Keep Playing'}
				subtitle={'Have your next course, on the course.'}
				hasIcons={true}
			/>
			<TextBanner title="More Memorable Rounds" />
			<VideoSection />
			<DriveRevenue />
			<AffiliateSection />
			<TestimonialsCarousel />
			<InstagramSection />
			<NewsletterSection />
		</>
	);
}
