import React, { useEffect, useRef, useState } from 'react';
import { Section } from 'components/common/container';
import styled from 'styled-components';
import { rem } from 'polished';
import { Pin } from 'components/common/icons/pin';
import {
	position,
	zIndex,
	top,
	right,
	bottom,
	left,
	system,
	space,
	variant,
	color,
	compose,
	layout,
} from 'styled-system';
import Fuse from 'fuse.js';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import Text, { variants } from 'components/common/text';
import theme from 'styles/theme';
import ArrowButton from 'components/common/icons/arrow-down';
import { Flex, Box } from 'rebass/styled-components';
import Hourglass from 'components/common/icons/search';

const StyledAccordion = styled(Accordion)`
	display: flex;
	flex-direction: column;
	height: ${rem(1600)};

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		height: ${rem(1350)};
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		height: ${rem(850)};
		flex-direction: row;
	}

	[aria-expanded='true'] {
		& > svg {
			transform: rotate(180deg);
		}
	}
`;

const StyledAccordionRowContainer = styled('div')`
	width: 100%;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		width: 50%;
		&:first-of-type {
			margin-right: 40px;
		}
		&:last-of-type {
			margin-left: 40px;
		}
	}
`;
const StyledAccordionItem = styled(AccordionItem)`
	flex: 0 1 100%;
	margin-bottom: ${rem(44)};
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		flex: 0 1 calc(50% - 40px);
	}
`;
const StyledAccordionHeading = styled(AccordionItemHeading)`
	display: flex;
`;
const StyledAccordionBtn = styled(AccordionItemButton)`
	display: flex;
	flex: 1;
	justify-content: space-between;
	padding-bottom: ${({ theme }) => rem(theme.space[5])};
	border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
`;
const StyledAccordionPanel = styled(AccordionItemPanel)``;

const FAQHero = styled(Flex)`
	position: relative;
`;

const FlexWithPosition = styled(Flex)(position, zIndex, top, right, bottom, left);
const BoxWithPosition = styled(Box)(position, zIndex, top, right, bottom, left);

const FAQImageContainer = styled(FlexWithPosition)`
	background-image: url(${({ src }) => src});
	background-position: center;
	background-size: cover;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
`;

const FAQContent = styled(Flex)`
	width: 100%;
`;

const AccordionPanel = ({ title, body, ...rest }) => {
	return (
		<StyledAccordionItem {...rest}>
			<StyledAccordionHeading>
				<StyledAccordionBtn>
					<Text variant="accordionTitle" width={'80%'}>
						{title}
					</Text>
					<ArrowButton fill={theme.colors.orange} />
				</StyledAccordionBtn>
			</StyledAccordionHeading>
			<StyledAccordionPanel>
				<Text
					color={theme.colors.calcite}
					px={rem(theme.space[3])}
					pt={rem(theme.space[5])}
					pb={rem(theme.space[4])}
				>
					{body}
				</Text>
			</StyledAccordionPanel>
		</StyledAccordionItem>
	);
};

const dummyItems = [];

const dummyItemsRows = [
	[
		{
			title: 'How do I receive orders from Swoop?',
			body: `Swoop will send you a 5G-enabled Samsung tablet to use as the station, which your team will use to process orders and communicate them to your kitchen.`,
		},
		{
			title: 'Can I change or update my menu on Swoop?',
			body: `You can change and update your menu on Swoop at any time. To learn more about managing your menu on Swoop, read our article Managing Your Menu Within the Swoop Admin Portal.`,
		},
		{
			title: 'Can I refuse or modify orders I receive from Swoop?',
			body: `Yes, you can modify existing orders through the Swoop app, and Swoop will notify the golfers about the updates. Our 24/7 customer service team can also assist you with live orders.`,
		},
		{
			title: 'Can I pause incoming orders if our kitchen becomes too busy?',
			body: `Yes, you can "start/stop" received orders within the Swoop Admin Portal.`,
		},
		{
			title:
				'Does Swoop offer the option for golfers to pick their order up at the turn?',
			body: `Yes, golfers can choose to have their order delivered or to pick it up at the turn.`,
		},
		{
			title: "What is Swoop's payment process?",
			body: `Swoop does not offer in-app payments. You can continue to accept payments the way you currently process transactions.`,
		},
	],
	[
		{
			title: 'Can we integrate Swoop with our POS system?',
			body: `No. Orders are received and processed using the Swoop-provided "Station" tablet.`,
		},
		{
			title:
				'Our carts do not have GPS tracking. How will we be able to find the golfers to deliver the orders?',
			body: `Swoop provides real-time GPS tracking of the golfers that placed the order, making on-course delivery seamless for your team.`,
		},
		{
			title: 'Does Swoop charge account cancellation fees?',
			body: `No. There are no cancellation fees for Swoop.`,
		},
		{
			title: 'How long does it take to get set up and start using Swoop?',
			body: `Send us your menu (pdf, jpg, or png), and we can have your course will be added within 24-48 hours. Swoop's onboarding team will reach out to you to create a roll-out plan that makes sense for your club.`,
		},
		{
			title: 'How do I contact Swoop to learn more about becoming a partner?',
			body: `If you are interested in using Swoop for your course, please fill out our contact form. A member of our team will reach out to you to answer any questions you may have about partnering with Swoop Golf.`,
		},
		// {
		// 	title:
		// 		'The Swoop Customer Care Team supports you and our other Swoop partners, which will assist you in managing your Swoop account, including:',
		// 	body: `
		// - Assistance with any billing inquiries
		// - Contract interpretation questions
		// - Account settings
		// - Troubleshooting technological issues
		// - Updating menus
		// `,
		// },
	],
];

const SearchWrapper = styled(BoxWithPosition)`
	box-sizing: border-box;
`;

const StyledHourglass = styled(Hourglass)(
	position,
	zIndex,
	top,
	right,
	bottom,
	left,
	system({
		transform: true,
	}),
	space
);

const ExtendendInput = styled('input')(space);

const splitInHalf = (arr) => [
	arr.slice(0, Math.ceil(arr.length / 2)),
	arr.slice(Math.ceil(arr.length / 2)),
];

const Search = styled(ExtendendInput)`
	background: transparent;
	border: 1px solid ${({ theme }) => theme.colors.white};
	border-radius: 24px;
	box-sizing: border-box;
	width: 100%;
	::placeholder {
		color: white;
	}
	${variant({ variants })}
	${compose(color, layout)}
`;

const fuse = new Fuse(dummyItemsRows.flat(), {
	keys: ['title', 'body'],
});

const getSearchResults = (acc, cv, idx) => {
	if (idx === 0 || idx % 2 === 0) {
		acc[0].push(cv.item);
	} else {
		acc[1].push(cv.item);
	}
	return acc;
};
export default function FAQ() {
	const [currentItems, setCurrentItems] = useState(dummyItemsRows);
	const [fixedHeight, setFixedHeight] = useState(0);
	const [rendered, setRendered] = useState(false);

	const handleSearch = ({ target: { value } }) => {
		if (value) {
			const result = fuse.search(value);
			const finalResult = result.reduce(getSearchResults, [[], []]);
			setCurrentItems(finalResult);
		} else {
			setCurrentItems(dummyItemsRows);
		}
	};

	const container = useRef(null);

	useEffect(() => {
		if (container.current && !rendered) {
			const client = container.current.clientHeight;
			setFixedHeight(client);
			setRendered(true);
		}
		console.log('fixed: ', fixedHeight);
	}, [container, rendered]);

	return (
		<>
			<FAQHero
				minHeight={['60vh']}
				position="relative"
				flexDirection={['column', 'row']}
				mb={6}
			>
				<FAQImageContainer
					minHeight={['60vh', '95v']}
					width={['100%', '60vw']}
					src="/elements/sandtrap.png"
					flex={[1, '0 1 65%']}
					position={['relative', 'absolute']}
				></FAQImageContainer>
				<Section pb={'0 !important'}>
					<FAQContent
						flexDirection={['column']}
						alignItems={['flex-end']}
						justifyContent={['flex-end']}
						mt={[4]}
						mb={[0]}
						flex={[1, '1 1 auto']}
					>
						<Box mb={4}>
							<Pin style={{ transform: 'translate(10px, 10px)' }} />
						</Box>
						<Text maxWidth={['70%']} variant="h1" textAlign="right" mb={[, 5]}>
							FAQ
						</Text>
					</FAQContent>
				</Section>
			</FAQHero>
			<Section
				flexDirection="column"
				pt={['0 !important', `${rem(theme.space[6])} !important`]}
				mb={6}
				// ref={container}
			>
				<SearchWrapper position="relative" mb={6}>
					<StyledHourglass
						position="absolute"
						left={4}
						top="50%"
						transform="translateY(-50%)"
					/>
					<Search
						type="text"
						variant="h4"
						color="white"
						pl={6}
						py={3}
						placeholder="Search"
						maxWidth={['100%', rem(400)]}
						onChange={handleSearch}
					/>
				</SearchWrapper>
				<div ref={container}>
					<StyledAccordion allowMultipleExpanded={true} allowZeroExpanded={true}>
						{currentItems.map((rows, ridx) => {
							return (
								<StyledAccordionRowContainer key={`faq-items-row-${ridx}`}>
									{rows.map((item, idx) => (
										<AccordionPanel key={`accordion-panel-${ridx}-${idx}`} {...item} />
									))}
								</StyledAccordionRowContainer>
							);
						})}
					</StyledAccordion>
				</div>
			</Section>
		</>
	);
}
