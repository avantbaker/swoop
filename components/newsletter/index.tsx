import Text from 'components/common/text';
import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';
import { rem } from 'polished';
import { MenuButton } from 'components/common/menu-item';
import theme from 'styles/theme';

const NewsletterWrapper = styled('div')`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: ${rem(260)} 1fr;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		grid-template-columns: 40% 60%;
		grid-template-rows: 1fr;
	}
`;
const ImageWrapper = styled('div')`
	background-image: url(${({ src }) => src});
	background-position: center;
	background-size: cover;
	height: 100%;
	img {
		display: none;
		height: 100%;
	}
`;
const ContentWrapper = styled(Flex)`
	background: ${({ theme }) => theme.colors.orange};
`;
const CustomInput = styled('input')`
	border: 2px solid ${({ theme, color }) => color || theme.colors.orange};
	border-radius: ${({ theme }) => rem(theme.space.xl)};
	padding: ${({ theme }) => `${rem(theme.space.md)} ${rem(theme.space.lg)}`};
	background: transparent;
	color: ${({ theme, color }) => color || theme.colors.calcite};
	margin-bottom: ${({ theme }) => rem(theme.space[4])};
	flex: 1;

	::placeholder {
		text-transform: uppercase;
		color: ${({ theme, color }) => color || theme.colors.calcite};
		opacity: 0.8;
	}
	:-ms-input-placeholder {
		text-transform: uppercase;
		color: ${({ theme, color }) => color || theme.colors.calcite};
	}
	::-ms-input-placeholder {
		text-transform: uppercase;
		color: ${({ theme, color }) => color || theme.colors.calcite};
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		margin-bottom: 0;
		margin-right: ${({ theme }) => rem(theme.space[4])};
	}
`;
export const NewsletterSection = ({
	imgSrc = '/elements/burger.png',
	title = 'Keep Up',
	body = `Join the Byrdi blast list get the latest news, find events, and recieve deals.`,
	hasCTA = false,
	...rest
}) => {
	return (
		<NewsletterWrapper {...rest}>
			<ImageWrapper src={imgSrc}>
				<img src={imgSrc} alt="Newsletter Profile Image" />
			</ImageWrapper>
			<ContentWrapper py={6} px={[4, 6, 7]} flexDirection={['column']}>
				<Flex mb={[5]} flexDirection={['column']}>
					<Text variant="h1" mb={[4]} color="calcite">
						{title}
					</Text>
					<Text color="calcite" maxWidth={[, '60%']}>
						{body}
					</Text>
				</Flex>
				{!hasCTA && (
					<Flex flexDirection={['column', 'row']}>
						<CustomInput
							color={theme.colors.calcite}
							type="text"
							placeholder="Email Address"
						/>
						<MenuButton color={theme.colors.calcite}>Submit</MenuButton>
					</Flex>
				)}
				{hasCTA && (
					<Flex>
						<MenuButton color={theme.colors.calcite}>Get In Touch</MenuButton>
					</Flex>
				)}
			</ContentWrapper>
		</NewsletterWrapper>
	);
};
