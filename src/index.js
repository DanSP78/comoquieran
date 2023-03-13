import app from "./app"; //equivale al codigo que esta en app.js
import './database';
import { PUERTO } from "./config";
app.listen(PUERTO);
console.log("servidor en puerto", PUERTO);
