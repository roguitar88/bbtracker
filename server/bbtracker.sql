-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           5.7.33 - MySQL Community Server (GPL)
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para bbtracker
CREATE DATABASE IF NOT EXISTS `bbtracker` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `bbtracker`;

-- Copiando estrutura para tabela bbtracker.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela bbtracker.users: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
	(1, 'Rogério Soares', 'rogeriobsoares5@gmail.com', '$2b$10$ZKwZDo4g.DpEPQA6SUtApeI49sdT6OTppKUl7ohZLo1u56aI4FGGS', '2022-09-02 08:51:55', NULL),
	(3, 'Márcio Toledo', 'marcio.toledo@gmail.com', '$2b$10$FYo5VR6U.kuBGJ32qtBEDu7xrHle3yHGVBdA.4XADw.dE38cQIoXi', '2022-09-04 02:06:06', '2022-09-04 02:06:06'),
	(5, 'Calixto Pedro', 'calixto.pedro@gmail.com', '$2b$10$lf004v2jTdPnfs2GLEfNM.Y//OExP6Y4pu1tFtcSbKYnHbcyAN/nm', '2022-09-04 17:46:40', '2022-09-04 17:46:40'),
	(10, 'Carlos Matanza', 'carlos.matanza@gmail.com', '$2b$10$U34vH6/ZFcHj3oYsURjQxO7zmGYtp/8sZDMFq7LbKv6R321rbyS3i', '2022-09-04 18:14:50', '2022-09-04 18:14:50');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
