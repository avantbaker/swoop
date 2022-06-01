import { KeepPlayingHero } from 'components/homepage-hero';
import { TextBanner } from 'components/text-banner';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';
import ReactPlayer from 'react-player';
import { rem } from 'polished';
import { Section } from '../components/common/container';

const ReactPlayerWrapper = styled(Box)`
	position: relative;
	padding-top: 56.25%;
	min-height: 500px;
	max-height: 500px;
	width: 100%;
	.react-player {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		&__preview {
			background-image: url(${({ imgSrc }) => imgSrc});
		}
		&__shadow {
			position: absolute;
			left: ${rem(20)};
			bottom: ${rem(20)};
			background: ${({ theme }) => theme.colors.calcite} !important;
		}
		&__play-icon {
			border-color: transparent transparent transparent
				${({ theme }) => theme.colors.orange} !important;
		}
	}
`;

const VideoSectionContainer = styled(Section)`
	padding-left: 0 !important;
	padding-right: 0 !important;
`;

export default function Home() {
	return (
		<>
			<KeepPlayingHero />
			<TextBanner title="More Memorable Rounds" />
			<VideoSectionContainer>
				<ReactPlayerWrapper>
					<ReactPlayer
						light="/images/hp-buddies.jpeg"
						className="react-player"
						url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
						width="100%"
						height="100%"
					/>
				</ReactPlayerWrapper>
			</VideoSectionContainer>
		</>
	);
}
