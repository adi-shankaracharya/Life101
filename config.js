var config = {
    "style": "mapbox://styles/adi-shank-101/cla4hiec0000414pelasji86q",
    "accessToken": "pk.eyJ1IjoiYWRpLXNoYW5rLTEwMSIsImEiOiJjbDlnMzE3OG0wZnI0NDJteDdubjZuN2dzIn0.ENwgy7R0cb5OrJ49PM-3Pw",
    "showMarkers": false,
    "theme": "light",
    "alignment": "right",
    "title": "Shankaracharya - A Life Sketch",
    "chapters": [
        {
            "id": "chapter_0",
            "title": "A JOURNEY",
            "alignment": "center",
            "description": "Shankaracharya is so cool.",
            "location": {
                "center": {
                    "lon": 75.81537,
                    "lat": 31.16460
                },
                "zoom": 2.66,
                "speed": 0.4,
                "pitch": 0,
                "bearing": 0
            }
        },
        {
            "id": "chapter_1",
            "title": "BIRTH",
            "alignment": "center",
            "description": "Shankaracharya was born in the town of <b>Kaladi</b>.",
            "location": {
                "center": {
                    "lon": 76.4468,
                    "lat": 10.1710
                },
                "zoom": 9,
                "speed": 0.4,
                "pitch": 50,
                "bearing": 0
            },
            "onChapterEnter": [
                {
                    "layer": "kaladi",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "kaladi",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "chapter_2",
            "title": "EDUCATION",
            "alignment": "center",
            "description": "His mother felt that Shankaracharya should be married and pursue his spiritual pursuits as a married man. This was the tradition that the Brahmins of the time had upheld so people don’t wander away from society but rather contribute to it by being a part of it. Shankaracharya had such a strong pull to dedicate his life solely for spiritual pursuits that he was able to convince his mom and began his journey. Promising her he’ll complete her last rites when the time comes.",
            "location": {
                "center": {
                    "lon": 76.148883,
                    "lat": 22.239961
                },
                "zoom": 9,
                "speed": 0.4,
                "pitch": 50,
                "bearing": 20
            },
            "onChapterEnter": [
                {
                    "layer": "omkareshwar",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "omkareshwar",
                    "opacity": 0
                }
            ]
        }
    ]
}