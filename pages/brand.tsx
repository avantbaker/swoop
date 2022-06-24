import { AffiliateSectionExpanded } from 'components/affiliates';
import { KeepPlayingHero } from 'components/homepage-hero';
import { NewsletterSection } from 'components/newsletter';
import { TextBanner } from 'components/text-banner';
import { TestimonialsCarousel } from '../components/testimonials';
import React from 'react';
import { ByrdiInAction } from 'components/byrdi-in-action';
import { AmbassadorCarousel } from 'components/ambassadors-carousel';

export default function Brand() {
	return (
		<>
			<KeepPlayingHero
				title={'The missing link in golf’s food and drink.'}
				hasIcons={false}
				hasCircles={false}
				bgImage="/elements/putting.png"
				titleMaxWidth={['70%']}
				contentJustify={['center', 'flex-end']}
				imgMaxWidth="140%"
				mobileHeaderPadding={false}
				mb={[0, 7]}
			/>
			<TestimonialsCarousel className="expanded" />
			<AffiliateSectionExpanded />
			<ByrdiInAction />
			<TextBanner title="Byrdi Ambassadors" />
			<AmbassadorCarousel />
			<TextBanner title="Loyalty Rewards" />
			<NewsletterSection />
		</>
	);
}
