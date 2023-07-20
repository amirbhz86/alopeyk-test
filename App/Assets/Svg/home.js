import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill={props?.color} viewBox="0 0 41.45 41.47" width={props?.width} height={props?.height}>
    <Defs></Defs>
    <G id="Layer_2" data-name="Layer 2">
      <G id="Layer_1-2" data-name="Layer 1">
        <Path
          className="cls-1"
          d="M20.72 41.47H11.8a7.4 7.4 0 0 1-7.36-7.36v-8.88a1.46 1.46 0 0 1 1-1.43 1.33 1.33 0 0 1 1.56.4 2.09 2.09 0 0 1 .39 1.14v8.69a4.4 4.4 0 0 0 4.49 4.47h17.67A4.4 4.4 0 0 0 34 34v-8.75a1.5 1.5 0 0 1 1.31-1.54A1.48 1.48 0 0 1 37 24.82a2.45 2.45 0 0 1 0 .55v8.83a7.37 7.37 0 0 1-7.21 7.26h-9.07ZM20.62 3.54a2.85 2.85 0 0 1-.31.46L2.73 21.6a1.63 1.63 0 0 1-1.56.59 1.47 1.47 0 0 1-.79-2.43 4.11 4.11 0 0 1 .29-.3Q10 10.07 19.44.69a1.54 1.54 0 0 1 2.56 0l18.8 18.8a1.72 1.72 0 0 1 .64 1.23 1.45 1.45 0 0 1-.87 1.37 1.4 1.4 0 0 1-1.56-.2c-.14-.12-.26-.26-.4-.39L21.14 4a3.65 3.65 0 0 1-.32-.45Z"
        />
      </G>
    </G>
  </Svg>
)

export default SvgComponent
