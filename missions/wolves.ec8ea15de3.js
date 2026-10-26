// ODYSSEY — campaign "wolves". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "wolves",
  "ready": true,
  "kind": "shift",
  "readingLevel": {
    "fk": 5.3,
    "cl": 5.6
  },
  "grade": "5",
  "kindLabel": "Watch",
  "form": "wolf",
  "title": "Wolf Tracking",
  "subtitle": "A river valley in the Yukon, midwinter",
  "pitch": "Five days following a wolf pack across the snow with a biologist who counts them by their tracks, their howls and a radio collar. Learn how a pack works, how far it travels, and why the answer to almost every wolf question is a moose.",
  "scene": "assets/scene-wolves.jpg",
  "progress": {
    "unit": "days",
    "total": 5
  },
  "dayNoun": "Day",
  "stageNoun": "Day",
  "finalNoun": "The count",
  "stages": [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "The count"
  ],
  "reconNoun": "Field Notes",
  "legs": {
    "recon": "Field notes",
    "nav": "Track math",
    "orders": "Field orders",
    "debrief": "Truck"
  },
  "fact": "A wolf pack is a family: two parents, this year's pups, and a few older brothers and sisters who have not left yet. The 'alpha' in the old books is just the mother and father.",
  "finale": {
    "prompt": "The count is done and the pack is bedded down on the far ridge. Which color goes on this pack's page in the notebook?",
    "options": [
      {
        "label": "Gray",
        "color": "#9AA7C2"
      },
      {
        "label": "Amber",
        "color": "#FFB454"
      },
      {
        "label": "Snow white",
        "color": "#F4F8FF"
      },
      {
        "label": "Blue",
        "color": "#4FD1FF"
      }
    ],
    "done": "Mark it. Then leave the valley the way you came. The best tracker is the one the pack never noticed."
  },
  "patrols": [
    {
      "id": "wolves-1",
      "title": "Reading the Snow",
      "recon": {
        "lesson": {
          "title": "Questions first, then the notes",
          "points": [
            "Read the five questions before the notes. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Sizes in inches are details. Circle them.",
            "The answer is always in the notes. You never have to guess."
          ],
          "example": "Question: 'How wide is the door?' Hunt for 'inches' or 'feet'."
        },
        "title": "Field Notes: A Line in the Snow",
        "passage": [
          "Fresh snow fell in the night and stopped at four. That is the best thing that can happen to a wolf biologist, because every animal that moved after four wrote its name on the valley. The tracker leaves the truck at first light on snowshoes and finds the line within a mile. There are prints along the frozen river, each the size of a hand: four toes and a pad, claws showing. They run in a straight line as if the animals had walked a tightrope. Wolves place their back feet in the prints of their front feet. Each wolf in a pack walks in the prints of the one ahead, so a single line of tracks can be one wolf or nine.",
          "The way to tell is where they split. At a bend in the river the line spreads into five, then seven, then comes back to one, and the tracker counts seven. A wolf print is about four inches long, a coyote's is half that, and a dog's is rounder; this is a wolf, and a big one. The stride, the distance from one print to the next, is nearly a yard. Wolves trot. They cover ground the way a bicycle does, steadily, for hours, and a pack in winter may travel twenty or thirty miles in a night looking for something to eat.",
          "The tracker follows the line for three miles, photographing every split. Where the pack crossed the river on the ice, the tracker finds a yellow stain in the snow and a scratched-up patch beside it. That is a scent post, where the wolves mark the edge of their ground. The notes get a sketch of the valley with the line drawn in and a first count: seven, maybe more. Then the tracker turns back. The rule of the first day is to learn the valley, not to catch the pack."
        ],
        "questions": [
          {
            "q": "About how long is a wolf's print?",
            "choices": [
              "Two inches",
              "A foot",
              "About four inches",
              "A yard"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence with 'A wolf print is about'.",
            "skill": "Finding details"
          },
          {
            "q": "How many wolves did the tracker count at the bend?",
            "choices": [
              "Seven",
              "One",
              "Five",
              "Nine or more"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is the 'stride'?",
            "choices": [
              "The length of a wolf's own print in the snow",
              "The distance that a whole pack can cover in a single winter night",
              "The straight line wolves make by stepping in each other's prints",
              "The distance from one print to the next"
            ],
            "answer": 3,
            "hint": "The sentence 'The stride, the distance from one print to the next'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why can a single line of tracks be one wolf or nine?",
            "choices": [
              "Because fresh snow fills in most of the prints",
              "Because each wolf in a pack steps in the prints of the one ahead",
              "Because the snow melts",
              "Because a wolf print is about four inches long and a coyote's is half of that"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "Following the line to the scent post and the first count",
              "The truck",
              "The size of a coyote",
              "The snowfall"
            ],
            "answer": 0,
            "hint": "Paragraph 3 follows the tracks three miles and ends with the count.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Track math",
          "points": [
            "Prints in a mile: feet in a mile ÷ stride.",
            "Factors: the numbers that divide evenly. 20 makes equal groups of 2, 4, 5 or 10.",
            "Wolf print versus coyote: half.",
            "Same bottom: add the tops, so 1/9 + 4/9 = 5/9."
          ],
          "example": "A stride of 2 feet over 100 feet is 100 ÷ 2 = 50 strides."
        },
        "problems": [
          {
            "q": "A wolf's stride is about 3 feet. A mile is 5,280 feet. About how many strides in a mile?",
            "answer": "1760",
            "accept": [
              "1,760"
            ],
            "hint": "5,280 ÷ 3.",
            "skill": "Dividing"
          },
          {
            "q": "A wolf print is 4 inches and a coyote's is half that. How long is a coyote's print, in inches?",
            "answer": "2",
            "hint": "4 ÷ 2.",
            "skill": "Fractions"
          },
          {
            "q": "The tracker sorts 18 photos into equal piles, with at least 2 piles and at least 2 photos in each pile. How many different pile sizes could the tracker use?",
            "answer": "4",
            "hint": "List the numbers that divide 18 evenly. Leave out 1 and 18.",
            "skill": "Multiplying"
          },
          {
            "q": "The tracker followed the line for 3 miles and walked back the same way. How many miles on snowshoes?",
            "answer": "6",
            "hint": "3 × 2.",
            "skill": "Multiplying"
          },
          {
            "q": "At the bend, 2/7 of the pack split left and 3/7 split right; the rest stayed on the line. What fraction split off? (write a fraction)",
            "answer": "5/7",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Cover all three paragraphs",
            "points": [
              "Read the whole set of notes first, then say in one sentence what they are about. Only then look at the choices.",
              "The wrong answers are usually facts from the report standing in the wrong place: one paragraph's worth, or a statement far bigger than anything written down.",
              "Then four more moves: find the line that proves a claim, name a paragraph's job, read a phrase off its own sentence, and hold two paragraphs together for one conclusion."
            ],
            "example": "Three paragraphs about a harbor: what the boats catch, how the ice arrives, what the town eats in March. 'The ice comes in November' is one paragraph. 'The sea is dangerous' is not the report at all."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A wolf print is about four inches long and a coyote's is half that.",
                "Winter is the best season for studying any animal at all.",
                "New snow makes the valley readable, but the tracks only give up their numbers where the pack breaks its single file.",
                "A single line of tracks in the snow always means a single wolf."
              ],
              "answer": 2,
              "hint": "Snow that stopped at four, a line that spreads at a bend, and a count written into the notes. Ask what all three of those are about.",
              "skill": "Central idea and evidence",
              "evidence": "so a single line of tracks can be one wolf or nine"
            },
            {
              "q": "Claim: a line of wolf tracks does not tell you how many animals made it. Which sentence from the report best supports that claim?",
              "choices": [
                "Each wolf in a pack walks in the prints of the one ahead, so a single line of tracks can be one wolf or nine.",
                "They run in a straight line as if the animals had walked a tightrope.",
                "A wolf print is about four inches long, a coyote's is half that, and a dog's is rounder; this is a wolf, and a big one.",
                "The stride, the distance from one print to the next, is nearly a yard."
              ],
              "answer": 0,
              "hint": "Three of these describe the prints or the stride. The claim is about why one line can hide the number. Find that sentence.",
              "skill": "Finding details",
              "evidence": "Each wolf in a pack walks in the prints of the one ahead, so a single line of tracks can be one wolf or nine."
            },
            {
              "q": "Why does the report explain that wolves walk in one another's prints before it describes the count at the bend?",
              "choices": [
                "To explain why the tracker travels on snowshoes rather than on foot.",
                "To describe the shape of a wolf's paw in more detail, four toes and a pad with the claws showing, before the count at the bend begins.",
                "To warn that dogs sometimes leave exactly the same tracks as wolves, so a line of prints along the river could just as easily be a dog.",
                "Because without it, a line spreading out at a bend would look like nothing, instead of the one place a count can be made."
              ],
              "answer": 3,
              "hint": "The second paragraph opens with the words 'The way to tell'. Ask what had to be established first for those four words to mean anything.",
              "skill": "Author's purpose and structure",
              "evidence": "The way to tell is where they split."
            },
            {
              "q": "The report says the pack covers ground 'the way a bicycle does, steadily, for hours'. What is that comparison telling you?",
              "choices": [
                "They move faster over the snow than any other animal that lives in the valley",
                "They move at a pace they can keep up all night rather than in bursts",
                "They follow a road rather than pushing through deep snow",
                "They take turns in front so that nobody gets tired"
              ],
              "answer": 1,
              "hint": "The words right after the comparison do half the job for you: steadily, for hours. Then read what the same sentence says a pack covers in a night.",
              "skill": "Word meanings",
              "evidence": "They cover ground the way a bicycle does, steadily, for hours, and a pack in winter may travel twenty or thirty miles in a night looking for something to eat."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the notes say 'seven, maybe more' rather than simply seven. Why the hedge?",
              "choices": [
                "The count came from the places the line spread out, and a wolf that never left the line would not have been counted.",
                "The tracker's photographs did not come out clearly enough to check.",
                "Some of the prints could have been made by coyotes instead.",
                "The pack was still moving while the tracker was counting."
              ],
              "answer": 0,
              "hint": "Paragraph two tells you where a count becomes possible at all. Paragraph three gives the count and then softens it. Ask what the method could still miss.",
              "skill": "Reading between the lines",
              "evidence": "At a bend in the river the line spreads into five, then seven, then comes back to one, and the tracker counts seven."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 6 × 3 means 6 groups of 3.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "6 × 3 = 18."
          },
          "problems": [
            {
              "q": "The tracker lays the prints out in 3 rows of 4. How many prints is that?",
              "answer": "12",
              "hint": "3 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "20 prints are set out in 5 equal rows. How many prints are in each row?",
              "answer": "4",
              "hint": "20 split into 5 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 281 miles, then 148 more are added and 72 are taken off. What does the log show now?",
              "answer": "357",
              "hint": "Add 281 and 148 first, then take 72 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 2/8 + 5/8 (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom. 2 + 5 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 6 feet wide and 6 feet long. How many feet is it all the way around the edge?",
              "answer": "24",
              "hint": "Two sides of 6 and two sides of 6: 6 + 6 + 6 + 6.",
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
            "example": "(2 + 5) × 6 = 42: parentheses first, then multiply."
          },
          "problems": [
            {
              "q": "A regular stretch of track takes 16.25 minutes. A long one takes 1.6 times as long. How many minutes does the long one take?",
              "answer": "26",
              "hint": "Multiply 1625 × 16 without the points, then put back 3 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "10% of the miles counted is 4. How many were counted in all?",
              "answer": "40",
              "hint": "4 is 10 hundredths of the whole: 4 ÷ 10 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The tracker counts 21 adult prints and 35 pup prints. In its simplest form, what is the ratio of adult prints to pup prints? (write it like 2:3)",
              "answer": "3:5",
              "accept": [
                "3 to 5"
              ],
              "hint": "Divide both by 7.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The tracker works out (3 + 1) × 12. What is it?",
              "answer": "48",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "It was −5 degrees at midnight and rose 4 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "-1",
              "accept": [
                "−1"
              ],
              "hint": "Start at −5 and count 4 steps up.",
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
              "A two-step equation: undo the last step first. In (x + 3) × 5 = 40, divide by 5, then take off 3."
            ],
            "example": "(x + 3) × 5 = 40, so x + 3 = 8, so x = 5."
          },
          "problems": [
            {
              "q": "The tracker has 45 minutes to spend and each set of tracks takes 2.25 minutes to photograph and measure. How many sets of tracks is that enough for?",
              "answer": "20",
              "hint": "45 ÷ 2.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The miles the pack covered this month rose by 10% from last month, to 176. How many miles did it cover last month?",
              "answer": "160",
              "hint": "176 is 110% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "It was 24 degrees, then it fell 37 degrees. What does the thermometer read?",
              "answer": "-13",
              "accept": [
                "−13"
              ],
              "hint": "From 24 down to 0 is 24, and there are 13 left to fall.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 17) × 8 = 152",
              "answer": "2",
              "hint": "Divide both sides by 8 first, then take 17 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 20. The marked length on the model is 9 inches. How many inches is the real one?",
              "answer": "180",
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
            "example": "y = 6x + 5 when x = 4: 6 × 4 + 5 = 29."
          },
          "problems": [
            {
              "q": "The miles the pack has traveled, y, follow the rule y = 4x + 20, where x is the number of hours since dawn. What is y when x = 8?",
              "answer": "52",
              "hint": "Put 8 in for x: 4 × 8 + 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 7² + 7²?",
              "answer": "98",
              "hint": "7 × 7 = 49 and 7 × 7 = 49. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope reaches the top of an 8-foot spruce. How far is the foot of the rope from the base, in feet?",
              "answer": "15",
              "hint": "b² = c² − a² = 289 − 64 = 225. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 11x + 15 − 5x = 33",
              "answer": "3",
              "hint": "Collect the x's first: 6x + 15 = 33.",
              "skill": "Equations"
            },
            {
              "q": "What is 7 × 10^4 ÷ 10^3?",
              "answer": "70",
              "hint": "Dividing subtracts the powers: 10^4 ÷ 10^3 = 10^1. So 7 × 10.",
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
          "example": "Step 2 comes to 64 and step 5 comes to 39. 'Type the smaller' means 39."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of wolves counted at the bend: 7.",
          "Multiply by the toes showing in a wolf print: 4. Keep this total.",
          "Now begin a second total with the miles the tracker followed the line: 3.",
          "Multiply by the number of prints the line first spread into: 5.",
          "Add the hour the snow stopped falling: 4.",
          "There is a total at step 2 and a total at step 5. Type the smaller of the two."
        ],
        "prompt": "Your answer:",
        "answer": "19",
        "hint": "Step 3 starts over; it does not carry the first total along. Step 6 wants the smaller of the two totals, not both added."
      }
    },
    {
      "id": "wolves-2",
      "title": "The Collar",
      "recon": {
        "lesson": {
          "title": "How a tool works",
          "points": [
            "A 'how' question wants the steps of the method, in order.",
            "Numbers of degrees and miles are exact.",
            "A word about the equipment is defined by what it does."
          ],
          "example": "'Turn the antenna until the beep is loudest.' What tells you the direction? The loudest beep."
        },
        "title": "Field Notes: Beep, Beep, Beep",
        "passage": [
          "One wolf in the pack wears a collar. It was caught two winters ago, weighed, measured, fitted with a leather collar carrying a small radio, and let go. All of that took twenty minutes, and the wolf has not seen a person since. The collar sends a beep once a second on its own frequency. The tracker carries a receiver the size of a book and an antenna shaped like an H. Hold the antenna up, turn slowly, and the beep gets louder as the antenna points at the wolf. Read the compass. That is a bearing.",
          "One bearing is a line; two from different places cross at the wolf. The tracker takes one from the river and one from the ridge a mile east, and draws both on the map. The pack is in a stand of spruce three miles up a side valley, which the tracks from yesterday agree with. The collar does something else too: a satellite hears it and records the wolf's position four times a day, and once a month the tracker downloads a month of dots. The dots draw the pack's territory, a rough circle about four hundred square miles. The pack walks the edge of it again and again, marking as it goes.",
          "The tracker does not go up the side valley. Three miles is close enough. The point of the collar is that nobody has to walk up to a pack to know where it is. A pack that is walked up to changes what it does, and then the notes are about a pack being followed, not a pack being a pack. So the tracker sits on the ridge with the antenna and listens to the beep for an hour, steady, once a second. The tracker writes: collar 3 miles up the side valley, pack together, resting. Then eats lunch in the truck with the heater on."
        ],
        "questions": [
          {
            "q": "How often does the collar beep?",
            "choices": [
              "Hourly",
              "Daily",
              "Nightly",
              "Once a second"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentence with 'on its own frequency'.",
            "skill": "Finding details"
          },
          {
            "q": "About how big is the pack's territory?",
            "choices": [
              "About four hundred square miles",
              "Four square miles",
              "Forty square miles",
              "Four thousand square miles, walked every month"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence with 'rough circle'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'bearing'?",
            "choices": [
              "A wolf's weight",
              "The compass direction to something, read from where you stand",
              "The place on the map where two lines drawn from different spots cross",
              "A kind of antenna"
            ],
            "answer": 1,
            "hint": "The last two sentences of paragraph 1.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the tracker not walk up the side valley to the pack?",
            "choices": [
              "Because the pack would hear the beeping receiver and slip away long before the tracker could reach the stand of spruce",
              "Because three miles on snowshoes through a side valley full of deep snow would take up the whole of the afternoon",
              "Because the pack is resting in a stand of spruce, and a resting pack is the one thing that the notes never record",
              "Because a pack that is walked up to changes what it does, and the notes should be about a pack being a pack"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the third and fourth sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "Lunch",
              "Finding the pack with two bearings, and what the satellite dots show",
              "The spruce trees",
              "How the wolf was caught, weighed, measured and collared two winters back"
            ],
            "answer": 1,
            "hint": "Paragraph 2 crosses two bearings and then explains the satellite positions and the territory.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Collar math",
          "points": [
            "Once a second for a minute is 60; for 5 minutes it is 300.",
            "Positions a day times days: dots a month.",
            "Years since collaring: 2.",
            "Two-step: square miles, then miles across if it were a square (about 20)."
          ],
          "example": "3 positions a day × 7 days = 21 dots."
        },
        "problems": [
          {
            "q": "The collar beeps once a second. How many beeps in the hour the tracker listened?",
            "answer": "3600",
            "accept": [
              "3,600"
            ],
            "hint": "60 × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "The satellite records the wolf's position 4 times a day. How many positions in a 30-day month?",
            "answer": "120",
            "hint": "4 × 30.",
            "skill": "Multiplying"
          },
          {
            "q": "The territory is about 400 square miles. If it were a square, each side would be 20 miles. What is 20 × 20?",
            "answer": "400",
            "hint": "20 × 20.",
            "skill": "Area and perimeter"
          },
          {
            "q": "It is 3 miles from the ridge to the pack and 1 mile from the ridge to the river. If the tracker had walked to the pack, back to the ridge, and on to the river, how many miles would that be?",
            "answer": "7",
            "hint": "3 + 3 + 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The collar was fitted two winters ago in 20 minutes. If a battery lasts 3 years, how many more years will it last?",
            "answer": "1",
            "hint": "3 − 2.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Proof beats resemblance",
            "points": [
              "Every choice will be a real sentence from the notes. True is free; only proof counts.",
              "Watch for sentences that describe a method when the claim is about what the method is worth. They are not the same thing.",
              "Read the claim and your pick one after the other. If a gap is left, the sentence is not the one."
            ],
            "example": "Claim: one measurement is not enough. 'They used a good tape' is true and settles nothing. 'A single reading could be out by a foot' settles it."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The receiver is about the size of a book and the antenna is shaped like an H.",
                "New equipment has made fieldwork easy for everybody who does it.",
                "The tracker uses the collar in order to walk right up to the pack.",
                "The collar exists so that the pack can be known without being approached, because approaching it would change what there is to know."
              ],
              "answer": 3,
              "hint": "Twenty minutes of handling two winters ago, two bearings crossed on a map, and a decision not to go up the valley. Ask what all three are protecting.",
              "skill": "Central idea and evidence",
              "evidence": "The point of the collar is that nobody has to walk up to a pack to know where it is"
            },
            {
              "q": "Claim: one bearing on its own cannot locate the wolf. Which sentence from the report best supports that claim?",
              "choices": [
                "One bearing is a line; two from different places cross at the wolf.",
                "Hold the antenna up, turn slowly, and the beep gets louder as the antenna points at the wolf.",
                "That is a bearing.",
                "Read the compass."
              ],
              "answer": 0,
              "hint": "Three of these describe how a bearing is taken. The claim is about what a single bearing is worth. Find the sentence that says what one bearing alone gives you, and what it takes to pin the wolf down.",
              "skill": "Finding details",
              "evidence": "One bearing is a line; two from different places cross at the wolf."
            },
            {
              "q": "What job does the third paragraph do that the first two do not?",
              "choices": [
                "It explains how the collar was fitted onto the wolf.",
                "It gives the reason behind a decision: why the tracker stops three miles short even though the pack could be found exactly.",
                "It describes the shape and size of the pack's territory, a rough circle of about four hundred square miles that the wolves walk the edge of.",
                "It lists the equipment carried up onto the ridge."
              ],
              "answer": 1,
              "hint": "The first two paragraphs are about how to find a pack. Ask what is left to say once you can find one whenever you like.",
              "skill": "Author's purpose and structure",
              "evidence": "The tracker does not go up the side valley."
            },
            {
              "q": "The report says the notes would otherwise be about 'a pack being followed, not a pack being a pack'. What does that phrase mean?",
              "choices": [
                "The tracker would have to follow the pack on foot for far longer than a week before the notes could be finished at all.",
                "The pack would move away into a completely different valley the moment it noticed the tracker, and the collar would stop being heard.",
                "The notes would have to be checked against the satellite dots before anybody could trust a single line of what they said about the pack.",
                "The wolves would be reacting to the tracker, so the notes would record that instead of ordinary wolf behavior."
              ],
              "answer": 3,
              "hint": "Read the clause immediately before it, about what happens to a pack that is walked up to. The phrase is naming what would end up in the notebook instead.",
              "skill": "Word meanings",
              "evidence": "A pack that is walked up to changes what it does, and then the notes are about a pack being followed, not a pack being a pack"
            },
            {
              "q": "Paragraphs 1 and 2 together explain how the collar keeps supplying information years after the wolf was let go. How does it?",
              "choices": [
                "The tracker replaces the collar's battery once a month, at the same time as the month of recorded dots is downloaded.",
                "It goes on beeping and reporting by itself, so nobody has needed to handle that wolf again.",
                "The wolf returns to the same stand of spruce every winter.",
                "A new wolf is collared each year to keep the record running."
              ],
              "answer": 1,
              "hint": "Paragraph one tells you the last time a person touched that wolf. Paragraph two tells you what has been recorded since. Lay those two facts side by side.",
              "skill": "Reading between the lines",
              "evidence": "a satellite hears it and records the wolf's position four times a day, and once a month the tracker downloads a month of dots"
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
              "Fractions: the bottom is how many equal parts; the top is how many are done."
            ],
            "example": "7 × 4 = 28."
          },
          "problems": [
            {
              "q": "Every fix needs 8 beeps, and there are 6 fixes. How many beeps is that?",
              "answer": "48",
              "hint": "6 groups of 8, so 6 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "The tracker splits 96 beeps in half. How many beeps is one half?",
              "answer": "48",
              "hint": "Half of 96.",
              "skill": "Dividing"
            },
            {
              "q": "The tracker plans to cover 800 miles this season and has covered 177. How many more miles are needed?",
              "answer": "623",
              "hint": "800 − 177.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the tracker has finished 5 of them. What fraction is done? (write a fraction)",
              "answer": "5/8",
              "hint": "5 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "The tracker follows the pack for 177 miles, then 25 more. How many miles is that?",
              "answer": "202",
              "hint": "177 + 25.",
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
            "example": "6 × 5 − 3 × 3 = 21: both multiplications first, then subtract."
          },
          "problems": [
            {
              "q": "The tracker has 7 1/5 miles of trail to check, in stretches of 3/5 of a mile. How many stretches is that?",
              "answer": "12",
              "hint": "Make 7 1/5 an improper fraction, 36/5. Then multiply by the flip of 3/5: 36/5 × 5/3.",
              "skill": "Fractions"
            },
            {
              "q": "Of 200 miles of planned survey route, 50% is snowed in and struck off the list. How many miles are left on it?",
              "answer": "100",
              "hint": "50% of 200 is 100. Take that off 200.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The tracker shares 16 trail cameras between two teams in the ratio 1 to 3. How many does the smaller share get?",
              "answer": "4",
              "hint": "1 + 3 = 4 parts. 16 ÷ 4 = 4 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The tracker works out 4 × 8 − 4 × 2. What is it?",
              "answer": "24",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "The coldest reading was −8 degrees and the warmest was −4 degrees. How many degrees apart are they?",
              "answer": "4",
              "hint": "From −8 up to −4.",
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
              "A two-step equation: undo the outside step first. In 3(x + 4) = 27, divide by 3, then take off 4."
            ],
            "example": "3(x + 4) = 27, so x + 4 = 9, so x = 5."
          },
          "problems": [
            {
              "q": "Logging 20 sets of tracks took 50 minutes. At the same rate, how many minutes would 28 sets take?",
              "answer": "70",
              "hint": "One set takes 50 ÷ 20 = 2.5 minutes. Then × 28.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pack's trail ran 200 miles, and fresh snow covered 50% of it. How many miles of trail were covered?",
              "answer": "100",
              "hint": "50% of 200: 50/100 × 200.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Each of the 4 packs in the valley is losing 2 wolves a winter. Write that as −2 a winter for each pack. How many more wolves were there in all 3 winters ago? Time before now counts as negative. Work it out as 4 × (−2) × (−3).",
              "answer": "24",
              "hint": "4 × 2 × 3, then count the minus signs. Two make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 7(x + 26) = 259",
              "answer": "11",
              "hint": "Divide both sides by 7 to get x + 26 = 37.",
              "skill": "Equations"
            },
            {
              "q": "A round board has a radius of 5 inches. Using 3.14 for pi, what is its area in square inches?",
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
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start at 4 and add 6 each step: the 5th number is 4 + 6 × 4 = 28."
          },
          "problems": [
            {
              "q": "The pack's total miles, day by day, go 5, 13, 21, 29, and on. What is the 10th number in the list?",
              "answer": "77",
              "hint": "It starts at 5 and adds 8 each step. The number you want is 9 steps on from 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 9² − 9?",
              "answer": "72",
              "hint": "9 × 9 = 81, then take 9 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 12 and 35 feet. How long is its longest side, in feet?",
              "answer": "37",
              "hint": "12² + 35² = 1369. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x − x = 40",
              "answer": "10",
              "hint": "5 − 1 = 4, so 4x = 40.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 14 feet across and 3 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (The radius is half the distance across.)",
              "answer": "461.58",
              "hint": "The radius is 14 ÷ 2 = 7. Volume = 3.14 × radius × radius × depth: 3.14 × 7 × 7 × 3.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Bearings",
          "points": [
            "A bearing is a number of degrees. Add and subtract them like any number.",
            "Do the steps in order."
          ],
          "example": "Bearing 90 plus 45 is 135."
        },
        "skill": "Following directions",
        "steps": [
          "The bearing the tracker took from the river was 40. Write it down.",
          "The bearing taken from the ridge a mile east was 320. Write that one down too.",
          "Take the smaller bearing away from the larger one.",
          "Divide what is left by the times a day the satellite records the collar: 4.",
          "Do not type the number on its own. A bearing is always written with its unit, so type it with the word DEGREES after it, like this: 25 DEGREES."
        ],
        "prompt": "Your answer:",
        "answer": "70 DEGREES",
        "accept": [
          "70 degrees",
          "70 Degrees",
          "70degrees",
          "70DEGREES",
          "seventy degrees",
          "SEVENTY DEGREES",
          "70 degrees."
        ],
        "hint": "Take the smaller bearing off the larger one first, then split what is left by the satellite's four fixes a day. Step 5 says how it is written."
      }
    },
    {
      "id": "wolves-3",
      "title": "The Moose",
      "recon": {
        "lesson": {
          "title": "Why wolves do what they do",
          "points": [
            "When the notes explain the reason for something, the reason is the detail a 'why' question wants.",
            "Weights in pounds are exact.",
            "A word about the animals is defined by what they do."
          ],
          "example": "'Robins hunt worms after rain.' Why? The rain brings the worms up."
        },
        "title": "Field Notes: Almost Every Answer Is a Moose",
        "passage": [
          "On the third day the collar has moved five miles north. The tracker follows on snowshoes and finds out why. In a willow flat beside the river there is a place where the snow is trampled flat in a circle fifty feet across. It is stained, with hair and bone scattered through it and ravens in every tree. The pack killed a moose here two nights ago. A moose is the biggest animal in the valley, a thousand pounds, taller than a person at the shoulder, and it is what this pack eats. Almost every question about where the wolves go and what they do has a moose in the answer.",
          "A moose is not easy to kill. A healthy adult can kick a wolf to death, and most of the time the pack tests a moose and gives up. What the wolves catch is the old, the sick, the injured and the very young, and by doing that they keep the moose herd healthier than it would be without them. That is not kindness. It is arithmetic. A pack of seven needs about seventy pounds of meat a day between them. A thousand-pound moose feeds them for a week. That is about how long the notes say a pack goes between kills in winter.",
          "The tracker measures the kill site, counts the ravens, thirty-one, and finds the moose's lower jaw in the snow. The teeth are worn almost flat. This was an old animal, twelve years or more, thin at the end of a hard winter. The tracker writes that down without sadness, because it is the answer the notes have been looking for: this pack is doing what a pack does. Above the flat, on a bench of spruce, the tracks show where seven wolves lay in the snow and slept it off."
        ],
        "questions": [
          {
            "q": "About how much does a moose weigh?",
            "choices": [
              "A hundred pounds, like a big dog",
              "Ten pounds",
              "A thousand pounds",
              "Ten thousand pounds, like a truck"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the sentence with 'the biggest animal in the valley'.",
            "skill": "Finding details"
          },
          {
            "q": "About how much meat does a pack of seven need a day?",
            "choices": [
              "Seven pounds, one pound each",
              "A thousand pounds, a whole moose",
              "Seven hundred pounds a day",
              "About seventy pounds"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'seventy pounds'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what does 'worn almost flat' tell the tracker about the teeth?",
            "choices": [
              "The moose was old, its teeth ground down by years of chewing",
              "The moose was young",
              "The moose was healthy",
              "The moose had been eating frozen willow twigs all through the winter"
            ],
            "answer": 0,
            "hint": "The next sentence says 'This was an old animal'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the tracker write down the old moose's death 'without sadness'?",
            "choices": [
              "Because the moose was already dead when the pack found it",
              "Because a healthy adult moose can kick a wolf to death, and most of the time the pack tests one and gives up",
              "Because it shows the pack doing what a pack does: taking the old and weak, which keeps the herd healthy",
              "Because a thousand-pound moose feeds a pack of seven for about a week, which is how long they go between kills"
            ],
            "answer": 2,
            "hint": "Paragraph 3, the sentence with 'the answer the notes have been looking for', and paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How to measure a kill site",
              "The kill site in the willow flat, and the thirty-one ravens counted in the trees",
              "Why wolves take the old and weak, and the arithmetic of feeding a pack",
              "Why a moose is not easy to kill, and what a healthy adult can do to a wolf"
            ],
            "answer": 2,
            "hint": "Paragraph 2 explains which moose the pack catches and why, then the pounds and the week.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Moose math",
          "points": [
            "Pounds a day ÷ wolves: pounds each.",
            "Volume of a box: length × width × height. 5 × 2 × 2 = 20 cubic feet.",
            "Middle to edge of a circle: half of the way across.",
            "Two-step: first find what part is left over, then find that part of the whole."
          ],
          "example": "45 pounds ÷ 5 wolves = 9 pounds each."
        },
        "problems": [
          {
            "q": "A pack of 7 needs about 70 pounds of meat a day. How many pounds is that per wolf?",
            "answer": "10",
            "hint": "70 ÷ 7.",
            "skill": "Dividing"
          },
          {
            "q": "The research cabin's freezer is 4 feet long, 2 feet wide and 3 feet tall. How many cubic feet does it hold?",
            "answer": "24",
            "hint": "Length × width × height: 4 × 2 first, then times 3.",
            "skill": "Volume"
          },
          {
            "q": "The kill site is a circle 50 feet across. How far is it from the middle to the edge?",
            "answer": "25",
            "hint": "50 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "The moose was 12 years old and the collared wolf is 4. How many years older was the moose?",
            "answer": "8",
            "hint": "12 − 4.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The pack takes 3/4 of the 1,000-pound moose, and the 31 ravens share what is left. How many pounds do the ravens get?",
            "answer": "250",
            "hint": "3/4 for the pack leaves 1/4. 1,000 ÷ 4.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Every paragraph has a job",
            "points": [
              "Ask what each paragraph is for: setting the scene, giving a cause, laying out numbers, or correcting an idea the reader might have arrived with.",
              "Two very short sentences in a row often do a job together, one taking something away and the other putting something in its place.",
              "A choice that only retells the paragraph has not named a job at all."
            ],
            "example": "'That is not luck. That is a schedule.' Nothing new is described. The pair is there to stop you explaining the thing the wrong way."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The tracker counted thirty-one ravens in the trees around the kill site and measured the trampled circle of snow, fifty feet across, that the pack left behind it in the willow flat.",
                "Nature is cruel and there is nothing anybody can do about that.",
                "One moose explains where the pack goes, what it eats and what it does to the herd, which is why the kill site answers most of the questions in the notes.",
                "Wolves usually succeed when they test a healthy adult moose, and a pack of seven can bring down a thousand-pound animal out in the open whenever it decides to."
              ],
              "answer": 2,
              "hint": "A trampled circle in the willows, a paragraph of arithmetic, and a worn-down jaw in the snow. Ask what all three are answering.",
              "skill": "Central idea and evidence",
              "evidence": "Almost every question about where the wolves go and what they do has a moose in the answer"
            },
            {
              "q": "Claim: the pack takes the animals a herd can most afford to lose. Which sentence from the report best supports that claim?",
              "choices": [
                "A healthy adult can kick a wolf to death, and most of the time the pack tests a moose and gives up.",
                "A moose is not easy to kill.",
                "A moose is the biggest animal in the valley, a thousand pounds, taller than a person at the shoulder, and it is what this pack eats.",
                "What the wolves catch is the old, the sick, the injured and the very young, and by doing that they keep the moose herd healthier than it would be without them."
              ],
              "answer": 3,
              "hint": "Two of these say why a healthy moose is hard to catch. The claim is about which ones are caught and what that does to the herd. Find the sentence with both halves in it.",
              "skill": "Finding details",
              "evidence": "What the wolves catch is the old, the sick, the injured and the very young, and by doing that they keep the moose herd healthier than it would be without them."
            },
            {
              "q": "Why does the report follow 'That is not kindness' with 'It is arithmetic'?",
              "choices": [
                "To stop the reader crediting the wolves with a motive, and to point at the numbers that come next instead.",
                "To explain how the tracker measured the trampled circle in the willows and worked out the size of the kill site from it.",
                "To set the wolves against the ravens at the same carcass.",
                "To describe how much a full-grown moose weighs."
              ],
              "answer": 0,
              "hint": "Two very short sentences in a row, one taking something away and one putting something in its place. Then read what follows them immediately.",
              "skill": "Author's purpose and structure",
              "evidence": "That is not kindness. It is arithmetic."
            },
            {
              "q": "The report says the tracker writes it down 'without sadness'. What does that phrase tell you?",
              "choices": [
                "The tracker has stopped caring about the animals in the valley after so many winters of watching them die",
                "The tracker was too tired at the end of the day to feel much",
                "The old moose's death is the expected answer, not something to be recorded as a tragedy",
                "The tracker doubts the moose was really an old one and is waiting for the worn jaw to be looked at properly"
              ],
              "answer": 2,
              "hint": "Read what comes after 'because' in the same sentence. It gives the reason, and the reason is not that the tracker has gone cold.",
              "skill": "Word meanings",
              "evidence": "The tracker writes that down without sadness, because it is the answer the notes have been looking for: this pack is doing what a pack does"
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the worn-flat teeth in the jaw matter to the notes. Why do they?",
              "choices": [
                "They show the moose had been lying there for more than a week.",
                "They prove the moose was brought down by the wolves themselves rather than found already dead and eaten by the ravens.",
                "They show the moose was old, which is exactly the kind of animal the paragraph before said a pack takes.",
                "They show the pack must be bigger than the seven counted at the bend, since no seven wolves could finish an animal that size."
              ],
              "answer": 2,
              "hint": "Paragraph two lists which animals a pack actually catches. Paragraph three hands you a jaw with worn teeth in it. Match one to the other.",
              "skill": "Reading between the lines",
              "evidence": "The teeth are worn almost flat."
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
              "Fractions with the same bottom: the bigger top is the bigger fraction."
            ],
            "example": "4 × 6 = 24."
          },
          "problems": [
            {
              "q": "The tracker carries 5 trail cameras on each of 6 trips. How many cameras is that?",
              "answer": "30",
              "hint": "6 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "Each trail camera needs 5 batteries. The tracker has 25 batteries. How many cameras can the tracker set up?",
              "answer": "5",
              "hint": "How many 5s fit into 25?",
              "skill": "Dividing"
            },
            {
              "q": "The tracker counted 192 tracks in the snow in the morning and 250 in the evening. How many more in the evening?",
              "answer": "58",
              "hint": "250 − 192.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 2/4 or 1/4? (write a fraction)",
              "answer": "2/4",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 4 feet on each side. How many feet is it all the way around?",
              "answer": "16",
              "hint": "Four sides of 4.",
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
            "example": "(6 − 2) × (3 + 4) = 28: each set of parentheses first."
          },
          "problems": [
            {
              "q": "The tracker has 53 minutes on snowshoes. Each stretch of track takes 2.65 minutes. How many stretches of track is that enough for?",
              "answer": "20",
              "hint": "Move both points 2 places to the right: 5300 ÷ 265.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 trail-camera photos, 75 show wolves. Out of 240 photos, how many show wolves?",
              "answer": "180",
              "hint": "240 is 2.4 hundreds, so 2.4 × 75.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The tracker divides 72 minutes of work in the ratio 4 to 5. How many minutes is the larger share?",
              "answer": "40",
              "hint": "9 parts in all, so one part is 8 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The tracker works out (11 − 3) × (9 + 18). What is it?",
              "answer": "216",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three readings came in: −15, −3 and 12 degrees. Which is the coldest?",
              "answer": "-15",
              "accept": [
                "−15"
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
              "A unit rate is the total divided by how many: 22 ÷ 4 = 5.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the taking away first, then undo the dividing by multiplying."
            ],
            "example": "x ÷ 5 − 2 = 4, so x ÷ 5 = 6, so x = 30."
          },
          "problems": [
            {
              "q": "The whole job, start to finish, takes 20 minutes, at 2.5 minutes for each set of tracks. One set is already done. How many sets are left?",
              "answer": "7",
              "hint": "20 ÷ 2.5 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The survey team expects the moose count to grow by no more than 10% this year. It starts at 240. What is the highest count they expect?",
              "answer": "264",
              "hint": "10% of 240 is 24. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer fell 20 degrees from −14 degrees. What does it read?",
              "answer": "-34",
              "accept": [
                "−34"
              ],
              "hint": "Falling takes it further below zero: start at −14 and go down 20 more.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 3 − 12 = 7",
              "answer": "57",
              "hint": "Add 12 to both sides, then multiply by 3.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 2 feet. How many inches are needed for 36 feet?",
              "answer": "18",
              "hint": "36 ÷ 2.",
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
            "example": "A line starts at 5 and climbs 4 each step: after 6 steps it is 4 × 6 + 5 = 29."
          },
          "problems": [
            {
              "q": "A line passes through (0, 12) and (3, 21). What is its slope?",
              "answer": "3",
              "hint": "Slope is the rise over the run: 9 ÷ 3.",
              "skill": "Linear relationships"
            },
            {
              "q": "Last winter the survey found 6² moose. This winter it found twice as many. How many moose is that?",
              "answer": "72",
              "hint": "6² is 36. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The tracker goes 8 feet east and then 15 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "17",
              "hint": "The two legs make a right angle: 8² + 15² = 289.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 7x + 11 and 5x + 19 come to the same number?",
              "answer": "4",
              "hint": "Set them equal, take 5x off both sides, then take 11 off.",
              "skill": "Equations"
            },
            {
              "q": "The tracker writes down 5 × 10^3. Then the tracker needs a number ten times as big. Written out in full, what is the new number?",
              "answer": "50000",
              "hint": "Ten times adds one to the power: 5 × 10^4.",
              "skill": "Powers and roots"
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
          "Write the weight of the moose in hundreds of pounds: 10.",
          "Multiply by the wolves in the pack: 7.",
          "Add the ravens the tracker counted in the trees: 31.",
          "Subtract the width of the trampled circle in feet: 50.",
          "Type the result, unless the worn-flat teeth in the jaw say the moose was an old animal, in which case type OLD instead."
        ],
        "prompt": "Your answer:",
        "answer": "OLD",
        "accept": [
          "old",
          "Old",
          "OLD.",
          "old."
        ],
        "hint": "The four sums are real work, but step 5 sends you back to the jaw the tracker found in the snow. Read what its teeth said."
      }
    },
    {
      "id": "wolves-4",
      "title": "The Howl",
      "recon": {
        "lesson": {
          "title": "What a sound means",
          "points": [
            "When the notes explain what a sound is for, each reason is a detail.",
            "Counts of voices and seconds are exact.",
            "A 'why' question may need two sentences that sit apart in the same paragraph."
          ],
          "example": "'Each wolf howls on a different note.' How do you count them? By the notes."
        },
        "title": "Field Notes: Seven Voices",
        "passage": [
          "At dusk on the fourth day the tracker is on the ridge when the pack howls. One voice starts, low, and the others come in one after another, each on a different note, until the valley is full of it. It stops after a minute as if a door had closed. Wolves howl to find each other across distance, to tell other packs where the edge of their ground is, and, as far as anyone can tell, because they like to. Every wolf howls on its own pitch, so that the chorus sounds like more wolves than it is. That is the point. A pack of seven wants to sound like twelve.",
          "The tracker counts anyway, because counting is the job. The trick is to listen for the low voices, the adults, and the high ones, the pups, and to count each one as it comes in, before they blur. Two low. Two more low. Three high. Seven, and the three high voices are this year's pups, born in the spring in a den dug into a sandy bank. Now they are nine months old and nearly full size, though they still trip over their own feet on the river ice. The notes from the tracks said seven. The howl says seven. That is a count.",
          "A pack is a family. The two lowest voices are the parents, the pair that has run this valley for six years. The two other adults are last year's pups, grown, who will leave this spring or next to find ground of their own. The three high voices are the babies. The old books called the parents alphas and talked about fights for the top; the tracker's notes just say mother and father, because that is what they are. The howl comes again at full dark, farther off. The pack is moving. Tomorrow is the last day."
        ],
        "questions": [
          {
            "q": "How many high voices did the tracker count?",
            "choices": [
              "Two",
              "Four",
              "Seven in all",
              "Three"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence 'Three high.'",
            "skill": "Finding details"
          },
          {
            "q": "How old are this year's pups?",
            "choices": [
              "Three months, born in spring",
              "Nine months",
              "Two years, last year's pups",
              "Six years, like the parents"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'nine months old'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does 'pitch' mean?",
            "choices": [
              "A throw",
              "A tent",
              "A slope",
              "How high or low a sound is"
            ],
            "answer": 3,
            "hint": "Paragraph 1 says each voice comes in 'on a different note', and later 'Every wolf howls on its own pitch'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does a pack of seven want to sound like twelve?",
            "choices": [
              "Because a bigger sound carries farther across the valley in the dark",
              "Because the pups are loud",
              "Because the valley echoes",
              "Because howling tells other packs where their ground is, and sounding bigger keeps them away"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentences about telling other packs where the edge of their ground is, and the last two sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The pups tripping over their own feet on the river ice",
              "How the chorus is counted, the low voices first and then the high ones",
              "What the old books called the alphas, and the fights that they described",
              "What a pack really is: a family of parents, older pups and babies"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 3 is 'A pack is a family.'",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Howl math",
          "points": [
            "Low voices plus high voices: the pack.",
            "Subtracting decimals: line up the points. 5.2 − 2.75 is 5.20 − 2.75 = 2.45.",
            "Hours to minutes: × 60.",
            "Part of a whole as a fraction: the part on top, the whole on the bottom."
          ],
          "example": "3 low + 2 high = 5 voices."
        },
        "problems": [
          {
            "q": "The tracker counted 4 low voices and 3 high. How many wolves?",
            "answer": "7",
            "hint": "4 + 3.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "An adult wolf's print is 4.5 inches long and a pup's print is 3.25 inches. How much longer is the adult's print? (write a decimal)",
            "answer": "1.25",
            "hint": "Line up the points: 4.50 − 3.25.",
            "skill": "Decimals"
          },
          {
            "q": "The parents have run the valley for 6 years. At one litter a year, how many litters of pups is that?",
            "answer": "6",
            "hint": "1 × 6.",
            "skill": "Multiplying"
          },
          {
            "q": "The howl lasted about 60 seconds and came again at full dark, 3 hours later. How many minutes is 3 hours?",
            "answer": "180",
            "hint": "3 × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "The pups are 3 of the 7 wolves. Write that as a fraction.",
            "answer": "3/7",
            "hint": "3 over 7.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The picture in the phrase",
            "points": [
              "Cover the phrase and read the sentence with a gap in it. What would you drop into the gap?",
              "A comparison is telling you about one quality, not about the whole thing it names. Work out which quality is being borrowed.",
              "Try your choice back in the sentence. Three of them will make the report claim something it never claimed."
            ],
            "example": "'The engine coughed and caught.' No lungs anywhere. Two sounds in order: one that nearly failed and one that worked."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "This year's three pups were born in the spring in a den dug into a sandy bank, and at nine months old they are already nearly full size.",
                "Animals communicate in ways people will never really understand.",
                "Every wolf in a pack howls on exactly the same note.",
                "The howl tells the tracker how many wolves there are and what they are to one another, once you know how to listen to it."
              ],
              "answer": 3,
              "hint": "A chorus built to sound bigger, a count made by pitch, and a family named at the end. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "A pack of seven wants to sound like twelve."
            },
            {
              "q": "Claim: the chorus is built to give a false impression of the pack's size. Which sentence from the report best supports that claim?",
              "choices": [
                "Wolves howl to find each other across distance, to tell other packs where the edge of their ground is, and, as far as anyone can tell, because they like to.",
                "Every wolf howls on its own pitch, so that the chorus sounds like more wolves than it is.",
                "The trick is to listen for the low voices, the adults, and the high ones, the pups, and to count each one as it comes in, before they blur.",
                "Seven, and the three high voices are this year's pups, born in the spring in a den dug into a sandy bank."
              ],
              "answer": 1,
              "hint": "Describing the sound is not the same as saying what the sound achieves. Look for the sentence that names the effect on whoever is listening.",
              "skill": "Finding details",
              "evidence": "Every wolf howls on its own pitch, so that the chorus sounds like more wolves than it is."
            },
            {
              "q": "Why does the third paragraph include the sentence about what the old books called the parents?",
              "choices": [
                "To explain how a den gets dug into a sandy bank.",
                "To warn that the young adults will leave the valley in spring.",
                "To give the ages of each of the four adult wolves.",
                "To set an older way of describing a pack against what the tracker actually sees, and to say which of the two the notes will use."
              ],
              "answer": 3,
              "hint": "That sentence names two ways of talking about the same two animals, and then chooses one. Ask what the choosing is for.",
              "skill": "Author's purpose and structure",
              "evidence": "The old books called the parents alphas and talked about fights for the top; the tracker's notes just say mother and father, because that is what they are."
            },
            {
              "q": "The report says the howl stops 'as if a door had closed'. What is that comparison telling you?",
              "choices": [
                "The sound was coming from inside a building somewhere",
                "The wolves had moved out of hearing behind a ridge",
                "The tracker heard nothing more for the rest of the night",
                "It ended all at once and completely, rather than fading away"
              ],
              "answer": 3,
              "hint": "Think about what a closing door does to a sound: not quieter and quieter, but one thing and then another. Read the words just before the comparison.",
              "skill": "Word meanings",
              "evidence": "It stops after a minute as if a door had closed"
            },
            {
              "q": "Paragraphs 1 and 2 together explain how a chorus built to confuse can still be counted. How is it possible?",
              "choices": [
                "The pups always howl first and the adults come in after them, so the three high voices can be counted before any of the low ones start.",
                "The tracker records the howl and plays it back slowly afterward in the truck, counting the voices one at a time off the recording.",
                "The chorus lasts only a minute, so there is not much to count.",
                "Each wolf has its own pitch, so the very thing that makes the chorus sound big is what lets a listener pick the voices apart."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you why every wolf sounds different. Paragraph two tells you what the tracker is listening for. One fact is doing two opposite jobs.",
              "skill": "Reading between the lines",
              "evidence": "The trick is to listen for the low voices, the adults, and the high ones, the pups, and to count each one as it comes in, before they blur."
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
              "Fractions with the same bottom: add the tops."
            ],
            "example": "6 × 7 = 42."
          },
          "problems": [
            {
              "q": "The tracker counts 3 choruses with 8 voices in each. How many voices is that?",
              "answer": "24",
              "hint": "3 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "24 voices are shared equally among 3 choruses. How many voices in each chorus?",
              "answer": "8",
              "hint": "How many 3s make 24?",
              "skill": "Dividing"
            },
            {
              "q": "The tracker counted 182 seconds, then found 175 more, then 89 more. How many seconds in all?",
              "answer": "446",
              "hint": "182 + 175 first. Then add 89.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The tracker finished 2/4 of the day's work before the break and 1/4 after. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "The sound recorder holds 700 seconds. 159 seconds have been used. How many seconds are left?",
              "answer": "541",
              "hint": "700 − 159.",
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
            "example": "4 × (9 − 2) + 6 = 34: parentheses, then multiply, then add."
          },
          "problems": [
            {
              "q": "The tracker snowshoes 5/12 of a mile in 5/8 of an hour. At that pace, how many miles is that in one hour? (write a fraction)",
              "answer": "2/3",
              "hint": "For one hour, divide the amount by the time: 5/12 ÷ 5/8 = 5/12 × 8/5. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "Of 60 seconds, 50% are set aside. How many is that?",
              "answer": "30",
              "hint": "50% of 60: 50% is 50/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The recorder picks up 4 howls every 5 seconds. It picked up 16 howls. How many seconds was that?",
              "answer": "20",
              "hint": "16 ÷ 4 = 4 groups. Each group has 5 seconds.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The tracker works out 8 × (12 − 3) + 10. What is it?",
              "answer": "82",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn it was −8 degrees. By noon it was 11 degrees. By how many degrees did it rise?",
              "answer": "19",
              "hint": "From −8 up to 0 is 8, then 11 more.",
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
            "example": "4x + 7 = 31, so 4x = 24, so x = 6."
          },
          "problems": [
            {
              "q": "8 sets of tracks took 10 minutes to log altogether. How many minutes is that for one set?",
              "answer": "1.25",
              "hint": "A rate is the total shared out: 10 ÷ 8.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pack's first chorus of howls lasted 60 seconds. The second lasted 25% longer. How many seconds did the second one last?",
              "answer": "75",
              "hint": "25% of 60 is 15. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer at the den site falls 4 degrees every hour. Write that as −4 an hour. When was it 32 degrees warmer than it is now? Work it out as 32 ÷ (−4), and write hours before now as a negative number.",
              "answer": "-8",
              "accept": [
                "−8"
              ],
              "hint": "32 ÷ 4, and one minus sign makes the answer negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 2x + 20 = 30",
              "answer": "5",
              "hint": "Take 20 off both sides first, then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "A round tray is 20 inches across. Using 3.14 for pi, how many inches is it around the edge?",
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
            "example": "Start at 9 and add 6 each hour: after 5 hours, 6 × 5 + 9 = 39."
          },
          "problems": [
            {
              "q": "The tracker has 15 trail-camera photos and gets 4 more every hour. After 4 hours, how many photos are there?",
              "answer": "31",
              "hint": "This is the straight-line rule y = mx + b: 4 × 4 + 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 100 square feet. How long is one side, in feet?",
              "answer": "10",
              "hint": "A square's area is side × side. What number times itself makes 100?",
              "skill": "Powers and roots"
            },
            {
              "q": "The tracker runs a rope from the top of a 9-foot spruce to a point 40 feet away on the ground. How long is the rope, in feet?",
              "answer": "41",
              "hint": "Right triangle: a² + b² = c². 9² + 40² = 81 + 1600 = 1681. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x + 9 = x + 18",
              "answer": "3",
              "hint": "Take x off both sides to get 3x + 9 = 18, then take 9 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 5 feet and is 3 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (volume = pi × radius × radius × depth)",
              "answer": "235.5",
              "hint": "3.14 × 5 × 5 = 78.5, then × 3.",
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
          "example": "'Start with 10. Add 5, then double it.' If 2 should have been added instead of 5, you get 24, not 30."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of low voices in the chorus: 4.",
          "Multiply by the number of high voices: 3.",
          "Add the months old this year's pups are: 9.",
          "Multiply that total by the number of parents in the pack: 2.",
          "Step 3 used the wrong number. Return to your step 2 total, add the years the parents have run the valley instead: 6, then do step 4's multiply on that.",
          "Type the number you end up with."
        ],
        "prompt": "Your answer:",
        "answer": "36",
        "hint": "Step 5 swaps the pups' months out for the parents' years. Rebuild from your step 2 total, then do the multiply step 4 asks for."
      }
    },
    {
      "id": "wolves-5",
      "title": "The Count",
      "recon": {
        "lesson": {
          "title": "Putting the week together",
          "points": [
            "The last notes look back over all five days. A 'mostly about' question wants the big point, not one detail.",
            "The final count and the distances are details.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'They walked twelve miles in three days.' How far? Twelve miles."
        },
        "title": "Field Notes: Seven, Confirmed",
        "passage": [
          "On the fifth morning the tracker gets the thing every wolf biologist waits a winter for: a look. From the ridge, through a spotting scope on a tripod, a mile and a half away across the river flat, seven wolves crossing the snow in a line. The big gray one with the collar is first, then two smaller grays, a black one, and three pups bouncing along at the back like children on a walk. The tracker watches for eleven minutes and takes a hundred photographs and does not move, and the pack never looks up.",
          "The count is now certain three ways. The tracks at the bend said seven. The howl said seven, four low and three high. The eyes say seven, four adults and three pups. The collar says where they have been: forty miles in five days, a loop around the north half of their territory. The loop took in one moose, two scent posts, three river crossings, and a night on a spruce bench sleeping off a meal. Every line of it is in the notes, and none of it needed the tracker to get closer than a mile.",
          "That is the whole method, and the notes say so on the last page for whoever tracks this pack next winter. Read the snow. Trust the collar. Count the voices. Look through a scope, not over a rifle. Never walk up to them. A pack that has never been bothered behaves like a pack. A pack that behaves like a pack tells you everything: how many, how old, what they eat, where they go, and whether the valley is healthy. This one is. Seven wolves, one old moose, a healthy herd. The tracker packs the scope, and across the river flat the line of tracks is already filling with blowing snow."
        ],
        "questions": [
          {
            "q": "How far away was the pack when the tracker saw it?",
            "choices": [
              "A mile and a half",
              "A hundred feet, across the flat",
              "Forty miles, the week's travel",
              "Across the river, on the far bank"
            ],
            "answer": 0,
            "hint": "The second sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How far did the pack travel in the five days?",
            "choices": [
              "Forty miles",
              "A mile",
              "Four hundred miles",
              "Four miles"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence with 'The collar says'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'spotting scope'?",
            "choices": [
              "A powerful telescope on a tripod for watching animals from far away",
              "A rifle",
              "A camera flash",
              "The H-shaped antenna that gets turned slowly until the beep grows louder"
            ],
            "answer": 0,
            "hint": "The tracker watches 'through a spotting scope on a tripod, a mile and a half away'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the count 'three ways' matter?",
            "choices": [
              "Because the tracks, the howl and the collar each give a different number and the notes take the largest",
              "Because tracks, howl and eyes all say seven, so the number is certain without disturbing the pack",
              "Because a satellite collar records a position only four times a day and could easily miss a whole pack",
              "Because the pack has to be counted three separate times before a biologist is allowed to write it down"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the first four sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The rifle",
              "The scope",
              "The five days of the week added up: forty miles, one moose, two scent posts, three crossings",
              "The method for tracking a pack without bothering it, and what a healthy pack tells you"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 3 is 'That is the whole method'.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Count math",
          "points": [
            "Miles over days: divide.",
            "Different bottoms: make them the same first. 1/3 + 1/2 = 2/6 + 3/6 = 5/6.",
            "Adding a long list: add two at a time and keep a running total.",
            "Two-step: feet in a mile and a half."
          ],
          "example": "28 miles ÷ 4 days = 7 miles a day."
        },
        "problems": [
          {
            "q": "The pack traveled 40 miles in 5 days. How many miles a day?",
            "answer": "8",
            "hint": "40 ÷ 5.",
            "skill": "Dividing"
          },
          {
            "q": "The tracker walked 1/2 of the week's miles on snowshoes and 1/5 of them on skis. What fraction of the week's miles is that? (write a fraction)",
            "answer": "7/10",
            "hint": "Make the bottoms the same: 1/2 is 5/10 and 1/5 is 2/10. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "A mile and a half is how many feet? A mile is 5,280 feet.",
            "answer": "7920",
            "accept": [
              "7,920"
            ],
            "hint": "5,280 plus half of 5,280, which is 2,640.",
            "skill": "Fractions"
          },
          {
            "q": "The pack made 3 river crossings and 2 scent posts in 5 days. How many of those events in all?",
            "answer": "5",
            "hint": "3 + 2.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The tracker walked 6 miles on day 1, 4 on day 2, 10 on day 3, 3 on day 4 and 2 on day 5. How many miles in all?",
            "answer": "25",
            "hint": "6 + 4 = 10, + 10 = 20, + 3 = 23, + 2.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Nothing here answers it alone",
            "points": [
              "The last question is written so that no paragraph answers it alone. Take one fact from one and one from another.",
              "Say the two facts out loud in your head, then say 'so'. Whatever comes after 'so' is the answer you are looking for.",
              "Check that you could point at a line in two different paragraphs before you commit to a choice."
            ],
            "example": "Paragraph one: the gate was left open all night. Paragraph three: the sheep are in the next field by morning. So nobody had to move them. Neither line says that on its own."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A winter's answers came from three separate methods that agreed, and from one rule: stay far enough back that the pack goes on being itself.",
                "The tracker watched from the ridge for eleven minutes without moving and took a hundred photographs of the seven wolves crossing the river flat.",
                "Wild animals should never be studied by people under any circumstances, because any watching at all changes what the animals do and spoils the record.",
                "The tracker had to get close to the pack in order to finish the count, walking up the side valley on the last morning to see all seven wolves properly."
              ],
              "answer": 0,
              "hint": "Three ways of counting that agree, a list of rules on the last page, and a mile and a half of distance. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "and none of it needed the tracker to get closer than a mile"
            },
            {
              "q": "Claim: the count can be trusted because it was reached in more than one way. Which sentence from the report best supports that claim?",
              "choices": [
                "The count is now certain three ways.",
                "The collar says where they have been: forty miles in five days, a loop around the north half of their territory.",
                "Trust the collar.",
                "Count the voices."
              ],
              "answer": 0,
              "hint": "The other three each name a single method. The claim is about there being several methods. Find the sentence that says so outright.",
              "skill": "Finding details",
              "evidence": "The count is now certain three ways."
            },
            {
              "q": "Why does the report set the last page out as a short list of instructions?",
              "choices": [
                "So that the method, and not only this winter's result, is handed on to whoever comes next.",
                "Because a short list is quicker to read than a page of sentences.",
                "To list the equipment that will have to be bought before anybody can track this pack next winter.",
                "To explain how the spotting scope is set up on its tripod."
              ],
              "answer": 0,
              "hint": "Read the words that come just before the list. They tell you exactly who the list was written for.",
              "skill": "Author's purpose and structure",
              "evidence": "the notes say so on the last page for whoever tracks this pack next winter"
            },
            {
              "q": "The last page says 'Look through a scope, not over a rifle.' What is that line telling the next tracker to do?",
              "choices": [
                "Use a scope that can be fitted onto a rifle",
                "Watch the wolves rather than hunt them",
                "Carry a rifle in case the pack comes close",
                "Take photographs from farther off than a mile"
              ],
              "answer": 1,
              "hint": "Two ways of looking at an animal, set against each other in eight words. Ask what a person is actually doing in each case.",
              "skill": "Word meanings",
              "evidence": "Look through a scope, not over a rifle."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the pack never looked up during those eleven minutes. What does the report suggest?",
              "choices": [
                "Wolves cannot see anything at all at a mile and a half.",
                "The spotting scope was hidden behind a screen of spruce.",
                "The pack was too busy keeping the three pups moving along at the back of the line to look up at the ridge above the river flat.",
                "A pack that has never been bothered goes on behaving normally, and at that distance the tracker was nothing to them."
              ],
              "answer": 3,
              "hint": "Paragraph one gives you the distance and tells you the tracker did not move. Paragraph three tells you what a pack that has never been bothered does. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "A pack that has never been bothered behaves like a pack"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 8 means 4 groups of 8.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add or take away the tops; the bottom stays."
            ],
            "example": "4 × 8 = 32."
          },
          "problems": [
            {
              "q": "The tracker counted 7 miles yesterday and three times as many today. How many miles today?",
              "answer": "21",
              "hint": "Three times 7: 7 + 7 + 7.",
              "skill": "Multiplying"
            },
            {
              "q": "The tracker splits a 63-mile route into surveys of 7 miles. How many surveys is that?",
              "answer": "9",
              "hint": "How many 7s make 63?",
              "skill": "Dividing"
            },
            {
              "q": "The wolf study runs for 354 days. 92 days have passed. How many days are left?",
              "answer": "262",
              "hint": "354 − 92.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "5/8 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "3/8",
              "hint": "The whole job is 8/8. Take 5/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square photo mat is 9 squares on each side. How many squares is that?",
              "answer": "81",
              "hint": "9 rows of 9.",
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
            "example": "9 + 4 × 5 = 29: multiply first, then add."
          },
          "problems": [
            {
              "q": "The plan allows 305.25 minutes. The tracker uses 104.8 minutes on the first stretch of track and 78.9 on the second. How many minutes are left?",
              "answer": "121.55",
              "hint": "Add the two amounts used first, then take that from 305.25. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "30 of the 120 days are set aside. What percent is that? (write just the number)",
              "answer": "25",
              "accept": [
                "25%"
              ],
              "hint": "30 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pack shifts its range 1 mile every 3 days. How many miles does it shift in 15 days?",
              "answer": "5",
              "hint": "15 ÷ 3 = 5 groups. Each group has 1 mile.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The tracker works out 14 + 3 × 6. What is it?",
              "answer": "32",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the thermometer read 2 degrees. By dark it had fallen to −10 degrees. By how many degrees did it fall?",
              "answer": "12",
              "hint": "From 2 down to 0 is 2, then 10 more.",
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
            "example": "50 − 4x = 18, so 4x = 32, so x = 8."
          },
          "problems": [
            {
              "q": "Logging one set of tracks needs 0.5 minutes. How many minutes do 8 sets need?",
              "answer": "4",
              "hint": "8 × 0.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The tracker counted 200 caribou on the first pass and 180 on the second. By what percent did the count change? (write just the number)",
              "answer": "10",
              "accept": [
                "10%",
                "-10",
                "−10",
                "-10%",
                "−10%"
              ],
              "hint": "The change is 20. 20 out of 200, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer read −10 degrees at dawn and −29 degrees at dark. How many degrees did it fall?",
              "answer": "19",
              "hint": "From −10 down to −29.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 111 − 9x = 30",
              "answer": "9",
              "hint": "Move 9x to the right and 30 to the left: 9x = 81.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 10 feet. The riverbank is really 110 feet long. How many inches is it on the plan?",
              "answer": "11",
              "hint": "110 ÷ 10.",
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
            "example": "Start with 40 and use 4 an hour: after 6 hours, 40 − 4 × 6 = 16."
          },
          "problems": [
            {
              "q": "The tracker starts with 31 hand warmers and uses 3 every hour. How many are left after 7 hours?",
              "answer": "10",
              "hint": "3 × 7 = 21 used, taken off 31.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 9 small cubes along every edge. How many small cubes make it up?",
              "answer": "729",
              "hint": "9³ means 9 × 9 × 9.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope runs from the top of a spruce to a point 15 feet away on the ground. How tall is the spruce, in feet?",
              "answer": "8",
              "hint": "a² = c² − b² = 289 − 225 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x = 4x + 10",
              "answer": "2",
              "hint": "Take 4x off both sides: 5x = 10. Then divide by 5.",
              "skill": "Equations"
            },
            {
              "q": "The pack's home range covers about 300,000 acres. Written as 3 × 10 to a power, what is the power?",
              "answer": "5",
              "hint": "Count the zeros after 3.",
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
          "example": "'Start with 12. Add 30. Ignore that, and add 4 to 12 instead.' You end on 16."
        },
        "skill": "Following directions",
        "steps": [
          "Write the miles the collar says the pack traveled: 40.",
          "Divide by the days it took them: 5.",
          "Multiply by the wolves crossing the flat in a line: 7.",
          "Add the photographs the tracker took: 100.",
          "Ignore step 4. Photographs are not part of a count, so add the minutes the tracker watched through the scope instead: 11.",
          "Type the count you are left with."
        ],
        "prompt": "Your answer:",
        "answer": "67",
        "hint": "Step 5 drops the photographs out of the sum. Go back to your step 3 total and put the watching minutes on in their place."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
