export const API = '/api';

// ── Types ──
export type ApiLocation = { id: string; name: string; address?: string; lat?: number; lng?: number; latitude?: number; longitude?: number; isActive?: boolean; openTime?: string | null; closeTime?: string | null; phone?: string; ordersToday?: number; revenueToday?: number; deliveryFee?: number };
export type ApiCategory = { id: string; name: string; imageUrl?: string };
export type ApiMenuItem = { id: string; name: string; description?: string; price: number; imageUrl?: string; isAvailable: boolean; categoryId: string; category?: { name: string }; dietary?: string[]; allergens?: string[]; inclusions?: string[] };
export type ApiCoupon = { id: string; code: string; discount: number; type: string; isActive: boolean; expiresAt?: string; minOrder?: number; maxUses?: number; usedCount?: number };

export type DashboardData = {
    kpis: { revenue: number; orders: number; cancelledOrders: number; customers: number; avgOrder: number };
    modeSplit: { label: string; pct: number; count: number }[];
    recentOrders: any[];
    recentCanceledOrders: any[];
    topProducts: { name: string; orders: number; pct: number; revenue?: string }[];
    totalItemsSold: number;
    customerList?: any[];
    categoryPerformance?: { name: string; revenue: number; orders: number }[];
    customerStats?: { newCustomers: number; returningCustomers: number; peakHour: string; topLTV: number; newPct: number; retPct: number };
    leastProducts?: { name: string; orders: number }[];
    peakHoursHeatmap?: Record<string, number[]>;
};

// ── Mock Data ──
const MOCK_CATEGORIES: ApiCategory[] = [
    { id: 'cat-1', name: 'Sushi Rolls', imageUrl: '' },
    { id: 'cat-2', name: 'Sashimi', imageUrl: '' },
    { id: 'cat-3', name: 'Appetizers', imageUrl: '' },
    { id: 'cat-4', name: 'Beverages', imageUrl: '' },
];

const MOCK_MENU_ITEMS: ApiMenuItem[] = [
    { id: 'item-1', name: 'Spicy Tuna Roll', price: 42, imageUrl: '', isAvailable: true, categoryId: 'cat-1', category: { name: 'Sushi Rolls' }, dietary: ['Spicy'], allergens: ['Fish', 'Soy'], inclusions: [] },
    { id: 'item-2', name: 'Salmon Sashimi', price: 55, imageUrl: '', isAvailable: true, categoryId: 'cat-2', category: { name: 'Sashimi' }, dietary: [], allergens: ['Fish'], inclusions: [] },
    { id: 'item-3', name: 'Dragon Roll', price: 48, imageUrl: '', isAvailable: true, categoryId: 'cat-1', category: { name: 'Sushi Rolls' }, dietary: [], allergens: ['Fish', 'Soy'], inclusions: [] },
    { id: 'item-4', name: 'Edamame', price: 18, imageUrl: '', isAvailable: true, categoryId: 'cat-3', category: { name: 'Appetizers' }, dietary: ['Vegan'], allergens: ['Soy'], inclusions: [] },
    { id: 'item-5', name: 'Miso Soup', price: 15, imageUrl: '', isAvailable: false, categoryId: 'cat-3', category: { name: 'Appetizers' }, dietary: ['Vegan'], allergens: ['Soy'], inclusions: [] },
    { id: 'item-6', name: 'Green Tea', price: 12, imageUrl: '', isAvailable: true, categoryId: 'cat-4', category: { name: 'Beverages' }, dietary: [], allergens: [], inclusions: [] },
];

const MOCK_ORDERS: any[] = [
    { id: 'ord-1', customerName: 'John Doe', customerEmail: 'john@test.com', totalAmount: 120, status: 'DELIVERED', mode: 'Delivery', createdAt: new Date().toISOString(), items: [], branchId: 'loc-1', branchName: 'Downtown Dubai' },
    { id: 'ord-2', customerName: 'Sarah Smith', customerEmail: 'sarah@test.com', totalAmount: 85.5, status: 'DELIVERED', mode: 'Pickup', createdAt: new Date().toISOString(), items: [], branchId: 'loc-2', branchName: 'Marina' },
    { id: 'ord-3', customerName: 'Mike Johnson', customerEmail: 'mike@test.com', totalAmount: 210, status: 'PREPARING', mode: 'Dine-In', createdAt: new Date().toISOString(), items: [], branchId: 'loc-1', branchName: 'Downtown Dubai' },
];

const MOCK_COUPONS: ApiCoupon[] = [
    { id: 'coup-1', code: 'WELCOME10', discount: 10, type: 'percentage', isActive: true, minOrder: 50, maxUses: 100, usedCount: 42 },
    { id: 'coup-2', code: 'FLAT20', discount: 20, type: 'fixed', isActive: true, minOrder: 80, maxUses: 50, usedCount: 12 },
];

const PEAK_HEATMAP: Record<string, number[]> = {};
['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
    PEAK_HEATMAP[day] = Array.from({ length: 24 }, () => Math.floor(Math.random() * 10));
});

// ── Dashboard ──
export async function getAnalyticsDashboard(_branchId?: string): Promise<DashboardData> {
    return {
        kpis: { revenue: 14520, orders: 452, cancelledOrders: 12, customers: 310, avgOrder: 32.1 },
        modeSplit: [
            { label: 'Delivery', pct: 65, count: 294 },
            { label: 'Pickup', pct: 25, count: 113 },
            { label: 'Dine-In', pct: 10, count: 45 },
        ],
        recentOrders: [
            { id: 'ORD-1042', name: 'John Doe', branch: 'Dubai Mall', total: 'AED 120.00', mode: 'Delivery' },
            { id: 'ORD-1041', name: 'Sarah Smith', branch: 'Marina', total: 'AED 85.50', mode: 'Pickup' },
        ],
        recentCanceledOrders: [
            { id: 'ORD-1038', name: 'Ali Hassan', branch: 'Marina', total: 'AED 45.00', mode: 'Pickup' },
        ],
        topProducts: [
            { name: 'Spicy Tuna Roll', orders: 124, pct: 100, revenue: 'AED 5,208' },
            { name: 'Salmon Sashimi', orders: 98, pct: 79, revenue: 'AED 5,390' },
            { name: 'Dragon Roll', orders: 85, pct: 68, revenue: 'AED 4,080' },
            { name: 'Miso Soup', orders: 72, pct: 58, revenue: 'AED 1,080' },
            { name: 'Edamame', orders: 65, pct: 52, revenue: 'AED 1,170' },
        ],
        totalItemsSold: 1254,
        customerList: [
            { name: 'John Doe', email: 'john@test.com', phone: '+971 50 123 4567', joined: '2024-01-15', orders: 24, spend: 'AED 2,880', status: 'Active' },
            { name: 'Sarah Smith', email: 'sarah@test.com', phone: '+971 55 234 5678', joined: '2024-02-20', orders: 18, spend: 'AED 1,530', status: 'Active' },
            { name: 'Mike Johnson', email: 'mike@test.com', phone: '+971 56 345 6789', joined: '2024-03-10', orders: 12, spend: 'AED 2,520', status: 'Active' },
            { name: 'Emma Wilson', email: 'emma@test.com', phone: '+971 50 456 7890', joined: '2024-04-05', orders: 8, spend: 'AED 640', status: 'Disabled' },
            { name: 'Ali Hassan', email: 'ali@test.com', phone: '+971 55 567 8901', joined: '2024-05-12', orders: 15, spend: 'AED 1,200', status: 'Active' },
        ],
        categoryPerformance: [
            { name: 'Sushi Rolls', revenue: 9288, orders: 209 },
            { name: 'Sashimi', revenue: 5390, orders: 98 },
            { name: 'Appetizers', revenue: 2250, orders: 137 },
            { name: 'Beverages', revenue: 1080, orders: 90 },
        ],
        customerStats: { newCustomers: 48, returningCustomers: 262, peakHour: '7pm — 9pm', topLTV: 2880, newPct: 15, retPct: 85 },
        leastProducts: [
            { name: 'Wasabi Peas', orders: 3 },
            { name: 'Seaweed Salad', orders: 7 },
            { name: 'Pickled Ginger', orders: 9 },
        ],
        peakHoursHeatmap: PEAK_HEATMAP,
    };
}

// ── Locations ──
export async function getLocations(): Promise<ApiLocation[]> {
    return [
        { id: 'loc-1', name: 'Downtown Dubai', address: '12 Al Wasl Rd, Downtown Dubai, UAE', lat: 25.2048, lng: 55.2708, latitude: 25.2048, longitude: 55.2708, isActive: true, openTime: '10:00', closeTime: '22:00', phone: '+971 4 123 4567', ordersToday: 38, revenueToday: 4250 },
        { id: 'loc-2', name: 'Marina', address: '5 JBR Walk, Dubai Marina, UAE', lat: 25.0805, lng: 55.1403, latitude: 25.0805, longitude: 55.1403, isActive: true, openTime: '11:00', closeTime: '23:00', phone: '+971 4 234 5678', ordersToday: 24, revenueToday: 2810 },
    ];
}
export async function createLocation(_data: any): Promise<ApiLocation> { return { id: 'loc-new', name: 'New Location', isActive: true }; }
export async function updateLocation(_id: string, _data: any): Promise<ApiLocation> { return { id: _id, name: 'Updated', isActive: true }; }
export async function toggleLocation(_id: string): Promise<void> { }

// ── Categories ──
export async function getCategories(): Promise<ApiCategory[]> { return [...MOCK_CATEGORIES]; }
export async function createCategory(_data: any): Promise<ApiCategory> { return { id: 'cat-new', name: _data.name || 'New' }; }
export async function updateCategory(_id: string, _data: any): Promise<ApiCategory> { return { id: _id, name: _data.name || 'Updated' }; }
export async function deleteCategory(_id: string): Promise<void> { }

// ── Menu Items ──
export async function getMenuItems(): Promise<ApiMenuItem[]> { return [...MOCK_MENU_ITEMS]; }
export async function createMenuItem(_data: any): Promise<ApiMenuItem> { return { id: 'item-new', name: _data.name || 'New', price: _data.price || 0, isAvailable: true, categoryId: _data.categoryId || '' }; }
export async function updateMenuItem(_id: string, _data: any): Promise<ApiMenuItem> { return { id: _id, name: 'Updated', price: 0, isAvailable: true, categoryId: '' }; }
export async function deleteMenuItem(_id: string): Promise<void> { }

// ── Orders ──
export async function getOrders(_params?: any): Promise<any[]> { return [...MOCK_ORDERS]; }
export async function updateOrderStatus(_id: string, _status: string): Promise<void> { }

// ── Users ──
export async function getUsers(): Promise<any[]> {
    return [
        { id: 'usr-1', firstName: 'Demo', lastName: 'Admin', email: 'demo@meronatic.com', role: 'admin', branchId: null },
        { id: 'usr-2', firstName: 'Branch', lastName: 'Manager', email: 'manager@meronatic.com', role: 'branch_manager', branchId: 'loc-1' },
    ];
}
export async function updateUser(_id: string, _data: any): Promise<void> { }
export async function deleteUser(_id: string): Promise<void> { }

// ── Coupons ──
export async function getCoupons(): Promise<ApiCoupon[]> { return [...MOCK_COUPONS]; }
export async function createCoupon(_data: any): Promise<ApiCoupon> { return { id: 'coup-new', code: _data.code || 'NEW', discount: _data.discount || 0, type: _data.type || 'percentage', isActive: true }; }
export async function updateCoupon(_id: string, _data: any): Promise<ApiCoupon> { return { id: _id, code: 'UPDATED', discount: 0, type: 'percentage', isActive: true }; }
export async function deleteCoupon(_id: string): Promise<void> { }

// ── Upload ──
export async function uploadImage(_file: File): Promise<{ url: string }> { return { url: '/placeholder-uploaded.png' }; }
