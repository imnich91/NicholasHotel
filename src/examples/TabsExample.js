import React from 'react';
import Tabs from 'coreui/lib/components/Tabs';

const TabPane = Tabs.TabPane;

const TabsExample = () => (
  <div className="example">
    <h3>Tabs</h3>
    <Tabs activeTabKey="0">
      <TabPane tabKey="0" text="Tab 1">Tab 1 Content</TabPane>
      <TabPane tabKey="1" text="Tab 2">Tab 2 Content</TabPane>
    </Tabs>
  </div>
);

export default TabsExample;
