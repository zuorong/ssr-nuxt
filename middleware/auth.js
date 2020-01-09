import Cookie from 'js-cookie'
import { getCookie } from '~/utils/tools'
export default function (context) {
  let token = ''
  if (process.server) {
    const cookie = context.req.headers.cookie
    token = cookie && getCookie(cookie).token
  } else {
    token = Cookie.get('token')
  }
  if (!token) {
    return context.redirect(`/login?redirect=${context.route.path}`)
  }
}
