# IKODI Satisfaction-form

## Le projet :

- Un questionnaire de critiques / satisfaction sur le domaine ikodi.eu et ses applications.
- en 3- 5 étapes réparties comme suit :
  - Qui êtes-vous ? Un ami, visiteur, un client potentiel ou un professionnel du développement web.
    - Avec précisions éventuelles.
    - A quelles applications proposées avez-vous jeté un oeil ?
    - Juste l'accueil du portefolio, Chronofit, concord, multiplicorne, le blog, les jeux, topics,
    - _ Ici faire apparaitre une barre de satisfaction entre 1 - 10 pour chaque app cochée _
  - Points positifs et points négatifs globaux (choix à cocher + saisie optionnelle sur améliorations possibles)
  - Note globale du site
  - Récap et soumission du formulaire + coordonnées de contact

## Fonctionnalités :

- L'utilisateur a accès au formulaire via un lien sur la page d'accueil du portefolio,
- L'utilisateur a les informations sur la durée prévisible, le nombre d'étapes du formulaire,
- L'utilisateur peut naviguer entre les étapes et se corriger,
- L'utilisateur voit à quelle étape il se trouve à chaque instant,
- A la soumission du formulaire, un email est envoyé à l'adresse définie,

## Stack technique

- Front:
  - React + final-form
- Back:
  - Node.js + Express
  - node mailer
- Deploy:
  - Docker

## Install

### Pré-requis :

Avoir docker engine et docker-compose installés.

### Récupérer l'image sur Dockerhub

```bash
docker-compose -f docker-compose.yml pull
```

### Démarrer l'image

```bash
docker-compose -f docker-compose.yml up -d
```

### Pour utiliser l'envoi du formulaire par mail :

Paramétrer le client mail avec node-mailer, définir les valeurs suivantes dans index.js :

- "from", "to", "subject", "host" et "user"

Définir la variable d'environnement EMAIL_PWD avec le mot de passe du client mail.
