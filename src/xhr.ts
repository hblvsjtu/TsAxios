import { AxiosRequestConfig } from './types'

export default function request(config: AxiosRequestConfig): void {
  const { url, method = 'get', data = null, params } = config
  const xhr = new XMLHttpRequest()
  xhr.open(method.toUpperCase(), url, true)
  xhr.send(data)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if ([200, 302].includes(xhr.status)) {
        // TODO
        console.log(xhr.response)
      }
    }
  }
}
