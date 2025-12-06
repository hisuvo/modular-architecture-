"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosServices = void 0;
const db_1 = require("../../config/db");
const createTodos = async (user_id, title, description, completed, due_date) => {
    const result = await db_1.pool.query(`INSERT INTO todos(user_id, title, description, completed, due_date) VALUES($1, $2, $3, $4, $5)`, [user_id, title, description, completed, due_date]);
    return result;
};
const getTodos = async () => {
    const result = await db_1.pool.query(`SELECT * FROM todos`);
    return result;
};
const getSingleTodos = async (id) => {
    const result = await db_1.pool.query(`SELECT * FROM todos WHERE id=$1 RETURNING *`, [id]);
    return result;
};
const updateTodos = async (title, description, id) => {
    const result = await db_1.pool.query(`UPDATE todos SET title=$1, description=$2 WHERE id=$3`, [title, description, id]);
    return result;
};
const deleteTodos = async (id) => {
    const result = await db_1.pool.query(`DELETE FROM todos WHERE id=$1 RETURNING *`, [
        id,
    ]);
    return result;
};
exports.todosServices = {
    createTodos,
    getTodos,
    getSingleTodos,
    updateTodos,
    deleteTodos,
};
