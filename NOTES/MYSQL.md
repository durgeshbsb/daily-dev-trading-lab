# 11 june 2026

## indexing

Indexes are used to retrieve data from the database very fast.

CREATE INDEX idx_lastname
ON Persons (LastName);

CREATE INDEX idx_pname
ON Persons (LastName, FirstName);

ALTER TABLE table_name
DROP INDEX index_name;


# 5 july 2026
SHOW DATABASES;

SQL data types can be broadly divided into the following categories:

Numeric data types such as INT, TINYINT, BIGINT, FLOAT, REAL, etc.
Date and Time data types such as DATE, TIME, DATETIME, etc.
Character and String data types such as CHAR, VARCHAR, TEXT, etc.
Unicode character string data types such as NCHAR, NVARCHAR, NTEXT, etc.
Binary data types such as BINARY, VARBINARY, etc.
Miscellaneous data types such as CLOB, BLOB, XML, CURSOR, TABLE, etc.


