import React from 'react';
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
	flex-wrap: wrap;
`;
const StyledAccordionItem = styled(AccordionItem)`
	flex: 0 1 100%;
	margin-bottom: ${rem(60)};
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		flex: 0 1 calc(50% - 40px);

		&:nth-of-type(odd) {
			margin-right: 40px;
		}
		&:nth-of-type(even) {
			margin-left: 40px;
		}
	}
`;
const StyledAccordionHeading = styled(AccordionItemHeading)`
	padding-bottom: ${({ theme }) => rem(theme.space[4])};
	border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
`;
const StyledAccordionBtn = styled(AccordionItemButton)`
	display: flex;
	justify-content: space-between;
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

const dummyItems = Array(11).fill({
	title: 'Is free will real or just an illusion?',
	body: `	Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut
	occaecat consequat est minim minim esse tempor laborum consequat esse
	adipisicing eu reprehenderit enim.`,
});

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

export default function FAQ() {
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
					/>
				</SearchWrapper>
				<StyledAccordion allowMultipleExpanded={true} allowZeroExpanded={true}>
					{dummyItems.map((item, idx) => (
						<AccordionPanel key={`accordion-panel-${idx}`} {...item} />
					))}
				</StyledAccordion>
			</Section>
		</>
	);
}
