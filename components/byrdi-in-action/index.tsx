import {
	ControlContainer,
	LeftControl,
	RightControl,
	useCustomCarousel,
} from '../testimonials';
import styled from 'styled-components';
import { Section } from 'components/common/container';
import Text from 'components/common/text';
import { rem } from 'polished';
import React from 'react';
import { Box } from 'rebass/styled-components';

const ByrdiInActionWrapper = styled(Box)``;
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
export const ByrdiInAction = () => {
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
						Byrdi in Action
					</Text>
					<Text maxWidth={rem(580)}>
						Leave your lunchbox at home. Order fresh provisions and cocktails from the
						clubhouse, delivered to your exact location on the course.
					</Text>
				</ContentWrapper>
				<ControlContainer mt={[5]}>
					<LeftControl onClick={scrollPrev} />
					<RightControl onClick={scrollNext} />
				</ControlContainer>
			</Section>
			<PhotoCarousel ref={emblaRef}>
				<PhotoCarousel>
					<ImageWrapper>
						<img src="/elements/catching-club.png" alt="" />
					</ImageWrapper>
					<ImageWrapper>
						<img src="/elements/catching-club.png" alt="" />
					</ImageWrapper>
					<ImageWrapper>
						<img src="/elements/catching-club.png" alt="" />
					</ImageWrapper>
					<ImageWrapper>
						<img src="/elements/catching-club.png" alt="" />
					</ImageWrapper>
					<ImageWrapper>
						<img src="/elements/catching-club.png" alt="" />
					</ImageWrapper>
					<ImageWrapper>
						<img src="/elements/catching-club.png" alt="" />
					</ImageWrapper>
				</PhotoCarousel>
			</PhotoCarousel>
		</ByrdiInActionWrapper>
	);
};
