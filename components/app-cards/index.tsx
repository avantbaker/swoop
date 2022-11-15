import { Section } from 'components/common/container';
import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';
import Text from 'components/common/text';
import Link from 'next/link';
import { rem } from 'polished';
import { useState, useRef, useEffect } from 'react';

export const DualPathSection = styled('div')`
	background: url(/elements/dotted-bg.svg);
	border-top: 2px solid ${({ theme }) => theme.colors.orange};
	padding: 0 !important;
`;

export const VerticalTextL = styled(Text)`
	writing-mode: vertical-lr;
	-webkit-transform: rotate(-180deg);
	-moz-transform: rotate(-180deg);
`;

export const DualSection = styled(Flex)`
	background: ${({ theme }) => theme.colors.sage};
	border-left: 2px solid ${({ theme }) => theme.colors.orange};
	border-right: 2px solid ${({ theme }) => theme.colors.orange};
	align-items: flex-end;
	cursor: pointer;
	flex: 1;
	img {
		width: 100%;
		max-width: ${rem(300)};
	}
	&:first-of-type {
		border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
	}
	&:hover {
		background: ${({ theme }) => theme.colors.calcite};
		${VerticalTextL} {
			color: ${({ theme }) => theme.colors.white} !important;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		&:first-of-type {
			border-bottom: none;
			border-right: none;
		}
	}
`;

export const AppCards = () => {
	const [golfersTextHeight, setGolfersTextHeight] = useState(0);
	const golfersText = useRef(null);
	useEffect(() => {
		setGolfersTextHeight(golfersText.current.clientHeight);
	}, [golfersText]);

	const [coursesTextHeight, setCoursesTextHeight] = useState(0);
	const coursesText = useRef(null);
	useEffect(() => {
		setCoursesTextHeight(coursesText.current.clientHeight);
	}, [coursesText]);

	return (
		<DualPathSection>
			<Section
				p={'0 !important'}
				justifyContent="center"
				flexDirection={['column', 'column', 'row']}
			>
				<Link href="/app/golfers">
					<DualSection justifyContent={['center']} py={[6]}>
						<VerticalTextL ref={golfersText} mr={5} variant="displayVertical">
							Golfers
						</VerticalTextL>
						<img
							style={{
								height: golfersTextHeight,
								width: 'auto',
							}}
							src="/swoop/brand/apple-golfers-desktop-removed.png"
							alt=""
						/>
					</DualSection>
				</Link>
				<Link href="/app/courses">
					<DualSection justifyContent={['center']} py={[6]}>
						<img
							style={{
								height: coursesTextHeight,
								width: 'auto',
							}}
							src="/swoop/brand/app-courses-desktop-cropped-removed.png"
							alt=""
						/>
						<VerticalTextL ref={coursesText} variant="displayVertical" ml={[4]}>
							Courses
						</VerticalTextL>
					</DualSection>
				</Link>
			</Section>
		</DualPathSection>
	);
};
