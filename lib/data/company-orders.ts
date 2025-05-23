import { CompanyOrder } from '@/lib/types';

export const companyOrders: CompanyOrder[] = [
  {
    id: 'ord-20230501-001',
    date: '2023-05-01',
    companyId: 'comp-001',
    companyName: 'Acme Corp',
    location: 'location1',
    employeeOrders: [
      {
        id: 'emp-ord-001',
        employeeId: 'emp-001',
        employeeName: 'John Doe',
        items: [
          {
            id: '1',
            name: 'Classic Burger',
            description: 'Juicy beef patty with cheese, lettuce, tomato, and our special sauce',
            price: 12.99,
            quantity: 1
          }
        ],
        total: 12.99
      },
      {
        id: 'emp-ord-002',
        employeeId: 'emp-002',
        employeeName: 'Jane Smith',
        items: [
          {
            id: '2',
            name: 'Caesar Salad',
            description: 'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan',
            price: 9.99,
            quantity: 1
          }
        ],
        total: 9.99
      }
    ],
    status: 'completed',
    total: 22.98
  },
  {
    id: 'ord-20230515-002',
    date: '2023-05-15',
    companyId: 'comp-001',
    companyName: 'Acme Corp',
    location: 'location2',
    employeeOrders: [
      {
        id: 'emp-ord-003',
        employeeId: 'emp-001',
        employeeName: 'John Doe',
        items: [
          {
            id: '5',
            name: 'Grilled Salmon',
            description: 'Norwegian salmon with lemon butter sauce and seasonal vegetables',
            price: 18.99,
            quantity: 1
          }
        ],
        total: 18.99
      },
      {
        id: 'emp-ord-004',
        employeeId: 'emp-003',
        employeeName: 'Bob Johnson',
        items: [
          {
            id: '6',
            name: 'Margherita Pizza',
            description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
            price: 13.99,
            quantity: 1
          }
        ],
        total: 13.99
      },
      {
        id: 'emp-ord-005',
        employeeId: 'emp-004',
        employeeName: 'Alice Brown',
        items: [
          {
            id: '2',
            name: 'Caesar Salad',
            description: 'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan',
            price: 9.99,
            quantity: 1
          }
        ],
        total: 9.99
      }
    ],
    status: 'completed',
    total: 42.97
  },
  {
    id: 'ord-20230601-003',
    date: '2023-06-01',
    companyId: 'comp-002',
    companyName: 'Globex Inc',
    location: 'location1',
    employeeOrders: [
      {
        id: 'emp-ord-006',
        employeeId: 'emp-005',
        employeeName: 'Sarah Wilson',
        items: [
          {
            id: '3',
            name: 'Fish & Chips',
            description: 'Crispy battered cod with thick-cut fries and tartar sauce',
            price: 14.99,
            quantity: 1
          }
        ],
        total: 14.99
      }
    ],
    status: 'completed',
    total: 14.99
  },
  {
    id: 'ord-20230615-004',
    date: '2023-06-15',
    companyId: 'comp-001',
    companyName: 'Acme Corp',
    location: 'location1',
    employeeOrders: [
      {
        id: 'emp-ord-007',
        employeeId: 'emp-001',
        employeeName: 'John Doe',
        items: [
          {
            id: '1',
            name: 'Classic Burger',
            description: 'Juicy beef patty with cheese, lettuce, tomato, and our special sauce',
            price: 12.99,
            quantity: 1
          },
          {
            id: '7',
            name: 'Truffle Fries',
            description: 'Crispy fries tossed with truffle oil and parmesan',
            price: 6.99,
            quantity: 1
          }
        ],
        total: 19.98
      },
      {
        id: 'emp-ord-008',
        employeeId: 'emp-002',
        employeeName: 'Jane Smith',
        items: [
          {
            id: '5',
            name: 'Grilled Salmon',
            description: 'Norwegian salmon with lemon butter sauce and seasonal vegetables',
            price: 18.99,
            quantity: 1
          }
        ],
        total: 18.99
      }
    ],
    status: 'completed',
    total: 38.97
  },
  {
    id: 'ord-20230701-005',
    date: '2023-07-01',
    companyId: 'comp-002',
    companyName: 'Globex Inc',
    location: 'location2',
    employeeOrders: [
      {
        id: 'emp-ord-009',
        employeeId: 'emp-006',
        employeeName: 'Mike Davis',
        items: [
          {
            id: '6',
            name: 'Margherita Pizza',
            description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
            price: 13.99,
            quantity: 5
          }
        ],
        total: 69.95
      },
      {
        id: 'emp-ord-010',
        employeeId: 'emp-007',
        employeeName: 'Emily Taylor',
        items: [
          {
            id: '2',
            name: 'Caesar Salad',
            description: 'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan',
            price: 9.99,
            quantity: 5
          }
        ],
        total: 49.95
      }
    ],
    status: 'active',
    total: 119.90
  }
];