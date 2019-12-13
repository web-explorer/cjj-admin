import signIn from './sign-in/index'
import signUp from './sign-up/index'
import home from './home/index'

export default [
    {
        path: '/',
        redirect: '/sign-in'
    },
    signIn,
    signUp,
    home
]