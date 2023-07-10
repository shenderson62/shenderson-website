import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Screen.css';

// Tabs open on the screen
// /id represents the corresponding route
const tabs = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

function Screen({ children, activeTab: initialActiveTab }) {
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const location = useLocation();

  useEffect(() => {
    // Update the active tab based on the current route
    const currentTab = tabs.find((tab) =>
      location.pathname.toLowerCase().startsWith(`/${tab.id}`)
    );
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [location.pathname]);

  // applies 'active' CSS styling
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
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
            <button className="minimize-button" />
            <button className="close-button" />
          </div>
        </div>
        <div className="content">{children}</div>
      </div>
  );
}

export default Screen;
