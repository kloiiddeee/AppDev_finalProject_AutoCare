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
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `dCreated` date NOT NULL,
  `brand` varchar(50) NOT NULL,
  `model` varchar(50) NOT NULL,
  `vtype` enum('4 Wheels','3 Wheels','2 Wheels') NOT NULL,
  `stype` enum('Pick Up','Home Service') NOT NULL,
  `des` enum('Autotune','Change Tires','Change Oil','Car Paint','Tinted','Lights') NOT NULL,
  `status` enum('Pending','Completed','Canceled') DEFAULT 'Pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`id`, `first_name`, `last_name`, `contact`, `address`, `dCreated`, `brand`, `model`, `vtype`, `stype`, `des`, `status`) VALUES
(3, 'alec', 'curry', '093462782', 'victoria', '2024-11-25', 'honda', 'wave 110', '2 Wheels', 'Home Service', 'Change Tires', 'Completed'),
(9, 'Darylld', 'Tasty', '1234234', 'Puerto Galera', '2024-11-06', 'Ford', 'Raptor', '4 Wheels', 'Pick Up', 'Autotune', 'Pending'),
(10, 'Jovan', 'Arminio', '091234567', 'Calapan City', '2024-11-24', 'honda', 'Wave 110', '2 Wheels', 'Home Service', 'Lights', 'Completed'),
(13, 'Jay', 'Montino', '123456', 'Baco', '2024-11-25', 'Ford', 'Raptor', '4 Wheels', 'Home Service', 'Lights', 'Pending');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
