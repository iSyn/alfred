------ MEMOS ---------------------------

INSERT INTO MEMOS
    (TITLE, DESCRIPTION, TIMESTAMP)
VALUES
    ('Memo 1', 'bleh bleh', '2018-03-10 3:10:25-07'),
    ('Memo 2', 'bleh bleh', '2018-03-12 5:10:25-07'),
    ('Memo 2', 'bleh bleh', '2018-03-14 5:10:25-07');

------ TASKS ---------------------------

INSERT INTO TASKS
    (TITLE, DESCRIPTION, TIMESTAMP)
VALUES
    ('Task 1', 'blah blah', '2018-03-11 1:10:25-07'),
    ('Task 2', 'blah blah', '2018-03-13 7:10:25-07'),
    ('Task 3', 'blah blah', '2018-03-15 4:10:25-07');

------ ORDERS ---------------------------

INSERT INTO ORDERS
    (ITEM_NAME, ITEM_PRICE, PAYMENT_TYPE, TIMESTAMP)
VALUES
    ('Dress', '10.99', 'Debit Card', '2018-03-11 1:10:25-07'),
    ('Suit', '79.99', 'Cash', '2018-03-12 9:25:25-07'),
    ('T-Shirt', '5.00', 'Cash', '2018-03-14 8:10:25-07'),
    ('Dress', '10.99', 'Debit Card', '2018-03-12 6:10:25-07'),
    ('Jeans', '25.99', 'Debit Card', '2018-03-15 4:10:25-07');