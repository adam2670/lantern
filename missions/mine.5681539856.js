// ODYSSEY — campaign "mine". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "mine",
  "ready": true,
  "kind": "climb",
  "readingLevel": {
    "fk": 5.2,
    "cl": 5.2
  },
  "grade": "5",
  "kindLabel": "Expedition",
  "form": "mole",
  "title": "Deep Mine",
  "subtitle": "An old silver mine in the mountains",
  "pitch": "Five levels down a mine shaft that has been shut for sixty years. Bad air, old timbers, water, a vein of silver nobody finished, and a mole who knows rock by taste. The job is to make it safe, one level at a time.",
  "scene": "assets/scene-mine.jpg",
  "waypoints": [
    [
      1160,
      120
    ],
    [
      1175,
      300
    ],
    [
      1180,
      470
    ],
    [
      1200,
      645
    ],
    [
      1070,
      800
    ],
    [
      1130,
      950
    ]
  ],
  "progress": {
    "unit": "ft",
    "total": 500
  },
  "dayNoun": "Shift",
  "stageNoun": "Level",
  "finalNoun": "The sump",
  "stages": [
    "Level 100",
    "Level 200",
    "Level 300",
    "Level 400",
    "The sump"
  ],
  "reconNoun": "Mine Log",
  "legs": {
    "recon": "Mine log",
    "nav": "Mine math",
    "orders": "Safety orders",
    "debrief": "Shaft station"
  },
  "fact": "The most dangerous thing in a mine is not the rock. It is the air. Miners carried canaries for most of a century because a canary falls off its perch minutes before a person feels anything.",
  "finale": {
    "prompt": "The bottom level is pumped dry and the air is clean. Which color tag goes on the cage for the reopened mine?",
    "options": [
      {
        "label": "Silver",
        "color": "#C9D3E6"
      },
      {
        "label": "Safety orange",
        "color": "#F28C28"
      },
      {
        "label": "Green",
        "color": "#4FD18B"
      },
      {
        "label": "Yellow",
        "color": "#FFD65C"
      }
    ],
    "done": "Tag it. Then write the date on the shaft station wall, under the one from sixty years ago."
  },
  "patrols": [
    {
      "id": "mine-1",
      "title": "Level 100",
      "recon": {
        "lesson": {
          "title": "Questions first, then the log",
          "points": [
            "Read the five questions before the log. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Depths in feet are details. Circle them.",
            "The answer is always in the log. You never have to guess."
          ],
          "example": "Question: 'How long is the bridge?' Hunt for 'feet', then read that sentence."
        },
        "title": "Mine Log: Sixty Years of Quiet",
        "passage": [
          "The mine is a shaft, a vertical hole five hundred feet deep and ten feet square, with tunnels running out from it at every hundred feet. The tunnels are called drifts, and the places where a drift meets the shaft are called stations. A steel cage on a cable goes up and down the shaft like an elevator. The mine dug silver for forty years and closed sixty years ago when the price fell, and the new owners want to know whether the vein the old miners left is worth going back for. The captain's job is to make the mine safe enough to find out.",
          "The first rule of an old mine is that nothing in it can be trusted. The timbers that hold the drifts open have been wet for sixty years. The ladders are rust. The air may be fine or it may be bad, and bad air does not smell like anything. So the captain goes down in the cage with a lamp, a spare lamp, a gas meter that beeps, and a long steel bar. The captain goes only as far as the first station, and stops, and looks, and sounds the rock over the drift with the bar. Solid rock rings. Loose rock thuds, and can fall from the roof later.",
          "Level 100 is dry and the air is good. The drift runs two hundred feet into the hill, propped every five feet with timber sets, three logs in a doorway shape. The captain walks it slowly, tapping the roof, marking every set that thuds with a chalk X. Eleven X's. Those get new timber before anyone else comes down. At the end of the drift the rock changes color, a gray band shot with dull white, and the captain chips a piece off with a hammer and puts it in a bag. That is the vein. Tomorrow, level 200."
        ],
        "questions": [
          {
            "q": "How deep is the shaft?",
            "choices": [
              "Ten feet",
              "Sixty feet",
              "A mile",
              "Five hundred feet"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How many timber sets did the captain mark with an X?",
            "choices": [
              "Five",
              "Forty",
              "Eleven",
              "Two hundred"
            ],
            "answer": 2,
            "hint": "Paragraph 3, the sentence 'Eleven X's.'",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'drift'?",
            "choices": [
              "A snowbank",
              "A tunnel running out from the shaft",
              "The steel cage that runs up and down the shaft on a cable",
              "The place where a tunnel meets the shaft, called a station"
            ],
            "answer": 1,
            "hint": "The sentence 'The tunnels are called drifts'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the captain tap the rock with a steel bar?",
            "choices": [
              "To learn how thick the rock overhead is",
              "Because solid rock rings and loose rock thuds, and loose rock can fall from the roof later",
              "To find silver",
              "To feel his way along the drift in the dark"
            ],
            "answer": 1,
            "hint": "The last two sentences of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "Why nothing in an old mine can be trusted and how the captain goes down carefully",
              "The price of silver",
              "The chalk X's",
              "The vein"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 2 is the rule; the rest is how the captain follows it.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Shaft math",
          "points": [
            "Levels: depth ÷ 100.",
            "Evenly spaced things: total length ÷ the gap between them.",
            "How many are left: the total minus the ones taken out.",
            "Same bottom: add the tops, so 1/5 + 3/5 = 4/5."
          ],
          "example": "A level every 50 feet down a 300-foot shaft: 300 ÷ 50 = 6 levels."
        },
        "problems": [
          {
            "q": "The shaft is 500 feet deep with a level every 100 feet. How many levels?",
            "answer": "5",
            "hint": "500 ÷ 100.",
            "skill": "Dividing"
          },
          {
            "q": "The drift is 200 feet long with a timber set every 5 feet. How many sets?",
            "answer": "40",
            "hint": "200 ÷ 5.",
            "skill": "Dividing"
          },
          {
            "q": "11 of the 40 sets thudded. How many rang solid?",
            "answer": "29",
            "hint": "40 − 11.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The mine ran for 40 years and has been closed for 60. How many years since it opened?",
            "answer": "100",
            "hint": "40 + 60.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The captain checked 2/6 of the drift before the gas meter check and 3/6 after. What fraction of the drift is checked? (write a fraction)",
            "answer": "5/6",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "One sentence for the whole log",
            "points": [
              "Read every paragraph before you look at a choice, then say what the report is about in a single sentence of your own.",
              "A choice that only covers one paragraph is a detail dressed up. A choice about the world in general covers nothing here at all.",
              "Then four more moves: prove a claim with one line, name a paragraph's job, read a word off its own sentence, and join two paragraphs into one conclusion."
            ],
            "example": "Three paragraphs about a farm: what the soil is like, how the fence was built, what the herd eats in winter. 'The fence is four wires high' is one paragraph. 'Farming is hard work' is neither here nor there."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Solid rock rings when it is struck with a steel bar, and loose rock thuds and comes down later.",
                "Mining is the most dangerous work that anybody does, and an old mine is worse than a new one.",
                "The captain's job is to decide whether the silver left in the vein is worth going back for.",
                "Before anyone can learn whether the old vein is worth digging, every part of a mine left for sixty years has to be tested."
              ],
              "answer": 3,
              "hint": "Words for the parts of a mine, a rule about trusting nothing, and a first drift walked with a bar. Ask what all three of those are in aid of.",
              "skill": "Central idea and evidence",
              "evidence": "The captain's job is to make the mine safe enough to find out."
            },
            {
              "q": "Claim: the worst danger in an old mine is one a person cannot notice. Which sentence from the report best supports that claim?",
              "choices": [
                "The first rule of an old mine is that nothing in it can be trusted.",
                "Loose rock thuds, and can fall from the roof later.",
                "The air may be fine or it may be bad, and bad air does not smell like anything.",
                "The timbers that hold the drifts open have been wet for sixty years."
              ],
              "answer": 2,
              "hint": "Rust and wet timber are things a person can see. The claim is about a danger that gives you nothing to see. Find the sentence that says exactly that.",
              "skill": "Finding details",
              "evidence": "The air may be fine or it may be bad, and bad air does not smell like anything."
            },
            {
              "q": "Why does the report explain the words drift, station and cage in its first paragraph?",
              "choices": [
                "To show that miners speak a language of their own, one that an outsider could never really learn to follow.",
                "So that the rest of the log, which leans on those words constantly, can be read without stopping.",
                "To list the equipment the captain carries down the shaft: a lamp, a spare lamp, a gas meter that beeps and a long steel bar.",
                "To explain why the mine closed sixty years ago."
              ],
              "answer": 1,
              "hint": "Count how often those three words turn up after the paragraph that defines them. Ask what the definitions were buying the reader.",
              "skill": "Author's purpose and structure",
              "evidence": "The tunnels are called drifts, and the places where a drift meets the shaft are called stations."
            },
            {
              "q": "The report says the captain 'sounds the rock over the drift with the bar'. What does sounds mean as it is used here?",
              "choices": [
                "Measures how far the rock goes back",
                "Strikes it and listens to what comes back",
                "Shouts to hear whether it echoes",
                "Bangs it to warn the crew below"
              ],
              "answer": 1,
              "hint": "The two short sentences straight after tell you exactly what the captain is listening for. Ringing and thudding are answers to something.",
              "skill": "Word meanings",
              "evidence": "and sounds the rock over the drift with the bar. Solid rock rings."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why eleven chalk X's mean somebody has to come back to level 100. Why do they?",
              "choices": [
                "Each X marks a spot that thudded instead of ringing, and that rock can fall from the roof later without warning.",
                "The X's mark the places where the vein was found in the rock.",
                "The X's count how many spare lamps the crew will need.",
                "The X's show where the drift changes direction underground."
              ],
              "answer": 0,
              "hint": "Paragraph two tells you what a thud means, and what it means later. Paragraph three tells you what a chalk X is put on. Put those two facts together.",
              "skill": "Reading between the lines",
              "evidence": "Loose rock thuds, and can fall from the roof later."
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
              "Fractions with the same bottom: add the tops."
            ],
            "example": "4 × 7 = 28."
          },
          "problems": [
            {
              "q": "The captain counts 5 levels with 9 timbers in each. How many timbers is that?",
              "answer": "45",
              "hint": "5 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "45 timbers are shared equally among 5 levels. How many timbers in each level?",
              "answer": "9",
              "hint": "How many 5s make 45?",
              "skill": "Dividing"
            },
            {
              "q": "The captain counted 211 feet, then found 97 more, then 57 more. How many feet in all?",
              "answer": "365",
              "hint": "211 + 97 first. Then add 57.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The captain finished 2/6 of the day's work before the break and 2/6 after. What fraction is done? (write a fraction)",
              "answer": "4/6",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A timber platform is 3 squares wide and 8 squares long. How many squares is that?",
              "answer": "24",
              "hint": "3 rows of 8, so 3 × 8.",
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
            "example": "3 × (9 − 2) + 4 = 25: parentheses, then multiply, then add."
          },
          "problems": [
            {
              "q": "A regular drift takes 3.75 minutes. A long one takes 2.4 times as long. How many minutes does the long one take?",
              "answer": "9",
              "hint": "Multiply 375 × 24 without the points, then put back 3 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "Of 160 feet, 50% are set aside. How many is that?",
              "answer": "80",
              "hint": "50% of 160: 50% is 50/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Timbers and feet are kept in the ratio 2 to 3. If there are 8 timbers, how many feet?",
              "answer": "12",
              "hint": "8 ÷ 2 = 4 groups. Each group has 3 feet.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The captain works out 4 × (10 − 5) + 6. What is it?",
              "answer": "26",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 196 = 750",
              "answer": "554",
              "hint": "Subtract 196 from both sides.",
              "skill": "Equations"
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
            "example": "4x + 7 = 31, so 4x = 24, so x = 6."
          },
          "problems": [
            {
              "q": "The crew filled 8 ore carts in 12 minutes altogether. How many minutes is that for one cart?",
              "answer": "1.5",
              "hint": "A rate is the total shared out: 12 ÷ 8.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The tunnel was 40 feet long at the first check. By the second check it had grown by 20%. How long is it now, in feet?",
              "answer": "48",
              "hint": "20% of 40 is 8. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The supply ledger opens at −12 timbers. The captain adds 9 timbers, then takes out 6 timbers. What does the ledger read now?",
              "answer": "-9",
              "accept": [
                "−9"
              ],
              "hint": "Start at −12, add 9 to get −3, then subtract 6.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 6x + 9 = 27",
              "answer": "3",
              "hint": "Take 9 off both sides first, then divide by 6.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 25 feet. The tunnel measures 11 inches on the plan. How long is it really, in feet?",
              "answer": "275",
              "hint": "Every inch is 25 feet, so 11 × 25.",
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
            "example": "Start at 20 and add 7 each hour: after 4 hours, 7 × 4 + 20 = 48."
          },
          "problems": [
            {
              "q": "The tunnel is 15 feet long, and the crew digs 9 more feet every hour. After 6 hours, how long is the tunnel, in feet?",
              "answer": "69",
              "hint": "This is the straight-line rule y = mx + b: 9 × 6 + 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each rack holds 9² drill bits. There are 5 racks. How many drill bits in all?",
              "answer": "405",
              "hint": "9² means 9 × 9 = 81. Then × 5.",
              "skill": "Powers and roots"
            },
            {
              "q": "The captain runs a cable from the top of an 8-foot post to a point 15 feet away on the ground. How long is the cable, in feet?",
              "answer": "17",
              "hint": "Right triangle: a² + b² = c². 8² + 15² = 64 + 225 = 289. The cable is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x + 30 = 3x + 55",
              "answer": "5",
              "hint": "Take 3x off both sides to get 5x + 30 = 55, then take 30 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "A deep gold mine in another country goes down 8 × 10^3 feet. Written out in full, what number is that?",
              "answer": "8000",
              "hint": "10^3 is 1 with 3 zeros after it: 1,000. Then × 8.",
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
          "example": "If step 5 says 'type it in feet, and each step is two feet', 9 steps becomes 18."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of timber sets propping the drift: 40.",
          "Subtract the sets the captain chalked with an X: 11.",
          "Add the number of lamps the captain carries down: 2.",
          "Subtract the number of logs in one timber set: 3.",
          "That answer is a number of timber sets, and the drift is propped every five feet. Type your answer in feet, not in sets."
        ],
        "prompt": "Your answer:",
        "answer": "140",
        "hint": "Steps 1 to 4 count timber sets. Step 5 wants the same answer measured along the drift, and it tells you how far apart the sets stand."
      }
    },
    {
      "id": "mine-2",
      "title": "Level 200",
      "recon": {
        "lesson": {
          "title": "Something you cannot see",
          "points": [
            "When the log describes a danger you cannot see, the way to detect it is a detail.",
            "Numbers on a meter are exact.",
            "A word about the air is explained right beside it: look for what it smells like and what it does."
          ],
          "example": "'The flame goes out before the miner is in trouble.' What is the flame for? Warning."
        },
        "title": "Mine Log: The Air Has Opinions",
        "passage": [
          "At level 200 the gas meter beeps. It is a small box on the captain's belt that measures the air every second. It beeps for three things: too little oxygen; too much methane, a gas that seeps out of rock and burns; or too much carbon monoxide, a gas that has no smell and harms quietly. Today it is the first one. Oxygen is nineteen percent, where fresh air is twenty-one. At seventeen, a person's judgment goes before they notice. That is the whole danger: bad air makes you too foolish to know the air is bad.",
          "The old miners knew this without a meter. They carried a canary in a cage, because a canary breathes fast and is small, and it falls off its perch in bad air minutes before a person feels anything. They also watched their lamp flames. A flame that grows tall and blue means methane. A flame that shrinks and dies means too little oxygen. The meter is better than a bird, and the captain wears it, and keeps a candle in the pack anyway, because a meter has a battery and a candle does not.",
          "The answer to bad air is a fan. A fan the size of a car sits on the surface. It pushes fresh air down a pipe in the shaft. The captain runs a canvas tube from the pipe along the drift so that the fresh air reaches the end, and waits, watching the meter climb: nineteen, twenty, twenty-one. An hour. Then the drift is walked and tapped like the first one, six X's, and the log gets a line the old miners would have understood: level 200, air bad, fan on, air good, six sets."
        ],
        "questions": [
          {
            "q": "What are the three things the gas meter beeps for?",
            "choices": [
              "Too little oxygen, too much methane, too much carbon monoxide",
              "Heat, cold and wet",
              "Silver, gold and lead",
              "Loose rock overhead, rotten timber and the water rising in the shaft"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the third sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What does a lamp flame that grows tall and blue mean?",
            "choices": [
              "Methane",
              "Plenty of fresh air",
              "Oil",
              "Silver in the rock"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentences about lamp flames.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is 'carbon monoxide'?",
            "choices": [
              "A kind of rock",
              "A lamp fuel",
              "Fresh air",
              "A gas with no smell that harms quietly"
            ],
            "answer": 3,
            "hint": "The sentence lists it with 'a gas that has no smell'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the old miners carry a canary?",
            "choices": [
              "For company",
              "To find silver",
              "Because a canary breathes very slowly and can live in bad air for far longer than any person can",
              "Because a canary falls off its perch in bad air minutes before a person feels anything"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The canary",
              "The six X's",
              "How the fan and the tube fix the bad air",
              "The battery"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 3 is 'The answer to bad air is a fan.'",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Air math",
          "points": [
            "Percent oxygen: fresh air 21, bad air 19, dangerous 17.",
            "Volume of a box: length × width × height. 10 × 4 × 5 = 200 cubic feet.",
            "Once a second for 1 minute is 60 readings; for 2 minutes it is 120.",
            "Area of a floor: length times width."
          ],
          "example": "From 15 up to 18 is 18 − 15 = 3 points."
        },
        "problems": [
          {
            "q": "The air is 19 percent oxygen and fresh air is 21. How many percentage points short is it?",
            "answer": "2",
            "hint": "21 − 19.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The drift is 200 feet long, 8 feet wide and 8 feet tall. How many cubic feet of air fill it?",
            "answer": "12800",
            "hint": "Length × width × height: 200 × 8 = 1,600, then times 8.",
            "skill": "Volume"
          },
          {
            "q": "The meter reads the air once a second. How many readings in the hour the captain waited?",
            "answer": "3600",
            "accept": [
              "3,600"
            ],
            "hint": "60 × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "The drift is 200 feet, 8 feet wide and 8 feet tall. What is the area of its floor in square feet?",
            "answer": "1600",
            "accept": [
              "1,600"
            ],
            "hint": "200 × 8.",
            "skill": "Area and perimeter"
          },
          {
            "q": "The danger line is 17 percent oxygen. The air was 19. How many points above the danger line was it?",
            "answer": "2",
            "hint": "19 − 17.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Prove it with one line",
            "points": [
              "In that question all four choices are true sentences from the report. Only one of them proves the claim.",
              "Break the claim into pieces first. If it says two things, the sentence you pick has to say both.",
              "A sentence that describes something near the claim is not the same as a sentence that settles it."
            ],
            "example": "Claim: the crew expected to be down there a while. 'They carried three days of food' proves it. 'They wore helmets' does not."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Bad air is dangerous because it takes away the judgment you would need in order to notice it, so miners use things that notice for them.",
                "A canary breathes fast and falls off its perch before a person feels anything.",
                "New equipment is always better than the old way of doing a job.",
                "The meter is enough by itself, so the captain has no reason to carry a candle or to know what the old miners were watching their lamp flames for."
              ],
              "answer": 0,
              "hint": "A meter, a bird, a lamp flame, a candle and a fan. Ask what every one of those is making up for.",
              "skill": "Central idea and evidence",
              "evidence": "bad air makes you too foolish to know the air is bad"
            },
            {
              "q": "Claim: the captain does not rely on any single way of knowing the air is bad. Which sentence from the report best supports that claim?",
              "choices": [
                "The meter is better than a bird, and the captain wears it, and keeps a candle in the pack anyway, because a meter has a battery and a candle does not.",
                "It beeps for three things: too little oxygen; too much methane, a gas that seeps out of rock and burns; or too much carbon monoxide, a gas that has no smell and harms quietly.",
                "Then the drift is walked and tapped like the first one, six X's, and the log gets a line the old miners would have understood: level 200, air bad, fan on, air good, six sets.",
                "At level 200 the gas meter beeps."
              ],
              "answer": 0,
              "hint": "The claim is about having a backup, so the sentence has to name two things carried at once and say why. What old miners did is not what this captain carries.",
              "skill": "Finding details",
              "evidence": "The meter is better than a bird, and the captain wears it, and keeps a candle in the pack anyway, because a meter has a battery and a candle does not."
            },
            {
              "q": "What job does the second paragraph do in this log?",
              "choices": [
                "It explains how methane seeps out of the rock into a drift.",
                "It gives the steps for setting up the fan and its canvas tube.",
                "It lists the levels of the mine in the order they are visited.",
                "It sets the old ways of reading the air beside the meter, and shows that the old ways have not been thrown away entirely."
              ],
              "answer": 3,
              "hint": "The paragraph is about miners who had no meter, and it finishes on something this captain still carries. Ask what those two halves add up to.",
              "skill": "Author's purpose and structure",
              "evidence": "The meter is better than a bird, and the captain wears it, and keeps a candle in the pack anyway, because a meter has a battery and a candle does not."
            },
            {
              "q": "The report says carbon monoxide 'harms quietly'. What does quietly mean as it is used here?",
              "choices": [
                "Without making any sound at all as it seeps from the rock",
                "Slowly, over many years of breathing it",
                "Only when nobody else is nearby to help",
                "Without giving any warning a person could sense"
              ],
              "answer": 3,
              "hint": "The same sentence says the gas has no smell, and the paragraph goes on to say what a person notices and when. Quiet here is about warning, not about noise.",
              "skill": "Word meanings",
              "evidence": "or too much carbon monoxide, a gas that has no smell and harms quietly"
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the captain watches the meter for a full hour before walking the drift. Why so long?",
              "choices": [
                "The fan has to run for an hour before it can be trusted not to stop.",
                "The captain is waiting for the canary to get back on its perch.",
                "The oxygen has to climb all the way back to what fresh air reads, and the fan is pushing air the whole length of the drift to do it.",
                "The meter's battery takes an hour to charge underground."
              ],
              "answer": 2,
              "hint": "Paragraph one gives you the number fresh air should read. Paragraph three gives you the three numbers the captain watches climb. The hour is what the gap between them costs.",
              "skill": "Reading between the lines",
              "evidence": "waits, watching the meter climb: nineteen, twenty, twenty-one"
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
              "Fractions with the same bottom: add or take away the tops; the bottom stays."
            ],
            "example": "7 × 4 = 28."
          },
          "problems": [
            {
              "q": "The captain stacked 9 timbers yesterday and three times as many today. How many timbers today?",
              "answer": "27",
              "hint": "Three times 9: 9 + 9 + 9.",
              "skill": "Multiplying"
            },
            {
              "q": "The captain packs 54 bolts into boxes of 9. How many boxes is that?",
              "answer": "6",
              "hint": "How many 9s make 54?",
              "skill": "Dividing"
            },
            {
              "q": "The captain starts with 318 bolts and uses 75. How many are left?",
              "answer": "243",
              "hint": "318 − 75.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "2/4 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "2/4",
              "hint": "The whole job is 4/4. Take 2/4 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The tally stood at 475 bolts and 500 more were added. What is the tally now?",
              "answer": "975",
              "hint": "475 + 500.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Mixed ÷ mixed: make both improper. 4 1/2 ÷ 1 1/2 = 9/2 ÷ 3/2 = 9/2 × 2/3 = 3.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "5 + 3 × 6 = 23: multiply first, then add."
          },
          "problems": [
            {
              "q": "The captain has 13 1/2 yards of rail. Each section of track takes 2 1/4 yards. How many sections can the captain lay?",
              "answer": "6",
              "hint": "Make both improper: 27/2 ÷ 9/4. Then multiply by the flip: 27/2 × 4/9.",
              "skill": "Fractions"
            },
            {
              "q": "90 of the 120 bolts are set aside. What percent is that? (write just the number)",
              "answer": "75",
              "accept": [
                "75%"
              ],
              "hint": "90 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 1 lamp there are 3 batteries. There are 21 batteries. How many lamps?",
              "answer": "7",
              "hint": "21 ÷ 3 = 7 groups. Each group has 1 lamp.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The captain works out 7 + 7 × 11. What is it?",
              "answer": "84",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 1,000 − x = 219",
              "answer": "781",
              "hint": "x is what is left when 219 is taken off 1,000.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Two minus signs make a plus: (−3) × (−5) = 15, and (−15) ÷ (−3) = 5. One minus sign makes a minus.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "50 − 4x = 18, so 4x = 32, so x = 8."
          },
          "problems": [
            {
              "q": "One ore cart takes 1.5 minutes to fill. How many minutes do 24 carts need?",
              "answer": "36",
              "hint": "24 × 1.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The captain counted 200 lamps on the first pass and 220 on the second. By what percent did the count change? (write just the number)",
              "answer": "10",
              "accept": [
                "10%"
              ],
              "hint": "The change is 20. 20 out of 200, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "While the pump runs, the water in the sump drops 9 inches every hour. Write that as −9 an hour. How many inches higher was the water 14 hours ago? Time before now counts as negative. Work it out as (−9) × (−14).",
              "answer": "126",
              "hint": "9 × 14, and two minus signs make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 27 − 2x = 13",
              "answer": "7",
              "hint": "Move 2x to the right and 13 to the left: 2x = 14.",
              "skill": "Equations"
            },
            {
              "q": "A round air pipe has a radius of 5 inches. Using 3.14 for pi, how many inches is it around the edge?",
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
            "example": "Start with 50 and wear out 4 an hour: after 6 hours, 50 − 4 × 6 = 26."
          },
          "problems": [
            {
              "q": "The captain starts with 71 drill bits and wears out 7 every hour. How many are left after 8 hours?",
              "answer": "15",
              "hint": "7 × 8 = 56 worn out, taken off 71.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 81?",
              "answer": "9",
              "hint": "What number times itself makes 81?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 13-foot cable runs from the top of a post to a point 12 feet away on the ground. How tall is the post, in feet?",
              "answer": "5",
              "hint": "a² = c² − b² = 169 − 144 = 25. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x = 2x + 6",
              "answer": "3",
              "hint": "Take 2x off both sides: 2x = 6. Then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 feet and holds 942 cubic feet. Using 3.14 for pi, how many feet deep is it?",
              "answer": "3",
              "hint": "The floor's area is 3.14 × 10 × 10 = 314. Divide the volume by that.",
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
          "example": "'Multiply by 5. Instead, divide by 5' means divide."
        },
        "skill": "Following directions",
        "steps": [
          "Write the oxygen reading when the meter beeped: 19.",
          "Add the number of things the meter beeps for: 3.",
          "Multiply by the number of X's on level 200: 6.",
          "Instead of multiplying in step 3, go back to your answer from step 2 and divide by 2.",
          "Type the result."
        ],
        "prompt": "Your answer:",
        "answer": "11",
        "hint": "Step 4 switches the multiply off. Go back to your step 2 total and halve it instead."
      }
    },
    {
      "id": "mine-3",
      "title": "Level 300",
      "recon": {
        "lesson": {
          "title": "Fixing what holds the roof",
          "points": [
            "When the log describes a repair, the steps are in order. Follow them.",
            "Weights and counts are details.",
            "'Why not' questions want the reason the old way is not used."
          ],
          "example": "'Boots instead of sneakers on the hike.' Why? The trail is wet and rocky."
        },
        "title": "Mine Log: Holding Up a Mountain",
        "passage": [
          "Level 300 is where the roof is bad. The drift here runs through softer rock, and the timber sets that held it up for decades have rotted at the feet where they stood in water. So a third of them lean and two have collapsed, filling the drift with broken rock. Behind the rock the drift continues. The captain can see the far side with a lamp through a gap at the top of the pile. Nobody goes through a gap like that. The rock above it is exactly the rock that fell.",
          "The old way to hold a roof was timber, and the new way is bolts. A roof bolt is a steel rod six feet long with a thread at one end, drilled straight up into solid rock above the drift and tightened against a steel plate. The loose layers near the roof are then pinned to the solid rock deeper in, the way a nail through a stack of boards holds them to a beam. Bolts do not rot. A bolted roof needs no timbers in the way, and it holds a mountain up with steel the width of a thumb, one bolt every four feet in a grid.",
          "The crew of four spends the shift clearing the fall, one wheelbarrow at a time, from the shaft side, never from under the gap. They bolt the roof as they go: drill, bolt, plate, tighten, four feet, again. Twelve tons of rock come out. Thirty bolts go in. By the end of the shift the drift is open to the far side and the roof above the old fall rings solid under the bar. The captain writes: level 300, fall cleared, thirty bolts, roof sound. Then, on the way to the cage, sees the water."
        ],
        "questions": [
          {
            "q": "Why had the timber sets on level 300 failed?",
            "choices": [
              "They were cut too short for a drift through softer rock",
              "The roof above them was too heavy for three logs to carry",
              "Someone took them out for the timber when the mine closed",
              "They rotted at the feet where they stood in water"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How far apart are the roof bolts?",
            "choices": [
              "Every foot",
              "Every six feet, in a grid",
              "Every twelve feet along the drift",
              "Every four feet"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'roof bolt'?",
            "choices": [
              "A steel plate that is tightened against the roof to spread the weight of the timber sets",
              "One of the three logs in a timber set, standing in a doorway shape across the drift",
              "A long steel rod drilled up into solid rock to pin the loose roof layers to it",
              "The long steel bar that the captain uses to sound the rock over a drift before walking it"
            ],
            "answer": 2,
            "hint": "The second and third sentences of paragraph 2.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the crew clear the fall from the shaft side and never from under the gap?",
            "choices": [
              "Because the gap at the top of the pile is too small to pass",
              "Because the wheelbarrow does not fit",
              "Because the captain said so",
              "Because the rock above the gap is the same rock that already fell and could fall again"
            ],
            "answer": 3,
            "hint": "The last two sentences of paragraph 1.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "Wheelbarrows",
              "How roof bolts work and why they are better than timber",
              "Clearing twelve tons of fallen rock one wheelbarrow at a time",
              "Why the timber sets on level 300 rotted and two of them fell"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 2 contrasts the old way and the new way.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Roof math",
          "points": [
            "Bolts in a grid: length ÷ spacing, times rows.",
            "Adding decimals: line up the points. 2.6 + 1.75 is 2.60 + 1.75 = 4.35.",
            "A third of the sets: ÷ 3.",
            "Two-step: wheelbarrows at 200 pounds each."
          ],
          "example": "A 2.5-pound rock and a 1.75-pound rock: 2.50 + 1.75 = 4.25 pounds in the bag."
        },
        "problems": [
          {
            "q": "The captain's sample bag held 3.4 pounds of rock, and he added a 1.85-pound piece. How many pounds are in the bag now? (write a decimal)",
            "answer": "5.25",
            "hint": "Line up the points: 3.40 + 1.85.",
            "skill": "Decimals"
          },
          {
            "q": "24,000 pounds of rock came out. A wheelbarrow carries 200 pounds. How many wheelbarrow loads is that?",
            "answer": "120",
            "hint": "24,000 ÷ 200.",
            "skill": "Dividing"
          },
          {
            "q": "A third of the 39 timber sets on level 300 lean. How many is that?",
            "answer": "13",
            "hint": "39 ÷ 3.",
            "skill": "Fractions"
          },
          {
            "q": "Bolts go in every 4 feet along a 40-foot stretch of drift, in 3 rows across. How many bolts? (10 per row)",
            "answer": "30",
            "hint": "40 ÷ 4 = 10 per row. Then 10 × 3.",
            "skill": "Multi-step problems"
          },
          {
            "q": "Each bolt is 6 feet long. Thirty bolts laid end to end would be how many feet?",
            "answer": "180",
            "hint": "30 × 6.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Find the shape of the paragraph",
            "points": [
              "A paragraph is usually built as one of a few shapes: cause and effect, a comparison, a sequence, or a problem with its answer.",
              "The middle paragraph of a report often exists to explain something the last paragraph is about to do. Read forward before you decide.",
              "Naming the shape is not retelling the content. A choice that only repeats what the paragraph says has named nothing."
            ],
            "example": "'The old bridge was wood. The new one is steel.' Same opening, opposite endings. That is a comparison, whatever the paragraph goes on to say afterward."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Twelve tons of broken rock were carried out of the level 300 drift one wheelbarrow at a time, and the whole of it was moved by a crew of four people in a single shift.",
                "Steel is a stronger material than wood in every situation, so a roof anywhere is better held by a rod drilled into rock than by logs standing in a doorway shape.",
                "The crew went through the gap at the top of the fall to reach the far side, and cleared the broken rock from there, working back toward the shaft one wheelbarrow at a time.",
                "A roof that timber can no longer hold is made safe by a different method entirely, and the work is done in the order that keeps nobody under the loose rock."
              ],
              "answer": 3,
              "hint": "A rotted roof, a new way of holding one up, and a crew working from one side only. Find the choice that covers all three of those.",
              "skill": "Central idea and evidence",
              "evidence": "Nobody goes through a gap like that."
            },
            {
              "q": "Claim: steel bolts will not fail in the way the old timbers did. Which sentence from the report best supports that claim?",
              "choices": [
                "A roof bolt is a steel rod six feet long with a thread at one end, drilled straight up into solid rock above the drift and tightened against a steel plate.",
                "A bolted roof needs no timbers in the way, and it holds a mountain up with steel the width of a thumb, one bolt every four feet in a grid.",
                "The old way to hold a roof was timber, and the new way is bolts.",
                "Bolts do not rot."
              ],
              "answer": 3,
              "hint": "Go back to what actually happened to the feet of the old timbers. Then find the sentence that says the new material does not do that.",
              "skill": "Finding details",
              "evidence": "Bolts do not rot."
            },
            {
              "q": "What job does the comparison with a nail through a stack of boards do?",
              "choices": [
                "It explains how the bolts are made in a factory, cut to six feet and threaded at one end, before they arrive at the mine.",
                "It weighs the strength of steel against the strength of wood, and settles which of the two makes the better roof.",
                "It shows in one familiar picture how a bolt pins the loose layers to the solid rock above them.",
                "It gives the spacing of the bolts across the roof of the drift, one every four feet, the way nails are set in a row."
              ],
              "answer": 2,
              "hint": "Nobody is nailing anything in this mine. Ask why a writer would stop in the middle of an explanation to hand you something you have already seen.",
              "skill": "Author's purpose and structure",
              "evidence": "The loose layers near the roof are then pinned to the solid rock deeper in, the way a nail through a stack of boards holds them to a beam"
            },
            {
              "q": "The report says a bolted roof 'holds a mountain up with steel the width of a thumb'. What is that sentence emphasizing?",
              "choices": [
                "That the bolts are made of an unusual steel",
                "That the mountain is sinking onto the drift",
                "That a thumb is used to test the bolts",
                "How much weight is being carried by how little metal"
              ],
              "answer": 3,
              "hint": "Two sizes are set against each other in one breath: a whole mountain, and something as thick as a thumb. Ask why a writer would put those two next to each other.",
              "skill": "Word meanings",
              "evidence": "and it holds a mountain up with steel the width of a thumb, one bolt every four feet in a grid"
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the crew clears the fall from the shaft side and never from under the gap. Why is that?",
              "choices": [
                "The wheelbarrow can only be pushed in one direction along the drift, because the timber sets on either side leave no room for a crew to turn it around.",
                "The rock still above that gap is the same rock that already came down once, so standing under it is standing under the next fall.",
                "The gap at the top of the pile is the one place in the drift where the lamps do not reach, so the crew could not see the rock they were lifting.",
                "The broken rock is too heavy to lift from that direction."
              ],
              "answer": 1,
              "hint": "Paragraph one tells you what is directly above that gap. Paragraph three tells you where the crew chooses to stand. Say the first fact, then the second, then say 'so'.",
              "skill": "Reading between the lines",
              "evidence": "The rock above it is exactly the rock that fell."
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
              "q": "The captain lays the timbers out in 6 rows of 5. How many timbers is that?",
              "answer": "30",
              "hint": "6 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "20 timbers are set out in 4 equal rows. How many timbers are in each row?",
              "answer": "5",
              "hint": "20 split into 4 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 213 tons, then 49 more are added and 12 are taken off. What does the log show now?",
              "answer": "250",
              "hint": "Add 213 and 49 first, then take 12 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 1/4 + 2/4 (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. 1 + 2 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 8 feet wide and 8 feet long. How many feet is it all the way around the edge?",
              "answer": "32",
              "hint": "Two sides of 8 and two sides of 8: 8 + 8 + 8 + 8.",
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
            "example": "(5 + 2) × 8 = 56: parentheses first, then multiply."
          },
          "problems": [
            {
              "q": "The captain has 22.95 minutes of inspection. Each drift takes 0.85 minutes. How many drifts is that enough for?",
              "answer": "27",
              "hint": "Move both points 2 places to the right: 2295 ÷ 85.",
              "skill": "Decimals"
            },
            {
              "q": "10% of the tons counted is 20. How many were counted in all?",
              "answer": "200",
              "hint": "20 is 10 hundredths of the whole: 20 ÷ 10 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The captain counts 27 timbers and 36 tons. In its simplest form, what is the ratio of timbers to tons? (write it like 2:3)",
              "answer": "3:4",
              "accept": [
                "3 to 4"
              ],
              "hint": "Divide both by 9.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The captain works out (4 + 3) × 6. What is it?",
              "answer": "42",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 2x = 634",
              "answer": "317",
              "hint": "Divide both sides by 2.",
              "skill": "Equations"
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
              "A two-step equation: undo the last step first. In (x + 1) × 5 = 35, divide by 5, then take off 1."
            ],
            "example": "(x + 1) × 5 = 35, so x + 1 = 7, so x = 6."
          },
          "problems": [
            {
              "q": "The captain has 30 minutes to spend and each ore cart takes 2.5 minutes to fill. How many carts is that enough for?",
              "answer": "12",
              "hint": "30 ÷ 2.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ore haul rose by 25% to 300 tons. How many tons was it before?",
              "answer": "240",
              "hint": "300 is 125% of the old haul.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The supply ledger shows 8 timbers. The captain signs out 24 timbers, borrowing the extra from the next level. What does the ledger read now?",
              "answer": "-16",
              "accept": [
                "−16"
              ],
              "hint": "8 takes it to 0, and 16 more comes out below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 11) × 4 = 76",
              "answer": "8",
              "hint": "Divide both sides by 4 first, then take 11 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 5. The timber on the model is 3 inches. How many inches is the real one?",
              "answer": "15",
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
            "example": "y = 5x + 4 when x = 6: 5 × 6 + 4 = 34."
          },
          "problems": [
            {
              "q": "The tons of ore hauled follow the rule y = 6x + 15, where x is the hour. What is y when x = 3?",
              "answer": "33",
              "hint": "Put 3 in for x: 6 × 3 + 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 9² + 8²?",
              "answer": "145",
              "hint": "9 × 9 = 81 and 8 × 8 = 64. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 29-foot cable reaches the top of a 20-foot post. How far is the bottom end of the cable from the base, in feet?",
              "answer": "21",
              "hint": "b² = c² − a² = 841 − 400 = 441. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x + 18 − 5x = 46",
              "answer": "7",
              "hint": "Collect the x's first: 4x + 18 = 46.",
              "skill": "Equations"
            },
            {
              "q": "What is 9 × 10^4 ÷ 10^3?",
              "answer": "90",
              "hint": "Dividing subtracts the powers: 10^4 ÷ 10^3 = 10^1. So 9 × 10.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Order of the job",
          "points": [
            "Some orders are a repeating list. Do it in the order given.",
            "Then answer what the last step asks."
          ],
          "example": "'Wash, dry, fold' is three jobs per shirt."
        },
        "skill": "Following directions",
        "steps": [
          "Count the steps the log lists for putting in one bolt: drill, bolt, plate, tighten.",
          "Multiply that count by the number of bolts that went in: 30.",
          "Now start a second total. Write the length of one roof bolt in feet: 6.",
          "Multiply by the tons of rock the crew cleared: 12.",
          "Put your step 2 total next to your step 4 total. The bigger of the two is the one the captain writes in the log. Type it."
        ],
        "prompt": "Your answer:",
        "answer": "120",
        "hint": "Step 1 is a count of the things in the log's list, not a number to read off. Step 5 compares your two totals rather than joining them."
      }
    },
    {
      "id": "mine-4",
      "title": "Level 400",
      "recon": {
        "lesson": {
          "title": "Water in the ground",
          "points": [
            "When the log explains where water comes from, the explanation is a detail.",
            "Gallons and hours are exact.",
            "A 'why' question: look for the sentence that gives the cause, sometimes in a later paragraph."
          ],
          "example": "'The basement floods because the river rises in spring.' Where does the water come from? The river."
        },
        "title": "Mine Log: The Mine Is a Well",
        "passage": [
          "Below level 300 the shaft is full of water. Every mine is a hole in the ground, and the ground is full of water, rain that soaked into the hill over years and moves slowly through cracks in the rock. When the mine was working, pumps ran day and night to keep the lower levels dry. When the mine closed and the pumps stopped, the water came back to its own level, which is here, at level 300, three hundred feet below the surface of the hill. Level 400 and the sump below it have been underwater for sixty years.",
          "Pumping it out is a matter of arithmetic and patience. A pump lowered down the shaft on a cable pushes water up a pipe to the surface at four hundred gallons a minute, and the captain measures how fast the water in the shaft drops. The tape reads two feet the first hour. The shaft is ten feet square, so two feet of it is two hundred cubic feet, far less than the pump lifts in an hour. The captain does the sum and finds where the rest comes from. Water is seeping into the shaft from the hill through every crack in the rock, and most of what the pump lifts is seepage. Two feet an hour means fifty hours to level 400.",
          "So the crew waits, and the waiting is not idle. The timber on levels 100 and 200 is replaced. The bolts on level 300 are checked. The fan runs. Every four hours the captain rides the cage down to the water and reads the tape. The log fills with a column of numbers that go down by eight, then by eight, then by six as the deeper water seeps faster. On the third day the tape touches a rail: level 400 is out of the water, black, dripping, and quiet, and the pump keeps going for the sump."
        ],
        "questions": [
          {
            "q": "Where does the water in the mine come from?",
            "choices": [
              "A river",
              "The pump",
              "The pumps that ran day and night for as long as the mine was still working",
              "Rain that soaked into the hill and moves through cracks in the rock"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How fast does the pump move water?",
            "choices": [
              "Four gallons a minute",
              "Four hundred gallons a minute",
              "Four thousand gallons every single hour",
              "Two feet of shaft every single hour"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'sump'?",
            "choices": [
              "The top of the shaft",
              "A pump",
              "The lowest part of the mine, below the last level, where water collects",
              "A kind of rock"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 1 places the sump 'below' level 400, and paragraph 3 says the pump keeps going for it.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the water drop more slowly as the shaft gets deeper?",
            "choices": [
              "Because the deeper water seeps in faster",
              "Because the pump is lowered farther down the shaft each day",
              "Because the shaft gets wider the deeper it goes into the hill",
              "Because the crew stops the pump every four hours to read the tape"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the sentence with 'by six'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The timber",
              "The fan",
              "How the captain measures the pumping and works out how long it will take",
              "The rail"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2 says it is 'a matter of arithmetic and patience'.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Pump math",
          "points": [
            "Gallons a minute × 60: gallons an hour.",
            "Area of a square: side times side.",
            "Feet to go ÷ feet an hour: hours.",
            "Common multiples: count by both numbers. 2, 4, 6, 8, 10 and 5, 10: they meet at 10."
          ],
          "example": "300 gallons a minute is 300 × 60 = 18,000 an hour."
        },
        "problems": [
          {
            "q": "The pump moves 400 gallons a minute. How many gallons an hour?",
            "answer": "24000",
            "accept": [
              "24,000"
            ],
            "hint": "400 × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "The shaft is 10 feet by 10 feet. What is its cross-section in square feet?",
            "answer": "100",
            "hint": "10 × 10.",
            "skill": "Area and perimeter"
          },
          {
            "q": "The water drops 2 feet an hour and level 400 is 100 feet below the water. How many hours to reach it?",
            "answer": "50",
            "hint": "100 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "The captain reads the water tape every 6 hours and greases the pump every 8 hours. Both happen at the start. How many hours until both happen together again?",
            "answer": "24",
            "hint": "Count by 6s and by 8s. Which number is on both lists first?",
            "skill": "Multiplying"
          },
          {
            "q": "The captain reads the tape every 4 hours for 48 hours. How many readings is that, not counting the start?",
            "answer": "12",
            "hint": "48 ÷ 4.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Say the word without the word",
            "points": [
              "Cover the word or phrase and read the sentence with a hole in it. What would you put in the hole?",
              "The sentence next door is usually the clue: an opposite, an explanation, or the result of whatever the word describes.",
              "Test your choice by putting it back in. If the sentence now claims something the report never claimed, it is the wrong one."
            ],
            "example": "'The clock ran down.' Nothing ran anywhere. It stopped, slowly, because nobody had wound it."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "The pump pushes four hundred gallons of water a minute up a pipe.",
                "Water is the most powerful force anywhere in nature.",
                "The water rose because the mine was dug underneath a lake, and the lake has been draining down into the shaft ever since the pumps stopped.",
                "The water is not an accident but the normal state of a mine with its pumps off, and getting it out is slow, measured work."
              ],
              "answer": 3,
              "hint": "Why the water is there, how fast it can be moved, and what the crew does while it waits. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "Pumping it out is a matter of arithmetic and patience."
            },
            {
              "q": "Claim: the water in the shaft is not the result of anything going wrong. Which sentence from the report best supports that claim?",
              "choices": [
                "A pump lowered down the shaft on a cable pushes water up a pipe to the surface at four hundred gallons a minute, and the captain measures how fast the water in the shaft drops.",
                "Every mine is a hole in the ground, and the ground is full of water, rain that soaked into the hill over years and moves slowly through cracks in the rock.",
                "Two feet an hour means fifty hours to level 400.",
                "Below level 300 the shaft is full of water."
              ],
              "answer": 1,
              "hint": "The claim is about where the water came from. Three of these are about how much of it there is, or how fast it is leaving.",
              "skill": "Finding details",
              "evidence": "Every mine is a hole in the ground, and the ground is full of water, rain that soaked into the hill over years and moves slowly through cracks in the rock."
            },
            {
              "q": "Why does the second paragraph work through the arithmetic instead of simply saying how long the pumping will take?",
              "choices": [
                "To teach the reader how to work out the volume of a box.",
                "To explain why the pump had to be lowered on a cable.",
                "To show that the estimate is checked against what the pump is really doing, rather than just hoped for.",
                "To compare this pump with the pumps the old miners used."
              ],
              "answer": 2,
              "hint": "Read what the captain finds at the end of the sum. The number was never the point; the check was.",
              "skill": "Author's purpose and structure",
              "evidence": "The captain does the sum and finds where the rest comes from. Water is seeping into the shaft from the hill through every crack in the rock, and most of what the pump lifts is seepage"
            },
            {
              "q": "The report says the water 'came back to its own level'. What does that phrase mean as it is used here?",
              "choices": [
                "With nothing pumping it out, the water settled where the water in that ground naturally sits",
                "The water rose all the way up the shaft and came to a stop level with the ground at the top of the hill",
                "The water went back down into the pipe it had once been pumped through, and stood there instead of in the shaft",
                "The water froze solid at the level the old miners had left it standing on the day the mine closed"
              ],
              "answer": 0,
              "hint": "The words just before it tell you what stopped, and the words just after tell you exactly where the water stopped. 'Its own' is not the mine's choice.",
              "skill": "Word meanings",
              "evidence": "When the mine closed and the pumps stopped, the water came back to its own level, which is here, at level 300, three hundred feet below the surface of the hill."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the column of numbers in the log drops by eight, then eight, then six. What does that slowing show?",
              "choices": [
                "The pump is wearing out and losing power as the days pass.",
                "The shaft gets wider below level 300, so each foot holds more water.",
                "The pump is still moving the same amount, but more water is coming in through the rock the deeper the shaft goes.",
                "The crew is switching the pump off for part of every shift."
              ],
              "answer": 2,
              "hint": "Paragraph two already told you water is still seeping in. Paragraph three tells you the numbers shrink as the water gets deeper. Put those two together.",
              "skill": "Reading between the lines",
              "evidence": "then by six as the deeper water seeps faster"
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
              "Fractions: the bottom is how many equal parts; the top is how many are done."
            ],
            "example": "6 × 7 = 42."
          },
          "problems": [
            {
              "q": "Every pump needs 4 gallons, and there are 8 pumps. How many gallons is that?",
              "answer": "32",
              "hint": "8 groups of 4, so 8 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "The captain splits 64 gallons in half. How many gallons is one half?",
              "answer": "32",
              "hint": "Half of 64.",
              "skill": "Dividing"
            },
            {
              "q": "The captain needs 900 feet of hose and has 266. How many more feet are needed?",
              "answer": "634",
              "hint": "900 − 266.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the captain has finished 7 of them. What fraction is done? (write a fraction)",
              "answer": "7/8",
              "hint": "7 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "The captain has 266 feet of hose, then adds 86 more. How many feet is that?",
              "answer": "352",
              "hint": "266 + 86.",
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
            "example": "5 × 4 − 2 × 7 = 6: both multiplications first, then subtract."
          },
          "problems": [
            {
              "q": "The pump drains 2/5 of the sump in 1/2 of an hour. At that rate, how much of the sump does it drain in one hour? (write a fraction)",
              "answer": "4/5",
              "hint": "For one hour, divide the amount by the time: 2/5 ÷ 1/2 = 2/5 × 2. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "Of 60 timbers, 75% are struck off the list. How many are left on it?",
              "answer": "15",
              "hint": "75% of 60 is 45. Take that off 60.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The captain shares 42 hours between two teams in the ratio 2 to 5. How many does the smaller share get?",
              "answer": "12",
              "hint": "2 + 5 = 7 parts. 42 ÷ 7 = 6 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The captain works out 3 × 6 − 1 × 2. What is it?",
              "answer": "16",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 194 + 56 = 1,000",
              "answer": "750",
              "hint": "Add 194 and 56 first, then take that off 1,000.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 14 ÷ 4 = 3.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Two minus signs make a plus: (−3) × (−5) = 15, and (−15) ÷ (−3) = 5. One minus sign makes a minus.",
              "A two-step equation: undo the outside step first. In 3(x + 4) = 27, divide by 3, then take off 4."
            ],
            "example": "3(x + 4) = 27, so x + 4 = 9, so x = 5."
          },
          "problems": [
            {
              "q": "The crew filled 20 ore carts in 10 minutes. At the same rate, how many minutes would 32 carts take?",
              "answer": "16",
              "hint": "One cart takes 10 ÷ 20 = 0.5. Then × 32.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A flood ruined 50% of the mine's 200 lamps. How many lamps was that?",
              "answer": "100",
              "hint": "50% of 200: 50/100 × 200.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The cage goes down from the surface to Level 400, a change of −400 feet, in equal drops of −25 feet. How many drops is that? Work it out as (−400) ÷ (−25).",
              "answer": "16",
              "hint": "400 ÷ 25, and two minus signs make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 2(x + 25) = 62",
              "answer": "6",
              "hint": "Divide both sides by 2 to get x + 25 = 31.",
              "skill": "Equations"
            },
            {
              "q": "A square trapdoor is drawn at a scale of 1 to 4. On the drawing each side is 5 inches. How many inches is the real trapdoor around the edge?",
              "answer": "80",
              "hint": "Find one real side first (5 × 4), then add up four sides.",
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
            "example": "Start at 3 and add 6 each step: the 5th number is 3 + 6 × 4 = 27."
          },
          "problems": [
            {
              "q": "The feet of new track laid go 10, 18, 26, 34, and on. What is the 8th number in the list?",
              "answer": "66",
              "hint": "It starts at 10 and adds 8 each step. The number you want is 7 steps on from 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 4² − 4?",
              "answer": "12",
              "hint": "4 × 4 = 16, then take 4 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 12 and 35 feet. How long is its longest side, in feet?",
              "answer": "37",
              "hint": "12² + 35² = 1369. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x − x = 40",
              "answer": "8",
              "hint": "6 − 1 = 5, so 5x = 40.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 12 feet across and 5 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (The radius is half the distance across.)",
              "answer": "565.2",
              "hint": "The radius is 12 ÷ 2 = 6. Volume = 3.14 × radius × radius × depth: 3.14 × 6 × 6 × 5.",
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
          "example": "'Keep pumping, unless the water is rising.'"
        },
        "skill": "Following directions",
        "steps": [
          "Write the gallons a minute the pump moves: 400.",
          "Divide by the number of feet the water drops an hour at first: 2.",
          "Subtract the number of days the pumping took to reach level 400: 3.",
          "Add the size of the shaft in feet on one side: 10.",
          "Type the result, unless the log says the water was rising, in which case type FLOOD."
        ],
        "prompt": "Your answer:",
        "answer": "207",
        "hint": "Work steps 1 to 4 through. Then read the log: step 5 only changes your answer if the water was rising."
      }
    },
    {
      "id": "mine-5",
      "title": "The Sump",
      "recon": {
        "lesson": {
          "title": "Putting the mine together",
          "points": [
            "The last log looks back over all five levels. A 'mostly about' question wants the big point, not one detail.",
            "Ounces per ton is a number with two parts. Read both.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'Twelve pounds per bag.' Two parts: twelve pounds, and each bag."
        },
        "title": "Mine Log: Ounces Per Ton",
        "passage": [
          "The sump is dry on the fifth day: a black room at the very bottom of the shaft with a foot of mud on the floor. The marks of the old miners' last shift are still on the walls, a date in chalk, sixty years old, and an arrow pointing into a drift that goes twenty feet. The drift stops at a wall of the gray rock with white in it. This is where they were when the price fell. The vein is a yard wide here, and the captain chips samples from it every foot along the twenty feet and bags each one with a number.",
          "Whether the mine reopens is a number too. The samples go to a lab that crushes them and measures the silver in ounces per ton of rock. The old records say the vein ran at twenty ounces to the ton when the mine closed, and silver then was worth only a fraction of what it is now. So twenty ounces today would be worth digging for. Anything under ten would not. The captain does not know yet, and does not guess, because a mine captain who guesses about ore is a mine captain who bankrupts a town.",
          "What the captain does know is written in the log in five lines. Level 100: eleven sets replaced, dry, good air. Level 200: bad air, fan, six sets. Level 300: fall cleared, thirty bolts, roof sound. Level 400: pumped in three days, dry. Sump: dry, twenty samples, vein a yard wide. The mine is safe to the bottom, which it was not a week ago. Whatever the lab says, that part is done, and the captain writes the day's date on the wall in chalk, under the one from sixty years ago, and rides the cage up into the light."
        ],
        "questions": [
          {
            "q": "How wide is the vein in the sump?",
            "choices": [
              "A foot at most",
              "Twenty feet",
              "An inch or two",
              "A yard"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the last sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What did the old records say the vein ran at when the mine closed?",
            "choices": [
              "Ten ounces to the ton, the lowest worth digging",
              "Two hundred ounces to the ton",
              "Twenty ounces to the ton",
              "One ounce to the ton, sixty years ago"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence with 'old records'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does 'ore' mean?",
            "choices": [
              "A rowing tool",
              "Mud",
              "The number of ounces of silver measured in a single ton of rock",
              "Rock that contains enough metal to be worth mining"
            ],
            "answer": 3,
            "hint": "A captain 'who guesses about ore' is guessing about whether the rock is worth digging.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the captain refuse to guess whether the mine will reopen?",
            "choices": [
              "Because the old records may be wrong after sixty years",
              "Because the lab has to crush all the samples before it can measure them",
              "Because a captain who guesses wrong about ore can bankrupt a town",
              "Because silver was worth only a fraction then of what it is worth now"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The chalk",
              "The cage",
              "The twenty samples chipped from the vein every foot and each bagged with a number",
              "The five levels summed up, and that the mine is safe whatever the lab says"
            ],
            "answer": 3,
            "hint": "Paragraph 3 lists the five lines of the log and ends with what the captain knows.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Ore math",
          "points": [
            "One sample per foot: count the feet.",
            "Different bottoms: make them the same first. 1/4 + 1/8 = 2/8 + 1/8 = 3/8.",
            "Yard to feet: 3.",
            "Silver's worth: dollars an ounce times ounces."
          ],
          "example": "Silver at $20 an ounce: 500 ounces is 500 × 20 = $10,000."
        },
        "problems": [
          {
            "q": "The captain took a sample every foot along 20 feet. How many samples?",
            "answer": "20",
            "hint": "One per foot.",
            "skill": "Multiplying"
          },
          {
            "q": "The crew dug out 3/8 of the sump on Monday and 1/2 of it on Tuesday. How much of the sump is dug out? (write a fraction)",
            "answer": "7/8",
            "hint": "Make the bottoms the same: 1/2 is 4/8. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "Suppose silver sells for $25 an ounce. How many dollars are 1,000 ounces worth?",
            "answer": "25000",
            "accept": [
              "25,000",
              "$25,000",
              "$25000"
            ],
            "hint": "25 × 1,000.",
            "skill": "Money and decimals"
          },
          {
            "q": "The vein is a yard wide. A yard is 3 feet. A drift 20 feet long along a 3-foot vein has how many square feet of vein on its face?",
            "answer": "60",
            "hint": "20 × 3.",
            "skill": "Area and perimeter"
          },
          {
            "q": "The old chalk date is 60 years old. If this year is 2026, what year was it written?",
            "answer": "1966",
            "hint": "2026 − 60.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Two paragraphs make the answer",
            "points": [
              "The last question will not be answered anywhere on its own. Take one fact from one paragraph and one from another.",
              "Watch for what changed between the beginning of the report and the end. The change is usually where the answer is.",
              "Check that you could point at a line in two different paragraphs before you commit. One finger is not enough."
            ],
            "example": "Paragraph one: the well was capped in spring. Paragraph three: the field is green in August. So somebody found another water supply. Neither line says that alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The old records say the vein ran at twenty ounces of silver to the ton, and that anything under ten ounces would not be worth digging for.",
                "Careful work always pays off for the person who does it, and anyone who takes a whole week over a job the way this captain did is rewarded for it.",
                "The captain decided from the twenty numbered samples that the vein is rich enough to be worth reopening the mine and putting the town back to work.",
                "The week settled everything that could be settled, and left the one question only a laboratory is able to answer."
              ],
              "answer": 3,
              "hint": "Twenty numbered bags, a guess the captain refuses to make, and a log of five lines. Ask what was finished this week and what was not.",
              "skill": "Central idea and evidence",
              "evidence": "The captain does not know yet, and does not guess, because a mine captain who guesses about ore is a mine captain who bankrupts a town."
            },
            {
              "q": "Claim: the captain will not state a result without the evidence to back it up. Which sentence from the report best supports that claim?",
              "choices": [
                "The marks of the old miners' last shift are still on the walls, a date in chalk, sixty years old, and an arrow pointing into a drift that goes twenty feet.",
                "The old records say the vein ran at twenty ounces to the ton when the mine closed, and silver then was worth only a fraction of what it is now.",
                "The captain does not know yet, and does not guess, because a mine captain who guesses about ore is a mine captain who bankrupts a town.",
                "Whatever the lab says, that part is done, and the captain writes the day's date on the wall in chalk, under the one from sixty years ago, and rides the cage up into the light."
              ],
              "answer": 2,
              "hint": "Working carefully is not the same as refusing to guess. Find the sentence that says what the captain will not do, and what doing it would cost.",
              "skill": "Finding details",
              "evidence": "The captain does not know yet, and does not guess, because a mine captain who guesses about ore is a mine captain who bankrupts a town."
            },
            {
              "q": "Why does the report list the five lines of the log one after another near the end?",
              "choices": [
                "To explain how silver is measured in ounces per ton of rock.",
                "To give the order in which the levels should be dug out when the mine reopens, starting at the top and working down.",
                "To set this mine against the mine on the other side of the hill.",
                "To show at a glance that every level was dealt with, which is the part of the job that is finished."
              ],
              "answer": 3,
              "hint": "Read the sentence that comes straight after the list. It tells you what the list is proving.",
              "skill": "Author's purpose and structure",
              "evidence": "The mine is safe to the bottom, which it was not a week ago."
            },
            {
              "q": "The report says a captain who guesses about ore 'bankrupts a town'. What is that phrase doing?",
              "choices": [
                "Explaining how the mine paid the wages of everyone in the town for the forty years it was working",
                "Saying that the town has already run out of money entirely",
                "Naming the size of the mistake: a wrong guess would cost far more than one person's money",
                "Describing what happens to a mining town when the price of silver falls the way it did sixty years ago"
              ],
              "answer": 2,
              "hint": "The sentence could have stopped at 'does not guess'. Ask what the last words add, and who they add it for.",
              "skill": "Word meanings",
              "evidence": "because a mine captain who guesses about ore is a mine captain who bankrupts a town"
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the captain writes the day's date under the one from sixty years ago. What does that say?",
              "choices": [
                "The older date was wrong and is being corrected.",
                "Chalk is the only way of recording anything underground.",
                "The captain is claiming the vein on behalf of the new owners, the way the old miners marked the wall to claim it for themselves.",
                "The work stopped at that wall once and has been picked up again, and this shift is the next mark on the same wall."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you what the old chalk mark was and when the miners stopped writing. Paragraph three tells you what has just been finished. The new date is under the old one on purpose.",
              "skill": "Reading between the lines",
              "evidence": "the captain writes the day's date on the wall in chalk, under the one from sixty years ago"
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
              "Fractions with the same bottom: the bigger top is the bigger fraction."
            ],
            "example": "4 × 7 = 28."
          },
          "problems": [
            {
              "q": "The captain carries 9 samples on each of 6 trips. How many samples is that?",
              "answer": "54",
              "hint": "6 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "Every sample bag holds 6 samples. The captain has 54 samples. How many bags can be filled?",
              "answer": "9",
              "hint": "How many 6s fit into 54?",
              "skill": "Dividing"
            },
            {
              "q": "The captain counted 238 tons in the morning and 414 in the evening. How many more in the evening?",
              "answer": "176",
              "hint": "414 − 238.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 7/8 or 5/8? (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 5 feet on each side. How many feet is it all the way around?",
              "answer": "20",
              "hint": "Four sides of 5.",
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
            "example": "(10 − 3) × (2 + 1) = 21: each set of parentheses first."
          },
          "problems": [
            {
              "q": "The plan allows 180.5 minutes. The captain uses 51.35 minutes on the first drift and 33.4 on the second. How many minutes are left?",
              "answer": "95.75",
              "hint": "Add the two amounts used first, then take that from 180.5. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 tons, 75 are set aside. Out of 160 tons, how many is that?",
              "answer": "120",
              "hint": "160 is 1.6 hundreds, so 1.6 × 75.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The captain divides 32 minutes of work in the ratio 3 to 5. How many minutes is the larger share?",
              "answer": "20",
              "hint": "8 parts in all, so one part is 4 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The captain works out (12 − 4) × (4 + 5). What is it?",
              "answer": "72",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 212 = x − 34",
              "answer": "246",
              "hint": "Add 34 to both sides.",
              "skill": "Equations"
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
            "example": "x ÷ 4 − 2 = 5, so x ÷ 4 = 7, so x = 28."
          },
          "problems": [
            {
              "q": "The job needs 12 minutes in all, at 0.5 minutes for each ore cart. One cart is already done. How many carts are left?",
              "answer": "23",
              "hint": "12 ÷ 0.5 = 24 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says the day's ore haul may change by no more than 20%. Starting from 160 tons, what is the highest haul the rule allows?",
              "answer": "192",
              "hint": "20% of 160 is 32. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The supply ledger starts at 16 lamps and falls 13 lamps on each of 3 days. What does it read at the end? (A minus number means lamps owed.)",
              "answer": "-23",
              "accept": [
                "−23"
              ],
              "hint": "13 × 3 comes off 16.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 9 − 18 = 7",
              "answer": "225",
              "hint": "Add 18 to both sides, then multiply by 9.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 8 feet. How many inches are needed for 64 feet?",
              "answer": "8",
              "hint": "64 ÷ 8.",
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
            "example": "A line starts at 6 and climbs 5 each step: after 3 steps it is 5 × 3 + 6 = 21."
          },
          "problems": [
            {
              "q": "A line passes through (0, 20) and (4, 52). What is its slope?",
              "answer": "8",
              "hint": "Slope is the rise over the run: 32 ÷ 4.",
              "skill": "Linear relationships"
            },
            {
              "q": "Two carts each carry 3² tons. How many tons in all?",
              "answer": "18",
              "hint": "3² is 9. Two carts of 9.",
              "skill": "Powers and roots"
            },
            {
              "q": "The captain goes 7 feet east and then 24 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "25",
              "hint": "The two legs make a right angle: 7² + 24² = 625.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 5x + 11 and 3x + 27 come to the same number?",
              "answer": "8",
              "hint": "Set them equal, take 3x off both sides, then take 11 off.",
              "skill": "Equations"
            },
            {
              "q": "The mine shipped 3 × 10^4 tons of ore last year. A bigger mine shipped ten times as much. Written out in full, how many tons is that?",
              "answer": "300000",
              "hint": "Ten times adds one to the power: 3 × 10^5.",
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
            "When a step says an earlier one does not belong, skip it and work on from the number before it."
          ],
          "example": "'Start with 10. Multiply by 4. That step does not belong.' Go back to 10 and add 3: you end on 13."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of samples the captain bags in the sump: 20.",
          "Multiply by the width of the vein in feet: 3.",
          "Subtract the number of lines in the captain's log: 5.",
          "Add the number of days the pumping took: 3.",
          "Step 2 does not belong on this sheet: the width of the vein is not part of a sample count. Skip it, and work steps 3 and 4 on your step 1 number instead.",
          "Type the total you end with."
        ],
        "prompt": "Your answer:",
        "answer": "18",
        "hint": "Step 5 takes the multiply out of the chain. Steps 3 and 4 still happen, but they start from the number you wrote in step 1."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
