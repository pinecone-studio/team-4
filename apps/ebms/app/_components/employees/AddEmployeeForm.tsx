
'use client';

import type { FormEvent } from 'react';
import type {
  AddEmployeeFieldName,
  AddEmployeeFormData,
  AddEmployeeFormErrors,
} from '../lib/employee/types';
import EmployeeFormField from './EmployeeFormField';

type AddEmployeeFormProps = {
  form: AddEmployeeFormData;
  errors: AddEmployeeFormErrors;
  isSubmitting: boolean;
  onCancel: () => void;
  onChange: (name: AddEmployeeFieldName, value: string) => void;
  onSubmit: () => Promise<void>;
};

const AddEmployeeForm = ({
  form,
  errors,
  isSubmitting,
  onCancel,
  onChange,
  onSubmit,
}: AddEmployeeFormProps) => {
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    await onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 bg-[#dfe3ee] px-4 pb-3 pt-4"
    >
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
        <EmployeeFormField
          label="Last Name"
          name="lastName"
          value={form.lastName}
          error={errors.lastName}
          placeholder=""
          onChange={onChange}
        />
        <EmployeeFormField
          label="First Name"
          name="firstName"
          value={form.firstName}
          error={errors.firstName}
          placeholder=""
          onChange={onChange}
        />
        <EmployeeFormField
          label="Last Name (English)"
          name="lastNameEng"
          value={form.lastNameEng}
          error={errors.lastNameEng}
          placeholder=""
          onChange={onChange}
        />
        <EmployeeFormField
          label="First Name (English)"
          name="firstNameEng"
          value={form.firstNameEng}
          error={errors.firstNameEng}
          placeholder=""
          onChange={onChange}
        />
        <EmployeeFormField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          error={errors.email}
          placeholder=""
          onChange={onChange}
        />
        <EmployeeFormField
          label="Employee Code"
          name="employeeCode"
          value={form.employeeCode}
          error={errors.employeeCode}
          placeholder="EMP-260312-125"
          onChange={onChange}
        />
        <EmployeeFormField
          label="Department"
          name="department"
          value={form.department}
          error={errors.department}
          placeholder=""
          onChange={onChange}
        />
        <EmployeeFormField
          label="Branch"
          name="branch"
          value={form.branch}
          error={errors.branch}
          placeholder=""
          onChange={onChange}
        />
        <EmployeeFormField
          label="Level"
          name="level"
          value={form.level}
          error={errors.level}
          placeholder=""
          onChange={onChange}
        />
        <EmployeeFormField
          label="Hire Date"
          name="hireDate"
          type="date"
          value={form.hireDate}
          error={errors.hireDate}
          placeholder="mm/dd/yyyy"
          onChange={onChange}
        />
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="h-10 rounded-[12px] border border-[#c6ccd8] bg-[#e7ebf3] px-5 text-[13px] font-medium text-[#344054] transition hover:bg-[#dde3ee]"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="h-10 rounded-[12px] bg-[#0f1b3d] px-5 text-[13px] font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Creating...' : 'Create Employee'}
        </button>
      </div>
    </form>
  );
};

export default AddEmployeeForm;