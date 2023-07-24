// create web server for comments
// 1. create web server
// 2. add comments
// 3. get comments
// 4. delete comments
// 5. edit comments

// 1. create web server
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const port = 3000;
// app.use(express.json());
// app.use(cors());

// // 2. add comments
// // 3. get comments
// // 4. delete comments
// // 5. edit comments
// let comments = [
//   {
//     id: 0,
//     name: "홍길동",
//     content: "안녕하세요",
//   },
//   {
//     id: 1,
//     name: "홍길동",
//     content: "안녕하세요",
//   },
//   {
//     id: 2,
//     name: "홍길동",
//     content: "안녕하세요",
//   },
// ];

// app.get("/comments", (req, res) => {
//   res.json(comments);
// });

// app.post("/comments", (req, res) => {
//   console.log(req.body);
//   const { name, content } = req.body;
//   const id = comments.length;
//   comments.push({
//     id,
//     name,
//     content,
//   });
//   res.status(201).json({ id });
// });

// app.delete("/comments/:id", (req, res) => {
//   const { id } = req.params;
//   comments = comments.filter((comment) => comment.id !== Number(id));
//   res.status(204).send();
// });

// app.patch("/comments/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, content } = req.body;
//   const targetComment = comments.find((comment) => comment.id === Number(id));
//   targetComment.name = name;
//   targetComment.content = content;
//   res.status(201).json({ id });
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
