import DocumentCard from './DocumentCard';

const DocumentPanel = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Document Results
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Recent generated employee documents
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <DocumentCard
          title="Quarterly Performance Report"
          company="Pinecone Company, 2026"
          date="2026-03-10"
          status="completed"
        />
        <DocumentCard
          title="Employee Onboarding Package"
          company="Pinecone Company, 2026"
          date="2026-03-09"
          status="pending"
        />
        <DocumentCard
          title="Employee Handbook 2026"
          company="Pinecone Company, 2026"
          date="2026-03-08"
          status="completed"
        />
        <DocumentCard
          title="Payroll Summary"
          company="Pinecone Company, 2026"
          date="2026-03-07"
          status="pending"
        />
      </div>
    </div>
  );
};

export default DocumentPanel;