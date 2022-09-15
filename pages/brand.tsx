import { AffiliateSectionExpanded } from 'components/affiliates';
import { KeepPlayingHero } from 'components/homepage-hero';
import { NewsletterSection } from 'components/newsletter';
import { TextBanner } from 'components/text-banner';
import { TestimonialsCarousel } from '../components/testimonials';
import React from 'react';
import { ByrdiInAction } from 'components/byrdi-in-action';
import { AmbassadorCarousel } from 'components/ambassadors-carousel';
import { Section } from 'components/common/container';
import styled from 'styled-components';
import Text from 'components/common/text';
import { Box } from 'rebass/styled-components';
import { rem } from 'polished';

const LoyaltySectionContainer = styled('div')`
	position: relative;
`;
const LoyaltySection = styled(Section)``;
const LoyaltyContent = styled(Box)``;
const LoyaltyImages = styled(Box)``;
const LoyaltyImageWrapper = styled(Box)`
	position: relative;
	display: flex;
	justify-content: flex-end;
	padding-right: ${({ theme }) => rem(theme.space[4])};
	img {
		max-height: ${rem(400)};
		object-fit: cover;
		object-position: center;
	}

	.front {
		position: absolute;
		max-width: ${rem(340)};
		right: 30px;
	}
	.middle {
		justify-self: flex-end;
	}

	.back {
		position: absolute;
		max-width: ${rem(340)};
		top: 40px;
		right: -80px;
		z-index: -1;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		img {
			max-height: ${rem(580)};
		}

		.front {
			max-width: ${rem(580)};
		}

		.back {
			max-width: ${rem(580)};
			right: -300px;
			top: 80px;
		}
	}
`;

const BigCircle = styled('div')`
	position: absolute;
	left: -${rem(205)};
	bottom: -${rem(160)};
	height: ${rem(410)};
	width: ${rem(410)};
	border: 0.5px solid ${({ theme }) => theme.colors.calcite};
	border-radius: 50%;
	display: none;
	z-index: -1;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		display: block;
	}
`;

const SmallCircle = styled('div')`
	position: absolute;
	left: ${rem(105)};
	bottom: ${rem(85)};
	height: ${rem(210)};
	width: ${rem(210)};
	border: 0.5px solid ${({ theme }) => theme.colors.calcite};
	border-radius: 50%;
	z-index: -1;
	display: none;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		display: block;
	}
`;

export const ByrdiLoyaltySection = () => {
	return (
		<LoyaltySectionContainer>
			<LoyaltySection flexDirection={['column', 'row']} mb={[6]}>
				<LoyaltyContent flex={1} mb={[6]}>
					<Text variant="h1" mb={[6]}>
						Order a burger, earn a beer.
					</Text>
					<Text variant="h2" mb={[4]} maxWidth={['60%']}>
						Sometimes it pays to play.
					</Text>
					<Text variant="h4">
						Dial into the loyalty program in the Swoop app. The more you order at your
						favorite course, the more points you’ll earn towards your next reward. This is
						the only time you’ll want to score higher than your friends.
					</Text>
				</LoyaltyContent>
				<LoyaltyImages flex={1}>
					<LoyaltyImageWrapper>
						<img className="back" src="/swoop/golfers/golfers-checker-bg.png" alt="" />
						<img className="middle" src="/elements/botella.png" alt="Bottle Image" />
						<img
							className="front"
							src="/elements/twisted-phone.png"
							alt="Loyalty Screen"
						/>
					</LoyaltyImageWrapper>
				</LoyaltyImages>
			</LoyaltySection>
			<BigCircle />
			<SmallCircle />
		</LoyaltySectionContainer>
	);
};

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
				minHeight={['80vh']}
				mb={[0, 7]}
			/>
			<TestimonialsCarousel className="expanded" />
			<AffiliateSectionExpanded />
			<ByrdiInAction
				title="The distinguished game, dinner, and drinks"
				body="Swoop is a staple of the golfing experience, bridging the gap between some of the best things in life."
			/>
			<TextBanner title="THE SWOOP KIT" />
			<AmbassadorCarousel />
			<TextBanner title="Loyalty Rewards" />
			<ByrdiLoyaltySection />
			<NewsletterSection
				title="Tee Off."
				body="Join the Swoop scoop. Get the latest news, find events, and receive deals."
				imgSrc="/elements/old-fashioned.png"
				hasCTA={true}
			/>
		</>
	);
}
