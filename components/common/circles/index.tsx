import { Box } from 'rebass/styled-components';
import styled from 'styled-components';
import { rem } from 'polished';

export const Circles = styled(Box)`
	position: absolute;
	height: ${rem(270)};
	width: ${rem(270)};
	background-color: transparent;
	border: 0.5px solid ${({ theme }) => theme.colors.calcite};
	border-radius: 50%;
	top: -80px;
	left: -40px;
	&::after {
		content: '';
		display: block;
		position: absolute;
		height: ${rem(60)};
		width: ${rem(60)};
		background-color: transparent;
		border: 0.5px solid ${({ theme }) => theme.colors.calcite};
		border-radius: 50%;
		right: -15%;
		bottom: 30%;
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		height: ${rem(450)};
		width: ${rem(450)};
		top: -140px;
		left: -90px;

		&::after {
			height: ${rem(105)};
			width: ${rem(105)};
			right: -50px;
			bottom: 100px;
		}
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
		height: ${rem(650)};
		width: ${rem(650)};
		top: -18%;
		left: -15%;

		&::after {
			height: ${rem(125)};
			width: ${rem(125)};
			right: -11%;
			bottom: 24%;
		}
	}
`;
