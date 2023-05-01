import styles from './App.module.scss';
import { TaskCard } from './components/task-card/task-card';

function App() {
    return (
        <div className={styles.App}>
            <TaskCard title={"The very first task"}/>
        </div>
    );
}

export default App;
