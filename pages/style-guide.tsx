import { Flex, Box } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';

export default function StyleGuide() {
	return (
		<>
			<Flex m="0 10%" px={rem(24)} height="100vh" bg="white">
				<Box width={1 / 2}>
					<Text as="h1" variant="headingSmall" mb={rem(24)}>
						Typeography
					</Text>
					<Text variant="heading">Heading</Text>
					<Text variant="headingMobile">Heading Mobile</Text>
					<Text variant="headingSmall">Heading Small</Text>
					<Text variant="headingSmallMobile">Heading Small Mobile</Text>
					<Text variant="highlight">Highlight</Text>
					<Text variant="highlightMobile">Highlight Mobile</Text>
					<Text variant="body">Body</Text>
					<Text variant="bodySmall">Body Small</Text>
					<Text variant="bodyLarge">Body Large</Text>
					<Text variant="label">LABEL</Text>
					<Text variant="labelMobile">LABEL MOBILE</Text>
					<Text variant="action">Action</Text>
					<Text variant="caption">Caption</Text>
					<Text variant="captionMobile">Caption Mobile</Text>
					<Text variant="button">Button</Text>
				</Box>
				<Box width={1 / 2}>
					<Text as="h1" variant="headingSmall" mb={rem(24)}>
						Icons / Graphics
					</Text>
				</Box>
			</Flex>
		</>
	);
}
