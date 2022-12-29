CREATE TABLE UserX (
	UserX_ID serial NOT NULL,
	Email varchar(255) NOT NULL UNIQUE,
	Kind varchar(255) Not NULL default 'c',
	Password varchar(255) NOT NULL,
	PRIMARY KEY (UserX_ID)
);
CREATE TABLE Employee (
	Employee_ID integer NOT NULL,
	First_Name varchar(255) NOT NULL,
	Last_Name varchar(255) NOT NULL,
	TypeofEmployee varchar(255) NOT NULL,
	Supervise_ID integer,
	Branch_ID integer NOT NULL,
	StartTime varchar(255) NOT NULL,
	EndTime varchar(255) NOT NULL,
	salary integer NOT NULL,
	PRIMARY KEY (Employee_ID)
);
CREATE TABLE Customer (
	Customer_ID integer NOT NULL,
	First_Name varchar(255) NOT NULL,
	Last_Name varchar(255) NOT NULL,
	Wallet integer NOT NULL,
	Img_url varchar(255),
	PRIMARY KEY (Customer_ID)
);
CREATE TABLE TableX (
	Table_Num serial NOT NULL,
	Branch_ID integer NOT NULL,
	Cardinality integer NOT NULL,
	PRIMARY KEY (Table_Num, Branch_ID)
);
CREATE TABLE ProviderX (
	Provider_ID integer NOT NULL,
	First_Name varchar(15) NOT NULL,
	Last_Name varchar(15) NOT NULL,
	PRIMARY KEY (Provider_ID)
);
CREATE TABLE Branch (
	Branch_ID serial NOT NULL UNIQUE,
	Loaction varchar(255) NOT NULL,
	Balance integer NOT NULL,
	Manager_ID integer,
	PRIMARY KEY (Branch_ID)
);
CREATE TABLE Item (
	Item_iD serial NOT NULL UNIQUE,
	Item_Name varchar(255) NOT NULL UNIQUE,
	Item_Desc text NOT NULL,
	Item_Price integer NOT NULL,
	Discount_ID integer default 1,
	Img_url varchar(255) NOT NULL,
	Category varchar(255) NOT NULL,
	PRIMARY KEY (Item_iD)
);
CREATE TABLE Discount (
	Discount_ID serial NOT NULL UNIQUE,
	Start_Date varchar(255) NOT NULL,
	End_Date varchar(255) NOT NULL,
	Discount_Percent integer NOT NULL,
	PRIMARY KEY (Discount_ID)
);
CREATE TABLE OrderX (
	Order_ID varchar(255) NOT NULL UNIQUE,
	Order_Date date default now(),
	Order_State varchar(255) NOT NULL,
	Order_Price integer NOT NULL,
	Chef_ID integer,
	Waiter_ID integer,
	DeliveryMan_ID integer,
	PRIMARY KEY (Order_ID)
);
CREATE TABLE Review (
	Customer_ID integer NOT NULL,
	Item_iD integer NOT NULL,
	Review_Date varchar(255) NOT NULL,
	Rate integer NOT NULL,
	Review_Desc varchar(255) NOT NULL,
	PRIMARY KEY (Customer_ID, Item_iD, Review_Date)
);
CREATE TABLE Contains (
	Item_iD integer NOT NULL,
	Customer_ID integer NOT NULL,
	Order_ID varchar(255) NOT NULL,
	Quantity integer NOT NULL,
	PRIMARY KEY (Item_iD, Customer_ID, Order_ID)
);
CREATE TABLE Donate (
	Provider_ID integer NOT NULL,
	Branch_ID integer NOT NULL,
	Donation_Date varchar(255) NOT NULL,
	Amount money NOT NULL,
	PRIMARY KEY (Provider_ID, Branch_ID, Donation_Date)
);
CREATE TABLE Reserve (
	Table_Num integer NOT NULL,
	Branch_ID integer NOT NULL,
	Customer_ID integer NOT NULL,
	Reservation_Date varchar(255) NOT NULL,
	Reservation_Time varchar(255) NOT NULL,
	PRIMARY KEY (
		Table_Num,
		Branch_ID,
		Customer_ID,
		Reservation_Date
	)
);
ALTER TABLE Employee
ADD FOREIGN KEY (Employee_ID) REFERENCES UserX(UserX_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE Employee
ADD FOREIGN KEY (Supervise_ID) REFERENCES Employee(Employee_ID) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE Employee
ADD FOREIGN KEY (Branch_ID) REFERENCES Branch(Branch_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE Customer
ADD FOREIGN KEY (Customer_ID) REFERENCES UserX(UserX_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE TableX
ADD FOREIGN KEY (Branch_ID) REFERENCES Branch(Branch_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ProviderX
ADD FOREIGN KEY (Provider_ID) REFERENCES UserX(UserX_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE Branch
ADD FOREIGN KEY (Manager_ID) REFERENCES Employee(Employee_ID) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE Item
ADD FOREIGN KEY (Discount_ID) REFERENCES Discount(Discount_ID) ON UPDATE CASCADE ON DELETE
SET default;
ALTER TABLE OrderX
ADD FOREIGN KEY (Chef_ID) REFERENCES Employee(Employee_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE OrderX
ADD FOREIGN KEY (Waiter_ID) REFERENCES Employee(Employee_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE OrderX
ADD FOREIGN KEY (DeliveryMan_ID) REFERENCES Employee(Employee_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE Review
ADD FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE Review
ADD FOREIGN KEY (Item_iD) REFERENCES Item(Item_iD) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE Contains
ADD FOREIGN KEY (Item_iD) REFERENCES Item(Item_iD) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE Contains
ADD FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE Contains
ADD FOREIGN KEY (Order_ID) REFERENCES OrderX(Order_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE Donate
ADD FOREIGN KEY (Provider_ID) REFERENCES ProviderX(Provider_ID) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Donate
ADD FOREIGN KEY (Branch_ID) REFERENCES Branch(Branch_ID) ON UPDATE CASCADE ON DELETE NO ACTION;
ALTER TABLE Reserve
ADD FOREIGN KEY (Table_Num, Branch_ID) REFERENCES TableX(Table_Num, Branch_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE Reserve
ADD FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID) ON UPDATE CASCADE ON DELETE CASCADE;