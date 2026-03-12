type EmployeeStatCardProps = {
  title: string;
  value: string;
};

export const EmployeeStatCard = ({
  title,
  value,
}: EmployeeStatCardProps) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-4 py-3">
      <p className="text-xs text-slate-500">{title}</p>
      <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
};