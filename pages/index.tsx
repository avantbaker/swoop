import { AffiliateSection } from 'components/affiliates';
import { DriveRevenue } from 'components/drive-revenue';
import { KeepPlayingHero } from 'components/homepage-hero';
import { TextBanner } from 'components/text-banner';
import { VideoSection } from 'components/video-section';
import { TestimonialsCarousel } from '../components/testimonials';
import { InstagramSection } from 'components/instagram';
import { NewsletterSection } from 'components/newsletter';
import styled from 'styled-components';
import { rem } from 'polished';

const LeftCircle = styled('div')`
	position: absolute;
	left: -30%;
	top: -5%;
	height: ${rem(210)};
	width: ${rem(210)};
	border: 0.5px solid ${({ theme }) => theme.colors.calcite};
	border-radius: 50%;
`;

const RightCircle = styled('div')`
	position: absolute;
	right: -42%;
	top: -40%;
	height: ${rem(610)};
	width: ${rem(610)};
	border: 0.5px solid ${({ theme }) => theme.colors.calcite};
	border-radius: 50%;
	z-index: -1;
`;

export default function Home() {
	return (
		<>
			<KeepPlayingHero
				subtext={`Leave your lunchbox at home. Order fresh provisions and cocktails from the clubhouse, delivered to your exact location on the course.`}
				title={'Keep Playing'}
				subtitle={'Have your next course, on the course.'}
				hasIcons={true}
				minHeight={['auto']}
			/>
			<TextBanner title="More Memorable Rounds" />
			<VideoSection />
			<DriveRevenue />
			<AffiliateSection />
			<TestimonialsCarousel />
			<InstagramSection>
				<LeftCircle />
				<RightCircle />
			</InstagramSection>
			<NewsletterSection />
		</>
	);
}
