const { TodoRecord } = require('./records/todo.record');
const { pool } = require('./utils/db');

(async () => {
  const foundTodo = await TodoRecord.find(
    'cecf2aa3-9bee-46c5-b6f8-c3644025d5aa'
  );
  foundTodo.title = 'Buy me more cocaine';
  console.log(foundTodo);
  await foundTodo.update();

  //   const foundTodo = await TodoRecord.find(
  //     'd2bed4a5-6ca9-48f1-9b10-474ae89bc36f'
  //   );
  //   console.log(foundTodo);
  //   await foundTodo.delete();

  //   const firstTodoItem = new TodoRecord({
  //     title: 'Next day information',
  //   });
  //   const newId = await firstTodoItem.insert();
  //   console.log(`New to do item added with ID ${newId}`);

  //   const del = await firstTodoItem.delete();
  //   console.log(`Deleted todo item with ID ${newId}`);

  await pool.end();
})();
