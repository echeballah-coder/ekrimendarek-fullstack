# Index des schémas – EkriMenDarek

Ce dossier contient les schémas de référence du projet EkriMenDarek.  
Ils servent de **source de vérité** pour l’architecture fonctionnelle, technique et produit.

> Ordre de lecture recommandé :  
> 1) Acteurs & parcours  
> 2) Réservation / paiement  
> 3) Données & domaines backend  
> 4) Architecture, sécurité, observabilité, CI/CD  
> 5) Support & analytics  
> 6) Roadmap produit

---

## 1. Acteurs, parcours & expérience utilisateur

1. **[Schema_Acteurs_et_Relations_02.png](Schema_Acteurs_et_Relations_02.png)**  
   Vue B2B2C des principaux acteurs : client final, agence de location, plateforme EkriMenDarek, prestataires tiers (paiement, KYC, etc.) et leurs relations (qui parle à qui, qui paie qui, responsabilités).

2. **[Schema_Parcours_Client_03.png](Schema_Parcours_Client_03.png)**  
   Parcours complet du client B2C : recherche, comparaison, fiche véhicule, réservation, acompte, KYC, prise en charge et suivi.

3. **[Schema_Parcours_Client_03B.png](Schema_Parcours_Client_03B.png)**  
   Variante / version détaillée du parcours client, avec plus de focus sur les états intermédiaires (échecs, annulations, retours).

4. **[Schema_Brouillon_Reservation_03C.png](Schema_Brouillon_Reservation_03C.png)**  
   Brouillon de logique de réservation : captures des informations essentielles, validations, erreurs possibles.

5. **[Schema_Parcours_Agence_04.png](Schema_Parcours_Agence_04.png)**  
   Parcours côté agence (B2B) : onboarding, ajout de véhicules, gestion des réservations, encaissement, suivi des performances.

---

## 2. Réservation & paiement (flux fonctionnels)

6. **[Schema_Flux_Reservation_Paiement_05A.png](Schema_Flux_Reservation_Paiement_05A.png)**  
   Flux global réservation + paiement : de la demande initiale jusqu’à la confirmation, en incluant acompte et solde.

7. **[Schema_Flux_Reservation_Paiement_05B.png](Schema_Flux_Reservation_Paiement_05B.png)**  
   Variante des flux de réservation/paiement avec plus de détails sur les transitions d’états (en attente, confirmée, annulée, etc.).

8. **[Schema_Flux_Reservation_Paiement_05B_(Cycle de vie du Booking – États & transitions).png](Schema_Flux_Reservation_Paiement_05B_(Cycle de vie du Booking – États & transitions).png)**  
   Cycle de vie détaillé d’un booking : tous les états possibles de la réservation et les événements qui provoquent les transitions.

9. **[Schema_Payment_Lifecycle_Complet_05C.png](Schema_Payment_Lifecycle_Complet_05C.png)**  
   Cycle de vie complet du paiement : création, tentative, succès, échec, remboursement, ajustements.

10. **[Schema_Payment_Lifecycle_Simplifie_05C_MVP.png](Schema_Payment_Lifecycle_Simplifie_05C_MVP.png)**  
    Version simplifiée du cycle de paiement pour un MVP : scénario minimal viable à implémenter en premier.

11. **[Schema_Sequence_Reservation_Paiement_08A.png](Schema_Sequence_Reservation_Paiement_08A.png)**  
    Séquence détaillée des appels et échanges entre frontend, backend, prestataire de paiement et agence lors d’une réservation payée.

12. **[Schema_Sequence_Reservation_Cycle_Complet_08B.png](Schema_Sequence_Reservation_Cycle_Complet_08B.png)**  
    Séquence “end-to-end” couvrant tout le cycle de réservation : recherche → choix véhicule → acompte → confirmation → post-réservation.

---

## 3. Données & domaines backend

13. **[Schema_Donnees_Backend_Principal_06A.png](Schema_Donnees_Backend_Principal_06A.png)**  
    Modèle conceptuel des données principales : User, Agency, Vehicle, Booking, Payment, KYC, Support, etc.

14. **[Schema_Domaines_Fonctionnels_Backend_06B.png](Schema_Domaines_Fonctionnels_Backend_06B.png)**  
    Découpage du backend en domaines fonctionnels (réservation, paiement, catalogue véhicules, agences, support…) et leurs responsabilités.

---

## 4. Architecture applicative, technique & infrastructure

15. **[Schema_Architecture_Applicative_07A.png](Schema_Architecture_Applicative_07A.png)**  
    Vue d’ensemble des couches applicatives : frontend, backend, services internes, intégrations externes, automations.

16. **[Schema_Architecture_Technique_Detaillee_07.png](Schema_Architecture_Technique_Detaillee_07.png)**  
    Architecture technique détaillée : choix technos (Next, API, BDD, services), flux réseau, modules techniques.

17. **[Schema_CI_CD_Integration_07B.png](Schema_CI_CD_Integration_07B.png)**  
    Schéma d’intégration continue / déploiement continu : pipeline CI/CD, environnements (dev, staging, prod), tests, déploiement.

18. **[Schema_Bus_d’événements_&_Communication_Asynchrone.png](Schema_Bus_d’événements_&_Communication_Asynchrone.png)**  
    Bus d’événements et communication asynchrone entre services : messages, topics, événements métier, file d’attente.

19. **[Schema_Securité_&_Authentification_10A.png](Schema_Securité_&_Authentification_10A.png)**  
    Schéma sécurité & authentification : types d’utilisateurs, mécanismes d’auth, gestion des sessions / tokens.

20. **[Schema_Securite_Architecture_10Abis – Architecture Sécurité & Conformité.png](Schema_Securite_Architecture_10Abis – Architecture Sécurité & Conformité.png)**  
    Vue d’architecture sécurité : zones de confiance, règles de conformité, protection des données, journalisation.

21. **[Schema_Observabilite_&_Monitoring_10B.png](Schema_Observabilite_&_Monitoring_10B.png)**  
    Observabilité & monitoring : logs, métriques, traces, dashboard de supervision, alertes.

22. **[Schema_Event_Lifecycle_10Cbis – Cycle de vie complet d’un événement.png](Schema_Event_Lifecycle_10Cbis – Cycle de vie complet d’un événement.png)**  
    Cycle de vie d’un événement métier : émission, enrichissement, traitement, stockage, consommation.

---

## 5. Support & incidents

23. **[Schema_Support_Incident_11 – Gestion du Support & Incidents.png](Schema_Support_Incident_11 – Gestion du Support & Incidents.png)**  
    Processus de support : création d’un ticket, priorisation, prise en charge, résolution.

24. **[Schema_Support_Incident_11bis – Cycle de vie d’un ticket de support.png](Schema_Support_Incident_11bis – Cycle de vie d’un ticket de support.png)**  
    Cycle de vie complet d’un ticket : ouvert, en cours, en attente, résolu, fermé.

25. **[Schema_Support_Incident_11ter – SLA & Workflow Automatisé.png](Schema_Support_Incident_11ter – SLA & Workflow Automatisé.png)**  
    Gestion des SLA (temps de réponse / résolution) et workflows automatiques de notifications et escalades.

---

## 6. Reporting, analytics & qualité

26. **[Schema_Boucle_Qualite_Feedback_09A.png](Schema_Boucle_Qualite_Feedback_09A.png)**  
    Boucle de feedback qualité : collecte des retours, analyse, amélioration continue produit.

27. **[Schema_Reporting_Analytics_12 – Reporting & Pipeline Analytics.png](Schema_Reporting_Analytics_12 – Reporting & Pipeline Analytics.png)**  
    Architecture de reporting : quelles données sont collectées, comment elles sont transformées et exposées.

28. **[Schema_Reporting_Analytics_12bis – Cycle de données complet (Extraction → KPI → Décision).png](Schema_Reporting_Analytics_12bis – Cycle de données complet (Extraction → KPI → Décision).png)**  
    Cycle complet des données : extraction, stockage, calcul des KPI, visualisation, prise de décision.

---

## 7. Évolution produit & roadmap

29. **[Schema_Evolution_Produit_13 – Évolution Produit & Roadmap complète.png](Schema_Evolution_Produit_13 – Évolution Produit & Roadmap complète.png)**  
    Roadmap globale du produit : grandes étapes d’évolution d’EkriMenDarek (MVP, V1, V2, features futures).

30. **[Schema_Evolution_Produit_13_Dependances_Modules – Dépendances inter-modules du produit EkriMenDarek.png](Schema_Evolution_Produit_13_Dependances_Modules – Dépendances inter-modules du produit EkriMenDarek.png)**  
    Dépendances entre modules : dans quel ordre développer les briques (réservation, paiement, support, analytics, etc.) pour éviter de casser le système.

---

## Utilisation par les IA / IDE

- Avant de développer une nouvelle fonctionnalité, se référer aux sections :
  - **1 & 2** pour tout ce qui concerne le parcours utilisateur et les flux de réservation/paiement,
  - **3 & 4** pour la structure des données et l’architecture technique,
  - **5 & 6** pour le support, la qualité, le reporting.
- Les schémas **06A / 06B / 05A–C / 08A–B** sont la base pour le **backend (Prisma, API, logique métier)**.
- Les schémas **02 / 03 / 03B / 03C / 04** sont la base pour le **frontend et l’UX**.
- Les schémas **13** servent de référence pour prioriser les étapes (MVP, V1, V2…).
