/*
 * @Author: tanshaobo
 * @Date: 2023-05-06 16:52:37
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-05-06 17:24:08
 * @Description: 先天八卦
 * @FilePath: \yijing\src\config\xianTian.js
 */
import guaList from './guaList'

const order = [1, 5, 2, 3, 7, 4, 6, 8]
const xianTian = order.map((item) => guaList.find((it) => it.id === item))

export default xianTian
