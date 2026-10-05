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


---

## Zyklus 11 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- `Worm`-Entity mit Position, Geschwindigkeit, HP, Team, Farbe, Kopfbedeckung und Aktivstatus erstellt.
- Grundbewegung, Gravitation, Bodenkollision, Explosion und Darstellung implementiert.

### Neue Dateien
- `js/worm.js`

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Zustandsfelder und Renderpfad statisch geprüft.
- Bewegung und Explosionsschaden auf offensichtliche Grenzwerte geprüft.

### Bekannte Probleme
- Terrain-, Projektil- und Waffenmodule fehlen noch.

### Nächster Schritt
- `js/terrain.js` erstellen.


---

## Zyklus 12 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- Terrain-Datenmodell mit Höhenprofil, Kollision, Rendering und zerstörbaren Kratern erstellt.

### Neue Dateien
- `js/terrain.js`

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Höhenabfragen und Map-Grenzen geprüft.
- Kraterbildung ist auf den vorhandenen Terrainbereich begrenzt.

### Bekannte Probleme
- Karten- und Projektilmodule fehlen noch.

### Nächster Schritt
- `js/projectile.js` erstellen.


---

## Zyklus 13 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- Projektil-Entity mit Position, Geschwindigkeit, Gravitation, Wind-Einfluss und Map-Grenzprüfung erstellt.

### Neue Dateien
- `js/projectile.js`

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Flugzustandsänderung und Grenzprüfung statisch geprüft.

### Bekannte Probleme
- Waffen- und Map-Konfiguration fehlen noch.

### Nächster Schritt
- `js/weapons.js` erstellen.


---

## Zyklus 14 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- Gemeinsame Waffenstruktur und erste drei Waffen definiert: Bazooka, Granate und Dynamit.
- Schaden, Explosionsradius, Gravitation und Projektilfarbe als Daten konfiguriert.

### Neue Dateien
- `js/weapons.js`

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Alle Waffen besitzen die vom Projektil-/Explosionssystem erwarteten Felder.

### Bekannte Probleme
- Dynamit-Countdown wird erst in der Waffenphase vollständig genutzt.

### Nächster Schritt
- `js/maps.js` erstellen.


---

## Zyklus 15 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- Map-Datenmodul mit reproduzierbarem Terrain-Höhenprofil und zwei Spawnpunkten erstellt.
- Map-Erzeugung als Kopie vorbereitet, damit Laufzeitänderungen die Quelldaten nicht mutieren.

### Neue Dateien
- `js/maps.js`

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Map-Abmessungen, Spawnpunkte und Oberflächenlänge geprüft.

### Bekannte Probleme
- Aktuell ist nur eine Testwelt enthalten; vier Welten folgen in Phase 11.

### Nächster Schritt
- `js/ai.js` erstellen.


---

## Zyklus 16 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- `AIController` als isolierte KI-Schnittstelle vorbereitet.
- Wurm-, Ziel- und Waffenwahl sowie ein einfacher Schussablauf sind gekapselt.

### Neue Dateien
- `js/ai.js`

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- KI-Schnittstelle auf die bestehenden Game-APIs abgeglichen.

### Bekannte Probleme
- KI wird erst in Phase 16 vollständig in den Turn-Flow integriert.

### Nächster Schritt
- Asset-Verzeichnisse mit Platzhalterdateien anlegen.


---

## Zyklus 17 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- Bild- und Sound-Asset-Verzeichnisse als versionierte Platzhalter angelegt.

### Neue Dateien
- `assets/images/.gitkeep`
- `assets/sounds/.gitkeep`

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Beide Verzeichnisse sind im Repository abgebildet.

### Bekannte Probleme
- Eigene finale Grafiken und Sounds folgen in späteren Polishing-/Audio-Phasen.

### Nächster Schritt
- Phase 1 Basis-HTML vervollständigen und die Projektgrundlage als funktionierenden Browserstand validieren.


---

## Zyklus 18 – 2026-10-05

### Phase
Phase 1 – Projektgrundlage

### Erledigt
- Basis-HTML vollständig mit Canvas, Hauptmenü, Spielbereich und HUD verbunden.
- Projektgrundstruktur aus HTML, CSS und modularen JavaScript-Dateien steht.
- Asset-Verzeichnisse sind versioniert.
- Ein erster lokaler Spielstart bis zum Canvas-Gameplay ist technisch verdrahtet.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `ROADMAP.md`
- `CHANGELOG.md`
- `js/game.js` (Setup-State korrigiert)

### Tests
- Modulpfade und DOM-IDs manuell abgeglichen.
- Game-Setup-State korrigiert, damit kein undefinierter Zustand verwendet wird.
- Game Loop, Canvas-Renderpfad und Menüverdrahtung statisch geprüft.

### Bekannte Probleme
- Browser-E2E-Test konnte in dieser Entwicklungsumgebung nicht direkt ausgeführt werden.
- Phase 2 wird die Game-Loop-/State-/Input-Implementierung systematisch vervollständigen.

### Nächster Schritt
- Phase 2: Game Loop und Spielzustände vollständig ausbauen.


---

## Zyklus 19 – 2026-10-05

### Phase
Phase 2 – Game Engine / Spielschleife

### Erledigt
- `requestAnimationFrame`-Game-Loop mit Delta-Time und getrennten Update-/Render-Schritten umgesetzt.
- Pause-Zustand ergänzt.
- Main Menu, Game Setup, Loading, Playing, Projectile Flying, Explosion, Turn Transition und Game Over als Zustände abgebildet.
- Mauszeiger, Mausklicks und Tastatur-Eingaben mit zustandsabhängiger Verarbeitung verbunden.
- Turn Transition mit kurzer Übergangszeit implementiert.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `js/game.js`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Game-State-Namen gegen Roadmap abgeglichen.
- Update/Render-Loop auf begrenzte Delta-Time geprüft.
- Eingaben sind nur während eines spielbaren Zustands für Gameplay-Aktionen aktiv.

### Bekannte Probleme
- Browser-E2E-Ausführung steht noch aus.
- Spielphysik und Terrain sind noch Prototypen.

### Nächster Schritt
- Phase 3: Map-System, Spawnpunkte und erste vollständig geladene Test-Map ausbauen.


---

## Zyklus 20 – 2026-10-05

### Phase
Phase 3 – Erste Spielwelt

### Erledigt
- Map-Datenstruktur mit Abmessungen, Terrainprofil, Spawnpunkten und visuellen Parametern erstellt.
- Erste Test-Map mit zwei Team-Spawnpunkten integriert.
- Terrain rendert Hintergrund, Boden und Hügelprofil.
- Terrain-Kollision und Map-Grenzen stehen für Würmer und Projektile bereit.
- Game-Start verwendet jetzt die Spawnpunkte der geladenen Map statt hart codierter Positionswerte.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `js/game.js`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Map-Spawns und Terrain-Abmessungen geprüft.
- Spawnpunkte werden beim Matchstart aus den Map-Daten gelesen.

### Bekannte Probleme
- Noch nur eine Welt.
- Terrainzerstörung und vollständige Kollisionsanpassung folgen später.

### Nächster Schritt
- Phase 4: Wurm-System vollständig ausbauen und mehrere Würmer mit Bewegung und Terrain-Kollision unterstützen.


---

## Zyklus 21 – 2026-10-05

### Phase
Phase 4 – Würmer

### Erledigt
- Worm-Entity deckt Position, Geschwindigkeit, HP, Team, Farbe, Kopfbedeckung, Lebensstatus und Aktivstatus ab.
- Eigenständige Wurm-Darstellung inklusive Augen und Kopfbedeckungen umgesetzt.
- Gravitation, Boden-Kollision, Bewegung, Richtungswechsel, Sprung und Map-Grenzen implementiert.
- Aktiver Wurm wird explizit markiert und im Rendering hervorgehoben.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `js/game.js`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Wurm-Felder gegen Anforderungen geprüft.
- Aktivstatus wird beim Matchstart und Zugwechsel synchron gesetzt.
- Bewegungsgrenzen und Bodenauflage im Code geprüft.

### Bekannte Probleme
- Teamgrößen 1/2/3 werden in Phase 5 ergänzt.

### Nächster Schritt
- Phase 5: Teams, Teamgrößen, Zugverwaltung und freie Wurmauswahl pro Zug implementieren.


---

## Zyklus 22 – 2026-10-05

### Phase
Phase 5 – Teams und Zug-System

### Erledigt
- Zwei Teams und konfigurierbare Teamgrößen 1–3 implementiert.
- Vor jedem Zug werden lebende eigene Würmer als auswählbare Buttons angezeigt.
- Aktiver Wurm kann innerhalb des aktuellen Teams gewechselt werden.
- Zugdauer von 20 Sekunden, Zugstart, Zugende und Teamwechsel integriert.
- Ausgeschiedene Würmer werden deaktiviert.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `index.html`
- `js/main.js`
- `js/game.js`
- `js/ui.js`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Teamgrößen 1/2/3 werden auf den zulässigen Bereich begrenzt.
- Wurmauswahl wird auf lebende Würmer des aktiven Teams beschränkt.
- Zugtimer endet automatisch und wechselt das Team.

### Bekannte Probleme
- Teamgröße wird derzeit vor dem Match gewählt; eine vollständige Setup-Ansicht folgt in Phase 13.

### Nächster Schritt
- Phase 6: Zielsystem, Schussstärke und Projektil-Flugphysik vervollständigen.


---

## Zyklus 23 – 2026-10-05

### Phase
Phase 6 – Zielen und Schießen

### Erledigt
- Mauszielrichtung mit Winkelberechnung und visueller Ziellinie umgesetzt.
- Schussstärke zwischen 15 % und 100 % geführt, per Mausdistanz gesetzt und per Mausrad feinjustierbar.
- Schussstärke im HUD angezeigt.
- Projektilstart, Geschwindigkeit, Flugrichtung, Gravitation und Windbeeinflussung verbunden.
- Projektilrenderring und Map-Grenzbehandlung umgesetzt.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `index.html`
- `js/game.js`
- `js/projectile.js`
- `js/ui.js`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Zielwinkel wird aus der aktuellen Mausposition berechnet.
- Schussstärke wird begrenzt und im HUD gespiegelt.
- Projektil aktualisiert Position und Geschwindigkeit anhand von Delta-Time.

### Bekannte Probleme
- Projektil-Kollision ist derzeit auf Terrain/Map-Grenzen beschränkt; Wurm-Kollision folgt über Explosion.

### Nächster Schritt
- Phase 7: Wind-System sichtbar machen und sauber in die Projektilphysik integrieren.


---

## Zyklus 24 – 2026-10-05

### Phase
Phase 7 – Wind

### Erledigt
- Windstärke und -richtung pro Zug zufällig erzeugt.
- Windwert im HUD sichtbar gemacht und bei der Projektilbewegung skaliert angewendet.
- Wind wird beim Zugwechsel neu bestimmt.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `js/game.js`
- `js/ui.js`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Windwert bleibt während eines Schusses stabil.
- Zugwechsel erzeugt einen neuen Windwert.
- Projektilbeschleunigung berücksichtigt Vorzeichen und Stärke des Windes.

### Bekannte Probleme
- HUD zeigt den Wind derzeit numerisch statt als grafischen Pfeil.

### Nächster Schritt
- Phase 8: Explosionen, Schadensabstufung, Rückstoß und Tod vollständig ausbauen.


---

## Zyklus 25 – 2026-10-05

### Phase
Phase 8 – Explosionen und Schaden

### Erledigt
- Explosionen besitzen Position, Radius und animierte Lebensdauer.
- Explosionsschaden wird radial nach Entfernung berechnet und durch Waffenwerte begrenzt.
- Rückstoß wird richtungs- und entfernungsabhängig auf Würmer angewendet.
- 0 HP setzt Würmer auf ausgeschieden; Auswahl filtert sie automatisch aus.
- Ausgeschiedene Würmer erhalten eine sichtbare Markierung.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `js/game.js`
- `js/worm.js`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Explosionsradius und Distanzfaktor geprüft.
- Rückstoß folgt vom Explosionszentrum weg.
- Todeszustand verhindert weitere Bewegung und Auswahl.

### Bekannte Probleme
- Mehrere gleichzeitige Explosionen sind noch nicht vorgesehen.

### Nächster Schritt
- Phase 9: Zerstörbares Terrain und Kollisionsanpassung nach Kratern vertiefen.


---

## Zyklus 26 – 2026-10-05

### Phase
Phase 9 – Zerstörbares Terrain

### Erledigt
- Terrain als veränderbares Höhenprofil gespeichert.
- Explosionsradien erzeugen dauerhafte Krater und aktualisieren die Kollisionshöhe.
- Terrain stellt Boden-/Kollisionsabfragen nach Änderungen direkt aus den aktuellen Daten bereit.
- Lebende Würmer werden nach einer Explosion auf die neue Bodenoberfläche gesetzt.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `js/terrain.js`
- `js/game.js`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Krateränderung bleibt im Map-Bereich.
- Neue Bodenhöhe wird unmittelbar für Wurm-Kollisionen verwendet.

### Bekannte Probleme
- Das Terrain ist als 1D-Höhenprofil modelliert; Höhlen/überhängende Geometrie sind nicht Teil des aktuellen Prototyps.

### Nächster Schritt
- Phase 10: Waffenarchitektur, Bazooka, Granate, Dynamit und freie Waffenwahl pro Zug ausbauen.


---

## Zyklus 27 – 2026-10-05

### Phase
Phase 10 – Waffen-System

### Erledigt
- Gemeinsame Waffenstruktur mit Name, Schaden, Explosionsradius, Projektil-/Gravitationswerten und Spezialparametern erstellt.
- Bazooka, Granate und Dynamit als spielbare Waffen eingebunden.
- Dynamit erhält Platzierung auf dem Terrain und Countdown-Zündung.
- Waffenauswahl im HUD erlaubt unabhängigen Wechsel der Waffe vor dem Schuss.
- Wurm- und Waffenwahl sind unabhängig voneinander.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `index.html`
- `js/main.js`
- `js/game.js`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Waffen-IDs gegen UI und Game-Controller abgeglichen.
- Dynamit-Fuse gegen den Projektileinschlagspfad abgesichert.

### Bekannte Probleme
- Waffenvorräte/Ammo sind noch unbegrenzt; das ist in den aktuellen Anforderungen nicht zwingend vorgegeben.

### Nächster Schritt
- Phase 11: Vier eigenständige Welten und Map-Auswahl umsetzen.


---

## Zyklus 28 – 2026-10-05

### Phase
Phase 11 – Vier Welten

### Erledigt
- Vier eigenständige Welten mit unterschiedlichen Terrainprofilen und Farbstimmungen angelegt.
- Map-ID und Map-Auswahl im Matchstart gespeichert und geladen.
- Welt-Auswahl im Hauptmenü mit Vorschau-Text und Bestätigung über Matchstart ergänzt.
- Jede Welt besitzt eigene Spawnpunkte.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `js/maps.js`
- `js/game.js`
- `js/main.js`
- `index.html`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Alle vier Map-IDs werden von `configureMap` akzeptiert.
- Jede Map besitzt zwei Spawnpunkte und ein eigenes Terrainprofil.

### Bekannte Probleme
- Die Vorschau ist aktuell textbasiert; eine Miniaturansicht folgt im UI-Polishing.

### Nächster Schritt
- Phase 12: Wurmfarben und Kopfbedeckungen als echte Match-Konfiguration auswählbar machen.


---

## Zyklus 29 – 2026-10-05

### Phase
Phase 12 – Charakter-Anpassung

### Erledigt
- Wurmfarben mit sechs eigenen Farboptionen und Links-/Rechtspfeilen auswählbar gemacht.
- Kopfbedeckungen Keine, Hut, Cap und Mütze auswählbar gemacht.
- Für bis zu sechs konfigurierte Würmer werden Farbe und Kopfbedeckung separat gespeichert.
- Konfiguration wird beim Matchstart in die Worm-Entities übernommen und ist im Spiel sichtbar.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `index.html`
- `js/main.js`
- `js/game.js`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Vier Kopfbedeckungswerte gegen Worm-Rendering abgeglichen.
- Farb-/Hat-Auswahl zyklisch auf gültige Optionen begrenzt.
- Matchstart übernimmt gespeicherte Konfigurationen.

### Bekannte Probleme
- Vorschau ist text-/farbwertbasiert; visuelle Politur folgt später.

### Nächster Schritt
- Phase 13: Hauptmenü und Match-Setup als vollständigen Konfigurationsfluss ausbauen.


---

## Zyklus 30 – 2026-10-05

### Phase
Phase 13 – Hauptmenü und Match-Setup

### Erledigt
- Hauptmenü um PC, Online, Einstellungen und Credits/Info erweitert.
- PC-Modus startet mit ausgewählter Welt, Teamgröße und Wurmkonfiguration.
- Online-Menüpunkt ist sichtbar, bleibt aber bis Phase 17 bewusst deaktiviert.
- Welt-, Teamgrößen- und Wurmkonfigurationen werden vor Matchstart übernommen.
- Matchstart lädt Map, Teams und konfigurierte Würmer.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `index.html`
- `js/main.js`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Menüaktionen gegen vorhandene DOM-Elemente geprüft.
- Matchstart übernimmt Map, Teamgröße und Wurmkonfiguration.

### Bekannte Probleme
- Einstellungen/Credits sind zunächst einfache Info-Dialoge.
- Online bleibt absichtlich bis Phase 17 deaktiviert.

### Nächster Schritt
- Phase 14: HUD, Waffen-/Wurmauswahl und Zugübergänge weiter ausbauen.


---

## Zyklus 31 – 2026-10-05

### Phase
Phase 14 – HUD und Benutzeroberfläche

### Erledigt
- HUD zeigt Team, aktiven Wurm, HP, Wind, Waffe, Schussstärke und Status.
- Waffenauswahl markiert die aktive Waffe und erlaubt Wechsel vor dem Schuss.
- Schießen-Button ergänzt.
- Wurmauswahl zeigt lebende und deaktiviert ausgeschiedene Würmer.
- Turn-Transition blendet den nächsten Spieler kurz sichtbar ein.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `index.html`
- `js/main.js`
- `js/ui.js`
- `js/game.js`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- HUD-Felder und Button-IDs abgeglichen.
- Aktive Waffe wird aus dem Game-State markiert.
- Wurmauswahl ist außerhalb des spielbaren Zustands deaktiviert.

### Bekannte Probleme
- UI-Polishing und responsive Detailgestaltung folgen später.

### Nächster Schritt
- Phase 15: Sieg/Niederlage und Ergebnisbildschirm vollständig umsetzen.


---

## Zyklus 32 – 2026-10-05

### Phase
Phase 15 – Sieg, Niederlage und Match-Ende

### Erledigt
- Nach jedem Tod wird geprüft, ob ein Team keine lebenden Würmer mehr besitzt.
- Gewinnerteam und Matchdauer werden gespeichert.
- Game Over beendet weitere Gameplay-Aktionen und zeigt Ergebnisinformationen.
- „Nochmal spielen“ und „Zurück zum Menü“ integriert.

### Neue Dateien
- Keine.

### Geänderte Dateien
- `index.html`
- `js/game.js`
- `js/ui.js`
- `js/main.js`
- `ROADMAP.md`
- `CHANGELOG.md`

### Tests
- Siegerlogik bei leerem Teambestand geprüft.
- Game-Over-Zustand verhindert weitere Updates der Gameplay-Aktionen.
- Replay setzt Matchzustand und Ergebnisdaten zurück.

### Bekannte Probleme
- Statistiken sind auf Sieger und Matchdauer reduziert.

### Nächster Schritt
- Phase 16: KI-Zugsteuerung und Zielberechnung integrieren.
