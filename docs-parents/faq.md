---
sidebar_position: 6
---

# Häufig gestellte Fragen (FAQ)

Hier findest du Antworten auf die häufigsten Fragen zum Mentoring-Programm.

## Allgemeine Fragen

### Mein Kind hat keine Programmiererfahrung. Ist das ein Problem?

Nein! Das Mentoring beginnt bei null und ich erkläre alle Konzepte von Grund auf. Keine Vorkenntnisse erforderlich.

### Wie viel Unterstützung braucht mein Kind?

Am Anfang ist etwas Unterstützung bei der Einrichtung nötig. Danach sollen die Kinder zunehmend selbstständig arbeiten. Hilfe ist aber jederzeit verfügbar.

### Kann mein Kind auch schneller oder langsamer voranschreiten?

Absolut! Jedes Kind arbeitet in seinem eigenen Tempo. Es gibt keinen festen Lehrplan mit Deadlines.

### Was passiert, wenn mein Kind technische Probleme hat?

Dank Fernzugriff (bei dedizierter Hardware) oder direktem Server-Zugang (bei Cloud-Lösung) können die meisten Probleme schnell gelöst werden. Bei größeren Problemen vereinbare ich einen Video-Call mit dir.

### Muss ich als Elternteil technische Kenntnisse haben?

Nein, das ist nicht notwendig. Alle technischen Aspekte werden über den Fernzugriff oder in Video-Calls geklärt.

## Hardware-Fragen

### Wir haben nur einen Windows-Computer. Geht das trotzdem?

Ja, aber **nur über die Cloud-Lösung**! Windows (auch mit WSL) ist im Mentoring nicht zugelassen, da es zu viele Probleme verursacht.

**Die Lösung:** Dein Kind verbindet sich per Remote Desktop zu einem Cloud-Server mit Linux. Auf eurem Windows-Computer wird nichts installiert außer einem RDP-Client (ist bei Windows bereits eingebaut). Siehe [Hardware-Entscheidung](/eltern/hardware-entscheidung).

**Alternativ:** Einen günstigen Linux-Rechner besorgen (z.B. Raspberry Pi 500+ für ca. 200 EUR).

### Unser Computer wird von der ganzen Familie genutzt. Ist das ein Problem?

Ja, das ist ein Problem für **Option A (dedizierte Hardware)**. Da Levin Keller vollständigen Admin-Zugriff auf das Gerät benötigt, dürfen sich dort **keine persönlichen Daten anderer Familienmitglieder** befinden - weder von Eltern noch von Geschwistern.

**Lösung:** Nutzt die **Cloud-Lösung (Option B)**. Dabei greift der Kursleiter nur auf den Cloud-Server zu, nicht auf euren Familien-Computer. Eure privaten Daten bleiben vollständig geschützt.

Siehe [Hardware-Entscheidung](/eltern/hardware-entscheidung) für mehr Details.

### Kann mein Kind auf einem Tablet teilnehmen?

Nein, leider nicht. Tablets (iPad, Android) sind für Programmierung grundsätzlich ungeeignet. Es wird zwingend ein Computer mit physischer Tastatur und Maus benötigt.

### Was ist besser: Eigene Hardware oder Cloud-Lösung?

**Zum Ausprobieren:** Cloud-Lösung (keine Anfangsinvestition)
**Langfristig:** Eigene Hardware (günstiger nach 3-4 Monaten)
**Hybrid:** Mit Cloud starten, später auf eigene Hardware wechseln

Siehe [Hardware-Entscheidung](/eltern/hardware-entscheidung) für detaillierten Vergleich.

### Wie teuer ist die Cloud-Lösung?

Etwa **7 EUR pro Monat** für einen Hetzner CX33 Server. Das sind ca. 84 EUR pro Jahr. Ich helfe beim Einrichten.

### Was ist der Raspberry Pi 500+?

Ein kompakter All-in-One Computer für ca. 200 EUR mit:
- Linux vorinstalliert
- 16GB RAM und 256GB NVMe Speicher
- Ausreichend für alle Kursinhalte
- Eingebaute Tastatur

**Wichtig:** Kaufe den **Pi 500+ (mit Plus!)**, nicht den normalen Pi 500. Der Plus hat schnellen NVMe-Speicher statt langsamer SD-Karte.

## Fragen zum Mentoring

### Wie lange dauert das Mentoring?

Das Mentoring ist **open-ended** - es gibt keine feste Laufzeit. Es läuft so lange, wie es für dein Kind sinnvoll ist. Manche Kinder sind jahrelang dabei, andere nur ein paar Monate. Beides ist völlig in Ordnung.

### Gibt es Hausaufgaben?

Nein. Dein Kind arbeitet an seinen eigenen Projekten, wenn es Lust und Zeit hat. Es gibt keine Vorgaben.

### Gibt es Noten oder Bewertungen?

Nein. Das Mentoring ist kein Schulunterricht. Es geht ums Lernen und Spaß an der Sache, nicht um Leistungsmessung.

### Kann mein Kind jederzeit einsteigen?

Ja! Kontaktiere mich einfach und wir finden einen Termin für das Onboarding.

### Was passiert, wenn mein Kind eine Pause braucht?

Kein Problem! Das Mentoring ist komplett flexibel. Kinder können wochenlange Pausen machen und dann einfach wieder einsteigen.

## Technische Fragen

### Was ist Git/GitHub?

**Git:** Ein System zur Versionskontrolle (wie "Änderungen verfolgen" in Word, aber viel mächtiger)
**GitHub:** Eine Plattform im Internet, wo Git-Repositories gespeichert werden und wo Teams zusammenarbeiten

Das sind die wichtigsten Tools in der modernen Softwareentwicklung. Praktisch alle Entwickler weltweit nutzen Git.

### Was ist VS Code?

**Visual Studio Code (VS Code):** Eine kostenlose, professionelle Entwicklungsumgebung von Microsoft. Wird von Millionen Entwicklern weltweit genutzt.

### Was ist Typst?

**Typst:** Eine moderne Alternative zu LaTeX für das Erstellen von PDF-Dokumenten mit Code. Einfacher als LaTeX, mächtiger als Word. Perfekt zum Einstieg in textbasierte Formate.

### Warum kein Word/Excel/PowerPoint?

Diese Tools basieren auf einem veralteten Arbeitsmodell:
- Binäre Dateiformate (nicht mit Git versionierbar)
- Manuelle Formatierung
- Keine Automatisierung
- Kollaboration ist umständlich

Moderne Entwicklung nutzt:
- Textbasierte Formate (Markdown, Typst, HTML)
- Code-basierte Dokumentenerstellung
- Git für Versionskontrolle und Kollaboration

Siehe auch: [Info für Mentor:innen](/mentoren/kein-office) für eine ausführliche Erklärung.

## Datenschutz-Fragen

### Welche Daten werden gespeichert?

- GitHub-Account des Kindes
- Code und Projekte in privaten Repositories
- Kommunikation in Issues/Discussions
- Bei dedizierter Hardware: Zugriffsdaten für Fernwartung
- Bei Cloud-Lösung: Zugriffsdaten zum Server

### Wer hat Zugriff auf die Projekte?

- Dein Kind
- Ich (als Mentor)
- Eventuell du als Elternteil (auf Wunsch)
- Niemand sonst (private Repositories)

### Ist GitHub sicher?

Ja. GitHub ist eine professionelle Plattform mit Millionen Nutzern weltweit. Alle Repositories sind standardmäßig privat und nur für autorisierte Personen zugänglich.

### Was ist mit dem Fernzugriff?

**Bei dedizierter Hardware:**
- Ich (Levin Keller) bekomme vollständigen Admin-Zugang auf dem dedizierten Gerät
- Dieses Gerät **muss ausschließlich** für den Kurs genutzt werden
- **Keine** privaten Daten auf diesem Gerät!
- **Keine** Daten von Geschwistern, Eltern oder anderen Familienmitgliedern
- Bei geteilten Computern: Cloud-Lösung ist Pflicht

**Bei Cloud-Lösung:**
- Ich habe Zugriff auf den Cloud-Server
- **KEIN Zugriff** auf euren persönlichen Computer
- Eure privaten Daten bleiben vollständig geschützt
- Ideal für Windows-Nutzer und geteilte Familien-Computer

## Kosten-Fragen

### Was kostet das Mentoring?

Das Mentoring ist **komplett kostenlos**. Es fallen keine Gebühren an.

### Welche Kosten entstehen?

**Option A - Dedizierte Hardware:**
- Hardware: ~200-300 EUR einmalig
- Danach: keine laufenden Kosten

**Option B - Cloud-Lösung:**
- Keine Anfangsinvestition
- ~7 EUR pro Monat für Cloud-Server (~84 EUR/Jahr)

### Gibt es versteckte Kosten?

Nein. Alle Software ist kostenlos und Open Source. GitHub ist kostenlos. Die einzigen Kosten sind Hardware (Option A) oder Server-Hosting (Option B).

## Kontakt

### Ich habe eine Frage, die hier nicht beantwortet wird

Kein Problem! Kontaktiere mich über:
- [GitHub Discussions](https://github.com/tinkerers-kids/website/discussions)
- Direkter Kontakt (wenn du mich persönlich kennst)

### Wie melde ich mein Kind an?

1. Lies diese Dokumentation
2. Entscheide dich für eine Hardware-Option
3. Kontaktiere mich für ein Onboarding-Gespräch
4. Wir vereinbaren einen Termin zum Einrichten
