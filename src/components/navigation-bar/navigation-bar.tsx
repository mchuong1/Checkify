import classNames from 'classnames';
import styles from './navigation-bar.module.scss';
import { Button } from '../button/button';
import _ from 'lodash';

export interface NavigationBarProps {
    className?: string;
    title: string;
    navItems: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-navigation-bars-and-templates
 */
export const NavigationBar = ({ className, title, navItems }: NavigationBarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h2>{title}</h2>
            <div className={styles.navlistcontainer}>
                {_.map(navItems, (item) => (
                    <button className={styles.navitem} onClick={item.onClick}>
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
