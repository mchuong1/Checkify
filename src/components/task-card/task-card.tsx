import classNames from 'classnames';
import styles from './task-card.module.scss';
import { Container } from '../container/container';
import { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import * as _ from 'lodash';

export interface TaskCardProps {
    className?: string;
    title: string;
    onClick: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-task-cards-and-templates
 */
export const TaskCard = ({ className, title, onClick }: TaskCardProps) => {
    const formattedTitle = title.length < 40 ? title : `${_.join(_.slice(title, 0, 40), '')}...`;
    const player = useRef() as any;
    const handleOnClick = () => {
        player.current.play();
        setTimeout(() => {
            onClick();
        }, 1800);
    }

    return (
        <div className={classNames(styles.root, className)} onClick={handleOnClick}>
            <Container className={styles.card}>
                <Player
                    ref={player}
                    speed={1}
                    src="https://assets7.lottiefiles.com/private_files/lf30_nrnx3s.json"
                    className={styles.lottie}
                ></Player>
                <h1 style={{ overflowWrap: 'anywhere' }}>{formattedTitle}</h1>
            </Container>
        </div>
    );
};
