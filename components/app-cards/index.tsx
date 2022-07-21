import { Section } from 'components/common/container';
import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';
import Text from 'components/common/text';

export const DualPathSection = styled('div')`
	background: url(/elements/dotted-bg.svg);
	border-top: 2px solid ${({ theme }) => theme.colors.orange};
	padding: 0 !important;
`;

export const DualSection = styled(Flex)`
	background: ${({ theme }) => theme.colors.black};
	border-left: 2px solid ${({ theme }) => theme.colors.orange};
	border-right: 2px solid ${({ theme }) => theme.colors.orange};
	align-items: flex-end;
	flex: 1;
	img {
		height: 100%;
	}
	&:first-of-type {
		border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
	}
	&:hover {
		background: rgba(231, 226, 218, 0.4);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		&:first-of-type {
			border-bottom: none;
			border-right: none;
		}
	}
`;

export const VerticalTextL = styled(Text)`
	writing-mode: vertical-lr;
	-webkit-transform: rotate(-180deg);
	-moz-transform: rotate(-180deg);
`;

export const AppCards = () => {
	return (
		<DualPathSection>
			<Section
				p={'0 !important'}
				justifyContent="center"
				flexDirection={['column', 'row']}
			>
				<DualSection justifyContent={['center']} py={[5, 6]}>
					<VerticalTextL pl={4} variant="displayVertical">
						Golfers
					</VerticalTextL>
					<img src="/elements/app-golfers-desktop.png" alt="" />
				</DualSection>
				<DualSection justifyContent={['center']} py={[5, 6]}>
					<img src="/elements/app-courses-desktop.png" alt="" />
					<VerticalTextL variant="displayVertical">Courses</VerticalTextL>
				</DualSection>
			</Section>
		</DualPathSection>
	);
};
