# REP. — Built and Developed by SXMU

Mobile-first Fitness-, Ernährungs- und Recovery-PWA mit Vite, React und lokalem Browser-Speicher.

## Schnellstart lokal

```bash
npm install
npm run dev
```

## Deployment über GitHub und Vercel

1. Neues GitHub-Repository anlegen, z. B. `rep-sxmu`.
2. **Den gesamten Inhalt dieses Ordners** in das Repository hochladen (nicht den übergeordneten Ordner).
3. Vercel → Add New → Project → GitHub-Repository auswählen.
4. Framework Preset **Vite** (normalerweise automatisch erkannt), Build Command `npm run build`, Output Directory `dist`.
5. Deploy klicken. Vercel liefert HTTPS. Danach im Browser öffnen und bei Bedarf auf dem Home-Bildschirm installieren.

## Enthalten

- Animiertes REP-Intro und SXMU-Branding
- Animierte Kennzahlen, Trainingsdiagramme, Farbthemen
- Home, Food, Train, Plan, Rest
- 20 Sportarten, Trainingsjournal, Gym-Sätze/Gewichte/PRs, Cardio-Demo-Timer
- 24 Beispielrezepte mit Nährwerten, Favoriten, eigene Rezepte
- Tagestracking für Mahlzeiten und Wasser, Smart-Fueling-Vorschlag
- Kalender mit Mahlzeiten und Trainings, Einkaufslisten-Aggregation, ICS-Export
- Recovery-Check-in mit Schlaf, Fatigue, Muskelkater und 7-Tage-Last
- Push-Center in den Einstellungen, Notification-Vorlagen, Berechtigungsanfrage und Test-Benachrichtigung
- PWA-Manifest, Service Worker und lokaler Offline-Cache (nach erstem Online-Laden)
- JSON-Export/Import

## Grenzen (wichtig)

- Daten liegen **nur im Browser/localStorage**. Kein Login, keine geräteübergreifende Synchronisierung.
- **Echte Push-Benachrichtigungen bei geschlossener App sind nicht aktiv.** Dafür benötigt REP ein Push-Backend, VAPID-Schlüssel, Push-Subscription-Speicherung und einen Server-/Cron-Prozess. Der Service Worker kann eingehende Push-Events anzeigen, aber die App hat noch keinen Push-Abonnement-/Versanddienst.
- Die Reminder-Logik für offene Apps prüft in festen Intervallen. Mobile Browser können diese im Hintergrund aussetzen. Notification-Berechtigungen sind je nach Browser/Installation unterschiedlich.
- Apple Health/Health Connect und GPS sind nicht integriert.
- Rezept-Nährwerte sind Schätzungen, Cardio-Kalorien/Strecke sind simuliert. Recovery-Score ist keine medizinisch validierte Kennzahl.
- Kalender-Export erzeugt eine `.ics`-Datei, keine automatische bidirektionale Synchronisierung.
- Die erste Offline-Nutzung benötigt eine erfolgreiche Online-Installation; Cache ist best-effort.

## Hinweis zu iOS

Auf dem iPhone funktionieren Web-Pushs in der Regel nur für eine zum Home-Bildschirm hinzugefügte Web-App und erst nach ausdrücklicher Freigabe. Für die hier noch fehlenden Hintergrund-Pushs muss zuerst das Backend ergänzt werden.

## Sicherheit

Keine privaten Schlüssel in `src/` oder `public/` ablegen. Ein späterer Push-Server hält private VAPID-Schlüssel ausschließlich in geschützten Server-Umgebungsvariablen.
