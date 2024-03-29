export const modelUrl = "/models/BTLMN_Outfits_Tier1_MP.glb"
import type { LemonNFT } from '../utils/types'
import type { Scene } from 'three'

export const wearLemonModel = (scene: Scene, lemon: LemonNFT): Scene => {

  const outstaffList = Object.entries(lemon.model).map(([key, outfit]) => {
    if (!outfit || key === "kind" || key === "cold_arm") return
    if (typeof outfit === 'object') {
      return outfit.flavour
    } else if (typeof outfit === 'string') {
      return outfit
    }
  }).filter(o => o)
  
  const outstaff = scene.getObjectByName('Armature')?.children

  outstaff?.forEach(os => {
    if (os.type == 'Bone') return;
    if (outstaffList.includes(os.name)) return
    os.visible = false;
  })

  return scene;
}