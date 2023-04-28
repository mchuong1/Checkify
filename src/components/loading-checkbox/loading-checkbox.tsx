import classNames from 'classnames';
import styles from './loading-checkbox.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';

export interface LoadingCheckboxProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-loading-checkboxs-and-templates
 */
export const LoadingCheckbox = ({ className }: LoadingCheckboxProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Player
        autoplay
        loop
        speed={2}
        src="https://assets7.lottiefiles.com/packages/lf20_outxntop.json"
        style={{ height: '300px', width: '300px' }}
      >
      </Player>
    </div>);
};
