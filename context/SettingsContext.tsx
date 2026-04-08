'use client';
import React, { createContext, useContext, useState } from 'react';

type SettingsState = {
    logoUrl: string;
    theme: string;
};

type SettingsContextType = {
    settings: SettingsState;
    setSettings: (s: SettingsState) => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
    const [settings, setSettings] = useState<SettingsState>({
        logoUrl: '/meronatic-logo.png',
        theme: 'dark'
    });

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    const context = useContext(SettingsContext);
    if (!context) return { settings: { logoUrl: '/logo.png', theme: 'dark' }, setSettings: () => {} };
    return context;
}
