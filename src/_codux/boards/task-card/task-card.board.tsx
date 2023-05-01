import { createBoard } from '@wixc3/react-board';
import { TaskCard } from '../../../components/task-card/task-card';

export default createBoard({
    name: 'TaskCard',
    Board: () => <TaskCard title="This is a test of a very long task to see" />,
    environmentProps: {
        windowWidth: 390,
        windowHeight: 844,
    },
});
