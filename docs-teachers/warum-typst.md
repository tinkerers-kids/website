---
sidebar_position: 4
---

# Warum Typst? - Die Content-Perspektive

Typst ist mehr als nur ein "Word-Ersatz" - es ist das **perfekte erste Projekt-Format** für den Mentoring, weil es die reproduzierbare Problemkommunikation optimal unterstützt.

## 1. Text-basiertes Format ermöglicht Reproduzierbarkeit (DER HAUPTGRUND!)

**Das Problem mit Word:**
- Word-Dateien (.docx) sind binär
- Git kann nicht zeigen, WAS genau geändert wurde
- "Zeile 42 wurde geändert" - unmöglich bei binären Dateien
- Reproduzierbarkeit: Nicht gegeben

**Die Lösung mit Typst:**
- Typst-Dateien (.typ) sind **reiner Text**
- Git kann exakt zeigen: "Zeile 42: `#text("alt")` → `#text("neu")`"
- Jede Änderung ist nachvollziehbar
- **Reproduzierbarkeit: Perfekt gegeben**

**Praktisches Beispiel:**

Lisa hat Problem mit Typst-Datei:
```bash
# Helfer:
git clone https://github.com/lisa/projekt
git checkout abc123
cat dokument.typ | grep -n "rot"
# Zeile 42: #text(red)("Der T-Rex")
# Helfer sieht EXAKT was Lisa geschrieben hat
# Helfer kann exakt reproduzieren
```

**Das geht NUR mit textbasierten Formaten!**

## 2. Markup-Sprachen verstehen

Kinder lernen das fundamentale Konzept von **Markup-Sprachen**:
- Inhalt und Darstellung trennen
- Code schreiben, um Output zu generieren
- Deklarative Programmierung

**Übertragbar auf:**
- HTML/CSS (Web-Entwicklung)
- Markdown (überall verwendet)
- LaTeX (Wissenschaft)
- XML/JSON (Datenformate)

## 3. Niedrige Einstiegshürde bei echtem Code

Anders als bei React oder anderen Programmiersprachen:
- Typst-Syntax ist relativ einfach
- Sofortiges visuelles Feedback (PDF)
- Aber: Es ist ECHTER Code, keine vereinfachte Block-Programmierung
- Perfekt als erstes Projekt

## 4. Programmierbare Dokumente

Kinder entdecken, dass man Dokumente **programmieren** kann:
```typst
#let title = "Mein Projekt"
#let author = "Max Mustermann"

#align(center)[
  #text(24pt)[*#title*]
  #v(1em)
  von #author
]
```

Dies öffnet die Tür zu:
- Variablen und Funktionen
- Loops und Conditionals
- Automatisierung

## 5. Ästhetik und Professionalität

Typst generiert **schöne PDFs**:
- Professionelles Layout
- Mathematische Formeln
- Diagramme und Grafiken
- Kinder sind stolz auf ihre Ergebnisse

## 6. Markup-Sprachen als Brücke

Typst ist eine Brücke zwischen:
- **Anfang:** Einfacher als Programmiersprachen (JavaScript, Python)
- **Ende:** Vorbereitung auf HTML, Markdown, etc.
- **Überall:** Konzept von "Code → Output" verstehen
