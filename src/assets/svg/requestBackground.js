import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={165}
            height={209}
            viewBox="0 0 165 209"
            {...props}
        >
            <G transform="translate(-.002)" fill="none" fillRule="evenodd">
                <Rect width={164} height={209} x={0.002} fill="#0049A9" rx={15} />
                <Path
                    fill="#FFF"
                    d="M15.003 209c-8.284 0-15-6.716-15-15l-.002-64.632C23.234 97.048 61.161 76 104.003 76c21.683 0 42.106 5.391 60.003 14.906L164.003 194c0 8.284-6.716 15-15 15h-134z"
                    opacity={0.05}
                />
            </G>
        </Svg>
    )
}

export default SvgComponent
