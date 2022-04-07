/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-04-07 16:48:30
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-04-07 16:59:30
 * @Description:
 */
/**
 * @Description:
 * @author qianlong
 * @date $
 */
const path = require("path");
module.exports = {
	publicPath: "./",
	lintOnSave: false,
	configureWebpack: {
		resolve: {
			extensions: [],
			// 别称配置,可以自由添加其他路径
			alias: {
				"@": path.resolve(__dirname, "src"),
			},
		},
	},
	// 配置eslint的自动修复
};
