import { KeepPlayingHero } from 'components/homepage-hero';
import { TextBanner } from 'components/text-banner';
import { VideoSection } from 'components/video-section';

export default function Home() {
	return (
		<>
			<KeepPlayingHero />
			<TextBanner title="More Memorable Rounds" />
			<VideoSection />
		</>
	);
}
