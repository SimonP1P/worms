# Worms-Style Browser Game

Ein rundenbasiertes 2D-Browsergame, das von klassischen Artillery-/Worms-Spielen inspiriert ist. Das Spiel verwendet eigene Figuren, Namen, Grafiken und Sounds.

## Ziel

Spieler treten mit Würmern auf zerstörbaren 2D-Maps gegeneinander an. Gespielt wird entweder gegen den Computer oder online gegen andere Spieler.

## Spielmodi

- **Gegen PC** – Einzelspieler gegen eine KI.
- **Online** – Online-Matches gegen andere Spieler, rundenbasiert.

## Welten / Maps

Vor dem Match kann eine von **4 Welten** ausgewählt werden. Jede Welt soll eine eigene Optik und eigenes zerstörbares Terrain besitzen.

## Teams und Würmer

Vor dem Match wird festgelegt, wie viele Würmer jede Mannschaft besitzt:

- **1 Wurm**
- **2 Würmer**
- **3 Würmer**

### Wurm-Auswahl pro Zug

Zu Beginn jedes eigenen Zuges darf der Spieler neu auswählen, mit welchem noch lebenden Wurm er spielt.

## Wurm-Anpassung

### Wurmfarbe

Die Farbe des Wurms kann geändert werden. Die Auswahl erfolgt über Pfeile links/rechts: `<  Farbe  >`

### Kopfbedeckung

Die Kopfbedeckung wird ebenfalls über Pfeile links/rechts ausgewählt.

Optionen:
- Keine
- Hut
- Cap
- Mütze

Beispiel: `<  Cap  >`

Die gewählte Farbe und Kopfbedeckung soll beim jeweiligen Wurm im Spiel sichtbar sein.

## Runden- und Zug-System

1. Der aktuelle Spieler erhält seinen Zug.
2. Der Spieler kann den aktiven Wurm auswählen.
3. Der Spieler kann für diesen Zug seine Waffe auswählen.
4. Der Spieler zielt.
5. Der Spieler feuert.
6. Projektil/Explosion wird simuliert.
7. Schaden und Terrain-Veränderungen werden berechnet.
8. Der Zug endet.
9. Der nächste Spieler ist an der Reihe.

## Waffen

Die Waffe kann **für jeden einzelnen Zug neu ausgewählt bzw. geändert werden**.

Geplante Waffen:
- Bazooka
- Granate
- Dynamit
- weitere Waffen später

### Geschoss-Physik

- Schusswinkel
- Schussstärke
- Gravitation
- Flugbahn
- optional Wind
- Kollision mit Terrain
- Explosion

## Zerstörbares Terrain

Explosionen können Terrain entfernen, Krater erzeugen, Würmer beschädigen und Würmer zurückstoßen.

## Gesundheit

Jeder Wurm besitzt Lebenspunkte. Treffer verursachen Schaden. Ein Wurm mit 0 Lebenspunkten scheidet aus.

## Siegbedingung

Ein Team gewinnt, wenn alle gegnerischen Würmer ausgeschieden sind.

## Steuerung

### Maus
- Zielen
- Winkel einstellen
- Schussstärke einstellen
- UI-Auswahl bedienen

### Tastatur
Kann z. B. für Bewegung, Springen, Waffenwechsel und Kamera verwendet werden.

## Technischer Aufbau

Das Projekt soll zunächst als reines Browsergame umgesetzt werden:

- HTML
- CSS
- JavaScript
- HTML Canvas für die Spielwelt

Keine externe Game Engine ist für die erste Version erforderlich.

## Empfohlene Projektstruktur

    /
    ├── index.html
    ├── README.md
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── main.js
    │   ├── game.js
    │   ├── player.js
    │   ├── worm.js
    │   ├── weapons.js
    │   ├── projectile.js
    │   ├── terrain.js
    │   ├── maps.js
    │   ├── ai.js
    │   └── ui.js
    └── assets/
        ├── images/
        ├── sounds/
        └── maps/

## Entwicklungsphasen

### Phase 1 – Grundspiel
- Canvas
- eine Map
- zwei Teams
- Würmer
- Bewegung
- Zielen
- Schießen
- einfache Explosion
- Lebenspunkte
- Zugwechsel

### Phase 2 – Anpassung
- 1/2/3 Würmer pro Team
- Wurmfarben
- Hüte
- Caps
- Mützen
- keine Kopfbedeckung
- Auswahl per Links-/Rechtspfeil
- Wurmauswahl zu Beginn jedes Zuges

### Phase 3 – Maps und Waffen
- 4 Welten
- zerstörbares Terrain
- mehrere Waffen
- Waffenwahl pro Zug
- bessere Physik
- Wind

### Phase 4 – PC-Gegner
- KI
- verschiedene Schwierigkeitsstufen
- Zielberechnung
- Waffenwahl der KI

### Phase 5 – Online
- Online-Lobby
- Matchmaking bzw. Raum-System
- Spielersynchronisation
- synchronisierte Züge
- Verbindungsstatus
- Wiederverbindung bei kurzzeitigem Verbindungsverlust

## Wichtige Designregel

Das Spiel soll **von Worms inspiriert**, aber ein eigenständiges Spiel sein. Daher eigene Figuren, Namen, Grafiken, Sounds, UI und Maps verwenden und keine Original-Worms-Assets übernehmen.

## Definition of Done für die erste spielbare Version

- [ ] Browsergame startet im Browser
- [ ] Spieler kann gegen PC spielen
- [ ] 4 Welten sind auswählbar
- [ ] 1, 2 oder 3 Würmer pro Team sind auswählbar
- [ ] Wurmfarbe ist auswählbar
- [ ] Kopfbedeckung ist auswählbar
- [ ] Kopfbedeckung über Links-/Rechtspfeile wechselbar
- [ ] Auswahl „keine Kopfbedeckung“ funktioniert
- [ ] Spieler kann zu jedem Zug einen anderen eigenen Wurm auswählen
- [ ] Spieler kann zu jedem Zug eine andere Waffe auswählen
- [ ] Schießen und Artillery-Physik funktionieren
- [ ] Terrain ist zerstörbar
- [ ] Explosionen verursachen Schaden
- [ ] Würmer können sterben
- [ ] Zugwechsel funktioniert
- [ ] Siegbedingung funktioniert
- [ ] Online-Modus ist als Grundlage vorhanden bzw. implementiert
