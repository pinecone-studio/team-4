import DocumentPanel from './DocumentPanel';
import EmployeeStats from './EmployeeStats';
import EmployeeTable from './EmployeeTable';

const EmployeePage = () => {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="flex flex-col gap-6">
            <EmployeeStats />
            <EmployeeTable />
          </div>

          <DocumentPanel />
        </div>
      </div>
    </main>
  );
};

export default EmployeePage;