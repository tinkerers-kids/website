---
sidebar_position: 3
---

# Hardware-Anforderungen

Diese Seite beschreibt die Hardware-Anforderungen, falls du dich für **Option A: Dedizierte Hardware** entschieden hast.

:::info Hinweis
Falls du die **Cloud-Lösung (Option B)** nutzt, kannst du diese Seite überspringen. Die Cloud-Lösung funktioniert auf jedem Computer mit Internetverbindung.
:::

## Betriebssystem - Linux ist Pflicht!

Für dieses Mentoring wird **zwingend ein Unix-basiertes Betriebssystem** benötigt:

- ✅ **Linux** (Ubuntu, Debian, Fedora, etc.) - **STARK EMPFOHLEN**
- ✅ **macOS** (alle aktuellen Versionen) - funktioniert gut
- ❌ **Windows** - **NICHT ZUGELASSEN** (auch nicht mit WSL)

:::tip Warum Linux?
- Professionelle Entwickler arbeiten hauptsächlich mit Linux/macOS
- Alle wichtigen Server laufen mit Linux
- Bessere Terminal-Integration und Tool-Unterstützung
- Windows (auch mit WSL) verursacht zu viele Probleme und bindet zu viel Support-Zeit
:::

:::warning Wenn ihr nur einen Windows-PC habt
Windows ist im Mentoring nicht zugelassen. Ihr habt folgende Optionen:
- **Cloud-Lösung nutzen** (empfohlen!) - siehe [Hardware-Entscheidung](/eltern/hardware-entscheidung)
- Einen günstigen Linux-Rechner besorgen (z.B. Raspberry Pi 500+)
- Einen alten Computer mit Linux neu aufsetzen
:::

## Empfohlene Hardware-Lösung

**[Raspberry Pi 500+](https://www.raspberrypi.com/products/raspberry-pi-500-plus/) (~200 EUR):**
- Komplett-System mit eingebautem 256GB NVMe-Speicher und 16GB RAM
- Kommt fertig mit Linux eingerichtet
- Vollständig ausreichend für alle Mentoringinhalte
- Kostengünstig und pädagogisch wertvoll
- Genau das gleiche System, das andere Mentoringteilnehmer verwenden

:::warning Nicht den normalen Pi 500 kaufen!
Der normale Raspberry Pi 500 (ohne "+") hat nur eine langsame SD-Karte. Der **Pi 500+** hat eingebauten NVMe-Speicher und ist deutlich schneller!
:::

## Eingabegeräte - WICHTIG!

**Zwingend erforderlich:**
- ✅ **Tastatur** (physisch, keine Bildschirmtastatur)
- ✅ **Maus** oder Trackpad

**NICHT geeignet:**
- ❌ **Tablets** (iPad, Android-Tablets) - **keine Mentoringteilnahme möglich**
- ❌ **Smartphones** - **keine Mentoringteilnahme möglich**
- ❌ **Chromebooks** (eingeschränkt, nicht empfohlen)

:::danger Warum keine Tablets?
Programmieren erfordert:
- Schnelles Tippen mit beiden Händen
- Präzise Maussteuerung
- Viele Tastenkombinationen (Shortcuts)
- Mehrere Fenster gleichzeitig im Blick
:::

## Mindestanforderungen

Falls ihr bereits einen Computer habt:
- Mindestens 4 GB RAM (besser 8 GB)
- Mindestens 20 GB freier Speicherplatz
- Stabile Internetverbindung
- **Physische Tastatur und Maus**

## Monitor

Für den Raspberry Pi 500+ wird ein Monitor benötigt:
- Mindestens 1920x1080 Auflösung (Full HD)
- HDMI-Anschluss
- Kosten: ~100-150 EUR

**Alternativen:**
- Vorhandener TV mit HDMI
- Alter Monitor wiederverwenden

## Komplettkosten-Übersicht

### Raspberry Pi 500+ Setup:
- Raspberry Pi 500+: ~200 EUR
- Monitor (falls nicht vorhanden): ~100 EUR
- Maus (falls nicht vorhanden): ~10 EUR
- **Gesamt: ~310 EUR einmalig**

### Alternativer Linux-Laptop:
- Gebrauchter Laptop mit Linux: ~200-400 EUR
- Meist alles inkludiert (Tastatur, Maus, Bildschirm)

## Technische Voraussetzungen

### Fernzugriff
Für technischen Support und Hilfestellung benötige ich:
- **Fernzugriff** auf das Gerät deines Kindes
- **Eigenen Administrator-Account** auf dem Gerät
- Dies ermöglicht schnelle Problemlösung ohne persönlichen Besuch

:::danger Sehr wichtig - Bitte unbedingt lesen!
Da ich (Levin Keller) **Fernzugriff und vollständigen Admin-Zugriff** auf das Gerät benötige, gelten folgende Regeln:

**Das Gerät muss ausschließlich für das Mentoring verwendet werden:**
- ✅ Nur Arbeitsunterlagen deines Kindes
- ❌ **Keine** persönlichen Daten von Eltern
- ❌ **Keine** Daten von Geschwistern
- ❌ **Keine** Fotos, Dokumente oder Accounts anderer Familienmitglieder

**Warum?**
- Ich brauche vollen Zugriff, um effektiv helfen zu können (zumindest bei Einsteigern)
- Datenschutz: Ich sollte keine privaten Daten Dritter sehen können
- Sicherheit: Ein dediziertes Gerät verhindert versehentliche Konflikte

**Falls ihr kein dediziertes Gerät bereitstellen könnt:**
→ Nutzt die **Cloud-Lösung** - dort greife ich nur auf den Cloud-Server zu, nicht auf euren Computer!
:::

### Software-Installation

Falls noch nicht vorhanden, muss vor Mentoringbeginn installiert werden:
- **VS Code** (Entwicklungsumgebung)
- **Git** (Versionskontrolle)
- **Typst** (Dokumentenerstellung)

Unterstützung bei der Installation bekommst du beim Onboarding.

## Vergleich: Eigene Hardware vs. Cloud

| Aspekt | Eigene Hardware | Cloud-Lösung |
|--------|-----------------|--------------|
| **Setup-Aufwand** | Mittel (Hardware kaufen, einrichten) | Gering (ich richte Server ein) |
| **Mein Zugriff** | Voll auf dediziertes Gerät | Nur auf Cloud-Server |
| **Private Daten** | Gerät NUR für Mentoring nutzen | Voll geschützt |
| **Kosten** | ~200-300 EUR einmalig | ~7 EUR/Monat |
| **Performance** | Lokal, keine Latenz | Leichte Latenz möglich |

Siehe auch: [Hardware-Entscheidung](/eltern/hardware-entscheidung) für detaillierten Vergleich.

## Nächste Schritte

1. ✅ Hardware besorgen
2. ✅ Bei mir melden für Setup-Termin
3. ✅ [Mentoringformat](/eltern/kursformat) lesen
4. ✅ Onboarding-Gespräch vereinbaren
