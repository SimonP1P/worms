# CHANGELOG.md

Alle Änderungen des Projekts werden hier chronologisch dokumentiert.

Ein Eintrag wird **nach jedem abgeschlossenen Entwicklungszyklus** hinzugefügt.

Ältere Einträge werden niemals gelöscht oder überschrieben.

---

## Zyklus 0 – Projektplanung

### Datum
2026-10-05

### Phase
Projektplanung und Anforderungen

### Erledigt
- Anforderungen für das Worms-Style-Browsergame definiert.
- `README.md` mit den vollständigen Produktanforderungen erstellt.
- `ROADMAP.md` mit den Entwicklungsphasen und einzelnen Arbeitsschritten erstellt.
- `AGENT.md` als zentrale Arbeitsanweisung für zukünftige Entwicklungszyklen erstellt.
- Changelog-System definiert.

### Neue Dateien
- `AGENT.md`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Repository-Struktur geprüft.
- Dokumentationsdateien erstellt und auf Konsistenz geprüft.

### Bekannte Probleme
- Das eigentliche Spiel ist noch nicht implementiert.

### Nächster Schritt
- Phase 1 der `ROADMAP.md`: Projektgrundlage und Browser-Spielstruktur erstellen.

---

## Zyklus 1 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- Repository-Struktur gegen `AGENT.md`, `README.md` und `ROADMAP.md` geprüft.
- Der aktuelle Stand enthält die zentralen Planungs- und Anforderungsdateien `AGENT.md`, `ROADMAP.md`, `README.md` und `CHANGELOG.md`.
- Die erste offene Roadmap-Aufgabe „Repository-Struktur prüfen“ wurde damit validiert.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Repository-Inhalt über GitHub geprüft.
- Konsistenz der vorhandenen Planungsdateien geprüft.

### Bekannte Probleme
- Die eigentliche Browser-Spielstruktur (`index.html`, `css/`, `js/`, `assets/`) existiert noch nicht.
- `.gitignore` fehlt noch.

### Nächster Schritt
- `README.md` prüfen.


---

## Zyklus 2 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- `README.md` vollständig gegen `AGENT.md` und `ROADMAP.md` geprüft.
- Produktanforderungen, Spielmodi, Gameplay-Regeln, technische Zielstruktur und Definition of Done auf Konsistenz geprüft.
- Die README-Anforderungen bestätigen die geplante native Browser-/Canvas-Architektur ohne externe Game Engine.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- README-Inhalt vollständig gelesen und mit Roadmap/Arbeitsanweisung abgeglichen.
- Repository-Struktur erneut geprüft; weiterhin nur Dokumentationsdateien vorhanden.

### Bekannte Probleme
- Browser-Spielstruktur fehlt weiterhin (`index.html`, `css/`, `js/`, `assets/`).
- `.gitignore` fehlt.

### Nächster Schritt
- `.gitignore` anlegen.


---

## Zyklus 3 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- Die bereits vorhandene `ROADMAP.md` wurde gemäß AGENT-Regel validiert und als erledigt markiert.
- Die Roadmap ist damit als verbindliche Quelle des Entwicklungsfortschritts korrekt erfasst.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- `ROADMAP.md` gelesen und auf Vorhandensein sowie Struktur geprüft.
- Offene Aufgaben erneut gegen den aktuellen Repository-Stand abgeglichen.

### Bekannte Probleme
- `.gitignore` und die Browser-Spielstruktur fehlen noch.

### Nächster Schritt
- `.gitignore` anlegen.


---

## Zyklus 4 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- `.gitignore` für Betriebssystem-, Editor-, Log-, Dependency-, Build-, Coverage- und lokale Umgebungsdateien angelegt.

### Neue Dateien
- `.gitignore`

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Inhalt der `.gitignore` auf ein reines Browserprojekt ohne verpflichtende Build-Abhängigkeiten geprüft.
- Roadmap und Changelog auf den neuen Stand gebracht.

### Bekannte Probleme
- Die eigentliche Browser-Spielstruktur fehlt noch.

### Nächster Schritt
- Grundstruktur mit HTML, CSS, JavaScript-Modulen und Asset-Platzhaltern erstellen.


---

## Zyklus 5 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- Die Commit-Struktur wurde durch die bisherigen fachlich benannten Phase-/Zyklus-Commits etabliert.
- Jeder Entwicklungszyklus erhält einen beschreibenden Commit, passend zur jeweiligen Roadmap-Aufgabe.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Bisherige Commits auf aussagekräftige, phasenbezogene Nachrichten geprüft.

### Bekannte Probleme
- Browser-Spielstruktur fehlt noch.

### Nächster Schritt
- `index.html` als Einstiegspunkt erstellen.


---

## Zyklus 6 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- `index.html` als semantischer Browser-Einstiegspunkt erstellt.
- Canvas, Hauptmenü, Spielbereich und HUD-Grundcontainer integriert.
- Responsive Viewport-Metadaten und modulare JavaScript-Einbindung vorbereitet.

### Neue Dateien
- `index.html`

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- HTML-Struktur manuell auf eindeutige IDs, Buttons, Canvas und Modulpfad geprüft.
- Canvas und HUD sind im DOM vorgesehen.

### Bekannte Probleme
- Styling und JavaScript-Implementierung folgen in den nächsten Zyklen.

### Nächster Schritt
- `css/style.css` erstellen.


---

## Zyklus 7 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- Responsive Grundgestaltung für Menü, Canvas und HUD erstellt.
- Mobile und Desktop-Layouts berücksichtigt.
- Fokuszustände und grundlegende Interaktionsstile ergänzt.

### Neue Dateien
- `css/style.css`

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Stylesheet auf gültige Selektoren und responsive Breakpoints geprüft.
- Canvas bleibt auf kleinen Viewports innerhalb des Containers.

### Bekannte Probleme
- Spiel-Logik und visuelles Rendering fehlen noch.

### Nächster Schritt
- `js/main.js` als Initialisierungspunkt erstellen.


---

## Zyklus 8 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- `js/main.js` als App-Einstiegspunkt erstellt.
- Menüaktionen, Game-Start, Zugende und Rückkehr zum Menü verdrahtet.

### Neue Dateien
- `js/main.js`

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Modulimporte und DOM-Selektoren gegen `index.html` abgeglichen.

### Bekannte Probleme
- Die importierten Module werden im nächsten Zyklus implementiert.

### Nächster Schritt
- `js/game.js` implementieren.


---

## Zyklus 9 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- `js/game.js` als zentralen Game-Controller erstellt.
- Zustände, Game Loop, Input-Grundlage, Projektil-Übergang, Explosion und Siegprüfung vorbereitet.
- Canvas-Rendering und Pause/Game-Over-Overlays integriert.

### Neue Dateien
- `js/game.js`

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Zustandsübergänge und DOM-unabhängige Controller-Struktur statisch geprüft.
- Importabhängigkeiten für die noch folgenden Module dokumentiert.

### Bekannte Probleme
- Abhängige Gameplay-Module fehlen noch.

### Nächster Schritt
- `js/ui.js` implementieren.


---

## Zyklus 10 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- `js/ui.js` als HUD- und Bildschirmsteuerung erstellt.
- Team, aktiver Wurm, HP, Wind und Waffe werden aus dem Spielzustand gespiegelt.

### Neue Dateien
- `js/ui.js`

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- HUD-IDs mit `index.html` abgeglichen.

### Bekannte Probleme
- Gameplay-Module für Würmer, Terrain und Projektil fehlen noch.

### Nächster Schritt
- `js/worm.js` erstellen.
