import React, { useState } from 'react';
import accordionData from '../Accordion2/data1';
import './Style.css';

const Index = () => {
  const [select, setSelect] = useState(null);
  const [multiSelect, setMultiSelect] = useState([]);
  const [enableMulti, setEnableMulti] = useState(false);

  const handleClick = (id) => {
    if (enableMulti) {
      if (multiSelect.includes(id)) {
        setMultiSelect(multiSelect.filter(item => item !== id));
      } else {
        setMultiSelect([...multiSelect, id]);
      }
    } else {
      setSelect(select === id ? null : id);
    }
  };

  const isOpen = (id) => {
    return enableMulti ? multiSelect.includes(id) : select === id;
  };

  return (
    <div className="accordion-wrapper">
      <button onClick={() => setEnableMulti(!enableMulti)} className="toggle-btn">
        {enableMulti ? 'Switch to Single Accordion' : 'Switch to Multi Accordion'}
      </button>

      <div className="accordion">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((dataitem) => (
            <div className="accordion-item" key={dataitem.id}>
              <div
                className="accordion-header"
                onClick={() => handleClick(dataitem.id)}
              >
                <h3>{dataitem.title}</h3>
                <span>{isOpen(dataitem.id) ? '-' : '+'}</span>
              </div>
              {isOpen(dataitem.id) && (
                <div className="accordion-content">{dataitem.content}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data is available</div>
        )}
      </div>
    </div>
  );
};

export default Index;
