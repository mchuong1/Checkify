import classNames from 'classnames';
import styles from './task-card.module.scss';
import { Container } from '../container/container';
import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import * as _ from 'lodash';

export interface TaskCardProps {
    className?: string;
    title: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-task-cards-and-templates
 */
export const TaskCard = ({ className, title }: TaskCardProps) => {
    const [checked, setChecked] = useState();
    const formattedTitle = title.length < 40 ? title : `${_.join(_.slice(title, 0, 40), '')}...`;

    return (
        <div className={classNames(styles.root, className)}>
            <Container>
                <Player
                    autoplay
                    keepLastFrame
                    speed={1}
                    src="https://assets7.lottiefiles.com/private_files/lf30_nrnx3s.json"
                    className={styles.lottie}
                ></Player>
                <h1 style={{ overflowWrap: 'anywhere' }}>{formattedTitle}</h1>
            </Container>
        </div>
    );
};
