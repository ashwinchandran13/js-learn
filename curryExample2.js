// logger example
function log(type, msg) {
  if (type == "error")
    console.error(msg);
  if (type == "warn")
    console.warn(msg);
  if (type == "info")
    console.info(msg);
}

function curry(log) {
    return function (type) {
        return function (msg) {
            return log(type, msg)
        }
    }
}

log = curry(log)    // assigning currying to log fn

const error = log('error')
error('it is an error')

const warn = log('warn')
error('it is a warn')

const info = log('info')
error('it is an info')