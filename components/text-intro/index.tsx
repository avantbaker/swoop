import { Section } from 'components/common/container';
import { Flex } from 'rebass/styled-components';
import Text from 'components/common/text';
import Pin from 'components/common/icons/pin';
import { rem } from 'polished';

export const TextIntro = () => {
	return (
		<Section justifyContent="center" mb={5}>
			<Flex flexDirection="column" alignItems="center" mt={[6]}>
				<Pin />
				<Text variant="h2" textAlign="center" maxWidth={rem(573)} mt={[4]}>
					Swoop is giving courses and golfers control over concessions from the tee to the
					turn, and on.
				</Text>
			</Flex>
		</Section>
	);
};
