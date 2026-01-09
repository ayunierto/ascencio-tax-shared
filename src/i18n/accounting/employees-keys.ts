export const EmployeesMessages = {
  // Employee validation messages
  EMPLOYEE_NOT_FOUND: 'employeeNotFound',
  EMPLOYEE_ALREADY_EXISTS: 'employeeAlreadyExists',
  EMPLOYEE_CREATED_SUCCESSFULLY: 'employeeCreatedSuccessfully',
  EMPLOYEE_UPDATED_SUCCESSFULLY: 'employeeUpdatedSuccessfully',
  EMPLOYEE_DELETED_SUCCESSFULLY: 'employeeDeletedSuccessfully',
  
  // Employee fields
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  EMAIL: 'email',
  PHONE: 'phone',
  ADDRESS: 'address',
  SOCIAL_INSURANCE_NUMBER: 'socialInsuranceNumber',
  DATE_OF_BIRTH: 'dateOfBirth',
  HIRE_DATE: 'hireDate',
  POSITION: 'position',
  DEPARTMENT: 'department',
} as const;

export type EmployeesMessageKey =
  (typeof EmployeesMessages)[keyof typeof EmployeesMessages];
