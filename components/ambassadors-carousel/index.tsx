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
	instagram: 'persons_tag',
	twitter: 'persons_tag',
	linkedIn: 'persons_tag',
};
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
	max-width: ${rem(220)};
	max-height: ${rem(400)};
	width: 100%;
	img {
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`;
const ControlWrapper = styled(Flex)``;
export const AmbassadorCarousel = () => {
	const { scrollPrev, scrollNext, emblaRef } = useCustomCarousel();
	return (
		<AmassadorsCarouselWrapper>
			<EmblaParent ref={emblaRef}>
				<EmblaChild>
					{dummyCards.map(({ title, tag, location, comment }, idx) => {
						return (
							<Card key={`ambassador-card-${idx}`}>
								<CardImageWrapper className="img-wrapper">
									<img src="/elements/chip-in.png" alt="" />
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
										<Instagram fill={theme.colors.orange} />
										<Twitter fill={theme.colors.orange} />
										<LinkedIn fill={theme.colors.orange} />
									</SocialsContainer>
								</Flex>
							</Card>
						);
					})}
				</EmblaChild>
			</EmblaParent>
			<ControlWrapper flexDirection="column" pl={[4, , 0]} mt={[5, 6]}>
				<ControlContainer mb={[4]}>
					<LeftControl onClick={scrollPrev} />
					<RightControl onClick={scrollNext} />
				</ControlContainer>
				<a href="">
					<Text maxWidth={['60%']} variant="link3">
						Become a Byrdi Affiliate Course
					</Text>
				</a>
			</ControlWrapper>
		</AmassadorsCarouselWrapper>
	);
};
