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
import { Hero } from 'components/homepage-hero-simple';

const LoyaltySectionContainer = styled('div')`
	position: relative;
`;
const LoyaltySection = styled(Section)``;
const LoyaltyContent = styled(Box)``;
const LoyaltyImages = styled(Box)``;

const LoyaltyImageWrapper = styled(Box)`
	position: relative;
	display: flex;
	justify-content: center;
	padding-right: ${({ theme }) => rem(theme.space[4])};

	.reference-point {
		position: relative;
		display: flex;
		justify-content: center;
	}

	img {
		max-height: ${rem(400)};
		object-fit: cover;
		object-position: center;
	}

	.front {
		position: absolute;
		max-width: ${rem(340)};
		right: 0;
		bottom: -20px;
	}

	.middle {
		position: relative;
	}

	.back {
		position: absolute;
		max-width: ${rem(340)};
		top: 20px;
		right: -180px;
		z-index: -1;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		justify-content: flex-end;
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

const DefaultLoyaltyImages = () => {
	return (
		<LoyaltyImageWrapper>
			<div className="reference-point">
				<img className="back" src="/swoop/golfers/golfers-checker-bg.png" alt="" />
				<img className="middle" src="/elements/botella.png" alt="Bottle Image" />
				<img className="front" src="/elements/twisted-phone.png" alt="Loyalty Screen" />
			</div>
		</LoyaltyImageWrapper>
	);
};
export const ByrdiLoyaltySection = ({
	title = `Order a burger, earn a beer.`,
	subtitle = `Sometimes it pays to play.`,
	body = `Dial into the loyalty program in the Swoop app. The more you order at your
						favorite course, the more points you’ll earn towards your next reward. This is
						the only time you’ll want to score higher than your friends.`,
	children = undefined,
}) => {
	return (
		<LoyaltySectionContainer>
			<LoyaltySection flexDirection={['column', 'column', 'row']} mb={[6]}>
				<LoyaltyContent flex={1} mb={[6]}>
					<Text variant="h1" mb={[6]}>
						{title}
					</Text>
					<Text variant="h2" mb={[5]} maxWidth={['60%']}>
						{subtitle}
					</Text>
					<Text variant="h4">{body}</Text>
				</LoyaltyContent>
				<LoyaltyImages flex={1}>
					{children ? children : <DefaultLoyaltyImages />}
				</LoyaltyImages>
			</LoyaltySection>
			<BigCircle />
			<SmallCircle />
		</LoyaltySectionContainer>
	);
};

const brandsDummyTestimonials = [
	{
		title: 'Trilogy at Vistancia',
		location: 'Vistancia, AZ',
		body: `Spending more than 20+ years in the Country Club business and as a golfer that
	has played throughout the nation, I am keenly aware of the pain points of the
	golfer's voice. These can be at a high end country club, resort course,
	or a daily fee course, but the major issue is accessibility to a beverage.`,
		name: 'Marcus Paulson',
		occupation: 'Course Member',
		imgSrc: '/swoop/brand/brand-testimonial-1.png',
	},
];

const brandsDummyCards = [
	{
		imgSrc: '/swoop/brand/brand-catch.png',
	},
	{
		imgSrc: '/swoop/brand/brand-pose.png',
	},
	{
		imgSrc: '/swoop/brand/brand-cocktail.png',
	},
];

export default function Brand() {
	return (
		<>
			<Hero
				title="The missing link in golf’s food and drink."
				subtitle={null}
				body={null}
				hasCta={false}
				hasCircles={false}
				src="/elements/putting.png"
			/>
			<TestimonialsCarousel cards={brandsDummyTestimonials} className="expanded" />
			<AffiliateSectionExpanded />
			<ByrdiInAction
				cards={brandsDummyCards}
				title="The distinguished game, dinner, and drinks"
				body="Swoop is a staple of the golfing experience, bridging the gap between some of the best things in life."
			/>
			<TextBanner title="SWOOP AMBASSADORS" />
			<AmbassadorCarousel />
			{/* <TextBanner title="Loyalty Rewards" />
			<ByrdiLoyaltySection /> */}
			<NewsletterSection
				title="Tee Off."
				body="Join the Swoop scoop. Get the latest news, find events, and receive deals."
				imgSrc="/elements/old-fashioned.png"
				hasCTA={true}
			/>
		</>
	);
}
