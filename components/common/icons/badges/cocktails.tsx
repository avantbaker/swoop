const Cocktails = ({ width = 76, height = 97, ...rest }) => (
	<svg
		width={76}
		height={97}
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		{...rest}
	>
		<defs>
			<filter
				x="-35.6%"
				y="-24%"
				width="171.2%"
				height="150.7%"
				filterUnits="objectBoundingBox"
				id="a"
			>
				<feMorphology
					radius={2}
					operator="dilate"
					in="SourceAlpha"
					result="shadowSpreadOuter1"
				/>
				<feOffset dy={1} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
				<feGaussianBlur
					stdDeviation={4}
					in="shadowOffsetOuter1"
					result="shadowBlurOuter1"
				/>
				<feColorMatrix
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0809385927 0"
					in="shadowBlurOuter1"
				/>
			</filter>
			<rect id="b" x={0} y={0} width={52} height={73} rx={18.774} />
		</defs>
		<g fill="none" fillRule="evenodd">
			<g transform="translate(12 11)">
				<use fill="#000" filter="url(#a)" xlinkHref="#b" />
				<use fill="#FFF" xlinkHref="#b" />
			</g>
			<text
				fontFamily="Helvetica"
				fontSize={5.12}
				fill="#989898"
				transform="translate(12 11)"
			>
				<tspan x={13.48} y={53.083}>
					{'COCKTAILS'}
				</tspan>
				{/* <tspan x={24.575} y={59.083}>
					{'S'}
				</tspan> */}
			</text>
			<path
				d="M41.34 28.624a.222.222 0 0 0-.172-.081h-6.336c-.066 0-.129.03-.171.082a.228.228 0 0 0-.049.185c.018.1 1.819 10.07 2.743 14.089a.67.67 0 0 0 .421.493v2.806h-1.7a.225.225 0 0 0-.224.227c0 .125.1.226.224.226h3.848a.225.225 0 0 0 .224-.226c0-.125-.1-.227-.224-.227h-1.7v-2.812a.674.674 0 0 0 .408-.487c.845-3.626 2.737-13.985 2.756-14.089a.229.229 0 0 0-.048-.186Zm-.441.371-.245 1.326c-.374-.148-.762-.3-1.472-.3s-1.097.152-1.471.3c-.352.139-.684.27-1.31.27-.487 0-.789-.08-1.04-.169l-.26-1.426h5.798Zm-2.703 13.8c-.01.042-.054.181-.203.181-.145 0-.19-.125-.202-.18-.654-2.843-1.75-8.682-2.337-11.87.24.065.54.118.948.118.709 0 1.096-.153 1.471-.301.352-.139.684-.27 1.309-.27.626 0 .958.132 1.31.27l.078.031c-.599 3.226-1.762 9.396-2.374 12.02Z"
				fill="#FF8B00"
				fillRule="nonzero"
			/>
		</g>
	</svg>
);

export default Cocktails;
