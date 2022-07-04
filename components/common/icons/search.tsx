import * as React from 'react';
import { forwardRef } from 'react';

const Search = ({ height = '24px', width = '24px', ...rest }, ref) => (
	<svg
		width={width}
		height={height}
		xmlns="http://www.w3.org/2000/svg"
		ref={ref}
		{...rest}
	>
		<path
			d="M16.853 17.56A9.458 9.458 0 0 1 10.5 20C5.257 20 1 15.743 1 10.5S5.257 1 10.5 1 20 5.257 20 10.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44ZM10.5 2c4.691 0 8.5 3.809 8.5 8.5S15.191 19 10.5 19 2 15.191 2 10.5 5.809 2 10.5 2Z"
			fill="#FFF"
			stroke="#FFF"
			strokeWidth={0.5}
			fillRule="evenodd"
		/>
	</svg>
);

const ForwardRef = forwardRef(Search);
export default ForwardRef;
