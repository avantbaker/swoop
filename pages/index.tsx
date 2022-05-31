import { KeepPlayingHero } from 'components/homepage-hero';
import { TextBanner } from 'components/text-banner';

export default function Home() {
	return (
		<>
			<KeepPlayingHero />
			<TextBanner title="More Memorable Rounds" />
			<div className="container-fluid">this should be some words</div>
		</>
	);
}
