// ODYSSEY — campaign "drift". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "drift",
  "ready": true,
  "kind": "shift",
  "readingLevel": {
    "fk": 5.7,
    "cl": 5.3
  },
  "grade": "5",
  "kindLabel": "Watch",
  "form": "hare",
  "title": "Ice Drift Station",
  "subtitle": "A floe of sea ice, somewhere in the Arctic Ocean",
  "pitch": "Five days at a camp built on a raft of sea ice that is drifting with the ocean underneath it. Drill holes, measure the ice, watch for bears, and find out where the current is taking you before the floe decides for you.",
  "scene": "assets/scene-drift2.jpg",
  "progress": {
    "unit": "days",
    "total": 5
  },
  "dayNoun": "Day",
  "stageNoun": "Day",
  "finalNoun": "Pickup",
  "stages": [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Pickup"
  ],
  "reconNoun": "Ice Log",
  "legs": {
    "recon": "Ice log",
    "nav": "Ice math",
    "orders": "Camp orders",
    "debrief": "Hut"
  },
  "fact": "Sea ice is frozen ocean, and it never stops moving. A camp built on it in the morning is somewhere else by night, and the scientists who live on it track their own position the way a ship does.",
  "finale": {
    "prompt": "The helicopter is inbound and the camp is packed. Which color goes on the marker left on the floe?",
    "options": [
      {
        "label": "Orange",
        "color": "#F28C28"
      },
      {
        "label": "Red",
        "color": "#FF6B6B"
      },
      {
        "label": "Blue",
        "color": "#4FD1FF"
      },
      {
        "label": "Black",
        "color": "#1A1A1A"
      }
    ],
    "done": "Plant it. The floe will carry it out to the Atlantic by summer and melt. That is the whole story of sea ice."
  },
  "patrols": [
    {
      "id": "drift-1",
      "title": "A Raft of Ice",
      "recon": {
        "lesson": {
          "title": "Questions first, then the log",
          "points": [
            "Read the five questions before the log. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Thicknesses and distances are details. Circle them.",
            "The answer is always in the log. You never have to guess."
          ],
          "example": "Question: 'How tall is the tower?' Hunt for 'feet'."
        },
        "title": "Ice Log: The Ground Is Moving",
        "passage": [
          "The camp is four huts, a weather mast and a red tent on a floe of sea ice about a mile across and six feet thick, and the floe is moving. Sea ice is frozen ocean: in winter the top of the Arctic Ocean freezes into a lid of ice, and the lid breaks into pieces called floes. The floes drift with the wind and the currents, bumping and grinding against each other, all winter long. Under the camp is six feet of ice, and under the ice is two miles of cold black water, and there is nothing else. The scientist lands by helicopter with a week of food and a rifle for the bears.",
          "Nobody chose this floe by accident. It was picked from the air for being thick, flat and old: sea ice that has survived a summer or two is stronger and less salty than ice that froze last month. The survey plane found this one by its color, a pale blue where new ice is gray. The first job on the ice is to drill a hole through it with a hand auger, a screw as long as a person, and measure the thickness with a tape hooked under the bottom. Six feet, two inches. The log gets its first number.",
          "The second job is to find out where the floe is going. A satellite beacon on a pole in the middle of camp sends its position every hour. The scientist plots the positions on a chart. By evening there are eight dots in a line, and the line points southeast at about a mile an hour. The camp has moved nine miles since the helicopter left. The scientist writes it down and sets the bear alarm. The alarm is a trip wire around the huts. Then the scientist goes to bed on a bed that is moving."
        ],
        "questions": [
          {
            "q": "How thick is the floe?",
            "choices": [
              "Six inches",
              "Sixty feet",
              "Six feet",
              "Two miles"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1, and the end of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "How does the scientist measure the ice thickness?",
            "choices": [
              "With the satellite beacon that sends the camp's position back to the ship every hour",
              "By reading the pale blue color of the ice from the window of the survey plane",
              "By counting how many feet of black water there are under the camp's four huts",
              "By drilling a hole with a hand auger and hooking a tape under the bottom"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'hand auger'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'floe'?",
            "choices": [
              "A river",
              "A kind of hut",
              "A current",
              "A piece of floating sea ice"
            ],
            "answer": 3,
            "hint": "The sentence 'the lid breaks into pieces called floes'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why was this floe chosen from the air?",
            "choices": [
              "Because it was closest",
              "Because its pale blue color showed it was old ice, which is thicker and stronger",
              "Because it was the biggest",
              "Because ice that froze only last month is less salty and easier to drill through than old ice"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the first three sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "Setting the bear alarm and going to bed on a moving floe",
              "The helicopter landing with a week of food and a rifle",
              "Drilling the hole with a hand auger and measuring six feet two",
              "Tracking where the floe is drifting"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 3 says the second job is 'to find out where the floe is going'.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Drift math",
          "points": [
            "Miles a day: miles an hour × 24.",
            "Hundredths as decimals: 9/100 is 0.09 and 25/100 is 0.25.",
            "Feet to inches: feet × 12, then add the extra inches.",
            "Same bottom: add the tops, so 1/6 + 4/6 = 5/6."
          ],
          "example": "2 miles an hour × 10 hours = 20 miles."
        },
        "problems": [
          {
            "q": "The floe drifts at 1 mile an hour. How many miles will it drift in a day?",
            "answer": "24",
            "hint": "1 × 24.",
            "skill": "Multiplying"
          },
          {
            "q": "Of the 100 holes drilled on the floe, 76 hit ice more than 6 feet thick. Write 76/100 as a decimal.",
            "answer": "0.76",
            "hint": "76 hundredths: two places after the point.",
            "skill": "Decimals"
          },
          {
            "q": "The ice is 6 feet 2 inches thick. A foot is 12 inches. How many inches is that?",
            "answer": "74",
            "hint": "6 × 12 = 72, plus 2.",
            "skill": "Multi-step problems"
          },
          {
            "q": "Under the ice is 2 miles of water. A mile is 5,280 feet. How many feet of water is that?",
            "answer": "10560",
            "accept": [
              "10,560"
            ],
            "hint": "5,280 × 2.",
            "skill": "Multiplying"
          },
          {
            "q": "The scientist spent 3/8 of the day setting up camp and 2/8 drilling. What fraction of the day is that together? (write a fraction)",
            "answer": "5/8",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What all of it is about",
            "points": [
              "Read to the end, then say in one sentence of your own what the whole report was about. Do that before you look at a single choice.",
              "The wrong answers are usually true. They cover one paragraph, or they are wider than anything the report says, or they contradict a line you have already read.",
              "Four more moves follow: prove a claim with one sentence, say what a paragraph is for, work a word out from its sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a mountain hut: who built it, how the stove works, what happens when the weather closes in. 'The stove burns coal' covers one paragraph. 'Mountains are cold' covers nothing. 'One small hut is the only shelter for twenty miles' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The floe under the camp is six feet two inches thick, measured with a tape hooked under the bottom of a hole that was drilled through the ice by hand.",
                "The Arctic is the most dangerous place on Earth to try to work, and no other kind of fieldwork asks a person to sleep on ground that could give way underneath.",
                "Everything at this camp starts from one fact: the ground under it is a piece of floating ice that was chosen with care and is moving all the time.",
                "The floe was picked at random from the air by the survey plane."
              ],
              "answer": 2,
              "hint": "The floe, the choosing, the beacon. One choice is the first measurement in the log, and one is the opposite of the opening line of the second paragraph.",
              "skill": "Central idea and evidence",
              "evidence": "The camp is four huts, a weather mast and a red tent on a floe of sea ice about a mile across and six feet thick, and the floe is moving."
            },
            {
              "q": "Claim: older sea ice makes a better base than ice that froze recently. Which sentence from the report best supports that claim?",
              "choices": [
                "The camp is four huts, a weather mast and a red tent on a floe of sea ice about a mile across and six feet thick, and the floe is moving.",
                "Nobody chose this floe by accident.",
                "The first job on the ice is to drill a hole through it with a hand auger, a screw as long as a person, and measure the thickness with a tape hooked under the bottom.",
                "It was picked from the air for being thick, flat and old: sea ice that has survived a summer or two is stronger and less salty than ice that froze last month."
              ],
              "answer": 3,
              "hint": "The claim compares two ages of ice. Only one sentence puts old ice and new ice next to each other and says which is stronger.",
              "skill": "Finding details",
              "evidence": "It was picked from the air for being thick, flat and old: sea ice that has survived a summer or two is stronger and less salty than ice that froze last month."
            },
            {
              "q": "Why does the report stop to explain what sea ice is, in the middle of describing the camp?",
              "choices": [
                "To explain how a helicopter is able to land on ice at all.",
                "To compare Arctic sea ice with the ice that forms on a lake.",
                "To list the huts and instruments that make up the camp.",
                "Without it, 'the floe is moving' is only a strange sentence; with it, everything the camp does makes sense."
              ],
              "answer": 3,
              "hint": "Cut that explanation out and read the paragraph's first sentence on its own. Ask what a reader would make of its last few words.",
              "skill": "Author's purpose and structure",
              "evidence": "Sea ice is frozen ocean: in winter the top of the Arctic Ocean freezes into a lid of ice, and the lid breaks into pieces called floes. The floes drift with the wind and the currents, bumping and grinding against each other, all winter long"
            },
            {
              "q": "The report ends by saying the scientist 'goes to bed on a bed that is moving'. What does that mean here?",
              "choices": [
                "The bed slides across the floor of the hut in the wind.",
                "The whole floe the camp stands on is drifting, so everything on it is traveling too.",
                "The ice directly under the hut is cracking and shifting, so the floor tilts a little from side to side all night.",
                "The scientist cannot sleep because of the motion."
              ],
              "answer": 1,
              "hint": "Earlier in the paragraph, the line of dots gives a direction and a speed. Whatever is moving there is what the bed is riding on.",
              "skill": "Word meanings",
              "evidence": "By evening there are eight dots in a line, and the line points southeast at about a mile an hour."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why a thick, old floe matters so much here. Why does it?",
              "choices": [
                "A thick floe drifts more slowly than a thin one does, so a camp on old ice stays closer to the spot where the helicopter dropped it.",
                "Only old ice can be drilled through with a hand auger, because ice that froze last month is still too soft to hold the screw straight.",
                "New ice is too bright for a helicopter to land on safely, so the survey plane looks for a floe of the darker gray ice instead.",
                "Under the six feet of ice there is two miles of water and nothing else, and old ice is the strongest kind there is."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you what is under the camp. Paragraph two tells you what kind of ice was chosen and why. Say both, then say 'so'.",
              "skill": "Reading between the lines",
              "evidence": "Under the camp is six feet of ice, and under the ice is two miles of cold black water, and there is nothing else."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 7 × 3 means 7 groups of 3.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "7 × 3 = 21."
          },
          "problems": [
            {
              "q": "The scientist sets out ice-core tubes in 4 rows of 6. How many tubes is that?",
              "answer": "24",
              "hint": "4 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "24 ice-core tubes are set out in 4 equal rows. How many tubes are in each row?",
              "answer": "6",
              "hint": "24 split into 4 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 474 ice samples, then 155 more are added and 20 are taken off. What does the log show now?",
              "answer": "609",
              "hint": "Add 474 and 155 first, then take 20 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 5/8 + 1/8 (write a fraction)",
              "answer": "6/8",
              "hint": "Same bottom. 5 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 3 feet wide and 4 feet long. How many feet is it all the way around the edge?",
              "answer": "14",
              "hint": "Two sides of 3 and two sides of 4: 3 + 3 + 4 + 4.",
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
            "example": "(4 + 3) × 6 = 42: parentheses first, then multiply."
          },
          "problems": [
            {
              "q": "A regular hole takes 13.25 minutes. A long one takes 2.8 times as long. How many minutes does the long one take?",
              "answer": "37.1",
              "hint": "Multiply 1325 × 28 without the points, then put back 3 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "10% of the feet of ice counted is 12. How many were counted in all?",
              "answer": "120",
              "hint": "12 is 10 hundredths of the whole: 12 ÷ 10 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The scientist counts 6 floes and 15 feet of ice. In its simplest form, what is the ratio of floes to feet of ice? (write it like 2:3)",
              "answer": "2:5",
              "accept": [
                "2 to 5"
              ],
              "hint": "Divide both by 3.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The scientist works out (5 + 2) × 10. What is it?",
              "answer": "70",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "It was −11 degrees at midnight and rose 11 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "0",
              "hint": "Start at −11 and count 11 steps up.",
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
              "A two-step equation: undo the last step first. In (x + 2) × 3 = 21, divide by 3, then take off 2."
            ],
            "example": "(x + 2) × 3 = 21, so x + 2 = 7, so x = 5."
          },
          "problems": [
            {
              "q": "The scientist has 40 minutes to spend and each hole takes 2.5 minutes. How many holes is that enough for?",
              "answer": "16",
              "hint": "40 ÷ 2.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The number of ice cores in the freezer fell by 10% to 144. How many were there before?",
              "answer": "160",
              "hint": "144 is 90% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "It was 19 degrees, then it fell 31 degrees. What does the thermometer read?",
              "answer": "-12",
              "accept": [
                "−12"
              ],
              "hint": "From 19 down to 0 is 19, and there are 12 left to fall.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 19) × 8 = 184",
              "answer": "4",
              "hint": "Divide both sides by 8 first, then take 19 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 20. The ice drill on the model is 4 inches long. How many inches long is the real one?",
              "answer": "80",
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
            "example": "y = 6x + 7 when x = 4: 6 × 4 + 7 = 31."
          },
          "problems": [
            {
              "q": "The open water beside camp, in feet across, follows the rule y = 8x + 15, where x is the hour. What is y when x = 5?",
              "answer": "55",
              "hint": "Put 5 in for x: 8 × 5 + 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 3² + 5²?",
              "answer": "34",
              "hint": "3 × 3 = 9 and 5 × 5 = 25. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 13-foot rope reaches the top of a 5-foot weather mast. How far is the foot of the rope from the base, in feet?",
              "answer": "12",
              "hint": "b² = c² − a² = 169 − 25 = 144. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x + 20 − 5x = 36",
              "answer": "8",
              "hint": "Collect the x's first: 2x + 20 = 36.",
              "skill": "Equations"
            },
            {
              "q": "What is 4 × 10^3 ÷ 10^2?",
              "answer": "40",
              "hint": "Dividing subtracts the powers: 10^3 ÷ 10^2 = 10^1. So 4 × 10.",
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
          "example": "If step 5 says 'type it in inches', 3 feet becomes 36."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of huts in camp: 4.",
          "Multiply by the thickness of the floe in feet: 6.",
          "Add the miles the camp drifted before evening: 9.",
          "Subtract the dots on the beacon chart: 8.",
          "The scientist wants this number in inches, not feet. So do not type the number as it stands: multiply it by 12 and type the inches instead."
        ],
        "prompt": "Your answer:",
        "answer": "300",
        "hint": "Do the four sums first, and keep that number. Step 5 then turns it into the unit the log actually uses."
      }
    },
    {
      "id": "drift-2",
      "title": "Thirty Below",
      "recon": {
        "lesson": {
          "title": "Cold and the rules for it",
          "points": [
            "When the log names a danger, the rule follows. Find both.",
            "Temperatures with 'below' are negative. Read the number and the word.",
            "A 'why' question wants the reason the log gives, often right after 'because'."
          ],
          "example": "'The pond ice is thin. Nobody skates alone.' Danger, then rule."
        },
        "title": "Ice Log: The Wind Is the Thermometer",
        "passage": [
          "The thermometer on the mast reads thirty below zero, and the wind is twenty miles an hour, which the scientist's chart says feels like sixty below. Wind is the part that matters. Still air at thirty below is a cold that a person in the right clothes can work in for an hour. Wind at thirty below strips the heat out of anything it touches. Bare skin freezes in about five minutes. The rule on the ice is that nobody works outside alone. Every pair checks each other's faces every few minutes for the white patches that mean frostbite has started, which the person who has them cannot feel.",
          "The clothes are a system: a thin layer against the skin that carries sweat away, a thick layer of fleece or wool for warmth, and a windproof shell. The shell goes over everything, because the warm layers do nothing if the wind blows through them. Mittens, not gloves, because fingers keep each other warm. Goggles, because eyes water in the wind and the water freezes. A person dressed right for the ice looks like a balloon and moves like one.",
          "The work today is the weather mast: a pole with instruments at three heights that measure wind, temperature and how much heat is leaving the ice. The mast matters. The whole point of the camp is to learn how fast the Arctic is losing its ice. The answer is in the numbers on that pole. The scientist changes a battery with bare fingers for forty seconds, which is the limit. Then the fingers go back in the mitten with a sting that lasts an hour. The log says: mast running, battery swapped, fingers fine. The hare is asleep on the lee side of the hut, out of the wind. Its ears are flat."
        ],
        "questions": [
          {
            "q": "What does thirty below with a twenty-mile-an-hour wind feel like, according to the chart?",
            "choices": [
              "Sixty below",
              "Thirty below, the same",
              "Zero, with the wind",
              "Ten below zero, in still air"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "Why mittens instead of gloves?",
            "choices": [
              "Because a windproof shell over the hands stops the wind getting through",
              "Because gloves cannot be pulled off quickly to change a battery",
              "Because sweat freezes inside a glove",
              "Because fingers keep each other warm in a mitten"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'Mittens, not gloves'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what does the 'lee side' of the hut mean?",
            "choices": [
              "The sunny side",
              "The side facing the sea",
              "The side sheltered from the wind",
              "The roof"
            ],
            "answer": 2,
            "hint": "The hare is on the lee side, 'out of the wind'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why do the pairs check each other's faces every few minutes?",
            "choices": [
              "Because frostbite shows as white patches that the person cannot feel, so a partner has to spot it",
              "To check that each other's goggles have not iced over",
              "Because the rule is that nobody works outside alone",
              "Because the wind can blow a hood back unnoticed"
            ],
            "answer": 0,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How the clothing layers work together against the cold and wind",
              "Why still air at thirty below is easier to work in than a strong wind",
              "The white patches of frostbite and the rule about always working in pairs",
              "The weather mast, its three heights of instruments and the battery change"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 2 says 'The clothes are a system'.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Cold math",
          "points": [
            "Degrees between two temperatures below zero: subtract.",
            "Subtracting decimals: line up the points. 2.5 − 1.35 is 2.50 − 1.35 = 1.15.",
            "Layers: count.",
            "Equal groups: how many times × how much each time."
          ],
          "example": "From 10 below to 25 below is 15 degrees colder."
        },
        "problems": [
          {
            "q": "The air is 30 below and the wind makes it feel like 60 below. How many degrees colder does the wind make it feel?",
            "answer": "30",
            "hint": "60 − 30.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The scientist's thermos holds 1.5 quarts of tea and she drank 0.65 quart. How much tea is left? (write a decimal)",
            "answer": "0.85",
            "hint": "Line up the points: 1.50 − 0.65.",
            "skill": "Decimals"
          },
          {
            "q": "The bare-finger limit is 40 seconds. The battery swap takes 40 seconds. If the scientist swaps 3 batteries with a warm-up between each, how many seconds of bare fingers in all?",
            "answer": "120",
            "hint": "3 × 40.",
            "skill": "Multiplying"
          },
          {
            "q": "The mast has instruments at 3 heights and each height has 4 instruments. How many instruments on the mast?",
            "answer": "12",
            "hint": "3 × 4.",
            "skill": "Multiplying"
          },
          {
            "q": "The scientist wears 3 layers on the body, 1 on the hands and 2 on the feet. How many layers in all?",
            "answer": "6",
            "hint": "3 + 1 + 2.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "A sentence that ends the doubt",
            "points": [
              "You are hunting for proof, not for matching words. A sentence can share the claim's subject and prove nothing about it.",
              "Read the claim, then read your pick straight after it. If someone could still ask 'why?', keep looking.",
              "All four choices are real sentences from the report, so being true is where every one of them starts."
            ],
            "example": "Claim: this stove has not been lit for weeks. 'The stove is cast iron' is true and proves nothing. 'There is a bird's nest in the flue' ends the doubt."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "The temperature alone tells you very little out here; the wind decides how long a person can work, and the clothes and the rules are all built around it.",
                "Mittens are worn instead of gloves so that the fingers can share their heat inside one pocket of air, which is why nobody out here ever reaches for a pair of gloves.",
                "Cold weather clothing has improved more than any other piece of equipment used in the far north, and better layers are what makes work at thirty below possible now.",
                "Still air at thirty below is just as dangerous as wind at thirty below, and skin left uncovered freezes in about five minutes whether the air is moving or standing still."
              ],
              "answer": 0,
              "hint": "The chart, the layers, the forty seconds. One choice is one item of clothing, and one is exactly what the first paragraph sets out to deny.",
              "skill": "Central idea and evidence",
              "evidence": "Wind is the part that matters."
            },
            {
              "q": "Claim: the outer layer is what makes the warm layers work at all. Which sentence from the report best supports that claim?",
              "choices": [
                "The work today is the weather mast: a pole with instruments at three heights that measure wind, temperature and how much heat is leaving the ice.",
                "Mittens, not gloves, because fingers keep each other warm.",
                "Every pair checks each other's faces every few minutes for the white patches that mean frostbite has started, which the person who has them cannot feel.",
                "The shell goes over everything, because the warm layers do nothing if the wind blows through them."
              ],
              "answer": 3,
              "hint": "The claim is about one layer making the others work. Find the sentence that puts the shell over the warm layers and says what happens to them without it.",
              "skill": "Finding details",
              "evidence": "The shell goes over everything, because the warm layers do nothing if the wind blows through them."
            },
            {
              "q": "How is the first paragraph organized?",
              "choices": [
                "It lists the instruments carried at the three heights on the mast.",
                "It tells the story of one day's work in the order it happened.",
                "It sets still air at thirty below against wind at thirty below, and then gives the rule that follows from the difference.",
                "It explains how a thermometer is read in very cold weather."
              ],
              "answer": 2,
              "hint": "Two sentences in a row begin with almost the same words and lead to opposite results. Then comes a rule. Name that shape.",
              "skill": "Author's purpose and structure",
              "evidence": "Still air at thirty below is a cold that a person in the right clothes can work in for an hour."
            },
            {
              "q": "The report says wind at thirty below 'strips the heat out of anything it touches'. What does strips mean as it is used here?",
              "choices": [
                "Pulls the warmth away quickly and completely",
                "Takes off a layer of someone's clothing",
                "Cuts into any skin left uncovered",
                "Lays a coating of ice over the surface"
              ],
              "answer": 0,
              "hint": "The next sentence tells you the result, in minutes. Fit the word to that result rather than to clothes.",
              "skill": "Word meanings",
              "evidence": "Wind at thirty below strips the heat out of anything it touches. Bare skin freezes in about five minutes."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the scientist counts the seconds while changing a battery. Why count?",
              "choices": [
                "Skin left out in this wind begins to freeze in minutes, so bare hands are working against a clock.",
                "The battery has to be swapped in one go or the mast stops recording, and a gap in the record would spoil the week's numbers.",
                "The pair working outside have to check each other's faces every forty seconds, which is the number being counted.",
                "The instruments on the mast take a reading only once a minute, so the battery has to be back in before the next one."
              ],
              "answer": 0,
              "hint": "Paragraph one gives you a number of minutes. The last paragraph gives you a number of seconds. Set one against the other.",
              "skill": "Reading between the lines",
              "evidence": "The scientist changes a battery with bare fingers for forty seconds, which is the limit."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 5 means 4 groups of 5.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions: the bottom is how many equal parts; the top is how many are done."
            ],
            "example": "4 × 5 = 20."
          },
          "problems": [
            {
              "q": "Every shift needs 3 hand warmers, and there are 3 shifts. How many hand warmers is that?",
              "answer": "9",
              "hint": "3 groups of 3, so 3 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "The scientist splits 18 hand warmers in half. How many hand warmers is one half?",
              "answer": "9",
              "hint": "Half of 18.",
              "skill": "Dividing"
            },
            {
              "q": "The scientist needs 500 feet of rope and has 199 feet. How many more feet are needed?",
              "answer": "301",
              "hint": "500 − 199.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 6 equal parts and the scientist has finished 5 of them. What fraction is done? (write a fraction)",
              "answer": "5/6",
              "hint": "5 parts out of 6.",
              "skill": "Fractions"
            },
            {
              "q": "The scientist counts 199 snow samples, then 46 more. How many is that?",
              "answer": "245",
              "hint": "199 + 46.",
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
            "example": "6 × 5 − 4 × 2 = 22: both multiplications first, then subtract."
          },
          "problems": [
            {
              "q": "The ice core is 4 4/5 meters long. The scientist cuts it into pieces 2/5 of a meter long. How many pieces is that?",
              "answer": "12",
              "hint": "Make 4 4/5 an improper fraction, 24/5. Then multiply by the flip of 2/5: 24/5 × 5/2.",
              "skill": "Fractions"
            },
            {
              "q": "Of 60 batteries, 50% are dead and struck off the list. How many are left on it?",
              "answer": "30",
              "hint": "50% of 60 is 30. Take that off 60.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The scientist shares 40 hours between two teams in the ratio 3 to 5. How many does the smaller share get?",
              "answer": "15",
              "hint": "3 + 5 = 8 parts. 40 ÷ 8 = 5 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The scientist works out 7 × 12 − 3 × 2. What is it?",
              "answer": "78",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "The coldest reading was −18 degrees and the warmest was −14 degrees. How many degrees apart are they?",
              "answer": "4",
              "hint": "From −18 up to −14.",
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
              "Count the minus signs. An even number gives a plus answer, an odd number a minus: (−2) × (−3) × (−5) = −30.",
              "A two-step equation: undo the outside step first. In 5(x + 1) = 30, divide by 5, then take off 1."
            ],
            "example": "5(x + 1) = 30, so x + 1 = 6, so x = 5."
          },
          "problems": [
            {
              "q": "12 holes took 27 minutes. At the same rate, how many minutes would 16 holes take?",
              "answer": "36",
              "hint": "One hole takes 27 ÷ 12 = 2.25. Then × 16.",
              "skill": "Ratios and percent"
            },
            {
              "q": "An ice core showed 40 layers, and 50% of them were too cracked to read. How many layers was that?",
              "answer": "20",
              "hint": "50% of 40: 50/100 × 40.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Each of the camp's 5 fuel drums loses 3 liters a day to the heater. Write that as −3 a day for each drum. How many more liters did the 5 drums hold 6 days ago? Time before now counts as negative. Work it out as 5 × (−3) × (−6).",
              "answer": "90",
              "hint": "5 × 3 × 6, then count the minus signs. Two make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 8(x + 16) = 200",
              "answer": "9",
              "hint": "Divide both sides by 8 to get x + 16 = 25.",
              "skill": "Equations"
            },
            {
              "q": "A round frame has a radius of 10 centimeters. Using 3.14 for pi, what is its area in square centimeters?",
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
            "example": "Start at 4 and add 7 each step: the 5th number is 4 + 7 × 4 = 32."
          },
          "problems": [
            {
              "q": "The layers counted in the ice core go 12, 15, 18, 21, and on, one total each hour. What is the 9th number in the list?",
              "answer": "36",
              "hint": "It starts at 12 and adds 3 each step. The number you want is 8 steps on from 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 11² − 11?",
              "answer": "110",
              "hint": "11 × 11 = 121, then take 11 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 12 and 35 feet. How long is its longest side, in feet?",
              "answer": "37",
              "hint": "12² + 35² = 1369. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x − 2x = 27",
              "answer": "9",
              "hint": "5 − 2 = 3, so 3x = 27.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 6 meters across and 7 meters deep. Using 3.14 for pi, what is its volume in cubic meters? (The radius is half the distance across.)",
              "answer": "197.82",
              "hint": "The radius is 6 ÷ 2 = 3. Volume = 3.14 × radius × radius × depth: 3.14 × 3 × 3 × 7.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Watch the sign",
          "points": [
            "Below zero is negative. Keep the word.",
            "Read all the steps before the first."
          ],
          "example": "'Start at 20 below and warm by 25' lands at 5 above."
        },
        "skill": "Following directions",
        "steps": [
          "Start with the temperature on the mast: 30 below zero.",
          "Warm it up by 45 degrees.",
          "Multiply what you land on by the layers of clothing: 3.",
          "Subtract the bare-finger limit in seconds, divided by ten: 4.",
          "Step 3 counted the wrong thing. Return to your answer from step 2, multiply it by the minutes bare skin takes to freeze instead: 5, then take step 4's 4 away from that.",
          "Type what is left."
        ],
        "prompt": "Your answer:",
        "answer": "71",
        "hint": "Warming from thirty below by 45 degrees carries you past zero. Step 5 then changes what that number gets multiplied by."
      }
    },
    {
      "id": "drift-3",
      "title": "The Bear",
      "recon": {
        "lesson": {
          "title": "Steps in order",
          "points": [
            "When the log describes what people did in a dangerous moment, the order matters. Follow it.",
            "Distances in yards are details.",
            "'Why not' questions want the reason given for not doing something."
          ],
          "example": "'First the tent, then the stove, then dinner.' What came second? The stove."
        },
        "title": "Ice Log: Four Hundred Yards",
        "passage": [
          "At 6:10 in the morning the bear alarm goes off. The trip wire strung around the camp, five hundred yards out, has been touched. A flare on the wire fires into the sky with a bang. The scientist is out of the sleeping bag and at the hut window in seconds. There, four hundred yards away across the floe, walking slowly toward camp with its head low, is a polar bear. It is the size of a small car and the color of old snow. The bear is not hurrying, because nothing on the ice has ever made a polar bear hurry.",
          "A polar bear is a sea animal that lives on the ice, hunting seals at the holes where they come up to breathe, and it can smell a seal, or a camp, from miles away. It is curious, it is hungry in spring, and it has no reason to be afraid of a hut. The camp's plan is written on the wall and everyone has practiced it: get everyone into one hut, count heads, and start the noise. The scientist fires a second flare, a screamer, that arcs over the bear and bursts with a shriek. The bear stops. It watches the flare land. It sits down.",
          "For forty minutes the bear sits and the scientist watches through the window with the rifle loaded and the safety on. That is because the rifle is the last thing, not the first, and shooting a polar bear is a failure of the plan, not part of it. At 6:50 the bear stands, turns, and walks back the way it came, toward a dark line on the horizon that is open water and seals. The scientist writes it down: bear, 400 yards, two flares, no shot, left of its own accord. Then makes coffee with hands that are not quite steady."
        ],
        "questions": [
          {
            "q": "How far away was the bear when the scientist first saw it?",
            "choices": [
              "Four hundred yards",
              "Forty yards",
              "Four miles out across the floe",
              "Four hundred feet, just past the wire"
            ],
            "answer": 0,
            "hint": "The fifth sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What is the first step of the camp's bear plan?",
            "choices": [
              "Fire a screamer flare over the bear's head at once",
              "Watch the bear from the hut window",
              "Load the rifle and take the safety catch off first",
              "Get everyone into one hut and count heads"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'The camp's plan'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'screamer'?",
            "choices": [
              "A flare that bursts with a loud shriek to scare the bear",
              "The bang that the trip wire's own flare makes when it is set off",
              "The groan that the ice makes under the huts when a crack opens",
              "The bear's roar"
            ],
            "answer": 0,
            "hint": "The sentence 'a second flare, a screamer, that arcs over the bear and bursts with a shriek'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the scientist not shoot the bear?",
            "choices": [
              "Because the rifle is the last resort, and shooting a bear means the plan has failed",
              "Because the rifle is broken",
              "Because a bear four hundred yards away could not be hit at that range with the camp's rifle",
              "Because the camp's plan is written on the wall and the plan says to get everyone into one hut first"
            ],
            "answer": 0,
            "hint": "The first two sentences of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "What a polar bear is, why it comes to a camp, and the first steps of the plan",
              "Coffee",
              "The trip wire",
              "The horizon"
            ],
            "answer": 0,
            "hint": "Paragraph 2 explains the bear and then the plan.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Bear math",
          "points": [
            "Minutes between clock times: count.",
            "Volume of a box: length × width × height. 4 × 2 × 2 = 16 cubic feet.",
            "Flares fired: count.",
            "Yards a minute: yards ÷ minutes."
          ],
          "example": "7:15 to 7:45 is 30 minutes."
        },
        "problems": [
          {
            "q": "The bear arrived at 6:10 and left at 6:50. How many minutes was it there?",
            "answer": "40",
            "hint": "From 10 to 50.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The bear-proof food box is 5 feet long, 3 feet wide and 3 feet tall. How many cubic feet does it hold?",
            "answer": "45",
            "hint": "Length × width × height: 5 × 3 first, then times 3.",
            "skill": "Volume"
          },
          {
            "q": "Later the bear walked 400 yards back toward the open water in 10 minutes. How many yards a minute is that?",
            "answer": "40",
            "hint": "400 ÷ 10.",
            "skill": "Dividing"
          },
          {
            "q": "The camp has 12 flares and used 2. How many are left?",
            "answer": "10",
            "hint": "12 − 2.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The trip wire runs around the camp in a square 1,000 yards on each side. How many yards of wire is that?",
            "answer": "4000",
            "hint": "1,000 + 1,000 + 1,000 + 1,000, or 4 × 1,000.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The paragraph that goes first",
            "points": [
              "Ask what each paragraph is for: setting a scene, giving a cause, comparing two things, walking an order, or naming a problem and its answer.",
              "A paragraph that explains something before it is needed is usually there so the next paragraph reads as sense rather than luck.",
              "Cut it out in your head. Whatever you can no longer explain is what it was doing."
            ],
            "example": "A report on a rescue explains the radio system before the accident happens. That is not a lesson in radios. It is there so that 'the call went out at once' means something when it does."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A bear at four hundred yards is handled by a plan practiced in advance, and the rifle is the part of that plan that is not meant to be used.",
                "A polar bear hunts seals at the holes where they come up to breathe, and it can smell a seal, or a camp full of people, from miles away across the open ice.",
                "Polar bears are the most dangerous animals anywhere in the world, and no camp on the sea ice can count on one turning away once it has started to come.",
                "Shooting the bear is the first step of the camp's written plan."
              ],
              "answer": 0,
              "hint": "The alarm, the flares, the forty minutes at the window. One choice is a fact about bears in general, and one is the opposite of what the last paragraph says in so many words.",
              "skill": "Central idea and evidence",
              "evidence": "because the rifle is the last thing, not the first, and shooting a polar bear is a failure of the plan, not part of it"
            },
            {
              "q": "Claim: the bear had no reason to be wary of the camp. Which sentence from the report best supports that claim?",
              "choices": [
                "There, four hundred yards away across the floe, walking slowly toward camp with its head low, is a polar bear.",
                "A polar bear is a sea animal that lives on the ice, hunting seals at the holes where they come up to breathe, and it can smell a seal, or a camp, from miles away.",
                "The bear stops.",
                "It is curious, it is hungry in spring, and it has no reason to be afraid of a hut."
              ],
              "answer": 3,
              "hint": "Two of these describe what the bear did in the moment, and one is about how it hunts. The claim is about how it feels toward a camp.",
              "skill": "Finding details",
              "evidence": "It is curious, it is hungry in spring, and it has no reason to be afraid of a hut."
            },
            {
              "q": "Why does the report explain what a polar bear is and does before it says what the camp did?",
              "choices": [
                "It shows why the bear was coming and why it was not frightened, so the plan reads as an answer to that rather than to panic.",
                "It shows that the bear was not really dangerous, since an animal that sits down and watches a flare land was never going to come any closer.",
                "It explains how a trip wire and a flare are set up around the huts, so a reader knows what it was that fired into the sky at ten past six.",
                "It compares polar bears with the seals that they hunt."
              ],
              "answer": 0,
              "hint": "Take those two sentences out and read the plan again. The plan still works, but you no longer know what it is up against.",
              "skill": "Author's purpose and structure",
              "evidence": "It is curious, it is hungry in spring, and it has no reason to be afraid of a hut."
            },
            {
              "q": "The report says the rifle 'is the last thing, not the first'. What does that mean here?",
              "choices": [
                "It is only for a situation in which everything else in the plan has already failed.",
                "It is the last item to be packed into the helicopter at the end of the week, after the huts and the instruments have gone.",
                "It is kept at the back of the hut, well away from the door.",
                "It has to be loaded only once a bear has actually been seen, and hangs empty on its hook the rest of the week."
              ],
              "answer": 0,
              "hint": "The rest of the sentence tells you what firing it would count as. Fit the phrase to that word.",
              "skill": "Word meanings",
              "evidence": "because the rifle is the last thing, not the first, and shooting a polar bear is a failure of the plan, not part of it"
            },
            {
              "q": "Paragraphs 2 and 3 together suggest why the bear finally left. What made it go?",
              "choices": [
                "The noise gave it a reason to stop, and there was better hunting toward the open water it walked back to.",
                "The rifle was pointed at it through the window of the hut.",
                "The flare on the trip wire went off for a second time.",
                "The scientist went outside and shouted until it moved."
              ],
              "answer": 0,
              "hint": "One paragraph tells you what a polar bear is actually looking for. The other tells you what is on the horizon in the direction it walked. Neither one alone is the reason.",
              "skill": "Reading between the lines",
              "evidence": "At 6:50 the bear stands, turns, and walks back the way it came, toward a dark line on the horizon that is open water and seals."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 6 × 7 means 6 groups of 7.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: the bigger top is the bigger fraction."
            ],
            "example": "6 × 7 = 42."
          },
          "problems": [
            {
              "q": "The scientist carries 4 flares on each of 2 trips. How many flares is that?",
              "answer": "8",
              "hint": "2 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "Each section of trip wire uses 9 yards. The scientist has 36 yards of wire. How many sections can be made?",
              "answer": "4",
              "hint": "How many 9s fit into 36?",
              "skill": "Dividing"
            },
            {
              "q": "The bear walked 280 yards in the morning and 381 yards in the evening. How many more yards in the evening?",
              "answer": "101",
              "hint": "381 − 280.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 4/8 or 7/8? (write a fraction)",
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
            "example": "(6 − 1) × (2 + 3) = 25: each set of parentheses first."
          },
          "problems": [
            {
              "q": "The scientist has 58.3 minutes of drilling. Each hole takes 2.65 minutes. How many holes is that enough for?",
              "answer": "22",
              "hint": "Move both points 2 places to the right: 5830 ÷ 265.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 yards, 75 are set aside. Out of 120 yards, how many is that?",
              "answer": "90",
              "hint": "120 is 1.2 hundreds, so 1.2 × 75.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The scientist divides 10 minutes of work in the ratio 2 to 3. How many minutes is the larger share?",
              "answer": "6",
              "hint": "5 parts in all, so one part is 2 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The scientist works out (12 − 5) × (4 + 13). What is it?",
              "answer": "119",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three readings came in: −5, −2 and 3 degrees. Which is the coldest?",
              "answer": "-5",
              "accept": [
                "−5"
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
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "x ÷ 3 − 5 = 4, so x ÷ 3 = 9, so x = 27."
          },
          "problems": [
            {
              "q": "The whole job, start to finish, takes 6 minutes, at 0.75 minutes for each hole. One hole is already done. How many holes are left?",
              "answer": "7",
              "hint": "6 ÷ 0.75 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The safety rule says the bear fence may be stretched by no more than 20%. It starts at 80 yards long. What is the longest it may be, in yards?",
              "answer": "96",
              "hint": "20% of 80 is 16. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer fell 17 degrees from −18 degrees. What does it read?",
              "answer": "-35",
              "accept": [
                "−35"
              ],
              "hint": "Falling takes it further below zero: start at −18 and go down 17 more.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 6 − 21 = 10",
              "answer": "186",
              "hint": "Add 21 to both sides, then multiply by 6.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 cm for every 25 meters. How many cm are needed for 400 meters?",
              "answer": "16",
              "hint": "400 ÷ 25.",
              "skill": "Ratios and percent"
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
            "example": "A line starts at 2 and climbs 4 each step: after 7 steps it is 4 × 7 + 2 = 30."
          },
          "problems": [
            {
              "q": "A line passes through (0, 15) and (9, 60). What is its slope?",
              "answer": "5",
              "hint": "Slope is the rise over the run: 45 ÷ 9.",
              "skill": "Linear relationships"
            },
            {
              "q": "The bear fence is 9² yards long. A second fence is twice as long. How many yards long is the second fence?",
              "answer": "162",
              "hint": "9² is 81. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The scientist goes 8 feet east and then 15 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "17",
              "hint": "The two legs make a right angle: 8² + 15² = 289.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 8x + 18 and 5x + 33 come to the same number?",
              "answer": "5",
              "hint": "Set them equal, take 5x off both sides, then take 18 off.",
              "skill": "Equations"
            },
            {
              "q": "The scientist writes down 5 × 10^3. Then the scientist needs a number ten times as big. Written out in full, what is the new number?",
              "answer": "50000",
              "hint": "Ten times adds one to the power: 5 × 10^4.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Only",
          "points": [
            "'Only' means most of the list does not count.",
            "Sort first, then calculate."
          ],
          "example": "'Count only the red boats: RED, BLUE, RED, RED' is three."
        },
        "skill": "Following directions",
        "steps": [
          "The bear plan on the hut wall has these steps: HUT, COUNT HEADS, FLARE, SCREAMER, RIFLE.",
          "Two of them were carried out this morning: the flare on the trip wire and the screamer. The rifle was loaded but never fired, so it does not count. Write that count: 2.",
          "Multiply that count by the minutes the bear sat on the ice: 40.",
          "Now hold that number up against the yards between the hut and the bear: 400.",
          "Type your number, unless it is smaller than 400, in which case type SAFE instead."
        ],
        "prompt": "Your answer:",
        "answer": "SAFE",
        "accept": [
          "safe",
          "Safe",
          "SAFE.",
          "safe."
        ],
        "hint": "Step 2 tells you how many of the plan's steps were used. Multiply by the minutes, then read step 5 before you type."
      }
    },
    {
      "id": "drift-4",
      "title": "The Crack",
      "recon": {
        "lesson": {
          "title": "A change overnight",
          "points": [
            "When the log describes something new, what changed and why are both details.",
            "Measurements in inches and feet are exact.",
            "'What did they decide' wants the plan from the log."
          ],
          "example": "'The puddle was a foot across at noon and three feet by dinner.' What changed? It grew."
        },
        "title": "Ice Log: A Line Across the Floe",
        "passage": [
          "The noise starts at two in the morning, a groan under the huts like a door the size of a field. By daylight there is a crack across the floe, straight, north edge to south, a hundred yards from camp. At dawn it is an inch wide and black. Sea ice cracks when two floes push against each other or pull apart, and the wind shifted in the night from north to west, so the floe is being pulled. By nine the crack is a foot wide. By noon it is a yard, and there is open water in it, steaming in the cold.",
          "A crack that opens is called a lead, and a lead is both a danger and a gift. The danger is plain: a camp on the wrong side of a widening lead is a camp on a smaller floe, and a floe can break again. The gift is that open water in winter is where the ocean and the air meet, where heat pours out of the sea into the sky. The instruments on the mast will measure more in one afternoon beside a lead than in a week of solid ice. The scientist moves a spare sensor to the edge of the lead on a long cable.",
          "Then the camp decides. The huts are on the big side of the crack, the side with the helicopter's landing marks, and the ice under them is still six feet. The rule for a lead is a line in the log: if it reaches a hundred feet wide or the floe breaks a second time, call the ship and pack. By evening the lead is thirty feet wide and has stopped growing, and the wind has dropped. A skin of new ice is already forming across it, gray and thin. The scientist logs the width every hour all night and does not sleep much."
        ],
        "questions": [
          {
            "q": "How wide was the crack at dawn?",
            "choices": [
              "A foot across",
              "An inch",
              "A yard across",
              "Thirty feet"
            ],
            "answer": 1,
            "hint": "The third sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What is the rule for packing up the camp?",
            "choices": [
              "If it snows",
              "If the bear comes back",
              "If the wind shifts",
              "If the lead reaches a hundred feet wide or the floe breaks a second time"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the sentence with 'The rule for a lead'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'lead'?",
            "choices": [
              "A heavy metal",
              "The person in charge",
              "A crack in sea ice that has opened into a channel of water",
              "A rope"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is a lead a gift to the scientist?",
            "choices": [
              "Because a camp that ends up on the wrong side of a widening lead will be left on a smaller floe that can break again",
              "Because open water in winter lets heat pour from the sea into the air, and the instruments measure a lot there",
              "Because the wind shifted in the night from north to west and the floe is being pulled apart from both ends at once",
              "Because a skin of new gray ice forms across a lead overnight and the instruments can then be walked straight out onto it"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the two sentences beginning 'The gift is'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The crack appearing and widening through the day",
              "The wind",
              "The helicopter",
              "The steam"
            ],
            "answer": 0,
            "hint": "Paragraph 1 follows the crack from the noise at two in the morning to a yard wide at noon.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Lead math",
          "points": [
            "Inches to feet to yards: 12 inches in a foot, 3 feet in a yard.",
            "How much it grew: the later width minus the earlier one.",
            "How much more room: the limit minus what you have now.",
            "Counting every hour from start to end: the hours between, plus one for the start."
          ],
          "example": "A yard is 36 inches."
        },
        "problems": [
          {
            "q": "The crack was 1 inch at dawn and 36 inches (a yard) at noon. How many inches did it grow?",
            "answer": "35",
            "hint": "36 − 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "It grew from 1 foot wide at 9:00 to 3 feet wide at noon. How many feet did it grow in those 3 hours?",
            "answer": "2",
            "hint": "3 − 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The lead is 30 feet wide by evening. The pack-up rule is 100 feet. How many more feet could it open before the rule?",
            "answer": "70",
            "hint": "100 − 30.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The crack is 100 yards from camp. A yard is 3 feet. How many feet is that?",
            "answer": "300",
            "hint": "100 × 3.",
            "skill": "Multiplying"
          },
          {
            "q": "The scientist logs the width every hour from 6 in the evening to 6 in the morning. How many entries is that, counting both ends?",
            "answer": "13",
            "hint": "12 hours, plus one for the start.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Pictures that carry a fact",
            "points": [
              "Cover the word or phrase with a finger and read the sentence with a gap in it. What belongs there?",
              "A comparison is not decoration. 'A cry like a kettle' is telling you something exact about the sound.",
              "Slot each choice back into the sentence. Three of them will make the report say something it never said."
            ],
            "example": "'The engine coughed twice and died.' Nothing has a chest. Those two words tell you it faltered before it stopped, and the sentence never says so plainly."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "By noon the crack was a yard wide with open water in it, steaming in the cold, after starting the day as a black line only an inch across at dawn and widening all morning.",
                "A crack across the floe is at once a threat to the camp and the best measurement of the week, and it is handled with a written rule and a night of watching.",
                "Cracks in the sea ice are the main cause of accidents in the Arctic, and more camps are lost to a floe splitting underneath them than to any other danger out there.",
                "The camp called the ship and packed as soon as the crack opened, because the rule written in the log is that any open water at all ends the week out on the floe."
              ],
              "answer": 1,
              "hint": "The groan at two in the morning, the danger and the gift, the rule in the log. One choice is a width from the first paragraph, and one is the opposite of what happens by evening.",
              "skill": "Central idea and evidence",
              "evidence": "A crack that opens is called a lead, and a lead is both a danger and a gift."
            },
            {
              "q": "Claim: open water in winter is where the ocean gives its heat to the air. Which sentence from the report best supports that claim?",
              "choices": [
                "A crack that opens is called a lead, and a lead is both a danger and a gift.",
                "The instruments on the mast will measure more in one afternoon beside a lead than in a week of solid ice.",
                "The scientist moves a spare sensor to the edge of the lead on a long cable.",
                "The gift is that open water in winter is where the ocean and the air meet, where heat pours out of the sea into the sky."
              ],
              "answer": 3,
              "hint": "The claim names heat leaving the sea. Only one of these sentences follows the heat in a direction.",
              "skill": "Finding details",
              "evidence": "The gift is that open water in winter is where the ocean and the air meet, where heat pours out of the sea into the sky."
            },
            {
              "q": "How is the second paragraph organized?",
              "choices": [
                "It gives the width of the crack hour by hour in order.",
                "It explains what causes the wind to shift during the night.",
                "It names two sides of the same thing, the danger and the gift, and then takes them one at a time.",
                "It states a rule and then shows the camp breaking it."
              ],
              "answer": 2,
              "hint": "The first sentence of the paragraph announces a pair. Read what each of the next two sentences begins with.",
              "skill": "Author's purpose and structure",
              "evidence": "A crack that opens is called a lead, and a lead is both a danger and a gift."
            },
            {
              "q": "The report says the noise was 'a groan under the huts like a door the size of a field'. What is that comparison telling you?",
              "choices": [
                "There is a hatch in the ice underneath the camp that swings open and shut as the floe moves.",
                "The sound was very low and very loud, as though something huge were slowly moving.",
                "The doors of the huts had been left standing open and were banging in the wind that shifted in the night.",
                "The sound was coming from the helicopter landing marks on the far side of the camp, a hundred yards off."
              ],
              "answer": 1,
              "hint": "Picture a door, then make it enormous, then imagine the noise it would make. The next sentence tells you what was actually happening to the ice.",
              "skill": "Word meanings",
              "evidence": "The noise starts at two in the morning, a groan under the huts like a door the size of a field. By daylight there is a crack across the floe, straight, north edge to south, a hundred yards from camp"
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the camp stayed instead of calling the ship. Why stay?",
              "choices": [
                "The lead stopped at thirty feet, well inside the width the rule allows, and the huts sit on the big side on six feet of ice.",
                "The helicopter could not fly while the wind was blowing from the west, so the camp had no choice but to stay.",
                "The crack froze over completely before the evening was out, so there was no open water left at all.",
                "There was no radio on the floe to call the ship with, so the camp had to wait for the helicopter."
              ],
              "answer": 0,
              "hint": "Paragraph one follows the crack from an inch to a yard. The last paragraph gives the number that would force a decision. Compare the two.",
              "skill": "Reading between the lines",
              "evidence": "The rule for a lead is a line in the log: if it reaches a hundred feet wide or the floe breaks a second time, call the ship and pack."
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
              "Fractions with the same bottom: add the tops."
            ],
            "example": "4 × 6 = 24."
          },
          "problems": [
            {
              "q": "The scientist puts 3 flags beside each of 9 leads. How many flags is that?",
              "answer": "27",
              "hint": "9 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "The scientist drills 9 holes in the ice, each the same depth, for 27 feet in all. How many feet deep is each hole?",
              "answer": "3",
              "hint": "How many 9s make 27?",
              "skill": "Dividing"
            },
            {
              "q": "The scientist counted 159 inches, then found 82 more, then 55 more. How many inches in all?",
              "answer": "296",
              "hint": "159 + 82 first. Then add 55.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The scientist finished 1/6 of the day's work before the break and 3/6 after. What fraction is done? (write a fraction)",
              "answer": "4/6",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "There were 1,000 inches of measuring tape on the roll at the start. 485 inches have been used. How many inches are left?",
              "answer": "515",
              "hint": "1,000 − 485.",
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
            "example": "3 × (9 − 4) + 8 = 23: parentheses, then multiply, then add."
          },
          "problems": [
            {
              "q": "The crack in the ice widens 7/12 of a meter in 7/9 of an hour. At that rate, how many meters does it widen in one hour? (write a fraction)",
              "answer": "3/4",
              "hint": "For one hour, divide the amount by the time: 7/12 ÷ 7/9 = 7/12 × 9/7. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "Of 160 inches, 10% are set aside. How many is that?",
              "answer": "16",
              "hint": "10% of 160: 10% is 10/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 2 feet the crack widens, the camp sets out 5 flags. If it widens 10 feet, how many flags?",
              "answer": "25",
              "hint": "10 ÷ 2 = 5 groups. Each group has 5 flags.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The scientist works out 5 × (11 − 3) + 11. What is it?",
              "answer": "51",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn it was −11 degrees. By noon it was 9 degrees. By how many degrees did it rise?",
              "answer": "20",
              "hint": "From −11 up to 0 is 11, then 9 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 22 ÷ 4 = 5.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "One minus sign makes a minus answer: 30 ÷ (−5) = −6. Two make a plus: (−30) ÷ (−5) = 6.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "5x + 4 = 39, so 5x = 35, so x = 7."
          },
          "problems": [
            {
              "q": "20 holes needed 70 minutes altogether. How many minutes is that for one hole?",
              "answer": "3.5",
              "hint": "A rate is the total shared out: 70 ÷ 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crack was 60 inches wide at the first check. By the second check its width had grown by 50%. How many inches wide was it then?",
              "answer": "90",
              "hint": "50% of 60 is 30. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On the floe the temperature falls 3 degrees every hour. Write that as −3 an hour. When was it 42 degrees warmer than it is now? Work it out as 42 ÷ (−3), and write hours before now as a negative number.",
              "answer": "-14",
              "accept": [
                "−14"
              ],
              "hint": "42 ÷ 3, and one minus sign makes the answer negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 2x + 18 = 30",
              "answer": "6",
              "hint": "Take 18 off both sides first, then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "A round dial is 20 inches across. Using 3.14 for pi, how many inches is it around the edge?",
              "answer": "62.8",
              "hint": "Around the edge = 3.14 × the distance across. 3.14 × 20.",
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
            "example": "Start at 3 and add 6 each hour: after 5 hours, 6 × 5 + 3 = 33."
          },
          "problems": [
            {
              "q": "The crack is 5 inches wide and widens 8 inches every hour. After 4 hours, how many inches wide is it?",
              "answer": "37",
              "hint": "This is the straight-line rule y = mx + b: 8 × 4 + 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 225 square feet. How long is one side, in feet?",
              "answer": "15",
              "hint": "A square's area is side × side. What number times itself makes 225?",
              "skill": "Powers and roots"
            },
            {
              "q": "The scientist runs a rope from the top of a 5-foot weather mast to a point 12 feet away on the ice. How long is the rope, in feet?",
              "answer": "13",
              "hint": "Right triangle: a² + b² = c². 5² + 12² = 25 + 144 = 169. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x + 23 = 3x + 39",
              "answer": "4",
              "hint": "Take 3x off both sides to get 4x + 23 = 39, then take 23 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 feet and is 3 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (volume = pi × radius × radius × depth)",
              "answer": "942",
              "hint": "3.14 × 10 × 10 = 314, then × 3.",
              "skill": "Area and perimeter"
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
          "Write the width of the lead by evening in feet: 30.",
          "Add the thickness of the ice under the huts in feet: 6. Keep this total.",
          "Now start a second total from the yards between the crack and the camp: 100.",
          "Divide by the hour the groaning under the huts started: 2.",
          "Two totals stand now, the one from step 2 and the one from step 4. The log records the larger. Type it."
        ],
        "prompt": "Your answer:",
        "answer": "50",
        "hint": "Step 3 starts fresh; it does not carry the first total forward. Step 5 asks which of the two the log keeps."
      }
    },
    {
      "id": "drift-5",
      "title": "Pickup",
      "recon": {
        "lesson": {
          "title": "The whole week, in order",
          "points": [
            "The last log looks back over the five days. A 'mostly about' question wants the big point, not one detail.",
            "Total miles and counts are details.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'The bus carried us ninety miles in two days.' How far? Ninety miles."
        },
        "title": "Ice Log: Two Hundred Miles From Where We Started",
        "passage": [
          "The helicopter is due at noon, and it will not land where it dropped the camp, because the camp is not there. The beacon's dots on the chart make a long curve, southeast and then south. The last dot is two hundred and six miles from the first. The floe has carried the camp that far in five days without anyone feeling it move. Once the wind rose, it went nearly two miles an hour. The scientist radios the position at ten, and again at eleven, because in an hour the floe will have moved nearly two miles from where it was at ten.",
          "The week goes into the log as a list. Day one: landed, drilled, six feet two inches, drifting southeast. Day two: mast up, thirty below, wind twenty, fingers fine. Day three: bear, four hundred yards, two flares, no shot. Day four: lead opened to thirty feet, new ice by night, camp on the big side. Day five: packed. Every number on the mast, every hour of the lead, every dot of the drift, goes in a box for the ship, and the boxes are the reason for the week.",
          "The camp comes off the ice in the order it went on, backward: instruments first, huts last, so that there is always somewhere warm to stand until the rotors are turning. The last thing left on the floe is a marker on a pole with the camp's number. The floe will carry it south for months and out into the Atlantic by summer. There the ice will melt and the pole will sink. That is what sea ice does. The scientist watches the floe from the helicopter window until it is one pale shape among a thousand, and cannot tell which one it was."
        ],
        "questions": [
          {
            "q": "How far did the floe carry the camp in five days?",
            "choices": [
              "Twenty miles",
              "Two hundred and six miles",
              "Six miles",
              "A thousand miles"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the third sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What is the last thing left on the floe?",
            "choices": [
              "The spare sensor on its long cable at the edge of the lead",
              "The four huts, which come off the ice last of all",
              "A marker on a pole with the camp's number",
              "The weather mast with its instruments at three heights"
            ],
            "answer": 2,
            "hint": "Paragraph 3, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what are the 'rotors'?",
            "choices": [
              "The huts' heaters",
              "The helicopter's spinning blades",
              "The beacon",
              "The ice drills"
            ],
            "answer": 1,
            "hint": "There is 'somewhere warm to stand until the rotors are turning', that is, until the helicopter is ready.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the scientist radio the position twice, at ten and eleven?",
            "choices": [
              "Because the beacon on its pole sends its own position back to the ship only once in every hour",
              "Because the radio at the camp can only reach the ship when the aerial is pointed south at the hour",
              "Because the camp is packed in the order it went on and the position changes as each hut comes down",
              "Because the floe moves nearly two miles an hour, so the position changes between the calls"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The ship",
              "How the camp comes off the ice in the order it went on, only backward",
              "The week summed up day by day, and why the boxes of data matter",
              "The beacon's dots curving southeast and then south across the ship's chart"
            ],
            "answer": 2,
            "hint": "Paragraph 2 lists day one through day five and ends with the boxes.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Pickup math",
          "points": [
            "Miles over days: divide.",
            "Different bottoms: make them the same first. 1/2 + 1/5 = 5/10 + 2/10 = 7/10.",
            "Boxes times pounds: cargo weight.",
            "What is left: the total minus what is used."
          ],
          "example": "150 miles in 6 days is 150 ÷ 6 = 25 miles a day."
        },
        "problems": [
          {
            "q": "The floe drifted 206 miles in 5 days. About how many miles a day is that? (round down)",
            "answer": "41",
            "hint": "206 ÷ 5 is 41 with 1 left over.",
            "skill": "Dividing"
          },
          {
            "q": "The scientist spent 1/3 of the last day packing and 1/4 of it loading the helicopter. How much of the day is that? (write a fraction)",
            "answer": "7/12",
            "hint": "Make the bottoms the same: 1/3 is 4/12 and 1/4 is 3/12. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The camp packs 14 boxes of data and gear at 40 pounds each. How many pounds is that?",
            "answer": "560",
            "hint": "14 × 40.",
            "skill": "Multiplying"
          },
          {
            "q": "The helicopter carries 1,200 pounds. After 560 pounds of boxes, how many pounds are left for people?",
            "answer": "640",
            "hint": "1,200 − 560.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The ice was 6 feet 2 inches on day one and 6 feet on day five. How many inches thinner is it?",
            "answer": "2",
            "hint": "6 feet 2 inches minus 6 feet.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Two ends of one thread",
            "points": [
              "The last question is never answered in one place. Plan on one fact from one paragraph and one from another.",
              "Say the two facts out loud, then say 'so'. Whatever comes after 'so' is usually sitting there in the choices.",
              "A choice that needs something the report never mentions is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the tide covers the causeway twice a day. Paragraph three: the doctor visits the island on Tuesday mornings. So the visit is timed around the tide. Neither line says that by itself."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The last dot on the chart is two hundred and six miles from the first, along a curve southeast and then south.",
                "The camp comes off the ice and the numbers go into boxes, and the floe drifts on south whether anybody is standing on it or not.",
                "A helicopter is the only way to reach the Arctic in winter, and it can only fly when the wind drops.",
                "The helicopter lands in the same place it dropped the camp five days ago, at noon on the last day."
              ],
              "answer": 1,
              "hint": "The drift, the list of five days, the marker left on the pole. One choice is a distance, and one is denied by the very first sentence.",
              "skill": "Central idea and evidence",
              "evidence": "Every number on the mast, every hour of the lead, every dot of the drift, goes in a box for the ship, and the boxes are the reason for the week."
            },
            {
              "q": "Claim: the camp's position has to be sent more than once on the last morning. Which sentence from the report best supports that claim?",
              "choices": [
                "Every number on the mast, every hour of the lead, every dot of the drift, goes in a box for the ship, and the boxes are the reason for the week.",
                "The camp comes off the ice in the order it went on, backward: instruments first, huts last, so that there is always somewhere warm to stand until the rotors are turning.",
                "The scientist radios the position at ten, and again at eleven, because in an hour the floe will have moved nearly two miles from where it was at ten.",
                "The last thing left on the floe is a marker on a pole with the camp's number."
              ],
              "answer": 2,
              "hint": "The claim is about sending something twice. Only one sentence gives two clock times and a reason for the second one.",
              "skill": "Finding details",
              "evidence": "The scientist radios the position at ten, and again at eleven, because in an hour the floe will have moved nearly two miles from where it was at ten."
            },
            {
              "q": "Why is the second paragraph written as a list of five days?",
              "choices": [
                "It gives the plan for the following week out on the ice.",
                "It gathers the whole week into one place, so the reader can see the numbers the boxes are actually made of.",
                "It explains how a satellite beacon reports its position.",
                "It compares this camp with the one that came before it."
              ],
              "answer": 1,
              "hint": "None of those five lines is new to you. Read the sentence that follows the list and ask what the list was setting up.",
              "skill": "Author's purpose and structure",
              "evidence": "The week goes into the log as a list."
            },
            {
              "q": "The report says the camp comes off the ice 'in the order it went on, backward'. What does that mean here?",
              "choices": [
                "The helicopter flies back out along the route it came in by.",
                "The instruments are packed into the same crates they arrived in.",
                "The huts are taken apart starting from the back wall.",
                "Whatever was set up first is taken down last."
              ],
              "answer": 3,
              "hint": "The rest of the sentence names what goes first and what goes last, and gives the reason. Read the phrase as a summary of that.",
              "skill": "Word meanings",
              "evidence": "The camp comes off the ice in the order it went on, backward: instruments first, huts last, so that there is always somewhere warm to stand until the rotors are turning."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the scientist cannot pick the floe out from the helicopter window. Why not?",
              "choices": [
                "The helicopter is flying too high for anything on the ice below to be picked out, even a marker standing on a pole.",
                "The marker pole has already sunk down through the ice.",
                "It was never a fixed place at all, only one drifting piece of ice among thousands that look alike.",
                "A cloud is sitting over the place where the camp used to be, so the floe stays hidden until the weather clears."
              ],
              "answer": 2,
              "hint": "Paragraph one tells you the camp was never where it was left. The last paragraph tells you what the floe looks like from above. Put the two facts together.",
              "skill": "Reading between the lines",
              "evidence": "The scientist watches the floe from the helicopter window until it is one pale shape among a thousand, and cannot tell which one it was."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 6 × 5 means 6 groups of 5.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add or take away the tops; the bottom stays."
            ],
            "example": "6 × 5 = 30."
          },
          "problems": [
            {
              "q": "The scientist counted 7 boxes yesterday and three times as many today. How many boxes today?",
              "answer": "21",
              "hint": "Three times 7: 7 + 7 + 7.",
              "skill": "Multiplying"
            },
            {
              "q": "The scientist packs 28 boxes into flights of 7. How many flights is that?",
              "answer": "4",
              "hint": "How many 7s make 28?",
              "skill": "Dividing"
            },
            {
              "q": "The scientist starts with 429 sample bags and uses 94. How many are left?",
              "answer": "335",
              "hint": "429 − 94.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "1/8 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "7/8",
              "hint": "The whole job is 8/8. Take 1/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square box mat is 8 squares on each side. How many squares is that?",
              "answer": "64",
              "hint": "8 rows of 8.",
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
            "example": "8 + 3 × 6 = 26: multiply first, then add."
          },
          "problems": [
            {
              "q": "The plan allows 320.5 minutes. The scientist uses 78.9 minutes on the first hole and 104.8 on the second. How many minutes are left?",
              "answer": "136.8",
              "hint": "Add the two amounts used first, then take that from 320.5. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "180 of the 240 boxes are set aside. What percent is that? (write just the number)",
              "answer": "75",
              "accept": [
                "75%"
              ],
              "hint": "180 out of 240, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 3 miles there are 5 boxes. There are 45 boxes. How many miles?",
              "answer": "27",
              "hint": "45 ÷ 5 = 9 groups. Each group has 3 miles.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The scientist works out 17 + 5 × 12. What is it?",
              "answer": "77",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the thermometer read 7 degrees. By dark it had fallen to −9 degrees. By how many degrees did it fall?",
              "answer": "16",
              "hint": "From 7 down to 0 is 7, then 9 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 22 ÷ 4 = 5.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "41 − 4x = 9, so 4x = 32, so x = 8."
          },
          "problems": [
            {
              "q": "One hole needs 1.5 minutes. How many minutes do 12 holes need?",
              "answer": "18",
              "hint": "12 × 1.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The scientist counted 120 boxes on the first pass and 144 on the second. By what percent did the count change? (write just the number)",
              "answer": "20",
              "accept": [
                "20%"
              ],
              "hint": "The change is 24. 24 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer read −5 degrees at dawn and −23 degrees at dark. How many degrees did it fall?",
              "answer": "18",
              "hint": "From −5 down to −23.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 29 − 3x = 14",
              "answer": "5",
              "hint": "Move 3x to the right and 14 to the left: 3x = 15.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 cm stands for 10 meters. The runway is really 120 meters long. How many cm is it on the plan?",
              "answer": "12",
              "hint": "120 ÷ 10.",
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
            "example": "Start with 50 and use 6 an hour: after 4 hours, 50 − 6 × 4 = 26."
          },
          "problems": [
            {
              "q": "The scientist starts with 45 boxes and uses 5 every hour. How many are left after 7 hours?",
              "answer": "10",
              "hint": "5 × 7 = 35 used, taken off 45.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 9 small cubes along every edge. How many small cubes make it up?",
              "answer": "729",
              "hint": "9³ means 9 × 9 × 9.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 41-foot rope runs from the top of a marker pole to a point 40 feet away on the ice. How tall is the pole, in feet?",
              "answer": "9",
              "hint": "a² = c² − b² = 1681 − 1600 = 81. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x = 2x + 21",
              "answer": "7",
              "hint": "Take 2x off both sides: 3x = 21. Then divide by 3.",
              "skill": "Equations"
            },
            {
              "q": "The camp's patch of the floe covers about 50,000 square feet. Written as 5 × 10 to a power, what is the power?",
              "answer": "4",
              "hint": "Count the zeros after 5.",
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
            "If the last step asks for a direction, give a direction."
          ],
          "example": "'Type the color of the flag' means a color word, not your number."
        },
        "skill": "Following directions",
        "steps": [
          "Write the miles the floe carried the camp: 206.",
          "Subtract the days the camp was on the ice: 5.",
          "Divide by 3.",
          "Add the thickness of the ice the auger measured, in feet: 6.",
          "Ignore steps 1 to 4. Type the direction the beacon's dots ran first, from paragraph 1, in capital letters."
        ],
        "prompt": "Your answer:",
        "answer": "SOUTHEAST",
        "accept": [
          "southeast",
          "south east",
          "SOUTH EAST",
          "Southeast",
          "SE",
          "southeast.",
          "SOUTHEAST.",
          "south-east",
          "SOUTH-EAST",
          "South-east"
        ],
        "hint": "Step 5 throws the arithmetic away. Paragraph 1 says which way the dots ran before they turned. Copy that direction."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
