import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Todos from './Components/Todos';
import Todo from './Components/Todo';

const route = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        component: About,
        exact: false
    },
    {
        path: '/contact',
        component: Contact,
        exact: false
    },
    {
        path: '/todos',
        component: Todos,
        exact: false
    },
    {
        path: '/todo/:id',
        component: Todo,
        exact: false
    }
]

export default route;