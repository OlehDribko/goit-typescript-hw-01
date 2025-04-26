export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record
const RoleDescription: Record<UserRole, {title: string}> = {
    admin: {title: 'Admin User'},
  editor: {title:'Editor User'},
  guest: {title:'Guest User'},
};
