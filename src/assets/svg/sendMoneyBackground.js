import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={164}
            height={209}
            viewBox="0 0 164 209"
            {...props}
        >
            <G fill="none" fillRule="evenodd">
                <Rect width={164} height={209} rx={15} fill="#0573BF" />
                <Path
                    fill="#FFF"
                    d="M149.003 0c8.285 0 15 6.716 15 15v140.696c-14.822 6-31.025 9.304-48 9.304C64.675 165 20.403 134.788 0 91.176L.003 15c0-8.284 6.716-15 15-15h134z"
                    opacity={0.093}
                />
            </G>
        </Svg>
    )
}

export default SvgComponent
