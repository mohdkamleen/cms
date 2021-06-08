-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2021 at 05:53 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cms`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(255) NOT NULL,
  `datetime` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `datetime`, `title`, `description`, `image`) VALUES
(5, '08June,2021 AT Tuesday 7:15AM', 'Mohd Kamleen', 'Im from tanda ambedkar nagar', 'IMG_20200202_173221 - Copy.jpg'),
(6, '08June,2021 AT Tuesday 7:20AM', 'Software Engineering ', '\r\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligen', 'images.jpg'),
(8, '08June,2021 AT Tuesday 8:58AM', 'kamleen', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni odit minima! Doloribus tenetur illum ullam.', '20210514_082230.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
