import { Section } from 'components/common/container';
import Text from 'components/common/text';
import Instagram from 'components/common/icons/instagram';
import styled, { useTheme } from 'styled-components';
import { Flex } from 'rebass/styled-components';
import { rem, toColorString } from 'polished';
import theme from 'styles/theme';

const InstaGrid = styled('div')`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(${rem(130)}, 1fr));
	gap: 1rem;
	width: 100%;
	& > div:before {
		content: '';
		display: block;
		padding-top: 100%;
		grid-area: 1 / 1 / 2 / 2;
	}
	div {
		position: relative;
	}
	& > div img {
		width: 100%;
		grid-area: 1 / 1 / 2 / 2;
		object-fit: cover;
		object-position: center;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
`;
const GridItem = styled('div')`
	display: grid;
`;
export const InstagramSection = ({
	children,
	title = '',
	...rest
}: {
	children?;
	title?;
}) => {
	const { type } = useTheme();
	let addColor = { color: undefined };

	if (type === 'light') {
		addColor.color = 'black';
	}
	return (
		<Section flexDirection="column" mb={[6, 7]} {...rest}>
			<Flex mb={[6]} flexDirection={['column', 'row']}>
				<Text variant={'h4Uppercase'} mr="7" {...addColor}>
					SWOOP ON THE ‘GRAM
				</Text>
				<Text variant={'h4Uppercase'} {...addColor}>
					CHEERS TO ANOTHER GOOD CHIP
				</Text>
			</Flex>
			<Flex flexDirection={['column', 'row']}>
				<Flex mb={[5]} mr={6}>
					<a href="https://www.instagram.com/swoopgolf/">
						<Instagram fill={theme.colors.orange} />
					</a>
				</Flex>
				<InstaGrid>
					<GridItem>
						<a href="https://www.instagram.com/p/Cf92Wutvl7u/">
							<img src="/elements/insta-tee.png" alt="Golball on Tee" />
						</a>
					</GridItem>
					<GridItem>
						<a href="https://www.instagram.com/p/Cf92QL9PPR4/">
							<img src="/elements/insta-sandwich.png" alt="Sandwich" />
						</a>
					</GridItem>
					<GridItem>
						<a href="https://www.instagram.com/p/Cf92FKQPjTi/">
							<img
								src="/elements/insta-swing.png"
								alt="Girl following through on swing"
							/>
						</a>
					</GridItem>
					<GridItem>
						<a href="https://www.instagram.com/p/Cf90f1Cvb3q/">
							<img
								src="/elements/insta-cooler.png"
								alt="Cooler with Beer, Ice and Lime"
							/>
						</a>
					</GridItem>
				</InstaGrid>
			</Flex>
			{children}
		</Section>
	);
};
