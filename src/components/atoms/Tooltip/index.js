import * as React from 'react';

const Tooltip = ({ text, content }) => {
  return (
    <div class="tooltip">
      {content}
      <span class="tooltiptext">{text}</span>
    </div>
  );
};

export default Tooltip;
