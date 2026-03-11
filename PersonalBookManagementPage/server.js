const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// 使用中间件
app.use(cors());
app.use(express.json());

// 内存数组存储图书数据
let books = [
    { id: 1, title: 'JavaScript高级程序设计', author: 'Nicholas C. Zakas' },
    { id: 2, title: '深入浅出Node.js', author: '朴灵' },
    { id: 3, title: 'CSS揭秘', author: 'Lea Verou' }
];

let nextId = 4;

// GET /books - 返回图书列表
app.get('/books', (req, res) => {
    res.json(books);
});

// POST /books - 添加图书
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    
    if (!title || !author) {
        return res.status(400).json({ error: '书名和作者不能为空' });
    }
    
    const newBook = {
        id: nextId++,
        title,
        author
    };
    
    books.push(newBook);
    res.status(201).json(newBook);
});

// DELETE /books/:id - 删除图书
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: '图书不存在' });
    }
    
    books.splice(index, 1);
    res.json({ message: '删除成功' });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`图书管理API服务已启动，访问地址：http://localhost:${PORT}`);
    console.log(`API接口：`);
    console.log(`  GET  http://localhost:${PORT}/books - 获取图书列表`);
    console.log(`  POST http://localhost:${PORT}/books - 添加图书`);
    console.log(`  DELETE http://localhost:${PORT}/books/:id - 删除图书`);
});