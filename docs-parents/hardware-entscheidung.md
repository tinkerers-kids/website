---
sidebar_position: 2
---

# Hardware-Entscheidung

Die wichtigste Frage zuerst: **Welche Hardware soll dein Kind für den Mentoring nutzen?**

## Die Ausgangssituation

Es ist völlig verständlich, dass du nicht sofort mehrere hundert Euro für Hardware ausgeben möchtest, wenn du noch nicht weißt, ob dein Kind langfristig am Mentoring teilnehmen wird. Vielleicht möchte dein Kind den Mentoring erst einmal ausprobieren, bevor ihr in dedizierte Hardware investiert.

## Zwei Optionen

Du hast grundsätzlich zwei Möglichkeiten:

### Option A: Dedizierte Hardware für dein Kind kaufen

**Was bedeutet das?**
- Du kaufst einen Computer speziell für dein Kind (z.B. Raspberry Pi 500+)
- Dieser Computer wird **nur von deinem Kind** genutzt
- **Nur für Mentoring-Arbeit** (nicht für Spiele, Social Media, etc.)
- Ich bekomme **vollständigen Administrator-Zugriff** auf dieses Gerät
- Das Gerät läuft mit **Linux** (keine privaten Daten vorhanden)

**Vorteile:**
- ✅ Dein Kind hat einen eigenen Computer
- ✅ Keine monatlichen Kosten
- ✅ Schnelle, lokale Arbeit (keine Internet-Latenz)
- ✅ Pädagogisch wertvoll (eigenes Gerät, Verantwortung)
- ✅ Keine Abhängigkeit von Internet-Verbindung während der Arbeit

**Nachteile:**
- ❌ Höhere Anfangsinvestition (~200-300 EUR einmalig)
- ❌ Zusätzliches Gerät im Haushalt

**Empfohlene Hardware:**
- **[Raspberry Pi 500+](https://www.raspberrypi.com/products/raspberry-pi-500-plus/)** (~200 EUR)
  - Komplett-System mit 256GB NVMe und 16GB RAM
  - Linux vorinstalliert
  - Vollständig ausreichend für alle Mentoringinhalte
- **Monitor** (falls nicht vorhanden, ~100 EUR)
- **Maus** (falls nicht vorhanden, ~10 EUR)

:::tip Wann diese Option wählen?
- Du bist bereit, initial zu investieren
- Dein Kind soll einen eigenen Computer haben
- Ihr habt Platz für ein zusätzliches Gerät
- Du möchtest keine monatlichen Kosten
:::

### Option B: Cloud-Lösung nutzen

**Was bedeutet das?**
- Dein Kind nutzt einen **vorhandenen Computer** (Windows, Mac, Linux)
- Auf diesem Computer werden **keine Entwicklungstools installiert**
- Stattdessen: Verbindung zu einem **Cloud-Server** (Remote Desktop)
- Der Cloud-Server ist ein virtueller Linux-Desktop bei Hetzner
- Kosten: **~7 EUR pro Monat**
- Ich helfe beim Einrichten des Servers

:::info Diese Option ist Pflicht, wenn:
- Ihr nur einen **Windows-Computer** habt (Windows ist im Mentoring nicht zugelassen)
- Der Computer **von mehreren Personen genutzt wird** (Geschwister, Eltern)
- Ihr **kein dediziertes Gerät nur für euer Kind** bereitstellen könnt
:::

**Vorteile:**
- ✅ Keine Anfangsinvestition für Hardware
- ✅ Nutzt vorhandenen Computer
- ✅ Eure privaten Daten bleiben geschützt (kein Zugriff nötig)
- ✅ Perfekt zum Ausprobieren
- ✅ Funktioniert auf jedem Betriebssystem (Windows, Mac, Linux)
- ✅ Eltern können den Computer weiterhin normal nutzen

**Nachteile:**
- ❌ Monatliche Kosten (~7 EUR)
- ❌ Benötigt stabile Internetverbindung während der Arbeit
- ❌ Leichte Latenz bei Remote Desktop
- ❌ Laufende Kosten (84 EUR/Jahr)

**Wie funktioniert das technisch?**
1. Ich richte einen Hetzner Cloud-Server ein (CX33)
2. Auf dem Server läuft ein vollständiger Linux-Desktop mit allen Tools
3. Dein Kind verbindet sich über **Remote Desktop Protocol (RDP)**
4. Dein Kind sieht einen vollständigen Desktop, arbeitet dort
5. Für Support greife **nur ich** über VNC auf denselben Desktop zu – dein Kind nutzt weiterhin nur RDP
6. Die Server-Konfiguration ist automatisiert ([Details hier](https://github.com/tinkerers-kids/cloud-config))

:::tip Wann diese Option wählen?
- Du möchtest den Mentoring erst ausprobieren
- Keine Anfangsinvestition gewünscht
- Ihr habt bereits einen Computer, den dein Kind nutzen kann
- Stabile Internetverbindung vorhanden
- Du möchtest keine zusätzliche Hardware im Haushalt
:::

## Vergleich

| Aspekt | Dedizierte Hardware | Cloud-Lösung |
|--------|---------------------|--------------|
| **Anfangskosten** | ~200-300 EUR einmalig | 0 EUR |
| **Laufende Kosten** | 0 EUR | ~7 EUR/Monat (~84 EUR/Jahr) |
| **Kosten nach 1 Jahr** | ~200-300 EUR | ~84 EUR |
| **Kosten nach 2 Jahren** | ~200-300 EUR | ~168 EUR |
| **Internetabhängigkeit** | Nur für Updates/Support | Immer benötigt |
| **Performance** | Lokal, keine Latenz | Leichte Latenz möglich |
| **Mein Zugriff** | Voll auf dediziertes Gerät | Nur auf Cloud-Server |
| **Eure Privatsphäre** | Dediziertes Gerät = keine privaten Daten | Voll geschützt |
| **Eigenes Gerät fürs Kind** | Ja | Nein |
| **Flexibilität** | Gerät gehört euch | Server kann jederzeit gekündigt werden |

## Meine Empfehlung

**Zum Ausprobieren:** Starte mit der **Cloud-Lösung**. Nach einer Weile wisst ihr, ob das Mentoring passt. Dann könnt ihr immer noch auf dedizierte Hardware wechseln.

**Langfristig:** Wenn dein Kind dabei bleibt, spricht einiges für **dedizierte Hardware**:
- **Keine Latenz:** Lokale Arbeit fühlt sich direkter und flüssiger an
- **Deine Daten bleiben bei dir:** Keine Mentoring-Daten auf fremden Servern
- **Euer Rechner bleibt frei:** Irgendwann nervt es, wenn das Kind ständig am Eltern-Computer sitzt

Die Cloud-Lösung bleibt auch langfristig günstig (~84 EUR/Jahr) – es geht also nicht primär ums Geld, sondern um Komfort und Unabhängigkeit.

**Hybrid:** Ihr könnt auch mit Cloud starten und nach einigen Monaten auf eigene Hardware umsteigen.

## Technische Anforderungen bei Cloud-Lösung

### Auf eurem Computer wird benötigt:
- **Windows:** Eingebauter RDP-Client (Remote Desktop Connection)
- **macOS:** Microsoft Remote Desktop aus dem App Store (kostenlos)
- **Linux:** Remmina oder xfreerdp (meist vorinstalliert)

### Keine Installation nötig:
- ❌ Keine VS Code Installation
- ❌ Keine Git Installation
- ❌ Keine Entwicklungstools
- ❌ Keine Linux-Subsysteme (kein WSL)

Alles läuft auf dem Cloud-Server, euer Computer ist nur ein "Fenster" zum Server.

## Datenschutz und Sicherheit

:::danger Wichtig: Dediziertes Gerät oder Cloud-Lösung!
Ich (Levin Keller) benötige **Fernzugriff und vollständigen Admin-Zugriff** auf das Gerät deines Kindes - zumindest bei Einsteigern. Daher ist es **zwingend erforderlich**, dass:

**Entweder:**
- Ein **dediziertes Gerät nur für dein Kind** verwendet wird (Option A)
- Auf diesem Gerät **keine persönlichen Daten anderer Personen** gespeichert sind

**Oder:**
- Die **Cloud-Lösung** genutzt wird (Option B)
- Dann habe ich nur Zugriff auf den Cloud-Server, nicht auf euren Computer
:::

### Bei dedizierter Hardware:
- Ich habe vollen Zugriff auf das Gerät
- Das Gerät **muss ausschließlich** für den Mentoring genutzt werden
- **Keine** privaten Daten auf diesem Gerät speichern
- **Keine** Daten von Geschwistern, Eltern oder anderen Familienmitgliedern
- Bei geteilten Familien-Computern: **Cloud-Lösung ist Pflicht**

### Bei Cloud-Lösung:
- Ich habe **keinen Zugriff** auf euren persönlichen Computer
- Eure privaten Daten bleiben vollständig geschützt
- Ich habe nur Zugriff auf den Cloud-Server
- Der Cloud-Server enthält nur Mentoring-Materialien
- **Perfekt für geteilte Computer oder Windows-Nutzer**

## Nächste Schritte

1. **Entscheide dich** für eine Option
2. **Option A:** Lies weiter bei [Hardware-Anforderungen](/eltern/hardware-anforderungen)
3. **Option B:** Kontaktiere mich für das Cloud-Server Setup
4. **Bereite** das [Onboarding-Gespräch](/eltern/kursformat#onboarding) vor

## Fragen?

Wenn du unsicher bist, welche Option für euch die richtige ist, sprich mich einfach an. Wir können die Vor- und Nachteile für eure spezifische Situation besprechen.
