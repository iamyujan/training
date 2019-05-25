import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services';

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
        path: '/services',
        component: Services,
        exact: false
    }
]

export default route;