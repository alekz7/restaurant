import { MenuItem } from '@/lib/types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Burger',
    description: 'Juicy beef patty with cheese, lettuce, tomato, and our special sauce',
    price: 12.99,
    category: 'main dishes',
    availableAt: ['location1', 'location2'],
    isPopular: true
  },
  {
    id: '2',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan',
    price: 9.99,
    category: 'sides',
    availableAt: ['location1', 'location2']
  },
  {
    id: '3',
    name: 'Fish & Chips',
    description: 'Crispy battered cod with thick-cut fries and tartar sauce',
    price: 14.99,
    category: 'main dishes',
    availableAt: ['location1'],
    isPopular: true
  },
  {
    id: '4',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
    price: 7.99,
    category: 'desserts',
    availableAt: ['location2']
  },
  {
    id: '5',
    name: 'Grilled Salmon',
    description: 'Norwegian salmon with lemon butter sauce and seasonal vegetables',
    price: 18.99,
    category: 'main dishes',
    availableAt: ['location1', 'location2']
  },
  {
    id: '6',
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
    price: 13.99,
    category: 'main dishes',
    availableAt: ['location2']
  },
  {
    id: '7',
    name: 'Truffle Fries',
    description: 'Crispy fries tossed with truffle oil and parmesan',
    price: 6.99,
    category: 'sides',
    availableAt: ['location1', 'location2'],
    isNew: true
  },
  {
    id: '8',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
    price: 8.99,
    category: 'desserts',
    availableAt: ['location1', 'location2']
  },
  {
    id: '9',
    name: 'Craft Lemonade',
    description: 'Freshly squeezed lemons with a hint of mint and honey',
    price: 4.99,
    category: 'drinks',
    availableAt: ['location1', 'location2']
  }
];