---
sidebar_position: 2
---

# Der entscheidende Punkt: Reproduzierbare Problemkommunikation

**Dies ist DER zentrale pädagogische Punkt des gesamten Mentorings.**

## Das Problem, das gelöst werden muss

Stell dir vor: Ein Kind (nennen wir es Lisa) sitzt vor ihrem Computer und versucht, in Typst die Farbe eines Textes zu ändern. Sie probiert verschiedene Dinge aus, aber nichts funktioniert. Sie weiß nicht, wie sie weiterkommen soll.

**Die entscheidende Frage:** Wie kann Lisa jetzt Hilfe bekommen?

## Die traditionelle (schlechte) Lösung

**Typisches Szenario in klassischen Mentoring-Programmen:**

Lisa fragt: "Es funktioniert nicht!"

**Das Problem dabei:**
- Was genau funktioniert nicht?
- Was hat Lisa versucht?
- Wie sieht ihr Code aus?
- Welche Fehlermeldung erscheint?

Der Helfer (Mentor:in, Eltern, Freund) kann das Problem **nicht reproduzieren**, weil er nicht weiß, was Lisa genau gemacht hat.

**Resultat:**
- Vage Vermutungen: "Hast du mal versucht...?"
- Hin und her Kommunikation: "Zeig mal... nein, das andere... wo war das nochmal?"
- Frustration auf beiden Seiten
- Ineffektive Hilfe

## Die moderne (richtige) Lösung: Git + GitHub Issues

**Was Lisa lernen muss:**

Lisa muss ihr Problem so kommunizieren, dass andere es **bei sich reproduzieren** können.

**Der Workflow:**

**1. Lisa hat ein Problem:**
```typst
// In ihrer Datei dinosaurier.typ
#text("Der T-Rex war gefährlich")
// Sie will den Text rot machen, weiß aber nicht wie
```

**2. Lisa erstellt ein GitHub Issue:**

Titel: "Wie kann ich Text rot färben?"

Beschreibung:
```markdown
Ich versuche, Text rot zu färben, aber ich weiß nicht wie.

Mein Code:
`#text("Der T-Rex war gefährlich")`

Ich habe versucht:
`#text(red)("Der T-Rex war gefährlich")`
Aber das gibt einen Fehler.

Repository: https://github.com/lisa/dinosaurier
Datei: `dinosaurier.typ`, Zeile 12
Commit: abc123
```

**3. Der Helfer (z.B. Mentor:in) kann das Problem EXAKT reproduzieren:**

```bash
# Helfer auf seinem Computer:
git clone https://github.com/lisa/dinosaurier
cd dinosaurier
git checkout abc123
# Helfer öffnet dinosaurier.typ, Zeile 12
# Helfer sieht EXAKT das gleiche wie Lisa
# Helfer kann das Problem nachvollziehen
```

**4. Der Helfer erstellt eine Lösung:**

```typst
// Richtig ist:
#text(fill: red)[Der T-Rex war gefährlich]
```

**5. Der Helfer übermittelt die Lösung:**

- Entweder als Kommentar im Issue
- Oder als Pull Request mit der fertigen Lösung
- Lisa kann die Änderung direkt übernehmen

## Warum das fundamental anders ist

| Aspekt | Traditionell | Mit Git + GitHub |
|--------|-------------|------------------|
| **Problem beschreiben** | Vage: "Es geht nicht" | Präzise: Link zu Datei, Zeile, Commit |
| **Problem reproduzieren** | Unmöglich ohne Zugriff auf Lisas Computer | Jeder kann `git clone` machen |
| **Helfer sieht** | Nichts oder Screenshots | Exakt den gleichen Code |
| **Lösung übertragen** | Lisa muss abtippen oder Screenshot nachbauen | `git pull` oder Copy-Paste |
| **Lerneffekt** | Gering - Lisa lernt nicht, Probleme zu kommunizieren | Hoch - Lisa lernt strukturierte Problemkommunikation |

## Das ist die Kernkompetenz

**Was Kinder in diesem Mentoring WIRKLICH lernen:**

Nicht nur Programmieren, sondern:

1. **Probleme strukturiert beschreiben**
   - Was ist das Problem?
   - Wo tritt es auf?
   - Was habe ich versucht?
   - Was war das Ergebnis?

2. **Reproduzierbare Bedingungen schaffen**
   - Code in Git Repository
   - Genaue Datei und Zeile angeben
   - Commit-Hash mitteilen
   - Andere können exakt nachvollziehen

3. **Asynchrone Kommunikation beherrschen**
   - GitHub Issues als strukturierte Plattform
   - Keine Echtzeit-Kommunikation nötig
   - Dokumentiert für später

4. **Von anderen lernen**
   - Lösungen sind nachvollziehbar
   - Historie zeigt, wie Problem gelöst wurde
   - Andere können von Lisas Problem lernen

## Warum das NUR mit Git funktioniert

**Vergleich mit anderen Tools:**

### ❌ Microsoft Word
- **Problem:** Kind kann Word-Dokument nicht formatieren
- **Kommunikation:** "Es funktioniert nicht!"
- **Reproduktion:** Unmöglich - Word-Datei ist binär, nicht versionierbar
- **Helfer muss:** Entweder vor Ort sein oder endlose Screenshots austauschen
- **Resultat:** Ineffektiv, frustrierend

### ❌ Scratch
- **Problem:** Kind hat Bug in Scratch-Projekt
- **Kommunikation:** "Mein Spiel geht nicht!"
- **Reproduktion:** Schwierig - Scratch-Projekt muss exportiert/geteilt werden
- **Helfer muss:** Scratch-Datei herunterladen, öffnen, verstehen
- **Resultat:** Mühsam, keine strukturierte Versionskontrolle

### ✅ Typst + Git
- **Problem:** Kind kann Text nicht färben
- **Kommunikation:** Link zu GitHub Repository, Datei, Zeile, Commit
- **Reproduktion:** `git clone` + `git checkout` - fertig
- **Helfer hat:** EXAKT den gleichen Zustand wie das Kind
- **Resultat:** Effizient, professionell, lehrreich

## Der Lernprozess

**Anfangs:** Kinder sind schlecht darin, Probleme zu beschreiben
```markdown
"Es geht nicht!"
```

**Nach ein paar Wochen:** Kinder lernen strukturierter zu kommunizieren
```markdown
"Mein Text wird nicht rot. Ich habe versucht #text(red)(...) aber es gibt einen Fehler."
```

**Nach ein paar Monaten:** Kinder beherrschen professionelle Problemkommunikation
```markdown
"Ich versuche Text rot zu färben.

Repository: https://github.com/lisa/dinosaurier
Datei: dinosaurier.typ, Zeile 12
Commit: abc123

Aktueller Code:
#text(red)("Der T-Rex war gefährlich")

Fehlermeldung:
Error: Expected content, found color

Ich habe bereits versucht:
- #text(red)[...]  -> Gleiches Problem
- #color(red, "...") -> Funktion nicht gefunden

Was ist der richtige Syntax?"
```

**Das ist echte Kompetenz!** Diese Fähigkeit ist übertragbar auf:
- Jede Programmiersprache
- Jedes Projekt
- Jede Kollaboration
- Jede professionelle Arbeit

## Warum das für Mentor:in entscheidend ist

**Als Mentor:in musst du verstehen:**

Dies ist NICHT nur ein technisches Detail ("Git ist nützlich"). Dies ist **DAS zentrale Lernziel** des Mentorings.

**Erfolg bedeutet:**
- Kind kann Problem reproduzierbar beschreiben
- Kind kann GitHub Issue erstellen
- Kind kann anderen ermöglichen, das Problem bei sich zu reproduzieren
- Kind kann Lösungen empfangen und integrieren

**Wenn ein Kind das beherrscht:**
- Es kann JEDE Programmiersprache lernen
- Es kann in JEDEM Team arbeiten
- Es kann JEDES Open-Source-Projekt nutzen
- Es ist bereit für echte Softwareentwicklung

## Die Brücke zur echten Welt

**In der professionellen Softwareentwicklung:**

Genau so arbeiten Teams:
1. Entwickler hat Bug
2. Erstellt Issue mit präziser Beschreibung
3. Andere können Bug reproduzieren
4. Lösung wird entwickelt
5. Pull Request mit Lösung
6. Code Review
7. Merge

**Kinder lernen exakt diesen Workflow** - von Anfang an, mit echten Tools.
