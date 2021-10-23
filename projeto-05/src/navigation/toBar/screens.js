import { List } from '../../screens/list'
import { Icon, Icons } from '../../components/Icons'
import {One} from '../../screens/one'


export const ToBarTabs = [

    {

        route: 'home',
        type: Icons.Ionicons,
        activeIcon: 'home',
        inactiveIcon: 'home-outline',
        component: One,

    },

    {
        route: 'tela2',
        type: Icons.Ionicons,
        activeIcon: 'barbell',
        inactiveIcon: 'barbell-outline',
        component: List,
    }

]