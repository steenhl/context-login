# Opgaver: Lifting state React

## Formål

I disse opgaver arbejder du med `useState`, props og komponenter. Du begynder med at samle funktionaliteten i et komponent. Bagefter deler du komponenten op i mindre, logiske dele.

Når flere komponenter skal læse eller ændre den samme state, skal state placeres i en fælles forælderkomponent. Forælderen sender værdier og funktioner videre som props.

## Arbejdsgang for hver opgave

1. Byg først hele løsningen i et komponent.
2. Kontrollér, at alle funktioner virker, før du deler komponenten op.
3. Find ud af, hvilke dele af brugerfladen der skal bruge eller ændre den samme state.
4. Flyt state op i den nærmeste fælles forælder, og opdel brugerfladen i mindre komponenter.
5. Send state og funktioner som props. Undgå at oprette separate kopier af den samme state i underkomponenterne.

## Opgave 1: Login og velkomst

Byg en simpel loginfunktion. Brugeren skal kunne skrive sit navn og logge ind. Når brugeren er logget ind, skal siden vise en personlig velkomst og en log ud-knap.

### Del 1 – et komponent

Implementér hele løsningen i et komponent med `useState`.

- Vis et inputfelt, når brugeren er logget ud.
- Når formularen sendes, gemmes brugerens navn i state.
- Vis brugerens navn i en velkomstbesked.
- Gør det muligt at logge ud igen.
- Undgå at logge ind, hvis navnefeltet er tomt.

### Del 2 – Opdel i komponenter

Del løsningen op i mindst disse komponenter:

- `Header`: viser velkomstbeskeden.
- `LoginForm`: viser input og login- eller log ud-knap.

Både `Header` og `LoginForm` skal bruge oplysninger om brugeren. Flyt derfor bruger-state til den nærmeste fælles forælder, og send de nødvendige værdier og funktioner ned som props.

**Tænk over:** Hvilken komponent skal eje bruger-state, og hvilke props skal `Header` og `LoginForm` modtage?

## Opgave 2: Indkøbskurv

Byg en lille indkøbsside med ét produkt. Brugeren skal kunne lægge produktet i kurven, ændre antallet og se den samlede pris.

### Del 1 – et komponent

Implementér hele løsningen i et komponent med `useState`.

- Vis produktets navn og pris.
- Tilføj knapper til at lægge produktet i kurven og ændre antallet.
- Antallet må ikke komme under nul.
- Vis antal varer og samlet pris.
- Når antallet er nul, skal kurven vise, at den er tom.

### Del 2 – Opdel i komponenter

Del løsningen op i mindst disse komponenter:

- `Product`: viser produktet og knapper til at ændre kurven.
- `CartSummary`: viser antal varer og samlet pris.

Begge komponenter skal bruge eller påvirke kurvens indhold. Placér derfor kurvens state i en fælles forælder, eksempelvis `ShoppingPage`. Send antal og funktioner til at ændre antallet ned som props.

Beregn den samlede pris ud fra produktets pris og antallet i kurven. Gem ikke den samlede pris som separat state.

**Tænk over:** Hvorfor skal `Product` ikke have sin egen kopi af antallet, når `CartSummary` også skal vise det?

## Opgave 3: Opgaveliste med filter

Byg en opgaveliste, hvor brugeren kan tilføje opgaver, markere dem som færdige og filtrere listen.

### Del 1 – et komponent

Implementér hele løsningen i et komponent med `useState`.

- Tilføj opgaver med en formular.
- Vis alle opgaver med en mulighed for at markere hver opgave som færdig eller ufærdig.
- Tilføj filtre: Alle, Aktive og Færdige.
- Vis, hvor mange aktive opgaver der er.
- Vis en passende besked, hvis der ikke er nogen opgaver, som matcher filteret.

### Del 2 – Opdel i komponenter

Del løsningen op i mindst disse komponenter:

- `AddTaskForm`: tilføjer en ny opgave.
- `TaskList`: viser de opgaver, der matcher det valgte filter.
- `TaskFilters`: lader brugeren vælge filter.
- `TaskCount`: viser antallet af aktive opgaver.

Opgavelisten bruges flere steder: formularen tilføjer opgaver, listen ændrer deres status, filterknapperne vælger visningen, og tælleren viser antallet af aktive opgaver. Placér derfor opgave-state og filter-state i en fælles forælder, eksempelvis `TodoPage`, og send værdier og funktioner videre som props.

Beregn de filtrerede opgaver og antallet af aktive opgaver ud fra state; opret ikke ekstra state til værdier, der kan beregnes.

### Ekstra udfordring – `useEffect`

Brug `useEffect` til at gemme opgaverne i `localStorage`, når de ændres. Når siden åbnes, skal gemte opgaver indlæses, så listen bevares efter en genindlæsning.

**Tænk over:** Hvilke data er den fælles state, og hvilke værdier kan beregnes ud fra den?
