import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { motion } from 'framer-motion';
import { Plus, Heart, MessageCircle, Eye, Search, Pin } from 'lucide-react';
import { mockNotices } from '../utils/mockData';

export function NoticesPage() {
  const [notices] = useState(mockNotices);
  const [searchQuery, setSearchQuery] = useState('');
  const [likedNotices, setLikedNotices] = useState<Set<string>>(new Set());

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notice.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleLike = (noticeId: string) => {
    const newLikes = new Set(likedNotices);
    if (newLikes.has(noticeId)) {
      newLikes.delete(noticeId);
    } else {
      newLikes.add(noticeId);
    }
    setLikedNotices(newLikes);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      maintenance: 'bg-blue-100 text-blue-800',
      general: 'bg-gray-100 text-gray-800',
      emergency: 'bg-red-100 text-red-800',
      event: 'bg-purple-100 text-purple-800',
    };
    return colors[category] || colors['general'];
  };

  return (
    <MainLayout>
      <PageHeader
        title="Notices"
        description="Official society announcements and updates"
        actions={
          <Button size="md">
            <Plus size={18} />
            Post Notice
          </Button>
        }
      />

      <Card className="mb-6">
        <Input
          placeholder="Search notices..."
          icon={<Search size={18} />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Card>

      <div className="space-y-4">
        {filteredNotices.map((notice, index) => (
          <motion.div
            key={notice.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className="border-l-4 border-primary hover:shadow-lg"
              hover={true}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {notice.isPinned && (
                      <Pin size={18} className="text-warning fill-current" />
                    )}
                    <h3 className="text-xl font-bold text-secondary">
                      {notice.title}
                    </h3>
                    <Badge variant={getCategoryColor(notice.category) as any}>
                      {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{notice.description}</p>

              <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <span>By {notice.postedBy}</span>
                  <span>•</span>
                  <span>{notice.date}</span>
                </div>
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleLike(notice.id)}
                    className="flex items-center gap-2 hover:text-danger transition-colors"
                  >
                    <Heart
                      size={18}
                      className={likedNotices.has(notice.id) ? 'fill-danger text-danger' : ''}
                    />
                    {notice.likes}
                  </motion.button>
                  <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <MessageCircle size={18} />
                    {notice.comments}
                  </button>
                  <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Eye size={18} />
                    {notice.views}
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </MainLayout>
  );
}
