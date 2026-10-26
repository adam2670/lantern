// ODYSSEY — campaign "arena". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "arena",
  "ready": true,
  "kind": "build",
  "readingLevel": {
    "fk": 5.8,
    "cl": 6.2
  },
  "grade": "5",
  "kindLabel": "Build",
  "form": "wrench",
  "title": "Robot Arena",
  "subtitle": "The pit, a school robot league",
  "pitch": "Five sessions to build a three-pound combat robot: a frame, drive motors, a battery and wiring, an attack tool, and a first match in the arena. Grams, volts, and a three-minute clock. The robot is the progress bar.",
  "scene": "assets/scene-arena.jpg",
  "buildArt": "battlebot",
  "progress": {
    "unit": "parts",
    "total": 5
  },
  "dayNoun": "Session",
  "stageNoun": "Part",
  "finalNoun": "First match",
  "stages": [
    "Frame",
    "Drive",
    "Power",
    "Attack tool",
    "First match"
  ],
  "reconNoun": "Build Sheet",
  "legs": {
    "recon": "Build sheet",
    "nav": "Pit math",
    "orders": "Assembly",
    "debrief": "Pit check"
  },
  "rules": [
    "Stuck on a value? <b>Flag it</b> and move on. Pending items come back at the pit check.",
    "Build sheet: read the questions <b>before</b> the sheet.",
    "Assembly: read <b>every</b> step before you fit anything."
  ],
  "fact": "In a three-pound robot league the whole robot, attack tool and all, has to weigh less than a bag of sugar. Every gram spent on armor is a gram not spent on the motor. That trade is the whole sport.",
  "finale": {
    "prompt": "Match over, robot still driving. Which color goes on the team's pit banner?",
    "options": [
      {
        "label": "Orange",
        "color": "#F28C28"
      },
      {
        "label": "Electric blue",
        "color": "#4FD1FF"
      },
      {
        "label": "Green",
        "color": "#4FD18B"
      },
      {
        "label": "Black",
        "color": "#1A1A1A"
      }
    ],
    "done": "Hang it. Then check every screw before the next round. Winning a match is mostly not falling apart."
  },
  "patrols": [
    {
      "id": "arena-1",
      "title": "The Frame",
      "recon": {
        "lesson": {
          "title": "Questions first, then the sheet",
          "points": [
            "Read the five questions before the sheet. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Weights in grams are details. Circle them.",
            "The answer is always on the sheet. You never have to guess."
          ],
          "example": "Question: 'How heavy is the suitcase?' Hunt for 'pounds' or 'grams'."
        },
        "title": "Build Sheet: Three Pounds, No More",
        "passage": [
          "The league is for three-pound robots, which means the whole machine, wheels, attack tool, battery and all, must weigh no more than 1,360 grams on the scale at the arena door. A robot that is one gram over does not fight. Matches are three minutes long, two robots in a steel-walled box eight feet square. A robot wins by being the last one still moving, or by the judges' points for damage and control if both are still going at the bell. Nothing in the rules says a robot has to be fast. Everything in the sport says it has to survive.",
          "The frame is the skeleton, and the choice of frame is the choice of what kind of robot this is. A thick steel frame survives anything and leaves no weight for an attack tool. A thin plastic frame leaves plenty for an attack tool and folds the first time it is hit. The build sheet chooses the middle: a flat plate of aluminum a quarter inch thick, cut to a wedge shape. It is low at the front so that it slides under other robots and lifts them, with a raised box at the back to hold the electronics. It weighs 380 grams.",
          "Cutting the plate is the first session. The shape is drawn on the aluminum from a paper pattern, and the corners are drilled first so that the saw has somewhere to turn. The edges are filed smooth, because a sharp edge on a robot cuts the builder before it cuts anything else. Eight holes are drilled and threaded for the motor mounts and the lid. The plate goes on the scale: 380 grams, as drawn. The builder writes it in the weight column of the sheet, which will be the most-read column in the pit all week."
        ],
        "questions": [
          {
            "q": "What is the weight limit for a robot?",
            "choices": [
              "360 grams, the weight of the frame",
              "1,360 grams",
              "3,000 grams, or three kilos",
              "13 pounds on the arena scale"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What is the frame made of?",
            "choices": [
              "Thick steel, which survives anything that hits it",
              "A quarter-inch aluminum plate cut to a wedge",
              "Thin plastic, which leaves the most weight for an attack tool",
              "Wood, cut to the same wedge shape and filed smooth"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence that begins 'The build sheet chooses the middle'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does 'wedge' mean?",
            "choices": [
              "A shape that is thick and square across the front so it can take a hit",
              "A kind of screw that holds the motor mounts down onto the aluminum plate",
              "A round plate that is spun by its own motor at ten thousand turns a minute",
              "A shape that is low and thin at the front and higher at the back"
            ],
            "answer": 3,
            "hint": "The sentence says the wedge is 'low at the front so that it slides under other robots'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why are the corners drilled before the plate is sawn?",
            "choices": [
              "So the plate matches the paper pattern",
              "To make the plate lighter",
              "Because eight holes have to be drilled and threaded for the motor mounts",
              "So the saw has somewhere to turn at the corners"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the sentence with 'the corners are drilled first'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "Choosing a frame: the trade between armor and attack tool weight",
              "The judges",
              "The scale",
              "Filing edges"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 2 says the frame choice is 'the choice of what kind of robot this is'.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Weight math",
          "points": [
            "Grams left: limit minus the frame.",
            "A fraction times a whole number: 5 × 3/4 is five 3/4s, which is 15/4.",
            "Area of a square: side times side.",
            "Same bottom: add the tops, so 2/9 + 5/9 = 7/9."
          ],
          "example": "2,000 − 650 = 1,350 grams left."
        },
        "problems": [
          {
            "q": "The limit is 1,360 grams and the frame weighs 380. How many grams are left for everything else?",
            "answer": "980",
            "hint": "1,360 − 380.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "Each of the 8 bolts on the frame needs 3/4 of a turn to tighten. How many turns is that in all?",
            "answer": "6",
            "hint": "Eight 3/4s is 24/4. How many wholes is that?",
            "skill": "Fractions"
          },
          {
            "q": "The arena is 8 feet by 8 feet. What is its floor area in square feet?",
            "answer": "64",
            "hint": "8 × 8.",
            "skill": "Area and perimeter"
          },
          {
            "q": "The builder drilled 8 holes at 4 minutes each. How many minutes of drilling?",
            "answer": "32",
            "hint": "8 × 4.",
            "skill": "Multiplying"
          },
          {
            "q": "The builder filed 3/8 of the edges before the break and 4/8 after. What fraction is filed? (write a fraction)",
            "answer": "7/8",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What is the whole sheet about?",
            "points": [
              "Read the whole thing first, then say in one sentence what it is about, before any choice is allowed to influence you.",
              "The wrong answers to that question are usually true. They are one paragraph's worth, or so broad the report never actually said them.",
              "The four moves after it: prove a claim with a line, name a paragraph's job, read a word off its own sentence, and put two paragraphs together."
            ],
            "example": "Three paragraphs about a bicycle: what the race rules allow, which frame was chosen, how it was built. 'The frame is aluminum' is one paragraph. 'Cycling is good exercise' is not in the report at all."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The aluminum plate cut for the frame weighs 380 grams, exactly as drawn, and the builder writes that number into the weight column of the sheet.",
                "A hard limit in grams turns every design decision into a trade, and the trades are settled by what will still be moving at the end.",
                "Any machine at all will work well if the builder picks strong enough materials for every part of it and takes enough time over the building.",
                "A robot wins in this league by being the fastest machine in the box, so every choice on the build sheet is made to save weight and add speed."
              ],
              "answer": 1,
              "hint": "A limit in grams, three frames weighed against each other, and a column of weights. Ask what all three of those have in common.",
              "skill": "Central idea and evidence",
              "evidence": "Nothing in the rules says a robot has to be fast."
            },
            {
              "q": "Claim: choosing the frame is really choosing what the whole robot will be. Which sentence from the report best supports that claim?",
              "choices": [
                "The league is for three-pound robots, which means the whole machine, wheels, attack tool, battery and all, must weigh no more than 1,360 grams on the scale at the arena door.",
                "The frame is the skeleton, and the choice of frame is the choice of what kind of robot this is.",
                "A robot wins by being the last one still moving, or by the judges' points for damage and control if both are still going at the bell.",
                "The shape is drawn on the aluminum from a paper pattern, and the corners are drilled first so that the saw has somewhere to turn."
              ],
              "answer": 1,
              "hint": "Three of these are about the weight limit, how a match is won, or how the plate was cut out. The claim is about what the frame decides. Only one sentence makes that claim at all.",
              "skill": "Finding details",
              "evidence": "The frame is the skeleton, and the choice of frame is the choice of what kind of robot this is."
            },
            {
              "q": "How is the second paragraph organized?",
              "choices": [
                "It lists the steps of cutting the plate in the order they happen, ending with the edges filed smooth.",
                "It explains what causes a sheet of aluminum to bend when it is struck, and how the thickness of the plate changes that.",
                "It states a rule about the weight limit and then gives the penalty a robot pays for breaking it at the door.",
                "It puts two extremes side by side and then picks something between them."
              ],
              "answer": 3,
              "hint": "Two sentences in the middle start the same way and end in opposite trouble. Then read what the sentence after them says the sheet does.",
              "skill": "Author's purpose and structure",
              "evidence": "The build sheet chooses the middle"
            },
            {
              "q": "The report calls the frame 'the skeleton'. What does that mean as it is used here?",
              "choices": [
                "The part of the robot that is left after a bad match",
                "A drawing of the robot on paper, checked over before any aluminum is cut",
                "The lightest version of the design that the rules allow",
                "The structure everything else is attached to and shaped around"
              ],
              "answer": 3,
              "hint": "You are not being told anything about bones. Ask what a skeleton does for a body, then look at what the report says gets bolted onto this plate.",
              "skill": "Word meanings",
              "evidence": "The frame is the skeleton, and the choice of frame is the choice of what kind of robot this is."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the weight column will be the most-read column in the pit. Why will it?",
              "choices": [
                "One gram over the limit and the robot does not fight, so every part added has to be set against what is left.",
                "The judges write their scores into that column after each match.",
                "The column records what the plate weighed before it was cut.",
                "The builder has to keep filing the edges until the plate reaches 380 grams."
              ],
              "answer": 0,
              "hint": "Paragraph one gives you a limit and what happens if you miss it by a single gram. Paragraph three tells you which column gets read most. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "A robot that is one gram over does not fight"
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
              "q": "The builder carries 5 screws on each of 2 trips. How many screws is that?",
              "answer": "10",
              "hint": "2 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "Every frame takes 8 screws. The builder has 40 screws. How many frames can be built?",
              "answer": "5",
              "hint": "How many 8s fit into 40?",
              "skill": "Dividing"
            },
            {
              "q": "The builder counted 165 screws in the morning and 265 in the evening. How many more in the evening?",
              "answer": "100",
              "hint": "265 − 165.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 7/8 or 3/8? (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square start box is 4 feet on each side. How many feet is it all the way around?",
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
              "Decimal × decimal: multiply without the points, then count the decimal places in both numbers. 1.3 × 2.1: 13 × 21 = 273, two places, so 2.73.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(6 − 2) × (5 + 4) = 36: each set of parentheses first."
          },
          "problems": [
            {
              "q": "A regular part takes 10.25 minutes. A long one takes 2.4 times as long. How many minutes does the long one take?",
              "answer": "24.6",
              "hint": "Multiply 1025 × 24 without the points, then put back 3 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 screws, 10 are set aside. Out of 240 screws, how many is that?",
              "answer": "24",
              "hint": "240 is 2.4 hundreds, so 2.4 × 10.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder divides 72 minutes of work in the ratio 3 to 5. How many minutes is the larger share?",
              "answer": "45",
              "hint": "8 parts in all, so one part is 9 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder works out (10 − 3) × (8 + 10). What is it?",
              "answer": "126",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 330 = x − 47",
              "answer": "377",
              "hint": "Add 47 to both sides.",
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
            "example": "8x + 8 = 32, so 8x = 24, so x = 3."
          },
          "problems": [
            {
              "q": "The job needs 6 minutes in all, at 0.75 minutes for each part. One part is already done. How many parts are left?",
              "answer": "7",
              "hint": "6 ÷ 0.75 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of screws may change by no more than 20%. Starting from 200, what is the highest count the rule allows?",
              "answer": "240",
              "hint": "20% of 200 is 40. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The robot's score starts at 5 points and loses 4 points for each of 2 penalties. What is the score at the end?",
              "answer": "-3",
              "accept": [
                "−3"
              ],
              "hint": "4 × 2 = 8 comes off 5.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 8 − 8 = 9",
              "answer": "136",
              "hint": "Add 8 to both sides, then multiply by 8.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 5 feet. How many inches are needed for 50 feet?",
              "answer": "10",
              "hint": "50 ÷ 5.",
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
            "example": "A line starts at 3 and climbs 6 each step: after 4 steps it is 6 × 4 + 3 = 27."
          },
          "problems": [
            {
              "q": "A line passes through (0, 24) and (8, 64). What is its slope?",
              "answer": "5",
              "hint": "Slope is the rise over the run: 40 ÷ 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "Two bins each hold 5² screws. How many screws in all?",
              "answer": "50",
              "hint": "5² is 25. Two bins of 25.",
              "skill": "Powers and roots"
            },
            {
              "q": "The builder goes 20 feet east and then 21 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "29",
              "hint": "The two legs make a right angle: 20² + 21² = 841.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 6x + 2 and 2x + 10 come to the same number?",
              "answer": "2",
              "hint": "Set them equal, take 2x off both sides, then take 2 off.",
              "skill": "Equations"
            },
            {
              "q": "The league uses 3 × 10^5 screws in one season. Ten seasons use ten times as many. Written out in full, how many screws is that?",
              "answer": "3000000",
              "hint": "Ten times adds one to the power: 3 × 10^6.",
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
          "example": "If step 5 says 'type your step 3 number', the number from step 4 was only a side number."
        },
        "skill": "Following directions",
        "steps": [
          "Write the weight limit in grams: 1,360.",
          "Subtract the weight of the bare frame: 380.",
          "Divide that difference by 10.",
          "Now a second number, on its own: write the number of holes drilled and threaded in the plate: 8, and multiply it by the number of feet across the arena box: 8.",
          "You are holding a number from step 3 and a number from step 4. The weight column is the one read all week, so type the number from step 3, not the one from step 4."
        ],
        "prompt": "Your answer:",
        "answer": "98",
        "hint": "Both halves are real sums, but only one goes in the weight column. Step 5 names the step whose number the build sheet wants."
      }
    },
    {
      "id": "arena-2",
      "title": "Drive",
      "recon": {
        "lesson": {
          "title": "A trade-off",
          "points": [
            "When the sheet describes a trade between two things, both sides are details.",
            "Gear numbers are exact.",
            "A word about the drive is defined by what it does to the wheel."
          ],
          "example": "'A low gear on a bike is slow but easy uphill.' What do you give up? Speed."
        },
        "title": "Build Sheet: Speed or Push",
        "passage": [
          "The robot drives on two wheels, one on each side, each turned by its own motor. So it steers like a tank: both wheels forward to go straight, one forward and one back to spin in place. A third point, a skid at the front of the wedge, slides on the floor. Two-wheel drive is simple, light, and easy to fix in the pit between rounds, and in a three-pound robot simple wins more matches than clever.",
          "A small electric motor spins fast and pushes weakly. A robot needs the opposite. It has to be slow enough to control and strong enough to shove another robot into the wall. So between the motor and the wheel goes a gearbox, a stack of small gears turning big ones. Every time a small gear drives a big one, the speed drops and the push rises by the same amount. The sheet calls for a gearbox of 30 to 1: the motor turns thirty times for each turn of the wheel, and the wheel pushes thirty times harder than the motor alone could.",
          "The two motors bolt to the plate through the holes drilled yesterday, the gearboxes clip on, and the wheels, rubber, three inches across, press onto the shafts. The builder hooks a battery to one motor at a time. The builder checks that each one spins the right way. That is because a robot with one wheel wired backward spins in circles for three minutes while the other robot eats it. Both spin right. The scale says 720 grams with drive fitted. Six hundred and forty left."
        ],
        "questions": [
          {
            "q": "How does the robot steer?",
            "choices": [
              "With a front wheel that turns",
              "With the skid at the front of the wedge",
              "Like a tank: one wheel forward and one back to spin",
              "It cannot steer"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What is the gearbox ratio on the sheet?",
            "choices": [
              "30 to 1",
              "3:1",
              "300 to 1, very slow",
              "1 to 30, the other way around"
            ],
            "answer": 0,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'gearbox'?",
            "choices": [
              "A stack of gears between the motor and the wheel that trades speed for push",
              "A box for storing gears",
              "A battery",
              "The wheel"
            ],
            "answer": 0,
            "hint": "The sentence 'a gearbox, a stack of small gears turning big ones'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the builder test each motor before the match?",
            "choices": [
              "Because a wheel wired backward makes the robot spin in circles while the other robot attacks",
              "Because a motor that has never been run since the day it was bought will not turn at its full speed",
              "Because the rules say that both motors must be tested on the bench before a robot is allowed in the box",
              "Because a battery that is not run down a little before a match will give too much power to the wheels"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the sentence with 'wired backward'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The wheels' size",
              "Why the robot needs a gearbox and what it does",
              "The skid",
              "Why two-wheel drive is simple and steers like a tank"
            ],
            "answer": 1,
            "hint": "Paragraph 2 explains the speed-for-push trade and the 30 to 1 ratio.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Gear math",
          "points": [
            "Motor turns per wheel turn: 30.",
            "Wheel turns in a match: motor turns ÷ 30.",
            "Subtracting decimals: line up the points. 3.5 − 1.25 is 3.50 − 1.25 = 2.25.",
            "Two-step: inches per wheel turn (about 3 × 3), then distance."
          ],
          "example": "1,500 motor turns ÷ 30 = 50 wheel turns."
        },
        "problems": [
          {
            "q": "The gearbox is 30 to 1. If the motor turns 3,000 times, how many times does the wheel turn?",
            "answer": "100",
            "hint": "3,000 ÷ 30.",
            "skill": "Dividing"
          },
          {
            "q": "A wheel is 2.5 inches wide and the gap in the frame is 2.75 inches. How many inches of room are left? (write a decimal)",
            "answer": "0.25",
            "hint": "Line up the points: 2.75 − 2.50.",
            "skill": "Decimals"
          },
          {
            "q": "A 3-inch wheel rolls about 9 inches per turn. How many inches does the robot travel in 20 wheel turns?",
            "answer": "180",
            "hint": "9 × 20.",
            "skill": "Multiplying"
          },
          {
            "q": "180 inches is how many feet? A foot is 12 inches.",
            "answer": "15",
            "hint": "180 ÷ 12.",
            "skill": "Dividing"
          },
          {
            "q": "Two motors and two gearboxes weigh 340 grams together. If the motors are 120 grams each, how much do the two gearboxes weigh together?",
            "answer": "100",
            "hint": "2 × 120 = 240. Then 340 − 240.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The sentence that proves it",
            "points": [
              "All four choices are real sentences from the report, so 'true' tells you nothing at all.",
              "Watch for the sentence that states the problem and don't mistake it for the one that states the answer. They sit next to each other on purpose.",
              "Read the claim, then your sentence, and ask whether anything is still missing between them."
            ],
            "example": "Claim: the new pump fixed the flooding. 'The cellar used to flood every spring' is the problem, not the proof. 'It has been dry since March' is the proof."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The wheels are rubber and three inches across, and they press straight onto the shafts.",
                "Simple solutions beat complicated ones in every field of work, not only in building robots.",
                "Every part of the drive is chosen for control and for not breaking, rather than for speed or for cleverness.",
                "The gearbox makes the wheels turn faster than the motor does, so the robot can outrun the other."
              ],
              "answer": 2,
              "hint": "A drive with as few parts as it can have, gears that trade speed away, and a check that the wheels turn the right way. Ask what all three are protecting.",
              "skill": "Central idea and evidence",
              "evidence": "Two-wheel drive is simple, light, and easy to fix in the pit between rounds, and in a three-pound robot simple wins more matches than clever."
            },
            {
              "q": "Claim: the gearbox gives the robot something the motor could not do by itself. Which sentence from the report best supports that claim?",
              "choices": [
                "Every time a small gear drives a big one, the speed drops and the push rises by the same amount.",
                "A third point, a skid at the front of the wedge, slides on the floor.",
                "The two motors bolt to the plate through the holes drilled yesterday, the gearboxes clip on, and the wheels, rubber, three inches across, press onto the shafts.",
                "Two-wheel drive is simple, light, and easy to fix in the pit between rounds, and in a three-pound robot simple wins more matches than clever."
              ],
              "answer": 0,
              "hint": "The claim is about what the gearbox delivers that the motor alone cannot. Only one of these follows the gears through to more push.",
              "skill": "Finding details",
              "evidence": "Every time a small gear drives a big one, the speed drops and the push rises by the same amount."
            },
            {
              "q": "Why does the report explain how a gearbox works before it gives the number 30 to 1?",
              "choices": [
                "So the number means something: thirty times slower and thirty times stronger, instead of just a big figure on a sheet.",
                "To explain how gear teeth are cut in a factory.",
                "To set the gearbox against the tank steering and compare them.",
                "To list the parts that will be bolted onto the plate."
              ],
              "answer": 0,
              "hint": "Read the sentence the number sits in. It says the same thing twice, once as a ratio and once in plain words. Ask what the paragraph before it made possible.",
              "skill": "Author's purpose and structure",
              "evidence": "The sheet calls for a gearbox of 30 to 1: the motor turns thirty times for each turn of the wheel, and the wheel pushes thirty times harder than the motor alone could."
            },
            {
              "q": "The report says the robot 'steers like a tank'. What is that comparison telling you?",
              "choices": [
                "It turns by driving its two sides differently, with no steering wheel anywhere on it",
                "It is armored heavily enough across its whole body to survive any hit the other robot can land on it",
                "It moves slowly in a straight line and cannot change direction once it has started rolling forward",
                "It runs on metal tracks laid around its wheels rather than on the rubber tires a car would use"
              ],
              "answer": 0,
              "hint": "The rest of that sentence spells the comparison out: both wheels one way, or one each way. The picture is about turning, not about armor.",
              "skill": "Word meanings",
              "evidence": "it steers like a tank: both wheels forward to go straight, one forward and one back to spin in place"
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the builder tests each motor on its own before the robot ever moves. Why bother?",
              "choices": [
                "The motors have to be broken in on the bench before they will give their full power, and hooking a battery to one at a time is how that is done.",
                "With only two driven wheels, one motor wired backward turns the robot into something that can only spin on the spot.",
                "The gearboxes will not clip on until the motors have been tested.",
                "The battery cannot power both of the motors at the same time."
              ],
              "answer": 1,
              "hint": "Paragraph one tells you what happens when the two wheels turn opposite ways. Paragraph three tells you what a backward wire does. They are the same fact from two sides.",
              "skill": "Reading between the lines",
              "evidence": "because a robot with one wheel wired backward spins in circles for three minutes while the other robot eats it"
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
              "Fractions with the same bottom: add the tops."
            ],
            "example": "4 × 5 = 20."
          },
          "problems": [
            {
              "q": "The builder counts 3 robots with 3 motors in each. How many motors is that?",
              "answer": "9",
              "hint": "3 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "9 motors are shared equally among 3 robots. How many motors in each robot?",
              "answer": "3",
              "hint": "How many 3s make 9?",
              "skill": "Dividing"
            },
            {
              "q": "The builder counted 392 wheels, then found 91 more, then 45 more. How many wheels in all?",
              "answer": "528",
              "hint": "392 + 91 first. Then add 45.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The builder finished 5/8 of the day's work before the break and 2/8 after. What fraction is done? (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "There were 600 wheels at the start. 161 have been used. How many are left?",
              "answer": "439",
              "hint": "600 − 161.",
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
            "example": "4 × (8 − 3) + 6 = 26: parentheses, then multiply, then add."
          },
          "problems": [
            {
              "q": "The team has 8 3/4 yards of armor strip. Each panel takes 5/8 of a yard. How many panels can the team cut?",
              "answer": "14",
              "hint": "Make 8 3/4 an improper fraction, 35/4. Then multiply by the flip of 5/8: 35/4 × 8/5.",
              "skill": "Fractions"
            },
            {
              "q": "Of 120 wheels, 75% are set aside. How many is that?",
              "answer": "90",
              "hint": "75% of 120: 75% is 75/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Motors and wheels are kept in the ratio 3 to 5. If there are 18 motors, how many wheels?",
              "answer": "30",
              "hint": "18 ÷ 3 = 6 groups. Each group has 5 wheels.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder works out 7 × (9 − 1) + 18. What is it?",
              "answer": "74",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 422 = 1,000",
              "answer": "578",
              "hint": "Subtract 422 from both sides.",
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
            "example": "4x + 9 = 33, so 4x = 24, so x = 6."
          },
          "problems": [
            {
              "q": "20 parts needed 10 minutes altogether. How many minutes is that for one part?",
              "answer": "0.5",
              "hint": "A rate is the total shared out: 10 ÷ 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder counted 80 wheels on the first pass. On the second pass the number had risen by 20%. How many wheels did the builder count on the second pass?",
              "answer": "96",
              "hint": "20% of 80 is 16. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The robot's battery drops 8 points of charge every minute of a match. Write that as −8 a minute. How many points higher was the charge 15 minutes ago? Time before now counts as negative. Work it out as (−8) × (−15).",
              "answer": "120",
              "hint": "8 × 15, and two minus signs make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 3x + 17 = 35",
              "answer": "6",
              "hint": "Take 17 off both sides first, then divide by 3.",
              "skill": "Equations"
            },
            {
              "q": "A round pan is 10 inches across. Using 3.14 for pi, how many inches is it around the edge?",
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
            "example": "Start at 30 and add 7 each hour: after 3 hours, 7 × 3 + 30 = 51."
          },
          "problems": [
            {
              "q": "The builder starts with 20 wheels and adds 9 more every hour. After 5 hours, how many wheels are there?",
              "answer": "65",
              "hint": "This is the straight-line rule y = mx + b: 9 × 5 + 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 64 square feet. How long is one side, in feet?",
              "answer": "8",
              "hint": "A square's area is side × side. What number times itself makes 64?",
              "skill": "Powers and roots"
            },
            {
              "q": "The builder runs a cable from the top of a 5-foot post to a point 12 feet away on the ground. How long is the cable, in feet?",
              "answer": "13",
              "hint": "Right triangle: a² + b² = c². 5² + 12² = 25 + 144 = 169. The cable is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x + 22 = x + 46",
              "answer": "4",
              "hint": "Take x off both sides to get 6x + 22 = 46, then take 22 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 5 feet and is 5 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (volume = pi × radius × radius × depth)",
              "answer": "392.5",
              "hint": "3.14 × 5 × 5 = 78.5, then × 5.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Order matters",
          "points": [
            "Do the steps in the order given.",
            "If the last step changes the unit, change it last: 450 grams is 0.45 kilograms."
          ],
          "example": "'Multiply by 5, then subtract 2' is not 'subtract 2, then multiply by 5'."
        },
        "skill": "Following directions",
        "steps": [
          "Write the gearbox ratio's first number: 30.",
          "Multiply by the number of wheels the robot drives on: 2.",
          "Multiply that by the number of motors: 2.",
          "Add the grams the sheet says are left once the drive is fitted: 640.",
          "That total is in grams. Type it in kilograms as a decimal. (1,000 grams make 1 kilogram.)"
        ],
        "prompt": "Your answer:",
        "answer": "0.76",
        "accept": [
          "0.76 kg",
          "0.76kg",
          ".76"
        ],
        "hint": "Steps 1 to 4 give you a number of grams. Step 5 wants the same weight written the other way, and it tells you how many grams make a kilogram."
      }
    },
    {
      "id": "arena-3",
      "title": "Power",
      "recon": {
        "lesson": {
          "title": "One rule above the others",
          "points": [
            "When the sheet says one rule matters most, that is a detail, and the reason follows.",
            "Volts and minutes are exact.",
            "A word about the electronics is defined by what it does."
          ],
          "example": "'Helmets on before the ride starts.' Why? Look in the next sentence for the 'because'."
        },
        "title": "Build Sheet: The Switch the Judges Check First",
        "passage": [
          "The battery is a flat pack about the size of a deck of cards, 12 volts, enough to run both motors and the attack tool for a three-minute match with some to spare. And it is the most dangerous thing on the bench. A battery like this holds a lot of energy in a small box. If it is shorted, if the plus and minus are joined by a stray wire or a dropped screw, it can get hot enough to burn in seconds. The sheet's first rule for the power session is written in capitals: BATTERY OUT UNTIL THE WIRING IS CHECKED TWICE.",
          "Between the battery and the motors go three things. First, a speed controller for each motor. It is a small circuit that takes a signal from the radio. It gives the motor as much or as little power as the driver asks. A receiver, which hears the driver's controller. And a switch, a big red one on the outside of the robot that cuts the battery off from everything. The switch is the rule the judges check first at the arena door. That is because a robot that cannot be switched off from the outside is a robot that nobody can safely pick up when it is upside down and still trying to fight.",
          "The wiring is soldered, not twisted, because a twisted joint shakes loose in the first hit, and every wire is tied down so it cannot reach a spinning part. The builder checks it twice, out loud, plus to plus, minus to minus, reading each wire off the diagram. Then, and only then, the builder plugs the battery in. The radio links. Both wheels answer the sticks. The switch cuts everything dead. The scale says 950 grams. Four hundred and ten left, and the attack tool is next."
        ],
        "questions": [
          {
            "q": "What voltage is the battery?",
            "choices": [
              "12 volts",
              "1.2 volts, like a AA cell",
              "120 volts, like a wall socket",
              "3 volts, like a watch battery"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What is the first rule for the power session?",
            "choices": [
              "Wear goggles",
              "Solder everything",
              "Fit the red switch on the outside before anything else",
              "Battery out until the wiring is checked twice"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does 'shorted' mean?",
            "choices": [
              "Made smaller",
              "Cut off from everything else by the big red switch on the outside of the robot",
              "Charged up until the pack holds enough energy for a whole three-minute match",
              "Plus and minus joined directly, letting all the energy rush out at once"
            ],
            "answer": 3,
            "hint": "The sentence 'If it is shorted, if the plus and minus are joined by a stray wire or a dropped screw'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why do the judges check the switch first?",
            "choices": [
              "Because a robot that cannot be switched off from outside cannot be picked up safely when it is upside down and still fighting",
              "Because the wiring behind it has to be checked twice",
              "Because the red switch is the last part fitted to the robot",
              "Because the switch is the easiest part to test at the door"
            ],
            "answer": 0,
            "hint": "The last two sentences of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the wiring is done and checked before the battery goes in",
              "The three things that go in between the battery and the two motors",
              "Why the battery pack is the most dangerous thing on the whole bench",
              "The big red switch and why the judges check it before anything else"
            ],
            "answer": 0,
            "hint": "Paragraph 3 covers soldering, tying down, checking twice, and then plugging in.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Power math",
          "points": [
            "Grams left: limit minus what is on.",
            "Wires checked twice: count × 2.",
            "Volume of a box: length × width × height. 5 × 4 × 2 = 40 cubic centimeters.",
            "Two-step: parts between battery and motors, then wires each."
          ],
          "example": "A 900-gram limit with 650 grams on: 900 − 650 = 250 grams left."
        },
        "problems": [
          {
            "q": "The robot is at 950 grams and the limit is 1,360. How many grams are left for the attack tool?",
            "answer": "410",
            "hint": "1,360 − 950.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "There are 14 wires and each is checked twice. How many checks?",
            "answer": "28",
            "hint": "14 × 2.",
            "skill": "Multiplying"
          },
          {
            "q": "The battery is a box 6 centimeters long, 3 centimeters wide and 2 centimeters tall. How many cubic centimeters is it?",
            "answer": "36",
            "hint": "Length × width × height: 6 × 3 first, then times 2.",
            "skill": "Volume"
          },
          {
            "q": "The robot has two speed controllers, a receiver and a switch. Each speed controller has 6 wires, and the receiver and the switch have 2 each. How many wires is that?",
            "answer": "16",
            "hint": "6 + 6 + 2 + 2.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The battery is 12 volts. A flashlight battery is 1.5 volts. How many flashlight batteries would it take to equal 12 volts?",
            "answer": "8",
            "hint": "12 ÷ 1.5.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Why did the writer put that there?",
            "points": [
              "A paragraph, a sentence, even a line printed in capitals, is doing a job. Ask what the report would lose without it.",
              "Watch the order things come in. A warning placed before a procedure is usually there to change how you read the procedure.",
              "A choice that only repeats the content of a paragraph has not named a job."
            ],
            "example": "A recipe puts 'the oven must be hot before anything goes in' at the top rather than at step four. That placement is doing work: it is a condition, not a step."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The whole power session is arranged so that the most dangerous part of the robot can always be shut off and never accidentally joined to itself.",
                "A speed controller takes a signal from the radio and gives the motor as much power as the driver asks for, and there is one of them for each of the two motors.",
                "Electricity is dangerous enough that it is best left to trained professionals, and nobody working alone should ever wire up anything that carries real power.",
                "The battery goes in first so that each wire can be tested for power as it is soldered, and the big red switch is added at the end once the rest of the robot works."
              ],
              "answer": 0,
              "hint": "A rule in capital letters, a big red switch on the outside, and a check done twice out loud. Ask what all three are guarding.",
              "skill": "Central idea and evidence",
              "evidence": "The sheet's first rule for the power session is written in capitals: BATTERY OUT UNTIL THE WIRING IS CHECKED TWICE."
            },
            {
              "q": "Claim: the switch is there to protect people rather than to protect the robot. Which sentence from the report best supports that claim?",
              "choices": [
                "And a switch, a big red one on the outside of the robot that cuts the battery off from everything.",
                "The switch cuts everything dead.",
                "The sheet's first rule for the power session is written in capitals: BATTERY OUT UNTIL THE WIRING IS CHECKED TWICE.",
                "That is because a robot that cannot be switched off from the outside is a robot that nobody can safely pick up when it is upside down and still trying to fight."
              ],
              "answer": 3,
              "hint": "Two of these describe what the switch does. The claim is about who it is for. Find the sentence that puts a person into the picture.",
              "skill": "Finding details",
              "evidence": "That is because a robot that cannot be switched off from the outside is a robot that nobody can safely pick up when it is upside down and still trying to fight."
            },
            {
              "q": "Why is the sheet's first rule for this session printed in capital letters?",
              "choices": [
                "Because the builder has trouble reading small print out in the pit.",
                "Because the judges at the arena door wrote that rule themselves and require every builder to print it that way on the sheet.",
                "To show that the rule applies only to this particular battery, and that another kind of battery would come with its own rule.",
                "To mark it as the one rule that has to be obeyed before anything else in the session starts."
              ],
              "answer": 3,
              "hint": "Read the sentences just before it. They tell you what a battery like this can do in seconds. Ask what the capitals are answering.",
              "skill": "Author's purpose and structure",
              "evidence": "The sheet's first rule for the power session is written in capitals: BATTERY OUT UNTIL THE WIRING IS CHECKED TWICE."
            },
            {
              "q": "The report says the battery is dangerous 'if it is shorted'. What does shorted mean as it is used here?",
              "choices": [
                "Its two sides joined by something, so all the energy comes out at once",
                "Run down until there is almost nothing left in it",
                "Cut down to a smaller size in order to save weight",
                "Left with part of its outer cover missing"
              ],
              "answer": 0,
              "hint": "The rest of that sentence tells you what the joining looks like: a stray wire, a dropped screw. Then read what happens in the seconds afterward.",
              "skill": "Word meanings",
              "evidence": "if the plus and minus are joined by a stray wire or a dropped screw, it can get hot enough to burn in seconds"
            },
            {
              "q": "Paragraphs 1 and 3 together explain why every wire is soldered and tied down instead of twisted and left loose. Why?",
              "choices": [
                "A joint that shakes loose in a hit becomes exactly the stray wire that can short the battery.",
                "Soldered joints weigh a little less than twisted ones, and every gram saved on the wiring is a gram left over for the attack tool.",
                "Twisted wires cannot carry enough power to run two motors and an attack tool at the same time without heating up and melting.",
                "The judges inspect every joint on the robot at the arena door and will not pass a robot whose wires have only been twisted together."
              ],
              "answer": 0,
              "hint": "Paragraph one names one particular thing that can short a battery. Paragraph three says what a twisted joint does in the first hit. Lay those two side by side.",
              "skill": "Reading between the lines",
              "evidence": "The wiring is soldered, not twisted, because a twisted joint shakes loose in the first hit, and every wire is tied down so it cannot reach a spinning part."
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
              "Fractions with the same bottom: add or take away the tops; the bottom stays."
            ],
            "example": "4 × 6 = 24."
          },
          "problems": [
            {
              "q": "The builder counted 5 wires yesterday and three times as many today. How many wires today?",
              "answer": "15",
              "hint": "Three times 5: 5 + 5 + 5.",
              "skill": "Multiplying"
            },
            {
              "q": "The builder packs 35 wires into circuits of 5. How many circuits is that?",
              "answer": "7",
              "hint": "How many 5s make 35?",
              "skill": "Dividing"
            },
            {
              "q": "The builder starts with 211 wires and uses 127. How many are left?",
              "answer": "84",
              "hint": "211 − 127.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "2/4 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "2/4",
              "hint": "The whole job is 4/4. Take 2/4 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square wire mat is 8 squares on each side. How many squares is that?",
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
              "Dividing by a decimal: move the point in both numbers the same number of places until you divide by a whole number. 7.2 ÷ 0.8 is 72 ÷ 8 = 9.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "6 + 4 × 7 = 34: multiply first, then add."
          },
          "problems": [
            {
              "q": "The builder has 97.15 minutes to fit. Each part takes 3.35 minutes. How many parts is that enough for?",
              "answer": "29",
              "hint": "Move both points 2 places to the right: 9715 ÷ 335.",
              "skill": "Decimals"
            },
            {
              "q": "12 of the 120 wires are set aside. What percent is that? (write just the number)",
              "answer": "10",
              "accept": [
                "10%"
              ],
              "hint": "12 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 3 red wires there are 4 black wires. There are 20 black wires. How many red wires?",
              "answer": "15",
              "hint": "20 ÷ 4 = 5 groups. Each group has 3 red wires.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder works out 5 + 9 × 9. What is it?",
              "answer": "86",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 750 − x = 348",
              "answer": "402",
              "hint": "x is what is left when 348 is taken off 750.",
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
            "example": "38 − 4x = 10, so 4x = 28, so x = 7."
          },
          "problems": [
            {
              "q": "One part needs 2.25 minutes. How many minutes do 20 parts need?",
              "answer": "45",
              "hint": "20 × 2.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder counted 40 wires on the first pass and 32 on the second. By what percent did the count change? (write just the number)",
              "answer": "20",
              "accept": [
                "20%",
                "-20",
                "−20",
                "-20%",
                "−20%"
              ],
              "hint": "The change is 8. 8 out of 40, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ledger reads −12 wires. How many wires must be added to bring it back to zero?",
              "answer": "12",
              "hint": "From −12 up to 0.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 33 − 3x = 6",
              "answer": "9",
              "hint": "Move 3x to the right and 6 to the left: 3x = 27.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 5 feet. The pit wall is really 15 feet long. How many inches is it on the plan?",
              "answer": "3",
              "hint": "15 ÷ 5.",
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
              "q": "The builder starts with 31 wires and uses 3 every hour. How many are left after 7 hours?",
              "answer": "10",
              "hint": "3 × 7 = 21 used, taken off 31.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 7 small cubes along every edge. How many small cubes make it up?",
              "answer": "343",
              "hint": "7³ means 7 × 7 × 7.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 37-foot cable runs from the top of a post to a point 35 feet away on the ground. How tall is the post, in feet?",
              "answer": "12",
              "hint": "a² = c² − b² = 1369 − 1225 = 144. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x = x + 40",
              "answer": "8",
              "hint": "Take x off both sides: 5x = 40. Then divide by 5.",
              "skill": "Equations"
            },
            {
              "q": "A spool holds 400,000 inches of wire. Written as 4 × 10 to a power, what is the power?",
              "answer": "5",
              "hint": "Count the zeros after 4.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "A step can cancel a step",
          "points": [
            "Read every step before you start.",
            "When a step says to ignore an earlier one, go back to the total you had before that step and do what the new step says instead."
          ],
          "example": "'Start with 10. Add 4. Ignore that, and take away 3 instead.' You end on 7, not 11 and not 8."
        },
        "skill": "Following directions",
        "steps": [
          "Write the battery's volts: 12.",
          "Multiply by the number of speed controllers between the battery and the motors: 2.",
          "Add the number of receivers listening for the driver: 1.",
          "Multiply by the number of times the builder checks the wiring: 2.",
          "Ignore step 4. A check is counted, not multiplied, so go back to your step 3 total and add 2 instead.",
          "Type the number you have now."
        ],
        "prompt": "Your answer:",
        "answer": "27",
        "hint": "Step 5 turns the multiply in step 4 into something much smaller. Your starting point is the total you had at the end of step 3."
      }
    },
    {
      "id": "arena-4",
      "title": "The Attack Tool",
      "recon": {
        "lesson": {
          "title": "Choosing between designs",
          "points": [
            "When the sheet lists kinds of something, each kind with its pros and cons is a detail.",
            "Speeds in revolutions per minute are exact.",
            "'Why this one' wants the sheet's reason."
          ],
          "example": "'A canoe is light but tips easily; a raft is steady but slow.' Each kind has a plus and a minus."
        },
        "title": "Build Sheet: The Lifter",
        "passage": [
          "There are three kinds of attack tool in a three-pound league. A spinner, a steel bar or disc spun by its own motor at ten thousand revolutions a minute, hits harder than anything else and throws robots across the arena. It also throws itself apart when it hits something solid, and it uses most of the battery. A wedge is no attack tool at all, just the sloped front. It gets under other robots and pushes them into the wall. A wedge wins more often than people expect. And a lifter, an arm that flips up, tips other robots over, which for a robot that cannot drive upside down is the end of the match.",
          "The sheet chooses the lifter, for a reason that is about weight. Four hundred and ten grams are left. A spinner needs a heavy bar and a big motor and would go over the limit. A lifter is a small motor, a gearbox like the drive's, and an aluminum arm, three hundred grams together. The arm flips up ninety degrees in half a second and drops back. Against a spinner it keeps its distance. When the spinner slows, the lifter flips. Against another wedge it gets under first, because its front edge is lower. Then the arm flips.",
          "The arm goes on a hinge at the front of the wedge, the motor and gearbox tuck into the box at the back, and a wire runs to a third speed controller. The builder tests it with the robot on a stand, wheels off the floor, because a lifter that fires while the robot is on the bench launches the bench. It flips up, drops, flips up. The scale says 1,250 grams. One hundred and ten under the limit, and the sheet says to leave it there, because a robot at the limit exactly has no room for a repair that adds a screw."
        ],
        "questions": [
          {
            "q": "What are the three kinds of attack tool?",
            "choices": [
              "Spinner, wedge and lifter",
              "Hammer, saw and drill",
              "Spinner, hammer and flame-thrower",
              "Blade, shield, ram and battering bar"
            ],
            "answer": 0,
            "hint": "Paragraph 1 describes each of the three.",
            "skill": "Finding details"
          },
          {
            "q": "How much does the lifter weigh?",
            "choices": [
              "Thirty grams",
              "Four hundred and ten grams",
              "Three hundred grams",
              "A thousand grams, most of the robot"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence with 'three hundred grams together'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what are 'revolutions'?",
            "choices": [
              "Wars",
              "Grams of the steel bar",
              "Full turns of a spinning part",
              "The points the judges give for damage and control"
            ],
            "answer": 2,
            "hint": "'Ten thousand revolutions a minute' describes how fast the spinner spins.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the sheet choose the lifter over the spinner?",
            "choices": [
              "Because a spinner throws itself apart the moment it hits something solid and uses up most of the battery",
              "Because a spinner is against the rules of the three-pound league and the judges would never allow one",
              "Because the arm flips up ninety degrees in half a second and then drops back down ready for the next",
              "Because only 410 grams are left, and a spinner's heavy bar and big motor would go over the limit"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the first three sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The three hundred grams of motor, gearbox and aluminum arm that make the lifter",
              "How a lifter beats a spinner by keeping its distance until the steel bar slows",
              "Fitting and testing the lifter, and why the robot is left under the limit",
              "The three kinds of attack tool allowed in a three-pound league and what each one does"
            ],
            "answer": 2,
            "hint": "Paragraph 3 fits the arm, tests it, weighs it, and explains the margin.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Attack-tool math",
          "points": [
            "Grams under the limit: limit minus weight.",
            "Revolutions a minute ÷ 60: a second.",
            "Part of a full turn: degrees ÷ 360, so 180 degrees is half a turn.",
            "Two-step: flips per match at one every 5 seconds."
          ],
          "example": "6,000 revolutions a minute is 6,000 ÷ 60 = 100 a second."
        },
        "problems": [
          {
            "q": "The robot is at 1,250 grams and the limit is 1,360. How many grams under the limit is it?",
            "answer": "110",
            "hint": "1,360 − 1,250.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "A spinner spins at 10,000 revolutions a minute. How many revolutions a second is that, rounded down?",
            "answer": "166",
            "hint": "10,000 ÷ 60.",
            "skill": "Dividing"
          },
          {
            "q": "The lifter flips up 90 degrees. What fraction of a full 360-degree turn is that?",
            "answer": "1/4",
            "accept": [
              "90/360"
            ],
            "hint": "90 out of 360.",
            "skill": "Fractions"
          },
          {
            "q": "The lifter can fire once every 5 seconds. How many times could it fire in a 180-second match?",
            "answer": "36",
            "hint": "180 ÷ 5.",
            "skill": "Dividing"
          },
          {
            "q": "The lifter is 300 grams: a motor, a gearbox and an arm. If the motor is 120 and the gearbox 50, how much is the arm?",
            "answer": "130",
            "hint": "300 − 120 − 50.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Take the word at its sentence",
            "points": [
              "Cover the word or phrase, read the sentence with a gap in it, and ask what you would put there.",
              "Watch for a condition tied to a phrase. 'For a robot that cannot drive upside down' narrows what the phrase is claiming.",
              "Put your choice back in and read the whole sentence again. Three of the four will overshoot what the report actually said."
            ],
            "example": "'For anyone without a boat, the river is a wall.' Not a wall for everybody. The phrase claims only what it says it claims."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "The attack tool was chosen not for how hard it hits but for what would still fit inside the weight that was left over.",
                "A spinner can turn its bar at ten thousand revolutions a minute.",
                "There is always a right answer to a design problem if you think about it long enough, and a careful builder will find it before the building starts.",
                "The build sheet picked the attack tool that does the most damage of the three, since a spinner throws other robots clear across the arena."
              ],
              "answer": 0,
              "hint": "Three attack tools weighed against each other, a number of grams left over, and a decision to stop a hundred and ten under. Ask what governs all three.",
              "skill": "Central idea and evidence",
              "evidence": "The sheet chooses the lifter, for a reason that is about weight."
            },
            {
              "q": "Claim: the weight limit, not the fighting, is what ruled the spinner out. Which sentence from the report best supports that claim?",
              "choices": [
                "A spinner, a steel bar or disc spun by its own motor at ten thousand revolutions a minute, hits harder than anything else and throws robots across the arena.",
                "One hundred and ten under the limit, and the sheet says to leave it there, because a robot at the limit exactly has no room for a repair that adds a screw.",
                "A spinner needs a heavy bar and a big motor and would go over the limit.",
                "Four hundred and ten grams are left."
              ],
              "answer": 2,
              "hint": "The claim is about why the spinner was never built. Two of these give a count or a number without saying what it rules out, and one is about fighting a spinner rather than building one.",
              "skill": "Finding details",
              "evidence": "A spinner needs a heavy bar and a big motor and would go over the limit."
            },
            {
              "q": "What job does the first paragraph do for the second one?",
              "choices": [
                "It explains how the arm is hinged to the front of the wedge and where the motor and gearbox are tucked away.",
                "It gives the order in which the attack tool parts are fitted.",
                "It lays out the three options so that the choice made next can be judged against them.",
                "It warns the builder never to test the arm on the bench."
              ],
              "answer": 2,
              "hint": "Nothing is chosen in the first paragraph at all. Ask what a paragraph is for when it does nothing but set the options out.",
              "skill": "Author's purpose and structure",
              "evidence": "There are three kinds of attack tool in a three-pound league."
            },
            {
              "q": "The report says a lifter tips other robots over, 'which for a robot that cannot drive upside down is the end of the match'. What is that phrase telling you about being flipped?",
              "choices": [
                "Every match in this league ends the moment one robot is turned over onto its back, whatever it can still do",
                "A robot that has been flipped over is always damaged so badly that it cannot be repaired in the pit",
                "The lifter has to flip its opponent over before the three minutes of the match have run out",
                "Such a robot has effectively lost, without anything on it being broken"
              ],
              "answer": 3,
              "hint": "Notice the condition tied to it: for a robot that cannot drive upside down. The phrase is about what that robot can still do, not about damage.",
              "skill": "Word meanings",
              "evidence": "And a lifter, an arm that flips up, tips other robots over, which for a robot that cannot drive upside down is the end of the match."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the sheet says to leave the robot a hundred and ten grams under rather than adding more. Why?",
              "choices": [
                "The lifter arm would move too slowly to be any use if the robot were heavier, since the same small motor has to swing all of that extra weight.",
                "The judges award points to robots that come in under the limit, so a robot with grams to spare starts each match already ahead on the sheet.",
                "A repair between rounds can add a screw or a plate, and a robot already at the limit would fail the scale afterward.",
                "The battery cannot drive a robot heavier than 1,250 grams, so the sheet stops there to keep both motors running for the whole three minutes."
              ],
              "answer": 2,
              "hint": "Paragraph two says the attack tool was chosen to fit inside the grams left. Paragraph three says what a robot at the limit exactly has no room for. Read that last clause slowly.",
              "skill": "Reading between the lines",
              "evidence": "because a robot at the limit exactly has no room for a repair that adds a screw"
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
              "q": "The builder lays the screws out in 2 rows of 6. How many screws is that?",
              "answer": "12",
              "hint": "2 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "30 screws are set out in 5 equal rows. How many screws are in each row?",
              "answer": "6",
              "hint": "30 split into 5 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 369 grams, then 170 more are added and 77 are taken off. What does the log show now?",
              "answer": "462",
              "hint": "Add 369 and 170 first, then take 77 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 1/6 + 2/6 (write a fraction)",
              "answer": "3/6",
              "hint": "Same bottom. 1 + 2 on top.",
              "skill": "Fractions"
            },
            {
              "q": "The plan calls for 700 grams. 380 are done and 77 more are under way. How many are still untouched?",
              "answer": "243",
              "hint": "Take 380 off 700, then take 77 off that.",
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
            "example": "(3 + 6) × 2 = 18: parentheses first, then multiply."
          },
          "problems": [
            {
              "q": "The robot crosses 5/8 of the arena in 15/16 of a minute. At that rate, how much of the arena does it cross in one minute? (write a fraction)",
              "answer": "2/3",
              "hint": "For one minute, divide the amount by the time: 5/8 ÷ 15/16 = 5/8 × 16/15. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "20% of the grams counted is 8. How many were counted in all?",
              "answer": "40",
              "hint": "8 is 20 hundredths of the whole: 8 ÷ 20 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder counts 27 screws and 36 washers. In its simplest form, what is the ratio of screws to washers? (write it like 2:3)",
              "answer": "3:4",
              "accept": [
                "3 to 4"
              ],
              "hint": "Divide both by 9.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder works out (7 + 5) × 9. What is it?",
              "answer": "108",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 2x = 418",
              "answer": "209",
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
              "Two minus signs make a plus: (−3) × (−5) = 15, and (−15) ÷ (−3) = 5. One minus sign makes a minus.",
              "A two-step equation: undo the last step first. In (x + 5) × 3 = 21, divide by 3, then take off 5."
            ],
            "example": "(x + 5) × 3 = 21, so x + 5 = 7, so x = 2."
          },
          "problems": [
            {
              "q": "The builder has 54 minutes to spend and each part takes 2.25. How many parts is that enough for?",
              "answer": "24",
              "hint": "54 ÷ 2.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "After trimming, a bracket's weight fell by 25% to 30 grams. What did it weigh before, in grams?",
              "answer": "40",
              "hint": "30 is 75% of the old weight.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The attack arm lowers from its top position, a change of −64 centimeters, in equal steps of −4 centimeters. How many steps is that? Work it out as (−64) ÷ (−4).",
              "answer": "16",
              "hint": "64 ÷ 4, and two minus signs make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 29) × 9 = 297",
              "answer": "4",
              "hint": "Divide both sides by 9 first, then take 29 off.",
              "skill": "Equations"
            },
            {
              "q": "A round practice mat has a radius of 20 inches. Using 3.14 for pi, what is its area in square inches?",
              "answer": "1256",
              "hint": "Area = 3.14 × radius × radius: 3.14 × 20 × 20.",
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
            "example": "y = 6x + 9 when x = 5: 6 × 5 + 9 = 39."
          },
          "problems": [
            {
              "q": "The number of practice laps the robot has run follows the rule y = 8x + 15, where x is the hour. What is y when x = 8?",
              "answer": "79",
              "hint": "Put 8 in for x: 8 × 8 + 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube has a volume of 512 cubic feet. How long is one edge, in feet?",
              "answer": "8",
              "hint": "What number times itself twice over makes 512?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot cable reaches the top of an 8-foot post. How far is the bottom end of the cable from the base, in feet?",
              "answer": "15",
              "hint": "b² = c² − a² = 289 − 64 = 225. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x + 21 − 3x = 33",
              "answer": "4",
              "hint": "Collect the x's first: 3x + 21 = 33.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 5 feet and is 3 feet deep. Using 3.14 for pi, what is its volume in cubic feet?",
              "answer": "235.5",
              "hint": "Volume = 3.14 × radius × radius × depth: 3.14 × 5 × 5 × 3.",
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
          "example": "'Add 90. Instead, subtract 90' means subtract."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of kinds of attack tool on the sheet: 3.",
          "Multiply by the weight of the lifter in grams: 300.",
          "Add the grams under the limit: 110.",
          "Instead of adding in step 3, go back to your answer from step 2 and subtract 110.",
          "Type the number you land on."
        ],
        "prompt": "Your answer:",
        "answer": "790",
        "hint": "Step 4 switches the add off. Go back to your step 2 total and take 110 away instead."
      }
    },
    {
      "id": "arena-5",
      "title": "First Match",
      "recon": {
        "lesson": {
          "title": "Putting the build together",
          "points": [
            "The last sheet looks back over the whole build. A 'mostly about' question wants the big point, not one detail.",
            "Times and scores are details.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'The whistle blew after ninety seconds.' How long? Ninety seconds."
        },
        "title": "Build Sheet: Three Minutes",
        "passage": [
          "At the arena door the robot goes on the scale: 1,250 grams, under. The judge flips the red switch off and on and watches the wheels stop and start. The radio is checked against everyone else's so that no two drivers are on the same channel. Then the robot goes in the box, the other robot, a spinner with a steel bar, goes in the far corner, the lid comes down, and the announcer counts three, two, one. The first match of the robot's life is three minutes long. The builder's hands are wet on the sticks.",
          "The spinner comes straight across the floor with its bar a blur, and the builder does the one thing the sheet said: back away and wait. The bar hits the wall, throws sparks, and slows, and in the few seconds it takes to spin back up the lifter is under it and the arm fires. The spinner goes over on its back, bar still turning, digging a groove in the floor. It cannot right itself. Ten seconds. The judge counts to ten with a hand up. Match.",
          "The build went in the only order it could. The frame, because everything bolts to it; the drive, because a robot that cannot move cannot fight; the power, because the wiring has to be right before anything spins. Then the attack tool, last of the parts, because it had to fit in the weight the others left; and the match, because a robot that has not fought is a sculpture. The builder writes the final line on the sheet, in the weight column, because that is the column that mattered all week: 1,250 grams, three rounds, still driving."
        ],
        "questions": [
          {
            "q": "What did the judge check at the arena door?",
            "choices": [
              "The paint, the wheels and the sharpness of all the edges",
              "The weight, the red switch, and the radio channel",
              "The driver's age and how many matches they had won before",
              "The lifter's speed and how far up the arm can flip itself"
            ],
            "answer": 1,
            "hint": "The first three sentences of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How long did the judge count after the spinner went over?",
            "choices": [
              "Three seconds, with a hand up",
              "Ten seconds",
              "One minute, to the bell",
              "Three minutes, the whole match"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the last two sentences.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does 'channel' mean about the radios?",
            "choices": [
              "The frequency a radio uses, which must be different for each driver",
              "A river",
              "A TV station",
              "A groove dug in the arena floor"
            ],
            "answer": 0,
            "hint": "The sentence says 'no two drivers are on the same channel'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the builder back away when the spinner came across the floor?",
            "choices": [
              "Out of fear",
              "Because the sheet said to wait for the spinner to hit something and slow down, then flip it",
              "Because the battery was low",
              "Because a spinner's bar throws robots across the arena and the wedge cannot get under it at speed"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the first two sentences, and the plan from yesterday's sheet.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "Why the build went in that order, and the last line on the sheet",
              "The first match, from the count of three down to the judge's count of ten",
              "How the spinner went over onto its back and could not right itself again",
              "The floor"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 3 says the build 'went in the only order it could'.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Match math",
          "points": [
            "Seconds of match minus seconds used: time left.",
            "Different bottoms: make them the same first. 1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
            "Multiplying a big number: split it, so 4 × 230 is 4 × 200 plus 4 × 30.",
            "Two-step: seconds to spin back up, then flips possible."
          ],
          "example": "180 − 65 = 115 seconds left in the match."
        },
        "problems": [
          {
            "q": "The match lasted 40 seconds of a possible 180. How many seconds were left unused?",
            "answer": "140",
            "hint": "180 − 40.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The robot spent 2/3 of the match spinning and 1/4 of it backing away. How much of the match is that? (write a fraction)",
            "answer": "11/12",
            "hint": "Make the bottoms the same: 2/3 is 8/12 and 1/4 is 3/12. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The spinner takes 4 seconds to spin back up after a hit. In a 180-second match, how many times could it spin up from a stop?",
            "answer": "45",
            "hint": "180 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "The judge's count of 10 seconds is what fraction of a 180-second match? (write a fraction with 180 on the bottom)",
            "answer": "10/180",
            "accept": [
              "1/18"
            ],
            "hint": "10 over 180.",
            "skill": "Fractions"
          },
          {
            "q": "The robot weighed 1,250 grams. A pound is about 454 grams. About how many grams is 3 pounds?",
            "answer": "1362",
            "accept": [
              "1,362"
            ],
            "hint": "3 × 454: 3 × 400 = 1,200, 3 × 54 = 162.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Neither paragraph alone",
            "points": [
              "That last question is built so that no paragraph answers it by itself. Take one fact from each of two.",
              "Say fact, fact, then 'so'. Whatever comes after 'so' is what you are looking for among the choices.",
              "If a choice needs a fact the report never gives, it is out, however sensible it sounds standing on its own."
            ],
            "example": "Paragraph one: the gate is checked before every race. Paragraph three: the race was decided by a tenth of a second. So the check is not a formality. Neither line says that alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The judge at the door flipped the red switch off and on and watched the wheels stop and start before the robot went into the box.",
                "The match was won by decisions the build had already made, not by anything worked out during the three minutes.",
                "Preparation matters more than talent in every kind of competition, and anyone who plans carefully enough will win in the end.",
                "The builder won by driving straight at the spinner as it came across the floor and getting under the bar before it could spin back up."
              ],
              "answer": 1,
              "hint": "A check at the door, one instruction obeyed inside the box, and a build order that could not have been any different. Ask what all three say about where the win came from.",
              "skill": "Central idea and evidence",
              "evidence": "the builder does the one thing the sheet said: back away and wait"
            },
            {
              "q": "Claim: the very thing that made the spinner dangerous is what lost it the match. Which sentence from the report best supports that claim?",
              "choices": [
                "Then the robot goes in the box, the other robot, a spinner with a steel bar, goes in the far corner, the lid comes down, and the announcer counts three, two, one.",
                "The bar hits the wall, throws sparks, and slows, and in the few seconds it takes to spin back up the lifter is under it and the arm fires.",
                "The frame, because everything bolts to it; the drive, because a robot that cannot move cannot fight; the power, because the wiring has to be right before anything spins.",
                "The builder writes the final line on the sheet, in the weight column, because that is the column that mattered all week: 1,250 grams, three rounds, still driving."
              ],
              "answer": 1,
              "hint": "The claim needs the strength and the cost of it in one sentence. Look for the one that shows the bar doing its work and then leaving a gap behind it.",
              "skill": "Finding details",
              "evidence": "The bar hits the wall, throws sparks, and slows, and in the few seconds it takes to spin back up the lifter is under it and the arm fires."
            },
            {
              "q": "Why does the report end by listing the build in order with a reason attached to each part?",
              "choices": [
                "To show the order was set by the work itself, and that the match was the last item on the same list.",
                "To introduce the parts of the robot for the first time.",
                "To explain the checks the judges make at the arena door.",
                "To set this robot against the spinner it fought and compare them."
              ],
              "answer": 0,
              "hint": "Nothing in that paragraph is new. Notice that every item is followed by the word 'because', and ask what a list built like that is arguing.",
              "skill": "Author's purpose and structure",
              "evidence": "The build went in the only order it could"
            },
            {
              "q": "The report says 'a robot that has not fought is a sculpture'. What is that line saying?",
              "choices": [
                "The robot was built to be looked at on a shelf rather than driven in a match",
                "Until it fights it is only an object, not a working machine",
                "A robot that loses its first match was not worth making",
                "The builder worked from a plan drawn up by an artist"
              ],
              "answer": 1,
              "hint": "A sculpture is finished, admired, and completely still. Ask what this robot would be missing if it never went into the box.",
              "skill": "Word meanings",
              "evidence": "and the match, because a robot that has not fought is a sculpture"
            },
            {
              "q": "Paragraphs 1 and 2 together suggest why the radio channels are checked against everyone else's before the match. Why does that check matter?",
              "choices": [
                "The whole match turned on one command given at the right second, and a shared channel would have taken that control away.",
                "The judges give points to the driver with the clearest radio signal, so a channel nobody else is using is worth something on the scorecard.",
                "The radio has to be checked because it adds weight to the robot.",
                "Two robots on the same channel would be counted by the judges as a single entry, and one of the two would be sent back out of the box."
              ],
              "answer": 0,
              "hint": "Paragraph one tells you what the check prevents. Paragraph two shows what the driver had to do at exactly the right moment. Put the two together and the check stops looking like a formality.",
              "skill": "Reading between the lines",
              "evidence": "The radio is checked against everyone else's so that no two drivers are on the same channel."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 6 × 8 means 6 groups of 8.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions: the bottom is how many equal parts; the top is how many are done."
            ],
            "example": "6 × 8 = 48."
          },
          "problems": [
            {
              "q": "The robot lands 7 hits in every match, and there are 7 matches. How many hits is that?",
              "answer": "49",
              "hint": "7 groups of 7, so 7 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "The builder splits 98 points in half. How many points is one half?",
              "answer": "49",
              "hint": "Half of 98.",
              "skill": "Dividing"
            },
            {
              "q": "The builder needs 700 points and has 497. How many more are needed?",
              "answer": "203",
              "hint": "700 − 497.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the builder has finished 6 of them. What fraction is done? (write a fraction)",
              "answer": "6/8",
              "hint": "6 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 5 squares wide and 3 squares long. The builder has covered 5 squares. How many squares are left to cover?",
              "answer": "10",
              "hint": "5 × 3 squares in all, then take 5 off.",
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
            "example": "5 × 4 − 3 × 2 = 14: both multiplications first, then subtract."
          },
          "problems": [
            {
              "q": "The plan allows 275.75 minutes. The builder uses 86.45 minutes on the first part and 117.35 on the second. How many minutes are left?",
              "answer": "71.95",
              "hint": "Add the two amounts used first, then take that from 275.75. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Of 200 points, 25% are struck off the list. How many are left on it?",
              "answer": "150",
              "hint": "25% of 200 is 50. Take that off 200.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder shares 12 rounds between two teams in the ratio 1 to 3. How many does the smaller share get?",
              "answer": "3",
              "hint": "1 + 3 = 4 parts. 12 ÷ 4 = 3 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder works out 6 × 7 − 1 × 2. What is it?",
              "answer": "40",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 246 + 49 = 600",
              "answer": "305",
              "hint": "Add 246 and 49 first, then take that off 600.",
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
              "A two-step equation: undo the outside step first. In 2(x + 5) = 18, divide by 2, then take off 5."
            ],
            "example": "2(x + 5) = 18, so x + 5 = 9, so x = 4."
          },
          "problems": [
            {
              "q": "16 parts took 20 minutes. At the same rate, how many minutes would 28 parts take?",
              "answer": "35",
              "hint": "One part takes 20 ÷ 16 = 1.25. Then × 28.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The robot lost 20% of its 320 points in a penalty. How many points was that?",
              "answer": "64",
              "hint": "20% of 320: 20/100 × 320.",
              "skill": "Ratios and percent"
            },
            {
              "q": "One lap timer reads −7 seconds (7 seconds under the target) and another reads −12 seconds. How many seconds apart are they?",
              "answer": "5",
              "hint": "From −12 up to −7.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 4(x + 23) = 140",
              "answer": "12",
              "hint": "Divide both sides by 4 to get x + 23 = 35.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 3 inches stand for 60 feet. How many feet does 1 inch stand for?",
              "answer": "20",
              "hint": "60 ÷ 3.",
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
            "example": "Start at 5 and add 3 each step: the 7th number is 5 + 3 × 6 = 23."
          },
          "problems": [
            {
              "q": "The count of points goes 8, 12, 16, 20, and on. What is the 11th number in the list?",
              "answer": "48",
              "hint": "It starts at 8 and adds 4 each step. The number you want is 10 steps on from 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (9 × 5)²?",
              "answer": "2025",
              "hint": "9 × 5 = 45 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 8 and 15 feet. How long is its longest side, in feet?",
              "answer": "17",
              "hint": "8² + 15² = 289. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 3x − x = 16",
              "answer": "8",
              "hint": "3 − 1 = 2, so 2x = 16.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 8 × 10^3 or 7 × 10^4? Write the bigger one out in full.",
              "answer": "70000",
              "hint": "Compare the powers of 10 first: 10^4 is 10,000 and 10^3 is 1,000.",
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
            "If the last step asks for a name, type a word, not your number."
          ],
          "example": "'Type the name of the robot, in capital letters' means a word, not your number."
        },
        "skill": "Following directions",
        "steps": [
          "Write the robot's weight in grams: 1,250.",
          "Subtract the seconds the judge counted with a hand up: 10.",
          "Divide by 10.",
          "Add the number of rounds: 3.",
          "Ignore steps 1 to 4. Type the name of the column on the sheet that mattered all week, one word, in capital letters."
        ],
        "prompt": "Your answer:",
        "answer": "WEIGHT",
        "accept": [
          "weight",
          "Weight",
          "the weight column",
          "WEIGHT COLUMN",
          "weight."
        ],
        "hint": "Step 5 throws away the arithmetic. Look at the columns on the build sheet and find the one that mattered all week."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
