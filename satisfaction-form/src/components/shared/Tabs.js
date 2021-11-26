import React from 'react';
import './tabs.scss';

const Tabs = ({activeTab}) => (
<div>
  <div className="satisfactionapp__tabs__wrapper">
    <div className="satisfactionapp__tabs">
      <div className={`satisfactionapp__tabs__tab ${activeTab === 0 ? "--active" : ""}`}>Présentation</div>
      <div className={`satisfactionapp__tabs__tab ${activeTab === 1 ? "--active" : ""}`}>Votre avis</div>
      <div className={`satisfactionapp__tabs__tab ${activeTab === 2 ? "--active" : ""}`}>Confirmation</div>
    </div>

  </div>

</div>
)

export default Tabs;