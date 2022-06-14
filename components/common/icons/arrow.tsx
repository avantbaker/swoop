const ArrowControl = ({ width = 25, height = 26, color = '#FF8B00', ...props }) => (
	<svg width={25} height={26} xmlns="http://www.w3.org/2000/svg" {...props}>
		<title>{'Group 2'}</title>
		<g stroke={color} fill="none" fillRule="evenodd">
			<path d="M24.5.953H.5v24h24z" />
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m10.057 7.289 6.163 6.164-6.163 6.164"
			/>
		</g>
	</svg>
);

export default ArrowControl;
