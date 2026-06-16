import { ReactNode } from 'react';
import { cn } from '../../utils/helpers';

interface TabsProps {
  tabs: Array<{
    id: string;
    label: string;
    content: ReactNode;
    icon?: ReactNode;
  }>;
  defaultTab?: string;
  onChange?: (tabId: string) => void;
}

export function Tabs({ tabs, defaultTab, onChange }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="w-full">
      <div className="flex gap-4 border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              'px-4 py-3 font-semibold text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-2',
              activeTab === tab.id
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-secondary'
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{activeTabContent}</div>
    </div>
  );
}

import React from 'react';
