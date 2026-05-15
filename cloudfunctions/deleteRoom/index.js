const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()
const _ = db.command

exports.main = async (event) => {
  const { roomId } = event
  if (!roomId) return { success: false, error: 'roomId required' }

  // 验证调用者是否为房间创建者
  const { OPENID } = cloud.getWXContext()
  const roomRes = await db.collection('rooms').doc(roomId).get().catch(() => null)
  if (!roomRes || !roomRes.data) return { success: false, error: 'room not found' }
  const isOwner = roomRes.data.creatorOpenid === OPENID || roomRes.data._openid === OPENID
  if (!isOwner) return { success: false, error: 'forbidden' }

  // 删除该房间所有报名记录
  await db.collection('signups').where({ roomId }).remove()

  // 删除房间
  await db.collection('rooms').doc(roomId).remove()

  return { success: true }
}
