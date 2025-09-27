-- Library Management System
-- Week 8 Final Project

-- 1. Create database
CREATE DATABASE IF NOT EXISTS LibraryDB;
USE LibraryDB;

-- 2. Create tables

-- Users table
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    FullName VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Phone VARCHAR(20)
);

-- Books table
CREATE TABLE Books (
    BookID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(200) NOT NULL,
    Author VARCHAR(100),
    ISBN VARCHAR(20) UNIQUE,
    PublishedYear YEAR
);

-- BorrowedBooks table (many-to-many relationship)
CREATE TABLE BorrowedBooks (
    BorrowID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    BookID INT NOT NULL,
    BorrowDate DATE NOT NULL,
    ReturnDate DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (BookID) REFERENCES Books(BookID)
);

-- Optional: Categories table (One-to-Many with Books)
CREATE TABLE Categories (
    CategoryID INT AUTO_INCREMENT PRIMARY KEY,
    CategoryName VARCHAR(50) UNIQUE NOT NULL
);

ALTER TABLE Books ADD COLUMN CategoryID INT;
ALTER TABLE Books ADD FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID);

-- ===========================================================
-- Sample Data (Optional)
-- ===========================================================

INSERT INTO Users (FullName, Email, Phone) VALUES 
('John Doe', 'john@example.com', '1234567890'),
('Jane Smith', 'jane@example.com', '0987654321');

INSERT INTO Categories (CategoryName) VALUES
('Fiction'), ('Science'), ('History');

INSERT INTO Books (Title, Author, ISBN, PublishedYear, CategoryID) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', '12345', 1925, 1),
('A Brief History of Time', 'Stephen Hawking', '67890', 1988, 2),
('Sapiens', 'Yuval Noah Harari', '11223', 2011, 3);

INSERT INTO BorrowedBooks (UserID, BookID, BorrowDate, ReturnDate) VALUES
(1, 1, '2025-09-01', NULL),
(2, 2, '2025-09-05', NULL);
