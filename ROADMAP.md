# ROADMAP.md – Worms-Style Browsergame

## 0. Ziel und Vorgehensweise

Ziel ist ein vollständiges, eigenständiges rundenbasiertes 2D-Browsergame mit:

- Spiel gegen PC
- Online-Multiplayer
- 4 auswählbaren Welten
- 1, 2 oder 3 Würmern pro Team
- frei wählbarer Wurmfarbe
- Kopfbedeckung: keine, Hut, Cap oder Mütze
- Auswahl von Farbe und Kopfbedeckung per Links-/Rechtspfeil
- Auswahl des aktiven eigenen Wurms zu Beginn jedes Zuges
- freie Waffenwahl in jedem Zug
- zerstörbarem Terrain
- Projektilphysik, Gravitation und Wind
- Explosionen, Schaden und Rückstoß
- Lebenspunkten
- Sieg- und Niederlagenlogik

Die Entwicklung erfolgt **von einem kleinen spielbaren Kern zu einem vollständigen Spiel**. Nach jeder Phase muss der aktuelle Stand funktionsfähig bleiben.

---

# PHASE 1 – Projektgrundlage

## 1.1 Repository vorbereiten

- [x] Repository-Struktur prüfen
- [x] `README.md` prüfen
- [x] `ROADMAP.md` anlegen
- [x] `.gitignore` anlegen
- [ ] sinnvolle Commit-Struktur festlegen

## 1.2 Grundstruktur erstellen

- [x] `index.html` erstellen
- [x] `css/style.css` erstellen
- [x] `js/main.js` erstellen
- [x] `js/game.js` erstellen
- [x] `js/ui.js` erstellen
- [x] `js/worm.js` erstellen
- [x] `js/terrain.js` erstellen
- [x] `js/projectile.js` erstellen
- [x] `js/weapons.js` erstellen
- [ ] `js/maps.js` erstellen
- [ ] `js/ai.js` erstellen
- [ ] `assets/images/` erstellen
- [ ] `assets/sounds/` erstellen

## 1.3 Basis-HTML

- [x] Canvas einbauen
- [ ] Spielfläche definieren
- [ ] Hauptmenü vorbereiten
- [ ] Spielbereich vorbereiten
- [x] HUD-Bereich vorbereiten
- [x] responsive Grundstruktur erstellen

## 1.4 Ergebnis

Am Ende dieser Phase muss eine leere, sauber strukturierte Browser-Spielseite starten.

---

# PHASE 2 – Game Engine / Spielschleife

## 2.1 Game Loop

- [ ] `requestAnimationFrame` einrichten
- [ ] Update-Schritt erstellen
- [ ] Render-Schritt erstellen
- [ ] Delta-Time berücksichtigen
- [ ] Spiel pausieren können

## 2.2 Spielzustände

Folgende Zustände definieren:

- [ ] Main Menu
- [ ] Game Setup
- [ ] Loading
- [ ] Playing
- [ ] Projectile Flying
- [ ] Explosion
- [ ] Turn Transition
- [ ] Game Over

## 2.3 Input-System

- [ ] Maus-Position erfassen
- [ ] Mausklicks erfassen
- [ ] Tastatur-Eingaben erfassen
- [ ] Eingaben abhängig vom Spielzustand aktivieren/deaktivieren

## 2.4 Ergebnis

Eine leere Test-Spielfläche läuft stabil mit funktionierender Game Loop und Eingabeverarbeitung.

---

# PHASE 3 – Erste Spielwelt

## 3.1 Map-System

- [ ] Map-Datenstruktur definieren
- [ ] Spawnpunkte definieren
- [ ] Boden definieren
- [ ] Plattformen/Hügel definieren
- [ ] Grenzen der Map definieren

## 3.2 Terrain rendern

- [ ] Terrain zeichnen
- [ ] Hintergrund zeichnen
- [ ] Boden sichtbar machen
- [ ] Kollision zwischen Wurm und Terrain vorbereiten

## 3.3 Erste Map

- [ ] eine funktionierende Test-Map erstellen
- [ ] mindestens zwei Team-Spawnpunkte erstellen
- [ ] Map laden können

## 3.4 Ergebnis

Eine vollständige Test-Map wird im Browser angezeigt und besitzt gültige Spawnpunkte.

---

# PHASE 4 – Würmer

## 4.1 Worm-Klasse

Jeder Wurm benötigt mindestens:

- [ ] Position
- [ ] Geschwindigkeit
- [ ] Lebenspunkte
- [ ] Team-ID
- [ ] Farbe
- [ ] Kopfbedeckung
- [ ] lebendig/ausgeschieden
- [ ] aktiver/inaktiver Zustand

## 4.2 Darstellung

- [ ] Wurm zeichnen
- [ ] Farbe darstellen
- [ ] Kopf darstellen
- [ ] Kopfbedeckung darstellen
- [ ] aktiven Wurm hervorheben

## 4.3 Physik

- [ ] Gravitation
- [ ] Boden-Kollision
- [ ] Schwerkraft nach Fall
- [ ] einfache Bewegung
- [ ] Richtungswechsel

## 4.4 Bewegung

- [ ] links bewegen
- [ ] rechts bewegen
- [ ] springen
- [ ] Bewegung begrenzen
- [ ] Terrain-Kollision beachten

## 4.5 Ergebnis

Mehrere Würmer können auf der Map stehen, sich bewegen und korrekt mit dem Terrain kollidieren.

---

# PHASE 5 – Teams und Zug-System

## 5.1 Teams

- [ ] Team-System erstellen
- [ ] Team 1 erstellen
- [ ] Team 2 erstellen
- [ ] Würmer Teams zuordnen

## 5.2 Teamgröße

- [ ] 1 Wurm auswählen
- [ ] 2 Würmer auswählen
- [ ] 3 Würmer auswählen
- [ ] korrekte Anzahl erzeugen

## 5.3 Zugverwaltung

- [ ] aktuellen Spieler speichern
- [ ] aktuellen Zug speichern
- [ ] Zugdauer definieren
- [ ] Zug starten
- [ ] Zug beenden
- [ ] zum nächsten Team wechseln

## 5.4 Wurmauswahl

Zu Beginn jedes eigenen Zuges:

- [ ] alle lebenden eigenen Würmer anzeigen
- [ ] Spieler darf einen Wurm auswählen
- [ ] bereits ausgeschiedene Würmer deaktivieren
- [ ] Auswahl bestätigen
- [ ] ausgewählten Wurm aktivieren

## 5.5 Ergebnis

Zwei Teams können abwechselnd spielen und vor jedem Zug einen beliebigen eigenen lebenden Wurm auswählen.

## 5.6 Ergebnis

Zwei Teams können abwechselnd spielen und vor jedem Zug einen beliebigen eigenen lebenden Wurm auswählen.

---

# PHASE 6 – Zielen und Schießen

## 6.1 Zielsystem

- [ ] Zielrichtung mit Maus bestimmen
- [ ] Winkel berechnen
- [ ] Winkel visualisieren
- [ ] Zielrichtung am Wurm anzeigen

## 6.2 Schussstärke

- [ ] Schussstärke speichern
- [ ] Schussstärke einstellen
- [ ] Schussstärke anzeigen
- [ ] Mindest-/Maximalstärke definieren

## 6.3 Projektil

- [ ] Projektil-Klasse erstellen
- [ ] Startposition bestimmen
- [ ] Startgeschwindigkeit berechnen
- [ ] Flugrichtung bestimmen
- [ ] Projektil rendern

## 6.4 Flugphysik

- [ ] Gravitation anwenden
- [ ] Geschwindigkeit aktualisieren
- [ ] Position aktualisieren
- [ ] Flugbahn berechnen
- [ ] Map-Grenzen behandeln

## 6.5 Ergebnis

Ein Wurm kann zielen, Schussstärke einstellen und ein Projektil realistisch über die Map schießen.

---

# PHASE 7 – Wind

## 7.1 Wind-System

- [ ] Windstärke definieren
- [ ] Windrichtung definieren
- [ ] Wind zufällig erzeugen
- [ ] Wind im HUD anzeigen

## 7.2 Physik

- [ ] Wind auf Projektil anwenden
- [ ] Windstärke skalieren
- [ ] Wind während eines Schusses berücksichtigen

## 7.3 Ergebnis

Spieler müssen Wind bei der Zielberechnung berücksichtigen.

---

# PHASE 8 – Explosionen und Schaden

## 8.1 Explosion-System

- [ ] Explosionsposition bestimmen
- [ ] Explosionsradius definieren
- [ ] Explosion rendern
- [ ] Explosion zeitlich animieren

## 8.2 Schaden

- [ ] Entfernung zum Explosionszentrum berechnen
- [ ] Schaden abhängig von Entfernung berechnen
- [ ] Lebenspunkte reduzieren
- [ ] Mindest-/Maximalschaden definieren

## 8.3 Rückstoß

- [ ] Explosionsrichtung berechnen
- [ ] Rückstoß anwenden
- [ ] Stärke abhängig von Entfernung machen
- [ ] Fall-/Flugphysik nach Rückstoß berücksichtigen

## 8.4 Tod

- [ ] 0 HP erkennen
- [ ] Wurm als ausgeschieden markieren
- [ ] Wurm nicht mehr auswählbar machen
- [ ] Tod visuell darstellen

---

# PHASE 9 – Zerstörbares Terrain

## 9.1 Terrain-Datenmodell

- [ ] Terrain als zerstörbare Datenstruktur speichern
- [ ] begehbare Bereiche erkennen
- [ ] feste Bereiche erkennen

## 9.2 Explosionen im Terrain

- [ ] Explosionsradius auf Terrain anwenden
- [ ] Terrain innerhalb des Radius entfernen
- [ ] Krater erzeugen
- [ ] Terrain nach Explosion aktualisieren

## 9.3 Kollisionen nach Zerstörung

- [ ] neue Bodenhöhe berechnen
- [ ] Würmer auf neue Oberfläche setzen
- [ ] Projektil-Kollision aktualisieren
- [ ] keine unsichtbaren Kollisionen zurücklassen

## 9.4 Ergebnis

Explosionen verändern die Map dauerhaft.

---

# PHASE 10 – Waffen-System

## 10.1 Waffenarchitektur

- [ ] gemeinsame Weapon-Basisklasse/Struktur
- [ ] Waffenname
- [ ] Schaden
- [ ] Explosionsradius
- [ ] Projektiltyp
- [ ] Spezialeffekte

## 10.2 Bazooka

- [ ] Projektil
- [ ] Flugbahn
- [ ] Explosion
- [ ] Schaden
- [ ] Terrainzerstörung

## 10.3 Granate

- [ ] Projektil
- [ ] Gravitation
- [ ] Explosion
- [ ] Schaden
- [ ] Terrainzerstörung

## 10.4 Dynamit

- [ ] Platzierung/Positionierung
- [ ] Countdown
- [ ] Explosion
- [ ] Schaden
- [ ] Terrainzerstörung

## 10.5 Waffenwahl pro Zug

- [ ] Waffenmenü anzeigen
- [ ] Waffe auswählen
- [ ] Auswahl jederzeit vor dem Schuss ändern
- [ ] nach dem Zug neue Waffe wählen können
- [ ] aktiven Wurm und Waffe unabhängig auswählen

## 10.6 Ergebnis

Der Spieler kann in jedem Zug eine andere verfügbare Waffe wählen.

---

# PHASE 11 – Vier Welten

## 11.1 Map-System erweitern

- [ ] mehrere Maps laden können
- [ ] Map-ID speichern
- [ ] Map-Auswahl speichern
- [ ] Map-spezifische Spawnpunkte definieren

## 11.2 Welt 1

- [ ] Layout
- [ ] Hintergrund
- [ ] Terrain
- [ ] Spawnpunkte
- [ ] Test

## 11.3 Welt 2

- [ ] Layout
- [ ] Hintergrund
- [ ] Terrain
- [ ] Spawnpunkte
- [ ] Test

## 11.4 Welt 3

- [ ] Layout
- [ ] Hintergrund
- [ ] Terrain
- [ ] Spawnpunkte
- [ ] Test

## 11.5 Welt 4

- [ ] Layout
- [ ] Hintergrund
- [ ] Terrain
- [ ] Spawnpunkte
- [ ] Test

## 11.6 Map-Auswahl

- [ ] vier Karten im Menü anzeigen
- [ ] Karte auswählen
- [ ] Vorschau anzeigen
- [ ] Auswahl bestätigen

---

# PHASE 12 – Charakter-Anpassung

## 12.1 Farbauswahl

- [ ] Farboptionen definieren
- [ ] Vorschau anzeigen
- [ ] Links-Pfeil
- [ ] Rechts-Pfeil
- [ ] Auswahl speichern

## 12.2 Kopfbedeckungen

- [ ] Keine
- [ ] Hut
- [ ] Cap
- [ ] Mütze
- [ ] Vorschau
- [ ] Links-Pfeil
- [ ] Rechts-Pfeil
- [ ] Auswahl speichern

## 12.3 Team-/Wurm-Konfiguration

- [ ] jedem Wurm Konfiguration zuweisen
- [ ] Konfiguration vor Matchstart speichern
- [ ] Konfiguration im Match verwenden

## 12.4 Ergebnis

Der Spieler kann seine Würmer vollständig nach den festgelegten Optionen konfigurieren.

---

# PHASE 13 – Hauptmenü und Match-Setup

## 13.1 Hauptmenü

- [ ] Spiel starten
- [ ] Gegen PC
- [ ] Online
- [ ] Einstellungen
- [ ] Credits/Info

## 13.2 Spielmodus auswählen

- [ ] PC auswählen
- [ ] Online auswählen
- [ ] Auswahl bestätigen

## 13.3 Welt auswählen

- [ ] vier Welten anzeigen
- [ ] Pfeile/Buttons
- [ ] Vorschau
- [ ] Auswahl bestätigen

## 13.4 Teamgröße auswählen

- [ ] 1 Wurm
- [ ] 2 Würmer
- [ ] 3 Würmer

## 13.5 Würmer konfigurieren

- [ ] Farbe
- [ ] Kopfbedeckung
- [ ] Vorschau
- [ ] Konfiguration speichern

## 13.6 Match starten

- [ ] alle Einstellungen prüfen
- [ ] Map laden
- [ ] Teams erstellen
- [ ] Würmer spawnen
- [ ] Spiel starten

---

# PHASE 14 – HUD und Benutzeroberfläche

## 14.1 HUD

- [ ] aktuelles Team anzeigen
- [ ] aktueller Wurm anzeigen
- [ ] Lebenspunkte anzeigen
- [ ] Wind anzeigen
- [ ] ausgewählte Waffe anzeigen
- [ ] Schussstärke anzeigen
- [ ] Zugstatus anzeigen

## 14.2 Waffenauswahl

- [ ] verfügbare Waffen anzeigen
- [ ] aktive Waffe markieren
- [ ] Waffe wechseln
- [ ] Schießen-Button

## 14.3 Wurmauswahl

- [ ] lebende Würmer anzeigen
- [ ] ausgeschiedene Würmer markieren
- [ ] aktiven Wurm hervorheben
- [ ] Wurm auswählen

## 14.4 Übergänge

- [ ] „Team 1 ist dran“
- [ ] „Team 2 ist dran“
- [ ] Countdown
- [ ] Zugwechsel-Animation

---

# PHASE 15 – Sieg, Niederlage und Match-Ende

## 15.1 Siegprüfung

Nach jedem Tod:

- [ ] prüfen, ob Team noch lebende Würmer besitzt
- [ ] prüfen, ob nur noch ein Team lebt

## 15.2 Game Over

- [ ] Sieger bestimmen
- [ ] Verlierer bestimmen
- [ ] Match stoppen
- [ ] Projektil-/Physiksystem stoppen

## 15.3 Ergebnisbildschirm

- [ ] Sieger anzeigen
- [ ] Matchdauer anzeigen
- [ ] optional Statistiken anzeigen
- [ ] „Nochmal spielen“
- [ ] „Zurück zum Menü"

---

# PHASE 16 – PC-Gegner / KI

## 16.1 KI-Grundlage

- [ ] KI-Team erstellen
- [ ] KI-Zug erkennen
- [ ] KI-Wurm auswählen
- [ ] KI-Waffe auswählen
- [ ] KI schießen lassen

## 16.2 Zielsystem

- [ ] Gegnerposition erkennen
- [ ] Distanz berechnen
- [ ] Winkel schätzen
- [ ] Schussstärke schätzen
- [ ] Wind berücksichtigen

## 16.3 KI-Entscheidungen

- [ ] Ziel auswählen
- [ ] Wurm auswählen
- [ ] Waffe auswählen
- [ ] Schuss ausführen

## 16.4 Schwierigkeitsgrade

### Einfach
- [ ] größere Zielabweichung
- [ ] einfache Waffenwahl

### Normal
- [ ] bessere Zielberechnung
- [ ] Wind berücksichtigen

### Schwer
- [ ] präzisere Zielberechnung
- [ ] taktische Wurmauswahl
- [ ] bessere Waffenwahl

## 16.5 Ergebnis

Ein vollständiges Match gegen einen funktionierenden PC-Gegner ist möglich.

---

# PHASE 17 – Online-Multiplayer

Diese Phase kommt erst, wenn das lokale Spiel stabil funktioniert.

## 17.1 Netzwerkarchitektur

- [ ] Game-Server erstellen
- [ ] Client/Server-Kommunikation definieren
- [ ] WebSocket-Verbindung einrichten
- [ ] Server als autoritative Instanz verwenden

## 17.2 Lobby

- [ ] Online-Menü
- [ ] Lobby erstellen
- [ ] Lobby beitreten
- [ ] Lobby-ID/Code
- [ ] Spielerstatus anzeigen

## 17.3 Match-Konfiguration

- [ ] Map auswählen
- [ ] Teamgröße festlegen
- [ ] Spieler zu Teams zuweisen
- [ ] Charakteranpassung synchronisieren

## 17.4 Synchronisation

Server muss mindestens synchronisieren:

- [ ] Spieler
- [ ] Teams
- [ ] Würmer
- [ ] Positionen
- [ ] Lebenspunkte
- [ ] aktive Würmer
- [ ] aktuelle Waffe
- [ ] Projektil
- [ ] Explosion
- [ ] Terrainänderungen
- [ ] Wind
- [ ] aktueller Zug
- [ ] Matchstatus

## 17.5 Netzwerk-Sicherheit

- [ ] Client-Eingaben validieren
- [ ] wichtige Spielregeln serverseitig prüfen
- [ ] ungültige Aktionen ablehnen
- [ ] Manipulation möglichst verhindern

## 17.6 Verbindungsprobleme

- [ ] Disconnect erkennen
- [ ] Spielerstatus anzeigen
- [ ] Reconnect ermöglichen
- [ ] Match nicht sofort bei kurzem Verbindungsverlust zerstören

## 17.7 Ergebnis

Zwei oder mehr Spieler können ein vollständiges synchronisiertes Match online spielen.

---

# PHASE 18 – Audio und Animationen

## 18.1 Sounds

- [ ] Schuss-Sound
- [ ] Explosion
- [ ] Treffer
- [ ] Schaden
- [ ] Tod
- [ ] UI-Klicks
- [ ] Zugwechsel
- [ ] Sieg

## 18.2 Animationen

- [ ] Wurmbewegung
- [ ] Trefferanimation
- [ ] Explosion
- [ ] Rückstoß
- [ ] Tod
- [ ] UI-Übergänge

## 18.3 Musik

- [ ] Menü-Musik
- [ ] Match-Musik
- [ ] Lautstärkeregelung
- [ ] Musik an/aus

---

# PHASE 19 – Grafik und Polishing

## 19.1 Grafikstil

- [ ] einheitlichen Artstyle definieren
- [ ] Würmer überarbeiten
- [ ] Kopfbedeckungen überarbeiten
- [ ] Waffen gestalten
- [ ] Projektile gestalten
- [ ] Explosionen gestalten
- [ ] Maps gestalten

## 19.2 UI-Polishing

- [ ] Buttons
- [ ] Panels
- [ ] Hover-Effekte
- [ ] Auswahlzustände
- [ ] Animationen
- [ ] responsive Darstellung

## 19.3 Lesbarkeit

- [ ] wichtige Informationen klar sichtbar
- [ ] aktive Auswahl eindeutig
- [ ] HP gut erkennbar
- [ ] Wind verständlich
- [ ] Zugstatus verständlich

---

# PHASE 20 – Balancing

## 20.1 Waffen

Für jede Waffe testen:

- [ ] Schaden
- [ ] Explosionsradius
- [ ] Reichweite
- [ ] Bedienbarkeit
- [ ] Terrainzerstörung

## 20.2 Würmer

- [ ] maximale HP festlegen
- [ ] Rückstoß testen
- [ ] Bewegung testen

## 20.3 Maps

- [ ] Spawnpunkte fair
- [ ] keine unspielbaren Stellen
- [ ] keine unfairen Vorteile
- [ ] ausreichend Platz für Artillery-Schüsse

## 20.4 Wind

- [ ] minimale Windstärke
- [ ] maximale Windstärke
- [ ] Einfluss testen

---

# PHASE 21 – Fehlerbehebung und Stabilität

## 21.1 Gameplay-Tests

- [ ] Match mit 1 Wurm testen
- [ ] Match mit 2 Würmern testen
- [ ] Match mit 3 Würmern testen
- [ ] alle 4 Maps testen
- [ ] alle Waffen testen
- [ ] alle Kopfbedeckungen testen
- [ ] alle Farben testen
- [ ] Wurmwechsel testen
- [ ] Waffenwechsel testen

## 21.2 Edge Cases

- [ ] letzter Wurm stirbt während Explosion
- [ ] beide Teams sterben nahezu gleichzeitig
- [ ] Projektil verlässt Map
- [ ] Wurm fällt in Krater
- [ ] Terrain wird unter Wurm zerstört
- [ ] sehr großer Explosionsradius
- [ ] Zugwechsel während Animation
- [ ] ungültige Eingaben

## 21.3 Performance

- [ ] FPS prüfen
- [ ] Speicherverbrauch prüfen
- [ ] unnötige Berechnungen reduzieren
- [ ] große Terrain-Updates optimieren
- [ ] viele Explosionen testen

---

# PHASE 22 – Browser-Kompatibilität

Testen auf:

- [ ] Chrome
- [ ] Firefox
- [ ] Edge
- [ ] Safari

Zusätzlich:

- [ ] Desktop-Auflösung
- [ ] kleinere Fenster
- [ ] Fullscreen
- [ ] unterschiedliche Seitenverhältnisse

---

# PHASE 23 – Release-Vorbereitung

## 23.1 Projekt aufräumen

- [ ] ungenutzten Code entfernen
- [ ] Debug-Ausgaben entfernen
- [ ] Dateinamen prüfen
- [ ] Kommentare ergänzen
- [ ] Konfiguration zentralisieren

## 23.2 Dokumentation

- [ ] README aktualisieren
- [ ] Steuerung dokumentieren
- [ ] Spielregeln dokumentieren
- [ ] Entwicklungsanleitung dokumentieren
- [ ] Online-Modus dokumentieren

## 23.3 Git

- [ ] alle Änderungen committen
- [ ] Branch prüfen
- [ ] finalen Stand auf `main` bringen
- [ ] Release-Tag erstellen

---

# PHASE 24 – Finaler Release-Test

## Komplettes Spiel einmal von Anfang bis Ende testen

- [ ] Browser öffnen
- [ ] Hauptmenü öffnen
- [ ] Spielmodus auswählen
- [ ] Welt auswählen
- [ ] Teamgröße auswählen
- [ ] Würmer konfigurieren
- [ ] Match starten
- [ ] Wurm auswählen
- [ ] Waffe auswählen
- [ ] zielen
- [ ] schießen
- [ ] Wind berücksichtigen
- [ ] Explosion auslösen
- [ ] Terrain zerstören
- [ ] Schaden verursachen
- [ ] Wurm töten
- [ ] nächsten Wurm auswählen
- [ ] nächsten Zug spielen
- [ ] Siegbedingung auslösen
- [ ] Ergebnisbildschirm anzeigen
- [ ] neues Match starten

---

# Meilensteine

## Milestone 1 – Spielbarer Kern

**Bis hier:** Würmer, Map, Bewegung, Zielen, Schießen, Schaden und Züge funktionieren.

## Milestone 2 – Kernspiel fertig

**Bis hier:** zerstörbares Terrain, Wind, mehrere Waffen, Wurmwechsel und Siegbedingungen funktionieren.

## Milestone 3 – Konfiguration fertig

**Bis hier:** 4 Maps, 1/2/3 Würmer, Farben und Kopfbedeckungen funktionieren.

## Milestone 4 – PC-Modus fertig

**Bis hier:** ein komplettes Match gegen die KI funktioniert.

## Milestone 5 – Online-Prototyp

**Bis hier:** zwei Spieler können online ein Match starten und Züge synchron spielen.

## Milestone 6 – Feature Complete

**Bis hier:** alle geplanten Gameplay-Funktionen sind implementiert.

## Milestone 7 – Release Candidate

**Bis hier:** Bugs, Performance, UI, Audio, Grafik und Browser-Kompatibilität sind ausreichend getestet.

# Priorität

Die Reihenfolge ist verbindlich:

1. **Spielbarer Kern**
2. **Physik und Terrain**
3. **Waffen**
4. **Zug-/Wurmauswahl**
5. **4 Maps und Charakter-Anpassung**
6. **PC-KI**
7. **Online-Multiplayer**
8. **Audio, Animationen und Polishing**
9. **Balancing und Tests**
10. **Release**

**Wichtig:** Online-Multiplayer wird nicht vorgezogen. Erst muss das lokale Spiel vollständig und stabil funktionieren.
