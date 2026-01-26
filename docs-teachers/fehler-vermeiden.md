---
sidebar_position: 9
---

# Gängige Fehler vermeiden

Diese Fehler können das Mentoring-Erfolg massiv gefährden. Lerne aus unseren Erfahrungen:

## ❌ FEHLER #1: Windows-Computer zulassen

**Das ist der größte Fehler überhaupt.**

**Warum Windows ein Problem ist:**
- **Ewiger Schmerz** - unzählige Kompatibilitätsprobleme
- **Bindet zu viel Kapazität** - irgendwann kommt man nicht mehr klar
- WSL ist eine Krücke, kein echter Linux
- Unterschiedliche Pfade, Berechtigungen, Zeilenenden
- Ständig andere Fehlermeldungen als bei Linux/macOS
- Die Zeit, die du mit Windows-Problemen verbringst, fehlt für echten Unterricht

**Die Lösung:**
- **Nur Linux oder macOS** im Mentoring zulassen
- Am besten: **Alle Kinder bekommen gleiche Hardware** (z.B. Raspberry Pi 500+)
- Falls ein Kind nur Windows-PC hat: **Cloud-Lösung über Hetzner nutzen**
- Bei geteilten Familien-Computern: **Cloud-Lösung ist Pflicht** (Datenschutz!)

**Konkrete Regel:**
> "Teilnahme am Mentoring erfordert Linux oder macOS. Windows (auch mit WSL) ist nicht zugelassen. Bei Windows-Computern oder geteilten Familien-Rechnern wird die Cloud-Lösung verwendet."

**Warum das nicht hart, sondern notwendig ist:**
- Ein einziger Windows-Nutzer kann 50% deiner Support-Zeit binden
- Die anderen Kinder leiden darunter
- Du verbrennst dich selbst

## ❌ FEHLER #2: Keinen Admin-Zugang haben

**Du MUSST Administrator-Zugang auf allen Computern haben.**

**Warum das essentiell ist:**
- Software-Installation (VS Code, Git, Typst, Node.js)
- Entwicklungsumgebung aufsetzen
- Probleme schnell lösen
- Berechtigungen richtig setzen
- System-Updates durchführen

**Wie das umsetzen:**
- Bei Onboarding: Admin-Account für dich einrichten lassen
- Fernzugriff konfigurieren (z.B. SSH, TeamViewer, AnyDesk)
- Eltern müssen dem zustimmen
- Dokumentiere die Zugangsdaten sicher

**Falls Eltern zögern:**
- Erkläre, dass du sonst nicht effektiv helfen kannst
- Betone, dass du verantwortungsvoll damit umgehst
- Zeige, wie viel Zeit das allen spart

## ❌ FEHLER #3: Unterschiedliche Betriebssysteme mischen

**Je mehr Vielfalt, desto schwerer die Betreuung.**

**Das Problem:**
- macOS: `cmd + C` zum Kopieren
- Linux: `ctrl + C` zum Kopieren
- Unterschiedliche Paketmanager (apt, brew, dnf)
- Unterschiedliche Pfad-Konventionen
- Unterschiedliche Standardprogramme

**Die bessere Lösung:**
- **Alle mit gleicher Linux-Distribution** (z.B. Ubuntu, Raspberry Pi OS)
- Einheitliche Anleitung für alle
- Einheitliche Fehlerbehebung
- Kinder können sich gegenseitig helfen

**Wenn du macOS-Nutzer hast:**
- Akzeptabel, aber mach separate Anleitungen
- Dokumentiere die Unterschiede klar
- Setze Grenzen: Linux + macOS ok, aber kein Windows

## ❌ FEHLER #4: Zu schnell zu viele Tools einführen

**Überforderung garantiert.**

**Gängiger Fehler:**
- Woche 1: Git, VS Code, Terminal, Typst, GitHub, SSH-Keys
- Kinder sind komplett überfordert
- Viele geben auf

**Besser:**
- **Woche 1-2:** Nur VS Code + ein erstes Mini-Projekt (ohne Git!)
- **Woche 3-4:** Git einführen (nur add, commit, push)
- **Woche 5+:** Typst richtig nutzen
- **Später:** Branches, Pull Requests, etc.

## ❌ FEHLER #5: Keine Standardisierung

**Jedes Kind mit anderer Setup bedeutet Chaos.**

**Was standardisieren:**
- Betriebssystem (z.B. alle Ubuntu 24.04)
- Hardware (z.B. alle Raspberry Pi 500+)
- Editor (alle VS Code mit gleichen Extensions)
- Ordnerstruktur (`~/coding-class/` für alle)
- Git-Konfiguration (gleiche Einstellungen)

**Warum das wichtig ist:**
- Anleitungen funktionieren für alle gleich
- Screenshots sind universell nutzbar
- Kinder können sich gegenseitig helfen
- Fehlersuche ist einfacher

## ❌ FEHLER #6: Eltern nicht einbeziehen

**Kinder brauchen zu Hause Unterstützung.**

**Was Eltern wissen müssen:**
- Warum Linux/macOS notwendig ist
- Warum Admin-Zugang wichtig ist
- Wie das Mentoring funktioniert (asynchron, eigenes Tempo)
- Wo sie Fragen stellen können

**Wie Eltern helfen können:**
- Technischen Zugang ermöglichen
- Lernzeit zu Hause ermöglichen
- Interesse an Projekten zeigen
- Bei Hardware-Problemen unterstützen

## ❌ FEHLER #7: Alternative "einfachere" Tools verfügbar lassen

**Das tötet die Motivation komplett.**

**Das Problem:**
Du versuchst, einem Kind Typst beizubringen, aber auf dem gleichen Computer ist **Microsoft Word installiert**.

**Was passiert:**
- Kind: "Warum soll ich Code schreiben? Mit Word geht das viel schneller!"
- Kind nimmt den gefühlt einfacheren Weg
- Typst wird als "kompliziert und unnötig" empfunden
- Motivation sinkt gegen Null
- Kind lernt nichts

**Konkrete Beispiele:**
- ❌ Word/LibreOffice auf dem System → Kind nutzt nicht Typst
- ❌ Scratch installiert → Kind macht lieber Scratch statt React
- ❌ Notion/Google Docs → Kind schreibt nicht in Markdown
- ❌ Visual Block Editors → Kind lernt keinen echten Code

**Die Lösung:**
Eltern müssen **aktiv kooperieren** und diese Programme **vorenthalten**:

1. **Word/LibreOffice:** NICHT installieren oder deinstallieren
2. **Visuelle Tools:** Scratch, Blockly, etc. entfernen
3. **Cloud-Alternativen:** Google Docs, Notion für Mentoringprojekte nicht erlauben
4. **Klare Regel:** "Für Schulaufgaben kannst du Word nutzen, aber für Coding-Mentoring nur Typst"

**Warum das funktioniert:**
- Kein "einfacher Ausweg" verfügbar
- Kind muss sich mit Typst auseinandersetzen
- Nach kurzer Zeit wird Typst zur Gewohnheit
- Kind entdeckt die Vorteile von Code-basierter Dokumenterstellung

**Kommunikation mit Eltern:**
> "Bitte stellen Sie sicher, dass auf dem Computer, den Ihr Kind für das Mentoring nutzt, **keine Textverarbeitungs-Software** wie Word oder LibreOffice installiert ist. Das ist essentiell, damit Ihr Kind die Motivation behält, Typst zu lernen. Für Schulaufgaben kann ein separates System genutzt werden."

**Wichtig:** Das ist KEINE Schikane, sondern **pädagogisch notwendig**:
- Wie beim Sprachenlernen: Nur Englisch sprechen, um Englisch zu lernen
- Kein "zurück zur Muttersprache" erlauben
- Erst wenn Typst zur Gewohnheit wurde, können Alternativen wieder verfügbar sein

## Empfohlene technische Setup-Strategie

### Option A: Alle gleich (IDEAL)

**Hardware:** Alle Kinder bekommen Raspberry Pi 500+ (~200 EUR)
**Vorteil:**
- Komplett identisches Setup
- Einheitliche Problemlösung
- Faire Bedingungen für alle
- Kinder können Hardware mit nach Hause nehmen

### Option B: Linux-only gemischt (OKAY)

**Hardware:** Verschiedene Linux-Computer (eigene Laptops, etc.)
**Bedingung:** Nur Ubuntu oder Debian-basierte Distributionen
**Vorteil:**
- Keine zusätzlichen Kosten
- Nutzt vorhandene Hardware
**Nachteil:**
- Unterschiede in Hardware und Konfiguration
- Mehr Support-Aufwand

### Option C: Linux + macOS (AKZEPTABEL)

**Hardware:** Linux-Computer und MacBooks gemischt
**Bedingung:** Dokumentiere beide Welten separat
**Vorteil:**
- Nutzt vorhandene teure Hardware (MacBooks)
**Nachteil:**
- Zwei parallele Anleitungen nötig
- Mehr Komplexität

### Option D: Cloud-Lösung (FÜR WINDOWS/GETEILTE GERÄTE)

**Hardware:** Beliebiger Computer (Windows, Mac, Linux) + Cloud-Server bei Hetzner
**Bedingung:** Pflicht bei Windows-Computern oder geteilten Familien-Rechnern
**Vorteil:**
- Windows-Nutzer können teilnehmen, ohne dass du Windows-Probleme lösen musst
- Kein Zugriff auf private Daten der Familie nötig
- Du arbeitest nur auf dem Cloud-Server (Linux)
- Ca. 7 EUR/Monat Kosten
**Details:** Siehe [Cloud-Config Repository](https://github.com/tinkerers-kids/cloud-config)

## Verbesserungen und offene Fragen

**Der Setup-Prozess ist aktuell noch mühsam, aber lohnenswert.**

### Was funktioniert bereits gut:
- Raspberry Pi 500+ als standardisierte Hardware
- Admin-Zugang für schnelle Problemlösung
- Fernwartung über SSH/TeamViewer
- **Cloud-Lösung über Hetzner** für Windows-Nutzer und geteilte Computer

### Was noch verbessert werden kann:
- **Docker-Container:** Entwicklungsumgebung als Container?
  - Portabel und reproduzierbar
  - Problem: Zu abstrakt für Kinder?

- **GitHub Codespaces:** VS Code im Browser?
  - Problem: Kosten bei längerer Nutzung

**Wir sind offen für Vorschläge!** Wenn du Erfahrungen mit besseren Setup-Strategien hast, teile sie bitte in den GitHub Discussions.

## Häufige Bedenken

### "Ist Git nicht zu kompliziert für Kinder?"

**Antwort:** Nein, wenn man es richtig einführt.

Kinder lernen am Anfang nur:
```bash
git add .
git commit -m "Nachricht"
git push
```

Das ist nicht komplizierter als andere Tools. Wichtig:
- Langsam einführen
- Praktisch zeigen, nicht theoretisch erklären
- Fehler sind okay

### "Warum nicht erst Scratch, dann echter Code?"

**Antwort:** Weil das doppelte Arbeit ist.

Die "Scratch-Falle":
- Jahre mit visuellen Tools
- Dann frustrierender Neustart mit echtem Code
- Viele geben auf

Unser Ansatz:
- Einmal richtig lernen
- Alles ist übertragbar
- Kontinuierlicher Fortschritt

### "Ist das nicht zu schwer für Kinder?"

**Antwort:** Nein, aber es erfordert Geduld.

Die Lernkurve ist anfangs steiler, aber:
- Kinder sind erstaunlich lernfähig
- Mit der richtigen Unterstützung schaffen sie es
- Der langfristige Nutzen ist viel größer

### "Was ist mit Kindern, die langsam lernen?"

**Antwort:** Das Mentoring passt sich an.

- Kein Zeitdruck
- Kein Leistungsvergleich
- Individuelles Tempo
- Auch langsame Lerner profitieren

## Kontakt und Austausch

Möchtest du ein ähnliches Mentoring aufsetzen? Hast du Fragen oder Anregungen?

**GitHub-Organisation:**
- [tinkerers-kids auf GitHub](https://github.com/orgs/tinkerers-kids) - Alle Projekte und Materialien

**Öffentliches Diskussionsforum:**
- [Diskussionen starten](https://github.com/tinkerers-kids/website/discussions)
- Fragen stellen
- Erfahrungen teilen

**Dieses Repository nutzen:**
- Alle Materialien sind frei verfügbar
- Fork das Repository
- Pass es an deine Bedürfnisse an
- Trage Verbesserungen bei (Pull Requests willkommen!)

---

**Viel Erfolg beim Aufsetzen deines eigenen Mentorings! Gemeinsam machen wir Programmieren für Kinder zugänglich.**
