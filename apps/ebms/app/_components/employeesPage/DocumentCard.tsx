type DocumentCardProps = {
  title: string;
  company: string;
  date: string;
  status: string;
};

const DocumentCard = ({
  title,
  company,
  date,
  status,
}: DocumentCardProps) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-xs text-slate-500">{company}</p>
        </div>

        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
          {status}
        </span>
      </div>

      <p className="text-xs text-slate-500">{date}</p>
    </div>
  );
};

export default DocumentCard;