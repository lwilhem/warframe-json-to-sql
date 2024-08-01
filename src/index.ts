#!/usr/bin/env node

import { program } from "commander"
import { db } from "./utils/db"

program
  .name("jwf-json-to-sql")
  .description("Convert Data From warframe-items into an SQL database")
  .version("1.0.0")

program
  .command("db")
  .description("Create a new SQLite database")
  .action(() => {
    db.pragma("journal_mode = WAL")
  })
