import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ProjectSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
      <Skeleton height={200} />
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          <Skeleton width={60} height={24} />
          <Skeleton width={80} height={24} />
        </div>
        <Skeleton height={28} width="80%" className="mb-2" />
        <Skeleton count={3} className="mb-4" />
        <div className="flex gap-2 mb-4">
          <Skeleton width={60} height={24} />
          <Skeleton width={70} height={24} />
          <Skeleton width={80} height={24} />
        </div>
        <div className="flex gap-4">
          <Skeleton width={100} height={24} />
          <Skeleton width={100} height={24} />
        </div>
      </div>
    </div>
  );
};

export const SkillSkeleton = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-blue-600 dark:border-blue-500">
      <div className="flex items-center mb-3">
        <Skeleton circle width={24} height={24} className="mr-2" />
        <Skeleton width={120} height={24} />
      </div>
      <div className="space-y-2">
        <Skeleton count={3} />
      </div>
    </div>
  );
};