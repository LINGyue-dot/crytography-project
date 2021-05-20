/**
 * @Description:
 * @author qianlong
 * @date $
 */
/**
 * @Description:
 * @author qianlong
 * @date $
 */
/**
 * 字母表
 */
const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

const smallAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

/**
 * Caesar加密函数
 * @param  {[type]} k    密钥
 * @param  {[type]} pText 明文
 */
export function encryptCaesarEx (k, pText) {
  let pArray = [] // 明文数组
  const cArray = [] // 密文数组
  let cText = ''// 密文
  k = parseInt(k) % 26

  pArray = pText.split('') // 将明文分成一个个字符存入数组
  console.log(pArray.length)

  for (let i = 0; i < pArray.length; i++) {
    if (pArray[i].toString() !== ' ') { // 非空格字符 空格为string
      // pArray[i] = pArray[i].toUpperCase() // 将字符全部转化为大写
      if (pArray[i].charCodeAt() < 65 || pArray[i].charCodeAt() > 122 || (pArray[i].charCodeAt() > 90 && pArray[i].charCodeAt() < 97)) {
        cArray.push(pArray[i])
        continue
      }

      let encryptIndex
      if (pArray[i].charCodeAt() >= 97) { // a-z
        encryptIndex = (pArray[i].charCodeAt() - 97 + parseInt(k)) % 26 // 计算字符在字母表的索引
        cArray.push(smallAlphabet[encryptIndex]) // 将加密得到的密文字母存入密文数组中
      } else {
        encryptIndex = (pArray[i].charCodeAt() - 65 + parseInt(k)) % 26 // 计算字符在字母表的索引
        cArray.push(alphabet[encryptIndex]) // 将加密得到的密文字母存入密文数组中
      }

      //  encryptIndex = (pArray[i].charCodeAt() - 65 + parseInt(k)) % 26 // 计算字符在字母表的索引
      // cArray.push(alphabet[encryptIndex]) // 将加密得到的密文字母存入密文数组中
    } else { // 空格字符
      cArray[i] = ' ' // 保存字符串之间的空格符
    }
  }
  cText = cArray.join('') // 将密文数组拼接为密文
  return cText // 返回加密的密文
}

/**
 * Caesar解密函数
 * @param  {[type]} k      密钥
 * @param  {[type]} cText 密文
 * @return {[type]} pText      明文
 */
export function decryptCaesarEx (k, cText) {
  var pArray = [] // 明文数组
  let cArray = [] // 密文数组
  let pText = '' // 明文

  k = parseInt(k) % 26

  cArray = cText.split('') // 将密文分成一个个字符存入数组

  for (let i = 0; i < cArray.length; i++) {
    if (cArray[i].toString() !== ' ') { // 非空格字符 空格为string
      // cArray[i] = cArray[i].toUpperCase() // 将字符全部转化为大写

      if (cArray[i].charCodeAt() < 65 || cArray[i].charCodeAt() > 122 || (cArray[i].charCodeAt() > 90 && cArray[i].charCodeAt() < 97)) {
        pArray.push(cArray[i])
        continue
      }
      // console.log(cArray[i].charCodeAt())

      let encryptIndex
      if (cArray[i].charCodeAt() >= 97) { // a-z
        encryptIndex = (cArray[i].charCodeAt() - 97 - parseInt(k) + 26) % 26 // 计算字符在字母表的索引
        pArray.push(smallAlphabet[encryptIndex]) // 将加密得到的密文字母存入密文数组中
        // console.log(97, cArray[i], encryptIndex)
      } else {
        encryptIndex = (cArray[i].charCodeAt() - 65 - parseInt(k) + 26) % 26 // 计算字符在字母表的索引
        pArray.push(alphabet[encryptIndex]) // 将加密得到的密文字母存入密文数组中
        // console.log(65, cArray[i], cArray[i].charCodeAt(), parseInt(k), encryptIndex)
      }
      //
      // const encryptIndex = (cArray[i].charCodeAt() - 65 - parseInt(k) + 26) % 26 // 计算字符在字母表的索引
      // pArray.push(alphabet[encryptIndex]) // 将解密得到的明文字母存入明文数组中
    } else { // 空格字符
      pArray[i] = ' ' // 保存字符串之间的空格符
    }
  }

  pText = pArray.join('') // 将明文数组拼接为明文

  return pText // 返回解密的明文
}
