import { useTheme } from 'styled-components';
import { Flex } from 'rebass/styled-components';
import Text from 'components/common/text';

export const TextBanner = ({ title, isLight = false, ...rest }) => {
	const { space } = useTheme();
	return (
		<Flex pt={[4, 4, 6]} px={4} justifyContent="flex-end" mb={6} {...rest}>
			<Text variant={isLight ? 'displayLight' : 'display'} maxWidth={['100%', '80%']}>
				{title}
			</Text>
		</Flex>
	);
};
