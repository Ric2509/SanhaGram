CREATE TYPE "products_status" AS ENUM (
  'out_of_stock',
  'in_stock',
  'running_low'
);

CREATE TABLE "users" (
  "idUser" SERIAL PRIMARY KEY,
  "full_name" varchar,
  "email" varchar,
  "password" varchar
);

CREATE TABLE "chat" (
  "idChat" int PRIMARY KEY,
  "created_at" datetime DEFAULT (now())
);

CREATE TABLE "message" (
  "timeSent" datetime,
  "idUser" int,
  "idChat" int,
  "text" varchar,
  PRIMARY KEY ("timeSent", "idUser", "idChat")
);

CREATE TABLE "conversation" (
  "idUser" int,
  "idChat" int,
  PRIMARY KEY ("idUser", "idChat")
);

ALTER TABLE "message" ADD FOREIGN KEY ("idUser") REFERENCES "users" ("idUser");

ALTER TABLE "message" ADD FOREIGN KEY ("idChat") REFERENCES "chat" ("idChat");

ALTER TABLE "conversation" ADD FOREIGN KEY ("idChat") REFERENCES "chat" ("idChat");

ALTER TABLE "conversation" ADD FOREIGN KEY ("idUser") REFERENCES "users" ("idUser");

