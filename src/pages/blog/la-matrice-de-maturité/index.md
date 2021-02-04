---
templateKey: blog-post
title: La matrice de maturité
date: 2018-09-05T00:02:00.000Z
image: divide.jpg
description: Diviser les problèmes pour mieux régner
tags:
  - devops
  - matrice
  - maturité
  - conway
---

C'est mon premier Tech'n App en tant qu'atelier.

Ce qui est commun dans les discussions des développeurs est comment impacter le plus les clients.
Certains parlent de leur idées, les tests, l'analyse, etc.
Or, nous sommes en 2018, il doit bien y avoir un certain guide?

Dans le mouvement DevOps, il y a beaucoup de techniques: le chemin critique, la théorie des contraintes, l'arbre de la réalité, Lean, Six Sigma, Kata, etc.
Tous unis dans un but, tel que [_The Goal_](<https://en.wikipedia.org/wiki/The_Goal_(novel)>) d'[Eliyahu M. Goldratt](https://en.wikipedia.org/wiki/Eliyahu_M._Goldratt), comment faire le plus d'argent.
Les professionnels du domaine informatique se sont réunis pour créer un mouvement et transmettre ces connaissances, le DevOps.

Avec le temps, les professionnels ont fait la matrice de maturité.

Voici celle qui est disponible chez [Container Solutions](https://container-solutions.com/cloud-native-maturity-matrix/).
![matrice](https://blog.container-solutions.com/hubfs/CS--LP__assets/CS--LP__images/mm_diagram.png)

L'idée est simple.

1. Avant tout, faire son auto-évaluation: pour chaque axe, identifier le stade.

1. Le point le plus à la gauche est ce qui est le goulot, suivant la [théorie des contraintes](https://fr.wikipedia.org/wiki/Th%C3%A9orie_des_contraintes).

1. Il faut avoir une ligne verticale, suivant la [loi de Conway](https://fr.wikipedia.org/wiki/Loi_de_Conway), pour faciliter les changements.

Prenons l'exemple de la courbe bleue.
Il y a _Feature driven_ et _Scrum_.
Ceci veut dire qu'il faudrait livrer un projet par cycle de deux semaines.
Réaliste?
Non, c'est pourquoi la courbe s'approche du _Scrum_ sans y toucher.
Sur quoi faudrait-il travailler?
Briser les projets en petites fonctionnalités pour livrer plus rapidement.

Bien que négligée, la culture a un grand impact sur tout le reste, comme le mentionne Conway.
Prenons l'exemple d'une culture prédictive.
Si nous optons pour un approvisionnement avec moins de serveurs (_serverless_), alors comment pourrions-nous prédire le tout?
L'objectif est justement de ne pas prédire et d'être anti-fragile.
Alors comment des gens qui souhaitent tout prédire vivraient dans ce contexte?
La culture rapporterait l'approvisionnement vers la gauche qui est plus prédictif.

Cela dit, c'est un merveilleux outil et guide pour savoir comment avoir le plus grand impact dans une entreprise.
J'ai pu en bénéficier quelques fois et je vous invite aussi de plonger dans cette matrice!
