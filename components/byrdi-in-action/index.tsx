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
	overflow-x: hidden;
`;
export const PhotoCarousel = styled('div')`
	display: flex;
	flex-wrap: nowrap;
	-webkit-overflow-scrolling: touch;
`;

const ContentWrapper = styled('div')``;

export const useCustomCarousel = () => {
	const [currentIndex, setSelectedIndex] = useState(0);

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: 'start',
		skipSnaps: true,
	});

	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const scrollPrev = useCallback(() => {
		emblaApi && emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		emblaApi && emblaApi.scrollNext();
	}, [emblaApi]);

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
	{
		imgSrc: '/swoop/brand/brand-bag.jpeg',
	},
	{
		imgSrc: '/swoop/brand/brand-sand-trap.jpeg',
	},
	{
		imgSrc: '/swoop/brand/brand-aperol.jpeg',
	},
];

const Embla = styled('div')`
	position: relative;
	padding: 20px 0;
	margin-left: auto;
	margin-right: auto;
`;

const EmblaViewport = styled('div')`
	overflow: hidden;
	width: 100%;

	.is-draggable {
		cursor: move;
		cursor: grab;
	}

	.is-dragging {
		cursor: grabbing;
	}
`;

const EmblaContainer = styled('div')`
	display: flex;
	user-select: none;
	-webkit-touch-callout: none;
	-khtml-user-select: none;
	-webkit-tap-highlight-color: transparent;
	margin-left: -10px;
`;

const EmblaSlide = styled('div')`
	position: relative;
	padding-left: 10px;

	min-width: 88%;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		min-width: 44%;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		min-width: 33%;
	}
`;

const EmblaSlideInner = styled('div')`
	position: relative;
	overflow: hidden;
	height: 400px;
`;

const EmblaSlideImg = styled('img')`
	position: absolute;
	display: block;
	top: 50%;
	left: 50%;
	width: auto;
	min-height: 100%;
	min-width: 100%;
	max-width: 500px;
	transform: translate(-50%, -50%);
`;

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
			<Embla>
				<EmblaViewport ref={emblaRef}>
					<EmblaContainer>
						{cards.map(({ imgSrc }, idx) => (
							<EmblaSlide key={`img-carousel-${idx}`}>
								<EmblaSlideInner>
									<EmblaSlideImg src={imgSrc} alt="current image" />
								</EmblaSlideInner>
							</EmblaSlide>
						))}
					</EmblaContainer>
				</EmblaViewport>
			</Embla>
		</ByrdiInActionWrapper>
	);
};
