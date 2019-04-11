import React from 'react';

import ResultScreen from './ResultScreen/ResultScreen';
import ComputationScreen from './ComputationScreen/ComputationScreen';

const screen = () => (
    <section className="screen">
      <ResultScreen />
      <ComputationScreen />
    </section>
);

export default screen;