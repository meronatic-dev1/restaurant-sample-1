'use client';
import React, { useMemo } from 'react';

const MOCK_USER = {
    id: 'mock-user-123',
    firstName: 'Demo',
    emailAddresses: [{ emailAddress: 'demo@meronatic.com' }],
    publicMetadata: {
        role: 'admin',
        branchId: undefined
    }
};

export const useUser = () => {
    const user = useMemo(() => MOCK_USER, []);
    return { isLoaded: true, user };
};

export const SignOutButton = ({ children, redirectUrl }: any) => {
    return <div onClick={() => console.log('Mock SignOut to', redirectUrl)}>{children}</div>;
};

export const ClerkProvider = ({ children }: any) => <>{children}</>;
