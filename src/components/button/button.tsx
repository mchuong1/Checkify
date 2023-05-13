import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
    label: string;
    onClick: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-buttons-and-templates
 */
export const Button = ({ className, label, onClick }: ButtonProps) => {
    return (
        <div className={classNames(styles.root, className)} onClick={() => onClick()}>
            <button className={styles.button}>{label}</button>
        </div>
    );
};
