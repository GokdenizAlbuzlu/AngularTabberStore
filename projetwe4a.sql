-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : Dim 29 mai 2022 à 19:53
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projetwe4a`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `ID` int(11) NOT NULL,
  `ID_utilisateur` varchar(50) NOT NULL,
  `Prix` float NOT NULL,
  `Type` varchar(50) NOT NULL,
  `Marque` varchar(50) NOT NULL,
  `Titre` varchar(50) NOT NULL,
  `Description` varchar(50) NOT NULL,
  `Taille` varchar(50) NOT NULL,
  `Genre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`ID`, `ID_utilisateur`, `Prix`, `Type`, `Marque`, `Titre`, `Description`, `Taille`, `Genre`) VALUES
(6, 'company', 25, 'Tshirt', 'Nike', 'Tshirt Nike homme coupe slim', 'Couleur Rouge', 'M', 'Homme'),
(7, 'company', 59, 'Pantalon', 'Zara', 'Slim fit jean', 'Smoke Grey', '32', 'Homme'),
(8, 'company', 450, 'chaussure', 'Mcqueen', 'Mcqueen sneakers', 'confortable', '37', 'F'),
(9, 'company', 110, 'Chaussure', 'Air Jordan', 'Air Jordan 1 Mid Chicago', 'Jordan very good product', '43', 'homme'),
(10, 'company', 89, 'chemise', 'Tommy Hilfiger', 'Chemise Tommy bleu marine', 'coton', 'M', 'homme'),
(11, 'company', 29, 'short', 'Nike', 'Short Homme Nike flecce', 'Short nike', 'M', 'Homme'),
(12, 'company', 49, 'Tshirt', 'Jordan', 'Tshirt Jordan Sport', 'for basketball players', 'M', 'H'),
(13, 'company', 200, 'Veste', 'Tommy Hilfiger', 'Veste Tommy Jeans Sherpa', 'very good product', 'M', 'H');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `ID` int(11) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pwd` varchar(50) NOT NULL,
  `ville` varchar(50) NOT NULL,
  `cp` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`ID`, `prenom`, `nom`, `email`, `pwd`, `ville`, `cp`) VALUES
(3, 'albuzlu', 'gokdeniz', 'user@gmail.com', 'blabla', 'Belfort', 90000),
(4, 'user', 'user', 'user20@gmail.com', 'blabla', 'Belfort', 90000);

-- --------------------------------------------------------

--
-- Structure de la table `vendeur`
--

CREATE TABLE `vendeur` (
  `ID` int(11) NOT NULL,
  `Entreprise` varchar(50) NOT NULL,
  `AdresseCommercial` varchar(100) NOT NULL,
  `NumeroTVA` varchar(20) NOT NULL,
  `Numregistrecommerce` varchar(20) NOT NULL,
  `PhoneNumber` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pwd` varchar(20) NOT NULL,
  `Ville` varchar(50) NOT NULL,
  `CodePostal` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `vendeur`
--

INSERT INTO `vendeur` (`ID`, `Entreprise`, `AdresseCommercial`, `NumeroTVA`, `Numregistrecommerce`, `PhoneNumber`, `email`, `pwd`, `Ville`, `CodePostal`) VALUES
(3, 'Company', 'Rue de Mulhouse', 'TVA192821A442', 'TV2231928123', '221212213', 'company', 'blabla', 'Mulhouse', 66000);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `vendeur`
--
ALTER TABLE `vendeur`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `vendeur`
--
ALTER TABLE `vendeur`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
