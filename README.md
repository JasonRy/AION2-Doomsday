# Aion2 角色查詢小程序

永恆紀元2 微信小程序，提供角色查詢、裝備詳情、攻擊力分析等功能。

---

## 開發日誌

### 2026-03-26
**feat: 攻擊力分析系統**
- 新增攻擊力分析模塊，計算公式：固定攻擊力合計 × (1 + 攻擊力增加%) = 最終攻擊力
- 詳情頁新增「攻擊力分析」摘要卡片，點擊展開全屏詳情疊層
- 詳情疊層按裝備槽位分組展示（每件裝備一個折疊項），同時顯示固定值與百分比來源
- 槽位名稱英文→中文映射（MainHand→主手、SubHand→副手 等）
- 裝備名稱作為組標題，槽位名作為副標題

**feat: 守護力額外攻擊力**
- 調用 daevanion detail 接口（boardId 取自 `boardList[].id`），解析 `openStatEffectList` 中的額外攻擊力
- 正則同時匹配繁體「額外攻擊力」與簡體「额外攻击力」

**fix: 裝備接口 enchantLevel 參數**
- 修正為 `enchantLevel + exceedLevel` 之和，確保強化+突破後的屬性正確返回

**fix: WeaponFixingDamage 基礎攻擊力公式**
- 非突破時使用 `(minValue + value) / 2` 計算基礎攻擊力，消除接口返回值的膨脹誤差

**fix: 攻擊力相關正則兼容簡繁體**
- `parseDescToG`、`parseStatToG`、`magicStoneStat` 判斷均補充簡體匹配

**known issue / TODO**
- 角色等級基礎攻擊力（LV45 = 61）官方 API 暫未開放，目前寫死為 61
  → 待接口開放後改為動態讀取並建立等級對照表（見 `charSearch.js` _calcAttack TODO 注釋）

---

### 歷史記錄

#### 2026-03-24
- feat: CD周期自動解鎖與隊伍結束功能
- style: 全局UI優化——種族色條、按鈕反饋、圓角統一、對比度提升
- fix: 修復白屏——替換對象展開語法及中文CSS類名
- style: 複製名稱按鈕背景改為午夜深藍 #0d1628
- style: 複製名稱按鈕文字改為金色 #c9a84c
