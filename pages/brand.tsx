import { AffiliateSection } from 'components/affiliates';
import { DriveRevenue } from 'components/drive-revenue';
import { KeepPlayingHero } from 'components/homepage-hero';
import { TextBanner } from 'components/text-banner';
import { VideoSection } from 'components/video-section';
import { TestimonialsCarousel } from '../components/testimonials';
import { InstagramSection } from 'components/instagram';
import { NewsletterSection } from 'components/newsletter';

export default function Brand() {
	return (
		<>
			<KeepPlayingHero
				title={'The missing link in golf’s food and drink.'}
				hasIcons={false}
				hasCircles={false}
				bgImage="/elements/putting.png"
				titleMaxWidth={['70%', '50%']}
				contentJustify={['center', 'flex-end']}
			/>
			<TestimonialsCarousel />
			<AffiliateSection />
			<TextBanner title="Byrdi Ambassadors" />
			<TextBanner title="Loyalty Rewards" />
			<NewsletterSection />
		</>
	);
}
