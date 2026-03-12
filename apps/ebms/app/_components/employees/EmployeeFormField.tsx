// 'use client';

// import { AddEmployeeFieldName } from "../lib/employee/types";

// type EmployeeFormFieldProps = {
//   label: string;
//   name: AddEmployeeFieldName;
//   value: string;
//   error?: string;
//   type?: 'text' | 'email' | 'date';
//   readOnly?: boolean;
//   placeholder?: string;
//   onChange: (name: AddEmployeeFieldName, value: string) => void;
// };

// const EmployeeFormField = ({
//   label,
//   name,
//   value,
//   error,
//   type = 'text',
//   readOnly = false,
//   placeholder,
//   onChange,
// }: EmployeeFormFieldProps) => {
//   return (
//     <div className="flex flex-col gap-1.5">
//       <label
//         htmlFor={name}
//         className="min-h-[16px] text-[11px] font-normal text-[#555555]"
//       >
//         {label}
//       </label>

//       <input
//         id={name}
//         name={name}
//         type={type}
//         value={value}
//         readOnly={readOnly}
//         placeholder={placeholder}
//         onChange={(event) => onChange(name, event.target.value)}
//         className="h-8 rounded border border-[#d6d6d6] bg-white px-2.5 text-[11px] text-[#222222] outline-none placeholder:text-[#b8b8b8] focus:border-[#a9a9a9]"
//       />

//       {error ? (
//         <p className="text-[10px] leading-4 text-rose-600">{error}</p>
//       ) : null}
//     </div>
//   );
// };

// export default EmployeeFormField;

'use client';

import type { AddEmployeeFieldName } from '../lib/employee/types';

type EmployeeFormFieldProps = {
  label: string;
  name: AddEmployeeFieldName;
  value: string;
  error?: string;
  type?: 'text' | 'email' | 'date';
  placeholder?: string;
  readOnly?: boolean;
  onChange: (name: AddEmployeeFieldName, value: string) => void;
};

const EmployeeFormField = ({
  label,
  name,
  value,
  error,
  type = 'text',
  placeholder,
  readOnly = false,
  onChange,
}: EmployeeFormFieldProps) => {
  const inputClassName = [
    'h-8 w-full rounded-[16px] border bg-[#f8f8f8] px-4 text-[12px]',
    'text-[#2b2f38] outline-none transition',
    'border-[#c7ccd6] placeholder:text-[#9aa3b2] focus:border-[#b9c1cf]',
    error ? 'border-rose-500' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className="text-[12px] font-normal leading-5 text-[#4b5565]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={(event) => onChange(name, event.target.value)}
        className={inputClassName}
      />

      {error ? (
        <p className="min-h-[16px] text-[11px] leading-4 text-rose-600">
          {error}
        </p>
      ) : (
        <div className="min-h-[16px]" />
      )}
    </div>
  );
};

export default EmployeeFormField;