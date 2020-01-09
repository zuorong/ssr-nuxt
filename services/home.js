export class HomeService {
  getToken ($axios, data) {
    const url = '/money'
    return $axios.$post(url, data)
  }
  getMoney ($axios) {
    const url = '/money'
    return $axios.$get(url)
  }
}
