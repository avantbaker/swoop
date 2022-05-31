import { rem } from 'polished';
import { Box } from 'rebass/styled-components';
import {
	useWidthObserver,
	MAX_CONTAINER_WIDTH,
	MOBILE_HEADER_HEIGHT,
	CustomImage,
} from './index';

export const Background = ({ ...rest }) => {
	const [boxRef, width] = useWidthObserver(MAX_CONTAINER_WIDTH);
	const currentHeight = rem(width || MAX_CONTAINER_WIDTH);
	return (
		<Box
			ref={boxRef}
			width={['100%', '100%', '70%']}
			height={[currentHeight, currentHeight, '100%']}
			maxHeight={[rem(MAX_CONTAINER_WIDTH), rem(MAX_CONTAINER_WIDTH), '100%']}
			minHeight={rem(500)}
			pt={[rem(MOBILE_HEADER_HEIGHT), rem(MOBILE_HEADER_HEIGHT), 0]}
			{...rest}
		>
			<CustomImage src="/images/byrdi-phones.png" />
		</Box>
	);
};
