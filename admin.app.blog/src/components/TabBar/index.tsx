import React from 'react';
import { TabItemStyled, TabsStyled } from './styles';

export class TabItem {
  constructor(public value: string | number, public name: string) {}
}

interface TabBarProps {
  currentTab: number;
  setCurrentTab(currentTab: number): void;
  tabsItems: TabItem[];
}

const TabBar: React.FC<TabBarProps> = ({
  currentTab,
  tabsItems,
  setCurrentTab,
}) => {
  return (
    <TabsStyled
      variant="fullWidth"
      value={currentTab}
      onChange={(_, tabIndex: number) => setCurrentTab(tabIndex)}
      aria-label="simple tabs example"
    >
      {tabsItems.map(({ name, value }, index) => (
        <TabItemStyled
          key={`${index}${value}${name}`}
          label={name}
          value={value}
        />
      ))}
    </TabsStyled>
  );
};

export default TabBar;
