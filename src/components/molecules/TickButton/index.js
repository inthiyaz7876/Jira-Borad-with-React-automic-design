import * as React from 'react';
import Button from '../../atoms/Button';
import TickMark from '../../atoms/TickMark';

const TickButton = () => {
  return (
    <div class="check_button">
      <Button className={'tick_button'} name={<TickMark />} />
    </div>
  );
};

export default TickButton;
