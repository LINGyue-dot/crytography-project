# temp

## 思路



### 登入注册

利用 RSA 对密码进行加密，并签发 token 作为数字签名



#### 解决思路

* 前端用公钥对密码进行加密后传输给后端
* 后端用私钥进行解密核对/添加账号
* 成功就签发 token 





### 文件加密

#### 解决思路

* 将文件转 base64 ，对其进行加密









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





### 图片加密(`/content/image`)

前向后(`post`)

```json
{
    
}
```









## RSA



### 前置

* 寻找非常大的**质数** p q
* 利用欧拉函数求 n=p*q 互质的个数 &(n)
* 取 1<e<&(n) ，e(n,e) 作为公钥，正式环境中取65537
* 使得 ed mod &(n) =1 ，利用欧几里德算法求 d ，(n,d) 就为私钥对



### 加密

密文 = 明文 ^ e mod n ， 利用蒙哥马利方法计算



### 解密

明文 = 密文 ^ d mod n， 利用蒙哥马利方法计算





```java
       // 公钥私钥中用到的两个大质数p,q'''
        BigInteger p = new BigInteger("106697219132480173106064317148705638676529121742557567770857687729397446898790451577487723991083173010242416863238099716044775658681981821407922722052778958942891831033512463262741053961681512908218003840408526915629689432111480588966800949428079015682624591636010678691927285321708935076221951173426894836169");
        BigInteger q = new BigInteger("144819424465842307806353672547344125290716753535239658417883828941232509622838692761917211806963011168822281666033695157426515864265527046213326145174398018859056439431422867957079149967592078894410082695714160599647180947207504108618794637872261572262805565517756922288320779308895819726074229154002310375209");

        RSA rsa = new RSA();
        // 生成公钥私钥'''
        // pubkey, selfkey = gen_key(p, q)
        BigInteger[][] keys = rsa.genKey(p, q);
        BigInteger[] pubkey = keys[0];
        BigInteger[] selfkey = keys[1];

        // 需要被加密的信息转化成数字，长度小于秘钥n的长度，如果信息长度大于n的长度，那么分段进行加密，分段解密即可。'''
//        BigInteger m = new BigInteger("1356205320457610288745198967657644166379972189839804389074591563666634066646564410685955217825048626066190866536592405966964024022236587593447122392540038493893121248948780525117822889230574978651418075403357439692743398250207060920929117606033490559159560987768768324823011579283223392964454439904542675637683985296529882973798752471233683249209762843835985174607047556306705224118165162905676610067022517682197138138621344578050034245933990790845007906416093198845798901781830868021761765904777531676765131379495584915533823288125255520904108500256867069512326595285549579378834222350197662163243932424184772115345");

//        String temp = "13213";
        String temp = new String("123");
        byte[] bytemsg = temp.getBytes(); // 默认 ascii 编码

        System.out.println("------------------");
        for (int i = 0; i < bytemsg.length; i++)
            System.out.println(bytemsg[i]);
        System.out.println("------------------");

        BigInteger t = new BigInteger(bytemsg);

        System.out.println("------------------");
        String tempS = "7166205800954081848";
        BigInteger tempC = new BigInteger(tempS);


//        BigInteger t =new BigInteger("hello world");

        System.out.println("被加密信息：" + t);
        // 信息加密'''
        BigInteger c = rsa.encrypt(t, pubkey);
        System.out.println("密文：" + c);
        // 信息解密'''
        BigInteger d = rsa.decrypt(tempC, selfkey);
        byte[] tempArr = d.toByteArray();
        System.out.println(new String(tempArr));


```



