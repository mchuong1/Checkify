import styles from './App.module.scss';
import { TaskCard } from './components/task-card/task-card';
import { Button } from './components/button/button';
import { useState } from 'react';
import _ from 'lodash';
import { NavigationBar } from './components/navigation-bar/navigation-bar';

function App() {
    const [taskCards, setTaskCards] = useState<number[]>([]);

    const handleCardClick = (indexToRemove: number) => {
        setTaskCards(_.filter(taskCards, (cards, index) => index !== indexToRemove));
    };

    return (
        <div className={styles.App}>
            <NavigationBar title="Checkify" navItems={[]} />
            <div className={styles.cardListContainer}>
                {_.map(taskCards, (card, index) => (
                    <TaskCard title={`${card} Task`} onClick={() => handleCardClick(index)} />
                ))}
            </div>
            <Button
                label="Add Task"
                onClick={() => setTaskCards(_.concat(taskCards, taskCards.length as number))}
            />
        </div>
    );
}

export default App;
