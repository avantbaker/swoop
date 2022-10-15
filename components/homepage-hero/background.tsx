import { rem } from 'polished';
import { Box } from 'rebass/styled-components';
import styled from 'styled-components';

import {
	useWidthObserver,
	MAX_CONTAINER_WIDTH,
	MOBILE_HEADER_HEIGHT,
	CustomImage,
} from './index';

const BackgroundWrapper = styled(Box)`
	z-index: 1;
`;
export const Background = ({ src, headerPadding = true, maxWidth = '70%', ...rest }) => {
	const [boxRef, width] = useWidthObserver(MAX_CONTAINER_WIDTH);
	const currentHeight = rem(width);
	return (
		<BackgroundWrapper
			ref={boxRef}
			width={['100%', '100%', maxWidth]}
			height={[currentHeight, currentHeight, '100%']}
			maxHeight={rem(MAX_CONTAINER_WIDTH)}
			minHeight={rem(500)}
			pt={[
				headerPadding && rem(MOBILE_HEADER_HEIGHT),
				headerPadding && rem(MOBILE_HEADER_HEIGHT),
				0,
			]}
			{...rest}
		>
			<CustomImage width={'100%'} src={src || '/swoop/home/home-phones.png'} />
		</BackgroundWrapper>
	);
};
