
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
      className="flex flex-col bg-[#dfe3ee]"
    >
      <div className="flex flex-col gap-5 p-8 w-full mx-auto">
      <div className='bg-white flex flex-col p-4'>
  <h1 className='border-b font-semibold mb-4'>Personal Informatoin</h1>
  <div className='flex gap-5'>
    <div className="flex-1">
      <EmployeeFormField
        label="First Name"
        name="firstName"
        value={form.firstName}
        error={errors.firstName}
        placeholder=""
        onChange={onChange}
      />
    </div>
    <div className="flex-1">
      <EmployeeFormField
        label="Last Name"
        name="lastName"
        value={form.lastName}
        error={errors.lastName}
        placeholder=""
        onChange={onChange}
      />
    </div>
  </div>
  <div className='flex gap-5'>
    <div className="flex-1">
      <EmployeeFormField
        label="First Name (English)"
        name="firstNameEng"
        value={form.firstNameEng}
        error={errors.firstNameEng}
        placeholder=""
        onChange={onChange}
      />
    </div>

    <div className="flex-1">
      <EmployeeFormField
        label="Last Name (English)"
        name="lastNameEng"
        value={form.lastNameEng}
        error={errors.lastNameEng}
        placeholder=""
        onChange={onChange}
      />
    </div>
  </div>
</div>
<div className='bg-white flex flex-col p-4'>
  <h1 className='border-b font-semibold mb-4'>Work Information</h1>

  <div className='grid grid-cols-2 gap-5'>
    <EmployeeFormField
      label="Employee Code"
      name="employeeCode"
      value={form.employeeCode}
      error={errors.employeeCode}
      placeholder="EMP-260312-125"
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
  </div>

  <div className='grid grid-cols-3 gap-5 mt-4'>
    <EmployeeFormField
      label="Position title"
      name="level"
      value={form.level}
      error={errors.level}
      placeholder=""
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
      label="Hire Date"
      name="hireDate"
      type="date"
      value={form.hireDate}
      error={errors.hireDate}
      placeholder="mm/dd/yyyy"
      onChange={onChange}
    />
  </div>
</div>
      <div className='bg-white flex flex-col p-4'>
          <h1 className='border-b font-semibold mb-4'>Contact</h1>
          <div className='grid col-2 gap-5'> 
          <EmployeeFormField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          error={errors.email}
          placeholder=""
          onChange={onChange}
        />

          </div>
      </div>
      </div>

      <div className="flex items-center justify-end gap-3 pb-4 px-8">
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