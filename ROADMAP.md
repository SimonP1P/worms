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
- [x] `js/maps.js` erstellen
- [x] `js/ai.js` erstellen
- [x] `assets/images/` erstellen
- [x] `assets/sounds/` erstellen

## 1.3 Basis-HTML

- [x] Canvas einbauen
- [x] Spielfläche definieren
- [x] Hauptmenü vorbereiten
- [x] Spielbereich vorbereiten
- [x] HUD-Bereich vorbereiten
- [x] responsive Grundstruktur erstellen

## 1.4 Ergebnis

Am Ende dieser Phase muss eine leere, sauber strukturierte Browser-Spielseite starten.

---

# PHASE 2 – Game Engine / Spielschleife

## 2.1 Game Loop

- [ ] `requestAnimationFrame` einrichten
- [x] Update-Schritt erstellen
- [x] Render-Schritt erstellen
- [x] Delta-Time berücksichtigen
- [x] Spiel pausieren können

## 2.2 Spielzustände

Folgende Zustände definieren:

- [x] Main Menu
- [x] Game Setup
- [x] Loading
- [x] Playing
- [x] Projectile Flying
- [x] Explosion
- [x] Turn Transition
- [x] Game Over

## 2.3 Input-System

- [x] Maus-Position erfassen
- [x] Mausklicks erfassen
- [x] Tastatur-Eingaben erfassen
- [x] Eingaben abhängig vom Spielzustand aktivieren/deaktivieren

## 2.4 Ergebnis

Eine leere Test-Spielfläche läuft stabil mit funktionierender Game Loop und Eingabeverarbeitung.

---

# PHASE 3 – Erste Spielwelt

## 3.1 Map-System

- [x] Map-Datenstruktur definieren
- [x] Spawnpunkte definieren
- [x] Boden definieren
- [x] Plattformen/Hügel definieren
- [x] Grenzen der Map definieren

## 3.2 Terrain rendern

- [x] Terrain zeichnen
- [x] Hintergrund zeichnen
- [x] Boden sichtbar machen
- [x] Kollision zwischen Wurm und Terrain vorbereiten

## 3.3 Erste Map

- [x] eine funktionierende Test-Map erstellen
- [x] mindestens zwei Team-Spawnpunkte erstellen
- [x] Map laden können

## 3.4 Ergebnis

Eine vollständige Test-Map wird im Browser angezeigt und besitzt gültige Spawnpunkte.

---

# PHASE 4 – Würmer

## 4.1 Worm-Klasse

Jeder Wurm benötigt mindestens:

- [x] Position
- [x] Geschwindigkeit
- [x] Lebenspunkte
- [x] Team-ID
- [x] Farbe
- [x] Kopfbedeckung
- [x] lebendig/ausgeschieden
- [x] aktiver/inaktiver Zustand

## 4.2 Darstellung

- [x] Wurm zeichnen
- [x] Farbe darstellen
- [x] Kopf darstellen
- [x] Kopfbedeckung darstellen
- [x] aktiven Wurm hervorheben

## 4.3 Physik

- [x] Gravitation
- [x] Boden-Kollision
- [x] Schwerkraft nach Fall
- [x] einfache Bewegung
- [x] Richtungswechsel

## 4.4 Bewegung

- [x] links bewegen
- [x] rechts bewegen
- [x] springen
- [x] Bewegung begrenzen
- [x] Terrain-Kollision beachten

## 4.5 Ergebnis

Mehrere Würmer können auf der Map stehen, sich bewegen und korrekt mit dem Terrain kollidieren.

---

# PHASE 5 – Teams und Zug-System

## 5.1 Teams

- [x] Team-System erstellen
- [x] Team 1 erstellen
- [x] Team 2 erstellen
- [x] Würmer Teams zuordnen

## 5.2 Teamgröße

- [x] 1 Wurm auswählen
- [x] 2 Würmer auswählen
- [x] 3 Würmer auswählen
- [x] korrekte Anzahl erzeugen

## 5.3 Zugverwaltung

- [x] aktuellen Spieler speichern
- [x] aktuellen Zug speichern
- [x] Zugdauer definieren
- [x] Zug starten
- [x] Zug beenden
- [x] zum nächsten Team wechseln

## 5.4 Wurmauswahl

Zu Beginn jedes eigenen Zuges:

- [x] alle lebenden eigenen Würmer anzeigen
- [x] Spieler darf einen Wurm auswählen
- [x] bereits ausgeschiedene Würmer deaktivieren
- [x] Auswahl bestätigen
- [x] ausgewählten Wurm aktivieren

## 5.5 Ergebnis

Zwei Teams können abwechselnd spielen und vor jedem Zug einen beliebigen eigenen lebenden Wurm auswählen.

## 5.6 Ergebnis

Zwei Teams können abwechselnd spielen und vor jedem Zug einen beliebigen eigenen lebenden Wurm auswählen.

---

# PHASE 6 – Zielen und Schießen

## 6.1 Zielsystem

- [x] Zielrichtung mit Maus bestimmen
- [x] Winkel berechnen
- [x] Winkel visualisieren
- [x] Zielrichtung am Wurm anzeigen

## 6.2 Schussstärke

- [x] Schussstärke speichern
- [x] Schussstärke einstellen
- [x] Schussstärke anzeigen
- [x] Mindest-/Maximalstärke definieren

## 6.3 Projektil

- [x] Projektil-Klasse erstellen
- [x] Startposition bestimmen
- [x] Startgeschwindigkeit berechnen
- [x] Flugrichtung bestimmen
- [x] Projektil rendern

## 6.4 Flugphysik

- [x] Gravitation anwenden
- [x] Geschwindigkeit aktualisieren
- [x] Position aktualisieren
- [x] Flugbahn berechnen
- [x] Map-Grenzen behandeln

## 6.5 Ergebnis

Ein Wurm kann zielen, Schussstärke einstellen und ein Projektil realistisch über die Map schießen.

---

# PHASE 7 – Wind

## 7.1 Wind-System

- [x] Windstärke definieren
- [x] Windrichtung definieren
- [x] Wind zufällig erzeugen
- [x] Wind im HUD anzeigen

## 7.2 Physik

- [x] Wind auf Projektil anwenden
- [x] Windstärke skalieren
- [x] Wind während eines Schusses berücksichtigen

## 7.3 Ergebnis

Spieler müssen Wind bei der Zielberechnung berücksichtigen.

---

# PHASE 8 – Explosionen und Schaden

## 8.1 Explosion-System

- [x] Explosionsposition bestimmen
- [x] Explosionsradius definieren
- [x] Explosion rendern
- [x] Explosion zeitlich animieren

## 8.2 Schaden

- [x] Entfernung zum Explosionszentrum berechnen
- [x] Schaden abhängig von Entfernung berechnen
- [x] Lebenspunkte reduzieren
- [x] Mindest-/Maximalschaden definieren

## 8.3 Rückstoß

- [x] Explosionsrichtung berechnen
- [x] Rückstoß anwenden
- [x] Stärke abhängig von Entfernung machen
- [x] Fall-/Flugphysik nach Rückstoß berücksichtigen

## 8.4 Tod

- [x] 0 HP erkennen
- [x] Wurm als ausgeschieden markieren
- [x] Wurm nicht mehr auswählbar machen
- [x] Tod visuell darstellen

---

# PHASE 9 – Zerstörbares Terrain

## 9.1 Terrain-Datenmodell

- [x] Terrain als zerstörbare Datenstruktur speichern
- [x] begehbare Bereiche erkennen
- [x] feste Bereiche erkennen

## 9.2 Explosionen im Terrain

- [x] Explosionsradius auf Terrain anwenden
- [x] Terrain innerhalb des Radius entfernen
- [x] Krater erzeugen
- [x] Terrain nach Explosion aktualisieren

## 9.3 Kollisionen nach Zerstörung

- [x] neue Bodenhöhe berechnen
- [x] Würmer auf neue Oberfläche setzen
- [x] Projektil-Kollision aktualisieren
- [x] keine unsichtbaren Kollisionen zurücklassen

## 9.4 Ergebnis

Explosionen verändern die Map dauerhaft.

---

# PHASE 10 – Waffen-System

## 10.1 Waffenarchitektur

- [x] gemeinsame Weapon-Basisklasse/Struktur
- [x] Waffenname
- [x] Schaden
- [x] Explosionsradius
- [x] Projektiltyp
- [x] Spezialeffekte

## 10.2 Bazooka

- [x] Projektil
- [x] Flugbahn
- [x] Explosion
- [x] Schaden
- [x] Terrainzerstörung

## 10.3 Granate

- [x] Projektil
- [x] Gravitation
- [x] Explosion
- [x] Schaden
- [x] Terrainzerstörung

## 10.4 Dynamit

- [x] Platzierung/Positionierung
- [x] Countdown
- [x] Explosion
- [x] Schaden
- [x] Terrainzerstörung

## 10.5 Waffenwahl pro Zug

- [x] Waffenmenü anzeigen
- [x] Waffe auswählen
- [x] Auswahl jederzeit vor dem Schuss ändern
- [x] nach dem Zug neue Waffe wählen können
- [x] aktiven Wurm und Waffe unabhängig auswählen

## 10.6 Ergebnis

Der Spieler kann in jedem Zug eine andere verfügbare Waffe wählen.

---

# PHASE 11 – Vier Welten

## 11.1 Map-System erweitern

- [x] mehrere Maps laden können
- [x] Map-ID speichern
- [x] Map-Auswahl speichern
- [x] Map-spezifische Spawnpunkte definieren

## 11.2 Welt 1

- [x] Layout
- [x] Hintergrund
- [ ] Terrain
- [x] Spawnpunkte
- [x] Test

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

- [x] vier Karten im Menü anzeigen
- [x] Karte auswählen
- [x] Vorschau anzeigen
- [x] Auswahl bestätigen

---

# PHASE 12 – Charakter-Anpassung

## 12.1 Farbauswahl

- [x] Farboptionen definieren
- [x] Vorschau anzeigen
- [x] Links-Pfeil
- [x] Rechts-Pfeil
- [x] Auswahl speichern

## 12.2 Kopfbedeckungen

- [x] Keine
- [x] Hut
- [x] Cap
- [x] Mütze
- [x] Vorschau
- [ ] Links-Pfeil
- [ ] Rechts-Pfeil
- [ ] Auswahl speichern

## 12.3 Team-/Wurm-Konfiguration

- [x] jedem Wurm Konfiguration zuweisen
- [x] Konfiguration vor Matchstart speichern
- [x] Konfiguration im Match verwenden

## 12.4 Ergebnis

Der Spieler kann seine Würmer vollständig nach den festgelegten Optionen konfigurieren.

---

# PHASE 13 – Hauptmenü und Match-Setup

## 13.1 Hauptmenü

- [x] Spiel starten
- [x] Gegen PC
- [x] Online
- [x] Einstellungen
- [x] Credits/Info

## 13.2 Spielmodus auswählen

- [x] PC auswählen
- [x] Online auswählen
- [x] Auswahl bestätigen

## 13.3 Welt auswählen

- [x] vier Welten anzeigen
- [x] Pfeile/Buttons
- [ ] Vorschau
- [ ] Auswahl bestätigen

## 13.4 Teamgröße auswählen

- [x] 1 Wurm
- [x] 2 Würmer
- [x] 3 Würmer

## 13.5 Würmer konfigurieren

- [x] Farbe
- [x] Kopfbedeckung
- [ ] Vorschau
- [x] Konfiguration speichern

## 13.6 Match starten

- [x] alle Einstellungen prüfen
- [x] Map laden
- [x] Teams erstellen
- [x] Würmer spawnen
- [x] Spiel starten

---

# PHASE 14 – HUD und Benutzeroberfläche

## 14.1 HUD

- [x] aktuelles Team anzeigen
- [x] aktueller Wurm anzeigen
- [x] Lebenspunkte anzeigen
- [x] Wind anzeigen
- [x] ausgewählte Waffe anzeigen
- [x] Schussstärke anzeigen
- [x] Zugstatus anzeigen

## 14.2 Waffenauswahl

- [x] verfügbare Waffen anzeigen
- [x] aktive Waffe markieren
- [x] Waffe wechseln
- [x] Schießen-Button

## 14.3 Wurmauswahl

- [x] lebende Würmer anzeigen
- [x] ausgeschiedene Würmer markieren
- [x] aktiven Wurm hervorheben
- [x] Wurm auswählen

## 14.4 Übergänge

- [x] „Team 1 ist dran“
- [x] „Team 2 ist dran“
- [x] Countdown
- [x] Zugwechsel-Animation

---

# PHASE 15 – Sieg, Niederlage und Match-Ende

## 15.1 Siegprüfung

Nach jedem Tod:

- [x] prüfen, ob Team noch lebende Würmer besitzt
- [x] prüfen, ob nur noch ein Team lebt

## 15.2 Game Over

- [x] Sieger bestimmen
- [x] Verlierer bestimmen
- [x] Match stoppen
- [x] Projektil-/Physiksystem stoppen

## 15.3 Ergebnisbildschirm

- [x] Sieger anzeigen
- [x] Matchdauer anzeigen
- [x] optional Statistiken anzeigen
- [x] „Nochmal spielen“
- [x] „Zurück zum Menü"

---

# PHASE 16 – PC-Gegner / KI

## 16.1 KI-Grundlage

- [x] KI-Team erstellen
- [x] KI-Zug erkennen
- [x] KI-Wurm auswählen
- [x] KI-Waffe auswählen
- [x] KI schießen lassen

## 16.2 Zielsystem

- [x] Gegnerposition erkennen
- [x] Distanz berechnen
- [x] Winkel schätzen
- [x] Schussstärke schätzen
- [x] Wind berücksichtigen

## 16.3 KI-Entscheidungen

- [x] Ziel auswählen
- [x] Wurm auswählen
- [x] Waffe auswählen
- [x] Schuss ausführen

## 16.4 Schwierigkeitsgrade

### Einfach
- [x] größere Zielabweichung
- [x] einfache Waffenwahl

### Normal
- [x] bessere Zielberechnung
- [x] Wind berücksichtigen

### Schwer
- [x] präzisere Zielberechnung
- [x] taktische Wurmauswahl
- [x] bessere Waffenwahl

## 16.5 Ergebnis

Ein vollständiges Match gegen einen funktionierenden PC-Gegner ist möglich.

---

# PHASE 17 – Online-Multiplayer

Diese Phase kommt erst, wenn das lokale Spiel stabil funktioniert.

## 17.1 Netzwerkarchitektur

- [x] Game-Server erstellen
- [x] Client/Server-Kommunikation definieren
- [x] WebSocket-Verbindung einrichten
- [x] Server als autoritative Instanz verwenden

## 17.2 Lobby

- [x] Online-Menü
- [x] Lobby erstellen
- [x] Lobby beitreten
- [x] Lobby-ID/Code
- [x] Spielerstatus anzeigen

## 17.3 Match-Konfiguration

- [x] Map auswählen
- [x] Teamgröße festlegen
- [x] Spieler zu Teams zuweisen
- [x] Charakteranpassung synchronisieren

## 17.4 Synchronisation

Server muss mindestens synchronisieren:

- [x] Spieler
- [x] Teams
- [x] Würmer
- [x] Positionen
- [x] Lebenspunkte
- [x] aktive Würmer
- [x] aktuelle Waffe
- [ ] Projektil
- [x] Explosion
- [x] Terrainänderungen
- [x] Wind
- [x] aktueller Zug
- [x] Matchstatus

## 17.5 Netzwerk-Sicherheit

- [x] Client-Eingaben validieren
- [x] wichtige Spielregeln serverseitig prüfen
- [x] ungültige Aktionen ablehnen
- [ ] Manipulation möglichst verhindern

## 17.6 Verbindungsprobleme

- [x] Disconnect erkennen
- [x] Spielerstatus anzeigen
- [x] Reconnect ermöglichen
- [x] Match nicht sofort bei kurzem Verbindungsverlust zerstören

## 17.7 Ergebnis

Zwei oder mehr Spieler können ein vollständiges synchronisiertes Match online spielen.

---

# PHASE 18 – Audio und Animationen

## 18.1 Sounds

- [x] Schuss-Sound
- [ ] Explosion
- [x] Treffer
- [ ] Schaden
- [x] Tod
- [x] UI-Klicks
- [x] Zugwechsel
- [x] Sieg

## 18.2 Animationen

- [x] Wurmbewegung
- [x] Trefferanimation
- [ ] Explosion
- [x] Rückstoß
- [x] Tod
- [x] UI-Übergänge

## 18.3 Musik

- [x] Menü-Musik
- [x] Match-Musik
- [x] Lautstärkeregelung
- [x] Musik an/aus

---

# PHASE 19 – Grafik und Polishing

## 19.1 Grafikstil

- [x] einheitlichen Artstyle definieren
- [x] Würmer überarbeiten
- [x] Kopfbedeckungen überarbeiten
- [x] Waffen gestalten
- [x] Projektile gestalten
- [x] Explosionen gestalten
- [x] Maps gestalten

## 19.2 UI-Polishing

- [x] Buttons
- [x] Panels
- [x] Hover-Effekte
- [x] Auswahlzustände
- [x] Animationen
- [x] responsive Darstellung

## 19.3 Lesbarkeit

- [x] wichtige Informationen klar sichtbar
- [x] aktive Auswahl eindeutig
- [x] HP gut erkennbar
- [x] Wind verständlich
- [x] Zugstatus verständlich

---

# PHASE 20 – Balancing

## 20.1 Waffen

Für jede Waffe testen:

- [ ] Schaden
- [x] Explosionsradius
- [x] Reichweite
- [x] Bedienbarkeit
- [ ] Terrainzerstörung

## 20.2 Würmer

- [x] maximale HP festlegen
- [x] Rückstoß testen
- [x] Bewegung testen

## 20.3 Maps

- [x] Spawnpunkte fair
- [x] keine unspielbaren Stellen
- [x] keine unfairen Vorteile
- [x] ausreichend Platz für Artillery-Schüsse

## 20.4 Wind

- [x] minimale Windstärke
- [x] maximale Windstärke
- [x] Einfluss testen

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
