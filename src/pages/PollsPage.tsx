import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { motion } from 'framer-motion';
import { Plus, MessageCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { mockPolls } from '../utils/mockData';

const COLORS = ['#2563EB', '#10B981', '#F59E0B'];

export function PollsPage() {
  const [polls] = useState(mockPolls);
  const [votes, setVotes] = useState<Record<string, string>>({});

  const handleVote = (pollId: string, optionId: string) => {
    setVotes({
      ...votes,
      [pollId]: optionId,
    });
  };

  return (
    <MainLayout>
      <PageHeader
        title="Polls & Voting"
        description="Participate in community decision-making"
        actions={
          <Button size="md">
            <Plus size={18} />
            Create Poll
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {polls.map((poll, index) => (
          <motion.div
            key={poll.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {poll.question}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Created by {poll.createdBy}</span>
                  <Badge variant={poll.status === 'active' ? 'success' : 'secondary'}>
                    {poll.status === 'active' ? 'Active' : 'Closed'}
                  </Badge>
                </div>
              </div>

              {/* Chart */}
              <div className="mb-6 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={poll.options}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="votes"
                    >
                      {poll.options.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {poll.options.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => handleVote(poll.id, option.id)}
                    whileHover={{ x: 4 }}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                      votes[poll.id] === option.id
                        ? 'border-primary bg-blue-50'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-secondary">
                        {option.text}
                      </span>
                      <span className="text-sm text-gray-600">
                        {option.votes} votes ({option.percentage}%)
                      </span>
                    </div>
                    <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${option.percentage}%` }}
                      ></div>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Total Votes: {poll.totalVotes}
                </span>
                <button className="flex items-center gap-2 text-primary hover:text-blue-700 transition-colors text-sm font-semibold">
                  <MessageCircle size={18} />
                  {poll.comments?.length || 0} Comments
                </button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </MainLayout>
  );
}
