import * as React from 'react';
import cn from 'classnames';
import { ETitleTypes } from './title-constants';
import styles from './title.module.scss';

type TTitleProps = {
    children: string;
    className?: string;
    headerType: ETitleTypes;
};

export const Title = React.memo<TTitleProps>(({ children, className = '', headerType = ETitleTypes.H1 }) => {
    const TitleTag = headerType;

    return <TitleTag className={cn(styles.title, className)}>{children}</TitleTag>
});
