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
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `part_type` enum('Car','Motorcycle') NOT NULL,
  `item_type` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `picture_url` varchar(255) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`id`, `name`, `part_type`, `item_type`, `brand`, `picture_url`, `quantity`, `price`, `created_at`) VALUES
(1, 'Brake Pad', 'Car', 'Brake', 'Bosch', 'https://www.boschautoparts.com/o/commerce-media/products/659677/quietcast%E2%84%A2-premium-disc-brake-rotors/657393/QCRotors_Category.png?download=true', 20, '30.00', '2024-11-26 14:31:34'),
(4, 'Side Mirror', 'Motorcycle', 'Replacement', 'SYM', 'https://www.bing.com/th?id=OIP.VBV4mh6aIiDlzwaIpFDXuAHaHM&w=150&h=146&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', 30, '20.00', '2024-11-30 08:19:12'),
(6, 'Car Tires', 'Car', 'Replacement', 'Michelin', 'https://www.bing.com/th?id=OIP.hYOMBEhP4b9-mxJrx4wWCwHaIC&w=98&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', 75, '99.99', '2024-11-30 08:23:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
