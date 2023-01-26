<a name="readme-top"></a>
# Projet 03 - Créez une page web dynamique avec JavaScript
_( Avant de démarrer votre travail sur ce projet, nous vous conseillons de :
Lire le scénario en entier, chaque section du projet ainsi que les documents fournis. 
Consulter le guide des étapes clés contenant des recommandations et des ressources pour organiser votre travail.
Préparer une liste de questions pour votre première session de mentorat..)_

[<img src="https://user.oc-static.com/upload/2022/06/23/16559727182885_DEV_scenario.png" width="50%">](https://player.vimeo.com/video/733231431?color=7451eb "agence ArchiWebos")
## Description

Vous travaillez comme développeur front-end pour l’agence ArchiWebos qui comprend 50 salariés. 
Ayant terminé votre dernier projet avec un peu d'avance, vous êtes envoyé en renfort comme développeur front-end d’une équipe qui travaille sur la conception du site portfolio d’une architecte d’intérieur.
Nous sommes lundi matin et c’est l’heure de votre premier brief d’équipe pour ce projet.
Vous savez que vous allez recevoir beaucoup d’informations, vous vous préparez donc à prendre des notes. 

De : Charlotte
À : Moi
Re, 
On est tous contents que tu nous aies rejoints et que tu nous prêtes main-forte pour le Front du site. 
Je te mets en pièces jointes tout ce dont on a parlé pendant la réunion :
le Figma du design qui te servira à créer les nouvelles fonctionnalités ;
le code back-end qui te permettra de faire persister les données et de tester les fonctionnalités ;
le code front-end d’origine avec la version statique de la page de l’architecte ;
le Kanban pour la mission, pour que tu puisses voir les tâches qui te sont attribuées.

On reste à ta disposition pour toute question sur le projet. 
Belle journée à toi et à très vite.

Après la réunion et le mail de Charlotte, vous listez vos 3 missions principales. Vous devez donc développer :
la page de présentation des travaux de l'architecte (à partir du HTML fourni) ;
la page de connexion de l'administrateur du site (le client) (code à créer de zéro) ;
la modale permettant d'uploader de nouveaux médias (code à créer from scratch).
Vous avez maintenant tous les éléments en poche, et êtes prêt à commencer ce nouveau défi. 

## Compétences évaluées

Gérer les événements utilisateurs avec JavaScript
Manipuler les éléments du DOM avec JavaScript
Récupérer les données utilisateurs dans le JavaScript via des formulaires

- Étape n° 1 : Installer un environnement de développement front-end
- Étape n° 2 : Implémenter une interface responsive avec HTML et CSS
- Étape n° 3 : Intégrer du contenu conformément à une maquette avec HTML et CSS
- Étape n° 4 : Versionner son projet avec Git et Github


## La soutenance:

_( Durant la présentation orale, l’évaluateur interprétera le rôle de Charlotte. La soutenance est structurée de la manière suivante :)_

<details>
	<summary>Présentation des livrables (15 minutes) </summary>

![Image text](https://user.oc-static.com/upload/2022/06/20/16557257586438_Banner_Soutenance_Dev.png)

   - Commencez par présenter comment vous avez récupéré les projets de la galerie et ajouté les filtres.
   - Ensuite, présentez comment vous avez réalisé la connexion.
   - Finalement, vous montrez le fonctionnement de l’ajout de travaux à la galerie.
</details>

<details>
   <summary>Discussion (10 minutes) </summary>

![Image text](https://user.oc-static.com/upload/2022/06/20/16557257586438_Banner_Soutenance_Dev.png)

* L’évaluateur jouera le rôle de Charlotte, la cheffe de projet. Il vous challengera sur les points suivants : 
   - appels à l’API ;
   - gestion de la connexion de l’utilisateur ;
   - le filtre des projets dans la galerie.
</details>

<details>
   <summary>Débriefing (5 minutes)</summary>

![Image text](https://user.oc-static.com/upload/2022/06/20/16557257586438_Banner_Soutenance_Dev.png)

* À la fin de la soutenance, l'évaluateur arrêtera de jouer le rôle de Charlotte pour vous permettre de débriefer ensemble 
</details>


## Lien utiles:

[Openclassrooms](https://openclassrooms.com/)

[Maquette du site](https://www.figma.com/file/kfKHknHySoTibZfdolGAX6/Desktop?node-id=0%3A1)

[Note de synthèse.pdf](https://course.oc-static.com/projects/Développeur+Web/IW_P6+JS+page+dynamique/Étapes+clés+P6+Front-End+(3).pdf)

[Le code back-end et le code front-end](https://github.com/OpenClassrooms-Student-Center/Portfolio-architecte-sophie-bluel)

[Le Kanban pour la mission](https://www.notion.so/openclassrooms/f2555b385cb44bd29d2db49802704969?v=e0a4b060f65c4f6399ff16ab35e69b82)


## AIDE-MÉMOIRE GITHUB GIT

_Git est le sytème de gestion de version décentralisé open source qui facilite les activités GitHub sur votre ordinateur. Cet aide-mémoire permet un accès rapide aux instructions des commandes Git les plus utilisées._
<details>
	<summary>Commandes utiles GIT</summary>
	
<details>
	<summary>1. CRÉER DES DÉPÔTS</summary>
	

* Démarrer un nouveau dépôt ou en obtenir un depuis une URL existante

   ```sh
	git init [nom-du-projet]
   ```
	Crée un dépôt local à partir du nom spécifié
   ```sh
   git clone [url]
   ```
   Télécharge un projet et tout son historique de versions
</details>
<details>
	<summary>2. EFFECTUER DES CHANGEMENTS</summary>

* Consulter les modifications et effectuer une opération de commit

   ```sh
   git status
   ```
   Liste tous les nouveaux fichiers et les fichiers modifiés à commiter
   ```sh 
   git diff
   ```
	Montre les modifications de fichier qui ne sont pas encore indexées
   ```sh
	git add [fichier]
   ```
	Ajoute un instantané du fichier, en préparation pour le suivi de version
   ```sh
	git diff --staged
   ```
	Montre les différences de fichier entre la version indexée et la dernière version
   ``` sh
	git reset [fichier]
   ```
	Enlève le fichier de l'index, mais conserve son contenu
   ``` sh
	git commit -m "[message descriptif]"
   ```
	Enregistre des instantanés de fichiers de façon permanente dans l'historique des versions
</details>
<details>
	<summary>3. GROUPER DES CHANGEMENTS</summary>	  

* Nommer une série de commits et combiner les résultats de travaux terminés

   ```sh 
   git branch
   ```
   Liste toutes les branches locales dans le dépôt courant
	   
   ```sh
   git branch [nom-de-branche]
   ```
   Crée une nouvelle branche
	  
   ```sh 
   git checkout [nom-de-branche]
   ```
   Bascule sur la branche spécifiée et met à jour le répertoire de travail
		
   ```sh
   git merge [nom-de-branche]
   ```
   Combine dans la branche courante l'historique de la branche spécifiée
	
   ```sh
   git branch -d [nom-de-branche]
   ```
   Supprime la branche spécifiée
</details>
</details>
	
<p align="right">(<a href="#readme-top">Retour haut de page</a>)</p>

