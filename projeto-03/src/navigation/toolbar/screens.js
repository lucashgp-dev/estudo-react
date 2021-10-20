import { List } from "../../screen/List"
import { Icon, Icons } from "../../components/icons"
import { Hello } from "../../screen/Hello"


export const ToolBarTabs = [
    {
        route: 'home',
        type: Icons.Ionicons,
        activeIcon: 'home',
        inactiveIcon: 'home-outline',
        component: List,
    },
    {
        route: 'hello',
        type: Icons.Ionicons,
        activeIcon: 'barbell',
        inactiveIcon: 'barbell-outline',
        component: Hello,
    },
]