import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  STUDENT = 'STUDENT',
  LECTURER = 'LECTURER',
  IT_STAFF = 'IT_STAFF',
  LIBRARIAN = 'LIBRARIAN',
  FACULTY_DEAN = 'FACULTY_DEAN',
  DEPARTMENT_HEAD = 'DEPARTMENT_HEAD',
  REGISTRAR = 'REGISTRAR',
  FINANCE_STAFF = 'FINANCE_STAFF',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

registerEnumType(Role, { name: 'Role', description: undefined });
