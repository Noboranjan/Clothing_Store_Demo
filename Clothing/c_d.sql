-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2018 at 02:56 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `c_d`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `aid` int(30) NOT NULL,
  `admin_name` varchar(30) NOT NULL,
  `admin_email` varchar(30) NOT NULL,
  `admin_password` varchar(30) NOT NULL,
  `admin_pp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `cid` int(30) NOT NULL,
  `customer_name` varchar(30) NOT NULL,
  `customer_email` varchar(30) NOT NULL,
  `customer_password` varchar(30) NOT NULL,
  `customer_pp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pid` int(30) NOT NULL,
  `pname` varchar(30) NOT NULL,
  `ptitle` varchar(50) NOT NULL,
  `category` varchar(30) NOT NULL,
  `pfor` varchar(30) NOT NULL,
  `size` varchar(30) NOT NULL,
  `available` int(30) NOT NULL,
  `rating` int(30) DEFAULT NULL,
  `price` int(30) NOT NULL,
  `currency` varchar(30) NOT NULL,
  `cost` int(30) NOT NULL,
  `offer` int(30) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`pid`, `pname`, `ptitle`, `category`, `pfor`, `size`, `available`, `rating`, `price`, `currency`, `cost`, `offer`, `image`) VALUES
(15, 'Salwar Kamez', 'Salwar', 'Salwar Kamez', 'Women', 'Medium', 50, NULL, 1200, 'TK.', 1000, 2, ''),
(16, 'Kurti', 'Kurti', 'Kurti', 'Women', 'M L XL', 10, NULL, 2500, 'TK.', 2400, 0, ''),
(18, 'Outfit Set', 'Outfit Set', 'Baby Dress', 'Child', 'M L XL', 50, NULL, 1500, 'TK.', 1400, 0, ''),
(19, 'Pant', 'Pant', 'Pant', 'Men', 'Large', 40, NULL, 1450, 'TK.', 1300, 0, ''),
(20, 'Blazer', 'Casual Blazer', 'Shirt', 'Men', 'Large', 10, NULL, 1000, 'TK.', 800, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `prid` int(30) NOT NULL,
  `pid` int(30) NOT NULL,
  `pname` varchar(30) NOT NULL,
  `ptitle` varchar(50) NOT NULL,
  `category` varchar(30) NOT NULL,
  `pfor` varchar(30) NOT NULL,
  `quantity` int(30) NOT NULL,
  `price` int(30) NOT NULL,
  `currency` varchar(30) NOT NULL,
  `purchasedby` varchar(30) NOT NULL,
  `date` varchar(30) NOT NULL,
  `purchasedmethod` varchar(30) NOT NULL,
  `phonenumber` varchar(30) NOT NULL,
  `address` varchar(30) NOT NULL,
  `totalprice` int(30) NOT NULL,
  `image` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`prid`, `pid`, `pname`, `ptitle`, `category`, `pfor`, `quantity`, `price`, `currency`, `purchasedby`, `date`, `purchasedmethod`, `phonenumber`, `address`, `totalprice`, `image`) VALUES
(1, 2, 'xyz', '', 'T-Shirt', 'Men', 5, 300, 'Taka', 'Nobo', '1.11.18', 'Bikash', '', '', 1500, NULL),
(2, 1, 'Full T-Shirt', '', 'T-Shirt', 'Men', 3, 1000, 'taka', 'mzs', '2018-11-04 06:04:31.024', 'xyz', '01744', 'abc', 3000, NULL),
(3, 2, 'Black Shari ', 'ddgcfgghg', 'Shari', 'Women', 4, 4000, 'Taka', 'mzs', '2018-11-04 06:04:31.026', 'xyz', '01744', 'abc', 16000, NULL),
(4, 3, 'Half T-Shirt', '', 'T-Shirt', 'Child', 3, 400, 'Taka', 'mzs', '2018-11-04 06:04:31.027', 'xyz', '01744', 'abc', 1200, NULL),
(5, 1, 'Full T-Shirt', '', 'T-Shirt', 'Men', 3, 1000, 'taka', 'mzs', '2018-11-04 06:16:58.451', 'xyz', '01744', 'abc', 3000, NULL),
(6, 2, 'Black Shari ', 'ddgcfgghg', 'Shari', 'Women', 3, 4000, 'Taka', 'mzs', '2018-11-04 06:16:58.453', 'xyz', '01744', 'abc', 12000, NULL),
(7, 3, 'Half T-Shirt', '', 'T-Shirt', 'Child', 3, 400, 'Taka', 'mzs', '2018-11-04 06:16:58.454', 'xyz', '01744', 'abc', 1200, NULL),
(8, 1, 'Full T-Shirt', '', 'T-Shirt', 'Men', 4, 1000, 'taka', 'mzs', '2018-11-04 10:56:16.305', 'xyz', '01744', 'abc', 4000, NULL),
(9, 3, 'Half T-Shirt', '', 'T-Shirt', 'Child', 7, 400, 'Taka', 'mzs', '2018-11-04 10:56:16.305', 'xyz', '01744', 'abc', 2800, NULL),
(10, 2, 'Black Shari ', 'ddgcfgghg', 'Shari', 'Women', 3, 4000, 'Taka', 'mzs', '2018-11-04 10:56:16.305', 'xyz', '01744', 'abc', 12000, NULL),
(11, 1, 'Full T-Shirt', '', 'T-Shirt', 'Men', 3, 1000, 'taka', 'mzs', '2018-11-04 11:20:29.999', 'xyz', '01744', 'abc', 3000, NULL),
(12, 4, 'Black Panjabi', '', 'Panjabi', 'Men', 1, 5000, 'Taka', 'mzs', '2018-11-04 11:20:29.999', 'xyz', '01744', 'abc', 5000, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `gender` varchar(30) NOT NULL,
  `dob` varchar(30) DEFAULT NULL,
  `phonenumber` varchar(30) DEFAULT NULL,
  `country` varchar(30) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `area` varchar(30) DEFAULT NULL,
  `address` varchar(30) DEFAULT NULL,
  `profilepic` varchar(255) DEFAULT NULL,
  `accounttype` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `email`, `password`, `gender`, `dob`, `phonenumber`, `country`, `city`, `area`, `address`, `profilepic`, `accounttype`) VALUES
(1, 'mzsmunna', 'mamunuz', 'zaman', 'mzs.munna@gmail.com', '12345', 'male', '29.09.2018', '01744692979', 'Bangladesh', 'Dhaka', 'Uttara', 'Dakkhin Chalabon', NULL, 'Admin'),
(2, 'nobo', 'nabaranjan', 'niloy', 'nobo.niloy@gmail.com', '123456', 'male', '14.09.1997', '01840117914', 'Bangladesh', 'Dhaka', 'Uttara', 'Sector 7', NULL, 'User'),
(3, 'mzs', 'mzs', 'munna', 'mzs.munna@outlook.com', '123', 'male', '1996-01-28', '01744697929', 'Bangladesh', 'Dhaka', 'Uttara Khan', 'xyz', '', 'User'),
(4, 'munna', 'Mzsmunna', 'ffjgikyug', 'mzs.aiub@gmail.com', '1234', 'male', '2018-10-06', '01744682878', 'Bangladesh', 'Dhaka', 'Banani', 'jgchds', '', 'User'),
(5, 'sakib', 'sakib', 'hasan', 'sakib@gmail.com', '1234', 'male', '2018-10-01', '0176586755345', 'Bangladesh', 'Chittagong', 'Agrabad', 'gjfdsdgas', '', 'User'),
(6, 'tamim', 'tamim', 'iqbal', 'tamim@gmail.com', '12345', 'male', '2018-10-14', '017446929798', 'Bangladesh', 'Chittagong', 'Muradpur', 'dgghfggj', '', 'User'),
(7, 'Thor', 'thor', 'thunder', 'thor@gmail.com', '1234', 'male', '2018-10-24', '12345678', 'Bangladesh', 'Chittagong', 'Kazi Dewan Bari', 'ogikyuftyd', '', 'User'),
(8, 'mushi', 'mushfiqur', 'rahim', 'mushi@gmail.com', '1234', 'male', '2018-10-21', '0174498785654', 'Bangladesh', 'Chittagong', 'Khulshi', 'hkhgtrfytr', '', 'User'),
(9, 'mash', 'mash', 'rafi', 'mash@gmail.com', '12345', 'male', '1985-05-29', '0987654432', 'Other', 'Other', 'Other', '', '', 'User'),
(10, 'imrul', 'imrul', 'kayes', 'imrul@gmail.com', '1234', 'male', '2018-10-14', '0987654345678', 'Bangladesh', 'Chittagong', 'Muradpur', '', '', 'User'),
(11, 'fizz', 'mustafizur', 'rahman', 'fizz@gmail.com', '12345', 'male', '1997-03-18', '23435365464', 'Bangladesh', 'Chittagong', 'Chwak Bazar', 'aaaaaaaaaaaaaaaaaad', '', 'User'),
(13, 'dfdsg', 'gdgdfg', 'fgfdgdg', 'xyz@gmail.com', '123', 'male', '', '23435646757', 'Other', 'Other', 'Other', '', '', 'User'),
(14, 'liton', 'liton', 'dash', 'liton@gmail.com', '1234', 'male', '', '565453542', 'Other', 'Other', 'Other', '', '', 'User'),
(15, 'mehedi', 'mehedi', 'meraz', 'mehedi@gmail.com', '123', 'male', '2018-10-08', '01744111000', 'Other', 'Other', 'Other', '', '', 'User'),
(16, 'mular', 'mular', 'mzs', 'mular@gmail.com', '123', 'male', '', '876755443532', 'Other', 'Other', 'Other', '', '', 'User'),
(18, 'jgdfshj', 'dggggggggg', 'ggggggggdfg', 'fgdfgd@dfsgh.com', '123', 'male', '', '', 'Other', 'Other', 'Other', '', '', 'User'),
(19, 'kjhgjg', 'gfhfgh', 'hfghf', 'kghgd@hsjhdf.com', '321', 'male', '', '', 'Other', 'Other', 'Other', '', '', 'User'),
(20, 'toto', 'toto', 'toto', 'toto@gmail.com', '4321', 'male', '', '8329473341', 'Other', 'Other', 'Other', '', '', 'User'),
(21, 'niloy', 'nabaranjan', 'niloy', 'niloy@gmail.com', '123', 'male', '', '07988765323', 'Other', 'Other', 'Other', '', '', 'Admin'),
(22, 'moni', 'moniruzzaman', 'sarker', 'moni@gmail.com', 'moni', 'male', '', '232432732326', 'Bangladesh', 'Dhaka', 'Uttara Khan', 'gkggfyu', '', 'User');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`aid`),
  ADD UNIQUE KEY `admin_name` (`admin_name`),
  ADD UNIQUE KEY `admin_email` (`admin_email`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`cid`),
  ADD UNIQUE KEY `customer_name` (`customer_name`),
  ADD UNIQUE KEY `customer_email` (`customer_email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pid`),
  ADD UNIQUE KEY `pname` (`pname`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`prid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `aid` int(30) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `cid` int(30) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pid` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `prid` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
