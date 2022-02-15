const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routes init
route(app);

// req: request: gởi lên cái URL nó khớp vs tuyến đường ở backend. Nếu khớp sẽ lọt vào function handler sẽ nhận 1 cái biến là request, Biến request chứa tất cả thông tin liên quan đến yêu cầu gởi đi (vd từ biến req có thể lấy ra các thông tin ở request header)

// res: response: server nhân request để xử lý xòng trả về 1 response render ra client (res nếu cần databse thì chọc vào dataabse, ...)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Query parameters: Truyền dữ liệu qua chính URL của mình (cú pháp param là "?q="value" từ tham số thư 2 trở đi thì đổi dấu ? thành &ref="value" muốn thêm tham số nữa thì vấn tham số &author"value"")
