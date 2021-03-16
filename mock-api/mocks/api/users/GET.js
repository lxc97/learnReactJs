let users = [
  {
    id: "1",
    name: "Lê Xuân Chiến",
    age: 24,
    address: "New York",
    tags: ["nice", "developer"],
  },
  {
    id: "2",
    name: "Lê Thị Phương",
    age: 18,
    address: "London",
    tags: ["nice"],
  },
  {
    id: "3",
    name: "Nguyễn Thị Nga",
    age: 18,
    address: "Sidney",
    tags: ["cool", "teacher"],
  },
  {
    id: "4",
    name: "Nguyễn Thị An",
    age: 18,
    address: "Sidney",
    tags: ["cool", "teacher"],
  },
  {
    id: "5",
    name: "Nguyễn Thị Dung",
    age: 18,
    address: "Sidney",
    tags: ["cool", "teacher"],
  },
  {
    id: "6",
    name: "Nguyễn Giang Sơn",
    age: 18,
    address: "Sidney",
    tags: ["cool", "teacher"],
  },
  {
    id: "7",
    name: "Nguyễn Bích",
    age: 18,
    address: "Sidney",
    tags: ["cool", "teacher"],
  },
  {
    id: "8",
    name: "Lê Xuân Trường",
    age: 24,
    address: "New York",
    tags: ["nice", "developer"],
  },
  {
    id: "9",
    name: "Lê Thị Phương Anh",
    age: 18,
    address: "London",
    tags: ["nice"],
  },
  {
    id: "10",
    name: "Nguyễn An Vy",
    age: 18,
    address: "Sidney",
    tags: ["cool", "teacher"],
  },
  {
    id: "11",
    name: "Nguyễn Lê Chi Anh",
    age: 18,
    address: "Sidney",
    tags: ["cool", "teacher"],
  },
  {
    id: "12",
    name: "Nguyễn Vũ Trường Sơn",
    age: 18,
    address: "Sidney",
    tags: ["cool", "teacher"],
  },
  {
    id: "13",
    name: "Nguyễn Lê Hách",
    age: 18,
    address: "Sidney",
    tags: ["cool", "teacher"],
  },
  {
    id: "14",
    name: "Lê Xuân An Nhiên",
    age: 18,
    address: "Sidney",
    tags: ["cool", "teacher"],
  },
];

module.exports = (req, res) => {
  let { key, page, pageSize } = req.query;
  if (!key) {
    key = "";
  }
  if (!page) {
    page = 1;
  }
  if (!pageSize) {
    pageSize = 10;
  }
  let filterUsers = users.filter((user, index) =>
    user.name.toLowerCase().includes(key.toLowerCase())
  );
  let total = filterUsers.length;
  let fromIndex = (page - 1) * pageSize;
  let endIndex = page * pageSize;
  if (endIndex > total) {
    endIndex = total;
  }
  filterUsers = filterUsers.filter(
    (_, index) => index >= fromIndex && index < endIndex
  );
  res.status(200).json({
    success: true,
    data: filterUsers,
    key,
    page,
    pageSize,
    total,
  });
};
