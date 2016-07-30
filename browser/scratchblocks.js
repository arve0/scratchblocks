(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.scratchblocks = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Browser entry. Combines scratchblocks.js and translations.json
 */

var scratchblocks = require('./../src/scratchblocks-browser');
var translations = require('./translations.json');

scratchblocks.loadLanguages(translations);

// for --standalone build
module.exports = scratchblocks;

},{"./../src/scratchblocks-browser":4,"./translations.json":2}],2:[function(require,module,exports){
module.exports={
  "ca": {
    "aliases": {
      "gira a l'esquerra %n graus": "turn @turnLeft %n degrees",
      "gira a la dreta %n graus": "turn @turnRight %n degrees",
      "quan la bandera verda es premi": "when @greenFlag clicked",
      "fi": "end"
    },
    "define": [
      "defineix"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "mou-te %n passos",
      "turn @turnRight %n degrees": "gira @turnRight %n graus",
      "turn @turnLeft %n degrees": "gira @turnLeft %n graus",
      "point in direction %d.direction": "apunta en direcció %d.direction",
      "point towards %m.spriteOrMouse": "apunta cap a %m.spriteOrMouse",
      "go to x:%n y:%n": "vés a x:%n y:%n",
      "go to %m.location": "vés a %m.location",
      "glide %n secs to x:%n y:%n": "llisca en %n segons fins a x:%n y:%n",
      "change x by %n": "suma %n a x",
      "set x to %n": "assigna el valor %n a x",
      "change y by %n": "suma %n a y",
      "set y to %n": "assigna el valor %n a y",
      "set rotation style %m.rotationStyle": "fixa la rotació a %m.rotationStyle",
      "say %s for %n secs": "digues %s durant %n segons",
      "say %s": "digues %s",
      "think %s for %n secs": "pensa %s durant %n segons",
      "think %s": "pensa %s",
      "show": "mostra't",
      "hide": "amaga't",
      "switch costume to %m.costume": "canvia el vestit a %m.costume",
      "next costume": "següent vestit",
      "next backdrop": "següent fons de pantalla",
      "switch backdrop to %m.backdrop": "canvia el fons a %m.backdrop",
      "switch backdrop to %m.backdrop and wait": "canvia el fons a %m.backdrop i espera",
      "change %m.effect effect by %n": "augmenta l'efecte %m.effect en %n",
      "set %m.effect effect to %n": "fixa l'efecte %m.effect a %n",
      "clear graphic effects": "treu els efectes gràfics",
      "change size by %n": "augmenta %n la mida",
      "set size to %n%": "fixa la mida a %n%",
      "go to front": "vés al front",
      "go back %n layers": "vés %n capes darrera",
      "play sound %m.sound": "toca el so %m.sound",
      "play sound %m.sound until done": "toca el so %m.sound fins que acabi",
      "stop all sounds": "atura tots els sons",
      "play drum %d.drum for %n beats": "toca el tambor %d.drum durant %n pulsacions",
      "rest for %n beats": "fes silenci durant %n pulsacions",
      "play note %d.note for %n beats": "toca la nota %d.note durant %n pulsacions",
      "set instrument to %d.instrument": "fixa l'instrument a %d.instrument",
      "change volume by %n": "puja %n el volum",
      "set volume to %n%": "fixa el volum a %n%",
      "change tempo by %n": "augmenta %n el tempo",
      "set tempo to %n bpm": "fixa el tempo a %n",
      "clear": "neteja",
      "stamp": "estampa",
      "pen down": "baixa el llapis",
      "pen up": "puja el llapis",
      "set pen color to %c": "fixa el color del llapis a %c",
      "change pen color by %n": "augmenta %n el color del llapis",
      "set pen color to %n": "fixa el color del llapis a %n",
      "change pen shade by %n": "augmenta %n la intensitat del llapis",
      "set pen shade to %n": "fixa la intensitat del llapis a %n",
      "change pen size by %n": "augmenta %n la mida del llapis",
      "set pen size to %n": "fixa la mida del llapis a %n",
      "when @greenFlag clicked": "quan la @greenFlag es premi",
      "when %m.key key pressed": "quan la tecla %m.key es premi",
      "when this sprite clicked": "quan es cliqui aquest personatge",
      "when backdrop switches to %m.backdrop": "quan l'escenari canviï al fons %m.backdrop",
      "when %m.triggerSensor > %n": "quan %m.triggerSensor > %n",
      "when I receive %m.broadcast": "quan rebi %m.broadcast",
      "broadcast %m.broadcast": "envia a tots %m.broadcast",
      "broadcast %m.broadcast and wait": "envia a tots %m.broadcast i espera",
      "wait %n secs": "espera %n segons",
      "repeat %n": "repeteix %n vegades",
      "forever": "per sempre",
      "if %b then": "si %b llavors",
      "wait until %b": "espera fins %b",
      "repeat until %b": "repeteix fins %b",
      "stop %m.stop": "atura %m.stop",
      "when I start as a clone": "quan una còpia meva comenci",
      "create clone of %m.spriteOnly": "crea una còpia de %m.spriteOnly",
      "delete this clone": "esborra aquesta còpia",
      "ask %s and wait": "pregunta %s i espera",
      "turn video %m.videoState": "posa vídeo %m.videoState",
      "set video transparency to %n%": "fixa la transparència del vídeo a %n%",
      "reset timer": "reinicia el cronòmetre",
      "set %m.var to %s": "assigna a %m.var el valor %s",
      "change %m.var by %n": "augmenta %m.var en %n",
      "show variable %m.var": "mostra la variable %m.var",
      "hide variable %m.var": "amaga la variable %m.var",
      "add %s to %m.list": "afegeix %s a %m.list",
      "delete %d.listDeleteItem of %m.list": "esborra l'element %d.listDeleteItem de %m.list",
      "if on edge, bounce": "rebota en tocar una vora",
      "insert %s at %d.listItem of %m.list": "afegeix %s a la posició %d.listItem de %m.list",
      "replace item %d.listItem of %m.list with %s": "canvia l'element %d.listItem de %m.list per %s",
      "show list %m.list": "mostra la llista %m.list",
      "hide list %m.list": "amaga la llista %m.list",
      "x position": "posició x",
      "y position": "posició y",
      "direction": "direcció",
      "costume #": "vestit nr",
      "size": "mida",
      "backdrop name": "nom del fons",
      "backdrop #": "fons nr",
      "volume": "volum",
      "tempo": "tempo",
      "touching %m.touching?": "tocant %m.touching?",
      "touching color %c?": "tocant el color %c?",
      "color %c is touching %c?": "color %c sobre %c?",
      "distance to %m.spriteOrMouse": "distància a %m.spriteOrMouse",
      "answer": "resposta",
      "key %m.key pressed?": "tecla %m.key premuda?",
      "mouse down?": "ratolí clicat?",
      "mouse x": "ratolí x",
      "mouse y": "ratolí y",
      "loudness": "volum del so",
      "video %m.videoMotionType on %m.stageOrThis": "%m.videoMotionType de vídeo a %m.stageOrThis",
      "timer": "cronòmetre",
      "%m.attribute of %m.spriteOrStage": "%m.attribute de %m.spriteOrStage",
      "current %m.timeAndDate": "%m.timeAndDate actual",
      "days since 2000": "dies des del 2000",
      "username": "nom d'usuari",
      "pick random %n to %n": "nombre a l'atzar entre %n i %n",
      "%b and %b": "%b i %b",
      "%b or %b": "%b o %b",
      "not %b": "no %b",
      "join %s %s": "uneix %s i %s",
      "letter %n of %s": "lletra %n de %s",
      "length of %s": "llargada de %s",
      "%n mod %n": "residu de dividir %n entre %n",
      "round %n": "arrodoneix %n",
      "%m.mathOp of %n": "%m.mathOp de %n",
      "item %d.listItem of %m.list": "element %d.listItem de %m.list",
      "length of %m.list": "llargada de %m.list",
      "%m.list contains %s?": "%m.list conté %s?",
      "when %m.booleanSensor": "quan %m.booleanSensor actiu",
      "when %m.sensor %m.lessMore %n": "quan %m.sensor %m.lessMore %n",
      "sensor %m.booleanSensor?": "sensor %m.booleanSensor?",
      "%m.sensor sensor value": "valor del sensor %m.sensor",
      "turn %m.motor on for %n secs": "activa el motor %m.motor durant %n segons",
      "turn %m.motor on": "activa el motor %m.motor",
      "turn %m.motor off": "atura el motor %m.motor",
      "set %m.motor power to %n": "fixa potència del motor %m.motor a %n",
      "set %m.motor2 direction to %m.motorDirection": "fixa la direcció del motor %m.motor2 a %m.motorDirection",
      "when distance %m.lessMore %n": "quan la distància sigui %m.lessMore %n",
      "when tilt %m.eNe %n": "quan la inclinació sigui %m.eNe %n",
      "distance": "distància",
      "tilt": "inclinació",
      "else": "si no",
      "end": "fi"
    },
    "dropdowns": {
      "A connected": "A connectat",
      "all": "tot",
      "all around": "al voltant",
      "B connected": "B connectat",
      "brightness": "brillantor",
      "button pressed": "botó premut",
      "C connected": "C connectat",
      "color": "color",
      "costume name": "nom del vestit",
      "D connected": "D connectat",
      "date": "data",
      "day of week": "dia de la setmana",
      "don't rotate": "no giris",
      "down arrow": "fletxa avall",
      "edge": "vora",
      "fisheye": "ull de peix",
      "ghost": "transparència",
      "hour": "hora",
      "left arrow": "fletxa esquerra",
      "left-right": "esquerra-dreta",
      "light": "llum",
      "minute": "minut",
      "month": "mes",
      "mosaic": "mosaic",
      "motion": "moviment",
      "mouse-pointer": "punter del ratolí",
      "myself": "jo mateix",
      "off": "apaga",
      "on": "activa",
      "on-flipped": "voltejat actiu",
      "other scripts in sprite": "altres programes del personatge",
      "pixelate": "pixelar",
      "previous backdrop": "fons anterior",
      "resistance-A": "resistència-A",
      "resistance-B": "resistència-B",
      "resistance-C": "resistència-C",
      "resistance-D": "resistència-D",
      "reverse": "invertit",
      "right arrow": "fletxa dreta",
      "second": "segon",
      "slider": "lliscador",
      "sound": "so",
      "space": "espai",
      "Stage": "Escenari",
      "that way": "cap aquí",
      "this script": "aquest programa",
      "this sprite": "aquest personatge",
      "this way": "cap allà",
      "up arrow": "fletxa amunt",
      "video motion": "moviment de vídeo",
      "whirl": "girar",
      "year": "any"
    },
    "palette": {
      "Motion": "Moviment",
      "Looks": "Aspecte",
      "Sound": "Sons",
      "Pen": "Llapis",
      "Data": "Dades",
      "variable": "variable",
      "list": "llista",
      "Events": "Esdeveniments",
      "Control": "Control",
      "Sensing": "Sensors",
      "Operators": "Operadors",
      "More Blocks": "Més Blocs",
      "Tips": "Consells"
    },
    "math": [
      "abs",
      "part sencera",
      "sostre",
      "arrel quadrada",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "ln",
      "log",
      "e ^",
      "10 ^"
    ],
    "osis": [
      "altres programes del personatge",
      "altres programes de l'escenari"
    ]
  },
  "de": {
    "aliases": {
      "drehe dich nach links um %n Grad": "turn @turnLeft %n degrees",
      "drehe dich nach rechts um %n Grad": "turn @turnRight %n degrees",
      "Wenn die grüne Flagge angeklickt": "when @greenFlag clicked",
      "Ende": "end"
    },
    "define": [
      "Definiere"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "gehe %n er-Schritt",
      "turn @turnRight %n degrees": "drehe dich @turnRight um %n Grad",
      "turn @turnLeft %n degrees": "drehe dich @turnLeft um %n Grad",
      "point in direction %d.direction": "setze Richtung auf %d.direction",
      "point towards %m.spriteOrMouse": "drehe dich zu %m.spriteOrMouse",
      "go to x:%n y:%n": "gehe zu x:%n y:%n",
      "go to %m.location": "gehe zu %m.location",
      "glide %n secs to x:%n y:%n": "gleite in %n Sek. zu x:%n y:%n",
      "change x by %n": "ändere x um %n",
      "set x to %n": "setze x auf %n",
      "change y by %n": "ändere y um %n",
      "set y to %n": "setze y auf %n",
      "set rotation style %m.rotationStyle": "setze Drehtyp auf %m.rotationStyle",
      "say %s for %n secs": "sage %s für %n Sek.",
      "say %s": "sage %s",
      "think %s for %n secs": "denke %s für %n Sek.",
      "think %s": "denke %s",
      "show": "zeige dich",
      "hide": "verstecke dich",
      "switch costume to %m.costume": "wechsle zu Kostüm %m.costume",
      "next costume": "nächstes Kostüm",
      "next backdrop": "nächstes Bühnenbild",
      "switch backdrop to %m.backdrop": "wechsle zu Bühnenbild %m.backdrop",
      "switch backdrop to %m.backdrop and wait": "wechsle zu Bühnenbild %m.backdrop und warte",
      "change %m.effect effect by %n": "ändere %m.effect-Effekt um %n",
      "set %m.effect effect to %n": "setze %m.effect-Effekt auf %n",
      "clear graphic effects": "schalte Grafikeffekte aus",
      "change size by %n": "ändere Größe um %n",
      "set size to %n%": "setze Größe auf %n%",
      "go to front": "komme nach vorn",
      "go back %n layers": "gehe %n Ebenen nach hinten",
      "play sound %m.sound": "spiele Klang %m.sound",
      "play sound %m.sound until done": "spiele Klang %m.sound ganz",
      "stop all sounds": "stoppe alle Klänge",
      "play drum %d.drum for %n beats": "spiele Schlaginstrument %d.drum für %n Schläge",
      "rest for %n beats": "pausiere %n Schläge",
      "play note %d.note for %n beats": "spiele Ton %d.note für %n Schläge",
      "set instrument to %d.instrument": "setze Instrument auf %d.instrument",
      "change volume by %n": "ändere Lautstärke um %n",
      "set volume to %n%": "setze Lautstärke auf %n%",
      "change tempo by %n": "ändere Tempo um %n",
      "set tempo to %n bpm": "setze Tempo auf %n Schläge/Min.",
      "clear": "wische Malspuren weg",
      "stamp": "hinterlasse Abdruck",
      "pen down": "schalte Stift ein",
      "pen up": "schalte Stift aus",
      "set pen color to %c": "setze Stiftfarbe auf %c",
      "change pen color by %n": "ändere Stiftfarbe um %n",
      "set pen color to %n": "setze Stiftfarbe auf %n",
      "change pen shade by %n": "ändere Farbschattierung um %n",
      "set pen shade to %n": "setze Farbschattierung auf %n",
      "change pen size by %n": "ändere Stiftdicke um %n",
      "set pen size to %n": "setze Stiftdicke auf %n",
      "when @greenFlag clicked": "Wenn @greenFlag angeklickt",
      "when %m.key key pressed": "Wenn Taste %m.key gedrückt",
      "when this sprite clicked": "Wenn ich angeklickt werde",
      "when backdrop switches to %m.backdrop": "Wenn das Bühnenbild zu %m.backdrop wechselt",
      "when %m.triggerSensor > %n": "Wenn %m.triggerSensor > %n",
      "when I receive %m.broadcast": "Wenn ich %m.broadcast empfange",
      "broadcast %m.broadcast": "sende %m.broadcast an alle",
      "broadcast %m.broadcast and wait": "sende %m.broadcast an alle und warte",
      "wait %n secs": "warte %n Sek.",
      "repeat %n": "wiederhole %n mal",
      "forever": "wiederhole fortlaufend",
      "if %b then": "falls %b dann",
      "wait until %b": "warte bis %b",
      "repeat until %b": "wiederhole bis %b",
      "stop %m.stop": "stoppe %m.stop",
      "when I start as a clone": "Wenn ich als Klon entstehe",
      "create clone of %m.spriteOnly": "erzeuge Klon von %m.spriteOnly",
      "delete this clone": "lösche diesen Klon",
      "ask %s and wait": "frage %s und warte",
      "turn video %m.videoState": "schalte Video %m.videoState",
      "set video transparency to %n%": "setze Video-Transparenz auf %n%",
      "reset timer": "setze Stoppuhr zurück",
      "set %m.var to %s": "setze %m.var auf %s",
      "change %m.var by %n": "ändere %m.var um %n",
      "show variable %m.var": "zeige Variable %m.var",
      "hide variable %m.var": "verstecke Variable %m.var",
      "add %s to %m.list": "füge %s zu %m.list hinzu",
      "delete %d.listDeleteItem of %m.list": "lösche %d.listDeleteItem aus %m.list",
      "if on edge, bounce": "pralle vom Rand ab",
      "insert %s at %d.listItem of %m.list": "füge %s als %d.listItem in %m.list ein",
      "replace item %d.listItem of %m.list with %s": "ersetze Element %d.listItem  von %m.list durch %s",
      "show list %m.list": "zeige Liste %m.list",
      "hide list %m.list": "verstecke Liste %m.list",
      "x position": "x-Position",
      "y position": "y-Position",
      "direction": "Richtung",
      "costume #": "Kostümnummer",
      "size": "Größe",
      "backdrop name": "Bühnenbildname",
      "backdrop #": "Bühnenbildnummer",
      "volume": "Lautstärke",
      "tempo": "Tempo",
      "touching %m.touching?": "wird %m.touching berührt?",
      "touching color %c?": "wird Farbe %c berührt?",
      "color %c is touching %c?": "Farbe %c berührt %c?",
      "distance to %m.spriteOrMouse": "Entfernung von %m.spriteOrMouse",
      "answer": "Antwort",
      "key %m.key pressed?": "Taste %m.key gedrückt?",
      "mouse down?": "Maustaste gedrückt?",
      "mouse x": "Maus x-Position",
      "mouse y": "Maus y-Position",
      "loudness": "Lautstärke",
      "video %m.videoMotionType on %m.stageOrThis": "Video %m.videoMotionType auf %m.stageOrThis",
      "timer": "Stoppuhr",
      "%m.attribute of %m.spriteOrStage": "%m.attribute von %m.spriteOrStage",
      "current %m.timeAndDate": "%m.timeAndDate im Moment",
      "days since 2000": "Tage seit 2000",
      "username": "Benutzername",
      "pick random %n to %n": "Zufallszahl von %n bis %n",
      "%b and %b": "%b und %b",
      "%b or %b": "%b oder %b",
      "not %b": "nicht %b",
      "join %s %s": "verbinde %s %s",
      "letter %n of %s": "Zeichen %n von %s",
      "length of %s": "Länge von %s",
      "%n mod %n": "%n mod %n",
      "round %n": "%n gerundet",
      "%m.mathOp of %n": "%m.mathOp von %n",
      "item %d.listItem of %m.list": "Element %d.listItem von %m.list",
      "length of %m.list": "Länge von %m.list",
      "%m.list contains %s?": "%m.list enthält %s?",
      "when %m.booleanSensor": "Wenn %m.booleanSensor",
      "when %m.sensor %m.lessMore %n": "Wenn %m.sensor %m.lessMore %n",
      "sensor %m.booleanSensor?": "Sensor %m.booleanSensor?",
      "%m.sensor sensor value": "Wert von Sensor %m.sensor",
      "turn %m.motor on for %n secs": "schalte %m.motor für %n Sekunden an",
      "turn %m.motor on": "schalte %m.motor an",
      "turn %m.motor off": "schalte %m.motor aus",
      "set %m.motor power to %n": "setze Leistung von %m.motor auf %n",
      "set %m.motor2 direction to %m.motorDirection": "setze Drehrichtung von %m.motor2 auf %m.motorDirection",
      "when distance %m.lessMore %n": "Wenn Abstand %m.lessMore %n",
      "when tilt %m.eNe %n": "Wenn Neigung %m.eNe %n",
      "distance": "Abstand",
      "tilt": "Neigung",
      "else": "sonst",
      "end": "Ende"
    },
    "dropdowns": {
      "A connected": "A angeschlossen",
      "all": "alles",
      "all around": "rundherum",
      "B connected": "B angeschlossen",
      "brightness": "Helligkeit",
      "button pressed": "Schalter gedrückt",
      "C connected": "C angeschlossen",
      "color": "Farbe",
      "costume name": "Kostümname",
      "D connected": "D angeschlossen",
      "date": "Datum",
      "day of week": "Wochentag",
      "don't rotate": "nicht drehen",
      "down arrow": "Pfeil nach unten",
      "edge": "Rand",
      "fisheye": "Fischauge",
      "ghost": "Durchsichtigkeit",
      "hour": "Stunde",
      "left arrow": "Pfeil nach links",
      "left-right": "links-rechts",
      "light": "Helligkeit",
      "minute": "Minute",
      "month": "Monat",
      "mosaic": "Mosaik",
      "motion": "Bewegung",
      "mouse-pointer": "Mauszeiger",
      "myself": "mir selbst",
      "off": "aus",
      "on": "an",
      "on-flipped": "an-gespiegelt",
      "other scripts in sprite": "andere Skripte der Figur",
      "pixelate": "Pixel",
      "previous backdrop": "vorheriges Bühnenbild",
      "resistance-A": "Widerstand-A",
      "resistance-B": "Widerstand-B",
      "resistance-C": "Widerstand-C",
      "resistance-D": "Widerstand-D",
      "reverse": "umkehren",
      "right arrow": "Pfeil nach rechts",
      "second": "Sekunde",
      "slider": "Schieberegler",
      "sound": "Lautstärke",
      "space": "Leertaste",
      "Stage": "Bühne",
      "that way": "linksherum",
      "this script": "dieses Skript",
      "this sprite": "diese Figur",
      "this way": "rechtsherum",
      "up arrow": "Pfeil nach oben",
      "video motion": "Videobewegung",
      "whirl": "Wirbel",
      "year": "Jahr"
    },
    "palette": {
      "Motion": "Bewegung",
      "Looks": "Aussehen",
      "Sound": "Klang",
      "Pen": "Malstift",
      "Data": "Daten",
      "variable": "Variable",
      "list": "Liste",
      "Events": "Ereignisse",
      "Control": "Steuerung",
      "Sensing": "Fühlen",
      "Operators": "Operatoren",
      "More Blocks": "Weitere Blöcke",
      "Tips": "Tipps"
    },
    "math": [
      "Betrag",
      "abrunden",
      "aufrunden",
      "Wurzel",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "ln",
      "log",
      "e^",
      "10^"
    ],
    "osis": [
      "andere Skripte der Figur",
      "andere Skripte der Bühne"
    ]
  },
  "el": {
    "aliases": {
      "στρίψε αριστερά %n μοίρες": "turn @turnLeft %n degrees",
      "στρίψε αριστερόστροφα %n μοίρες": "turn @turnLeft %n degrees",
      "στρίψε δεξιά %n μοίρες": "turn @turnRight %n degrees",
      "στρίψε δεξιόστροφα %n μοίρες": "turn @turnRight %n degrees",
      "Όταν στην πράσινη σημαία γίνει κλικ": "when @greenFlag clicked",
      "τέλος": "end"
    },
    "define": [
      "ορισμός του"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "κινήσου %n βήματα",
      "turn @turnRight %n degrees": "στρίψε @turnRight %n μοίρες",
      "turn @turnLeft %n degrees": "στρίψε @turnLeft %n μοίρες",
      "point in direction %d.direction": "στρίψε προς την κατεύθυνση των %d.direction μοιρών",
      "point towards %m.spriteOrMouse": "στρίψε προς το %m.spriteOrMouse",
      "go to x:%n y:%n": "πήγαινε στη θέση x:%n και y:%n",
      "go to %m.location": "πήγαινε στη θέση του %m.location",
      "glide %n secs to x:%n y:%n": "πήγαινε αργά για %n δευτ. στη θέση x:%n και y:%n",
      "change x by %n": "άλλαξε το x κατά %n",
      "set x to %n": "όρισε το x ίσο με %n",
      "change y by %n": "άλλαξε το y κατά %n",
      "set y to %n": "όρισε το y ίσο με %n",
      "set rotation style %m.rotationStyle": "όρισε τον άξονα περιστροφής σε %m.rotationStyle",
      "say %s for %n secs": "πες %s για %n δευτερόλεπτα",
      "say %s": "πες %s",
      "think %s for %n secs": "σκέψου %s για %n δευτερόλεπτα",
      "think %s": "σκέψου %s",
      "show": "εμφανίσου",
      "hide": "εξαφανίσου",
      "switch costume to %m.costume": "άλλαξε την ενδυμασία σε %m.costume",
      "next costume": "άλλαξε στην επόμενη ενδυμασία",
      "next backdrop": "άλλαξε στο επόμενο υπόβαθρο",
      "switch backdrop to %m.backdrop": "άλλαξε το υπόβαθρο σε %m.backdrop",
      "switch backdrop to %m.backdrop and wait": "άλλαξε το υπόβαθρο σε %m.backdrop και περίμενε",
      "change %m.effect effect by %n": "άλλαξε το εφέ %m.effect κατά %n",
      "set %m.effect effect to %n": "όρισε το εφέ %m.effect σε %n",
      "clear graphic effects": "επανάφερε τα γραφικά εφέ",
      "change size by %n": "άλλαξε το μέγεθος του αντικειμένου κατά %n",
      "set size to %n%": "όρισε το μέγεθος του αντικειμένου σε %n%",
      "go to front": "πήγαινε στην μπροστινή στρώση",
      "go back %n layers": "πήγαινε πίσω %n επίπεδα",
      "play sound %m.sound": "παίξε τον ήχο %m.sound",
      "play sound %m.sound until done": "παίξε τον ήχο %m.sound μέχρι το τέλος",
      "stop all sounds": "σταμάτησε όλους τους ήχους",
      "play drum %d.drum for %n beats": "παίξε το τύμπανο %d.drum για %n χρόνους",
      "rest for %n beats": "περίμενε για %n χρόνους",
      "play note %d.note for %n beats": "παίξε τη νότα %d.note για %n χρόνους",
      "set instrument to %d.instrument": "όρισε το μουσικό όργανο σε %d.instrument",
      "change volume by %n": "άλλαξε την ένταση κατά %n",
      "set volume to %n%": "όρισε την ένταση σε %n%",
      "change tempo by %n": "άλλαξε το ρυθμό κατά %n",
      "set tempo to %n bpm": "όρισε το ρυθμό σε %n χτύπους το λεπτό",
      "clear": "καθάρισε",
      "stamp": "κάνε μία στάμπα",
      "pen down": "κατέβασε την πένα",
      "pen up": "σήκωσε την πένα",
      "set pen color to %c": "όρισε το χρώμα πένας σε %c",
      "change pen color by %n": "άλλαξε το χρώμα της πένας κατά %n",
      "set pen color to %n": "όρισε το χρώμα πένας σε %n",
      "change pen shade by %n": "άλλαξε τη σκιά της πένας κατά %n",
      "set pen shade to %n": "όρισε τη σκιά πένας σε %n",
      "change pen size by %n": "άλλαξε το μέγεθος της πένας κατά %n",
      "set pen size to %n": "όρισε το μέγεθος πένας σε %n",
      "when @greenFlag clicked": "Όταν στο @greenFlag γίνει κλίκ",
      "when %m.key key pressed": "Όταν το πλήκτρο %m.key πατηθεί",
      "when this sprite clicked": "Όταν σε αυτό το αντικείμενο γίνει κλικ",
      "when backdrop switches to %m.backdrop": "Όταν το υπόβαθρο αλλάξει σε %m.backdrop",
      "when %m.triggerSensor > %n": "Όταν %m.triggerSensor > %n",
      "when I receive %m.broadcast": "Όταν λάβω το %m.broadcast",
      "broadcast %m.broadcast": "μετάδωσε %m.broadcast",
      "broadcast %m.broadcast and wait": "μετάδωσε το %m.broadcast και περίμενε",
      "wait %n secs": "περίμενε %n δευτερόλεπτα",
      "repeat %n": "επανάλαβε %n",
      "forever": "για πάντα",
      "if %b then": "εάν %b τότε",
      "wait until %b": "περίμενε ώσπου %b",
      "repeat until %b": "επανάλαβε ώσπου %b",
      "stop %m.stop": "σταμάτησε %m.stop",
      "when I start as a clone": "Όταν ξεκινήσει ο κλώνος",
      "create clone of %m.spriteOnly": "δημιούργησε έναν κλώνο του %m.spriteOnly",
      "delete this clone": "διάγραψε αυτόν τον κλώνο",
      "ask %s and wait": "ρώτησε %s και περίμενε",
      "turn video %m.videoState": "%m.videoState την προβολή κάμερας",
      "set video transparency to %n%": "όρισε τη διαφάνεια προβολής κάμερας σε %n%",
      "reset timer": "μηδένισε τη χρονομέτρηση",
      "set %m.var to %s": "όρισε το %m.var σε %s",
      "change %m.var by %n": "άλλαξε το %m.var κατά %n",
      "show variable %m.var": "εμφάνισε τη μεταβλητή %m.var",
      "hide variable %m.var": "απόκρυψε τη μεταβλητή %m.var",
      "add %s to %m.list": "πρόσθεσε το %s στη λίστα %m.list",
      "delete %d.listDeleteItem of %m.list": "διάγραψε το %d.listDeleteItem από το %m.list",
      "if on edge, bounce": "εάν βρίσκεσαι στα όρια, αναπήδησε",
      "insert %s at %d.listItem of %m.list": "βάλε το %s στη θέση %d.listItem της λίστας %m.list",
      "replace item %d.listItem of %m.list with %s": "αντικατάστησε το στοιχείο %d.listItem της λίστας %m.list με %s",
      "show list %m.list": "εμφάνισε την λίστα %m.list",
      "hide list %m.list": "απόκρυψε τη λίστα %m.list",
      "x position": "θέση του x",
      "y position": "θέση του y",
      "direction": "κατεύθυνση",
      "costume #": "ενδυμασία #",
      "size": "μέγεθος",
      "backdrop name": "όνομα υποβάθρου",
      "backdrop #": "υπόβαθρο #",
      "volume": "ένταση",
      "tempo": "ρυθμός",
      "touching %m.touching?": "αγγίζει το %m.touching",
      "touching color %c?": "αγγίζει το χρώμα %c",
      "color %c is touching %c?": "το χρώμα %c αγγίζει το χρώμα %c",
      "distance to %m.spriteOrMouse": "η απόσταση μέχρι το %m.spriteOrMouse",
      "answer": "απάντηση",
      "key %m.key pressed?": "πατήθηκε το πλήκτρο %m.key",
      "mouse down?": "πατήθηκε το ποντίκι",
      "mouse x": "θέση x του ποντικιού",
      "mouse y": "θέση y του ποντικιού",
      "loudness": "ένταση",
      "video %m.videoMotionType on %m.stageOrThis": "%m.videoMotionType προβολής κάμερας στο %m.stageOrThis",
      "timer": "χρονόμετρο",
      "%m.attribute of %m.spriteOrStage": "%m.attribute από %m.spriteOrStage",
      "current %m.timeAndDate": "%m.timeAndDate ",
      "days since 2000": "ημέρες από το 2000",
      "username": "Όνομα χρήστη",
      "pick random %n to %n": "επίλεξε έναν τυχαίο αριθμό από το %n μέχρι το %n",
      "%b and %b": "%b και %b",
      "%b or %b": "%b ή %b",
      "not %b": "δεν ισχύει ότι %b",
      "join %s %s": "ένωσε το %s με το %s",
      "letter %n of %s": "το %n ° γράμμα του %s",
      "length of %s": "το μήκος του %s",
      "%n mod %n": "%n mod %n",
      "round %n": "στρογγυλοποίησε το %n",
      "%m.mathOp of %n": "%m.mathOp από %n",
      "item %d.listItem of %m.list": "το στοιχείο %d.listItem της λίστας %m.list",
      "length of %m.list": "το μήκος της λίστας %m.list",
      "%m.list contains %s?": "Η λίστα %m.list περιέχει %s",
      "when %m.booleanSensor": "όταν %m.booleanSensor",
      "when %m.sensor %m.lessMore %n": "όταν ο αισθητήρας %m.sensor είναι %m.lessMore %n",
      "sensor %m.booleanSensor?": "αισθητήρας %m.booleanSensor",
      "%m.sensor sensor value": "τιμή αισθητήρα %m.sensor",
      "turn %m.motor on for %n secs": "ενεργοποίησε τον κινητήρα %m.motor για %n δευτερόλεπτα",
      "turn %m.motor on": "ενεργοποίησε τον κινητήρα %m.motor",
      "turn %m.motor off": "απενεργοποίησε τον κινητήρα %m.motor",
      "set %m.motor power to %n": "όρισε την ισχύ κινητήρα σε %n",
      "when distance %m.lessMore %n": "όταν η απόσταση είναι  %m.lessMore %n",
      "when tilt %m.eNe %n": "όταν γέρνει %m.eNe %n",
      "distance": "απόσταση",
      "tilt": "κλίση",
      "else": "αλλιώς",
      "end": "τέλος"
    },
    "dropdowns": {
      "A connected": "το Α είναι συνδεδεμένο",
      "all": "όλα",
      "all around": "ελεύθερο",
      "B connected": "το B είναι συνδεδεμένο",
      "brightness": "φωτεινότητας",
      "button pressed": "πατήθηκε το κουμπί",
      "C connected": "το C είναι συνδεδεμένο",
      "color": "χρώματος",
      "costume name": "Όνομα ενδυμασίας",
      "D connected": "το D είναι συνδεδεμένο",
      "date": "ημερομηνία",
      "day of week": "μέρα της εβδομάδας",
      "don't rotate": "[να μην γίνεται περιστροφή]",
      "down arrow": "κάτω βέλος",
      "edge": "όρια",
      "fisheye": "κυρτότητας",
      "ghost": "εξαφάνισης",
      "hour": "ώρα",
      "left arrow": "αριστερό βέλος",
      "left-right": "οριζόντιο",
      "light": "φως",
      "minute": "λεπτό",
      "month": "μήνας",
      "mosaic": "ψηφιδωτού",
      "motion": "κίνηση",
      "mouse-pointer": "δείκτη του ποντικιού",
      "myself": "εαυτού μου",
      "off": "Απενεργοποίησε",
      "on": "Ενεργοποίησε",
      "on-flipped": "καθρεφτισμένο",
      "other scripts in sprite": "Άλλα σενάρια στο αντικείμενο αυτό",
      "pixelate": "εικονοστοιχειοποίησης",
      "resistance-A": "Αντίσταση-Α",
      "resistance-B": "Αντίσταση-Β",
      "resistance-C": "Αντίσταση-C",
      "resistance-D": "Αντίσταση-D",
      "reverse": "Αντιστροφή",
      "right arrow": "δεξί βέλος",
      "second": "δευτερόλεπτο",
      "slider": "Γραμμή κύλισης",
      "sound": "Ήχος",
      "space": "space",
      "Stage": "Σκηνικό",
      "that way": "προς εκείνη την κατεύθυνση",
      "this script": "αυτό το σενάριο",
      "this sprite": "αντικείμενο αυτό",
      "this way": "προς αυτήν την κατεύθυνση",
      "up arrow": "Πάνω βέλος",
      "video motion": "κίνηση στην προβολή από κάμερα",
      "whirl": "περιστροφής",
      "year": "χρόνος"
    },
    "palette": {
      "Motion": "Κινήσεις",
      "Looks": "Όψεις",
      "Sound": "Ήχοι",
      "Pen": "Σχεδιασμοί Πένας",
      "Data": "Δεδομένα",
      "variable": "Μεταβλητή",
      "list": "Λίστα",
      "Events": "Συμβάντα",
      "Control": "Έλεγχος",
      "Sensing": "Αισθητήρες",
      "Operators": "Τελεστές",
      "More Blocks": "Άλλες Εντολές",
      "Tips": "Συμβουλές"
    },
    "math": [
      "ΑπόλυτηΤιμή",
      "floor",
      "ceiling",
      "ΤετΡίζα",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "ln",
      "log",
      "e ^",
      "10 ^"
    ],
    "osis": [
      "Άλλα σενάρια στο αντικείμενο αυτό",
      "Άλλα σενάρια στο αντικείμενο αυτό"
    ]
  },
  "es": {
    "aliases": {
      "girar a la izquierda %n grados": "turn @turnLeft %n degrees",
      "girar a la derecha %n grados": "turn @turnRight %n degrees",
      "al presionar bandera verde": "when @greenFlag clicked",
      "fin": "end"
    },
    "define": [
      "definir"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "mover %n pasos",
      "turn @turnRight %n degrees": "girar @turnRight %n grados",
      "turn @turnLeft %n degrees": "girar @turnLeft %n grados",
      "point in direction %d.direction": "apuntar en dirección %d.direction",
      "point towards %m.spriteOrMouse": "apuntar hacia %m.spriteOrMouse",
      "go to x:%n y:%n": "ir a x:%n y:%n",
      "go to %m.location": "ir a %m.location",
      "glide %n secs to x:%n y:%n": "deslizar en %n segs a x:%n y:%n",
      "change x by %n": "cambiar x por %n",
      "set x to %n": "fijar x a %n",
      "change y by %n": "cambiar y por %n",
      "set y to %n": "fijar y a %n",
      "set rotation style %m.rotationStyle": "fijar estilo de rotación %m.rotationStyle",
      "say %s for %n secs": "decir %s por %n segundos",
      "say %s": "decir %s",
      "think %s for %n secs": "pensar %s por %n segundos",
      "think %s": "pensar %s",
      "show": "mostrar",
      "hide": "esconder",
      "switch costume to %m.costume": "cambiar disfraz a %m.costume",
      "next costume": "siguiente disfraz",
      "next backdrop": "siguiente fondo",
      "switch backdrop to %m.backdrop": "cambiar fondo a %m.backdrop",
      "switch backdrop to %m.backdrop and wait": "cambiar fondo a %m.backdrop y esperar",
      "change %m.effect effect by %n": "cambiar efecto %m.effect por %n",
      "set %m.effect effect to %n": "establecer efecto %m.effect a %n",
      "clear graphic effects": "quitar efectos gráficos",
      "change size by %n": "cambiar tamaño por %n",
      "set size to %n%": "fijar tamaño a %n%",
      "go to front": "enviar al frente",
      "go back %n layers": "ir %n capas hacia atrás",
      "play sound %m.sound": "tocar sonido %m.sound",
      "play sound %m.sound until done": "tocar sonido %m.sound y esperar",
      "stop all sounds": "detener todos los sonidos",
      "play drum %d.drum for %n beats": "tocar tambor %d.drum durante %n pulsos",
      "rest for %n beats": "silencio por %n pulsos",
      "play note %d.note for %n beats": "tocar nota %d.note durante %n pulsos",
      "set instrument to %d.instrument": "fijar instrumento a %d.instrument",
      "change volume by %n": "cambiar volumen por %n",
      "set volume to %n%": "fijar volumen a %n%",
      "change tempo by %n": "cambiar tempo por %n",
      "set tempo to %n bpm": "fijar tempo a %n ppm",
      "clear": "borrar",
      "stamp": "sellar",
      "pen down": "bajar lápiz",
      "pen up": "subir lápiz",
      "set pen color to %c": "fijar color de lápiz a %c",
      "change pen color by %n": "cambiar color del lápiz por %n",
      "set pen color to %n": "fijar color de lápiz a %n",
      "change pen shade by %n": "cambiar intensidad de lápiz por %n",
      "set pen shade to %n": "fijar intensidad de lápiz a %n",
      "change pen size by %n": "cambiar tamaño de lápiz por %n",
      "set pen size to %n": "fijar tamaño de lápiz a %n",
      "when @greenFlag clicked": "al presionar @greenFlag",
      "when %m.key key pressed": "al presionar tecla %m.key",
      "when this sprite clicked": "al hacer clic en este objeto",
      "when backdrop switches to %m.backdrop": "cuando el fondo cambie a %m.backdrop",
      "when %m.triggerSensor > %n": "cuando %m.triggerSensor sea > %n",
      "when I receive %m.broadcast": "al recibir %m.broadcast",
      "broadcast %m.broadcast": "enviar %m.broadcast",
      "broadcast %m.broadcast and wait": "enviar %m.broadcast y esperar",
      "wait %n secs": "esperar %n segundos",
      "repeat %n": "repetir %n",
      "forever": "por siempre",
      "if %b then": "si %b entonces",
      "wait until %b": "esperar hasta que %b",
      "repeat until %b": "repetir hasta que %b",
      "stop %m.stop": "detener %m.stop",
      "when I start as a clone": "al comenzar como clon",
      "create clone of %m.spriteOnly": "crear clon de %m.spriteOnly",
      "delete this clone": "borrar este clon",
      "ask %s and wait": "preguntar %s y esperar",
      "turn video %m.videoState": "video %m.videoState",
      "set video transparency to %n%": "fijar transparencia de video a %n%",
      "reset timer": "reiniciar cronómetro",
      "set %m.var to %s": "fijar %m.var a %s",
      "change %m.var by %n": "cambiar %m.var por %n",
      "show variable %m.var": "mostrar variable %m.var",
      "hide variable %m.var": "esconder variable %m.var",
      "add %s to %m.list": "añade %s a %m.list",
      "delete %d.listDeleteItem of %m.list": "borrar %d.listDeleteItem de %m.list",
      "if on edge, bounce": "rebotar si toca un borde",
      "insert %s at %d.listItem of %m.list": "insertar %s en %d.listItem de %m.list",
      "replace item %d.listItem of %m.list with %s": "reemplazar elemento %d.listItem de %m.list con %s",
      "show list %m.list": "mostrar lista %m.list",
      "hide list %m.list": "esconder lista %m.list",
      "x position": "posición en x",
      "y position": "posición en y",
      "direction": "dirección",
      "costume #": "# de disfraz",
      "size": "tamaño",
      "backdrop name": "nombre de fondo",
      "backdrop #": "# de fondo",
      "volume": "volumen",
      "tempo": "tempo",
      "touching %m.touching?": "¿tocando %m.touching?",
      "touching color %c?": "¿tocando el color %c?",
      "color %c is touching %c?": "¿color %c tocando %c?",
      "distance to %m.spriteOrMouse": "distancia a %m.spriteOrMouse",
      "answer": "respuesta",
      "key %m.key pressed?": "¿tecla %m.key presionada?",
      "mouse down?": "¿ratón presionado?",
      "mouse x": "posición x del ratón",
      "mouse y": "posición y del ratón",
      "loudness": "volumen del sonido",
      "video %m.videoMotionType on %m.stageOrThis": "%m.videoMotionType del video en %m.stageOrThis",
      "timer": "cronómetro",
      "%m.attribute of %m.spriteOrStage": "%m.attribute de %m.spriteOrStage",
      "current %m.timeAndDate": "%m.timeAndDate actual",
      "days since 2000": "días desde el 2000",
      "username": "nombre de usuario",
      "pick random %n to %n": "número al azar entre %n y %n",
      "%b and %b": "%b y %b",
      "%b or %b": "%b o %b",
      "not %b": "no %b",
      "join %s %s": "unir %s %s",
      "letter %n of %s": "letra %n de %s",
      "length of %s": "longitud de %s",
      "%n mod %n": "%n mod %n",
      "round %n": "redondear %n",
      "%m.mathOp of %n": "%m.mathOp de %n",
      "item %d.listItem of %m.list": "elemento %d.listItem de %m.list",
      "length of %m.list": "longitud de %m.list",
      "%m.list contains %s?": "%m.list contiene %s?",
      "when %m.booleanSensor": "cuando %m.booleanSensor",
      "when %m.sensor %m.lessMore %n": "cuando %m.sensor sea %m.lessMore %n",
      "sensor %m.booleanSensor?": "¿sensor %m.booleanSensor activado?",
      "%m.sensor sensor value": "valor del sensor %m.sensor",
      "turn %m.motor on for %n secs": "encender %m.motor por %n segundos",
      "turn %m.motor on": "encender %m.motor",
      "turn %m.motor off": "apagar %m.motor",
      "set %m.motor power to %n": "fijar fuerza del %m.motor a %n",
      "set %m.motor2 direction to %m.motorDirection": "fijar dirección del %m.motor2 a %m.motorDirection",
      "when distance %m.lessMore %n": "cuando la distancia sea %m.lessMore %n",
      "when tilt %m.eNe %n": "cuando inclinación sea %m.eNe %n",
      "distance": "distancia",
      "tilt": "inclinación",
      "else": "si no",
      "end": "fin"
    },
    "dropdowns": {
      "A connected": "A conectado",
      "all": "todos",
      "all around": "en todas direcciones",
      "B connected": "B conectado",
      "brightness": "brillantez",
      "button pressed": "botón presionado",
      "C connected": "C conectado",
      "color": "color",
      "costume name": "nombre del disfraz",
      "D connected": "D conectado",
      "date": "fecha",
      "day of week": "día de la semana",
      "don't rotate": "no rotar",
      "down arrow": "flecha abajo",
      "edge": "borde",
      "fisheye": "ojo de pez",
      "ghost": "desvanecer",
      "hour": "hora",
      "left arrow": "flecha izquierda",
      "left-right": "izquierda-derecha",
      "light": "luz",
      "minute": "minuto",
      "month": "mes",
      "mosaic": "mosaico",
      "motion": "movimiento",
      "mouse-pointer": "puntero del ratón",
      "myself": "mí mismo",
      "off": "apagado",
      "on": "encendido",
      "on-flipped": "encendido e invertido",
      "other scripts in sprite": "otros programas en el objeto",
      "pixelate": "pixelizar",
      "previous backdrop": "fondo anterior",
      "resistance-A": "resistencia-A",
      "resistance-B": "resistencia-B",
      "resistance-C": "resistencia-C",
      "resistance-D": "resistencia-D",
      "reverse": "reversa",
      "right arrow": "flecha derecha",
      "second": "segundo",
      "slider": "deslizador",
      "sound": "sonido",
      "space": "espacio",
      "Stage": "Escenario",
      "that way": "hacia allá",
      "this script": "este programa",
      "this sprite": "este objeto",
      "this way": "hacia acá",
      "up arrow": "flecha arriba",
      "video motion": "movimiento del video",
      "whirl": "remolino",
      "year": "año"
    },
    "palette": {
      "Motion": "Movimiento",
      "Looks": "Apariencia",
      "Sound": "Sonido",
      "Pen": "Lápiz",
      "Data": "Datos",
      "variable": "variable",
      "list": "lista",
      "Events": "Eventos",
      "Control": "Control",
      "Sensing": "Sensores",
      "Operators": "Operadores",
      "More Blocks": "Más Bloques",
      "Tips": "Sugerencias"
    },
    "math": [
      "abs",
      "piso",
      "techo",
      "raíz cuadrada",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "En",
      "log",
      "e ^",
      "10 ^"
    ],
    "osis": [
      "otros programas en el objeto",
      "otros programas en el escenario"
    ]
  },
  "fr": {
    "aliases": {
      "tourner gauche de %n degrés": "turn @turnLeft %n degrees",
      "tourner droite de %n degrés": "turn @turnRight %n degrees",
      "quand le drapeau vert pressé": "when @greenFlag clicked",
      "fin": "end"
    },
    "define": [
      "définir"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "avancer de %n ",
      "turn @turnRight %n degrees": "tourner @turnRight de %n degrés",
      "turn @turnLeft %n degrees": "tourner @turnLeft de %n degrés",
      "point in direction %d.direction": "s'orienter à %d.direction",
      "point towards %m.spriteOrMouse": "s'orienter vers %m.spriteOrMouse",
      "go to x:%n y:%n": "aller à x:%n y:%n",
      "go to %m.location": "aller à %m.location",
      "glide %n secs to x:%n y:%n": "glisser en %n secondes à x:%n y:%n",
      "change x by %n": "ajouter %n à x",
      "set x to %n": "donner la valeur %n à x",
      "change y by %n": "ajouter %n à y",
      "set y to %n": "donner la valeur %n à y",
      "set rotation style %m.rotationStyle": "fixer le sens de rotation %m.rotationStyle",
      "say %s for %n secs": "dire %s pendant %n secondes",
      "say %s": "dire %s",
      "think %s for %n secs": "penser à %s pendant %n secondes",
      "think %s": "penser à %s",
      "show": "montrer",
      "hide": "cacher",
      "switch costume to %m.costume": "basculer sur le costume %m.costume",
      "next costume": "costume suivant",
      "next backdrop": "arrière-plan suivant",
      "switch backdrop to %m.backdrop": "basculer sur l'arrière-plan %m.backdrop",
      "switch backdrop to %m.backdrop and wait": "basculer sur l'arrière-plan %m.backdrop et attendre",
      "change %m.effect effect by %n": "changer l'effet %m.effect par %n",
      "set %m.effect effect to %n": "mettre l'effet %m.effect à %n",
      "clear graphic effects": "annuler les effets graphiques",
      "change size by %n": "ajouter %n à la taille",
      "set size to %n%": "mettre à %n % de la taille initiale",
      "go to front": "aller au premier plan",
      "go back %n layers": "déplacer de %n plans arrière",
      "play sound %m.sound": "jouer le son %m.sound",
      "play sound %m.sound until done": "jouer le son %m.sound jusqu'au bout",
      "stop all sounds": "arrêter tous les sons",
      "play drum %d.drum for %n beats": "jouer du tambour %d.drum pendant %n temps",
      "rest for %n beats": "faire une pause pour %n temps",
      "play note %d.note for %n beats": "jouer la note %d.note pendant %n temps",
      "set instrument to %d.instrument": "choisir l'instrument n° %d.instrument",
      "change volume by %n": "ajouter %n au volume",
      "set volume to %n%": "mettre le volume au niveau %n%",
      "change tempo by %n": "ajouter %n au tempo",
      "set tempo to %n bpm": "mettre le tempo à %n bpm",
      "clear": "effacer tout",
      "stamp": "estampiller",
      "pen down": "stylo en position d'écriture",
      "pen up": "relever le stylo",
      "set pen color to %c": "mettre la couleur du stylo à %c",
      "change pen color by %n": "ajouter %n à la couleur du stylo",
      "set pen color to %n": "mettre la couleur du stylo à %n",
      "change pen shade by %n": "ajouter %n à l'intensité du stylo",
      "set pen shade to %n": "mettre l'intensité du stylo à %n",
      "change pen size by %n": "ajouter %n à la taille du stylo",
      "set pen size to %n": "mettre la taille du stylo à %n",
      "when @greenFlag clicked": "quand @greenFlag est cliqué",
      "when %m.key key pressed": "quand %m.key est pressé",
      "when this sprite clicked": "quand ce lutin est cliqué",
      "when backdrop switches to %m.backdrop": "quand l'arrière-plan bascule sur %m.backdrop",
      "when %m.triggerSensor > %n": "quand %m.triggerSensor > %n",
      "when I receive %m.broadcast": "quand je reçois %m.broadcast",
      "broadcast %m.broadcast": "envoyer à tous %m.broadcast",
      "broadcast %m.broadcast and wait": "envoyer à tous %m.broadcast et attendre",
      "wait %n secs": "attendre %n secondes",
      "repeat %n": "répéter %n fois",
      "forever": "répéter indéfiniment",
      "if %b then": "si %b alors",
      "wait until %b": "attendre jusqu’à %b",
      "repeat until %b": "répéter jusqu’à %b",
      "stop %m.stop": "stop %m.stop",
      "when I start as a clone": "quand je commence comme un clone",
      "create clone of %m.spriteOnly": "créer un clone de %m.spriteOnly",
      "delete this clone": "supprimer ce clone",
      "ask %s and wait": "demander %s et attendre",
      "turn video %m.videoState": "activer la vidéo %m.videoState",
      "set video transparency to %n%": "mettre la transparence vidéo à %n%",
      "reset timer": "réinitialiser le chronomètre",
      "set %m.var to %s": "mettre %m.var à %s",
      "change %m.var by %n": "changer %m.var par %n",
      "show variable %m.var": "montrer la variable %m.var",
      "hide variable %m.var": "cacher la variable %m.var",
      "add %s to %m.list": "ajouter %s à %m.list",
      "delete %d.listDeleteItem of %m.list": "supprimer l'élément %d.listDeleteItem de la liste %m.list",
      "if on edge, bounce": "rebondir si le bord est atteint",
      "insert %s at %d.listItem of %m.list": "insérer %s en position %d.listItem de la liste %m.list",
      "replace item %d.listItem of %m.list with %s": "remplacer l'élément %d.listItem de la liste %m.list par %s",
      "show list %m.list": "montrer la liste %m.list",
      "hide list %m.list": "cacher la liste %m.list",
      "x position": "abscisse x",
      "y position": "ordonnée y",
      "direction": "direction",
      "costume #": "costume #",
      "size": "taille",
      "backdrop name": "nom de l'arrière-plan",
      "backdrop #": "arrière-plan #",
      "volume": "volume",
      "tempo": "tempo",
      "touching %m.touching?": "%m.touching touché?",
      "touching color %c?": "couleur %c touchée?",
      "color %c is touching %c?": "couleur %c touche %c?",
      "distance to %m.spriteOrMouse": "distance de %m.spriteOrMouse",
      "answer": "réponse",
      "key %m.key pressed?": "touche %m.key pressée?",
      "mouse down?": "souris pressée?",
      "mouse x": "souris x",
      "mouse y": "souris y",
      "loudness": "volume sonore",
      "video %m.videoMotionType on %m.stageOrThis": "video %m.videoMotionType sur %m.stageOrThis",
      "timer": "chronomètre",
      "%m.attribute of %m.spriteOrStage": "%m.attribut de %m.spriteOrStage",
      "current %m.timeAndDate": "actuel %m.timeAndDate",
      "days since 2000": "jours depuis 2000",
      "username": "nom d'utilisateur",
      "pick random %n to %n": "nombre aléatoire entre %n et %n",
      "%b and %b": "%b et %b",
      "%b or %b": "%b ou %b",
      "not %b": "non %b",
      "join %s %s": "regroupe %s %s",
      "letter %n of %s": "lettre %n de %s",
      "length of %s": "longueur de %s",
      "%n mod %n": "%n modulo %n",
      "round %n": "arrondi de %n",
      "%m.mathOp of %n": "%m.mathOp de %n",
      "item %d.listItem of %m.list": "élément %d.listItem de %m.list",
      "length of %m.list": "longueur de %m.list",
      "%m.list contains %s?": "%m.list contient %s?",
      "when %m.booleanSensor": "quand %m.booleanSensor",
      "when %m.sensor %m.lessMore %n": "quand %m.sensor %m.lessMore %n",
      "sensor %m.booleanSensor?": "capteur %m.booleanSensor activé?",
      "%m.sensor sensor value": "valeur du capteur %m.sensor",
      "turn %m.motor on for %n secs": "allumer le %m.motor pour %n secs",
      "turn %m.motor on": "allumer le %m.motor",
      "turn %m.motor off": "arrêter le %m.motor",
      "set %m.motor power to %n": "fixer %m.motor à la puissance %n",
      "set %m.motor2 direction to %m.motorDirection": "fixer la direction de %m.motor2 en sens %m.motorDirection",
      "when distance %m.lessMore %n": "quand la distance %m.lessMore %n",
      "when tilt %m.eNe %n": "quand l'inclinaison %m.eNe %n",
      "distance": "distance",
      "tilt": "inclinaison",
      "else": "sinon",
      "end": "fin"
    },
    "dropdowns": {
      "A connected": "A connecté",
      "all": "tout",
      "all around": "à 360°",
      "B connected": "B connecté",
      "brightness": "luminosité",
      "button pressed": "bouton pressé",
      "C connected": "C connecté",
      "color": "couleur",
      "costume name": "nom du costume",
      "D connected": "D connecté",
      "date": "date",
      "day of week": "jour de la semaine",
      "don't rotate": "ne pivote pas",
      "down arrow": "flèche bas",
      "edge": "bord",
      "fisheye": "oeil de poisson",
      "ghost": "fantôme",
      "hour": "heure",
      "left arrow": "flèche gauche",
      "left-right": "position à gauche ou à droite",
      "light": "lumière",
      "minute": "minute",
      "month": "mois",
      "mosaic": "mosaïque",
      "motion": "mouvement",
      "mouse-pointer": "pointeur de souris",
      "myself": "moi-même",
      "off": "Désactivé",
      "on": "Activé",
      "on-flipped": "effet miroir",
      "other scripts in sprite": "autres scripts du lutin",
      "pixelate": "pixeliser",
      "previous backdrop": "arrière-plan précédent",
      "resistance-A": "Resistance-A",
      "resistance-B": "Resistance-B",
      "resistance-C": "Resistance-C",
      "resistance-D": "Resistance-D",
      "reverse": "inversé",
      "right arrow": "flèche droite",
      "second": "seconde",
      "slider": "potentiomètre",
      "sound": "son",
      "space": "espace",
      "Stage": "Scène",
      "that way": "lòt bò a",
      "this script": "ce script",
      "this sprite": "ce lutin",
      "this way": "bò sa a",
      "up arrow": "flèche haut",
      "video motion": "mouvement vidéo",
      "whirl": "tournoyer",
      "year": "année"
    },
    "palette": {
      "Motion": "Mouvement",
      "Looks": "Apparence",
      "Sound": "Sons",
      "Pen": "Stylo",
      "Data": "Données",
      "variable": "variable",
      "list": "liste",
      "Events": "Événements",
      "Control": "Contrôle",
      "Sensing": "Capteurs",
      "Operators": "Opérateurs",
      "More Blocks": "Ajouter blocs",
      "Tips": "Conseils"
    },
    "math": [
      "abs",
      "plancher",
      "plafond",
      "racine",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "ln",
      "log",
      "e ^",
      "10^"
    ],
    "osis": [
      "autres scripts du lutin",
      "autres scripts"
    ]
  },
  "he": {
    "aliases": {
      "הסתובב שמאל %n מעלות": "turn @turnLeft %n degrees",
      "הסתובב ימינה %n מעלות": "turn @turnRight %n degrees",
      "כאשר לוחצים על דגל ירוק": "when @greenFlag clicked",
      "סוף": "end"
    },
    "define": [
      "הגדר"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "זוז %n צעדים",
      "turn @turnRight %n degrees": "הסתובב @turnRight %n מעלות",
      "turn @turnLeft %n degrees": "הסתובב @turnLeft %n מעלות",
      "point in direction %d.direction": "פנה לכיוון %d.direction",
      "point towards %m.spriteOrMouse": "פנה לכיוון של %m.spriteOrMouse",
      "go to x:%n y:%n": " קפוץ אל :x %n :y %n",
      "go to %m.location": "קפוץ אל %m.location",
      "glide %n secs to x:%n y:%n": "גלוש %n שניות ל :x %n :y %n",
      "change x by %n": "שנה ערך x ב %n",
      "set x to %n": "קבע ערך x ל %n",
      "change y by %n": "שנה ערך y ב %n",
      "set y to %n": "קבע ערך y ל %n",
      "set rotation style %m.rotationStyle": "קבע אופן סיבוב %m.rotationStyle",
      "say %s for %n secs": "אמור %s למשך %n שניות",
      "say %s": "אמור %s",
      "think %s for %n secs": "חשוב %s למשך %n שניות",
      "think %s": "חשוב %s",
      "show": "הצג",
      "hide": "הסתר",
      "switch costume to %m.costume": "קבע תלבושת ל %m.costume",
      "next costume": "התלבושת הבאה",
      "next backdrop": "הבאה הרקע",
      "switch backdrop to %m.backdrop": "קבע רקע ל %m.backdrop",
      "switch backdrop to %m.backdrop and wait": "קבע רקע ל %m.backdrop וחכה",
      "change %m.effect effect by %n": "שנה אפקט %m.effect ב %n",
      "set %m.effect effect to %n": "קבע אפקט %m.effect ל %n",
      "clear graphic effects": "נקה אפקטים",
      "change size by %n": "שנה גודל ב %n",
      "set size to %n%": "קבע גודל ל %n%",
      "go to front": "העבר לשיכבה הקדמית",
      "go back %n layers": "העבר %n שכבות לאחור",
      "play sound %m.sound": "נגן צליל %m.sound",
      "play sound %m.sound until done": "נגן צליל %m.sound עד לסיום",
      "stop all sounds": "הפסק את כל הצלילים",
      "play drum %d.drum for %n beats": "נגן בתוף %d.drum למשך %n פעימות",
      "rest for %n beats": "נוח למשך %n פעימות",
      "play note %d.note for %n beats": "נגן תו %d.note במשך %n פעימות",
      "set instrument to %d.instrument": "קבע כלי נגינה ל %d.instrument",
      "change volume by %n": "שנה עוצמת קול ב %n",
      "set volume to %n%": "קבע עוצמת קול ל %n%",
      "change tempo by %n": "שנה קצב ב %n",
      "set tempo to %n bpm": "קבע קצב ל %n פעימות לדקה",
      "clear": "נקה",
      "stamp": "החתם",
      "pen down": "עט מטה",
      "pen up": "עט מעלה",
      "set pen color to %c": "קבע צבע עט ל %c",
      "change pen color by %n": "שנה צבע עט ב %n",
      "set pen color to %n": "קבע צבע עט ל %n",
      "change pen shade by %n": "שנה הצללת עט ב %n",
      "set pen shade to %n": "קבע הצללת עט ל %n",
      "change pen size by %n": "שנה גודל עט ב %n",
      "set pen size to %n": "קבע גודל עט ל %n",
      "when @greenFlag clicked": "כאשר לוחצים על  @greenFlag  ",
      "when %m.key key pressed": "כאשר נלחץ מקש %m.key ",
      "when this sprite clicked": "כאשר לוחצים על דמות זו",
      "when backdrop switches to %m.backdrop": "כאשר הרקע משתנה ל %m.backdrop",
      "when %m.triggerSensor > %n": "כאשר %m.triggerSensor < %n",
      "when I receive %m.broadcast": "כאשר מתקבל מסר %m.broadcast",
      "broadcast %m.broadcast": "שדר מסר %m.broadcast",
      "broadcast %m.broadcast and wait": "שדר מסר %m.broadcast וחכה",
      "wait %n secs": "חכה %n שניות",
      "repeat %n": "חזור %n פעמים",
      "forever": "לעולמים",
      "if %b then": "אם %b אז",
      "wait until %b": "חכה עד ש %b",
      "repeat until %b": "חזור עד ש %b",
      "stop %m.stop": "עצור %m.stop",
      "when I start as a clone": "כשאני מופעל ככפיל",
      "create clone of %m.spriteOnly": "צור כפיל של %m.spriteOnly",
      "delete this clone": "מחק כפיל זה",
      "ask %s and wait": "שאל %s והמתן",
      "turn video %m.videoState": "שנה מצב וידאו ל %m.videoState",
      "set video transparency to %n%": "קבע שקיפות ודיאו ל %n%",
      "reset timer": "אפס מונה",
      "set %m.var to %s": "קבע %m.var ל %s",
      "change %m.var by %n": "שנה ערך %m.var ב %n",
      "show variable %m.var": "הצג משתנה %m.var",
      "hide variable %m.var": "הסתר משתנה %m.var",
      "add %s to %m.list": "הוסף %s ל %m.list",
      "delete %d.listDeleteItem of %m.list": "מחק פריט %d.listDeleteItem מתוך %m.list",
      "if on edge, bounce": "בנגיעה במסגרת הפוך כיוון",
      "insert %s at %d.listItem of %m.list": "הכנס %s במקום %d.listItem של %m.list",
      "replace item %d.listItem of %m.list with %s": "קבע פריט %d.listItem של %m.list ל %s",
      "show list %m.list": "הצג רשימה %m.list",
      "hide list %m.list": "הסתר רשימה %m.list",
      "x position": "מיקום על ציר x",
      "y position": "מיקום על ציר y",
      "direction": "כיוון",
      "costume #": "תלבושת",
      "size": "גודל",
      "backdrop name": "רקע",
      "backdrop #": "# רקע",
      "volume": "עוצמת קול",
      "tempo": "קצב",
      "touching %m.touching?": "נוגע ב %m.touching?",
      "touching color %c?": "נוגע בצבע %c?",
      "color %c is touching %c?": "צבע %c נוגע בצבע %c ?",
      "distance to %m.spriteOrMouse": "המרחק אל %m.spriteOrMouse",
      "answer": "תשובה",
      "key %m.key pressed?": "מקש %m.key נלחץ ?",
      "mouse down?": "עכבר נלחץ ?",
      "mouse x": "ערך עכבר בציר x",
      "mouse y": "ערך עכבר בציר y",
      "loudness": "עוצמת המיקרופון",
      "video %m.videoMotionType on %m.stageOrThis": "%m.videoMotionType ודיאו של %m.stageOrThis",
      "timer": "מונה",
      "%m.attribute of %m.spriteOrStage": "%m.attribute של %m.spriteOrStage",
      "current %m.timeAndDate": "%m.timeAndDate נוכחית",
      "days since 2000": "ימים מאז 2000",
      "username": "שם משתמש",
      "pick random %n to %n": "בחר מספר אקראי בין %n ל %n",
      "%b and %b": "%b וגם %b",
      "%b or %b": "%b או %b",
      "not %b": "לא %b",
      "join %s %s": "חבר %s %s",
      "letter %n of %s": "אות %n של %s",
      "length of %s": "אורך של %s",
      "%n mod %n": "%n שארית %n",
      "round %n": "עגל %n",
      "%m.mathOp of %n": "%m.mathOp של %n",
      "item %d.listItem of %m.list": "פריט %d.listItem של %m.list",
      "length of %m.list": "אורך של %m.list",
      "%m.list contains %s?": "%m.list מכיל %s ?",
      "when %m.booleanSensor": "כאשר %m.booleanSensor",
      "sensor %m.booleanSensor?": "חישן %m.booleanSensor ?",
      "%m.sensor sensor value": "ערך חישן %m.sensor",
      "turn %m.motor on for %n secs": "הפעל מנוע ל %n שניות",
      "turn %m.motor on": "הפעל מנוע",
      "turn %m.motor off": "כבה מנוע",
      "set %m.motor power to %n": "קבע עוצמת מנוע ל %n",
      "set %m.motor2 direction to %m.motorDirection": "קבע כיוון מנוע ל %m.motorDirection",
      "distance": "מרחק",
      "tilt": "הטיה",
      "else": "ואם לא",
      "end": "סוף"
    },
    "dropdowns": {
      "A connected": "A מחובר",
      "all": "הכל",
      "all around": "מסביב",
      "B connected": "B מחובר",
      "brightness": "בהירות",
      "button pressed": "כפתור נלחץ",
      "C connected": "C מחובר",
      "color": "צבע",
      "costume name": "שם התלבושת",
      "D connected": "D מחובר",
      "date": "תאריך",
      "day of week": "יום בשבוע",
      "don't rotate": "לא לסובב",
      "down arrow": "חץ מטה",
      "edge": "קצה",
      "fisheye": "עין דג",
      "ghost": "רוח רפאים",
      "hour": "שעה",
      "left arrow": "חץ שמאלי",
      "left-right": "שמאל-ימין",
      "light": "אור",
      "minute": "דקה",
      "month": "חודש",
      "mosaic": "פסיפס",
      "motion": "תנועה",
      "mouse-pointer": "סמן העכבר",
      "myself": "עצמי",
      "off": "כבה",
      "on": "הפעל",
      "on-flipped": "תמונת ראי",
      "other scripts in sprite": "תסריטים אחרים בדמות",
      "pixelate": "פיקסלים",
      "resistance-A": "התנגדות-A",
      "resistance-B": "התנגדות-B",
      "resistance-C": "התנגדות-C",
      "resistance-D": "התנגדות-D",
      "reverse": "הפוך",
      "right arrow": "חץ ימני",
      "second": "שניה",
      "slider": "גולל",
      "sound": "צליל",
      "space": "רווח",
      "Stage": "במה",
      "that way": "בדרך ההיא",
      "this script": "תסריט זה",
      "this sprite": "דמות זו",
      "this way": "בדרך הזאת",
      "up arrow": "חץ מעלה",
      "video motion": "תנועת וידאו",
      "whirl": "סחרור",
      "year": "שנה"
    },
    "palette": {
      "Motion": "תנועה",
      "Looks": "מראה",
      "Sound": "צלילים",
      "Pen": "עט",
      "Data": "נתונים",
      "variable": "משתנה",
      "list": "רשימה",
      "Events": "אירועים",
      "Control": "בקרה",
      "Sensing": "חיישנים",
      "Operators": "מפעילים",
      "More Blocks": "לבנים נוספות",
      "Tips": "טיפים"
    },
    "math": [
      "abs",
      "רצפה",
      "תקרה",
      "sqrt",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "פנימה",
      "log",
      " ^e",
      "10 ^"
    ],
    "osis": [
      "תסריטים אחרים בדמות",
      "תסריטים אחרים בדמות"
    ]
  },
  "id": {
    "define": [
      "artikan"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "gerak %n langkah",
      "turn @turnRight %n degrees": "putar @turnRight %n derajat",
      "turn @turnLeft %n degrees": "putar @turnLeft %n derajat",
      "point in direction %d.direction": "mengarah ke arah %d.direction",
      "point towards %m.spriteOrMouse": "mengarah ke %m.spriteOrMouse",
      "go to x:%n y:%n": "pergi ke x:%n y:%n",
      "go to %m.location": "pergi ke %m.location",
      "glide %n secs to x:%n y:%n": "meluncur %n detik ke x:%n y:%n",
      "change x by %n": "ubah x sebesar %n",
      "set x to %n": "atur x ke %n",
      "change y by %n": "ubah y sebesar %n",
      "set y to %n": "atur y ke %n",
      "set rotation style %m.rotationStyle": "atur gaya rotasi %m.rotationStyle",
      "say %s for %n secs": "katakan %s selama %n detik",
      "say %s": "katakan %s",
      "think %s for %n secs": "berpikir %s selama %n detik",
      "think %s": "berpikir %s",
      "show": "tampilkan",
      "hide": "sembunyikan",
      "switch costume to %m.costume": "ganti kostum ke %m.costume",
      "next costume": "kostum berikutnya",
      "next backdrop": "latar berikutnya",
      "switch backdrop to %m.backdrop": "ganti latar ke %m.backdrop",
      "switch backdrop to %m.backdrop and wait": "ganti latar ke %m.backdrop dan tunggu",
      "change %m.effect effect by %n": "ubah efek %m.effect sebesar %n",
      "set %m.effect effect to %n": "atur efek %m.effect ke %n",
      "clear graphic effects": "hapus semua efek grafis",
      "change size by %n": "ubah ukuran sebesar %n",
      "set size to %n%": "atur ukuran ke %n%",
      "go to front": "maju ke depan",
      "go back %n layers": "pergi ke belakang %n lapisan",
      "play sound %m.sound": "mainkan suara %m.sound",
      "play sound %m.sound until done": "mainkan suara %m.sound sampai selesai",
      "stop all sounds": "hentikan semua suara",
      "play drum %d.drum for %n beats": "mainkan drum %d.drum sebanyak %n ketukan",
      "rest for %n beats": "diam selama %n ketukan",
      "play note %d.note for %n beats": "bunyikan nada %d.note sebanyak %n ketukan",
      "set instrument to %d.instrument": "atur alat musik ke %d.instrument",
      "change volume by %n": "ubah volume sebesar %n",
      "set volume to %n%": "atur volume ke %n%",
      "change tempo by %n": "ubah tempo sebesar %n",
      "set tempo to %n bpm": "atur tempo ke %n ketukan per menit",
      "clear": "bersihkan",
      "stamp": "cap",
      "pen down": "tekan pena",
      "pen up": "angkat pena",
      "set pen color to %c": "atur warna pena ke %c",
      "change pen color by %n": "ubah warna pena sebesar %n",
      "set pen color to %n": "atur warna pena ke %n",
      "change pen shade by %n": "ubah kegelapan pena sebesar %n",
      "set pen shade to %n": "atur ketebalan pena ke %n",
      "change pen size by %n": "ubah ukuran pena sebesar %n",
      "set pen size to %n": "atur ukuran pena ke %n",
      "when @greenFlag clicked": "ketika @greenFlag diklik",
      "when %m.key key pressed": "ketika tombol %m.key ditekan",
      "when this sprite clicked": "ketika sprite ini diklik",
      "when backdrop switches to %m.backdrop": "ketika latar menjadi %m.backdrop",
      "when %m.triggerSensor > %n": "ketika %m.triggerSensor > %n",
      "when I receive %m.broadcast": "ketika aku menerima %m.broadcast",
      "broadcast %m.broadcast": "siarkan pesan %m.broadcast",
      "broadcast %m.broadcast and wait": "siarkan pesan %m.broadcast dan tunggu",
      "wait %n secs": "tunggu %n detik",
      "repeat %n": "ulangi sebanyak %n kali",
      "forever": "selamanya",
      "if %b then": "jika %b kemudian",
      "wait until %b": "tunggu sampai %b",
      "repeat until %b": "ulangi sampai %b",
      "stop %m.stop": "berhenti %m.stop",
      "when I start as a clone": "ketika aku mulai sebagai clone",
      "create clone of %m.spriteOnly": "buat clone dari %m.spriteOnly",
      "delete this clone": "hapus clone ini",
      "ask %s and wait": "tanya %s dan tunggu",
      "turn video %m.videoState": "putar video %m.videoState",
      "set video transparency to %n%": "atur transparansi video ke %n%",
      "reset timer": "reset timer",
      "set %m.var to %s": "atur %m.var ke %s",
      "change %m.var by %n": "ubah %m.var sebesar %n",
      "show variable %m.var": "tampilkan variabel %m.var",
      "hide variable %m.var": "sembunyikan variable %m.var",
      "add %s to %m.list": "tambahkan %s ke %m.list",
      "delete %d.listDeleteItem of %m.list": "hapus %d.listDeleteItem dari %m.list",
      "if on edge, bounce": "jika di pinggir, pantulkan",
      "insert %s at %d.listItem of %m.list": "sisipkan %s pada %d.listItem dari %m.list",
      "replace item %d.listItem of %m.list with %s": "gantikan benda %d.listItem dari %m.list dengan %s",
      "show list %m.list": "tampilkan daftar %m.list",
      "hide list %m.list": "sembunyikan daftar %m.list",
      "x position": "posisi x",
      "y position": "posisi y",
      "direction": "arah",
      "costume #": "kostum #",
      "size": "ukuran",
      "backdrop name": "nama latar",
      "backdrop #": "latar #",
      "volume": "volume",
      "tempo": "tempo",
      "touching %m.touching?": "menyentuh %m.touching?",
      "touching color %c?": "menyentuh warna %c?",
      "color %c is touching %c?": "warna %c menyentuh warna %c?",
      "distance to %m.spriteOrMouse": "jarak dari %m.spriteOrMouse",
      "answer": "jawaban",
      "key %m.key pressed?": "tombol %m.key tertekan?",
      "mouse down?": "mouse tertekan?",
      "mouse x": "mouse x",
      "mouse y": "mouse y",
      "loudness": "kekerasan suara",
      "video %m.videoMotionType on %m.stageOrThis": "video %m.videoMotionType pada %m.stageOrThis",
      "timer": "timer",
      "%m.attribute of %m.spriteOrStage": "%m.attribute dari %m.spriteOrStage",
      "current %m.timeAndDate": "%m.timeAndDate saat ini",
      "days since 2000": "hari-hari sejak 2000",
      "username": "username",
      "pick random %n to %n": "pilih acak dari %n hingga %n",
      "%b and %b": "%b dan %b",
      "%b or %b": "%b atau %b",
      "not %b": "tidak %b",
      "join %s %s": "gabungkan %s %s",
      "letter %n of %s": "huruf ke%n dari %s",
      "length of %s": "panjang dari %s",
      "%n mod %n": "%n mod %n",
      "round %n": "bulatkan %n",
      "%m.mathOp of %n": "%m.mathOp dari %n",
      "item %d.listItem of %m.list": "benda %d.listItem dari %m.list",
      "length of %m.list": "panjang dari %m.list",
      "%m.list contains %s?": "%m.list berisi %s?",
      "when %m.booleanSensor": "ketika %m.booleanSensor",
      "when %m.sensor %m.lessMore %n": "ketika %m.sensor %m.lessMore %n",
      "sensor %m.booleanSensor?": "sensor %m.booleanSensor?",
      "%m.sensor sensor value": "nilai sensor %m.sensor",
      "turn %m.motor on for %n secs": "hidupkan %m.motor selama %n detik",
      "turn %m.motor on": "hidupkan %m.motor",
      "turn %m.motor off": "matikan %m.motor",
      "set %m.motor power to %n": "atur kekuatan %m.motor pada %n",
      "set %m.motor2 direction to %m.motorDirection": "atur arah %m.motor2 ke %m.motorDirection",
      "when distance %m.lessMore %n": "ketika jarak %m.lessMore %n",
      "when tilt %m.eNe %n": "ketika kemiringan %m.eNe %n",
      "distance": "jarak",
      "tilt": "miring",
      "else": "jika tidak"
    },
    "dropdowns": {
      "A connected": "A terkoneksi",
      "all": "semua",
      "all around": "seluruh",
      "B connected": "B terkoneksi",
      "brightness": "kecerahan",
      "button pressed": "tombol ditekan",
      "C connected": "C terkoneksi",
      "color": "warna",
      "costume name": "nama kostum",
      "D connected": "D terkoneksi",
      "date": "tanggal",
      "day of week": "hari",
      "don't rotate": "tidak berputar",
      "down arrow": "panah bawah",
      "edge": "pinggir",
      "fisheye": "mata ikan",
      "ghost": "transparan",
      "hour": "jam",
      "left arrow": "panah kiri",
      "left-right": "kiri-kanan",
      "light": "cahaya",
      "minute": "menit",
      "month": "bulan",
      "mosaic": "mosaik",
      "motion": "gerak",
      "mouse-pointer": "pointer-mouse",
      "myself": "diriku",
      "off": "mati",
      "on": "hidup",
      "on-flipped": "hidup dan telah dibalik",
      "other scripts in sprite": "script lain di sprite ini",
      "pixelate": "pixelate",
      "previous backdrop": "Latar sebelumnya",
      "resistance-A": "resistan-A",
      "resistance-B": "resistan-B",
      "resistance-C": "resistan-C",
      "resistance-D": "resistan-D",
      "reverse": "balikkan arah",
      "right arrow": "panah kanan",
      "second": "detik",
      "slider": "slider",
      "sound": "suara",
      "space": "spasi",
      "Stage": "Stage",
      "that way": "ke arah sana",
      "this script": "script ini",
      "this sprite": "sprite ini",
      "this way": "ke arah sini",
      "up arrow": "panah atas",
      "video motion": "video motion",
      "whirl": "pusaran",
      "year": "tahun"
    },
    "palette": {
      "Motion": "Gerakan",
      "Looks": "Tampilan",
      "Sound": "Suara",
      "Pen": "Pena",
      "Data": "Data",
      "variable": "variabel",
      "list": "daftar",
      "Events": "Kejadian",
      "Control": "Kontrol",
      "Sensing": "Sensor",
      "Operators": "Operator",
      "More Blocks": "Balok Baru",
      "Tips": "Tips"
    },
    "math": [
      "abs",
      "lantai",
      "langit-langit",
      "akar kuadrat",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "di dalam",
      "log",
      "e ^",
      "10 ^"
    ],
    "osis": [
      "script lain di sprite ini",
      "skrip lain di panggung ini"
    ]
  },
  "it": {
    "aliases": {
      "ruota in senso antiorario di %n gradi": "turn @turnLeft %n degrees",
      "ruota in senso orario di %n gradi": "turn @turnRight %n degrees",
      "quando si clicca sulla bandiera verde": "when @greenFlag clicked",
      "fine": "end"
    },
    "define": [
      "definisci"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "fai %n passi",
      "turn @turnRight %n degrees": "ruota di @turnRight %n gradi",
      "turn @turnLeft %n degrees": "ruota di @turnLeft %n gradi",
      "point in direction %d.direction": "punta in direzione %d.direction",
      "point towards %m.spriteOrMouse": "punta verso %m.spriteOrMouse",
      "go to x:%n y:%n": "vai a x:%n y:%n",
      "go to %m.location": "raggiungi %m.location",
      "glide %n secs to x:%n y:%n": "scivola in %n secondi a x:%n y:%n",
      "change x by %n": "cambia x di %n",
      "set x to %n": "vai dove x è %n",
      "change y by %n": "cambia y di %n",
      "set y to %n": "vai dove y è %n",
      "set rotation style %m.rotationStyle": "porta stile rotazione a %m.rotationStyle",
      "say %s for %n secs": "dire %s per %n secondi",
      "say %s": "dire %s",
      "think %s for %n secs": "pensa %s per %n secondi",
      "think %s": "pensa %s",
      "show": "mostra",
      "hide": "nascondi",
      "switch costume to %m.costume": "passa al costume %m.costume",
      "next costume": "passa al costume seguente",
      "next backdrop": "passa allo sfondo seguente",
      "switch backdrop to %m.backdrop": "passa allo sfondo %m.backdrop",
      "switch backdrop to %m.backdrop and wait": "passa allo sfondo %m.backdrop e attendi",
      "change %m.effect effect by %n": "cambia effetto %m.effect di %n",
      "set %m.effect effect to %n": "porta effetto %m.effect a %n",
      "clear graphic effects": "rimuovi effetti grafici",
      "change size by %n": "cambia dimensione di %n",
      "set size to %n%": "porta dimensione al %n%",
      "go to front": "vai in primo piano",
      "go back %n layers": "vai indietro di %n livelli",
      "play sound %m.sound": "produci suono %m.sound",
      "play sound %m.sound until done": "produci suono %m.sound e attendi la fine",
      "stop all sounds": "arresta tutti i suoni",
      "play drum %d.drum for %n beats": "suona tamburo %d.drum per %n battute",
      "rest for %n beats": "fai una pausa di %n battute",
      "play note %d.note for %n beats": "suona nota %d.note per %n battute",
      "set instrument to %d.instrument": "passa a strumento %d.instrument",
      "change volume by %n": "cambia volume di %n",
      "set volume to %n%": "porta volume a %n%",
      "change tempo by %n": "cambia tempo di %n",
      "set tempo to %n bpm": "porta tempo a %n bpm",
      "clear": "pulisci",
      "stamp": "timbra",
      "pen down": "penna giù",
      "pen up": "penna su",
      "set pen color to %c": "usa penna di colore %c",
      "change pen color by %n": "cambia colore penna di %n",
      "set pen color to %n": "usa penna di colore %n",
      "change pen shade by %n": "cambia luminosità penna di %n",
      "set pen shade to %n": "porta luminosità penna a %n",
      "change pen size by %n": "cambia dimensione penna di %n",
      "set pen size to %n": "usa penna di dimensione %n",
      "when @greenFlag clicked": "quando si clicca su @greenFlag",
      "when %m.key key pressed": "quando si preme il tasto %m.key",
      "when this sprite clicked": "quando si clicca questo sprite",
      "when backdrop switches to %m.backdrop": "quando lo sfondo passa a %m.backdrop",
      "when %m.triggerSensor > %n": "quando %m.triggerSensor > %n",
      "when I receive %m.broadcast": "quando ricevo %m.broadcast",
      "broadcast %m.broadcast": "invia a tutti %m.broadcast",
      "broadcast %m.broadcast and wait": "invia a tutti %m.broadcast e attendi",
      "wait %n secs": "attendi %n secondi",
      "repeat %n": "ripeti %n volte",
      "forever": "per sempre",
      "if %b then": "se %b allora",
      "wait until %b": "attendi fino a quando %b",
      "repeat until %b": "ripeti fino a quando %b",
      "stop %m.stop": "ferma %m.stop",
      "when I start as a clone": "quando vengo clonato",
      "create clone of %m.spriteOnly": "crea clone di %m.spriteOnly",
      "delete this clone": "elimina questo clone",
      "ask %s and wait": "chiedi %s e attendi",
      "turn video %m.videoState": "%m.videoState il video della webcam",
      "set video transparency to %n%": "porta la trasparenza della webcam a %n%",
      "reset timer": "azzera cronometro",
      "set %m.var to %s": "porta %m.var a %s",
      "change %m.var by %n": "cambia %m.var di %n",
      "show variable %m.var": "mostra la variabile %m.var",
      "hide variable %m.var": "nascondi la variabile %m.var",
      "add %s to %m.list": "aggiungi %s a %m.list",
      "delete %d.listDeleteItem of %m.list": "cancella %d.listDeleteItem da %m.list",
      "if on edge, bounce": "rimbalza quando tocchi il bordo",
      "insert %s at %d.listItem of %m.list": "inserisci %s alla posizione %d.listItem di %m.list",
      "replace item %d.listItem of %m.list with %s": "sostituisci elemento %d.listItem di %m.list con %s",
      "show list %m.list": "mostra la lista %m.list",
      "hide list %m.list": "nascondi la lista %m.list",
      "x position": "posizione x",
      "y position": "posizione y",
      "direction": "direzione",
      "costume #": "numero del costume",
      "size": "dimensione",
      "backdrop name": "nome dello sfondo",
      "backdrop #": "numero dello sfondo",
      "volume": "volume",
      "tempo": "tempo",
      "touching %m.touching?": "sta toccando %m.touching",
      "touching color %c?": "sta toccando il colore %c",
      "color %c is touching %c?": "il colore %c sta toccando il colore %c",
      "distance to %m.spriteOrMouse": "distanza da %m.spriteOrMouse",
      "answer": "risposta",
      "key %m.key pressed?": "tasto %m.key premuto",
      "mouse down?": "pulsante del mouse premuto",
      "mouse x": "x del mouse",
      "mouse y": "y del mouse",
      "loudness": "volume microfono",
      "video %m.videoMotionType on %m.stageOrThis": "%m.videoMotionType del video della webcam rispetto a %m.stageOrThis",
      "timer": "cronometro",
      "%m.attribute of %m.spriteOrStage": "%m.attribute di %m.spriteOrStage",
      "current %m.timeAndDate": "%m.timeAndDate attuale",
      "days since 2000": "giorni trascorsi dal 2000",
      "username": "username",
      "pick random %n to %n": "numero a caso tra %n e %n",
      "%b and %b": "%b e %b",
      "%b or %b": "%b o %b",
      "not %b": "non %b",
      "join %s %s": "unione di %s e %s",
      "letter %n of %s": "lettera %n di %s",
      "length of %s": "lunghezza di %s",
      "%n mod %n": "resto della divisione di %n diviso %n",
      "round %n": "arrotonda %n",
      "%m.mathOp of %n": "%m.mathOp di %n",
      "item %d.listItem of %m.list": "elemento %d.listItem di %m.list",
      "length of %m.list": "lunghezza di %m.list",
      "%m.list contains %s?": "%m.list contiene %s",
      "when %m.booleanSensor": "quando %m.booleanSensor",
      "when %m.sensor %m.lessMore %n": "quando %m.sensor %m.lessMore %n",
      "sensor %m.booleanSensor?": "sensore %m.booleanSensor",
      "%m.sensor sensor value": "valore del sensore %m.sensor",
      "turn %m.motor on for %n secs": "accendi %m.motor per %n secondi",
      "turn %m.motor on": "accendi %m.motor",
      "turn %m.motor off": "spegni %m.motor",
      "set %m.motor power to %n": "porta potenza %m.motor a %n",
      "set %m.motor2 direction to %m.motorDirection": "porta direzione %m.motor2 a %m.motorDirection",
      "when distance %m.lessMore %n": "quando distanza %m.lessMore %n",
      "when tilt %m.eNe %n": "quando inclinazione %m.eNe %n",
      "distance": "distanza",
      "tilt": "inclinazione",
      "else": "altrimenti",
      "end": "fine"
    },
    "dropdowns": {
      "A connected": "A connesso",
      "all": "tutto",
      "all around": "può ruotare",
      "B connected": "B connesso",
      "brightness": "luminosità",
      "button pressed": "pulsante premuto",
      "C connected": "C connesso",
      "color": "colore",
      "costume name": "nome costume",
      "D connected": "D connesso",
      "date": "giorno",
      "day of week": "giorno della settimana",
      "don't rotate": "non ruotare",
      "down arrow": "freccia giù",
      "edge": "bordo",
      "fisheye": "fish-eye",
      "ghost": "fantasma",
      "hour": "ora",
      "left arrow": "freccia sinistra",
      "left-right": "sinistra-destra",
      "light": "luce",
      "minute": "minuto",
      "month": "mese",
      "mosaic": "mosaico",
      "motion": "movimento",
      "mouse-pointer": "puntatore del mouse",
      "myself": "me stesso",
      "off": "spegni",
      "on": "accendi",
      "on-flipped": "accendi e inverti",
      "other scripts in sprite": "tutti gli altri script dello sprite",
      "pixelate": "effetto pixel",
      "previous backdrop": "sfondo precedente",
      "resistance-A": "resistenza-A",
      "resistance-B": "resistenza-B",
      "resistance-C": "resistenza-C",
      "resistance-D": "resistenza-D",
      "reverse": "inversione",
      "right arrow": "freccia destra",
      "second": "secondo",
      "slider": "cursore",
      "sound": "suono",
      "space": "spazio",
      "Stage": "Stage",
      "that way": "da quella parte",
      "this script": "questo script",
      "this sprite": "questo sprite",
      "this way": "da questa parte",
      "up arrow": "freccia su",
      "video motion": "movimento del video",
      "whirl": "mulinello",
      "year": "anno"
    },
    "palette": {
      "Motion": "Movimento",
      "Looks": "Aspetto",
      "Sound": "Suono",
      "Pen": "Penna",
      "Data": "Variabili e Liste",
      "variable": "variabile",
      "list": "lista",
      "Events": "Situazioni",
      "Control": "Controllo",
      "Sensing": "Sensori",
      "Operators": "Operatori",
      "More Blocks": "Altri Blocchi",
      "Tips": "Suggerimenti"
    },
    "math": [
      "abs",
      "intero inferiore",
      "intero superiore",
      "radq",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "ln",
      "log",
      "e ^",
      "10 ^"
    ],
    "osis": [
      "tutti gli altri script dello sprite",
      "tutti gli altri script dello stage"
    ]
  },
  "ja": {
    "define": [
      "定義"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "%n 歩動かす",
      "turn @turnRight %n degrees": "@turnRight %n 度回す",
      "turn @turnLeft %n degrees": "@turnLeft %n 度回す",
      "point in direction %d.direction": "%d.direction 度に向ける",
      "point towards %m.spriteOrMouse": "%m.spriteOrMouse へ向ける",
      "go to x:%n y:%n": "x座標を %n 、y座標を %n にする",
      "go to %m.location": "%m.location へ行く",
      "glide %n secs to x:%n y:%n": "%n 秒でx座標を %n に、y座標を %n に変える",
      "change x by %n": "x座標を %n ずつ変える",
      "set x to %n": "x座標を %n にする",
      "change y by %n": "y座標を %n ずつ変える",
      "set y to %n": "y座標を %n にする",
      "set rotation style %m.rotationStyle": "回転方法を %m.rotationStyle にする",
      "say %s for %n secs": "%s と %n 秒言う",
      "say %s": "%s と言う",
      "think %s for %n secs": "%s と %n 秒考える",
      "think %s": "%s と考える",
      "show": "表示する",
      "hide": "隠す",
      "switch costume to %m.costume": "コスチュームを %m.costume にする",
      "next costume": "次のコスチュームにする",
      "next backdrop": "次の背景",
      "switch backdrop to %m.backdrop": "背景を %m.backdrop にする",
      "switch backdrop to %m.backdrop and wait": "背景を %m.backdrop にして待つ",
      "change %m.effect effect by %n": "%m.effect の効果を %n ずつ変える",
      "set %m.effect effect to %n": "%m.effect の効果を %n にする",
      "clear graphic effects": "画像効果をなくす",
      "change size by %n": "大きさを %n ずつ変える",
      "set size to %n%": "大きさを %n% にする",
      "go to front": "前に出す",
      "go back %n layers": "%n 層下げる",
      "play sound %m.sound": "%m.sound の音を鳴らす",
      "play sound %m.sound until done": "終わるまで %m.sound の音を鳴らす",
      "stop all sounds": "すべての音を止める",
      "play drum %d.drum for %n beats": "%d.drum のドラムを %n 拍鳴らす",
      "rest for %n beats": "%n 拍休む",
      "play note %d.note for %n beats": "%d.note の音符を %n 拍鳴らす",
      "set instrument to %d.instrument": "楽器を %d.instrument にする",
      "change volume by %n": "音量を %n ずつ変える",
      "set volume to %n%": "音量を %n% にする",
      "change tempo by %n": "テンポを %n ずつ変える",
      "set tempo to %n bpm": "テンポを %n BPMにする",
      "clear": "消す",
      "stamp": "スタンプ",
      "pen down": "ペンを下ろす",
      "pen up": "ペンを上げる",
      "set pen color to %c": "ペンの色を %c にする",
      "change pen color by %n": "ペンの色を %n ずつ変える",
      "set pen color to %n": "ペンの色を %n にする",
      "change pen shade by %n": "ペンの濃さを %n ずつ変える",
      "set pen shade to %n": "ペンの濃さを %n にする",
      "change pen size by %n": "ペンの太さを %n ずつ変える",
      "set pen size to %n": "ペンの太さを %n にする",
      "when @greenFlag clicked": "@greenFlag がクリックされたとき",
      "when %m.key key pressed": "%m.key キーが押されたとき",
      "when this sprite clicked": "このスプライトがクリックされたとき",
      "when backdrop switches to %m.backdrop": "背景が %m.backdrop になったとき",
      "when %m.triggerSensor > %n": "%m.triggerSensor > %n のとき",
      "when I receive %m.broadcast": "%m.broadcast を受け取ったとき",
      "broadcast %m.broadcast": "%m.broadcast を送る",
      "broadcast %m.broadcast and wait": "%m.broadcast を送って待つ",
      "wait %n secs": "%n 秒待つ",
      "repeat %n": "%n 回繰り返す",
      "forever": "ずっと",
      "if %b then": "もし %b なら",
      "wait until %b": "%b まで待つ",
      "repeat until %b": "%b まで繰り返す",
      "stop %m.stop": "%m.stop を止める",
      "when I start as a clone": "クローンされたとき",
      "create clone of %m.spriteOnly": "%m.spriteOnly のクローンを作る",
      "delete this clone": "このクローンを削除する",
      "ask %s and wait": "%s と聞いて待つ",
      "turn video %m.videoState": "ビデオを %m.videoState にする",
      "set video transparency to %n%": "ビデオの透明度を %n% にする",
      "reset timer": "タイマーをリセット",
      "set %m.var to %s": "%m.var を %s にする",
      "change %m.var by %n": "%m.var を %n ずつ変える",
      "show variable %m.var": "変数 %m.var を表示する",
      "hide variable %m.var": "変数 %m.var を隠す",
      "add %s to %m.list": "%s を %m.list に追加する",
      "delete %d.listDeleteItem of %m.list": "%d.listDeleteItem 番目を %m.list から削除する",
      "if on edge, bounce": "もし端に着いたら、跳ね返る",
      "insert %s at %d.listItem of %m.list": "%s を %d.listItem 番目に挿入する（ %m.list ）",
      "replace item %d.listItem of %m.list with %s": "%d.listItem 番目（ %m.list ）を %s で置き換える",
      "show list %m.list": "リスト %m.list を表示する",
      "hide list %m.list": "リスト %m.list を隠す",
      "x position": "x座標",
      "y position": "y座標",
      "direction": "向き",
      "costume #": "コスチューム #",
      "size": "大きさ",
      "backdrop name": "背景の名前",
      "backdrop #": "背景 #",
      "volume": "音量",
      "tempo": "テンポ",
      "touching %m.touching?": "%m.touching に触れた",
      "touching color %c?": "%c 色に触れた",
      "color %c is touching %c?": "%c 色が %c 色に触れた",
      "distance to %m.spriteOrMouse": "%m.spriteOrMouse までの距離",
      "answer": "答え",
      "key %m.key pressed?": "%m.key キーが押された",
      "mouse down?": "マウスが押された",
      "mouse x": "マウスのx座標",
      "mouse y": "マウスのy座標",
      "loudness": "音量",
      "video %m.videoMotionType on %m.stageOrThis": "ビデオの %m.videoMotionType ( %m.stageOrThis )",
      "timer": "タイマー",
      "%m.attribute of %m.spriteOrStage": "%m.attribute ( %m.spriteOrStage )",
      "current %m.timeAndDate": "現在の %m.timeAndDate",
      "days since 2000": "2000年からの日数",
      "username": "ユーザー名",
      "pick random %n to %n": "%n から %n までの乱数",
      "%b and %b": "%b かつ %b",
      "%b or %b": "%b または %b",
      "not %b": "%b ではない",
      "join %s %s": "%s と %s",
      "letter %n of %s": "%n 番目( %s )の文字",
      "length of %s": "%s の長さ",
      "%n mod %n": "%n を %n で割った余り",
      "round %n": "%n を四捨五入",
      "%m.mathOp of %n": "%m.mathOp ( %n )",
      "item %d.listItem of %m.list": "%d.listItem 番目（ %m.list ）",
      "length of %m.list": "%m.list の長さ",
      "%m.list contains %s?": "%m.list に %s が含まれる",
      "when %m.booleanSensor": "%m.booleanSensor とき",
      "when %m.sensor %m.lessMore %n": "%m.sensor %m.lessMore %n のとき",
      "sensor %m.booleanSensor?": "%m.booleanSensor",
      "%m.sensor sensor value": "%m.sensor センサーの値",
      "turn %m.motor on for %n secs": "%m.motor を %n 秒オンにする",
      "turn %m.motor on": "%m.motor をオンにする",
      "turn %m.motor off": "%m.motor をオフにする",
      "set %m.motor power to %n": "%m.motor のパワーを %n にする",
      "set %m.motor2 direction to %m.motorDirection": "%m.motor2 の回転方向を %m.motorDirection にする",
      "when distance %m.lessMore %n": "距離 %m.lessMore %n のとき",
      "when tilt %m.eNe %n": "傾き %m.eNe %n のとき",
      "distance": "距離",
      "tilt": "傾き",
      "else": "でなければ"
    },
    "dropdowns": {
      "A connected": "Aがつながれた",
      "all": "すべて",
      "all around": "自由に回転",
      "B connected": "Bがつながれた",
      "brightness": "明るさ",
      "button pressed": "ボタンが押された",
      "C connected": "Cがつながれた",
      "color": "色",
      "costume name": "コスチューム名",
      "D connected": "Dがつながれた",
      "date": "日",
      "day of week": "曜日",
      "don't rotate": "回転しない",
      "down arrow": "下向き矢印",
      "edge": "端",
      "fisheye": "魚眼レンズ",
      "ghost": "幽霊",
      "hour": "時",
      "left arrow": "左向き矢印",
      "left-right": "左右のみ",
      "light": "明るさ",
      "minute": "分",
      "month": "月",
      "mosaic": "モザイク",
      "motion": "モーション",
      "mouse-pointer": "マウスのポインター",
      "myself": "自分自身",
      "off": "切",
      "on": "入",
      "on-flipped": "左右反転",
      "other scripts in sprite": "スプライトの他のスクリプト",
      "pixelate": "ピクセル化",
      "previous backdrop": "前の背景",
      "resistance-A": "抵抗-A",
      "resistance-B": "抵抗-B",
      "resistance-C": "抵抗-C",
      "resistance-D": "抵抗-D",
      "reverse": "逆向き",
      "right arrow": "右向き矢印",
      "second": "秒",
      "slider": "スライダー",
      "sound": "音",
      "space": "スペース",
      "Stage": "ステージ",
      "that way": "あちら向き",
      "this script": "このスクリプト",
      "this sprite": "このスプライト",
      "this way": "こちら向き",
      "up arrow": "上向き矢印",
      "video motion": "ビデオモーション",
      "whirl": "渦巻き",
      "year": "年"
    },
    "palette": {
      "Motion": "動き",
      "Looks": "見た目",
      "Sound": "音",
      "Pen": "ペン",
      "Data": "データ",
      "variable": "変数",
      "list": "リスト",
      "Events": "イベント",
      "Control": "制御",
      "Sensing": "調べる",
      "Operators": "演算",
      "More Blocks": "その他",
      "Tips": "ヒント"
    },
    "math": [
      "絶対値",
      "切り下げ",
      "切り上げ",
      "平方根",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "ln",
      "log",
      "e ^",
      "10 ^"
    ],
    "osis": [
      "スプライトの他のスクリプト",
      "ステージの他のスクリプト"
    ]
  },
  "ko": {
    "define": [
      "정의하기"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "%n 만큼 움직이기",
      "turn @turnRight %n degrees": "@turnRight %n 도 돌기",
      "turn @turnLeft %n degrees": "@turnLeft %n 도 돌기",
      "point in direction %d.direction": "%d.direction 도 방향 보기",
      "point towards %m.spriteOrMouse": "%m.spriteOrMouse 쪽 보기",
      "go to x:%n y:%n": "x:%n y:%n 로 이동하기",
      "go to %m.location": "%m.location 위치로 이동하기",
      "glide %n secs to x:%n y:%n": "%n 초 동안 x:%n y:%n 으로 움직이기",
      "change x by %n": "x좌표를 %n 만큼 바꾸기",
      "set x to %n": "x좌표를 %n (으)로 정하기",
      "change y by %n": "y좌표를 %n 만큼 바꾸기",
      "set y to %n": "y좌표를 %n (으)로 정하기",
      "set rotation style %m.rotationStyle": "회전방식을 %m.rotationStyle 로 정하기",
      "say %s for %n secs": "%s 을(를) %n 초동안 말하기",
      "say %s": "%s 말하기",
      "think %s for %n secs": "%s 을(를) %n 초동안 생각하기",
      "think %s": "%s 생각하기",
      "show": "보이기",
      "hide": "숨기기",
      "switch costume to %m.costume": "모양을 %m.costume (으)로 바꾸기",
      "next costume": "다음 모양으로 바꾸기",
      "next backdrop": "다음 배경으로 바꾸기",
      "switch backdrop to %m.backdrop": "배경을 %m.backdrop (으)로 바꾸기",
      "switch backdrop to %m.backdrop and wait": "배경을 %m.backdrop (으)로 바꾸고 기다리기",
      "change %m.effect effect by %n": "%m.effect 효과를 %n 만큼 바꾸기",
      "set %m.effect effect to %n": "%m.effect 효과를 %n (으)로 정하기",
      "clear graphic effects": "그래픽 효과 지우기",
      "change size by %n": "크기를 %n 만큼 바꾸기",
      "set size to %n%": "크기를 %n% 로 정하기",
      "go to front": "맨 앞으로 순서 바꾸기",
      "go back %n layers": "%n 번째로 물러나기",
      "play sound %m.sound": "%m.sound 재생하기",
      "play sound %m.sound until done": "%m.sound 끝까지 재생하기",
      "stop all sounds": "모든 소리 끄기",
      "play drum %d.drum for %n beats": "%d.drum 번 타악기를 %n 박자로 연주하기",
      "rest for %n beats": "%n 박자 쉬기",
      "play note %d.note for %n beats": "%d.note 번 음을 %n 박자로 연주하기",
      "set instrument to %d.instrument": "%d.instrument 번 악기로 정하기",
      "change volume by %n": "음량을 %n 만큼 바꾸기",
      "set volume to %n%": "음량을 %n% (으)로 정하기",
      "change tempo by %n": "빠르기를 %n 만큼 바꾸기",
      "set tempo to %n bpm": "박자를 %n BPM 으로 정하기",
      "clear": "지우기",
      "stamp": "도장찍기",
      "pen down": "펜 내리기",
      "pen up": "펜 올리기",
      "set pen color to %c": "펜 색깔을 %c (으)로 정하기",
      "change pen color by %n": "펜 색깔을 %n 만큼 바꾸기",
      "set pen color to %n": "펜 색깔을 %n (으)로 정하기",
      "change pen shade by %n": "펜 명암을 %n 만큼 바꾸기",
      "set pen shade to %n": "펜 명암을 %n (으)로 정하기",
      "change pen size by %n": "펜 굵기를 %n 만큼 바꾸기",
      "set pen size to %n": "펜 굵기를 %n (으)로 정하기",
      "when @greenFlag clicked": "@greenFlag 클릭했을 때",
      "when %m.key key pressed": "%m.key 키를 눌렀을 때",
      "when this sprite clicked": "이 스프라이트를 클릭했을 때",
      "when backdrop switches to %m.backdrop": "배경이 %m.backdrop (으)로 바뀌었을 때",
      "when %m.triggerSensor > %n": "%m.triggerSensor > %n 일 때",
      "when I receive %m.broadcast": "%m.broadcast 을(를) 받았을 때",
      "broadcast %m.broadcast": "%m.broadcast 방송하기",
      "broadcast %m.broadcast and wait": "%m.broadcast 방송하고 기다리기",
      "wait %n secs": "%n 초 기다리기",
      "repeat %n": "%n 번 반복하기",
      "forever": "무한 반복하기",
      "if %b then": "만약 %b 라면",
      "wait until %b": "%b 까지 기다리기",
      "repeat until %b": "%b 까지 반복하기",
      "stop %m.stop": "%m.stop 멈추기",
      "when I start as a clone": "복제되었을 때",
      "create clone of %m.spriteOnly": "%m.spriteOnly 복제하기",
      "delete this clone": "이 복제본 삭제하기",
      "ask %s and wait": "%s 묻고 기다리기",
      "turn video %m.videoState": "비디오 %m.videoState",
      "set video transparency to %n%": "비디오 투명도를 %n% 로 정하기",
      "reset timer": "타이머 초기화",
      "set %m.var to %s": "%m.var 을(를) %s 로 정하기",
      "change %m.var by %n": "%m.var 을(를) %n 만큼 바꾸기",
      "show variable %m.var": "%m.var 변수 보이기",
      "hide variable %m.var": "%m.var 변수 숨기기",
      "add %s to %m.list": "%s 항목을 %m.list 에 추가하기",
      "delete %d.listDeleteItem of %m.list": "%d.listDeleteItem 번째 항목을 %m.list 에서 삭제하기",
      "if on edge, bounce": "벽에 닿으면 튕기기",
      "insert %s at %d.listItem of %m.list": "%s 을(를) %d.listItem 번째 %m.list 에 넣기",
      "replace item %d.listItem of %m.list with %s": "%d.listItem 번째 %m.list 의 항목을 %s (으)로 바꾸기",
      "show list %m.list": "%m.list 리스트 보이기",
      "hide list %m.list": "%m.list 리스트 숨기기",
      "x position": "x좌표",
      "y position": "y좌표",
      "direction": "방향",
      "costume #": "모양 #",
      "size": "크기",
      "backdrop name": "배경 이름",
      "backdrop #": "배경 번호 #",
      "volume": "음량",
      "tempo": "박자",
      "touching %m.touching?": "%m.touching 에 닿았는가?",
      "touching color %c?": "%c 색에 닿았는가?",
      "color %c is touching %c?": "%c 색이 %c 색에 닿았는가?",
      "distance to %m.spriteOrMouse": "%m.spriteOrMouse 까지 거리",
      "answer": "대답",
      "key %m.key pressed?": "%m.key 키를 눌렀는가?",
      "mouse down?": "마우스를 클릭했는가?",
      "mouse x": "마우스의 x좌표",
      "mouse y": "마우스의 y좌표",
      "loudness": "음량",
      "video %m.videoMotionType on %m.stageOrThis": "비디오 %m.videoMotionType 에 대한 %m.stageOrThis 에서의 관찰값",
      "timer": "타이머",
      "%m.attribute of %m.spriteOrStage": "%m.attribute (%m.spriteOrStage)",
      "current %m.timeAndDate": "현재 %m.timeAndDate",
      "days since 2000": "2000년 이후 현재까지 날짜수",
      "username": "사용자이름",
      "pick random %n to %n": "%n 부터 %n 사이의 난수",
      "%b and %b": "%b 그리고 %b",
      "%b or %b": "%b 또는 %b",
      "not %b": "%b 가(이) 아니다",
      "join %s %s": "%s 와 %s 결합하기",
      "letter %n of %s": "%n 번째 글자 ( %s )",
      "length of %s": "%s 의 길이",
      "%n mod %n": "%n 나누기 %n 의 나머지",
      "round %n": "%n 반올림",
      "%m.mathOp of %n": "%m.mathOp ( %n )",
      "item %d.listItem of %m.list": "%d.listItem 번째 %m.list 항목",
      "length of %m.list": "%m.list 리스트의 항목 수",
      "%m.list contains %s?": "%m.list 리스트에 %s 포함되었는가?",
      "when %m.booleanSensor": "%m.booleanSensor 일 때",
      "when %m.sensor %m.lessMore %n": "%m.sensor %m.lessMore %n 일 때",
      "sensor %m.booleanSensor?": "센서의 %m.booleanSensor?",
      "%m.sensor sensor value": "%m.sensor 의 센서값",
      "turn %m.motor on for %n secs": "%n 초 동안 %m.motor 켜기",
      "turn %m.motor on": "%m.motor 켜기",
      "turn %m.motor off": "%m.motor 끄기",
      "set %m.motor power to %n": "%m.motor 파워를 %n (으)로 정하기",
      "set %m.motor2 direction to %m.motorDirection": "%m.motor2 방향을 %m.motorDirection 쪽으로 정하기",
      "when distance %m.lessMore %n": "거리 %m.lessMore %n 일 때",
      "when tilt %m.eNe %n": "기울기 %m.eNe %n 일 때",
      "distance": "거리",
      "tilt": "기울기",
      "else": "아니면"
    },
    "dropdowns": {
      "A connected": "A 연결됨",
      "all": "모두",
      "all around": "회전하기",
      "B connected": "B 연결됨",
      "brightness": "밝기",
      "button pressed": "버튼 눌림",
      "C connected": "C 연결됨",
      "color": "색깔",
      "costume name": "모양 이름",
      "D connected": "D 연결됨",
      "date": "일",
      "day of week": "요일",
      "don't rotate": "회전하지 않기",
      "down arrow": "아래쪽 화살표",
      "edge": "벽",
      "fisheye": "어안 렌즈",
      "ghost": "반투명",
      "hour": "시",
      "left arrow": "왼쪽 화살표",
      "left-right": "왼쪽-오른쪽",
      "light": "빛",
      "minute": "분",
      "month": "달",
      "mosaic": "모자이크",
      "motion": "동작",
      "mouse-pointer": "마우스 포인터",
      "myself": "나 자신",
      "off": "끄기",
      "on": "켜기",
      "on-flipped": "켜기-좌우반전",
      "other scripts in sprite": "스프라이트에 있는 다른 스크립트",
      "pixelate": "픽셀화",
      "previous backdrop": "이전 저장소",
      "resistance-A": "저항-A",
      "resistance-B": "저항-B",
      "resistance-C": "저항-C",
      "resistance-D": "저항-D",
      "reverse": "역방향",
      "right arrow": "오른쪽 화살표",
      "second": "초",
      "slider": "슬라이더 사용하기",
      "sound": "소리",
      "space": "스페이스",
      "Stage": "무대",
      "that way": "반시계방향",
      "this script": "이 스크립트",
      "this sprite": "이 스프라이트",
      "this way": "시계방향",
      "up arrow": "위쪽 화살표",
      "video motion": "비디오 동작",
      "whirl": "소용돌이",
      "year": "년"
    },
    "palette": {
      "Motion": "동작",
      "Looks": "형태",
      "Sound": "소리",
      "Pen": "펜",
      "Data": "데이터",
      "variable": "변수",
      "list": "리스트",
      "Events": "이벤트",
      "Control": "제어",
      "Sensing": "관찰",
      "Operators": "연산",
      "More Blocks": "추가 블록",
      "Tips": "도움말"
    },
    "math": [
      "절대값",
      "바닥 함수",
      "천장 함수",
      "제곱근",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "ln",
      "log",
      "e ^",
      "10 ^"
    ],
    "osis": [
      "스프라이트에 있는 다른 스크립트",
      "무대에 있는 다른 스크립트"
    ]
  },
  "nb": {
    "aliases": {
      "vend venstre %n grader": "turn @turnLeft %n degrees",
      "vend høyre %n grader": "turn @turnRight %n degrees",
      "når grønt flagg klikkes": "when @greenFlag clicked",
      "slutt": "end"
    },
    "define": [
      "definer"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "gå %n steg",
      "turn @turnRight %n degrees": "vend @turnRight %n grader",
      "turn @turnLeft %n degrees": "vend @turnLeft %n grader",
      "point in direction %d.direction": "pek i retning %d.direction",
      "point towards %m.spriteOrMouse": "pek mot %m.spriteOrMouse",
      "go to x:%n y:%n": "gå til x:%n y:%n",
      "go to %m.location": "gå til %m.location",
      "glide %n secs to x:%n y:%n": "gli %n sekunder til x:%n y:%n",
      "change x by %n": "endre x med %n",
      "set x to %n": "sett x til %n",
      "change y by %n": "endre y med %n",
      "set y to %n": "sett y til %n",
      "set rotation style %m.rotationStyle": "begrens rotasjon %m.rotationStyle",
      "say %s for %n secs": "si %s i %n sekunder",
      "say %s": "si %s",
      "think %s for %n secs": "tenk %s i %n sekunder",
      "think %s": "tenk %s",
      "show": "vis",
      "hide": "skjul",
      "switch costume to %m.costume": "bytt drakt til %m.costume",
      "next costume": "neste drakt",
      "next backdrop": "neste bakgrunn",
      "switch backdrop to %m.backdrop": "bytt bakgrunn til %m.backdrop",
      "switch backdrop to %m.backdrop and wait": "bytt bakgrunn til %m.backdrop og vent",
      "change %m.effect effect by %n": "endre %m.effect effekt med %n",
      "set %m.effect effect to %n": "sett %m.effect effekt til %n",
      "clear graphic effects": "ta bort grafiske effekter",
      "change size by %n": "endre størrelse med %n",
      "set size to %n%": "sett størrelse til %n%",
      "go to front": "legg foran",
      "go back %n layers": "flytt bakover %n lag",
      "play sound %m.sound": "spill lyden %m.sound",
      "play sound %m.sound until done": "spill lyden %m.sound til den er ferdig",
      "stop all sounds": "stopp all lyd",
      "play drum %d.drum for %n beats": "trommeslag %d.drum som varer %n takter",
      "rest for %n beats": "pause %n takter",
      "play note %d.note for %n beats": "spill tone %d.note i %n takter",
      "set instrument to %d.instrument": "velg instrument %d.instrument",
      "change volume by %n": "endre volum med %n",
      "set volume to %n%": "sett volum %n%",
      "change tempo by %n": "endre tempo med %n",
      "set tempo to %n bpm": "sett tempo til %n slag i minuttet",
      "clear": "slett",
      "stamp": "stemple avtrykk",
      "pen down": "penn på",
      "pen up": "penn av",
      "set pen color to %c": "velg pennfarge %c",
      "change pen color by %n": "endre pennfarge med %n",
      "set pen color to %n": "velg pennfarge %n",
      "change pen shade by %n": "endre pennintensitet med %n",
      "set pen shade to %n": "sett pennintensitet til %n",
      "change pen size by %n": "endre pennbredde med %n",
      "set pen size to %n": "sett pennbredde til %n",
      "when @greenFlag clicked": "når @greenFlag klikkes",
      "when %m.key key pressed": "når %m.key trykkes",
      "when this sprite clicked": "når denne figuren klikkes",
      "when backdrop switches to %m.backdrop": "når bakgrunn bytter til %m.backdrop",
      "when %m.triggerSensor > %n": "når %m.triggerSensor > %n",
      "when I receive %m.broadcast": "når jeg mottar %m.broadcast",
      "broadcast %m.broadcast": "send melding %m.broadcast",
      "broadcast %m.broadcast and wait": "send melding %m.broadcast og vent",
      "wait %n secs": "vent %n sekunder",
      "repeat %n": "gjenta %n ganger",
      "forever": "for alltid",
      "if %b then": "hvis %b",
      "wait until %b": "vent til %b",
      "repeat until %b": "gjenta til %b",
      "stop %m.stop": "stopp %m.stop",
      "when I start as a clone": "når jeg starter som klon",
      "create clone of %m.spriteOnly": "lag klon av %m.spriteOnly",
      "delete this clone": "slett denne klonen",
      "ask %s and wait": "spør %s og vent",
      "turn video %m.videoState": "sett video %m.videoState",
      "set video transparency to %n%": "sett gjennomsiktighet av video til %n%",
      "reset timer": "nullstill klokka",
      "set %m.var to %s": "sett %m.var til %s",
      "change %m.var by %n": "endre %m.var med %n",
      "show variable %m.var": "vis variablen %m.var",
      "hide variable %m.var": "skjul variabel %m.var",
      "add %s to %m.list": "legg %s til %m.list",
      "delete %d.listDeleteItem of %m.list": "slett %d.listDeleteItem i %m.list",
      "if on edge, bounce": "sprett tilbake ved kanten",
      "insert %s at %d.listItem of %m.list": "sett inn %s på plass %d.listItem i %m.list",
      "replace item %d.listItem of %m.list with %s": "erstatt element %d.listItem i %m.list med %s",
      "show list %m.list": "vis listen %m.list",
      "hide list %m.list": "skjul liste %m.list",
      "x position": "x-posisjon",
      "y position": "y-posisjon",
      "direction": "retning",
      "costume #": "drakt #",
      "size": "størrelse",
      "backdrop name": "navn på bakgrunn",
      "backdrop #": "bakgrunn #",
      "volume": "volum",
      "tempo": "tempo",
      "touching %m.touching?": "berører %m.touching?",
      "touching color %c?": "berører fargen %c?",
      "color %c is touching %c?": "farge %c berører %c?",
      "distance to %m.spriteOrMouse": "avstand til %m.spriteOrMouse",
      "answer": "svar",
      "key %m.key pressed?": "tast %m.key trykket?",
      "mouse down?": "museknappen er nede?",
      "mouse x": "mus x",
      "mouse y": "mus y",
      "loudness": "lydnivå",
      "video %m.videoMotionType on %m.stageOrThis": "video %m.videoMotionType på %m.stageOrThis",
      "timer": "klokke",
      "%m.attribute of %m.spriteOrStage": "%m.attribute av %m.spriteOrStage",
      "current %m.timeAndDate": "nåværende %m.timeAndDate",
      "days since 2000": "dager siden 2000",
      "username": "brukernavn",
      "pick random %n to %n": "tilfeldig tall fra %n til %n",
      "%b and %b": "%b og %b",
      "%b or %b": "%b eller %b",
      "not %b": "ikke %b",
      "join %s %s": "sett sammen %s %s",
      "letter %n of %s": "bokstav %n i %s",
      "length of %s": "lengden av %s",
      "%n mod %n": "%n mod %n",
      "round %n": "avrund %n",
      "%m.mathOp of %n": "%m.mathOp av %n",
      "item %d.listItem of %m.list": "element %d.listItem av %m.list",
      "length of %m.list": "lengden av %m.list",
      "%m.list contains %s?": "%m.list inneholder %s?",
      "when %m.booleanSensor": "når %m.booleanSensor",
      "when %m.sensor %m.lessMore %n": "når %m.sensor %m.lessMore %n",
      "sensor %m.booleanSensor?": "sensor %m.booleanSensor?",
      "%m.sensor sensor value": "%m.sensor sensorverdi",
      "turn %m.motor on for %n secs": "start %m.motor i %n sekunder",
      "turn %m.motor on": "start %m.motor",
      "turn %m.motor off": "stopp %m.motor",
      "set %m.motor power to %n": "velg %m.motor styrke %n",
      "set %m.motor2 direction to %m.motorDirection": "velg %m.motor2 dreieretning %m.motorDirection",
      "when distance %m.lessMore %n": "når avstand %m.lessMore %n",
      "when tilt %m.eNe %n": "når helning %m.eNe %n",
      "distance": "avstand",
      "tilt": "helning",
      "else": "ellers",
      "end": "slutt"
    },
    "dropdowns": {
      "A connected": "A tilkoblet",
      "all": "alle",
      "all around": "fri rotasjon",
      "B connected": "B tilkoblet",
      "brightness": "lysstyrke",
      "button pressed": "knapp trykket",
      "C connected": "C tilkoblet",
      "color": "farge",
      "costume name": "draktnavn",
      "D connected": "D tilkoblet",
      "date": "dato",
      "day of week": "ukedag",
      "don't rotate": "ikke roter",
      "down arrow": "pil ned",
      "edge": "kant",
      "fisheye": "fiskeøye",
      "ghost": "gjennomsiktig",
      "hour": "time",
      "left arrow": "pil venstre",
      "left-right": "vend sideveis",
      "light": "lys",
      "minute": "minutt",
      "month": "måned",
      "mosaic": "mosaikk",
      "motion": "bevegelse",
      "mouse-pointer": "musepeker",
      "myself": "meg",
      "off": "av",
      "on": "på",
      "on-flipped": "på-speilvendt",
      "other scripts in sprite": "andre skript i figuren",
      "pixelate": "piksel",
      "previous backdrop": "forrige bakgrunn",
      "resistance-A": "motstand-A",
      "resistance-B": "motstand-B",
      "resistance-C": "motstand-C",
      "resistance-D": "motstand-D",
      "reverse": "baklengs",
      "right arrow": "pil høyre",
      "second": "sekund",
      "slider": "skyveknapp",
      "sound": "lyd",
      "space": "mellomrom",
      "Stage": "Scene",
      "that way": "mot klokken",
      "this script": "dette skriptet",
      "this sprite": "denne figuren",
      "this way": "med klokken",
      "up arrow": "pil opp",
      "video motion": "videobevegelse",
      "whirl": "virvel",
      "year": "år"
    },
    "palette": {
      "Motion": "Bevegelse",
      "Looks": "Utseende",
      "Sound": "Lyd",
      "Pen": "Penn",
      "Data": "Data",
      "variable": "variabel",
      "list": "liste",
      "Events": "Hendelser",
      "Control": "Styring",
      "Sensing": "Sansning",
      "Operators": "Operatorer",
      "More Blocks": "Flere klosser",
      "Tips": "Hjelp"
    },
    "math": [
      "abs",
      "gulv",
      "tak",
      "kvadratrot",
      "sin",
      "cos",
      "tan",
      "arcsin",
      "arccos",
      "arctan",
      "ln",
      "log",
      "e ^",
      "10 ^"
    ],
    "osis": [
      "andre skript i figuren",
      "andre skript på scenen"
    ]
  },
  "nl": {
    "aliases": {
      "draai %n graden naar links": "turn @turnLeft %n degrees",
      "draai %n graden naar rechts": "turn @turnRight %n degrees",
      "wanneer groene vlag wordt aangeklikt": "when @greenFlag clicked",
      "einde": "end"
    },
    "define": [
      "definieer"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "neem %n stappen",
      "turn @turnRight %n degrees": "draai @turnRight %n graden",
      "turn @turnLeft %n degrees": "draai @turnLeft %n graden",
      "point in direction %d.direction": "richt naar %d.direction graden",
      "point towards %m.spriteOrMouse": "richt naar %m.spriteOrMouse",
      "go to x:%n y:%n": "ga naar x:%n y:%n",
      "go to %m.location": "ga naar %m.location",
      "glide %n secs to x:%n y:%n": "schuif in %n sec. naar x:%n y:%n",
      "change x by %n": "verander x met %n",
      "set x to %n": "maak x %n",
      "change y by %n": "verander y met %n",
      "set y to %n": "maak y %n",
      "set rotation style %m.rotationStyle": "maak draaistijl %m.rotationStyle",
      "say %s for %n secs": "zeg %s %n sec.",
      "say %s": "zeg %s",
      "think %s for %n secs": "denk %s %n sec.",
      "think %s": "denk %s",
      "show": "verschijn",
      "hide": "verdwijn",
      "switch costume to %m.costume": "verander uiterlijk naar %m.costume",
      "next costume": "volgend uiterlijk",
      "next backdrop": "volgende achtergrond",
      "switch backdrop to %m.backdrop": "verander achtergrond naar %m.backdrop",
      "switch backdrop to %m.backdrop and wait": "verander achtergrond naar %m.backdrop en wacht",
      "change %m.effect effect by %n": "verander %m.effect-effect met %n",
      "set %m.effect effect to %n": "zet effect %m.effect op %n",
      "clear graphic effects": "zet alle effecten uit",
      "change size by %n": "verander grootte met %n",
      "set size to %n%": "maak grootte %n%",
      "go to front": "ga naar voorgrond",
      "go back %n layers": "ga %n lagen naar achteren",
      "play sound %m.sound": "start geluid %m.sound",
      "play sound %m.sound until done": "start geluid %m.sound en wacht",
      "stop all sounds": "stop alle geluiden",
      "play drum %d.drum for %n beats": "speel slagwerk %d.drum %n tellen",
      "rest for %n beats": "pauzeer %n tellen",
      "play note %d.note for %n beats": "speel noot %d.note %n tellen",
      "set instrument to %d.instrument": "gebruik instrument %d.instrument",
      "change volume by %n": "verander volume met %n",
      "set volume to %n%": "zet volume op %n%",
      "change tempo by %n": "verander tempo met %n",
      "set tempo to %n bpm": "maak tempo %n bpm",
      "clear": "wis alles",
      "stamp": "stempel",
      "pen down": "pen neer",
      "pen up": "pen op",
      "set pen color to %c": "maak penkleur %c",
      "change pen color by %n": "verander penkleur met %n",
      "set pen color to %n": "maak penkleur %n",
      "change pen shade by %n": "verander penhelderheid met %n",
      "set pen shade to %n": "maak penhelderheid %n",
      "change pen size by %n": "verander pendikte met %n",
      "set pen size to %n": "maak pendikte %n",
      "when @greenFlag clicked": "wanneer @greenFlag wordt aangeklikt",
      "when %m.key key pressed": "wanneer %m.key wordt ingedrukt",
      "when this sprite clicked": "wanneer op deze sprite wordt geklikt",
      "when backdrop switches to %m.backdrop": "wanneer achtergrond verandert naar %m.backdrop",
      "when %m.triggerSensor > %n": "wanneer %m.triggerSensor > %n",
      "when I receive %m.broadcast": "wanneer ik signaal %m.broadcast ontvang",
      "broadcast %m.broadcast": "zend signaal %m.broadcast",
      "broadcast %m.broadcast and wait": "zend signaal %m.broadcast en wacht",
      "wait %n secs": "wacht %n sec.",
      "repeat %n": "herhaal %n keer",
      "forever": "herhaal",
      "if %b then": "als %b dan",
      "wait until %b": "wacht tot %b",
      "repeat until %b": "herhaal tot %b",
      "stop %m.stop": "stop %m.stop",
      "when I start as a clone": "wanneer ik als kloon start",
      "create clone of %m.spriteOnly": "maak kloon van %m.spriteOnly",
      "delete this clone": "verwijder deze kloon",
      "ask %s and wait": "vraag %s en wacht",
      "turn video %m.videoState": "zet video %m.videoState",
      "set video transparency to %n%": "maak videodoorzichtigheid %n%",
      "reset timer": "zet tijdklok op nul",
      "set %m.var to %s": "maak %m.var %s",
      "change %m.var by %n": "verander %m.var met %n",
      "show variable %m.var": "toon variabele %m.var",
      "hide variable %m.var": "verberg variabele %m.var",
      "add %s to %m.list": "voeg %s toe aan %m.list",
      "delete %d.listDeleteItem of %m.list": "verwijder item %d.listDeleteItem van %m.list",
      "if on edge, bounce": "keer om aan de rand",
      "insert %s at %d.listItem of %m.list": "voeg %s toe op %d.listItem van %m.list",
      "replace item %d.listItem of %m.list with %s": "vervang item %d.listItem van %m.list door %s",
      "show list %m.list": "toon lijst %m.list",
      "hide list %m.list": "verberg lijst %m.list",
      "x position": "x-positie",
      "y position": "y-positie",
      "direction": "richting",
      "costume #": "uiterlijk #",
      "size": "grootte",
      "backdrop name": "achtergrond naam",
      "backdrop #": "achtergrond #",
      "volume": "volume",
      "tempo": "tempo",
      "touching %m.touching?": "raak ik %m.touching?",
      "touching color %c?": "raak ik kleur %c?",
      "color %c is touching %c?": "kleur %c raakt %c?",
      "distance to %m.spriteOrMouse": "afstand tot %m.spriteOrMouse",
      "answer": "antwoord",
      "key %m.key pressed?": "toets %m.key ingedrukt?",
      "mouse down?": "muis ingedrukt?",
      "mouse x": "muis x",
      "mouse y": "muis y",
      "loudness": "geluidsterkte",
      "video %m.videoMotionType on %m.stageOrThis": "video %m.videoMotionType op %m.stageOrThis",
      "timer": "tijdklok",
      "%m.attribute of %m.spriteOrStage": "%m.attribute van %m.spriteOrStage",
      "current %m.timeAndDate": "huidige %m.timeAndDate",
      "days since 2000": "dagen sinds 2000",
      "username": "gebruikersnaam",
      "pick random %n to %n": "willekeurig getal tussen %n en %n",
      "%b and %b": "%b en %b",
      "%b or %b": "%b of %b",
      "not %b": "niet %b",
      "join %s %s": "voeg %s en %s samen",
      "letter %n of %s": "letter %n van %s",
      "length of %s": "lengte van %s",
      "%n mod %n": "%n modulo %n",
      "round %n": "afgerond %n",
      "%m.mathOp of %n": "%m.mathOp van %n",
      "item %d.listItem of %m.list": "item %d.listItem van %m.list",
      "length of %m.list": "lengte van %m.list",
      "%m.list contains %s?": "%m.list bevat %s?",
      "when %m.booleanSensor": "wanneer %m.booleanSensor",
      "when %m.sensor %m.lessMore %n": "als %m.sensor %m.lessMore %n",
      "sensor %m.booleanSensor?": "sensor %m.booleanSensor?",
      "%m.sensor sensor value": "waarde van sensor %m.sensor",
      "turn %m.motor on for %n secs": "zet %m.motor %n sec. aan",
      "turn %m.motor on": "zet %m.motor aan",
      "turn %m.motor off": "zet %m.motor uit",
      "set %m.motor power to %n": "zet %m.motor vermogen op %n",
      "set %m.motor2 direction to %m.motorDirection": "zet %m.motor2 richting op %m.motorDirection",
      "when distance %m.lessMore %n": "wanneer afstand %m.lessMore %n",
      "when tilt %m.eNe %n": "wanneer draaiing %m.eNe %n",
      "distance": "afstand",
      "tilt": "kantel",
      "else": "anders",
      "end": "einde"
    },
    "dropdowns": {
      "A connected": "A verbonden",
      "all": "alle",
      "all around": "helemaal rond",
      "B connected": "B verbonden",
      "brightness": "helderheid",
      "button pressed": "knop ingedrukt",
      "C connected": "C verbonden",
      "color": "kleur",
      "costume name": "naam uiterlijk",
      "D connected": "D verbonden",
      "date": "datum",
      "day of week": "dag van de week",
      "don't rotate": "niet draaien",
      "down arrow": "pijltje omlaag",
      "edge": "rand",
      "fisheye": "vissenoog",
      "ghost": "geest",
      "hour": "uur",
      "left arrow": "pijltje links",
      "left-right": "links-rechts",
      "light": "licht",
      "minute": "minuut",
      "month": "maand",
      "mosaic": "mozaïek",
      "motion": "beweging",
      "mouse-pointer": "muisaanwijzer",
      "myself": "mijzelf",
      "off": "uit",
      "on": "aan",
      "on-flipped": "aan-gespiegeld",
      "other scripts in sprite": "andere scripts in sprite",
      "pixelate": "pixeleren",
      "previous backdrop": "vorige achtergrond",
      "resistance-A": "weerstand-A",
      "resistance-B": "weerstand-B",
      "resistance-C": "weerstand-C",
      "resistance-D": "weerstand-D",
      "reverse": "omkeren",
      "right arrow": "pijltje rechts",
      "second": "seconde",
      "slider": "schuif",
      "sound": "geluid",
      "space": "spatiebalk",
      "Stage": "Speelveld",
      "that way": "daarheen",
      "this script": "dit script",
      "this sprite": "deze sprite",
      "this way": "hierheen",
      "up arrow": "pijltje omhoog",
      "video motion": "videobeweging",
      "whirl": "draaikolk",
      "year": "jaar"
    },
    "palette": {
      "Motion": "Beweging",
      "Looks": "Uiterlijken",
      "Sound": "Geluid",
      "Pen": "Pen",
      "Data": "Data",
      "variable": "variabele",
      "list": "lijst",
      "Events": "Gebeurtenissen",
      "Control": "Besturen",
      "Sensing": "Waarnemen",
      "Operators": "Functies",
      "More Blocks": "Meer blokken",
      "Tips": "Tips"
    },
    "math": [
      "absoluut",
      "beneden",
      "boven",
      "wortel",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "ln",
      "log",
      "e ^",
      "10 ^"
    ],
    "osis": [
      "andere scripts in sprite",
      "andere scripts op het speelveld"
    ]
  },
  "pl": {
    "aliases": {
      "obróć w lewo o %n stopni": "turn @turnLeft %n degrees",
      "obróć w prawo o %n stopni": "turn @turnRight %n degrees",
      "kiedy kliknięto zieloną flagę": "when @greenFlag clicked",
      "koniec": "end"
    },
    "define": [
      "definiuj"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "przesuń o %n kroków",
      "turn @turnRight %n degrees": "obróć @turnRight o %n stopni",
      "turn @turnLeft %n degrees": "obróć @turnLeft o %n stopni",
      "point in direction %d.direction": "ustaw kierunek na %d.direction",
      "point towards %m.spriteOrMouse": "ustaw w stronę %m.spriteOrMouse",
      "go to x:%n y:%n": "idź do x:%n y:%n",
      "go to %m.location": "idź do %m.location",
      "glide %n secs to x:%n y:%n": "leć przez %n s do x:%n y:%n",
      "change x by %n": "zmień x o %n",
      "set x to %n": "ustaw x na %n",
      "change y by %n": "zmień y o %n",
      "set y to %n": "ustaw y na %n",
      "set rotation style %m.rotationStyle": "ustaw styl obrotu %m.rotationStyle",
      "say %s for %n secs": "powiedz %s przez %n s",
      "say %s": "powiedz %s",
      "think %s for %n secs": "pomyśl %s przez %n s",
      "think %s": "pomyśl %s",
      "show": "pokaż",
      "hide": "ukryj",
      "switch costume to %m.costume": "zmień kostium na %m.costume",
      "next costume": "następny kostium",
      "next backdrop": "następne tło",
      "switch backdrop to %m.backdrop": "zmień tło na %m.backdrop",
      "switch backdrop to %m.backdrop and wait": "zmień tło na %m.backdrop i czekaj",
      "change %m.effect effect by %n": "zmień efekt %m.effect o %n",
      "set %m.effect effect to %n": "ustaw efekt %m.effect na %n",
      "clear graphic effects": "wyczyść efekty graficzne",
      "change size by %n": "zmień rozmiar o %n",
      "set size to %n%": "ustaw rozmiar na %n%",
      "go to front": "na wierzch",
      "go back %n layers": "wróć o %n warstw",
      "play sound %m.sound": "zagraj dźwięk %m.sound",
      "play sound %m.sound until done": "zagraj dźwięk %m.sound i czekaj",
      "stop all sounds": "zatrzymaj wszystkie dźwięki",
      "play drum %d.drum for %n beats": "zagraj bęben %d.drum przez %n taktów",
      "rest for %n beats": "pauzuj przez %n taktów",
      "play note %d.note for %n beats": "zagraj nutę %d.note przez %n taktów",
      "set instrument to %d.instrument": "ustaw instrument na %d.instrument",
      "change volume by %n": "zmień głośność o %n",
      "set volume to %n%": "ustaw głośność na %n%",
      "change tempo by %n": "zmień tempo o %n",
      "set tempo to %n bpm": "ustaw tempo %n taktów na minutę",
      "clear": "wyczyść",
      "stamp": "stempluj",
      "pen down": "przyłóż pisak",
      "pen up": "podnieś pisak",
      "set pen color to %c": "ustaw kolor pisaka na %c",
      "change pen color by %n": "zmień kolor pisaka o %n",
      "set pen color to %n": "ustaw kolor pisaka na %n",
      "change pen shade by %n": "zmień odcień pisaka o %n",
      "set pen shade to %n": "ustaw odcień pisaka na %n",
      "change pen size by %n": "zmień rozmiar pisaka o %n",
      "set pen size to %n": "ustaw rozmiar pisaka na %n",
      "when @greenFlag clicked": "kiedy @greenFlag",
      "when %m.key key pressed": "kiedy klawisz %m.key naciśnięty",
      "when this sprite clicked": "kiedy duszek kliknięty",
      "when backdrop switches to %m.backdrop": "kiedy tło zmieni się na %m.backdrop",
      "when %m.triggerSensor > %n": "kiedy %m.triggerSensor > %n",
      "when I receive %m.broadcast": "kiedy otrzymam %m.broadcast",
      "broadcast %m.broadcast": "nadaj %m.broadcast",
      "broadcast %m.broadcast and wait": "nadaj %m.broadcast i czekaj",
      "wait %n secs": "czekaj %n s",
      "repeat %n": "powtórz %n razy",
      "forever": "zawsze",
      "if %b then": "jeżeli %b to",
      "wait until %b": "czekaj aż %b",
      "repeat until %b": "powtarzaj aż %b",
      "stop %m.stop": "zatrzymaj %m.stop",
      "when I start as a clone": "kiedy zaczynam jako klon",
      "create clone of %m.spriteOnly": "sklonuj %m.spriteOnly",
      "delete this clone": "usuń tego klona",
      "ask %s and wait": "zapytaj %s i czekaj",
      "turn video %m.videoState": "kamera %m.videoState",
      "set video transparency to %n%": "ustaw przezroczystość kamery na %n%",
      "reset timer": "zeruj stoper",
      "set %m.var to %s": "ustaw %m.var na %s",
      "change %m.var by %n": "zmień %m.var o %n",
      "show variable %m.var": "pokaż zmienną %m.var",
      "hide variable %m.var": "ukryj zmienną %m.var",
      "add %s to %m.list": "dodaj %s do %m.list",
      "delete %d.listDeleteItem of %m.list": "usuń %d.listDeleteItem z %m.list",
      "if on edge, bounce": "jeżeli na brzegu, odbij się",
      "insert %s at %d.listItem of %m.list": "wstaw %s na pozycji %d.listItem do %m.list",
      "replace item %d.listItem of %m.list with %s": "zamień element %d.listItem z %m.list na %s",
      "show list %m.list": "pokaż listę %m.list",
      "hide list %m.list": "ukryj listę %m.list",
      "x position": "współrzędna x",
      "y position": "współrzędna y",
      "direction": "kierunek",
      "costume #": "kostium #",
      "size": "rozmiar",
      "backdrop name": "nazwa tła",
      "backdrop #": "tło #",
      "volume": "głośność",
      "tempo": "tempo",
      "touching %m.touching?": "dotyka %m.touching?",
      "touching color %c?": "dotyka koloru %c?",
      "color %c is touching %c?": "czy kolor %c dotyka %c?",
      "distance to %m.spriteOrMouse": "odległość do %m.spriteOrMouse",
      "answer": "odpowiedź",
      "key %m.key pressed?": "klawisz %m.key naciśnięty?",
      "mouse down?": "wciśnięty klawisz myszy?",
      "mouse x": "x myszy",
      "mouse y": "y myszy",
      "loudness": "głośność",
      "video %m.videoMotionType on %m.stageOrThis": "%m.videoMotionType kamery na %m.stageOrThis",
      "timer": "stoper",
      "%m.attribute of %m.spriteOrStage": "%m.attribute z %m.spriteOrStage",
      "current %m.timeAndDate": "aktualna %m.timeAndDate",
      "days since 2000": "dni od 2000",
      "username": "nazwa użytkownika",
      "pick random %n to %n": "losuj od %n do %n",
      "%b and %b": "%b i %b",
      "%b or %b": "%b lub %b",
      "not %b": "nie %b",
      "join %s %s": "połącz %s i %s",
      "letter %n of %s": "litera %n z %s",
      "length of %s": "długość %s",
      "%n mod %n": "%n mod %n",
      "round %n": "zaokrąglij %n",
      "%m.mathOp of %n": "%m.mathOp z %n",
      "item %d.listItem of %m.list": "element %d.listItem z %m.list",
      "length of %m.list": "długość %m.list",
      "%m.list contains %s?": "%m.list zawiera %s?",
      "when %m.booleanSensor": "kiedy %m.booleanSensor",
      "when %m.sensor %m.lessMore %n": "kiedy %m.sensor %m.lessMore %n",
      "sensor %m.booleanSensor?": "czujnik %m.booleanSensor?",
      "%m.sensor sensor value": "wartość czujnika %m.sensor",
      "turn %m.motor on for %n secs": "włącz silnik %m.motor na %n s",
      "turn %m.motor on": "włącz silnik %m.motor",
      "turn %m.motor off": "wyłącz silnik %m.motor",
      "set %m.motor power to %n": "ustaw moc silnika %m.motor na %n",
      "set %m.motor2 direction to %m.motorDirection": "ustaw kierunek silnika %m.motor2 na %m.motorDirection",
      "when distance %m.lessMore %n": "kiedy odległość %m.lessMore %n",
      "when tilt %m.eNe %n": "kiedy pochylenie %m.eNe %n",
      "distance": "odległość",
      "tilt": "wychylenie",
      "else": "w przeciwnym razie",
      "end": "koniec"
    },
    "dropdowns": {
      "A connected": "Podłączone",
      "all": "wszystko",
      "all around": "dookoła",
      "B connected": "B podłączone",
      "brightness": "jasność",
      "button pressed": "przycisk naciśnięty",
      "C connected": "C podłączone",
      "color": "kolor",
      "costume name": "nazwa kostiumu",
      "D connected": "D podłączone",
      "date": "data",
      "day of week": "dzień tygodnia",
      "don't rotate": "nie obracaj",
      "down arrow": "strzałka w dół",
      "edge": "krawędź",
      "fisheye": "rybie oko",
      "ghost": "duch",
      "hour": "godzina",
      "left arrow": "strzałka w lewo",
      "left-right": "lewo-prawo",
      "light": "światło",
      "minute": "minuta",
      "month": "miesiąc",
      "mosaic": "mozaika",
      "motion": "ruch",
      "mouse-pointer": "wskaźnik myszy",
      "myself": "siebie",
      "off": "wyłączony",
      "on": "włączony",
      "on-flipped": "na odwrót",
      "other scripts in sprite": "inne skrypty duszka",
      "pixelate": "pikselizacja",
      "previous backdrop": "poprzednie tło",
      "resistance-A": "opór-A",
      "resistance-B": "opór-B",
      "resistance-C": "opór-C",
      "resistance-D": "opór-D",
      "reverse": "odwróć",
      "right arrow": "strzałka w prawo",
      "second": "sekunda",
      "slider": "suwak",
      "sound": "dźwięk",
      "space": "spacja",
      "Stage": "Scena",
      "that way": "w tamten sposób",
      "this script": "ten skrypt",
      "this sprite": "ten duszek",
      "this way": "w ten sposób",
      "up arrow": "strzałka w górę",
      "video motion": "ruch w kamerze",
      "whirl": "wir",
      "year": "rok"
    },
    "palette": {
      "Motion": "Ruch",
      "Looks": "Wygląd",
      "Sound": "Dźwięk",
      "Pen": "Pisak",
      "Data": "Dane",
      "variable": "zmienna",
      "list": "lista",
      "Events": "Zdarzenia",
      "Control": "Kontrola",
      "Sensing": "Czujniki",
      "Operators": "Wyrażenia",
      "More Blocks": "Więcej bloków",
      "Tips": "Wskazówki"
    },
    "math": [
      "wartość bezwzględna",
      "podłoga",
      "sufit",
      "pierwiastek kwadratowy",
      "sin",
      "cos",
      "tan",
      "arcsin",
      "arccos",
      "arctan",
      "ln",
      "log",
      "e ^",
      "10 ^"
    ],
    "osis": [
      "inne skrypty duszka",
      "inne skrypty na scenie"
    ]
  },
  "pt": {
    "aliases": {
      "gira para a esquerda %n º": "turn @turnLeft %n degrees",
      "gira para a direita %n º": "turn @turnRight %n degrees",
      "Quando alguém clicar na bandeira verde": "when @greenFlag clicked",
      "fim": "end"
    },
    "define": [
      "Define"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "anda %n passos",
      "turn @turnRight %n degrees": "gira @turnRight %n °",
      "turn @turnLeft %n degrees": "gira @turnLeft %n °",
      "point in direction %d.direction": "altera a tua direcção para %d.direction °",
      "point towards %m.spriteOrMouse": "aponta em direcção a %m.spriteOrMouse",
      "go to x:%n y:%n": "vai para as coordenadas (x:%n , y:%n )",
      "go to %m.location": "vai para %m.location",
      "glide %n secs to x:%n y:%n": "desliza em %n s para as coordenadas (x:%n , y:%n )",
      "change x by %n": "adiciona %n à tua coordenada x",
      "set x to %n": "altera a tua coordenada x para %n",
      "change y by %n": "adiciona %n à tua coordenada y",
      "set y to %n": "altera a tua coordenada y para %n",
      "set rotation style %m.rotationStyle": "altera o teu estilo de rotação para %m.rotationStyle",
      "say %s for %n secs": "diz %s durante %n s",
      "say %s": "diz %s",
      "think %s for %n secs": "pensa %s durante %n s",
      "think %s": "pensa %s",
      "show": "mostra-te",
      "hide": "esconde-te",
      "switch costume to %m.costume": "muda o teu traje para %m.costume",
      "next costume": "passa para o teu próximo traje",
      "next backdrop": "passa para o teu próximo cenário",
      "switch backdrop to %m.backdrop": "muda o cenário para %m.backdrop",
      "switch backdrop to %m.backdrop and wait": "muda o cenário para %m.backdrop e espera",
      "change %m.effect effect by %n": "adiciona ao teu efeito %m.effect o valor %n",
      "set %m.effect effect to %n": "altera o teu efeito %m.effect para %n",
      "clear graphic effects": "cancela os teus efeitos gráficos",
      "change size by %n": "adiciona %n% ao teu tamanho",
      "set size to %n%": "altera o teu tamanho para %n%",
      "go to front": "vem para a frente",
      "go back %n layers": "recua %n camadas",
      "play sound %m.sound": "toca o som %m.sound",
      "play sound %m.sound until done": "toca o som %m.sound até terminar",
      "stop all sounds": "pára todos os sons",
      "play drum %d.drum for %n beats": "toca a percussão %d.drum durante %n tempos",
      "rest for %n beats": "faz uma pausa de %n tempos",
      "play note %d.note for %n beats": "toca a nota %d.note durante %n tempos",
      "set instrument to %d.instrument": "altera o teu instrumento para %d.instrument",
      "change volume by %n": "adiciona %n% ao teu volume",
      "set volume to %n%": "altera o teu volume para %n%",
      "change tempo by %n": "adiciona %n bpm ao teu andamento",
      "set tempo to %n bpm": "altera o teu andamento para %n bpm",
      "clear": "apaga tudo do palco",
      "stamp": "carimba-te",
      "pen down": "baixa a tua caneta",
      "pen up": "levanta a tua caneta",
      "set pen color to %c": "altera a cor da tua caneta para %c",
      "change pen color by %n": "adiciona %n à cor da tua caneta",
      "set pen color to %n": "altera a cor da tua caneta para %n",
      "change pen shade by %n": "adiciona %n ao tom da tua caneta",
      "set pen shade to %n": "altera o tom da tua caneta para %n",
      "change pen size by %n": "adiciona %n à espessura da tua caneta",
      "set pen size to %n": "altera a espessura da tua caneta para %n",
      "when @greenFlag clicked": "Quando alguém clicar em @greenFlag",
      "when %m.key key pressed": "Quando alguém pressionar a tecla %m.key",
      "when this sprite clicked": "Quando alguém clicar em ti",
      "when backdrop switches to %m.backdrop": "Quando o cenário mudar para %m.backdrop",
      "when %m.triggerSensor > %n": "Quando o valor do sensor %m.triggerSensor exceder %n",
      "when I receive %m.broadcast": "Quando receberes a mensagem %m.broadcast",
      "broadcast %m.broadcast": "difunde a mensagem %m.broadcast",
      "broadcast %m.broadcast and wait": "difunde a mensagem %m.broadcast e espera",
      "wait %n secs": "espera %n s",
      "repeat %n": "repete %n vezes",
      "forever": "repete para sempre",
      "if %b then": "se %b , então",
      "wait until %b": "espera até que %b",
      "repeat until %b": "até que %b , repete",
      "stop %m.stop": "pára %m.stop",
      "when I start as a clone": "Quando fores criado como um clone",
      "create clone of %m.spriteOnly": "cria um clone de %m.spriteOnly",
      "delete this clone": "remove-te como clone",
      "ask %s and wait": "pergunta %s e espera pela resposta",
      "turn video %m.videoState": "altera o estado do vídeo para %m.videoState",
      "set video transparency to %n%": "altera a transparência do vídeo para %n%",
      "reset timer": "reinicia o cronómetro",
      "set %m.var to %s": "altera %m.var para %s",
      "change %m.var by %n": "adiciona a %m.var o valor %n",
      "show variable %m.var": "mostra a variável %m.var",
      "hide variable %m.var": "esconde a variável %m.var",
      "add %s to %m.list": "acrescenta %s a %m.list",
      "delete %d.listDeleteItem of %m.list": "remove %d.listDeleteItem de %m.list",
      "if on edge, bounce": "se estiveres a bater na borda, ressalta",
      "insert %s at %d.listItem of %m.list": "insere %s como %d.listItem de %m.list",
      "replace item %d.listItem of %m.list with %s": "substitui %d.listItem de %m.list por %s",
      "show list %m.list": "mostra a lista %m.list",
      "hide list %m.list": "esconde a lista %m.list",
      "x position": "a coordenada x da posição",
      "y position": "a coordenada y da posição",
      "direction": "a direcção",
      "costume #": "o número do traje",
      "size": "o tamanho",
      "backdrop name": "o nome do cenário",
      "backdrop #": "o número do cenário",
      "volume": "o volume",
      "tempo": "o andamento",
      "touching %m.touching?": "estás a tocar em %m.touching",
      "touching color %c?": "estás a tocar na cor %c",
      "color %c is touching %c?": "a cor %c está a tocar na cor %c",
      "distance to %m.spriteOrMouse": "a distância até %m.spriteOrMouse",
      "answer": "a resposta",
      "key %m.key pressed?": "a tecla %m.key está a ser pressionada",
      "mouse down?": "o botão do rato está pressionado",
      "mouse x": "a coordenada x do rato",
      "mouse y": "a coordenada y do rato",
      "loudness": "o volume",
      "video %m.videoMotionType on %m.stageOrThis": "%m.videoMotionType do vídeo em %m.stageOrThis",
      "timer": "o valor do cronómetro",
      "%m.attribute of %m.spriteOrStage": "%m.attribute de %m.spriteOrStage",
      "current %m.timeAndDate": "%m.timeAndDate actual",
      "days since 2000": "o número de dias desde 2000",
      "username": "o nome de utilizador",
      "pick random %n to %n": "um valor ao acaso entre %n e %n",
      "%b and %b": "%b e %b",
      "%b or %b": "%b ou %b",
      "not %b": "é falso que %b",
      "join %s %s": "a junção de %s com %s",
      "letter %n of %s": "o caractere %n de %s",
      "length of %s": "o comprimento de %s",
      "%n mod %n": "o resto de %n a dividir por %n",
      "round %n": "o arredondamento de %n",
      "%m.mathOp of %n": "%m.mathOp de %n",
      "item %d.listItem of %m.list": "%d.listItem de %m.list",
      "length of %m.list": "o comprimento de %m.list",
      "%m.list contains %s?": "%m.list contém %s",
      "when %m.booleanSensor": "Quando o sensor %m.booleanSensor estiver activo",
      "when %m.sensor %m.lessMore %n": "Quando o valor do sensor %m.sensor for %m.lessMore %n",
      "sensor %m.booleanSensor?": "o sensor %m.booleanSensor está activo",
      "%m.sensor sensor value": "o valor do sensor %m.sensor",
      "turn %m.motor on for %n secs": "liga %m.motor durante %n s",
      "turn %m.motor on": "liga %m.motor",
      "turn %m.motor off": "desliga %m.motor",
      "set %m.motor power to %n": "altera a potência de %m.motor para %n%",
      "set %m.motor2 direction to %m.motorDirection": "altera a direcção de %m.motor2 para %m.motorDirection",
      "when distance %m.lessMore %n": "Quando a distância for %m.lessMore que %n",
      "when tilt %m.eNe %n": "Quando a inclinação for %m.eNe a %n",
      "distance": "a distância",
      "tilt": "a inclinação",
      "else": "senão,",
      "end": "fim"
    },
    "dropdowns": {
      "A connected": "A conectado",
      "all": "tudo",
      "all around": "gira a toda a volta",
      "B connected": "B conectado",
      "brightness": "brilho",
      "button pressed": "botão pressionado",
      "C connected": "C conectado",
      "color": "cor",
      "costume name": "o nome do traje",
      "D connected": "D conectado",
      "date": "a data",
      "day of week": "o dia da semana",
      "don't rotate": "não gires",
      "down arrow": "seta para baixo",
      "edge": "a borda",
      "fisheye": "olho de peixe",
      "ghost": "fantasma",
      "hour": "a hora",
      "left arrow": "seta para a esquerda",
      "left-right": "olha apenas para a esquerda e para a direita",
      "light": "luz",
      "minute": "o minuto",
      "month": "o mês",
      "mosaic": "mosaico",
      "motion": "o movimento",
      "mouse-pointer": "o ponteiro do rato",
      "myself": "ti mesmo",
      "off": "desligado",
      "on": "ligado",
      "on-flipped": "ligado e espelhado",
      "other scripts in sprite": "os teus outros guiões",
      "pixelate": "pixelização",
      "previous backdrop": "cenário anterior",
      "resistance-A": "resistência-A",
      "resistance-B": "resistência-B",
      "resistance-C": "resistência-C",
      "resistance-D": "resistência-D",
      "reverse": "para trás",
      "right arrow": "seta para a direita",
      "second": "o segundo",
      "slider": "deslizador",
      "sound": "som",
      "space": "espaço",
      "Stage": "o palco",
      "that way": "por aí",
      "this script": "este guião",
      "this sprite": "ti mesmo",
      "this way": "por aqui",
      "up arrow": "seta para cima",
      "video motion": "o movimento do vídeo",
      "whirl": "remoinho",
      "year": "o ano"
    },
    "palette": {
      "Motion": "Movimento",
      "Looks": "Aparência",
      "Sound": "Som",
      "Pen": "Caneta",
      "Data": "Dados",
      "variable": "variável",
      "list": "lista",
      "Events": "Eventos",
      "Control": "Controlo",
      "Sensing": "Sensores",
      "Operators": "Operadores",
      "More Blocks": "Mais Blocos",
      "Tips": "Dicas"
    },
    "math": [
      "o valor absoluto",
      "o chão (o maior inteiro não superior)",
      "o tecto (menor inteiro não inferior)",
      "a raiz quadrada",
      "o seno",
      "cosseno",
      "a tangente",
      "o arco-seno",
      "o arco-cosseno",
      "o arco-tangente",
      "o logaritmo natural",
      "o logaritmo",
      "a exponencial",
      "10 ^"
    ],
    "osis": [
      "os teus outros guiões",
      "os teus outros guiões"
    ]
  },
  "ru": {
    "aliases": {
      "повернуть влево на %n градусов": "turn @turnLeft %n degrees",
      "повернуть вправо на %n градусов": "turn @turnRight %n degrees",
      "когда щёлкнут по зелёному флагу": "when @greenFlag clicked",
      "конец": "end"
    },
    "define": [
      "определить"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "идти %n шагов",
      "turn @turnRight %n degrees": "повернуть @turnRight на %n градусов",
      "turn @turnLeft %n degrees": "повернуть @turnLeft на %n градусов",
      "point in direction %d.direction": "повернуть в направлении %d.direction",
      "point towards %m.spriteOrMouse": "повернуться к %m.spriteOrMouse",
      "go to x:%n y:%n": "перейти в x:%n y:%n",
      "go to %m.location": "перейти в %m.location",
      "glide %n secs to x:%n y:%n": "плыть %n секунд в точку x:%n y:%n",
      "change x by %n": "изменить x на %n",
      "set x to %n": "установить x в %n",
      "change y by %n": "изменить y на %n",
      "set y to %n": "установить y в %n",
      "set rotation style %m.rotationStyle": "стиль вращения %m.rotationStyle",
      "say %s for %n secs": "говорить %s в течение %n секунд",
      "say %s": "сказать %s",
      "think %s for %n secs": "думать %s %n секунд",
      "think %s": "думать %s",
      "show": "показаться",
      "hide": "спрятаться",
      "switch costume to %m.costume": "сменить костюм на %m.costume",
      "next costume": "следующий костюм",
      "next backdrop": "следующий фон",
      "switch backdrop to %m.backdrop": "сменить фон на %m.backdrop",
      "switch backdrop to %m.backdrop and wait": "сменить фон на %m.backdrop и ждать",
      "change %m.effect effect by %n": "изменить %m.effect эффект на %n",
      "set %m.effect effect to %n": "установить эффект %m.effect в значение %n",
      "clear graphic effects": "убрать графические эффекты",
      "change size by %n": "изменить размер на %n",
      "set size to %n%": "установить размер %n%",
      "go to front": "перейти в верхний слой",
      "go back %n layers": "перейти назад на %n слоев",
      "play sound %m.sound": "играть звук %m.sound",
      "play sound %m.sound until done": "играть звук %m.sound до конца",
      "stop all sounds": "остановить все звуки",
      "play drum %d.drum for %n beats": "барабану %d.drum играть %n тактов",
      "rest for %n beats": "подождать %n тактов",
      "play note %d.note for %n beats": "играть ноту %d.note %n тактов",
      "set instrument to %d.instrument": "выбрать инструмент %d.instrument",
      "change volume by %n": "изменить громкость на %n",
      "set volume to %n%": "установить громкость %n%",
      "change tempo by %n": "изменить темп на %n",
      "set tempo to %n bpm": "установить темп %n bpm",
      "clear": "очистить",
      "stamp": "печать",
      "pen down": "опустить перо",
      "pen up": "поднять перо",
      "set pen color to %c": "установить цвет %c для пера",
      "change pen color by %n": "изменить цвет пера на %n",
      "set pen color to %n": "установить цвет пера %n",
      "change pen shade by %n": "изменить тень пера на %n",
      "set pen shade to %n": "установить тень пера %n",
      "change pen size by %n": "изменить размер пера на %n",
      "set pen size to %n": "установить размер пера %n",
      "when @greenFlag clicked": "когда щелкнут по @greenFlag",
      "when %m.key key pressed": "когда клавиша %m.key нажата",
      "when this sprite clicked": "когда спрайт нажат",
      "when backdrop switches to %m.backdrop": "когда фон меняется на %m.backdrop",
      "when %m.triggerSensor > %n": "когда %m.triggerSensor > %n",
      "when I receive %m.broadcast": "когда я получу %m.broadcast",
      "broadcast %m.broadcast": "передать %m.broadcast",
      "broadcast %m.broadcast and wait": "передать %m.broadcast и ждать",
      "wait %n secs": "ждать %n секунд",
      "repeat %n": "повторить %n",
      "forever": "всегда",
      "if %b then": "если %b , то",
      "wait until %b": "ждать до %b",
      "repeat until %b": "повторять пока не %b",
      "stop %m.stop": "стоп %m.stop",
      "when I start as a clone": "когда я начинаю как клон",
      "create clone of %m.spriteOnly": "создать клон %m.spriteOnly",
      "delete this clone": "удалить клон",
      "ask %s and wait": "спросить %s и ждать",
      "turn video %m.videoState": "повернуть видео на %m.videoState",
      "set video transparency to %n%": "установить прозрачность видео %n%",
      "reset timer": "перезапустить таймер",
      "set %m.var to %s": "задать %m.var значение %s",
      "change %m.var by %n": "изменить %m.var на %n",
      "show variable %m.var": "показать переменную %m.var",
      "hide variable %m.var": "скрыть переменную %m.var",
      "add %s to %m.list": "добавить %s к %m.list",
      "delete %d.listDeleteItem of %m.list": "удалить %d.listDeleteItem из %m.list",
      "if on edge, bounce": "если на краю, оттолкнуться",
      "insert %s at %d.listItem of %m.list": "вставить %s в %d.listItem из %m.list",
      "replace item %d.listItem of %m.list with %s": "заменить элемент %d.listItem в %m.list на %s",
      "show list %m.list": "показать список %m.list",
      "hide list %m.list": "скрыть список %m.list",
      "x position": "положение x",
      "y position": "положение y",
      "direction": "направление",
      "costume #": "костюм #",
      "size": "размер",
      "backdrop name": "имя фона",
      "backdrop #": "фон #",
      "volume": "громкость",
      "tempo": "темп",
      "touching %m.touching?": "касается %m.touching?",
      "touching color %c?": "касается цвета %c?",
      "color %c is touching %c?": "цвет %c касается %c?",
      "distance to %m.spriteOrMouse": "расстояние до %m.spriteOrMouse",
      "answer": "ответ",
      "key %m.key pressed?": "клавиша %m.key нажата?",
      "mouse down?": "мышка нажата?",
      "mouse x": "мышка по x",
      "mouse y": "мышка по y",
      "loudness": "громкость",
      "video %m.videoMotionType on %m.stageOrThis": "видео %m.videoMotionType на %m.stageOrThis",
      "timer": "таймер",
      "%m.attribute of %m.spriteOrStage": "%m.attribute от %m.spriteOrStage",
      "current %m.timeAndDate": "текущие %m.timeAndDate",
      "days since 2000": "дней с 01.01.2000",
      "username": "имя участника",
      "pick random %n to %n": "выдать случайное от %n до %n",
      "%b and %b": "%b и %b",
      "%b or %b": "%b или %b",
      "not %b": "не %b",
      "join %s %s": "слить %s и %s",
      "letter %n of %s": "буква %n в %s",
      "length of %s": "длина %s",
      "%n mod %n": "остаток от деления %n на %n",
      "round %n": "округлить %n",
      "%m.mathOp of %n": "%m.mathOp от %n",
      "item %d.listItem of %m.list": "элемент %d.listItem из %m.list",
      "length of %m.list": "длина списка %m.list",
      "%m.list contains %s?": "%m.list содержит %s?",
      "when %m.booleanSensor": "сенсор %m.booleanSensor",
      "when %m.sensor %m.lessMore %n": "когда %m.sensor %m.lessMore %n",
      "sensor %m.booleanSensor?": "сенсор %m.booleanSensor?",
      "%m.sensor sensor value": "%m.sensor значение датчика",
      "turn %m.motor on for %n secs": "включить %m.motor на %n секунд",
      "turn %m.motor on": "включить %m.motor",
      "turn %m.motor off": "выключить %m.motor",
      "set %m.motor power to %n": "задать мощность %m.motor значение %n",
      "set %m.motor2 direction to %m.motorDirection": "задать для %m.motor2 направление %m.motorDirection",
      "when distance %m.lessMore %n": "когда расстояние %m.lessMore %n",
      "when tilt %m.eNe %n": "когда наклон %m.eNe %n",
      "distance": "расстояние",
      "tilt": "наклон",
      "else": "иначе",
      "end": "конец"
    },
    "dropdowns": {
      "A connected": "A соединён",
      "all": "все",
      "all around": "кругом",
      "B connected": "B соединен",
      "brightness": "яркость",
      "button pressed": "кнопка нажата",
      "C connected": "C соединен",
      "color": "цвет",
      "costume name": "имя костюма",
      "D connected": "D соединен",
      "date": "дата",
      "day of week": "день недели",
      "don't rotate": "не вращать",
      "down arrow": "стрелка вниз",
      "edge": "край",
      "fisheye": "рыбий глаз",
      "ghost": "призрак",
      "hour": "час",
      "left arrow": "стрелка влево",
      "left-right": "влево-вправо",
      "light": "свет",
      "minute": "минута",
      "month": "месяц",
      "mosaic": "мозаика",
      "motion": "движение",
      "mouse-pointer": "указатель мышки",
      "myself": "себя самого",
      "off": "выключить",
      "on": "включить",
      "on-flipped": "перевернутый",
      "other scripts in sprite": "другие скрипты спрайта",
      "pixelate": "укрупнение пикселей",
      "previous backdrop": "предыдущий фон",
      "resistance-A": "сопротивление-A",
      "resistance-B": "сопротивление-B",
      "resistance-C": "сопротивление-C",
      "resistance-D": "сопротивление-D",
      "reverse": "вернуться",
      "right arrow": "стрелка направо",
      "second": "секунда",
      "slider": "рычажок",
      "sound": "звук",
      "space": "пробел",
      "Stage": "Сцена",
      "that way": "туда",
      "this script": "этот скрипт",
      "this sprite": "этот спрайт",
      "this way": "сюда",
      "up arrow": "стрелка вверх",
      "video motion": "движение видео",
      "whirl": "завихрение",
      "year": "год"
    },
    "palette": {
      "Motion": "Движение",
      "Looks": "Внешность",
      "Sound": "Звук",
      "Pen": "Перо",
      "Data": "Данные",
      "variable": "переменная",
      "list": "список",
      "Events": "События",
      "Control": "Управление",
      "Sensing": "Сенсоры",
      "Operators": "Операторы",
      "More Blocks": "Другие блоки",
      "Tips": "Подсказки"
    },
    "math": [
      "модуль",
      "пол",
      "предел",
      "квадратный корень",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "ln",
      "log",
      "e ^",
      "10 ^"
    ],
    "osis": [
      "другие скрипты спрайта",
      "другие скрипты сцены"
    ]
  },
  "tr": {
    "aliases": {
      "_ derece sola dön": "turn @turnLeft %n degrees",
      "_ derece sağa dön": "turn @turnRight %n degrees",
      "_ derece saatin tersi yönde dön": "turn @turnLeft %n degrees",
      "_ derece saat yönünde dön": "turn @turnRight %n degrees",
      "yeşil bayrak tıklandığında": "when @greenFlag clicked",
      "son": "end"
    },
    "define": [
      "tanımla"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "%n adım git",
      "turn @turnRight %n degrees": "@turnRight %n derece dön",
      "turn @turnLeft %n degrees": "@turnLeft %n derece dön",
      "point in direction %d.direction": "%d.direction yönüne dön",
      "point towards %m.spriteOrMouse": "%m.spriteOrMouse 'ye doğru dön",
      "go to x:%n y:%n": "x:%n y:%n noktasına git",
      "go to %m.location": "%m.location 'na git",
      "glide %n secs to x:%n y:%n": "%n sn.de x:%n y:%n a süzül",
      "change x by %n": "x'i %n arttır",
      "set x to %n": "x, %n olsun",
      "change y by %n": "y'yi %n arttır",
      "set y to %n": "y, %n olsun",
      "set rotation style %m.rotationStyle": "kuklanın şekli %m.rotationStyle",
      "say %s for %n secs": "%s de %n saniye",
      "say %s": "%s de",
      "think %s for %n secs": "%s diye düşün %n saniye",
      "think %s": "%s diye düşün",
      "show": "görün",
      "hide": "gizlen",
      "switch costume to %m.costume": "%m.costume kılığına geç",
      "next costume": "sonraki kılık",
      "next backdrop": "sonraki dekor",
      "switch backdrop to %m.backdrop": "%m.backdrop dekoruna geç",
      "switch backdrop to %m.backdrop and wait": "%m.backdrop dekoruna geç ve bekle",
      "change %m.effect effect by %n": "%m.effect etkisini %n arttır",
      "set %m.effect effect to %n": "%m.effect etkisi %n olsun",
      "clear graphic effects": "görsel etkileri temizle",
      "change size by %n": "%n birim büyüt",
      "set size to %n%": "büyüklüğü %%n yap",
      "go to front": "üste çık",
      "go back %n layers": "%n katman alta in",
      "play sound %m.sound": "%m.sound sesini çal",
      "play sound %m.sound until done": "%m.sound sesini bitene kadar çal",
      "stop all sounds": "tüm sesleri durdur",
      "play drum %d.drum for %n beats": "%d.drum davulunu %n vuruş çal",
      "rest for %n beats": "%n vuruş sus",
      "play note %d.note for %n beats": "%d.note notasını %n vuruş çal",
      "set instrument to %d.instrument": "çalgıyı %d.instrument yap",
      "change volume by %n": "sesi %n birim yükselt",
      "set volume to %n%": "ses şiddeti %%n olsun",
      "change tempo by %n": "tempoyu %n arttır",
      "set tempo to %n bpm": "tempo %n vuruş/dk olsun",
      "clear": "temizle",
      "stamp": "iz bırak",
      "pen down": "kalemi bastır",
      "pen up": "kalemi kaldır",
      "set pen color to %c": "kalem rengini %c yap",
      "change pen color by %n": "kalem rengini %n arttır",
      "set pen color to %n": "kalem rengini %n yap",
      "change pen shade by %n": "kalem tonunu %n arttır",
      "set pen shade to %n": "kalem tonunu %n yap",
      "change pen size by %n": "kalem kalınlığını %n arttır",
      "set pen size to %n": "kalem kalınlığını %n yap",
      "when @greenFlag clicked": "@greenFlag tıklanınca",
      "when %m.key key pressed": "%m.key tuşu basılınca",
      "when this sprite clicked": "bu kukla tıklanınca",
      "when backdrop switches to %m.backdrop": "dekor %m.backdrop olunca",
      "when %m.triggerSensor > %n": "%m.triggerSensor > %n olunca",
      "when I receive %m.broadcast": "%m.broadcast haberi gelince",
      "broadcast %m.broadcast": "%m.broadcast haberini sal",
      "broadcast %m.broadcast and wait": "%m.broadcast haberini sal ve bekle",
      "wait %n secs": "%n saniye bekle",
      "repeat %n": "%n defa tekrarla",
      "forever": "sürekli tekrarla",
      "if %b then": "eğer %b ise",
      "wait until %b": "%b olana kadar bekle",
      "repeat until %b": "%b olana kadar tekrarla",
      "stop %m.stop": "%m.stop durdur",
      "when I start as a clone": "ikiz olarak başladığımda",
      "create clone of %m.spriteOnly": "%m.spriteOnly in ikizini yarat",
      "delete this clone": "bu ikizi sil",
      "ask %s and wait": "%s diye sor ve bekle",
      "turn video %m.videoState": "videoyu %m.videoState",
      "set video transparency to %n%": "video saydamlığı %%n olsun",
      "reset timer": "süre ölçeri sıfırla",
      "set %m.var to %s": "%m.var , %s olsun",
      "change %m.var by %n": "%m.var 'i %n arttır",
      "show variable %m.var": "%m.var değişkenini göster",
      "hide variable %m.var": "%m.var değişkenini gizle",
      "add %s to %m.list": "%s i %m.list e ekle",
      "delete %d.listDeleteItem of %m.list": "sil %d.listDeleteItem sırasındakini %m.list in",
      "if on edge, bounce": "kenara geldiysen sek",
      "insert %s at %d.listItem of %m.list": "koy %s 'yi, %d.listItem sırasına %m.list 'nin",
      "replace item %d.listItem of %m.list with %s": "değiştir %d.listItem sırasındakini %m.list listesinin %s ile",
      "show list %m.list": "%m.list listesini göster",
      "hide list %m.list": "%m.list listesini gizle",
      "x position": "x konumu",
      "y position": "y konumu",
      "direction": "yönü",
      "costume #": "kılık no",
      "size": "büyüklük",
      "backdrop name": "dekorun adı",
      "backdrop #": "dekor #",
      "volume": "ses şiddeti",
      "tempo": "tempo",
      "touching %m.touching?": "%m.touching a değdi (mi?)",
      "touching color %c?": "%c rengine değdi (mi?)",
      "color %c is touching %c?": "%c rengi %c rengine değdi (mi?)",
      "distance to %m.spriteOrMouse": "%m.spriteOrMouse a mesafe",
      "answer": "yanıt",
      "key %m.key pressed?": "%m.key tuşu basılı (mı?)",
      "mouse down?": "fareye basılı (mı?)",
      "mouse x": "farenin x'i",
      "mouse y": "farenin y'si",
      "loudness": "ses şiddeti",
      "video %m.videoMotionType on %m.stageOrThis": "video %m.videoMotionType , %m.stageOrThis üzerindeki",
      "timer": "süre ölçer",
      "%m.attribute of %m.spriteOrStage": "%m.attribute değeri %m.spriteOrStage 'in",
      "current %m.timeAndDate": "şimdiki %m.timeAndDate",
      "days since 2000": "2000'den beri geçen gün",
      "username": "kullanıcı adı",
      "pick random %n to %n": "%n ile %n arasında bir sayı (tut)",
      "%b and %b": "%b ve %b",
      "%b or %b": "%b veya %b",
      "not %b": "%b değil",
      "join %s %s": "%s ile %s i birleştir",
      "letter %n of %s": "%n . harfi %s in",
      "length of %s": "%s in uzunluğu",
      "%n mod %n": "%n mod %n",
      "round %n": "%n i yuvarla",
      "%m.mathOp of %n": "%m.mathOp %n",
      "item %d.listItem of %m.list": "%d.listItem sırasındaki %m.list 'in",
      "length of %m.list": "%m.list in uzunluğu",
      "%m.list contains %s?": "%m.list listesinde %s var (mı?)",
      "when %m.booleanSensor": "%m.booleanSensor olunca",
      "when %m.sensor %m.lessMore %n": "%m.sensor %m.lessMore %n olduğunda",
      "sensor %m.booleanSensor?": "algılayıcı %m.booleanSensor (mı?)",
      "%m.sensor sensor value": "%m.sensor algılayıcısının değeri",
      "turn %m.motor on for %n secs": "%m.motor işlevini başlat %n saniye boyunca",
      "turn %m.motor on": "%m.motor işlevini başlat",
      "turn %m.motor off": "%m.motor işlevini durdur",
      "set %m.motor power to %n": "%m.motor gücünü %n yap",
      "set %m.motor2 direction to %m.motorDirection": "%m.motor2 yönünü %m.motorDirection çevir",
      "when distance %m.lessMore %n": "mesafe %m.lessMore %n olduğunda",
      "when tilt %m.eNe %n": "eğiklik %m.eNe %n olduğunda",
      "distance": "mesafe",
      "tilt": "yana eğil",
      "else": "değilse",
      "end": "son"
    },
    "dropdowns": {
      "A connected": "A bağlandı",
      "all": "hepsi",
      "all around": "her yöne dönebilsin",
      "B connected": "B bağlandı",
      "brightness": "parlaklık",
      "button pressed": "düğmeye basıldı",
      "C connected": "C bağlandı",
      "color": "renk",
      "costume name": "kılığının adı",
      "D connected": "D bağlandı",
      "date": "tarih",
      "day of week": "haftanın günü",
      "don't rotate": "hiç dönemesin",
      "down arrow": "aşağı ok",
      "edge": "kenar",
      "fisheye": "balık gözü",
      "ghost": "hayalet",
      "hour": "saat",
      "left arrow": "sol ok",
      "left-right": "sağa-sola dönebilsin",
      "light": "ışık",
      "minute": "dakika",
      "month": "ay",
      "mosaic": "mozaik",
      "motion": "hareketi",
      "mouse-pointer": "fare oku",
      "myself": "kendim",
      "off": "kapat",
      "on": "aç",
      "on-flipped": "aç - solu sağ yap",
      "other scripts in sprite": "kuklanın diğer dizilerini",
      "pixelate": "benekleştir",
      "previous backdrop": "önceki dekor",
      "resistance-A": "direnç-A",
      "resistance-B": "direnç-B",
      "resistance-C": "direnç-C",
      "resistance-D": "direnç-D",
      "reverse": "tersine",
      "right arrow": "sağ ok",
      "second": "saniye",
      "slider": "sürgü",
      "sound": "ses",
      "space": "boşluk",
      "Stage": "Sahne",
      "that way": "diğer tarafa",
      "this script": "bu diziyi",
      "this sprite": "bu kukla",
      "this way": "bu tarafa",
      "up arrow": "yukarı ok",
      "video motion": "video hareketi",
      "whirl": "fırılda",
      "year": "yıl"
    },
    "palette": {
      "Motion": "Hareket",
      "Looks": "Görünüm",
      "Sound": "Ses",
      "Pen": "Kalem",
      "Data": "Veri",
      "variable": "değişken",
      "list": "liste",
      "Events": "Olaylar",
      "Control": "Kontrol",
      "Sensing": "Algılama",
      "Operators": "İşlemler",
      "More Blocks": "Özel Taşlar",
      "Tips": "İpuçları"
    },
    "math": [
      "mutlak değer",
      "aşağı yuvarla",
      "yukarı yuvarla",
      "karekök",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "ln",
      "log",
      "e ^",
      "10 ^"
    ],
    "osis": [
      "kuklanın diğer dizilerini",
      "sahnedeki diğer diziler"
    ]
  },
  "zh_CN": {
    "aliases": {
      "左转 %n 度": "turn @turnLeft %n degrees",
      "右转 %n 度": "turn @turnRight %n degrees",
      "点击绿旗时": "when @greenFlag clicked",
      "结束": "end"
    },
    "define": [
      "定义"
    ],
    "ignorelt": [
      null
    ],
    "commands": {
      "move %n steps": "移动 %n 步",
      "turn @turnRight %n degrees": "向右旋转 @turnRight %n 度",
      "turn @turnLeft %n degrees": "向左旋转 @turnLeft %n 度",
      "point in direction %d.direction": "面向 %d.direction 方向",
      "point towards %m.spriteOrMouse": "面向 %m.spriteOrMouse",
      "go to x:%n y:%n": "移到 x:%n y:%n",
      "go to %m.location": "移到 %m.location",
      "glide %n secs to x:%n y:%n": "在 %n 秒内滑行到 x:%n y:%n",
      "change x by %n": "将x坐标增加 %n",
      "set x to %n": "将x坐标设定为 %n",
      "change y by %n": "将y坐标增加 %n",
      "set y to %n": "将y坐标设定为 %n",
      "set rotation style %m.rotationStyle": "将旋转模式设定为 %m.rotationStyle",
      "say %s for %n secs": "说 %s %n 秒",
      "say %s": "说 %s",
      "think %s for %n secs": "思考 %s %n 秒",
      "think %s": "思考 %s",
      "show": "显示",
      "hide": "隐藏",
      "switch costume to %m.costume": "将造型切换为 %m.costume",
      "next costume": "下一个造型",
      "next backdrop": "下一个背景",
      "switch backdrop to %m.backdrop": "将背景切换为 %m.backdrop",
      "switch backdrop to %m.backdrop and wait": "将背景切换为 %m.backdrop 并等待",
      "change %m.effect effect by %n": "将 %m.effect 特效增加 %n",
      "set %m.effect effect to %n": "将 %m.effect 特效设定为 %n",
      "clear graphic effects": "清除所有图形特效",
      "change size by %n": "将角色的大小增加 %n",
      "set size to %n%": "将角色的大小设定为 %n",
      "go to front": "移至最上层",
      "go back %n layers": "下移 %n 层",
      "play sound %m.sound": "播放声音 %m.sound",
      "play sound %m.sound until done": "播放声音 %m.sound 直到播放完毕",
      "stop all sounds": "停止所有声音",
      "play drum %d.drum for %n beats": "弹奏鼓声 %d.drum %n 拍",
      "rest for %n beats": "停止 %n 拍",
      "play note %d.note for %n beats": "弹奏音符 %d.note %n 拍",
      "set instrument to %d.instrument": "设定乐器为 %d.instrument",
      "change volume by %n": "将音量增加 %n",
      "set volume to %n%": "将音量设定为 %n",
      "change tempo by %n": "将节奏加快 %n",
      "set tempo to %n bpm": "将节奏设定为 %n bpm",
      "clear": "清空",
      "stamp": "图章",
      "pen down": "落笔",
      "pen up": "抬笔",
      "set pen color to %c": "将画笔的颜色设定为 %c",
      "change pen color by %n": "将画笔颜色增加 %n",
      "set pen color to %n": "将画笔的颜色设定为 %n",
      "change pen shade by %n": "将画笔的色泽度增加 %n",
      "set pen shade to %n": "将画笔的色度设定为 %n",
      "change pen size by %n": "将画笔大小增加 %n",
      "set pen size to %n": "将画笔的大小设定为 %n",
      "when @greenFlag clicked": "当 @greenFlag 被点击",
      "when %m.key key pressed": "当按下 %m.key",
      "when this sprite clicked": "当角色被点击时",
      "when backdrop switches to %m.backdrop": "当背景切换到 %m.backdrop",
      "when %m.triggerSensor > %n": "当 %m.triggerSensor > %n",
      "when I receive %m.broadcast": "当接收到 %m.broadcast",
      "broadcast %m.broadcast": "广播 %m.broadcast",
      "broadcast %m.broadcast and wait": "广播 %m.broadcast 并等待",
      "wait %n secs": "等待 %n 秒",
      "repeat %n": "重复执行 %n 次",
      "forever": "重复执行",
      "if %b then": "如果 %b 那么",
      "wait until %b": "在 %b 之前一直等待",
      "repeat until %b": "重复执行直到 %b",
      "stop %m.stop": "停止 %m.stop",
      "when I start as a clone": "当作为克隆体启动时",
      "create clone of %m.spriteOnly": "克隆 %m.spriteOnly",
      "delete this clone": "删除本克隆体",
      "ask %s and wait": "询问 %s 并等待",
      "turn video %m.videoState": "将摄像头 %m.videoState",
      "set video transparency to %n%": "将视频透明度设置为 %n%",
      "reset timer": "计时器归零",
      "set %m.var to %s": "将 %m.var 设定为 %s",
      "change %m.var by %n": "将 %m.var 增加 %n",
      "show variable %m.var": "显示变量 %m.var",
      "hide variable %m.var": "隐藏变量 %m.var",
      "add %s to %m.list": "将 %s 加到%m.list 列表",
      "delete %d.listDeleteItem of %m.list": "删除列表 %m.list 的第 %d.listDeleteItem 项",
      "if on edge, bounce": "碰到边缘就反弹",
      "insert %s at %d.listItem of %m.list": "将 %s 插入到 %m.list 的 %d.listItem 位置",
      "replace item %d.listItem of %m.list with %s": "把 %m.list 第 %d.listItem 项替换为 %s",
      "show list %m.list": "显示列表 %m.list",
      "hide list %m.list": "隐藏列表 %m.list",
      "x position": "x座标",
      "y position": "y座标",
      "direction": "方向",
      "costume #": "造型 #",
      "size": "大小",
      "backdrop name": "背景名称",
      "backdrop #": "背景 #",
      "volume": "音量",
      "tempo": "节奏",
      "touching %m.touching?": "碰到%m.touching?",
      "touching color %c?": "碰到颜色%c?",
      "color %c is touching %c?": "颜色 %c 碰到 %c?",
      "distance to %m.spriteOrMouse": "到 %m.spriteOrMouse 的距离",
      "answer": "回答",
      "key %m.key pressed?": "按键 %m.key 是否按下？",
      "mouse down?": "下移鼠标？",
      "mouse x": "鼠标的x坐标",
      "mouse y": "鼠标的y坐标",
      "loudness": "响度",
      "video %m.videoMotionType on %m.stageOrThis": "视频侦测 %m.videoMotionType 在 %m.stageOrThis 上",
      "timer": "计时器",
      "%m.attribute of %m.spriteOrStage": "%m.spriteOrStage 的 %m.attribute",
      "current %m.timeAndDate": "目前的 %m.timeAndDate",
      "days since 2000": "自2000年之来的天数",
      "username": "用户名",
      "pick random %n to %n": "在 %n 到 %n 间随机选一个数",
      "%b and %b": "%b 与 %b",
      "%b or %b": "%b 或 %b",
      "not %b": "%b 不成立",
      "join %s %s": "连接 %s %s",
      "letter %n of %s": "第 %n 个字符： %s",
      "length of %s": "%s 的长度",
      "%n mod %n": "%n 除以 %n 的余数",
      "round %n": "将 %n 四舍五入",
      "%m.mathOp of %n": "%m.mathOp %n",
      "item %d.listItem of %m.list": "%m.list 的第 %d.listItem 项",
      "length of %m.list": "%m.list 的长度",
      "%m.list contains %s?": "%m.list 包含 %s ?",
      "when %m.booleanSensor": "当 %m.booleanSensor",
      "when %m.sensor %m.lessMore %n": "当 %m.sensor %m.lessMore %n",
      "sensor %m.booleanSensor?": "传感器 %m.booleanSensor?",
      "%m.sensor sensor value": "%m.sensor 传感器的值",
      "turn %m.motor on for %n secs": "启动 %m.motor 马达 %n 秒",
      "turn %m.motor on": "开启马达 %m.motor",
      "turn %m.motor off": "关闭 %m.motor 马达",
      "set %m.motor power to %n": "将马达 %m.motor 功率设定为 %n",
      "set %m.motor2 direction to %m.motorDirection": "将马达 %m.motor2 方向设定为 %m.motorDirection",
      "when distance %m.lessMore %n": "当 距离 %m.lessMore %n",
      "when tilt %m.eNe %n": "当倾角 %m.eNe %n",
      "distance": "距离",
      "tilt": "倾斜",
      "else": "否则",
      "end": "结束"
    },
    "dropdowns": {
      "A connected": "A已连接",
      "all": "全部",
      "all around": "任意",
      "B connected": "B已连接",
      "brightness": "亮度",
      "button pressed": "按钮已按下",
      "C connected": "C已连接",
      "color": "颜色",
      "costume name": "造型名称",
      "D connected": "D已连接",
      "date": "日期",
      "day of week": "星期",
      "don't rotate": "不旋转",
      "down arrow": "下移键",
      "edge": "边缘",
      "fisheye": "超广角镜头",
      "ghost": "虚像",
      "hour": "小时",
      "left arrow": "左移键",
      "left-right": "左-右翻转",
      "light": "光线",
      "minute": "分",
      "month": "月",
      "mosaic": "马赛克",
      "motion": "动作",
      "mouse-pointer": "鼠标指针",
      "myself": "自己",
      "off": "关闭",
      "on": "开启",
      "on-flipped": "以左右翻转模式开启",
      "other scripts in sprite": "角色的其他脚本",
      "pixelate": "像素化",
      "previous backdrop": "上一个背景",
      "resistance-A": "阻力-A",
      "resistance-B": "阻力-B",
      "resistance-C": "阻力-C",
      "resistance-D": "阻力-D",
      "reverse": "反转",
      "right arrow": "右移键",
      "second": "秒",
      "slider": "滑杆",
      "sound": "声音",
      "space": "空格键",
      "Stage": "舞台",
      "that way": "逆时针",
      "this script": "当前脚本",
      "this sprite": "角色",
      "this way": "顺时针",
      "up arrow": "上移键",
      "video motion": "视频移动",
      "whirl": "旋转",
      "year": "年"
    },
    "palette": {
      "Motion": "动作",
      "Looks": "外观",
      "Sound": "声音",
      "Pen": "画笔",
      "Data": "数据",
      "variable": "变量",
      "list": "链表",
      "Events": "事件",
      "Control": "控制",
      "Sensing": "侦测",
      "Operators": "运算符",
      "More Blocks": "更多模块",
      "Tips": "帮助"
    },
    "math": [
      "绝对值",
      "向下取整",
      "向上取整",
      "平方根",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "ln",
      "log",
      "e ^",
      "10 ^"
    ],
    "osis": [
      "角色的其他脚本",
      "舞台上的其他脚本"
    ]
  }
}
},{}],3:[function(require,module,exports){
module.exports =
[

  ['move %n steps',                               ' ', 1,   'forward:'],
  ['turn @turnRight %n degrees',                  ' ', 1,   'turnRight:'],
  ['turn @turnLeft %n degrees',                   ' ', 1,   'turnLeft:'],
  ['point in direction %d.direction',             ' ', 1,   'heading:'],
  ['point towards %m.spriteOrMouse',              ' ', 1,   'pointTowards:'],
  ['go to x:%n y:%n',                             ' ', 1,   'gotoX:y:'],
  ['go to %m.location',                           ' ', 1,   'gotoSpriteOrMouse:'],
  ['glide %n secs to x:%n y:%n',                  ' ', 1,   'glideSecs:toX:y:elapsed:from:'],
  ['change x by %n',                              ' ', 1,   'changeXposBy:'],
  ['set x to %n',                                 ' ', 1,   'xpos:'],
  ['change y by %n',                              ' ', 1,   'changeYposBy:'],
  ['set y to %n',                                 ' ', 1,   'ypos:'],
  ['set rotation style %m.rotationStyle',         ' ', 1,   'setRotationStyle'],
  ['say %s for %n secs',                          ' ', 2,   'say:duration:elapsed:from:'],
  ['say %s',                                      ' ', 2,   'say:'],
  ['think %s for %n secs',                        ' ', 2,   'think:duration:elapsed:from:'],
  ['think %s',                                    ' ', 2,   'think:'],
  ['show',                                        ' ', 2,   'show'],
  ['hide',                                        ' ', 2,   'hide'],
  ['switch costume to %m.costume',                ' ', 2,   'lookLike:'],
  ['next costume',                                ' ', 2,   'nextCostume'],
  ['next backdrop',                               ' ', 102, 'nextScene'],
  ['switch backdrop to %m.backdrop',              ' ', 2,   'startScene'],
  ['switch backdrop to %m.backdrop and wait',     ' ', 102, 'startSceneAndWait'],
  ['change %m.effect effect by %n',               ' ', 2,   'changeGraphicEffect:by:'],
  ['set %m.effect effect to %n',                  ' ', 2,   'setGraphicEffect:to:'],
  ['clear graphic effects',                       ' ', 2,   'filterReset'],
  ['change size by %n',                           ' ', 2,   'changeSizeBy:'],
  ['set size to %n%',                             ' ', 2,   'setSizeTo:'],
  ['go to front',                                 ' ', 2,   'comeToFront'],
  ['go back %n layers',                           ' ', 2,   'goBackByLayers:'],
  ['play sound %m.sound',                         ' ', 3,   'playSound:'],
  ['play sound %m.sound until done',              ' ', 3,   'doPlaySoundAndWait'],
  ['stop all sounds',                             ' ', 3,   'stopAllSounds'],
  ['play drum %d.drum for %n beats',              ' ', 3,   'playDrum'],
  ['rest for %n beats',                           ' ', 3,   'rest:elapsed:from:'],
  ['play note %d.note for %n beats',              ' ', 3,   'noteOn:duration:elapsed:from:'],
  ['set instrument to %d.instrument',             ' ', 3,   'instrument:'],
  ['change volume by %n',                         ' ', 3,   'changeVolumeBy:'],
  ['set volume to %n%',                           ' ', 3,   'setVolumeTo:'],
  ['change tempo by %n',                          ' ', 3,   'changeTempoBy:'],
  ['set tempo to %n bpm',                         ' ', 3,   'setTempoTo:'],
  ['clear',                                       ' ', 4,   'clearPenTrails'],
  ['stamp',                                       ' ', 4,   'stampCostume'],
  ['pen down',                                    ' ', 4,   'putPenDown'],
  ['pen up',                                      ' ', 4,   'putPenUp'],
  ['set pen color to %c',                         ' ', 4,   'penColor:'],
  ['change pen color by %n',                      ' ', 4,   'changePenHueBy:'],
  ['set pen color to %n',                         ' ', 4,   'setPenHueTo:'],
  ['change pen shade by %n',                      ' ', 4,   'changePenShadeBy:'],
  ['set pen shade to %n',                         ' ', 4,   'setPenShadeTo:'],
  ['change pen size by %n',                       ' ', 4,   'changePenSizeBy:'],
  ['set pen size to %n',                          ' ', 4,   'penSize:'],
  ['when @greenFlag clicked',                     'h', 5,   'whenGreenFlag'],
  ['when %m.key key pressed',                     'h', 5,   'whenKeyPressed'],
  ['when this sprite clicked',                    'h', 5,   'whenClicked'],
  ['when backdrop switches to %m.backdrop',       'h', 5,   'whenSceneStarts'],
  ['when %m.triggerSensor > %n',                  'h', 5,   'whenSensorGreaterThan'],
  ['when I receive %m.broadcast',                 'h', 5,   'whenIReceive'],
  ['broadcast %m.broadcast',                      ' ', 5,   'broadcast:'],
  ['broadcast %m.broadcast and wait',             ' ', 5,   'doBroadcastAndWait'],
  ['wait %n secs',                                ' ', 6,   'wait:elapsed:from:'],
  ['repeat %n',                                   'c', 6,   'doRepeat'],
  ['forever',                                     'cf',6,   'doForever'],
  ['if %b then',                                  'c', 6,   'doIf'],
  ['if %b then',                                  'e', 6,   'doIfElse'],
  ['wait until %b',                               ' ', 6,   'doWaitUntil'],
  ['repeat until %b',                             'c', 6,   'doUntil'],
  ['stop %m.stop',                                'f', 6,   'stopScripts'],
  ['when I start as a clone',                     'h', 6,   'whenCloned'],
  ['create clone of %m.spriteOnly',               ' ', 6,   'createCloneOf'],
  ['delete this clone',                           'f', 6,   'deleteClone'],
  ['ask %s and wait',                             ' ', 7,   'doAsk'],
  ['turn video %m.videoState',                    ' ', 7,   'setVideoState'],
  ['set video transparency to %n%',               ' ', 7,   'setVideoTransparency'],
  ['reset timer',                                 ' ', 7,   'timerReset'],
  ['set %m.var to %s',                            ' ', 9,   'setVar:to:'],
  ['change %m.var by %n',                         ' ', 9,   'changeVar:by:'],
  ['show variable %m.var',                        ' ', 9,   'showVariable:'],
  ['hide variable %m.var',                        ' ', 9,   'hideVariable:'],
  ['add %s to %m.list',                           ' ', 12,  'append:toList:'],
  ['delete %d.listDeleteItem of %m.list',         ' ', 12,  'deleteLine:ofList:'],
  ['if on edge, bounce',                          ' ', 1,   'bounceOffEdge'],
  ['insert %s at %d.listItem of %m.list',         ' ', 12,  'insert:at:ofList:'],
  ['replace item %d.listItem of %m.list with %s', ' ', 12,  'setLine:ofList:to:'],
  ['show list %m.list',                           ' ', 12,  'showList:'],
  ['hide list %m.list',                           ' ', 12,  'hideList:'],

  ['x position',                                  'r', 1,   'xpos'],
  ['y position',                                  'r', 1,   'ypos'],
  ['direction',                                   'r', 1,   'heading'],
  ['costume #',                                   'r', 2,   'costumeIndex'],
  ['size',                                        'r', 2,   'scale'],
  ['backdrop name',                               'r', 102, 'sceneName'],
  ['backdrop #',                                  'r', 102, 'backgroundIndex'],
  ['volume',                                      'r', 3,   'volume'],
  ['tempo',                                       'r', 3,   'tempo'],
  ['touching %m.touching?',                       'b', 7,   'touching:'],
  ['touching color %c?',                          'b', 7,   'touchingColor:'],
  ['color %c is touching %c?',                    'b', 7,   'color:sees:'],
  ['distance to %m.spriteOrMouse',                'r', 7,   'distanceTo:'],
  ['answer',                                      'r', 7,   'answer'],
  ['key %m.key pressed?',                         'b', 7,   'keyPressed:'],
  ['mouse down?',                                 'b', 7,   'mousePressed'],
  ['mouse x',                                     'r', 7,   'mouseX'],
  ['mouse y',                                     'r', 7,   'mouseY'],
  ['loudness',                                    'r', 7,   'soundLevel'],
  ['video %m.videoMotionType on %m.stageOrThis',  'r', 7,   'senseVideoMotion'],
  ['timer',                                       'r', 7,   'timer'],
  ['%m.attribute of %m.spriteOrStage',            'r', 7,   'getAttribute:of:'],
  ['current %m.timeAndDate',                      'r', 7,   'timeAndDate'],
  ['days since 2000',                             'r', 7,   'timestamp'],
  ['username',                                    'r', 7,   'getUserName'],
  ['%n + %n',                                     'r', 8,   '+'],
  ['%n - %n',                                     'r', 8,   '-'],
  ['%n * %n',                                     'r', 8,   '*'],
  ['%n / %n',                                     'r', 8,   '/'],
  ['pick random %n to %n',                        'r', 8,   'randomFrom:to:'],
  ['%s < %s',                                     'b', 8,   '<'],
  ['%s = %s',                                     'b', 8,   '='],
  ['%s > %s',                                     'b', 8,   '>'],
  ['%b and %b',                                   'b', 8,   '&'],
  ['%b or %b',                                    'b', 8,   '|'],
  ['not %b',                                      'b', 8,   'not'],
  ['join %s %s',                                  'r', 8,   'concatenate:with:'],
  ['letter %n of %s',                             'r', 8,   'letter:of:'],
  ['length of %s',                                'r', 8,   'stringLength:'],
  ['%n mod %n',                                   'r', 8,   '%'],
  ['round %n',                                    'r', 8,   'rounded'],
  ['%m.mathOp of %n',                             'r', 8,   'computeFunction:of:'],
  ['item %d.listItem of %m.list',                 'r', 12,  'getLine:ofList:'],
  ['length of %m.list',                           'r', 12,  'lineCountOfList:'],
  ['%m.list contains %s?',                        'b', 12,  'list:contains:'],

  ['when %m.booleanSensor',                         'h', 20,  ''],
  ['when %m.sensor %m.lessMore %n',                 'h', 20,  ''],
  ['sensor %m.booleanSensor?',                      'b', 20,  ''],
  ['%m.sensor sensor value',                        'r', 20,  ''],

  ['turn %m.motor on for %n secs',                  ' ', 20,  ''],
  ['turn %m.motor on',                              ' ', 20,  ''],
  ['turn %m.motor off',                             ' ', 20,  ''],
  ['set %m.motor power to %n',                      ' ', 20,  ''],
  ['set %m.motor2 direction to %m.motorDirection',  ' ', 20,  ''],
  ['when distance %m.lessMore %n',                  'h', 20,  ''],
  ['when tilt %m.eNe %n',                           'h', 20,  ''],
  ['distance',                                      'r', 20,  ''],
  ['tilt',                                          'r', 20,  ''],

  ['else', 'else', 6, ''],
  ['end', 'end', 6, ''],
  ['turn %m.motor on for %n seconds',               ' ', 20,  ''],
  ['set light color to %n',                         ' ', 20,  ''],
  ['play note %n for %n seconds',                   ' ', 20,  ''],
  ['when tilted',                                   'h', 20,  ''],
  ['tilt %m.xxx',                                   'r', 20,  ''],

  ['else', 'else', 6, ''],
  ['end', 'end', 6, ''],
  ['. . .', ' ', 42, ''],

  ['%n @addInput', 'ring', 42, ''],

  ['user id',                                   'r',  0,  ''],

  ['if %b',                                     'c',  0,  'doIf'],
  ['if %b',                                     'e',  0,  'doIfElse'],
  ['forever if %b',                             'cf', 0,  'doForeverIf'],
  ['stop script',                               'f',  0,  'doReturn'],
  ['stop all',                                  'f',  0,  'stopAll'],
  ['switch to costume %m.costume',              ' ',  0,  'lookLike:'],
  ['next background',                           ' ',  0,  'nextScene'],
  ['switch to background %m.backdrop',          ' ',  0,  'startScene'],
  ['background #',                              'r',  0,  'backgroundIndex'],
  ['loud?',                                     'b',  0,  'isLoud'],

];

},{}],4:[function(require,module,exports){
/**
 * scratchblocks
 * http://scratchblocks.github.io/
 *
 * Copyright 2013-2016, Tim Radvan
 * @license MIT
 * http://opensource.org/licenses/MIT
 */



// root declarations
var newCanvas;

{
  newCanvas = function () {
    return document.createElement('canvas');
  };
}

/* utils */

function assert(bool, message) {
  if (!bool) throw 'Assertion failed! ' + (message || '');
}

function isArray(o) {
  return o && o.constructor === Array;
}

function bool(x) { return !!x; }

function extend(src, dest) {
  src = src || {};
  dest = dest || {};
  for (var key in src) {
    if (src.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
      dest[key] = src[key];
    }
  }
  return dest;
}

function indent(text) {
  return text.split('\n').map(function(line) {
    return '  ' + line;
  }).join('\n');
}

/***************************************************************************/

// List of classes we're allowed to override.

var overrideCategories = ['motion', 'looks', 'sound', 'pen', 'variables', 'list', 'events', 'control', 'sensing', 'operators', 'custom', 'custom-arg', 'extension', 'grey', 'obsolete'];
var overrideShapes = ['hat', 'cap', 'stack', 'boolean', 'reporter', 'ring'];

// languages that should be displayed right to left
var rtlLanguages = ['ar', 'fa', 'he'];

// List of commands taken from Scratch
var scratchCommands = require('./commands.js');

var categoriesById = {
  0:  'obsolete',
  1:  'motion',
  2:  'looks',
  3:  'sound',
  4:  'pen',
  5:  'events',
  6:  'control',
  7:  'sensing',
  8:  'operators',
  9:  'variables',
  10: 'custom',
  11: 'parameter',
  12: 'list',
  20: 'extension',
  42: 'grey',
};

var typeShapes = {
  ' ': 'stack',
  'b': 'boolean',
  'c': 'c-block',
  'e': 'if-block',
  'f': 'cap',
  'h': 'hat',
  'r': 'reporter',
  'cf': 'c-block cap',
  'else': 'celse',
  'end': 'cend',
  'ring': 'ring',
};

// TODO: add examples
var inputPat = /(%[a-zA-Z](?:\.[a-zA-Z0-9]+)?)/;
var inputPatGlobal = new RegExp(inputPat.source, 'g');
var iconPat = /(@[a-zA-Z]+)/;
var splitPat = new RegExp([inputPat.source, '|', iconPat.source, '| +'].join(''), 'g');

var hexColorPat = /^#(?:[0-9a-fA-F]{3}){1,2}?$/;

function parseSpec(spec) {
  var parts = spec.split(splitPat).filter(bool);
  return {
    spec: spec,
    parts: parts,
    inputs: parts.filter(function(p) { return inputPat.test(p); }),
    hash: hashSpec(spec),
  };
}

function hashSpec(spec) {
  return minifyHash(spec.replace(inputPatGlobal, ' _ '));
}

function minifyHash(hash) {
  return (hash
      .replace(/_/g, ' _ ')
      .replace(/ +/g, ' ')
      .replace(/[,%?:]/g, '')
      .replace(/ß/g, 'ss')
      .replace(/ä/g,'a')
      .replace(/ö/g,'o')
      .replace(/ü/g,'u')
      .replace('. . .', '...')
      .replace(/^…$/, '...')
  ).trim().toLowerCase();
}


var unicodeIcons = {
  '@greenFlag': '⚑',
  '@turnRight': '↻',
  '@turnLeft': '↺',
  '@addInput': '▸',
  '@delInput': '◂',
};

var allLanguages = {};
function loadLanguage(code, language) {
  var blocksByHash = language.blocksByHash = {};

  // TODO: can be moved to fetch_translations.js ?
  Object.keys(language.commands).forEach(function(spec) {
    var nativeSpec = language.commands[spec];
    var block = blocksBySpec[spec];

    var nativeHash = hashSpec(nativeSpec);
    blocksByHash[nativeHash] = block;

    // fallback image replacement, for languages without aliases
    var m = iconPat.exec(spec);
    if (m) {
      var image = m[0];
      var hash = nativeHash.replace(image, unicodeIcons[image]);
      blocksByHash[hash] = block;
    }
  });

  language.nativeAliases = {};
  Object.keys(language.aliases || []).forEach(function(alias) {
    var spec = language.aliases[alias];
    var block = blocksBySpec[spec];

    var aliasHash = hashSpec(alias);
    blocksByHash[aliasHash] = block;

    language.nativeAliases[spec] = alias;
  });

  language.nativeDropdowns = {};
  Object.keys(language.dropdowns).forEach(function(name) {
    var nativeName = language.dropdowns[name];
    language.nativeDropdowns[nativeName] = name;
  });

  language.code = code;
  allLanguages[code] = language;
}
function loadLanguages(languages) {
  Object.keys(languages).forEach(function(code) {
    loadLanguage(code, languages[code]);
  });
}

// TODO: put in translation file, generate?
var english = {
  aliases: {
    'turn left %n degrees': 'turn @turnLeft %n degrees',
    'turn ccw %n degrees': 'turn @turnLeft %n degrees',
    'turn right %n degrees': 'turn @turnRight %n degrees',
    'turn cw %n degrees': 'turn @turnRight %n degrees',
    'when gf clicked': 'when @greenFlag clicked',
    'when flag clicked': 'when @greenFlag clicked',
    'when green flag clicked': 'when @greenFlag clicked',
  },

  define: ['define'],

  // For ignoring the lt sign in the "when distance < _" block
  ignorelt: ['when distance'],

  // Valid arguments to "of" dropdown, for resolving ambiguous situations
  math: ['abs', 'floor', 'ceiling', 'sqrt', 'sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'ln', 'log', 'e ^', '10 ^'],

  // For detecting the "stop" cap / stack block
  osis: ['other scripts in sprite', 'other scripts in stage'],

  dropdowns: {},

  commands: {},
};

/*****************************************************************************/

function disambig(selector1, selector2, test) {
  var func = function(info, children, lang) {
    return blocksBySelector[test(children, lang) ? selector1 : selector2];
  };
  blocksBySelector[selector1].specialCase = blocksBySelector[selector2].specialCase = func;
}

function lookupHash(hash, info, children, languages) {
  for (var i=0; i<languages.length; i++) {
    var lang = languages[i];
    if (lang.blocksByHash.hasOwnProperty(hash)) {
      var block = lang.blocksByHash[hash];
      if (info.shape === 'reporter' && block.shape !== 'reporter') continue;
      if (info.shape === 'boolean' && block.shape !== 'boolean') continue;
      if (block.specialCase) {
        block = block.specialCase(info, children, lang) || block;
      }
      return { type: block, lang: lang };
    }
  }
}

function lookupDropdown(name, languages) {
  for (var i=0; i<languages.length; i++) {
    var lang = languages[i];
    if (lang.nativeDropdowns.hasOwnProperty(name)) {
      var nativeName = lang.nativeDropdowns[name];
      return nativeName;
    }
  }
}

function applyOverrides(info, overrides) {
  for (var i=0; i<overrides.length; i++) {
    var name = overrides[i];
    if (hexColorPat.test(name)) {
      info.color = name;
      info.category = '';
      info.categoryIsDefault = false;
    } else if (overrideCategories.indexOf(name) > -1) {
      info.category = name;
      info.categoryIsDefault = false;
    } else if (overrideShapes.indexOf(name) > -1) {
      info.shape = name;
    } else if (name === 'loop') {
      info.hasLoopArrow = true;
    }
  }
}

function paintBlock(info, children, languages) {
  var overrides = [];
  if (isArray(children[children.length - 1])) {
    overrides = children.pop();
  }

  // build hash
  var words = [];
  for (var i=0; i<children.length; i++) {
    var child = children[i];
    if (child.isLabel) {
      words.push(child.value);
    } else if (child.isIcon) {
      words.push('@' + child.name);
    } else {
      words.push('_');
    }
  }
  var hash = info.hash = minifyHash(words.join(' '));

  // paint
  var o = lookupHash(hash, info, children, languages);
  if (o) {
    var lang = o.lang;
    var type = o.type;
    info.language = lang;
    info.isRTL = rtlLanguages.indexOf(lang.code) > -1;

    if (type.shape === 'ring' ? info.shape === 'reporter' : info.shape === 'stack') {
      info.shape = type.shape;
    }
    info.category = type.category;
    info.categoryIsDefault = false;
    if (type.selector) info.selector = type.selector; // for toJSON
    info.hasLoopArrow = type.hasLoopArrow;

    // ellipsis block
    if (type.spec === '. . .') {
      children = [new Label('. . .')];
    }
  }

  // overrides
  applyOverrides(info, overrides);

  // loop arrows
  if (info.hasLoopArrow) {
    children.push(new Icon('loopArrow'));
  }

  var block = new Block(info, children);

  // image replacement
  if (type && iconPat.test(type.spec)) {
    block.translate(lang, true);
  }
  return block;
}

/* * */

function parseLines(code, languages) {
  var tok = code[0];
  var index = 0;
  function next() {
    tok = code[++index];
  }
  function peek() {
    return code[index + 1];
  }
  function peekNonWs() {
    for (var i = index + 1; i<code.length; i++) {
      if (code[i] !== ' ') return code[i];
    }
  }
  var sawNL;

  var define = [];
  languages.map(function(lang) {
    if (lang.define) {
      define = define.concat(lang.define);
    }
  });
  // NB. we assume 'define' is a single word in every language
  function isDefine(word) {
    return define.indexOf(word) > -1;
  }

  function makeBlock(shape, children) {
    var hasInputs = !!children.filter(function(x) { return !x.isLabel; }).length;
    var info = {
      shape: shape,
      category: shape === 'define-hat' ? 'custom'
              : shape === 'reporter' && !hasInputs ? 'variables' : 'obsolete',
      categoryIsDefault: true,
      hasLoopArrow: false,
    };
    return paintBlock(info, children, languages);
  }

  function makeMenu(shape, value) {
    var menu = lookupDropdown(value, languages) || value;
    return new Input(shape, value, menu);
  }

  function pParts(end) {
    var children = [];
    var label;
    while (tok && tok !== '\n') {
      if (tok === '<' || (tok === '>' && end === '>')) {
        var last = children[children.length - 1];
        var c = peekNonWs();
        if (last && !last.isLabel && (c === '[' || c === '(' || c === '<' || c === '{')) {
          label = null;
          children.push(new Label(tok));
          next();
          continue;
        }
      }
      if (tok === end) break;
      if (tok === '/' && peek() === '/' && !end) break;

      switch (tok) {
        case '[':
          label = null;
          children.push(pString());
          break;
        case '(':
          label = null;
          children.push(pReporter());
          break;
        case '<':
          label = null;
          children.push(pPredicate());
          break;
        case '{':
          label = null;
          children.push(pEmbedded());
          break;
        case ' ':
        case '\t':
          next();
          if (label && isDefine(label.value)) {
            // define hat
            children.push(pOutline());
            return children;
          }
          label = null;
          break;
        case '◂':
        case '▸':
          children.push(pIcon());
          label = null;
          break;
        case '@':
          next();
          var name = '';
          while (tok && /[a-zA-Z]/.test(tok)) {
            name += tok;
            next();
          }
          if (name === 'cloud') {
            children.push(new Label('☁'));
          } else {
            children.push(Icon.icons.hasOwnProperty(name) ? new Icon(name) : new Label('@' + name));
          }
          label = null;
          break;
        case '\\':
          next(); // escape character
          // fall through
        case ':':
          if (tok === ':' && peek() === ':') {
            children.push(pOverrides(end));
            return children;
          } // fall through
        default:
          if (!label) children.push(label = new Label(''));
          label.value += tok;
          next();
      }
    }
    return children;
  }

  function pString() {
    next(); // '['
    var s = '';
    var escapeV = false;
    while (tok && tok !== ']' && tok !== '\n') {
      if (tok === '\\') {
        next();
        if (tok === 'v') escapeV = true;
        if (!tok) break;
      } else {
        escapeV = false;
      }
      s += tok;
      next();
    }
    if (tok === ']') next();
    if (hexColorPat.test(s)) {
      return new Input('color', s);
    }
    return !escapeV && / v$/.test(s) ? makeMenu('dropdown', s.slice(0, s.length - 2))
                                      : new Input('string', s);
  }

  function pBlock(end) {
    var children = pParts(end);
    if (tok && tok === '\n') {
      sawNL = true;
      next();
    }
    if (children.length === 0) return;

    // define hats
    var first = children[0];
    if (first && first.isLabel && isDefine(first.value)) {
      if (children.length < 2) {
        children.push(makeBlock('outline', []));
      }
      return makeBlock('define-hat', children);
    }

    // standalone reporters
    if (children.length === 1) {
      var child = children[0];
      if (child.isBlock && (child.isReporter || child.isBoolean || child.isRing)) {
        return child;
      }
    }

    return makeBlock('stack', children);
  }

  function pReporter() {
    next(); // '('

    // empty number-dropdown
    if (tok === ' ') {
      next();
      if (tok === 'v' && peek() === ')') {
        next();
        next();
        return new Input('number-dropdown', '');
      }
    }

    var children = pParts(')');
    if (tok && tok === ')') next();

    // empty numbers
    if (children.length === 0) {
      return new Input('number', '');
    }

    // number
    if (children.length === 1 && children[0].isLabel) {
      var value = children[0].value;
      if (/^[0-9e.-]*$/.test(value)) {
        return new Input('number', value);
      }
    }

    // number-dropdown
    for (var i=0; i<children.length; i++) {
      if (!children[i].isLabel) {
        break;
      }
    } if (i === children.length) {
      var last = children[i - 1];
      if (i > 1 && last.value === 'v') {
        children.pop();
        var val = children.map(function(l) { return l.value; }).join(' ');
        return makeMenu('number-dropdown', val);
      }
    }

    var block = makeBlock('reporter', children);

    // rings
    if (block.info.shape === 'ring') {
      var first = block.children[0];
      if (first && first.isInput && first.shape === 'number' && first.value === '') {
        block.children[0] = new Input('reporter');
      } else if ((first && first.isScript && first.isEmpty)
              || (first && first.isBlock && !first.children.length)) {
        block.children[0] = new Input('stack');
      }
    }

    return block;
  }

  function pPredicate() {
    next(); // '<'
    var children = pParts('>');
    if (tok && tok === '>') next();
    if (children.length === 0) {
      return new Input('boolean');
    }
    return makeBlock('boolean', children);
  }

  function pEmbedded() {
    next(); // '{'

    sawNL = false;
    var f = function() {
      while (tok && tok !== '}') {
        var block = pBlock('}');
        if (block) return block;
      }
    };
    var scripts = parseScripts(f);
    var blocks = [];
    scripts.forEach(function(script) {
      blocks = blocks.concat(script.blocks);
    });

    if (tok === '}') next();
    if (!sawNL) {
      assert(blocks.length <= 1);
      return blocks.length ? blocks[0] : makeBlock('stack', []);
    }
    return new Script(blocks);
  }

  function pIcon() {
    var c = tok;
    next();
    switch (c) {
      case '▸':
        return new Icon('addInput');
      case '◂':
        return new Icon('delInput');
    }
  }

  function pOverrides(end) {
    next();
    next();
    var overrides = [];
    var override = '';
    while (tok && tok !== '\n' && tok !== end) {
      if (tok === ' ') {
        if (override) {
          overrides.push(override);
          override = '';
        }
      } else if (tok === '/' && peek() === '/') {
        break;
      } else {
        override += tok;
      }
      next();
    }
    if (override) overrides.push(override);
    return overrides;
  }

  function pComment(end) {
    next();
    next();
    var comment = '';
    while (tok && tok !== '\n' && tok !== end) {
      comment += tok;
      next();
    }
    if (tok && tok === '\n') next();
    return new Comment(comment, true);
  }

  function pOutline() {
    var children = [];
    function parseArg(kind, end) {
      label = null;
      next();
      var parts = pParts(end);
      if (tok === end) next();
      children.push(paintBlock({
        shape: kind === 'boolean' ? 'boolean' : 'reporter',
        argument: kind,
        category: 'custom-arg',
      }, parts, languages));
    }
    var label;
    while (tok && tok !== '\n') {
      switch (tok) {
        case '(': parseArg('number', ')'); break;
        case '[': parseArg('string', ']'); break;
        case '<': parseArg('boolean', '>'); break;
        case ' ': next(); label = null; break;
        case '\\':
          next();
          // fall through
        case ':':
          if (tok === ':' && peek() === ':') {
            children.push(pOverrides());
            break;
          } // fall through
        default:
          if (!label) children.push(label = new Label(''));
          label.value += tok;
          next();
      }
    }
    return makeBlock('outline', children);
  }

  function pLine() {
    var block = pBlock();
    if (tok === '/' && peek() === '/') {
      var comment = pComment();
      comment.hasBlock = block && block.children.length;
      if (!comment.hasBlock) {
        return comment;
      }
      block.comment = comment;
    }
    return block;
  }

  return function() {
    if (!tok) return undefined;
    var line = pLine();
    return line || 'NL';
  };
}

/* parseLines end */

function parseScripts(getLine) {
  var line = getLine();
  function next() {
    line = getLine();
  }

  function pFile() {
    while (line === 'NL') next();
    var scripts = [];
    while (line) {
      var blocks = [];
      while (line && line !== 'NL') {
        var b = pLine();

        if (b.isElse || b.isEnd) {
          b = new Block(extend(b.info, {
            shape: 'stack',
          }), b.children);
        }

        if (b.isHat) {
          if (blocks.length) scripts.push(new Script(blocks));
          blocks = [b];
        } else if (b.isFinal) {
          blocks.push(b);
          break;
        } else if (b.isCommand) {
          blocks.push(b);
        } else { // reporter or predicate
          if (blocks.length) scripts.push(new Script(blocks));
          scripts.push(new Script([b]));
          blocks = [];
          break;
        }
      }
      if (blocks.length) scripts.push(new Script(blocks));
      while (line === 'NL') next();
    }
    return scripts;
  }

  function pLine() {
    var b = line;
    next();

    if (b.hasScript) {
      while (true) {  // eslint-disable-line
        var blocks = pMouth();
        b.children.push(new Script(blocks));
        if (line && line.isElse) {
          for (var i=0; i<line.children.length; i++) {
            b.children.push(line.children[i]);
          }
          next();
          continue;
        }
        if (line && line.isEnd) {
          next();
        }
        break;
      }
    }
    return b;
  }

  function pMouth() {
    var blocks = [];
    while (line) {
      if (line === 'NL') {
        next();
        continue;
      }
      if (!line.isCommand) {
        return blocks;
      }
      blocks.push(pLine());
    }
    return blocks;
  }

  return pFile();
}

/* parseScripts end */

function eachBlock(x, cb) {
  if (x.isScript) {
    x.blocks.forEach(function(block) {
      eachBlock(block, cb);
    });
  } else if (x.isBlock) {
    cb(x);
    x.children.forEach(function(child) {
      eachBlock(child, cb);
    });
  }
}

var listBlocks = {
  'append:toList:': 1,
  'deleteLine:ofList:': 1,
  'insert:at:ofList:': 2,
  'setLine:ofList:to:': 1,
  'showList:': 0,
  'hideList:': 0,
};

function blockName(block) {
  var words = [];
  for (var i=0; i<block.children.length; i++) {
    var child = block.children[i];
    if (!child.isLabel) return;
    words.push(child.value);
  }
  return words.join(' ');
}

function recogniseStuff(scripts) {

  var customBlocksByHash = {};
  var listNames = {};

  scripts.forEach(function(script) {

    var customArgs = {};

    eachBlock(script, function(block) {
      // custom blocks
      if (block.info.shape === 'define-hat') {
        var outline = block.children[1];
        if (!outline) return;

        var names = [];
        var parts = [];
        for (var i=0; i<outline.children.length; i++) {
          var child = outline.children[i];
          if (child.isLabel) {
            parts.push(child.value);
          } else if (child.isBlock) {
            if (!child.info.argument) return;
            parts.push({
              number: '%n',
              string: '%s',
              boolean: '%b',
            }[child.info.argument]);

            var name = blockName(child);
            names.push(name);
            customArgs[name] = true;
          }
        }
        var spec = parts.join(' ');
        var hash = hashSpec(spec);
        var info = customBlocksByHash[hash] = {
          spec: spec,
          names: names,
        };
        block.info.selector = 'procDef';
        block.info.call = info.spec;
        block.info.names = info.names;
        block.info.category = 'custom';

      // fix up if/else selectors
      } else if (block.info.selector === 'doIfElse') {
        var last2 = block.children[block.children.length - 2];
        block.info.selector = last2 && last2.isLabel && last2.value === 'else' ? 'doIfElse' : 'doIf';

      // custom arguments
      } else if (block.info.categoryIsDefault && (block.isReporter || block.isBoolean)) {
        var name_ = blockName(block);
        if (customArgs[name_]) {
          block.info.category = 'custom-arg';
          block.info.categoryIsDefault = false;
          block.info.selector = 'getParam';
        }

      // list names
      } else if (listBlocks.hasOwnProperty(block.info.selector)) {
        var argIndex = listBlocks[block.info.selector];
        var inputs = block.children.filter(function(child) {
          return !child.isLabel;
        });
        var input = inputs[argIndex];
        if (input && input.isInput) {
          listNames[input.value] = true;
        }
      }
    });
  });

  scripts.forEach(function(script) {
    eachBlock(script, function(block) {
      // custom blocks
      if (block.info.categoryIsDefault && block.info.category === 'obsolete') {
        var info = customBlocksByHash[block.info.hash];
        if (info) {
          block.info.selector = 'call';
          block.info.call = info.spec;
          block.info.names = info.names;
          block.info.category = 'custom';
        }

      // list reporters
      } else if (block.isReporter) {
        var name = blockName(block);
        if (!name) return;
        if (block.info.category === 'variables' && listNames[name] && block.info.categoryIsDefault) {
          block.info.category = 'list';
          block.info.categoryIsDefault = false;
        }
        if (block.info.category === 'list') {
          block.info.selector = 'contentsOfList:';
        } else if (block.info.category === 'variables') {
          block.info.selector = 'readVariable';
        }
      }
    });
  });
}
/**
 * @parameter code {string}
 * @parameter options {object}
 * @returns {Document}
 */
function parse(code, options) {
  options = extend({
    inline: false,
    languages: Object.keys(allLanguages),
  }, options);

  code = code.replace(/&lt;/g, '<');
  code = code.replace(/&gt;/g, '>');

  if (options.inline) {
    code = code.replace(/\n/g, ' ');
  }

  var languages = options.languages.map(function(code) {
    return allLanguages[code];
  });

  /* * */

  var f = parseLines(code, languages);
  var scripts = parseScripts(f);
  recogniseStuff(scripts);
  return new Document(scripts);
}

/****************************************************************************/

/* for constructing SVGs */

var xml = new DOMParser().parseFromString('<xml></xml>',  'application/xml');
function cdata(content) {
  return xml.createCDATASection(content);
}

function el(name, props) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', name);
  if (name === 'svg') {
    // explicit set namespace, see https://github.com/jindw/xmldom/issues/97
    el.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    el.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
  }
  return setProps(el, props);
}

var directProps = {
  textContent: true,
};
function setProps(el, props) {
  for (var key in props) {
    var value = '' + props[key];
    if (directProps[key]) {
      el[key] = value;
    } else if (props[key] !== null && props.hasOwnProperty(key)) {
      el.setAttribute(key, value);
    }
  }
  return el;
}

function withChildren(el, children) {
  for (var i=0; i<children.length; i++) {
    el.appendChild(children[i]);
  }
  return el;
}

function group(children) {
  return withChildren(el('g'), children);
}

function newSVG(width, height) {
  return el('svg', {
    version: '1.1',
    width: width,
    height: height,
  });
}

function polygon(props) {
  return el('polygon', extend(props, {
    points: props.points.join(' '),
  }));
}

function path(props) {
  return el('path', extend(props, {
    path: null,
    d: props.path.join(' '),
  }));
}

function text(x, y, content, props) {
  var text = el('text', extend(props, {
    x: x,
    y: y,
    textContent: content,
  }));
  return text;
}

function symbol(href) {
  return el('use', {
    'xlink:href': href,
  });
}

function move(dx, dy, el) {
  setProps(el, {
    transform: ['translate(', dx, ' ', dy, ')'].join(''),
  });
  return el;
}

function translatePath(dx, dy, path) {
  var isX = true;
  var parts = path.split(' ');
  var out = [];
  for (var i=0; i<parts.length; i++) {
    var part = parts[i];
    if (part === 'A') {
      var j = i + 5;
      out.push('A');
      while (i < j) {
        out.push(parts[++i]);
      }
      continue;
    } else if (/[A-Za-z]/.test(part)) {
      assert(isX);
    } else {
      part = +part;
      part += isX ? dx : dy;
      isX = !isX;
    }
    out.push(part);
  }
  return out.join(' ');
}


/* shapes */

function rect(w, h, props) {
  return el('rect', extend(props, {
    x: 0,
    y: 0,
    width: w,
    height: h,
  }));
}

function arc(p1x, p1y, p2x, p2y, rx, ry) {
  return ['L', p1x, p1y, 'A', rx, ry, 0, 0, 1, p2x, p2y].join(' ');
}

function arcw(p1x, p1y, p2x, p2y, rx, ry) {
  return ['L', p1x, p1y, 'A', rx, ry, 0, 0, 0, p2x, p2y].join(' ');
}

function roundedPath(w, h) {
  var r = h / 2;
  return [
    'M', r, 0,
    arc(w - r, 0, w - r, h, r, r),
    arc(r, h, r, 0, r, r),
    'Z'
  ];
}

function roundedRect(w, h, props) {
  return path(extend(props, {
    path: roundedPath(w, h),
  }));
}

function pointedPath(w, h) {
  var r = h / 2;
  return [
    'M', r, 0,
    'L', w - r, 0, w, r,
    'L', w, r, w - r, h,
    'L', r, h, 0, r,
    'L', 0, r, r, 0,
    'Z',
  ];
}

function pointedRect(w, h, props) {
  return path(extend(props, {
    path: pointedPath(w, h),
  }));
}

function getTop(w) {
  return ['M', 0, 3,
    'L', 3, 0,
    'L', 13, 0,
    'L', 16, 3,
    'L', 24, 3,
    'L', 27, 0,
    'L', w - 3, 0,
    'L', w, 3
  ].join(' ');
}

function getRingTop(w) {
  return ['M', 0, 3,
    'L', 3, 0,
    'L', 7, 0,
    'L', 10, 3,
    'L', 16, 3,
    'L', 19, 0,
    'L', w - 3, 0,
    'L', w, 3
  ].join(' ');
}

function getRightAndBottom(w, y, hasNotch, inset) {
  if (typeof inset === 'undefined') {
    inset = 0;
  }
  var arr = ['L', w, y - 3,
    'L', w - 3, y
  ];
  if (hasNotch) {
    arr = arr.concat([
      'L', inset + 27, y,
      'L', inset + 24, y + 3,
      'L', inset + 16, y + 3,
      'L', inset + 13, y
    ]);
  }
  if (inset > 0) {
    arr = arr.concat([
      'L', inset + 2, y,
      'L', inset, y + 2
    ]);
  } else {
    arr = arr.concat([
      'L', inset + 3, y,
      'L', 0, y - 3
    ]);
  }
  return arr.join(' ');
}

function getArm(w, armTop) {
  return [
    'L', 15, armTop - 2,
    'L', 15 + 2, armTop,
    'L', w - 3, armTop,
    'L', w, armTop + 3
  ].join(' ');
}


function stackRect(w, h, props) {
  return path(extend(props, {
    path: [
      getTop(w),
      getRightAndBottom(w, h, true, 0),
      'Z',
    ],
  }));
}

function capPath(w, h) {
  return [
    getTop(w),
    getRightAndBottom(w, h, false, 0),
    'Z',
  ];
}

function ringCapPath(w, h) {
  return [
    getRingTop(w),
    getRightAndBottom(w, h, false, 0),
    'Z',
  ];
}

function capRect(w, h, props) {
  return path(extend(props, {
    path: capPath(w, h),
  }));
}

function hatRect(w, h, props) {
  return path(extend(props, {
    path: [
      'M', 0, 12,
      arc(0, 12, 80, 10, 80, 80),
      'L', w - 3, 10, 'L', w, 10 + 3,
      getRightAndBottom(w, h, true),
      'Z',
    ],
  }));
}

function curve(p1x, p1y, p2x, p2y, roundness) {
  roundness = roundness || 0.42;
  var midX = (p1x + p2x) / 2.0;
  var midY = (p1y + p2y) / 2.0;
  var cx = Math.round(midX + (roundness * (p2y - p1y)));
  var cy = Math.round(midY - (roundness * (p2x - p1x)));
  return [cx, cy, p2x, p2y].join(' ');
}

function procHatBase(w, h, archRoundness, props) {
  // TODO use arc()
  archRoundness = Math.min(0.2, 35 / w);
  return path(extend(props, {
    path: [
      'M', 0, 15,
      'Q', curve(0, 15, w, 15, archRoundness),
      getRightAndBottom(w, h, true),
      'M', -1, 13,
      'Q', curve(-1, 13, w + 1, 13, archRoundness),
      'Q', curve(w + 1, 13, w, 16, 0.6),
      'Q', curve(w, 16, 0, 16, -archRoundness),
      'Q', curve(0, 16, -1, 13, 0.6),
      'Z',
    ],
  }));
}

function procHatCap(w, h, archRoundness) {
  // TODO use arc()
  // TODO this doesn't look quite right
  return path({
    path: [
      'M', -1, 13,
      'Q', curve(-1, 13, w + 1, 13, archRoundness),
      'Q', curve(w + 1, 13, w, 16, 0.6),
      'Q', curve(w, 16, 0, 16, -archRoundness),
      'Q', curve(0, 16, -1, 13, 0.6),
      'Z',
    ],
    class: 'sb-define-hat-cap',
  });
}

function procHatRect(w, h, props) {
  var q = 52;
  var y = h - q;

  var archRoundness = Math.min(0.2, 35 / w);

  return move(0, y, group([
    procHatBase(w, q, archRoundness, props),
    procHatCap(w, q, archRoundness),
  ]));
}

function mouthRect(w, h, isFinal, lines, props) {
  var y = lines[0].height;
  var p = [
    getTop(w),
    getRightAndBottom(w, y, true, 15),
  ];
  for (var i=1; i<lines.length; i += 2) {
    var isLast = (i + 2 === lines.length);

    y += lines[i].height - 3;
    p.push(getArm(w, y));

    var hasNotch = !(isLast && isFinal);
    var inset = isLast ? 0 : 15;
    y += lines[i + 1].height + 3;
    p.push(getRightAndBottom(w, y, hasNotch, inset));
  }
  return path(extend(props, {
    path: p,
  }));
}

function ringRect(w, h, cy, cw, ch, shape, props) {
  var r = 8;
  var func = shape === 'reporter' ? roundedPath
            : shape === 'boolean' ? pointedPath
            : cw < 40 ? ringCapPath : capPath;
  return path(extend(props, {
    path: [
      'M', r, 0,
      arcw(r, 0, 0, r, r, r),
      arcw(0, h - r, r, h, r, r),
      arcw(w - r, h, w, h - r, r, r),
      arcw(w, r, w - r, 0, r, r),
      'Z',
      translatePath(4, cy || 4, func(cw, ch).join(' ')),
    ],
    'fill-rule': 'even-odd',
  }));
}

function commentRect(w, h, props) {
  var r = 6;
  return path(extend(props, {
    class: 'sb-comment',
    path: [
      'M', r, 0,
      arc(w - r, 0, w, r, r, r),
      arc(w, h - r, w - r, h, r, r),
      arc(r, h, 0, h - r, r, r),
      arc(0, r, r, 0, r, r),
      'Z'
    ],
  }));
}

function commentLine(width, props) {
  return move(-width, 9, rect(width, 2, extend(props, {
    class: 'sb-comment-line',
  })));
}

/* definitions */
// browserify inlines file as string with brfs transform
var cssContent = ".sb-label {\n  font-family: Lucida Grande, Lucida Sans Unicode, Verdana, Arial, sans-serif;\n  font-weight: bold;\n  fill: #fff;\n  font-size: 10px;\n  word-spacing: +1px;\n}\n.sb-obsolete { fill: #d42828; }\n.sb-motion { fill: #4a6cd4; }\n.sb-looks { fill: #8a55d7; }\n.sb-sound { fill: #bb42c3; }\n.sb-pen { fill: #0e9a6c;  }\n.sb-events { fill: #c88330; }\n.sb-control { fill: #e1a91a; }\n.sb-sensing { fill: #2ca5e2; }\n.sb-operators { fill: #5cb712; }\n.sb-variables { fill: #ee7d16; }\n.sb-list { fill: #cc5b22 }\n.sb-custom { fill: #632d99; }\n.sb-custom-arg { fill: #5947b1; }\n.sb-extension { fill: #4b4a60; }\n.sb-grey { fill: #969696; }\n.sb-bevel {\n  filter: url(#bevelFilter);\n}\n.sb-input {\n  filter: url(#inputBevelFilter);\n}\n.sb-input-number,\n.sb-input-string,\n.sb-input-number-dropdown {\n  fill: #fff;\n}\n.sb-literal-number,\n.sb-literal-string,\n.sb-literal-number-dropdown,\n.sb-literal-dropdown {\n  font-weight: normal;\n  font-size: 9px;\n  word-spacing: 0;\n}\n.sb-literal-number,\n.sb-literal-string,\n.sb-literal-number-dropdown {\n  fill: #000;\n}\n.sb-darker {\n  filter: url(#inputDarkFilter);\n}\n.sb-outline {\n  stroke: #fff;\n  stroke-opacity: 0.2;\n  stroke-width: 2;\n  fill: none;\n}\n.sb-define-hat-cap {\n  stroke: #632d99;\n  stroke-width: 1;\n  fill: #8e2ec2;\n}\n.sb-comment {\n  fill: #ffffa5;\n  stroke: #d0d1d2;\n  stroke-width: 1;\n}\n.sb-comment-line {\n  fill: #ffff80;\n}\n.sb-comment-label {\n  font-family: DejaVu Sans, Helvetica, Arial, sans-serif;\n  font-weight: bold;\n  fill: #5c5d5f;\n  word-spacing: 0;\n  font-size: 12px;\n}\n";

function makeStyle() {
  var style = el('style');
  style.appendChild(cdata(cssContent));
  return style;
}

function makeIcons() {
  return [
    el('path', {
      d: 'M1.504 21L0 19.493 4.567 0h1.948l-.5 2.418s1.002-.502 3.006 0c2.006.503 3.008 2.01 6.517 2.01 3.508 0 4.463-.545 4.463-.545l-.823 9.892s-2.137 1.005-5.144.696c-3.007-.307-3.007-2.007-6.014-2.51-3.008-.502-4.512.503-4.512.503L1.504 21z',
      fill: '#3f8d15',
      id: 'greenFlag'
    }),
    el('path', {
      d: 'M6.724 0C3.01 0 0 2.91 0 6.5c0 2.316 1.253 4.35 3.14 5.5H5.17v-1.256C3.364 10.126 2.07 8.46 2.07 6.5 2.07 4.015 4.152 2 6.723 2c1.14 0 2.184.396 2.993 1.053L8.31 4.13c-.45.344-.398.826.11 1.08L15 8.5 13.858.992c-.083-.547-.514-.714-.963-.37l-1.532 1.172A6.825 6.825 0 0 0 6.723 0z',
      fill: '#fff',
      id: 'turnRight'
    }),
    el('path', {
      d: 'M3.637 1.794A6.825 6.825 0 0 1 8.277 0C11.99 0 15 2.91 15 6.5c0 2.316-1.253 4.35-3.14 5.5H9.83v-1.256c1.808-.618 3.103-2.285 3.103-4.244 0-2.485-2.083-4.5-4.654-4.5-1.14 0-2.184.396-2.993 1.053L6.69 4.13c.45.344.398.826-.11 1.08L0 8.5 1.142.992c.083-.547.514-.714.963-.37l1.532 1.172z',
      fill: '#fff',
      id: 'turnLeft'
    }),
    el('path', {
      d: 'M0 0L4 4L0 8Z',
      fill: '#111',
      id: 'addInput'
    }),
    el('path', {
      d: 'M4 0L4 8L0 4Z',
      fill: '#111',
      id: 'delInput'
    }),
    setProps(group([
      el('path', {
        d: 'M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2',
        fill: '#000',
        opacity: '0.3',
      }),
      move(-1, -1, el('path', {
        d: 'M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2',
        fill: '#fff',
        opacity: '0.9',
      })),
    ]), {
      id: 'loopArrow'
    }),
  ];
}

var Filter = function(id, props) {
  this.el = el('filter', extend(props, {
    id: id,
    x0: '-50%',
    y0: '-50%',
    width: '200%',
    height: '200%',
  }));
  this.highestId = 0;
};
Filter.prototype.fe = function(name, props, children) {
  var shortName = name.toLowerCase().replace(/gaussian|osite/, '');
  var id = [shortName, '-', ++this.highestId].join('');
  this.el.appendChild(withChildren(el('fe' + name, extend(props, {
    result: id,
  })), children || []));
  return id;
};
Filter.prototype.comp = function(op, in1, in2, props) {
  return this.fe('Composite', extend(props, {
    operator: op,
    in: in1,
    in2: in2,
  }));
};
Filter.prototype.subtract = function(in1, in2) {
  return this.comp('arithmetic', in1, in2, { k2: +1, k3: -1 });
};
Filter.prototype.offset = function(dx, dy, in1) {
  return this.fe('Offset', {
    in: in1,
    dx: dx,
    dy: dy,
  });
};
Filter.prototype.flood = function(color, opacity, in1) {
  return this.fe('Flood', {
    in: in1,
    'flood-color': color,
    'flood-opacity': opacity,
  });
};
Filter.prototype.blur = function(dev) {
  return this.fe('GaussianBlur', {
    'in': 'SourceAlpha',
    stdDeviation: [dev, dev].join(' '),
  });
};
Filter.prototype.merge = function(children) {
  this.fe('Merge', {}, children.map(function(name) {
    return el('feMergeNode', {
      in: name,
    });
  }));
};

function bevelFilter(id, inset) {
  var f = new Filter(id);

  var alpha = 'SourceAlpha';
  var s = inset ? -1 : 1;
  var blur = f.blur(1);

  f.merge([
    'SourceGraphic',
    f.comp('in',
          f.flood('#fff', 0.15),
          f.subtract(alpha, f.offset(+s, +s, blur))
    ),
    f.comp('in',
          f.flood('#000', 0.7),
          f.subtract(alpha, f.offset(-s, -s, blur))
    ),
  ]);

  return f.el;
}

function darkFilter(id) {
  var f = new Filter(id);

  f.merge([
    'SourceGraphic',
    f.comp('in',
      f.flood('#000', 0.2),
      'SourceAlpha'),
  ]);

  return f.el;
}

function darkRect(w, h, category, el) {
  return setProps(group([
    setProps(el, {
      class: ['sb-'+category, 'sb-darker'].join(' '),
    })
  ]), { width: w, height: h });
}

/* Label */

function measureText(text, font) {
  // re-use canvas object for better performance
  var canvas = measureText.canvas || (measureText.canvas = newCanvas());
  var context = canvas.getContext('2d');
  context.font = font;
  return context.measureText(text);
}

var allLabels = [];
var Label = function(value, cls) {
  this.value = value;
  this.cls = cls ? 'sb-label ' + cls : 'sb-label';
  this.el = null;
  this.height = 12;
  this.x = 0;
  this.metrics = null;
  allLabels.push(this);
};
Label.prototype.isLabel = true;

Label.prototype.stringify = function() {
  if (this.value === '<' || this.value === '>') return this.value;
  return (this.value
    .replace(/([<>[\](){}])/g, '\\$1')
  );
};

Label.prototype.draw = function() {
  return this.el;
};

Object.defineProperty(Label.prototype, 'width', {
  get: function() {
    return this.metrics.width;
  },
});

function measureAllLabels() {
  allLabels.forEach(function(label) {
    var font;
    if (label.cls.indexOf('sb-comment-label') === -1) {
      // regular label
      font = 'bold 10px Lucida Grande';
    } else {
      // comment label
      font = 'bold 12px Helevetica';
    }
    label.metrics = measureText(label.value, font);
    label.el = text(0, 10, label.value, { class: label.cls });
  });
}

/* Icon */

var Icon = function(name) {
  this.name = name;
  this.isArrow = name === 'loopArrow';

  var info = Icon.icons[name];
  assert(info, 'no info for icon ' + name);
  extend(info, this);
};
Icon.prototype.isIcon = true;

Icon.prototype.stringify = function() {
  return unicodeIcons['@' + this.name] || '';
};

Icon.icons = {
  greenFlag: { width: 20, height: 21, dy: -2 },
  turnLeft: { width: 15, height: 12, dy: +1 },
  turnRight: { width: 15, height: 12, dy: +1 },
  loopArrow: { width: 14, height: 11 },
  addInput: { width: 4, height: 8 },
  delInput: { width: 4, height: 8 },
};
Icon.prototype.draw = function() {
  return symbol('#' + this.name, {
    width: this.width,
    height: this.height,
  });
};


/* Input */

var Input = function(shape, value, menu) {
  this.shape = shape;
  this.value = value;
  this.menu = menu || null;

  this.isRound = shape === 'number' || shape === 'number-dropdown';
  this.isBoolean = shape === 'boolean';
  this.isStack = shape === 'stack';
  this.isInset = shape === 'boolean' || shape === 'stack' || shape === 'reporter';
  this.isColor = shape === 'color';
  this.hasArrow = shape === 'dropdown' || shape === 'number-dropdown';
  this.isDarker = shape === 'boolean' || shape === 'stack' || shape === 'dropdown';
  this.isSquare = shape === 'string' || shape === 'color' || shape === 'dropdown';

  this.hasLabel = !(this.isColor || this.isInset);
  this.label = this.hasLabel ? new Label(value, 'sb-literal-' + this.shape) : null;
  this.x = 0;
};
Input.prototype.isInput = true;

Input.fromJSON = function(lang, value, part) {
  var shape = {
    b: 'boolean',
    n: 'number',
    s: 'string',
    d: 'number-dropdown',
    m: 'dropdown',
    c: 'color',
  }[part[1]];

  if (shape === 'color') {
    if (!value && value !== 0) {
      value = parseInt(Math.random() * 256 * 256 * 256);
    }
    value = +value;
    if (value < 0) value = 0xFFFFFFFF + value + 1;
    var hex = value.toString(16);
    hex = hex.slice(Math.max(0, hex.length - 6)); // last 6 characters
    while (hex.length < 6) hex = '0' + hex;
    if (hex[0] === hex[1] && hex[2] === hex[3] && hex[4] === hex[5]) {
      hex = hex[0] + hex[2] + hex[4];
    }
    value = '#' + hex;
  } else if (shape === 'dropdown') {
    value = {
      _mouse_: 'mouse-pointer',
      _myself_: 'myself',
      _stage_: 'Stage',
      _edge_: 'edge',
      _random_: 'random position',
    }[value] || value;
    var menu = value;
    value = lang.dropdowns[value] || value ;
  } else if (shape === 'number-dropdown') {
    value = lang.dropdowns[value] || value ;
  }

  return new Input(shape, ''+value, menu);
};

Input.prototype.toJSON = function() {
  if (this.isColor) {
    assert(this.value[0] === '#');
    var h = this.value.slice(1);
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    return parseInt(h, 16);
    // TODO signed int?
  }
  if (this.hasArrow) {
    var value = this.menu || this.value;
    if (this.shape === 'dropdown') {
      value = {
        'mouse-pointer': '_mouse_',
        'myself': '_myself',
        'Stage': '_stage_',
        'edge': '_edge_',
        'random position': '_random_',
      }[value] || value;
    }
    return value;
  }
  return this.isBoolean ? false : this.value;
};

Input.prototype.stringify = function() {
  if (this.isColor) {
    assert(this.value[0] === '#');
    return '[' + this.value + ']';
  }
  var text = ((this.value ? '' + this.value : '')
    .replace(/ v$/, ' \\v')
    .replace(/([\]\\])/g, '\\$1')
  );
  if (this.hasArrow) text += ' v';
  return this.isRound ? '(' + text + ')'
        : this.isSquare ? '[' + text + ']'
        : this.isBoolean ? '<>'
        : this.isStack ? '{}'
        : text;
};

Input.prototype.translate = function(lang) {
  if (this.hasArrow) {
    var value = this.menu || this.value;
    this.value = lang.dropdowns[value] || value;
    this.label = new Label(this.value, ['sb-literal-' + this.shape]);
  }
};

Input.shapes = {
  'string': rect,
  'number': roundedRect,
  'number-dropdown': roundedRect,
  'color': rect,
  'dropdown': rect,

  'boolean': pointedRect,
  'stack': stackRect,
  'reporter': roundedRect,
};

Input.prototype.draw = function(parent) {
  var w;
  if (this.hasLabel) {
    var label = this.label.draw();
    w = Math.max(14, this.label.width + (this.shape === 'string' || this.shape === 'number-dropdown' ? 6 : 9));
  } else {
    w = this.isInset ? 30 : this.isColor ? 13 : null;
  }
  if (this.hasArrow) w += 10;
  this.width = w;

  var h = this.height = this.isRound || this.isColor ? 13 : 14;

  var el = Input.shapes[this.shape](w, h);
  if (this.isColor) {
    setProps(el, {
      fill: this.value,
    });
  } else if (this.isDarker) {
    el = darkRect(w, h, parent.info.category, el);
    if (parent.info.color) {
      setProps(el, {
        fill: parent.info.color,
      });
    }
  }

  var result = group([
    setProps(el, {
      class: ['sb-input', 'sb-input-'+this.shape].join(' '),
    }),
  ]);
  if (this.hasLabel) {
    var x = this.isRound ? 5 : 4;
    result.appendChild(move(x, 0, label));
  }
  if (this.hasArrow) {
    var y = this.shape === 'dropdown' ? 5 : 4;
    result.appendChild(move(w - 10, y, polygon({
      points: [
        7, 0,
        3.5, 4,
        0, 0,
      ],
      fill: '#000',
      opacity: '0.6',
    })));
  }
  return result;
};


/* Block */

var Block = function(info, children, comment) {
  assert(info);
  this.info = info;
  this.children = children;
  this.comment = comment || null;

  var shape = this.info.shape;
  this.isHat = shape === 'hat' || shape === 'define-hat';
  this.hasPuzzle = shape === 'stack' || shape === 'hat';
  this.isFinal = /cap/.test(shape);
  this.isCommand = shape === 'stack' || shape === 'cap' || /block/.test(shape);
  this.isOutline = shape === 'outline';
  this.isReporter = shape === 'reporter';
  this.isBoolean = shape === 'boolean';

  this.isRing = shape === 'ring';
  this.hasScript = /block/.test(shape);
  this.isElse = shape === 'celse';
  this.isEnd = shape === 'cend';

  this.x = 0;
  this.width = null;
  this.height = null;
  this.firstLine = null;
  this.innerWidth = null;
};
Block.prototype.isBlock = true;

Block.fromJSON = function(lang, array) {
  var args = array.slice();
  var selector = args.shift();
  var spec, info, parts, children;
  if (selector === 'procDef') {
    spec = args[0];
    var inputNames = args[1].slice();
    // var defaultValues = args[2];
    // var isAtomic = args[3]; // TODO

    info = parseSpec(spec);
    children = info.parts.map(function(part) {
      if (inputPat.test(part)) {
        var label = new Label(inputNames.shift());
        return new Block({
          shape: part[1] === 'b' ? 'boolean' : 'reporter',
          category: 'custom-arg',
        }, [label]);
      } else {
        return new Label(part);
      }
    });
    var outline = new Block({
      shape: 'outline',
    }, children);

    children = [new Label(lang.define[0]), outline];
    return new Block({
      shape: 'define-hat',
      category: 'custom',
      selector: 'procDef',
      call: spec,
      names: args[1],
      language: lang,
    }, children);

  } else if (selector === 'call') {
    spec = args.shift();
    info = extend(parseSpec(spec), {
      category: 'custom',
      shape: 'stack',
      selector: 'call',
      call: spec,
      language: lang,
    });
    parts = info.parts;

  } else if (selector === 'readVariable' || selector === 'contentsOfList:' || selector === 'getParam') {
    var shape = selector === 'getParam' && args.pop() === 'b' ? 'boolean' : 'reporter';
    info = {
      selector: selector,
      shape: shape,
      category: {
        'readVariable': 'variables',
        'contentsOfList:': 'list',
        'getParam': 'custom-arg',
      }[selector],
      language: lang,
    };
    return new Block(info, [new Label(args[0])]);

  } else {
    info = extend(blocksBySelector[selector], {
      language: lang,
    });
    assert(info, 'unknown selector: ' + selector);
    spec = lang.commands[info.spec] || spec;
    parts = spec ? parseSpec(spec).parts : info.parts;
  }
  children = parts.map(function(part) {
    if (inputPat.test(part)) {
      var arg = args.shift();
      return (isArray(arg) ? Block : Input).fromJSON(lang, arg, part);
    } else if (iconPat.test(part)) {
      return new Icon(part.slice(1));
    } else {
      return new Label(part.trim());
    }
  });
  args.forEach(function(list, index) {
    list = list || [];
    assert(isArray(list));
    children.push(new Script(list.map(Block.fromJSON.bind(null, lang))));
    if (selector === 'doIfElse' && index === 0) {
      children.push(new Label(lang.commands['else']));
    }
  });
  // TODO loop arrows
  return new Block(info, children);
};

Block.prototype.toJSON = function() {
  var selector = this.info.selector;
  var args = [];

  if (selector === 'procDef') {
    var inputNames = this.info.names;
    var spec = this.info.call;
    var info = parseSpec(spec);
    var defaultValues = info.inputs.map(function(input) {
      return input === '%n' ? 1
            : input === '%b' ? false : '';
    });
    var isAtomic = false; // TODO 'define-atomic' ??
    return ['procDef', spec, inputNames, defaultValues, isAtomic];
  }

  if (selector === 'readVariable' || selector === 'contentsOfList:' || selector === 'getParam') {
    args.push(blockName(this));
    if (selector === 'getParam') args.push(this.isBoolean === 'boolean' ? 'b' : 'r');

  } else {
    for (var i=0; i<this.children.length; i++) {
      var child = this.children[i];
      if (child.isInput || child.isBlock || child.isScript) {
        args.push(child.toJSON());
      }
    }

    if (selector === 'call') {
      return ['call', this.info.call].concat(args);
    }
  }
  if (!selector) throw 'unknown block: ' + this.info.hash;
  return [selector].concat(args);
};

Block.prototype.stringify = function() {
  var firstInput = null;
  var checkAlias = false;
  var text = this.children.map(function(child) {
    if (child.isIcon) checkAlias = true;
    if (!firstInput && !(child.isLabel || child.isIcon)) firstInput = child;

    return child.isScript ? '\n' + indent(child.stringify()) + '\n'
                          : child.stringify().trim() + ' ';
  }).join('').trim();

  var lang = this.info.language;
  if (checkAlias && lang && this.info.selector) {
    var type = blocksBySelector[this.info.selector];
    var alias = lang.nativeAliases[type.spec];
    if (alias) {
      // TODO make translate() not in-place, and use that
      if (inputPat.test(alias) && firstInput) {
        alias = alias.replace(inputPat, firstInput.stringify());
      }
      return alias;
    }
  }

  if ((this.info.shape === 'reporter' && this.info.category === 'list')
    || (this.info.category === 'custom' && this.info.shape === 'stack')) {
    text += ' :: ' + this.info.category;
  }
  return this.hasScript ? text + '\nend'
        : this.info.shape === 'reporter' ? '(' + text + ')'
        : this.info.shape === 'boolean' ? '<' + text + '>'
        : text;
};

Block.prototype.translate = function(lang, isShallow) {
  var selector = this.info.selector;
  if (!selector) return;
  if (selector === 'procDef') {
    assert(this.children[0].isLabel);
    this.children[0] = new Label(lang.define[0] || english.define[0]);
  }
  var block = blocksBySelector[selector];
  if (!block) return;
  var nativeSpec = lang.commands[block.spec];
  if (!nativeSpec) return;
  var nativeInfo = parseSpec(nativeSpec);
  var args = this.children.filter(function(child) {
    return !child.isLabel && !child.isIcon;
  });
  if (!isShallow) args.forEach(function(child) {
    child.translate(lang);
  });
  this.children = nativeInfo.parts.map(function(part) {
    part = part.trim();
    if (!part) return;
    return inputPat.test(part) ? args.shift()
          : iconPat.test(part) ? new Icon(part.slice(1)) : new Label(part);
  }).filter(bool);
  args.forEach(function(arg) {
    this.children.push(arg);
  }.bind(this));
  this.info.language = lang;
  this.info.isRTL = rtlLanguages.indexOf(lang.code) > -1;
};

Block.shapes = {
  'stack': stackRect,
  'c-block': stackRect,
  'if-block': stackRect,
  'celse': stackRect,
  'cend': stackRect,

  'cap': capRect,
  'reporter': roundedRect,
  'boolean': pointedRect,
  'hat': hatRect,
  'define-hat': procHatRect,
  'ring': roundedRect,
};

Block.prototype.drawSelf = function(w, h, lines) {
  // mouths
  if (lines.length > 1) {
    return mouthRect(w, h, this.isFinal, lines, {
      class: ['sb-' + this.info.category, 'sb-bevel'].join(' '),
    });
  }

  // outlines
  if (this.info.shape === 'outline') {
    return setProps(stackRect(w, h), {
      class: 'sb-outline',
    });
  }

  // rings
  if (this.isRing) {
    var child = this.children[0];
    if (child && (child.isInput || child.isBlock || child.isScript)) {
      var shape = child.isScript ? 'stack'
                : child.isInput ? child.shape : child.info.shape;
      return ringRect(w, h, child.y, child.width, child.height, shape, {
        class: ['sb-' + this.info.category, 'sb-bevel'].join(' '),
      });
    }
  }

  var func = Block.shapes[this.info.shape];
  assert(func, 'no shape func: ' + this.info.shape);
  return func(w, h, {
    class: ['sb-' + this.info.category, 'sb-bevel'].join(' '),
  });
};

Block.prototype.minDistance = function(child) {
  if (this.isBoolean) {
    return (
      child.isReporter ? 4 + child.height/4 | 0 :
      child.isLabel ? 5 + child.height/2 | 0 :
      child.isBoolean || child.shape === 'boolean' ? 5 :
      2 + child.height/2 | 0
    );
  }
  if (this.isReporter) {
    return (
      (child.isInput && child.isRound) || ((child.isReporter || child.isBoolean) && !child.hasScript) ? 0 :
      child.isLabel ? 2 + child.height/2 | 0 :
      -2 + child.height/2 | 0
    );
  }
  return 0;
};

Block.padding = {
  'hat':        [15, 6, 2],
  'define-hat': [21, 8, 9],
  'reporter':   [3, 4, 1],
  'boolean':    [3, 4, 2],
  'cap':        [6, 6, 2],
  'c-block':    [3, 6, 2],
  'if-block':   [3, 6, 2],
  'ring':       [4, 4, 2],
  null:         [4, 6, 2],
};

Block.prototype.draw = function() {
  var isDefine = this.info.shape === 'define-hat';
  var children = this.children;

  var padding = Block.padding[this.info.shape] || Block.padding[null];
  var pt = padding[0];
  var px = padding[1];
  var pb = padding[2];

  var y = 0;
  var Line = function(y) {
    this.y = y;
    this.width = 0;
    this.height = y ? 13 : 16;
    this.children = [];
  };

  var innerWidth = 0;
  var scriptWidth = 0;
  var line = new Line(y);
  function pushLine(isLast) {
    if (lines.length === 0) {
      line.height += pt + pb;
    } else {
      line.height += isLast ? 0 : +2;
      line.y -= 1;
    }
    y += line.height;
    lines.push(line);
  }

  if (this.info.isRTL) {
    var start = 0;
    var flip = function() {
      children = (
        children.slice(0, start).concat(
        children.slice(start, i).reverse())
        .concat(children.slice(i))
      );
    }.bind(this);
    var i;
    for (i=0; i<children.length; i++) {
      if (children[i].isScript) {
        flip();
        start = i + 1;
      }
    } if (start < i) {
      flip();
    }
  }

  var lines = [];
  for (i=0; i<children.length; i++) {
    var child = children[i];
    child.el = child.draw(this);

    if (child.isScript && this.isCommand) {
      this.hasScript = true;
      pushLine();
      child.y = y;
      lines.push(child);
      scriptWidth = Math.max(scriptWidth, Math.max(1, child.width));
      child.height = Math.max(12, child.height) + 3;
      y += child.height;
      line = new Line(y);
    } else if (child.isArrow) {
      line.children.push(child);
    } else {
      var cmw = i > 0 ? 30 : 0; // 27
      var md = this.isCommand ? 0 : this.minDistance(child);
      var mw = this.isCommand ? (child.isBlock || child.isInput ? cmw : 0) : md;
      if (mw && !lines.length && line.width < mw - px) {
        line.width = mw - px;
      }
      child.x = line.width;
      line.width += child.width;
      innerWidth = Math.max(innerWidth, line.width + Math.max(0, md - px));
      line.width += 4;
      if (!child.isLabel) {
        line.height = Math.max(line.height, child.height);
      }
      line.children.push(child);
    }
  }
  pushLine(true);

  innerWidth = Math.max(innerWidth + px * 2,
                        this.isHat || this.hasScript ? 83 :
                        this.isCommand || this.isOutline || this.isRing ? 39 : 20);
  this.height = y;
  this.width = scriptWidth ? Math.max(innerWidth, 15 + scriptWidth) : innerWidth;
  if (isDefine) {
    var p = Math.min(26, 3.5 + 0.13 * innerWidth | 0) - 18;
    this.height += p;
    pt += 2 * p;
  }
  this.firstLine = lines[0];
  this.innerWidth = innerWidth;

  var objects = [];

  for (i=0; i<lines.length; i++) {
    var line_ = lines[i];
    if (line_.isScript) {
      objects.push(move(15, line_.y, line_.el));
      continue;
    }

    var h = line_.height;

    for (var j=0; j<line_.children.length; j++) {
      var child_ = line_.children[j];
      if (child_.isArrow) {
        objects.push(move(innerWidth - 15, this.height - 3, child_.el));
        continue;
      }

      var y_ = pt + (h - child_.height - pt - pb) / 2 - 1;
      if (isDefine && child_.isLabel) {
        y_ += 3;
      } else if (child_.isIcon) {
        y_ += child_.dy | 0;
      }
      if (this.isRing) {
        child_.y = line_.y + y_|0;
        if (child_.isInset) {
          continue;
        }
      }
      objects.push(move(px + child_.x, line_.y + y_|0, child_.el));
    }
  }

  var el = this.drawSelf(innerWidth, this.height, lines);
  objects.splice(0, 0, el);
  if (this.info.color) {
    setProps(el, {
      fill: this.info.color,
    });
  }

  return group(objects);
};


/* Comment */

var Comment = function(value, hasBlock) {
  this.label = new Label(value, 'sb-comment-label');
  this.width = null;
  this.hasBlock = hasBlock;
};
Comment.prototype.isComment = true;
Comment.lineLength = 12;
Comment.prototype.height = 20;

Comment.prototype.stringify = function() {
  return '// ' + this.label.value;
};

Comment.prototype.draw = function() {
  var labelEl = this.label.draw();

  this.width = this.label.width + 16;
  return group([
    commentLine(this.hasBlock ? Comment.lineLength : 0, 6),
    commentRect(this.width, this.height, {
      class: 'sb-comment',
    }),
    move(8, 4, labelEl),
  ]);
};


/* Script */

var Script = function(blocks) {
  this.blocks = blocks;
  this.isEmpty = !blocks.length;
  this.isFinal = !this.isEmpty && blocks[blocks.length - 1].isFinal;
  this.y = 0;
};
Script.prototype.isScript = true;

Script.fromJSON = function(lang, blocks) {
  // x = array[0], y = array[1];
  return new Script(blocks.map(Block.fromJSON.bind(null, lang)));
};

Script.prototype.toJSON = function() {
  if (this.blocks[0] && this.blocks[0].isComment) return;
  return this.blocks.map(function(block) {
    return block.toJSON();
  });
};

Script.prototype.stringify = function() {
  return this.blocks.map(function(block) {
    var line = block.stringify();
    if (block.comment) line += ' ' + block.comment.stringify();
    return line;
  }).join('\n');
};

Script.prototype.translate = function(lang) {
  this.blocks.forEach(function(block) {
    block.translate(lang);
  });
};

Script.prototype.draw = function(inside) {
  var children = [];
  var y = 0;
  this.width = 0;
  for (var i=0; i<this.blocks.length; i++) {
    var block = this.blocks[i];
    children.push(move(inside ? 0 : 2, y, block.draw()));
    y += block.height;
    this.width = Math.max(this.width, block.width);

    var comment = block.comment;
    if (comment) {
      var line = block.firstLine;
      var cx = block.innerWidth + 2 + Comment.lineLength;
      var cy = y - block.height + (line.height / 2);
      var el = comment.draw();
      children.push(move(cx, cy - comment.height / 2, el));
      this.width = Math.max(this.width, cx + comment.width);
    }
  }
  this.height = y;
  if (!inside && !this.isFinal) {
    this.height += 3;
  }
  return group(children);
};


/* Document */

var Document = function(scripts) {
  this.scripts = scripts;

  this.width = null;
  this.height = null;
  this.el = null;
  this.defs = null;
};

Document.fromJSON = function(scriptable, lang) {
  lang = lang || english;
  var scripts = scriptable.scripts.map(function(array) {
    var script = Script.fromJSON(lang, array[2]);
    script.x = array[0];
    script.y = array[1];
    return script;
  });
  // TODO scriptable.scriptComments
  return new Document(scripts);
};

Document.prototype.toJSON = function() {
  var jsonScripts = this.scripts.map(function(script) {
    var jsonBlocks = script.toJSON();
    if (!jsonBlocks) return;
    return [10, script.y + 10, jsonBlocks];
  }).filter(bool);
  return {
    scripts: jsonScripts,
    // scriptComments: [], // TODO
  };
};

Document.prototype.stringify = function() {
  return this.scripts.map(function(script) {
    return script.stringify();
  }).join('\n\n');
};

Document.prototype.translate = function(lang) {
  this.scripts.forEach(function(script) {
    script.translate(lang);
  });
};

Document.prototype.render = function() {
  // render each script
  var width = 0;
  var height = 0;
  var elements = [];
  for (var i=0; i<this.scripts.length; i++) {
    var script = this.scripts[i];
    if (height) height += 10;
    script.y = height;
    elements.push(move(0, height, script.draw()));
    height += script.height;
    width = Math.max(width, script.width + 4);
  }
  this.width = width;
  this.height = height;

  // return SVG
  var svg = newSVG(width, height);
  svg.appendChild(this.defs = withChildren(el('defs'), [
    bevelFilter('bevelFilter', false),
    bevelFilter('inputBevelFilter', true),
    darkFilter('inputDarkFilter'),
  ].concat(makeIcons())));

  svg.appendChild(group(elements));
  var style = makeStyle();
  svg.appendChild(style);
  this.el = svg;
  return svg;
};

Document.prototype.exportSVG = function() {
  assert(this.el, 'call draw() first');

  var style = makeStyle();
  this.defs.appendChild(style);
  var xml = new XMLSerializer().serializeToString(this.el);
  this.defs.removeChild(style);

  return 'data:image/svg+xml;utf8,' + xml.replace(
    /[#]/g, encodeURIComponent
  );
};

Document.prototype.exportPNG = function(cb) {
  var canvas = newCanvas();
  canvas.width = this.width;
  canvas.height = this.height;
  var context = canvas.getContext('2d');

  var image = new Image;
  image.src = this.exportSVG();
  image.onload = function() {
    context.drawImage(image, 0, 0);

    if (URL && URL.createObjectURL && Blob && canvas.toBlob) {
      canvas.toBlob(function(blob) {
        cb(URL.createObjectURL(blob));
      }, 'image/png');
    } else {
      cb(canvas.toDataURL('image/png'));
    }
  };
};


/***************************************************************************/

/**
 * Initialize
 */

var blocksBySelector = {};
var blocksBySpec = {};
var allBlocks = scratchCommands.map(function(command) {
  var info = extend(parseSpec(command[0]), {
    shape: typeShapes[command[1]], // /[ bcefhr]|cf/
    category: categoriesById[command[2] % 100],
    selector: command[3],
    hasLoopArrow: ['doRepeat', 'doUntil', 'doForever'].indexOf(command[3]) > -1,
  });
  if (info.selector) {
    // nb. command order matters!
    // Scratch 1.4 blocks are listed last
    if(!blocksBySelector[info.selector]) blocksBySelector[info.selector] = info;
  }
  return blocksBySpec[info.spec] = info;
});

allBlocks.forEach(function(info) {
  english.commands[info.spec] = info.spec;
}),

disambig('computeFunction:of:', 'getAttribute:of:', function(children, lang) {
  // Operators if math function, otherwise sensing "attribute of" block
  var first = children[0];
  if (!first.isInput) return;
  var name = first.value;
  return lang.math.indexOf(name) > -1;
});

disambig('lineCountOfList:', 'stringLength:', function(children) {
  // List block if dropdown, otherwise operators
  var last = children[children.length - 1];
  if (!last.isInput) return;
  return last.shape === 'dropdown';
});

disambig('penColor:', 'setPenHueTo:', function(children) {
  // Color block if color input, otherwise numeric
  var last = children[children.length - 1];
  // If variable, assume color input, since the RGBA hack is common.
  // TODO fix Scratch :P
  return (last.isInput && last.isColor) || last.isBlock;
});

blocksBySelector['stopScripts'].specialCase = function(info, children, lang) {
  // Cap block unless argument is "other scripts in sprite"
  var last = children[children.length - 1];
  if (!last.isInput) return;
  var value = last.value;
  if (lang.osis.indexOf(value) > -1) {
    return extend(blocksBySelector['stopScripts'], {
      shape: 'stack',
    });
  }
};

// Load translations
loadLanguage('en', english);

/**
 * Exports
 */

/**
 * Render scratch code as SVG.
 *
 * @param str {string} Scratch code.
 * @returns {string} SVG as string.
 */
function render (str, options) {
  allLabels = [];  // TODO: keep ref to labels in doc
  var doc = parse(str, options);
  /**
   * Labels are not initialized with whole strings in parsing,
   * so we need to measure their size after parsing.
   */
  measureAllLabels();
  var svg = doc.render();
  /**
   * Defs self-closing tags -> closing tags,
   * see http://stackoverflow.com/questions/12686247/safari-6-svg-tag-use-issues
   */
  var strSvg = new XMLSerializer().serializeToString(svg);
  // strSvg = strSvg.replace(/sbRemoveMe/g, '');
  return strSvg;
}
module.exports = render;

/**
 * Render all matching elements in page to shiny scratch blocks.
 * Accepts a CSS selector as an argument.
 *
 *  scratchblocks.renderMatching("pre.blocks");
 *
 * Like the old 'scratchblocks2.parse().
 */
module.exports.renderMatching = function (selector, options) {
  selector = selector || 'pre.blocks';
  options = extend({
    inline: false,
    languages: ['en'],


    read: readCode, // function(el, options) => code
    parse: parse,   // function(code, options) => doc
    render: render, // function(doc, cb) => svg string
    replace: replace, // function(el, svg, doc, options)    read: readCode, //
  }, options);

  // find elements
  var results = [].slice.apply(document.querySelectorAll(selector));
  results.forEach(function(el) {
    var code = options.read(el, options);

    var doc = options.parse(code, options);

    var svg = options.render(doc);

    options.replace(el, svg, doc, options);
  });

  /**
   * read code from a DOM element
   *
   * @parameter el {Element}
   * @parameter options {object}
   * @returns {string} Code inside `el`.
   */
  function readCode(el, options) {
    options = extend({
      inline: false,
    }, options);

    var html = el.innerHTML.replace(/<br>\s?|\n|\r\n|\r/ig, '\n');
    var pre = document.createElement('pre');
    pre.innerHTML = html;
    var code = pre.textContent;
    if (options.inline) {
      code = code.replace('\n', '');
    }
    return code;
  }

  /**
   * insert 'svg' into 'el', with appropriate wrapper elements
   *
   */
  function replace(el, svg, scripts, options) {
    var container;
    if (options.inline) {
      container = document.createElement('span');
      var cls = 'scratchblocks scratchblocks-inline';
      if (scripts[0] && !scripts[0].isEmpty) {
        cls += ' scratchblocks-inline-' + scripts[0].blocks[0].shape;
      }
      container.className = cls;
      container.style.display = 'inline-block';
      container.style.verticalAlign = 'middle';
    } else {
      container = document.createElement('div');
      container.className = 'scratchblocks';
    }
    container.insertAdjacentHTML('beforeend', svg);

    el.innerHTML = '';
    el.appendChild(container);
  }
};

module.exports.loadLanguages = loadLanguages;
module.exports.fromJSON = Document.fromJSON;
module.exports.toJSON = function(doc) { return doc.toJSON(); };
module.exports.stringify = function(doc) { return doc.stringify(); };

},{"./commands.js":3}]},{},[1])(1)
});