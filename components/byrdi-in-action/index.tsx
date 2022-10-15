import { ControlContainer, LeftControl, RightControl } from '../testimonials';
import styled from 'styled-components';
import { Section } from 'components/common/container';
import Text from 'components/common/text';
import { rem } from 'polished';
import React, { useCallback, useEffect, useState } from 'react';
import { Box } from 'rebass/styled-components';
import useEmblaCarousel from 'embla-carousel-react';

const ByrdiInActionWrapper = styled(Box)`
	border-top: ${rem(0.5)} solid ${({ theme }) => theme.colors.orange};
`;
export const PhotoCarousel = styled('div')`
	display: flex;
	flex-wrap: nowrap;
	-webkit-overflow-scrolling: touch;
`;
const ImageWrapper = styled('div')`
	flex: 0 0 88%;
	margin-right: ${rem(20)};
	display: flex;
	width: 88%;
	max-height: ${rem(581)};
	&:last-of-type {
		margin-right: 0;
	}
	img {
		object-fit: cover;
		object-position: center;
		width: 100%;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		flex: 0 0 44%;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		flex: 0 0 33%;
	}
`;
const ContentWrapper = styled('div')``;

export const useCustomCarousel = () => {
	const [currentIndex, setSelectedIndex] = useState(0);

	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		skipSnaps: false,
	});
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setPrevBtnEnabled(emblaApi.canScrollPrev());
		setNextBtnEnabled(emblaApi.canScrollNext());
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		emblaApi.on('select', onSelect);
		onSelect();
	}, [emblaApi, onSelect]);

	return {
		currentIndex,
		setSelectedIndex,
		prevBtnEnabled,
		setPrevBtnEnabled,
		nextBtnEnabled,
		setNextBtnEnabled,
		scrollPrev,
		scrollNext,
		onSelect,
		emblaRef,
		emblaApi,
	};
};

const dummyCards = [
	{
		imgSrc: '/swoop/golfers/golfers-golf-bag.png',
	},
	{
		imgSrc: '/swoop/golfers/golfers-sandwich.png',
	},
	{
		imgSrc: '/swoop/golfers/golfers-pin.png',
	},
];

export const ByrdiInAction = ({
	cards = dummyCards,
	title = 'For the love of the sport, and sandwiches.',
	body = 'Swoop is bringing modern culinary convenience and speed to a timeless sport.',
}) => {
	const { scrollPrev, scrollNext, emblaRef } = useCustomCarousel();
	return (
		<ByrdiInActionWrapper mb={6}>
			<Section
				flexDirection={['column', 'row']}
				justifyContent={[, 'space-between']}
				alignItems={[, 'flex-end']}
			>
				<ContentWrapper>
					<Text variant="h2" mb={4}>
						{title}
					</Text>
					<Text maxWidth={rem(580)}>{body}</Text>
				</ContentWrapper>
				<ControlContainer mt={[5]}>
					<LeftControl onClick={scrollPrev} />
					<RightControl onClick={scrollNext} />
				</ControlContainer>
			</Section>
			<PhotoCarousel ref={emblaRef}>
				<PhotoCarousel>
					{cards.map(({ imgSrc }, idx) => {
						return (
							<ImageWrapper key={`img-carousel-${idx}`}>
								<img src={imgSrc} alt="" />
							</ImageWrapper>
						);
					})}
				</PhotoCarousel>
			</PhotoCarousel>
		</ByrdiInActionWrapper>
	);
};
