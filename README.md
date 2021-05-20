# Crytography

一个前端Vue2.x与后端springboot的密码学课设



## 实现功能

* 密码加密: Rsa 进行密码验证，同时生成 token

* 图片加密: md 5 图图片加密并传输数据
* 二维码伪装: 对于不同权限的用户进行不同的二维码加密







## 思路



### 登入注册

利用 Rsa 对密码进行加密，并签发 token 作为数字签名

token 为 账号+' '+ md5 对字符串（账号+'1'）组成



#### 解决思路

* 前端用公钥对密码进行加密后传输给后端
* 后端用私钥进行解密核对/添加账号
* 成功就签发 token 















### 图片加密

利用 md5 对数据加密并加入图片的源数据中，借助图片来进行传输数据



#### 解决思路

* 将图片转 base64 ，起点和终点放在特定位置
* 将加密过的数据体放在起点和终点
* 加密过的数据不应该被渲染 img 的 base64 中



#### 加密





#### 解密













## Rsa



### 前置

* 寻找非常大的**质数** p q
* 利用欧拉函数求 n=p*q 互质的个数 &(n)
* 取 1<e<&(n) ，e(n,e) 作为公钥，正式环境中取65537
* 使得 ed mod &(n) =1 ，利用欧几里德算法求 d ，(n,d) 就为私钥对



### 加密

密文 = 明文 ^ e mod n ， 利用蒙哥马利方法计算



### 解密

明文 = 密文 ^ d mod n， 利用蒙哥马利方法计算







## md5











### CORS img url



* ```
  https://jrainlau.github.io/sphinx/img/sphinx.png
  ```



###



























## 前端实现

种种原因为了方便用Vue2.x



















## api



baseUrl : 120.27.242.14:1234/api/cryptography



### base api struct

```json
{
    header:{
        X-Token:''// every http request  except register
    },
    data:{
        token_vaild:, // true vaild
        code: ,// 200 success
        err_message: // 
        data:{ // translate data
    	}
    }
}
```









### 注册(`/user/register`)

前向后(`post`)

```json
{
    data:{
        account:'',
        password:''
    }
}
```

后向前

```json
{
    header:{
        X-Token:'' // token
    },
    data{
    	data:{
    		flag: true // success flag
		}
	}
}
```





### 获取公钥(`/content/key`)

get

后向前

```json
{
    publicE:'',
    publicN:''
}
```



### 图片加密(`/content/image`)

前向后(`post`)

```json
{
    
}
```





