'use client';
import React, { createContext, useContext, useState } from 'react';

type LocationState = {
    lat: number;
    lng: number;
    address: string;
    mode: 'Delivery' | 'Pickup' | 'Dine-In';
    branchId: string | null;
};

type LocationContextType = {
    location: LocationState;
    setLocation: React.Dispatch<React.SetStateAction<LocationState>>;
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
    const [location, setLocation] = useState<LocationState>({
        lat: 0,
        lng: 0,
        address: 'Downtown Dubai',
        mode: 'Delivery',
        branchId: 'All'
    });

    return (
        <LocationContext.Provider value={{ location, setLocation }}>
            {children}
        </LocationContext.Provider>
    );
}

export function useLocation() {
    const context = useContext(LocationContext);
    if (!context) throw new Error('useLocation must be used within LocationProvider');
    return context;
}
