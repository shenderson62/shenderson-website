import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Screen.css';

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

function Screen({ children, activeTab: initialActiveTab }) {
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const location = useLocation();

  React.useEffect(() => {
    // Update the active tab based on the current route
    const currentTab = tabs.find((tab) =>
      location.pathname.toLowerCase().startsWith(`/${tab.id}`)
    );
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [location.pathname]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="screen-container">
      <div className="browser">
        <div className="title-bar">
          <div className="tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={`/${tab.id.toLowerCase()}`}
                className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </Link>
            ))}
          </div>
          <div className="buttons">
            <div className="minimize-button" />
            <div className="close-button" />
          </div>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Screen;
