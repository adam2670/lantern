// ODYSSEY — campaign "canyon". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "canyon",
  "ready": true,
  "kind": "climb",
  "readingLevel": {
    "fk": 5.7,
    "cl": 5.9
  },
  "grade": "5",
  "kindLabel": "Expedition",
  "form": "bighorn",
  "title": "Canyon Descent",
  "subtitle": "A desert canyon, rim to river",
  "pitch": "Five ledges down from the rim of a canyon to the river a mile below, through layers of rock laid down over a billion years. Heat, water, a bighorn sheep who does not slip, and a trail that goes down through time.",
  "scene": "assets/scene-canyon.jpg",
  "waypoints": [
    [
      175,
      425
    ],
    [
      400,
      470
    ],
    [
      560,
      590
    ],
    [
      700,
      735
    ],
    [
      900,
      830
    ],
    [
      1120,
      870
    ]
  ],
  "progress": {
    "unit": "ft",
    "total": 4500
  },
  "dayNoun": "Descent",
  "stageNoun": "Ledge",
  "finalNoun": "The river",
  "stages": [
    "The Rim",
    "The Red Wall",
    "The Platform",
    "The Inner Gorge",
    "The river"
  ],
  "reconNoun": "Trail Log",
  "legs": {
    "recon": "Trail log",
    "nav": "Canyon math",
    "orders": "Trail orders",
    "debrief": "Shade"
  },
  "fact": "Walking from the rim of a big canyon to the river takes you down through rock layers that took more than a billion years to form. Every step down is about a hundred thousand years.",
  "finale": {
    "prompt": "The river, cold and green, a mile below the rim. Which color goes on the trail marker for the climb back out?",
    "options": [
      {
        "label": "Red rock",
        "color": "#C1440E"
      },
      {
        "label": "River green",
        "color": "#4FD18B"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      },
      {
        "label": "Sky blue",
        "color": "#4FD1FF"
      }
    ],
    "done": "Paint it. Then fill every bottle. The way out is the same mile, uphill, and the sun is already on the rim."
  },
  "patrols": [
    {
      "id": "canyon-1",
      "title": "The Rim",
      "recon": {
        "lesson": {
          "title": "Questions first, then the log",
          "points": [
            "Read the five questions before the log. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Depths and temperatures are details. Circle them.",
            "The answer is always in the log. You never have to guess."
          ],
          "example": "Question: 'How deep is the canyon?' Hunt for 'mile' or 'feet'."
        },
        "title": "Trail Log: A Mile Down",
        "passage": [
          "From the rim the canyon is a mile deep. The river at the bottom is a green thread you can see but not hear. The walls step down in bands of color, cream, red, gray and, at the bottom, a rock that is almost black. Each band was laid down at a different time: sand that was a beach, mud that was a sea floor, ash from volcanoes, pressed into stone and then cut through by the river. The top layer is about 270 million years old. The bottom is nearly two billion. Walking down is walking back in time.",
          "The canyon is a desert, and the desert is the danger. At the rim on a summer morning it is a pleasant seventy degrees. At the river by afternoon it is a hundred and ten, because air gets hotter the lower it goes and the black rock at the bottom holds the heat like a stove. Most rescues here are not falls. They are people who walked down in the cool morning, ran out of water in the heat, and could not climb out. The rule on the trail sign at the rim is written in three languages: a quart of water an hour, and start up before it gets hot.",
          "The hiker starts at five in the morning with four quarts of water, a hat and a twenty-pound pack. Then the hiker drops off the rim onto a trail cut into the top layer. The trail goes down in switchbacks, zigzags that make a steep slope walkable. The first ledge, a thousand feet down, has a shelter and a tap fed by a pipe from a spring. The log's first line is written there in the shade: rim to first ledge, 1,000 feet, ninety minutes, four quarts to four again, all well. The bighorn came down a cliff beside the trail and beat the hiker by an hour."
        ],
        "questions": [
          {
            "q": "About how old is the top layer of rock at the rim?",
            "choices": [
              "Two thousand years",
              "Nearly two billion years, like the bottom",
              "Ten thousand years",
              "About 270 million years"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the fifth sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What is the rule on the trail sign?",
            "choices": [
              "Carry a quart of water for the whole hike",
              "A quart of water an hour, and start up before it gets hot",
              "Start down before the sun is up and camp beside the river at the bottom",
              "A quart of water an hour, and climb out in the afternoon shade"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what are 'switchbacks'?",
            "choices": [
              "The steep steps cut into the rock where the trail drops fastest",
              "The bands of colored rock that step down the canyon wall",
              "The water taps that are fed by a pipe from a spring at each ledge",
              "Zigzags in a trail that make a steep slope walkable"
            ],
            "answer": 3,
            "hint": "The sentence 'in switchbacks, zigzags that make a steep slope walkable'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is it so much hotter at the river than at the rim?",
            "choices": [
              "Because the river is warm",
              "Because air gets hotter the lower it goes and the dark rock at the bottom holds the heat",
              "Because the sun is closer",
              "Because most of the rescues in this canyon are of people who ran out of water in the afternoon heat"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'like a stove'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The canyon's layers and how walking down is walking back in time",
              "The hiker's pack",
              "Why the desert heat is the real danger, and what the sign at the rim says",
              "The hiker's start at five in the morning and the walk to the first ledge"
            ],
            "answer": 0,
            "hint": "Paragraph 1 describes the bands of rock and their ages.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Rim math",
          "points": [
            "Feet in a mile: 5,280.",
            "Quarts an hour times hours: water needed.",
            "A fraction times a whole number: 6 × 2/3 is six 2/3s, which is 12/3, or 4.",
            "Same bottom: add the tops, so 1/6 + 4/6 = 5/6."
          ],
          "example": "A quart an hour for 4 hours is 4 quarts."
        },
        "problems": [
          {
            "q": "The canyon is about a mile deep. A mile is 5,280 feet. The first ledge is 1,000 feet down. How many feet of canyon are still below it?",
            "answer": "4280",
            "accept": [
              "4,280"
            ],
            "hint": "5,280 − 1,000.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The hiker eats 3/4 of a granola bar at each of 4 rest stops. How many granola bars is that?",
            "answer": "3",
            "hint": "Four 3/4s is 12/4. How many wholes is that?",
            "skill": "Fractions"
          },
          {
            "q": "The rule is a quart an hour. The descent to the river will take 6 hours. How many quarts does that need?",
            "answer": "6",
            "hint": "1 × 6.",
            "skill": "Multiplying"
          },
          {
            "q": "The first ledge took 90 minutes for 1,000 feet. How many feet per minute is that, rounded down?",
            "answer": "11",
            "hint": "1,000 ÷ 90 is 11 with some left over.",
            "skill": "Dividing"
          },
          {
            "q": "The hiker drank 1/4 of a bottle at the first switchback and 2/4 at the ledge. What fraction of the bottle is gone? (write a fraction)",
            "answer": "3/4",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Label, then choose",
            "points": [
              "Give each paragraph a four-word label before you read a single choice. The central idea is whatever all the labels are serving.",
              "The wrong answers are usually true. They cover one paragraph, or they say something so big the log never claimed it, or they quietly contradict a line in the text.",
              "Then four more moves: prove a claim with one line, name a paragraph's job, read a phrase off its own sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a train line: what the country is like, why the line was built, who rides it now. 'The tunnel is four miles long' is one paragraph. 'Trains are useful' is nowhere in the report."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "The top layer of rock in the canyon is about 270 million years old, and the rock at the very bottom of it is nearly two billion years old.",
                "Deserts are the most beautiful landscapes anywhere on Earth.",
                "Most rescues in the canyon are for people who have fallen.",
                "The canyon is a record of time and also a desert, and the walk down is planned around the heat as carefully as around the rock."
              ],
              "answer": 3,
              "hint": "Bands of rock with ages on them, a rule about water and time of day, and a start at five in the morning. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "The canyon is a desert, and the desert is the danger."
            },
            {
              "q": "Claim: the bottom of the canyon is hotter than the rim for two separate reasons. Which sentence from the log best supports that claim?",
              "choices": [
                "The log's first line is written there in the shade: rim to first ledge, 1,000 feet, ninety minutes, four quarts to four again, all well.",
                "At the river by afternoon it is a hundred and ten, because air gets hotter the lower it goes and the black rock at the bottom holds the heat like a stove.",
                "Each band was laid down at a different time: sand that was a beach, mud that was a sea floor, ash from volcanoes, pressed into stone and then cut through by the river.",
                "The canyon is a desert, and the desert is the danger."
              ],
              "answer": 1,
              "hint": "Two reasons means the sentence has to name both of them. One of these names the danger without saying what causes it, and two are not about heat at all.",
              "skill": "Finding details",
              "evidence": "At the river by afternoon it is a hundred and ten, because air gets hotter the lower it goes and the black rock at the bottom holds the heat like a stove."
            },
            {
              "q": "Why does the log end its first paragraph with 'Walking down is walking back in time'?",
              "choices": [
                "To warn that the trail down is far longer than it looks from the rim, where the river is only a green thread.",
                "To explain how the river cut its way down through every one of those bands of rock to reach the bottom.",
                "To describe what the river sounds like from the bottom, once the hiker is close enough to hear it at last.",
                "To gather a paragraph of layers and dates into one idea the reader can carry down the trail."
              ],
              "answer": 3,
              "hint": "That sentence adds no new fact at all. Ask what a writer is doing when the last line of a paragraph turns everything above it into one picture.",
              "skill": "Author's purpose and structure",
              "evidence": "Walking down is walking back in time."
            },
            {
              "q": "The log says the black rock at the bottom 'holds the heat like a stove'. What is that comparison telling you?",
              "choices": [
                "Somebody has lit a fire down at the bottom of the canyon and left it burning through the afternoon",
                "The rock takes heat in through the day and gives it back out, warming the air around it",
                "The rock is warm only in the places the sun is touching it",
                "The heat in the rock comes from deep inside the canyon walls"
              ],
              "answer": 1,
              "hint": "A stove goes on being hot after it has been switched off. Read what the rest of that sentence says the temperature does by afternoon.",
              "skill": "Word meanings",
              "evidence": "because air gets hotter the lower it goes and the black rock at the bottom holds the heat like a stove"
            },
            {
              "q": "Paragraphs 2 and 3 together explain what the log means by 'four quarts to four again'. What does that line record?",
              "choices": [
                "The hiker drank on the way down and topped the bottles back up at the tap, so the full four go on into the heat.",
                "The hiker carried four quarts down and did not drink any of it.",
                "The hiker used four quarts getting down and found four fresh ones waiting at the shelter, left there for hikers coming past.",
                "The tap at the ledge was dry, so the four quarts carried down from the rim are the only water there is for the rest of the way down."
              ],
              "answer": 0,
              "hint": "Paragraph two gives you a rule in quarts per hour and says why it matters. Paragraph three gives you a tap and a walk of ninety minutes. The line is those two facts written short.",
              "skill": "Reading between the lines",
              "evidence": "The first ledge, a thousand feet down, has a shelter and a tap fed by a pipe from a spring"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 6 means 4 groups of 6.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions: the bottom is how many equal parts; the top is how many are done."
            ],
            "example": "4 × 6 = 24."
          },
          "problems": [
            {
              "q": "Every pack needs 3 quarts, and there are 3 packs. How many quarts is that?",
              "answer": "9",
              "hint": "3 groups of 3, so 3 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "The hiker splits 18 quarts in half. How many quarts is one half?",
              "answer": "9",
              "hint": "Half of 18.",
              "skill": "Dividing"
            },
            {
              "q": "The hiker needs to go down 800 feet and has gone down 358. How many more feet are needed?",
              "answer": "442",
              "hint": "800 − 358.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the hiker has finished 7 of them. What fraction is done? (write a fraction)",
              "answer": "7/8",
              "hint": "7 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 5 squares wide and 7 squares long. The hiker has covered 5 squares. How many squares are left to cover?",
              "answer": "30",
              "hint": "5 × 7 squares in all, then take 5 off.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Decimal × decimal: multiply without the points, then count the decimal places in both numbers. 1.3 × 2.1: 13 × 21 = 273, two places, so 2.73.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × 9 − 3 × 6 = 18: both multiplications first, then subtract."
          },
          "problems": [
            {
              "q": "A regular switchback takes 13.25 minutes. A long one takes 1.2 times as long. How many minutes does the long one take?",
              "answer": "15.9",
              "hint": "Multiply 1325 × 12 without the points, then put back 3 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "Of 200 feet of trail, 10% is closed for repair. How many feet are still open?",
              "answer": "180",
              "hint": "10% of 200 is 20. Take that off 200.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The hiker shares 40 granola bars between two teams in the ratio 2 to 3. How many does the smaller share get?",
              "answer": "16",
              "hint": "2 + 3 = 5 parts. 40 ÷ 5 = 8 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The hiker works out 7 × 12 − 1 × 2. What is it?",
              "answer": "82",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "The rim ranger station's freezer had a coldest reading of −14 degrees and a warmest of −2 degrees. How many degrees apart are they?",
              "answer": "12",
              "hint": "From −14 up to −2.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the outside step first. In 4(x + 2) = 28, divide by 4, then take off 2."
            ],
            "example": "4(x + 2) = 28, so x + 2 = 7, so x = 5."
          },
          "problems": [
            {
              "q": "20 ledges took 25 minutes. At the same rate, how many minutes would 32 ledges take?",
              "answer": "40",
              "hint": "One ledge takes 25 ÷ 20 = 1.25. Then × 32.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A trail crew made a 160-foot stretch of trail 10% longer. How many feet did they add?",
              "answer": "16",
              "hint": "10% of 160: 10/100 × 160.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rim ranger station's freezer had a low of −7 degrees and a high, during a power cut, of 9 degrees. How many degrees apart are they?",
              "answer": "16",
              "hint": "7 below zero plus 9 above zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 6(x + 13) = 138",
              "answer": "10",
              "hint": "Divide both sides by 6 to get x + 13 = 23.",
              "skill": "Equations"
            },
            {
              "q": "On the trail map, 6 inches stands for 60 feet. How many feet does 1 inch stand for?",
              "answer": "10",
              "hint": "60 ÷ 6.",
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
            "example": "Start at 6 and add 7 each step: the 5th number is 6 + 7 × 4 = 34."
          },
          "problems": [
            {
              "q": "The length of rope let down, in feet, goes 8, 11, 14, 17, and on. What is the 13th number in the list?",
              "answer": "44",
              "hint": "It starts at 8 and adds 3 each step. The number you want is 12 steps on from 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (5 × 6)²?",
              "answer": "900",
              "hint": "5 × 6 = 30 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 12 and 35 feet. How long is its longest side, in feet?",
              "answer": "37",
              "hint": "12² + 35² = 1369. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x − x = 30",
              "answer": "5",
              "hint": "7 − 1 = 6, so 6x = 30.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 4 × 10^2 or 3 × 10^3? Write the bigger one out in full.",
              "answer": "3000",
              "hint": "Write both out: 4 × 10^2 is 400. Now write out 3 × 10^3 and compare.",
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
          "example": "If step 5 says 'write it as a word', 15 becomes FIFTEEN."
        },
        "skill": "Following directions",
        "steps": [
          "Write the quarts of water the hiker carries off the rim: 4.",
          "Multiply by the hours the walk to the first ledge took, rounded up to 2.",
          "Add the temperature at the rim counted in tens: 7.",
          "Subtract the languages on the trail sign: 3.",
          "The log writes its numbers as words — ninety minutes, not 90. So do not type digits: write your answer as a word, in capital letters. (20 would be TWENTY.)"
        ],
        "prompt": "Your answer:",
        "answer": "TWELVE",
        "accept": [
          "twelve",
          "Twelve",
          "TWELVE.",
          "twelve."
        ],
        "hint": "Work the four sums in order first. Then look at step 5 again: the log wants the number spelled out, not the digits."
      }
    },
    {
      "id": "canyon-2",
      "title": "The Red Wall",
      "recon": {
        "lesson": {
          "title": "Reading rock",
          "points": [
            "When the log explains how a layer formed, that is the detail a 'how' question wants.",
            "Ages in millions of years are numbers. Read them.",
            "A word about rock is defined by what made it."
          ],
          "example": "'Glass is made from melted sand.' What is glass made from? Melted sand."
        },
        "title": "Trail Log: A Sea Floor on a Cliff",
        "passage": [
          "The second ledge is at the bottom of the Red Wall, a cliff five hundred feet high that runs the whole length of the canyon like a belt. It is the layer every hiker remembers. It is limestone, a rock made almost entirely of the shells of tiny sea animals that lived, died and sank to the bottom of a warm shallow sea about 340 million years ago. The shells piled up for so long that the pile is five hundred feet thick. The rock itself is gray. It is red on the outside because rainwater carries iron down from the red layers above it and stains the face, the way rust stains a sink.",
          "The trail cannot go straight down a five-hundred-foot cliff, so it finds a crack. A side canyon has cut a notch into the wall, and the trail winds down the notch in forty switchbacks, each one a few steps long. That way the drop is made in a long series of small ones. On the way the hiker's hand finds a fossil in the rock beside the trail. The fossil is a curl of shell the size of a coin. It is a sea creature, three hundred and forty million years old, at five thousand feet above the nearest ocean. The log gets a sketch of it. Nothing is taken. The rule is the same as in any park: leave the rock where the river left it.",
          "The bighorn goes down the Red Wall the way bighorns do, straight down, ledge to ledge. Its hooves have hard rims and soft rubbery centers that grip rock the way a climbing shoe does. The hiker watches from the switchbacks and does not try it. At the bottom of the wall the log says: second ledge, 2,000 feet below the rim, forty switchbacks, one fossil, sketched, water three quarts. It is nine in the morning and eighty-five degrees, and the shade is already worth something."
        ],
        "questions": [
          {
            "q": "What is the Red Wall made of?",
            "choices": [
              "Sandstone from a beach",
              "Limestone made of the shells of tiny sea animals",
              "Volcanic ash",
              "Red iron carried down by rainwater from the layers above"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the third sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How many switchbacks does the trail use to get down the Red Wall?",
            "choices": [
              "Four in all",
              "Four hundred",
              "Forty",
              "Five hundred"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'fossil'?",
            "choices": [
              "A kind of coin",
              "A trail marker",
              "The remains or shape of an ancient living thing preserved in rock",
              "A curl of shell that a hiker takes home from the trail and keeps in a pocket"
            ],
            "answer": 2,
            "hint": "The fossil is 'a curl of shell', 'a sea creature, three hundred and forty million years old' in the rock.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is the Red Wall red if the rock is gray?",
            "choices": [
              "Because the shells that made the limestone were red",
              "Because rainwater carries iron down from the red layers above and stains the face",
              "Because of the sunset",
              "Because the limestone was laid down in a warm shallow sea that was full of red-colored mud"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The fossil",
              "How the bighorn descends the cliff, and the log at the second ledge",
              "The switchbacks",
              "The forty switchbacks down the notch, and the fossil found beside the trail"
            ],
            "answer": 1,
            "hint": "Paragraph 3 describes the bighorn's hooves and ends with the log line.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Wall math",
          "points": [
            "Feet per switchback: cliff ÷ switchbacks.",
            "Millions of years: subtract to find the gap.",
            "Volume of a box: length × width × height. 10 × 6 × 4 = 240 cubic inches.",
            "Two-step: quarts left, then hours of water at a quart an hour."
          ],
          "example": "200 feet ÷ 25 switchbacks is 8 feet each."
        },
        "problems": [
          {
            "q": "The Red Wall is 500 feet high and the trail takes 40 switchbacks. About how many feet does each switchback drop? (round down)",
            "answer": "12",
            "hint": "500 ÷ 40 is 12 with some left over.",
            "skill": "Dividing"
          },
          {
            "q": "The rim rock is 270 million years old and the Red Wall is 340 million. How many million years older is the Red Wall?",
            "answer": "70",
            "hint": "340 − 270.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The hiker's pack is about 20 inches tall, 12 inches wide and 8 inches deep. How many cubic inches does it hold?",
            "answer": "1920",
            "hint": "Height × width × depth: 20 × 12 = 240, then times 8.",
            "skill": "Volume"
          },
          {
            "q": "The hiker has 3 quarts left and drinks a quart an hour. How many hours of water is that?",
            "answer": "3",
            "hint": "3 ÷ 1.",
            "skill": "Dividing"
          },
          {
            "q": "The fossil is 5,000 feet above the nearest ocean. A mile is 5,280 feet. How many feet short of a mile is that?",
            "answer": "280",
            "hint": "5,280 − 5,000.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Being true is not being proof",
            "points": [
              "Every choice in the claim question is a real sentence from the log, so true is worth nothing. Only proving counts.",
              "Read the claim carefully and count its parts. If it says two things, your sentence has to say both.",
              "Read the claim and your pick back to back. If somebody could still ask 'and how do you know that', keep looking."
            ],
            "example": "Claim: the wall took thousands of years to build. 'It is made of stone' is true and settles nothing. 'Each course was laid a generation apart' settles it."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "The trail winds down the notch cut by a side canyon in forty switchbacks, each of them a few steps long, so the drop is made in a long series of small ones.",
                "The Red Wall is not what it looks like: it is built from shells, it is not really red, and the trail can only get down it by finding a crack.",
                "Fossils are the most exciting thing a person can find outdoors.",
                "The Red Wall is made of red rock all the way through."
              ],
              "answer": 1,
              "hint": "What the wall is made of, why it is the color it is, and how a trail gets down it. Find the choice that covers all three.",
              "skill": "Central idea and evidence",
              "evidence": "The rock itself is gray."
            },
            {
              "q": "Claim: the wall took an enormous span of time to build up. Which sentence from the log best supports that claim?",
              "choices": [
                "The second ledge is at the bottom of the Red Wall, a cliff five hundred feet high that runs the whole length of the canyon like a belt.",
                "It is red on the outside because rainwater carries iron down from the red layers above it and stains the face, the way rust stains a sink.",
                "The shells piled up for so long that the pile is five hundred feet thick.",
                "A side canyon has cut a notch into the wall, and the trail winds down the notch in forty switchbacks, each one a few steps long."
              ],
              "answer": 2,
              "hint": "Height on its own is not time. The claim needs a sentence that says how the height got there and how long the piling went on.",
              "skill": "Finding details",
              "evidence": "The shells piled up for so long that the pile is five hundred feet thick."
            },
            {
              "q": "Why does the log explain where the wall's red color comes from?",
              "choices": [
                "To explain why the trail has to leave the face of the cliff and use the crack cut by a side canyon to get down the wall.",
                "To warn hikers that the rock will stain their clothes.",
                "To correct the impression the name gives: the wall is stained on the surface, not red the whole way through.",
                "To show how the fossil came to be inside the rock."
              ],
              "answer": 2,
              "hint": "Read the last two sentences of that paragraph together. The first one is a correction and the second one explains it.",
              "skill": "Author's purpose and structure",
              "evidence": "The rock itself is gray. It is red on the outside because rainwater carries iron down from the red layers above it and stains the face, the way rust stains a sink."
            },
            {
              "q": "The log says the cliff 'runs the whole length of the canyon like a belt'. What is that comparison telling you?",
              "choices": [
                "It is made of a softer material than the rock above it",
                "It is one continuous band at the same level the whole way along",
                "It can be walked along from one end of it to the other",
                "It holds the layers of rock above it from sliding down the slope of the canyon"
              ],
              "answer": 1,
              "hint": "Picture a belt on a coat: one strip, all the way around, at a single height. Then read what the sentence says about how far it goes.",
              "skill": "Word meanings",
              "evidence": "a cliff five hundred feet high that runs the whole length of the canyon like a belt"
            },
            {
              "q": "Paragraphs 1 and 2 together explain why finding a shell in this cliff is stranger than it first sounds. Why is it?",
              "choices": [
                "Shells are normally destroyed when rock is pressed into limestone.",
                "A sea creature has ended up thousands of feet above the nearest ocean, in rock that was once the floor of a sea.",
                "The shell is far older than every other layer in the canyon, older even than the almost black rock at the very bottom of it.",
                "The fossil was found in the notch rather than in the wall itself."
              ],
              "answer": 1,
              "hint": "Paragraph one tells you what the whole wall used to be. Paragraph two tells you how high above the ocean the hiker's hand is when it lands on the shell. The strangeness is the distance between those two facts.",
              "skill": "Reading between the lines",
              "evidence": "a sea creature, three hundred and forty million years old, at five thousand feet above the nearest ocean"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 7 × 4 means 7 groups of 4.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: the bigger top is the bigger fraction."
            ],
            "example": "7 × 4 = 28."
          },
          "problems": [
            {
              "q": "The hiker carries 3 fossils on each of 6 trips. How many fossils is that?",
              "answer": "18",
              "hint": "6 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "Each page of the hiker's notebook holds 8 fossil sketches. The hiker has 24 sketches. How many pages can be filled?",
              "answer": "3",
              "hint": "How many 8s fit into 24?",
              "skill": "Dividing"
            },
            {
              "q": "The hiker went down 174 feet in the morning and 307 feet in the evening. How many more feet in the evening?",
              "answer": "133",
              "hint": "307 − 174.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 7/8 or 5/8? (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "The hiker's goal is 900 steps on the trail and 533 are logged. How many short is that?",
              "answer": "367",
              "hint": "900 − 533.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Mixed number ÷ fraction: make it improper first. 3 1/3 ÷ 5/9 = 10/3 × 9/5 = 90/15 = 6.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(5 − 1) × (2 + 3) = 20: each set of parentheses first."
          },
          "problems": [
            {
              "q": "The trail down the Red Wall is 5 5/8 miles of switchbacks, each 3/8 of a mile long. How many switchbacks are there?",
              "answer": "15",
              "hint": "Make 5 5/8 an improper fraction, 45/8. Then multiply by the flip of 3/8: 45/8 × 8/3.",
              "skill": "Fractions"
            },
            {
              "q": "Out of every 100 feet of trail, 50 are in shade. Out of 200 feet of trail, how many feet are in shade?",
              "answer": "100",
              "hint": "200 is 2 hundreds, so 2 × 50.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The hiker divides 15 minutes of work in the ratio 2 to 3. How many minutes is the larger share?",
              "answer": "9",
              "hint": "5 parts in all, so one part is 3 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The hiker works out (7 − 3) × (6 + 15). What is it?",
              "answer": "84",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three readings came in from the rim ranger station's freezer: −5, 3 and −8 degrees. Which is the coldest?",
              "answer": "-8",
              "accept": [
                "−8"
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
              "A unit rate is the total divided by how many: 14 ÷ 4 = 3.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Count the minus signs. An even number gives a plus answer, an odd number a minus: (−2) × (−3) × (−5) = −30.",
              "A two-step equation: undo the taking away first, then undo the dividing by multiplying."
            ],
            "example": "x ÷ 3 − 4 = 5, so x ÷ 3 = 9, so x = 27."
          },
          "problems": [
            {
              "q": "The whole climb, start to finish, takes 12 minutes, at 0.5 minutes for each ledge. One ledge is already done. How many ledges are left?",
              "answer": "23",
              "hint": "12 ÷ 0.5 = 24 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says today's hike may be no more than 25% longer than yesterday's. Yesterday's hike took 160 minutes. What is the longest today's hike may take, in minutes?",
              "answer": "200",
              "hint": "25% of 160 is 40. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Each of the hiker's 3 water bottles loses 4 ounces every hour of the descent. Write that as −4 an hour for each bottle. What is the total change for all 3 bottles over 6 hours? Work it out as 3 × (−4) × 6.",
              "answer": "-72",
              "accept": [
                "−72"
              ],
              "hint": "3 × 4 × 6, then count the minus signs. One makes a minus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 9 − 26 = 10",
              "answer": "324",
              "hint": "Add 26 to both sides, then multiply by 9.",
              "skill": "Equations"
            },
            {
              "q": "A cart wheel measures 62.8 inches around the edge. Using 3.14 for pi, how many inches is it across?",
              "answer": "20",
              "hint": "Around the edge ÷ 3.14.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "Slope is the rise over the run: how much y goes up, divided by how much x goes across.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "A line starts at 6 and climbs 3 each step: after 5 steps it is 3 × 5 + 6 = 21."
          },
          "problems": [
            {
              "q": "A line passes through (0, 10) and (7, 38). What is its slope?",
              "answer": "4",
              "hint": "Slope is the rise over the run: 28 ÷ 7.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 169 square feet. How many feet is it around the edge?",
              "answer": "52",
              "hint": "One side is the square root of 169, then four sides.",
              "skill": "Powers and roots"
            },
            {
              "q": "The hiker goes 5 feet east and then 12 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "13",
              "hint": "The two legs make a right angle: 5² + 12² = 169.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 10x + 19 and 4x + 55 come to the same number?",
              "answer": "6",
              "hint": "Set them equal, take 4x off both sides, then take 19 off.",
              "skill": "Equations"
            },
            {
              "q": "Two round water tanks each have a radius of 5 feet and are 3 feet deep. Using 3.14 for pi, what is their total volume in cubic feet?",
              "answer": "471",
              "hint": "One tank is 3.14 × 5 × 5 × 3 = 235.5. Then double it.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Unless",
          "points": [
            "'Unless' flips the rule when its condition is true.",
            "Check the log before you act."
          ],
          "example": "'Stay, unless the lead reaches a hundred feet.'"
        },
        "skill": "Following directions",
        "steps": [
          "Write how far the second ledge is below the rim, in hundreds of feet: 20.",
          "Multiply by the quarts of water the log still shows: 3.",
          "Add the switchbacks in the notch through the Red Wall: 40.",
          "Subtract the temperature at the second ledge: 85.",
          "Type the result, unless the log shows fewer than four quarts of water left, in which case type WATER instead."
        ],
        "prompt": "Your answer:",
        "answer": "WATER",
        "accept": [
          "water",
          "Water",
          "WATER.",
          "water."
        ],
        "hint": "The four sums are worth doing, but step 5 sends you back to the log's water line before anything gets typed."
      }
    },
    {
      "id": "canyon-3",
      "title": "The Platform",
      "recon": {
        "lesson": {
          "title": "Heat and the rules for it",
          "points": [
            "When the log names a danger, the rule follows. Find both.",
            "Temperatures and times are exact.",
            "A 'why' question: follow the sentence to its last few words; the reason is often at the end."
          ],
          "example": "'No swimming after dark.' Why? You cannot see the rocks."
        },
        "title": "Trail Log: The Hottest Place on the Trail",
        "passage": [
          "Below the Red Wall the canyon opens out onto the Platform, a wide flat shelf of gray-green shale two miles across. It has no shade, no water, and no way around it. It is the hottest place on the trail. By eleven in the morning the rock is too hot to touch, the air over it wobbles, and the temperature in the sun passes a hundred degrees and keeps going. The log calls it the Platform. The rangers call it the oven.",
          "The rule for the Platform is a time, not a distance: nobody starts across it after ten in the morning, and nobody crosses it between eleven and four. Heat is the canyon's real killer. A person walking in a hundred and ten degrees loses a quart of water an hour in sweat. If it is not replaced the body stops cooling itself, the headache starts, then the confusion, then the collapse, and by then a person is usually too muddled to know what is wrong. The fix is boring. Drink before you are thirsty, eat salt, walk early, and sit in the shade through the middle of the day like a lizard.",
          "The hiker leaves the second ledge at nine. By ten-thirty the hiker has crossed the two miles, with a wet bandana under the hat. At the far edge of the Platform the shale breaks off into the Inner Gorge. There a single overhanging boulder throws a patch of shade the size of a car. That is the third ledge. The hiker stays there until four, drinking and eating. The hiker watches the bighorn stand in full sun on a rock a hundred feet away as if the sun were a rumor. The log: Platform crossed, 3,000 feet below the rim, 104 degrees, shade found, waiting."
        ],
        "questions": [
          {
            "q": "How wide is the Platform?",
            "choices": [
              "Two hundred feet",
              "Twenty miles",
              "Two miles",
              "Half a mile"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "Between which hours does nobody cross the Platform?",
            "choices": [
              "Eleven and four",
              "Six and ten",
              "Two and six",
              "One and two"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is 'shale'?",
            "choices": [
              "Loose stones lying on the trail",
              "A gray-green rock that forms the Platform",
              "A rock made of shells",
              "Rock broken up by the heat"
            ],
            "answer": 1,
            "hint": "The first sentence describes 'a wide flat shelf of gray-green shale'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is confusion so dangerous in the heat?",
            "choices": [
              "Because a confused person walks off the trail and gets lost",
              "Because it makes people walk faster",
              "Because by the time a person is confused they are usually too muddled to know what is wrong or fix it",
              "Because a person walking in a hundred and ten degrees will lose a whole quart of water every hour in sweat"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the long sentence ending 'to know what is wrong'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The rule for the Platform and why heat is the canyon's real killer",
              "The shale",
              "The boulder",
              "The bighorn"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 2 gives the rule; the rest explains the danger and the fix.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Heat math",
          "points": [
            "Hours in the shade: from arrival to departure.",
            "Minutes per mile: minutes ÷ miles.",
            "Quarts lost an hour times hours: water to replace.",
            "Adding decimals: line up the points. 1.5 + 2.35 is 1.50 + 2.35 = 3.85."
          ],
          "example": "9:30 to 1:00 is 3 and a half hours."
        },
        "problems": [
          {
            "q": "The hiker reached the shade at 10:30 and leaves at 4:00. How many hours and minutes of waiting? Type the hours only.",
            "answer": "5",
            "hint": "10:30 to 3:30 is 5 hours, plus 30 minutes.",
            "skill": "Multi-step problems"
          },
          {
            "q": "Two miles in 90 minutes. How many minutes per mile?",
            "answer": "45",
            "hint": "90 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "A walker loses a quart an hour in the heat. In 5 hours of walking, how many quarts must be replaced?",
            "answer": "5",
            "hint": "1 × 5.",
            "skill": "Multiplying"
          },
          {
            "q": "The hiker walked 2.6 miles before reaching the shade and 1.85 miles after. How many miles is that? (write a decimal)",
            "answer": "4.45",
            "hint": "Line up the points: 2.60 + 1.85.",
            "skill": "Decimals"
          },
          {
            "q": "The Platform is 2 miles across and about 1 mile deep along the trail's route. What is that area in square miles?",
            "answer": "2",
            "hint": "2 × 1.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Ask what the sentence is for",
            "points": [
              "Every paragraph and many single sentences are doing a job: setting the scene, naming a cause, comparing, ordering, or answering a problem.",
              "Two short sentences with the same shape and a different last word are almost always a comparison, and the comparison is the point.",
              "Delete the sentence in your head. If something goes missing, that missing thing is the job."
            ],
            "example": "'The map calls it a road. The drivers call it a river.' Nothing new is being described. The pairing is the whole message."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "A person walking in a hundred and ten degrees loses a quart of water an hour in sweat, and the headache comes first if it is not replaced.",
                "The desert is no place for anyone who is not already an expert.",
                "On the Platform the danger is heat and the defense is timing, so the day is arranged around when to move and when to sit still.",
                "The rule for the Platform is about how far you go, not about when you go."
              ],
              "answer": 2,
              "hint": "A shelf with no shade, a rule made of hours, and a hiker sitting under a boulder from ten-thirty until four. Ask what all three are answering.",
              "skill": "Central idea and evidence",
              "evidence": "The rule for the Platform is a time, not a distance"
            },
            {
              "q": "Claim: a person in trouble from heat may be unable to work out that they are in trouble. Which sentence from the log best supports that claim?",
              "choices": [
                "If it is not replaced the body stops cooling itself, the headache starts, then the confusion, then the collapse, and by then a person is usually too muddled to know what is wrong.",
                "Heat is the canyon's real killer.",
                "The rule for the Platform is a time, not a distance: nobody starts across it after ten in the morning, and nobody crosses it between eleven and four.",
                "By eleven in the morning the rock is too hot to touch, the air over it wobbles, and the temperature in the sun passes a hundred degrees and keeps going."
              ],
              "answer": 0,
              "hint": "Saying heat is dangerous is not the same as saying what it does to a person's thinking. Follow the sentence all the way to its last few words.",
              "skill": "Finding details",
              "evidence": "If it is not replaced the body stops cooling itself, the headache starts, then the confusion, then the collapse, and by then a person is usually too muddled to know what is wrong."
            },
            {
              "q": "What job do the last two sentences of the first paragraph do?",
              "choices": [
                "They explain how the shelf of shale came to be formed.",
                "They put two names side by side, so a flat description and a warning arrive at the same moment.",
                "They give the width of the Platform in miles across.",
                "They list the people who work down in the canyon."
              ],
              "answer": 1,
              "hint": "Two short sentences, the same shape, a different last word. Ask what the second name tells you that the first one does not.",
              "skill": "Author's purpose and structure",
              "evidence": "The log calls it the Platform. The rangers call it the oven."
            },
            {
              "q": "The log says the fix for the heat 'is boring'. What does boring mean as it is used here?",
              "choices": [
                "Too dull for anybody to bother actually doing, however well it works",
                "So slow it is no help",
                "Plain and unexciting, and exactly what works",
                "Hard to keep in mind when tired"
              ],
              "answer": 2,
              "hint": "Read the sentence that comes right after it. Would the writer list those four things carefully if the word were meant as a complaint?",
              "skill": "Word meanings",
              "evidence": "The fix is boring. Drink before you are thirsty, eat salt, walk early, and sit in the shade through the middle of the day like a lizard."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the hiker left the second ledge at nine rather than later in the morning. Why then?",
              "choices": [
                "The rule bars crossing between eleven and four, and the crossing takes ninety minutes, so leaving at nine reaches shade in time.",
                "The patch of shade under the boulder is only there early in the day, before the sun swings around.",
                "The bighorn had already crossed the Platform that morning, and the hiker was following it over.",
                "The rangers open the Platform to hikers at nine each morning and not a minute earlier."
              ],
              "answer": 0,
              "hint": "Paragraph two gives you the hours when you are not allowed to be out there. Paragraph three gives you the time the hiker left and the time of arrival. Do the arithmetic between them.",
              "skill": "Reading between the lines",
              "evidence": "nobody starts across it after ten in the morning, and nobody crosses it between eleven and four"
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
            "example": "3 × 7 = 21."
          },
          "problems": [
            {
              "q": "The hiker walks 9 miles on each of 4 days. How many miles is that?",
              "answer": "36",
              "hint": "4 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "The hiker splits a 36-mile trail into 4 equal days. How many miles is each day?",
              "answer": "9",
              "hint": "How many 4s make 36?",
              "skill": "Dividing"
            },
            {
              "q": "The hiker climbed down 351 feet, then 96 more, then 27 more. How many feet in all?",
              "answer": "474",
              "hint": "351 + 96 first. Then add 27.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The hiker finished 1/4 of the day's work before the break and 2/4 after. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A platform is 5 squares wide and 3 squares long. How many squares is that?",
              "answer": "15",
              "hint": "5 rows of 3, so 5 × 3.",
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
            "example": "5 × (9 − 2) + 3 = 38: parentheses, then multiply, then add."
          },
          "problems": [
            {
              "q": "The hiker has 70.35 minutes of descent. Each switchback takes 3.35 minutes. How many switchbacks is that enough for?",
              "answer": "21",
              "hint": "Move both points 2 places to the right: 7035 ÷ 335.",
              "skill": "Decimals"
            },
            {
              "q": "Of 40 miles, 20% are set aside. How many is that?",
              "answer": "8",
              "hint": "20% of 40: 20% is 20/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On the trail map, every 3 inches stand for 5 miles. A trail is 12 inches long on the map. How many miles is it?",
              "answer": "20",
              "hint": "12 ÷ 3 = 4 groups. Each group has 5 miles.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The hiker works out 6 × (10 − 4) + 16. What is it?",
              "answer": "52",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the rim ranger station's freezer read −3 degrees. After its power cut out, it read 5 degrees by noon. By how many degrees did it rise?",
              "answer": "8",
              "hint": "From −3 up to 0 is 3, then 5 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "3x + 13 = 34, so 3x = 21, so x = 7."
          },
          "problems": [
            {
              "q": "12 ledges needed 27 minutes altogether. How many minutes is that for one ledge?",
              "answer": "2.25",
              "hint": "A rate is the total shared out: 27 ÷ 12.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Last year the hiker walked 200 miles of canyon trail. This year the total rose by 25%. How many miles did the hiker walk this year?",
              "answer": "250",
              "hint": "25% of 200 is 50. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "At dawn the rim ranger station's freezer read −3 degrees. With its door left open it rose 17 degrees by noon, then fell 20 degrees by dark once it was shut. What does it read at dark?",
              "answer": "-6",
              "accept": [
                "−6"
              ],
              "hint": "Start at −3, go up 17 to 14, then down 20.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 8x + 26 = 42",
              "answer": "2",
              "hint": "Take 26 off both sides first, then divide by 8.",
              "skill": "Equations"
            },
            {
              "q": "On the map, 1 inch stands for 2 miles. The marked trail measures 4 inches on the map. How long is it really, in miles?",
              "answer": "8",
              "hint": "Every inch is 2 miles, so 4 × 2.",
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
            "example": "Start at 6 and add 5 each hour: after 4 hours, 5 × 4 + 6 = 26."
          },
          "problems": [
            {
              "q": "The hiker has already walked 10 miles and walks 4 more every hour. After 3 more hours, how many miles has the hiker walked in all?",
              "answer": "22",
              "hint": "This is the straight-line rule y = mx + b: 4 × 3 + 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each box holds 8² trail bars. There are 5 boxes. How many trail bars in all?",
              "answer": "320",
              "hint": "8² means 8 × 8 = 64. Then × 5.",
              "skill": "Powers and roots"
            },
            {
              "q": "The hiker runs a rope from the top of a 9-foot boulder to a point 40 feet away on the ground. How long is the rope, in feet?",
              "answer": "41",
              "hint": "Right triangle: a² + b² = c². 9² + 40² = 81 + 1600 = 1681. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x + 27 = x + 52",
              "answer": "5",
              "hint": "Take x off both sides to get 5x + 27 = 52, then take 27 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The canyon rim stands about 8 × 10^3 feet above sea level. Written out in full, what number is that?",
              "answer": "8000",
              "hint": "10^3 is 1 with 3 zeros after it: 1,000. Then × 8.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Two totals",
          "points": [
            "Some orders build two separate totals.",
            "The last step says which one to keep."
          ],
          "example": "'Keep this total' means stop and write it down. The last step picks which total you type."
        },
        "skill": "Following directions",
        "steps": [
          "Write the hour the hiker leaves the second ledge: 9.",
          "Multiply by the width of the Platform in miles: 2. Keep this total.",
          "Now start a second total from the temperature at the third ledge: 104.",
          "Take away how far the third ledge is below the rim, in hundreds of feet: 30.",
          "The rangers judge the Platform by its shade, not by its miles. Type the total from step 4, not the one from step 2."
        ],
        "prompt": "Your answer:",
        "answer": "74",
        "hint": "Two totals get built here, one at step 2 and one at step 4. Read step 5 again to see which one the rangers keep."
      }
    },
    {
      "id": "canyon-4",
      "title": "The Inner Gorge",
      "recon": {
        "lesson": {
          "title": "The oldest rock",
          "points": [
            "When the log gives an age, it is a detail. Billions and millions are different words.",
            "A word about the rock is defined by what it was before.",
            "'What does that mean' questions want the log's own explanation."
          ],
          "example": "'The parking lot was once a swamp.' What was it before? A swamp."
        },
        "title": "Trail Log: Two Billion Years",
        "passage": [
          "At four the hiker steps off the Platform into the Inner Gorge. Down here the canyon changes character. The wide bands of colored rock are gone. The walls close in, dark, steep, and shining, black and gray rock shot through with pink veins, and the river is suddenly loud, a roar coming up from a slot fifteen hundred feet below. This rock is the oldest thing on the trail: nearly two billion years old, the roots of a mountain range that stood here before there was a canyon. That was before there were fish in the sea, before there was anything alive on land. The rock was worn down to its base and buried, and then uncovered by the river.",
          "Two billion years is a number nobody can picture, so the rangers give hikers a way to hold it. Stretch your arms out. The distance from fingertip to fingertip is the age of the Earth. The rock at the rim, 270 million years old, is about the length of one finger. The whole time people have existed is less than the edge of a fingernail. One pass of a nail file takes it all off. The hiker stands in the gorge with arms out, feeling foolish and then not, with the river roaring below and the black rock cool at last in the evening shade.",
          "The trail down the gorge is the roughest of the five. It has steps cut into rock, and a handrail of cable where it narrows. There is one stretch where the hiker turns to face the wall and climbs down like a ladder. The bighorn is nowhere, then everywhere, then standing on a ledge above with the sunset behind it like a poster. At six the hiker reaches the fourth ledge. The ledge is a sandbar in a bend of the gorge, with the river a hundred feet below it. The hiker writes: Inner Gorge, 4,400 feet below the rim, oldest rock, arms out, river loud."
        ],
        "questions": [
          {
            "q": "About how old is the rock in the Inner Gorge?",
            "choices": [
              "Two million years",
              "Nearly two billion years",
              "Two thousand years",
              "About 270 million years, like the rim"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence with 'the oldest thing on the trail'.",
            "skill": "Finding details"
          },
          {
            "q": "In the arms-out picture, what does the whole time people have existed equal?",
            "choices": [
              "A whole arm, from shoulder to fingertip",
              "One whole finger, from knuckle to fingertip",
              "Fingertip to fingertip, with both arms out",
              "Less than the edge of a fingernail"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'fingernail'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what are the 'roots' of a mountain range?",
            "choices": [
              "The deep base of ancient mountains left after the tops wore away",
              "Tree roots",
              "Plants on the cliff",
              "The pink veins that run all through the black and gray rock of the gorge"
            ],
            "answer": 0,
            "hint": "The sentences say the rock is 'the roots of a mountain range' that was 'worn down to its base'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why do the rangers use the arms-out picture?",
            "choices": [
              "Because a hiker who can picture two billion years will take better care of the rock beside the trail down",
              "Because two billion years is a number nobody can picture, and the picture gives a way to hold it",
              "Because the trail down the Inner Gorge is so narrow that hikers have to hold both arms out for balance",
              "Because the rock at the rim is 270 million years old and the rangers want every hiker to remember that"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The sunset",
              "The cable",
              "The age of the Earth",
              "The rough trail down the gorge and the fourth ledge"
            ],
            "answer": 3,
            "hint": "Paragraph 3 describes the steps, the cable, the ladder stretch and the arrival.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Deep time math",
          "points": [
            "Billions and millions: a billion is a thousand million.",
            "Feet below the rim: read the ledges.",
            "Hours between clock times.",
            "Two-step: feet left to the river."
          ],
          "example": "3 billion is 3 × 1,000 = 3,000 million."
        },
        "problems": [
          {
            "q": "The gorge rock is 2 billion years old. A billion is a thousand million. How many million years is that?",
            "answer": "2000",
            "accept": [
              "2,000"
            ],
            "hint": "2 × 1,000.",
            "skill": "Multiplying"
          },
          {
            "q": "The rim rock is 270 million years old. How many million years older is the gorge rock, at 2,000 million?",
            "answer": "1730",
            "accept": [
              "1,730"
            ],
            "hint": "2,000 − 270.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The hiker left the shade at 4:00 and reached the fourth ledge at 6:00. How many hours?",
            "answer": "2",
            "hint": "4 to 6.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The fourth ledge is 4,400 feet below the rim and the river is 4,500 feet below it. How many feet apart are they?",
            "answer": "100",
            "hint": "4,500 − 4,400.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The gorge trail dropped 1,400 feet in 2 hours. How many feet an hour?",
            "answer": "700",
            "hint": "1,400 ÷ 2.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Phrases carry pictures",
            "points": [
              "Cover the phrase and read the sentence with a gap in it. What would you put there?",
              "A phrase describing a feeling often has two parts in order. 'Nervous and then calm' is a change, and the change is the meaning.",
              "Put your choice back in and read the sentence again. Three of the four will make the log claim something it never claimed."
            ],
            "example": "'The room went quiet and then quieter.' Nothing was measured. Something happened in the gap between the two, and the sentence expects you to work out what."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "One stretch is so steep that the hiker climbs down facing the wall.",
                "At the bottom both the rock and the trail change: the oldest rock on the route needs a trick to imagine, and the roughest walking is what reaches it.",
                "People do not appreciate how old the Earth really is.",
                "The Inner Gorge is made of the same wide bands of colored rock as the rest of the canyon, cream and red and gray, laid down one on top of another over millions of years."
              ],
              "answer": 1,
              "hint": "Rock older than anything above it, a trick done with the arms out, and the roughest mile of the trail. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "This rock is the oldest thing on the trail: nearly two billion years old"
            },
            {
              "q": "Claim: the rock in the gorge is older than the canyon itself. Which sentence from the log best supports that claim?",
              "choices": [
                "The rock at the rim, 270 million years old, is about the length of one finger.",
                "The walls close in, dark, steep, and shining, black and gray rock shot through with pink veins, and the river is suddenly loud, a roar coming up from a slot fifteen hundred feet below.",
                "The hiker stands in the gorge with arms out, feeling foolish and then not, with the river roaring below and the black rock cool at last in the evening shade.",
                "This rock is the oldest thing on the trail: nearly two billion years old, the roots of a mountain range that stood here before there was a canyon."
              ],
              "answer": 3,
              "hint": "The other three give an age, a view or a pose. The claim is about which came first. Find the sentence that puts the rock before the canyon in so many words.",
              "skill": "Finding details",
              "evidence": "This rock is the oldest thing on the trail: nearly two billion years old, the roots of a mountain range that stood here before there was a canyon."
            },
            {
              "q": "Why does the log include the trick with the arms held out?",
              "choices": [
                "Because a number like two billion means nothing at all until it is turned into something a body can measure.",
                "Because hikers are told to stretch their arms out before starting the roughest part of the trail down through the gorge.",
                "To explain how the rangers work out the age of the rock.",
                "To describe how wide the Inner Gorge is at the bottom."
              ],
              "answer": 0,
              "hint": "Read the sentence that opens that paragraph. It states the problem the rest of the paragraph exists to answer.",
              "skill": "Author's purpose and structure",
              "evidence": "Two billion years is a number nobody can picture, so the rangers give hikers a way to hold it."
            },
            {
              "q": "The log says the hiker stands with arms out 'feeling foolish and then not'. What is that phrase telling you?",
              "choices": [
                "The hiker was too tired after crossing the Platform to hold the position for long",
                "The trick seemed silly until it worked, and then it stopped seeming silly",
                "Nobody else on the trail was willing to stand in the gorge and try the same thing",
                "The hiker got the measurement wrong the first time and had to stretch both arms out again"
              ],
              "answer": 1,
              "hint": "Two states, in order, joined by 'and then'. Ask what happened in between them, and what the paragraph has just finished explaining.",
              "skill": "Word meanings",
              "evidence": "The hiker stands in the gorge with arms out, feeling foolish and then not, with the river roaring below and the black rock cool at last in the evening shade."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why the arm-span trick belongs here rather than up at the rim. Why here?",
              "choices": [
                "The rim is too crowded for anybody to stretch their arms out.",
                "The rock at the rim has never been dated by the rangers.",
                "The trick only works in a place where the river can be heard.",
                "This is where the oldest rock on the route is, so the number that needs picturing is at its largest."
              ],
              "answer": 3,
              "hint": "Paragraph one gives you the age of the rock the hiker is standing on. Paragraph two gives you the age of the rock at the rim, measured against a finger. Compare the two.",
              "skill": "Reading between the lines",
              "evidence": "The rock at the rim, 270 million years old, is about the length of one finger."
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
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add or take away the tops; the bottom stays."
            ],
            "example": "4 × 7 = 28."
          },
          "problems": [
            {
              "q": "The hiker saw 6 lizards yesterday and three times as many today. How many lizards today?",
              "answer": "18",
              "hint": "Three times 6: 6 + 6 + 6.",
              "skill": "Multiplying"
            },
            {
              "q": "The hiker climbs down a 54-foot wall, 6 feet at a time. How many moves is that?",
              "answer": "9",
              "hint": "How many 6s make 54?",
              "skill": "Dividing"
            },
            {
              "q": "The trail drops 446 feet to the river. The hiker has gone down 179 feet. How many feet are left to go?",
              "answer": "267",
              "hint": "446 − 179.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "3/6 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "3/6",
              "hint": "The whole job is 6/6. Take 3/6 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The tally stood at 365 feet and 600 more were added. What is the tally now?",
              "answer": "965",
              "hint": "365 + 600.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "A rate for one hour: amount ÷ time. 1/3 of a mile in 1/2 an hour is 1/3 × 2 = 2/3 of a mile an hour.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "7 + 4 × 5 = 27: multiply first, then add."
          },
          "problems": [
            {
              "q": "The hiker drinks 7/10 of a water bottle in 7/8 of an hour. At that rate, how much of a bottle does the hiker drink in one hour? (write a fraction)",
              "answer": "4/5",
              "hint": "For one hour, divide the amount by the time: 7/10 ÷ 7/8 = 7/10 × 8/7. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "120 of the 160 feet are set aside. What percent is that? (write just the number)",
              "answer": "75",
              "accept": [
                "75%"
              ],
              "hint": "120 out of 160, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 2 feet of rock wall there are 5 fossils. There are 40 fossils. How many feet of rock wall?",
              "answer": "16",
              "hint": "40 ÷ 5 = 8 groups. Each group has 2 feet of rock wall.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The hiker works out 9 + 9 × 12. What is it?",
              "answer": "117",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "The rim ranger station's freezer read 11 degrees when it was switched on at dawn. By dark it had fallen to −10 degrees. By how many degrees did it fall?",
              "answer": "21",
              "hint": "From 11 down to 0 is 11, then 10 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "One minus sign makes a minus answer: 30 ÷ (−5) = −6. Two make a plus: (−30) ÷ (−5) = 6.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "50 − 4x = 18, so 4x = 32, so x = 8."
          },
          "problems": [
            {
              "q": "One ledge needs 2.5 minutes. How many minutes do 24 ledges need?",
              "answer": "60",
              "hint": "24 × 2.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The river was 200 feet wide at the first crossing and 160 feet wide at the second. By what percent did the width change? (write just the number)",
              "answer": "20",
              "accept": [
                "20%",
                "-20",
                "−20",
                "-20%",
                "−20%"
              ],
              "hint": "The change is 40. 40 out of 200, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The river at the bottom of the canyon drops 3 inches every hour. Write that as −3 an hour. When was it 27 inches higher than it is now? Work it out as 27 ÷ (−3), and write hours before now as a negative number.",
              "answer": "-9",
              "accept": [
                "−9"
              ],
              "hint": "27 ÷ 3, and one minus sign makes the answer negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 75 − 5x = 30",
              "answer": "9",
              "hint": "Move 5x to the right and 30 to the left: 5x = 45.",
              "skill": "Equations"
            },
            {
              "q": "A round camp plate has a radius of 5 inches. Using 3.14 for pi, how many inches is it around the edge?",
              "answer": "31.4",
              "hint": "Across is 2 × 5 = 10. Then × 3.14.",
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
            "example": "Start with 60 and drop 5 every hour: after 8 hours, 60 − 5 × 8 = 20."
          },
          "problems": [
            {
              "q": "After a flash flood, the river is 52 inches deep. It drops 4 inches every hour. How many inches deep is it after 7 hours?",
              "answer": "24",
              "hint": "4 × 7 = 28 inches lower, taken off 52.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 121?",
              "answer": "11",
              "hint": "What number times itself makes 121?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 29-foot rope runs from the top of a boulder to a point 21 feet away on the ground. How tall is the boulder, in feet?",
              "answer": "20",
              "hint": "a² = c² − b² = 841 − 441 = 400. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x = 4x + 40",
              "answer": "10",
              "hint": "Take 4x off both sides: 4x = 40. Then divide by 4.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 5 feet and holds 392.5 cubic feet. Using 3.14 for pi, how many feet deep is it?",
              "answer": "5",
              "hint": "The floor's area is 3.14 × 5 × 5 = 78.5. Divide the volume by that.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Instead",
          "points": [
            "'Instead' throws away the step before it.",
            "Read to the end before you calculate."
          ],
          "example": "'Subtract 40. Instead, divide by 10' means you divide and never subtract."
        },
        "skill": "Following directions",
        "steps": [
          "Write the age of the gorge rock in billions: 2.",
          "Multiply by 1,000 to get millions.",
          "Subtract the age of the rim rock in millions: 270.",
          "Instead of subtracting in step 3, go back to your answer from step 2 and divide by 100.",
          "Type the result."
        ],
        "prompt": "Your answer:",
        "answer": "20",
        "hint": "Step 4 switches the subtract off. Go back to your step 2 total in millions and divide it by 100 instead."
      }
    },
    {
      "id": "canyon-5",
      "title": "The River",
      "recon": {
        "lesson": {
          "title": "Putting the canyon together",
          "points": [
            "The last log looks back over the five ledges. A 'mostly about' question wants the big point, not one detail.",
            "Temperatures of the water and air are details.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'The lake is fifty degrees and the air is eighty.' Which is warmer? The air."
        },
        "title": "Trail Log: Cold Water at the Bottom of the Oven",
        "passage": [
          "The river at the bottom of the canyon is cold. That is the surprise everyone gets: after a mile of heat, the water is forty-eight degrees, green and fast and numbing. It is cold because it comes from a dam upstream that lets it out from the bottom of a deep lake where the sun never reaches. Before the dam the river ran warm and red with mud every summer. Now it runs cold and clear all year, and the fish that live in it are ones that like cold water, and the sandbars the mud used to build are slowly washing away. The hiker learns this from a sign while sitting on a sandbar. Both feet are in the water, and the hiker cannot feel them.",
          "The five ledges, in order, were a walk through the whole story of the rock. The rim, 270 million years, a shallow sea turned to limestone. The Red Wall, 340 million, a sea floor of shells. The Platform, older, mud of a sea that came and went. The Inner Gorge, two billion, the roots of mountains. And the river, the youngest thing in the canyon and the one that made it, cutting down through all of that about the thickness of a few pages a year, for six million years, to get here.",
          "The way out is the same mile, uphill, and it starts at four in the morning to beat the oven. The hiker fills every bottle from the river, filters it, and writes the last line before sleeping on the sand. River, 4,500 feet below the rim, 48 degrees in the water, 96 in the air at sunset, five ledges, all well. Then adds, because the sign said it and it is true: the canyon is not a place. It is a clock. The bighorn is asleep on a ledge a hundred feet up, in the last of the sun. It will be at the rim before breakfast."
        ],
        "questions": [
          {
            "q": "How cold is the river?",
            "choices": [
              "Forty-eight degrees",
              "Ninety-six degrees, the air at sunset",
              "Freezing",
              "Seventy degrees"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What was the Red Wall, according to the summary?",
            "choices": [
              "A sea floor of shells",
              "A desert of dunes",
              "The roots of mountains, two billion years old",
              "Volcanic ash"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence with 'The Red Wall, 340 million'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what does 'filters' mean?",
            "choices": [
              "Boils",
              "Passes the water through something that removes dirt and germs",
              "Freezes",
              "Lets the water stand in the bottle until all the mud settles to the bottom"
            ],
            "answer": 1,
            "hint": "The hiker 'fills every bottle from the river, filters it' before drinking.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is the river cold at the bottom of such a hot canyon?",
            "choices": [
              "Because the canyon shades it",
              "Because it is winter",
              "Because before the dam was built the river ran warm and red with mud every summer, and now it runs clear",
              "Because a dam upstream releases water from the bottom of a deep lake where the sun never reaches"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the third sentence, after 'because'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The fish",
              "How the dam upstream changed the river's temperature, its color, and the sandbars it once built",
              "The five ledges as a walk through the rock's whole story, ending with the river that cut it",
              "The way back out of the canyon, a mile uphill, starting at four in the morning to beat the heat"
            ],
            "answer": 2,
            "hint": "Paragraph 2 lists each ledge with its age and ends with the river.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "River math",
          "points": [
            "Different bottoms: make them the same first. 3/4 − 1/2 = 3/4 − 2/4 = 1/4.",
            "Feet in a mile versus 4,500: compare.",
            "Writing millions: 1 million is 1 with six zeros, 1,000,000.",
            "Two-step: hours of climb at a rate."
          ],
          "example": "5/6 of an hour minus 1/4 of an hour: 10/12 − 3/12 = 7/12 of an hour."
        },
        "problems": [
          {
            "q": "By the river, the hiker rested in the shade for 2/3 of an hour and soaked in the water for 1/4 of an hour. How much longer was the rest? (write a fraction of an hour)",
            "answer": "5/12",
            "hint": "Make the bottoms the same: 2/3 is 8/12 and 1/4 is 3/12. Then subtract the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The river is 4,500 feet below the rim. A mile is 5,280 feet. How many feet short of a mile is the descent?",
            "answer": "780",
            "hint": "5,280 − 4,500.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The river took about 6 million years to cut the canyon. Write 6 million as a number.",
            "answer": "6000000",
            "accept": [
              "6,000,000"
            ],
            "hint": "6 followed by six zeros.",
            "skill": "Multiplying"
          },
          {
            "q": "The climb out is 4,500 feet at about 500 feet an hour. How many hours is that?",
            "answer": "9",
            "hint": "4,500 ÷ 500.",
            "skill": "Dividing"
          },
          {
            "q": "The hiker starts up at 4 in the morning and climbs 9 hours. What time does the hiker reach the rim? (write the hour, afternoon)",
            "answer": "1",
            "accept": [
              "1:00",
              "13",
              "13:00",
              "1pm",
              "1 pm",
              "1:00pm",
              "1:00 pm",
              "1 p.m.",
              "1p.m.",
              "1 o'clock"
            ],
            "hint": "4 + 9 = 13, which is 1 in the afternoon.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Fact, fact, therefore",
            "points": [
              "The last question is built so that no single paragraph answers it. Take a fact from one and a fact from another.",
              "Say the two facts, then say 'so'. What comes after 'so' is what you are hunting among the choices.",
              "If a choice needs something the log never mentions, it is out, however sensible it sounds standing alone."
            ],
            "example": "Paragraph one: the pass closes when the snow comes. Paragraph three: the last truck went up in September. So nothing more is going over until spring. Neither line says it alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "The river is the newest thing in the canyon and the thing that made it, and it is also the part people have changed.",
                "The water in the river is forty-eight degrees all year round.",
                "Dams do more harm than good wherever they are built.",
                "The river has run cold and clear ever since the canyon was formed, long before there was ever a dam anywhere on the river above it."
              ],
              "answer": 0,
              "hint": "A cold river with a reason behind it, a list of five ledges by age, and a last line calling the canyon a clock. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "And the river, the youngest thing in the canyon and the one that made it, cutting down through all of that about the thickness of a few pages a year, for six million years, to get here."
            },
            {
              "q": "Claim: the dam changed more than the temperature of the water. Which sentence from the log best supports that claim?",
              "choices": [
                "Now it runs cold and clear all year, and the fish that live in it are ones that like cold water, and the sandbars the mud used to build are slowly washing away.",
                "That is the surprise everyone gets: after a mile of heat, the water is forty-eight degrees, green and fast and numbing.",
                "And the river, the youngest thing in the canyon and the one that made it, cutting down through all of that about the thickness of a few pages a year, for six million years, to get here.",
                "The river at the bottom of the canyon is cold."
              ],
              "answer": 0,
              "hint": "'More than the temperature' means the sentence has to name something besides the cold. Two of these are only about how cold the water is, and one is about how the river cut the canyon.",
              "skill": "Finding details",
              "evidence": "Now it runs cold and clear all year, and the fish that live in it are ones that like cold water, and the sandbars the mud used to build are slowly washing away."
            },
            {
              "q": "Why does the log finish with the line about the canyon being a clock rather than a place?",
              "choices": [
                "To warn hikers that the whole walk has to be kept to a strict schedule, hour by hour.",
                "To pull every layer, age and speed on the whole trail into one idea at the end.",
                "To explain how the rangers time the crossing of the Platform.",
                "To describe the sign the hiker read down beside the river."
              ],
              "answer": 1,
              "hint": "That sentence gives you no new fact. Look at what the paragraph before it listed, and ask what single word could hold all of it.",
              "skill": "Author's purpose and structure",
              "evidence": "the canyon is not a place. It is a clock"
            },
            {
              "q": "The log says the river cut down 'about the thickness of a few pages a year'. What is that comparison doing?",
              "choices": [
                "Saying the river has very nearly stopped cutting down into the rock of the canyon",
                "Explaining how the depth of the canyon was measured",
                "Comparing the color of the river with the color of paper",
                "Showing how a rate too slow to watch adds up to a mile given long enough"
              ],
              "answer": 3,
              "hint": "Nobody can sit and watch rock wear away that slowly. Then read the two numbers in the same sentence: how long the cutting went on, and what it produced.",
              "skill": "Word meanings",
              "evidence": "cutting down through all of that about the thickness of a few pages a year, for six million years, to get here"
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the hiker fills every bottle at the river before sleeping. Why do it the night before?",
              "choices": [
                "The water is colder at night than it is in the morning, and cold water keeps better in the bottles through the heat of the day.",
                "The filter only works while there is daylight to see by.",
                "The climb out starts at four in the dark, so the bottles are filled and filtered the night before instead.",
                "The bottles have to soak in the cold river all night before the water in them is clean enough to drink on the way out."
              ],
              "answer": 2,
              "hint": "Paragraph one tells you what the river is and where it comes from. Paragraph three tells you what time the hiker leaves and what is waiting. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "The way out is the same mile, uphill, and it starts at four in the morning to beat the oven."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 5 × 7 means 5 groups of 7.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "5 × 7 = 35."
          },
          "problems": [
            {
              "q": "The hiker lines up granola bars in 4 rows of 6. How many granola bars is that?",
              "answer": "24",
              "hint": "4 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "36 granola bars are set out in 6 equal rows. How many granola bars are in each row?",
              "answer": "6",
              "hint": "36 split into 6 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 360 feet, then 31 more are added and 31 are taken off. What does the log show now?",
              "answer": "360",
              "hint": "Add 360 and 31 first, then take 31 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 2/6 + 2/6 (write a fraction)",
              "answer": "4/6",
              "hint": "Same bottom. 2 + 2 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 4 feet wide and 3 feet long. How many feet is it all the way around the edge?",
              "answer": "14",
              "hint": "Two sides of 4 and two sides of 3: 4 + 4 + 3 + 3.",
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
            "example": "(2 + 4) × 7 = 42: parentheses first, then multiply."
          },
          "problems": [
            {
              "q": "The plan allows 240.5 minutes. The hiker uses 86.45 minutes on the first switchback and 104.8 on the second. How many minutes are left?",
              "answer": "49.25",
              "hint": "Add the two amounts used first, then take that from 240.5. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "10% of the feet counted is 16. How many were counted in all?",
              "answer": "160",
              "hint": "16 is 10 hundredths of the whole: 16 ÷ 10 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The hiker counts 6 lizards and 8 hawks. In its simplest form, what is the ratio of lizards to hawks? (write it like 2:3)",
              "answer": "3:4",
              "accept": [
                "3 to 4"
              ],
              "hint": "Divide both by 2.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The hiker works out (9 + 5) × 8. What is it?",
              "answer": "112",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "The rim ranger station's freezer read −14 degrees at midnight and rose 10 degrees by dawn. What does it read at dawn?",
              "answer": "-4",
              "accept": [
                "−4"
              ],
              "hint": "Start at −14 and count 10 steps up.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the last step first. In (x + 3) × 4 = 32, divide by 4, then take off 3."
            ],
            "example": "(x + 3) × 4 = 32, so x + 3 = 8, so x = 5."
          },
          "problems": [
            {
              "q": "The hiker has 9 minutes to spend and each ledge takes 0.75 minutes. How many ledges is that enough for?",
              "answer": "12",
              "hint": "9 ÷ 0.75.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The number of hikers on the trail rose by 50% to 300. How many hikers were there before?",
              "answer": "200",
              "hint": "300 is 150% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rim ranger station's freezer read 5 degrees when it was switched on, then it fell 16 degrees. What does it read now?",
              "answer": "-11",
              "accept": [
                "−11"
              ],
              "hint": "From 5 down to 0 is 5, and there are 11 left to fall.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 9) × 5 = 105",
              "answer": "12",
              "hint": "Divide both sides by 5 first, then take 9 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 20. The raft on the model is 6 inches long. How many inches long is the real one?",
              "answer": "120",
              "hint": "Every inch on the model is 20 inches for real.",
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
            "example": "y = 3x + 7 when x = 5: 3 × 5 + 7 = 22."
          },
          "problems": [
            {
              "q": "During a flash flood, the river's depth in inches follows the rule y = 5x + 8, where x is the hour. What is y when x = 4?",
              "answer": "28",
              "hint": "Put 4 in for x: 5 × 4 + 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 5² + 3²?",
              "answer": "34",
              "hint": "5 × 5 = 25 and 3 × 3 = 9. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 37-foot rope reaches the top of a 12-foot boulder. How far is the foot of the rope from the base, in feet?",
              "answer": "35",
              "hint": "b² = c² − a² = 1369 − 144 = 1225. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x + 14 − 2x = 62",
              "answer": "8",
              "hint": "Collect the x's first: 6x + 14 = 62.",
              "skill": "Equations"
            },
            {
              "q": "What is 7 × 10^5 ÷ 10^4?",
              "answer": "70",
              "hint": "Dividing subtracts the powers: 10^5 ÷ 10^4 = 10^1. So 7 × 10.",
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
            "When a step says to ignore an earlier one, go back to the total you had before it and carry on from there."
          ],
          "example": "'Start with 20. Take off 5. Ignore that, and add 2 to 20 instead.' You end on 22."
        },
        "skill": "Following directions",
        "steps": [
          "Write the air temperature at sunset: 96.",
          "Divide by the millions of years the river has been cutting: 6.",
          "Multiply by the number of ledges the hiker counted: 5.",
          "Subtract the temperature of the water in the river: 48.",
          "Ignore step 4. The water's temperature stays with the river, so add the hour the walk out begins instead: 4.",
          "Type that total."
        ],
        "prompt": "Your answer:",
        "answer": "84",
        "hint": "Step 5 takes the river's temperature back out of the sum. Go back to your step 3 total and put only the start hour on it."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
