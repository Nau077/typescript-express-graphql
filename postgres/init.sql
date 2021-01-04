DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS articles;

CREATE TABLE IF NOT EXISTS articles(
    id bigint,
    text text,
    createdAt date,
    updatedAt date
);

CREATE TABLE IF NOT EXISTS <comments>(
    id bigint,
    text text,
    createdAt date,
    updatedAt date,
    articles_id_fkey bigint
);

-- ALTER TABLE comments ADD COLUMN articles_id_fkey bigint;

ALTER TABLE comments 
   ADD CONSTRAINT articles_id_fkey
   FOREIGN KEY articles_id_fkey
   REFERENCES articles(id)

INSERT INTO articles (id, text, createdAt, updatedAt)
VALUES(1, 'https://www.postgresqltutorial.com article', '2005-01-01', '2005-01-01');

INSERT INTO comments (id, text, createdAt, updatedAt, articles_id_fkey)
VALUES(1, 'https://www.postgresqltutorial.com article', '2005-01-01', '2005-01-01', 1);