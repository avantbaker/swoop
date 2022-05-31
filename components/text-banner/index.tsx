import { useTheme } from 'styled-components';
import { Flex } from 'rebass/styled-components';
import Text from 'components/common/text';

export const TextBanner = ({ title }) => {
	const { space } = useTheme();
	return (
		<Flex pt={[space[4], space[4], space[6]]} px={space[4]} mb={6}>
			<Text variant="display">{title}</Text>
		</Flex>
	);
};
