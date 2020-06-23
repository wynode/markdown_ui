# 文档说明
## 服务器API地址
前缀：
```http://115.29.173.126:21084/runningfast/api```


完整的API地址为：```前缀```+```具体接口路径```

比如，获取验证码都接口为：
```http://115.29.173.126:21084/runningfast/api``` + ```/v1.0/open/smscode```

->

```http://115.29.173.126:21084/runningfast/api/v1.0/open/smscode```

## 调用接口说明
- 如果参数格式是==JSON==的话：提交request请求时必须添加header头：==Content-Type:application/json==
- 请求中是否要包含头信息：==Authorization:{accesstoken}==
    - 接口中==包含==```/open/```的：不需要添加
    - 接口中==不包含==```/open/```：需要添加
        - 说明该接口都需要对应的权限才可以访问，所以需要在请求中包含头信息：```Authorization:{accesstoken}```
    - 当access token无效或者已过期时，返回：
```
{
  "code": 401,
  "message": "invalid access token: wrong or expired"
}
```

- 所有的接口的返回形式都是统一为：
    - 正常返回
```
{
  "code": 200,
  "message": "OK",
  "data": 某种类型的数据，比如字符串，数字，字典等等
}
```
    - 错误返回

```
{
  "code": 具体的错误码,
  "message": "具体的错误信息字符串"
}
```

[TOC]
