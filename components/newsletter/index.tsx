import Text from 'components/common/text';
import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';
import { rem } from 'polished';
import { MenuButton as MenuItem } from 'components/common/menu-item';
import theme from 'styles/theme';
import { useForm } from '@formspree/react';
import { useRef } from 'react';
import { space } from 'styled-system';

let NewsletterWrapper = styled('form')`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: ${rem(260)} 1fr;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		grid-template-columns: 40% 60%;
		grid-template-rows: 1fr;
	}
`;

NewsletterWrapper = styled(NewsletterWrapper)(space);

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

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		margin-bottom: 0;
		margin-right: ${({ theme }) => rem(theme.space[4])};
	}
`;

const StyledMenuItem = styled('button')`
	padding-top: ${({ theme }) => rem(theme.space[1])};
	padding-bottom: ${({ theme, pb }) => pb || rem(theme.space[1])};
	&:not(:last-of-type) {
		margin-right: ${({ theme }) => rem(theme.space[5])};
	}
`;

const MenuButton = styled(StyledMenuItem)`
	border: 2px solid ${({ theme, color }) => color || theme.colors.orange};
	border-radius: ${({ theme }) => rem(theme.space.xl)};
	padding: ${({ theme }) => `${rem(theme.space.md)} ${rem(theme.space.lg)}`};
	& div {
		text-align: center;
	}
`;

const SubmitButton = styled(MenuButton)`
	background: transparent;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		flex: 0.5;
	}
`;
export const NewsletterSection = ({
	imgSrc = '/elements/burger.png',
	title = 'KEEP UP',
	body = `Join the Swoop scoop. Get the latest news, find events, and receive deals`,
	hasCTA = false,
	...rest
}) => {
	const [state, handleSubmit] = useForm('mvoyanwr');
	const formRef = useRef(null);
	let textProps = {
		color: theme.colors.calcite,
		variant: 'link1',
		textAlign: rest.textAlign || 'left',
		mr: rest.mr,
	};
	return (
		<NewsletterWrapper mb={[7]} ref={formRef} {...rest} onSubmit={handleSubmit}>
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
							name="email"
							placeholder="Email Address"
						/>
						<SubmitButton type="submit" color={theme.colors.calcite}>
							<Text {...textProps}>
								{state.succeeded ? 'Thanks for joining!' : 'Submit'}
							</Text>
						</SubmitButton>
					</Flex>
				)}
				{hasCTA && (
					<Flex>
						<MenuItem href="/contact" color={theme.colors.calcite}>
							Get In Touch
						</MenuItem>
					</Flex>
				)}
			</ContentWrapper>
		</NewsletterWrapper>
	);
};
