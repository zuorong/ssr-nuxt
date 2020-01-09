export function getCookie (args) {
  if (!args) {
    return false
  }
  const temp = args.split('; ')
  const res = {}
  temp.forEach((n) => {
    const cookie = n.split('=')
    res[cookie[0]] = decodeURIComponent(cookie[1])
  })
  return res
}
