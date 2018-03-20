CREATE TABLE ORDERS(
    ID SERIAL,
    ITEM_NAME VARCHAR(100) NOT NULL,
    ITEM_PRICE FLOAT NOT NULL,
    PAYMENT_TYPE VARCHAR(50) NOT NULL,
    TIMESTAMP TIMESTAMP NOT NULL
);