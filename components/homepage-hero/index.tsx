import { Flex } from 'rebass/styled-components';
import { Circles } from '../common/circles';
import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import { Background } from './background';
import { Foreground } from './foreground';

export const MAX_CONTAINER_WIDTH = 700;
export const MOBILE_HEADER_HEIGHT = 110;
export const CustomImage = styled('img')`
	object-fit: cover;
	object-position: center;
	width: 100%;
	height: 100%;
`;
const observeWidth = (ref, cb, maxWidth) => () => {
	if (ref.offsetWidth <= maxWidth || (ref.offsetWidth && !maxWidth)) {
		cb(ref.offsetWidth);
	}
};
export const useWidthObserver = (maxWidth?) => {
	const boxRef = useRef<HTMLDivElement>();
	const [width, setWidth] = useState(null);

	useEffect(() => {
		const box = boxRef?.current;
		if (box) {
			const observer = new ResizeObserver(observeWidth(box, setWidth, maxWidth));
			observer.observe(box);
		}
	}, [boxRef]);
	return [boxRef, width];
};
export const KeepPlayingHero = () => {
	return (
		<Flex position="relative">
			<Circles />
			<Flex position="relative" minHeight="95vh" width="100%">
				<Flex flexDirection={['column', 'column', 'row']}>
					<Background />
					<Foreground />
				</Flex>
			</Flex>
		</Flex>
	);
};
