// ODYSSEY — campaign "redoubt". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "redoubt",
  "ready": true,
  "kind": "shift",
  "readingLevel": {
    "fk": 5.8,
    "cl": 7.1
  },
  "grade": "5",
  "kindLabel": "Watch",
  "form": "cinder",
  "title": "Volcano Watch",
  "subtitle": "Mount Redoubt, Cook Inlet, Alaska",
  "pitch": "Five watches at the observatory across the water from a volcano that is waking up. Seismographs, steam, ash, a mudflow, and the alert that has to go out before the mountain goes.",
  "scene": "assets/scene-redoubt.jpg",
  "progress": {
    "unit": "watches",
    "total": 5
  },
  "dayNoun": "Watch",
  "stageNoun": "Watch",
  "finalNoun": "Eruption",
  "stages": [
    "Watch 1",
    "Watch 2",
    "Watch 3",
    "Watch 4",
    "Watch 5"
  ],
  "reconNoun": "Observatory Log",
  "legs": {
    "recon": "Observatory log",
    "nav": "Instrument math",
    "orders": "Alert rules",
    "debrief": "Shift change"
  },
  "fact": "Alaska has more than 130 volcanoes, and about 50 of them have erupted since 1760. The observatory watches them all, day and night, mostly from a room full of screens.",
  "finale": {
    "prompt": "The eruption is over and the plume is drifting east. Your watch is done. Pick a color for your last page of the observatory log.",
    "options": [
      {
        "label": "Green",
        "color": "#4FD18B"
      },
      {
        "label": "Yellow",
        "color": "#FFD65C"
      },
      {
        "label": "Orange",
        "color": "#F28C28"
      },
      {
        "label": "Red",
        "color": "#FF6B6B"
      }
    ],
    "done": "Logged. Then go outside and look at the mountain with your own eyes. Screens are not the only instruments."
  },
  "patrols": [
    {
      "id": "redoubt-1",
      "title": "The Room Full of Screens",
      "recon": {
        "lesson": {
          "title": "Questions first, then the log",
          "points": [
            "Read the five questions before the log. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "When a report defines a word, the definition is in the same sentence or the next.",
            "The answer is always in the log. You never have to guess."
          ],
          "example": "Question: 'How many volcanoes are in Alaska?' Hunt for 'volcanoes'. The number is in that sentence."
        },
        "title": "Observatory Log: Listening to a Mountain",
        "passage": [
          "Mount Redoubt stands on the west side of Cook Inlet. Anchorage is across the water. The snow-covered cone rises more than ten thousand feet high. A glacier pours down its north face. It is one of more than a hundred and thirty volcanoes in Alaska. It is also one of the ones that matters most, because it sits under the flight path of every plane coming into Anchorage from Asia. The observatory that watches it is a room in the city full of screens, and the mountain itself is a hundred miles away.",
          "The watchers do not need to be on the volcano because the volcano talks. Buried on its flanks are seismometers, instruments that measure the shaking of the ground. Each one sends a radio signal to the watchers every second of every day. A quiet mountain draws a flat line on the screen. Magma is melted rock. It pushes up through the mountain from below. It breaks rock as it rises. Every break is a tiny earthquake, too small to feel, that the seismometers hear. When the flat line starts to jitter, the watchers start to pay attention.",
          "The watchers use four colors to tell pilots how dangerous the mountain is. Green means quiet, yellow means restless, orange means an eruption likely or under way with little ash, and red means an eruption sending ash high into the sky. Today Redoubt is green. The log on the desk says it has been green for months. The first job of the watch is to read every seismometer trace, note the time, and write 'all quiet'. The second job is to not believe it."
        ],
        "questions": [
          {
            "q": "Why does Mount Redoubt matter more than most Alaskan volcanoes?",
            "choices": [
              "Because it sits under the flight path of planes coming into Anchorage",
              "Because it is the tallest of the more than a hundred and thirty Alaskan volcanoes",
              "Because it stands closer to the observatory than any other Alaskan volcano",
              "Because a glacier pours down its north face"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence with 'flight path'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'seismometer'?",
            "choices": [
              "A radio the watchers talk on",
              "A camera on the summit that films the crater",
              "A screen in the room that shows the mountain",
              "An instrument that measures the shaking of the ground"
            ],
            "answer": 3,
            "hint": "The sentence that begins 'Buried on its flanks are seismometers'.",
            "skill": "Word meanings"
          },
          {
            "q": "Which color means an eruption is sending ash high into the sky?",
            "choices": [
              "Green",
              "Yellow",
              "Orange",
              "Red"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the second sentence, the last color listed.",
            "skill": "Finding details"
          },
          {
            "q": "Why does a rising body of magma cause tiny earthquakes?",
            "choices": [
              "Because it is hot enough to melt the snow on top",
              "Because the glacier on the north face melts and slides",
              "Because it breaks rock as it pushes up, and every break shakes the ground",
              "Because the radios on the flanks shake the instruments"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence with 'breaks rock as it rises'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How high the mountain is and how far it is from Anchorage",
              "What the four alert colors mean",
              "How the observatory hears the volcano from far away",
              "The planes flying in from Asia"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2 says 'the volcano talks', and the rest explains how the watchers listen.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Instrument math",
          "points": [
            "Leftovers: 45 ÷ 7 is 6 with 3 left over, because 6 × 7 = 42.",
            "Seismometers shared among stations: divide.",
            "Same bottom: 1/5 + 3/5 = 4/5.",
            "How much higher: subtract the smaller number from the bigger one. Line up the ones first."
          ],
          "example": "9 × 60: think 9 × 6 = 54, then add a zero, so 540."
        },
        "problems": [
          {
            "q": "The observatory shares 50 spare batteries equally among its 8 seismometer huts, as many as possible in each. How many batteries are left over?",
            "answer": "2",
            "hint": "Find the biggest number of 8s that fits in 50, then see what is left.",
            "skill": "Dividing"
          },
          {
            "q": "There are 12 seismometers on the mountain. Each sends 60 signals a minute. How many signals reach the observatory each minute?",
            "answer": "720",
            "hint": "12 × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "The observatory has 96 seismometers spread equally over 8 volcanoes. How many seismometers per volcano?",
            "answer": "12",
            "hint": "96 ÷ 8.",
            "skill": "Dividing"
          },
          {
            "q": "The watcher spent 2/6 of the watch reading traces and 3/6 writing the log. What fraction of the watch is that together? (write a fraction)",
            "answer": "5/6",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "Redoubt is 10,197 feet high. The observatory is at 105 feet. How many feet higher is the summit than the observatory?",
            "answer": "10092",
            "accept": [
              "10,092"
            ],
            "hint": "10,197 − 105.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Follow the whole line",
            "points": [
              "The central idea has to survive all three paragraphs. Try your answer against the first paragraph and the last one before you commit.",
              "The most tempting wrong answer is a real fact from the middle of the report. Ask whether it covers the beginning and the end too.",
              "Then four more moves today: prove a claim with one line, say what a paragraph is for, work out a phrase from its sentence, and join two paragraphs into one conclusion."
            ],
            "example": "Three paragraphs on a lighthouse: who built it, how the lamp works, why it still runs. 'The lamp turns once every ten seconds' is a fact from the middle. The idea is that the light has been kept going for a reason."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The mountain can be watched from a city a hundred miles away because it sends out signals of its own, and the watch never quite relaxes.",
                "The observatory uses four colors, from green for a quiet mountain to red for ash high in the sky, to tell pilots how dangerous Redoubt is today.",
                "Seismometers buried on the flanks send their signals in to the observatory by radio, second after second.",
                "Watchers have to camp on the mountain itself to read the instruments, since a seismometer buried on the flank cannot send anything a hundred miles."
              ],
              "answer": 0,
              "hint": "Paragraph one puts the watchers far away, paragraph two explains how that works, paragraph three ends with a warning against relaxing. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "The watchers do not need to be on the volcano because the volcano talks."
            },
            {
              "q": "Claim: an earthquake far too small to feel can still tell the watchers something important. Which sentence from the report best supports that claim?",
              "choices": [
                "A quiet mountain draws a flat line on the screen.",
                "The watchers do not need to be on the volcano because the volcano talks.",
                "When the flat line starts to jitter, the watchers start to pay attention.",
                "Every break is a tiny earthquake, too small to feel, that the seismometers hear."
              ],
              "answer": 3,
              "hint": "The claim has two halves: too small to feel, and still meaningful. Only one sentence carries both halves.",
              "skill": "Finding details",
              "evidence": "Every break is a tiny earthquake, too small to feel, that the seismometers hear."
            },
            {
              "q": "What job does the very last sentence of the report do?",
              "choices": [
                "It explains what the color green means on the alert scale, and how it differs from the yellow above it.",
                "It tells the reader how the buried seismometers send their signals in to the observatory by radio, every second of every day.",
                "It lists the duties of the observatory in order of importance.",
                "It turns a calm reading into a warning: the watch is not over just because the screens are quiet."
              ],
              "answer": 3,
              "hint": "Read the last two sentences together. The second one turns the first one around. Ask why a writer would choose to end there.",
              "skill": "Author's purpose and structure",
              "evidence": "The second job is to not believe it."
            },
            {
              "q": "The report says 'the volcano talks'. What does that mean as it is used here?",
              "choices": [
                "The watchers can hear the mountain rumbling from the city.",
                "The mountain makes a warning sound before every eruption.",
                "The mountain gives off signals that instruments can pick up and read.",
                "The seismometers make a sound in the observatory room."
              ],
              "answer": 2,
              "hint": "Read the sentence that comes straight after the phrase. It explains what the talking actually is.",
              "skill": "Word meanings",
              "evidence": "Buried on its flanks are seismometers, instruments that measure the shaking of the ground."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the watchers do not relax when the color is green. Why not?",
              "choices": [
                "The color green has been wrong more often than right, so the log on the desk counts as a guess rather than a record.",
                "The seismometers cannot be trusted in very cold weather.",
                "Planes full of people cross this mountain every day, so missing the first change would cost far too much.",
                "The watchers are required to change the color every month."
              ],
              "answer": 2,
              "hint": "Paragraph one tells you who is above the mountain. Paragraph three gives the watch a second job. Ask why that second job exists.",
              "skill": "Reading between the lines",
              "evidence": "one of the ones that matters most, because it sits under the flight path of every plane coming into Anchorage from Asia"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 3 × 7 means 3 groups of 7.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "3 × 7: 7 + 7 + 7 = 21."
          },
          "problems": [
            {
              "q": "The watcher lays the seismometers out in 6 rows of 8. How many seismometers is that?",
              "answer": "48",
              "hint": "6 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "72 seismometers are set out in 9 equal rows. How many seismometers are in each row?",
              "answer": "8",
              "hint": "72 split into 9 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 302 tremors, then 58 more are added and 76 are crossed off as false alarms. What does the log show now?",
              "answer": "284",
              "hint": "Add 302 and 58 first, then take 76 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 2/6 + 2/6 (write a fraction)",
              "answer": "4/6",
              "hint": "Same bottom. 2 + 2 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 9 feet wide and 8 feet long. How many feet is it all the way around the edge?",
              "answer": "34",
              "hint": "Two sides of 9 and two sides of 8: 9 + 9 + 8 + 8.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Multiplying a decimal by a whole number: multiply as if there were no point, then put the point back. 6 × 1.15: 6 × 115 = 690, so 6.90, which is 6.9.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × (13 − 6) + 5: parentheses first, 13 − 6 = 7; then 4 × 7 = 28; then 28 + 5 = 33."
          },
          "problems": [
            {
              "q": "Each reading takes 2.45 minutes on the instruments. How many minutes for 35 readings?",
              "answer": "85.75",
              "hint": "Split it: 35 × 2 plus 35 × 0.45.",
              "skill": "Decimals"
            },
            {
              "q": "10% of the tremors counted is 16. How many were counted in all?",
              "answer": "160",
              "hint": "16 is 10 hundredths of the whole: 16 ÷ 10 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher counts 16 seismometers and 24 tremors. In its simplest form, what is the ratio of seismometers to tremors? (write it like 2:3)",
              "answer": "2:3",
              "accept": [
                "2 to 3"
              ],
              "hint": "Divide both by 8.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher works out (3 + 2) × 11. What is it?",
              "answer": "55",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "It was −12 degrees at midnight and rose 10 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "-2",
              "accept": [
                "−2"
              ],
              "hint": "Start at −12 and count 10 steps up.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: divide the total by the size of one. 9 ÷ 0.75 = 12, because 0.75 goes into 3 four times.",
              "Percent change backward: after a 25% drop, what is left is 75% of the start. If 75% is 30, the start is 30 ÷ 0.75 = 40.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the last step first. If x had a number added and then got multiplied, divide first, then take the number off."
            ],
            "example": "(x + 4) × 6 = 54, so x + 4 = 9, so x = 5."
          },
          "problems": [
            {
              "q": "The watcher has 10 minutes and each reading takes 1.25 minutes. How many readings is that enough for?",
              "answer": "8",
              "hint": "10 ÷ 1.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of tremors rose by 20% to 72. What was it before?",
              "answer": "60",
              "hint": "72 is 120% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "It was 13 degrees, then it fell 28 degrees. What does the thermometer read?",
              "answer": "-15",
              "accept": [
                "−15"
              ],
              "hint": "Fall 13 to reach 0, then keep falling: the rest of the 28 degrees takes it below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 11) × 8 = 168",
              "answer": "10",
              "hint": "Divide both sides by 8 first, then take 11 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 5. The seismometer on the model is 7 inches. How many inches is the real one?",
              "answer": "35",
              "hint": "Every inch on the model is 5 inches for real.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Rule y = 5x + 3. When x = 9, y = 5 × 9 + 3 = 48."
          },
          "problems": [
            {
              "q": "The count of tremors follows the rule y = 7x + 8, where x is the hour. What is y when x = 8?",
              "answer": "64",
              "hint": "Put 8 in for x: 7 × 8 + 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 6² + 4²?",
              "answer": "52",
              "hint": "6 × 6 = 36 and 4 × 4 = 16. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope reaches the top of an 8-foot pole. How far is the foot of the rope from the base, in feet?",
              "answer": "15",
              "hint": "b² = c² − a² = 289 − 64 = 225. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 10x + 7 − 4x = 19",
              "answer": "2",
              "hint": "Collect the x's first: 6x + 7 = 19.",
              "skill": "Equations"
            },
            {
              "q": "What is 6 × 10^5 ÷ 10^4?",
              "answer": "60",
              "hint": "Dividing subtracts the powers: 10^5 ÷ 10^4 = 10^1. So 6 × 10.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Read all of it first",
          "points": [
            "Read every step before doing step 1.",
            "The last step often changes everything."
          ],
          "example": "If step 5 changes the color, the number you worked out was the point, not the color."
        },
        "skill": "Following directions",
        "steps": [
          "The observatory uses 4 alert colors: green, yellow, orange and red.",
          "Make your first number: multiply those 4 colors by the 100 miles between the observatory and the mountain.",
          "Make your second number: Alaska has more than 130 volcanoes, so take 130 and subtract the same 100 miles.",
          "The log on the desk is a log of colors, not of volcanoes. Use your number from step 2, not the one from step 3.",
          "Type the number the log keeps."
        ],
        "prompt": "Your answer:",
        "answer": "400",
        "hint": "You finish with two numbers on your paper. Step 4 says what the log is counting, so read it before you choose."
      }
    },
    {
      "id": "redoubt-2",
      "title": "The Line Starts to Jitter",
      "recon": {
        "lesson": {
          "title": "What changed",
          "points": [
            "A log that reports a change will say what it was before and what it is now. Find both.",
            "'Why' questions about a change: look for 'because' or 'which means'.",
            "Numbers that go up or down are details a question will want."
          ],
          "example": "'Last spring the pond had ten frogs. This spring it has thirty.' Before: ten. Now: thirty. That change is the detail."
        },
        "title": "Observatory Log: Forty an Hour",
        "passage": [
          "At three in the morning the flat lines on the Redoubt screens began to jitter. By breakfast the seismometers were recording about forty tiny earthquakes an hour, up from two or three a day the week before. Every one of them was coming from a spot two miles below the summit. Nobody on the mountain could have felt them. To the watchers, forty an hour from one spot means one thing: something is moving under the volcano, and it is moving up.",
          "The observatory sent a plane. From the air the crew saw a new hole melted in the summit glacier, a hundred feet across, with steam rising out of it. They also smelled hydrogen sulfide. That is the rotten-egg gas. Magma gives it off as it nears the surface. A gas sensor flown through the plume measured the sulfur dioxide. The number was ten times what it had been a month before. Steam, gas and earthquakes together are the volcano's three warnings, and Redoubt was giving all three.",
          "The alert color went from green to yellow before lunch. Yellow does not mean an eruption is coming; it means the mountain is restless. It also means the watchers are watching harder. The observatory doubled the watch. That way, two people read the screens through the night instead of one. It called the airlines, the oil terminal on the coast below the mountain, and the villages across the inlet to say: not yet, but get ready. The log for the day ends with a single line. Forty an hour and rising."
        ],
        "questions": [
          {
            "q": "About how many small earthquakes an hour were the seismometers recording by breakfast?",
            "choices": [
              "Two or three a day",
              "About forty",
              "Ten",
              "A dozen"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What are the volcano's three warnings, according to the log?",
            "choices": [
              "Steam, gas and earthquakes",
              "Ash, steam and sulfur",
              "Planes, radios and screens at the observatory",
              "Lava, smoke and fire coming out of the crater"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the last sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is 'hydrogen sulfide'?",
            "choices": [
              "A kind of ice that forms in the crater in winter",
              "An instrument buried on the mountain",
              "A rotten-egg-smelling gas released by magma",
              "One of the four colors the observatory uses for alerts"
            ],
            "answer": 2,
            "hint": "The two sentences right after 'smelled hydrogen sulfide' say what it is.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the observatory double the watch?",
            "choices": [
              "Because a second watcher was needed to read the gas sensor numbers",
              "Because the mountain was restless and needed watching harder through the night",
              "Because the eruption had already started and ash was going into the sky over the inlet",
              "Because the airlines asked for a second opinion"
            ],
            "answer": 1,
            "hint": "Paragraph 3, the sentence with 'two people read the screens'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the crew flying over the summit smelled sulfur coming out of the ice",
              "What the yellow alert means and what the observatory did about it",
              "The flight the observatory sent over the mountain and what the crew saw",
              "How far below the summit of the mountain the little earthquakes started"
            ],
            "answer": 1,
            "hint": "Paragraph 3 begins with the color changing and then lists what the observatory did.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Counting earthquakes",
          "points": [
            "Rate times time: the count for one hour times the number of hours.",
            "Adding decimals: line up the points. 1.6 + 2.35 is 1.60 + 2.35 = 3.95.",
            "Subtract to find how many more.",
            "Two-step: find the number in a day, then in a week."
          ],
          "example": "25 an hour for 16 hours is 25 × 16: 25 × 10 = 250 and 25 × 6 = 150, so 400."
        },
        "problems": [
          {
            "q": "The seismometers record 40 earthquakes an hour. How many is that in 24 hours?",
            "answer": "960",
            "hint": "40 × 24: 40 × 20 = 800, 40 × 4 = 160.",
            "skill": "Multiplying"
          },
          {
            "q": "The sulfur sensor read 2.75 last month. Today it reads 3.5 more than that. What is today's reading? (write a decimal)",
            "answer": "6.25",
            "hint": "Line up the points: 2.75 + 3.50.",
            "skill": "Decimals"
          },
          {
            "q": "The observatory counted 960 earthquakes today and 3 yesterday. How many more today than yesterday?",
            "answer": "957",
            "hint": "960 − 3.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The steam hole in the glacier is 100 feet across. A square that size has an area of how many square feet?",
            "answer": "10000",
            "accept": [
              "10,000"
            ],
            "hint": "100 × 100.",
            "skill": "Area and perimeter"
          },
          {
            "q": "Two watchers each work 12 hours a night for 5 nights. How many hours of watching is that in all?",
            "answer": "120",
            "hint": "2 × 12 = 24 hours a night. Then 24 × 5.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Point at the line",
            "points": [
              "For a supporting-sentence question, break the claim into its parts first. A sentence that carries only half of it is not the answer.",
              "All four choices come out of the report, so being true is worthless here. Only proving counts.",
              "Read your pick immediately after the claim. If it needs a second sentence to work, it is not the best one."
            ],
            "example": "Claim: the machine was serviced recently. 'A dated sticker on the panel says last month' proves it. 'The machine is painted green' is true and does nothing."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "A gas sensor flown through the plume measured ten times the sulfur dioxide of a month before, and the crew smelled the rotten-egg gas.",
                "Three separate warnings arrived at once, and the observatory moved from watching the mountain to getting people ready.",
                "The alert color went from green to yellow before lunch, and two people read the screens instead of one.",
                "The earthquakes were strong enough to be felt in the villages nearby."
              ],
              "answer": 1,
              "hint": "Earthquakes, then steam and gas, then phone calls. Ask what the report is tracking from its first line to its last.",
              "skill": "Central idea and evidence",
              "evidence": "Steam, gas and earthquakes together are the volcano's three warnings, and Redoubt was giving all three."
            },
            {
              "q": "Claim: the shaking was coming from one place under the mountain rather than from all over it. Which sentence from the report best supports that claim?",
              "choices": [
                "Every one of them was coming from a spot two miles below the summit.",
                "From the air the crew saw a new hole melted in the summit glacier, a hundred feet across, with steam rising out of it.",
                "It called the airlines, the oil terminal on the coast below the mountain, and the villages across the inlet to say: not yet, but get ready.",
                "The alert color went from green to yellow before lunch."
              ],
              "answer": 0,
              "hint": "The claim is about a place, not a number and not a decision. Find the sentence that names one.",
              "skill": "Finding details",
              "evidence": "Every one of them was coming from a spot two miles below the summit."
            },
            {
              "q": "What job does the second paragraph do in this report?",
              "choices": [
                "It explains how a gas sensor is built and how it works.",
                "It describes what the summit glacier normally looks like when there is no hole melted in it and no steam rising anywhere on the mountain.",
                "It adds two more kinds of evidence to the earthquakes, so the decision in the last paragraph rests on three things and not one.",
                "It compares Redoubt with the other hundred and thirty volcanoes in Alaska, weighing how much ash each of them has sent up over the years."
              ],
              "answer": 2,
              "hint": "Count what the paragraph brings in that paragraph one did not have. Then read the paragraph's last sentence, which says the total out loud.",
              "skill": "Author's purpose and structure",
              "evidence": "Steam, gas and earthquakes together are the volcano's three warnings, and Redoubt was giving all three."
            },
            {
              "q": "The report says yellow means 'the mountain is restless'. What does restless mean as it is used here?",
              "choices": [
                "Certain to erupt within the hour, with the ash cloud already on its way up",
                "Stirring, and no longer quiet, though nothing has happened yet",
                "Completely still, and safe to approach",
                "Being read by two watchers instead of one"
              ],
              "answer": 1,
              "hint": "The same sentence first tells you what yellow does not mean. Use that half to cut the choices down.",
              "skill": "Word meanings",
              "evidence": "Yellow does not mean an eruption is coming; it means the mountain is restless"
            },
            {
              "q": "Paragraphs 1 and 3 together show what the observatory actually acts on. What is it?",
              "choices": [
                "The first damage reported by the villages across the inlet once the mountain has actually done something.",
                "A change in the pattern, while nothing has happened yet and nobody has felt a thing.",
                "A direct request from the airlines flying overhead, asking the observatory to raise the color before they change their routes.",
                "The color of the summit glacier seen from the air, which the crew checked against photographs taken a month earlier."
              ],
              "answer": 1,
              "hint": "Paragraph one tells you how small these earthquakes were. Paragraph three tells you who got a phone call because of them. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "Nobody on the mountain could have felt them."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 9 means 4 groups of 9.",
              "Sharing equally is dividing.",
              "Taking away from a round number: 400 − 126 is 399 − 126, then add 1 back.",
              "A fraction counts parts of a whole: 2 parts out of 3 is 2/3."
            ],
            "example": "4 × 9: 9 + 9 + 9 + 9 = 36."
          },
          "problems": [
            {
              "q": "The watcher logs 5 earthquakes every hour for 7 hours. How many earthquakes is that?",
              "answer": "35",
              "hint": "7 groups of 5, so 7 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "Half of the 70 earthquakes were tiny ones. How many earthquakes were tiny?",
              "answer": "35",
              "hint": "Half of 70.",
              "skill": "Dividing"
            },
            {
              "q": "The watcher must check 500 earthquakes and has checked 215. How many are left to check?",
              "answer": "285",
              "hint": "500 − 215.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 6 equal parts and the watcher has finished 5 of them. What fraction is done? (write a fraction)",
              "answer": "5/6",
              "hint": "5 parts out of 6.",
              "skill": "Fractions"
            },
            {
              "q": "The watcher counts 215 earthquakes, then 63 more. How many is that?",
              "answer": "278",
              "hint": "215 + 63.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Dividing by a fraction: multiply by its flip. 4 ÷ 2/5 = 4 × 5/2 = 20/2 = 10.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × 7 − 9 × 2: do both multiplications first, 28 and 18; then 28 − 18 = 10."
          },
          "problems": [
            {
              "q": "The watcher has 4 hours left on shift. Each sensor check takes 2/3 of an hour. How many checks fit in that time?",
              "answer": "6",
              "hint": "Dividing by 2/3 means multiplying by its flip, 3/2: 4 × 3/2.",
              "skill": "Fractions"
            },
            {
              "q": "Of 40 earthquakes, 10% are struck off the list. How many are left on it?",
              "answer": "36",
              "hint": "10% of 40 is 4. Take that off 40.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher shares 40 traces between two teams in the ratio 3 to 5. How many does the smaller share get?",
              "answer": "15",
              "hint": "3 + 5 = 8 parts. 40 ÷ 8 = 5 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher works out 3 × 6 − 5 × 3. What is it?",
              "answer": "3",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "The coldest reading was −7 degrees and the warmest was −6 degrees. How many degrees apart are they?",
              "answer": "1",
              "hint": "From −7 up to −6.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 miles in 4 hours is 18 ÷ 4 = 4.5 miles an hour.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the last step first. In 3(x + 7), divide by 3 before you take 7 off."
            ],
            "example": "3(x + 7) = 45, so x + 7 = 15, so x = 8."
          },
          "problems": [
            {
              "q": "20 readings took 15 minutes. At the same rate, how many minutes would 32 readings take?",
              "answer": "24",
              "hint": "One reading takes 15 ÷ 20 = 0.75. Then × 32.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The list had 120 earthquakes, then 10% more were added. How many earthquakes were added?",
              "answer": "12",
              "hint": "10% of 120: 10/100 × 120.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer falls 4 degrees every hour for 7 hours. What is the total change? (Write a fall as a negative number.)",
              "answer": "-28",
              "accept": [
                "−28"
              ],
              "hint": "7 hours of −4 each: 7 × (−4). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 8(x + 21) = 200",
              "answer": "4",
              "hint": "Divide both sides by 8 to get x + 21 = 25.",
              "skill": "Equations"
            },
            {
              "q": "A round frame has a radius of 10 inches. Using 3.14 for pi, what is its area in square inches?",
              "answer": "314",
              "hint": "Area = 3.14 × radius × radius: 3.14 × 10 × 10.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "A list goes 3, 10, 17, 24, and on. It starts at 3 and adds 7, so the 6th number is 3 + 5 × 7 = 38."
          },
          "problems": [
            {
              "q": "The count of earthquakes goes 20, 28, 36, 44, and on. What is the 9th number in the list?",
              "answer": "84",
              "hint": "It starts at 20 and adds 8 each step. The number you want is 8 steps on from 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 14² − 14?",
              "answer": "182",
              "hint": "14 × 14 = 196, then take 14 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 5 and 12 feet. How long is its longest side, in feet?",
              "answer": "13",
              "hint": "5² + 12² = 169. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x − 2x = 20",
              "answer": "10",
              "hint": "4 − 2 = 2, so 2x = 20.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 8 feet across and 3 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (The radius is half the distance across.)",
              "answer": "150.72",
              "hint": "The radius is 8 ÷ 2 = 4. Volume = 3.14 × radius × radius × depth: 3.14 × 4 × 4 × 3.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Instead",
          "points": [
            "'Instead' throws away what came before it.",
            "Read to the end before you calculate."
          ],
          "example": "'Add 5. Instead, subtract 5' means subtract."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of earthquakes an hour from the log: 40.",
          "Multiply by the number of warnings the volcano gives: 3.",
          "Add the width of the steam hole in feet: 100.",
          "Instead of adding in step 3, go back to your answer from step 2 and subtract 100.",
          "Type the result."
        ],
        "prompt": "Your answer:",
        "answer": "20",
        "hint": "Multiply the 40 earthquakes by the 3 warnings first. Then read step 4 — it swaps step 3's add for a subtract."
      }
    },
    {
      "id": "redoubt-3",
      "title": "Ash",
      "recon": {
        "lesson": {
          "title": "A story from the past",
          "points": [
            "When the log tells about something that happened years ago, the questions want its facts: when, how high, what happened.",
            "'Why' about a danger: the log explains the mechanism. Find the sentence with 'because' or 'so'.",
            "Compare words: 'not soft like wood ash' means the report is telling you what it is NOT."
          ],
          "example": "'In 1989 a jet flew into the ash cloud.' When? 1989. What happened next is the story."
        },
        "title": "Observatory Log: What Ash Really Is",
        "passage": [
          "Volcanic ash is not soft. The ash from a fireplace is the burnt remains of wood, but the ash a volcano throws out is rock, blasted into pieces so small they float, each one with edges like broken glass. It is heavy, it scratches anything it lands on, and when it gets wet it sets like cement. A few inches on a roof can bring the roof down. A cloud of it in the sky looks like a thunderhead and does not show up on an airplane's weather radar, because radar sees water, and ash is dry.",
          "That is why the observatory matters. In December 1989 a jumbo jet was coming into Anchorage. It flew into a cloud of Redoubt's ash at twenty-five thousand feet. The ash melted inside the hot engines, coated the parts, and all four engines stopped. The plane fell more than two miles with two hundred and forty-five people on board before the pilots managed to restart the engines and land safely. Nobody was hurt. The repairs cost eighty million dollars. After that, no pilot in the world wanted to guess where the ash was.",
          "Today the watch is about the wind. If Redoubt erupts, the ash will go where the wind takes it. The observatory's job is to say where that is before it happens. The forecast looks at the wind at thirty thousand feet. Up there, it blows east across the inlet toward Anchorage at forty miles an hour. Every airline has the number. The alert color goes to orange at noon."
        ],
        "questions": [
          {
            "q": "What is volcanic ash made of?",
            "choices": [
              "Burnt wood",
              "Dust blown up off the ground by the eruption",
              "Melted glass",
              "Rock blasted into tiny pieces"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How many people were on the jet in 1989?",
            "choices": [
              "About a hundred and forty-five",
              "Just over four hundred, a full jumbo jet",
              "Two hundred and forty-five",
              "Fewer than a hundred, mostly crew"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence with 'fell more than two miles'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does 'sets like cement' mean?",
            "choices": [
              "It slides off a roof once the rain starts",
              "It becomes hard when it dries",
              "It turns gray",
              "It smells like wet stone"
            ],
            "answer": 1,
            "hint": "Cement is poured wet and becomes hard. The sentence is about wet ash.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does an ash cloud not show up on an airplane's weather radar?",
            "choices": [
              "Because it flies above the radar",
              "Because the pieces of ash are far too small to see",
              "Because the cloud moves too fast",
              "Because radar sees water and ash is dry"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 1, after 'because'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How a few inches of wet ash can bring a roof down",
              "The 1989 flight that showed why volcano warnings matter",
              "The wind forecast every airline has",
              "How a jet engine is built and how it is repaired"
            ],
            "answer": 1,
            "hint": "Paragraph 2 begins 'That is why the observatory matters' and tells one story.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Ash cloud math",
          "points": [
            "Miles per hour times hours: distance the cloud travels.",
            "Distance ÷ speed = hours until it arrives.",
            "Volume of a box: length × width × height. 5 × 4 × 2 = 40 cubic feet.",
            "Fraction of the engines: divide by the bottom, multiply by the top."
          ],
          "example": "A cloud moving 25 miles an hour reaches a town 150 miles away in 150 ÷ 25 = 6 hours."
        },
        "problems": [
          {
            "q": "The wind blows the ash east at 40 miles an hour. How far does the ash travel in 3 hours?",
            "answer": "120",
            "hint": "40 × 3.",
            "skill": "Multiplying"
          },
          {
            "q": "A town is 160 miles downwind of the volcano. The ash travels 40 miles an hour. How many hours until the ash reaches the town?",
            "answer": "4",
            "hint": "160 ÷ 40.",
            "skill": "Dividing"
          },
          {
            "q": "The airport fills a bin with ash swept off the runway. The bin is 6 feet long, 4 feet wide and 3 feet deep. How many cubic feet of ash fill it?",
            "answer": "72",
            "hint": "Length × width × height: 6 × 4 first, then times 3.",
            "skill": "Volume"
          },
          {
            "q": "The jet had 4 engines and all 4 stopped. The pilots restarted 3/4 of them first. How many engines was that?",
            "answer": "3",
            "hint": "4 ÷ 4 = 1, then 1 × 3.",
            "skill": "Fractions"
          },
          {
            "q": "The 1989 repairs cost 80 million dollars. Write that number in full, in dollars.",
            "answer": "80000000",
            "accept": [
              "80,000,000",
              "$80,000,000",
              "$80000000"
            ],
            "hint": "A million has six zeros. 80 followed by six zeros.",
            "skill": "Money and decimals"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The paragraph that sets up the next one",
            "points": [
              "Paragraphs work in pairs more often than you would think. One explains a thing; the next shows what that thing did.",
              "When a paragraph opens with 'that is why' or 'so', it is pointing back. Read what it is pointing at before you answer.",
              "If a choice describes what the paragraph says instead of naming its job, cross it off. Describing is not a purpose."
            ],
            "example": "A paragraph on how thin the ice gets in March, followed by a paragraph about a truck that went through it. The second one is not a truck story. It is the proof of the first one."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "In 1989 a jumbo jet lost all four engines inside an ash cloud and fell more than two miles before the pilots restarted them.",
                "Volcanic ash is rock blasted into pieces so small that it floats in the air.",
                "An ash cloud shows up clearly on an airplane's weather radar.",
                "Ash is dangerous in a way that is easy to underestimate, which is why knowing where it will go matters so much."
              ],
              "answer": 3,
              "hint": "What ash is, what it once did, and what the watch is doing about it today. One choice covers all three; one covers only the middle.",
              "skill": "Central idea and evidence",
              "evidence": "A cloud of it in the sky looks like a thunderhead and does not show up on an airplane's weather radar, because radar sees water, and ash is dry."
            },
            {
              "q": "Claim: an ash cloud can take a pilot by surprise even when the instruments are being watched. Which sentence from the report best supports that claim?",
              "choices": [
                "The ash from a fireplace is the burnt remains of wood, but the ash a volcano throws out is rock, blasted into pieces so small they float, each one with edges like broken glass.",
                "The plane fell more than two miles with two hundred and forty-five people on board before the pilots managed to restart the engines and land safely.",
                "A cloud of it in the sky looks like a thunderhead and does not show up on an airplane's weather radar, because radar sees water, and ash is dry.",
                "The ash melted inside the hot engines, coated the parts, and all four engines stopped."
              ],
              "answer": 2,
              "hint": "Surprise means the warning was not there. Find the sentence about an instrument failing to show something.",
              "skill": "Finding details",
              "evidence": "A cloud of it in the sky looks like a thunderhead and does not show up on an airplane's weather radar, because radar sees water, and ash is dry."
            },
            {
              "q": "Why did the author put the story of the 1989 flight straight after the paragraph explaining what ash is?",
              "choices": [
                "To explain how a jet engine works.",
                "To show what those properties did once in the real world, so the danger stops being a description and becomes a fact.",
                "To compare the eruption of 1989 with the one happening now, setting the ash cloud that stopped the engines against today's forecast.",
                "To list the airports that were closed that winter."
              ],
              "answer": 1,
              "hint": "The paragraph opens with a sentence that points backward. Read it, and work out what the word 'that' is standing for.",
              "skill": "Author's purpose and structure",
              "evidence": "That is why the observatory matters."
            },
            {
              "q": "The report says that when ash gets wet it 'sets like cement'. What does that comparison tell you?",
              "choices": [
                "It is gray and dusty, the way a building site is.",
                "It is one of the materials used to make the concrete that roads and runways are poured from.",
                "It dissolves in the rain and washes harmlessly away.",
                "It goes hard and stays where it lands, so it cannot simply be brushed off."
              ],
              "answer": 3,
              "hint": "Ask what cement actually does once it is wet, then keep only the part of that picture that could also happen to ash on a roof.",
              "skill": "Word meanings",
              "evidence": "It is heavy, it scratches anything it lands on, and when it gets wet it sets like cement."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the airlines need the observatory's wind forecast. Why do they?",
              "choices": [
                "The wind at thirty thousand feet always blows toward Anchorage, whatever the forecast says.",
                "A pilot's own radar cannot see an ash cloud, so the only usable warning is one that arrives before the flight does.",
                "Airlines are required by law to carry a printed copy of the forecast on board every flight into Anchorage.",
                "Ash clouds drift too slowly to be a problem for a fast jet."
              ],
              "answer": 1,
              "hint": "One paragraph tells you what a pilot cannot see. Another tells you what the observatory sends out. The link between those two is the answer.",
              "skill": "Reading between the lines",
              "evidence": "does not show up on an airplane's weather radar, because radar sees water, and ash is dry"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 5 × 9 means 5 groups of 9.",
              "Sharing equally is dividing.",
              "All the way around a shape: add up every side. A square has four sides the same.",
              "Fractions with the same bottom: the bigger top is the bigger fraction. 4/5 is more than 2/5."
            ],
            "example": "5 × 9: 9 + 9 + 9 + 9 + 9 = 45."
          },
          "problems": [
            {
              "q": "The watcher counts 4 engines on each of 6 jets. How many engines is that?",
              "answer": "24",
              "hint": "6 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "Each jet has 4 engines. The watcher counts 16 engines. How many jets is that?",
              "answer": "4",
              "hint": "How many 4s fit into 16?",
              "skill": "Dividing"
            },
            {
              "q": "The ash cloud stretched 220 miles in the morning and 390 miles in the evening. How many more miles in the evening?",
              "answer": "170",
              "hint": "390 − 220.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 7/8 or 5/8? (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 2 feet on each side. How many feet is it all the way around?",
              "answer": "8",
              "hint": "Four sides of 2.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Dividing by a decimal: move the point in both numbers the same number of places until you divide by a whole number. 7.2 ÷ 0.8 is 72 ÷ 8 = 9.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(9 − 4) × (2 + 5): each set of parentheses first, 5 and 7; then 5 × 7 = 35."
          },
          "problems": [
            {
              "q": "The watcher has 18 minutes on the instruments. Each reading takes 1.2 minutes. How many readings is that enough for?",
              "answer": "15",
              "hint": "Move both points 1 place to the right: 180 ÷ 12.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 ash samples, 75 are set aside. Out of 60 ash samples, how many is that?",
              "answer": "45",
              "hint": "60 is 0.6 hundreds, so 0.6 × 75.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher divides 36 minutes of work in the ratio 1 to 3. How many minutes is the larger share?",
              "answer": "27",
              "hint": "4 parts in all, so one part is 9 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher works out (6 − 1) × (3 + 6). What is it?",
              "answer": "45",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three readings came in: −17, −13 and 4 degrees. Which is the coldest?",
              "answer": "-17",
              "accept": [
                "−17"
              ],
              "hint": "The further below zero, the colder.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: divide the total by the size of one. 15 ÷ 1.5 = 10, because 1.5 fits twice in every 3.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "4x + 11 = 55, so 4x = 44, so x = 11."
          },
          "problems": [
            {
              "q": "The job needs 18 minutes in all, at 2.25 minutes for each reading. One reading is already done. How many readings are left?",
              "answer": "7",
              "hint": "18 ÷ 2.25 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says the reported length of the ash cloud may change by no more than 10%. Starting from 200 miles, what is the longest length the rule allows, in miles?",
              "answer": "220",
              "hint": "10% of 200 is 20. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer fell 20 degrees from −9 degrees. What does it read?",
              "answer": "-29",
              "accept": [
                "−29"
              ],
              "hint": "Start at −9 and go 20 more degrees below zero: −9 − 20.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 3 − 3 = 5",
              "answer": "24",
              "hint": "Add 3 to both sides, then multiply by 3.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 8 feet. How many inches are needed for 48 feet?",
              "answer": "6",
              "hint": "48 ÷ 8.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "A line through (0, 1) and (2, 13) rises 12 over a run of 2, so its slope is 12 ÷ 2 = 6."
          },
          "problems": [
            {
              "q": "A line passes through (0, 24) and (4, 60). What is its slope?",
              "answer": "9",
              "hint": "Slope is the rise over the run: 36 ÷ 4.",
              "skill": "Linear relationships"
            },
            {
              "q": "The watcher has 8² sample jars and orders twice as many. How many jars is that?",
              "answer": "128",
              "hint": "8² is 64. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The watcher goes 9 feet east and then 12 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "15",
              "hint": "The two legs make a right angle: 9² + 12² = 225.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 7x + 17 and 5x + 35 come to the same number?",
              "answer": "9",
              "hint": "Set them equal, take 5x off both sides, then take 17 off.",
              "skill": "Equations"
            },
            {
              "q": "The watcher writes 7 × 10^4, then counts ten times as many. Written out in full, what is the new number?",
              "answer": "700000",
              "hint": "Ten times adds one to the power: 7 × 10^5.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Only",
          "points": [
            "'Only' means most of what you were given does not count.",
            "Count carefully, then calculate."
          ],
          "example": "'Count only the words with a double letter' means skip the rest."
        },
        "skill": "Following directions",
        "steps": [
          "Five words from the log: ASH, ENGINE, RADAR, CEMENT, ANCHORAGE.",
          "Count only the words with exactly six letters.",
          "Multiply that count by the 4 engines the jet lost.",
          "Add the last two digits of 1989, the year of the flight: 89.",
          "The plane fell more than 2 miles before the engines came back. Divide your total by 2.",
          "Type the answer as a decimal, with the point and the digit after it."
        ],
        "prompt": "Your answer:",
        "answer": "48.5",
        "hint": "ENGINE and CEMENT are the only words with exactly six letters. Step 6 decides how that last division gets written down."
      }
    },
    {
      "id": "redoubt-4",
      "title": "The Mudflow",
      "recon": {
        "lesson": {
          "title": "The word they give you",
          "points": [
            "A new word in the log is defined right where it appears. Read that sentence twice.",
            "When a log describes a chain of events, a 'why' question wants the link before the thing it asks about.",
            "Numbers with 'more than' or 'about' are still the numbers the log gives."
          ],
          "example": "'A baby goat, called a kid, can stand within minutes.' What is a kid here? A baby goat."
        },
        "title": "Observatory Log: Lahar",
        "passage": [
          "Redoubt erupted at ten minutes to five in the morning. The seismometers went from jitter to a roar, the summit camera showed a column of ash climbing into the dark, and by dawn the cloud was nine miles high and drifting east. The alert color went to red before the first watcher finished the phone call. Planes were held on the ground in Anchorage. In the villages across the inlet, people taped their windows and brought the dogs inside.",
          "The danger on the mountain itself was not the ash. It was the glacier. The eruption melted a huge amount of ice in a few minutes, and the water tore down the Drift River valley carrying mud, boulders and broken ice in a flow the color of wet concrete. A flow like that is called a lahar. A lahar moves faster than a person can run. This one ran twenty-five miles to the sea and spread across the valley floor several feet deep. At the mouth of the river it reached an oil terminal, where six million gallons of oil were usually kept in tanks behind a wall of earth.",
          "The wall held. It had been built after the last eruption for exactly this. The observatory had warned the terminal two days before, so the crews could pump most of the oil into a ship and leave. That is the whole point of the watch: not to stop the mountain, which nobody can do, but to give people time. The log entry for the morning is short. Eruption at 4:50. Lahar reached the coast by 7. Terminal evacuated. No one hurt."
        ],
        "questions": [
          {
            "q": "How high was the ash cloud by dawn?",
            "choices": [
              "Nine miles",
              "Twenty-five miles",
              "Nine feet",
              "Two miles"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'lahar'?",
            "choices": [
              "A deep crack that opens up in a glacier during an eruption",
              "A tank of oil behind a wall of earth",
              "A fast flow of mud, boulders and ice from a volcano",
              "A camera pointed at the summit"
            ],
            "answer": 2,
            "hint": "The sentence 'A flow like that is called a lahar'.",
            "skill": "Word meanings"
          },
          {
            "q": "How far did the lahar travel?",
            "choices": [
              "Twenty-five miles to the sea",
              "Nine miles",
              "Six miles",
              "One hundred miles"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence with 'ran twenty-five miles'.",
            "skill": "Finding details"
          },
          {
            "q": "Why was the oil terminal nearly empty when the lahar arrived?",
            "choices": [
              "Because the tanks at the terminal had already been emptied for repairs earlier that same winter",
              "Because the oil in the tanks had all been sold and shipped south before the mountain ever woke up",
              "Because the wall of earth around the tanks was too high for the mud and the broken ice to climb over",
              "Because the observatory warned the terminal two days early and the crews pumped the oil out"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the third sentence.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the wall of earth around the oil tanks was built after the last eruption",
              "That the warning gave people time, which is the point of the watch",
              "What the flow of mud and broken ice looked like as it came down the valley",
              "The phone calls the watchers made in the dark before the ash cloud rose"
            ],
            "answer": 1,
            "hint": "The sentence that begins 'That is the whole point of the watch'.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Lahar math",
          "points": [
            "Time between two clock readings: count the hours.",
            "Distance ÷ time = speed in miles an hour.",
            "Millions: 4 million is 4,000,000, a 4 with six zeros.",
            "Area of a flat stretch: length × width. The depth does not change the area."
          ],
          "example": "45 miles in 3 hours is 45 ÷ 3 = 15 miles an hour."
        },
        "problems": [
          {
            "q": "The eruption began at 4:50 and the lahar reached the coast at 6:50. How many hours did it take?",
            "answer": "2",
            "hint": "From 4:50 to 6:50.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The lahar traveled 25 miles in 2 hours. How many miles an hour is that? (write a decimal)",
            "answer": "12.5",
            "hint": "25 ÷ 2. Half of 24 is 12, and half of 1 is 0.5.",
            "skill": "Dividing"
          },
          {
            "q": "The terminal held 6 million gallons. Crews pumped out 5,250,000 gallons before the lahar came. How many gallons were left in the tanks?",
            "answer": "750000",
            "accept": [
              "750,000"
            ],
            "hint": "6,000,000 − 5,250,000.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The mud spread 4 feet deep across a stretch of valley floor 300 feet long and 50 feet wide. What is the area of that stretch in square feet?",
            "answer": "15000",
            "accept": [
              "15,000"
            ],
            "hint": "300 × 50.",
            "skill": "Area and perimeter"
          },
          {
            "q": "The ash cloud was 9 miles high. A mile is 5,280 feet. How many feet high was the cloud?",
            "answer": "47520",
            "accept": [
              "47,520"
            ],
            "hint": "5,280 × 9: 5,000 × 9 = 45,000, 280 × 9 = 2,520.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Pictures instead of definitions",
            "points": [
              "When a writer compares one thing to another, only part of the picture is meant to carry across. Work out which part.",
              "Ask what the comparison is doing for the sentence. It is almost always making something easier to imagine, not adding a fact.",
              "A choice that takes the picture literally is the classic wrong answer. Wet concrete is a color and a thickness, not a building material."
            ],
            "example": "'The corridor was a wind tunnel.' Nobody built a tunnel and nobody is testing airplanes. The part that carries over is that the wind came through hard and straight."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "The watch cannot stop an eruption, so its worth is measured in the time it buys people beforehand.",
                "A lahar moves faster than a person can run.",
                "The wall of earth around the oil tanks held when the flow reached the terminal.",
                "The ash was the most dangerous part of this eruption for the people on the mountain."
              ],
              "answer": 0,
              "hint": "The eruption, the flow, the wall and the warning. Ask what the last paragraph says all of it was for.",
              "skill": "Central idea and evidence",
              "evidence": "That is the whole point of the watch: not to stop the mountain, which nobody can do, but to give people time."
            },
            {
              "q": "Claim: the wall at the oil terminal was not a piece of luck. Which sentence from the report best supports that claim?",
              "choices": [
                "At the mouth of the river it reached an oil terminal, where six million gallons of oil were usually kept in tanks behind a wall of earth.",
                "The wall held.",
                "It had been built after the last eruption for exactly this.",
                "Terminal evacuated."
              ],
              "answer": 2,
              "hint": "That something worked is not proof that it was planned. Find the sentence that says why it was there in the first place.",
              "skill": "Finding details",
              "evidence": "It had been built after the last eruption for exactly this."
            },
            {
              "q": "How is the second paragraph organized?",
              "choices": [
                "It follows one cause down a chain: the eruption melted ice, the water became a flow, the flow reached the coast.",
                "It lists the villages the flow passed through in the order it passed them.",
                "It states a problem and then gives the observatory's solution to it.",
                "It explains why the oil terminal was built where it was built."
              ],
              "answer": 0,
              "hint": "Follow the paragraph from its first sentence to its last. Each step makes the next one happen. What shape is that?",
              "skill": "Author's purpose and structure",
              "evidence": "The eruption melted a huge amount of ice in a few minutes, and the water tore down the Drift River valley carrying mud, boulders and broken ice in a flow the color of wet concrete."
            },
            {
              "q": "The report describes the flow as being 'the color of wet concrete'. What is that description doing?",
              "choices": [
                "Telling you the flow was made of building materials washed out of the valley.",
                "Telling you the flow was moving slowly and stiffening as it went down the valley.",
                "Telling you the floor of the valley had been paved over long before the eruption.",
                "Telling you the flow was thick with mud and rock rather than clear water."
              ],
              "answer": 3,
              "hint": "The rest of the sentence lists what was actually in the flow. Match the picture of wet concrete against that list.",
              "skill": "Word meanings",
              "evidence": "the water tore down the Drift River valley carrying mud, boulders and broken ice in a flow the color of wet concrete"
            },
            {
              "q": "Paragraphs 2 and 3 together show why two days of warning mattered so much. Why did it?",
              "choices": [
                "The wall of earth would not have held without those two extra days, since the crews spent them building it higher around the tanks.",
                "Once the eruption began the flow reached the coast in about two hours, nowhere near long enough to empty an oil terminal.",
                "The ship carrying the oil away was not able to sail in the dark, so the crews needed the two days simply to wait for daylight.",
                "The eruption had been predicted two days beforehand to the very minute, which is how the terminal knew when to have the ship away."
              ],
              "answer": 1,
              "hint": "Take the two times written in the log and find the gap between them. Then look at what had to be finished inside that gap.",
              "skill": "Reading between the lines",
              "evidence": "Lahar reached the coast by 7."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 3 × 9 means 3 groups of 9.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "3 × 9: 9 + 9 + 9 = 27."
          },
          "problems": [
            {
              "q": "The watcher counts 8 valleys with 8 tanks in each. How many tanks is that?",
              "answer": "64",
              "hint": "8 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "64 tanks are shared equally among 8 valleys. How many tanks in each valley?",
              "answer": "8",
              "hint": "How many 8s make 64?",
              "skill": "Dividing"
            },
            {
              "q": "The watcher counted 132 sandbags, then found 99 more, then 59 more. How many sandbags in all?",
              "answer": "290",
              "hint": "132 + 99 first. Then add 59.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The watcher finished 6/8 of the day's work before the break and 1/8 after. What fraction is done? (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "There were 800 sandbags at the start. 645 have been used. How many are left?",
              "answer": "155",
              "hint": "800 − 645.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "How many small parts fit: 1/2 ÷ 1/6 = 3/6 ÷ 1/6 = 3.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "5 × (9 − 6) + 11: parentheses first, 9 − 6 = 3; then 5 × 3 = 15; then 15 + 11 = 26."
          },
          "problems": [
            {
              "q": "The ash sample jar is 2/3 full. Each test uses 1/6 of a jar. How many tests can the watcher run?",
              "answer": "4",
              "hint": "Write 2/3 with the same bottom as 1/6: 2/3 = 4/6. How many 1/6s is that?",
              "skill": "Fractions"
            },
            {
              "q": "Of 60 tanks, 20% are set aside. How many is that?",
              "answer": "12",
              "hint": "20% of 60: 20% is 20/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Miles of river and tanks are kept in the ratio 3 to 4. If there are 21 miles of river, how many tanks?",
              "answer": "28",
              "hint": "21 ÷ 3 = 7 groups. Each group has 4 tanks.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher works out 8 × (7 − 4) + 8. What is it?",
              "answer": "32",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn it was −14 degrees. By noon it was 5 degrees. By how many degrees did it rise?",
              "answer": "19",
              "hint": "From −14 up to 0 is 14, then 5 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 26 miles in 4 hours is 26 ÷ 4 = 6.5 miles an hour.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "3x + 14 = 47, so 3x = 33, so x = 11."
          },
          "problems": [
            {
              "q": "20 readings needed 45 minutes altogether. How many minutes is that for one reading?",
              "answer": "2.25",
              "hint": "A rate is the total shared out: 45 ÷ 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher counted 40 working sensors on the first pass. On the second pass the number had fallen by 50%. How many working sensors is that?",
              "answer": "20",
              "hint": "50% of 40 is 20. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 6 hours the thermometer fell 36 degrees in all, the same amount each hour. What was the change each hour? (Write a fall as a negative number.)",
              "answer": "-6",
              "accept": [
                "−6"
              ],
              "hint": "Share −36 into 6 equal parts: −36 ÷ 6. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 7x + 24 = 52",
              "answer": "4",
              "hint": "Take 24 off both sides first, then divide by 7.",
              "skill": "Equations"
            },
            {
              "q": "A round dial is 10 inches across. Using 3.14 for pi, how many inches is it around the edge?",
              "answer": "31.4",
              "hint": "Around the edge = 3.14 × the distance across. 3.14 × 10.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start at 9 and add 7 each hour. After 3 hours, y = 7 × 3 + 9 = 30."
          },
          "problems": [
            {
              "q": "The watcher has 20 sample jars filled and fills 3 more every hour. After 5 hours, how many jars are filled?",
              "answer": "35",
              "hint": "This is the straight-line rule y = mx + b: 3 × 5 + 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 16 square feet. How long is one side, in feet?",
              "answer": "4",
              "hint": "A square's area is side × side. What number times itself makes 16?",
              "skill": "Powers and roots"
            },
            {
              "q": "The watcher runs a rope from the top of a 6-foot pole to a point 8 feet away on the ground. How long is the rope, in feet?",
              "answer": "10",
              "hint": "Right triangle: a² + b² = c². 6² + 8² = 36 + 64 = 100. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x + 16 = 3x + 28",
              "answer": "6",
              "hint": "Take 3x off both sides to get 2x + 16 = 28, then take 16 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 5 feet and is 6 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (volume = pi × radius × radius × depth)",
              "answer": "471",
              "hint": "3.14 × 5 × 5 = 78.5, then × 6.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Time on the clock",
          "points": [
            "Orders about clock times want you to count hours and minutes carefully.",
            "Then do exactly what the last step says with the result."
          ],
          "example": "From 3:40 to 6:00 is 2 hours and 20 minutes, which is 140 minutes."
        },
        "skill": "Following directions",
        "steps": [
          "The eruption began at 4:50 and the lahar reached the coast at 7:00. Count the minutes between those two times.",
          "Divide those minutes by 10.",
          "Add the 25 miles the lahar ran down the Drift River valley.",
          "Ignore step 3. This entry counts tens of minutes, and miles are not minutes.",
          "Type the number."
        ],
        "prompt": "Your answer:",
        "answer": "13",
        "hint": "Count 4:50 up to 5:00 first, then the whole hours after it, all in minutes. Step 4 drops the miles back out again."
      }
    },
    {
      "id": "redoubt-5",
      "title": "Shift Change",
      "recon": {
        "lesson": {
          "title": "Putting a week together",
          "points": [
            "The last log looks back. A 'why' question may be answered by what happened just before, with no 'because'.",
            "Look for words like 'first', 'then', 'after', 'finally'.",
            "The main idea of a closing paragraph is usually what the writer wants you to remember."
          ],
          "example": "'First steam, then gas, then the earthquakes, then the eruption.' What came second? Gas."
        },
        "title": "Observatory Log: What the Mountain Taught Us",
        "passage": [
          "Redoubt erupted nineteen times over the next two weeks. Some of the eruptions were small puffs that barely reached the clouds. The largest sent ash twelve miles into the sky and dropped a thin dusting of it on Anchorage. That was enough to close the airport for a day and turn the snow gray. It also sent everyone to the hardware store for masks. Then the mountain began to build a dome, a plug of thick lava rising in the crater. After that the earthquakes faded, the gas fell off, and the color went back to yellow, then to green.",
          "Every eruption the observatory has ever watched has taught it something. The 1989 flight taught pilots to treat every ash cloud as solid. The lahars taught the terminal to build a wall and keep a ship ready. This one taught the watchers something about themselves. Forty earthquakes an hour on a quiet Tuesday is the moment to make the phone calls, not the moment to wait and see. Nobody was hurt in two weeks of eruptions. That sentence is the whole report.",
          "The last watch is the quiet one. The screens are drawing flat lines again. The summit camera shows a little steam drifting off the new dome in the afternoon sun. Somewhere under the mountain the magma is still there, cooling, and in ten years or twenty or fifty it will come back, and someone in this room will see the line start to jitter. The watcher writes the last entry, 'all quiet'. This time it is allowed to be true."
        ],
        "questions": [
          {
            "q": "How many times did Redoubt erupt over the two weeks?",
            "choices": [
              "Four",
              "About forty times",
              "Nineteen",
              "Fewer than ten"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What did the largest eruption drop on Anchorage?",
            "choices": [
              "A thin dusting of ash",
              "About a foot of ash on the streets",
              "No ash at all",
              "Boulders and chunks of the glacier"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence with 'twelve miles into the sky'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'dome'?",
            "choices": [
              "A building on the summit",
              "A cloud of ash",
              "A plug of thick lava rising in the crater",
              "The rounded top of the mountain"
            ],
            "answer": 2,
            "hint": "The sentence 'the mountain began to build a dome' explains it after the comma.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the alert color go back to green?",
            "choices": [
              "Because the airport reopened",
              "Because two weeks had passed",
              "Because the earthquakes faded and the gas fell off after the dome formed",
              "Because the ash stopped falling on Anchorage"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the last sentence.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The run on masks at the hardware store the day the ash fell on the city",
              "How the new dome plugged the crater",
              "What each eruption taught the observatory, and that nobody was hurt",
              "How high into the sky the ash climbed in the largest of the nineteen eruptions"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2 says 'Every eruption ... has taught it something.'",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Two weeks of numbers",
          "points": [
            "Eruptions over days: divide, and note what is left over.",
            "Different bottoms: make them the same first. 1/2 − 1/6 = 3/6 − 1/6 = 2/6.",
            "Quarter of an inch as a fraction: 1/4.",
            "Two-step: days in two weeks, then hours."
          ],
          "example": "11 apples for 8 kids, one each first: 8 are handed out and 11 − 8 = 3 are left over."
        },
        "problems": [
          {
            "q": "There were 19 eruptions in 14 days. Every day had at least one and no day had more than two. How many days had two?",
            "answer": "5",
            "hint": "19 − 14.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The ash fell 1/2 inch deep at the airport and 1/8 inch deep in town. How much deeper was it at the airport? (write a fraction of an inch)",
            "answer": "3/8",
            "hint": "Make the bottoms the same: 1/2 is 4/8. Then subtract the tops.",
            "skill": "Fractions"
          },
          {
            "q": "A quarter of an inch of ash fell on Monday and another quarter on Wednesday. How much ash is that together? (write a fraction of an inch)",
            "answer": "2/4",
            "accept": [
              "1/2",
              "0.5"
            ],
            "hint": "1/4 + 1/4. Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "Two watchers worked every one of the 14 days, 12 hours each per day. How many hours did they work in all?",
            "answer": "336",
            "hint": "2 × 14 = 28. Then 28 × 12.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The airport was closed for 1 day out of the 14. Masks cost $3 each and the hardware store sold 420 of them. How many dollars did the store take in for masks?",
            "answer": "1260",
            "accept": [
              "1,260",
              "$1,260",
              "$1260"
            ],
            "hint": "3 × 420.",
            "skill": "Money and decimals"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Hold two paragraphs open at once",
            "points": [
              "For the last question, keep a finger on two paragraphs at the same time. The answer lives in the space between them.",
              "Say the two facts, then say 'which means'. If what comes out matches a choice, you have it.",
              "A choice that could be true but rests on nothing in the report is out. You should be able to show two lines for your answer."
            ],
            "example": "Paragraph one: the tools are locked away each night. Paragraph three: a hammer was found on the roof in the morning. Which means somebody was up there after the lockup. Neither line says it alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The largest eruption sent ash twelve miles up and dropped a thin dusting of it on Anchorage, closing the airport for a day.",
                "The mountain built a dome of thick lava, and then the color went back to yellow and to green.",
                "Each eruption leaves a lesson behind, and the lesson from this one was about acting early instead of waiting.",
                "The mountain has gone quiet for good and will not erupt again, because the dome of thick lava has sealed the crater shut."
              ],
              "answer": 2,
              "hint": "Two weeks of eruptions, three lessons, one quiet screen. Ask what the middle paragraph says the whole thing was worth.",
              "skill": "Central idea and evidence",
              "evidence": "Forty earthquakes an hour on a quiet Tuesday is the moment to make the phone calls, not the moment to wait and see."
            },
            {
              "q": "Claim: this eruption changed the watchers' own behavior, not just other people's. Which sentence from the report best supports that claim?",
              "choices": [
                "This one taught the watchers something about themselves.",
                "The lahars taught the terminal to build a wall and keep a ship ready.",
                "Nobody was hurt in two weeks of eruptions.",
                "The 1989 flight taught pilots to treat every ash cloud as solid."
              ],
              "answer": 0,
              "hint": "Two of these sentences teach somebody else a lesson. The claim is about the watchers. Find the one that turns back on them.",
              "skill": "Finding details",
              "evidence": "This one taught the watchers something about themselves."
            },
            {
              "q": "How is the second paragraph built?",
              "choices": [
                "It compares this eruption with the one in 1989 in close detail, setting the two ash clouds side by side.",
                "It lists the four alert colors in the order they were used, from the first yellow to the last green.",
                "It gives three lessons in a row, each taught by a different event, and saves the one about the watchers themselves for last.",
                "It explains what causes a lava dome to form in a crater, and why the earthquakes fade once it does."
              ],
              "answer": 2,
              "hint": "Count the sentences that begin with a thing that taught somebody something. Then ask why the writer put that particular one at the end.",
              "skill": "Author's purpose and structure",
              "evidence": "Every eruption the observatory has ever watched has taught it something."
            },
            {
              "q": "The report calls the dome 'a plug of thick lava rising in the crater'. What does the word plug tell you about it?",
              "choices": [
                "It is a hole left open in the middle of the crater.",
                "It is made of ash rather than of lava.",
                "It is filling the opening that the eruptions had been coming out of.",
                "It gets pulled out once the eruption is over."
              ],
              "answer": 2,
              "hint": "Think about what a plug does in a sink. Keep only the part of that picture that could also be true of lava in a crater.",
              "skill": "Word meanings",
              "evidence": "Then the mountain began to build a dome, a plug of thick lava rising in the crater."
            },
            {
              "q": "Paragraphs 1 and 3 together explain what green really means at the end of this report. What does it mean?",
              "choices": [
                "The magma beneath the mountain has drained away completely, leaving nothing under the crater to come back later.",
                "The observatory has stopped watching this mountain.",
                "The mountain has gone quiet for now, with the same magma still sitting underneath it.",
                "The dome of thick lava has been cleared out of the crater, leaving nothing inside the mountain at all."
              ],
              "answer": 2,
              "hint": "Paragraph one tells you what quieted the mountain down. Paragraph three tells you what is still under it. Green has to mean both of those at the same time.",
              "skill": "Reading between the lines",
              "evidence": "Somewhere under the mountain the magma is still there, cooling, and in ten years or twenty or fifty it will come back, and someone in this room will see the line start to jitter."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 7 means 4 groups of 7.",
              "Sharing equally is dividing.",
              "Subtracting: line up the ones, tens and hundreds, then take away one column at a time.",
              "Fractions with the same bottom: a whole is 5/5, so what is left after 2/5 is 5/5 − 2/5 = 3/5."
            ],
            "example": "4 × 7: 7 + 7 + 7 + 7 = 28."
          },
          "problems": [
            {
              "q": "The watcher counted 6 earthquakes yesterday and three times as many today. How many earthquakes today?",
              "answer": "18",
              "hint": "Three times 6: 6 + 6 + 6.",
              "skill": "Multiplying"
            },
            {
              "q": "The watcher packs 30 jars of ash into boxes of 6. How many boxes is that?",
              "answer": "5",
              "hint": "How many 6s make 30?",
              "skill": "Dividing"
            },
            {
              "q": "The watcher has 246 jars of ash samples and sends 104 to the lab. How many jars are left?",
              "answer": "142",
              "hint": "246 − 104.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "2/8 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "6/8",
              "hint": "The whole job is 8/8. Take 2/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square mat is 6 squares on each side. How many squares is that?",
              "answer": "36",
              "hint": "6 rows of 6.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Subtracting decimals: line up the points and fill empty places with zeros. 20 − 6.35 is 20.00 − 6.35 = 13.65.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "6 + 4 × 5: multiply first, 4 × 5 = 20; then 6 + 20 = 26."
          },
          "problems": [
            {
              "q": "The plan allows 60 minutes. The watcher uses 5.45 minutes on the first reading and 9.85 on the second. How many minutes are left?",
              "answer": "44.7",
              "hint": "Add the two amounts used first, then take that from 60. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "120 of the 240 jars of ash are sent to the lab. What percent is that? (write just the number)",
              "answer": "50",
              "accept": [
                "50%"
              ],
              "hint": "120 out of 240, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 2 eruptions there are 3 inches of ash. There are 12 inches of ash. How many eruptions?",
              "answer": "8",
              "hint": "12 ÷ 3 = 4 groups. Each group has 2 eruptions.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher works out 8 + 7 × 7. What is it?",
              "answer": "57",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the thermometer read 10 degrees. By dark it had fallen to −12 degrees. By how many degrees did it fall?",
              "answer": "22",
              "hint": "From 10 down to 0 is 10, then 12 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 28 miles in 8 hours is 28 ÷ 8 = 3.5 miles an hour.",
              "Percent change: divide the change by the starting number. From 50 to 35 the change is 15, and 15 ÷ 50 = 0.3, so 30%.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "3x + 8 = 29, so 3x = 21, so x = 7."
          },
          "problems": [
            {
              "q": "One reading needs 2.25 minutes. How many minutes do 20 readings need?",
              "answer": "45",
              "hint": "20 × 2.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher counted 80 ash samples on the first pass and 64 on the second. By what percent did the count change? (write just the number)",
              "answer": "20",
              "accept": [
                "20%",
                "-20",
                "−20",
                "-20%",
                "−20%"
              ],
              "hint": "The change is 16. 16 out of 80, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer read −7 degrees at dawn and −17 degrees at dark. How many degrees did it fall?",
              "answer": "10",
              "hint": "From −7 down to −17.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 27 − 5x = 17",
              "answer": "2",
              "hint": "Move 5x to the right and 17 to the left: 5x = 10.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 5 feet. The instrument hut is really 45 feet long. How many inches is it on the plan?",
              "answer": "9",
              "hint": "45 ÷ 5.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start with 60 and use 7 each hour. After 3 hours, y = 60 − 7 × 3 = 39."
          },
          "problems": [
            {
              "q": "The watcher starts with 52 empty sample jars and fills 4 every hour. How many empty jars are left after 8 hours?",
              "answer": "20",
              "hint": "4 × 8 = 32 filled, taken off 52.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 5 small cubes along every edge. How many small cubes make it up?",
              "answer": "125",
              "hint": "5³ means 5 × 5 × 5.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 5-foot rope runs from the top of a pole to a point 4 feet away on the ground. How tall is the pole, in feet?",
              "answer": "3",
              "hint": "a² = c² − b² = 25 − 16 = 9. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x = x + 20",
              "answer": "5",
              "hint": "Take x off both sides: 4x = 20. Then divide by 4.",
              "skill": "Equations"
            },
            {
              "q": "The ash plume rises to 40,000 feet. Written as 4 × 10 to a power, what is the power?",
              "answer": "4",
              "hint": "Count the zeros after 4.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "The last step wins",
          "points": [
            "Read every step before you start.",
            "If the last step throws away the others, so be it. That was the test."
          ],
          "example": "Step 5 can say 'ignore everything and type X'. Then the answer is X."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of eruptions in the two weeks: 19.",
          "Add the 12 miles the biggest ash cloud reached.",
          "Subtract the 1 day the airport was closed.",
          "Divide by the 2 weeks the eruptions lasted.",
          "Type the result, unless the report says the color went back to green, in which case type GREEN instead."
        ],
        "prompt": "Your answer:",
        "answer": "GREEN",
        "accept": [
          "green",
          "Green",
          "green."
        ],
        "hint": "The four steps come out even. Then step 5 sends you back to the first paragraph for the color the mountain finished on."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
