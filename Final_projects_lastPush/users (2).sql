-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2024 at 02:28 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `autocare`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fname` varchar(50) DEFAULT NULL,
  `lname` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `contacts` varchar(15) DEFAULT NULL,
  `gender` enum('Male','Female','Other') DEFAULT NULL,
  `address` text DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(10) DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `contacts`, `gender`, `address`, `username`, `password`, `role`) VALUES
(2, 'cloyd', 'Fesalbon', 'test2@gmail.com', '1234567', 'Male', 'Calapan City', 'test2', 'test2', 'user'),
(5, 'Caff', 'Fesalbon', 'test3@gmail.com', '1234567', 'Male', 'Calapan City', 'test3', 'test3', 'user'),
(6, 'Admin', 'Admin', 'admin@example.com', '000000000', '', 'Calapan City', 'admin', 'admin', 'admin'),
(8, 'steph', 'curry', 'curry@gmail.com', '12345678', 'Male', 'Puerto Galera', 'test5', 'test5', 'user'),
(10, 'steph', 'curry', 'steph@gmail.com', '12345678', 'Male', 'Puerto Galera', 'steph', 'steph', 'user'),
(11, 'jovan', 'arminio', 'jovan@gmail.com', '1234567789', 'Male', 'jan lang', 'jovan', 'jovan', 'user'),
(14, 'rae mae', 'Mistal', 'rmm@gmail.com', '12345678', 'Female', 'Puerto Galera', 'raemae', 'raemae', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
