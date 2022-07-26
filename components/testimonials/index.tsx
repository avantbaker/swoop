import { useCallback, useEffect, useState } from 'react';
import { Section } from 'components/common/container';
import { LittleCircleWithDot } from 'components/drive-revenue';
import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { rem } from 'polished';
import ArrowControl from 'components/common/icons/arrow';
import Text from 'components/common/text';
import useEmblaCarousel from 'embla-carousel-react';
import { Block } from 'components/common/container';
export const PhotoCarousel = styled('div')`
	display: flex;
	flex-wrap: nowrap;
	-webkit-overflow-scrolling: touch;
`;

export const EmblaParent = styled.div``;
export const EmblaContainer = styled(PhotoCarousel)``;

const Card = styled(Flex)`
	flex: 1;
	position: relative;
	flex: 0 0 95%;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		flex: 0 0 75%;
	}
`;

const ImageWrapper = styled('div')`
	img {
		max-width: 150px;

		@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
			max-width: unset;
			max-height: ${rem(480)};
		}
	}
`;
const ContentWrapper = styled(Flex)`
	flex: 1;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		padding: 10%;
	}
`;
export const LeftControl = styled(ArrowControl)`
	transform: rotate(180deg);
	margin-right: ${rem(20)};
`;
export const RightControl = styled(ArrowControl)``;
const DesktopCWD = styled(LittleCircleWithDot)`
	top: -55px;
	left: 0;
	display: none;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		display: block;
	}
`;
const MobileCWD = styled(LittleCircleWithDot)`
	display: block;
	position: absolute;
	top: -5px;
	left: 166px;
	bottom: 0;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		display: none;
	}
`;
export const ControlContainer = styled(Flex)`
	position: relative;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		padding-left: 0;
		z-index: 10;
	}
`;

const TestimonialControlContainer = styled(ControlContainer)`
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		transform: translate(-160px, 60px);
	}
`;
const CustomTitle = styled(Text)`
	position: relative;
`;
const TestimonialCard = ({
	title = 'Trilogy at Vistancia',
	location = 'Peoria, AZ',
	body = `Spending more than 20+ years in the Country Club business and as a golfer that
has played throughout the nation, I am keenly aware of the pain points of the
golfer's voice. These can be at a high end country club, resort course,
or a daily fee course, but the major issue is accessibility to a beverage.`,
	name = 'Marcus Paulson',
	occupation = 'Course Member',
	imgSrc = '/elements/golf-balls.png',
}) => {
	return (
		<Card>
			<Flex>
				<ImageWrapper>
					<img src={imgSrc} />
				</ImageWrapper>
				<ContentWrapper pl={3} pr={4} flex="1" flexDirection={['column']}>
					<CustomTitle mb={[4, 6]}>
						<DesktopCWD />
						{title} | <CustomTitle fontWeight="bold">{location}</CustomTitle>
					</CustomTitle>
					<Text mb={5} variant="bodySecondary">
						{body}
					</Text>
					<Text mb={[4, 6]}>
						{name} {'|'} {occupation}
					</Text>
					{/* <Text variant="bodySecondary">
						lorem ipsum dolor sic amet. Consectetuc adipiscing.
					</Text> */}
				</ContentWrapper>
			</Flex>
		</Card>
	);
};
export const useCustomCarousel = () => {
	const [currentIndex, setSelectedIndex] = useState(0);

	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		skipSnaps: false,
	});
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const scrollPrev = useCallback(() => {
		emblaApi && emblaApi.scrollPrev();
		console.log('whithc');
	}, [emblaApi]);
	const scrollNext = useCallback(() => {
		emblaApi && emblaApi.scrollNext();
		console.log('whithc');
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
		title: 'Trilogy at Vistancia',
		location: 'Peoria, AZ',
		body: `Spending more than 20+ years in the Country Club business and as a golfer that
	has played throughout the nation, I am keenly aware of the pain points of the
	golfer's voice. These can be at a high end country club, resort course,
	or a daily fee course, but the major issue is accessibility to a beverage.`,
		name: 'Marcus Paulson',
		occupation: 'Course Member',
		imgSrc: '/elements/golf-balls.png',
	},
];

const TestimonialsCarouselWrapper = styled(Block)`
	padding-left: 0;
	padding-right: 0;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		padding-left: ${rem(40)};
		margin-bottom: ${({ theme }) => rem(theme.space[6])};
	}
`;

export const TestimonialsCarousel = ({ cards = dummyCards, ...rest }) => {
	const { scrollPrev, scrollNext, emblaRef } = useCustomCarousel();
	return (
		<>
			<TestimonialsCarouselWrapper>
				<TestimonialControlContainer mb={[5]}>
					<LeftControl onClick={scrollPrev} />
					<RightControl onClick={scrollNext} />
					<MobileCWD />
				</TestimonialControlContainer>
				<EmblaParent ref={emblaRef}>
					<EmblaContainer>
						{cards.map((item, idx) => {
							return <TestimonialCard {...item} key={`idx-${idx}`} />;
						})}
					</EmblaContainer>
				</EmblaParent>
			</TestimonialsCarouselWrapper>
		</>
	);
};
