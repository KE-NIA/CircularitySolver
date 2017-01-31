import React from 'react';

export default class CircleSvg extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const GREEN =  '#7cc05b';
    const BLUE =  '#0261ba';
    const LIGHTGREY = '#cbcbcb';
    const DARKGREY = '#616161';

    // tube
    let svgSize = 400;
    let circleBorder = 40;
    let circleCenter = svgSize / 2.0;

    // measPoint
    let measPointSize = 40;
    let measPointBoarder = 16;
    let refPos = circleCenter + (Math.sin(Math.PI * 0.25) * (circleCenter - (circleBorder * 0.5)));

    let flangePoints = null;
    if(this.props.showFlangePoints) {
      flangePoints = (
        <g>
          <circle cx={refPos} cy={refPos} r={measPointSize} fill={LIGHTGREY} />
          <circle cx={refPos} cy={refPos} r={measPointSize - measPointBoarder} fill={'white'} />
          <circle cx={svgSize - refPos} cy={refPos} r={measPointSize} fill={LIGHTGREY} />
          <circle cx={svgSize - refPos} cy={refPos} r={measPointSize - measPointBoarder} fill={'white'} />
          <circle cx={refPos} cy={svgSize - refPos} r={measPointSize} fill={BLUE} />
          <circle cx={refPos} cy={svgSize - refPos} r={measPointSize - measPointBoarder} fill={'white'} />
          <circle cx={svgSize - refPos} cy={svgSize - refPos} r={measPointSize} fill={LIGHTGREY} />
          <circle cx={svgSize - refPos} cy={svgSize - refPos} r={measPointSize - measPointBoarder} fill={GREEN} />
        </g>
      );
    }

    return (
      <svg width={svgSize} height={svgSize}>
        <circle cx={circleCenter} cy={circleCenter} r={circleCenter} fill={DARKGREY} />
        <circle cx={circleCenter} cy={circleCenter} r={circleCenter - circleBorder} fill={'white'} />
        {flangePoints}
      </svg>
    );
  }
}
