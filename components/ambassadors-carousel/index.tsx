import {
	ControlContainer,
	LeftControl,
	RightControl,
	useCustomCarousel,
} from '../testimonials';
import styled from 'styled-components';
import { Block } from 'components/common/container';
import Text from 'components/common/text';
import { rem } from 'polished';
import React from 'react';
import { Flex } from 'rebass/styled-components';
import Twitter from 'components/common/icons/twitter';
import Instagram from 'components/common/icons/instagram';
import LinkedIn from 'components/common/icons/linkedin';
import theme from 'styles/theme';
import { PhotoCarousel } from 'components/byrdi-in-action';
import Link from 'next/link';

const AmassadorsCarouselWrapper = styled(Block)`
	padding-left: 0;
	padding-right: 0;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		padding-left: ${rem(40)};
	}
`;
const Card = styled(Flex)`
	flex: 0 0 100%;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		flex: 0 0 75%;
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		flex: 0 0 65%;
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
		flex: 0 0 50%;
	}
`;

const cardTestData = {
	title: 'Olajuwon Ajanaku',
	location: 'Eastlake Golf',
	tag: '@persons_tag',
	comment: `	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid
	voluptates voluptatem veritatis excepturi provident natus sunt laborum
	optio fugit temporibus, dolorum quasi aut!`,
	instagram: 'https://www.instagram.com/oooolajuwon/?hl=en',
	twitter: 'https://twitter.com/olajuwon',
	linkedIn: 'https://www.linkedin.com/in/olajuwon-ajanaku-5011811a/',
};

const cardData = [
	{
		title: 'Jen Clyde',
		location: 'ForeAll',
		tag: '@jenstyles',
		comment: `Co-Founder + CEO-Fore All Women's Golf Club Founder + CEO-TheGivBox`,
		instagram: 'https://www.instagram.com/jenstyles/?hl=en',
		twitter: 'https://twitter.com/golf_fore_all',
		linkedIn: 'https://www.linkedin.com/in/jen-clyde/',
		imgSrc: '/swoop/ambassadors/jen.jpeg',
	},
	{
		title: 'Hannah B. Leiner',
		location: 'Golf Influencer',
		tag: '@hannahbleiner',
		comment: `Golf enthusiast and PxG Ambassador`,
		instagram: 'https://www.instagram.com/hannahbleiner/?hl=en',
		twitter:
			'https://twitter.com/hannahbleiner?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
		linkedIn: '',
		imgSrc: '/swoop/ambassadors/hannah.jpeg',
	},
	// {
	// 	title: 'Jon "HAPPY" Gilmore',
	// 	location: 'Avid Golfer',
	// 	tag: '@the_original_happy_gilmore',
	// 	comment: `Pro Long Drive Athlete`,
	// 	instagram: 'https://www.instagram.com/the_original_happy_gilmore/?hl=en',
	// 	twitter: 'https://twitter.com/mericanbadasses',
	// 	linkedIn: '',
	// 	imgSrc: '/swoop/ambassadors/happy.jpeg',
	// },
	{
		title: 'Suzi Stanley',
		location: 'Avid Golfer',
		tag: '@suzigolf',
		comment: `Professional Long Drive Athlete`,
		instagram: 'https://www.instagram.com/suzigolf/?hl=en',
		twitter: 'https://twitter.com/SuziGolf',
		linkedIn: '',
		imgSrc: '/swoop/ambassadors/suzi.jpeg',
	},
	{
		title: 'Olajuwon Ajanaku',
		location: 'Eastside Golf',
		tag: '@oooolajuwon',
		comment: `Professional golfer and founder of Eastside Golf,  a lifestyle golf brand developed to raise awareness about golf among youth and non golfers`,
		instagram: 'https://www.instagram.com/oooolajuwon/?hl=en',
		twitter: 'https://twitter.com/olajuwon',
		linkedIn: 'https://www.linkedin.com/in/olajuwon-ajanaku-5011811a/',
		imgSrc: '/swoop/ambassadors/olajuwon.jpeg',
	},
];

const dummyCards = Array(6).fill(cardTestData);
const EmblaParent = styled('div')``;
const EmblaChild = styled(PhotoCarousel)``;
const SocialsContainer = styled(Flex)`
	align-items: flex-end;
	& > :not(last-child) {
		margin-right: ${rem(14)};
	}
`;
const CardImageWrapper = styled('div')`
	max-width: ${rem(190)};
	max-height: ${rem(400)};
	width: 100%;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`;
const ControlWrapper = styled(Flex)``;
export const AmbassadorCarousel = ({ cards = cardData, ...rest }) => {
	const { scrollPrev, scrollNext, emblaRef } = useCustomCarousel();
	return (
		<AmassadorsCarouselWrapper>
			<EmblaParent ref={emblaRef}>
				<EmblaChild>
					{cards.map(
						(
							{ title, tag, location, comment, imgSrc, instagram, twitter, linkedIn },
							idx
						) => {
							return (
								<Card key={`ambassador-card-${idx}`}>
									<CardImageWrapper className="img-wrapper">
										<img src={imgSrc} alt="" />
									</CardImageWrapper>
									<Flex className="card__content" px={[4, 5, 6]} flexDirection="column">
										<Text mb={[5]} variant="h2" className="card__title">
											{title}
										</Text>
										<Text mb={[1]} variant="cardLocation" className="card__location">
											{location}
										</Text>
										<Text mb={[5]} color="orange" className="card__tag">
											{tag}
										</Text>
										<Text mb={[4]} variant="cardBody" className="card__body">
											{comment}
										</Text>
										<SocialsContainer>
											{instagram && (
												<a href={instagram}>
													<Instagram fill={theme.colors.orange} />
												</a>
											)}
											{twitter && (
												<a href={twitter}>
													<Twitter fill={theme.colors.orange} />
												</a>
											)}
											{linkedIn && (
												<a href={linkedIn}>
													<LinkedIn fill={theme.colors.orange} />
												</a>
											)}
										</SocialsContainer>
									</Flex>
								</Card>
							);
						}
					)}
				</EmblaChild>
			</EmblaParent>
			<ControlWrapper flexDirection="column" pl={[4, , 0]} mt={[5, 6]}>
				<ControlContainer mb={[4]}>
					<LeftControl onClick={scrollPrev} />
					<RightControl onClick={scrollNext} />
				</ControlContainer>
				<Link
					href={{
						pathname: '/contact',
						query: {
							inquiry: 'ambassadors',
						},
					}}
					passHref
				>
					<a>
						<Text maxWidth={['60%']} variant="link3">
							Become a Swoop Ambassador
						</Text>
					</a>
				</Link>
			</ControlWrapper>
		</AmassadorsCarouselWrapper>
	);
};
