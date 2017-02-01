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

    const getFillColor = (status) => {
      if (status === 'measured') {
        return GREEN;
      }
      return 'white';
    };
    const getBorderColor = (status) => {
      if (status === 'active') {
        return BLUE;
      }
      return LIGHTGREY;
    }
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
          {/*Point Top Left */}
          <circle cx={svgSize - refPos} cy={svgSize - refPos} r={measPointSize} fill={getBorderColor(this.props.pointOne.status)} />
          <circle cx={svgSize - refPos} cy={svgSize - refPos} r={measPointSize - measPointBoarder} fill={getFillColor(this.props.pointOne.status)} />
          {/*Point Top Right */}
          <circle cx={refPos} cy={svgSize - refPos} r={measPointSize} fill={getBorderColor(this.props.pointTwo.status)} />
          <circle cx={refPos} cy={svgSize - refPos} r={measPointSize - measPointBoarder} fill={getFillColor(this.props.pointTwo.status)} />
          {/*Point Bottom Right */}
          <circle cx={refPos} cy={refPos} r={measPointSize} fill={getBorderColor(this.props.pointThree.status)} />
          <circle cx={refPos} cy={refPos} r={measPointSize - measPointBoarder} fill={getFillColor(this.props.pointThree.status)} />
          {/*Point Bottom Left */}
          <circle cx={svgSize - refPos} cy={refPos} r={measPointSize} fill={getBorderColor(this.props.pointFour.status)} />
          <circle cx={svgSize - refPos} cy={refPos} r={measPointSize - measPointBoarder} fill={getFillColor(this.props.pointFour.status)} />


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
