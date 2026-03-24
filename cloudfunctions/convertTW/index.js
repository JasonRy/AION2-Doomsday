const cloud = require('wx-server-sdk')
const OpenCC = require('opencc-js')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

exports.main = async (event) => {
  const converter = OpenCC.Converter({ from: 'cn', to: 'tw' })
  return { result: converter(event.text) }
}