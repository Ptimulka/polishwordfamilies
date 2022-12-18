# polishwordfamilies
[ENG] This project is really small serverless app written with Node.js, Express, serverless-http and netlify-lambda. It provides whole families of words for Polish language.\
[PL]  Ten projekt to bardzo mała aplikacja serverless napisana w Node.js z użyciem Express serverless-http and netlify-lambda. Podaje całe rodziny słów dla języka polskiego.

[ENG] You can check under below link: 
[PL] Możesz sprawdzić działanie aplikacji pod poniższym linkiem:

https://polishwordfamilies.netlify.app/.netlify/functions/api/wordfamilies/

[ENG] or you can start application locally by running:
[PL] albo uruchomić aplikację lokalnie:

`npm start`

[ENG] WHen deploying app to netlify set like below:
[PL] Deplojując apkę na netlify ustaw jak poniżej:

Build command `npm run build`
Publish directory `dist`

[ENG] For example for below GET request:\
[PL] Na przykład dla poniższego zapytania GET:

```
https://polishwordfamilies.netlify.app/.netlify/functions/api/wordfamilies/gra
http://localhost:9000/.netlify/functions/api/wordfamilies/gra
```

[ENG] The answer is:\
[PL]  Odpowiedź to:

```json
{
    "gra": [
        {
            "prefix": "gra",
            "suffices": [
                "ć",
                "",
                "cie",
                "j",
                "ją",
                "jąc",
                "jąca",
                "jącą",
                "jące",
                "jącego",
                "jącej",
                "jącemu",
                "jący",
                "jących",
                "jącym",
                "jącymi",
                "jcie",
                "jcież",
                "jmy",
                "jmyż",
                "jże",
                "li",
                "liby",
                "libyście",
                "libyśmy",
                "liście",
                "liśmy",
                "ł",
                "ła",
                "łaby",
                "łabym",
                "łabyś",
                "łam",
                "łaś",
                "łby",
                "łbym",
                "łbyś",
                "łem",
                "łeś",
                "ło",
                "łoby",
                "ły",
                "łyby",
                "łybyście",
                "łybyśmy",
                "łyście",
                "łyśmy",
                "m",
                "my",
                "na",
                "ną",
                "ne",
                "nego",
                "nej",
                "nemu",
                "ni",
                "nia",
                "niach",
                "niami",
                "nie",
                "niem",
                "niom",
                "niu",
                "no",
                "ny",
                "nych",
                "nym",
                "nymi",
                "ń",
                "sz"
            ]
        },
        {
            "prefix": "g",
            "suffices": [
                "ra",
                "ier",
                "rach",
                "rami",
                "rą",
                "rę",
                "ro",
                "rom",
                "ry",
                "rze"
            ]
        }
    ]
} 
```

[ENG] The array for element "gra" contains two objects (two word families), because word "gra" is both noun and verb in Polish (verb "grać" in different form).\
[PL]  Tablica dla elementu "gra" zawiera dwa obiekty (dwie rodziny słów), ponieważ słowo "gra" to po polsku zarówno rzeczownik jak i czasownik, ale w innej formie (np. "chłopiec gra na gitarze").


[ENG] Each of these objects has "prefix" and "suffices" elements. First is common prefix for all words in this family and second is array of possible suffices.\
[PL]  Każdy z tych obiektów zawiera element "prefix" (przedrostek) i element "suffices" (przyrostki). Pierwszy to wspólny przedrostek dla wszystkich słów z danej rodziny, drugi to tablica możliwych zakończeń.


[ENG] For example for second family in above example all possible words are: \
[PL]  Na przykład dla drugiej rodziny w powyższym przykładzie wszystkie możliwe słowa to:

"gra", "gier", "grach", "grami", "grą","grę","gro","grom","gry","grze"


[ENG] It is also possible to separate words with comma in request url. Then the root dictionary in server's answer contains many elements. Words in request can also be in different forms.\
[PL]  Można również oddzielic słowa przecinkiem w zapytaniu. Wtedy korzeń odpowiedzi serwera zawiera kilka elementów. Słowa w zapytaniu mogą mieć różne formy.

```
http://localhost:3000/wordfamilies/lampie,kanapy
```

```json
{
    "lampie": [
        {
            "prefix": "lamp",
            "suffices": [
                "a",
                "",
                "ach",
                "ami",
                "ą",
                "ę",
                "ie",
                "o",
                "om",
                "y"
            ]
        }
    ],
    "kanapy": [
        {
            "prefix": "kanap",
            "suffices": [
                "a",
                "",
                "ach",
                "ami",
                "ą",
                "ę",
                "ie",
                "o",
                "om",
                "y"
            ]
        }
    ]
}
```

[ENG] You can also ask for people names, surnames and other proper names. However they will be lowercased in the answer.\
[PL]  Możesz pytać również o imiona, nazwiska i inne nazwy własne. Będą one jednak pisane małymi literami w odpowiedzi.

```
http://localhost:3000/wordfamilies/Adam,Nowak,Wenecja
```

```json
{
    "adam": [
        {
            "prefix": "adam",
            "suffices": [
                "",
                "a",
                "ach",
                "ami",
                "em",
                "ie",
                "om",
                "owi",
                "owie",
                "ów",
                "y"
            ]
        }
    ],
    "nowak": [
        {
            "prefix": "nowak",
            "suffices": [
                "",
                "a",
                "ach",
                "ami",
                "i",
                "iem",
                "om",
                "owi",
                "owie",
                "ów",
                "u"
            ]
        }
    ],
    "wenecja": [
        {
            "prefix": "wenecj",
            "suffices": [
                "a",
                "ą",
                "ę",
                "i",
                "o"
            ]
        }
    ]
}
```

[ENG] Polish letters of course can also be used (they might be encoded)\
[PL]  Polskie litery diakrytyczne oczywiście także mogą być użyte (można je zakodować)

```
http://localhost:3000/wordfamilies/ma%C5%82pa
```

```json
{
    "małpa": [
        {
            "prefix": "małp",
            "suffices": [
                "a",
                "",
                "ach",
                "ami",
                "ą",
                "ę",
                "ie",
                "o",
                "om",
                "y"
            ]
        }
    ]
}
```

[ENG] If given word doesn't exist in server's dictionary or it is the only word in the family, the answer contains one family object with prefix equal to the word and with empty suffices array.\
[PL]  Jesli dane słowo nie istnieje w słowniku serwera albo jest ono jedynym słowem w rodzinie, wtedy odpowiedź serwera zawiera jeden obiekt rodziny z przedrostkiem równym słowu oraz z pustą tablicą przyrostków.

```
http://localhost:3000/wordfamilies/ukelele
```

```json
{
    "ukulele": [
        {
            "prefix": "ukulele",
            "suffices": [
                ""
            ]
        }
    ]
}
```

