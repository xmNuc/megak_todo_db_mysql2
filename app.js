const { TodoRecord } = require('./records/todo.record');
const { pool } = require('./utils/db');

(async () => {
  const firstTodoItem = new TodoRecord({
    title: 'Next day information',
  });
  await firstTodoItem.insert();
  console.log(firstTodoItem);

  await pool.end();
})();
