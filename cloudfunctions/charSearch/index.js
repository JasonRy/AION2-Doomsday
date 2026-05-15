const https = require('https')

const BASE_HOST = 'tw.ncsoft.com'

function httpsGet(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: BASE_HOST,
      path: path,
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-TW,zh;q=0.9',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://tw.ncsoft.com/aion2/',
        'Origin': 'https://tw.ncsoft.com'
      }
    }
    console.log('[charSearch] requesting:', BASE_HOST + path)
    const req = https.request(options, (res) => {
      console.log('[charSearch] status:', res.statusCode)
      let data = ''
      res.on('data', chunk => { data += chunk })
      res.on('end', () => {
        console.log('[charSearch] response length:', data.length, 'preview:', data.slice(0, 100))
        try { resolve(JSON.parse(data)) }
        catch (e) { reject(new Error('parse error: ' + data.slice(0, 300))) }
      })
    })
    req.on('error', (e) => {
      console.error('[charSearch] request error:', e.message)
      reject(e)
    })
    req.setTimeout(12000, () => {
      req.destroy()
      reject(new Error('request timeout 12s'))
    })
    req.end()
  })
}

exports.main = async (event) => {
  const { action } = event

  try {
    if (action === 'servers') {
      const data = await httpsGet('/aion2/api/gameinfo/servers?lang=zh')
      return { success: true, data }
    }

    if (action === 'search') {
      const { keyword, race, serverId, page = 1, size = 30 } = event
      if (!keyword || !serverId) return { success: false, error: 'keyword and serverId required' }
      const raceParam = race ? `&race=${race}` : ''
      const path = `/aion2/api/search/aion2tw/search/v2/character?keyword=${encodeURIComponent(keyword)}${raceParam}&serverId=${serverId}&page=${page}&size=${size}`
      const data = await httpsGet(path)
      return { success: true, data }
    }

    if (action === 'info') {
      const { characterId, serverId } = event
      if (!characterId || !serverId) return { success: false, error: 'characterId and serverId required' }
      const path = `/aion2/api/character/info?lang=zh&characterId=${encodeURIComponent(characterId)}&serverId=${serverId}`
      const data = await httpsGet(path)
      return { success: true, data }
    }

    if (action === 'equipment') {
      const { characterId, serverId } = event
      if (!characterId || !serverId) return { success: false, error: 'characterId and serverId required' }
      const path = `/aion2/api/character/equipment?lang=zh&characterId=${encodeURIComponent(characterId)}&serverId=${serverId}`
      const data = await httpsGet(path)
      return { success: true, data }
    }

    return { success: false, error: 'unknown action' }
  } catch (e) {
    return { success: false, error: e.message }
  }
}
