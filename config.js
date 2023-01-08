var config = {
    "style": "mapbox://styles/adi-shank-101/cla4hiec0000414pelasji86q",
    "accessToken": "pk.eyJ1IjoiYWRpLXNoYW5rLTEwMSIsImEiOiJjbDlnMzE3OG0wZnI0NDJteDdubjZuN2dzIn0.ENwgy7R0cb5OrJ49PM-3Pw",
    "showMarkers": false,
    "theme": "light",
    "alignment": "right",
    "footer": "References:<br>1. Adi Shankaracharya - Hinduism's Greatest Thinker by Pavan K. Varma<br>2. The Mind of Shankaracharya by Y. Keshava Menon",
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
            "description": "As legend has it, Lord Shankar comes in the dream of Aryamba and asks her: would you prefer to give birth to a fool who would live long or be blessed with a <b>genius who would die young</b>? She chose the latter! And thus Shankaracharya was born to distinguished Brahmins: Shivaguru (father) and Aryamba (mother), in the town of <b>Kaladi</b>.",
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
            "onChapterExit": []
        },
        {
            "id": "chapter_2",
            "title": "CHILDHOOD",
            "alignment": "center",
            "description": "Being raised in a traditional Brahmin household, Shankaracharya started studying from a very young age. He showed inclination to living a spiritual lifestyle and exhibited his intellectual prowess from a young age as well.",
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
            "id": "chapter_3",
            "title": "COMPLETE DEDICATION",
            "alignment": "center",
            "description": "His mother felt that Shankaracharya should be married and pursue his spiritual path as a married man. This was the tradition that the Brahmins of the time had upheld so people don’t wander away from society but rather contribute to it by being a part of it. <br><br>Shankaracharya had such a strong pull to dedicate his life solely for spiritual pursuits that he was able to convince his mom and began his journey. Promising her he’ll complete her last rites when the time comes.",
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
                },
                {
                    "layer": "omkareshwar",
                    "opacity": 0
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
            "id": "chapter_4",
            "title": "A GURU",
            "alignment": "center",
            "description": "Shankaracharya travels to <b>Omkareshwar</b> to meet Govindapada who becomes his <i>guru</i> for a couple years.<br><br>The way they met: The guru asks Shankaracharya, <i>who are you?</i> Shankaracharya answers by saying <i>“I am neither this… nor that… I am the eternal power itself!”</i> and so he is accepted as a <i>shishya</i>.<br><br>It is here where Shankaracharya dives deep into <b><i>Advaita</i></b> philosophy. A school of thought whose central tenant is that everything is one and the eternal power itself.",
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
        },
        {
            "id": "chapter_5",
            "title": "RUMBLINGS OF ACTION",
            "alignment": "center",
            "description": "As Shankaracharya learned about Advaita philosophy, he also learned about <b>selfless service</b>. Living in a time where Buddhist thought (which had been degraded to inaction and pessimism at the time) was prevalent, Shankaracharya realized the need for advocating an action-oriented mindset.",
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
                },
                {
                    "layer": "varanasi",
                    "opacity": 0
                }
            ],
            "onChapterExit": [
                {
                    "layer": "omkareshwar",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "chapter_6",
            "title": "VARANASI",
            "alignment": "center",
            "description": "Known as the <b>spiritual and cultural capital of India</b>, Shankaracharya received permission from his <i>guru</i> to travel to Varanasi (by foot!). Here, he wrote some of his greatest works: commentaries on the <i>Gita</i>, <i>Upanishads</i>, and <i>Brahma Sutras</i>.",
            "location": {
                "center": {
                    "lon": 83.001412,
                    "lat": 25.321604
                },
                "zoom": 9,
                "speed": 0.4,
                "pitch": 50,
                "bearing": 20
            },
            "onChapterEnter": [
                {
                    "layer": "varanasi",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "varanasi",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "chapter_7",
            "title": "THE CHANDAAL",
            "alignment": "center",
            "description": "While in Varanasi, legend has it that Shankaracharya was once walking around in an alleyway and came across a <i>chandaal</i> (outcaste). The disciples of Shankaracharya asked the <i>chandaal</i> to move out of the way, and the <i>Chandaal</i> replied: <b>you guys are preachers of <i>“advaita”</i> philosophy and yet you differentiate me as a <i>chandaal</i> and him as a brahmin?</b> Shankaracharya is taken aback by his response and says anyone that realizes that is truly his <i>guru</i>! Goes on to compose the <i>Manisha Panchakam</i>, representative of this experience.",
            "location": {
                "center": {
                    "lon": 83.001412,
                    "lat": 25.321604
                },
                "zoom": 9,
                "speed": 0.4,
                "pitch": 50,
                "bearing": 20
            },
            "onChapterEnter": [
                {
                    "layer": "varanasi",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "varanasi",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "chapter_8",
            "title": "THE GREAT DEBATE",
            "alignment": "center",
            "description": "One of the most intriguing debates of the time was one that he had with <b>Mandan Mishra</b>. Mandan Mishra was also an extremely intellectual, spiritual person who had dedicated his life to taking his knowledge to people. He lived in a home with his wife. The debate was not out of competition or spite, but rather of two students of the world curious about <b>which way of life was better to reach a higher ideal:</b> the path of a <b><i>sanyaasi</i> (an ascetic)</b> or the path of a <b><i>grihasthi</i> (a householder)</b>. That’s why it was determined that whoever won the debate, would join the other in the others’ way of life towards spiritual pursuits.",
            "location": {
                "center": {
                    "lon": 80.365862,
                    "lat": 22.597829
                },
                "zoom": 9,
                "speed": 0.4,
                "pitch": 50,
                "bearing": 20
            },
            "onChapterEnter": [
                {
                    "layer": "mandan",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "mandan",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "chapter_9",
            "title": "TRANSFORMING LIVES",
            "alignment": "center",
            "description": "With his fame now spreading wider than ever, Shankaracharya continued his travels with the motive to spread these thoughts to the common man. In Maharashtra it is said he spent a lot of time with the sect of <i>Mallari Brahmins</i> who performed primitive animal worship. He also engaged in discussions with <i>Kapalika</i> sect who practiced human sacrifice. He explained what they were doing and their live slowly changed.",
            "location": {
                "center": {
                    "lon": 76.291236,
                    "lat": 19.626243
                },
                "zoom": 9,
                "speed": 0.4,
                "pitch": 50,
                "bearing": 20
            },
            "onChapterEnter": [
                {
                    "layer": "maharashtra",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "maharashtra",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "chapter_10",
            "title": "THE DUTIFUL SON",
            "alignment": "center",
            "description": "Either because he wanted to meet her or because he gets news that his mom is severely ill, Shankaracharya decides to go meet his mother. At one of the most emotional moments of his life, he finds her bedridden breathing her last breaths. Even though he was a <i>sanyaasi</i>, he performed his duties as a son and completed the ceremonies for her death.",
            "location": {
                "center": {
                    "lon": 76.4468,
                    "lat": 10.1710
                },
                "zoom": 9,
                "speed": 0.4,
                "pitch": 50,
                "bearing": 20
            },
            "onChapterEnter": [
                {
                    "layer": "kaladi",
                    "opacity": 1
                },
                {
                    "layer": "mathas",
                    "opacity": 0
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
            "id": "chapter_11",
            "title": "ESTABLISHMENTS OF MATHAS",
            "alignment": "center",
            "description": "Shankaracharya then returned to <b>Shringeri</b> and with his followers traveled across India establishing <i>mathas</i> along the way. The purpose of these <i>mathas</i> are/were three fold:<br>   1. To serve as thought proliferating centers<br>   2. To provide education for those interested in pursuing deeper studies of Vedic thoughts<br>   3. To provide social service to the people of the area",
            "location": {
                "center": {
                    "lon": 79.218408,
                    "lat": 22.464033
                },
                "zoom": 4,
                "speed": 0.4,
                "pitch": 0,
                "bearing": 0
            },
            "onChapterEnter": [
                {
                    "layer": "mathas",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "mathas",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "chapter_12",
            "title": "UNITING THE MASSES",
            "alignment": "center",
            "description": "As Shankaracharya was able to learn about the various ways of people throughout his travels, he realized that people were separated more than ever under the name of religion. In order to prevent this from happening more, he presented the concept of <b><i>panchaayatan puja</i></b>: he took 5 deities that were revered in all parts of India – <b><i>Ganesha, Shiva, Vishnu, Surya, and Durga</i></b> and said these are the deities we can all worship together in order to become better human beings.",
            "location": {
                "center": {
                    "lon": 79.218408,
                    "lat": 22.464033
                },
                "zoom": 4,
                "speed": 0.4,
                "pitch": 0,
                "bearing": 0
            },
            "onChapterEnter": [
                {
                    "layer": "mathas",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "mathas",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "chapter_13",
            "title": "THE GUARDIAN OF SANAATAN DHARMA",
            "alignment": "center",
            "description": "\"It must be remembered that Shankara, while uncompromisingly an advocate of the non-dual Vedantic doctrine, in which rituals, prayers, bhakti and temples were not of fundamental importance at the level of ultimate knowledge, simultaneously sanctioned these religious practices as preparatory steps within the rubric or practical knowledge. In this sense, he became the guardian not only of the Vedantic doctrine, but of Sanatan Dharma, Hinduism in its entirety, both in practice and philosophy.\"",
            "location": {
                "center": {
                    "lon": 79.218408,
                    "lat": 22.464033
                },
                "zoom": 4,
                "speed": 0.4,
                "pitch": 0,
                "bearing": 0
            },
            "onChapterEnter": [
                {
                    "layer": "mathas",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "mathas",
                    "opacity": 0
                }
            ]
        }
    ]
}