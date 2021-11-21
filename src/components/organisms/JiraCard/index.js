import * as React from 'react';
import Card from '../../atoms/Card';
import TickButton from '../../molecules/TickButton';

const JiraCard = ({ content }) => {
  console.log('con', content);
  const contentItem = (item) => {
    console.log('iii', item);
    return (
      <div>
        <div class="card_title">{item.title}</div>
        <div class="card_description">{item.description}</div>
        <img
          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          class="user"
        ></img>
        <TickButton />
      </div>
    );
  };
  return (
    <div>
      {content.map((item) =>
        item.hasOwnProperty('id') ? <Card content={contentItem(item)} /> : null
      )}
    </div>
  );
};

export default JiraCard;
