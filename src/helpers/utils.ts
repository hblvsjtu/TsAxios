const myToString = Object.prototype.toString

export function isDate(date: any): date is Date {
  return myToString.call(date).slice(8, -1) === 'Date'
}

export function isObject(obj: any): obj is Object {
  return obj && typeof obj === 'object'
}
