# Bulteau Consulting &amp; Support — Site portfolio

Site statique **HTML/CSS/JS** prêt à héberger, aligné sur la charte graphique de la marque
(fond `#24242E`, logo intégré, accents rouge/jaune/vert repris du logo).

## 📁 Structure

```
bulteau/
├── index.html                → Structure et contenu
├── styles.css                → Design (dark-first, Bricolage Grotesque + Manrope)
├── script.js                 → Header, menu mobile, slideshow, animations
├── assets/
│   ├── logo.png              → Logo seul (utilisé dans header + footer + favicon)
│   ├── logo-full.png         → Logo + nom (réserve, à dispo)
│   └── hero-industrial.jpg   → Bannière industrielle (hero + placeholder projet)
└── README.md                 → Ce fichier
```

## 🚀 Déploiement

### Option 1 — Netlify Drop (le plus rapide, gratuit)
1. Va sur [app.netlify.com/drop](https://app.netlify.com/drop)
2. Glisse-dépose le dossier `bulteau/` entier
3. Site en ligne en 20 secondes. Branche ensuite ton domaine.

### Option 2 — Vercel
```bash
cd bulteau
npx vercel
```

### Option 3 — Hébergement classique (OVH, Hostinger…)
Upload le contenu du dossier `bulteau/` dans `www/` ou `public_html/` via FTP.

---

## ✏️ Personnaliser le contenu

### 🖼 Ajouter les visuels des projets

Dans `index.html`, section `#projets`, chaque `.project-card` contient :

```html
<div class="project-visual" style="background: linear-gradient(135deg, #2E3A52, #24242E);">
  <span class="project-tag">Optimisation</span>
  <span class="project-visual-fallback">VISUEL<br />À AJOUTER</span>
</div>
```

Pour mettre une vraie photo :
1. Dépose l'image dans `assets/` (ex. `projet-02.jpg`)
2. Remplace le `style` par : `style="background-image: url('assets/projet-02.jpg');"`
3. Supprime la ligne `<span class="project-visual-fallback">…</span>`

### 🎞 Ajouter la vidéo timelapse

Dans `index.html`, section `#video`, remplace le bloc `<div class="video-placeholder">…</div>` par :

**Option A — Vidéo hébergée localement (recommandé pour la qualité) :**
```html
<video controls poster="assets/hero-industrial.jpg" class="real-video">
  <source src="assets/timelapse.mp4" type="video/mp4" />
  Votre navigateur ne supporte pas la vidéo HTML5.
</video>
```

**Option B — YouTube / Vimeo :**
```html
<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/TON_ID_VIDEO"
    title="Timelapse ligne de production"
    allowfullscreen
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope">
  </iframe>
</div>
```

### 📷 Ajouter la photo N&B de Ghislain

Dans `index.html`, section `#apropos`, remplace :

```html
<div class="portrait-placeholder">…</div>
```

par :

```html
<img src="assets/ghislain-portrait.jpg" alt="Ghislain Bulteau" />
```

Dépose la photo dans `assets/`. Elle sera automatiquement passée en **N&B via CSS**
(`filter: grayscale(100%)`) — donc tu peux uploader l'originale en couleur si tu veux.

### 📝 Textes à mettre à jour

| Élément                 | Où                              | Valeur actuelle                      |
|-------------------------|---------------------------------|--------------------------------------|
| Email                   | `index.html` (plusieurs fois)   | `contact@bulteau-consulting.fr`      |
| Téléphone               | `index.html` (hero + contact)   | `+33 (0)0 00 00 00 00`              |
| LinkedIn                | `index.html` (about + contact)  | `linkedin.com/in/ghislain-bulteau`   |
| Chiffres "À propos"     | Section `#apropos`              | 20+, 40+, CNAM                       |
| Titres des projets      | Section `#projets`              | 4 projets fictifs avec stats          |

Utilise Ctrl+F / Cmd+F dans ton éditeur pour les trouver vite.

### 🎨 Couleurs (si besoin de retoucher)

Dans `styles.css`, en haut, les variables CSS :

```css
--bg:         #24242E;   /* couleur de marque */
--red:        #D64541;   /* accent — repris du logo */
--yellow:     #E5B64A;   /* accent — repris du logo */
--green:      #4FAE6C;   /* accent — repris du logo */
```

---

## 🎨 Polices utilisées

- **Bricolage Grotesque** (variable, pour les titres — caractère industriel moderne)
- **Manrope** (sans-serif, pour le texte)

Chargées depuis Google Fonts, aucune installation requise.

---

## ✅ Checklist avant mise en ligne

- [ ] Remplacer les coordonnées (tel / email)
- [ ] Ajouter la vraie photo N&B de Ghislain
- [ ] Intégrer la vidéo timelapse
- [ ] Remplacer les visuels des 4 projets
- [ ] Ajuster les titres / descriptions / stats des projets (4 projets fictifs en place)
- [ ] Ajouter d'autres slides dans le hero si besoin (voir `index.html`, `.hero-slideshow`)
- [ ] Rédiger la page "Mentions légales" (lien dans le footer)
- [ ] Vérifier le responsive sur mobile

---

## 🛠 Tester en local

Double-clic sur `index.html`, ou pour un vrai serveur local :

```bash
# Python 3
python -m http.server 8000

# ou Node
npx serve
```

Puis ouvre [http://localhost:8000](http://localhost:8000).
