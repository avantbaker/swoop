import Text from 'components/common/text';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';
import { rem } from 'polished';
import theme from 'styles/theme';

const TitleText = styled(Text)`
	position: relative;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		&:after {
			display: block;
			content: '';
			position: absolute;
			width: 100vw;
			height: 2px;
			background: ${({ theme }) => theme.colors.orange};
			left: 110%;
			top: 50%;
		}
	}
`;
const LogoWrapper = styled(Box)`
	display: flex;
	justify-content: center;
	margin-bottom: ${({ theme }) => rem(theme.space[6])};
	img {
		max-width: 100%;
		height: auto;
	}
`;
const Link = styled(Box)`
	margin-left: -20px;
	margin-right: -20px;
	padding-left: 20px;
	width: 100%;
`;
const AffiliateWrapper = styled(Box)`
	padding-top: ${({ theme }) => rem(theme.space[6])};
	@media screen and (min-width: ${rem(900)}) {
		padding-top: ${({ theme }) => 0};
	}
	@media screen and (min-width: ${rem(1024)}) {
		padding-top: ${({ theme }) => rem(theme.space[6])};
	}
`;
const LogoContainer = styled(Flex)`
	position: relative;
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(2, 1fr);

	& > *:first-child {
		grid-column: 1 / 3;
	}

	@media screen and (min-width: ${({ theme }) => rem(516)}) {
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(2, 1fr);

		& > *:first-child {
			grid-column: 1/ 3;
			grid-row: 3 / -1;
		}
		& > *:last-child {
			grid-column: 1 / 2;
			grid-row: 1/ 2;
		}
	}

	@media screen and (min-width: ${rem(1200)}) {
		display: flex;
		justify-content: space-around;

		& > *:first-child {
			grid-column: unset;
			grid-row: unset;
		}
		& > *:last-child {
			grid-column: unset;
			grid-row: unset;
		}
	}

	&:after {
		display: block;
		content: '';
		position: absolute;
		bottom: 0;
		left: -20px;
		width: 100vw;
		background-color: ${({ theme }) => theme.colors.orange};
		height: 2px;
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		&:after {
			display: none;
		}
	}
`;

const LogoContainerExpanded = styled(LogoContainer)`
	position: relative;
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(2, 1fr);

	& > *:first-child {
		grid-column: unset;
	}
	& > *:last-child {
		grid-column: unset;
	}

	&:before {
		content: '';
		position: absolute;
		display: block;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(37, 37, 37, 1) 87%
		);
	}

	&:after {
		display: none;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		transform: translateY(-${rem(20)});
	}
`;
const AffiliateContainer = styled('div')`
	width: 100%;
	padding-top: 50px;
	padding-bottom: 50px;
	margin-right: auto !important;
	margin-left: auto !important;

	&.expanded {
		padding-top: 0;
		position: relative;
		&:after {
			content: '';
			position: absolute;
			bottom: 0;
			height: 2px;
			width: 200vw;
			left: -100vw;
			background: ${({ theme }) => theme.colors.orange};
		}
	}
	@media (min-width: 1024px) {
		max-width: 980px;
	}
	@media (min-width: 1200px) {
		max-width: 1140px;
	}
`;

const AffiliateContentWrapper = styled(Flex)``;

export const AffiliateSection = () => {
	return (
		<AffiliateContainer>
			<AffiliateWrapper mb={4} px={4}>
				<TitleText maxWidth={['80%', '60%']} variant="h1" mb={[6]}>
					Swoop Affiliate Courses
				</TitleText>

				<LogoContainer pt={[5]} pb={[6]}>
					<LogoWrapper>
						<img src="/swoop/home/logo-white-hamilton.svg" alt="1st Logo" />
					</LogoWrapper>
					<LogoWrapper>
						<img src="/swoop/home/logo-white-trilogy.svg" alt="1st Logo" />
					</LogoWrapper>
					<LogoWrapper>
						<img src="/swoop/home/logo-white-encanterra.svg" alt="1st Logo" />
					</LogoWrapper>
					<LogoWrapper>
						<img src="/swoop/home/logo-white-tca.svg" alt="1st Logo" />
					</LogoWrapper>
					<LogoWrapper>
						<img src="/swoop/home/logo-white-schaffers.svg" alt="1st Logo" />
					</LogoWrapper>
				</LogoContainer>
				<Link mt={[6, 6, 0]} mb={6}>
					<Text color="orange" variant="link3">
						More Affilate Courses
					</Text>
				</Link>
			</AffiliateWrapper>
		</AffiliateContainer>
	);
};

const BigCircle = styled('div')`
	position: absolute;
	left: -${rem(305)};
	top: -5%;
	height: ${rem(610)};
	width: ${rem(610)};
	border: 0.5px solid ${({ theme }) => theme.colors.calcite};
	border-radius: 50%;
	display: none;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		display: block;
	}
`;

const SmallCircle = styled('div')`
	position: absolute;
	left: -${rem(105)};
	bottom: ${rem(105)};
	height: ${rem(210)};
	width: ${rem(210)};
	border: 0.5px solid ${({ theme }) => theme.colors.calcite};
	border-radius: 50%;
	z-index: -1;
	display: none;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		display: block;
	}
`;

const CirclePositioner = styled('div')`
	width: 100%;
	position: relative;
`;
export const AffiliateSectionExpanded = () => {
	return (
		<CirclePositioner>
			<AffiliateContainer className="expanded">
				<AffiliateWrapper mb={4} px={4}>
					<TitleText maxWidth={['80%', '50%']} variant="h1" mb={[6]}>
						Swoop Affiliate Courses
					</TitleText>
					<AffiliateContentWrapper flexDirection={['column', 'column', 'row-reverse']}>
						<LogoContainerExpanded flex={1} pt={[5, , 0]} pb={[, , 5]}>
							<LogoWrapper>
								<img src="/swoop/home/logo-white-hamilton.svg" alt="1st Logo" />
							</LogoWrapper>
							<LogoWrapper>
								<img src="/swoop/home/logo-white-trilogy.svg" alt="1st Logo" />
							</LogoWrapper>
							<LogoWrapper>
								<img src="/swoop/home/logo-white-encanterra.svg" alt="1st Logo" />
							</LogoWrapper>
							<LogoWrapper>
								<img src="/swoop/home/logo-white-tca.svg" alt="1st Logo" />
							</LogoWrapper>
							<LogoWrapper>
								<img src="/swoop/home/logo-white-schaffers.svg" alt="1st Logo" />
							</LogoWrapper>
						</LogoContainerExpanded>
						<Link flex={1} mt={[2, 6, 5]} mb={6} maxWidth={['70%', , '100%']}>
							<a href="">
								<Text variant="link3" color="orange">
									Become a Swoop Affiliate Course
								</Text>
							</a>
						</Link>
					</AffiliateContentWrapper>
				</AffiliateWrapper>
			</AffiliateContainer>
			<BigCircle />
			<SmallCircle />
		</CirclePositioner>
	);
};
