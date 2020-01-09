export class HomeService {
  getList (data, cookie) {
    const url = '/index.php'
    console.log(url)
  }
  getTest (cookie) {
    const url = '/test.php'
    console.log(url)
  }
  getToken ($axios, data) {
    const url = '/index.php'
    return $axios.$post(url, data)
  }
  getWater ($axios) {
    const url = '/test.php'
    return $axios.$get(url)
  }
  getMoney ($axios) {
    const url = '/money'
    return $axios.$get(url)
  }
}
