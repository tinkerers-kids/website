---
sidebar_position: 10
---

# Entwicklungsinfrastruktur

Diese Seite dokumentiert das technische Setup der Entwicklungsumgebungen für die Mentees. Das Setup ist darauf ausgelegt, Kindern eine sichere, abgeschirmte Arbeitsumgebung zu bieten.

## Architekturübersicht

```mermaid
flowchart TB
    subgraph Internet["Internet"]
        hetzner["Hetzner VPS<br/>(Cloud Dev Server)"]
        adguard_vps["AdGuard VPS<br/>100.64.0.7"]
    end

    subgraph Tailscale["Tailscale Mesh Network"]
        adguard["AdGuard Home<br/>(DNS + Filtering)"]
        mentor["Mentor-Gerät<br/>(VNC + SSH Zugang)"]

        subgraph Mentees["Mentee-Geräte"]
            minipc["Mini-PCs"]
            raspi["Raspberry Pis"]
            cloud["Cloud-Server"]
        end
    end

    subgraph Matrix["Matrix Federation"]
        matrix_server["kids.tinkerers.de<br/>(Federation: disabled)"]
    end

    hetzner --> cloud
    adguard_vps --> adguard

    Mentees -->|"DNS: 100.64.0.7"| adguard
    mentor -->|"VNC/SSH"| Mentees
    Mentees <-->|"Element"| matrix_server
    mentor <-->|"Element"| matrix_server

    style adguard fill:#90EE90
    style matrix_server fill:#87CEEB
    style mentor fill:#FFD700
```

## Komponenten im Detail

### Tailscale Mesh Network

Alle Geräte sind Teil eines privaten Tailscale-Netzwerks. Das ermöglicht:

- **Privates Netzwerk ohne Port-Forwarding** – Geräte sind nicht öffentlich erreichbar
- **Ende-zu-Ende-Verschlüsselung** – WireGuard-basiert
- **NAT-Traversal** – Funktioniert auch hinter restriktiven Firewalls
- **ACLs** – Zugriffsregeln definieren, wer mit wem kommunizieren darf

#### ACL-Konfiguration

Die Kinder brauchen in der Regel keinen Zugriff untereinander. Eine typische ACL-Struktur:

```json
{
  "acls": [
    {
      "action": "accept",
      "src": ["tag:mentor"],
      "dst": ["tag:mentee:*"]
    },
    {
      "action": "accept",
      "src": ["tag:mentee"],
      "dst": ["tag:adguard:53"]
    }
  ]
}
```

:::note Flexibilität
Falls für bestimmte Projekte Peer-to-Peer-Zugriff zwischen Mentees sinnvoll ist (z.B. gemeinsame Entwicklung), lässt sich das über die ACLs temporär freischalten.
:::

### AdGuard Home

AdGuard Home läuft auf einem dedizierten VPS im Tailscale-Netzwerk und dient als DNS-Server für alle Mentee-Geräte.

**Konfiguration auf den Mentee-Geräten:**
```bash
# /etc/resolv.conf oder via systemd-resolved
nameserver 100.64.0.7
```

**Blockierte Kategorien:**
- Malware und Phishing
- Tracking und Werbung
- Nachrichtenseiten (verstörende Inhalte über Gewalt/Krieg)
- Nicht kindgerechte Inhalte

**SSL-Zertifikate:** AdGuard läuft mit gültigen SSL-Zertifikaten für DNS-over-HTTPS/TLS.

```mermaid
sequenceDiagram
    participant M as Mentee-Gerät
    participant A as AdGuard (100.64.0.7)
    participant I as Internet

    M->>A: DNS-Anfrage: beispiel.de
    A->>A: Prüfe Blocklisten
    alt Erlaubt
        A->>I: DNS-Anfrage weiterleiten
        I-->>A: IP-Adresse
        A-->>M: IP-Adresse
    else Blockiert
        A-->>M: Blockiert (0.0.0.0)
    end
```

### VNC + SSH Zugang

Auf jedem Mentee-Gerät läuft ein VNC-Server, der nur über die Tailscale-IP erreichbar ist:

- **Zweck:** Remote-Support und Troubleshooting
- **Zugang:** Nur über Tailscale, nicht aus dem offenen Internet
- **Zusätzlich:** Root-Account und SSH-Zugang auf allen Geräten

```bash
# Beispiel: Verbindung zu einem Mentee-Gerät
ssh root@100.64.0.X
# oder
vncviewer 100.64.0.X:5900
```

### Matrix-Server (kids.tinkerers.de)

Ein dedizierter Matrix-Server ohne Federation:

```mermaid
flowchart LR
    subgraph kids.tinkerers.de
        homeserver["Synapse Homeserver"]

        subgraph Räume["Chat-Räume"]
            general["Allgemein"]
            projekt1["Projekt-Räume"]
            direkt["Direktnachrichten"]
        end
    end

    subgraph Extern["Externe Matrix-Server"]
        matrix_org["matrix.org"]
        andere["andere Server"]
    end

    homeserver --> Räume
    homeserver -.->|"Federation: OFF"| Extern

    style matrix_org fill:#ffcccc
    style andere fill:#ffcccc
```

**Warum keine Federation:**
- Kinder können nur mit bekannten Personen kommunizieren
- Keine Kontaktaufnahme durch Fremde möglich
- Kein "Abdriften" in öffentliche Räume anderer Server

**Account-Erstellung:**
- Registrierungstoken-basiert
- Accounts werden individuell erstellt
- Kein Self-Service (bewusste Entscheidung)

**Features:**
- Gruppenchats
- Direktnachrichten
- Videotelefonie
- Bildschirmfreigabe (Screen Sharing)

## Hardware-Varianten

### Mini-PCs

Physische Geräte, die bei den Mentees zu Hause stehen:
- Manuelle Ersteinrichtung
- Tailscale-Client installiert
- VNC-Server konfiguriert

### Raspberry Pi

Kostengünstige Alternative:
- Gleiches Setup wie Mini-PCs
- Etwas weniger Leistung, aber für die meisten Projekte ausreichend

### Cloud-Server (Hetzner VPS)

Für Mentees ohne eigene Hardware oder mit unzuverlässiger Internetverbindung:

```mermaid
flowchart LR
    mentee["Mentee<br/>(beliebiges Gerät)"]
    vscode["VS Code<br/>Remote SSH"]
    vps["Hetzner VPS<br/>(im Tailscale-Netz)"]

    mentee --> vscode
    vscode -->|"SSH über Tailscale"| vps
```

**Cloud-Init-Automatisierung:**

Die Cloud-Server werden mit Cloud-Init-Skripten provisioniert:

```yaml
#cloud-config
packages:
  - git
  - vim
  - build-essential

runcmd:
  - # Tailscale-Setup (derzeit manuell)
  - # VNC-Server-Setup
```

:::tip Automatisierung
Das Tailscale-Setup erfolgt derzeit manuell. Eine Automatisierung über Cloud-Init mit Auth-Keys ist geplant:
```bash
curl -fsSL https://tailscale.com/install.sh | sh
tailscale up --authkey=tskey-auth-xxx
```
:::

## Sicherheitskonzept

```mermaid
flowchart TB
    subgraph Schichten["Sicherheitsschichten"]
        l1["1. Netzwerkebene<br/>Tailscale (privates Netz, ACLs)"]
        l2["2. DNS-Ebene<br/>AdGuard (Content Filtering)"]
        l3["3. Kommunikationsebene<br/>Matrix ohne Federation"]
        l4["4. Zugangsebene<br/>VNC/SSH nur für Mentor"]
    end

    l1 --> l2 --> l3 --> l4

    style l1 fill:#90EE90
    style l2 fill:#90EE90
    style l3 fill:#90EE90
    style l4 fill:#90EE90
```

| Bedrohung | Schutzmaßnahme |
|-----------|----------------|
| Direkter Angriff aus dem Internet | Tailscale (keine öffentliche IP) |
| Schädliche Webseiten | AdGuard Blocklisten |
| Ungeeignete Inhalte | AdGuard Content Filter |
| Kontakt mit Fremden | Matrix ohne Federation |
| Technische Probleme | VNC/SSH Remote-Zugang |

## Updates und Wartung

**Automatische Updates:**
- `unattended-upgrades` auf allen Linux-Systemen
- Sicherheitsupdates werden automatisch installiert

**Manuelle Eingriffe:**
- Bei Bedarf über SSH/VNC
- Größere Upgrades nach Absprache

## Einrichtung neuer Geräte

### Checkliste

1. **Betriebssystem installieren** (Linux)
2. **Tailscale installieren und einrichten**
   ```bash
   curl -fsSL https://tailscale.com/install.sh | sh
   tailscale up
   ```
3. **DNS auf AdGuard setzen** (100.64.0.7)
4. **VNC-Server installieren und konfigurieren**
5. **SSH-Zugang einrichten** (Root-Account)
6. **Element installieren** und Account auf kids.tinkerers.de erstellen
7. **Entwicklungstools installieren** (VS Code, Git, etc.)

### Cloud-Server (Hetzner)

1. **VPS erstellen** mit Cloud-Init-Skript
2. **Tailscale manuell einrichten** (Auth-Key)
3. **Rest wie oben**

## Weiterführende Ressourcen

- [Tailscale Documentation](https://tailscale.com/kb/)
- [AdGuard Home Wiki](https://github.com/AdguardTeam/AdGuardHome/wiki)
- [Matrix Synapse Admin Guide](https://element-hq.github.io/synapse/latest/)
