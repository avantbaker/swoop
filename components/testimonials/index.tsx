import { useCallback, useEffect, useState } from 'react';
import { Section } from 'components/common/container';
import { LittleCircleWithDot } from 'components/drive-revenue';
import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { rem } from 'polished';
import ArrowControl from 'components/common/icons/arrow';
import Text from 'components/common/text';
import useEmblaCarousel from 'embla-carousel-react';

const EmblaParent = styled.div`
	overflow-x: scroll;
	position: relative;
	margin-right: ${({ theme }) => `${-theme.space[4]}px`};

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		margin-right: ${({ mr }) => mr};
	}
`;
const EmblaContainer = styled.div`
	display: flex;
	margin-bottom: ${rem(15)};
	width: 100%;
	position: relative;
`;
const Card = styled(Flex)`
	flex: 1;
	position: relative;
	flex: 0 0 95%;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		flex: 0 0 75%;
	}
`;
const CustomSection = styled(Section)`
	overflow: visible;

	&.expanded {
		padding-top: 0 !important;
	}
`;
const ImageWrapper = styled('div')`
	img {
		max-width: 150px;

		@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
			max-width: unset;
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
`;
const CustomTitle = styled(Text)`
	position: relative;
`;
const TestimonialCard = () => {
	return (
		<Card>
			<Flex>
				<ImageWrapper>
					{/* <img src="/elements/putting-man.png" /> */}
					<img src="/elements/golf-balls.png" />
				</ImageWrapper>
				<ContentWrapper pl={3} pr={4} flex="1" flexDirection={['column']}>
					<CustomTitle mb={[4, 6]}>
						<DesktopCWD />
						Hamilton Mill Golf Club | Atlanta, GA
					</CustomTitle>
					<Text mb={5} variant="bodySecondary">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu sit
						amet velit tristique tempor at eu dui. Phasellus efficitur sapien a urna
						tristique suscipit. Praesent et commodo lectus, quis.
					</Text>
					<Text mb={[4, 6]}>ERIN SMITH | Food & Beverage Director</Text>
					<Text variant="bodySecondary">
						lorem ipsum dolor sic amet. Consectetuc adipiscing.
					</Text>
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
const dummyCards = [1, 2, 3, 4, 5, 6];
export const TestimonialsCarousel = ({ ...rest }) => {
	const { scrollPrev, scrollNext, emblaRef } = useCustomCarousel();
	return (
		<CustomSection flexDirection={['column']} {...rest}>
			<ControlContainer mb={[5]}>
				<LeftControl onClick={scrollPrev} />
				<RightControl onClick={scrollNext} />
				<MobileCWD />
			</ControlContainer>
			<EmblaParent ref={emblaRef}>
				<EmblaContainer>
					{dummyCards.map((item, idx) => {
						return <TestimonialCard key={`idx-${idx}`} />;
					})}
				</EmblaContainer>
			</EmblaParent>
		</CustomSection>
	);
};
