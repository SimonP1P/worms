# AGENT.md – Arbeitsanweisung für die Entwicklung

## Zweck

Diese Datei ist die zentrale Arbeitsanweisung für den Entwicklungs-Agenten dieses Projekts.

Der Agent soll dieses Dokument **vor jeder Entwicklungsrunde lesen** und danach selbstständig anhand der `ROADMAP.md` arbeiten.

Die `ROADMAP.md` definiert **was** gebaut werden soll.

Diese `AGENT.md` definiert **wie** daran gearbeitet werden soll.

Die `CHANGELOG.md` dokumentiert **was tatsächlich gemacht wurde**.

---

# 1. Verbindliche Dateien

Vor jeder Entwicklungsrunde müssen diese Dateien berücksichtigt werden:

1. `AGENT.md` – Arbeitsregeln
2. `ROADMAP.md` – Entwicklungsplan
3. `README.md` – vollständige Produktanforderungen
4. `CHANGELOG.md` – bisherige Änderungen

Reihenfolge:

```text
AGENT.md
   ↓
ROADMAP.md
   ↓
README.md
   ↓
CHANGELOG.md
   ↓
aktuellen Code prüfen
   ↓
nächsten offenen Roadmap-Schritt bestimmen
   ↓
implementieren
   ↓
testen
   ↓
ROADMAP.md aktualisieren
   ↓
CHANGELOG.md aktualisieren
   ↓
committen
```

---

# 2. Grundprinzip

Arbeite **inkrementell**.

Es darf nicht einfach möglichst viel Code auf einmal erzeugt werden.

Stattdessen:

1. Nächsten offenen Schritt aus der Roadmap bestimmen.
2. Anforderungen dazu aus `README.md` prüfen.
3. Bestehenden Code untersuchen.
4. Nur die für diesen Schritt benötigten Änderungen durchführen.
5. Funktion testen.
6. Fehler beheben.
7. Roadmap abhaken.
8. Changelog aktualisieren.
9. Änderung committen.
10. Erst danach mit dem nächsten Schritt weitermachen.

---

# 3. Auswahl der nächsten Aufgabe

Die `ROADMAP.md` ist die Quelle der Wahrheit für den Entwicklungsfortschritt.

Der Agent soll:

- die erste noch nicht erledigte sinnvolle Checkbox finden,
- prüfen, ob deren Voraussetzungen bereits erfüllt sind,
- die Aufgabe vollständig umsetzen,
- anschließend die Checkbox abhaken.

Eine Checkbox darf nur abgehakt werden, wenn die Funktion tatsächlich implementiert und getestet wurde.

**Nicht erlaubt:** Checkboxen nur abzuhaken, weil der Code ungefähr vorbereitet wurde.

---

# 4. Phasen niemals überspringen

Grundsätzlich werden die Phasen in der Reihenfolge der `ROADMAP.md` bearbeitet.

Eine spätere Phase darf nur begonnen werden, wenn die dafür notwendigen Grundlagen vorhanden sind.

Beispiel:

- Kein Online-Multiplayer, bevor das lokale Spiel stabil funktioniert.
- Keine komplexe KI, bevor das Schießen zuverlässig funktioniert.
- Kein Balancing, bevor Waffen und Schadenssystem funktionieren.
- Kein finales Polishing, bevor die Kernmechaniken fertig sind.

Wenn eine Aufgabe eine andere Aufgabe voraussetzt, muss zuerst die Voraussetzung umgesetzt werden.

---

# 5. Zyklus / Arbeitsrunde

Ein **Zyklus** ist eine vollständige Entwicklungsrunde.

Jeder Zyklus folgt diesem Ablauf:

## Schritt 1 – Status lesen

- `AGENT.md` lesen
- `ROADMAP.md` lesen
- `README.md` lesen
- `CHANGELOG.md` lesen
- Repository-Struktur prüfen
- aktuellen Git-Status prüfen

## Schritt 2 – Aufgabe bestimmen

- nächste offene Roadmap-Aufgabe bestimmen
- Anforderungen identifizieren
- betroffene Dateien bestimmen
- mögliche Abhängigkeiten prüfen

## Schritt 3 – Implementieren

Die Aufgabe vollständig implementieren.

Dabei:

- bestehenden Code möglichst wiederverwenden
- keine unnötigen Dateien erzeugen
- keine bereits funktionierenden Systeme ohne Grund umbauen
- saubere und verständliche Struktur verwenden

## Schritt 4 – Testen

Nach der Implementierung muss geprüft werden:

- funktioniert die neue Funktion?
- funktioniert der bestehende Code weiterhin?
- gibt es JavaScript-Fehler?
- gibt es offensichtliche UI-Fehler?
- entstehen neue Bugs?

## Schritt 5 – Roadmap aktualisieren

Nur erfolgreich getestete Aufgaben werden in `ROADMAP.md` mit `[x]` markiert.

Beispiel:

```md
- [x] Canvas einbauen
- [x] Game Loop einrichten
- [ ] Spielzustände definieren
```

## Schritt 6 – Changelog aktualisieren

Alle relevanten Änderungen des Zyklus werden in `CHANGELOG.md` eingetragen.

## Schritt 7 – Commit

Nach einem erfolgreichen Zyklus einen aussagekräftigen Git-Commit erstellen.

Beispiel:

```text
Phase 2: Add game loop and game states
```

## Schritt 8 – Abschluss prüfen

Vor Abschluss des Zyklus prüfen:

- [ ] Code gespeichert
- [ ] Tests durchgeführt
- [ ] Roadmap aktualisiert
- [ ] Changelog aktualisiert
- [ ] Git-Commit erstellt

---

# 6. Changelog-Regeln

Nach **jedem abgeschlossenen Zyklus** muss `CHANGELOG.md` aktualisiert werden.

Jeder Eintrag enthält:

- Datum
- Phase
- erledigte Aufgaben
- neue Dateien
- geänderte Dateien
- wichtige technische Änderungen
- Tests
- bekannte Probleme
- nächsten Schritt

Beispiel:

```md
## Zyklus 3 – 2026-10-05

### Phase
Phase 2 – Game Engine

### Erledigt
- Game Loop erstellt
- Update-/Render-System erstellt
- Spielzustände hinzugefügt

### Neue Dateien
- `js/game.js`

### Geänderte Dateien
- `js/main.js`
- `index.html`

### Tests
- Game Loop läuft im Browser
- Keine JavaScript-Fehler

### Bekannte Probleme
- Noch keine Pause-Funktion

### Nächster Schritt
- Input-System fertigstellen
```

Keine bereits abgeschlossenen Änderungen aus vorherigen Zyklen löschen.

Der Changelog ist eine historische Dokumentation und wird nur erweitert.

---

# 7. Code-Qualität

Der Code soll:

- verständlich sein
- modular aufgebaut sein
- möglichst kleine Verantwortlichkeiten pro Datei/Klasse besitzen
- sprechende Variablen- und Funktionsnamen verwenden
- unnötige Duplikation vermeiden
- keine geheimen Zugangsdaten enthalten
- keine unnötigen Abhängigkeiten verwenden

Wenn ein System größer wird, soll es in passende Module aufgeteilt werden.

---

# 8. Bestehenden Code respektieren

Vor Änderungen immer zuerst den vorhandenen Code untersuchen.

Nicht:

- funktionierenden Code ohne Grund ersetzen
- Dateien komplett neu schreiben, obwohl kleine Änderungen ausreichen
- bereits vorhandene Systeme duplizieren
- verschiedene Implementierungen derselben Funktion parallel behalten

Wenn ein bestehendes System verbessert werden muss, soll die Verbesserung möglichst kontrolliert erfolgen.

---

# 9. Spielanforderungen haben Priorität

Bei Entscheidungen gilt diese Priorität:

1. `README.md` – Produktanforderungen
2. `ROADMAP.md` – Reihenfolge und Umfang
3. `AGENT.md` – Arbeitsweise
4. bestehender Code
5. optionale Verbesserungen

Optionale Features dürfen nicht dazu führen, dass Pflichtfunktionen verzögert werden.

---

# 10. Keine unnötigen Features

Keine zusätzlichen großen Features einbauen, nur weil sie interessant erscheinen.

Beispiele für Features, die nicht automatisch hinzugefügt werden sollen:

- Skinsystem
- Ranglisten
- Achievements
- Shop
- Accounts
- Chat
- Clans
- Battle Pass

Solche Features dürfen erst umgesetzt werden, wenn sie ausdrücklich in die Anforderungen aufgenommen wurden.

---

# 11. Grafik und Assets

Das Spiel ist von klassischen Worms-/Artillery-Spielen inspiriert, soll aber eigenständig sein.

Daher:

- keine geschützten Original-Assets übernehmen
- keine Originalfiguren kopieren
- keine Originalsounds verwenden
- eigene Grafiken erstellen oder verwenden
- eigener visueller Stil

---

# 12. Gameplay-Regeln

Die folgenden Regeln müssen bei jeder Gameplay-Implementierung berücksichtigt werden:

- 2 Teams als Grundstruktur
- 1, 2 oder 3 Würmer pro Team
- 4 auswählbare Welten
- Wurmfarbe auswählbar
- Kopfbedeckung auswählbar
- Kopfbedeckungen: keine, Hut, Cap, Mütze
- Farbe und Kopfbedeckung über Links-/Rechtspfeile auswählbar
- zu jedem eigenen Zug darf ein anderer lebender Wurm gewählt werden
- Waffe darf für jeden Zug neu gewählt werden
- zerstörbares Terrain
- Explosionen
- Schaden
- Lebenspunkte
- Rückstoß
- Projektilphysik
- Gravitation
- Wind
- Sieg, wenn alle gegnerischen Würmer ausgeschieden sind

---

# 13. Online-Regeln

Online-Funktionen werden erst umgesetzt, wenn das lokale Spiel stabil ist.

Der Server soll bei wichtigen Spielentscheidungen die autoritative Instanz sein.

Der Client darf nicht allein entscheiden über:

- Schaden
- Lebenspunkte
- Sieg/Niederlage
- gültige Züge
- gültige Waffenaktionen
- wichtige Matchzustände

---

# 14. Testprinzip

Jede neue Funktion muss mindestens einen passenden Test erhalten.

Bei Gameplay-Änderungen zusätzlich manuell testen:

- normaler Ablauf
- Grenzfall
- ungültige Eingabe
- Zusammenspiel mit bereits vorhandenen Systemen

Beispiel für eine Waffenänderung:

- Waffe auswählen
- Waffe wechseln
- Waffe abfeuern
- Explosion prüfen
- Schaden prüfen
- Terrain prüfen
- Zugwechsel prüfen

---

# 15. Fehlerbehandlung

Wenn beim Arbeiten ein Fehler gefunden wird:

1. Fehler reproduzieren.
2. Ursache identifizieren.
3. Fehler beheben.
4. betroffene Funktion erneut testen.
5. prüfen, ob andere Systeme betroffen sind.
6. Fehlerbehebung im Changelog dokumentieren.

Wenn ein Fehler nicht sinnvoll innerhalb des aktuellen Zyklus gelöst werden kann, darf er nicht einfach ignoriert werden.

Dann muss er als **bekanntes Problem** in `CHANGELOG.md` dokumentiert werden.

---

# 16. Git-Regeln

Jeder abgeschlossene Zyklus soll einen eigenen Commit erhalten.

Commit-Nachrichten sollen beschreiben, was tatsächlich umgesetzt wurde.

Gute Beispiele:

```text
Phase 1: Add browser game project structure
Phase 2: Implement game loop
Phase 3: Add destructible terrain prototype
Phase 4: Add worm entities and movement
Phase 5: Implement turn system
```

Keine nichtssagenden Commit-Namen wie:

```text
update
fix
changes
stuff
work
```

---

# 17. Verhalten bei unklaren Anforderungen

Wenn eine Anforderung nicht eindeutig ist:

1. `README.md` prüfen.
2. `ROADMAP.md` prüfen.
3. bestehende Implementierung prüfen.
4. die kleinste sinnvolle Lösung wählen, die die Anforderungen erfüllt.

Keine unnötig komplizierte Architektur einführen, solange sie nicht benötigt wird.

---

# 18. Verhalten bei bereits erledigten Aufgaben

Wenn eine Roadmap-Aufgabe bereits implementiert ist, aber noch `[ ]` enthält:

1. Funktion überprüfen.
2. Tests durchführen.
3. wenn sie vollständig funktioniert → `[x]` setzen.
4. im Changelog vermerken, dass der bestehende Stand validiert wurde.

---

# 19. Abschlusskriterium einer Phase

Eine Phase gilt erst als abgeschlossen, wenn:

- alle notwendigen Aufgaben der Phase erledigt sind,
- alle Checkboxen auf `[x]` stehen,
- die Funktionen getestet wurden,
- keine bekannten kritischen Fehler offen sind,
- `CHANGELOG.md` aktualisiert wurde,
- ein Git-Commit erstellt wurde.

---

# 20. Abschlusskriterium des gesamten Projekts

Das Projekt ist erst fertig, wenn:

- alle relevanten Roadmap-Checkboxen erledigt sind,
- PC-Modus funktioniert,
- Online-Modus funktioniert,
- 4 Welten funktionieren,
- 1/2/3 Würmer funktionieren,
- Wurm-Anpassung funktioniert,
- Wurmauswahl pro Zug funktioniert,
- Waffenwahl pro Zug funktioniert,
- zerstörbares Terrain funktioniert,
- Physik funktioniert,
- Wind funktioniert,
- Schaden und Lebenspunkte funktionieren,
- Sieg/Niederlage funktioniert,
- UI vollständig funktioniert,
- Browser-Kompatibilität getestet wurde,
- Performance ausreichend ist,
- keine kritischen Bugs offen sind,
- README und Changelog aktuell sind.

---

# 21. Arbeitsmodus

Der Agent arbeitet immer nach diesem Muster:

```text
LESEN
  ↓
ROADMAP PRÜFEN
  ↓
NÄCHSTE OFFENE AUFGABE
  ↓
CODE ANALYSIEREN
  ↓
IMPLEMENTIEREN
  ↓
TESTEN
  ↓
FEHLER BEHEBEN
  ↓
ROADMAP ABHAKEN
  ↓
CHANGELOG EINTRAG
  ↓
GIT COMMIT
  ↓
NÄCHSTER ZYKLUS
```

**Wichtig:** Nicht mehrere Roadmap-Phasen überspringen. Nicht behaupten, etwas sei fertig, wenn es nicht getestet wurde. Nicht Checkboxen ohne tatsächliche Implementierung abhaken.
