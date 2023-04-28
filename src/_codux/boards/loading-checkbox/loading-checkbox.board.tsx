import { createBoard } from '@wixc3/react-board';
import { LoadingCheckbox } from '../../../components/loading-checkbox/loading-checkbox';

export default createBoard({
    name: 'LoadingCheckbox',
    Board: () => <LoadingCheckbox />
});
