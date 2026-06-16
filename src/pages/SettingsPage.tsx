import React, { useState, useEffect } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function SettingsPage() {
  const [siteName, setSiteName] = useState('My Housing Society');
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    const s = localStorage.getItem('hsms_siteName');
    if (s) setSiteName(s);
  }, []);

  const save = () => {
    localStorage.setItem('hsms_siteName', siteName);
    alert('Settings saved');
  };

  return (
    <MainLayout>
      <PageHeader title="Settings" description="Configure society settings and permissions" />
      <Card>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">Site Name</label>
            <input value={siteName} onChange={(e) => setSiteName(e.target.value)} className="input w-full" />
          </div>

          <div className="flex items-center gap-3">
            <input id="notif" type="checkbox" checked={notifications} onChange={() => setNotifications(v => !v)} />
            <label htmlFor="notif" className="text-sm">Enable email notifications</label>
          </div>

          <div className="flex justify-end">
            <Button onClick={save}>Save Settings</Button>
          </div>
        </div>
      </Card>
    </MainLayout>
  );
}
