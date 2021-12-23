import * as React from 'react';
import { ETitleTypes } from './title-constants';

type TTitleProps = {
    children: string;
    className?: string;
    headerType: ETitleTypes;
};

export const Title = React.memo<TTitleProps>(({ children, className = '', headerType = ETitleTypes.H1 }) => {
    const TitleTag = headerType;

    return <TitleTag className={className}>{children}</TitleTag>
});
