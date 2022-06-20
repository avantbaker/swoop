import { Section } from 'components/common/container';
import Text from 'components/common/text';
import Instagram from 'components/common/icons/instagram';
import styled from 'styled-components';
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
	& > div > img {
		width: 100%;
		grid-area: 1 / 1 / 2 / 2;
		object-fit: cover;
		object-position: center;
		height: 100%;
	}
`;
const GridItem = styled('div')`
	display: grid;
`;
export const InstagramSection = () => {
	return (
		<Section flexDirection="column" mb={[6, 7]}>
			<Flex mb={[6]} flexDirection={['column', 'row']}>
				<Text variant={'h4Uppercase'} mr="7">
					Byrdi ON THE ‘GRAM
				</Text>
				<Text variant={'h4Uppercase'}>LOREM IPSUM DOLOR SIC AMET</Text>
			</Flex>
			<Flex flexDirection={['column', 'row']}>
				<Flex mb={[5]} mr={6}>
					<Instagram fill="orange" />
				</Flex>
				<InstaGrid>
					<GridItem>
						<img src="/elements/ig-square-1.png" alt="" />
					</GridItem>
					<GridItem>
						<img src="/elements/ig-square-2.png" alt="" />
					</GridItem>
					<GridItem>
						<img src="/elements/ig-square-3.png" alt="" />
					</GridItem>
					<GridItem>
						<img src="/elements/ig-square-4.png" alt="" />
					</GridItem>
				</InstaGrid>
			</Flex>
		</Section>
	);
};