import { StatCard } from '@/components';

export function StatisticPage() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <StatCard
        title="Total Page Views"
        value="89,400"
        icon="eye"
        variant="primary"
      />
      <StatCard
        title="Total Downloads"
        value="10,400"
        icon="download"
        variant="primary"
      />
    </div>
  );
}
