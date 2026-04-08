'use client';

import React from 'react';
import { LocationProvider } from '@/context/LocationContext';
import { SettingsProvider } from '@/context/SettingsContext';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SettingsProvider>
            <LocationProvider>
                {children}
            </LocationProvider>
        </SettingsProvider>
    );
}
