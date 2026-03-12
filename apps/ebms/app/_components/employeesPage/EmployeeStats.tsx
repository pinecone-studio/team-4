import { EmployeeStatCard } from './EmployeeStatCard';

export default function EmployeeStats() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <EmployeeStatCard title="Total Employees" value="9" />
      <EmployeeStatCard title="New Hires This Month" value="1" />
      <EmployeeStatCard title="Average Tenure" value="6.1 years" />
      <EmployeeStatCard title="Active Departments" value="4" />
    </div>
  );
}
