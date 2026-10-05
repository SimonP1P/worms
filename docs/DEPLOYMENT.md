# Betrieb und Veröffentlichung

## GitHub Pages

Die Datei `.github/workflows/pages.yml` veröffentlicht den Browser-Client bei jedem Push auf `main`.

Nach einem erfolgreichen Workflow ist die Seite unter:

https://simonp1p.github.io/worms/

erreichbar.

Der erste Deploy kann warten, bis GitHub einen Hosted Runner bereitstellt. Ein Status wie **"Job is waiting for a hosted runner to come online"** bedeutet zunächst nur, dass der Job noch nicht ausgeführt wurde; es ist kein Build-Fehler.

## Online-Modus

GitHub Pages hostet nur die statischen Dateien. Der WebSocket-Server aus `server/` muss separat laufen.

Im Browser kann ein Server explizit angegeben werden:

`https://simonp1p.github.io/worms/?server=wss://DEIN-SERVER`

Für lokale Entwicklung reicht der Standard:

`node server/server.js`

Dann verbindet sich der Client bei lokaler HTTP-Auslieferung mit dem gleichen Host/Port.

## Sicherheit

Das aktuelle Online-System ist für die erste spielbare Version gedacht. Es gibt noch keine Benutzerkonten oder dauerhafte Authentifizierung. Lobby-Codes und kurzfristige Reconnect-IDs sind Sitzungsdaten und kein Ersatz für ein Produktions-Login.
