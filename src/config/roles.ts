const allRoles = {
  user: ['getUsers', 'getStocks', 'getProducts'],
  admin: ['getUsers', 'getStocks', 'getProducts', 'manageUsers', 'manageStocks', 'manageProducts'],
};

export const roles: string[] = Object.keys(allRoles);
export const roleRights: Map<string, string[]> = new Map(Object.entries(allRoles));
