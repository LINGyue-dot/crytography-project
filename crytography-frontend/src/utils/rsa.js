/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-04-07 16:48:30
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-04-07 17:02:44
 * @Description:
 */
/**
 * @Description: Rsa 公钥加密
 * @author qianlong
 * @date $
 */

/**
 * 蒙哥马利幂模  明文^e mod n
 * e 65537
 * p 3478071698956898786044169848212690817704794983713768568912431388982883793878002287614711652531743087737814467999489
 * q 36746043666799590428244633799627952632279158164343087642676032283815739666511279233373417143396810270092798736308917
 * n 127805374526130042283155944396124141804478824665042162917041483637254210511925280517542687897882161287172512853506553845925192557326303453731548268507917026122142913461670429214311602221240479274737794080665351419597459856902143413
 *  p q 最大7位保证 n 小于15位
 */

let _publicKey =
	15451829866871637157835322285981368257909662702017179618938441893812851839135701007414707361242660160726516425982157617888395496297175564092494360771780789356530407344198651072794547134768749456960016822143151487852505415103282680142588791649018023314678806465404604863356330006297098883982004525047307441769849519455298373632470316136183314905468165805443248580301483600783264377812159448601179288205780106055575592759850520179438931325137509505409000578746718044163844933796688752995186209440200810671836319989244095544524426281446540439152873791764107025517382490712194797558551469166407875602487428429334974134321n;

let _publicE = 3889n;

/**
 * 将字符串 转 BigInt
 * 先将字符串转为 ascii byte数组再将其拼接位字符串再转换位BigInt
 * @param str
 */
function originStrToBigInt(str) {
	const data = [];
	for (let i = 0; i < str.length; i++) {
		data.push(str.charCodeAt(i));
	}
	// 将 原str 转 BigInt
	// eslint-disable-next-line no-undef
	const hexStr = BigInt(
		"0x" + data.map(byte => byte.toString(16).padStart(2, "0")).join("")
	);
	// eslint-disable-next-line no-undef
	const originBigInt = BigInt(parseInt(hexStr));
	return originBigInt;
}

/**
 * 蒙哥马利幂模方法 求解
 * a^b%c
 * @param a
 * @param b
 * @param c
 * @returns {bigint}
 */
function rfs(a, b, c) {
	let res = 1n;
	a = a % c;
	while (b > 0n) {
		// eslint-disable-next-line eqeqeq
		if (b % 2n == 1n) res = (res * a) % c;
		a = (a * a) % c;
		b = b / 2n;
	}
	return res;
}

export function changePublicE(publicE) {
	_publicE = publicE;
}

export function changePublicKey(publicKey) {
	_publicKey = publicKey;
}

/**
 * 传递原密码
 * @param str
 */
export function Rsa(str) {
	const originBigInt = originStrToBigInt(str);
	// 生成密码的 rsa 加密字符串
	console.log(rfs(originBigInt, _publicE, _publicKey).toString());
	return rfs(originBigInt, _publicE, _publicKey).toString();
}
