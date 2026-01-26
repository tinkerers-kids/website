---
sidebar_position: 6
---

# Case Study: Word vs. Typst bei Kollaboration

Stell dir vor: **Zwei Kinder arbeiten zusammen an einem Dokument über Dinosaurier.**

## Szenario 1: Mit Microsoft Word

**Tag 1 - Anna startet:**
- Anna erstellt `dinosaurier.docx`
- Schreibt Abschnitt über T-Rex
- Schickt per Email an Ben

**Tag 2 - Ben arbeitet:**
- Ben öffnet die Datei
- Fügt Abschnitt über Triceratops hinzu
- Ändert ein bisschen am T-Rex Text
- Speichert als `dinosaurier_ben.docx`
- Schickt per Email zurück an Anna

**Tag 3 - Anna will weiterarbeiten:**
- Anna hat inzwischen auch weitergearbeitet
- Ihre Version: `dinosaurier_anna_v2.docx`
- Jetzt hat sie ZWEI verschiedene Dateien
- **Problem: Wie kombiniert sie Bens Änderungen mit ihren?**

**Die schreckliche Realität:**
```
dinosaurier.docx
dinosaurier_ben.docx
dinosaurier_anna_v2.docx
dinosaurier_final.docx
dinosaurier_final_v2.docx
dinosaurier_wirklich_final.docx
dinosaurier_jetzt_aber_wirklich_final.docx
```

**Konflikt-Resolution in Word:**
1. Anna öffnet beide Dateien nebeneinander
2. Sie scrollt hin und her
3. Sie versucht zu sehen, was Ben geändert hat
4. Sie kopiert manuell Bens Änderungen in ihre Datei
5. Sie übersieht dabei, dass Ben auch ihren T-Rex Text verbessert hat
6. **Bens Verbesserung geht verloren**
7. Frustration!

**Word "Track Changes" Feature:**
- Funktioniert nur, wenn EINER arbeitet und der andere reviewt
- Bei gleichzeitiger Arbeit: Chaos
- Zeigt zu viele irrelevante Änderungen (Formatierung, etc.)
- Konflikte müssen manuell resolved werden
- Keine automatische Merge-Möglichkeit

## Szenario 2: Mit Typst + Git

**Tag 1 - Anna startet:**
```bash
# Anna erstellt Repository
git init dinosaurier-projekt
cd dinosaurier-projekt
# Anna schreibt in dinosaurier.typ
git add dinosaurier.typ
git commit -m "Add T-Rex section"
git push
```

**Tag 2 - Ben arbeitet:**
```bash
# Ben klont das Repository
git clone [url] dinosaurier-projekt
cd dinosaurier-projekt
# Ben arbeitet an der gleichen Datei
git add dinosaurier.typ
git commit -m "Add Triceratops section and improve T-Rex text"
git push
```

**Tag 3 - Anna will weiterarbeiten:**
```bash
# Anna holt Bens Änderungen
git pull
# Git zeigt exakt, was Ben geändert hat:
# + Zeile 42: Neue Info über Triceratops
# ~ Zeile 15: Verbesserung im T-Rex Text
```

**Wenn beide gleichzeitig gearbeitet haben:**

Anna's Version (Zeile 20-25):
```typst
= T-Rex
Der T-Rex war ein gefährlicher Jäger.
Er lebte vor 65 Millionen Jahren.
Seine Zähne waren sehr scharf.
```

Ben's Version (Zeile 20-25):
```typst
= T-Rex
Der T-Rex war ein gefährlicher Jäger.
Er lebte vor 65 Millionen Jahren.
Er konnte bis zu 40 km/h schnell laufen.
```

**Git macht automatisch:**
```bash
git pull
# Auto-merging dinosaurier.typ
# CONFLICT (content): Merge conflict in dinosaurier.typ
```

**Git zeigt exakt den Konflikt:**
```typst
= T-Rex
Der T-Rex war ein gefährlicher Jäger.
Er lebte vor 65 Millionen Jahren.
<<<<<<< HEAD (Anna's Version)
Seine Zähne waren sehr scharf.
=======
Er konnte bis zu 40 km/h schnell laufen.
>>>>>>> origin/main (Ben's Version)
```

**Anna löst den Konflikt:**
```typst
= T-Rex
Der T-Rex war ein gefährlicher Jäger.
Er lebte vor 65 Millionen Jahren.
Er konnte bis zu 40 km/h schnell laufen.
Seine Zähne waren sehr scharf.
```

**Fertig!**
```bash
git add dinosaurier.typ
git commit -m "Merge: Combine speed info and teeth info"
git push
```

## Vergleich: Word vs. Typst+Git

| Aspekt | Word | Typst + Git |
|--------|------|-------------|
| **Versionskontrolle** | Manuell (Dateinamen) | Automatisch (Git) |
| **Änderungen sehen** | Datei öffnen, vergleichen | `git diff` - exakt Zeile für Zeile |
| **Gleichzeitig arbeiten** | Chaos, Datei-Duplikate | Funktioniert, Git mergt automatisch |
| **Konflikte** | Manuell suchen und fixen | Git zeigt exakt wo Konflikt ist |
| **Konflikt-Resolution** | Stundenlang Dateien vergleichen | Minuten: Konflikt markiert, resolved, fertig |
| **Historie** | Alte Dateien aufheben | Komplette Historie in Git |
| **Zurückgehen** | "Undo" oder alte Datei suchen | `git checkout` zu jeder beliebigen Version |
| **Wer hat was geändert** | Keine Ahnung oder Track Changes Chaos | `git blame` zeigt exakt wer was wann |
| **Zusammenführen** | Manuell copy-paste | `git merge` automatisch |
| **Code Review** | Unmöglich | Pull Requests, Comments, Approve |

## Warum das für Kinder essentiell ist

**Moderne Arbeit ist kollaborativ:**
- Software wird IMMER im Team entwickelt
- Open Source: Hunderte Menschen arbeiten am gleichen Projekt
- Kinder müssen lernen, wie echte Kollaboration funktioniert

**Word ist ein Relikt aus der Einzelarbeiter-Ära:**
- "Ein Mensch, ein Computer, ein Dokument"
- Internet-Kollaboration wurde nachträglich aufgepfropft
- Microsoft 365 ist Krücke, kein echtes Kollaborations-Tool

**Git ist für Kollaboration gebaut:**
- Von Anfang an für Teams designed
- Linux Kernel: 10.000+ Entwickler, ein Projekt
- Funktioniert einwandfrei

**Wenn Kinder Word lernen:**
- Sie lernen ein veraltetes Modell
- Sie müssen später umlernen
- Sie verstehen echte Internet-Kollaboration nicht

**Wenn Kinder Typst + Git lernen:**
- Sie lernen von Anfang an richtige Kollaboration
- Sie können sofort an Open Source Projekten teilnehmen
- Sie verstehen, wie die moderne Arbeitswelt funktioniert

## Praktisches Beispiel: Gemeinsames Kochbuch-Projekt

**Aufgabe:** 5 Kinder erstellen zusammen ein Kochbuch mit ihren Lieblingsrezepten.

**Mit Word:**
- Chaos mit `kochbuch_final_v23.docx`
- Ein Kind überschreibt versehentlich Rezepte von anderen
- Keine Möglichkeit herauszufinden, wer was geschrieben hat
- Formatierung wird bei jedem Merge zerstört
- Frustrierend und zeitaufwändig

**Mit Typst + Git:**
- Jedes Kind arbeitet in seinem Branch
- Pull Requests für neue Rezepte
- Andere Kinder können Rezepte reviewen und kommentieren
- Automatisches Merging in Hauptdokument
- Historie zeigt, wer welches Rezept beigetragen hat
- Bei Konflikten (z.B. zwei Kinder haben "Spaghetti" Rezept): Git zeigt Konflikt, Kinder entscheiden gemeinsam

**Das lernen Kinder dabei:**
- Asynchrone Zusammenarbeit
- Code Review Prozess
- Konflikt-Resolution
- Verantwortung für eigene Beiträge
- Wie echte Teams arbeiten

## Alternativen zu Microsoft Office im Mentoring

### Statt Word → Typst / Markdown

**Typst:**
- Schöne Dokumente mit Code
- PDF-Export
- Versionskontrollierbar
- Programmierbar

**Markdown:**
- Einfach zu lernen
- Überall verwendet (GitHub, Blogs, Dokumentation)
- Leichtgewichtig
- Fokus auf Inhalt

### Statt Excel → CSV / JSON / YAML

**CSV:**
- Textbasiert
- In jedem Tool öffenbar
- Mit Git versionierbar
- Programmatisch verarbeitbar

**JSON/YAML:**
- Strukturierte Daten
- Maschinenlesbar
- In jeder Programmiersprache nutzbar
- APIs verwenden JSON

### Statt PowerPoint → reveal.js / Markdown

**reveal.js:**
- Präsentationen mit HTML/JavaScript
- Versionskontrollierbar
- Schöne Animationen
- Code-Beispiele direkt einbettbar

**Markdown-basierte Lösungen:**
- Marp
- Slidev
- Pitch
