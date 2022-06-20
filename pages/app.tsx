import { AffiliateSection } from 'components/affiliates';
import { DriveRevenue } from 'components/drive-revenue';
import { KeepPlayingHero } from 'components/homepage-hero';
import { TextBanner } from 'components/text-banner';
import { VideoSection } from 'components/video-section';
import { TestimonialsCarousel } from '../components/testimonials';
import { InstagramSection } from 'components/instagram';
import { NewsletterSection } from 'components/newsletter';
import { Section } from 'components/common/container';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';
import Text from 'components/common/text';
import Pin from 'components/common/icons/pin';
import { rem } from 'polished';

const TextIntro = styled(Flex)``;

const DualPathSection = styled('div')`
	background: url(/elements/dotted-bg.svg);
	border-top: 2px solid ${({ theme }) => theme.colors.orange};
	border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
	padding: 0 !important;
`;

const DualSection = styled(Flex)`
	background: ${({ theme }) => theme.colors.black};
	border-left: 2px solid ${({ theme }) => theme.colors.orange};
	border-right: 2px solid ${({ theme }) => theme.colors.orange};
	align-items: flex-end;
	flex: 1;
	img {
		height: 100%;
	}
	&:first-of-type {
		border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
	}
	&:hover {
		background: rgba(231, 226, 218, 0.4);
	}
`;

const VerticalTextL = styled(Text)`
	writing-mode: vertical-lr;
	-webkit-transform: rotate(-180deg);
	-moz-transform: rotate(-180deg);
`;

export default function App() {
	return (
		<>
			<Section justifyContent="center" mb={5}>
				<TextIntro flexDirection="column" alignItems="center" mt={[6]}>
					<Pin />
					<Text variant="h2" textAlign="center" maxWidth={rem(573)} mt={[4]}>
						Byrdi is giving courses and golfers control over concessions from the tee to
						the turn, and on.
					</Text>
				</TextIntro>
			</Section>
			<DualPathSection>
				<Section
					p={'0 !important'}
					justifyContent="center"
					flexDirection={['column', 'row']}
				>
					<DualSection justifyContent={['center']} py={[5, 6]}>
						<VerticalTextL pl={4} variant="displayVertical">
							Golfers
						</VerticalTextL>
						<img src="/elements/app-golfers-desktop.png" alt="" />
					</DualSection>
					<DualSection justifyContent={['center']} py={[5, 6]}>
						<img src="/elements/app-courses-desktop.png" alt="" />
						<VerticalTextL variant="displayVertical">Courses</VerticalTextL>
					</DualSection>
				</Section>
			</DualPathSection>
		</>
	);
}
