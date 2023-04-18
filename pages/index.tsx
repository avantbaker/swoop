import { AffiliateSection } from 'components/affiliates';
import { DriveRevenue } from 'components/drive-revenue';
import { InstagramSection } from 'components/instagram';
import { NewsletterSection } from 'components/newsletter';
import { PageSectionContainer } from 'components/page-wrapper';
import { TextBanner } from 'components/text-banner';
import { VideoSection } from 'components/video-section';
import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { Hero } from '../components/homepage-hero-simple';
import { TestimonialsCarousel } from '../components/testimonials';

const LeftCircle = styled('div')`
	position: absolute;
	left: -10%;
	top: -5%;
	height: ${rem(210)};
	width: ${rem(210)};
	border: 0.5px solid ${({ theme }) => theme.colors.calcite};
	border-radius: 50%;
	display: none;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		display: block;
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		left: -20%;
	}
`;

const RightCircle = styled('div')`
	display: none;
	position: absolute;
	right: -42%;
	top: -10%;
	height: ${rem(610)};
	width: ${rem(610)};
	border: 0.5px solid ${({ theme }) => theme.colors.calcite};
	border-radius: 50%;
	z-index: -1;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		display: block;
	}
`;

export default function Home() {
	return (
		<>
			<Hero />
			<TextBanner title="More Memorable Rounds" />
			<VideoSection />
			<DriveRevenue />
			<PageSectionContainer>{/* <AffiliateSection /> */}</PageSectionContainer>
			<TestimonialsCarousel />
			<PageSectionContainer>
				<InstagramSection>
					<LeftCircle />
					<RightCircle />
				</InstagramSection>
			</PageSectionContainer>
			<NewsletterSection />
		</>
	);
}
