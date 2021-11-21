import * as React from 'react';
import JiraCard from './../components/organisms/JiraCard';

const columns = [
  {
    id: 'to-do',
    name: 'To Do',
    tasks: ['abcdsd', 'xchjkfdh'],
  },
  {
    id: 'groomed',
    name: 'Groomed',
    tasks: ['123'],
  },
  {
    id: 'in-progress',
    name: 'In Progress',
    tasks: [],
  },
  {
    id: 'in-review',
    name: 'In Review',
    tasks: [],
  },
  {
    id: 'completed',
    name: 'Completed',
    tasks: ['456', 'test'],
  },
];

const Tasks = [
  {
    id: 'abcdsd',
    title: 'React development work for cash+',
    description: 'Sample description 1',
    assignee: 'rxkargh', // user id
    priority: 'p1', // from priorities array
    created_at: 1637098669287,
    updated_at: 1637098669287,
  },
  {
    id: 'xchjkfdh',
    title: 'sample description 2',
    description: 'Sample development ticket',
    assignee: 'chgfjke',
    priority: 'p2',
    created_at: 1637098669287,
    updated_at: 1637098669287,
  },
  {
    id: '123',
    title: 'sample description 3',
    description: 'Develop the card items',
    assignee: 'chgfjke',
    priority: 'p2',
    created_at: 1637098669287,
    updated_at: 1637098669287,
  },
  {
    id: '456',
    title: 'sample description 4',
    description: 'Develop the card items',
    assignee: 'chgfjke',
    priority: 'p2',
    created_at: 1637098669287,
    updated_at: 1637098669287,
  },
  {
    id: 'test',
    title: 'sample description 4',
    description: 'Develop the card items',
    assignee: 'chgfjke',
    priority: 'p2',
    created_at: 1637098669287,
    updated_at: 1637098669287,
  },
];

const Dashboard = () => {
  return (
    <div>
      <div class="columns">
        {columns.map((item, index) => (
          <div class="grid_column">
            <div class="header_item">{item.name}</div>
            <JiraCard
              content={Tasks.map((it) =>
                item.tasks.includes(it.id) ? it : {}
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
