import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AboutPage = () => {
return (
<Container>
<Row>
<Col>
<h1>À propos de nous</h1>
<p>Bienvenue sur notre site de sélection d'ingrédients et de recettes ! Ici, vous pouvez sélectionner les ingrédients que vous avez sous la main et voir les plats que vous pouvez préparer avec. alors revenez souvent pour découvrir de nouvelles idées de plats délicieux que vous pouvez préparer avec les ingrédients que vous avez déjà.</p>
 <p>Notre site vous aide à sélectionner les ingrédients que vous avez sous la main et à trouver des recettes qui les utilisent. Vous pouvez filtrer les résultats en fonction de vos préférences alimentaires et découvrir de nouvelles idées de plats délicieux.</p>
</Col>
</Row>
<hr></hr>
<Row>
<Col md={6}>
<Image src="https://www.hss.edu/images/socialmedia/cooking-1200x630.jpg" thumbnail fluid />
</Col>
<Col md={6}>
<h2>Notre histoire</h2>
<p>
Notre fondateur passionné de cuisine a créé un site web il y a 10 ans pour aider les utilisateurs à trouver des recettes en utilisant les ingrédients qu'ils ont déjà. Depuis lors, nous avons travaillé dur pour améliorer notre base de données de recettes et ajouter de nouvelles fonctionnalités pour rendre le site encore plus utile. Nous sommes fiers de ce que nous avons accompli et sommes impatients de continuer à aider les gens à trouver des idées de repas délicieux et faciles à préparer.
</p>
</Col>
</Row>
<hr></hr>
<Row>
<Col md={6}>
<h2>Nos valeurs</h2>
<p>
Notre site se consacre à la cuisine et à la nutrition saine, offrant des recettes délicieuses et nutritives pour tous les niveaux de compétence culinaire et les préférences alimentaires. Nous nous engageons également en faveur de la durabilité et de la responsabilité environnementale, tout en valorisant la communauté et l'entraide en encourageant le partage de recettes et d'astuces culinaires.
</p>
</Col>
<Col md={6}>
<Image src="https://www.aprifel.com/wp-content/uploads/2021/11/Article-3-bandeau.jpg" thumbnail fluid />
</Col>
</Row>
</Container>
);
};

export default AboutPage;