document.addEventListener("DOMContentLoaded", () => {
  const todos = [
    {
      _id: "641bf3c9c0a964b65289902a",
      title: "파이썬 공부",
      description: "프로그래밍 시작하기 in Python 토픽 끝내기",
      isComplete: false,
      createdAt: "2023-03-23T06:34:11.617Z",
      updatedAt: "2023-03-23T06:34:11.617Z",
    },
    {
      _id: "641bf3c9c0a964b65289903c",
      title: "독서",
      description: "30 페이지",
      isComplete: false,
      createdAt: "2023-03-23T06:34:10.617Z",
      updatedAt: "2023-03-23T06:34:10.617Z",
    },
  ];

  const todoList = document.getElementById("todo-list");

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = `${todo.title} - ${todo.description}`;
    if (todo.isComplete) {
      li.classList.add("complete");
    }
    todoList.appendChild(li);
  });
});
