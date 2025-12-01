import { pool } from "../../config/db";

const createTodos = async (
  user_id: string,
  title: string,
  description: string,
  completed: boolean,
  due_date: string
) => {
  const result = await pool.query(
    `INSERT INTO todos(user_id, title, description, completed, due_date) VALUES($1, $2, $3, $4, $5)`,
    [user_id, title, description, completed, due_date]
  );

  return result;
};

const getTodos = async () => {
  const result = await pool.query(`SELECT * FROM todos`);
  return result;
};

const getSingleTodos = async (id: string) => {
  const result = await pool.query(
    `SELECT * FROM todos WHERE id=$1 RETURNING *`,
    [id]
  );
  return result;
};

const updateTodos = async (title: string, description: string, id: string) => {
  const result = await pool.query(
    `UPDATE todos SET title=$1, description=$2 WHERE id=$3`,
    [title, description, id]
  );

  return result;
};

const deleteTodos = async (id: string) => {
  const result = await pool.query(`DELETE FROM todos WHERE id=$1 RETURNING *`, [
    id,
  ]);

  return result;
};

export const todosServices = {
  createTodos,
  getTodos,
  getSingleTodos,
  updateTodos,
  deleteTodos,
};
