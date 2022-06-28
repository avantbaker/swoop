import { useTheme } from 'styled-components';
import { Flex } from 'rebass/styled-components';
import Text from 'components/common/text';

export const TextBanner = ({ title, ...rest }) => {
	const { space } = useTheme();
	return (
		<Flex
			pt={[space[4], space[4], space[6]]}
			px={space[4]}
			justifyContent="flex-end"
			mb={6}
			{...rest}
		>
			<Text variant="display" maxWidth={['100%', '80%']}>
				{title}
			</Text>
		</Flex>
	);
};
