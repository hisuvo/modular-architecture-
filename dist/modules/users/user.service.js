"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
// here we write out bisnuss logic
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const db_1 = require("../../config/db");
const createUser = async (payload) => {
    const { name, role, email, password, age, phone, address } = payload;
    const hashPassword = await bcryptjs_1.default.hash(password, 10);
    const result = await db_1.pool.query(`INSERT INTO users(name, role, email, password, age, phone, address) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [name, role, email, hashPassword, age, phone, address]);
    return result;
};
const getUser = async () => {
    const result = await db_1.pool.query(`SELECT * FROM users`);
    return result;
};
const getSingleUser = async (id) => {
    const result = await db_1.pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
    return result;
};
const updateUser = async (payload, id) => {
    const { name, email, age, phone, address } = payload;
    const result = await db_1.pool.query(`UPDATE users set name=$1, email=$2, age=$3, phone=$4, address=$5 WHERE id=$6 RETURNING *`, [name, email, age, phone, address, id]);
    return result;
};
const deleteUser = async (id) => {
    const result = await db_1.pool.query(`DELETE FROM users WHERE id=$1 RETURNING *`, [
        id,
    ]);
    return result;
};
exports.userServices = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
