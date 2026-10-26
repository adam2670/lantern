// ODYSSEY — campaign "lighthouse". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "lighthouse",
  "kind": "shift",
  "readingLevel": {
    "fk": 4.9,
    "cl": 5.4
  },
  "grade": "5",
  "kindLabel": "Mystery",
  "form": "puffin",
  "title": "The Lighthouse",
  "subtitle": "Gull Rock, a mile off a cold coast",
  "pitch": "Five nights keeping a lighthouse where the log books do not add up. Something climbs the stairs after the lamp is lit. Find out what.",
  "scene": "assets/scene-lighthouse.jpg",
  "progress": {
    "unit": "nights",
    "total": 5
  },
  "dayNoun": "Night",
  "stageNoun": "Night",
  "finalNoun": "Dawn",
  "stages": [
    "Night 1",
    "Night 2",
    "Night 3",
    "Night 4",
    "Night 5"
  ],
  "reconNoun": "Keeper's Log",
  "legs": {
    "recon": "Keeper's log",
    "nav": "Lamp oil",
    "orders": "Keeper's rules",
    "debrief": "Morning entry"
  },
  "fact": "Every keeper before you wrote in the log. Read what they wrote. Then read it again.",
  "finale": {
    "prompt": "Dawn. Which lantern goes in the cottage window tonight?",
    "options": [
      {
        "label": "Amber",
        "color": "#FFB454"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      },
      {
        "label": "Blue",
        "color": "#4FD1FF"
      },
      {
        "label": "Green",
        "color": "#4FD18B"
      }
    ],
    "done": "Logged. Hang it. Then sleep."
  },
  "patrols": [
    {
      "id": "light-1",
      "title": "Taking the Lamp",
      "recon": {
        "lesson": {
          "title": "Reading an old log",
          "points": [
            "Read the five questions first. Two details, one word, one why, one 'mostly about'.",
            "Keepers define their own words as they go, often with 'is to' or 'which means'. Find that sentence.",
            "'Why' questions in a log: the keeper usually shows the reason in the next sentence rather than saying 'because'."
          ],
          "example": "'Every keeper writes the same first line.' Ask what would make forty different people write the same thing."
        },
        "title": "Keeper's Log: Taking the Lamp",
        "passage": [
          "Gull Rock is a mile off the coast and a hundred years old, and its logbook is older than anything else on it. Every keeper who has ever kept the lamp has written in the same book, one page a night. Every one of them wrote the same first line on their first night: lamp lit at dusk, oil at four gallons, all well. You are the fortieth keeper. Write the line. Then read the thirty-nine before you.",
          "The lamp is the whole job. At dusk you climb the tower, fill the reservoir with four gallons of oil, trim the wick, and light it. To trim a wick is to cut its burnt end flat with the keeper's scissors so the flame burns even; a ragged wick smokes, and a smoking lamp cannot be seen through fog. The lamp burns until dawn on four gallons exactly. The old keepers measured it a thousand times. Four gallons in, four gallons burned, never more.",
          "Except that for the last two years the tank has gone down five gallons a night, not four, and nobody wrote down why. The previous keeper's final entry says only: the stairs again, and I have moved the spare lantern. Read that twice. Then go and light the lamp, and when the tower starts to creak, which it will, come back down and read the older logs. They knew about it. They always know."
        ],
        "questions": [
          {
            "q": "How much oil does the lamp burn from dusk to dawn?",
            "choices": [
              "A gallon",
              "Ten gallons every night",
              "A quart",
              "Four gallons"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentences about the old keepers measuring it.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does it mean to 'trim' a wick?",
            "choices": [
              "To soak it in oil",
              "To cut its burnt end flat so the flame burns even",
              "To light it",
              "To pull a fresh length of wick up out of the reservoir before lighting"
            ],
            "answer": 1,
            "hint": "The sentence that begins 'To trim a wick is to'.",
            "skill": "Word meanings"
          },
          {
            "q": "What did the previous keeper's final entry say?",
            "choices": [
              "The stairs again, and I have moved the spare lantern",
              "All well",
              "The lamp is out",
              "Lamp lit at dusk, oil at four gallons, all well, and nothing more"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the sentence with 'final entry'.",
            "skill": "Finding details"
          },
          {
            "q": "Why does the log tell you to read the older entries when the tower starts to creak?",
            "choices": [
              "Because earlier keepers already met the same creak and wrote what they learned",
              "Because the log has to be read from the first page onward",
              "Because the lamp needs a full hour to warm up, and there is nothing else to do while you wait",
              "Because the creak is the sound of the previous keeper still climbing the stairs at night"
            ],
            "answer": 0,
            "hint": "The last two sentences of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How to trim a wick flat with the keeper's scissors so it will not smoke",
              "How old Gull Rock is, and how far out from the coast the tower stands",
              "The oil that goes missing and the clue the last keeper left",
              "The keeper's scissors and the four gallons of oil poured at dusk"
            ],
            "answer": 2,
            "hint": "Paragraph 3 starts with 'Except'. What is the exception about?",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Oil and nights",
          "points": [
            "Gallons a night times nights: 7 × 3 = 21.",
            "A tank divided by nightly use gives nights: 48 ÷ 6 = 8.",
            "A fraction times a whole number: 4 × 3/5 is four 3/5s, which is 12/5.",
            "Two-step: burn for the week, then add the spare."
          ],
          "example": "Money: 9 boxes of nails at $2 each is 9 × 2 = $18."
        },
        "problems": [
          {
            "q": "The lamp burns 4 gallons a night. How many gallons does it burn in 5 nights?",
            "answer": "20",
            "hint": "4 × 5.",
            "skill": "Multiplying"
          },
          {
            "q": "The tank holds 60 gallons. At 4 gallons a night, how many nights will it last?",
            "answer": "15",
            "hint": "60 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "Each of the 6 brass fittings on the lamp takes 1/3 of a cup of polish. How many cups of polish for all 6?",
            "answer": "2",
            "hint": "Six 1/3s is 6/3. Three thirds make one cup.",
            "skill": "Fractions"
          },
          {
            "q": "The lamp needs 4 gallons a night for 5 nights, plus 5 spare gallons for fog. How many gallons should you have ready?",
            "answer": "25",
            "hint": "4 × 5 first. Then add 5.",
            "skill": "Multi-step problems"
          },
          {
            "q": "A gallon of lamp oil costs $3. The keeper orders 20 gallons for the month. How much does that cost?",
            "answer": "60",
            "hint": "3 × 20.",
            "accept": [
              "$60",
              "60.00",
              "$60.00"
            ],
            "skill": "Money and decimals"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The whole log in one line",
            "points": [
              "The central idea has to cover every paragraph. Label each one in four words, then find the choice all three labels serve.",
              "The wrong answers are usually true. They cover one paragraph, or they are a saying about old places that the log never makes.",
              "Then four other moves: prove a claim with one line, name what a paragraph is for, work a word out from its sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a village bakery: the hour the oven is lit, how the loaves are counted, the morning the count came up wrong. 'The oven is lit at four' covers one paragraph. 'Bread is important' covers none of it. 'A routine measured to the minute is what makes one odd morning obvious' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole entry?",
              "choices": [
                "To trim a wick is to cut its burnt end flat so the flame burns even.",
                "Old jobs are always done more carefully than new ones.",
                "The tank has always gone down exactly four gallons a night, four gallons in and four gallons burned, in every one of the hundred years the light has been kept.",
                "The job is a set of exact routines, and a hundred years of writing them down is what makes it obvious when something has stopped being exact."
              ],
              "answer": 3,
              "hint": "The same first line for forty keepers, four gallons measured a thousand times, and two years of five. Ask what all three are building toward, and cross off the choice the last paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "Except that for the last two years the tank has gone down five gallons a night, not four, and nobody wrote down why."
            },
            {
              "q": "Claim: the four-gallon figure is not somebody's rough guess. Which sentence from the entry best supports that claim?",
              "choices": [
                "To trim a wick is to cut its burnt end flat with the keeper's scissors so the flame burns even; a ragged wick smokes, and a smoking lamp cannot be seen through fog.",
                "The old keepers measured it a thousand times.",
                "Then read the thirty-nine before you.",
                "The lamp is the whole job."
              ],
              "answer": 1,
              "hint": "Three of these are about other parts of the job and say nothing about the amount. Find the sentence that says how the amount came to be known.",
              "skill": "Finding details",
              "evidence": "The old keepers measured it a thousand times."
            },
            {
              "q": "Why does the entry stop in the middle of the lamp paragraph to explain what trimming a wick is?",
              "choices": [
                "It shows that even the smallest step has a reason, and the reason is whether the light can be seen at all.",
                "It compares the keeper's scissors with the other tools in the tower.",
                "It explains how fog forms around the rock at night.",
                "It gives the order of the steps for filling the main tank, from carrying the oil up the tower to measuring out four gallons."
              ],
              "answer": 0,
              "hint": "Follow the sentence to its end. It does not stop at what trimming is; it goes on to what happens without it. That second half is the reason it is there.",
              "skill": "Author's purpose and structure",
              "evidence": "To trim a wick is to cut its burnt end flat with the keeper's scissors so the flame burns even; a ragged wick smokes, and a smoking lamp cannot be seen through fog."
            },
            {
              "q": "The entry ends: 'They knew about it. They always know.' What does that mean as it is used here?",
              "choices": [
                "The older logs already hold the answer a new keeper is trying to work out",
                "The old keepers can always tell when a new keeper out on the rock is frightened",
                "The old keepers always guessed the weather correctly",
                "Everyone back in the village already knows perfectly well what happens out on the rock"
              ],
              "answer": 0,
              "hint": "Look at the sentence just before it, which tells you where to go when the tower creaks. Whoever they are, the sentence has already said where to find them.",
              "skill": "Word meanings",
              "evidence": "Then go and light the lamp, and when the tower starts to creak, which it will, come back down and read the older logs."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why you are told to read the previous keeper's last line twice. Why should you?",
              "choices": [
                "The line is hard to read because of the ink the keeper before you used, so it has to be gone over twice before it makes sense.",
                "The line names the fortieth keeper by number rather than by name, and a keeper is expected to find their own number somewhere on the page.",
                "Every keeper writes the same opening line, so a last line that says something else was written on purpose.",
                "The line lists the four gallons of oil that go into the lamp each night, which is the way every keeper ends a page."
              ],
              "answer": 2,
              "hint": "Paragraph one tells you what every keeper writes on their first night. The last paragraph gives you one keeper's final sentence. Ask what the difference between those two is worth.",
              "skill": "Reading between the lines",
              "evidence": "The previous keeper's final entry says only: the stairs again, and I have moved the spare lantern."
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
              "Taking away with regrouping: 523 − 185. Borrow when the top digit is smaller. 338.",
              "Same-bottom fractions: the whole is 5/5, so 5/5 − 2/5 = 3/5."
            ],
            "example": "A mat 7 squares on each side is 7 rows of 7, or 49 squares."
          },
          "problems": [
            {
              "q": "The keeper counted 5 gallons yesterday and three times as many today. How many gallons today?",
              "answer": "15",
              "hint": "Three times 5: 5 + 5 + 5.",
              "skill": "Multiplying"
            },
            {
              "q": "The keeper uses 5 gallons a night. How many nights do 45 gallons last?",
              "answer": "9",
              "hint": "How many 5s make 45?",
              "skill": "Dividing"
            },
            {
              "q": "The keeper starts with 411 gallons of oil and uses 114. How many are left?",
              "answer": "297",
              "hint": "411 − 114.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "3/6 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "3/6",
              "hint": "The whole job is 6/6. Take 3/6 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square wick mat is 6 squares on each side. How many squares is that?",
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
              "Multiplying a decimal by a whole number: multiply as if there were no point, then put the point back. 6 × 1.15: 6 × 115 = 690, so 6.90, which is 6.9.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "6 + 3 × 7: multiply first, 3 × 7 = 21, then 6 + 21 = 27."
          },
          "problems": [
            {
              "q": "Each night takes 1.65 gallons of oil. How many gallons for 13 nights?",
              "answer": "21.45",
              "hint": "Split it: 13 × 1 plus 13 × 0.65.",
              "skill": "Decimals"
            },
            {
              "q": "12 of the 60 gallons of oil are set aside. What percent is that? (write just the number)",
              "answer": "20",
              "accept": [
                "20%"
              ],
              "hint": "12 out of 60, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 3 nights there are 5 gallons of oil. There are 40 gallons of oil. How many nights?",
              "answer": "24",
              "hint": "40 ÷ 5 = 8 groups. Each group has 3 nights.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper works out 10 + 3 × 9. What is it?",
              "answer": "37",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the thermometer read 5 degrees. By dark it had fallen to −15 degrees. By how many degrees did it fall?",
              "answer": "20",
              "hint": "From 5 down to 0 is 5, then 15 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "Rate times how many: if one box holds 3.5 pounds, 6 boxes hold 6 × 3.5 = 21 pounds.",
              "Percent change: the change ÷ the starting number, times 100. From 40 to 50 is 10 ÷ 40, which is 25%.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "9x + 5 = 50, so 9x = 45, so x = 5."
          },
          "problems": [
            {
              "q": "One night needs 2.5 gallons. How many gallons do 12 nights need?",
              "answer": "30",
              "hint": "12 × 2.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper counted 200 gallons of oil on the first pass and 220 on the second. By what percent did the count change? (write just the number)",
              "answer": "10",
              "accept": [
                "10%"
              ],
              "hint": "The change is 20. 20 out of 200, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer read −17 degrees at dawn and −34 degrees at dark. How many degrees did it fall?",
              "answer": "17",
              "hint": "From −17 down to −34.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 35 − 7x = 7",
              "answer": "4",
              "hint": "Move 7x to the right and 7 to the left: 7x = 28.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 5 feet. The rock is really 35 feet long. How many inches is it on the plan?",
              "answer": "7",
              "hint": "35 ÷ 5.",
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
            "example": "Start with 50 and use 6 each hour: after 4 hours, 50 − 6 × 4 = 26 are left."
          },
          "problems": [
            {
              "q": "The keeper starts with 36 pints of oil and the lamp burns 3 every hour. How many pints are left after 8 hours?",
              "answer": "12",
              "hint": "3 × 8 = 24 used, taken off 36.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 9 small cubes along every edge. How many small cubes make it up?",
              "answer": "729",
              "hint": "9³ means 9 × 9 × 9.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 15-foot rope runs from the top of a pole to a point 12 feet away on the ground. How tall is the pole, in feet?",
              "answer": "9",
              "hint": "a² = c² − b² = 225 − 144 = 81. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x = 3x + 4",
              "answer": "2",
              "hint": "Take 3x off both sides: 2x = 4. Then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "The log says the lamp has burned 20,000 gallons of oil over the years. Written as 2 × 10 to a power, what is the power?",
              "answer": "4",
              "hint": "Count the zeros after 2.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "The reservoir holds exactly four",
          "points": [
            "Do the steps in order and write the running number.",
            "A step that says 'if the total is more than', can only be checked after the total. Read to the end first."
          ],
          "example": "If a step says 'unless the boat leaks more than the pump clears', put the two numbers side by side: 6 is more than 5, so the 'unless' wins."
        },
        "skill": "Following directions",
        "steps": [
          "Thirty-nine keepers wrote in the book before you. Write 39.",
          "Add yourself, the fortieth.",
          "Divide by the 4 gallons the lamp burns from dusk to dawn.",
          "Add the 5 gallons the main tank actually goes down each night.",
          "Type the result, unless the tank loses more gallons a night than the lamp burns, in which case type MISSING instead."
        ],
        "prompt": "Your answer:",
        "answer": "MISSING",
        "accept": [
          "missing",
          "Missing",
          "missing."
        ],
        "hint": "The division comes out even. Step 5 then asks you to hold two numbers from the passage side by side: what the tank loses and what the lamp burns."
      }
    },
    {
      "id": "light-2",
      "title": "The Stairs",
      "recon": {
        "lesson": {
          "title": "Patterns in a log",
          "points": [
            "When several keepers describe the same thing, the details they agree on are the clue. Note what is always true.",
            "'Landing' is defined in the log. Find the sentence.",
            "A 'why does it always' question wants the pattern, not one night."
          ],
          "example": "Made-up example: five campers all say the raccoon came at midnight, from the woods, to the trash can. What they all agree on is the clue."
        },
        "title": "Keeper's Log: The Stairs",
        "passage": [
          "The tower has ninety-six iron steps in eight flights, and between each flight is a landing, the flat square platform where you can stop and catch your breath before the next climb. The keepers number the landings from the bottom, one to eight. The lamp room sits above the eighth. On a still night, with the sea quiet, you can hear a coin dropped on landing one from the top.",
          "Thirty-one of the thirty-nine keepers wrote about the creak, and they all wrote the same thing. It begins about twenty minutes after the lamp is lit. It begins at the bottom. It sounds like a slow, heavy step on iron, and then another, and it climbs: landing one, then two, a few minutes between each, all the way to eight. Then it stops. Nobody has ever heard it come down. On the coldest nights it is loudest. In summer, when the tower is already warm, some keepers heard nothing at all.",
          "The eleventh keeper, a woman who kept the rock for nine years, was the first to time it with a watch, and she wrote her numbers in the margin. Twenty minutes to the first step. Five minutes a landing after that. Sixty minutes from lighting to the top, every single night she measured, in winter and in autumn. She underlined every single night. She did not write what she thought it was. She wrote: the tower is telling you something, and it is always the same thing."
        ],
        "questions": [
          {
            "q": "How many landings does the tower have?",
            "choices": [
              "Eight",
              "Four",
              "Six",
              "Ninety-six"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence with 'one to eight'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'landing'?",
            "choices": [
              "The flat platform between flights of stairs",
              "The bottom step, where the creak begins",
              "The lamp room above the eighth flight",
              "The rock where the boat ties up"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 1 defines it.",
            "skill": "Word meanings"
          },
          {
            "q": "In which direction does the creak travel?",
            "choices": [
              "Down from the lamp room at the top",
              "Up from the bottom landing",
              "Around in a circle",
              "It does not move"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentences about where it begins and where it stops.",
            "skill": "Finding details"
          },
          {
            "q": "What does the log suggest by noting that the creak is loudest on cold nights and sometimes absent in summer?",
            "choices": [
              "A keeper's hearing is sharper on a cold night than it ever is on a warm summer one",
              "Fewer keepers were on the rock in summer, so there was nobody awake to hear the creak",
              "The sea is quieter in winter, so a sound made on landing one carries all the way up",
              "The creak has something to do with the tower warming up after the lamp is lit"
            ],
            "answer": 3,
            "hint": "Put the cold-night detail next to 'when the tower is already warm'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How long the eleventh keeper stayed on the rock, and the nine years she spent keeping the lamp",
              "The eleventh keeper timing the creak and finding it is exactly the same every night",
              "The twenty minutes before the first step, and what it is inside the tower that causes them",
              "The thirty-one keepers who wrote about the creak and the words each of them used for it"
            ],
            "answer": 1,
            "hint": "Every sentence in paragraph 3 is about her numbers and what they showed.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Steps and landings",
          "points": [
            "Rows times seats in each row: 14 × 6 = 84.",
            "Two steps: 4 minutes a stop for 7 stops is 4 × 7 = 28, then add the first 15 to get 43.",
            "Same bottom: 9/10 − 4/10 = 5/10, which is a half.",
            "Sharing equally is dividing: 75 ÷ 5 = 15."
          ],
          "example": "Taking away: 84 − 47. 84 − 40 = 44, then 44 − 7 = 37."
        },
        "problems": [
          {
            "q": "Each flight has 12 steps and there are 8 flights. How many steps in the tower?",
            "answer": "96",
            "hint": "12 × 8.",
            "skill": "Multiplying"
          },
          {
            "q": "The creak starts 20 minutes after the lamp is lit, then takes 5 minutes for each of the 8 landings. How many minutes from lighting the lamp until it reaches the top?",
            "answer": "60",
            "hint": "5 × 8 = 40 first. Then add 20.",
            "skill": "Multi-step problems"
          },
          {
            "q": "You climbed 7/8 of the tower before stopping to listen, then came down 3/8. Where are you now? (write a fraction)",
            "answer": "4/8",
            "hint": "Same bottom. Subtract the tops. 4/8 or 1/2 both count.",
            "accept": [
              "1/2"
            ],
            "skill": "Fractions"
          },
          {
            "q": "The 96 steps are shared equally among the 8 flights. How many steps per flight?",
            "answer": "12",
            "hint": "96 ÷ 8.",
            "skill": "Dividing"
          },
          {
            "q": "The tower has 96 steps. You have climbed 58 of them. How many steps are left?",
            "answer": "38",
            "hint": "96 − 58.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "True is not the same as proof",
            "points": [
              "A supporting sentence has to settle the claim by itself. Read the claim, read your pick, and ask whether anyone could still argue.",
              "All four choices are real sentences from the entry, so being true earns nothing. Only proving counts.",
              "The usual trap is a sentence that shares a word with the claim and proves none of it."
            ],
            "example": "Claim: the sound never comes back down. 'It climbs to landing eight' is true and proves nothing about coming down. 'Nobody has ever heard it come down' is proof."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole entry?",
              "choices": [
                "The creak is not a story that changes with the teller: it arrives at the same time, in the same order, and it can be timed with a watch.",
                "The tower has ninety-six iron steps in eight flights with a landing between each one, and a coin dropped at the bottom can be heard at the top.",
                "Old buildings are frightening places to be at night.",
                "Every keeper who wrote about the creak described something different, so there are thirty-one different accounts of it and no two of them agree at all."
              ],
              "answer": 0,
              "hint": "Thirty-one keepers agreeing, a sound that climbs in order, and a woman with a watch. Ask what all three add up to, and cross off the choice the second paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "Thirty-one of the thirty-nine keepers wrote about the creak, and they all wrote the same thing."
            },
            {
              "q": "Claim: on some nights the creak does not happen at all. Which sentence from the entry best supports that claim?",
              "choices": [
                "In summer, when the tower is already warm, some keepers heard nothing at all.",
                "On the coldest nights it is loudest.",
                "It begins about twenty minutes after the lamp is lit.",
                "Nobody has ever heard it come down."
              ],
              "answer": 0,
              "hint": "Stopping at the top is not the same as never starting. Find the sentence that names a season and a keeper who heard nothing.",
              "skill": "Finding details",
              "evidence": "In summer, when the tower is already warm, some keepers heard nothing at all."
            },
            {
              "q": "Why does the first paragraph give the steps, the flights and the numbered landings before the creak is even mentioned?",
              "choices": [
                "It explains how the tower was bolted down onto the rock.",
                "It sets up the counting that the rest of the entry depends on, landing by landing and minute by minute.",
                "It compares the tower with the keeper's cottage below it.",
                "It describes what a keeper has to carry up to the lamp room, and how many flights of stairs it has to be carried up."
              ],
              "answer": 1,
              "hint": "Read the sentence in paragraph two that follows the sound upward, and the numbers in paragraph three. Ask what you would need to know already for either to make sense.",
              "skill": "Author's purpose and structure",
              "evidence": "It sounds like a slow, heavy step on iron, and then another, and it climbs: landing one, then two, a few minutes between each, all the way to eight."
            },
            {
              "q": "The eleventh keeper wrote: 'the tower is telling you something, and it is always the same thing'. What does she mean by that?",
              "choices": [
                "The tower speaks aloud in words, to whoever happens to be standing inside it and listening",
                "A keeper should always write down for the next keeper whatever she happened to hear",
                "The tower is warning the keeper that its iron is about to give way and that it will fall",
                "The creak is a message that can be read, precisely because it never varies"
              ],
              "answer": 3,
              "hint": "She has just written her numbers and underlined three words. Ask what she thinks is worth underlining, and let that fix what telling means here.",
              "skill": "Word meanings",
              "evidence": "Sixty minutes from lighting to the top, every single night she measured, in winter and in autumn."
            },
            {
              "q": "Paragraphs 2 and 3 together suggest why the eleventh keeper underlined the words 'every single night'. Why did she?",
              "choices": [
                "She wanted the next keeper to check her arithmetic for her, because she was not sure the five minutes a landing she had timed was right.",
                "Something that keeps to the same schedule every night is not something coming and going; it is something the tower itself does.",
                "She had heard the sound come back down the tower on one occasion, which no other keeper in the book has ever managed to write about.",
                "She was the only keeper who ever heard the creak at all, so the numbers she wrote in the margin are the only record anyone has of it."
              ],
              "answer": 1,
              "hint": "Paragraph two says thirty-one keepers heard the same thing. Paragraph three says one of them timed it and found it identical. Ask what those two facts rule out together.",
              "skill": "Reading between the lines",
              "evidence": "She underlined every single night."
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
              "Add, then take away, in order: 200 + 40 − 15 is 240, then 225.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "Take away twice: 600 − 120 = 480, then 480 − 35 = 445."
          },
          "problems": [
            {
              "q": "The keeper sets the oil cans out in 2 rows of 3. How many oil cans is that?",
              "answer": "6",
              "hint": "2 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "24 oil cans are set out in 8 equal rows. How many oil cans are in each row?",
              "answer": "3",
              "hint": "24 split into 8 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 176 gallons of oil, then 117 more are added and 56 are used. What does the log show now?",
              "answer": "237",
              "hint": "Add 176 and 117 first, then take 56 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 2/4 + 1/4 (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. 2 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "The keeper plans to paint 800 feet of railing. 145 feet are done and 56 more are under way. How many feet are still untouched?",
              "answer": "599",
              "hint": "Take 145 off 800, then take 56 off that.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Dividing by a fraction: 3 ÷ 1/5 asks how many fifths fit in 3. Each whole holds 5, so 3 × 5 = 15.",
              "Percent to whole: if 10% is 9, the whole is 10 times as big, 90.",
              "To simplify a ratio, divide both sides by the same number: 14:21 is 2:3.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(4 + 2) × 9: parentheses first make 6, then 6 × 9 = 54."
          },
          "problems": [
            {
              "q": "The keeper has 2 gallons of lamp oil. The lamp burns 1/8 of a gallon each hour. How many hours will the oil last?",
              "answer": "16",
              "hint": "Dividing by 1/8 is the same as multiplying by 8: 2 × 8.",
              "skill": "Fractions"
            },
            {
              "q": "20% of the steps counted is 16. How many were counted in all?",
              "answer": "80",
              "hint": "16 is 20 hundredths of the whole: 16 ÷ 20 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper counts 18 windows and 30 steps. In its simplest form, what is the ratio of windows to steps? (write it like 2:3)",
              "answer": "3:5",
              "accept": [
                "3 to 5"
              ],
              "hint": "Divide both by 6.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper works out (8 + 5) × 7. What is it?",
              "answer": "91",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "It was −5 degrees at midnight and rose 2 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "-3",
              "accept": [
                "−3"
              ],
              "hint": "Start at −5 and count 2 steps up.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: total ÷ size of one. 9 ÷ 1.5 = 6.",
              "Undoing a drop: after a 25% drop the new number is 75% of the old. If 75% is 36, 25% is 12, and the old number was 48.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "With parentheses, like 4(x + 1) = 24, undo the outside first: divide by 4, then take 1 off. x = 5."
            ],
            "example": "Circle area is 3.14 × radius × radius. Radius 10: 3.14 × 10 × 10 = 314."
          },
          "problems": [
            {
              "q": "The keeper has 10 gallons of oil and each night burns 1.25 gallons. How many nights is that enough for?",
              "answer": "8",
              "hint": "10 ÷ 1.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The number of steps left to climb fell by 50% to 20. How many steps were left before?",
              "answer": "40",
              "hint": "20 is 50% of the old number.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer falls 4 degrees every hour for 6 hours. What is the total change? (Write a fall as a negative number.)",
              "answer": "-24",
              "accept": [
                "−24"
              ],
              "hint": "6 hours of −4 each: 6 × (−4). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 3) × 3 = 15",
              "answer": "2",
              "hint": "Divide both sides by 3 first, then take 3 off.",
              "skill": "Equations"
            },
            {
              "q": "A round sign has a radius of 5 inches. Using 3.14 for pi, what is its area in square inches?",
              "answer": "78.5",
              "hint": "Area = 3.14 × radius × radius: 3.14 × 5 × 5.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "Roots undo powers: 9² = 81, so the square root of 81 is 9. And 3³ = 27, so the cube root of 27 is 3.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "y = 4x + 9 when x = 6: 4 × 6 + 9 = 33."
          },
          "problems": [
            {
              "q": "The number of steps the keeper has climbed follows the rule y = 5x + 24, where x is the hour. What is y when x = 5?",
              "answer": "49",
              "hint": "Put 5 in for x: 5 × 5 + 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube has a volume of 216 cubic feet. How long is one edge, in feet?",
              "answer": "6",
              "hint": "What number × itself × itself makes 216?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 5-foot rope reaches the top of a 3-foot pole. How far is the foot of the rope from the base, in feet?",
              "answer": "4",
              "hint": "b² = c² − a² = 25 − 9 = 16. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x + 30 − x = 51",
              "answer": "7",
              "hint": "Collect the x's first: 3x + 30 = 51.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 5 feet and is 2 feet deep. Using 3.14 for pi, what is its volume in cubic feet?",
              "answer": "157",
              "hint": "Volume = 3.14 × radius × radius × depth: 3.14 × 5 × 5 × 2.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Round down",
          "points": [
            "Add first, then divide, then read the last step for what to do with the leftover.",
            "'Rounded down' means drop everything after the decimal point: 7.6 becomes 7."
          ],
          "example": "3 + 5 = 8, and 8 + 9 = 17. 17 divided by 5 is 3.4. Rounded down, that is 3."
        },
        "skill": "Following directions",
        "steps": [
          "The tower has 96 iron steps in 8 flights.",
          "Divide the steps by the flights to get the steps in one flight.",
          "You were awake for the creak on landings 2, 4 and 6. Add those three landing numbers together.",
          "Add your two numbers.",
          "The creak takes 5 minutes for each landing. Divide your total by 5.",
          "That division does not come out even. Type your answer rounded down to a whole number."
        ],
        "prompt": "Your answer:",
        "answer": "4",
        "hint": "Work the two totals out separately before you add them. Step 6 decides what happens to the part after the decimal point."
      }
    },
    {
      "id": "light-3",
      "title": "Iron and Heat",
      "recon": {
        "lesson": {
          "title": "The explanation night",
          "points": [
            "When a log finally explains something, check the explanation against each clue from the earlier nights.",
            "'Expansion' is defined in the log. Find the sentence with 'which means'.",
            "'Why' questions: look for the word 'so'. What comes before 'so' is the reason."
          ],
          "example": "Made-up example: 'The kitchen floor is cold, so the cat sleeps on the rug.' The reason comes before 'so'."
        },
        "title": "Keeper's Log: Iron and Heat",
        "passage": [
          "The twenty-second keeper was a shipwright before he was a keeper, and he had spent his life around iron. On his third night he wrote the explanation, and it is the reason most keepers after him slept fine. Iron grows when it is warm. Not much, a hair's width over a whole flight of stairs, but the tower is bolted tight to the rock, and a hair's width of growth in a bolted stair has to go somewhere. It goes into a creak. The word he used was expansion, which means the way a material gets slightly bigger as it warms.",
          "Here is the part that took him three nights. The lamp is at the top, but the warmth does not start there. The lamp room has a floor vent and a roof chimney, and when the lamp is lit, air is drawn up the stairwell from the warm stove room at the bottom to feed the flame. So the first iron to feel the change is the bottom flight, as the stove room's warm air moves across it and the stairwell starts to breathe. Then the next flight. Then the next. The creak climbs because the warmth climbs, one landing at a time, and it stops at the top because there is nowhere left to go.",
          "On a cold night the iron has further to grow, so the creak is louder. In summer the tower is already warm, so there is little growing to do, and some nights nothing. Twenty minutes is how long it takes a lamp to warm a stairwell. Five minutes a landing is how fast the warmth climbs. The eleventh keeper's numbers were right. She had measured a tower breathing. He wrote at the bottom of the page: it is not steps. It is the building waking up. Go to sleep."
        ],
        "questions": [
          {
            "q": "What was the twenty-second keeper before he was a keeper?",
            "choices": [
              "A fisherman from the village",
              "A shipwright",
              "A schoolteacher on the mainland",
              "A sailor"
            ],
            "answer": 1,
            "hint": "First sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does 'expansion' mean?",
            "choices": [
              "A crack that opens in the iron as it cools",
              "The way a material gets slightly bigger as it warms",
              "The loud noise that a bolted stair makes as it is climbed",
              "A new flight of stairs added on to the top of the old tower"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 1 defines it with 'which means'.",
            "skill": "Word meanings"
          },
          {
            "q": "Where does the air that feeds the lamp come from when it is lit?",
            "choices": [
              "Through the lamp room windows, from the sea",
              "Down the roof chimney from the night sky",
              "From the stove room at the bottom, up the stairwell",
              "Out of the oil reservoir beside the wick"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence about the vent and the chimney.",
            "skill": "Finding details"
          },
          {
            "q": "Why does the creak start at the bottom even though the lamp is at the top?",
            "choices": [
              "The lamp pulls warm air up from the stove room at the bottom, so the bottom flight feels the change first",
              "Sound made anywhere in the tower always travels upward, never down",
              "The bottom flight carries the weight of all eight flights above it, so it is the first iron to give",
              "The chimney in the lamp room roof pushes the warm air back down the stairwell to the bottom door first"
            ],
            "answer": 0,
            "hint": "Paragraph 2, from 'So the first iron' onward.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the twenty-second keeper came to write his explanation on only his third night",
              "The eleventh keeper's numbers, the margin she wrote them in, and the nine years she spent measuring the creak",
              "How the lamp room vent and the chimney draw warm air up the stairwell from the stove room at the bottom of the tower",
              "How the explanation accounts for every earlier clue: cold nights, summer, twenty minutes, five a landing"
            ],
            "answer": 3,
            "hint": "Paragraph 3 walks through each earlier detail and explains it.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Perimeter, wicks and hours",
          "points": [
            "Perimeter of a 4 by 4 room: 4 + 4 + 4 + 4 = 16.",
            "Matches at $3 a box, five boxes: 3 × 5 = $15.",
            "Hours to minutes: 4 hours is 4 × 60 = 240.",
            "Hundredths as decimals: 6/100 is 0.06 and 75/100 is 0.75."
          ],
          "example": "Sharing equally: 54 candles over 6 months is 54 ÷ 6 = 9 a month."
        },
        "problems": [
          {
            "q": "The lamp room floor is 3 meters by 3 meters. What is its perimeter in meters?",
            "answer": "12",
            "hint": "Add all four sides.",
            "skill": "Area and perimeter"
          },
          {
            "q": "Wicks cost $2 each. The keeper buys 6 for the winter. How much do they cost?",
            "answer": "12",
            "hint": "2 × 6.",
            "accept": [
              "$12",
              "12.00",
              "$12.00"
            ],
            "skill": "Money and decimals"
          },
          {
            "q": "The lamp burns for 6 hours before the fog lifts. How many minutes is that?",
            "answer": "360",
            "hint": "6 × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "The oil tank gauge is marked in hundredths. It shows 58/100 full. Write that as a decimal.",
            "answer": "0.58",
            "hint": "58 hundredths: two places after the point.",
            "skill": "Decimals"
          },
          {
            "q": "The winter's 84 wicks are used at the same rate over 7 months. How many wicks is that a month?",
            "answer": "12",
            "hint": "84 ÷ 7.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What the paragraph is doing",
            "points": [
              "Every paragraph has a job: to state a cause, to explain how something spreads, to test an idea against the evidence, or to answer an objection.",
              "Find the job by deleting the paragraph in your head. What would you no longer know? That missing thing is the job.",
              "A choice that only retells the paragraph has named nothing. Look for the one that says why the paragraph is in the entry."
            ],
            "example": "A page about a leaking roof spends one paragraph on how water runs along a beam before it drips. Its job is not to describe a beam. It is to explain why the puddle is nowhere near the hole."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole entry?",
              "choices": [
                "Expansion means the way a material gets slightly bigger as it warms, which is a hair's width across a whole flight of iron stairs.",
                "The creak has an ordinary cause: the lamp draws warmth up the tower from the bottom, and warming iron has to move somewhere.",
                "Every mystery in an old building comes down to the weather in the end.",
                "The lamp warms the top of the tower first, and the creak works its way down the flights from the lamp room to the door at the bottom."
              ],
              "answer": 1,
              "hint": "Iron that grows, air drawn up a stairwell, and numbers that match a keeper from long before. Ask what all three are serving, and cross off the choice the entry reverses.",
              "skill": "Central idea and evidence",
              "evidence": "The creak climbs because the warmth climbs, one landing at a time, and it stops at the top because there is nowhere left to go."
            },
            {
              "q": "Claim: the sound stops at the top of the tower rather than turning around and coming back. Which sentence from the entry best supports that claim?",
              "choices": [
                "Not much, a hair's width over a whole flight of stairs, but the tower is bolted tight to the rock, and a hair's width of growth in a bolted stair has to go somewhere.",
                "The creak climbs because the warmth climbs, one landing at a time, and it stops at the top because there is nowhere left to go.",
                "The lamp room has a floor vent and a roof chimney, and when the lamp is lit, air is drawn up the stairwell from the warm stove room at the bottom to feed the flame.",
                "The twenty-second keeper was a shipwright before he was a keeper, and he had spent his life around iron."
              ],
              "answer": 1,
              "hint": "The claim has two halves: where it stops, and why it does not come back. Find the sentence that gives a reason for the stopping and not just the fact of it.",
              "skill": "Finding details",
              "evidence": "The creak climbs because the warmth climbs, one landing at a time, and it stops at the top because there is nowhere left to go."
            },
            {
              "q": "Why does the middle paragraph describe the vent, the chimney and the air being drawn upward?",
              "choices": [
                "It explains how the lamp room itself was built and when it was finished.",
                "It compares a winter night with a summer night, and says which of the two is louder.",
                "It explains why the sound starts at the bottom when the lamp that causes it is at the top.",
                "It gives the steps for lighting the lamp at dusk, one after another."
              ],
              "answer": 2,
              "hint": "The paragraph opens by saying this part took three nights to work out. Ask which puzzle was left over from the paragraph before, and see what this one answers.",
              "skill": "Author's purpose and structure",
              "evidence": "So the first iron to feel the change is the bottom flight, as the stove room's warm air moves across it and the stairwell starts to breathe."
            },
            {
              "q": "The entry says the eleventh keeper 'had measured a tower breathing'. What is that phrase telling you?",
              "choices": [
                "What she timed was air being pulled in and out of the tower to feed the flame",
                "The tower is alive in some way, and what she timed was the sound of it breathing in and out",
                "She had been counting her own breaths as she climbed the stairs",
                "The walls of the tower move in and out a little each time the night air cools them"
              ],
              "answer": 0,
              "hint": "The same word turns up earlier in the paragraph above, about a stairwell. Find it there first, then bring that meaning back to this sentence.",
              "skill": "Word meanings",
              "evidence": "So the first iron to feel the change is the bottom flight, as the stove room's warm air moves across it and the stairwell starts to breathe."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the creak is loudest on the coldest nights. Why is it?",
              "choices": [
                "Cold air carries sound farther up a stairwell than warm air does, so the same creak reaches the lamp room far more loudly.",
                "The lamp is filled higher on cold nights than on mild ones.",
                "The bolts holding the tower to the rock are tightened before winter each year, and iron pulled up tight complains more loudly.",
                "The colder the iron starts, the further it has to grow as it warms, and growth in bolted iron comes out as sound."
              ],
              "answer": 3,
              "hint": "Paragraph one explains what a hair's width of growth in bolted iron turns into. The last paragraph says how much growing a cold night leaves to do. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "On a cold night the iron has further to grow, so the creak is louder."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 6 × 4 means 6 groups of 4.",
              "Sharing equally is dividing.",
              "Taking away from a round number: 400 − 167 = 233. Check by adding back.",
              "A fraction names parts of a whole: 3 parts done out of 5 equal parts is 3/5."
            ],
            "example": "Half of 96: split it into 90 and 6. The halves are 45 and 3, so 48."
          },
          "problems": [
            {
              "q": "Every box needs 8 wicks, and there are 7 boxes. How many wicks is that?",
              "answer": "56",
              "hint": "7 groups of 8, so 7 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "The keeper splits 56 wicks in half. How many wicks is one half?",
              "answer": "28",
              "hint": "Half of 56.",
              "skill": "Dividing"
            },
            {
              "q": "The keeper needs 500 wicks and has 235. How many more are needed?",
              "answer": "265",
              "hint": "500 − 235.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the keeper has finished 7 of them. What fraction is done? (write a fraction)",
              "answer": "7/8",
              "hint": "7 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 9 squares wide and 3 squares long. The keeper has covered 9 squares. How many squares are left to cover?",
              "answer": "18",
              "hint": "9 × 3 squares in all, then take 9 off.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Dividing a decimal by a whole number: divide as usual and keep the point in place. 8.4 ÷ 4 = 2.1.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "7 × 4 − 3 × 5: both multiplications first, then 28 − 15 = 13."
          },
          "problems": [
            {
              "q": "3 nights took 2.85 gallons altogether, and each took the same. How many gallons did each one take?",
              "answer": "0.95",
              "hint": "2.85 ÷ 3. Divide as with whole numbers and keep the point in place.",
              "skill": "Decimals"
            },
            {
              "q": "Of 40 wicks, 20% are struck off the list. How many are left on it?",
              "answer": "32",
              "hint": "20% of 40 is 8. Take that off 40.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper shares 16 lamps between two teams in the ratio 3 to 5. How many does the smaller share get?",
              "answer": "6",
              "hint": "3 + 5 = 8 parts. 16 ÷ 8 = 2 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper works out 9 × 6 − 1 × 2. What is it?",
              "answer": "52",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "The coldest reading was −11 degrees and the warmest was −7 degrees. How many degrees apart are they?",
              "answer": "4",
              "hint": "From −11 up to −7.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 27 ÷ 6 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, like 5(x + 2) = 45, undo the outside first: divide by 5, then take 2 off. x = 7."
            ],
            "example": "On a map, 4 inches stand for 60 miles, so 1 inch stands for 60 ÷ 4 = 15 miles."
          },
          "problems": [
            {
              "q": "12 nights took 42 gallons. At the same rate, how many gallons would 24 nights take?",
              "answer": "84",
              "hint": "One night takes 42 ÷ 12 = 3.5. Then × 24.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper had 160 wicks, then added 10% more. How many wicks were added?",
              "answer": "16",
              "hint": "10% of 160: 10/100 × 160.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The low was −8 degrees and the high was 24 degrees. How many degrees apart are they?",
              "answer": "32",
              "hint": "8 below zero plus 24 above zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 8(x + 30) = 320",
              "answer": "10",
              "hint": "Divide both sides by 8 to get x + 30 = 40.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 9 inches stand for 180 feet. How many feet does 1 inch stand for?",
              "answer": "20",
              "hint": "180 ÷ 9.",
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
            "example": "A list goes 6, 10, 14, 18: it adds 4 each step, so the 9th number is 6 + 8 × 4 = 38."
          },
          "problems": [
            {
              "q": "The count of wicks goes 24, 29, 34, 39, and on. What is the 12th number in the list?",
              "answer": "79",
              "hint": "It starts at 24 and adds 5 each step. The number you want is 11 steps on from 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (3 × 8)²?",
              "answer": "576",
              "hint": "3 × 8 = 24 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 5 and 12 feet. How long is its longest side, in feet?",
              "answer": "13",
              "hint": "5² + 12² = 169. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x − 2x = 30",
              "answer": "10",
              "hint": "5 − 2 = 3, so 3x = 30.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 4 × 10^5 or 5 × 10^4? Write the bigger one out in full.",
              "answer": "400000",
              "hint": "4 × 10^5 is ten times 4 × 10^4, and 5 is not ten times 4.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Times in a row",
          "points": [
            "A sequence of times is a multiply and then an add, in the order the story gives them.",
            "Write each number down before combining them."
          ],
          "example": "6 stops at 3 minutes each is 18. Add a 10-minute start and the total is 28 minutes."
        },
        "skill": "Following directions",
        "steps": [
          "Work out the full climb the eleventh keeper timed: 5 minutes for each of the tower's 8 landings.",
          "Add the 20 minutes the lamp needs to warm the stairwell before the first creak.",
          "Now work out a shorter climb, one that stopped at landing 4: multiply 4 landings by the same 5 minutes.",
          "Add the same 20 minutes of warming to that.",
          "The tower creaked all the way to the top tonight. Use the number from step 2, not the one from step 4.",
          "Type the minutes."
        ],
        "prompt": "Minutes:",
        "answer": "60",
        "hint": "Both totals start with the same 20 minutes of warming. Step 5 says how far up the tower the creak went tonight."
      }
    },
    {
      "id": "light-4",
      "title": "The Missing Gallon",
      "recon": {
        "lesson": {
          "title": "Numbers that do not add up",
          "points": [
            "When a log says a count is off 'by exactly' something, the exact amount is the clue. Ask what uses exactly that much.",
            "'Reserve' is defined in the log. Find the sentence.",
            "'Why did he write it nowhere' is a question about what a person feared."
          ],
          "example": "Made-up example: a jar had 20 cookies, 3 were eaten at lunch, and now there are 15. Exactly two are missing, and that exact number is the clue."
        },
        "title": "Keeper's Log: The Missing Gallon",
        "passage": [
          "The oil is a different puzzle, and a newer one. The main tank in the oil house holds sixty gallons and feeds the lamp through a copper pipe. Beside it stands the reserve, which is a smaller second tank kept full for emergencies and never touched unless the main one runs dry. The rule for the reserve is painted on it in white letters: for the lamp only, and only when the tank is empty. Every keeper for a century kept that rule.",
          "For the last two years the main tank has dropped five gallons a night. The lamp still burns four. The pipe does not leak; the previous keeper checked it on his knees with a lantern, and wrote so. The reserve is full to the line. So one gallon a night, exactly one, left the tank and did not go through the pipe. He wrote the number down thirty times and never wrote where it went, and then, on his last night, he wrote that he had moved the spare lantern.",
          "The spare lantern is a small brass lamp that lives on a hook by the door for climbing the stairs in a blackout. It burns exactly one gallon a night. When you walk down to the cottage tonight, look at the window that faces the fishing grounds. There is a nail above it that was not there two years ago, and a soot mark on the glass, and a tin of matches on the sill. A keeper who lights a second lamp for someone else has broken a rule that is painted on a tank. So he wrote the gallon, and never the reason."
        ],
        "questions": [
          {
            "q": "How much oil did the tank drop each night?",
            "choices": [
              "A gallon",
              "A barrel",
              "A quart",
              "Five gallons"
            ],
            "answer": 3,
            "hint": "First sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'reserve'?",
            "choices": [
              "The copper pipe that feeds the lamp from the main tank",
              "The spare brass lantern kept on the hook by the door",
              "The oil house where the tank of sixty gallons stands",
              "A smaller second tank kept full for emergencies"
            ],
            "answer": 3,
            "hint": "The sentence that begins 'Beside it stands the reserve'.",
            "skill": "Word meanings"
          },
          {
            "q": "How much oil does the spare lantern burn in a night?",
            "choices": [
              "Four gallons, the same as the lamp",
              "Half a gallon on a cold night",
              "Exactly one gallon",
              "A gallon every other night"
            ],
            "answer": 2,
            "hint": "Paragraph 3, second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "Why did the previous keeper write the missing gallon down but never the reason?",
            "choices": [
              "He wrote the number down thirty times and by the end could no longer remember what had happened on the very first of those nights",
              "Lighting a second lamp for someone else broke a painted rule, so he recorded the number honestly but not what he had done",
              "He did not think one gallon a night was worth explaining, since the great lamp still burned its four and the light never failed",
              "He believed the missing gallon was a leak in the copper pipe that he had not been able to find, and did not want to guess in the book"
            ],
            "answer": 1,
            "hint": "The last two sentences of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The spare lantern and the clues at the cottage window that show where the gallon went",
              "How to climb stairs in a blackout",
              "The nail, the soot mark and the tin of matches at the window",
              "The rule painted on the reserve tank and the keepers who kept it"
            ],
            "answer": 0,
            "hint": "Paragraph 3 lists the lantern, the nail, the soot and the matches. What do they add up to?",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Deliveries and gallons",
          "points": [
            "1,000 − 482: think of 1,000 as 999 + 1. 999 − 482 = 517, plus 1 is 518.",
            "Six gallons a night for 40 nights: 6 × 40 = 240.",
            "Sharing equally: 96 ÷ 8.",
            "Leftovers count: 30 gallons into 8-gallon cans is 3 cans with 6 left, so it takes 4 cans."
          ],
          "example": "Area is length × width: a shed 7 feet by 6 feet is 7 × 6 = 42 square feet."
        },
        "problems": [
          {
            "q": "The supply boat delivered 1,000 gallons of oil this year. The rock has used 675. How many gallons are left?",
            "answer": "325",
            "hint": "1,000 − 675. Think of 1,000 as 999 + 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The tank dropped 5 gallons a night for 30 nights. How many gallons is that?",
            "answer": "150",
            "hint": "5 × 30.",
            "skill": "Multiplying"
          },
          {
            "q": "The keeper splits 91 matches evenly between 7 tins. How many matches go in each tin?",
            "answer": "13",
            "hint": "91 ÷ 7.",
            "skill": "Dividing"
          },
          {
            "q": "The keeper pours 100 gallons of oil into barrels that hold 15 gallons each. How many barrels does it take to hold all the oil?",
            "answer": "7",
            "hint": "15 × 6 = 90, and 10 gallons are still left. They need a barrel too.",
            "skill": "Dividing"
          },
          {
            "q": "The oil store floor is 5 feet long and 4 feet wide. What is its area in square feet?",
            "answer": "20",
            "hint": "Area is length × width: 5 × 4.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Work the word out",
            "points": [
              "A word is doing one job in one sentence. Work out that job, not the entry it would get in a dictionary.",
              "Some phrases are painting a picture or carrying a judgment rather than stating a bare fact. Say plainly what they add.",
              "Put your pick back into the sentence. If the sentence now says something the entry never said, it is the wrong pick."
            ],
            "example": "'He wrote the number thirty times and never wrote where it went.' The second half is doing the work. It tells you the silence was a choice, not a gap in his record."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole entry?",
              "choices": [
                "The main tank in the oil house holds sixty gallons of oil and feeds the great lamp through a copper pipe.",
                "A rule painted on something in white letters is a rule that always gets obeyed, whoever is keeping the light.",
                "The copper pipe has been leaking a gallon a night for two years, and the previous keeper never found the leak.",
                "One gallon a night leaves a tank it should not, and the entry lays out the arithmetic and then points at the answer without ever saying it."
              ],
              "answer": 3,
              "hint": "The rule on the tank, the sum that leaves one gallon over, and a nail above a window. Ask what all three are building toward, and cross off the choice the middle paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "So one gallon a night, exactly one, left the tank and did not go through the pipe."
            },
            {
              "q": "Claim: the missing gallon cannot be blamed on anything going wrong with the equipment. Which sentence from the entry best supports that claim?",
              "choices": [
                "Beside it stands the reserve, which is a smaller second tank kept full for emergencies and never touched unless the main one runs dry.",
                "The spare lantern is a small brass lamp that lives on a hook by the door for climbing the stairs in a blackout.",
                "The rule for the reserve is painted on it in white letters: for the lamp only, and only when the tank is empty.",
                "The pipe does not leak; the previous keeper checked it on his knees with a lantern, and wrote so."
              ],
              "answer": 3,
              "hint": "Three of these describe the tanks, the rule or the lantern, and test nothing. Find the sentence that describes a test somebody carried out and what it showed.",
              "skill": "Finding details",
              "evidence": "The pipe does not leak; the previous keeper checked it on his knees with a lantern, and wrote so."
            },
            {
              "q": "Why does the entry finish by describing a nail, a soot mark and a tin of matches instead of saying what happened?",
              "choices": [
                "It explains how the window in the cottage was built, and why a nail above it would have been wanted there from the beginning.",
                "It lists the things that are kept beside the cottage door, so that the next keeper knows where to find them in the dark.",
                "It hands the reader the same evidence the keeper had and lets them reach the conclusion he would not write down.",
                "It compares the small spare lantern with the great lamp in the tower above, setting the gallon each of them burns side by side."
              ],
              "answer": 2,
              "hint": "Read the very last sentence of the entry. It tells you there is a reason he never wrote a reason. Then ask what the three objects are doing there instead.",
              "skill": "Author's purpose and structure",
              "evidence": "So he wrote the gallon, and never the reason."
            },
            {
              "q": "The entry says a keeper who lights a second lamp for somebody else 'has broken a rule that is painted on a tank'. What do the words painted on a tank add?",
              "choices": [
                "The rule was put there by whoever happened to paint the tank that year, and could just as easily have been left off",
                "The rule is not a habit or an opinion; it is set down where nobody could miss it",
                "The rule applies only to the tank it happens to be written on and to nothing else in the oil house",
                "The rule can be washed off the tank again once a keeper decides it is no longer needed"
              ],
              "answer": 1,
              "hint": "The sentence could have stopped at broken a rule. Ask what the extra words change about how serious the breaking sounds.",
              "skill": "Word meanings",
              "evidence": "The rule for the reserve is painted on it in white letters: for the lamp only, and only when the tank is empty."
            },
            {
              "q": "Paragraphs 2 and 3 together explain where the extra gallon has been going. Where?",
              "choices": [
                "Into the spare lantern, which burns exactly one gallon a night and has been lit somewhere other than the tower.",
                "Into the reserve tank, which has been quietly topped up from the main one.",
                "Into the copper pipe, which loses it between the tank and the lamp.",
                "Into the great lamp, which has been burning five gallons instead of four."
              ],
              "answer": 0,
              "hint": "Paragraph two leaves you with a number and no home for it. The last paragraph gives you an object with exactly that appetite. Match the number to the object.",
              "skill": "Reading between the lines",
              "evidence": "It burns exactly one gallon a night."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 5 × 6 means 5 groups of 6.",
              "Sharing equally is dividing.",
              "Taking away: 700 − 245. Take 200, then 40, then 5. That leaves 455.",
              "Fractions with the same bottom: the bigger top is the bigger fraction. 5/8 is more than 3/8."
            ],
            "example": "Sharing: 18 apples in bags of 6 is 18 ÷ 6 = 3 bags."
          },
          "problems": [
            {
              "q": "The keeper carries 4 matches on each of 4 trips. How many matches is that?",
              "answer": "16",
              "hint": "4 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "Every tin takes 3 matches. The keeper has 12 matches. How many tins can be filled?",
              "answer": "4",
              "hint": "How many 3s fit into 12?",
              "skill": "Dividing"
            },
            {
              "q": "The keeper counted 322 gallons of oil in the morning and 452 in the evening. How many more in the evening?",
              "answer": "130",
              "hint": "452 − 322.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 4/6 or 3/6? (write a fraction)",
              "answer": "4/6",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "The target is 800 gallons of oil and 388 are logged. How many short is that?",
              "answer": "412",
              "hint": "800 − 388.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Sharing a fraction: 2/5 shared by 2 people is 2/5 × 1/2 = 2/10, which is 1/5 each.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(9 − 5) × (3 + 4): each set of parentheses first, then 4 × 7 = 28."
          },
          "problems": [
            {
              "q": "The keeper pours 2/3 of a gallon of oil equally into 4 small lamps. What fraction of a gallon goes into each lamp? (write a fraction)",
              "answer": "1/6",
              "hint": "Sharing among 4 is the same as multiplying by 1/4: 2/3 × 1/4.",
              "skill": "Fractions"
            },
            {
              "q": "Out of every 100 gallons of oil, 25 are set aside. Out of 60 gallons of oil, how many is that?",
              "answer": "15",
              "hint": "60 is 0.6 hundreds, so 0.6 × 25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper divides 12 minutes of work in the ratio 1 to 3. How many minutes is the larger share?",
              "answer": "9",
              "hint": "4 parts in all, so one part is 3 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper works out (7 − 4) × (8 + 18). What is it?",
              "answer": "78",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three readings came in: −5, 11 and −16 degrees. Which is the coldest?",
              "answer": "-16",
              "accept": [
                "−16"
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
              "How many fit: total ÷ size of one. 6 ÷ 0.25 = 24.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "x ÷ 4 − 3 = 5, so x ÷ 4 = 8, so x = 32."
          },
          "problems": [
            {
              "q": "The keeper has 10 gallons of oil, at 0.5 gallons for each night. One night is already done. How many nights are left?",
              "answer": "19",
              "hint": "10 ÷ 0.5 = 20 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of gallons of oil may change by no more than 20%. Starting from 320, what is the highest count the rule allows?",
              "answer": "384",
              "hint": "20% of 320 is 64. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 6 hours the thermometer fell 12 degrees in all, the same amount each hour. What was the change each hour? (Write a fall as a negative number.)",
              "answer": "-2",
              "accept": [
                "−2"
              ],
              "hint": "Share −12 into 6 equal parts: −12 ÷ 6. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 8 − 20 = 6",
              "answer": "208",
              "hint": "Add 20 to both sides, then multiply by 8.",
              "skill": "Equations"
            },
            {
              "q": "A round sign measures 15.7 inches around the edge. Using 3.14 for pi, how many inches is it across?",
              "answer": "5",
              "hint": "Around the edge ÷ 3.14.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A square root undoes squaring. If a square has area 64, its side is 8.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Slope: through (0, 5) and (3, 23), the rise is 18 over a run of 3, so the slope is 6."
          },
          "problems": [
            {
              "q": "A line passes through (0, 20) and (7, 48). What is its slope?",
              "answer": "4",
              "hint": "Slope is the rise over the run: 28 ÷ 7.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 49 square feet. How many feet is it around the edge?",
              "answer": "28",
              "hint": "One side is the square root of 49, then four sides.",
              "skill": "Powers and roots"
            },
            {
              "q": "The keeper goes 9 feet east and then 12 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "15",
              "hint": "The two legs make a right angle: 9² + 12² = 225.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 7x + 3 and 4x + 33 come to the same number?",
              "answer": "10",
              "hint": "Set them equal, take 4x off both sides, then take 3 off.",
              "skill": "Equations"
            },
            {
              "q": "Two round tanks each have a radius of 10 feet and are 3 feet deep. Using 3.14 for pi, what is their total volume in cubic feet?",
              "answer": "1884",
              "hint": "One tank is 3.14 × 10 × 10 × 3 = 942. Then double it.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Go back and swap",
          "points": [
            "A step can send you back to an earlier total and swap what comes off it.",
            "Write every running total down so you can go back to it.",
            "Read the whole list before you take anything off."
          ],
          "example": "Start at 50, take off 6: 44. Take off 6 again: 38. If the next step says go back to 44 and take off 2 instead, the answer is 42."
        },
        "skill": "Following directions",
        "steps": [
          "The main tank in the oil house holds 60 gallons. Write 60.",
          "Take off the 5 gallons the tank went down last night.",
          "Take off another 5 for tonight.",
          "Change step 3: go back to your total from step 2 and take off only the 4 gallons the lamp itself burns.",
          "Type the gallons left in the tank."
        ],
        "prompt": "Gallons left:",
        "answer": "51",
        "hint": "Step 4 sends you back to where step 2 left you and swaps which number comes off. The lamp burns less than the tank loses."
      }
    },
    {
      "id": "light-5",
      "title": "Dawn",
      "recon": {
        "lesson": {
          "title": "Putting the log together",
          "points": [
            "The last entry ties every thread: the stairs, the gallon, the window. Match each back as you read.",
            "'Signal' is defined in the log. Find the sentence.",
            "The final why is about a person: what did he want the next keeper to be free to do?"
          ],
          "example": "Made-up example: in a mystery's last chapter, the muddy boots, the open gate and the missing pie all point to the dog. Match each clue back."
        },
        "title": "Keeper's Log: Dawn Entry",
        "passage": [
          "Night five, and the lamp is out, and here is what the log adds up to. The stairs are the tower breathing: iron expanding as the lamp draws warm air up the stairwell, one landing at a time, exactly as the eleventh keeper timed it and the twenty-second explained it. It has done this every cold night for a hundred years. It will do it tonight. You can sleep through it now, because you know what it is, and knowing is the whole difference.",
          "The gallon is a kinder story. Two years ago a fishing boat from the village began working the grounds west of the rock, and the man who runs it is the previous keeper's brother. The rock's great lamp sweeps the sea for ships; it does not shine steadily at one small boat. So each night the keeper hung the spare lantern in the cottage window, facing west, and left it burning. It was a signal, which is a light or sound placed on purpose to carry a message, and this one said, the rock is here, come home this way. One gallon a night. He wrote the gallon every night because a keeper does not lie in the book. He never wrote the reason because the rule on the tank says the oil is for the lamp only.",
          "He did not take the lantern with him when he left. He moved it, from the hook by the door to the nail above the window, and wrote that he had. He left the matches on the sill. He left you the choice he had made without a rule to cover it, and the log to understand it by. The boat will be out tonight. The window faces west. Decide."
        ],
        "questions": [
          {
            "q": "What are the stairs, according to the dawn entry?",
            "choices": [
              "The footsteps of the thirty-nine keepers who kept the rock before you came",
              "A loose bolt somewhere among the eight flights of the tower's iron steps",
              "Rats moving up through the stairwell from the door at the bottom of the tower",
              "The tower breathing: iron expanding as warm air climbs the stairwell"
            ],
            "answer": 3,
            "hint": "Paragraph 1, second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'signal'?",
            "choices": [
              "A kind of oil that burns more slowly than the oil in the lamp",
              "The rock's great lamp, the one that sweeps the sea for ships",
              "A light or sound placed on purpose to carry a message",
              "A fishing boat working the grounds out west of the rock at night"
            ],
            "answer": 2,
            "hint": "The sentence with 'a signal, which is'.",
            "skill": "Word meanings"
          },
          {
            "q": "Who runs the fishing boat?",
            "choices": [
              "The previous keeper's brother",
              "The eleventh keeper",
              "The twenty-second keeper, the shipwright",
              "A stranger"
            ],
            "answer": 0,
            "hint": "Paragraph 2, second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "Why did the previous keeper leave the lantern on the nail and the matches on the sill instead of taking them?",
            "choices": [
              "He was in a hurry on his last night and left what he could not carry",
              "The lantern belonged to the rock and had to stay on it",
              "The nail above the window was the only hook left once he had taken the one by the door",
              "So the next keeper could make the same choice with the log to understand it, rather than being told"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the sentence that starts 'He left you'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How the great lamp sweeps the sea",
              "Where the missing gallon went and why the keeper wrote the number but not the reason",
              "The fishing boat from the village, the grounds west of the rock, and the man who runs the boat",
              "The rule painted on the reserve tank, and why a hundred years of keepers never once broke it"
            ],
            "answer": 1,
            "hint": "Paragraph 2 is the answer to the oil puzzle from start to finish.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Dawn numbers",
          "points": [
            "Two kinds a day: 3 + 2 apples a day for 6 days is 5 × 6 = 30.",
            "Nights a month times months: 12 × 8 = 12 × 10 − 12 × 2 = 120 − 24 = 96.",
            "1,000 − 7: think 999 − 7 + 1 = 993.",
            "Same bottom: 1/6 + 4/6 = 5/6."
          ],
          "example": "Sharing equally: 144 cups into 4 jugs is 144 ÷ 4 = 36 each."
        },
        "problems": [
          {
            "q": "With the window lantern lit, the rock burns 4 gallons in the lamp and 1 in the lantern each night. How many gallons in 7 nights?",
            "answer": "35",
            "hint": "4 + 1 = 5 a night. Then 5 × 7.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The boat works 14 nights a month for 9 months. How many nights is that?",
            "answer": "126",
            "hint": "14 × 9: 14 × 10 is 140, then take one 14 off.",
            "skill": "Multiplying"
          },
          {
            "q": "On the keeper's scale the great lamp's brightness is 1,000 and the window lantern's is 4. What is the difference?",
            "answer": "996",
            "hint": "1,000 − 4. Think of 1,000 as 999 + 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The lantern's tin was 2/5 full. You add 2/5 more. How full is it? (write a fraction)",
            "answer": "4/5",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The supply boat brings 175 gallons of oil, poured equally into 5 barrels. How many gallons go in each barrel?",
            "answer": "35",
            "hint": "175 ÷ 5.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Join the two ends",
            "points": [
              "The last question is built so that no single paragraph answers it. Plan on using two.",
              "State a fact from one paragraph, then a fact from another, then say 'so'. What follows 'so' is your answer.",
              "If a choice needs something the entry never mentions, it is out, however reasonable it sounds by itself."
            ],
            "example": "Paragraph one: the library closes at five. Paragraph two: the bus from school gets in at a quarter to five. So there are only fifteen minutes to return the book. Neither paragraph says that alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole entry?",
              "choices": [
                "The stairs are iron expanding as warm air is drawn up the stairwell from the stove room at the bottom, one landing at a time.",
                "Every strange thing has an explanation if you look at it long enough, and a hundred years of writing things down will find it.",
                "The keeper before you took the spare lantern away with him when he left, so the hook by the cottage door is empty now.",
                "Both puzzles are answered, and the second one leaves this keeper holding a decision that no rule covers."
              ],
              "answer": 3,
              "hint": "One paragraph closes the stairs, one closes the gallon, and the last one opens something else. Find the choice that covers all three, and cross off the one the entry denies.",
              "skill": "Central idea and evidence",
              "evidence": "He left you the choice he had made without a rule to cover it, and the log to understand it by."
            },
            {
              "q": "Claim: the keeper before you was careful to record what he did, even where he would not explain it. Which sentence from the entry best supports that claim?",
              "choices": [
                "Two years ago a fishing boat from the village began working the grounds west of the rock, and the man who runs it is the previous keeper's brother.",
                "It was a signal, which is a light or sound placed on purpose to carry a message, and this one said, the rock is here, come home this way.",
                "He wrote the gallon every night because a keeper does not lie in the book.",
                "The rock's great lamp sweeps the sea for ships; it does not shine steadily at one small boat."
              ],
              "answer": 2,
              "hint": "Three of these are about the boat, the signal and the great lamp. The claim is about what he did write. Find the sentence that says why he wrote it.",
              "skill": "Finding details",
              "evidence": "He wrote the gallon every night because a keeper does not lie in the book."
            },
            {
              "q": "What job does the first paragraph do in this entry?",
              "choices": [
                "It closes the older puzzle for good, so that the rest of the entry can be spent on the one that is still open.",
                "It explains how the tower was bolted down to the rock.",
                "It gives the steps for lighting the lamp at dusk.",
                "It compares the eleventh keeper, who timed the creak, with the twenty-second, who explained it, and says which was right."
              ],
              "answer": 0,
              "hint": "The paragraph adds no new fact about the stairs; it only gathers up what two earlier keepers found. Ask what a paragraph is for when its work is already done.",
              "skill": "Author's purpose and structure",
              "evidence": "You can sleep through it now, because you know what it is, and knowing is the whole difference."
            },
            {
              "q": "The entry says 'the gallon is a kinder story'. What does kinder mean as it is used here?",
              "choices": [
                "The story is shorter than the one about the stairs",
                "The story is easier to believe than the first one was",
                "The story is one the next keeper will find easier to check",
                "The answer turns out to be somebody looking after somebody else, not something going wrong"
              ],
              "answer": 3,
              "hint": "Read on to the end of the paragraph and see what the lantern in the window was actually for. Then ask what kind of story that makes it.",
              "skill": "Word meanings",
              "evidence": "So each night the keeper hung the spare lantern in the cottage window, facing west, and left it burning. It was a signal, which is a light or sound placed on purpose to carry a message, and this one said, the rock is here, come home this way"
            },
            {
              "q": "Paragraphs 1 and 2 together explain why one of the two puzzles can be slept through and the other cannot. Why?",
              "choices": [
                "The stairs happen every night of the year and the lantern is only hung in winter, so one of the two is finished and the other is not.",
                "Knowing what the stairs are ends the matter, but knowing what the lantern is only hands you the same choice he had.",
                "The stairs cost nothing and the lantern costs a gallon of oil.",
                "The stairs were explained by an earlier keeper and the lantern never was, so one puzzle is solved and the other one is not."
              ],
              "answer": 1,
              "hint": "Paragraph one ends by saying what knowing does for you. Paragraph two ends with something somebody is still doing tonight. Ask which of the two is finished.",
              "skill": "Reading between the lines",
              "evidence": "You can sleep through it now, because you know what it is, and knowing is the whole difference."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 6 × 4 means 6 groups of 4.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "A rug 7 squares wide and 4 squares long is 7 × 4 = 28 squares."
          },
          "problems": [
            {
              "q": "The keeper counts 3 nights with 5 gallons in each. How many gallons is that?",
              "answer": "15",
              "hint": "3 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "15 gallons are shared equally among 3 nights. How many gallons does each night get?",
              "answer": "5",
              "hint": "How many 3s make 15?",
              "skill": "Dividing"
            },
            {
              "q": "The keeper counted 319 gallons of oil, then found 169 more, then 56 more. How many gallons of oil in all?",
              "answer": "544",
              "hint": "319 + 169 first. Then add 56.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The keeper finished 1/6 of the day's work before the break and 3/6 after. What fraction is done? (write a fraction)",
              "answer": "4/6",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A lantern platform is 8 squares wide and 5 squares long. How many squares is that?",
              "answer": "40",
              "hint": "8 rows of 5, so 8 × 5.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Adding decimals: line up the points, and write 2.5 as 2.50 if it helps. 1.25 + 2.5 + 0.75 = 4.5.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "3 × (10 − 6) + 5: parentheses first, 4. Then 3 × 4 = 12, then add 5 to get 17."
          },
          "problems": [
            {
              "q": "The keeper logs 3.15 gallons for the first night, 1.8 for the second and 1.35 for the third. How many gallons is that in total?",
              "answer": "6.3",
              "hint": "Line the points up, writing a missing place as 0, then add all three.",
              "skill": "Decimals"
            },
            {
              "q": "Of 60 lanterns, 10% are set aside. How many is that?",
              "answer": "6",
              "hint": "10% of 60: 10% is 10/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Nights and lanterns are kept in the ratio 3 to 4. If there are 6 nights, how many lanterns?",
              "answer": "8",
              "hint": "6 ÷ 3 = 2 groups. Each group has 4 lanterns.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper works out 4 × (8 − 3) + 9. What is it?",
              "answer": "29",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn it was −14 degrees. By noon it was 1 degree. By how many degrees did it rise?",
              "answer": "15",
              "hint": "From −14 up to 0 is 14, then 1 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 7 ÷ 4 = 1.75 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "4x + 9 = 45, so 4x = 36, so x = 9."
          },
          "problems": [
            {
              "q": "8 nights needed 18 gallons altogether. How many gallons is that for one night?",
              "answer": "2.25",
              "hint": "A rate is the total shared out: 18 ÷ 8.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper counted 160 gulls on the rock on the first pass. On the second pass the number had risen by 20%. How many gulls is that?",
              "answer": "192",
              "hint": "20% of 160 is 32. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "At dawn the thermometer read −8 degrees. It rose 14 degrees by noon, then fell 13 degrees by dark. What does it read at dark?",
              "answer": "-7",
              "accept": [
                "−7"
              ],
              "hint": "Start at −8, go up 14 to 6, then down 13.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 6x + 7 = 79",
              "answer": "12",
              "hint": "Take 7 off both sides first, then divide by 6.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 8 feet. The rock measures 10 inches on the plan. How long is it really, in feet?",
              "answer": "80",
              "hint": "Every inch is 8 feet, so 10 × 8.",
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
            "example": "Start at 6 and add 3 each hour: after 9 hours, y = 3 × 9 + 6 = 33."
          },
          "problems": [
            {
              "q": "There are 8 gulls on the rail, and 8 more land every hour. After 7 hours, how many gulls are there?",
              "answer": "64",
              "hint": "This is the straight-line rule y = mx + b: 8 × 7 + 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each shelf holds 5² oil cans. There are 7 shelves. How many oil cans in all?",
              "answer": "175",
              "hint": "5² means 5 × 5 = 25. Then × 7.",
              "skill": "Powers and roots"
            },
            {
              "q": "The keeper runs a rope from the top of a 3-foot pole to a point 4 feet away on the ground. How long is the rope, in feet?",
              "answer": "5",
              "hint": "Right triangle: a² + b² = c². 3² + 4² = 9 + 16 = 25. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x + 12 = 2x + 33",
              "answer": "7",
              "hint": "Take 2x off both sides to get 3x + 12 = 33, then take 12 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The keeper's log says the light has flashed 9 × 10^5 times. Written out in full, what number is that?",
              "answer": "900000",
              "hint": "10^5 is 1 with 5 zeros after it: 100,000. Then × 9.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Compare, then multiply",
          "points": [
            "A step can cancel an earlier step. Carry the number from before the canceled step straight on.",
            "Read to the end before you multiply anything."
          ],
          "example": "8 − 6 = 2. Double it: 4. If a later step cancels the doubling, 2 is the number that goes on."
        },
        "skill": "Following directions",
        "steps": [
          "Write the gallons the main tank loses in a night: 5.",
          "Take away the 4 gallons the great lamp burns. What is left is the gallon nobody could explain.",
          "Double it, one for each of the 2 years the window has been lit.",
          "Multiply by the 7 nights in a week.",
          "Cancel step 3. Years are not gallons, so carry your step 2 answer straight into step 4 instead and multiply that single gallon by the 7 nights.",
          "Type the number of gallons."
        ],
        "prompt": "Gallons:",
        "answer": "7",
        "hint": "Step 5 takes the doubling out of the chain. Whatever step 2 left you with is what the 7 nights multiply."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
