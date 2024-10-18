import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

export const CalendarIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <Path
        fillRule="evenodd"
        fill={props.fill} // fill dinámico basado en los props
        d="M4.5 1a.5.5 0 0 1 .5.5V2h5v-.5a.5.5 0 0 1 1 0V2h1.5A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2H4v-.5a.5.5 0 0 1 .5-.5M10 3v.5a.5.5 0 0 0 1 0V3h1.5a.5.5 0 0 1 .5.5V5H2V3.5a.5.5 0 0 1 .5-.5H4v.5a.5.5 0 0 0 1 0V3zM2 6v6.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6zm5 1.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M9.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m.5 1.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M9 9.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M7.5 9a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M5 9.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M3.5 9a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M3 11.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const MenuIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill={props.fill} d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
    </Svg>
  );
};

export const ListIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <G
        fill={props.fill}
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <Path
          d="M20 10h24M20 24h24M20 38h24M5 7l6 6m0-6-6 6"
          fill={props.fill} // fill dinámico basado en los props
        />
        <Circle cx={8} cy={24} r={4} />
        <Circle cx={8} cy={38} r={4} />
      </G>
    </Svg>
  );
};
