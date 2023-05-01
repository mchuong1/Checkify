import classNames from 'classnames';
import styles from './container.module.scss';
import type { ReactNode } from 'react';

export interface ContainerProps {
    className?: string;
    children: ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-containers-and-templates
 */
export const Container = ({ className, children }: ContainerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {children}
        </div>
    );
};
