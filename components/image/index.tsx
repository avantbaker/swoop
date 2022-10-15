import { rem } from 'polished';
import React, { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import theme from 'styles/theme';

function getWidth(width) {
	return typeof width === 'number' ? rem(width) : width;
}

function getImageProperty(width, property = 'width') {
	if (!width) return;
	if (typeof width === 'number' || typeof width === 'string') {
		return `${property}: ${getWidth(width)};`;
	}
	if (width.length >= 1) {
		const items = width.reduce((acc, cv, idx) => {
			if (idx === 0) {
				acc.push(`${property}: ${getWidth(width[idx])};`);
			} else {
				acc.push(`
          @media screen and (min-width: ${theme.breakpoints[idx - 1]}) {
            ${property}: ${getWidth(width[idx])};
          }
        `);
			}
			return acc;
		}, []);
		return items.join('');
	}
}

const ImageContainer = styled<{ width: number | string | number[] | string[] }>('div')`
	${({ width }) => getImageProperty(width)}
	${({ maxWidth }) => getImageProperty(maxWidth, 'maxWidth')}
	> div {
		position: unset !important;
	}
	.image {
		object-fit: contain;
		width: 100% !important;
		position: relative !important;
		height: unset !important;
	}
`;

type SwoopImageProps = {
	src: string;
	width?: number | string | number[] | string[];
	maxWidth?: number | string | number[] | string[];
	imgProps?: any;
	className?: string;
};
export const SwoopImage: FC<SwoopImageProps> = ({
	src,
	width = '100%',
	maxWidth,
	imgProps,
	...props
}: SwoopImageProps) => {
	return (
		<ImageContainer width={width} maxWidth={maxWidth} {...props}>
			<Image className="image" src={src} layout="fill" {...imgProps} />
		</ImageContainer>
	);
};
