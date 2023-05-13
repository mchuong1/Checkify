import { createBoard } from '@wixc3/react-board';
import { NavigationBar } from '../../../components/navigation-bar/navigation-bar';

const navItems = [
    {
        label: 'Check',
        onClick: () => console.log('Check')
    },
        {
        label: 'Test',
        onClick: () => console.log('Test')
    }
]

export default createBoard({
    name: 'NavigationBar',
    Board: () => <NavigationBar title="Checkify" navItems={navItems} />
});
