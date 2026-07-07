https://www.geeksforgeeks.org/sql/sql-cheat-sheet/

https://www.dbvis.com/wp-content/uploads/2024/04/SQL-Cheat-Sheet.pdf

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

1. Numeric data types such as INT, TINYINT, BIGINT, FLOAT, REAL, etc.
2. Date and Time data types such as DATE, TIME, DATETIME, etc.
3. Character and String data types such as CHAR, VARCHAR, TEXT, etc.
4. Unicode character string data types such as NCHAR, NVARCHAR, NTEXT, etc.
5. Binary data types such as BINARY, VARBINARY, etc.
6. Miscellaneous data types such as CLOB, BLOB, XML, CURSOR, TABLE, etc.

# 6 july 2026

choosing between relational and non relational database:

| Situation             | SQL                  | NoSQL              |
| --------------------- | -------------------- | ------------------ |
| Fixed schema          | ✅                    | ❌                  |
| Flexible schema       | ❌                    | ✅                  |
| Complex relationships | ✅                    | ❌                  |
| JOINs                 | ✅                    | ❌                  |
| Transactions          | ✅                    | Limited/varies     |
| Analytics             | ✅                    | Limited            |
| Horizontal scaling    | Moderate             | Excellent          |
| Nested documents      | Possible but awkward | ✅                  |
| Rapid schema changes  | Difficult            | Easy               |
| Data consistency      | Strong               | Often configurable |

Choose SQL if:

Your data has many relationships.
You need transactions and strong consistency.
You expect to write reports or perform complex queries.
Your schema is relatively stable.

Choose NoSQL if:

Your data is document-like or semi-structured.
The schema changes frequently.
You need to scale horizontally for very large volumes of mostly independent data.
You rarely need joins across different records.


Atomicity, Consistency, Isolation, and Durability (ACID) compliance: ACID compliance refers to a set of properties that guarantee the reliability, consistency, and data integrity of database transactions



# SQL Joins
select * from patients left/right/inner/full join doctors where patients.doctor_id = doctors.id
cross join, self join. union
?? group by , having , any-all
select into, insert into select
comments -- /* */
<> not equal
backup database bsbprime to disk = 'D:\backups\bsbprime.bak'

drop table table_name;
drop database database_name;
truncate table table_name;
alter table table_name drop column column_name;

sql constraints
subquery
indexing

# 7 july 2026
Alter is Data defination language(DDL) for changing the table schema
and Update is Data manipulation language(DML) for changing the table data

alter add, modify column, drop column, rename column, add primary key, add foreign key, add constraint, drop constraint


- where is used before grouping or aggregation and having is used after grouping
## sub query

## normalization
Normalization organizes relational data to minimize redundancy and prevent update/insert/delete anomalies by splitting tables based on dependencies while preserving meaning.

1NF: Each column contains atomic values, and there are no repeating groups.
2NF: Meets 1NF and removes partial dependencies on a composite primary key.
3NF: Meets 2NF and removes transitive dependencies.
BCNF: Every determinant must be a candidate key.
4NF: Removes multi-valued dependencies.
5NF (PJNF): Removes join dependencies to avoid data redundancy.




