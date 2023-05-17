import React from 'react';
import { Box } from 'rebass/styled-components';
import styled from 'styled-components';

export const Container = styled<Box>(Box)`
	width: 38px;
	height: 38px;
	text-align: center;
	box-sizing: border-box;
	font-size: 26px;
`;

export const Label = styled.label`
	background: transparent;
	border-radius: 100%;
	width: 38px;
	height: 38px;
	border: 1px solid
		${({ theme, isOpen, isDark }) =>
			isOpen ? theme.colors.black : isDark ? theme.colors.orange : theme.colors.white};
	margin-left: -20px;
	position: absolute;
	color: #ffffff;
	text-align: center;
	line-height: 80px;
	-webkit-transition: -webkit-transform ease-out 200ms;
	transition: -webkit-transform ease-out 200ms;
	transition: transform ease-out 200ms;
	transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;
	-webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
	transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
	-webkit-transition-duration: 400ms;
	transition-duration: 400ms;
	-webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);
	transform: scale(1.1, 1.1) translate3d(0, 0, 0);
	cursor: none;
	z-index: 2;

	.line-1 {
		-webkit-transform: translate3d(0, -8px, 0);
		transform: translate3d(0, -8px, 0);
	}

	.line-2 {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}

	.line-3 {
		-webkit-transform: translate3d(0, 8px, 0);
		transform: translate3d(0, 8px, 0);
	}
`;

export const HiddenInput = styled.input`
	display: none;

	:checked + ${Label} .line-1 {
		-webkit-transform: translate3d(0, 0, 0) rotate(45deg);
		transform: translate3d(0, 0, 0) rotate(45deg);
	}

	:checked + ${Label} .line-2 {
		-webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);
		transform: translate3d(0, 0, 0) scale(0.1, 1);
	}

	:checked + ${Label} .line-3 {
		-webkit-transform: translate3d(0, 0, 0) rotate(-45deg);
		transform: translate3d(0, 0, 0) rotate(-45deg);
	}
`;

export const Line = styled.span`
	width: 25px;
	height: 1px;
	background: ${({ theme, isOpen, isDark }) =>
		isOpen ? theme.colors.black : isDark ? theme.colors.orange : theme.colors.white};
	display: block;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -12.5px;
	margin-top: -1.5px;
	-webkit-transition: -webkit-transform 200ms;
	transition: -webkit-transform 200ms;
	transition: transform 200ms;
	transition: transform 200ms, -webkit-transform 200ms;
`;

export default function HamburgerMenu({
	toggleMobileNav = () => {},
	isOpen,
	isDark,
	...rest
}:
	| {
			isDark: boolean;
			toggleMobileNav: () => void;
			isOpen: boolean;
	  }
	| Box) {
	return (
		<>
			<Container {...rest}>
				<HiddenInput
					type="checkbox"
					href="#"
					name="menu-open"
					id="menu-open"
					checked={isOpen}
					onChange={toggleMobileNav}
				/>
				<Label isOpen={isOpen} isDark={isDark} htmlFor="menu-open">
					<Line isOpen={isOpen} isDark={isDark} className="line-1"></Line>
					<Line isOpen={isOpen} isDark={isDark} className="line-2"></Line>
					<Line isOpen={isOpen} isDark={isDark} className="line-3"></Line>
				</Label>
			</Container>
		</>
	);
}
