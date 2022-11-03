import { Section } from 'components/common/container';
import Text from 'components/common/text';
import { MenuButton } from 'components/common/menu-item';
import { Flex, Box } from 'rebass/styled-components';
import styled from 'styled-components';
import { rem } from 'polished';
import { useTheme } from 'styled-components';
import Cocktails from 'components/common/icons/badges/cocktails';
import Sandwhiches from 'components/common/icons/badges/sandwiches';
import theme from 'styles/theme';

const Circle = styled(Box)`
	position: relative;
	height: ${rem(225)};
	width: ${rem(225)};
	border-radius: 50%;
	display: block;
	background-color: transparent;
	border-color: ${({ theme }) => theme.colors.calcite};
	border-width: 0.5px;
	border-style: solid;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		display: none !important;
	}
`;
const LittleCircle = styled('div')`
	position: absolute;
	height: 36px;
	width: 36px;
	border-radius: 50%;
	display: block;
	background-color: transparent;
	border-color: ${({ theme }) => theme.colors.orange};
	border-width: 0.5px;
	border-style: solid;
	left: 33px;
`;
const SolidCircle = styled('div')`
	position: relative;
	height: 12px;
	width: 12px;
	border-radius: 50%;
	display: block;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${({ theme }) => theme.colors.orange};
`;

export const LittleCircleWithDot = ({ ...rest }) => {
	return (
		<LittleCircle {...rest}>
			<SolidCircle />
		</LittleCircle>
	);
};

const DesktopMockupGalleryContainer = styled(Box)`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		justify-content: flex-end;
	}
`;

const DesktopPhoneImage = styled('img')`
	flex-shrink: 0;
	top: -60px;
	right: -80px;
	width: 100%;
	max-width: ${rem(340)};
`;
export const SpiritsImage = styled('img')`
	position: absolute;
	max-width: 65%;
`;
export const WrapsImage = styled('img')`
	position: absolute;
`;
const RectangleFlagImage = styled('img')`
	position: absolute;
	max-width: ${rem(160)};
`;

const CustomSection = styled(Section)`
	flex-direction: column;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		flex-direction: row;
	}
	& > *:first-child {
		flex: 1;
	}
	& > *:last-child {
		flex: 1;
	}
`;

const MockupGalleryPointOfReference = styled('div')`
	position: relative;
	${SpiritsImage} {
		top: 25%;
		left: -${rem(20)};
		max-width: ${rem(140)};
		@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
			top: -${rem(80)};
			left: -${rem(130)};
			max-width: ${rem(170)};
		}
	}
	${WrapsImage} {
		top: -${rem(60)};
		right: -${rem(30)};
		max-width: ${rem(140)};
		@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
			top: 160px;
			left: ${rem(-50)};
			max-width: ${rem(170)};
		}
	}
	${RectangleFlagImage} {
		bottom: -${rem(50)};
		right: ${rem(0)};
		max-width: ${rem(100)};
		@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
			top: ${rem(270)};
			left: ${rem(-190)};
			max-width: ${rem(130)};
		}
	}
`;
const DesktopMockupGallery = ({ ...rest }) => {
	return (
		<DesktopMockupGalleryContainer position="relative" {...rest}>
			<MockupGalleryPointOfReference>
				<DesktopPhoneImage
					src="/elements/hello-john.png"
					alt="golfer holding whiskey drink"
				/>
				<SpiritsImage src="/elements/spirits.png" alt="golfer holding whiskey drink" />
				<WrapsImage src="/elements/wraps-icon.png" alt="golfer holding whiskey drink" />
				<RectangleFlagImage
					src="/elements/rectangle-flag.png"
					alt="golfer holding whiskey drink"
				/>
			</MockupGalleryPointOfReference>
		</DesktopMockupGalleryContainer>
	);
};
export const DriveRevenue = () => {
	const { space } = useTheme();
	return (
		<CustomSection mt={[space[4], space[6], space[7]]} mb={[space[5], space[5]]}>
			<Flex flexDirection="column" pl={2} pr={2} mb={[6]}>
				<Text maxWidth={['60%']} variant="h1" mb={[5, 5, 6]}>
					Drive Revenue
				</Text>
				<Text maxWidth={['80%']} variant="h2" mb={[5]}>
					Extend the hospitality and craft of the clubhouse to the course.
				</Text>
				<Text maxWidth={['80%']} variant="h4" mb={2}>
					<Text color="orange" fontWeight="bold" display="inline-block">
						Boost
					</Text>{' '}
					Revenue
				</Text>
				<Text maxWidth={['80%']} variant="h4" mb={2}>
					<Text color="orange" fontWeight="bold" display="inline-block">
						Increase
					</Text>{' '}
					Margins
				</Text>
				<Text maxWidth={['80%']} variant="h4" mb={2}>
					<Text color="orange" fontWeight="bold" display="inline-block">
						Enhance
					</Text>{' '}
					Experience
				</Text>
				<Text maxWidth={['80%']} variant="h4" mb={6}>
					<Text color="orange" fontWeight="bold" display="inline-block">
						Integrate
					</Text>{' '}
					Seamlessly
				</Text>
				<MenuButton
					href="/app/courses"
					title="Learn More"
					color={theme.colors.orange}
					textAlign="center"
					maxWidth={['100%', '70%']}
				/>
			</Flex>
			<Flex
				pt={[rem(space[6]), rem(space[6]), 0]}
				pb={[rem(space[5]), 0]}
				justifyContent="center"
			>
				<DesktopMockupGallery />
			</Flex>
		</CustomSection>
	);
};
