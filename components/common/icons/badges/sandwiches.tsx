const Sandwhiches = ({ width = 76, height = 97, ...rest }) => (
	<svg
		width={width}
		height={height}
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		{...rest}
	>
		<title>{'Group 4 Copy'}</title>
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
			<rect id="b" x={0} y={0} width={width - 20} height={height - 20} rx={18.774} />
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
				<tspan x={12.345} y={53.083}>
					{'SANDWICH'}
				</tspan>
				{/* <tspan x={22.868} y={59.083}>
          {"ES"}
        </tspan> */}
			</text>
			<g fill="#FF8B00" fillRule="nonzero">
				<path d="M46.567 41.325H29.322a.486.486 0 0 0-.477.487c.006 1.423 1.14 2.573 2.54 2.576H44.51c1.398-.004 2.532-1.154 2.538-2.576a.486.486 0 0 0-.48-.487Zm-2.058 2.622H31.385c-1.16-.002-2.102-.955-2.106-2.135 0-.025.02-.046.045-.046h17.243c.026 0 .046.02.046.046-.005 1.179-.945 2.132-2.104 2.135ZM38.42 30.24h-.95c-4.762.006-8.62 3.93-8.625 8.77 0 .122.047.239.132.325a.45.45 0 0 0 .321.135h17.295c.25 0 .454-.206.454-.46-.005-4.84-3.864-8.764-8.626-8.77Zm8.173 8.79H29.298a.02.02 0 0 1-.014-.006.02.02 0 0 1-.005-.014c.004-4.597 3.669-8.323 8.192-8.329h.95c4.523.006 8.187 3.732 8.192 8.329a.02.02 0 0 1-.02.02ZM48.522 39.728a7.329 7.329 0 0 0-2.699.452c-.82.305-1.689.451-2.562.43a6.889 6.889 0 0 1-2.562-.43A7.329 7.329 0 0 0 38 39.728a7.329 7.329 0 0 0-2.699.452c-.82.305-1.69.451-2.562.43a6.886 6.886 0 0 1-2.562-.43 7.327 7.327 0 0 0-2.7-.452.219.219 0 0 0-.216.22c0 .123.097.221.217.221a6.886 6.886 0 0 1 2.562.43c.864.32 1.78.473 2.699.452a7.333 7.333 0 0 0 2.699-.44A6.883 6.883 0 0 1 38 40.168a6.889 6.889 0 0 1 2.562.43c.865.32 1.78.473 2.7.452.918.02 1.834-.133 2.698-.452.82-.304 1.69-.45 2.562-.43.12 0 .217-.098.217-.22a.219.219 0 0 0-.217-.22Z" />
			</g>
		</g>
	</svg>
);

export default Sandwhiches;
