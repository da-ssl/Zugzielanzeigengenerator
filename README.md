> [!WARNING]
> Diese Version des ZZAGenerators ist schlecht geschrieben und wird auch **nicht mehr weiterentwickelt**. Sie wird lediglich als Readonly-Repository hier verbleiben.
>
> Die Neue Version gibt es hier:
>
> **https://anrufschranke.de/zza/**
>
> Sie steckt zwar auch noch in den Kinderschuhen, ist aber wesentlich ausgereifter und kann auch potentiell auf andere ZZAs erweitert werden.
>
> ~ 03. November 2024
# Zugzielanzeigengenerator
Web-App zum Generieren von Zugzielanzeigern mit benutzerdefiniertem Text.
<img src="https://raw.githubusercontent.com/da-ssl/Zugzielanzeigengenerator/main/img/preview.png" alt="Vorschau des Generators" width="545"/>
## Features:
Der Zugzielanzeigengenerator kann einen S-Bahn-Anzeiger simulieren, wie er unter anderem auf der S-Bahn München verbaut ist. Die Züge und ihre Daten können entweder manuell eingegeben oder automatisch abgerufen werden - nur Stationsnummer eingeben und ab die Post.
## Geplante Features:
Der Generator steht noch ganz am Anfang und ist aktuell noch nicht wirklich zeigenswert. Auch wenn er erste Anzeigen darstellen kann, ist die Flexibilität sehr beschränkt. Hier sind Planungen für die Zukunft:
- **Daten in Eingabefelder eintragen**: Wenn Zugdaten automatisch abgerufen wurden, sollten sie in die Eingabefelder automatisch eingetragen werden, damit die Daten im Nachhinein manuell verändert werden können
- **Automatisches Generieren mithilfe von URI-Parametern:** In Zukunft soll der Generator bei Eingabe eines URLs automatisch die Anzeige generieren. Das heißt bei eingabe der URL example.com/zzagenerator?station=8000105&ce=off sollte automatisch die Anzeige des Frankfurter Hbfs (IBNR 8000105) erscheinen und die Kontrollelemente ausgeblendet werden, sodass wirklich nur die Anzeige zu sehen ist. Das ermöglicht vielseitige Einsatzmöglichkeiten für den Generator, z. B. für Stellwerkssimulationen oder Info-Screens.
