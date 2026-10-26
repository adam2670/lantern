// ODYSSEY — campaign "mall". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "mall",
  "ready": true,
  "kind": "shift",
  "readingLevel": {
    "fk": 5.4,
    "cl": 6.2
  },
  "grade": "5",
  "kindLabel": "Mystery",
  "form": "rounds",
  "title": "Mall After Hours",
  "subtitle": "A two-story shopping mall, closed for the night",
  "pitch": "Five nights alone in a mall after the doors lock. A carousel that starts by itself, footsteps on a stopped escalator, a mannequin that moves between rounds. Every one of them has a reason, and the guard who finds the reasons is the one who sleeps well.",
  "scene": "assets/scene-mall.jpg",
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
  "reconNoun": "Night Log",
  "legs": {
    "recon": "Night log",
    "nav": "Rounds math",
    "orders": "Patrol orders",
    "debrief": "Desk"
  },
  "fact": "A big mall is a small town with the people removed: two miles of hallway, four hundred doors, its own weather from the air handlers, and a building that keeps moving all night whether anyone is in it or not.",
  "finale": {
    "prompt": "Dawn. The doors unlock at six. Which color goes on the guard's badge for the week?",
    "options": [
      {
        "label": "Blue",
        "color": "#4FD1FF"
      },
      {
        "label": "Gold",
        "color": "#FFB454"
      },
      {
        "label": "Silver",
        "color": "#C9D3E6"
      },
      {
        "label": "Green",
        "color": "#4FD18B"
      }
    ],
    "done": "Pin it on. Then unlock the doors and go home. The building can have the day shift."
  },
  "patrols": [
    {
      "id": "mall-1",
      "title": "Four Hundred Doors",
      "recon": {
        "lesson": {
          "title": "Questions first, then the log",
          "points": [
            "Read the five questions before the log. One wants a detail, one wants a why, two want what a word or a line means, and one wants what a paragraph is mostly about.",
            "Counts in the log (doors, cameras, minutes) are details.",
            "The answer is always in the log. You never have to guess."
          ],
          "example": "Question: 'How many cameras are there?' Hunt for 'cameras'."
        },
        "title": "Night Log: The Building Does Not Sleep",
        "passage": [
          "The mall closes at nine. By ten the last store gate is down and the cleaning crew has gone. The guard is alone with two floors, two miles of hallway, four hundred doors and sixty cameras on a wall of screens in the security office. The job is a round: walk the whole building, check every door, note anything wrong, and be back at the desk in ninety minutes to do it again. Four rounds a night. The log on the desk goes back six years, and the last guard's final entry says only: heard it again, second floor, near the carousel.",
          "A closed building is not a quiet one. The air handlers on the roof push warm or cold air through ducts the size of hallways, and the ducts tick and pop as they change temperature. The escalators are off, but their motors are on a timer that turns them for ten seconds every hour to keep the grease moving. The fountain runs all night because the pump is cheaper to leave on than to restart. Sprinkler pipes gurgle. Every store gate rattles when the air pressure changes. A guard who does not know the building hears a hundred people. A guard who does hears a machine.",
          "The first round starts at ten. The guard walks the ground floor east to west and checks the food court, the loading dock and the twelve emergency doors. From there the guard climbs the stopped escalator to the second floor, where the carousel sits under a tarp with its lights off. Nothing is wrong. The log gets its first line from the new guard: round one, all doors secure, building noises normal. Then, from somewhere on the second floor, a sound like footsteps on metal stairs, three of them, and then nothing."
        ],
        "questions": [
          {
            "q": "How long is one round?",
            "choices": [
              "Ten minutes, four times a night",
              "Ninety minutes",
              "Four hours, the time between the first round and the last",
              "All night, from ten until six in the morning"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence with 'be back at the desk'.",
            "skill": "Finding details"
          },
          {
            "q": "Why do the escalators turn for ten seconds every hour?",
            "choices": [
              "To keep the grease in their motors moving",
              "To warm the motors before morning",
              "Because the timer is broken",
              "To carry the cleaning crew"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence with 'timer'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what are the 'air handlers'?",
            "choices": [
              "People who fix the roof",
              "The ducts the size of hallways that carry the air all through the building",
              "The sprinkler pipes that gurgle when the air pressure in the building changes",
              "The machines on the roof that push warm or cold air through the ducts"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Word meanings"
          },
          {
            "q": "What does the log mean by 'a guard who does hears a machine'?",
            "choices": [
              "The machines are louder than any person could be",
              "The noises come from one machine that has to be found",
              "A guard who knows the building recognizes its noises as machines, not people",
              "The guard hears the fountain"
            ],
            "answer": 2,
            "hint": "The last two sentences of paragraph 2, read together.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The sixty cameras in the security office",
              "The guard's first round and everything that gets checked on it",
              "The log on the desk and the last guard's final entry",
              "All the ordinary noises a closed building makes"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 2 says a closed building 'is not a quiet one', and the rest lists why.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Rounds math",
          "points": [
            "Rounds a night times minutes: total walking.",
            "A fraction times a whole number: 5 × 2/3 is five 2/3s, which is 10/3.",
            "Cameras per screen: cameras ÷ screens.",
            "Same bottom: add the tops. 1/6 + 2/6 = 3/6."
          ],
          "example": "3 rounds × 40 minutes = 120 minutes."
        },
        "problems": [
          {
            "q": "A round takes 90 minutes and the guard does 4 a night. How many minutes of walking is that?",
            "answer": "360",
            "hint": "90 × 4.",
            "skill": "Multiplying"
          },
          {
            "q": "360 minutes is how many hours?",
            "answer": "6",
            "hint": "360 ÷ 60.",
            "skill": "Dividing"
          },
          {
            "q": "Each round is 3/4 of a mile of walking. How many miles does the guard walk in 4 rounds?",
            "answer": "3",
            "hint": "Four 3/4s is 12/4. How many wholes is that?",
            "skill": "Fractions"
          },
          {
            "q": "60 cameras show on 12 screens, the same number on each. How many cameras per screen?",
            "answer": "5",
            "hint": "60 ÷ 12.",
            "skill": "Dividing"
          },
          {
            "q": "The guard walked 2/8 of the round before the food court and 5/8 after. What fraction of the round is that together? (write a fraction)",
            "answer": "7/8",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Say the whole report in one line",
            "points": [
              "Read to the end, then say in one sentence of your own what the whole thing was about. Do that before you look at a single choice.",
              "The wrong answers here are usually true. They cover one paragraph, or they are wider than anything the report says, or they contradict a line you have already read.",
              "Four more moves follow: prove a claim with one sentence, say what a paragraph is for, work a word out from its sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a night bus: who rides it, the route it takes, what happens when it runs late. 'The bus comes every forty minutes' covers one paragraph. 'Buses are useful' covers nothing. 'A whole shift depends on one late-night route' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The fountain runs all night because the pump is cheaper to leave on than to restart, and the escalator motors turn for ten seconds every hour to keep their grease moving.",
                "An empty mall is full of machine noise, and the difference between a frightening night and an ordinary one is whether the guard knows what makes it.",
                "Shopping malls are noisier at night than any other kind of building, because they hold more air handlers, pumps and motors than a warehouse or an office building ever does.",
                "Once the mall closes at nine and the last store gate comes down, the building falls completely silent, and stays that way until the cleaning crew arrives in the morning."
              ],
              "answer": 1,
              "hint": "The round, the list of machines, the sound at the end. One choice is a single fact from the middle, and one is denied by the first line of the second paragraph.",
              "skill": "Central idea and evidence",
              "evidence": "A guard who does not know the building hears a hundred people."
            },
            {
              "q": "Claim: some of the mall's machines are left running at night because stopping them would cost more. Which sentence from the report best supports that claim?",
              "choices": [
                "The fountain runs all night because the pump is cheaper to leave on than to restart.",
                "A closed building is not a quiet one.",
                "Sprinkler pipes gurgle.",
                "Every store gate rattles when the air pressure changes."
              ],
              "answer": 0,
              "hint": "The claim is about cost. Only one of these sentences mentions anything being cheaper than anything else.",
              "skill": "Finding details",
              "evidence": "The fountain runs all night because the pump is cheaper to leave on than to restart."
            },
            {
              "q": "How is the second paragraph built?",
              "choices": [
                "It tells the story of one whole night, from the first round at ten o'clock through to the sound heard on the second floor at the end.",
                "It sets this mall against the building the guard worked in before, listing one by one the machines this one runs at night that the older building did not.",
                "It names a problem and then gives the solution the guard uses.",
                "It makes a claim in its first line and then spends the rest of the paragraph listing the machines that back it up."
              ],
              "answer": 3,
              "hint": "Read the first sentence on its own, then read everything after it. Ask what all those ducts and pumps and gates are doing for that opening line.",
              "skill": "Author's purpose and structure",
              "evidence": "A closed building is not a quiet one."
            },
            {
              "q": "The report calls the guard's job 'a round'. What does round mean as it is used here?",
              "choices": [
                "A shape with no corners or straight edges",
                "One stage of a game or contest",
                "One full circuit of the building, walked again and again",
                "A song sung by groups starting at different times"
              ],
              "answer": 2,
              "hint": "The rest of the sentence spells out what the job is, and the line after it tells you how many happen in a night. Fit the word to those two facts.",
              "skill": "Word meanings",
              "evidence": "The job is a round: walk the whole building, check every door, note anything wrong, and be back at the desk in ninety minutes to do it again."
            },
            {
              "q": "Paragraphs 1 and 3 together suggest why the sound at the very end of the report is worth more than an ordinary noise. Why?",
              "choices": [
                "It is the only sound the guard has heard all night, since the ducts, the fountain and the store gates were all silent while the round was being walked.",
                "It came from inside the security office itself.",
                "It happened during the second round of the night rather than the first, when the guard had already checked that floor once.",
                "It comes from the second floor, which is exactly where the last guard's final entry says the noise was."
              ],
              "answer": 3,
              "hint": "Paragraph one ends with something written six years ago. The last paragraph ends with something heard tonight. Read the two endings against each other.",
              "skill": "Reading between the lines",
              "evidence": "The log on the desk goes back six years, and the last guard's final entry says only: heard it again, second floor, near the carousel."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 3 means 4 groups of 3.",
              "Sharing equally is dividing.",
              "Some added, some taken away: do the adding first, then the taking away.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "4 × 3 = 12, so 12 shared into 4 equal groups is 3 each."
          },
          "problems": [
            {
              "q": "The guard checks a hallway with 3 rows of 5 doors. How many doors is that?",
              "answer": "15",
              "hint": "3 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "15 doors line a hallway in 3 equal rows. How many doors are in each row?",
              "answer": "5",
              "hint": "15 split into 3 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 160 door checks, then 156 more are added and 76 are taken off. What does the log show now?",
              "answer": "240",
              "hint": "Add 160 and 156 first, then take 76 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 1/4 + 2/4 (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. 1 + 2 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 5 feet wide and 8 feet long. How many feet is it all the way around the edge?",
              "answer": "26",
              "hint": "Two sides of 5 and two sides of 8: 5 + 5 + 8 + 8.",
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
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "A regular door check takes 2.8 minutes. A long one takes 2.5 times as long. How many minutes does the long one take?",
              "answer": "7",
              "hint": "Multiply 28 × 25 without the points, then put back 2 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "20% of the cameras counted is 24. How many were counted in all?",
              "answer": "120",
              "hint": "24 is 20 hundredths of the whole: 24 ÷ 20 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The guard counts 36 doors and 45 cameras. In its simplest form, what is the ratio of doors to cameras? (write it like 2:3)",
              "answer": "4:5",
              "accept": [
                "4 to 5"
              ],
              "hint": "Divide both by 9.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The guard works out (3 + 1) × 10. What is it?",
              "answer": "40",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 2x = 686",
              "answer": "343",
              "hint": "Divide both sides by 2.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: the time you have ÷ the time each one takes. 9 hours at 1.5 hours each is 9 ÷ 1.5 = 6.",
              "Working backward: if a count rose by a quarter, the new count is 125% of the old one, so divide by 1.25 to get back to the start.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "6(x + 13) = 96, so x + 13 = 16, so x = 3."
          },
          "problems": [
            {
              "q": "The guard has 25 minutes to spend and each door check takes 1.25 minutes. How many door checks is that enough for?",
              "answer": "20",
              "hint": "25 ÷ 1.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of cameras rose by 50% to 60. What was it before?",
              "answer": "40",
              "hint": "60 is 150% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The garage elevator is on floor 4. It goes down 8 floors. What floor is it on now? (Floors below ground are negative.)",
              "answer": "-4",
              "accept": [
                "−4"
              ],
              "hint": "4 takes it to 0, and 4 more comes out below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 23) × 5 = 130",
              "answer": "3",
              "hint": "Divide both sides by 5 first, then take 23 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 10. The door on the model is 8 inches tall. How many inches tall is the real one?",
              "answer": "80",
              "hint": "Every inch on the model is 10 inches for real.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A small 2 means a number times itself: 8² is 8 × 8 = 64. Work out each power first, then add or subtract.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first: 6x − 2x is 4x. Then undo the plain number."
            ],
            "example": "y = 2x + 9 when x = 6: 2 × 6 + 9 = 21."
          },
          "problems": [
            {
              "q": "The count of doors checked follows the rule y = 7x + 8, where x is the hour. What is y when x = 3?",
              "answer": "29",
              "hint": "Put 3 in for x: 7 × 3 + 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 5² + 6²?",
              "answer": "61",
              "hint": "5 × 5 = 25 and 6 × 6 = 36. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 25-yard cable reaches the top of a 7-yard post. How far is the foot of the cable from the base, in yards?",
              "answer": "24",
              "hint": "b² = c² − a² = 625 − 49 = 576. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x + 4 − 5x = 32",
              "answer": "7",
              "hint": "Collect the x's first: 4x + 4 = 32.",
              "skill": "Equations"
            },
            {
              "q": "What is 6 × 10^3 ÷ 10^2?",
              "answer": "60",
              "hint": "Dividing subtracts the powers: 10^3 ÷ 10^2 = 10^1. So 6 × 10.",
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
          "example": "If step 5 says 'type the total, unless the gate was open', check the gate before you type."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of doors on the guard's round: 400.",
          "Divide by the number of cameras on the wall: 60, and round down.",
          "Multiply by the rounds the guard walks in a night: 4.",
          "Add the footsteps heard from the second floor: 3.",
          "Type your total, unless round one found a door that was not secure, in which case type DOORS instead."
        ],
        "prompt": "Your answer:",
        "answer": "27",
        "hint": "400 ÷ 60 leaves something over, and step 2 says round down. Then hold your total against the log line for round one."
      }
    },
    {
      "id": "mall-2",
      "title": "Footsteps on the Escalator",
      "recon": {
        "lesson": {
          "title": "How the machine works",
          "points": [
            "A 'how' question wants the working of the machine as the log describes it.",
            "Times and counts are details.",
            "The explanation of the noise is in the sentence where the guard figures it out."
          ],
          "example": "'The gate rattles when the wind blows.' What made the sound? The wind on the gate."
        },
        "title": "Night Log: Ten Seconds an Hour",
        "passage": [
          "An escalator is a staircase that is also a conveyor belt. The steps are steel, hinged to a chain that runs in a loop, up the slope and back underneath. A motor at the top turns the chain. Where the steps come out of the floor at the bottom and disappear into it at the top there is a toothed metal plate, the comb plate, that the steps slide under. If a step is slightly worn or the chain is slightly loose, the step clanks against the comb every time it passes. Most escalators clank a little. This one clanks three times.",
          "The guard waited by the second-floor escalator at eleven with the log. At exactly 11:00 the motor hummed, the steps began to move, and three steps in a row clanked past the comb plate at the top, one after another, like someone climbing metal stairs. Ten seconds later the timer shut the motor off and the escalator stopped. Three footsteps. Every hour, on the hour, for six years, and the last guard never stood next to it at the top of the hour.",
          "The guard writes it in the log: footsteps, found, three worn steps on the east escalator, ten-second timer, maintenance to replace. Then goes back to the round. At the top of the back stairs the carousel is still under its tarp. But its lights are on now, glowing through the canvas. It is turning, slowly, with no music. The guard is fairly sure it was not doing that an hour ago."
        ],
        "questions": [
          {
            "q": "What is the comb plate?",
            "choices": [
              "A brush for the steps",
              "The loop of chain beneath the steps that the motor at the top keeps turning",
              "The toothed metal plate the steps slide under at the top and bottom",
              "The steel steps that are hinged to the chain and run in a loop up the slope"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the sentence with 'toothed metal plate'.",
            "skill": "Finding details"
          },
          {
            "q": "How long did the escalator run when the timer started it?",
            "choices": [
              "Ten minutes each hour",
              "An hour",
              "A day",
              "Ten seconds"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'Ten seconds later'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'conveyor belt'?",
            "choices": [
              "A safety belt",
              "A moving band that carries things along",
              "The toothed plate that the steps slide under at the top",
              "The moving handrail that runs along the top of an escalator"
            ],
            "answer": 1,
            "hint": "The first sentence says an escalator 'is also a conveyor belt', and the rest describes steps that move in a loop.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the last guard never solve the footsteps?",
            "choices": [
              "Because the escalators are switched off at night and the last guard had no reason to think they would move",
              "Because the noise came from the second floor near the carousel, and the last guard was always on the ground floor",
              "Because the last guard never stood next to it at the top of the hour, when the timer runs it",
              "Because the steps were quiet"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "How an escalator works and why a worn step clanks",
              "The night the carousel turned under a tarp",
              "The log entry the guard wrote afterward",
              "The night the guard waited beside the escalator at eleven"
            ],
            "answer": 0,
            "hint": "Paragraph 1 describes the steps, the chain, the motor and the comb plate.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Escalator math",
          "points": [
            "Seconds an hour times hours: seconds a night.",
            "Steps not worn: all the steps minus the worn ones.",
            "Subtracting decimals: line up the points. 2.4 − 0.85 is 2.40 − 0.85 = 1.55.",
            "Cost of new steps: the number of steps times the price of one."
          ],
          "example": "15 seconds × 6 hours = 90 seconds of running."
        },
        "problems": [
          {
            "q": "The escalator runs 10 seconds every hour. The guard's shift is 8 hours. How many seconds does it run during the shift?",
            "answer": "80",
            "hint": "10 × 8.",
            "skill": "Multiplying"
          },
          {
            "q": "The guard's flashlight battery was 1.5 volts when new and now reads 1.15 volts. How many volts has it lost? (write a decimal)",
            "answer": "0.35",
            "hint": "Line up the points: 1.50 − 1.15.",
            "skill": "Decimals"
          },
          {
            "q": "The clanks have happened every night for 6 years. Using 365 nights a year, how many nights is that?",
            "answer": "2190",
            "accept": [
              "2,190"
            ],
            "hint": "6 × 365.",
            "skill": "Multiplying"
          },
          {
            "q": "The escalator has 50 steps on its loop. 3 are worn. How many are not worn?",
            "answer": "47",
            "hint": "50 − 3.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "A new step costs $150. How many dollars to replace the 3 worn ones?",
            "answer": "450",
            "accept": [
              "$450"
            ],
            "hint": "3 × 150.",
            "skill": "Money and decimals"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Proof, not agreement",
            "points": [
              "A sentence that agrees with the claim is not the same as a sentence that proves it. Ask which one you could hand to somebody arguing with you.",
              "Break the claim into parts first. If it has two halves, the sentence you pick has to carry both of them.",
              "All four choices are real lines from the report, so being true is where every one of them starts."
            ],
            "example": "Claim: nobody has opened this door in years. 'The door is painted green' is true and useless. 'The hinges have rusted into one piece' closes it."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "The comb plate is the toothed metal plate at the top and the bottom of an escalator that the steps slide under as they come out of the floor.",
                "Escalators are the most complicated machines in a shopping mall, with more moving parts in them than the air handlers, the pumps and the store gates put together.",
                "Three sounds like footsteps on the hour turned out to be three worn steps on a timer that nobody had ever stood beside.",
                "Every escalator in the world clanks exactly three times."
              ],
              "answer": 2,
              "hint": "How a step clanks, what happened at 11:00, what got written down. One choice is a definition, and one turns a line about this escalator into a claim about all of them.",
              "skill": "Central idea and evidence",
              "evidence": "At exactly 11:00 the motor hummed, the steps began to move, and three steps in a row clanked past the comb plate at the top, one after another, like someone climbing metal stairs."
            },
            {
              "q": "Claim: the sound went unexplained for six years because of when it happens. Which sentence from the report best supports that claim?",
              "choices": [
                "Where the steps come out of the floor at the bottom and disappear into it at the top there is a toothed metal plate, the comb plate, that the steps slide under.",
                "Most escalators clank a little.",
                "This one clanks three times.",
                "Every hour, on the hour, for six years, and the last guard never stood next to it at the top of the hour."
              ],
              "answer": 3,
              "hint": "The claim is about timing and about somebody not being there. Look for the sentence that carries both of those at once.",
              "skill": "Finding details",
              "evidence": "Every hour, on the hour, for six years, and the last guard never stood next to it at the top of the hour."
            },
            {
              "q": "Why does the report explain the comb plate before the guard goes to wait beside the escalator?",
              "choices": [
                "To show how an escalator differs from an ordinary conveyor belt, which slides boxes along the floor instead of folding steel steps into a staircase.",
                "To hand the reader the cause in advance, so the three clanks in the next paragraph land as an answer instead of a mystery.",
                "To warn the reader that the escalator is unsafe to stand on.",
                "To explain why the escalators are switched off at night, and why a timer still has to turn them for ten seconds every hour once the power to them is cut."
              ],
              "answer": 1,
              "hint": "Delete that explanation and read the second paragraph again. The clanks would still happen, but something would be missing. Name it.",
              "skill": "Author's purpose and structure",
              "evidence": "Where the steps come out of the floor at the bottom and disappear into it at the top there is a toothed metal plate, the comb plate, that the steps slide under."
            },
            {
              "q": "The report says the three steps clanked past 'like someone climbing metal stairs'. What is that comparison telling you?",
              "choices": [
                "Somebody really was climbing the escalator at eleven o'clock that night.",
                "The escalator is made of the same metal as an ordinary staircase.",
                "The sound of the worn steps is easy to mistake for footsteps.",
                "The steps move at about the speed a person walks."
              ],
              "answer": 2,
              "hint": "The comparison is doing a job for the whole report. Ask what the report is called, and what somebody who heard those three sounds from a distance would have thought.",
              "skill": "Word meanings",
              "evidence": "At exactly 11:00 the motor hummed, the steps began to move, and three steps in a row clanked past the comb plate at the top, one after another, like someone climbing metal stairs."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the sound is three and not one or ten. Why three?",
              "choices": [
                "Three of the steps on this escalator are worn, and each worn step clanks once as it passes the comb plate.",
                "The motor runs for three seconds at the top of every hour.",
                "There are three escalators standing on the second floor.",
                "The chain has three loose links in it, and each loose link lets the chain slap against the comb plate once as it goes by."
              ],
              "answer": 0,
              "hint": "Paragraph one tells you what makes a single clank. Paragraph three tells you how many steps are worn. Put one fact into the other.",
              "skill": "Reading between the lines",
              "evidence": "If a step is slightly worn or the chain is slightly loose, the step clanks against the comb every time it passes."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 3 means 4 groups of 3.",
              "Sharing equally is dividing.",
              "Taking away big numbers: line up the ones, tens and hundreds, and regroup when the top digit is too small.",
              "A fraction is parts done over parts in all: 2 parts done out of 3 is 2/3."
            ],
            "example": "4 × 3 = 12, so 12 shared into 4 equal groups is 3 each."
          },
          "problems": [
            {
              "q": "Each of 6 escalators has 4 worn steps. How many worn steps is that?",
              "answer": "24",
              "hint": "6 groups of 4, so 6 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "The guard splits 48 steps in half. How many steps is one half?",
              "answer": "24",
              "hint": "Half of 48.",
              "skill": "Dividing"
            },
            {
              "q": "The guard's round is 1,000 steps and the guard has walked 681. How many more steps are needed?",
              "answer": "319",
              "hint": "1,000 − 681.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 6 equal parts and the guard has finished 5 of them. What fraction is done? (write a fraction)",
              "answer": "5/6",
              "hint": "5 parts out of 6.",
              "skill": "Fractions"
            },
            {
              "q": "The guard walks 681 steps on the first floor, then 49 more. How many steps is that?",
              "answer": "730",
              "hint": "681 + 49.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Mixed number ÷ fraction: make it improper first. 2 1/2 ÷ 5/6 = 5/2 × 6/5 = 30/10 = 3.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The floor cleaner holds 2 2/5 gallons of soap. Each hallway takes 3/5 of a gallon. How many hallways can the guard clean?",
              "answer": "4",
              "hint": "Make 2 2/5 an improper fraction, 12/5. Then multiply by the flip of 3/5: 12/5 × 5/3.",
              "skill": "Fractions"
            },
            {
              "q": "Of 200 doors, 75% are struck off the list. How many are left on it?",
              "answer": "50",
              "hint": "75% of 200 is 150. Take that off 200.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The guard shares 49 motors between two teams in the ratio 2 to 5. How many does the smaller share get?",
              "answer": "14",
              "hint": "2 + 5 = 7 parts. 49 ÷ 7 = 7 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The guard works out 8 × 7 − 1 × 3. What is it?",
              "answer": "53",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 257 + 16 = 750",
              "answer": "477",
              "hint": "Add 257 and 16 first, then take that off 750.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "Find the rate for one first: 3 jobs in 7.5 hours is 7.5 ÷ 3 = 2.5 hours each, so 7 jobs take 17.5 hours.",
              "Percent of a number: turn the percent into a fraction of 100, then multiply.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "4(x + 5) = 36, so x + 5 = 9, so x = 4."
          },
          "problems": [
            {
              "q": "12 door checks took 6 minutes. At the same rate, how many minutes would 24 door checks take?",
              "answer": "12",
              "hint": "One door check takes 6 ÷ 12 = 0.5. Then × 24.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The guard's round took 160 seconds, then a new rule added 50% more time. How many seconds were added?",
              "answer": "80",
              "hint": "50% of 160: 50/100 × 160.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The gauge drops 12 every hour for 3 hours. What is the total change? (Write a drop as a negative number.)",
              "answer": "-36",
              "accept": [
                "−36"
              ],
              "hint": "3 hours of −12 each: 3 × (−12). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 3(x + 22) = 84",
              "answer": "6",
              "hint": "Divide both sides by 3 to get x + 22 = 28.",
              "skill": "Equations"
            },
            {
              "q": "A round board has a radius of 10 inches. Using 3.14 for pi, what is its area in square inches?",
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
              "A list that adds the same amount each step follows a straight-line rule. The 1st number is the start, so the 10th number is 9 steps on.",
              "A small 2 means a number times itself: 2² is 2 × 2 = 4. Work out each power first, then add or subtract.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first: 6x − 2x is 4x, and an x on its own means 1x."
            ],
            "example": "3, 10, 17, … adds 7 each step. The 5th number is 4 steps on: 3 + 4 × 7 = 31."
          },
          "problems": [
            {
              "q": "The count of seconds goes 12, 16, 20, 24, and on. What is the 9th number in the list?",
              "answer": "44",
              "hint": "It starts at 12 and adds 4 each step. The number you want is 8 steps on from 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 5² − 5?",
              "answer": "20",
              "hint": "5 × 5 = 25, then take 5 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 20 and 21 feet. How long is its longest side, in feet?",
              "answer": "29",
              "hint": "20² + 21² = 841. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x − 2x = 40",
              "answer": "8",
              "hint": "7 − 2 = 5, so 5x = 40.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 12 feet across and 2 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (The radius is half the distance across.)",
              "answer": "226.08",
              "hint": "The radius is 12 ÷ 2 = 6. Volume = 3.14 × radius × radius × depth: 3.14 × 6 × 6 × 2.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Round down",
          "points": [
            "When a division does not come out even, read the last step to see what to do.",
            "Then do what the last step says with the result."
          ],
          "example": "38 divided by 5 is 7.6. Rounded down, that is 7, not 8."
        },
        "skill": "Following directions",
        "steps": [
          "Write the hour the guard stood at the top of the escalator: 11.",
          "Multiply by the years the clank has gone on: 6.",
          "Add the number of steps that clank past the comb plate: 3.",
          "Divide by the seconds the escalator runs each hour: 10.",
          "That does not come out even. Your answer must be rounded down to a whole number, so type it that way."
        ],
        "prompt": "Your answer:",
        "answer": "6",
        "hint": "Dividing by ten moves the point one place along. Step 5 says what happens to everything after the point."
      }
    },
    {
      "id": "mall-3",
      "title": "The Carousel",
      "recon": {
        "lesson": {
          "title": "The ordinary cause",
          "points": [
            "The explanation for a spooky thing is usually ordinary. Look for the ordinary thing the log names.",
            "Counts on the carousel are details.",
            "'Why did it start' wants the mechanism."
          ],
          "example": "'The porch light came on when the cat walked by.' What turned it on? The cat moving past."
        },
        "title": "Night Log: The Ride That Starts Itself",
        "passage": [
          "The carousel is the oldest thing in the mall, older than the building. Twenty painted wooden horses stand on brass poles under a canopy of a thousand small bulbs, all of it moved here from a seaside park fifty years ago. It has been covered with a tarp for two months. The mall has not yet decided whether to fix it or sell it. The guard has now seen it turning under the tarp twice, lights on. Both nights it happened at about 11:30. It turned for about a minute and then stopped. There is no music. The music box, the log says, was removed for repair in June.",
          "A carousel runs on an electric motor, and this one starts from a control box at the operator's post, which has a key. The key is in the security office. The guard checks the box with a flashlight and finds, taped inside the lid, a second thing: a small black motion sensor, the kind that turns on a light when someone walks past. The sensor is wired to the start button so that the ride would begin, as a treat, when a child came near. It was installed for a birthday party years ago and never removed. Under a tarp, in the dark, it cannot see much. It looks out through one gap in the canvas, at the back stairs. Only the first round of the night goes down those stairs. It can see a guard with a flashlight walking past at 11:30 on the round.",
          "The guard unplugs the sensor and writes it down: carousel, found, motion sensor on the start switch, disconnected. Two nights, two answers. On the way back to the desk the guard passes the department store window on the ground floor. Six mannequins stand there in the dark in next season's coats. The guard counts them, out of habit, and gets seven."
        ],
        "questions": [
          {
            "q": "How many horses does the carousel have?",
            "choices": [
              "Twenty",
              "Ten",
              "Fifty",
              "A thousand"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What did the guard find taped inside the control box lid?",
            "choices": [
              "A key",
              "The key that starts the ride from the operator's post",
              "A small motion sensor wired to the start button",
              "The music box, taken out for repair"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence with 'taped inside the lid'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'motion sensor'?",
            "choices": [
              "A timer wired to a start button that switches a ride on at the same time each night",
              "A switch hidden inside the lid that only the operator's key can turn",
              "A device that notices movement nearby and switches something on",
              "A bulb that lights up by itself whenever a child walks past the ride"
            ],
            "answer": 2,
            "hint": "The sentence says it is 'the kind that turns on a light when someone walks past'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the carousel start at about 11:30 each night?",
            "choices": [
              "Because a timer in the control box started the ride for a minute each night, the way the escalator's timer does",
              "Because the guard's round passed it at 11:30 and the sensor saw the flashlight",
              "Because the music box came back from repair in June and starts the ride whenever it plays",
              "Because the tarp slipped far enough for the carousel's own lights to shine through the canvas"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "How the guard opened the control box and found what was taped inside",
              "The birthday party years ago that the sensor was first installed for",
              "The carousel: what it is, and what the guard has seen it do",
              "The six mannequins standing in the department store window in the dark"
            ],
            "answer": 2,
            "hint": "Paragraph 1 describes the carousel and the two nights it turned.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Carousel math",
          "points": [
            "Turns in a minute: 60 seconds ÷ the seconds for one turn.",
            "Bulbs: a thousand, 1,000.",
            "Years since it was moved: subtract.",
            "Minutes to seconds: × 60."
          ],
          "example": "600 bulbs ÷ 30 poles = 20 bulbs per pole."
        },
        "problems": [
          {
            "q": "The canopy has 1,000 bulbs over 20 horses. If they were shared equally, how many bulbs per horse?",
            "answer": "50",
            "hint": "1,000 ÷ 20.",
            "skill": "Dividing"
          },
          {
            "q": "The carousel came to the mall 50 years ago. If this year is 2026, what year was that?",
            "answer": "1976",
            "hint": "2026 − 50.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The ride turned for about 1 minute on each of 2 nights. How many seconds is that in all?",
            "answer": "120",
            "hint": "2 × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "The carousel turns once every 12 seconds. How many turns in 1 minute?",
            "answer": "5",
            "hint": "60 ÷ 12.",
            "skill": "Dividing"
          },
          {
            "q": "The window had 6 mannequins. The store added 1/6 as many again. How many mannequins are there now?",
            "answer": "7",
            "hint": "1/6 of 6 is 1. 6 + 1 = 7.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "A paragraph with a job",
            "points": [
              "Every paragraph is doing something: setting a scene, giving a cause, comparing two things, walking through an order, or naming a problem and its answer.",
              "A single detail can have a job too. Ask what the report would be missing if that detail were cut.",
              "Naming the job is not the same as retelling the paragraph. If your choice just repeats the content, keep looking."
            ],
            "example": "A report about a missing bicycle spends a paragraph on the shed's window latch. That is not a lesson in latches. It is there so that 'nothing had been forced' means something at the end."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A ride that seemed to start itself was doing exactly what an old sensor told it to do whenever the guard walked past its one gap.",
                "The carousel's music box was taken out for repair in June.",
                "Old fairground rides are usually more reliable than new ones.",
                "The carousel can only be started with the key that is kept in the security office, so nobody without that key could have set the ride turning."
              ],
              "answer": 0,
              "hint": "What the guard saw, what was taped inside the lid, what got unplugged. One choice is a line from the log, and one is undone by what the guard finds in the control box.",
              "skill": "Central idea and evidence",
              "evidence": "The guard checks the box with a flashlight and finds, taped inside the lid, a second thing: a small black motion sensor, the kind that turns on a light when someone walks past."
            },
            {
              "q": "Claim: the ride starts at about the same time each night because the guard walks past it then. Which sentence from the report best supports that claim?",
              "choices": [
                "A carousel runs on an electric motor, and this one starts from a control box at the operator's post, which has a key.",
                "Under a tarp, in the dark, it cannot see much.",
                "It can see a guard with a flashlight walking past at 11:30 on the round.",
                "The key is in the security office."
              ],
              "answer": 2,
              "hint": "The claim joins a time to a person. Only one of these sentences has both of those in it.",
              "skill": "Finding details",
              "evidence": "It can see a guard with a flashlight walking past at 11:30 on the round."
            },
            {
              "q": "Why does the report mention that the music box was taken out for repair in June?",
              "choices": [
                "It shows that the mall has already decided to sell the carousel rather than fix it, which is why the ride was covered over and left alone.",
                "It explains why the tarp was put over the ride in the first place, since a carousel with its music box taken out is not a ride anyone can be charged to sit on.",
                "It clears away one strange detail before the search starts, so the reader is left with the real question: why the ride turns at all.",
                "It gives the date the carousel was moved here from the seaside park, which is the last time anything at all about the ride was written down in the log."
              ],
              "answer": 2,
              "hint": "The sentence before it says there is no music. Ask what a reader would be wondering at that moment, and what this line does to that wondering.",
              "skill": "Author's purpose and structure",
              "evidence": "The music box, the log says, was removed for repair in June."
            },
            {
              "q": "The report says the sensor was wired to the start button 'so that the ride would begin, as a treat, when a child came near'. What do the words 'as a treat' tell you?",
              "choices": [
                "It was fitted so that the ride could be tested from the floor without fetching the key from the office.",
                "It was put there deliberately, to give children a surprise, and not by accident.",
                "It was a way of saving electricity, so the ride only turned when somebody was actually there to ride it.",
                "It was added because the key kept going missing from the security office and the ride would not start without it."
              ],
              "answer": 1,
              "hint": "The next sentence tells you the occasion it was installed for. Let that decide whether this was somebody's plan or somebody's mistake.",
              "skill": "Word meanings",
              "evidence": "It was installed for a birthday party years ago and never removed."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why the ride turns at about 11:30 and not at some other hour. Why then?",
              "choices": [
                "The motor is on a timer that has been set to run the ride for about a minute at half past eleven every night, the way the escalator timer works.",
                "The tarp slips off the ride at about that time every night, and the lights and the motor come on by themselves as soon as the canvas is clear of them.",
                "The sensor sees out through one gap in the tarp, onto the back stairs, and only the first round of the night goes down them.",
                "The mall switches over to its night electricity supply at 11:30, and the surge of current that comes with the change sets the ride turning for about a minute."
              ],
              "answer": 2,
              "hint": "Paragraph one gives you the time the guard has seen it happen. Paragraph two gives you the one place the sensor can see, and which round goes past it. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "It can see a guard with a flashlight walking past at 11:30 on the round."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 2 × 7 means 2 groups of 7.",
              "Sharing equally is dividing.",
              "Taking away big numbers: line up the ones, tens and hundreds, and regroup when the top digit is too small.",
              "Fractions with the same bottom: the bigger top is the bigger fraction. 2/3 is bigger than 1/3."
            ],
            "example": "2 × 7 = 14, so 14 shared into 2 equal groups is 7 each."
          },
          "problems": [
            {
              "q": "The carousel has 4 rings with 5 horses in each ring. How many horses is that?",
              "answer": "20",
              "hint": "4 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "Each carousel ring holds 5 horses. There are 20 horses. How many rings can be filled?",
              "answer": "4",
              "hint": "How many 5s fit into 20?",
              "skill": "Dividing"
            },
            {
              "q": "The guard counted 381 bulbs in the morning and 444 in the evening. How many more in the evening?",
              "answer": "63",
              "hint": "444 − 381.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 3/6 or 1/6? (write a fraction)",
              "answer": "3/6",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 3 feet on each side. How many feet is it all the way around?",
              "answer": "12",
              "hint": "Four sides of 3.",
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
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The guard has 46.75 minutes. Each door check takes 2.75 minutes. How many door checks is that enough for?",
              "answer": "17",
              "hint": "Move both points 2 places to the right: 4675 ÷ 275.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 bulbs, 20 are set aside. Out of 80 bulbs, how many is that?",
              "answer": "16",
              "hint": "80 is 0.8 hundreds, so 0.8 × 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The guard divides 45 minutes of work in the ratio 4 to 5. How many minutes is the larger share?",
              "answer": "25",
              "hint": "9 parts in all, so one part is 5 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The guard works out (10 − 2) × (6 + 12). What is it?",
              "answer": "144",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 396 = x − 50",
              "answer": "446",
              "hint": "Add 50 to both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many in all, then take off the ones done: 9 hours at 1.5 hours a job is 6 jobs, so with 2 done, 4 are left.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the taking away first, then undo the dividing by multiplying."
            ],
            "example": "x ÷ 7 − 11 = 2, so x ÷ 7 = 13, so x = 91."
          },
          "problems": [
            {
              "q": "The job needs 50 minutes in all, at 2.5 minutes for each door check. One door check is already done. How many door checks are left?",
              "answer": "19",
              "hint": "50 ÷ 2.5 = 20 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of bulbs may change by no more than 50%. Starting from 40, what is the highest count the rule allows?",
              "answer": "60",
              "hint": "50% of 40 is 20. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The carousel's repair fund has $14 and pays out $15 on each of 3 days. What is the balance at the end?",
              "answer": "-31",
              "accept": [
                "−31",
                "-$31",
                "−$31",
                "$-31",
                "$−31"
              ],
              "hint": "15 × 3 comes off 14.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 6 − 29 = 2",
              "answer": "186",
              "hint": "Add 29 to both sides, then multiply by 6.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 4 feet. How many inches are needed for 56 feet?",
              "answer": "14",
              "hint": "56 ÷ 4.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "Slope is the rise over the run: how much y goes up, divided by how much x goes across.",
              "A small 2 means a number times itself: 4² is 4 × 4 = 16. Work out the power first, then multiply.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Through (0, 6) and (4, 34): y rises 28 while x runs 4, so the slope is 28 ÷ 4 = 7."
          },
          "problems": [
            {
              "q": "A line passes through (0, 15) and (9, 42). What is its slope?",
              "answer": "3",
              "hint": "Slope is the rise over the run: 27 ÷ 9.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each side of the carousel has 7² bulbs. There are 2 sides. How many bulbs is that?",
              "answer": "98",
              "hint": "7² is 49. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The guard goes 8 feet east and then 15 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "17",
              "hint": "The two legs make a right angle: 8² + 15² = 289.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 8x + 4 and 2x + 22 come to the same number?",
              "answer": "3",
              "hint": "Set them equal, take 2x off both sides, then take 4 off.",
              "skill": "Equations"
            },
            {
              "q": "The guard writes 9 × 10^3, then counts ten times as many. Written out in full, what is the new number?",
              "answer": "90000",
              "hint": "Ten times adds one to the power: 9 × 10^4.",
              "skill": "Powers and roots"
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
          "example": "'Add 9. Instead, subtract 9' means subtract."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of wooden horses on the carousel: 20.",
          "Multiply by the number of nights the guard saw the ride turning: 2.",
          "Add the months the carousel has been under its tarp: 2.",
          "Cross step 3 out. Take the number you had at the end of step 2 and subtract those two months instead of adding them.",
          "Type what you have then."
        ],
        "prompt": "Your answer:",
        "answer": "38",
        "hint": "Step 4 turns the plus into a minus. The number it works on is your step 2 total, not the one step 3 gave you."
      }
    },
    {
      "id": "mall-4",
      "title": "The Seventh Mannequin",
      "recon": {
        "lesson": {
          "title": "Checking a count",
          "points": [
            "When the log gives two counts that disagree, the explanation is a detail. Find it.",
            "Times are details. Write them down.",
            "'Why do the counts disagree' wants what happened between the two counts."
          ],
          "example": "'Ten chairs on the list, eleven in the room. A teacher carried one in at lunch.' Why the extra chair? Someone brought it in between counts."
        },
        "title": "Night Log: Six, Then Seven",
        "passage": [
          "A department store mannequin is a hollow plastic figure on a steel base, and it weighs about thirty pounds, and it does not move. The store's window list says six. It is taped to the inside of the glass for the display crew. The guard counted seven at 12:40 last night and six again at 2:10, on the next round, and wrote both numbers in the log with a question mark. Tonight the guard sits at the desk with the sixty cameras and watches camera 41, the one that looks at the department store window from across the hall.",
          "At 12:35 the display crew's night van pulls up to the loading dock, which is on the schedule and always has been. The crew changes the window displays after hours so that shoppers never see an empty window. Two people carry a mannequin in through the back of the store and stand it in the window. They dress it and step back to look. At 12:38 they take a photo. At 1:50 they take it out again, because the store manager, on the phone, does not like the coat. Camera 41 saw the whole thing. The guard, out of sight of the dock when the van came, passed the window at 12:40 and saw seven and, at 2:10, six.",
          "It goes in the log: mannequin, found, display crew, on schedule, see camera 41. Four nights, three ordinary answers, and the guard has not once been afraid, which is the part the last guard's log never managed. One more night. The tarp is off the carousel now, by the way. The mall decided to fix it."
        ],
        "questions": [
          {
            "q": "How much does a mannequin weigh?",
            "choices": [
              "Three pounds, hollow plastic",
              "About thirty pounds",
              "Three hundred pounds on its steel base",
              "Nothing at all, because it is hollow"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What time did the display crew take the mannequin out of the window?",
            "choices": [
              "12:35, when the van pulled up",
              "12:38, when they took the photo",
              "2:10, on the next round",
              "1:50"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'take it out again'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is the 'loading dock'?",
            "choices": [
              "The hallway the display crew uses to reach the store windows",
              "The back entrance where trucks and vans deliver goods",
              "The room with the wall of sixty screens where the guard sits",
              "The camera across the hall that looks at the department store window"
            ],
            "answer": 1,
            "hint": "The van 'pulls up to the loading dock' and the crew carries the mannequin 'in through the back'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the guard's two counts disagree?",
            "choices": [
              "Because the guard miscounted",
              "Because the display crew took two figures away and brought one back",
              "Because the display crew put a mannequin in the window just before the first count and took it out again before the second",
              "Because the window list was wrong"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the last two sentences with the times.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The two people who carried the mannequin in and dressed it",
              "Wrapping up four nights of ordinary answers, and one piece of news about the carousel",
              "How the display crew changes the window displays after hours so that shoppers never see an empty window",
              "The store manager on the phone deciding that the coat in the window would not do after all"
            ],
            "answer": 1,
            "hint": "Paragraph 3 sums up the four nights and ends with the carousel.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Window math",
          "points": [
            "Minutes between clock times: count.",
            "Volume of a box: length × width × height. 4 × 2 × 5 = 40 cubic feet.",
            "Cameras numbered 1 to 60: which one.",
            "Crossing the hour: count to the hour, then add the minutes after it."
          ],
          "example": "11:20 to 12:05 is 45 minutes."
        },
        "problems": [
          {
            "q": "The mannequin went in at 12:35 and came out at 1:50. How many minutes was it in the window?",
            "answer": "75",
            "hint": "12:35 to 1:35 is 60 minutes, then 15 more.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The display crew stores a mannequin in a box 6 feet tall, 3 feet wide and 2 feet deep. How many cubic feet is the box?",
            "answer": "36",
            "hint": "Height × width × depth: 6 × 3 first, then times 2.",
            "skill": "Volume"
          },
          {
            "q": "The guard's rounds were at 12:40 and 2:10. How many minutes apart is that?",
            "answer": "90",
            "hint": "12:40 to 1:40 is 60, then 30 more to 2:10.",
            "skill": "Multi-step problems"
          },
          {
            "q": "Camera 41 is one of 60. How many cameras have a higher number than 41?",
            "answer": "19",
            "hint": "60 − 41.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The display crew changes 3 windows a night, 5 nights a week. How many windows a week?",
            "answer": "15",
            "hint": "3 × 5.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The words around it do the work",
            "points": [
              "Cover the word or phrase with a finger and read the sentence with a gap. What belongs in the gap?",
              "The sentence usually carries its own answer somewhere nearby, in a reason, a time or an example set right beside it.",
              "Slot each choice back in. Three of them will make the report claim something it never claimed."
            ],
            "example": "'After practice, the coach told us to go home and hit the books.' Nobody hits anything. It means study, and the words around it told you so."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "A mannequin is a hollow plastic figure on a steel base weighing about thirty pounds, which is why two people are needed to carry one in and stand it up in a window.",
                "An extra mannequin was a display crew doing scheduled work, caught by a camera and missed by a guard who was out of sight of the dock.",
                "Department stores change their windows more often than any other kind of store does, and a crew working after hours can get through a whole row of them before morning.",
                "The guard was badly frightened by the extra figure standing in the window and would not walk that side of the building again for the rest of the night."
              ],
              "answer": 1,
              "hint": "The two counts, the van at the dock, the line in the log. One choice is a definition from the first sentence, and one is exactly what the last paragraph says did not happen.",
              "skill": "Central idea and evidence",
              "evidence": "It goes in the log: mannequin, found, display crew, on schedule, see camera 41."
            },
            {
              "q": "Claim: the extra figure had already gone from the window before the guard's second count. Which sentence from the report best supports that claim?",
              "choices": [
                "A department store mannequin is a hollow plastic figure on a steel base, and it weighs about thirty pounds, and it does not move.",
                "Tonight the guard sits at the desk with the sixty cameras and watches camera 41, the one that looks at the department store window from across the hall.",
                "Four nights, three ordinary answers, and the guard has not once been afraid, which is the part the last guard's log never managed.",
                "At 1:50 they take it out again, because the store manager, on the phone, does not like the coat."
              ],
              "answer": 3,
              "hint": "The claim is about when the figure left the window. Find the sentence that gives a time for it going out, and check that time against 2:10.",
              "skill": "Finding details",
              "evidence": "At 1:50 they take it out again, because the store manager, on the phone, does not like the coat."
            },
            {
              "q": "Why does the report give so many exact times: 12:35, 12:38, 1:50, 12:40 and 2:10?",
              "choices": [
                "To show that the display crew worked far more slowly than they should have, taking from half past twelve until ten to two over a single window.",
                "To line the two accounts up in time, so the guard's counts and the camera's picture fit together instead of contradicting each other.",
                "To explain how a night van is booked in at the loading dock, since a crew arriving after hours has to be on the schedule before the dock will be opened for it.",
                "To prove that the guard's ninety-minute round is too slow, and that a guard passing the window more often would never have been puzzled by the two counts at all."
              ],
              "answer": 1,
              "hint": "Take every number out of the paragraph and read it again. The story still happens, but something can no longer be checked. Name that thing.",
              "skill": "Author's purpose and structure",
              "evidence": "The guard, out of sight of the dock when the van came, passed the window at 12:40 and saw seven and, at 2:10, six."
            },
            {
              "q": "The report says the van's arrival at the dock 'is on the schedule and always has been'. What does that phrase tell you?",
              "choices": [
                "The crew turned up earlier than anybody was expecting them.",
                "The schedule was changed after the guard wrote it in the log.",
                "The crew's night visit is normal, arranged work rather than something unusual.",
                "The crew has permission for this one visit only."
              ],
              "answer": 2,
              "hint": "The next sentence tells you what the crew comes to do and why it happens after hours. Fit the phrase to that.",
              "skill": "Word meanings",
              "evidence": "At 12:35 the display crew's night van pulls up to the loading dock, which is on the schedule and always has been. The crew changes the window displays after hours so that shoppers never see an empty window."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why the guard's two counts disagreed. What happened?",
              "choices": [
                "The guard simply miscounted the six figures that were standing in the window all along, first at 12:40 and then once more at 2:10 on the next round.",
                "An extra figure stood in the window from about 12:35 until 1:50, and the guard's two rounds fell one on each side of that.",
                "The window list taped inside the glass was out of date and should have said seven, so the first of the guard's two counts was the right one after all.",
                "One of the six was moved out of sight behind the glass."
              ],
              "answer": 1,
              "hint": "One paragraph gives the two times the guard counted. The other gives the two times the extra figure went in and came out. Lay one set of times over the other.",
              "skill": "Reading between the lines",
              "evidence": "At 1:50 they take it out again, because the store manager, on the phone, does not like the coat."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 3 means 4 groups of 3.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "5 × 4 = 20, so 20 shared into 5 equal groups is 4 each."
          },
          "problems": [
            {
              "q": "The guard counts 7 windows with 3 mannequins in each. How many mannequins is that?",
              "answer": "21",
              "hint": "7 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "21 mannequins are shared equally among 7 windows. How many mannequins in each window?",
              "answer": "3",
              "hint": "How many 7s make 21?",
              "skill": "Dividing"
            },
            {
              "q": "The guard counted 301 coats, then found 160 more, then 75 more. How many coats in all?",
              "answer": "536",
              "hint": "301 + 160 first. Then add 75.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The guard finished 2/6 of the day's work before the break and 2/6 after. What fraction is done? (write a fraction)",
              "answer": "4/6",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "There were 1,000 coats at the start. 743 have been sold. How many are left?",
              "answer": "257",
              "hint": "1,000 − 743.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Fraction ÷ fraction: flip the second one and multiply. 4/5 ÷ 2/5 = 4/5 × 5/2 = 20/10 = 2.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The guard's flashlight battery is 9/10 charged. Each round of the mall uses 3/20 of a full charge. How many rounds can the guard walk?",
              "answer": "6",
              "hint": "Flip the second fraction and multiply: 9/10 × 20/3. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "Of 240 coats, 75% are set aside. How many is that?",
              "answer": "180",
              "hint": "75% of 240: 75% is 75/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Mannequins and coats are kept in the ratio 3 to 5. If there are 21 mannequins, how many coats?",
              "answer": "35",
              "hint": "21 ÷ 3 = 7 groups. Each group has 5 coats.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The guard works out 3 × (10 − 2) + 17. What is it?",
              "answer": "41",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 251 = 900",
              "answer": "649",
              "hint": "Subtract 251 from both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total shared out: 18 hours for 8 jobs is 18 ÷ 8 = 2.25 hours a job.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "4x + 13 = 49, so 4x = 36, so x = 9."
          },
          "problems": [
            {
              "q": "20 door checks needed 50 minutes altogether. How many minutes is that for one door check?",
              "answer": "2.5",
              "hint": "A rate is the total shared out: 50 ÷ 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The guard counted 320 coats on the first pass. On the second pass the number had fallen by 50%. How many coats is that?",
              "answer": "160",
              "hint": "50% of 320 is 160. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 6 hours the gauge dropped 78 in all, the same amount each hour. What was the change each hour? (Write a drop as a negative number.)",
              "answer": "-13",
              "accept": [
                "−13"
              ],
              "hint": "Share −78 into 6 equal parts: −78 ÷ 6. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 5x + 26 = 56",
              "answer": "6",
              "hint": "Take 26 off both sides first, then divide by 5.",
              "skill": "Equations"
            },
            {
              "q": "A round tray is 10 inches across. Using 3.14 for pi, how many inches is it around the edge?",
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
              "A square root undoes squaring. If a square has area 25, its side is 5.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start at 11 and add 6 each hour: after 2 hours, y = 6 × 2 + 11 = 23."
          },
          "problems": [
            {
              "q": "The guard starts with 24 coats and adds 9 more every hour. After 3 hours, how many coats are there?",
              "answer": "51",
              "hint": "This is the straight-line rule y = mx + b: 9 × 3 + 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 64 square feet. How long is one side, in feet?",
              "answer": "8",
              "hint": "A square's area is side × side. What number times itself makes 64?",
              "skill": "Powers and roots"
            },
            {
              "q": "The guard runs a ladder from the top of a 5-foot post to a point 12 feet away on the ground. How long is the ladder, in feet?",
              "answer": "13",
              "hint": "Right triangle: a² + b² = c². 5² + 12² = 25 + 144 = 169. The ladder is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x + 27 = 4x + 62",
              "answer": "7",
              "hint": "Take 4x off both sides to get 5x + 27 = 62, then take 27 off both sides and divide.",
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
          "title": "Two numbers, type one",
          "points": [
            "Some orders build two numbers. Keep both on paper.",
            "The last step says which one to type. Read it before you type anything."
          ],
          "example": "Step 2 comes to 90 and step 4 comes to 120. 'Type your step 2 answer' means 90."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of mannequins the guard counted at 12:40: 7.",
          "Multiply by the weight of one mannequin in pounds: 30.",
          "Now the other count. Write the number on the window list taped to the glass: 6.",
          "Multiply that by the number of the camera watching the window: 41.",
          "Camera 41 proved the guard's count was right — a seventh mannequin really was in the window at 12:40. Type your step 2 answer, not the one from step 4."
        ],
        "prompt": "Your answer:",
        "answer": "210",
        "hint": "Both numbers are real work, but the camera settles which count was true that night. Step 5 names the step it comes from."
      }
    },
    {
      "id": "mall-5",
      "title": "Dawn",
      "recon": {
        "lesson": {
          "title": "The whole week, in order",
          "points": [
            "The last log looks back over the five nights. Questions will ask what a noise was, a distance, a word and a difference.",
            "The last guard's entry is a clue the whole week explains.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'The library is two blocks from the park.' How far? Two blocks."
        },
        "title": "Night Log: Heard It Again, Second Floor",
        "passage": [
          "The last guard's final entry, six years ago, said: heard it again, second floor, near the carousel. The new guard now knows what that was. The east escalator is on the second floor, thirty feet from the carousel, and its three worn steps clank past the comb plate on the hour, every hour, for ten seconds. The last guard heard footsteps and never stood beside the escalator at the top of the hour to see them. The new guard did, on the second night, and wrote down what it was.",
          "That is the whole difference between the two logs. Both guards heard the same building. One wrote down what it sounded like. The other wrote down what it was, and to do that had to wait by the escalator at eleven, open the carousel's control box with a flashlight, and sit at the desk watching camera 41. That took until 1:50 in the morning. Nothing in the building changed between the two guards. The building was always pipes and timers and a display crew with a schedule. What changed was that somebody looked.",
          "The fifth night is the quiet one. The escalator is being repaired, so there are no footsteps. The sensor is unplugged, so the carousel waits for its key. The window has six mannequins, and the list says six. The guard walks four rounds and checks four hundred doors four times. At six in the morning the guard unlocks the main entrance and writes the last line of the week: five nights, all doors secure, all noises found. Then, on the line below, for the next guard: it is only the building. Wait beside the noise and it will tell you."
        ],
        "questions": [
          {
            "q": "What was the noise the last guard heard near the carousel?",
            "choices": [
              "The three worn steps on the east escalator clanking on the hour",
              "The carousel's music box",
              "The display crew working after hours in the store",
              "The fountain running all night because the pump is cheaper to leave on"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the second and third sentences.",
            "skill": "Finding details"
          },
          {
            "q": "How far is the escalator from the carousel?",
            "choices": [
              "A mile",
              "Three hundred feet",
              "A yard",
              "Thirty feet"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentence with 'east escalator'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what does 'secure' mean about the doors?",
            "choices": [
              "Open",
              "Counted",
              "Locked and checked",
              "Broken"
            ],
            "answer": 2,
            "hint": "The guard checks doors on every round; 'all doors secure' is the result of checking them.",
            "skill": "Word meanings"
          },
          {
            "q": "According to the log, what was the difference between the two guards?",
            "choices": [
              "One had better hearing",
              "One wrote down what noises sounded like; the other waited beside them and found out what they were",
              "One had more cameras",
              "One worked longer hours"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the first five sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "That the building never changed; what changed was that somebody looked",
              "The desk where the guard watched camera 41",
              "Opening the carousel's control box with a flashlight",
              "The display crew that works to a schedule"
            ],
            "answer": 0,
            "hint": "The last two sentences of paragraph 2.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Week math",
          "points": [
            "Nights times rounds: rounds a week.",
            "Different bottoms: make them the same first. 1/3 + 1/6 = 2/6 + 1/6 = 3/6.",
            "Years to nights: × 365.",
            "Hours across midnight: the hours up to 12, then the hours after."
          ],
          "example": "6 nights × 3 rounds = 18 rounds."
        },
        "problems": [
          {
            "q": "The guard did 4 rounds a night for 5 nights. How many rounds in the week?",
            "answer": "20",
            "hint": "4 × 5.",
            "skill": "Multiplying"
          },
          {
            "q": "The guard spent 1/2 of the last night on rounds and 1/6 of it at the camera screens. How much of the night is that? (write a fraction)",
            "answer": "2/3",
            "hint": "Make the bottoms the same: 1/2 is 3/6. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The shift runs from 10 at night to 6 in the morning. How many hours is that?",
            "answer": "8",
            "hint": "10 to midnight is 2, then 6 more.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The last guard's entry was 6 years ago. The new guard solved it in 5 nights. How many nights is 6 years, using 365 a year, minus the 5 it took?",
            "answer": "2185",
            "accept": [
              "2,185"
            ],
            "hint": "6 × 365 = 2,190. Then 2,190 − 5.",
            "skill": "Multi-step problems"
          },
          {
            "q": "Of the 5 nights, 3 ended with a mystery solved. Write that as a fraction.",
            "answer": "3/5",
            "hint": "3 over 5.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Two facts, then a conclusion",
            "points": [
              "The last question is never answered in one place. Plan on one fact from one paragraph and one from another.",
              "Say the two facts out loud and then say 'so'. Whatever comes after 'so' is usually sitting there in the choices.",
              "A choice that needs something the report never mentions is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the freezer alarm sounds whenever the power dips. Paragraph three: the log shows an alarm at three in the morning on every stormy night. So the storms are dipping the power. Neither line says it alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The same building gave two guards the same noises, and the difference between their logs is that one of them went and stood beside each one.",
                "The east escalator's three worn steps clank for ten seconds every hour.",
                "Night guards should always be sent out to work in pairs.",
                "The building was repaired between the two guards, so the pipes and timers that made the noises had already been dealt with before the new one started."
              ],
              "answer": 0,
              "hint": "Two logs, two guards, one building. The second paragraph names the difference in six words; find the choice that says the same thing about the whole report.",
              "skill": "Central idea and evidence",
              "evidence": "What changed was that somebody looked."
            },
            {
              "q": "Claim: finding the answers cost time as well as attention. Which sentence from the report best supports that claim?",
              "choices": [
                "What changed was that somebody looked.",
                "One wrote down what it sounded like.",
                "The last guard heard footsteps and never stood beside the escalator at the top of the hour to see them.",
                "The other wrote down what it was, and to do that had to wait by the escalator at eleven, open the carousel's control box with a flashlight, and sit at the desk watching camera 41."
              ],
              "answer": 3,
              "hint": "The claim mentions time. Look for the sentence that carries a clock time and a list of things somebody had to sit and wait through.",
              "skill": "Finding details",
              "evidence": "The other wrote down what it was, and to do that had to wait by the escalator at eleven, open the carousel's control box with a flashlight, and sit at the desk watching camera 41."
            },
            {
              "q": "How is the second paragraph organized?",
              "choices": [
                "It lists the repairs made to the building over the past six years.",
                "It gives the order in which the new guard solved the three puzzles.",
                "It sets the two guards side by side, a line each, to show that the only difference was what they did about the noise.",
                "It explains what causes an escalator step to wear down over time."
              ],
              "answer": 2,
              "hint": "Look at the two short sentences that begin 'One wrote' and 'The other wrote'. Two lines built the same way, ending differently, have a shape with a name.",
              "skill": "Author's purpose and structure",
              "evidence": "One wrote down what it sounded like."
            },
            {
              "q": "The last line reads: 'Wait beside the noise and it will tell you.' What does 'it will tell you' mean here?",
              "choices": [
                "The building can be heard speaking in words after dark.",
                "Stay long enough and you will see for yourself what is making the sound.",
                "The log will explain the noise to whoever reads it next.",
                "The noise stops as soon as you stand close enough to it."
              ],
              "answer": 1,
              "hint": "Nothing in this building has a voice. Look at what the new guard actually did on the second night, and describe that instead.",
              "skill": "Word meanings",
              "evidence": "Wait beside the noise and it will tell you."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the fifth night is the quiet one. Why is it?",
              "choices": [
                "Each noise turned out to have a cause, and every one of those causes has now been repaired, disconnected or explained.",
                "The building's heating has been switched off for the summer.",
                "The mall has closed the second floor while the escalator is out.",
                "The new guard has stopped walking rounds during the night."
              ],
              "answer": 0,
              "hint": "Paragraph one tells you what one of the noises actually was. The last paragraph tells you what has been done to each of them. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "The escalator is being repaired, so there are no footsteps."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 3 means 4 groups of 3.",
              "Sharing equally is dividing.",
              "Taking away big numbers: line up the ones, tens and hundreds, and regroup when the top digit is too small.",
              "A whole is all its parts, like 3/3. If 1/3 is done, 2/3 is still to do."
            ],
            "example": "4 × 3 = 12, so 12 shared into 4 equal groups is 3 each."
          },
          "problems": [
            {
              "q": "The guard heard 7 noises yesterday and three times as many today. How many noises today?",
              "answer": "21",
              "hint": "Three times 7: 7 + 7 + 7.",
              "skill": "Multiplying"
            },
            {
              "q": "The guards split 63 hours of night watch into 7-hour shifts. How many shifts is that?",
              "answer": "9",
              "hint": "How many 7s make 63?",
              "skill": "Dividing"
            },
            {
              "q": "The guard starts with 337 log pages and uses 166. How many are left?",
              "answer": "171",
              "hint": "337 − 166.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "1/4 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "3/4",
              "hint": "The whole job is 4/4. Take 1/4 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square key mat is 5 squares on each side. How many squares is that?",
              "answer": "25",
              "hint": "5 rows of 5.",
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
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The plan allows 52.5 minutes. The guard uses 15.65 minutes on the first door check and 11.7 on the second. How many minutes are left?",
              "answer": "25.15",
              "hint": "Add the two amounts used first, then take that from 52.5. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "90 of the 120 log entries are set aside. What percent is that? (write just the number)",
              "answer": "75",
              "accept": [
                "75%"
              ],
              "hint": "90 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 1 hour there are 3 log entries. There are 27 log entries. How many hours?",
              "answer": "9",
              "hint": "27 ÷ 3 = 9 groups. Each group has 1 hour.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The guard works out 3 + 7 × 9. What is it?",
              "answer": "66",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 600 − x = 171",
              "answer": "429",
              "hint": "x is what is left when 171 is taken off 600.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A rate times a count: if one job takes 1.75 hours, 8 jobs take 8 × 1.75 = 14 hours.",
              "Percent change: the change ÷ the starting number, then × 100.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: get the x part on its own first, then undo the multiplying."
            ],
            "example": "71 − 9x = 8, so 9x = 71 − 8 = 63, so x = 7."
          },
          "problems": [
            {
              "q": "One door check needs 2.25 minutes. How many minutes do 16 door checks need?",
              "answer": "36",
              "hint": "16 × 2.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The guard counted 120 cars in the garage on the first pass and 96 on the second. By what percent did the count change? (write just the number)",
              "answer": "20",
              "accept": [
                "20%",
                "-20",
                "−20",
                "-20%",
                "−20%"
              ],
              "hint": "The change is 24. 24 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The guard's time sheet is 11 hours short, so it reads −11 hours. How many hours must be added to bring it back to zero?",
              "answer": "11",
              "hint": "From −11 up to 0.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 39 − 4x = 27",
              "answer": "3",
              "hint": "Move 4x to the right and 27 to the left: 4x = 12.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 8 feet. The hallway is really 48 feet long. How many inches is it on the plan?",
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
              "A straight-line rule is y = mx + b: b is where you start, m is the change each step. If it goes down each step, take m away each time.",
              "A small 3 means three of the number multiplied: 4³ = 4 × 4 × 4 = 64.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start with 50 and use 7 an hour: after 4 hours, 50 − 7 × 4 = 22 are left."
          },
          "problems": [
            {
              "q": "The guard has 30 door-check stickers and uses 5 every hour. How many are left after 5 hours?",
              "answer": "5",
              "hint": "5 × 5 = 25 used, taken off 30.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 3 small cubes along every edge. How many small cubes make it up?",
              "answer": "27",
              "hint": "3³ means 3 × 3 × 3.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 25-foot cable runs from the top of a post to a point 24 feet away on the ground. How tall is the post, in feet?",
              "answer": "7",
              "hint": "a² = c² − b² = 625 − 576 = 49. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x = 5x + 20",
              "answer": "5",
              "hint": "Take 5x off both sides: 4x = 20. Then divide by 4.",
              "skill": "Equations"
            },
            {
              "q": "The mall counts 800,000 visitors a year. Written as 8 × 10 to a power, what is the power?",
              "answer": "5",
              "hint": "Count the zeros after 8.",
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
            "When a step says to skip an earlier one, carry the total from before it forward."
          ],
          "example": "'Start with 12. Take off 2. Skip that step.' Carry 12 forward, add 5, and you end on 17."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of nights the guard worked: 5.",
          "Multiply by the rounds walked each night: 4.",
          "Subtract the worn escalator steps: 3.",
          "Skip step 3. The escalator was away being repaired on the fifth night, so no step clanked at all. Carry your step 2 answer forward instead.",
          "Add the mannequins standing in the window on the last night: 6.",
          "Type the number you end on."
        ],
        "prompt": "Your answer:",
        "answer": "26",
        "hint": "Step 4 undoes the subtraction. The number that goes into step 5 is the one from step 2."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
