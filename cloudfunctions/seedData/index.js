const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

// ── 模拟队员数据 ──────────────────────────────
const members = [
  { race: '天族', className: '希埃爾',     charName: '晨曦之刃',   jobType: '输出', jobClass: '剑星',   power: '3850', remark: '' },
  { race: '天族', className: '奈薩肯',     charName: '银翼流光',   jobType: '输出', jobClass: '弓星',   power: '3620', remark: '只打周末' },
  { race: '天族', className: '白傑爾',     charName: '圣光护盾',   jobType: '防御', jobClass: '守护星', power: '3740', remark: '' },
  { race: '天族', className: '凱西內爾',   charName: '愈光使者',   jobType: '辅助', jobClass: '治愈星', power: '3500', remark: '治疗主' },
  { race: '天族', className: '尤斯迪埃',   charName: '天翼法师',   jobType: '输出', jobClass: '魔道星', power: '3910', remark: '' },
  { race: '天族', className: '艾瑞爾',     charName: '风之精灵',   jobType: '输出', jobClass: '精灵星', power: '3680', remark: '' },
  { race: '天族', className: '普雷奇翁',   charName: '护法金刚',   jobType: '辅助', jobClass: '护法星', power: '3450', remark: '辅助为主' },
  { race: '天族', className: '梅斯蘭泰達', charName: '苍穹铁壁',   jobType: '防御', jobClass: '守护星', power: '3800', remark: '' },
  { race: '天族', className: '希塔尼耶',   charName: '月影弓手',   jobType: '输出', jobClass: '弓星',   power: '3560', remark: '' },
  { race: '天族', className: '納尼亞',     charName: '圣裁天使',   jobType: '输出', jobClass: '剑星',   power: '3990', remark: '高战力' },
  { race: '魔族', className: '伊斯拉佩爾', charName: '暗影杀手',   jobType: '输出', jobClass: '杀星',   power: '3750', remark: '' },
  { race: '魔族', className: '吉凱爾',     charName: '炎魔法师',   jobType: '输出', jobClass: '魔道星', power: '3820', remark: '' },
  { race: '魔族', className: '崔妮爾',     charName: '铁甲魔将',   jobType: '防御', jobClass: '守护星', power: '3600', remark: '坦克位' },
  { race: '魔族', className: '露梅爾',     charName: '血月治愈',   jobType: '辅助', jobClass: '治愈星', power: '3480', remark: '' },
  { race: '魔族', className: '瑪爾庫坦',   charName: '狂风弓魔',   jobType: '输出', jobClass: '弓星',   power: '3700', remark: '输出稳' },
  { race: '魔族', className: '阿斯佩爾',   charName: '黑翼守护',   jobType: '防御', jobClass: '守护星', power: '3880', remark: '' },
  { race: '魔族', className: '艾萊修奇卡', charName: '魔域精灵',   jobType: '输出', jobClass: '精灵星', power: '3540', remark: '新手' },
  { race: '魔族', className: '布里特拉',   charName: '烈焰剑魂',   jobType: '输出', jobClass: '剑星',   power: '3960', remark: '' },
  { race: '魔族', className: '奈蒙',       charName: '暗域护法',   jobType: '辅助', jobClass: '护法星', power: '3420', remark: '辅助' },
  { race: '魔族', className: '哈達爾',     charName: '深渊杀神',   jobType: '输出', jobClass: '杀星',   power: '4050', remark: '输出王' },
]

// ── 模拟队伍数据 ──────────────────────────────
const rooms = [
  {
    name: '深渊精英队',
    dungeonName: '深淵重鑄：盧德萊',
    raidTime: '2026-03-25 20:00',
    maxPlayers: 8,
    locked: false,
    creatorOpenid: 'mock_leader_001',
  },
  {
    name: '净化讨伐队',
    dungeonName: '侵蝕淨化所',
    raidTime: '2026-03-26 21:00',
    maxPlayers: 6,
    locked: false,
    creatorOpenid: 'mock_leader_002',
  },
  {
    name: '周常副本组',
    dungeonName: '深淵重鑄：盧德萊',
    raidTime: '2026-03-28 20:30',
    maxPlayers: 8,
    locked: true,
    creatorOpenid: 'mock_leader_001',
  },
]

exports.main = async () => {
  try {
    // 写入队员
    const memberResults = await Promise.all(
      members.map(m => db.collection('members').add({ data: { ...m, createTime: db.serverDate() } }))
    )

    // 写入队伍
    const roomResults = await Promise.all(
      rooms.map(r => db.collection('rooms').add({ data: { ...r, createTime: db.serverDate() } }))
    )

    // 为第一个队伍写入8条报名记录
    const roomId = roomResults[0]._id
    const signupMembers = members.slice(0, 8)
    await Promise.all(
      signupMembers.map((m, i) => db.collection('signups').add({
        data: {
          charName: m.charName,
          race: m.race,
          className: m.className,
          jobType: m.jobType,
          jobClass: m.jobClass,
          power: m.power,
          remark: m.remark,
          roomId,
          order: i,
          createTime: db.serverDate()
        }
      }))
    )

    return { success: true, members: memberResults.length, rooms: roomResults.length }
  } catch (e) {
    return { success: false, error: e.message }
  }
}
