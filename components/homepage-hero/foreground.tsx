import { rem } from 'polished';
import { Flex, Box } from 'rebass/styled-components';
import { useTheme } from 'styled-components';
import Text from 'components/common/text';
import { Pin } from 'components/common/icons/pin';
import { useWidthObserver } from './index';

export const Foreground = ({
	subtext = '',
	title = 'Keep Playing',
	subtitle = '',
	hasIcons = true,
	titleMaxWidth = null,
	contentJustify = null,
	...rest
}) => {
	const { space } = useTheme();
	const [containerRef, width] = useWidthObserver();

	return (
		<Flex ref={containerRef} {...rest} style={{ zIndex: 2 }}>
			<Flex
				position="relative"
				flexDirection="column"
				alignItems="flex-end"
				justifyContent={contentJustify || 'center'}
				p={[rem(space[4])]}
				pb={[rem(space[6])]}
				pr={[rem(space[4]), rem(space[4]), rem(space[5]), rem(space[7] + 20)]}
				mt={[rem(-55), rem(-55), rem(140)]}
				ml={[, , rem(-width)]}
				{...rest}
			>
				<Box mb={4}>
					<Pin />
				</Box>
				<Text
					maxWidth={titleMaxWidth || ['70%']}
					variant="h1"
					textAlign="right"
					mb={[5, 5, 6]}
				>
					{title}
				</Text>
				{subtitle && (
					<Text
						maxWidth={['70%', '70%', '50%']}
						variant="h2"
						textAlign="right"
						mb={[4, 4, 5]}
					>
						Have your next course, on the course.
					</Text>
				)}
				{subtext && (
					<Text maxWidth={['90%', '90%', '55%']} variant="h4" textAlign="right" mb={6}>
						Leave your lunchbox at home. Order fresh provisions and cocktails from the
						clubhouse, delivered to your exact location on the course.
					</Text>
				)}
				{hasIcons && (
					<Flex width="100%" justifyContent="flex-end">
						<Box mr={4}>
							<img src="/elements/apple-store.png" />
						</Box>
						<Box>
							<img src="/elements/google-play.png" />
						</Box>
					</Flex>
				)}
			</Flex>
		</Flex>
	);
};
