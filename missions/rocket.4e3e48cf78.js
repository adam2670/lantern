// ODYSSEY — campaign "rocket". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "rocket",
  "ready": true,
  "kind": "build",
  "readingLevel": {
    "fk": 5.8,
    "cl": 5.9
  },
  "grade": "5",
  "kindLabel": "Build",
  "form": "countdown",
  "title": "Launch Pad",
  "subtitle": "Pad 3, a spaceport on the coast",
  "pitch": "Five sessions to stack a rocket from the pad up: the first stage and its engines, the second stage, the capsule, the fuel, and the count to zero. The rocket is the progress bar.",
  "scene": "assets/scene-rocket.jpg",
  "buildArt": "rocket",
  "progress": {
    "unit": "parts",
    "total": 5
  },
  "dayNoun": "Session",
  "stageNoun": "Part",
  "finalNoun": "Launch",
  "stages": [
    "First stage",
    "Second stage",
    "Capsule",
    "Fuel",
    "Launch"
  ],
  "reconNoun": "Build Sheet",
  "legs": {
    "recon": "Build sheet",
    "nav": "Pad math",
    "orders": "Stack orders",
    "debrief": "Pad check"
  },
  "rules": [
    "Stuck on a value? <b>Flag it</b> and move on. Pending items come back at the pad check.",
    "Build sheet: read the questions <b>before</b> the sheet.",
    "Stack orders: read <b>every</b> step before you lift anything."
  ],
  "fact": "A rocket is mostly a tank. Nine tenths of the weight sitting on the pad is fuel, and almost all of it is gone in the first few minutes. The part that reaches orbit is the size of a van.",
  "finale": {
    "prompt": "Liftoff, and the rocket is clear of the tower. Which color goes on the pad crew's mission patch?",
    "options": [
      {
        "label": "Flame orange",
        "color": "#F28C28"
      },
      {
        "label": "Sky blue",
        "color": "#4FD1FF"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      },
      {
        "label": "Gold",
        "color": "#FFB454"
      }
    ],
    "done": "Sew it on. Then start the checklist for the next one. The pad is never empty for long."
  },
  "patrols": [
    {
      "id": "rocket-1",
      "title": "The First Stage",
      "recon": {
        "lesson": {
          "title": "Questions first, then the sheet",
          "points": [
            "Read the five questions before the sheet. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Big numbers of tons and feet are details. Read them exactly.",
            "The answer is always on the sheet. You never have to guess."
          ],
          "example": "Question: 'How many wheels does the truck have?' Hunt for 'wheels', then read that whole sentence."
        },
        "title": "Build Sheet: Mostly a Tank",
        "passage": [
          "A rocket goes up because it throws something down very fast. The engines at the bottom burn fuel and push the hot gas out of their nozzles. That pushes the rocket the other way. It is the same way you slide backward on a skateboard when you throw a heavy ball forward. To get to orbit a rocket has to reach about seventeen thousand miles an hour. To do that it has to throw a very great deal of gas, which means it has to carry a very great deal of fuel. The rocket on the pad weighs about five hundred tons, and about four hundred and fifty tons of that is fuel.",
          "The first stage is the biggest piece: a tank two hundred feet tall and twenty feet across, with four engines in a square at the bottom. It does the hardest work of the flight, lifting everything off the pad and up through the thick air of the first thirty miles. It burns for about two and a half minutes. Then it is empty, and an empty tank is dead weight, so it lets go and falls away, and the smaller second stage above it lights and carries on. That is why rockets come in stages. Nobody wants to carry an empty tank to orbit.",
          "Session one is the first stage onto the pad. It arrives on its side on a transporter. A crane taller than the rocket lifts it upright. Then it is set on four hold-down posts, big steel clamps that will grip it until the engines are at full power and then let go all at once. The engineer checks the four engines for the last time from a platform under them. They are four bells of metal, each taller than a person. The sheet gets its first signature: stage one vertical, engines four, holds four, go."
        ],
        "questions": [
          {
            "q": "How much of the rocket's five hundred tons is fuel?",
            "choices": [
              "Fifty tons, about a tenth of the rocket",
              "Five tons, the weight of the capsule alone",
              "About four hundred and fifty tons",
              "None of it, because the tanks are empty on the pad"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How many engines does the first stage have?",
            "choices": [
              "One",
              "Two",
              "Four",
              "Nine"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the first sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what are 'hold-down posts'?",
            "choices": [
              "Big steel clamps that grip the rocket until the engines are at full power",
              "Fence posts around the pad",
              "The four legs of the transporter that the stage arrives on",
              "The four bells of metal underneath the stage, each one of them taller than a person"
            ],
            "answer": 0,
            "hint": "The sentence 'four hold-down posts, big steel clamps...'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why do rockets come in stages?",
            "choices": [
              "Because one tank would be too tall",
              "Because the engines get hot",
              "Because the crane is small",
              "Because an empty tank is dead weight, so it is dropped instead of carried to orbit"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentences about the empty tank.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The crane",
              "The first stage, its four engines and the two and a half minutes it burns",
              "How the first stage is lifted upright and set on the pad",
              "How a rocket goes up and why it is mostly fuel"
            ],
            "answer": 3,
            "hint": "Paragraph 1 explains the push and the fuel.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Pad math",
          "points": [
            "How many times bigger: divide the big number by the small one.",
            "Minutes to seconds: × 60.",
            "Common multiples: count by both numbers. 3, 6, 9, 12 and 4, 8, 12: they meet at 12.",
            "Same bottom: add the tops, so 1/8 + 4/8 = 5/8."
          ],
          "example": "A tower 240 feet tall and 20 feet wide: 240 ÷ 20 = 12 times taller than wide."
        },
        "problems": [
          {
            "q": "One gauge is read every 6 minutes and another every 8 minutes. Both were read at the start of the shift. How many minutes until both are read at the same time again?",
            "answer": "24",
            "hint": "Count by 6s and by 8s. Which number is on both lists first?",
            "skill": "Multiplying"
          },
          {
            "q": "The first stage burns for 2 and a half minutes. How many seconds is that?",
            "answer": "150",
            "hint": "2 × 60 = 120, plus half a minute, 30.",
            "skill": "Multi-step problems"
          },
          {
            "q": "Orbit speed is about 17,000 miles an hour. A car on the highway does 70. How many times faster is orbit, rounded down?",
            "answer": "242",
            "hint": "17,000 ÷ 70 is 242 with some left over.",
            "skill": "Dividing"
          },
          {
            "q": "The first stage is 200 feet tall and 20 feet across. How many times taller than it is wide?",
            "answer": "10",
            "hint": "200 ÷ 20.",
            "skill": "Dividing"
          },
          {
            "q": "The engineer checked 2/5 of the bolts before lunch and 2/5 after. What fraction of the bolts is checked? (write a fraction)",
            "answer": "4/5",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The whole thing, not the loudest bit",
            "points": [
              "Read all three paragraphs, then say in one sentence what the report is about. Do that before you look at a single choice.",
              "The wrong answers to that first question are usually true. They are one paragraph's worth, or bigger than anything the report actually claims.",
              "Then four more moves: prove a claim with one line from the text, say what a paragraph is for, work a word out from its own sentence, and hold two paragraphs together for one conclusion."
            ],
            "example": "Three paragraphs about a ferry: why the town needs one, how the boat is built, who runs it in winter. 'The boat has two engines' covers one paragraph. 'Boats are useful' covers none of it."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The first stage burns for about two and a half minutes, then lets go and falls away, and the smaller second stage above it lights and carries on.",
                "Space travel is the greatest engineering achievement of the modern world, and no other machine ever built asks so much of the people who build it.",
                "Almost everything on the pad is fuel and the tank holding it, and that fact decides what the first stage is and what happens to it.",
                "The rocket carries its empty first stage with it all the way to orbit, since a tank two hundred feet tall is too big a piece to simply let go of."
              ],
              "answer": 2,
              "hint": "Give each paragraph a short label: why so much fuel, what the big tank does, how it goes on the pad. Find the choice that covers all three.",
              "skill": "Central idea and evidence",
              "evidence": "The rocket on the pad weighs about five hundred tons, and about four hundred and fifty tons of that is fuel."
            },
            {
              "q": "Claim: the first stage does the hardest part of the flight. Which sentence from the report best supports that claim?",
              "choices": [
                "It burns for about two and a half minutes.",
                "Then it is empty, and an empty tank is dead weight, so it lets go and falls away, and the smaller second stage above it lights and carries on.",
                "It does the hardest work of the flight, lifting everything off the pad and up through the thick air of the first thirty miles.",
                "The first stage is the biggest piece: a tank two hundred feet tall and twenty feet across, with four engines in a square at the bottom."
              ],
              "answer": 2,
              "hint": "Three of these are true and none of the three say a word about how difficult the work is. Look for the sentence that names the job and then weighs it.",
              "skill": "Finding details",
              "evidence": "It does the hardest work of the flight, lifting everything off the pad and up through the thick air of the first thirty miles."
            },
            {
              "q": "Why does a build sheet open with a paragraph about throwing hot gas out of a nozzle, before it describes any part of the rocket?",
              "choices": [
                "Because the amount of gas that has to be thrown is what explains why the first stage is mostly tank.",
                "Because the opening tells the reader how fast a rocket must go to reach orbit.",
                "Because it lists the tools used to lift the stage upright.",
                "Because it describes what the engineer checks under the engines before signing the sheet at the end of the session."
              ],
              "answer": 0,
              "hint": "The first paragraph finishes on a weight. The second paragraph opens on a tank. Ask what the first one had to establish for the second one to make sense.",
              "skill": "Author's purpose and structure",
              "evidence": "To get to orbit a rocket has to reach about seventeen thousand miles an hour. To do that it has to throw a very great deal of gas, which means it has to carry a very great deal of fuel."
            },
            {
              "q": "The report calls the emptied first stage 'dead weight'. What does dead weight mean as it is used here?",
              "choices": [
                "A load so heavy that nothing on the pad can lift it",
                "The weight of the rocket measured while it stands still",
                "The heaviest single piece anywhere in the stack",
                "Mass that is still being carried but has stopped doing any work"
              ],
              "answer": 3,
              "hint": "Nothing has died. Read the rest of the same sentence: the tank is empty, and then it goes. Ask what it has stopped being able to do.",
              "skill": "Word meanings",
              "evidence": "Then it is empty, and an empty tank is dead weight, so it lets go and falls away, and the smaller second stage above it lights and carries on."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the hold-down clamps do not release the instant the engines light. Why do they not?",
              "choices": [
                "The crane taller than the rocket has to be driven clear of the pad before the rocket is allowed to move at all, and that takes time.",
                "The clamps are what steer the rocket through the thick air of the first thirty miles, so they cannot let go until that climb is done.",
                "The engineer has to sign the sheet before the clamps can let go.",
                "Five hundred tons will not move until the engines are throwing gas hard enough to lift it, so the clamps wait for full power."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you what it takes to make a rocket move at all. Paragraph three tells you the exact moment the clamps let go. Lay those two facts side by side.",
              "skill": "Reading between the lines",
              "evidence": "is set on four hold-down posts, big steel clamps that will grip it until the engines are at full power and then let go all at once"
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
              "q": "Every first stage needs 4 engines, and there are 8 first stages. How many engines is that?",
              "answer": "32",
              "hint": "8 groups of 4, so 8 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "The engineer splits 64 engines in half. How many engines is one half?",
              "answer": "32",
              "hint": "Half of 64.",
              "skill": "Dividing"
            },
            {
              "q": "The engineer needs 600 tons of fuel and has 430. How many more tons are needed?",
              "answer": "170",
              "hint": "600 − 430.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 4 equal parts and the engineer has finished 3 of them. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "3 parts out of 4.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 7 squares wide and 5 squares long. The engineer has covered 7 squares. How many squares are left to cover?",
              "answer": "28",
              "hint": "7 × 5 squares in all, then take 7 off.",
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
            "example": "5 × 7 − 3 × 4 = 23: both multiplications first, then subtract."
          },
          "problems": [
            {
              "q": "A regular check takes 2.75 minutes. A long one takes 2.8 times as long. How many minutes does the long one take?",
              "answer": "7.7",
              "hint": "Multiply 275 × 28 without the points, then put back 3 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "Of 60 tons, 10% are struck off the list. How many are left on it?",
              "answer": "54",
              "hint": "10% of 60 is 6. Take that off 60.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer shares 64 bolts between two teams in the ratio 3 to 5. How many does the smaller share get?",
              "answer": "24",
              "hint": "3 + 5 = 8 parts. 64 ÷ 8 = 8 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out 6 × 12 − 2 × 2. What is it?",
              "answer": "68",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "In the cold-test chamber, where parts are chilled before they meet liquid oxygen, the coldest reading was −20 degrees and the warmest was −14 degrees. How many degrees apart are they?",
              "answer": "6",
              "hint": "From −20 up to −14.",
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
              "A two-step equation: undo the outside step first. In 3(x + 2) = 21, divide by 3, then take off 2."
            ],
            "example": "3(x + 2) = 21, so x + 2 = 7, so x = 5."
          },
          "problems": [
            {
              "q": "24 checks took 12 minutes. At the same rate, how many minutes would 28 checks take?",
              "answer": "14",
              "hint": "One check takes 12 ÷ 24 = 0.5. Then × 28.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew has loaded 50% of the second stage's 60 tons of fuel. How many tons is that?",
              "answer": "30",
              "hint": "50% of 60: 50/100 × 60.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The cold-test chamber's low was −9 degrees and its high was 13 degrees. How many degrees apart are they?",
              "answer": "22",
              "hint": "9 below zero plus 13 above zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 7(x + 8) = 140",
              "answer": "12",
              "hint": "Divide both sides by 7 to get x + 8 = 20.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 10 inches stand for 100 feet. How many feet does 1 inch stand for?",
              "answer": "10",
              "hint": "100 ÷ 10.",
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
            "example": "Start at 3 and add 5 each step: the 4th number is 3 + 5 × 3 = 18."
          },
          "problems": [
            {
              "q": "The tons of fuel loaded go 8, 12, 16, 20, and on. What is the 8th number in the list?",
              "answer": "36",
              "hint": "It starts at 8 and adds 4 each step. The number you want is 7 steps on from 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (4 × 3)²?",
              "answer": "144",
              "hint": "4 × 3 = 12 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 20 and 21 feet. How long is its longest side, in feet?",
              "answer": "29",
              "hint": "20² + 21² = 841. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x − 4x = 20",
              "answer": "4",
              "hint": "9 − 4 = 5, so 5x = 20.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 4 × 10^3 or 5 × 10^2? Write the bigger one out in full.",
              "answer": "4000",
              "hint": "Compare the powers of 10 first: 10^3 is 1,000 and 10^2 is 100.",
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
          "example": "If step 5 says 'take the 10 off twice, not once', 50 becomes 30, not 40."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of engines in the square at the bottom of the first stage: 4.",
          "Multiply by the number of hold-down posts gripping the stage: 4.",
          "Add the height of the first stage in feet: 200.",
          "Subtract the width of the first stage in feet: 20.",
          "Go back to step 4 and do it differently: the width comes off twice over, not once, so subtract 20 again.",
          "Type your final number."
        ],
        "prompt": "Your answer:",
        "answer": "176",
        "hint": "Step 5 sends you back to step 4 and changes it. Steps 1 to 3 stay exactly as you worked them the first time."
      }
    },
    {
      "id": "rocket-2",
      "title": "The Second Stage",
      "recon": {
        "lesson": {
          "title": "Fitting two things together",
          "points": [
            "When the sheet describes joining parts, the method is a detail. Read it in order.",
            "Counts of bolts and inches of gap are exact.",
            "A word about the joint is defined by what it does."
          ],
          "example": "'The ring holds the stages together until the cord fires.' What does the ring do? Holds, then lets go."
        },
        "title": "Build Sheet: The Ring Between",
        "passage": [
          "The second stage is a smaller rocket that rides on top of the first: sixty feet tall, the same twenty feet across, with a single engine. That engine will light in the near-empty air thirty miles up, where a big first-stage engine would waste its power. It burns for six minutes and does most of the speeding up. The first stage gets the rocket off the ground. The second stage gets it to orbit. That is the division of labor, and almost every rocket that has ever reached orbit has used it.",
          "The two stages meet at a ring, a circle of metal three feet tall that is bolted to both of them with a hundred and twenty bolts. Inside the ring, along the line where the stages will separate, runs a thin cord of explosive. The first stage is empty at two and a half minutes into the flight. Then the cord fires. It cuts the ring in half in a fraction of a second, and small rockets push the dead first stage away before the second stage engine lights. It has to work exactly once, and it is tested on the ground a thousand times to make sure that it does.",
          "Session two is the lift. The crane picks the second stage off its transporter, swings it two hundred feet up, and lowers it onto the first stage at one inch a minute for the last foot. The engineer watches the gap close from a platform on the tower and calls the numbers: six inches, four, two, one, contact. Then come the bolts, all hundred and twenty of them. Each one is tightened to the same force with a wrench that clicks. They go in a star pattern around the ring. That way the stages pull together evenly. The sheet gets its second signature: stage two mated, ring torqued, go."
        ],
        "questions": [
          {
            "q": "How long does the second stage burn?",
            "choices": [
              "Six minutes",
              "Two and a half minutes",
              "A day",
              "An hour"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence with 'six minutes'.",
            "skill": "Finding details"
          },
          {
            "q": "How many bolts join the ring to the stages?",
            "choices": [
              "Twelve",
              "Forty",
              "A thousand",
              "A hundred and twenty"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what does 'mated' mean?",
            "choices": [
              "Swung two hundred feet up by the crane",
              "Fueled",
              "Tightened to the same force in a star pattern around the ring",
              "Joined together, one stage fitted onto the other"
            ],
            "answer": 3,
            "hint": "The sheet says 'stage two mated' right after the stages are bolted together.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the second stage have a different, smaller engine than the first?",
            "choices": [
              "Because the second stage does most of the speeding up",
              "Because it is lighter",
              "Because it lights in near-empty air thirty miles up, where a big first-stage engine would waste its power",
              "Because the second stage is only sixty feet tall, and a first-stage engine would not fit inside a tank that short"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the first two sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The crane",
              "The tower platform",
              "The wrench",
              "The ring that joins the stages and how it separates them in flight"
            ],
            "answer": 3,
            "hint": "Paragraph 2 describes the ring, the bolts and the explosive cord.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Ring math",
          "points": [
            "Volume of a box: length × width × height. 7 × 2 × 3 = 42 cubic feet.",
            "Inches a minute: minutes for the last foot.",
            "Burn times added: total.",
            "Two-step: bolts per engineer, then minutes at half a minute each."
          ],
          "example": "The last 3 feet at 1 inch a minute: 3 × 12 = 36 inches, so 36 minutes."
        },
        "problems": [
          {
            "q": "The stage's equipment bay is a box 8 feet long, 6 feet wide and 5 feet tall. How many cubic feet is the bay?",
            "answer": "240",
            "hint": "Length × width × height: 8 × 6 = 48, then times 5.",
            "skill": "Volume"
          },
          {
            "q": "The crane lowers the stage 1 inch a minute for the last foot. A foot is 12 inches. How many minutes is the last foot?",
            "answer": "12",
            "hint": "12 inches at 1 a minute.",
            "skill": "Multiplying"
          },
          {
            "q": "The first stage burns 2 and a half minutes and the second burns 6. How many minutes of burning is that in all? (write a decimal)",
            "answer": "8.5",
            "accept": [
              "8 1/2",
              "17/2"
            ],
            "hint": "2.5 + 6.",
            "skill": "Fractions"
          },
          {
            "q": "Two engineers each torque half the 120 bolts. Each bolt takes 30 seconds. How many minutes does each engineer spend?",
            "answer": "30",
            "hint": "60 bolts × 30 seconds = 1,800 seconds. 1,800 ÷ 60.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The first stage is 200 feet and the second is 60. How tall are the two stacked together?",
            "answer": "260",
            "hint": "200 + 60.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Which line would settle it",
            "points": [
              "When a question asks which sentence supports a claim, every choice will be a real sentence from the report. Being true earns nothing.",
              "Break the claim into its parts first. A claim with two halves needs one sentence that carries both of them.",
              "Read the claim and your pick back to back. If someone said 'so what', would that sentence close the argument on its own?"
            ],
            "example": "Claim: the road is shut all winter. 'The town has one store' is true and settles nothing. 'The plow stops running in October' settles it."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "The two stages are separate rockets on purpose, and the ring joining them has to hold them together and then let them go.",
                "The ring is bolted on with a hundred and twenty bolts, each tightened to the same force in a star pattern so the stages pull together evenly.",
                "Explosives are used in every part of modern engineering.",
                "The second stage is what lifts the rocket off the pad and up through the thick lower air."
              ],
              "answer": 0,
              "hint": "One paragraph is about why there are two stages, one is about what joins them, one is about the joining itself. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "That is the division of labor, and almost every rocket that has ever reached orbit has used it."
            },
            {
              "q": "Claim: the separation gets only one chance in flight, so it has to be proved on the ground first. Which sentence from the report best supports that claim?",
              "choices": [
                "Inside the ring, along the line where the stages will separate, runs a thin cord of explosive.",
                "The sheet gets its second signature: stage two mated, ring torqued, go.",
                "The first stage gets the rocket off the ground.",
                "It has to work exactly once, and it is tested on the ground a thousand times to make sure that it does."
              ],
              "answer": 3,
              "hint": "The claim has two halves: one chance in flight, and proof on the ground. Three of these never mention testing at all.",
              "skill": "Finding details",
              "evidence": "It has to work exactly once, and it is tested on the ground a thousand times to make sure that it does."
            },
            {
              "q": "What job does the third paragraph do that the first two do not?",
              "choices": [
                "It explains why a large engine would waste its power high up.",
                "It sets the first stage and the second stage side by side to compare their size and the work each of them does.",
                "It gives the reason the ring has to be cut in half in flight.",
                "It walks through the joining one move at a time, in the order the moves happen on the day."
              ],
              "answer": 3,
              "hint": "Follow the verbs through the paragraph: picks, swings, lowers, then the bolts, then the sheet. That trail is the shape of it.",
              "skill": "Author's purpose and structure",
              "evidence": "The crane picks the second stage off its transporter, swings it two hundred feet up, and lowers it onto the first stage at one inch a minute for the last foot. The engineer watches the gap close from a platform on the tower and calls the numbers: six inches, four, two, one, contact."
            },
            {
              "q": "The report calls the arrangement of the two stages a 'division of labor'. What does that phrase mean as it is used here?",
              "choices": [
                "The work is shared out among the people working on the tower",
                "The stages are cut apart from one another",
                "Each stage is built to do a different part of one job",
                "Two teams build the rocket at the same time"
              ],
              "answer": 2,
              "hint": "Read the two short sentences immediately before the phrase. Each one hands a different piece of the flight to a different stage. That is what the phrase is naming.",
              "skill": "Word meanings",
              "evidence": "The first stage gets the rocket off the ground. The second stage gets it to orbit. That is the division of labor, and almost every rocket that has ever reached orbit has used it."
            },
            {
              "q": "Paragraphs 2 and 3 together tell you something about the joint between the stages, given that a hundred and twenty bolts go in by hand and the ring is cut in half two and a half minutes into the flight. What is it?",
              "choices": [
                "The bolts are too weak to hold the stages together during the flight.",
                "The explosive cord is there in case the bolts cannot be tightened in time.",
                "The joint is meant to be taken apart and used again on the next rocket.",
                "It has to be strong enough to carry the whole stack upward and still come apart cleanly on one command."
              ],
              "answer": 3,
              "hint": "One paragraph tells you what the ring must survive and what it must then do to itself. The other shows how carefully it is put together. Ask what both facts demand of one piece of metal.",
              "skill": "Reading between the lines",
              "evidence": "cuts the ring in half in a fraction of a second, and small rockets push the dead first stage away before the second stage engine lights"
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
            "example": "4 × 7 = 28, so 28 has four 7s in it."
          },
          "problems": [
            {
              "q": "The engineer carries 8 bolts on each of 2 trips. How many bolts is that?",
              "answer": "16",
              "hint": "2 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "Every ring takes 6 bolts. The engineer has 48 bolts. How many rings can be filled?",
              "answer": "8",
              "hint": "How many 6s fit into 48?",
              "skill": "Dividing"
            },
            {
              "q": "The engineer tightened 428 bolts in the morning and 545 in the evening. How many more in the evening?",
              "answer": "117",
              "hint": "545 − 428.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 2/4 or 3/4? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "The target is 900 bolts and 635 are tightened. How many short is that?",
              "answer": "265",
              "hint": "900 − 635.",
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
            "example": "(9 − 4) × (1 + 6) = 35: each set of parentheses first."
          },
          "problems": [
            {
              "q": "A tanker holds 11 1/4 tons of fuel. Each stage tank takes 1 7/8 tons. How many stage tanks can the tanker fill?",
              "answer": "6",
              "hint": "Make both improper: 45/4 ÷ 15/8. Then multiply by the flip: 45/4 × 8/15.",
              "skill": "Fractions"
            },
            {
              "q": "Out of every 100 inches, 10 are set aside. Out of 240 inches, how many is that?",
              "answer": "24",
              "hint": "240 is 2.4 hundreds, so 2.4 × 10.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer divides 32 minutes of work in the ratio 3 to 5. How many minutes is the larger share?",
              "answer": "20",
              "hint": "8 parts in all, so one part is 4 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out (8 − 2) × (3 + 20). What is it?",
              "answer": "138",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three readings came in from the cold-test chamber: −7, −5 and 2 degrees. Which is the coldest?",
              "answer": "-7",
              "accept": [
                "−7"
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
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Two minus signs make a plus: (−3) × (−5) = 15, and (−15) ÷ (−3) = 5. One minus sign makes a minus.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "x ÷ 4 − 3 = 5, so x ÷ 4 = 8, so x = 32."
          },
          "problems": [
            {
              "q": "The job needs 20 minutes in all, at 2.5 minutes for each check. One check is already done. How many checks are left?",
              "answer": "7",
              "hint": "20 ÷ 2.5 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a fuel reading may change by no more than 50%. Starting from 240 gallons, what is the highest reading the rule allows?",
              "answer": "360",
              "hint": "50% of 240 is 120. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "While the fuel tank drains, its level drops 13 inches every minute. Write that as −13 a minute. How many inches higher was the level 8 minutes ago? Time before now counts as negative. Work it out as (−13) × (−8).",
              "answer": "104",
              "hint": "13 × 8, and two minus signs make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 6 − 7 = 12",
              "answer": "114",
              "hint": "Add 7 to both sides, then multiply by 6.",
              "skill": "Equations"
            },
            {
              "q": "A round wheel measures 15.7 inches around the edge. Using 3.14 for pi, how many inches is it across?",
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
              "Slope is the rise over the run: how much y goes up, divided by how much x goes across.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "A line starts at 2 and climbs 4 each step: after 6 steps it is 4 × 6 + 2 = 26."
          },
          "problems": [
            {
              "q": "A line passes through (0, 10) and (3, 25). What is its slope?",
              "answer": "5",
              "hint": "Slope is the rise over the run: 15 ÷ 3.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 196 square feet. How many feet is it around the edge?",
              "answer": "56",
              "hint": "One side is the square root of 196, then four sides.",
              "skill": "Powers and roots"
            },
            {
              "q": "The engineer goes 12 feet east and then 35 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "37",
              "hint": "The two legs make a right angle: 12² + 35² = 1369.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 6x + 13 and 4x + 27 come to the same number?",
              "answer": "7",
              "hint": "Set them equal, take 4x off both sides, then take 13 off.",
              "skill": "Equations"
            },
            {
              "q": "Two round tanks each have a radius of 10 feet and are 4 feet deep. Using 3.14 for pi, what is their total volume in cubic feet?",
              "answer": "2512",
              "hint": "One tank is 3.14 × 10 × 10 × 4 = 1,256. Then double it.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Ignore means go back",
          "points": [
            "A step can tell you to ignore the one before it. Go back to the total you had.",
            "Then do what the last step says."
          ],
          "example": "'Multiply by 5. Ignore that step completely.' Start at 9 and you still have 9."
        },
        "skill": "Following directions",
        "steps": [
          "Write the engineer's four gap calls in order: 6, 4, 2, 1.",
          "Add them together.",
          "Add the height of the mating ring in feet: 3.",
          "Multiply that total by the minutes the second stage burns: 6.",
          "Ignore step 4 completely. Burn time belongs to the flight, not to the mating sheet, so your total is the one you had at the end of step 3.",
          "Add the number of engines on the second stage: 1, then type the result."
        ],
        "prompt": "Your answer:",
        "answer": "17",
        "hint": "Step 5 calls the multiply off. Carry the total from the end of step 3 into step 6 and nothing else changes."
      }
    },
    {
      "id": "rocket-3",
      "title": "The Capsule",
      "recon": {
        "lesson": {
          "title": "The part that comes home",
          "points": [
            "When the sheet says one part is different from the rest, the difference is the detail.",
            "Counts of seats and parachutes are exact.",
            "A word about the capsule is defined by what it does."
          ],
          "example": "'The snorkel lets a diver breathe under water.' What is it for? Breathing under water."
        },
        "title": "Build Sheet: The Size of a Van",
        "passage": [
          "Everything under the capsule is thrown away. The first stage falls in the sea. The second stage burns up. The only part of the five hundred tons on the pad that comes home is the capsule, a cone the size of a van with four seats, two windows and a hatch. It sits at the very top of the stack under a pointed cover that protects it on the way up through the air. It weighs about ten tons, and more than a ton of that is the heat shield on its bottom.",
          "The heat shield is the reason the capsule is a cone with a flat bottom. Coming home, the capsule hits the top of the air at seventeen thousand miles an hour. The air in front of it is squeezed very hard. The squeezed air glows hotter than the surface of the sun. The flat bottom takes that heat. It is a thick slab of material that chars and slowly flakes away, carrying the heat with it, while the crew inside stays at room temperature. A capsule without a heat shield would be a shooting star.",
          "The capsule is stacked today. It goes on gently, because it is the only part with people's seats in it. The crane lowers it onto the top of the second stage, and it is bolted down. Then the cover goes over it. On top of the cover goes a small tower with its own little rockets, the escape tower. It can pull the capsule up and away from the rest of the rocket in two seconds if anything below it goes wrong. The engineer checks the four seats, the two windows, the hatch seal, and the three parachutes packed in the nose, and signs: capsule mated, cover on, tower on, go."
        ],
        "questions": [
          {
            "q": "Which part of the rocket comes home?",
            "choices": [
              "The first stage",
              "The second stage",
              "The capsule",
              "Nothing"
            ],
            "answer": 2,
            "hint": "The first four sentences of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How many parachutes are packed in the nose?",
            "choices": [
              "One",
              "Two",
              "Four",
              "Three"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 3.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is the 'escape tower'?",
            "choices": [
              "The hatch the crew uses to get out of the capsule",
              "The crane",
              "The pointed cover that goes over the top of the capsule to protect it on the way up through the thick air",
              "A small tower with its own rockets that can pull the capsule away from the rocket in an emergency"
            ],
            "answer": 3,
            "hint": "The sentences describing the small tower on top of the cover.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is the bottom of the capsule flat and thick?",
            "choices": [
              "So that the capsule can sit flat on top of the second stage and be bolted straight down",
              "To hold the four seats, the two windows and the three parachutes that are packed in the nose",
              "Because it is the heat shield that takes the heat of coming home through the air",
              "Because the escape tower on top has to be able to pull the whole capsule away in two seconds"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the first and sixth sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The seats",
              "Why the capsule needs a heat shield and how it works",
              "The escape tower",
              "How the capsule is lowered on and the cover and tower go on"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 2 says the heat shield is the reason for the shape, and the rest explains.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Capsule math",
          "points": [
            "A tenth of the weight: ÷ 10.",
            "Seats plus windows plus hatch: count.",
            "Tons out of the total: a fraction.",
            "Subtracting decimals: line up the points. 3.2 − 1.65 is 3.20 − 1.65 = 1.55."
          ],
          "example": "A tenth of 20 tons is 2 tons."
        },
        "problems": [
          {
            "q": "The capsule weighs 10 tons and about one tenth of it is the heat shield. About how many tons is the heat shield?",
            "answer": "1",
            "hint": "10 ÷ 10.",
            "skill": "Fractions"
          },
          {
            "q": "The capsule has 4 seats, 2 windows and 1 hatch. How many of those things is that in all?",
            "answer": "7",
            "hint": "4 + 2 + 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The escape tower can pull the capsule away in 2 seconds. The first stage burns for 150 seconds. How many times could the tower's 2 seconds fit into 150?",
            "answer": "75",
            "hint": "150 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "The capsule is 10 tons out of 500 on the pad. Write that as a fraction with 500 on the bottom.",
            "answer": "10/500",
            "accept": [
              "1/50"
            ],
            "hint": "10 over 500.",
            "skill": "Fractions"
          },
          {
            "q": "The capsule's window is 1.75 feet wide and the hatch is 2.5 feet wide. How much wider is the hatch? (write a decimal)",
            "answer": "0.75",
            "hint": "Line up the points: 2.50 − 1.75.",
            "skill": "Decimals"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Name the paragraph's job",
            "points": [
              "Every paragraph is in the report to do something: set the scene, explain a cause, compare two things, walk through an order, or show a problem and the answer to it.",
              "Find the job by deleting the paragraph in your head. What would you no longer know? That gap is the job.",
              "A choice that only retells what the paragraph says has not named a job at all."
            ],
            "example": "A report on a ferry stops to explain how ice forms on a bay. That is not a science lesson. It is there so the next paragraph, about the January timetable, makes sense."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The capsule weighs about ten tons and has four seats, two windows and a hatch, with three parachutes packed away in its nose.",
                "Engineers can now protect people from almost any danger.",
                "Almost the whole rocket is spent lifting one small cone, and that cone is built around surviving the trip back down.",
                "The heat shield is built to come home whole and unmarked, which is how the same capsule can be flown again on the next launch."
              ],
              "answer": 2,
              "hint": "Label the paragraphs: what gets thrown away, what the shield does, what is checked before the signature. One choice covers all three; one of the others fights with the report.",
              "skill": "Central idea and evidence",
              "evidence": "The only part of the five hundred tons on the pad that comes home is the capsule, a cone the size of a van with four seats, two windows and a hatch. It sits at the very top of the stack under a pointed cover that protects it on the way up through the air."
            },
            {
              "q": "Claim: the heat shield works by being used up. Which sentence from the report best supports that claim?",
              "choices": [
                "The flat bottom takes that heat.",
                "The second stage burns up.",
                "It weighs about ten tons, and more than a ton of that is the heat shield on its bottom.",
                "It is a thick slab of material that chars and slowly flakes away, carrying the heat with it, while the crew inside stays at room temperature."
              ],
              "answer": 3,
              "hint": "Used up means there is less of it at the end than there was at the start. Two of these say the shield matters, and one is about a different part burning up. Only one says what happens to the shield itself.",
              "skill": "Finding details",
              "evidence": "It is a thick slab of material that chars and slowly flakes away, carrying the heat with it, while the crew inside stays at room temperature."
            },
            {
              "q": "Why does the report end the second paragraph with the line about a shooting star?",
              "choices": [
                "To warn that shooting stars are a hazard to capsules in orbit.",
                "To introduce the escape tower described in the paragraph after it.",
                "To explain how the crew inside keeps the cabin at room temperature while the air outside glows hotter than the sun.",
                "To put the whole paragraph into one picture: with no shield there would be nothing left to come home."
              ],
              "answer": 3,
              "hint": "That sentence adds no new fact to the paragraph. Ask what a writer is doing when the last line only turns the paragraph into an image.",
              "skill": "Author's purpose and structure",
              "evidence": "A capsule without a heat shield would be a shooting star."
            },
            {
              "q": "The report says the capsule sits 'at the very top of the stack'. What does stack mean as it is used here?",
              "choices": [
                "A pile of spare parts kept in a heap beside the pad in case something breaks",
                "A tall chimney standing beside the pad that carries the engine exhaust away",
                "The whole rocket, with each piece set on top of the one below it",
                "The list of checks the engineer works through before signing the sheet"
              ],
              "answer": 2,
              "hint": "The report has already shown you a rocket built in pieces, each one riding on the one under it. Ask what single word would name the finished pile.",
              "skill": "Word meanings",
              "evidence": "It sits at the very top of the stack under a pointed cover that protects it on the way up through the air."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the escape tower pulls the capsule away rather than trying to save the whole rocket. Why does it?",
              "choices": [
                "The rest of the rocket is too far from the tower's little rockets to be moved.",
                "The capsule is the only part meant to come back at all, so it is the only part worth pulling clear.",
                "The tower is not strong enough to lift ten tons of capsule.",
                "The rest of the rocket would come down safely on its own parachutes, so there is nothing below the capsule that needs saving."
              ],
              "answer": 1,
              "hint": "Paragraph one says what happens to every piece below the cone even on a good day. Paragraph three says what the tower lifts clear on a bad one. Put those two facts side by side.",
              "skill": "Reading between the lines",
              "evidence": "Everything under the capsule is thrown away."
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
            "example": "6 × 4 = 24."
          },
          "problems": [
            {
              "q": "The engineer counts 9 capsules with 4 seats in each. How many seats is that?",
              "answer": "36",
              "hint": "9 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "36 seats are shared equally among 9 capsules. How many seats in each capsule?",
              "answer": "4",
              "hint": "How many 9s make 36?",
              "skill": "Dividing"
            },
            {
              "q": "The engineer counted 317 heat-shield tiles, then found 106 more, then 74 more. How many tiles in all?",
              "answer": "497",
              "hint": "317 + 106 first. Then add 74.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The engineer finished 2/4 of the day's work before the break and 1/4 after. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A seat platform is 3 squares wide and 2 squares long. How many squares is that?",
              "answer": "6",
              "hint": "3 rows of 2, so 3 × 2.",
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
            "example": "4 × (7 − 3) + 10 = 26: parentheses, then multiply, then add."
          },
          "problems": [
            {
              "q": "The engineer has 17.55 minutes. Each check takes 0.65 minutes. How many checks is that enough for?",
              "answer": "27",
              "hint": "Move both points 2 places to the right: 1755 ÷ 65.",
              "skill": "Decimals"
            },
            {
              "q": "Of 240 heat-shield tiles, 50% are set aside. How many is that?",
              "answer": "120",
              "hint": "50% of 240: 50% is 50/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Seats and parachutes are kept in the ratio 2 to 5. If there are 6 seats, how many parachutes?",
              "answer": "15",
              "hint": "6 ÷ 2 = 3 groups. Each group has 5 parachutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out 9 × (8 − 2) + 18. What is it?",
              "answer": "72",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the cold-test chamber read −4 degrees. By noon, warming for the next test, it read 5 degrees. By how many degrees did it rise?",
              "answer": "9",
              "hint": "From −4 up to 0 is 4, then 5 more.",
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
            "example": "5x + 4 = 39, so 5x = 35, so x = 7."
          },
          "problems": [
            {
              "q": "16 checks needed 56 minutes altogether. How many minutes is that for one check?",
              "answer": "3.5",
              "hint": "A rate is the total shared out: 56 ÷ 16.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer counted 120 bolts on the first pass. On the second pass the number had fallen by 20%. How many bolts did the engineer count on the second pass?",
              "answer": "96",
              "hint": "20% of 120 is 24. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "At dawn the cold-test chamber read −12 degrees. It rose 10 degrees by noon, then fell 14 degrees by dark. What does it read at dark?",
              "answer": "-16",
              "accept": [
                "−16"
              ],
              "hint": "Start at −12, go up 10 to −2, then down 14.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 3x + 23 = 56",
              "answer": "11",
              "hint": "Take 23 off both sides first, then divide by 3.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 25 feet. The pad road measures 8 inches on the plan. How long is it really, in feet?",
              "answer": "200",
              "hint": "Every inch is 25 feet, so 8 × 25.",
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
            "example": "Start at 20 and add 3 each hour: after 5 hours, 3 × 5 + 20 = 35."
          },
          "problems": [
            {
              "q": "The engineer starts with 15 bolts in the tray and adds 7 more every hour. After 8 hours, how many bolts are there?",
              "answer": "71",
              "hint": "This is the straight-line rule y = mx + b: 7 × 8 + 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each row holds 5² bolts. There are 7 rows. How many bolts in all?",
              "answer": "175",
              "hint": "5² means 5 × 5 = 25. Then × 7.",
              "skill": "Powers and roots"
            },
            {
              "q": "The engineer runs a rope from the top of a 5-foot pole to a point 12 feet away on the ground. How long is the rope, in feet?",
              "answer": "13",
              "hint": "Right triangle: a² + b² = c². 5² + 12² = 25 + 144 = 169. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 10x + 11 = 5x + 41",
              "answer": "6",
              "hint": "Take 5x off both sides to get 5x + 11 = 41, then take 11 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The engineer writes the total number of bolts as 3 × 10^3. Written out in full, what number is that?",
              "answer": "3000",
              "hint": "10^3 is 1 with 3 zeros after it: 1,000. Then × 3.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Type it the way the sheet writes it",
          "points": [
            "Work the arithmetic first, then read how the answer has to look.",
            "If the sheet writes two numbers with a dash, your answer has two numbers and a dash. The number on its own is wrong."
          ],
          "example": "3 seats and a worked-out 7, written the sheet's way, is 3-7."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of seats the engineer checks in the capsule: 4.",
          "Multiply by the number of windows: 2.",
          "Add the number of parachutes packed in the nose: 3.",
          "Subtract the seconds the escape tower needs to pull the capsule clear: 2.",
          "The check sheet writes every line as two numbers with a dash between them: the seats first, then the number you just worked out. Type your answer that way."
        ],
        "prompt": "Your answer:",
        "answer": "4-9",
        "accept": [
          "4 - 9",
          "4 -9",
          "4- 9",
          "4–9"
        ],
        "hint": "Steps 1 to 4 give you one number. Step 5 wants the seats written in front of it, joined by a dash, the way the sheet logs a line."
      }
    },
    {
      "id": "rocket-4",
      "title": "Fuel",
      "recon": {
        "lesson": {
          "title": "Cold liquids",
          "points": [
            "When the sheet gives temperatures, they are details, and they are far below zero. Read the number.",
            "A 'why' question: look for the sentence with 'because' near the thing it explains.",
            "A word about the fuel is defined by what it is."
          ],
          "example": "'The lake froze at twenty below.' How cold? Twenty below."
        },
        "title": "Build Sheet: The Rocket Grows Frost",
        "passage": [
          "A rocket engine burns fuel with oxygen. A campfire does the same thing. But there is no air in space, and not enough of it thirty miles up. So a rocket carries its own oxygen in a tank. To fit enough of it in, the oxygen is made so cold that it turns from a gas into a liquid, about three hundred degrees below zero. The fuel in the tank below it is a kind of kerosene. It is chilled too. Together they are called propellant, and the two tanks in the first stage hold about a hundred and twenty thousand gallons of it, enough to fill six backyard swimming pools.",
          "Loading begins six hours before launch. The propellant flows into the rocket through pipes. They come from tanks a safe distance away. It goes slowly at first, because the pipes and the rocket have to cool to the liquid's temperature before it stops boiling away as it arrives, and then fast. As the tanks fill, the outside of the rocket frosts white. The metal is so cold that the water in the humid air freezes onto it. Sheets of frost slide off and fall in the sunshine. Vents at the top of the tanks hiss steadily, letting off the oxygen that boils no matter how careful the pipes are.",
          "Nobody stands near a fueled rocket. The pad is cleared for a mile in every direction, the crane is driven away, and the engineer watches from a blockhouse, a concrete room with thick windows, reading the tank levels off a screen. Ninety percent. Ninety-five. Full, and then the pipes keep trickling, topping up what boils off, right until the last seconds before launch. The sheet gets its fourth signature at the screen, not at the pad. It reads: propellant loaded, tanks full, venting normal, go."
        ],
        "questions": [
          {
            "q": "About how cold is the liquid oxygen?",
            "choices": [
              "Thirty below zero",
              "Three hundred degrees below zero",
              "Freezing",
              "Three degrees below zero"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence with 'turns from a gas into a liquid'.",
            "skill": "Finding details"
          },
          {
            "q": "How long before launch does loading begin?",
            "choices": [
              "Six minutes, once the pad is cleared",
              "Six hours",
              "A day",
              "Weeks"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is 'propellant'?",
            "choices": [
              "A kind of engine",
              "The cold liquid oxygen carried in the lower tank",
              "The fuel and the oxygen together, what the rocket burns",
              "The tank"
            ],
            "answer": 2,
            "hint": "The sentence 'Together they are called propellant'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the outside of the rocket turn white with frost?",
            "choices": [
              "Because it is painted",
              "Because it is snowing",
              "Because the metal is so cold that water in the humid air freezes onto it",
              "Because the vents blow snow"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence with 'humid air'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the propellant flows into the rocket slowly at first and then fast until the tanks are full",
              "The frost on the outside of the rocket and the sheets of it that slide off and fall in the sunshine",
              "Why the oxygen has to be made cold enough that it turns from a gas into a liquid before loading",
              "Why the pad is cleared during fueling and how the engineer watches from the blockhouse"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 3 is 'Nobody stands near a fueled rocket.'",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Fuel math",
          "points": [
            "Gallons over hours: gallons an hour.",
            "Percent full: 90% of 120,000.",
            "Miles of clearance to feet: × 5,280.",
            "'Twice as much as the other': split the total into 3 equal parts; the smaller gets 1 part."
          ],
          "example": "12,000 gallons in 4 hours is 12,000 ÷ 4 = 3,000 an hour."
        },
        "problems": [
          {
            "q": "The tanks hold 120,000 gallons and fill in 6 hours. How many gallons an hour is that?",
            "answer": "20000",
            "accept": [
              "20,000"
            ],
            "hint": "120,000 ÷ 6.",
            "skill": "Dividing"
          },
          {
            "q": "When the tanks are 9/10 full, how many gallons are in them? (9/10 of 120,000)",
            "answer": "108000",
            "accept": [
              "108,000"
            ],
            "hint": "1/10 of 120,000 is 12,000. Nine of those.",
            "skill": "Fractions"
          },
          {
            "q": "The pad is cleared for 1 mile. A mile is 5,280 feet. How many feet is that?",
            "answer": "5280",
            "accept": [
              "5,280"
            ],
            "hint": "One mile.",
            "skill": "Multiplying"
          },
          {
            "q": "Liquid oxygen is 300 degrees below zero and the air is 80 above. How many degrees apart are they?",
            "answer": "380",
            "hint": "From 300 below to 0 is 300, then 80 more.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The two tanks together hold 120,000 gallons. If the oxygen tank holds twice as much as the fuel tank, how many gallons does the fuel tank hold?",
            "answer": "40000",
            "accept": [
              "40,000"
            ],
            "hint": "Three equal parts: fuel is one, oxygen is two. 120,000 ÷ 3.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Work the word out where it stands",
            "points": [
              "Cover the word with a finger and read the sentence with a hole in it. What would you drop into the hole?",
              "Some words are painting a picture rather than giving a definition. Ask what the picture is showing you, not what a dictionary would say.",
              "Put each choice back into the sentence. Three of them will make the report say something it never said."
            ],
            "example": "'The cold gnawed at the ropes.' There are no teeth anywhere in that sentence. Something was slowly wearing the ropes away, a little at a time."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "Liquid oxygen is about three hundred degrees below zero, and the kerosene below it is chilled too.",
                "A rocket has to bring its own oxygen, and making that oxygen cold enough to fit changes how it is loaded and how far back everyone stands.",
                "Rockets are the most dangerous machines ever built by anyone, which is why nobody stands near one.",
                "The propellant is pumped in quickly at first and then slowly, as the tanks get close to full."
              ],
              "answer": 1,
              "hint": "The cold turns up in all three paragraphs doing a different job each time: making the load fit, making frost, keeping people back. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "To fit enough of it in, the oxygen is made so cold that it turns from a gas into a liquid, about three hundred degrees below zero."
            },
            {
              "q": "Claim: the pipes have to be cooled down before the loading is allowed to go fast. Which sentence from the report best supports that claim?",
              "choices": [
                "Together they are called propellant, and the two tanks in the first stage hold about a hundred and twenty thousand gallons of it, enough to fill six backyard swimming pools.",
                "It goes slowly at first, because the pipes and the rocket have to cool to the liquid's temperature before it stops boiling away as it arrives, and then fast.",
                "Vents at the top of the tanks hiss steadily, letting off the oxygen that boils no matter how careful the pipes are.",
                "Full, and then the pipes keep trickling, topping up what boils off, right until the last seconds before launch."
              ],
              "answer": 1,
              "hint": "The claim is about an order of events: cool first, then fast. Two of these mention boiling or timing without ever saying why the flow changes speed.",
              "skill": "Finding details",
              "evidence": "It goes slowly at first, because the pipes and the rocket have to cool to the liquid's temperature before it stops boiling away as it arrives, and then fast."
            },
            {
              "q": "How is the second paragraph organized?",
              "choices": [
                "As a comparison between the liquid oxygen and the kerosene.",
                "As a problem followed by the solution the engineers settled on.",
                "As a sequence: what happens first, what happens as the tanks fill, and what is still going on at the end.",
                "As a list of the parts the loading pipes are made from."
              ],
              "answer": 2,
              "hint": "Track the time words through the paragraph: begins, slowly at first, and then, as the tanks fill. That trail is the shape.",
              "skill": "Author's purpose and structure",
              "evidence": "Loading begins six hours before launch."
            },
            {
              "q": "The report says the pipes keep 'trickling, topping up what boils off'. What does topping up mean as it is used here?",
              "choices": [
                "Closing the tanks off at the top with a cap",
                "Filling the tanks past the point of being full",
                "Putting back what has been lost so the tanks stay full",
                "Draining the boiled oxygen back out of the rocket"
              ],
              "answer": 2,
              "hint": "The sentence opens by telling you the tanks are already full. The words just after tell you something keeps leaving. Ask what the trickle is for.",
              "skill": "Word meanings",
              "evidence": "Full, and then the pipes keep trickling, topping up what boils off, right until the last seconds before launch."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why this signature happens at a screen instead of at the pad. Why does it?",
              "choices": [
                "The frost sliding off the outside of the rocket makes the tank markings impossible to read from anywhere on the pad itself.",
                "The crane was driven away hours before the loading began, and the build sheet went with it, so there is nothing at the pad to sign.",
                "The tank levels can only be measured by an instrument inside the rocket, which nobody standing out on the pad would be able to read.",
                "Once a hundred and twenty thousand gallons of propellant are aboard, nobody is allowed within a mile of the rocket."
              ],
              "answer": 3,
              "hint": "One paragraph tells you how much is now sitting in the tanks. Another tells you how far back everyone has to be once it is in there. The signature follows from both.",
              "skill": "Reading between the lines",
              "evidence": "The pad is cleared for a mile in every direction, the crane is driven away, and the engineer watches from a blockhouse, a concrete room with thick windows, reading the tank levels off a screen."
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
              "q": "The engineer counted 6 gallons yesterday and three times as many today. How many gallons today?",
              "answer": "18",
              "hint": "Three times 6: 6 + 6 + 6.",
              "skill": "Multiplying"
            },
            {
              "q": "The engineer pours 30 gallons of water into tanks that hold 6 gallons each. How many tanks does that fill?",
              "answer": "5",
              "hint": "How many 6s make 30?",
              "skill": "Dividing"
            },
            {
              "q": "The countdown checklist has 288 steps. The engineer has finished 124. How many steps are left?",
              "answer": "164",
              "hint": "288 − 124.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "4/8 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "4/8",
              "hint": "The whole job is 8/8. Take 4/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The tally stood at 355 gallons and 600 more were added. What is the tally now?",
              "answer": "955",
              "hint": "355 + 600.",
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
            "example": "20 + 3 × 6 = 38: multiply first, then add."
          },
          "problems": [
            {
              "q": "The pump fills 3/5 of the fuel tank in 9/10 of an hour. At that rate, how much of the tank does it fill in one hour? (write a fraction)",
              "answer": "2/3",
              "hint": "For one hour, divide the amount by the time: 3/5 ÷ 9/10 = 3/5 × 10/9. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "8 of the 80 valves are set aside. What percent is that? (write just the number)",
              "answer": "10",
              "accept": [
                "10%"
              ],
              "hint": "8 out of 80, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 3 gallons of fuel there are 5 gallons of oxygen. There are 40 gallons of oxygen. How many gallons of fuel?",
              "answer": "24",
              "hint": "40 ÷ 5 = 8 groups. Each group has 3 gallons of fuel.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out 12 + 5 × 11. What is it?",
              "answer": "67",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the cold-test chamber read 7 degrees. By dark it had been chilled to −9 degrees. By how many degrees did it fall?",
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
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Two minus signs make a plus: (−3) × (−5) = 15, and (−15) ÷ (−3) = 5. One minus sign makes a minus.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "60 − 7x = 18, so 7x = 42, so x = 6."
          },
          "problems": [
            {
              "q": "One check needs 1.5 minutes. How many minutes do 8 checks need?",
              "answer": "12",
              "hint": "8 × 1.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer counted 40 bolts on the first pass and 44 on the second. By what percent did the count change? (write just the number)",
              "answer": "10",
              "accept": [
                "10%"
              ],
              "hint": "The change is 4. 4 out of 40, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The cold-test chamber cooled from 0 to −90 degrees in equal steps of −6 degrees. How many steps was that? Work it out as (−90) ÷ (−6).",
              "answer": "15",
              "hint": "90 ÷ 6, and two minus signs make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 106 − 8x = 26",
              "answer": "10",
              "hint": "Move 8x to the right and 26 to the left: 8x = 80.",
              "skill": "Equations"
            },
            {
              "q": "A round wheel has a radius of 10 inches. Using 3.14 for pi, how many inches is it around the edge?",
              "answer": "62.8",
              "hint": "Across is 2 × 10 = 20. Then × 3.14.",
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
            "example": "Start at 40 and drop 3 each hour: after 6 hours, 40 − 3 × 6 = 22."
          },
          "problems": [
            {
              "q": "A fuel tank is at 35 degrees and cools 5 degrees every hour. How many degrees does it read after 4 hours?",
              "answer": "15",
              "hint": "5 × 4 = 20 degrees cooler, taken off 35.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 121?",
              "answer": "11",
              "hint": "What number times itself makes 121?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 25-foot rope runs from the top of a pole to a point 24 feet away on the ground. How tall is the pole, in feet?",
              "answer": "7",
              "hint": "a² = c² − b² = 625 − 576 = 49. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x = 2x + 32",
              "answer": "8",
              "hint": "Take 2x off both sides: 4x = 32. Then divide by 4.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 5 feet and holds 235.5 cubic feet. Using 3.14 for pi, how many feet deep is it?",
              "answer": "3",
              "hint": "The floor's area is 3.14 × 5 × 5 = 78.5. Divide the volume by that.",
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
          "example": "'Start at 50 below and warm by 60' lands at 10 above."
        },
        "skill": "Following directions",
        "steps": [
          "The liquid oxygen sits at 300 degrees below zero. Warm it by 320 degrees and write down the temperature you land on.",
          "Multiply that by the number of hours loading takes: 6.",
          "Now start a second number, separate from the first. Write the second tank level the engineer reads off the screen: 95.",
          "Subtract the number of tanks in the first stage: 2.",
          "You are holding a number from step 2 and a number from step 4. The engineer signs at the screen, not at the pad, so type the one from step 4."
        ],
        "prompt": "Your answer:",
        "answer": "93",
        "hint": "Both halves are real work, but only one of them gets signed. Step 5 names which step's number the sheet keeps."
      }
    },
    {
      "id": "rocket-5",
      "title": "Ten, Nine, Eight",
      "recon": {
        "lesson": {
          "title": "Putting the stack together",
          "points": [
            "The last sheet looks back over the whole build. A 'mostly about' question wants the big point, not one detail.",
            "The seconds of the countdown are details.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'Doors open at six. The show starts at seven.' When does the show start? Seven."
        },
        "title": "Build Sheet: T Minus Ten",
        "passage": [
          "The last ten seconds are the loud part, but the count began nine hours ago, at T minus nine hours. The first item on a list of four hundred was read out loud and answered with the word go. Every system on the rocket and the pad is polled in turn, by voice. Each one has a person whose whole job is that system. Any one of them can say hold and stop the clock. The count is not a formality. It is four hundred people agreeing, one at a time, that their piece is ready.",
          "At T minus six seconds the four first-stage engines light, one after another a fraction of a second apart. Then for six seconds the rocket stands on the pad at full power, held down by the four clamps. All that time, the computer checks that all four engines are burning evenly. If one is not, the engines shut down and the rocket stays. If they are, at zero the clamps let go together. Five hundred tons rises off the pad slower than a person can walk, then faster, on a column of fire three hundred feet long. The roar of liftoff reaches the blockhouse five seconds later. It shakes the windows in their frames.",
          "The stack went up in the only order it could. The first stage went first, because everything stands on it. The second went next, because it does the work. The capsule went on top, because it is the reason. Then came the fuel, because nobody stacks a fueled rocket, and the count, because a rocket that has not been counted down is a guess. Two and a half minutes after liftoff the first stage falls away on time. Eight and a half minutes after liftoff the capsule is in orbit. The engineer signs the sheet one last time. This one goes at the bottom, under four other signatures. The line reads: launch, nominal, go."
        ],
        "questions": [
          {
            "q": "How many items are on the countdown list?",
            "choices": [
              "Ten",
              "Forty",
              "Four thousand items",
              "Four hundred"
            ],
            "answer": 3,
            "hint": "The first two sentences of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "At what time in the count do the engines light?",
            "choices": [
              "T minus nine hours, when the count began",
              "T minus six seconds",
              "Zero, when the clamps let go",
              "T minus ten seconds, the loud part"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what does 'nominal' mean on the sheet?",
            "choices": [
              "Normal, as planned",
              "Named after the mission",
              "Smaller than was expected",
              "Loud enough to shake windows"
            ],
            "answer": 0,
            "hint": "The last word before 'go' after a successful launch; everything went as planned.",
            "skill": "Word meanings"
          },
          {
            "q": "Why do the engines run for six seconds before the clamps let go?",
            "choices": [
              "So the computer can check that all four are burning evenly before the rocket is released",
              "So that the four hold-down clamps have time to warm up before they are asked to let go together",
              "Because the four hundred people on the count each have to say the word go one more time at the end",
              "So that the sound of the engines has time to reach the blockhouse before the rocket leaves the pad"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentences about the computer checking.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The loud part",
              "The blockhouse windows",
              "What the countdown really is: four hundred people each agreeing their piece is ready",
              "The six seconds when the engines burn at full power while the clamps still hold the rocket down"
            ],
            "answer": 2,
            "hint": "The last two sentences of paragraph 1.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Countdown math",
          "points": [
            "Hours to seconds: × 3,600.",
            "Items over hours: items an hour.",
            "Minutes to orbit as seconds: × 60.",
            "Different bottoms: make them the same first. 1/3 + 1/2 = 2/6 + 3/6 = 5/6."
          ],
          "example": "2 hours × 3,600 = 7,200 seconds."
        },
        "problems": [
          {
            "q": "The count runs 9 hours. An hour is 3,600 seconds. How many seconds is the count?",
            "answer": "32400",
            "accept": [
              "32,400"
            ],
            "hint": "9 × 3,600.",
            "skill": "Multiplying"
          },
          {
            "q": "The launch team works through 400 checklist items over 9 hours. About how many an hour, rounded down?",
            "answer": "44",
            "hint": "400 ÷ 9 is 44 with 4 left over.",
            "skill": "Dividing"
          },
          {
            "q": "The capsule reaches orbit 8 and a half minutes after liftoff. How many seconds is that?",
            "answer": "510",
            "hint": "8 × 60 = 480, plus 30.",
            "skill": "Multi-step problems"
          },
          {
            "q": "During the hold, the team spent 1/2 of the time checking fuel and 1/5 of it checking the weather. How much of the hold is that? (write a fraction)",
            "answer": "7/10",
            "hint": "Make the bottoms the same: 1/2 is 5/10 and 1/5 is 2/10. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The sound reaches the blockhouse 5 seconds after liftoff. Sound travels about 1,100 feet a second. About how far away is the blockhouse, in feet?",
            "answer": "5500",
            "accept": [
              "5,500"
            ],
            "hint": "5 × 1,100.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The answer sits between two paragraphs",
            "points": [
              "The last question is built so that no single paragraph answers it. Plan on using two from the start.",
              "Say the fact from one paragraph, then the fact from the other, then say 'so'. Whatever comes after 'so' is the answer you are hunting.",
              "If a choice needs something the report never mentions, it is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the store orders a year of flour in October. Paragraph three: the road closes in November. So the order is beating the road closure. Neither line says that by itself."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The count began nine hours before launch with a list of four hundred items.",
                "Teamwork is what makes any difficult project succeed in the end.",
                "Once the engines are alight the launch is committed and cannot be stopped, so the last six seconds on the pad are only there to let the sound of the engines build.",
                "Nothing here is left to chance: the order of the build and the count are both arranged so that anything wrong stops the rocket before it moves."
              ],
              "answer": 3,
              "hint": "The four hundred voices, the six seconds on the clamps, and the order of the whole build. Ask what all three of those are guarding against.",
              "skill": "Central idea and evidence",
              "evidence": "The count is not a formality. It is four hundred people agreeing, one at a time, that their piece is ready."
            },
            {
              "q": "Claim: the launch can still be stopped after the engines are alight. Which sentence from the report best supports that claim?",
              "choices": [
                "Five hundred tons rises off the pad slower than a person can walk, then faster, on a column of fire three hundred feet long.",
                "If one is not, the engines shut down and the rocket stays.",
                "The last ten seconds are the loud part, but the count began nine hours ago, at T minus nine hours.",
                "It is four hundred people agreeing, one at a time, that their piece is ready."
              ],
              "answer": 1,
              "hint": "The claim fixes a moment: after the engines are burning. Three of these never say what happens if something is wrong once the engines are lit. Read the timing.",
              "skill": "Finding details",
              "evidence": "If one is not, the engines shut down and the rocket stays."
            },
            {
              "q": "Why does the report end with a paragraph that lists the whole build over again in order?",
              "choices": [
                "To show the order was forced by the work itself rather than chosen, which is why nothing in it could be skipped.",
                "To introduce the parts of the rocket for the first time, naming the first stage, the second stage and the capsule in turn.",
                "To set this launch against an earlier launch and compare them, so a reader can see which of the two was put together better.",
                "To give instructions for putting a second rocket together, stage by stage, so that the next crew can follow the same order."
              ],
              "answer": 0,
              "hint": "Nothing in that paragraph is new. Notice that every item on the list is followed by the word 'because', and ask what a list like that is proving.",
              "skill": "Author's purpose and structure",
              "evidence": "The stack went up in the only order it could"
            },
            {
              "q": "The report says 'a rocket that has not been counted down is a guess'. What is that telling you about the count?",
              "choices": [
                "Without it, nobody actually knows whether the rocket is ready to fly.",
                "The count is only a rough estimate of when the rocket will leave the pad.",
                "Guessing how many seconds are left before liftoff is part of doing the count.",
                "The count is a tradition that makes no real difference to whether the rocket flies."
              ],
              "answer": 0,
              "hint": "Set that line beside the one that says the count is not a formality. If a counted rocket is something known, what is an uncounted one?",
              "skill": "Word meanings",
              "evidence": "and the count, because a rocket that has not been counted down is a guess"
            },
            {
              "q": "Paragraphs 1 and 2 together explain why the engines burn for six seconds before the rocket is allowed to move. What is the reason?",
              "choices": [
                "The rocket needs six seconds to build up enough weight to lift off the pad.",
                "The sound has to reach the blockhouse before the clamps are able to release.",
                "The engines are the one system nobody can check until it is actually running, so that check is made with the rocket still clamped down.",
                "The four hundred items on the list are read out once more during those six seconds, so every system is polled a second time before the clamps let go."
              ],
              "answer": 2,
              "hint": "Paragraph one says every system is checked and any check can stop the clock. Paragraph two shows the one check that cannot happen until the thing is switched on. Put them together.",
              "skill": "Reading between the lines",
              "evidence": "for six seconds the rocket stands on the pad at full power, held down by the four clamps. All that time, the computer checks that all four engines are burning evenly"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 3 × 6 means 3 groups of 6.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "3 × 6 = 18, so 18 in 3 equal rows is 6 in each."
          },
          "problems": [
            {
              "q": "The engineer lays out heat-shield tiles in 5 rows of 4. How many tiles is that?",
              "answer": "20",
              "hint": "5 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "20 heat-shield tiles are set out in 5 equal rows. How many tiles are in each row?",
              "answer": "4",
              "hint": "20 split into 5 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 204 miles, then 130 more are added and 16 are taken off. What does the log show now?",
              "answer": "318",
              "hint": "Add 204 and 130 first, then take 16 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 1/6 + 1/6 (write a fraction)",
              "answer": "2/6",
              "hint": "Same bottom. 1 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 8 feet wide and 7 feet long. How many feet is it all the way around the edge?",
              "answer": "30",
              "hint": "Two sides of 8 and two sides of 7: 8 + 8 + 7 + 7.",
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
            "example": "(3 + 4) × 8 = 56: parentheses first, then multiply."
          },
          "problems": [
            {
              "q": "The plan allows 135.75 minutes. The engineer uses 27.95 minutes on the first check and 38.65 on the second. How many minutes are left?",
              "answer": "69.15",
              "hint": "Add the two amounts used first, then take that from 135.75. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "10% of the miles counted is 24. How many were counted in all?",
              "answer": "240",
              "hint": "24 is 10 hundredths of the whole: 24 ÷ 10 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer counts 10 red wires and 25 blue wires. In its simplest form, what is the ratio of red wires to blue wires? (write it like 2:3)",
              "answer": "2:5",
              "accept": [
                "2 to 5"
              ],
              "hint": "Divide both by 5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out (5 + 1) × 6. What is it?",
              "answer": "36",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "The cold-test chamber read −11 degrees at midnight and rose 9 degrees by dawn. What does it read at dawn?",
              "answer": "-2",
              "accept": [
                "−2"
              ],
              "hint": "Start at −11 and count 9 steps up.",
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
              "A two-step equation: undo the last step first. In (x + 5) × 3 = 27, divide by 3, then take off 5."
            ],
            "example": "(x + 5) × 3 = 27, so x + 5 = 9, so x = 4."
          },
          "problems": [
            {
              "q": "The engineer has 30 minutes to spend and each check takes 1.5 minutes. How many checks is that enough for?",
              "answer": "20",
              "hint": "30 ÷ 1.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The number of visitors at the viewing area fell by 20% to 256. How many visitors were there before?",
              "answer": "320",
              "hint": "256 is 80% of the old number.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The cold-test chamber read 21 degrees, then it was chilled 33 degrees. What does it read now?",
              "answer": "-12",
              "accept": [
                "−12"
              ],
              "hint": "From 21 down to 0 is 21, and there are 12 left to fall.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 30) × 2 = 80",
              "answer": "10",
              "hint": "Divide both sides by 2 first, then take 30 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 2. The marked length on the model is 4 inches. How many inches is the real one?",
              "answer": "8",
              "hint": "Every inch on the model is 2 inches for real.",
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
            "example": "y = 3x + 5 when x = 6: 3 × 6 + 5 = 23."
          },
          "problems": [
            {
              "q": "The number of checks done follows the rule y = 6x + 8, where x is the hour. What is y when x = 4?",
              "answer": "32",
              "hint": "Put 4 in for x: 6 × 4 + 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 3² + 4²?",
              "answer": "25",
              "hint": "3 × 3 = 9 and 4 × 4 = 16. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 29-foot rope reaches the top of a 20-foot pole. How far is the bottom end of the rope from the base, in feet?",
              "answer": "21",
              "hint": "b² = c² − a² = 841 − 400 = 441. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x + 24 − 4x = 44",
              "answer": "4",
              "hint": "Collect the x's first: 5x + 24 = 44.",
              "skill": "Equations"
            },
            {
              "q": "What is 4 × 10^5 ÷ 10^4?",
              "answer": "40",
              "hint": "Dividing subtracts the powers: 10^5 ÷ 10^4 = 10^1. So 4 × 10.",
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
            "An 'unless' at the end can swap your number for a word. Check it before you type."
          ],
          "example": "'Type the total, unless the gate is locked, in which case type STOP.' Check the gate first."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of items on the count list: 400.",
          "Divide by the number of first-stage engines: 4.",
          "Subtract the seconds the engines burn on the pad before release: 6.",
          "Add the number of signatures on the sheet: 5.",
          "Type the result, unless the count's rules let one single person stop the clock, in which case type HOLD instead."
        ],
        "prompt": "Your answer:",
        "answer": "HOLD",
        "accept": [
          "hold",
          "Hold",
          "hold.",
          "HOLD."
        ],
        "hint": "Steps 1 to 4 are real work, but step 5 asks a question about the count first. Look at what any one of the four hundred is allowed to do."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
