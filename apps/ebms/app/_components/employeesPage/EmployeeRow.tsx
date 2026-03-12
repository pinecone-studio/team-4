type EmployeeRowProps = {
  employeeName: string;
  position: string;
  hireDate: string;
  latestAction: string;
  status: string;
};

const EmployeeRow = ({
  employeeName,
  position,
  hireDate,
  latestAction,
  status,
}: EmployeeRowProps) => {
  return (
    <tr className="border-t border-slate-200">
      <td className="px-4 py-4 text-sm font-medium text-slate-900">
        {employeeName}
      </td>
      <td className="px-4 py-4 text-sm text-slate-600">{position}</td>
      <td className="px-4 py-4 text-sm text-slate-600">{hireDate}</td>
      <td className="px-4 py-4 text-sm text-slate-600">{latestAction}</td>
      <td className="px-4 py-4">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          {status}
        </span>
      </td>
      <td className="px-4 py-4 text-sm font-medium text-slate-700">Edit</td>
    </tr>
  );
};

export default EmployeeRow;
