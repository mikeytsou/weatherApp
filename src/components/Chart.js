import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = (props) => {
  function average(data) {
    return _.round(_.sum(data) / data.length);
  }

  return (
    <div>
      <Sparklines height={80} width={150} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units} </div>
    </div>

  );
};

export default Chart;
