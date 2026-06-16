import { ReactNode } from 'react';
import { cn } from '../../utils/helpers';

interface TableProps {
  columns: Array<{
    key: string;
    label: string;
    render?: (value: any, row: any) => ReactNode;
    className?: string;
  }>;
  data: any[];
  className?: string;
  striped?: boolean;
  hoverable?: boolean;
}

export function Table({
  columns,
  data,
  className,
  striped = true,
  hoverable = true,
}: TableProps) {
  return (
    <div className="overflow-x-auto rounded-card border border-gray-200">
      <table className={cn('w-full', className)}>
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-sm font-semibold text-secondary"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={cn(
                'border-b border-gray-200 last:border-b-0',
                striped && index % 2 === 1 && 'bg-gray-50',
                hoverable && 'hover:bg-blue-50 transition-colors'
              )}
            >
              {columns.map((column) => (
                <td
                  key={`${index}-${column.key}`}
                  className={cn('px-6 py-4 text-sm text-secondary', column.className)}
                >
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          No data available
        </div>
      )}
    </div>
  );
}
