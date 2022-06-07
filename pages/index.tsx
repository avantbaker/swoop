import { Block, Section } from 'components/common/container';
import { KeepPlayingHero } from 'components/homepage-hero';
import { TextBanner } from 'components/text-banner';
import { VideoSection } from 'components/video-section';
import { DriveRevenue } from '../components/drive-revenue';
import Text from 'components/common/text';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';
import { rem } from 'polished';

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

const Link = styled(Text)`
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
	& > *:last-child {
		grid-column: 1 / 3;
	}

	@media screen and (min-width: ${({ theme }) => rem(516)}) {
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(2, 1fr);

		& > *:first-child {
			grid-column: unset;
		}
		& > *:last-child {
			grid-column: unset;
		}
	}

	@media screen and (min-width: ${({ theme }) => rem(1200)}) {
		display: flex;
		justify-content: space-around;
	}

	&:after {
		display: block;
		content: '';
		position: absolute;
		bottom: 0;
		left: ${({ theme }) => '-20px'};
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
const AffiliateContainer = styled('div')`
	width: 100%;
	padding-top: 50px;
	padding-bottom: 50px;
	margin-right: auto !important;
	margin-left: auto !important;

	@media (min-width: 1024px) {
		max-width: 980px;
	}
	@media (min-width: 1200px) {
		max-width: 1140px;
	}
`;
export default function Home() {
	return (
		<>
			<KeepPlayingHero />
			<TextBanner title="More Memorable Rounds" />
			<VideoSection />
			<DriveRevenue />
			<AffiliateContainer>
				<AffiliateWrapper mb={4} px={4}>
					<TitleText maxWidth={['80%', '60%']} variant="h1" mb={[6]}>
						Swoop Affiliate Courses
					</TitleText>
					<LogoContainer pt={[5]} pb={[6]}>
						<LogoWrapper>
							<img src="/images/logos/logo-sticky-1.png" alt="1st Logo" />
						</LogoWrapper>
						<LogoWrapper>
							<img src="/images/logos/logo-sticky-2.png" alt="1st Logo" />
						</LogoWrapper>
						<LogoWrapper>
							<img src="/images/logos/logo-sticky-3.png" alt="1st Logo" />
						</LogoWrapper>
						<LogoWrapper>
							<img src="/images/logos/logo-sticky-1.png" alt="1st Logo" />
						</LogoWrapper>
					</LogoContainer>
					<Link maxWidth={['60%']} variant="link3" mt={[6, 6, 0]} mb={6}>
						<Text color="orange">Become a Byrdi Affiliate Course</Text>
					</Link>
				</AffiliateWrapper>
			</AffiliateContainer>
		</>
	);
}
