import * as React from 'react';
import { EHEaderTypes } from './header-constants';

type THeader = {
    children: string;
    className?: string;
    headerType: EHEaderTypes;
};

export const Header = React.memo<THeader>(({ children, className = '', headerType = EHEaderTypes.H1 }) => {
    const HeaderTag = headerType;

    return <HeaderTag className={className}>{children}</HeaderTag>
});
