# 图书管理系统

一个简单的前后端交互图书管理项目，使用 Node.js + Express 构建 API 服务，前端使用原生 HTML/CSS/JavaScript。

## 项目结构

```
PersonalBookManagementPage/
├── index.html    # 前端页面
├── server.js     # 后端API服务
├── package.json  # 项目依赖配置
└── README.md     # 项目说明
```

## 功能特性

- 添加图书（书名、作者）
- 显示图书列表（卡片形式）
- 删除图书
- 数据存储在内存中

## 安装和运行

### 1. 安装依赖

```bash
cd PersonalBookManagementPage
npm install
```

### 2. 启动后端服务

```bash
npm start
```

服务将在 http://localhost:3000 启动

### 3. 打开前端页面

在浏览器中打开 `index.html` 文件

## API 接口

### 获取图书列表
- **接口**: `GET /books`
- **返回**: 图书数组

```json
[
  {
    "id": 1,
    "title": "JavaScript高级程序设计",
    "author": "Nicholas C. Zakas"
  }
]
```

### 添加图书
- **接口**: `POST /books`
- **请求体**: `{ "title": "书名", "author": "作者" }`
- **返回**: 新创建的图书对象

### 删除图书
- **接口**: `DELETE /books/:id`
- **参数**: `id` - 图书ID
- **返回**: 删除成功消息

## 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **后端**: Node.js, Express
- **跨域**: CORS

## 注意事项

- 数据存储在内存中，重启服务后数据会丢失
- 确保后端服务已启动才能正常使用前端功能