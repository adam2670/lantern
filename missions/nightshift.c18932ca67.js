// ODYSSEY — campaign "nightshift". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "nightshift",
  "kind": "shift",
  "readingLevel": {
    "fk": 5.3,
    "cl": 5.8
  },
  "grade": "5",
  "kindLabel": "Shift",
  "form": "gatorbot",
  "title": "Night Shift",
  "subtitle": "Station Kestrel, orbital dock seven",
  "pitch": "Five nights on watch. Cameras, power budgets, and maintenance logs that don't add up. Something on the station is moving after lights-out.",
  "scene": "assets/scene-nightshift.jpg",
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
  "reconNoun": "Maintenance Log",
  "legs": {
    "recon": "Cameras",
    "nav": "Power",
    "orders": "Protocol",
    "debrief": "Incident review"
  },
  "rules": [
    "Stuck? <b>Flag it</b> and move on. Flagged items come back at the incident review.",
    "Cameras: read the questions <b>before</b> the log.",
    "Protocol: read <b>every</b> step. The station does not forgive skipped steps."
  ],
  "fact": "The station runs on a fixed power budget. So do you. Spend both carefully.",
  "finale": {
    "prompt": "The cat stays. What do you call him?",
    "options": [
      {
        "label": "Bolt",
        "color": "#FFB454"
      },
      {
        "label": "Rivet",
        "color": "#4FD1FF"
      },
      {
        "label": "Comet",
        "color": "#B57BFF"
      },
      {
        "label": "Socket",
        "color": "#4FD18B"
      }
    ],
    "done": "Logged. Dawn. Go to bed."
  },
  "patrols": [
    {
      "id": "night-1",
      "title": "Orientation",
      "recon": {
        "lesson": {
          "title": "Reading a log like a detective",
          "points": [
            "Read the five questions first. Two want details, one wants a word, one asks why, one asks what a paragraph is mostly about.",
            "Word questions: the log often explains a hard word in the very next sentence. Look right after it.",
            "'Why' questions: the answer is shown, not always said. Look at what happens right before and after."
          ],
          "example": "The last keeper's final entry is one line long. Ask what a person is doing when they stop writing."
        },
        "title": "Keeper's Log: Orientation",
        "passage": [
          "Welcome to Station Kestrel, orbital dock seven. You are the night keeper. From lights-out at ten until dawn at six, you are the only one awake on the station. Your job is simple: watch the cameras, keep the power up, and write everything down in this log. The keeper before you did the same for three years. His last entry, dated nine days ago, is one line long. It says: Not tonight. Read the older ones.",
          "The station runs on a budget. A budget is a fixed amount you are allowed to spend, and here it is power: one hundred units a night, and not one more. Every camera you switch on costs units. Every door you open costs units. The lights in the corridors cost units just by being on. When the units run out, the station goes dark until dawn, and dark is exactly when you do not want to be here.",
          "So the trick of the night shift is spending. Watch the cameras that matter, not all twelve. Open the doors you have to and no others. Write down what you spent and what you saw, every hour, even if the answer is nothing. Especially if the answer is nothing. The keepers before you filled forty logbooks that way, and somewhere in them is the reason the last one stopped."
        ],
        "questions": [
          {
            "q": "What are the night keeper's three jobs?",
            "choices": [
              "Count the units, read the older logs, and lock the doors",
              "Watch the cameras, keep the power up, and write everything down",
              "Fix the old cargo loader, feed the crew, and sweep out the corridors",
              "Open every door and check every room"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence with 'Your job is simple'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does 'budget' mean?",
            "choices": [
              "A kind of battery that holds one hundred units",
              "The number of cameras you are allowed to switch on",
              "A list of the doors that cost units to open",
              "A fixed amount you are allowed to spend"
            ],
            "answer": 3,
            "hint": "The sentence right after the word explains it.",
            "skill": "Word meanings"
          },
          {
            "q": "What happens when the power units run out?",
            "choices": [
              "The cameras get brighter",
              "The doors lock open",
              "Nothing; dawn comes early",
              "The station goes dark until dawn"
            ],
            "answer": 3,
            "hint": "End of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "Why does the log tell you to write down 'especially' the nights when nothing happens?",
            "choices": [
              "Because a keeper who skips an hour forgets what was spent",
              "Because the station will not go dark as long as the log is filled in every hour",
              "Because the keepers before you filled forty logbooks and the rule is to match them",
              "Because a record of quiet nights is what makes an unusual night stand out"
            ],
            "answer": 3,
            "hint": "Paragraph 3 says the older logs hold the reason the last keeper stopped. What would be useful to compare against?",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The power budget: what costs units and what happens when they run out",
              "How many cameras there are",
              "The final entry the last keeper wrote nine days ago",
              "Everything a night keeper does between lights-out and dawn"
            ],
            "answer": 0,
            "hint": "Every sentence in paragraph 2 is about units. Which answer covers all of them?",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Spending a budget",
          "points": [
            "Cost per hour times hours gives the total: 7 × 4 = 28. Sharing equally goes the other way: 28 ÷ 4 = 7.",
            "What is left is the budget minus what you spent: 90 − 28 = 62.",
            "Two things spent: add them first, then subtract from the budget.",
            "Fractions with the same bottom: add the tops. 1/5 + 3/5 = 4/5."
          ],
          "example": "Lights 30 and fans 25 make 55 spent. 90 − 55 = 35 left."
        },
        "problems": [
          {
            "q": "The cameras cost 6 units an hour. Your watch is 8 hours. How many units do the cameras cost for the whole night?",
            "answer": "48",
            "hint": "6 × 8.",
            "skill": "Multiplying"
          },
          {
            "q": "The budget is 100 units. The cameras cost 48. How many units are left after the cameras?",
            "answer": "52",
            "hint": "100 − 48.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "You start with 100 units. The cameras use 48 and the doors use 12. How many units are left?",
            "answer": "40",
            "hint": "48 + 12 first. Then subtract from 100.",
            "skill": "Multi-step problems"
          },
          {
            "q": "You spend 2/8 of the night on the cameras and 3/8 on the log. What fraction of the night is that together? (write a fraction)",
            "answer": "5/8",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The night watch has 135 checks to make, shared equally among 5 rounds. How many checks are in each round?",
            "answer": "27",
            "hint": "135 ÷ 5.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "One sentence for three paragraphs",
            "points": [
              "The central idea has to cover the whole log entry, not the paragraph you happened to like. Say it in one sentence before you read any choice.",
              "The wrong answers are usually true. They cover one paragraph, or they are a saying about life that the log never makes.",
              "Then four other moves: prove a claim with one line, say what a paragraph is for, work a word out from its sentence, and put two paragraphs together."
            ],
            "example": "Three paragraphs about a night bus: the route it takes, the fare box that only takes coins, why the driver keeps a jar of change. 'The fare is two coins' covers one paragraph. 'Buses are useful' covers none of it. 'A route with a coin-only fare box forces the driver to plan around change' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole entry?",
              "choices": [
                "Every camera you switch on costs units from the night's total, and so does every door you open and every corridor light left burning from lights-out until dawn at six.",
                "The keeper's night comes down to spending a fixed amount of power carefully and writing down everything, because the writing is what the next keeper works from.",
                "Working alone at night is the loneliest job anybody can have.",
                "The station has all the power it needs as long as the lights stay off."
              ],
              "answer": 1,
              "hint": "Label the paragraphs: the job, the limit, how to work inside it. One choice covers only the middle label, and one says something the entry never claims.",
              "skill": "Central idea and evidence",
              "evidence": "So the trick of the night shift is spending."
            },
            {
              "q": "Claim: the log is not only a record of one night, it is a tool for whoever comes next. Which sentence from the entry best supports that claim?",
              "choices": [
                "Your job is simple: watch the cameras, keep the power up, and write everything down in this log.",
                "A budget is a fixed amount you are allowed to spend, and here it is power: one hundred units a night, and not one more.",
                "The keeper before you did the same for three years.",
                "The keepers before you filled forty logbooks that way, and somewhere in them is the reason the last one stopped."
              ],
              "answer": 3,
              "hint": "Three of these are true and none of the three say what a written page is later used for. Find the sentence where the old writing is still doing work.",
              "skill": "Finding details",
              "evidence": "The keepers before you filled forty logbooks that way, and somewhere in them is the reason the last one stopped."
            },
            {
              "q": "Why does the second paragraph stop to explain what a budget is?",
              "choices": [
                "Because the station's money is what the entry is really about.",
                "Because it compares this station with the other orbital docks.",
                "Because it lists the twelve cameras in the order they are numbered.",
                "Because the third paragraph's advice only makes sense once you know the power is fixed."
              ],
              "answer": 3,
              "hint": "Ask what the next paragraph needs you to already know. A definition is usually there to set up the paragraph after it, not for its own sake.",
              "skill": "Author's purpose and structure",
              "evidence": "A budget is a fixed amount you are allowed to spend, and here it is power: one hundred units a night, and not one more."
            },
            {
              "q": "The entry says 'the trick of the night shift is spending'. What does trick mean as it is used here?",
              "choices": [
                "A clever way of fooling somebody who is watching the cameras",
                "A joke played on the next keeper",
                "A hidden fault somewhere in the station's old wiring",
                "The one skill the whole job comes down to"
              ],
              "answer": 3,
              "hint": "Cover the word and read the sentence with a hole in it. What is the paragraph after it teaching you to do? Whatever fills the hole has to fit that.",
              "skill": "Word meanings",
              "evidence": "So the trick of the night shift is spending."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why running out of units is worse than simply being in the dark. Why is it?",
              "choices": [
                "You are the only person awake on the station, and the dark lasts until dawn with no way to buy it back.",
                "The cameras keep recording after the lights go out and fill the logbook with nothing.",
                "Every door on the station locks permanently when the power ends.",
                "A log written in the dark cannot be read by the keeper who follows you."
              ],
              "answer": 0,
              "hint": "One paragraph tells you who else is awake. The other tells you how long the dark lasts and that nothing can be added to the hundred. Put those two facts side by side.",
              "skill": "Reading between the lines",
              "evidence": "When the units run out, the station goes dark until dawn, and dark is exactly when you do not want to be here."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 5 × 8 means 5 groups of 8.",
              "Sharing equally is dividing.",
              "A floor of squares: multiply the two sides. 4 by 5 is 20 squares, and if 6 are covered, 14 are left.",
              "A fraction names parts of a whole: 2 of 5 equal parts done is 2/5."
            ],
            "example": "5 groups of 8 is 8 + 8 + 8 + 8 + 8 = 40, so 5 × 8 = 40."
          },
          "problems": [
            {
              "q": "Every hour needs 6 units, and there are 7 hours. How many units is that?",
              "answer": "42",
              "hint": "7 groups of 6, so 7 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "The keeper splits 84 units in half. How many units is one half?",
              "answer": "42",
              "hint": "Half of 84.",
              "skill": "Dividing"
            },
            {
              "q": "The keeper needs 1,000 power units and has 235. How many more are needed?",
              "answer": "765",
              "hint": "1,000 − 235.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 4 equal parts and the keeper has finished 3 of them. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "3 parts out of 4.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 9 squares wide and 2 squares long. The keeper has covered 9 squares. How many squares are left to cover?",
              "answer": "9",
              "hint": "9 × 2 squares in all, then take 9 off.",
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
            "example": "x + 33 + 12 = 95: add 33 and 12 to get 45, then 95 − 45 = 50, so x = 50."
          },
          "problems": [
            {
              "q": "Each camera hour takes 2.15 power units. How many power units for 7 camera hours?",
              "answer": "15.05",
              "hint": "Split it: 7 × 2 plus 7 × 0.15.",
              "skill": "Decimals"
            },
            {
              "q": "Of 40 power units, 20% are crossed off the list. How many are left on it?",
              "answer": "32",
              "hint": "20% of 40 is 8. Take that off 40.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper shares 35 doors between two teams in the ratio 2 to 5. How many does the smaller share get?",
              "answer": "10",
              "hint": "2 + 5 = 7 parts. 35 ÷ 7 = 5 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper works out 9 × 9 − 4 × 3. What is it?",
              "answer": "69",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 147 + 11 = 750",
              "answer": "592",
              "hint": "Add 147 and 11 first, then take that off 750.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 9 units for 36 lights is 9 ÷ 36 = 0.25 each.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the last thing done to x first. With parentheses, divide first, then take away."
            ],
            "example": "4(x + 6) = 56, so x + 6 = 14, so x = 8."
          },
          "problems": [
            {
              "q": "20 camera hours took 10 power units. At the same rate, how many power units would 32 camera hours take?",
              "answer": "16",
              "hint": "One camera hour takes 10 ÷ 20 = 0.5. Then × 32.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper had 200 power units, then added 50% more. How many power units were added?",
              "answer": "100",
              "hint": "50% of 200: 50/100 × 200.",
              "skill": "Ratios and percent"
            },
            {
              "q": "One ledger reads −3 units and another reads −8 units. How many units apart are they?",
              "answer": "5",
              "hint": "From −8 up to −3.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 2(x + 17) = 42",
              "answer": "4",
              "hint": "Divide both sides by 2 to get x + 17 = 21.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 11 cm stands for 275 meters. How many meters does 1 cm stand for?",
              "answer": "25",
              "hint": "275 ÷ 11.",
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
              "Collect like terms first: 9x − 4x is 5x. With x on both sides, move the x's to one side."
            ],
            "example": "6 × 10^3 is 6 with three zeros, 6,000. That beats 7 × 10^2, which is only 700."
          },
          "problems": [
            {
              "q": "The count of power units goes 24, 30, 36, 42, and on. What is the 7th number in the list?",
              "answer": "60",
              "hint": "It starts at 24 and adds 6 each step. The number you want is 6 steps on from 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (3 × 3)²?",
              "answer": "81",
              "hint": "3 × 3 = 9 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 9 and 12 meters. How long is its longest side, in meters?",
              "answer": "15",
              "hint": "9² + 12² = 225. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x − x = 10",
              "answer": "2",
              "hint": "x is the same as 1x, so 6 − 1 = 5, and 5x = 10.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 2 × 10^5 or 3 × 10^4? Write the bigger one out in full.",
              "answer": "200000",
              "hint": "2 × 10^5 is ten times 2 × 10^4, and 3 is not ten times 2.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Protocol with a condition",
          "points": [
            "Do the steps in order and write the running number.",
            "A step that says 'if the total is more than', can only be checked after you have the total. Read to the end first."
          ],
          "example": "3 + 8 = 11. Is 11 more than 10? Yes, so the condition applies."
        },
        "skill": "Following directions",
        "steps": [
          "Lock the blast door. That costs 3 units.",
          "Switch on cameras 1, 2, 3 and 4. Each camera costs 2 units.",
          "Add up every unit spent so far.",
          "Camera 4 shuts itself down at midnight, so take its 2 units back off.",
          "Add 4 units for the hour the corridor lights were burning.",
          "Type the units spent, unless the total is more than 10, in which case take 10 away first and type what is left."
        ],
        "prompt": "Units used:",
        "answer": "3",
        "hint": "Add the door's 3 units to four cameras at 2 units each, then follow steps 4 and 5. Step 6 changes what you type."
      }
    },
    {
      "id": "night-2",
      "title": "The Cameras",
      "recon": {
        "lesson": {
          "title": "Same time every night",
          "points": [
            "When a log says something happens 'every night at the same time', the question will ask why. Look for what else happens on a schedule.",
            "'Interval' and words like it are defined in the log. Find the sentence that says what it means."
          ],
          "example": "If a dog barks every day at five, and the mail truck comes every day at five, the two are probably connected."
        },
        "title": "Keeper's Log: The Camera Map",
        "passage": [
          "Twelve cameras cover the station. Cameras one to four watch the main corridor, five and six the galley where the food is kept, seven, eight and nine the loader bay, and ten to twelve the airlocks. The loader bay is the big cargo room at the far end, full of stacked crates and one old cargo loader. It is a machine the size of a car with two long arms, parked in the corner where it was switched off years ago.",
          "The keepers before you noticed a pattern and wrote it down forty times. Camera eight, the one pointed at the loader, flickers every night at ten past two. Not at random. At the same interval, meaning the same gap of time, every single night: four hours and ten minutes after lights-out. The picture goes gray for six seconds, then comes back, and on some nights the crates in the corner are not quite where they were.",
          "The last keeper checked the obvious things. The camera is not broken; it was swapped for a new one and the new one flickers too. The wiring is fine. What he wrote, on the night before his last entry, is this: the corridor lights dim on a timer at ten past two to save power. Something in the bay wakes up when the lights dim. He did not write what."
        ],
        "questions": [
          {
            "q": "Which cameras watch the loader bay?",
            "choices": [
              "Seven, eight and nine",
              "One to four",
              "Five and six",
              "Eight, nine, ten and eleven"
            ],
            "answer": 0,
            "hint": "Paragraph 1, second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does 'interval' mean?",
            "choices": [
              "A camera that goes gray for six seconds each night",
              "The time the flicker starts",
              "A gray picture",
              "The same gap of time between events"
            ],
            "answer": 3,
            "hint": "The word is explained right after it with 'meaning'.",
            "skill": "Word meanings"
          },
          {
            "q": "How long does the flicker last?",
            "choices": [
              "Six whole minutes",
              "Four hours and ten minutes",
              "Six seconds",
              "Minutes"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence about the picture going gray.",
            "skill": "Finding details"
          },
          {
            "q": "Why does the flicker happen at ten past two every night?",
            "choices": [
              "The camera is broken",
              "The camera was swapped for a new one and the new one is faulty too",
              "The wiring behind camera eight loses power for six seconds every night",
              "The corridor lights dim on a timer at that moment, and something in the bay reacts to it"
            ],
            "answer": 3,
            "hint": "Paragraph 3 says what else happens at ten past two.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the twelve cameras are divided up among the rooms of the station",
              "The size of the old cargo loader and the corner it has been parked in",
              "How to swap out a flickering camera for a new one",
              "What the last keeper ruled out, and the one clue he found"
            ],
            "answer": 3,
            "hint": "Paragraph 3 lists things that are NOT the cause, then gives one that might be.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Covering ground",
          "points": [
            "A fraction times a whole number: 6 × 2/3 is six 2/3s, which is 12/3, or 4.",
            "Area of a rectangle: length × width. A 9 by 7 room is 9 × 7 = 63 square meters.",
            "Sharing equally is dividing: 84 cups into 4 boxes is 84 ÷ 4 = 21.",
            "Same bottom: 7/9 − 4/9 = 3/9, which is a third."
          ],
          "example": "8 × 3/4 is eight 3/4s, which is 24/4, or 6."
        },
        "problems": [
          {
            "q": "Each of the 8 cameras on the loader bay takes 1/4 of an hour to check. How many hours does it take to check all 8?",
            "answer": "2",
            "hint": "Eight 1/4s is 8/4. Four quarters make one hour.",
            "skill": "Fractions"
          },
          {
            "q": "The loader bay is 18 meters long and 6 meters wide. What is its area in square meters?",
            "answer": "108",
            "hint": "18 × 6.",
            "skill": "Area and perimeter"
          },
          {
            "q": "96 ration packs are shared equally among 8 crates. How many packs go in each crate?",
            "answer": "12",
            "hint": "96 ÷ 8.",
            "skill": "Dividing"
          },
          {
            "q": "At lights-out, 5/6 of all the crates were in the stack. By morning, 2/6 of all the crates had been moved out of it. What fraction of all the crates is still in the stack? (write a fraction)",
            "answer": "3/6",
            "hint": "Same bottom. Subtract the tops. 3/6 or 1/2 both count.",
            "accept": [
              "1/2"
            ],
            "skill": "Fractions"
          },
          {
            "q": "The corridor runs 1,000 meters end to end. The cameras cover 180 meters of it. How many meters are not covered?",
            "answer": "820",
            "hint": "1,000 − 180.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Proof, not just true",
            "points": [
              "A supporting sentence has to settle the claim by itself. Read the claim, read your pick, and ask whether anyone could still argue.",
              "All four choices are real sentences from the entry, so being true is worth nothing. Only proving counts.",
              "The usual trap is a sentence that shares a word with the claim and proves none of it."
            ],
            "example": "Claim: the door was opened from the inside. 'The door is made of steel' is true and proves nothing. 'The bar that holds it can only be lifted from the corridor' is proof."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole entry?",
              "choices": [
                "A flicker that arrives at the same minute every night has been checked and is not a camera fault, which leaves something in the bay reacting on a schedule.",
                "Camera eight is the one pointed at the old cargo loader.",
                "Old machines can never be trusted on a station this far out.",
                "The flicker comes at random times rather than on any schedule, so no keeper could ever say in advance which night it will happen or at what hour of that night it will come."
              ],
              "answer": 0,
              "hint": "Paragraph one is the map, paragraph two is the pattern, paragraph three is what has been ruled out. Find the choice that needs all three, and cross off the one the entry directly denies.",
              "skill": "Central idea and evidence",
              "evidence": "Something in the bay wakes up when the lights dim."
            },
            {
              "q": "Claim: whatever is causing the flicker, it is not the camera. Which sentence from the entry best supports that claim?",
              "choices": [
                "Cameras one to four watch the main corridor, five and six the galley where the food is kept, seven, eight and nine the loader bay, and ten to twelve the airlocks.",
                "Twelve cameras cover the station.",
                "The last keeper checked the obvious things.",
                "The camera is not broken; it was swapped for a new one and the new one flickers too."
              ],
              "answer": 3,
              "hint": "Saying somebody checked is not saying what the check showed. Find the sentence that describes a test and the result in the same breath.",
              "skill": "Finding details",
              "evidence": "The camera is not broken; it was swapped for a new one and the new one flickers too."
            },
            {
              "q": "Why does the first paragraph describe the parked loader in such detail before the flicker has even been mentioned?",
              "choices": [
                "It explains how the twelve cameras were installed and wired into the station years ago, and how long the work of running cable to each of them took.",
                "It compares the loader bay with the galley at the other end of the station, setting the room full of stacked crates against the room where the food is kept.",
                "It puts the one machine in that room in front of you first, so that when crates start moving you already know what is in the corner with them.",
                "It gives the order in which the cameras were switched on."
              ],
              "answer": 2,
              "hint": "A detail dropped in early is often there for a paragraph that has not arrived yet. Ask what you would be missing later if this description were deleted.",
              "skill": "Author's purpose and structure",
              "evidence": "The loader bay is the big cargo room at the far end, full of stacked crates and one old cargo loader. It is a machine the size of a car with two long arms, parked in the corner where it was switched off years ago"
            },
            {
              "q": "The entry says 'something in the bay wakes up when the lights dim'. What does wakes up mean as it is used here?",
              "choices": [
                "Stops sleeping the way a person does at dawn",
                "Notices that a camera has been pointed at it",
                "Switches on a light of its own in the dark",
                "Starts working again after a long time standing still"
              ],
              "answer": 3,
              "hint": "Nothing in a cargo bay sleeps. Ask what the phrase would mean about a machine, then check it against the crates that are not quite where they were.",
              "skill": "Word meanings",
              "evidence": "The picture goes gray for six seconds, then comes back, and on some nights the crates in the corner are not quite where they were."
            },
            {
              "q": "Paragraphs 1 and 3 together point at one likely answer to what is moving the crates. What is it?",
              "choices": [
                "A fault in the wiring behind the stacked crates, which would explain both the gray picture and the crates ending up in new places.",
                "The camera itself, swinging slowly on its mount.",
                "Another keeper working down in the bay in the small hours, moving the crates back before the morning.",
                "The old cargo loader, which has two long arms and stands in the same corner the crates are in."
              ],
              "answer": 3,
              "hint": "Paragraph three says something in the bay wakes but never says what. Paragraph one already told you everything that is in the bay. Put the list next to the gap.",
              "skill": "Reading between the lines",
              "evidence": "full of stacked crates and one old cargo loader. It is a machine the size of a car with two long arms, parked in the corner where it was switched off years ago"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 5 × 4 means 5 groups of 4.",
              "Sharing equally is dividing.",
              "Taking away: line up hundreds, tens and ones. 475 − 132 = 343.",
              "Fractions with the same bottom: the bigger top is the bigger fraction. 5/8 is more than 3/8."
            ],
            "example": "5 groups of 4 is 4 + 4 + 4 + 4 + 4 = 20, so 5 × 4 = 20."
          },
          "problems": [
            {
              "q": "The keeper carries 3 crates on each of 2 trips. How many crates is that?",
              "answer": "6",
              "hint": "2 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "Every bay takes 8 crates. The keeper has 24 crates. How many bays can be filled?",
              "answer": "3",
              "hint": "How many 8s fit into 24?",
              "skill": "Dividing"
            },
            {
              "q": "The keeper counted 206 crates in the morning and 316 in the evening. How many more in the evening?",
              "answer": "110",
              "hint": "316 − 206.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 2/6 or 4/6? (write a fraction)",
              "answer": "4/6",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "The target is 500 crates and 280 are logged. How many short is that?",
              "answer": "220",
              "hint": "500 − 280.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Dividing by a fraction: 3 ÷ 1/5 asks how many fifths fit in 3. Each whole holds 5, so 3 × 5 = 15.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(11 − 4) × (6 + 6): parentheses first, so 7 × 12 = 84."
          },
          "problems": [
            {
              "q": "The keeper has 5 hours left on shift. Each camera check takes 1/3 of an hour. How many camera checks fit in that time?",
              "answer": "15",
              "hint": "Dividing by 1/3 is the same as multiplying by 3: 5 × 3.",
              "skill": "Fractions"
            },
            {
              "q": "Out of every 100 crates, 25 are set aside. Out of 120 crates, how many is that?",
              "answer": "30",
              "hint": "120 is 1.2 hundreds, so 1.2 × 25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper divides 45 minutes of work in the ratio 2 to 3. How many minutes is the larger share?",
              "answer": "27",
              "hint": "5 parts in all, so one part is 9 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper works out (9 − 5) × (5 + 7). What is it?",
              "answer": "48",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 363 = x − 19",
              "answer": "382",
              "hint": "Add 19 to both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 21 units for 6 lamps is 21 ÷ 6 = 3.5 each.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "x ÷ 4 − 5 = 2, so x ÷ 4 = 7, so x = 28."
          },
          "problems": [
            {
              "q": "The job needs 36 power units in all, at 1.5 power units for each camera. One camera is already powered. How many cameras are left to power?",
              "answer": "23",
              "hint": "36 ÷ 1.5 = 24 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of crates may change by no more than 50%. Starting from 240, what is the highest count the rule allows?",
              "answer": "360",
              "hint": "50% of 240 is 120. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The gauge drops 8 every hour for 8 hours. What is the total change? (Write a drop as a negative number.)",
              "answer": "-64",
              "accept": [
                "−64"
              ],
              "hint": "8 hours of −8 each: 8 × (−8). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 3 − 11 = 10",
              "answer": "63",
              "hint": "Add 11 to both sides, then multiply by 3.",
              "skill": "Equations"
            },
            {
              "q": "A round wheel measures 62.8 centimeters around the edge. Using 3.14 for pi, how many centimeters is it across?",
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
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "A line through (0, 7) and (2, 23) rises 16 over a run of 2, so its slope is 8."
          },
          "problems": [
            {
              "q": "A line passes through (0, 5) and (4, 29). What is its slope?",
              "answer": "6",
              "hint": "Slope is the rise over the run: 24 ÷ 4.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 100 square meters. How many meters is it around the edge?",
              "answer": "40",
              "hint": "One side is the square root of 100, then four sides.",
              "skill": "Powers and roots"
            },
            {
              "q": "The keeper walks 3 meters down one corridor, turns a right angle, and walks 4 meters down another. In a straight line, how far is that from the start, in meters?",
              "answer": "5",
              "hint": "The two legs make a right angle: 3² + 4² = 25.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 7x + 17 and 5x + 31 come to the same number?",
              "answer": "7",
              "hint": "Set them equal, take 5x off both sides, then take 17 off.",
              "skill": "Equations"
            },
            {
              "q": "Two round tanks each have a radius of 5 meters and are 5 meters deep. Using 3.14 for pi, what is their total volume in cubic meters?",
              "answer": "785",
              "hint": "One tank is 3.14 × 5 × 5 × 5 = 392.5. Then double it.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Ignore this step if",
          "points": [
            "A later step can cancel an earlier one. You only find out by reading to the end.",
            "Write the sum down before you decide anything."
          ],
          "example": "1 + 2 + 3 = 6. If a later step says the doubling does not happen, 6 goes on as it is."
        },
        "skill": "Following directions",
        "steps": [
          "Write down the three camera numbers that cover the loader bay: 7, 8 and 9.",
          "Add them together.",
          "Multiply that sum by 2, once for each pass the loader made.",
          "Step 3 does not happen. The loader made one pass tonight, not two, so nothing gets doubled.",
          "Add the 6 seconds camera eight goes gray for.",
          "Type the number you are left with."
        ],
        "prompt": "Your answer:",
        "answer": "30",
        "hint": "Add the three camera numbers first. Step 4 throws the doubling away, so carry your step 2 sum into step 5."
      }
    },
    {
      "id": "night-3",
      "title": "The Power Gauge",
      "recon": {
        "lesson": {
          "title": "Thresholds",
          "points": [
            "Word questions: the log explains its own hard words. Find the sentence with the word and read the words around it.",
            "'What does the keeper mean by' questions: find the sentence and say it in your own words."
          ],
          "example": "When a coach says 'we left it all on the field', say it in your own words: we tried as hard as we could."
        },
        "title": "Keeper's Log: The Power Gauge",
        "passage": [
          "The big dial on the desk is the power gauge. It starts every night at one hundred and drops as you spend. The needle is amber above forty and turns red below it. Red does not mean the station is about to go dark; you have units left. Red means you are below the threshold, the line where the station's old systems change how they behave. Machines that sleep above the line wake up below it.",
          "The last keeper worked this out by accident. He had a wasteful night, opened too many doors, and watched the needle cross forty at half past one. At ten past two, camera eight flickered as always, and this time, because the corridor lights had dimmed and the gauge was red, the old loader in the corner lifted one arm. He wrote: it thinks the station is asleep. Then he wrote: it is not the only thing that does.",
          "There is a second gauge, smaller, for the backup battery. It holds one thousand units and it is only for emergencies. The keepers before you agreed on a rule and wrote it on the desk in marker: never touch the backup to stay above forty. Learn to spend, they wrote, or learn what wakes up. Most of them chose to learn to spend."
        ],
        "questions": [
          {
            "q": "At what number does the gauge needle turn red?",
            "choices": [
              "Forty",
              "One hundred",
              "Ten",
              "One thousand"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence about amber and red.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'threshold'?",
            "choices": [
              "The desk the gauge sits on",
              "The smaller second gauge that reads the backup battery",
              "The line below which the station's old systems change how they behave",
              "The timer that dims the corridor lights at ten past two on every single night"
            ],
            "answer": 2,
            "hint": "The sentence that begins 'Red means you are below the threshold'.",
            "skill": "Word meanings"
          },
          {
            "q": "What did the loader do when the gauge was red at ten past two?",
            "choices": [
              "It drove out of the bay",
              "It switched the cameras off",
              "It lifted one arm",
              "Nothing at all that night"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the long sentence about the flicker.",
            "skill": "Finding details"
          },
          {
            "q": "What does the keeper mean by 'it thinks the station is asleep'?",
            "choices": [
              "The loader can tell what time of night it is",
              "The loader is broken",
              "The keeper had opened too many doors that night, so the gauge went red and the loader's one arm was too heavy to lift",
              "Dim lights and a red gauge make the loader act as if the whole station has shut down for the night, so it wakes and moves"
            ],
            "answer": 3,
            "hint": "Paragraph 1 says machines that sleep above the line wake below it. Put that together with dim lights.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the loader lifts its arm",
              "What the amber and red parts of the big dial mean",
              "The night the keeper opened too many doors and watched the needle cross forty",
              "The backup battery and the rule about never using it to stay above forty"
            ],
            "answer": 3,
            "hint": "Paragraph 3 introduces the second gauge and ends with a rule about it.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Draining and refilling",
          "points": [
            "A tank of 80 drops 5 an hour for 6 hours: 5 × 6 = 30, then 80 − 30 = 50.",
            "Subtracting from 1,000: think of 1,000 as 999 + 1. 999 − 260 = 739, plus 1 is 740.",
            "Perimeter is all four sides added: 6 + 2 + 6 + 2 = 16.",
            "Money: $1.50 three times is $1.50 + $1.50 + $1.50 = $4.50."
          ],
          "example": "12 × 19: 12 × 20 is 240, then take one 12 off to get 228."
        },
        "problems": [
          {
            "q": "The gauge starts at 100 and drops 8 units every hour. What does it read after 7 hours?",
            "answer": "44",
            "hint": "8 × 7 first. Then 100 minus that.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The backup battery holds 1,000 units. An emergency uses 375. How many units are left in the backup?",
            "answer": "625",
            "hint": "1,000 − 375. Think of 1,000 as 999 + 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The loader's parking space is 4 meters by 3 meters. What is its perimeter in meters?",
            "answer": "14",
            "hint": "Add all four sides: 4 + 3 + 4 + 3.",
            "skill": "Area and perimeter"
          },
          {
            "q": "Ration packs cost $2.50 each. How much do 4 of them cost? (write it like 3.75)",
            "answer": "10",
            "hint": "$2.50 + $2.50 = $5. Then $5 + $5.",
            "accept": [
              "10.00",
              "$10",
              "$10.00"
            ],
            "skill": "Money and decimals"
          },
          {
            "q": "You read the power gauge 15 times a night. How many readings is that over 9 nights?",
            "answer": "135",
            "hint": "15 × 9: 15 × 10 is 150, then take one 15 off.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Why the writer put it there",
            "points": [
              "Every paragraph is doing a job: setting a rule, giving an example, explaining a cause, or showing a problem and what was done about it.",
              "Find the job by deleting the paragraph in your head. What would you no longer know? That missing thing is the job.",
              "A choice that only retells the paragraph has named no job at all. Look for the one that says why it is in the entry."
            ],
            "example": "A page about a lock spends one paragraph on a single night the lock froze. Its job is not to tell a story. It is to make the rule in the paragraph before it feel like something that actually happens."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole entry?",
              "choices": [
                "Dropping below one line on the gauge wakes the old machines, so the keepers made a rule about it.",
                "The needle on the gauge is amber above forty and red below it.",
                "Old equipment should always be replaced before it has a chance to fail.",
                "A red needle means the station is about to go dark at any moment."
              ],
              "answer": 0,
              "hint": "The line, the night it was crossed, and the rule written in marker. Ask what all three of those are about. One choice is a detail from the first paragraph and one is denied outright.",
              "skill": "Central idea and evidence",
              "evidence": "Red means you are below the threshold, the line where the station's old systems change how they behave."
            },
            {
              "q": "Claim: the keepers' rule about the backup battery is about what a keeper learns, not only about saving power. Which sentence from the entry best supports that claim?",
              "choices": [
                "The keepers before you agreed on a rule and wrote it on the desk in marker: never touch the backup to stay above forty.",
                "The big dial on the desk is the power gauge.",
                "Learn to spend, they wrote, or learn what wakes up.",
                "He wrote: it thinks the station is asleep."
              ],
              "answer": 2,
              "hint": "Stating a rule is not the same as saying what the rule is for. Find the sentence that offers two futures and lets you pick which one you get.",
              "skill": "Finding details",
              "evidence": "Learn to spend, they wrote, or learn what wakes up."
            },
            {
              "q": "What job does the second paragraph do in this entry?",
              "choices": [
                "It lists all the doors the keeper opened that night, in the order he opened them, from lights-out until the needle finally crossed forty at half past one.",
                "It explains how the big power gauge on the desk was built, from the amber and red markings on its face to the needle that swings back across them.",
                "It gives one real night as an example, so the line described in the first paragraph stops being an idea and becomes something that happened.",
                "It sets the main gauge on the desk beside the smaller backup gauge, weighing the hundred units the one starts with against the thousand the other holds."
              ],
              "answer": 2,
              "hint": "The paragraph adds no new rule. Ask what a paragraph is doing when it only tells you about one particular night.",
              "skill": "Author's purpose and structure",
              "evidence": "The last keeper worked this out by accident."
            },
            {
              "q": "The entry says machines 'that sleep above the line wake up below it'. What does sleep mean as it is used here?",
              "choices": [
                "Rest so as to work better later",
                "Work slowly through the night at half speed",
                "Shut down for good and never wake",
                "Sit switched off, doing nothing at all"
              ],
              "answer": 3,
              "hint": "Machines do not rest. Read the second paragraph to see what waking looked like when it happened, then work backward to what sleeping must have been.",
              "skill": "Word meanings",
              "evidence": "and this time, because the corridor lights had dimmed and the gauge was red, the old loader in the corner lifted one arm"
            },
            {
              "q": "Paragraphs 1 and 3 together explain what the keepers meant by 'or learn what wakes up'. What did they mean?",
              "choices": [
                "Study the station's old machines carefully during the daytime.",
                "Using the backup battery is what wakes the machines up.",
                "The machines wake at the same hour whatever the gauge reads, so what the keeper spends makes no difference at all to them.",
                "Spend badly, drop below the line, and you will find out for yourself which machines start moving."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you what happens below the line. Paragraph three gives you the phrase but not its meaning. Carry the first paragraph's fact into the third paragraph's sentence.",
              "skill": "Reading between the lines",
              "evidence": "Machines that sleep above the line wake up below it."
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
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "5 rows of 6 is 6 + 6 + 6 + 6 + 6 = 30, so 5 × 6 = 30."
          },
          "problems": [
            {
              "q": "The keeper checks 3 docking bays with 4 cargo pods in each. How many cargo pods is that?",
              "answer": "12",
              "hint": "3 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "12 cargo pods are shared equally among 3 docking bays. How many pods go in each bay?",
              "answer": "4",
              "hint": "How many 3s make 12?",
              "skill": "Dividing"
            },
            {
              "q": "The keeper counted 347 power units, then found 130 more, then 11 more. How many power units in all?",
              "answer": "488",
              "hint": "347 + 130 first. Then add 11.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The keeper checked 2/4 of the gauges before the break and 1/4 after. What fraction of the gauges is checked? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A gauge platform is 9 squares wide and 3 squares long. How many squares is that?",
              "answer": "27",
              "hint": "9 rows of 3, so 9 × 3.",
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
            "example": "6 × (8 − 2) + 5: parentheses first, 6 × 6 = 36, then add 5 to get 41."
          },
          "problems": [
            {
              "q": "9 camera hours took 22.05 power units altogether, and each took the same. How many power units did each one take?",
              "answer": "2.45",
              "hint": "22.05 ÷ 9. Divide as with whole numbers and keep the point in place.",
              "skill": "Decimals"
            },
            {
              "q": "Of 240 power units, 20% are set aside. How many is that?",
              "answer": "48",
              "hint": "20% of 240: 20% is 20/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Gauges and power units are kept in the ratio 4 to 5. If there are 20 gauges, how many power units?",
              "answer": "25",
              "hint": "20 ÷ 4 = 5 groups. Each group has 5 power units.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper works out 9 × (10 − 3) + 9. What is it?",
              "answer": "72",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 373 = 600",
              "answer": "227",
              "hint": "Subtract 373 from both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 14 units for 4 lamps is 14 ÷ 4 = 3.5 each.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "4x + 9 = 41, so 4x = 32, so x = 8."
          },
          "problems": [
            {
              "q": "12 cameras needed 18 power units altogether. How many power units is that for one camera?",
              "answer": "1.5",
              "hint": "A rate is the total shared out: 18 ÷ 12.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper counted 80 power units on the first pass. On the second pass the number had fallen by 10%. How many power units is that?",
              "answer": "72",
              "hint": "10% of 80 is 8. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The supply ledger opens at −3 units. The keeper adds 13 units, then takes out 3 units. What does the ledger read now?",
              "answer": "7",
              "hint": "Start at −3, add 13 to get 10, then subtract 3.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 7x + 24 = 59",
              "answer": "5",
              "hint": "Take 24 off both sides first, then divide by 7.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 cm stands for 5 meters. The corridor measures 5 cm on the plan. How long is it really, in meters?",
              "answer": "25",
              "hint": "Every cm is 5 m, so 5 × 5.",
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
            "example": "Start at 20 and add 3 each hour: after 6 hours, y = 3 × 6 + 20 = 38."
          },
          "problems": [
            {
              "q": "The keeper starts with 12 power units and adds 9 more every hour. After 5 hours, how many power units are there?",
              "answer": "57",
              "hint": "This is the straight-line rule y = mx + b: 9 × 5 + 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each row holds 4² power units. There are 3 rows. How many power units in all?",
              "answer": "48",
              "hint": "4² means 4 × 4 = 16. Then × 3.",
              "skill": "Powers and roots"
            },
            {
              "q": "The keeper runs a cable from the top of an 8-meter post to a point 15 meters away on the ground. How long is the cable, in meters?",
              "answer": "17",
              "hint": "Right triangle: a² + b² = c². 8² + 15² = 64 + 225 = 289. The cable is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x + 2 = 2x + 14",
              "answer": "4",
              "hint": "Take 2x off both sides to get 3x + 2 = 14, then take 2 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The keeper writes the total number of power units as 9 × 10^5. Written out in full, what number is that?",
              "answer": "900000",
              "hint": "10^5 is 1 with 5 zeros after it: 100,000. Then × 9.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Two numbers, written the way the log writes them",
          "points": [
            "Some orders want two numbers, not one. Keep what is left and what was spent as two separate totals. They always add back up to the start.",
            "The last step says which number comes first and what goes between them. Read it before you type."
          ],
          "example": "Start at 100 and spend 30. Left is 70, spent is 30. The log writes it 70-30, left first, with a dash."
        },
        "skill": "Following directions",
        "steps": [
          "The power gauge starts the night at 100 units.",
          "Take off 44 units for the doors and lights of the first hour.",
          "Take off 8 units for the next hour.",
          "Take off 8 units again for the hour after that.",
          "Work out how many units are left on the gauge and how many you have spent.",
          "Type the two numbers with a dash between them, units left first, the way the log writes it. A night with 70 left and 30 spent is written 70-30."
        ],
        "prompt": "Log entry:",
        "answer": "40-60",
        "accept": [
          "40 - 60",
          "40 – 60",
          "40-60.",
          "40 -60",
          "40- 60"
        ],
        "hint": "The two numbers you type always add back up to the 100 the gauge started at. Step 6 says which one comes first."
      }
    },
    {
      "id": "night-4",
      "title": "The Ration Count",
      "recon": {
        "lesson": {
          "title": "Clues in the details",
          "points": [
            "When a log describes something odd (small prints, a missing count), the inference question asks what could cause it. Use every detail: size, place, what is missing.",
            "'Inventory' is defined in the log. Find where."
          ],
          "example": "Muddy paw prints by the back door and an empty dog bowl: who has been in the kitchen?"
        },
        "title": "Keeper's Log: The Ration Count",
        "passage": [
          "Every keeper counts the food. The inventory, which is the list of everything in the galley and how many of each, is taped inside the cupboard door, and the rule is to count it at lights-out and again at dawn. For three years the two counts matched. Then, starting about two months ago, the dawn count of ration packs came up short. Three packs a night. Never two, never four. Three.",
          "The last keeper did what you would do. He locked the galley. Three missing. He moved the packs to a high shelf. Three missing. He set a camera on the cupboard and watched the footage in the morning, and the footage showed the cupboard door, closed, all night, and three packs gone from behind it. The packs are small, foil, about the size of your hand. The loader could not get through a galley door if it wanted to, and it does not eat.",
          "On his second-to-last night he spilled flour on the galley floor by accident and did not sweep it up. In the morning there were prints in it. Small ones, round, four toes and a pad, leading from a vent near the floor to the cupboard and back. He drew one in the margin of the log. It is barely bigger than a coin. Under the drawing he wrote: Not tonight. Read the older ones. And then he stopped writing, because he had found what he was looking for and wanted the next keeper to find it too."
        ],
        "questions": [
          {
            "q": "How many ration packs go missing each night?",
            "choices": [
              "Three",
              "One",
              "Two",
              "Four"
            ],
            "answer": 0,
            "hint": "End of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'inventory'?",
            "choices": [
              "The cupboard door the list is taped to",
              "The count of ration packs taken at dawn",
              "The list of everything in the galley and how many of each",
              "A foil ration pack the size of your hand"
            ],
            "answer": 2,
            "hint": "The second sentence of paragraph 1 defines it with 'which is'.",
            "skill": "Word meanings"
          },
          {
            "q": "Where did the prints in the flour lead?",
            "choices": [
              "From a vent near the floor to the cupboard and back",
              "From the airlock to the loader",
              "From the cupboard on the high shelf down to the galley door",
              "Out the galley door"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the sentence describing the prints.",
            "skill": "Finding details"
          },
          {
            "q": "Based on the prints and the missing packs, what is most likely taking the rations?",
            "choices": [
              "The old cargo loader's long arm",
              "The last keeper, taking packs before he stopped writing",
              "A mistake in the count",
              "A small animal that fits through a vent"
            ],
            "answer": 3,
            "hint": "Four toes and a pad, barely bigger than a coin, coming from a vent. What has feet like that and fits through a vent?",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The rule about counting the food at lights-out and at dawn",
              "The small foil packs and how big they are compared with your hand",
              "Why the old cargo loader could not have taken the packs",
              "Everything the keeper tried that did not stop the packs going missing"
            ],
            "answer": 3,
            "hint": "Paragraph 2 is a list of attempts. Which answer says that?",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Counting what is missing",
          "points": [
            "6 cups a day for 7 days is 6 × 7 = 42. Start with 100, take away 42 to get 58.",
            "A quarter of 28 boxes: 28 ÷ 4 = 7.",
            "Same bottom: 8/9 − 5/9 = 3/9.",
            "Leftovers: 50 ÷ 12 is 4 with 2 left over, because 4 × 12 = 48."
          ],
          "example": "One crate costs $3.75. Double it for 2 crates: $7.50. Double again for 4 crates: $15."
        },
        "problems": [
          {
            "q": "The inventory started at 144 ration packs. Three go missing every night for 4 nights. How many packs are left?",
            "answer": "132",
            "hint": "3 × 4 = 12 missing. Then 144 − 12.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The galley has 20 shelves. One quarter of them are empty. How many shelves are empty?",
            "answer": "5",
            "hint": "20 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "The flour bin was 7/10 full. The spill used 3/10 of the bin. How full is it now? (write a fraction)",
            "answer": "4/10",
            "hint": "Same bottom. Subtract the tops. 4/10 or 2/5 both count.",
            "accept": [
              "2/5"
            ],
            "skill": "Fractions"
          },
          {
            "q": "The supply ship brings 365 ration packs, packed 12 to a crate. After filling as many crates as it can, how many packs are left over?",
            "answer": "5",
            "hint": "12 × 30 = 360. How many packs are left after 360?",
            "skill": "Dividing"
          },
          {
            "q": "A crate of ration packs costs $12.50. The galley orders 4 crates. How much is that? (write it like 7.25)",
            "answer": "50",
            "hint": "12.50 × 4. Double it, then double it again.",
            "accept": [
              "$50",
              "50.00",
              "$50.00"
            ],
            "skill": "Money and decimals"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Cover the word",
            "points": [
              "Put a finger over the word and read the sentence with a hole in it. What would you drop into the hole?",
              "The sentence usually hands you the answer. Something beside the word, or the sentence after it, tells you the job it is doing.",
              "Test your pick by putting it back. If the sentence now says something the entry never said, it is the wrong pick."
            ],
            "example": "'The plan fell flat at the meeting.' Nothing fell and nothing is flat. The phrase is only telling you the plan did not work."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole entry?",
              "choices": [
                "Packs keep vanishing however the galley is shut, and the prints in the flour are the first real sign of what has been taking them.",
                "The ration packs are small, foil, and about the size of a hand.",
                "Food is the most valuable thing on any station anywhere.",
                "The lights-out count and the dawn count have always matched exactly, which is why the keeper had no reason to lock the galley or set a camera on the cupboard."
              ],
              "answer": 0,
              "hint": "The count, the things that were tried, the prints. Ask what those three are all steps in. One choice is a detail and one is denied by the first paragraph.",
              "skill": "Central idea and evidence",
              "evidence": "In the morning there were prints in it."
            },
            {
              "q": "Claim: whatever is taking the packs, it is not the cargo loader. Which sentence from the entry best supports that claim?",
              "choices": [
                "The packs are small, foil, about the size of your hand.",
                "He moved the packs to a high shelf.",
                "The loader could not get through a galley door if it wanted to, and it does not eat.",
                "Three packs a night."
              ],
              "answer": 2,
              "hint": "The claim rules one suspect out, so you need a sentence about that suspect. Find the one giving two separate reasons it could not be the loader.",
              "skill": "Finding details",
              "evidence": "The loader could not get through a galley door if it wanted to, and it does not eat."
            },
            {
              "q": "The second paragraph is a list of things the keeper tried. What job does that list do?",
              "choices": [
                "Each attempt knocks out an ordinary explanation, so that by the end of the paragraph the easy answers are gone.",
                "It shows that the keeper was careless, leaving the galley unlocked and the packs down on a low shelf where anything could reach them.",
                "It gives the order in which the packs disappeared.",
                "It compares the galley with the loader bay at the far end."
              ],
              "answer": 0,
              "hint": "Read what follows each attempt. Three missing. Three missing. Three missing. Ask what a writer is proving by repeating a result rather than changing it.",
              "skill": "Author's purpose and structure",
              "evidence": "He set a camera on the cupboard and watched the footage in the morning, and the footage showed the cupboard door, closed, all night, and three packs gone from behind it."
            },
            {
              "q": "The entry says the dawn count 'came up short'. What does that phrase mean as it is used here?",
              "choices": [
                "It took less time than the count usually takes",
                "It was finished before dawn had properly arrived",
                "It turned up more packs on the shelf than the list said there should be",
                "It ended with fewer packs than the list said there should be"
              ],
              "answer": 3,
              "hint": "Nothing came up and nothing is short in height. Read on into the next paragraph, where the keeper writes down the result of every try. Let that settle it.",
              "skill": "Word meanings",
              "evidence": "Then, starting about two months ago, the dawn count of ration packs came up short."
            },
            {
              "q": "Paragraphs 2 and 3 together suggest how something is getting into a locked galley. How is it?",
              "choices": [
                "Through the cupboard door, which was standing open all night.",
                "By being carried in by the keeper himself without his noticing.",
                "By coming down into the galley from the loader bay above.",
                "Through the vent near the floor, which is small enough that a locked door makes no difference at all."
              ],
              "answer": 3,
              "hint": "Paragraph two shuts every door and still loses three packs. Paragraph three shows you where the prints start. Put the closed doors next to the starting point.",
              "skill": "Reading between the lines",
              "evidence": "Small ones, round, four toes and a pad, leading from a vent near the floor to the cupboard and back."
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
              "Adding and taking away: line up hundreds, tens and ones. 352 − 128 = 224.",
              "Fractions: a whole cut into 5 parts is 5/5. Take 2/5 away and 3/5 is left."
            ],
            "example": "6 groups of 5 is 5 + 5 + 5 + 5 + 5 + 5 = 30, so 6 × 5 = 30."
          },
          "problems": [
            {
              "q": "The keeper counted 9 ration packs yesterday and three times as many today. How many ration packs today?",
              "answer": "27",
              "hint": "Three times 9: 9 + 9 + 9.",
              "skill": "Multiplying"
            },
            {
              "q": "The keeper packs 36 ration packs into shelves of 9. How many shelves is that?",
              "answer": "4",
              "hint": "How many 9s make 36?",
              "skill": "Dividing"
            },
            {
              "q": "The keeper starts with 160 ration packs and uses 74. How many are left?",
              "answer": "86",
              "hint": "160 − 74.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "1/4 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "3/4",
              "hint": "The whole job is 4/4. Take 1/4 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The tally stood at 211 ration packs and 500 more were added. What is the tally now?",
              "answer": "711",
              "hint": "211 + 500.",
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
            "example": "9 + 4 × 8: multiply first, 4 × 8 = 32, then 9 + 32 = 41."
          },
          "problems": [
            {
              "q": "There is 2/3 of a ration bar left, shared equally between 2 crew members. What fraction of the bar does each one get? (write a fraction)",
              "answer": "1/3",
              "hint": "Sharing among 2 is the same as multiplying by 1/2: 2/3 × 1/2.",
              "skill": "Fractions"
            },
            {
              "q": "4 of the 40 ration packs are set aside. What percent is that? (write just the number)",
              "answer": "10",
              "accept": [
                "10%"
              ],
              "hint": "4 out of 40, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 2 shelves there are 5 ration packs. There are 15 ration packs. How many shelves?",
              "answer": "6",
              "hint": "15 ÷ 5 = 3 groups. Each group has 2 shelves.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper works out 2 + 7 × 12. What is it?",
              "answer": "86",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 1,000 − x = 141",
              "answer": "859",
              "hint": "x is what is left when 141 is taken off 1,000.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 27 units for 6 lamps is 27 ÷ 6 = 4.5 each.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "5x + 13 = 48, so 5x = 35, so x = 7."
          },
          "problems": [
            {
              "q": "One camera hour needs 3.5 power units. How many power units do 16 camera hours need?",
              "answer": "56",
              "hint": "16 × 3.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper counted 120 ration packs on the first pass and 60 on the second. By what percent did the count change? (write just the number)",
              "answer": "50",
              "accept": [
                "50%",
                "-50",
                "−50",
                "-50%",
                "−50%"
              ],
              "hint": "The change is 60. 60 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 4 hours the gauge dropped 16 in all, the same amount each hour. What was the change each hour? (Write a drop as a negative number.)",
              "answer": "-4",
              "accept": [
                "−4"
              ],
              "hint": "Share −16 into 4 equal parts: −16 ÷ 4. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 45 − 5x = 30",
              "answer": "3",
              "hint": "Move 5x to the right and 30 to the left: 5x = 15.",
              "skill": "Equations"
            },
            {
              "q": "A round wheel has a radius of 20 centimeters. Using 3.14 for pi, how many centimeters is it around the edge?",
              "answer": "125.6",
              "hint": "Across is 2 × 20 = 40. Then × 3.14.",
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
            "example": "Start at 50 and take away 4 each hour: after 7 hours, y = 50 − 4 × 7 = 22."
          },
          "problems": [
            {
              "q": "The keeper starts with 38 ration packs and uses 5 every hour. How many are left after 6 hours?",
              "answer": "8",
              "hint": "5 × 6 = 30 used, taken off 38.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 196?",
              "answer": "14",
              "hint": "What number times itself makes 196?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 10-meter ladder runs from the top of a post to a point 8 meters away on the ground. How tall is the post, in meters?",
              "answer": "6",
              "hint": "a² = c² − b² = 100 − 64 = 36. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x = 3x + 14",
              "answer": "7",
              "hint": "Take 3x off both sides: 2x = 14. Then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 meters and holds 942 cubic meters. Using 3.14 for pi, how many meters deep is it?",
              "answer": "3",
              "hint": "The floor's area is 3.14 × 10 × 10 = 314. Divide the volume by that.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Numbers from the log",
          "points": [
            "Some steps send you back to the log for a number. Get it, write it down, then continue.",
            "Do the steps in order, but read to the end first: a later step can turn an earlier one around."
          ],
          "example": "5 missing × 2 nights = 10. Then read on: a later step can change what happens next."
        },
        "skill": "Following directions",
        "steps": [
          "Write down how many ration packs go missing each night. The log gives the number.",
          "Multiply it by the 4 nights you have been on watch.",
          "Subtract the 2 prints still clear in the old flour tonight.",
          "Do not take the prints away as step 3 says. Go back to your step 2 total and add the 2 prints on instead.",
          "Type how many packs that comes to."
        ],
        "prompt": "Your answer:",
        "answer": "14",
        "hint": "The log says how many packs go missing each night. Step 4 turns the subtraction in step 3 the other way around."
      }
    },
    {
      "id": "night-5",
      "title": "Dawn",
      "recon": {
        "lesson": {
          "title": "Putting the whole log together",
          "points": [
            "The last entry of a mystery explains the earlier ones. As you read, match each clue to its answer: flicker, red gauge, prints.",
            "'Decommissioned' is defined in the log. Find the sentence.",
            "Why questions about people: think about what the person wanted."
          ],
          "example": "A big sister could open the jar for you in a second, but she shows you how to twist it. Ask why she would bother."
        },
        "title": "Keeper's Log: Dawn Entry",
        "passage": [
          "Night five, six in the morning, and here is what the older logs add up to. The cargo loader in the bay is decommissioned, which means it was officially taken out of service and switched off, but nobody ever unplugged it. Its old job, for twenty years, was to re-stack crates during the station's shut-down routine, which began with the lights dimming and the power dropping below forty. Every night the lights dim on the timer. The dip is enough to make camera eight flicker. That is the flicker. On the nights the gauge is red as well, the loader thinks the routine has begun, wakes, moves a few crates, and goes back to sleep. That is the arm. It has never once left its corner.",
          "The rations are a different story and a better one. Two months ago a supply ship docked with a stowaway: a gray station cat, thin, quiet, small enough to travel the vents. He found the galley the first night. He has been taking three packs a night ever since, one to eat and two, the last keeper worked out, to a nest behind the vent grille where the pipes are warm. The prints in the flour were his. The keeper knew it the morning he saw them.",
          "He did not put it in the log because a cat in a log gets reported, and a reported cat gets taken off the station. So he wrote one line and left the trail for the next keeper to follow, trusting them to read the older logs and to decide for themselves. You have read them. The gauge is amber, the loader is asleep, and there is a cat behind the grille who is not going anywhere. Decide."
        ],
        "questions": [
          {
            "q": "What was the loader's old job?",
            "choices": [
              "Guarding the airlocks at the far end of the station",
              "Carrying supply crates from the docked ships down to the galley",
              "Repairing the cameras in the loader bay whenever they flickered",
              "Re-stacking crates during the station's shut-down routine"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentence with 'twenty years'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does 'decommissioned' mean?",
            "choices": [
              "Broken beyond any repair and left standing where it was",
              "Officially taken out of service and switched off",
              "Moved to a different station somewhere else in orbit",
              "Unplugged and taken off the station"
            ],
            "answer": 1,
            "hint": "The sentence explains it with 'which means'.",
            "skill": "Word meanings"
          },
          {
            "q": "Where does the cat take the two packs he does not eat?",
            "choices": [
              "To the corner of the loader bay",
              "Out through an airlock",
              "Back to the supply ship that he first came aboard on two months ago",
              "To a nest behind the vent grille where the pipes are warm"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence about 'one to eat and two'.",
            "skill": "Finding details"
          },
          {
            "q": "Why did the last keeper leave a trail instead of writing the answer down?",
            "choices": [
              "He had already forgotten what the prints in the flour looked like by the time he sat down to write the entry",
              "He was never certain that the prints in the flour belonged to a cat rather than to something that came in on the supply ship",
              "He had run out of room in the fortieth logbook and wanted the next keeper to start a fresh one of their own instead",
              "A cat written in the log would be reported and removed, so he let the next keeper find it and decide"
            ],
            "answer": 3,
            "hint": "First sentence of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The full explanation of the flicker and the arm: the loader wakes when the lights dim and the gauge is red",
              "How to unplug a loader",
              "The supply ship that docked two months ago with a stowaway aboard",
              "Twenty years of shut-down routines and how the crews used to run them"
            ],
            "answer": 0,
            "hint": "Paragraph 1 names the flicker and then the arm. What did it just explain?",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Dawn numbers",
          "points": [
            "Hours to minutes: times 60. 3 hours is 3 × 60 = 180 minutes.",
            "Common multiples: count by both numbers. 4, 8, 12 and 6, 12: the first one on both lists is 12.",
            "1,000 − 7: think 999 − 7 + 1 = 993.",
            "Same bottom: 3/10 + 4/10 = 7/10."
          ],
          "example": "A 9 by 5 room: 9 + 5 + 9 + 5 = 28 meters around."
        },
        "problems": [
          {
            "q": "Your watch lasts 8 hours, from ten at night to six in the morning. How many minutes is that?",
            "answer": "480",
            "hint": "8 × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "The loader stacks crates in rows of 6, and the night crew counts them in groups of 8. What is the smallest number of crates that fills rows of 6 exactly and also counts out in 8s exactly?",
            "answer": "24",
            "hint": "Count by 6s and by 8s. Which number is on both lists first?",
            "skill": "Multiplying"
          },
          {
            "q": "The loader weighs 1,000 kilograms. The cat weighs 4. How many kilograms heavier is the loader?",
            "answer": "996",
            "hint": "1,000 − 4. Think of 1,000 as 999 + 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "You have filled 5/8 of tonight's log page. The dawn entry fills 2/8 more. How much of the page is filled? (write a fraction)",
            "answer": "7/8",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The loader bay is 18 meters long and 6 meters wide. What is its perimeter in meters?",
            "answer": "48",
            "hint": "Add all four sides: 18 + 6 + 18 + 6.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Put two facts together",
            "points": [
              "The last question is built so that no single paragraph answers it. Expect to use two.",
              "Say a fact from one paragraph, then a fact from another, then say 'so'. Whatever follows 'so' is your answer.",
              "If a choice needs something the entry never mentions, it is out, however sensible it sounds by itself."
            ],
            "example": "Paragraph one: the vent grille is loose. Paragraph two: the pipes behind it are warm. So something small would choose that spot over anywhere else on the station. Neither paragraph says that on its own."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole entry?",
              "choices": [
                "The cargo loader has never once left its own corner of the bay, where it was parked and switched off years ago and left plugged into the station ever since.",
                "Most mysteries have a perfectly ordinary explanation behind them.",
                "The loader was unplugged years ago and cannot move at all, so whatever has been shifting the crates in that corner of the bay has to be something else.",
                "Two things that felt frightening both turn out to have plain explanations, and what is left for the keeper is a decision rather than a mystery."
              ],
              "answer": 3,
              "hint": "One paragraph solves the flicker, one solves the rations, one hands you a choice. Find the choice that covers all three. One of these is a saying, not something the entry claims.",
              "skill": "Central idea and evidence",
              "evidence": "The rations are a different story and a better one."
            },
            {
              "q": "Claim: the loader is not malfunctioning, it is doing exactly the job it was built to do. Which sentence from the entry best supports that claim?",
              "choices": [
                "The cargo loader in the bay is decommissioned, which means it was officially taken out of service and switched off, but nobody ever unplugged it.",
                "Its old job, for twenty years, was to re-stack crates during the station's shut-down routine, which began with the lights dimming and the power dropping below forty.",
                "Every night the lights dim on the timer.",
                "That is the flicker."
              ],
              "answer": 1,
              "hint": "The claim has two halves: the old job, and the signal that starts it. Find the one sentence carrying both, not the one that only says the machine was retired.",
              "skill": "Finding details",
              "evidence": "Its old job, for twenty years, was to re-stack crates during the station's shut-down routine, which began with the lights dimming and the power dropping below forty."
            },
            {
              "q": "What job does the last paragraph do in this entry?",
              "choices": [
                "It gives the steps a keeper follows to report a stowaway to the station office, and the form that has to be filled in for one.",
                "It describes the vents the cat travels through at night.",
                "It compares this keeper with the thirty-nine before him.",
                "It explains why the keeper left a trail instead of an answer, and then hands the same choice to whoever reads it."
              ],
              "answer": 3,
              "hint": "Nothing new is solved in this paragraph. Ask what a closing paragraph is doing when the puzzles are already finished.",
              "skill": "Author's purpose and structure",
              "evidence": "So he wrote one line and left the trail for the next keeper to follow, trusting them to read the older logs and to decide for themselves."
            },
            {
              "q": "The entry says the supply ship docked 'with a stowaway'. What does stowaway mean as it is used here?",
              "choices": [
                "A crate of supplies left over at the end of a trip",
                "A repair the ship needed before it was allowed to leave",
                "The part of a ship below deck where cargo is stored",
                "Someone who came aboard without anyone knowing"
              ],
              "answer": 3,
              "hint": "The word has stow inside it, which is about storing, and that is the trap. Read the colon: the sentence names the stowaway for you two words later.",
              "skill": "Word meanings",
              "evidence": "Two months ago a supply ship docked with a stowaway: a gray station cat, thin, quiet, small enough to travel the vents."
            },
            {
              "q": "Paragraphs 1 and 3 together explain how a keeper could work here for weeks and never once see the loader move. How?",
              "choices": [
                "It needs a red gauge as well as dim lights, so careful spending keeps it asleep.",
                "The loader only moves while camera eight has been switched off.",
                "The loader was finally unplugged by the keeper before you.",
                "The loader moves only on the nights a supply ship is docked."
              ],
              "answer": 0,
              "hint": "Paragraph one gives the two conditions the loader needs. The last paragraph tells you what the gauge is reading right now. Put the conditions against the reading.",
              "skill": "Reading between the lines",
              "evidence": "On the nights the gauge is red as well, the loader thinks the routine has begun, wakes, moves a few crates, and goes back to sleep."
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
            "example": "3 groups of 9 is 9 + 9 + 9 = 27, so 3 × 9 = 27."
          },
          "problems": [
            {
              "q": "The keeper lays the crates out in 6 rows of 4. How many crates is that?",
              "answer": "24",
              "hint": "6 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "28 crates are set out in 7 equal rows. How many crates are in each row?",
              "answer": "4",
              "hint": "28 split into 7 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 407 crates, then 122 more are added and 88 are taken off. What does the log show now?",
              "answer": "441",
              "hint": "Add 407 and 122 first, then take 88 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 1/6 + 2/6 (write a fraction)",
              "answer": "3/6",
              "hint": "Same bottom. 1 + 2 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A floor mat is 7 meters wide and 4 meters long. How many meters is it all the way around the edge?",
              "answer": "22",
              "hint": "Two sides of 7 and two sides of 4: 7 + 7 + 4 + 4.",
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
            "example": "(7 + 2) × 6: parentheses first, so 9 × 6 = 54."
          },
          "problems": [
            {
              "q": "The keeper logs 1.25 power units for the first camera hour, 0.95 for the second and 2.05 for the third. How many power units is that in total?",
              "answer": "4.25",
              "hint": "Line the points up, writing a missing place as 0, then add all three.",
              "skill": "Decimals"
            },
            {
              "q": "10% of the crates counted is 24. How many were counted in all?",
              "answer": "240",
              "hint": "24 is 10 hundredths of the whole: 24 ÷ 10 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper counts 18 rows and 24 crates. In its simplest form, what is the ratio of rows to crates? (write it like 2:3)",
              "answer": "3:4",
              "accept": [
                "3 to 4"
              ],
              "hint": "Divide both by 6.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The keeper works out (5 + 4) × 10. What is it?",
              "answer": "90",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 3x = 735",
              "answer": "245",
              "hint": "Divide both sides by 3.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 15 units for 6 lamps is 15 ÷ 6 = 2.5 each.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the last thing done to x first. With parentheses, divide first, then take away."
            ],
            "example": "(x + 7) × 3 = 36, so x + 7 = 12, so x = 5."
          },
          "problems": [
            {
              "q": "The keeper has 18 power units to spend, and each camera takes 2.25 units. How many cameras is that enough for?",
              "answer": "8",
              "hint": "18 ÷ 2.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of crates fell by 50% to 100. What was it before?",
              "answer": "200",
              "hint": "100 is 50% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ledger reads 9 crates. The keeper takes out 14 crates. What does it read now?",
              "answer": "-5",
              "accept": [
                "−5"
              ],
              "hint": "9 takes it to 0, and 5 more comes out below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 26) × 2 = 60",
              "answer": "4",
              "hint": "Divide both sides by 2 first, then take 26 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 2. The camera on the model is 8 cm long. How many cm long is the real one?",
              "answer": "16",
              "hint": "Every cm on the model is 2 cm for real.",
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
            "example": "For y = 3x + 7, when x = 5, y = 3 × 5 + 7 = 22."
          },
          "problems": [
            {
              "q": "The count of crates follows the rule y = 9x + 12, where x is the hour. What is y when x = 4?",
              "answer": "48",
              "hint": "Put 4 in for x: 9 × 4 + 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 8² + 7²?",
              "answer": "113",
              "hint": "8 × 8 = 64 and 7 × 7 = 49. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 13-meter cable reaches the top of a 5-meter post. How far is the foot of the cable from the base, in meters?",
              "answer": "12",
              "hint": "b² = c² − a² = 169 − 25 = 144. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x + 11 − x = 20",
              "answer": "3",
              "hint": "Collect the x's first: 3x + 11 = 20.",
              "skill": "Equations"
            },
            {
              "q": "What is 8 × 10^3 ÷ 10^2?",
              "answer": "80",
              "hint": "Dividing subtracts the powers: 10^3 ÷ 10^2 = 10^1. So 8 × 10.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Two numbers, keep one",
          "points": [
            "Count letters on paper: L-O-A-D-E-R is six.",
            "When a step builds a second number, label both: step 2, step 3. A later step says which one goes on.",
            "Read all the steps before adding anything. The last one changes the answer."
          ],
          "example": "Step 2 gives 8 and step 3 gives 15. If the rule says use the step 2 number, 8 goes on and 15 is crossed out."
        },
        "skill": "Following directions",
        "steps": [
          "Two things were moving after lights-out: the loader and the cat.",
          "Count the letters in the word LOADER, double that count, and keep the number.",
          "Count the letters in the word CAT, multiply it by the 3 packs that go missing each night, and keep that number as well.",
          "Your log now holds two numbers, one from step 2 and one from step 3. The keeper's rule says use the step 2 number and cross the step 3 one out.",
          "Take away the 2 packs the cat carries back to the nest.",
          "Type the number for the log."
        ],
        "prompt": "Your answer:",
        "answer": "10",
        "hint": "LOADER has six letters and CAT has three. Step 4 names which of the two numbers goes on into step 5."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
