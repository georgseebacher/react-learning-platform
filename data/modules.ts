"use client"

import type { Module } from "@/types/module"

export const modules: Module[] = [
  {
    id: 1,
    title: "Einführung in HTML & JavaScript",
    description: "Grundlagen von HTML und JavaScript - die Basis für React",
    estimatedTime: "30 Minuten",
    difficulty: "Anfänger",
    content: {
      theory: `
        <h2>Willkommen zur React Lernplattform!</h2>
        <p>Bevor wir mit React beginnen, müssen wir die Grundlagen verstehen. React baut auf HTML und JavaScript auf.</p>
        
        <h3>Was ist HTML?</h3>
        <p>HTML (HyperText Markup Language) ist die Struktur von Webseiten. Es verwendet Tags (Markierungen) um Inhalte zu strukturieren:</p>
        <ul>
          <li><code>&lt;div&gt;</code> - Container für andere Elemente</li>
          <li><code>&lt;h1&gt;</code> - Überschriften (h1 ist die größte, h6 die kleinste)</li>
          <li><code>&lt;p&gt;</code> - Absätze für Text</li>
          <li><code>&lt;button&gt;</code> - Schaltflächen für Interaktionen</li>
        </ul>

        <h3>Was ist JavaScript?</h3>
        <p>JavaScript macht Webseiten interaktiv. Hier sind die wichtigsten Konzepte:</p>
        
        <h4>1. Variablen - Daten speichern</h4>
        <pre><code>// Variablen erstellen
const name = "Max";        // Text (String)
const age = 25;           // Zahl (Number)
const isStudent = true;   // Wahrheitswert (Boolean)</code></pre>
        
        <h4>2. Funktionen - Code wiederverwenden</h4>
        <pre><code>// Funktion definieren
function sayHello() {
  return "Hallo!";
}

// Funktion mit Parameter
function greetPerson(name) {
  return "Hallo " + name + "!";
}

// Funktion aufrufen
const message = sayHello();        // "Hallo!"
const greeting = greetPerson("Max"); // "Hallo Max!"</code></pre>

        <h4>3. Return-Statement</h4>
        <p>Das <code>return</code> Schlüsselwort gibt einen Wert aus einer Funktion zurück:</p>
        <pre><code>function addNumbers(a, b) {
  return a + b;  // Gibt die Summe zurück
}

const result = addNumbers(5, 3); // result ist 8</code></pre>

        <h3>Schritt-für-Schritt zur Lösung</h3>
        <p>Für die Übung musst du:</p>
        <ol>
          <li>Eine Funktion namens <code>greeting</code> erstellen</li>
          <li>Diese Funktion soll den Text "Hello World" zurückgeben</li>
          <li>Verwende das <code>return</code> Statement</li>
        </ol>

        <h4>Lösungsschema:</h4>
        <pre><code>function FUNKTIONSNAME() {
  return "DEIN_TEXT_HIER";
}</code></pre>

        <h3>Häufige Anfängerfehler</h3>
        <ul>
          <li>❌ Vergessene Anführungszeichen: <code>return Hello World</code></li>
          <li>✅ Richtig: <code>return "Hello World"</code></li>
          <li>❌ Vergessenes return: <code>function greeting() { "Hello World" }</code></li>
          <li>✅ Richtig: <code>function greeting() { return "Hello World" }</code></li>
        </ul>
      `,
      exercise: {
        description: "Erstelle eine Funktion namens 'greeting', die den Text 'Hello World' zurückgibt.",
        starterCode: `// Schreibe hier deine Funktion
// 1. Verwende das Schlüsselwort 'function'
// 2. Gib der Funktion den Namen 'greeting'
// 3. Verwende 'return' um "Hello World" zurückzugeben

function greeting() {
  // Dein Code hier
}`,
        expectedOutput: "Hello World",
        solution: `function greeting() {
  return "Hello World";
}`,
      },
    },
  },
  {
    id: 2,
    title: "Was ist React?",
    description: "Verstehe was React ist und warum es so beliebt ist",
    estimatedTime: "25 Minuten",
    difficulty: "Anfänger",
    content: {
      theory: `
        <h2>Was ist React?</h2>
        <p>React ist eine JavaScript-Bibliothek für das Erstellen von Benutzeroberflächen. Es wurde von Facebook entwickelt und ist heute eine der beliebtesten Frontend-Technologien.</p>

        <h3>Warum React verwenden?</h3>
        <ul>
          <li><strong>Komponenten-basiert:</strong> Teile deine UI in wiederverwendbare Teile auf</li>
          <li><strong>Deklarativ:</strong> Beschreibe WAS du willst, nicht WIE es gemacht wird</li>
          <li><strong>Virtual DOM:</strong> Schnelle Updates durch intelligente Optimierungen</li>
          <li><strong>Große Community:</strong> Viele Ressourcen und Hilfe verfügbar</li>
        </ul>

        <h3>React Komponenten verstehen</h3>
        <p>Eine React-Komponente ist wie eine JavaScript-Funktion, die HTML zurückgibt. Aber anstatt normalem HTML verwenden wir JSX.</p>

        <h4>Dein erstes React-Beispiel - Schritt für Schritt</h4>
        <pre><code>// 1. Eine einfache Funktion
function Welcome() {
  // 2. Diese Funktion gibt JSX zurück (sieht aus wie HTML)
  return &lt;h1&gt;Hallo, Welt!&lt;/h1&gt;;
}</code></pre>

        <h4>Was ist JSX?</h4>
        <p>JSX ist eine spezielle Syntax, die HTML und JavaScript kombiniert:</p>
        <ul>
          <li>Es sieht aus wie HTML: <code>&lt;h1&gt;Text&lt;/h1&gt;</code></li>
          <li>Aber es ist eigentlich JavaScript</li>
          <li>Du kannst es in Funktionen verwenden</li>
          <li>Du kannst es mit <code>return</code> zurückgeben</li>
        </ul>

        <h3>Komponenten-Regeln (wichtig!)</h3>
        <ol>
          <li><strong>Funktionsname:</strong> Muss mit Großbuchstaben beginnen</li>
          <li><strong>Return:</strong> Muss JSX zurückgeben</li>
          <li><strong>JSX:</strong> Muss in spitzen Klammern stehen</li>
        </ol>

        <h4>Beispiele - Richtig vs. Falsch</h4>
        <pre><code>// ❌ FALSCH - Funktionsname klein geschrieben
function welcome() {
  return &lt;h1&gt;Hello World&lt;/h1&gt;;
}

// ✅ RICHTIG - Funktionsname groß geschrieben
function Welcome() {
  return &lt;h1&gt;Hello World&lt;/h1&gt;;
}

// ❌ FALSCH - Kein return
function HelloWorld() {
  &lt;h1&gt;Hello World&lt;/h1&gt;;
}

// ✅ RICHTIG - Mit return
function HelloWorld() {
  return &lt;h1&gt;Hello World&lt;/h1&gt;;
}</code></pre>

        <h3>Schritt-für-Schritt zur Lösung</h3>
        <p>Für die Übung musst du:</p>
        <ol>
          <li>Eine Funktion namens <code>HelloWorld</code> erstellen (Großbuchstabe!)</li>
          <li>Diese Funktion soll JSX zurückgeben</li>
          <li>Das JSX soll ein <code>&lt;h1&gt;</code> Element mit "Hello World" enthalten</li>
        </ol>

        <h4>Lösungsschema:</h4>
        <pre><code>function KOMPONENTEN_NAME() {
  return &lt;h1&gt;DEIN_TEXT&lt;/h1&gt;;
}</code></pre>

        <h3>Debugging-Tipps</h3>
        <ul>
          <li>Prüfe: Beginnt der Funktionsname mit Großbuchstaben?</li>
          <li>Prüfe: Hast du <code>return</code> verwendet?</li>
          <li>Prüfe: Sind die JSX-Tags richtig geschlossen?</li>
          <li>Prüfe: Hast du das Semikolon nach dem return vergessen?</li>
        </ul>
      `,
      exercise: {
        description:
          "Erstelle eine React-Komponente namens 'HelloWorld', die 'Hello World' in einem h1-Element anzeigt.",
        starterCode: `// Erstelle eine React-Komponente namens HelloWorld
// 1. Funktionsname muss mit Großbuchstaben beginnen
// 2. Verwende 'return' um JSX zurückzugeben
// 3. JSX: <h1>Hello World</h1>

function HelloWorld() {
  // Gib hier JSX zurück, das 'Hello World' anzeigt
}`,
        expectedOutput: "Hello World",
        solution: `function HelloWorld() {
  return <h1>Hello World</h1>;
}`,
      },
    },
  },
  {
    id: 3,
    title: "JSX verstehen",
    description: "Lerne die JSX-Syntax und wie sie funktioniert",
    estimatedTime: "35 Minuten",
    difficulty: "Anfänger",
    content: {
      theory: `
        <h2>Was ist JSX?</h2>
        <p>JSX (JavaScript XML) ist eine Syntaxerweiterung für JavaScript. Es sieht aus wie HTML, ist aber eigentlich JavaScript!</p>

        <h3>JSX Grundregeln (sehr wichtig!)</h3>
        
        <h4>1. Ein Root-Element</h4>
        <p>JSX muss immer ein einziges Wurzelelement haben:</p>
        <pre><code>// ❌ FALSCH - Zwei Elemente auf oberster Ebene
return (
  &lt;h1&gt;Titel&lt;/h1&gt;
  &lt;p&gt;Text&lt;/p&gt;
);

// ✅ RICHTIG - Ein div umhüllt alles
return (
  &lt;div&gt;
    &lt;h1&gt;Titel&lt;/h1&gt;
    &lt;p&gt;Text&lt;/p&gt;
  &lt;/div&gt;
);</code></pre>

        <h4>2. Selbstschließende Tags</h4>
        <p>Tags ohne Inhalt müssen selbstschließend sein:</p>
        <pre><code>// ❌ FALSCH
&lt;img src="bild.jpg"&gt;
&lt;br&gt;

// ✅ RICHTIG
&lt;img src="bild.jpg" /&gt;
&lt;br /&gt;</code></pre>

        <h4>3. className statt class</h4>
        <p>Für CSS-Klassen verwende <code>className</code>:</p>
        <pre><code>// ❌ FALSCH
&lt;div class="my-class"&gt;Text&lt;/div&gt;

// ✅ RICHTIG
&lt;div className="my-class"&gt;Text&lt;/div&gt;</code></pre>

        <h4>4. JavaScript in geschweiften Klammern</h4>
        <p>Um JavaScript-Code in JSX zu verwenden, setze ihn in geschweifte Klammern:</p>
        <pre><code>const name = "Max";
const age = 25;

return (
  &lt;div&gt;
    &lt;h1&gt;Hallo {name}!&lt;/h1&gt;
    &lt;p&gt;Du bist {age} Jahre alt.&lt;/p&gt;
    &lt;p&gt;Nächstes Jahr bist du {age + 1}.&lt;/p&gt;
  &lt;/div&gt;
);</code></pre>

        <h3>JSX Beispiele - Schritt für Schritt</h3>

        <h4>Beispiel 1: Einfaches JSX</h4>
        <pre><code>// Einfaches Element
const element = &lt;h1&gt;Hallo Welt!&lt;/h1&gt;;

// Element mit Text-Inhalt
const greeting = &lt;p&gt;Willkommen auf unserer Seite!&lt;/p&gt;;</code></pre>

        <h4>Beispiel 2: JSX mit JavaScript-Variablen</h4>
        <pre><code>const name = "Max";
const greeting = &lt;h1&gt;Hallo {name}!&lt;/h1&gt;;

// Das wird zu: &lt;h1&gt;Hallo Max!&lt;/h1&gt;</code></pre>

        <h4>Beispiel 3: JSX mit mehreren Elementen</h4>
        <pre><code>const content = (
  &lt;div&gt;
    &lt;h1&gt;Meine Webseite&lt;/h1&gt;
    &lt;p&gt;Das ist ein Absatz.&lt;/p&gt;
    &lt;button&gt;Klick mich&lt;/button&gt;
  &lt;/div&gt;
);</code></pre>

        <h3>Schritt-für-Schritt zur Lösung</h3>
        <p>Für die Übung musst du JSX erstellen mit:</p>
        <ol>
          <li>Einem <code>&lt;div&gt;</code> als Wurzelelement (Root)</li>
          <li>Einem <code>&lt;h1&gt;</code> mit dem Text "Willkommen"</li>
          <li>Einem <code>&lt;p&gt;</code> mit dem Text "Mein Name ist [Name]"</li>
        </ol>

        <h4>Lösungsschema:</h4>
        <pre><code>const myComponent = (
  &lt;div&gt;
    &lt;h1&gt;TITEL_TEXT&lt;/h1&gt;
    &lt;p&gt;ABSATZ_TEXT&lt;/p&gt;
  &lt;/div&gt;
);</code></pre>

        <h3>Häufige JSX-Fehler</h3>
        <ul>
          <li>❌ Vergessenes schließendes Tag: <code>&lt;div&gt;&lt;h1&gt;Text&lt;/h1&gt;</code></li>
          <li>✅ Richtig: <code>&lt;div&gt;&lt;h1&gt;Text&lt;/h1&gt;&lt;/div&gt;</code></li>
          <li>❌ Mehrere Root-Elemente: <code>&lt;h1&gt;...&lt;/h1&gt;&lt;p&gt;...&lt;/p&gt;</code></li>
          <li>✅ Richtig: <code>&lt;div&gt;&lt;h1&gt;...&lt;/h1&gt;&lt;p&gt;...&lt;/p&gt;&lt;/div&gt;</code></li>
          <li>❌ Falsche Klammer: <code>&lt;p&gt;Text {name}&lt;/p&gt;</code> ohne schließende }</li>
          <li>✅ Richtig: <code>&lt;p&gt;Text {name}&lt;/p&gt;</code></li>
        </ul>

        <h3>Debugging-Checklist</h3>
        <ol>
          <li>Ist alles in einem Root-Element eingeschlossen?</li>
          <li>Sind alle Tags richtig geschlossen?</li>
          <li>Verwendest du <code>className</code> statt <code>class</code>?</li>
          <li>Sind JavaScript-Ausdrücke in {} eingeschlossen?</li>
        </ol>
      `,
      exercise: {
        description:
          "Erstelle JSX mit einem div-Container, einem h1-Titel 'Willkommen' und einem p-Absatz mit deinem Namen.",
        starterCode: `// Erstelle JSX mit einem h1-Titel "Willkommen" und einem p-Absatz mit deinem Namen
// 1. Verwende ein <div> als Root-Element
// 2. Füge ein <h1> mit "Willkommen" hinzu
// 3. Füge ein <p> mit "Mein Name ist [DeinName]" hinzu

const myComponent = (
  // Dein JSX hier
);`,
        expectedOutput: "Willkommen\nMein Name ist [Name]",
        solution: `const myComponent = (
  <div>
    <h1>Willkommen</h1>
    <p>Mein Name ist Max</p>
  </div>
);`,
      },
    },
  },
  {
    id: 4,
    title: "Funktionale Komponenten",
    description: "Erstelle und verwende React-Komponenten",
    estimatedTime: "40 Minuten",
    difficulty: "Anfänger",
    content: {
      theory: `
        <h2>Was sind Komponenten?</h2>
        <p>Komponenten sind die Bausteine von React-Anwendungen. Sie sind wie JavaScript-Funktionen, die JSX zurückgeben.</p>

        <h3>Warum Komponenten verwenden?</h3>
        <ul>
          <li><strong>Wiederverwendbarkeit:</strong> Einmal schreiben, überall verwenden</li>
          <li><strong>Organisation:</strong> Code in logische Teile aufteilen</li>
          <li><strong>Wartbarkeit:</strong> Einfacher zu debuggen und zu ändern</li>
        </ul>

        <h3>Funktionale Komponenten - Schritt für Schritt</h3>

        <h4>1. Einfache Komponente</h4>
        <pre><code>// Eine Komponente ist eine Funktion, die JSX zurückgibt
function Welcome() {
  return &lt;h1&gt;Willkommen!&lt;/h1&gt;;
}

// Alternative Schreibweise (Arrow Function)
const Welcome = () => {
  return &lt;h1&gt;Willkommen!&lt;/h1&gt;;
};</code></pre>

        <h4>2. Komponente mit mehreren Elementen</h4>
        <pre><code>function UserCard() {
  return (
    &lt;div&gt;
      &lt;h2&gt;Benutzer-Profil&lt;/h2&gt;
      &lt;p&gt;Name: Max Mustermann&lt;/p&gt;
      &lt;p&gt;Email: max@example.com&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>

        <h4>3. Komponenten verwenden</h4>
        <pre><code>function App() {
  return (
    &lt;div&gt;
      &lt;Welcome /&gt;
      &lt;UserCard /&gt;
      &lt;Welcome /&gt;  {/* Komponente mehrfach verwenden */}
    &lt;/div&gt;
  );
}</code></pre>

        <h3>Wichtige Komponenten-Regeln</h3>
        <ol>
          <li><strong>Funktionsname:</strong> Muss mit Großbuchstaben beginnen</li>
          <li><strong>Return:</strong> Muss JSX oder null zurückgeben</li>
          <li><strong>Verwendung:</strong> Wie HTML-Tags: <code>&lt;ComponentName /&gt;</code></li>
          <li><strong>Selbstschließend:</strong> Wenn keine Kinder: <code>&lt;Component /&gt;</code></li>
        </ol>

        <h3>Komponenten-Beispiele</h3>

        <h4>Beispiel 1: Header-Komponente</h4>
        <pre><code>function Header() {
  return (
    &lt;header&gt;
      &lt;h1&gt;Meine Website&lt;/h1&gt;
      &lt;nav&gt;
        &lt;a href="#home"&gt;Home&lt;/a&gt;
        &lt;a href="#about"&gt;About&lt;/a&gt;
      &lt;/nav&gt;
    &lt;/header&gt;
  );
}</code></pre>

        <h4>Beispiel 2: Button-Komponente</h4>
        <pre><code>function MyButton() {
  return (
    &lt;button&gt;
      Klick mich!
    &lt;/button&gt;
  );
}</code></pre>

        <h4>Beispiel 3: Profil-Karte</h4>
        <pre><code>function ProfileCard() {
  return (
    &lt;div&gt;
      &lt;img src="avatar.jpg" alt="Profilbild" /&gt;
      &lt;h3&gt;Max Mustermann&lt;/h3&gt;
      &lt;p&gt;React Entwickler&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>

        <h3>Schritt-für-Schritt zur Lösung</h3>
        <p>Für die Übung musst du eine UserCard-Komponente erstellen:</p>
        <ol>
          <li>Funktionsname: <code>UserCard</code> (Großbuchstabe!)</li>
          <li>Return ein <code>&lt;div&gt;</code> als Container</li>
          <li>Füge ein <code>&lt;p&gt;</code> mit "Name: Max Mustermann" hinzu</li>
          <li>Füge ein <code>&lt;p&gt;</code> mit "Email: max@example.com" hinzu</li>
        </ol>

        <h4>Lösungsschema:</h4>
        <pre><code>function KOMPONENTEN_NAME() {
  return (
    &lt;div&gt;
      &lt;p&gt;Name: DEIN_NAME&lt;/p&gt;
      &lt;p&gt;Email: DEINE_EMAIL&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>

        <h3>Häufige Komponenten-Fehler</h3>
        <ul>
          <li>❌ Kleiner Anfangsbuchstabe: <code>function userCard()</code></li>
          <li>✅ Richtig: <code>function UserCard()</code></li>
          <li>❌ Kein return: <code>function UserCard() { &lt;div&gt;...&lt;/div&gt; }</code></li>
          <li>✅ Richtig: <code>function UserCard() { return &lt;div&gt;...&lt;/div&gt; }</code></li>
          <li>❌ Falsche Verwendung: <code>&lt;userCard&gt;&lt;/userCard&gt;</code></li>
          <li>✅ Richtig: <code>&lt;UserCard /&gt;</code></li>
        </ol>

        <h3>Debugging-Tipps</h3>
        <ul>
          <li>Prüfe: Beginnt der Funktionsname mit Großbuchstaben?</li>
          <li>Prüfe: Verwendest du <code>return</code>?</li>
          <li>Prüfe: Ist das JSX in einem Root-Element eingeschlossen?</li>
          <li>Prüfe: Sind alle Tags richtig geschlossen?</li>
        </ul>
      `,
      exercise: {
        description:
          "Erstelle eine Komponente 'UserCard', die einen Namen und eine E-Mail in separaten p-Elementen anzeigt.",
        starterCode: `// Erstelle eine UserCard-Komponente
// 1. Funktionsname: UserCard (mit Großbuchstaben!)
// 2. Return ein <div> als Container
// 3. Füge <p>Name: Max Mustermann</p> hinzu
// 4. Füge <p>Email: max@example.com</p> hinzu

function UserCard() {
  // Zeige einen Namen und eine E-Mail an
  return (
    // Dein JSX hier
  );
}`,
        expectedOutput: "Name: Max Mustermann\nEmail: max@example.com",
        solution: `function UserCard() {
  return (
    <div>
      <p>Name: Max Mustermann</p>
      <p>Email: max@example.com</p>
    </div>
  );
}`,
      },
    },
  },
  {
    id: 5,
    title: "Props und State",
    description: "Lerne Daten zwischen Komponenten zu übergeben und State zu verwalten",
    estimatedTime: "45 Minuten",
    difficulty: "Anfänger",
    content: {
      theory: `
        <h2>Props und State verstehen</h2>
        <p>Props und State sind zwei wichtige Konzepte in React für die Datenverwaltung.</p>

        <h3>Was sind Props?</h3>
        <p>Props (Properties) sind Daten, die von einer Eltern-Komponente an eine Kind-Komponente weitergegeben werden. Sie sind wie Parameter bei Funktionen.</p>

        <h4>Props Schritt-für-Schritt</h4>
        <pre><code>// 1. Komponente mit Props-Parameter
function Greeting(props) {
  return &lt;h1&gt;Hallo, {props.name}!&lt;/h1&gt;;
}

// 2. Komponente verwenden und Props übergeben
function App() {
  return (
    &lt;div&gt;
      &lt;Greeting name="Max" /&gt;
      &lt;Greeting name="Anna" /&gt;
    &lt;/div&gt;
  );
}</code></pre>

        <h3>Was ist State?</h3>
        <p>State sind Daten, die sich über die Zeit ändern können. Mit dem useState Hook können wir State in funktionalen Komponenten verwalten.</p>

        <h4>useState Hook - Schritt für Schritt</h4>

        <h5>1. useState importieren</h5>
        <pre><code>import { useState } from 'react';</code></pre>

        <h5>2. State erstellen</h5>
        <pre><code>function Counter() {
  // useState gibt uns zwei Dinge zurück:
  // 1. Den aktuellen Wert (count)
  // 2. Eine Funktion zum Ändern (setCount)
  const [count, setCount] = useState(0);
  //     ↑        ↑           ↑
  //   Wert   Setter    Startwert
}</code></pre>

        <h5>3. State anzeigen</h5>
        <pre><code>function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;Counter: {count}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>

        <h5>4. State ändern</h5>
        <pre><code>function Counter() {
  const [count, setCount] = useState(0);

  // Funktion zum Erhöhen
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    &lt;div&gt;
      &lt;p&gt;Counter: {count}&lt;/p&gt;
      &lt;button onClick={handleIncrement}&gt;
        Erhöhen
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

        <h3>Vollständiges Counter-Beispiel</h3>
        <pre><code>import { useState } from 'react';

function Counter() {
  // State erstellen
  const [count, setCount] = useState(0);

  // Event-Handler Funktionen
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    &lt;div&gt;
      &lt;h2&gt;Counter: {count}&lt;/h2&gt;
      &lt;button onClick={increment}&gt;+1&lt;/button&gt;
      &lt;button onClick={decrement}&gt;-1&lt;/button&gt;
      &lt;button onClick={reset}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

        <h3>Props vs State - Der Unterschied</h3>
        <table border="1" style="width: 100%; border-collapse: collapse;">
          <tr>
            <th>Props</th>
            <th>State</th>
          </tr>
          <tr>
            <td>Werden von außen übergeben</td>
            <td>Gehören zur Komponente selbst</td>
          </tr>
          <tr>
            <td>Sind unveränderlich (read-only)</td>
            <td>Können sich ändern</td>
          </tr>
          <tr>
            <td>Wie Funktions-Parameter</td>
            <td>Wie lokale Variablen</td>
          </tr>
        </table>

        <h3>Schritt-für-Schritt zur Lösung</h3>
        <p>Für die Übung musst du einen Counter erstellen:</p>
        <ol>
          <li>Importiere <code>useState</code> von React</li>
          <li>Erstelle State mit <code>useState(0)</code></li>
          <li>Zeige den Counter-Wert an</li>
          <li>Erstelle einen Button zum Erhöhen</li>
          <li>Verwende <code>onClick</code> für den Button</li>
        </ol>

        <h4>Lösungsschema:</h4>
        <pre><code>import { useState } from 'react';

function Counter() {
  const [WERT, SET_FUNKTION] = useState(STARTWERT);
  
  return (
    &lt;div&gt;
      &lt;p&gt;Counter: {WERT}&lt;/p&gt;
      &lt;button onClick={() => SET_FUNKTION(WERT + 1)}&gt;
        Erhöhen
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

        <h3>Wichtige State-Regeln</h3>
        <ul>
          <li>State nie direkt ändern: <code>count = 5</code> ❌</li>
          <li>Immer Setter-Funktion verwenden: <code>setCount(5)</code> ✅</li>
          <li>State-Updates können asynchron sein</li>
          <li>React re-rendert die Komponente bei State-Änderungen</li>
        </ul>

        <h3>Häufige useState-Fehler</h3>
        <ul>
          <li>❌ Vergessener Import: <code>const [count, setCount] = useState(0);</code></li>
          <li>✅ Richtig: <code>import { useState } from 'react';</code></li>
          <li>❌ Direkte Änderung: <code>count = count + 1;</code></li>
          <li>✅ Richtig: <code>setCount(count + 1);</code></li>
          <li>❌ Falsche Destrukturierung: <code>const count = useState(0);</code></li>
          <li>✅ Richtig: <code>const [count, setCount] = useState(0);</code></li>
        </ul>
      `,
      exercise: {
        description: "Erstelle einen Counter mit useState, der bei Klick auf einen Button erhöht wird.",
        starterCode: `// Importiere useState und erstelle einen Counter
// 1. Importiere useState von React
// 2. Erstelle State mit useState(0)
// 3. Zeige den Counter-Wert an
// 4. Erstelle einen Button mit onClick zum Erhöhen

import { useState } from 'react';

function Counter() {
  // Erstelle State für den Counter (Startwert: 0)
  // const [count, setCount] = useState(0);
  
  // Erstelle eine Funktion zum Erhöhen oder verwende inline
  
  return (
    <div>
      {/* Zeige den Counter-Wert an */}
      {/* Button mit onClick zum Erhöhen */}
    </div>
  );
}`,
        expectedOutput: "Counter: 0",
        solution: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Erhöhen
      </button>
    </div>
  );
}`,
      },
    },
  },
  {
    id: 6,
    title: "Events & Interaktionen",
    description: "Lerne wie du auf Benutzerinteraktionen reagierst",
    estimatedTime: "35 Minuten",
    difficulty: "Anfänger",
    content: {
      theory: `
        <h2>Event-Handling in React</h2>
        <p>Events sind Benutzerinteraktionen wie Klicks, Tastatureingaben oder Mausbewegungen. React macht es einfach, auf diese Events zu reagieren.</p>

        <h3>Die wichtigsten Events</h3>
        <ul>
          <li><strong>onClick:</strong> Reagiert auf Mausklicks</li>
          <li><strong>onChange:</strong> Reagiert auf Eingabeänderungen</li>
          <li><strong>onSubmit:</strong> Reagiert auf Formular-Übermittlungen</li>
          <li><strong>onMouseOver/onMouseOut:</strong> Mausbewegungen</li>
        </ul>

        <h3>onClick Event - Schritt für Schritt</h3>

        <h4>1. Einfacher Button-Klick</h4>
        <pre><code>function MyButton() {
  // Event-Handler Funktion
  const handleClick = () => {
    alert('Button wurde geklickt!');
  };

  return (
    &lt;button onClick={handleClick}&gt;
      Klick mich
    &lt;/button&gt;
  );
}</code></pre>

        <h4>2. Inline Event-Handler</h4>
        <pre><code>function MyButton() {
  return (
    &lt;button onClick={() => alert('Geklickt!')}&gt;
      Klick mich
    &lt;/button&gt;
  );
}</code></pre>

        <h3>onChange Event - Input-Felder</h3>

        <h4>Schritt-für-Schritt Input-Handling</h4>
        <pre><code>import { useState } from 'react';

function TextInput() {
  // 1. State für den Input-Wert
  const [text, setText] = useState('');

  // 2. Event-Handler für Änderungen
  const handleChange = (event) => {
    // event.target.value enthält den neuen Wert
    setText(event.target.value);
  };

  return (
    &lt;div&gt;
      &lt;input 
        value={text} 
        onChange={handleChange} 
        placeholder="Text eingeben..."
      /&gt;
      &lt;p&gt;Du hast eingegeben: {text}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>

        <h3>Das Event-Objekt verstehen</h3>
        <p>React übergibt automatisch ein Event-Objekt an deine Handler-Funktionen:</p>

        <pre><code>const handleChange = (event) => {
  console.log(event.target.value);    // Der neue Wert
  console.log(event.target.name);     // Der Name des Elements
  console.log(event.type);            // Der Event-Typ (z.B. "change")
};</code></pre>

        <h4>Wichtige Event-Eigenschaften</h4>
        <ul>
          <li><code>event.target.value</code> - Der Wert eines Input-Elements</li>
          <li><code>event.target.name</code> - Der Name des Elements</li>
          <li><code>event.preventDefault()</code> - Verhindert Standard-Verhalten</li>
          <li><code>event.stopPropagation()</code> - Stoppt Event-Bubbling</li>
        </ul>

        <h3>Kombiniertes Beispiel: Input + Button</h3>
        <pre><code>import { useState } from 'react';

function TextAlert() {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    if (text.trim()) {
      alert(\`Du hast eingegeben: \${text}\`);
    } else {
      alert('Bitte gib etwas ein!');
    }
  };

  return (
    &lt;div&gt;
      &lt;input 
        value={text}
        onChange={handleInputChange}
        placeholder="Text eingeben..."
      /&gt;
      &lt;button onClick={handleButtonClick}&gt;
        Text anzeigen
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

        <h3>Schritt-für-Schritt zur Lösung</h3>
        <p>Für die Übung musst du:</p>
        <ol>
          <li>State für den Text erstellen: <code>useState('')</code></li>
          <li>Input-Feld mit <code>value</code> und <code>onChange</code></li>
          <li>Button mit <code>onClick</code></li>
          <li>Event-Handler für Input-Änderungen</li>
          <li>Event-Handler für Button-Klick mit Alert</li>
        </ol>

        <h4>Lösungsschema:</h4>
        <pre><code>import { useState } from 'react';

function TextAlert() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    alert(text || 'Kein Text eingegeben');
  };
  
  return (
    <div>
      <input 
        value={text} 
        onChange={handleChange} 
        placeholder="Text eingeben..." 
      />
      <button onClick={handleClick}>
        Text anzeigen
      </button>
    </div>
  );
}</code></pre>

        <h3>Event-Handler Best Practices</h3>
        <ul>
          <li>Verwende aussagekräftige Namen: <code>handleSubmit</code>, <code>handleInputChange</code></li>
          <li>Halte Event-Handler klein und fokussiert</li>
          <li>Verwende <code>event.preventDefault()</code> bei Formularen</li>
          <li>Prüfe Eingaben bevor du sie verarbeitest</li>
        </ul>

        <h3>Häufige Event-Fehler</h3>
        <ul>
          <li>❌ Funktion sofort aufrufen: <code>onClick={handleClick()}</code></li>
          <li>✅ Richtig: <code>onClick={handleClick}</code></li>
          <li>❌ Vergessenes event.target: <code>setText(event)</code></li>
          <li>✅ Richtig: <code>setText(event.target.value)</code></li>
          <li>❌ Fehlende value-Prop: <code>&lt;input onChange={handleChange} /&gt;</code></li>
          <li>✅ Richtig: <code>&lt;input value={text} onChange={handleChange} /&gt;</code></li>
        </ul>

        <h3>Debugging-Tipps</h3>
        <ul>
          <li>Verwende <code>console.log(event)</code> um das Event-Objekt zu untersuchen</li>
          <li>Prüfe ob <code>event.target.value</code> den erwarteten Wert hat</li>
          <li>Stelle sicher, dass State korrekt aktualisiert wird</li>
          <li>Verwende React Developer Tools um State-Änderungen zu verfolgen</li>
        </ul>
      `,
      exercise: {
        description:
          "Erstelle eine Komponente mit einem Input-Feld und einem Button. Der Button soll den eingegebenen Text in einem Alert anzeigen.",
        starterCode: `// Erstelle eine TextAlert-Komponente
// 1. Importiere useState
// 2. Erstelle State für den Text
// 3. Input mit value und onChange
// 4. Button mit onClick für Alert

import { useState } from 'react';

function TextAlert() {
  const [text, setText] = useState('');

  // Erstelle eine handleChange Funktion für das Input
  const handleChange = (event) => {
    // Setze den neuen Wert: event.target.value
  };

  // Erstelle eine handleClick Funktion für den Button
  const handleClick = () => {
    // Zeige den Text in einem Alert an
  };
  
  return (
    <div>
      {/* Input-Feld mit value, onChange und placeholder */}
      {/* Button mit onClick */}
    </div>
  );
}`,
        expectedOutput: "Input und Button funktionieren zusammen",
        solution: `import { useState } from 'react';

function TextAlert() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    alert(text || 'Kein Text eingegeben');
  };
  
  return (
    <div>
      <input 
        value={text} 
        onChange={handleChange} 
        placeholder="Text eingeben..." 
      />
      <button onClick={handleClick}>
        Text anzeigen
      </button>
    </div>
  );
}`,
      },
    },
  },
  {
    id: 7,
    title: "useEffect & Lifecycle",
    description: "Verstehe Side Effects und den Komponenten-Lebenszyklus",
    estimatedTime: "50 Minuten",
    difficulty: "Fortgeschritten",
    content: {
      theory: `
        <h2>Was ist useEffect?</h2>
        <p>useEffect ist ein Hook, der es dir ermöglicht, Side Effects in funktionalen Komponenten auszuführen. Side Effects sind Operationen, die außerhalb der Komponente stattfinden.</p>

        <h3>Was sind Side Effects?</h3>
        <p>Side Effects sind Aktionen, die nicht direkt mit dem Rendern zu tun haben:</p>
        <ul>
          <li>API-Aufrufe beim Laden der Komponente</li>
          <li>Timer oder Intervalle starten/stoppen</li>
          <li>Event-Listener hinzufügen/entfernen</li>
          <li>Dokument-Titel ändern</li>
          <li>Cleanup-Operationen</li>
        </ul>

        <h3>useEffect Grundlagen - Schritt für Schritt</h3>

        <h4>1. useEffect importieren</h4>
        <pre><code>import { useEffect, useState } from 'react';</code></pre>

        <h4>2. Einfacher useEffect (läuft nach jedem Render)</h4>
        <pre><code>function MyComponent() {
  const [count, setCount] = useState(0);

  // Läuft nach jedem Render
  useEffect(() => {
    console.log('Komponente wurde gerendert');
  });

  return &lt;div&gt;Count: {count}&lt;/div&gt;;
}</code></pre>

        <h4>3. useEffect mit leerem Dependency Array (läuft nur einmal)</h4>
        <pre><code>function MyComponent() {
  const [data, setData] = useState(null);

  // Läuft nur beim ersten Render (Mount)
  useEffect(() => {
    console.log('Komponente wurde gemountet');
    // Hier würdest du z.B. Daten laden
  }, []); // Leeres Array = nur einmal ausführen

  return &lt;div&gt;{data}&lt;/div&gt;;
}</code></pre>

        <h4>4. useEffect mit Dependencies (läuft bei Änderungen)</h4>
        <pre><code>function MyComponent() {
  const [count, setCount] = useState(0);

  // Läuft wenn sich 'count' ändert
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]); // Läuft nur wenn sich count ändert

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Erhöhen
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

        <h3>Timer-Beispiel - Schritt für Schritt</h3>

        <h4>1. Basis-Timer ohne Cleanup</h4>
        <pre><code>import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Timer starten
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
  }, []); // Nur einmal beim Mount

  return &lt;div&gt;Timer: {seconds} Sekunden&lt;/div&gt;;
}</code></pre>

        <h4>2. Timer mit Cleanup-Funktion</h4>
        <pre><code>import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Timer starten
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup-Funktion (wird beim Unmount aufgerufen)
    return () => {
      clearInterval(timer);
      console.log('Timer wurde gestoppt');
    };
  }, []); // Nur einmal beim Mount

  return &lt;div&gt;Timer: {seconds} Sekunden&lt;/div&gt;;
}</code></pre>

        <h3>Dependency Array verstehen</h3>
        <table border="1" style="width: 100%; border-collapse: collapse;">
          <tr>
            <th>Dependency Array</th>
            <th>Wann läuft useEffect?</th>
            <th>Beispiel</th>
          </tr>
          <tr>
            <td>Kein Array</td>
            <td>Nach jedem Render</td>
            <td><code>useEffect(() => {})</code></td>
          </tr>
          <tr>
            <td>Leeres Array <code>[]</code></td>
            <td>Nur einmal beim Mount</td>
            <td><code>useEffect(() => {}, [])</code></td>
          </tr>
          <tr>
            <td>Mit Werten <code>[value]</code></td>
            <td>Wenn sich Werte ändern</td>
            <td><code>useEffect(() => {}, [count])</code></td>
          </tr>
        </table>

        <h3>Warum Cleanup-Funktionen wichtig sind</h3>
        <p>Ohne Cleanup können Memory Leaks entstehen:</p>
        <pre><code>// ❌ SCHLECHT - Timer läuft weiter auch wenn Komponente weg ist
useEffect(() => {
  const timer = setInterval(() => {
    setSeconds(s => s + 1);
  }, 1000);
  // Kein Cleanup!
}, []);

// ✅ GUT - Timer wird gestoppt
useEffect(() => {
  const timer = setInterval(() => {
    setSeconds(s => s + 1);
  }, 1000);

  return () => {
    clearInterval(timer); // Cleanup!
  };
}, []);</code></pre>

        <h3>Schritt-für-Schritt zur Lösung</h3>
        <p>Für die Timer-Übung musst du:</p>
        <ol>
          <li>useState für seconds mit Startwert 0</li>
          <li>useEffect mit leerem Dependency Array</li>
          <li>setInterval im useEffect erstellen</li>
          <li>setSeconds mit prevSeconds => prevSeconds + 1</li>
          <li>Cleanup-Funktion mit clearInterval zurückgeben</li>
        </ol>

        <h4>Lösungsschema:</h4>
        <pre><code>import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); // Leeres Array!

  return (
    &lt;div&gt;
      &lt;h2&gt;Timer: {seconds} Sekunden&lt;/h2&gt;
    &lt;/div&gt;
  );
}</code></pre>

        <h3>Häufige useEffect-Fehler</h3>
        <ul>
          <li>❌ Vergessener Import: <code>useEffect(() => {})</code></li>
          <li>✅ Richtig: <code>import { useEffect } from 'react';</code></li>
          <li>❌ Fehlende Dependencies: <code>useEffect(() => { setTitle(count) })</code></li>
          <li>✅ Richtig: <code>useEffect(() => { setTitle(count) }, [count])</code></li>
          <li>❌ Vergessenes Cleanup: Timer läuft weiter</li>
          <li>✅ Richtig: <code>return () => clearInterval(timer)</code></li>
        </ul>

        <h3>Debugging-Tipps</h3>
        <ul>
          <li>Verwende <code>console.log</code> im useEffect um zu sehen wann er läuft</li>
          <li>Prüfe das Dependency Array - sind alle verwendeten Werte enthalten?</li>
          <li>Teste Cleanup-Funktionen indem du Komponenten ein/ausblendest</li>
          <li>Verwende React Developer Tools um useEffect-Aufrufe zu verfolgen</li>
        </ul>

        <h3>Weitere useEffect-Beispiele</h3>

        <h4>API-Call beim Mount</h4>
        <pre><code>useEffect(() => {
  fetch('/api/users')
    .then(response => response.json())
    .then(data => setUsers(data));
}, []); // Nur einmal laden</code></pre>

        <h4>Event-Listener hinzufügen</h4>
        <pre><code>useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);</code></pre>
      `,
      exercise: {
        description: "Erstelle einen Timer, der jede Sekunde hochzählt und beim Unmount gestoppt wird.",
        starterCode: `// Erstelle einen Timer mit useEffect
// 1. Importiere useState und useEffect
// 2. Erstelle State für seconds (Startwert: 0)
// 3. useEffect mit leerem Dependency Array
// 4. setInterval im useEffect
// 5. Cleanup-Funktion mit clearInterval

import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  // Implementiere useEffect für den Timer
  useEffect(() => {
    // Erstelle setInterval
    const timer = setInterval(() => {
      // Erhöhe seconds um 1 (verwende prevSeconds => prevSeconds + 1)
    }, 1000);

    // Vergiss nicht die Cleanup-Funktion!
    return () => {
      // Stoppe den Timer
    };
  }, []); // Leeres Dependency Array!

  return (
    <div>
      <h2>Timer: {seconds} Sekunden</h2>
    </div>
  );
}`,
        expectedOutput: "Timer zählt automatisch hoch",
        solution: `import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>Timer: {seconds} Sekunden</h2>
    </div>
  );
}`,
      },
    },
  },
  {
    id: 8,
    title: "Routing mit React Router",
    description: "Erstelle Single-Page-Applications mit Navigation",
    estimatedTime: "45 Minuten",
    difficulty: "Fortgeschritten",
    content: {
      theory: `
        <h2>Was ist React Router?</h2>
        <p>React Router ermöglicht es, Single-Page-Applications (SPAs) mit mehreren "Seiten" zu erstellen, ohne dass der Browser neu lädt.</p>

        <h3>Installation</h3>
        <pre><code>npm install react-router-dom</code></pre>

        <h3>Grundlegende Komponenten</h3>
        <ul>
          <li><strong>BrowserRouter:</strong> Umhüllt die gesamte App</li>
          <li><strong>Routes:</strong> Container für alle Route-Definitionen</li>
          <li><strong>Route:</strong> Definiert eine einzelne Route</li>
          <li><strong>Link:</strong> Navigation zwischen Seiten</li>
          <li><strong>useNavigate:</strong> Programmatische Navigation</li>
        </ul>

        <h3>Basis-Setup</h3>
        <pre><code>import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;nav&gt;
        &lt;Link to="/"&gt;Home&lt;/Link&gt;
        &lt;Link to="/about"&gt;About&lt;/Link&gt;
        &lt;Link to="/contact"&gt;Contact&lt;/Link&gt;
      &lt;/nav&gt;

      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
        &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
        &lt;Route path="/contact" element={&lt;Contact /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}</code></pre>

        <h3>URL-Parameter</h3>
        <pre><code>import { useParams } from 'react-router-dom';

// Route Definition
&lt;Route path="/user/:id" element={&lt;UserProfile /&gt;} /&gt;

// In der Komponente
function UserProfile() {
  const { id } = useParams();
  return &lt;h1&gt;User ID: {id}&lt;/h1&gt;;
}</code></pre>

        <h3>Programmatische Navigation</h3>
        <pre><code>import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Nach erfolgreichem Login
    navigate('/dashboard');
  };

  return &lt;button onClick={handleLogin}&gt;Login&lt;/button&gt;;
}</code></pre>

        <h3>Nested Routes</h3>
        <p>Du kannst Routen verschachteln für komplexere Layouts:</p>
        <pre><code>&lt;Route path="/dashboard" element={&lt;Dashboard /&gt;}&gt;
  &lt;Route path="profile" element={&lt;Profile /&gt;} /&gt;
  &lt;Route path="settings" element={&lt;Settings /&gt;} /&gt;
&lt;/Route&gt;</code></pre>
      `,
      exercise: {
        description: "Erstelle eine einfache Navigation mit Home, About und Contact Seiten.",
        starterCode: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    // Implementiere BrowserRouter, Navigation und Routes
    <div>
      {/* Navigation hier */}
      {/* Routes hier */}
    </div>
  );
}`,
        expectedOutput: "Navigation zwischen Seiten funktioniert",
        solution: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '20px' }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}`,
      },
    },
  },
  {
    id: 9,
    title: "API Calls mit fetch",
    description: "Lade Daten von externen APIs und verwalte Loading States",
    estimatedTime: "40 Minuten",
    difficulty: "Fortgeschritten",
    content: {
      theory: `
        <h2>API Calls in React</h2>
        <p>Moderne Web-Apps laden Daten von externen APIs. React macht es einfach, diese Daten zu fetchen und anzuzeigen.</p>

        <h3>Fetch API Grundlagen</h3>
        <pre><code>// Einfacher GET Request
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));</code></pre>

        <h3>Async/Await Syntax</h3>
        <pre><code>async function fetchUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}</code></pre>

        <h3>API Calls in React Komponenten</h3>
        <pre><code>import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (error) return &lt;div&gt;Error: {error}&lt;/div&gt;;

  return (
    &lt;ul&gt;
      {users.map(user => (
        &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>

        <h3>POST Requests</h3>
        <pre><code>const createUser = async (userData) => {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};</code></pre>

        <h3>Best Practices</h3>
        <ul>
          <li>Immer Loading States anzeigen</li>
          <li>Fehlerbehandlung implementieren</li>
          <li>API Calls in useEffect mit Cleanup</li>
          <li>Daten-Caching für bessere Performance</li>
          <li>AbortController für Request-Cancellation</li>
        </ul>

        <h3>Error Handling</h3>
        <ul>
          <li>Network Errors abfangen</li>
          <li>HTTP Status Codes prüfen</li>
          <li>Benutzerfreundliche Fehlermeldungen</li>
          <li>Retry-Mechanismen implementieren</li>
        </ul>
      `,
      exercise: {
        description: "Erstelle eine Komponente, die Benutzerdaten von einer API lädt und anzeigt.",
        starterCode: `import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Implementiere useEffect mit API Call
  // URL: 'https://jsonplaceholder.typicode.com/users'
  // Zeige Loading, Error und Success States

  return (
    <div>
      {/* Implementiere die Anzeige-Logik */}
    </div>
  );
}`,
        expectedOutput: "Liste von Benutzern wird geladen und angezeigt",
        solution: `import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      },
    },
  },
  {
    id: 10,
    title: "Context API für globalen State",
    description: "Verwalte globalen State ohne Prop Drilling",
    estimatedTime: "50 Minuten",
    difficulty: "Fortgeschritten",
    content: {
      theory: `
        <h2>Was ist die Context API?</h2>
        <p>Die Context API ermöglicht es, Daten durch den gesamten Komponenten-Baum zu teilen, ohne Props manuell durch jede Ebene weiterzugeben (Prop Drilling).</p>

        <h3>Wann Context verwenden?</h3>
        <ul>
          <li>Globale Daten (Theme, Sprache, Benutzer-Info)</li>
          <li>Authentifizierung</li>
          <li>Shopping Cart State</li>
          <li>Komplexe State-Logik</li>
        </ul>

        <h3>Context erstellen</h3>
        <pre><code>import { createContext, useContext, useState } from 'react';

// 1. Context erstellen
const ThemeContext = createContext();

// 2. Provider-Komponente
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    &lt;ThemeContext.Provider value={{ theme, toggleTheme }}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
}

// 3. Custom Hook für einfache Verwendung
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}</code></pre>

        <h3>Context verwenden</h3>
        <pre><code>function App() {
  return (
    &lt;ThemeProvider&gt;
      &lt;Header /&gt;
      &lt;Main /&gt;
      &lt;Footer /&gt;
    &lt;/ThemeProvider&gt;
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    &lt;header style={{ background: theme === 'dark' ? '#333' : '#fff' }}&gt;
      &lt;button onClick={toggleTheme}&gt;
        Switch to {theme === 'dark' ? 'light' : 'dark'} theme
      &lt;/button&gt;
    &lt;/header&gt;
  );
}</code></pre>

        <h3>Komplexerer State mit useReducer</h3>
        <pre><code>import { createContext, useContext, useReducer } from 'react';

const initialState = {
  user: null,
  isLoading: false,
  error: null
};

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, isLoading: false, user: action.payload };
    case 'LOGIN_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (credentials) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const user = await api.login(credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: error.message });
    }
  };

  return (
    &lt;AuthContext.Provider value={{ ...state, login }}&gt;
      {children}
    &lt;/AuthContext.Provider&gt;
  );
}</code></pre>

        <h3>Best Practices</h3>
        <ul>
          <li>Verwende Context sparsam - nicht für jeden State</li>
          <li>Teile Context in logische Bereiche auf</li>
          <li>Erstelle Custom Hooks für bessere API</li>
          <li>Verwende useReducer für komplexe State-Logik</li>
          <li>Optimiere Performance mit useMemo</li>
        </ul>

        <h3>Performance-Optimierung</h3>
        <pre><code>const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Memoize den Context-Wert
  const value = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    &lt;ThemeContext.Provider value={value}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
};</code></pre>
      `,
      exercise: {
        description: "Erstelle einen UserContext mit Login/Logout Funktionalität.",
        starterCode: `import { createContext, useContext, useState } from 'react';

// Erstelle UserContext
const UserContext = createContext();

// UserProvider Komponente
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Implementiere login und logout Funktionen
  
  return (
    // Provider mit value
  );
}

// Custom Hook
function useUser() {
  // Implementiere useContext mit Error-Handling
}

// Test-Komponente
function UserProfile() {
  const { user, login, logout } = useUser();

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ name: 'John Doe' })}>
          Login
        </button>
      )}
    </div>
  );
}`,
        expectedOutput: "Login/Logout funktioniert mit Context",
        solution: `import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

function UserProfile() {
  const { user, login, logout } = useUser();

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ name: 'John Doe' })}>
          Login
        </button>
      )}
    </div>
  );
}`,
      },
    },
  },
  {
    id: 11,
    title: "Formulare und Validierung",
    description: "Erstelle robuste Formulare mit Validierung",
    estimatedTime: "45 Minuten",
    difficulty: "Fortgeschritten",
    content: {
      theory: `
        <h2>Formulare in React</h2>
        <p>Formulare sind ein wichtiger Teil jeder Web-App. React bietet zwei Ansätze: Controlled und Uncontrolled Components.</p>

        <h3>Controlled Components</h3>
        <p>Der React State kontrolliert den Wert des Form-Elements:</p>
        <pre><code>function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      /&gt;
      &lt;input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      /&gt;
      &lt;textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>

        <h3>Form-Validierung</h3>
        <pre><code>function useFormValidation(initialState, validationRules) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    const rule = validationRules[name];
    if (!rule) return '';

    if (rule.required && !value) {
      return \`\${name} is required\`;
    }

    if (rule.minLength && value.length < rule.minLength) {
      return \`\${name} must be at least \${rule.minLength} characters\`;
    }

    if (rule.pattern && !rule.pattern.test(value)) {
      return rule.message || \`\${name} is invalid\`;
    }

    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  return { values, errors, handleChange };
}</code></pre>

        <h3>Validierungs-Beispiel</h3>
        <pre><code>function RegistrationForm() {
  const validationRules = {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email'
    },
    password: {
      required: true,
      minLength: 8
    }
  };

  const { values, errors, handleChange } = useFormValidation(
    { email: '', password: '' },
    validationRules
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some(error => error);
    
    if (!hasErrors) {
      console.log('Form is valid:', values);
    }
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;div&gt;
        &lt;input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
        /&gt;
        {errors.email && &lt;span className="error"&gt;{errors.email}&lt;/span&gt;}
      &lt;/div&gt;
      
      &lt;div&gt;
        &lt;input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
        /&gt;
        {errors.password && &lt;span className="error"&gt;{errors.password}&lt;/span&gt;}
      &lt;/div&gt;
      
      &lt;button type="submit"&gt;Register&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>

        <h3>Verschiedene Input-Typen</h3>
        <ul>
          <li><strong>Checkboxes:</strong> <code>checked={isChecked}</code></li>
          <li><strong>Radio Buttons:</strong> Gleicher <code>name</code>, verschiedene <code>value</code></li>
          <li><strong>Select Dropdowns:</strong> <code>value</code> und <code>onChange</code></li>
          <li><strong>File Inputs:</strong> <code>e.target.files[0]</code></li>
        </ul>

        <h3>Best Practices</h3>
        <ul>
          <li>Verwende Controlled Components für bessere Kontrolle</li>
          <li>Validiere sowohl client- als auch serverseitig</li>
          <li>Zeige Fehler in Echtzeit an</li>
          <li>Verwende semantische HTML-Elemente</li>
          <li>Implementiere Accessibility (Labels, ARIA)</li>
        </ul>
      `,
      exercise: {
        description: "Erstelle ein Registrierungsformular mit E-Mail und Passwort-Validierung.",
        starterCode: `import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  // Implementiere handleChange Funktion
  // Implementiere Validierung
  // Implementiere handleSubmit

  return (
    <form>
      {/* Email Input mit Validierung */}
      {/* Password Input mit Validierung */}
      {/* Confirm Password Input */}
      {/* Submit Button */}
    </form>
  );
}`,
        expectedOutput: "Formular mit Validierung funktioniert",
        solution: `import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? '' : 'Please enter a valid email';
      case 'password':
        return value.length >= 8 ? '' : 'Password must be at least 8 characters';
      case 'confirmPassword':
        return value === formData.password ? '' : 'Passwords do not match';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some(error => error);
    
    if (!hasErrors && formData.email && formData.password) {
      alert('Registration successful!');
    } else {
      alert('Please fix the errors');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '15px' }}>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.email && <div style={{ color: 'red', fontSize: '14px' }}>{errors.email}</div>}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.password && <div style={{ color: 'red', fontSize: '14px' }}>{errors.password}</div>}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.confirmPassword && <div style={{ color: 'red', fontSize: '14px' }}>{errors.confirmPassword}</div>}
      </div>
      
      <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
        Register
      </button>
    </form>
  );
}`,
      },
    },
  },
  {
    id: 12,
    title: "Testing mit Jest",
    description: "Lerne wie du React-Komponenten testest",
    estimatedTime: "40 Minuten",
    difficulty: "Fortgeschritten",
    content: {
      theory: `
        <h2>Testing in React</h2>
        <p>Testing stellt sicher, dass deine Komponenten wie erwartet funktionieren. React Testing Library ist der moderne Standard für React-Tests.</p>

        <h3>Warum Testing?</h3>
        <ul>
          <li>Verhindert Bugs in der Produktion</li>
          <li>Macht Refactoring sicherer</li>
          <li>Dokumentiert das erwartete Verhalten</li>
          <li>Verbessert Code-Qualität</li>
        </ul>

        <h3>Setup</h3>
        <pre><code>npm install --save-dev @testing-library/react @testing-library/jest-dom</code></pre>

        <h3>Einfacher Test</h3>
        <pre><code>import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('renders button with text', () => {
  render(&lt;Button&gt;Click me&lt;/Button&gt;);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});</code></pre>

        <h3>User Interactions testen</h3>
        <pre><code>import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('increments counter when button is clicked', async () => {
  const user = userEvent.setup();
  render(&lt;Counter /&gt;);
  
  const button = screen.getByRole('button', { name: /increment/i });
  const counter = screen.getByText(/count: 0/i);
  
  await user.click(button);
  
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});</code></pre>

        <h3>Async Testing</h3>
        <pre><code>import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';

// Mock fetch
global.fetch = jest.fn();

test('loads and displays users', async () => {
  const mockUsers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ];

  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockUsers,
  });

  render(&lt;UserList /&gt;);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });
});</code></pre>

        <h3>Testing Hooks</h3>
        <pre><code>import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});</code></pre>

        <h3>Mocking</h3>
        <pre><code>// Mock eine Komponente
jest.mock('./ExpensiveComponent', () => {
  return function MockedExpensiveComponent() {
    return &lt;div&gt;Mocked Component&lt;/div&gt;;
  };
});

// Mock eine Funktion
const mockOnClick = jest.fn();

test('calls onClick when button is clicked', () => {
  render(&lt;Button onClick={mockOnClick}&gt;Click&lt;/Button&gt;);
  
  fireEvent.click(screen.getByRole('button'));
  
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});</code></pre>

        <h3>Test-Strategien</h3>
        <ul>
          <li><strong>Unit Tests:</strong> Teste einzelne Komponenten isoliert</li>
          <li><strong>Integration Tests:</strong> Teste Komponenten-Interaktionen</li>
          <li><strong>E2E Tests:</strong> Teste komplette User-Flows</li>
        </ul>

        <h3>Best Practices</h3>
        <ul>
          <li>Teste Verhalten, nicht Implementation</li>
          <li>Verwende semantische Queries (getByRole, getByLabelText)</li>
          <li>Schreibe aussagekräftige Test-Namen</li>
          <li>Halte Tests einfach und fokussiert</li>
          <li>Verwende data-testid nur als letzten Ausweg</li>
        </ul>

        <h3>Häufige Queries</h3>
        <ul>
          <li><code>getByRole('button')</code> - Findet Buttons</li>
          <li><code>getByText('Hello')</code> - Findet Text</li>
          <li><code>getByLabelText('Email')</code> - Findet Inputs über Labels</li>
          <li><code>getByPlaceholderText('Enter name')</code> - Findet über Placeholder</li>
        </ul>
      `,
      exercise: {
        description: "Schreibe Tests für eine Counter-Komponente.",
        starterCode: `// Counter.js
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

// Counter.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Counter from './Counter';

// Schreibe Tests für:
// 1. Initial render mit count 0
// 2. Increment button funktioniert
// 3. Decrement button funktioniert
// 4. Reset button funktioniert

test('renders initial count', () => {
  // Dein Test hier
});

test('increments count when increment button is clicked', async () => {
  // Dein Test hier
});`,
        expectedOutput: "Alle Tests bestehen",
        solution: `// Counter.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Counter from './Counter';

test('renders initial count', () => {
  render(<Counter />);
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
});

test('increments count when increment button is clicked', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  
  const incrementButton = screen.getByRole('button', { name: /increment/i });
  
  await user.click(incrementButton);
  
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});

test('decrements count when decrement button is clicked', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  
  const decrementButton = screen.getByRole('button', { name: /decrement/i });
  
  await user.click(decrementButton);
  
  expect(screen.getByText('Count: -1')).toBeInTheDocument();
});

test('resets count when reset button is clicked', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  
  const incrementButton = screen.getByRole('button', { name: /increment/i });
  const resetButton = screen.getByRole('button', { name: /reset/i });
  
  // Increment first
  await user.click(incrementButton);
  await user.click(incrementButton);
  
  // Then reset
  await user.click(resetButton);
  
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
});`,
      },
    },
  },
  {
    id: 13,
    title: "Projektarbeit: Todo-App",
    description: "Baue eine vollständige Todo-App mit allen gelernten Konzepten",
    estimatedTime: "90 Minuten",
    difficulty: "Experte",
    content: {
      theory: `
        <h2>Projektarbeit: Todo-App</h2>
        <p>Jetzt ist es Zeit, alles zusammenzufügen! Du wirst eine vollständige Todo-App erstellen, die alle bisher gelernten Konzepte verwendet.</p>

        <h3>Features der Todo-App</h3>
        <ul>
          <li>✅ Todos hinzufügen, bearbeiten und löschen</li>
          <li>✅ Todos als erledigt markieren</li>
          <li>✅ Filter: Alle, Aktive, Erledigte</li>
          <li>✅ Lokale Speicherung (localStorage)</li>
          <li>✅ Responsive Design</li>
          <li>✅ Form-Validierung</li>
        </ul>

        <h3>Verwendete Konzepte</h3>
        <ul>
          <li><strong>useState:</strong> Für Todo-Liste und Filter-State</li>
          <li><strong>useEffect:</strong> Für localStorage-Synchronisation</li>
          <li><strong>Event Handling:</strong> Für alle Benutzerinteraktionen</li>
          <li><strong>Conditional Rendering:</strong> Für verschiedene Ansichten</li>
          <li><strong>Lists & Keys:</strong> Für Todo-Rendering</li>
          <li><strong>Forms:</strong> Für Todo-Eingabe und -Bearbeitung</li>
        </ul>

        <h3>Komponenten-Struktur</h3>
        <pre><code>TodoApp
├── TodoForm (Neues Todo hinzufügen)
├── TodoList (Liste aller Todos)
│   └── TodoItem (Einzelnes Todo)
├── TodoFilter (Filter-Buttons)
└── TodoStats (Statistiken)</code></pre>

        <h3>Datenstruktur</h3>
        <pre><code>const todo = {
  id: 1,
  text: "React lernen",
  completed: false,
  createdAt: new Date().toISOString()
};</code></pre>

        <h3>Implementierungs-Schritte</h3>
        <ol>
          <li>Basis-Komponente mit State erstellen</li>
          <li>Todo hinzufügen implementieren</li>
          <li>Todo-Liste anzeigen</li>
          <li>Toggle completed Status</li>
          <li>Todo löschen</li>
          <li>Filter implementieren</li>
          <li>localStorage-Persistierung</li>
          <li>Styling und UX verbessern</li>
        </ol>

        <h3>Erweiterte Features (Optional)</h3>
        <ul>
          <li>Todo-Bearbeitung (Inline-Editing)</li>
          <li>Drag & Drop für Reihenfolge</li>
          <li>Kategorien/Tags</li>
          <li>Fälligkeitsdaten</li>
          <li>Suche/Filter nach Text</li>
          <li>Bulk-Operationen</li>
        </ul>

        <h3>Testing-Überlegungen</h3>
        <ul>
          <li>Teste das Hinzufügen von Todos</li>
          <li>Teste das Markieren als erledigt</li>
          <li>Teste die Filter-Funktionalität</li>
          <li>Teste die localStorage-Persistierung</li>
        </ul>

        <h3>Performance-Optimierungen</h3>
        <ul>
          <li>useMemo für gefilterte Todo-Liste</li>
          <li>useCallback für Event-Handler</li>
          <li>React.memo für TodoItem-Komponenten</li>
        </ul>
      `,
      exercise: {
        description:
          "Erstelle eine vollständige Todo-App mit allen Features. Implementiere Hinzufügen, Löschen, Toggle und Filter-Funktionalität.",
        starterCode: `import { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [newTodo, setNewTodo] = useState('');

  // localStorage laden beim Start
  useEffect(() => {
    // Implementiere localStorage-Laden
  }, []);

  // localStorage speichern bei Änderungen
  useEffect(() => {
    // Implementiere localStorage-Speichern
  }, [todos]);

  // Todo hinzufügen
  const addTodo = (e) => {
    e.preventDefault();
    // Implementiere Todo hinzufügen
  };

  // Todo toggle
  const toggleTodo = (id) => {
    // Implementiere Toggle-Funktionalität
  };

  // Todo löschen
  const deleteTodo = (id) => {
    // Implementiere Löschen
  };

  // Gefilterte Todos
  const filteredTodos = todos.filter(todo => {
    // Implementiere Filter-Logik
  });

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Todo App</h1>
      
      {/* Todo-Form */}
      <form onSubmit={addTodo}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Neues Todo hinzufügen..."
        />
        <button type="submit">Hinzufügen</button>
      </form>

      {/* Filter */}
      <div>
        <button onClick={() => setFilter('all')}>Alle</button>
        <button onClick={() => setFilter('active')}>Aktive</button>
        <button onClick={() => setFilter('completed')}>Erledigte</button>
      </div>

      {/* Todo-Liste */}
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            {/* Implementiere Todo-Item */}
          </li>
        ))}
      </ul>

      {/* Statistiken */}
      <div>
        <p>Gesamt: {todos.length}</p>
        <p>Aktiv: {todos.filter(t => !t.completed).length}</p>
        <p>Erledigt: {todos.filter(t => t.completed).length}</p>
      </div>
    </div>
  );
}`,
        expectedOutput: "Vollständige Todo-App funktioniert",
        solution: `import { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [newTodo, setNewTodo] = useState('');

  // localStorage laden beim Start
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // localStorage speichern bei Änderungen
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Todo hinzufügen
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTodos(prev => [...prev, todo]);
      setNewTodo('');
    }
  };

  // Todo toggle
  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Todo löschen
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // Gefilterte Todos
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Todo App</h1>
      
      {/* Todo-Form */}
      <form onSubmit={addTodo} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Neues Todo hinzufügen..."
          style={{ flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        <button 
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Hinzufügen
        </button>
      </form>

      {/* Filter */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
        {['all', 'active', 'completed'].map(filterType => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            style={{
              padding: '8px 16px',
              backgroundColor: filter === filterType ? '#007bff' : '#f8f9fa',
              color: filter === filterType ? 'white' : '#333',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {filterType === 'all' ? 'Alle' : filterType === 'active' ? 'Aktive' : 'Erledigte'}
          </button>
        ))}
      </div>

      {/* Todo-Liste */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTodos.map(todo => (
          <li 
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              margin: '5px 0',
              backgroundColor: '#f8f9fa',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <span
              style={{
                flex: 1,
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#666' : '#333'
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Löschen
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
          Keine Todos vorhanden. Füge dein erstes Todo hinzu!
        </p>
      )}

      {/* Statistiken */}
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e9ecef', borderRadius: '4px' }}>
        <h3 style={{ margin: '0 0 10px 0' }}>Statistiken</h3>
        <p style={{ margin: '5px 0' }}>Gesamt: {todos.length}</p>
        <p style={{ margin: '5px 0' }}>Aktiv: {todos.filter(t => !t.completed).length}</p>
        <p style={{ margin: '5px 0' }}>Erledigt: {todos.filter(t => t.completed).length}</p>
      </div>
    </div>
  );
}`,
      },
    },
  },
  {
    id: 14,
    title: "Finale Prüfung: Chat-App",
    description: "Baue eine komplexe Chat-Anwendung als Abschlussprojekt",
    estimatedTime: "120 Minuten",
    difficulty: "Experte",
    content: {
      theory: `
        <h2>Finale Prüfung: Chat-App</h2>
        <p>Herzlichen Glückwunsch! Du hast alle Module erfolgreich abgeschlossen. Jetzt ist es Zeit für die finale Herausforderung: Eine vollständige Chat-Anwendung!</p>

        <h3>🎯 Projektanforderungen</h3>
        <ul>
          <li>💬 Nachrichten senden und empfangen</li>
          <li>👥 Mehrere Chat-Räume</li>
          <li>👤 Benutzername-System</li>
          <li>⏰ Zeitstempel für Nachrichten</li>
          <li>🎨 Responsive Design</li>
          <li>💾 Lokale Speicherung der Chat-Historie</li>
          <li>🔍 Nachrichten-Suche</li>
          <li>😊 Emoji-Support (Optional)</li>
        </ul>

        <h3>🏗️ Architektur-Überlegungen</h3>
        <pre><code>ChatApp
├── UserSetup (Benutzername eingeben)
├── ChatRoomList (Verfügbare Räume)
├── ChatRoom
│   ├── MessageList
│   │   └── Message
│   ├── MessageInput
│   └── ChatHeader
└── SearchBar (Nachrichten suchen)</code></pre>

        <h3>📊 Datenstrukturen</h3>
        <pre><code>// Message
{
  id: string,
  text: string,
  username: string,
  timestamp: Date,
  roomId: string
}

// ChatRoom
{
  id: string,
  name: string,
  description: string,
  messageCount: number
}</code></pre>

        <h3>🔧 Technische Herausforderungen</h3>
        <ul>
          <li><strong>State Management:</strong> Komplexer State mit Context API</li>
          <li><strong>Real-time Updates:</strong> Simulation mit setInterval</li>
          <li><strong>Performance:</strong> Virtualisierung bei vielen Nachrichten</li>
          <li><strong>UX:</strong> Auto-scroll, Typing-Indikatoren</li>
          <li><strong>Persistence:</strong> localStorage für Chat-Historie</li>
        </ul>

        <h3>🎨 Design-Anforderungen</h3>
        <ul>
          <li>Modern und benutzerfreundlich</li>
          <li>Mobile-first responsive Design</li>
          <li>Klare Unterscheidung zwischen eigenen und fremden Nachrichten</li>
          <li>Loading States und Error Handling</li>
          <li>Smooth Animations und Transitions</li>
          </ul>

        <h3>🧪 Testing-Strategie</h3>
        <ul>
          <li>Unit Tests für Message-Komponenten</li>
          <li>Integration Tests für Chat-Flow</li>
          <li>User Interaction Tests</li>
          <li>Performance Tests bei vielen Nachrichten</li>
        </ul>

        <h3>🚀 Erweiterte Features (Bonus)</h3>
        <ul>
          <li>Datei-Upload für Bilder</li>
          <li>Message Reactions (👍, ❤️, 😂)</li>
          <li>Thread-Antworten</li>
          <li>Online-Status Simulation</li>
          <li>Dark/Light Theme Toggle</li>
          <li>Keyboard Shortcuts</li>
        </ul>

        <h3>💡 Implementierungs-Tipps</h3>
        <ul>
          <li>Starte mit der Basis-Funktionalität</li>
          <li>Verwende Context für globalen Chat-State</li>
          <li>Implementiere Auto-scroll für neue Nachrichten</li>
          <li>Nutze useRef für DOM-Manipulationen</li>
          <li>Optimiere mit useMemo und useCallback</li>
        </ul>

        <h3>🎓 Bewertungskriterien</h3>
        <ul>
          <li>✅ Funktionalität (40%)</li>
          <li>✅ Code-Qualität (25%)</li>
          <li>✅ User Experience (20%)</li>
          <li>✅ Performance (10%)</li>
          <li>✅ Kreativität (5%)</li>
        </ul>

        <p><strong>Viel Erfolg bei deiner finalen Prüfung! 🚀</strong></p>
      `,
      exercise: {
        description:
          "Erstelle eine vollständige Chat-Anwendung mit allen geforderten Features. Dies ist deine finale Prüfung - zeige alles was du gelernt hast!",
        starterCode: `import { useState, useEffect, useContext, createContext, useRef } from 'react';

// Chat Context
const ChatContext = createContext();

// Sample data
const initialRooms = [
  { id: 'general', name: 'General', description: 'Allgemeine Diskussionen' },
  { id: 'react', name: 'React', description: 'React Entwicklung' },
  { id: 'random', name: 'Random', description: 'Zufällige Gespräche' }
];

function ChatProvider({ children }) {
  const [currentUser, setCurrentUser] = useState('');
  const [currentRoom, setCurrentRoom] = useState('general');
  const [messages, setMessages] = useState({});
  const [rooms] = useState(initialRooms);

  // Implementiere Chat-Logik hier
  // - addMessage Funktion
  // - switchRoom Funktion
  // - localStorage Persistierung

  return (
    <ChatContext.Provider value={{
      currentUser,
      setCurrentUser,
      currentRoom,
      setCurrentRoom,
      messages,
      rooms,
      // Weitere Funktionen hier
    }}>
      {children}
    </ChatContext.Provider>
  );
}

function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within ChatProvider');
  }
  return context;
}

// Haupt-Chat-Komponente
function ChatApp() {
  const { currentUser } = useChat();

  if (!currentUser) {
    return <UserSetup />;
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <ChatRoomList />
      <ChatRoom />
    </div>
  );
}

// Benutzername-Setup
function UserSetup() {
  const [username, setUsername] = useState('');
  const { setCurrentUser } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setCurrentUser(username.trim());
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <form onSubmit={handleSubmit} style={{ 
        padding: '40px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2>Willkommen zur Chat-App!</h2>
        <p>Bitte gib deinen Benutzernamen ein:</p>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Dein Benutzername..."
          style={{ 
            width: '100%', 
            padding: '10px', 
            marginBottom: '20px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        <button 
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Chat beitreten
        </button>
      </form>
    </div>
  );
}

// Chat-Raum Liste
function ChatRoomList() {
  // Implementiere Room-Liste
  return (
    <div style={{ width: '250px', backgroundColor: '#2c3e50', color: 'white' }}>
      <h3 style={{ padding: '20px', margin: 0 }}>Chat Räume</h3>
      {/* Room-Liste hier */}
    </div>
  );
}

// Haupt-Chat-Bereich
function ChatRoom() {
  // Implementiere Chat-Room
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <ChatHeader />
      <MessageList />
      <MessageInput />
    </div>
  );
}

// Chat-Header
function ChatHeader() {
  // Implementiere Header
  return (
    <div style={{ 
      padding: '20px', 
      borderBottom: '1px solid #eee',
      backgroundColor: 'white'
    }}>
      {/* Header-Inhalt */}
    </div>
  );
}

// Nachrichten-Liste
function MessageList() {
  // Implementiere Message-Liste mit Auto-scroll
  return (
    <div style={{ 
      flex: 1, 
      padding: '20px', 
      overflowY: 'auto',
      backgroundColor: '#f8f9fa'
    }}>
      {/* Nachrichten hier */}
    </div>
  );
}

// Nachrichten-Eingabe
function MessageInput() {
  // Implementiere Message-Input
  return (
    <div style={{ 
      padding: '20px', 
      borderTop: '1px solid #eee',
      backgroundColor: 'white'
    }}>
      {/* Input-Form hier */}
    </div>
  );
}

// Haupt-App mit Provider
function App() {
  return (
    <ChatProvider>
      <ChatApp />
    </ChatProvider>
  );
}

export default App;`,
      },
    },
  },
]
