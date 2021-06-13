import type { Year } from '@types';

import { useState } from 'react';

import Charts from '@components/Charts';
import Table from '@components/Table';

const Tabs: React.FC = () => {
  const now = 2021;
  const [openTab, setOpenTab] = useState(0);

  return (
    <div cx="wrapper">
      <ul cx="list-wrapper">
        {[0, 1].map((i) => (
          <li cx="tab" key={`placement-tab-${i}`}>
            <a
              cx="tab-link"
              style={
                openTab === i
                  ? { color: '#fff', background: '#0e407c' }
                  : { background: '#fff', color: '#0e407c' }
              }
              onClick={(e): void => {
                e.preventDefault();
                setOpenTab(i);
              }}
              href={`#placement-stats-${now - i}`}
            >
              {now - i - 1} – {now - i}
            </a>
          </li>
        ))}
      </ul>
      <div cx="tab-content">
        {[0, 1].map((i) => (
          <div
            style={{ display: openTab === i ? 'block' : 'none' }}
            id={`placement-stats-${now - i}`}
            key={`placement-content-${i}`}
          >
            <Table year={(now - i) as Year} />
            <Charts year={(now - i) as Year} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;