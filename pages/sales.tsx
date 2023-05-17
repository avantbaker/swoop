import { Hero } from 'components/homepage-hero-simple';
import { NewsletterSection } from 'components/newsletter';
import { Flex, Box } from 'rebass/styled-components';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Section } from 'components/common/container';
import Text from 'components/common/text';
import theme from 'styles/theme';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import HamburgerMenu from 'components/common/hamburger';
import { FormInput, FormInputWrapper } from './contact';
import { rem } from 'polished';
import { space, variant, color, compose, layout, position } from 'styled-system';
import { MenuButton } from 'components/common/menu-item';
import { useForm } from '@formspree/react';

const ImageContainer = styled(Box)`
	width: 100%;
	height: 100%;
	position: relative;

	img {
		width: 100%;
		max-width: 400px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		img {
			width: 100%;
			max-width: 100%;
		}
	}
`;

const TextContainer = ({ title, subtitle, body, order = [1, 1, 0] }) => {
	return (
		<Box flex={[1, 5]} order={order}>
			<Text
				variant="careersTitle"
				color="calcite"
				fontWeight="bold"
				fontFamily={theme.typography.fonts.primary}
				mb={[5]}
			>
				{title}
			</Text>
			<Text variant="careersSubtitle" color="calcite" mb={[6]}>
				{subtitle}
			</Text>
			<Text color="calcite" mb={4}>
				{body}
			</Text>
		</Box>
	);
};
const SectionOne = () => {
	return (
		<Section>
			<Flex width="100%" flexDirection={['column', 'column', 'row']} mt={[0, 0, 6]}>
				<TextContainer
					title="Streamline"
					subtitle="On-Course Ordering with Ease"
					body="Experience a user-friendly interface that allows golfers to order food and
          beverages effortlessly from their mobile devices. With a few taps, they can
          customize their orders, view estimated wait times, and track delivery progress in
          real-time. Offer your golfers convenience and satisfaction, while reducing order
          errors and wait times."
				/>
				<ImageContainer
					flex={[1, 7]}
					order={[0, 0, 0]}
					mb={[6, 6, 0]}
					mt={[, , '-100px']}
					pl={[0, 0, 6]}
				>
					<Box
						display="flex"
						justifyContent={['center', 'center ', 'flex-end']}
						alignSelf={['center']}
					>
						<img src="/images/streamline.png" alt="" />
					</Box>
				</ImageContainer>
			</Flex>
		</Section>
	);
};

const SectionTwo = () => {
	return (
		<Section>
			<Flex width="100%" flexDirection={['column', 'column', 'row']} mt={[0, 0, 6]}>
				<TextContainer
					title="BOOST REVENUE"
					subtitle="and Enhance Customer Experience"
					body="By integrating Swoop's innovative solution, golf clubs can tap into
          increased revenue potential and offer golfers an unmatched on-course
          experience. Swoop's platform encourages impulse purchases, reduces order
          bottlenecks, and provides valuable insights to optimize your offerings,
          leading to happier golfers and a more profitable business."
					order={[1, 1, 1]}
				/>
				<ImageContainer flex={[1, 7]} order={[0]} mb={[7, 7, 0]} mt={[, , '-100px']}>
					<Box
						display="flex"
						justifyContent={['center', 'center', 'flex-start']}
						alignSelf={['center']}
						pr={[0, 0, 7]}
					>
						<img src="/images/boost-revenue.png" alt="" />
					</Box>
				</ImageContainer>
			</Flex>
		</Section>
	);
};

const SectionThree = () => {
	return (
		<Section>
			<Flex
				width="100%"
				flexDirection={['column', 'column', 'row']}
				mt={[0, 0, 7]}
				mb={'8rem'}
			>
				<TextContainer
					title="GAIN"
					subtitle="Valuable Insights with Comprehensive Analytics"
					body="Access detailed reports and analytics to make informed decisions for your golf
          club. Track popular items, peak order times, and golfer preferences, enabling
          you to refine your menu, pricing, and promotions for maximum impact.
          Swoop's data-driven insights help you identify opportunities for growth
          and deliver an exceptional experience for your golfers."
				/>
				<ImageContainer
					flex={[1, 7]}
					order={[0, 0, 0]}
					mb={[7, 7, 0]}
					mt={[, , '-100px']}
				>
					<Box
						display="flex"
						justifyContent={['center', 'center ', 'flex-end']}
						alignSelf={['center']}
						pl={[0, 0, 7]}
					>
						<img src="/images/gain.png" alt="" />
					</Box>
				</ImageContainer>
			</Flex>
		</Section>
	);
};

const CustomDialog = styled(Dialog)`
	overflow: auto;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		width: 100%;
		max-width: 980px;
		margin: 10vh auto;
		padding: ${rem(40)} ${rem(80)};
		// display: flex;
		// flex-direction: column;
		// justify-content: center;
	}
`;

const FormWrapper = styled('form')`
	flex-wrap: wrap;
	overflow: auto;
	display: flex;
	${compose(space, layout, position)}
`;

const CustomFormInput = styled(FormInput)``;

const ContactModal = ({ showDialog, close }) => {
	const [state, handleSubmit] = useForm('xqkjyarw');
	const formRef = useRef(null);

	useEffect(() => {
		if (state.succeeded) {
			setTimeout(() => {
				close();
			}, 2000);
		}
	}, [state]);

	return (
		<CustomDialog isOpen={showDialog} onDismiss={close}>
			<Flex justifyContent="flex-end">
				<HamburgerMenu isDark isOpen onClick={close} />
			</Flex>
			<Text
				variant="h1"
				color="sage"
				fontWeight="bold"
				fontFamily={theme.typography.fonts.tertiary}
				mb={[5]}
			>
				Get Started.
			</Text>
			<Text
				variant="h2"
				color="sage"
				fontWeight="bold"
				fontFamily={theme.typography.fonts.secondary}
				mb={[5]}
			>
				Sign up to intergrate your course with Swoop in 24 Hours.
			</Text>
			<FormWrapper flexWrap="wrap" mx={-2} ref={formRef} onSubmit={handleSubmit}>
				<Box px={2} py={2} mb={3} width={[1, 1]}>
					<CustomFormInput
						type="text"
						variant="h4"
						px={4}
						py={3}
						name="name"
						placeholder="Name"
						maxWidth={['100%']}
						onFocus={(e) => (e.target.placeholder = '')}
						onBlur={(e) => (e.target.placeholder = 'Name')}
					/>
				</Box>
				<Box px={2} py={2} mb={3} width={[1, 1 / 2]}>
					<CustomFormInput
						type="text"
						variant="h4"
						px={4}
						py={3}
						name="email"
						placeholder="Email"
						maxWidth={['100%']}
						onFocus={(e) => (e.target.placeholder = '')}
						onBlur={(e) => (e.target.placeholder = 'Email')}
					/>
				</Box>
				<Box px={2} py={2} mb={3} width={[1, 1 / 2]}>
					<CustomFormInput
						type="text"
						variant="h4"
						px={4}
						py={3}
						name="job"
						placeholder="Job Title"
						maxWidth={['100%']}
						onFocus={(e) => (e.target.placeholder = '')}
						onBlur={(e) => (e.target.placeholder = 'Job Title')}
					/>
				</Box>
				<Box px={2} py={2} mb={3} width={[1, 1 / 2]}>
					<CustomFormInput
						type="text"
						variant="h4"
						px={4}
						py={3}
						name="course"
						placeholder="Course Name"
						maxWidth={['100%']}
						onFocus={(e) => (e.target.placeholder = '')}
						onBlur={(e) => (e.target.placeholder = 'Course Name')}
					/>
				</Box>
				<Box px={2} py={2} mb={3} width={[1, 1 / 2]}>
					<CustomFormInput
						type="text"
						variant="h4"
						px={4}
						py={3}
						name="website"
						placeholder="Course Website"
						maxWidth={['100%']}
						onFocus={(e) => (e.target.placeholder = '')}
						onBlur={(e) => (e.target.placeholder = 'Course Website')}
					/>
				</Box>
				<Box px={2} py={2} mb={3} width={[1, 1]}>
					<CustomFormInput
						type="text"
						variant="h4"
						px={4}
						py={3}
						name="address"
						placeholder="Course Address"
						maxWidth={['100%']}
						onFocus={(e) => (e.target.placeholder = '')}
						onBlur={(e) => (e.target.placeholder = 'Course Address')}
					/>
				</Box>
				<Box px={2} py={2} mb={3} width={[1, 1 / 2]}>
					<CustomFormInput
						type="text"
						variant="h4"
						px={4}
						py={3}
						name="city"
						placeholder="Course City"
						maxWidth={['100%']}
						onFocus={(e) => (e.target.placeholder = '')}
						onBlur={(e) => (e.target.placeholder = 'Course City')}
					/>
				</Box>
				<Box px={2} py={2} mb={3} width={[1, 1 / 2]}>
					<CustomFormInput
						type="text"
						variant="h4"
						px={4}
						py={3}
						name="state"
						placeholder="Course State"
						maxWidth={['100%']}
						onFocus={(e) => (e.target.placeholder = '')}
						onBlur={(e) => (e.target.placeholder = 'Course State')}
					/>
				</Box>
				<Box px={2} py={2} mb={3} width={[1, 1 / 2]}>
					<MenuButton
						textAlign={'center'}
						mr={['0 !important']}
						color="orange"
						title={state.succeeded ? 'Thanks for joining!' : 'Submit'}
						type="submit"
					/>
				</Box>
			</FormWrapper>
		</CustomDialog>
	);
};

export default function Sales() {
	const [showDialog, setShowDialog] = React.useState(false);
	const open = () => setShowDialog(true);
	const close = () => setShowDialog(false);
	return (
		<>
			<Hero
				title="Free On-Course Food & Beverage Delivery"
				subtitle={null}
				body="Elevate your golfer experience and increase revenue with Swoop's innovative mobile ordering platform. Get started today, for free."
				hasCta={false}
				hasCircles={false}
				hasPin={true}
				hasModal={true}
				titleWidths={['100%', '100%', '100%']}
				bodyWidths={['100%', '100%', '60%']}
				src="/images/golf-cart.png"
				handleClick={open}
			/>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<NewsletterSection
				title="Tee Off."
				body="Join the Swoop scoop. Get the latest news, find events, and receive deals."
				imgSrc="/elements/old-fashioned.png"
				hasCTA={true}
			/>
			<ContactModal showDialog={showDialog} close={close} />
		</>
	);
}
