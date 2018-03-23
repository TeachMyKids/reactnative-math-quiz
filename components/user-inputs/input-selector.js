import React from 'react';
import * as inputs from './index';

function selector(props) {
  switch (props.record.input) {
    case inputs.SelectOne:
      return (
        <inputs.SelectOne
          onAnswer={props.onAnswer}
          answers={props.record.answers}
          onRef={props.onRef}
          onResultChange={props.onResultChange}
        />
      );
      break;
    case inputs.NumberButtons:
      return (
        <inputs.NumberButtons
          onAnswer={props.onAnswer}
          onRef={props.onRef}
          onResultChange={props.onResultChange}
        />
      );
      break;
  }
}

export default selector;