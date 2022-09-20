import { Section } from 'components/common/container';
import Text from 'components/common/text';
import Instagram from 'components/common/icons/instagram';
import styled, { useTheme } from 'styled-components';
import { Flex } from 'rebass/styled-components';
import { rem } from 'polished';

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
	& > div > img {
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
					Byrdi ON THE ‘GRAM
				</Text>
				<Text variant={'h4Uppercase'} {...addColor}>
					CHEERS TO ANOTHER GOOD CHIP
				</Text>
			</Flex>
			<Flex flexDirection={['column', 'row']}>
				<Flex mb={[5]} mr={6}>
					<a href="https://www.instagram.com/swoopgolf/">
						<Instagram fill="orange" />
					</a>
				</Flex>
				<InstaGrid>
					<a href="https://www.instagram.com/p/Cf92Wutvl7u/">
						<GridItem>
							<img src="/swoop/home/instagram-modelo.png" alt="" />
						</GridItem>
					</a>
					<a href="https://www.instagram.com/p/Cf92QL9PPR4/">
						<GridItem>
							<img src="/swoop/home/instagram-fairway.png" alt="" />
						</GridItem>
					</a>
					<a href="https://www.instagram.com/p/Cf92FKQPjTi/">
						<GridItem>
							<img src="/swoop/home/instagram-sandwich.png" alt="" />
						</GridItem>
					</a>
					<a href="https://www.instagram.com/p/Cf90f1Cvb3q/">
						<GridItem>
							<img src="/swoop/home/instagram-cup.png" alt="" />
						</GridItem>
					</a>
				</InstaGrid>
			</Flex>
			{children}
		</Section>
	);
};
