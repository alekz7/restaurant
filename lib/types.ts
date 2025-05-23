export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  availableAt: string[];
  isPopular?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export interface EmployeeOrder {
  id: string;
  employeeId: string;
  employeeName: string;
  items: CartItem[];
  total: number;
}

export interface CompanyOrder {
  id: string;
  date: string;
  companyId: string;
  companyName: string;
  location: string;
  employeeOrders: EmployeeOrder[];
  status: 'pending' | 'active' | 'completed';
  total: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'company_admin' | 'staff' | 'admin';
  companyId?: string;
}

export interface Company {
  id: string;
  name: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  employeeCount: number;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  openingHours: string;
  contactPhone: string;
}