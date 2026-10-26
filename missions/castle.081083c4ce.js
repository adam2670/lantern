// ODYSSEY — campaign "castle". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "castle",
  "ready": true,
  "kind": "build",
  "readingLevel": {
    "fk": 5.5,
    "cl": 5.4
  },
  "grade": "5",
  "kindLabel": "Build",
  "form": "goat",
  "title": "Siege Works",
  "subtitle": "A field outside a castle wall, the year 1300",
  "pitch": "Five days building a trebuchet, the biggest kind of throwing machine ever made without an engine: a frame, a beam, a counterweight, a sling, and a first stone that flies farther than a football field. The machine is the progress bar.",
  "scene": "assets/scene-castle.jpg",
  "buildArt": "trebuchet",
  "progress": {
    "unit": "parts",
    "total": 5
  },
  "dayNoun": "Day",
  "stageNoun": "Part",
  "finalNoun": "First throw",
  "stages": [
    "Frame",
    "Beam",
    "Counterweight",
    "Sling",
    "First throw"
  ],
  "reconNoun": "Engineer's Plans",
  "legs": {
    "recon": "Engineer's plans",
    "nav": "Siege math",
    "orders": "Build orders",
    "debrief": "Fireside"
  },
  "rules": [
    "Stuck on a measure? <b>Flag it</b> and move on. Pending items come back at the fire.",
    "Plans: read the questions <b>before</b> the sheet.",
    "Build orders: read <b>every</b> step before you cut anything."
  ],
  "fact": "A big trebuchet could throw a three-hundred-pound stone the length of three football fields, and hit the same spot on a wall again and again, all day, until the wall gave up. No gunpowder. Just a very heavy box falling.",
  "finale": {
    "prompt": "The first stone is in the air. Which color banner goes on the frame for the camp to see?",
    "options": [
      {
        "label": "Red",
        "color": "#FF6B6B"
      },
      {
        "label": "Gold",
        "color": "#FFB454"
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
    "done": "Raise it. Then reload. A trebuchet that throws once is a sculpture."
  },
  "patrols": [
    {
      "id": "castle-1",
      "title": "The Frame",
      "recon": {
        "lesson": {
          "title": "Questions first, then the plans",
          "points": [
            "Read the five questions before the plans. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Sizes in feet are details. Circle them.",
            "The answer is always in the plans. You never have to guess."
          ],
          "example": "Question: 'How far apart do the trestles stand?' Hunt for 'apart' and a number."
        },
        "title": "Engineer's Plans: A Very Heavy Box",
        "passage": [
          "A trebuchet is a see-saw with a very heavy box on one end and a stone on the other. The heavy end drops, the light end flies up, and the stone goes with it. That is the whole machine. Everything else, the frame, the beam, the axle, the sling, exists to make the drop bigger, the swing faster, and the throw longer. The one in the plans stands twenty feet tall at the axle, and when the beam is up it reaches sixty feet, taller than the castle wall it is meant to break.",
          "The frame goes up first, and it is built like a bridge. Two A-shaped trestles of oak, each made of beams a foot square, stand fifteen feet apart with the axle between them. They are braced with diagonal timbers so that the whole thing cannot rack sideways when the counterweight falls. Nothing is nailed. Every joint is cut so that one beam locks into another. Then the joint is pinned with an oak peg driven through both. That is because a peg can be knocked out and the machine taken apart and carted to the next siege. A trebuchet is furniture, not a building.",
          "The timber is green oak, cut this winter, because green oak is easier to work and shrinks as it dries. That way every joint gets tighter over the weeks of a siege instead of looser. The crew is twelve: four carpenters, six laborers and two boys who carry pegs and water. Day one ends with both trestles standing, braced and pegged. The axle, a single oak trunk a foot and a half thick, lies beside them ready to lift. The engineer walks around the frame once and pushes on each trestle with a shoulder. Then the engineer writes: square, plumb, no movement."
        ],
        "questions": [
          {
            "q": "How tall does the beam reach when it is up?",
            "choices": [
              "Twenty feet, the height of the axle",
              "Sixty feet",
              "Fifteen feet, the gap between the trestles",
              "A hundred feet"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How are the joints held together?",
            "choices": [
              "Cut to lock and pinned with oak pegs",
              "With iron nails driven through both beams",
              "With rope lashed around each joint and pulled tight",
              "With oak wedges tapped in"
            ],
            "answer": 0,
            "hint": "Paragraph 2, 'Nothing is nailed.' and the two sentences after it.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does 'rack sideways' mean?",
            "choices": [
              "Lean or twist out of square",
              "Sink slowly into the soft ground",
              "Shake apart at the pegged joints",
              "Creak under the load"
            ],
            "answer": 0,
            "hint": "The braces stop the frame from racking; racking is the frame twisting out of shape.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is the machine built with pegs instead of nails?",
            "choices": [
              "Because green oak shrinks as it dries and would soon work its way loose around any iron nail driven into it",
              "So the pegs can be knocked out and the machine taken apart and moved to the next siege",
              "Because a peg cut from the same green oak swells as the joint dries and locks the beams together",
              "Because every joint is cut so that one beam locks into another and no fastening is needed at all"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'carted to the next siege'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The castle wall",
              "What a trebuchet is, in the simplest terms: a see-saw with a heavy box",
              "How the two A-shaped trestles are braced so that the frame cannot rack sideways",
              "Why the timber is green oak cut this winter, and what happens to it as it dries"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Frame math",
          "points": [
            "How far above: the top height minus the lower height.",
            "Crew: add the groups.",
            "Common multiples: count by both numbers. 4, 8, 12 and 6, 12: they meet at 12.",
            "Same bottom: add the tops. 1/4 + 2/4 = 3/4."
          ],
          "example": "35 − 15 = 20 feet higher."
        },
        "problems": [
          {
            "q": "The axle is 20 feet up and, partway through the swing, the beam tip is 50 feet up. How many feet above the axle is the tip?",
            "answer": "30",
            "hint": "50 − 20.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The crew is 4 carpenters, 6 laborers and 2 boys. How many people?",
            "answer": "12",
            "hint": "4 + 6 + 2.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "One carpenter drives a peg every 6 minutes and another every 9 minutes. They start together. After how many minutes do they next drive pegs at the same moment?",
            "answer": "18",
            "hint": "Count by 6s and by 9s. Which number is on both lists first?",
            "skill": "Multiplying"
          },
          {
            "q": "Each joint takes 2 pegs and the frame has 24 joints. How many pegs?",
            "answer": "48",
            "hint": "2 × 24.",
            "skill": "Multiplying"
          },
          {
            "q": "The crew pegged 3/12 of the joints before noon and 4/12 after. What fraction of the joints is pegged? (write a fraction)",
            "answer": "7/12",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "One idea, three paragraphs",
            "points": [
              "Read to the end, then say in one sentence of your own what the whole report was about. Do that before you look at a single choice.",
              "The wrong answers are usually true. They cover one paragraph, or they are wider than anything the report says, or they contradict a line you have already read.",
              "Four more moves follow: prove a claim with one sentence, say what a paragraph is for, work a word out from its sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a windmill: how the sails turn, what the miller does when the wind drops, what the village eats. 'The sails have four arms' covers one paragraph. 'Wind is free' covers nothing. 'A village's bread depends on the weather' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The axle is a single oak trunk a foot and a half thick, and at the end of the first day it is still lying on the ground beside the trestles, waiting to be lifted.",
                "A trebuchet is a simple see-saw, and every part of the first day's work serves the drop and the fact that the machine has to come apart again afterward.",
                "Oak is the strongest timber available to any builder, which is why every important piece here, the trestles, the axle and the beam, is cut from oak and not from pine.",
                "The frame is nailed together so that it cannot come apart, and once the trestles are standing the machine has to stay where it was built for the rest of the siege."
              ],
              "answer": 1,
              "hint": "The see-saw, the pegged joints, the green oak. One choice is a measurement from the last paragraph, and one is the opposite of three words in the middle of the report.",
              "skill": "Central idea and evidence",
              "evidence": "Everything else, the frame, the beam, the axle, the sling, exists to make the drop bigger, the swing faster, and the throw longer."
            },
            {
              "q": "Claim: the machine is built to be taken apart and moved. Which sentence from the report best supports that claim?",
              "choices": [
                "That is because a peg can be knocked out and the machine taken apart and carted to the next siege.",
                "Two A-shaped trestles of oak, each made of beams a foot square, stand fifteen feet apart with the axle between them.",
                "They are braced with diagonal timbers so that the whole thing cannot rack sideways when the counterweight falls.",
                "The crew is twelve: four carpenters, six laborers and two boys who carry pegs and water."
              ],
              "answer": 0,
              "hint": "The claim is about coming apart and going somewhere. Only one sentence follows a peg all the way to the next siege.",
              "skill": "Finding details",
              "evidence": "That is because a peg can be knocked out and the machine taken apart and carted to the next siege."
            },
            {
              "q": "Why does the first paragraph describe the whole machine as a see-saw before anything is built?",
              "choices": [
                "It gives the reader one simple picture to hang every later part on.",
                "It shows that a trebuchet is really a toy rather than a weapon.",
                "It compares the sixty feet the beam reaches with the height of the castle wall it is meant to break.",
                "It explains how the axle is cut from a single oak trunk and set between the two trestles."
              ],
              "answer": 0,
              "hint": "Look at the two short sentences that come after the picture. They tell you what the picture is worth to a reader who has not seen one of these.",
              "skill": "Author's purpose and structure",
              "evidence": "That is the whole machine."
            },
            {
              "q": "The report says 'A trebuchet is furniture, not a building.' What does that mean here?",
              "choices": [
                "It is meant to last just as long as the siege and then be broken up for firewood.",
                "It is made to be taken apart and moved, not to stand in one place forever.",
                "It is ordered from a carpenter's shop and brought to the siege already put together.",
                "It is finished and polished smooth the way a good table is, instead of being left rough."
              ],
              "answer": 1,
              "hint": "The sentence before it explains what a peg lets somebody do. That is the whole difference between the two words.",
              "skill": "Word meanings",
              "evidence": "That is because a peg can be knocked out and the machine taken apart and carted to the next siege."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why timber that is still wet is the right choice here. Why is it?",
              "choices": [
                "Wet oak is heavier than dry oak, and that extra weight in the trestles is what holds the whole frame down when the counterweight falls.",
                "The joints are pegged rather than nailed, and wood that shrinks as it dries pulls those joints tighter as the weeks go on.",
                "Wet oak bends instead of snapping, so the beam can take the shock of the drop.",
                "Wet oak is the only timber that can be cut in the winter, and the whole frame had to be built over the winter to be ready in time."
              ],
              "answer": 1,
              "hint": "One paragraph tells you what is holding the joints together. The other tells you what green oak does over time. Neither one alone explains the choice.",
              "skill": "Reading between the lines",
              "evidence": "The timber is green oak, cut this winter, because green oak is easier to work and shrinks as it dries. That way every joint gets tighter over the weeks of a siege instead of looser."
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
              "q": "The engineer counted 9 beams yesterday and three times as many today. How many beams today?",
              "answer": "27",
              "hint": "Three times 9: 9 + 9 + 9.",
              "skill": "Multiplying"
            },
            {
              "q": "The engineer packs 72 beams into frames of 9. How many frames is that?",
              "answer": "8",
              "hint": "How many 9s make 72?",
              "skill": "Dividing"
            },
            {
              "q": "The engineer starts with 465 pegs and uses 35. How many are left?",
              "answer": "430",
              "hint": "465 − 35.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "1/4 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "3/4",
              "hint": "The whole job is 4/4. Take 1/4 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square beam mat is 5 squares on each side. How many squares is that?",
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
              "Decimal × decimal: multiply without the points, then count the decimal places in both numbers. 1.3 × 2.1: 13 × 21 = 273, two places, so 2.73.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "A regular beam takes 2.75 hours. A long one takes 1.6 times as long. How many hours does the long one take?",
              "answer": "4.4",
              "hint": "Multiply 275 × 16 without the points, then put back 3 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "8 of the 80 pegs are set aside. What percent is that? (write just the number)",
              "answer": "10",
              "accept": [
                "10%"
              ],
              "hint": "8 out of 80, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 2 beams there are 3 pegs. There are 18 pegs. How many beams?",
              "answer": "12",
              "hint": "18 ÷ 3 = 6 groups. Each group has 2 beams.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out 17 + 4 × 7. What is it?",
              "answer": "45",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the hoist's load hung 10 feet above the wall walk. By dark it had been let down to 4 feet below the wall walk. How far did it go down, in feet?",
              "answer": "14",
              "hint": "From 10 down to the wall walk is 10, then 4 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A rate times a count: if one job takes 1.5 hours, 6 jobs take 6 × 1.5 = 9 hours.",
              "Percent change: the change ÷ the starting number, then × 100.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: get the x part on its own first, then undo the multiplying."
            ],
            "example": "50 − 4x = 14, so 4x = 50 − 14 = 36, so x = 9."
          },
          "problems": [
            {
              "q": "One beam needs 2.5 hours. How many hours do 24 beams need?",
              "answer": "60",
              "hint": "24 × 2.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer counted 320 pegs on the first pass and 288 on the second. By what percent did the count change? (write just the number)",
              "answer": "10",
              "accept": [
                "10%",
                "-10",
                "−10",
                "-10%",
                "−10%"
              ],
              "hint": "The change is 32. 32 out of 320, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "At dawn the hoist's load hung 10 feet below the wall walk, and at dark it hung 17 feet below the wall walk. How far did it go down, in feet?",
              "answer": "7",
              "hint": "From −10 down to −17.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 69 − 8x = 5",
              "answer": "8",
              "hint": "Move 8x to the right and 5 to the left: 8x = 64.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 5 feet. The castle wall is really 50 feet long. How many inches is it on the plan?",
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
              "A straight-line rule is y = mx + b: b is where you start, m is the change each step. If it goes down each step, take m away each time.",
              "A small 3 means three of the number multiplied: 4³ = 4 × 4 × 4 = 64.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start with 45 and use 2 an hour: after 6 hours, 45 − 2 × 6 = 33 are left."
          },
          "problems": [
            {
              "q": "The engineer starts with 71 pegs and uses 8 every hour. How many are left after 7 hours?",
              "answer": "15",
              "hint": "8 × 7 = 56 used, taken off 71.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 6 small cubes along every edge. How many small cubes make it up?",
              "answer": "216",
              "hint": "6³ means 6 × 6 × 6.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope runs from the top of a pole to a point 15 feet away on the ground. How tall is the pole, in feet?",
              "answer": "8",
              "hint": "a² = c² − b² = 289 − 225 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x = x + 12",
              "answer": "3",
              "hint": "Take x off both sides: 4x = 12. Then divide by 4.",
              "skill": "Equations"
            },
            {
              "q": "The counterweight box holds 20,000 pounds of stone. Written as 2 × 10 to a power, what is the power?",
              "answer": "4",
              "hint": "Count the zeros after 2.",
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
          "example": "Step 2 comes to 70 and step 4 comes to 45. 'Type whichever is less' means 45."
        },
        "skill": "Following directions",
        "steps": [
          "Write the height of the axle above the ground in feet: 20.",
          "Multiply by the number of trestles holding it: 2.",
          "Start again with the gap between the trestles in feet: 15.",
          "Multiply that by the number of carpenters on the crew: 4.",
          "Two numbers stand on the page now, one from step 2 and one from step 4. Type whichever of them is less."
        ],
        "prompt": "Your answer:",
        "answer": "40",
        "hint": "Both numbers are worth working out, but step 5 asks you to compare the step 2 number with the step 4 number and keep the lower."
      }
    },
    {
      "id": "castle-2",
      "title": "The Beam",
      "recon": {
        "lesson": {
          "title": "Two ends of one thing",
          "points": [
            "When the plans give two lengths for one beam, keep them apart: short end, long end.",
            "'Why' about a design: the reason is what it makes the machine do.",
            "A word about the machine is defined by what it does."
          ],
          "example": "'The ladder's top half is six feet, the bottom half eight.' Which half is longer? The bottom. Keep the two lengths apart."
        },
        "title": "Engineer's Plans: Four to One",
        "passage": [
          "The beam is the see-saw itself, and it is not balanced in the middle. The axle passes through it about one fifth of the way along, so that the short arm, on the counterweight side, is ten feet. The long arm, on the stone side, is forty. That is the trick of the whole machine. When the heavy box on the short arm drops ten feet, the tip of the long arm swings up forty. That is four times as far in the same time, four times as fast. So the stone at the end of it is already moving quickly. Only then does the sling add its own whip.",
          "The beam is a single oak trunk fifty feet long, squared with axes and adzes to a foot and a half thick at the axle and tapering toward the tip. That way the long arm is light and the short arm is strong. Carpenters check it for cracks by tapping along its length with a mallet and listening: sound wood rings, cracked wood thuds. A crack in the beam is the one thing that ends a trebuchet, because the beam carries the whole weight of the box at the moment of the throw. A beam that breaks throws the box instead of the stone.",
          "Lifting the beam onto the axle takes the whole crew, two ropes over the top of the trestles, and most of the afternoon. It goes up short arm first and is threaded onto the axle through a hole bored at the pivot point. Then the long arm is hauled down on ropes until its tip touches the ground, box end in the sky, and is tied down. Day two ends with the beam on the axle, roped down. The engineer's note says: fifty feet, no thuds, rings clean."
        ],
        "questions": [
          {
            "q": "How long are the short arm and the long arm?",
            "choices": [
              "Twenty feet and thirty feet",
              "Five feet and forty-five feet",
              "Ten feet and forty feet",
              "Both the same"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the second and third sentences.",
            "skill": "Finding details"
          },
          {
            "q": "How do the carpenters check the beam for cracks?",
            "choices": [
              "By listening to the beam while the whole crew walks it upright on the ropes",
              "By soaking the whole beam in water and watching to see where it runs out",
              "By boring a hole through the beam at the balance point and looking inside",
              "By tapping along it with a mallet and listening for a ring or a thud"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'mallet'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is an 'adze'?",
            "choices": [
              "A kind of rope",
              "A measuring stick",
              "A peg",
              "A tool used with axes for squaring and shaping timber"
            ],
            "answer": 3,
            "hint": "The beam is 'squared with axes and adzes'; an adze is a shaping tool like an axe.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the stone end of the beam move faster than the counterweight end?",
            "choices": [
              "Because the long arm is four times the short arm, so its tip travels four times as far in the same time",
              "Because the stone is light",
              "Because the sling adds a whip of its own at the end",
              "Because the axle is oiled"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence with 'drops ten feet' and the one after it.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "Cracks",
              "The length of the beam",
              "How the crew lifts the beam onto the axle",
              "Why a cracked beam is the one thing that ends a trebuchet"
            ],
            "answer": 2,
            "hint": "Paragraph 3 describes the lift step by step.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Beam math",
          "points": [
            "Long arm ÷ short arm: how many times longer it is.",
            "Feet the tip moves: 4 × the drop.",
            "How much thinner: the thick end minus the thin end.",
            "Two-step: taps along the beam at 1 per foot, then minutes."
          ],
          "example": "30 ÷ 6 = 5, so a 30-foot arm is 5 times as long as a 6-foot arm."
        },
        "problems": [
          {
            "q": "The short arm is 10 feet and the long arm is 40. How many times longer is the long arm?",
            "answer": "4",
            "hint": "40 ÷ 10.",
            "skill": "Dividing"
          },
          {
            "q": "If the counterweight drops 8 feet, how many feet does the tip of the long arm swing?",
            "answer": "32",
            "hint": "8 × 4.",
            "skill": "Multiplying"
          },
          {
            "q": "A carpenter taps once every foot along the 50-foot beam, and each tap takes 6 seconds. How many minutes to tap the whole beam?",
            "answer": "5",
            "hint": "50 × 6 = 300 seconds. 300 ÷ 60.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The beam is a foot and a half thick at the axle, which is 18 inches. It tapers to 6 inches at the tip. How many inches thinner is the tip?",
            "answer": "12",
            "hint": "18 − 6.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "Twelve crew lift the beam with 2 ropes, the same number on each. How many people on each rope?",
            "answer": "6",
            "hint": "12 ÷ 2.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The line that carries the weight",
            "points": [
              "You are hunting for proof, not for matching words. A sentence can share half the claim's vocabulary and still prove nothing.",
              "Read the claim, then read your pick straight after it. If a gap is left open, it is the wrong sentence.",
              "All four choices are real sentences from the report. True is where they all start, so true cannot be what decides it."
            ],
            "example": "Claim: the roof leaks. 'The house was built in 1890' is true and proves nothing. 'There is a bucket on the landing and it is half full' proves it."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "Sound wood rings when it is tapped and cracked wood thuds, so the carpenters go along the whole length of the beam with a mallet, listening as they tap.",
                "Oak is the best timber for building any large machine.",
                "The beam is the machine: an axle set off center turns a short drop into a long fast swing, and a crack anywhere in it would end everything.",
                "The axle passes through the exact middle of the beam, so that the two arms are the same length and the box drops just as far as the stone end rises."
              ],
              "answer": 2,
              "hint": "Ten feet against forty, the tapping test, the lift onto the axle. One choice is the test on its own, and one changes where the axle sits and becomes false.",
              "skill": "Central idea and evidence",
              "evidence": "That is the trick of the whole machine."
            },
            {
              "q": "Claim: a crack matters more in the beam than anywhere else in the machine. Which sentence from the report best supports that claim?",
              "choices": [
                "When the heavy box on the short arm drops ten feet, the tip of the long arm swings up forty.",
                "It goes up short arm first and is threaded onto the axle through a hole bored at the pivot point.",
                "Lifting the beam onto the axle takes the whole crew, two ropes over the top of the trestles, and most of the afternoon.",
                "A beam that breaks throws the box instead of the stone."
              ],
              "answer": 3,
              "hint": "Three of these are about how the beam swings or how it gets onto the axle, not why a crack matters. Look for the sentence that says what a broken beam does.",
              "skill": "Finding details",
              "evidence": "A crack in the beam is the one thing that ends a trebuchet, because the beam carries the whole weight of the box at the moment of the throw. A beam that breaks throws the box instead of the stone."
            },
            {
              "q": "Why does the report explain the ten-feet-to-forty-feet split before it describes the timber?",
              "choices": [
                "To show that one end of the beam is heavier than the other.",
                "To explain how a mallet is used to test a length of wood.",
                "To compare this trebuchet with a smaller machine.",
                "To set out the reason the machine works at all, so the shape of the timber only makes sense once the reader knows it."
              ],
              "answer": 3,
              "hint": "The paragraph calls one thing 'the trick of the whole machine'. Ask what the next paragraph would sound like if you had not been told it.",
              "skill": "Author's purpose and structure",
              "evidence": "That is the trick of the whole machine."
            },
            {
              "q": "The report says 'sound wood rings, cracked wood thuds'. What does sound mean as it is used here?",
              "choices": [
                "Whole, with no crack anywhere in it",
                "Loud when struck with a mallet",
                "Any noise that can be heard",
                "Dried out and seasoned"
              ],
              "answer": 0,
              "hint": "The word is set directly against 'cracked'. Whatever cracked wood is, this word has to be the other thing.",
              "skill": "Word meanings",
              "evidence": "Carpenters check it for cracks by tapping along its length with a mallet and listening: sound wood rings, cracked wood thuds."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why the beam is thick at one end and thin at the other. Why build it that way?",
              "choices": [
                "A thinner tip makes the beam easier to lift onto the axle.",
                "The taper is what stops the beam from cracking as it dries out, because a thinner tip lets the wood shrink evenly along its whole length.",
                "The short arm has to carry the whole weight of the box, while the long arm has to be light enough to swing fast.",
                "The thick end has to be wide enough for the bored axle hole."
              ],
              "answer": 2,
              "hint": "Paragraph one tells you what the long arm has to do in the moment of the throw. Paragraph two tells you what the short arm is holding up. Put the two jobs together.",
              "skill": "Reading between the lines",
              "evidence": "The beam is a single oak trunk fifty feet long, squared with axes and adzes to a foot and a half thick at the axle and tapering toward the tip. That way the long arm is light and the short arm is strong."
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
              "q": "The engineer stacks stones in 5 rows of 5. How many stones is that?",
              "answer": "25",
              "hint": "5 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "25 feet of rope is cut into 5 equal pieces. How many feet long is each piece?",
              "answer": "5",
              "hint": "25 split into 5 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 310 ropes, then 123 more are added and 67 are taken off. What does the log show now?",
              "answer": "366",
              "hint": "Add 310 and 123 first, then take 67 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 4/6 + 1/6 (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom. 4 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "The plan calls for 1,000 pegs. 146 are done and 67 more are under way. How many are still untouched?",
              "answer": "787",
              "hint": "Take 146 off 1000, then take 67 off that.",
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
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The engineer has an oak log 7 1/2 yards long. Each beam is 1 1/4 yards long. How many beams can be cut from the log?",
              "answer": "6",
              "hint": "Make both improper: 15/2 ÷ 5/4. Then multiply by the flip: 15/2 × 4/5.",
              "skill": "Fractions"
            },
            {
              "q": "20% of the ropes counted is 48. How many were counted in all?",
              "answer": "240",
              "hint": "48 is 20 hundredths of the whole: 48 ÷ 20 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer counts 24 feet of beam and 40 ropes. In its simplest form, what is the ratio of feet of beam to ropes? (write it like 2:3)",
              "answer": "3:5",
              "accept": [
                "3 to 5"
              ],
              "hint": "Divide both by 8.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out (3 + 1) × 6. What is it?",
              "answer": "24",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "At midnight the hoist's load hung 10 feet below the wall walk. By dawn it had been hauled up 8 feet. Where does it hang now? Type below the wall walk as a minus number.",
              "answer": "-2",
              "accept": [
                "−2"
              ],
              "hint": "Start at −10 and count 8 steps up.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: the time you have ÷ the time each one takes. 9 hours at 1.5 hours each is 9 ÷ 1.5 = 6.",
              "Working backward: if a count fell by a quarter, the new count is 75% of the old one, so divide by 0.75 to get back to the start.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "4(x + 5) = 36, so x + 5 = 9, so x = 4."
          },
          "problems": [
            {
              "q": "The engineer has 54 hours to spend and each beam takes 2.25. How many beams is that enough for?",
              "answer": "24",
              "hint": "54 ÷ 2.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of ropes fell by 20% to 128. What was it before?",
              "answer": "160",
              "hint": "128 is 80% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pile of counterweight stones shrinks by 11 stones every hour for 5 hours. What is the total change? (Write a loss as a negative number.)",
              "answer": "-55",
              "accept": [
                "−55"
              ],
              "hint": "5 hours of −11 each: 5 × (−11). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 28) × 8 = 288",
              "answer": "8",
              "hint": "Divide both sides by 8 first, then take 28 off.",
              "skill": "Equations"
            },
            {
              "q": "A round sign has a radius of 5 centimeters. Using 3.14 for pi, what is its area in square centimeters?",
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
              "A cube root undoes cubing: 5 × 5 × 5 = 125, so the cube root of 125 is 5.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first: 6x − 2x is 4x. Then undo the plain number."
            ],
            "example": "y = 6x + 7 when x = 3: 6 × 3 + 7 = 25."
          },
          "problems": [
            {
              "q": "The count of ropes follows the rule y = 9x + 24, where x is the hour. What is y when x = 9?",
              "answer": "105",
              "hint": "Put 9 in for x: 9 × 9 + 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube has a volume of 729 cubic feet. How long is one edge, in feet?",
              "answer": "9",
              "hint": "What number times itself twice over makes 729?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope reaches the top of an 8-foot pole. How far is the foot of the rope from the base, in feet?",
              "answer": "15",
              "hint": "b² = c² − a² = 289 − 64 = 225. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x + 30 − 3x = 50",
              "answer": "4",
              "hint": "Collect the x's first: 5x + 30 = 50.",
              "skill": "Equations"
            },
            {
              "q": "The castle's round cistern has a radius of 10 feet and is 3 feet deep. Using 3.14 for pi, what is its volume in cubic feet?",
              "answer": "942",
              "hint": "Volume = 3.14 × radius × radius × depth: 3.14 × 10 × 10 × 3.",
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
            "If the last step asks for a different unit, change it before you type. 3 feet is 36 inches."
          ],
          "example": "'Multiply by 3, then add 5' is not 'add 5, then multiply by 3'."
        },
        "skill": "Following directions",
        "steps": [
          "Write the length of the short arm in feet: 10.",
          "Multiply by 4 to get the long arm.",
          "Add the short arm back on to get the whole beam.",
          "Divide by the number of ropes used to lift the beam onto the axle: 2.",
          "The engineer writes every measurement in inches, and twelve inches make a foot. Turn your answer into inches; do not type the number of feet."
        ],
        "prompt": "Your answer:",
        "answer": "300",
        "hint": "Steps 1 to 4 leave you a length in feet. Step 5 wants that same length counted in inches instead."
      }
    },
    {
      "id": "castle-3",
      "title": "The Counterweight",
      "recon": {
        "lesson": {
          "title": "Why it hangs",
          "points": [
            "When the plans explain a choice between two designs, find the sentence that says why one is better.",
            "Weights in tons are details.",
            "A word about the box is defined by how it moves."
          ],
          "example": "'A wide boat tips less than a narrow one.' Why wide? It tips less."
        },
        "title": "Engineer's Plans: Ten Tons in a Box",
        "passage": [
          "The counterweight is a wooden box, banded with iron. It hangs from the short arm of the beam on a hinge. It is filled with whatever is heavy and near: stones, sand, lead if there is any, earth if there is nothing else. The box on the plans holds about ten tons. That is the weight of six cars, hanging from one end of a see-saw, twenty feet in the air. Everything about the frame and the beam was built for the moment that box is let go.",
          "The box hangs on a hinge instead of being fixed to the beam. There is a reason for that, and the old engineers learned it the hard way. A fixed box swings through an arc as the beam turns, and the swing shakes the whole frame and wastes the fall. A hinged box drops almost straight down, the way a weight on a string does, and all of its fall goes into turning the beam. A hinged trebuchet throws farther and stands longer, and its stone lands closer to the same spot every time. That matters, because a wall is broken by hitting one place a hundred times, not a hundred places once.",
          "Loading the box takes the whole of day three. Stones go in by the basket, two men to a basket, sixty pounds a basket, up a ladder and over the rim. The boys count the baskets on a tally stick. The box must be filled evenly, side to side, or it will hang crooked and twist the beam. By evening the tally stick shows three hundred and thirty baskets, and the box hangs level. The beam has ten tons on its short end and nothing on its long end. It strains at the ropes that hold it down, wanting to swing."
        ],
        "questions": [
          {
            "q": "About how much does the loaded counterweight weigh?",
            "choices": [
              "About ten tons",
              "One ton",
              "About a hundred tons of stone and sand",
              "Six tons"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the fourth sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How much does one basket of stones weigh?",
            "choices": [
              "A pound",
              "Sixty pounds",
              "Six hundred pounds",
              "A ton"
            ],
            "answer": 1,
            "hint": "Paragraph 3, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is a 'tally stick'?",
            "choices": [
              "A stick used to level off each basket",
              "A ladder rung",
              "A stick with notches cut in it to keep count",
              "A beam"
            ],
            "answer": 2,
            "hint": "The boys 'count the baskets on a tally stick'; a tally is a count.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does a hinged box throw farther than a fixed one?",
            "choices": [
              "Because a fixed box swings through an arc as the beam turns, and that arc drags the whole machine forward along the ground",
              "Because the hinge lets the box swing out sideways at the top of the throw and adds its own whip to the end of the sling",
              "Because a box that hangs on a hinge can be loaded evenly from side to side and will never twist the beam out of line",
              "Because it drops almost straight down, so all its fall goes into turning the beam instead of shaking the frame"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the fourth sentence.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The hinge",
              "The castle wall",
              "Why the box hangs on a hinge instead of being fixed",
              "Loading the box, basket by basket, evenly"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 3 says 'Loading the box takes the whole of day three.'",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Counterweight math",
          "points": [
            "Volume of a box: length × width × height. 3 × 2 × 4 = 24 cubic feet.",
            "Pounds in the baskets: baskets × pounds per basket.",
            "Cars: tons ÷ tons per car.",
            "Two-step: baskets per hour, then hours."
          ],
          "example": "40 baskets at 50 pounds is 40 × 50 = 2,000 pounds."
        },
        "problems": [
          {
            "q": "The counterweight box is 6 feet long, 5 feet wide and 4 feet tall. How many cubic feet of stone and earth does it hold?",
            "answer": "120",
            "hint": "Length × width × height: 6 × 5 first, then times 4.",
            "skill": "Volume"
          },
          {
            "q": "The tally stick shows 330 baskets at 60 pounds each. How many pounds is that?",
            "answer": "19800",
            "accept": [
              "19,800"
            ],
            "hint": "330 × 60: 330 × 6 = 1,980, then add a zero.",
            "skill": "Multiplying"
          },
          {
            "q": "Ten tons is the weight of 6 cars, so how many pounds does one car weigh, using 20,000 pounds ÷ 6, rounded down?",
            "answer": "3333",
            "accept": [
              "3,333"
            ],
            "hint": "20,000 ÷ 6 is 3,333 with 2 left over.",
            "skill": "Dividing"
          },
          {
            "q": "The crew loads 30 baskets an hour. How many hours to load 330 baskets?",
            "answer": "11",
            "hint": "330 ÷ 30.",
            "skill": "Dividing"
          },
          {
            "q": "Two men carry each basket. If 6 men are carrying, how many baskets are moving at once?",
            "answer": "3",
            "hint": "6 ÷ 2.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Two things, side by side",
            "points": [
              "Some paragraphs are built by setting two things against each other. Spot the pair and you have named the shape.",
              "The giveaway is two sentences that open the same way and end opposite, or the words 'instead', 'but' and 'while'.",
              "Naming the shape is not retelling the paragraph. A choice that only repeats the content has named nothing."
            ],
            "example": "'A nail holds until it rusts. A peg holds until it rots.' Two sentences, same opening, opposite ending. That paragraph is a comparison and nothing else."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Ten tons hanging on a hinge is where the machine's power comes from, and hanging it so that it drops straight and level is what makes the throws repeat.",
                "The box on the plans holds about ten tons, which is the weight of six cars, and it hangs on a hinge from the short arm of the beam, twenty feet up in the air.",
                "The engineers of that time understood weight better than anybody does now.",
                "A box fixed to the beam throws farther than a box on a hinge."
              ],
              "answer": 0,
              "hint": "The box, the hinge, the even loading. Ask what all three are aimed at. One choice is a weight from the first paragraph, and one reverses the middle one.",
              "skill": "Central idea and evidence",
              "evidence": "A hinged trebuchet throws farther and stands longer, and its stone lands closer to the same spot every time. That matters, because a wall is broken by hitting one place a hundred times, not a hundred places once."
            },
            {
              "q": "Claim: landing in the same place matters more than any single long throw. Which sentence from the report best supports that claim?",
              "choices": [
                "The box must be filled evenly, side to side, or it will hang crooked and twist the beam.",
                "That matters, because a wall is broken by hitting one place a hundred times, not a hundred places once.",
                "A fixed box swings through an arc as the beam turns, and the swing shakes the whole frame and wastes the fall.",
                "Everything about the frame and the beam was built for the moment that box is let go."
              ],
              "answer": 1,
              "hint": "The claim is about repeating a hit. Only one sentence says what actually brings a wall down, and it says it in the same breath as the word 'matters'.",
              "skill": "Finding details",
              "evidence": "That matters, because a wall is broken by hitting one place a hundred times, not a hundred places once."
            },
            {
              "q": "How is the second paragraph organized?",
              "choices": [
                "It lists in order the materials that go into filling the box.",
                "It walks through the sequence of loading the box on day three.",
                "It sets a fixed box against a hinged one, one after the other, to show why the hinge was worth learning.",
                "It names a problem and then leaves it unsolved."
              ],
              "answer": 2,
              "hint": "Two sentences in a row begin almost the same way and end in opposite results. That pairing is the shape of the paragraph.",
              "skill": "Author's purpose and structure",
              "evidence": "A fixed box swings through an arc as the beam turns, and the swing shakes the whole frame and wastes the fall."
            },
            {
              "q": "The report says a fixed box's swing 'wastes the fall'. What does that mean here?",
              "choices": [
                "The box is filled with fewer stones than it can hold, so the drop it makes is smaller than the one the beam was built for.",
                "The box has to be emptied and filled again with stones after every single throw, which costs the crew most of a day.",
                "The fall takes longer than the crew can afford to wait, so fewer stones get thrown in a day.",
                "Part of the box's drop goes into shaking the frame instead of turning the beam."
              ],
              "answer": 3,
              "hint": "The very next sentence describes what a hinged box does with all of its fall. Whatever the fixed box is losing has to be the difference between those two.",
              "skill": "Word meanings",
              "evidence": "A hinged box drops almost straight down, the way a weight on a string does, and all of its fall goes into turning the beam."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why a crooked box is worse than it sounds. Why is it?",
              "choices": [
                "A crooked box will not fit between the two trestles of the frame.",
                "The tally stick cannot be kept accurate if the baskets are uneven, and without an accurate count the boys never know when ten tons has gone in.",
                "An uneven box makes the ladder unsafe for the men carrying baskets.",
                "Ten tons is hanging twenty feet up on one end of the beam, so any lean puts a twist into the one timber the machine cannot do without."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you how much is hanging there and how high. The last paragraph tells you what a crooked box does to the beam. Hold both together.",
              "skill": "Reading between the lines",
              "evidence": "The box must be filled evenly, side to side, or it will hang crooked and twist the beam."
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
              "q": "Every box needs 6 tons, and there are 5 boxes. How many tons is that?",
              "answer": "30",
              "hint": "5 groups of 6, so 5 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "The engineer splits 60 tons in half. How many tons is one half?",
              "answer": "30",
              "hint": "Half of 60.",
              "skill": "Dividing"
            },
            {
              "q": "The engineer needs 700 baskets of stones and has 256. How many more are needed?",
              "answer": "444",
              "hint": "700 − 256.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the engineer has finished 5 of them. What fraction is done? (write a fraction)",
              "answer": "5/8",
              "hint": "5 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 8 squares wide and 7 squares long. The engineer has covered 8 squares. How many squares are left to cover?",
              "answer": "48",
              "hint": "8 × 7 squares in all, then take 8 off.",
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
              "q": "The engineer has 10.2 hours of joinery. Each beam takes 0.85 hours. How many beams is that enough for?",
              "answer": "12",
              "hint": "Move both points 2 places to the right: 1020 ÷ 85.",
              "skill": "Decimals"
            },
            {
              "q": "Of 120 baskets of stones, 25% are struck off the list. How many are left on it?",
              "answer": "90",
              "hint": "25% of 120 is 30. Take that off 120.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer shares 16 chains between two teams in the ratio 1 to 3. How many does the smaller share get?",
              "answer": "4",
              "hint": "1 + 3 = 4 parts. 16 ÷ 4 = 4 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out 7 × 12 − 2 × 2. What is it?",
              "answer": "80",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "The lowest the hoist's load hung all day was 14 feet below the wall walk, and the highest was 9 feet below the wall walk. How much higher is the highest, in feet?",
              "answer": "5",
              "hint": "From −14 up to −9.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "Find the rate for one first: 4 jobs in 11 hours is 11 ÷ 4 = 2.75 hours each, so 6 jobs take 16.5 hours.",
              "Percent of a number: turn the percent into a fraction of 100, then multiply.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "4(x + 5) = 36, so x + 5 = 9, so x = 4."
          },
          "problems": [
            {
              "q": "16 beams took 36 hours. At the same rate, how many hours would 20 beams take?",
              "answer": "45",
              "hint": "One beam takes 36 ÷ 16 = 2.25. Then × 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "10% of the 240 baskets of stones were added. How many baskets of stones was that?",
              "answer": "24",
              "hint": "10% of 240: 10/100 × 240.",
              "skill": "Ratios and percent"
            },
            {
              "q": "One load on the tower's hoists hangs 17 feet below the wall walk and another hangs 16 feet above the wall walk. How many feet apart are they?",
              "answer": "33",
              "hint": "17 below the wall walk plus 16 above it.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 2(x + 13) = 42",
              "answer": "8",
              "hint": "Divide both sides by 2 to get x + 13 = 21.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 11 inches stand for 110 feet. How many feet does 1 inch stand for?",
              "answer": "10",
              "hint": "110 ÷ 11.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A list that adds the same amount each step follows a straight-line rule. The 1st number is the start, so the 10th number is 9 steps on.",
              "Parentheses first, then the power: (2 × 5)² is 10² = 100.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first: 6x − 2x is 4x, and an x on its own means 1x."
            ],
            "example": "3, 10, 17, … adds 7 each step. The 5th number is 4 steps on: 3 + 4 × 7 = 31."
          },
          "problems": [
            {
              "q": "The count of baskets of stones goes 20, 29, 38, 47, and on. What is the 7th number in the list?",
              "answer": "74",
              "hint": "It starts at 20 and adds 9 each step. The number you want is 6 steps on from 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (3 × 8)²?",
              "answer": "576",
              "hint": "3 × 8 = 24 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 7 and 24 feet. How long is its longest side, in feet?",
              "answer": "25",
              "hint": "7² + 24² = 625. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x − 3x = 36",
              "answer": "9",
              "hint": "7 − 3 = 4, so 4x = 36.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 6 × 10^2 or 5 × 10^3? Write the bigger one out in full.",
              "answer": "5000",
              "hint": "5 × 10^3 is ten times 5 × 10^2, and 6 is not ten times 5.",
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
          "example": "'Add 15. Instead, take 15 off' means subtract."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of baskets on the boys' tally stick: 330.",
          "Divide by the number of men it takes to carry one basket: 2.",
          "Add the weight of a basket in pounds: 60.",
          "Step 3 is wrong for this box. Return to the number you had after step 2 and take those 60 pounds off it rather than putting them on.",
          "Type the number the tally leaves you."
        ],
        "prompt": "Your answer:",
        "answer": "105",
        "hint": "The add in step 3 never happens. Work from your step 2 number and go down by sixty, not up."
      }
    },
    {
      "id": "castle-4",
      "title": "The Sling",
      "recon": {
        "lesson": {
          "title": "The small part that matters most",
          "points": [
            "When the plans say a small part does most of the work, the reason is a detail.",
            "A word about the sling is defined by its parts.",
            "'How is it adjusted' wants the method."
          ],
          "example": "'The sling doubles the speed.' What does the sling do? Doubles the speed."
        },
        "title": "Engineer's Plans: The Whip at the End",
        "passage": [
          "The sling is two ropes and a pouch, and without it the trebuchet is half a machine. One rope is tied to the tip of the beam. The other ends in a loop that slips over an iron hook on the tip, and between them hangs a leather pouch that holds the stone. When the beam swings up, the sling trails behind it along a trough in the ground, then whips up and over the tip like the end of a bullwhip. At the top of the swing the loop slides off the hook and the stone is released. The sling roughly doubles the speed the beam alone would give.",
          "Where the stone goes depends on when the loop lets go, and that depends on the angle of the hook. Bend the hook forward and the loop slips early, the stone goes high and lands short. Bend it back and the loop holds late, the stone goes flat and lands long. The engineer tunes the machine by bending the hook a few degrees at a time and throwing. A trebuchet is not finished until it has thrown a dozen stones and the engineer has found the angle that lands them where the wall is.",
          "The stones themselves are cut round, all the same weight, about three hundred pounds each, because a machine that throws the same stone the same way lands it in the same place. A pile of forty is stacked by the frame. Day four ends with the sling rigged, the trough dug, the hook set at a guess, and a single stone in the pouch. Tomorrow the ropes come off the beam. Nobody stands in front."
        ],
        "questions": [
          {
            "q": "What are the parts of the sling?",
            "choices": [
              "An iron hook and a wooden trough in the ground",
              "Two ropes and a leather pouch",
              "A leather basket hung from an iron hook",
              "A single rope tied to the tip of the beam"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How does the engineer change where the stone lands?",
            "choices": [
              "By adding another basket of stones to the counterweight",
              "By moving the whole frame closer to the castle wall",
              "By bending the hook a few degrees at a time",
              "By digging the trough deeper before the next throw"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence with 'tunes the machine'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'trough'?",
            "choices": [
              "A channel in the ground that the sling trails along before it whips up",
              "The leather pouch hanging in the middle of the sling that carries the stone",
              "The loop at the end of the sling rope that slips off the iron hook at the top",
              "The iron hook fixed to the tip of the beam that the sling's loop slides off"
            ],
            "answer": 0,
            "hint": "The sentence says the sling 'trails behind it along a trough in the ground'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why are all the stones cut to the same weight?",
            "choices": [
              "Because round stones are easier to carry",
              "Because a machine that throws the same stone the same way lands it in the same place",
              "Because the pouch is small",
              "Because a stone that is heavier than the last one will always fly farther than the last one did"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How the sling trails along the trough and then whips up and over the tip of the beam",
              "The forty round stones, all cut to the same weight, that are stacked beside the frame",
              "How the crew digs the trough, rigs the sling and sets the hook at a guess on day four",
              "How the hook angle decides where the stone lands, and how the engineer tunes it"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 2 says where the stone goes 'depends on the angle of the hook'.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Sling math",
          "points": [
            "Doubling the speed: × 2.",
            "Stones times pounds: total weight of the pile.",
            "Adding decimals: line up the points. 2.5 + 1.25 is 2.50 + 1.25 = 3.75.",
            "Two-step: throws to tune, then stones left."
          ],
          "example": "25 stones × 200 pounds = 5,000 pounds."
        },
        "problems": [
          {
            "q": "The beam alone would throw the stone at 60 miles an hour. The sling roughly doubles that. How fast does the stone leave?",
            "answer": "120",
            "hint": "60 × 2.",
            "skill": "Multiplying"
          },
          {
            "q": "The pile has 40 stones at 300 pounds each. How many pounds of stone is that?",
            "answer": "12000",
            "accept": [
              "12,000"
            ],
            "hint": "40 × 300.",
            "skill": "Multiplying"
          },
          {
            "q": "The engineer bends the hook 1.5 degrees, then 0.75 degree more. How many degrees is that in all? (write a decimal)",
            "answer": "2.25",
            "hint": "Line up the points: 1.50 + 0.75.",
            "skill": "Decimals"
          },
          {
            "q": "Tuning the machine takes 12 throws. After tuning, how many of the 40 stones are left for the wall?",
            "answer": "28",
            "hint": "40 − 12.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The sling is 30 feet of rope on each side. How many feet of rope in the whole sling?",
            "answer": "60",
            "hint": "30 × 2.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "A comparison is an answer",
            "points": [
              "Cover the word or phrase with a finger and read the sentence with a gap in it. What belongs in the gap?",
              "When a report says one thing is 'like' another, the comparison is doing work. Picture the everyday thing first, then move the picture across.",
              "Slot each choice back in. Three of them will make the sentence say something the report never said."
            ],
            "example": "'The line moved like molasses.' Nothing is sticky. Picture molasses pouring out of a jar, then move the picture: the line barely moved at all."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "The sling is two ropes and a leather pouch, one rope tied to the tip of the beam and the other ending in a loop that slips over an iron hook.",
                "The sling is what doubles the throw and the hook is what aims it, so the machine is not finished until it has been tuned by throwing.",
                "Leather is the strongest material anyone can make a sling from, which is why the pouch is cut from it rather than woven out of the same rope as the arms.",
                "The engineer works out the correct hook angle from the plans before the first throw, so the machine is aimed before any stone leaves the pouch."
              ],
              "answer": 1,
              "hint": "What the sling does, what the hook decides, and how the angle is found. One choice is the first line of the report, and one is undone by the last paragraph.",
              "skill": "Central idea and evidence",
              "evidence": "A trebuchet is not finished until it has thrown a dozen stones and the engineer has found the angle that lands them where the wall is."
            },
            {
              "q": "Claim: the machine cannot be relied on until it has been tested. Which sentence from the report best supports that claim?",
              "choices": [
                "Where the stone goes depends on when the loop lets go, and that depends on the angle of the hook.",
                "When the beam swings up, the sling trails behind it along a trough in the ground, then whips up and over the tip like the end of a bullwhip.",
                "A trebuchet is not finished until it has thrown a dozen stones and the engineer has found the angle that lands them where the wall is.",
                "The stones themselves are cut round, all the same weight, about three hundred pounds each, because a machine that throws the same stone the same way lands it in the same place."
              ],
              "answer": 2,
              "hint": "The claim uses the word 'until'. Find the sentence that uses it too, and says what has to happen before the machine counts as done.",
              "skill": "Finding details",
              "evidence": "A trebuchet is not finished until it has thrown a dozen stones and the engineer has found the angle that lands them where the wall is."
            },
            {
              "q": "How is the second paragraph built?",
              "choices": [
                "It sets two opposite adjustments side by side, bending the hook forward and bending it back, and gives the result of each.",
                "It lists the steps of rigging the sling in the order they happen, from tying the first rope on to slipping the loop over the iron hook.",
                "It explains what causes a leather pouch to wear out over time, and how often the crew has to cut a new one and lace it onto the ropes.",
                "It names a problem and leaves the answer to the paragraph after it, which is where the round stones and their weight are described."
              ],
              "answer": 0,
              "hint": "Two sentences in a row begin with the same instruction and end in opposite places. Name that pairing rather than repeating what it says.",
              "skill": "Author's purpose and structure",
              "evidence": "Bend the hook forward and the loop slips early, the stone goes high and lands short."
            },
            {
              "q": "The report says the sling whips up over the tip 'like the end of a bullwhip'. What is that comparison telling you?",
              "choices": [
                "The sling makes the same loud cracking noise that a whip does when it comes up over the tip of the beam.",
                "The tip of the sling ends up moving far faster than the beam that is swinging it.",
                "The sling is cut from the same kind of leather as a whip.",
                "The sling is a long thin rope that grows thinner toward its end."
              ],
              "answer": 1,
              "hint": "Picture the end of a whip: the handle barely moves and the tip moves faster than anything else. The last line of the paragraph tells you which half of that picture matters.",
              "skill": "Word meanings",
              "evidence": "The sling roughly doubles the speed the beam alone would give."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the stones are all cut round and to the same weight. Why does that matter?",
              "choices": [
                "Stones cut to one size are easier to stack, and a pile of forty of them has to be waiting beside the frame before the first throw.",
                "A round stone flies farther through the air than one with corners, and a machine like this is judged by how far it throws rather than by where it lands.",
                "The leather pouch will only close around a stone of one particular size, so a stone cut any bigger or any smaller would drop straight out of it.",
                "The hook angle is found by throwing, and an angle that has been tuned only holds if every stone behaves the same way."
              ],
              "answer": 3,
              "hint": "One paragraph tells you how the aim is set. The other tells you what the stones have in common and why. Neither one alone explains it.",
              "skill": "Reading between the lines",
              "evidence": "The stones themselves are cut round, all the same weight, about three hundred pounds each, because a machine that throws the same stone the same way lands it in the same place."
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
              "Fractions with the same bottom: the bigger top is the bigger fraction. 2/3 is bigger than 1/3."
            ],
            "example": "4 × 3 = 12, so 12 shared into 4 equal groups is 3 each."
          },
          "problems": [
            {
              "q": "The cart carries 8 stones on each of 3 trips. How many stones is that?",
              "answer": "24",
              "hint": "3 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "Every cart takes 7 stones. The engineer has 56 stones. How many carts can be filled?",
              "answer": "8",
              "hint": "How many 7s fit into 56?",
              "skill": "Dividing"
            },
            {
              "q": "The engineer counted 369 stones in the morning and 512 in the evening. How many more in the evening?",
              "answer": "143",
              "hint": "512 − 369.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 5/6 or 1/6? (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "The target is 900 stones and 697 are logged. How many short is that?",
              "answer": "203",
              "hint": "900 − 697.",
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
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The crew fills 2/3 of the counterweight box with stones in 5/6 of an hour. At that rate, how much of the box do they fill in one hour? (write a fraction)",
              "answer": "4/5",
              "hint": "For one hour, divide the amount by the time: 2/3 ÷ 5/6 = 2/3 × 6/5. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "Out of every 100 stones, 20 are set aside. Out of 40 stones, how many is that?",
              "answer": "8",
              "hint": "40 is 0.4 hundreds, so 0.4 × 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer divides 28 minutes of work in the ratio 1 to 3. How many minutes is the larger share?",
              "answer": "21",
              "hint": "4 parts in all, so one part is 7 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out (8 − 5) × (5 + 18). What is it?",
              "answer": "69",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Measured from the wall walk, three loads hang on the tower's hoists at −11, −2 and 9 feet (below the wall walk is minus). Which one hangs lowest?",
              "answer": "-11",
              "accept": [
                "−11"
              ],
              "hint": "The further below the wall walk, the lower.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many in all, then take off the ones done: 9 hours at 1.5 hours a job is 6 jobs, so with 2 done, 4 are left.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the taking away first, then undo the dividing by multiplying."
            ],
            "example": "x ÷ 8 − 13 = 3, so x ÷ 8 = 16, so x = 128."
          },
          "problems": [
            {
              "q": "The job needs 56 hours in all, at 3.5 hours for each beam. One beam is already done. How many beams are left?",
              "answer": "15",
              "hint": "56 ÷ 3.5 = 16 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of stones may change by no more than 25%. Starting from 160, what is the highest count the rule allows?",
              "answer": "200",
              "hint": "25% of 160 is 40. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 3 hours the pile of counterweight stones shrank by 33 stones in all, the same amount each hour. What was the change each hour? (Write a loss as a negative number.)",
              "answer": "-11",
              "accept": [
                "−11"
              ],
              "hint": "Share −33 into 3 equal parts: −33 ÷ 3. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 7 − 17 = 6",
              "answer": "161",
              "hint": "Add 17 to both sides, then multiply by 7.",
              "skill": "Equations"
            },
            {
              "q": "A round sign measures 62.8 centimeters around the edge. Using 3.14 for pi, how many centimeters is it across?",
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
            "example": "Through (0, 2) and (6, 14): y rises 12 while x runs 6, so the slope is 12 ÷ 6 = 2."
          },
          "problems": [
            {
              "q": "A line passes through (0, 20) and (4, 52). What is its slope?",
              "answer": "8",
              "hint": "Slope is the rise over the run: 32 ÷ 4.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 81 square feet. How many feet is it around the edge?",
              "answer": "36",
              "hint": "One side is the square root of 81, then four sides.",
              "skill": "Powers and roots"
            },
            {
              "q": "The engineer goes 20 feet east and then 21 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "29",
              "hint": "The two legs make a right angle: 20² + 21² = 841.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 8x + 5 and 2x + 29 come to the same number?",
              "answer": "4",
              "hint": "Set them equal, take 2x off both sides, then take 5 off.",
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
          "title": "Check the total",
          "points": [
            "The last step can swap your number for a word. Check your total against its rule.",
            "Do the arithmetic first, then check."
          ],
          "example": "'If your total is less than 20, type LOW.' A total of 14 means you type LOW."
        },
        "skill": "Following directions",
        "steps": [
          "Three parts of the sling are made of rope: the two ropes and the loop on the end of one of them. Write that number down: 3.",
          "Multiply by the throws it takes to tune the machine: 12.",
          "Subtract the stones still in the pile once the tuning is done: 28.",
          "Take off the one rope that is tied fast to the tip of the beam: 1.",
          "If your total is less than ten, type the word SHORT instead of the number. If it is ten or more, type the number."
        ],
        "prompt": "Your answer:",
        "answer": "SHORT",
        "accept": [
          "short",
          "Short",
          "short.",
          "SHORT."
        ],
        "hint": "Three parts of the sling are rope. Work the chain through, then hold your total against the ten in step 5 before you type."
      }
    },
    {
      "id": "castle-5",
      "title": "First Throw",
      "recon": {
        "lesson": {
          "title": "Putting the build together",
          "points": [
            "The last plans look back over the whole build. Questions will ask what came in what order.",
            "Distances in yards are details.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'Soup, salad, then bread.' What came second? The salad."
        },
        "title": "Engineer's Plans: Three Hundred Yards",
        "passage": [
          "At dawn on day five the crew stands behind the machine, well behind, and the engineer knocks out the pin that holds the beam down. Ten tons drops. The beam whips over, the sling snaps up out of the trough, and the loop leaves the hook. A three-hundred-pound stone climbs into the morning sky in a long slow arc, hangs, and comes down three hundred yards away with a thump the crew feels in their feet. It is fifty yards short of the wall. The engineer bends the hook back two degrees.",
          "The second stone lands twenty yards short. The third hits the base of the wall. The fourth hits the same course of stones, and the fifth. By the tenth throw there is a pale patch on the gray wall where the stones keep landing, and a small crack running up from it. A trebuchet does not win by one great blow. It wins by patience: one stone every few minutes, the same spot, all day, every day, until the wall decides it would rather be a pile. The crew reloads in the time it takes to eat an apple.",
          "The build went in the only order it could. The frame, because everything stands on it. The beam, because it is the machine. The box, because the box is the power. The sling, because the sling is the aim. And the first throw last, because a machine that has not thrown is a guess. The engineer's plans end with the tenth throw recorded, the hook angle written down to the degree, and a line for whoever builds the next one: it is only a see-saw. Build it square, load it even, and be patient."
        ],
        "questions": [
          {
            "q": "How far did the first stone go?",
            "choices": [
              "Three hundred yards",
              "Fifty yards",
              "Three hundred and fifty yards",
              "Twenty yards short of the wall"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence with 'three hundred yards away'.",
            "skill": "Finding details"
          },
          {
            "q": "Which throw first hit the wall?",
            "choices": [
              "The third",
              "The first",
              "The second",
              "The tenth"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'course' of stones in a wall?",
            "choices": [
              "A path",
              "A lesson",
              "One horizontal row of stones in the wall",
              "A crack"
            ],
            "answer": 2,
            "hint": "The fourth throw hits 'the same course of stones', the same row.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the engineer keep hitting the same spot on the wall?",
            "choices": [
              "Because the crew can reload faster when the aim is not changed",
              "Because a wall is broken by patience, hitting one place again and again until it cracks",
              "Because the engineer bent the hook back by two degrees and can no longer change the aim at all",
              "Because there are only ten stones"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentences about patience.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The apple",
              "How the second, third and fourth stones walked their way in toward the castle wall",
              "The pale patch and the small crack that appear on the gray wall after ten throws",
              "Why the build had to go in that order, and the advice for the next builder"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 3 says the build 'went in the only order it could'.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Throw math",
          "points": [
            "Yards short: wall distance minus throw.",
            "Different bottoms: make them the same first. 1/4 + 1/3 = 3/12 + 4/12 = 7/12.",
            "Throws an hour: 60 ÷ minutes per throw.",
            "Two-step: stones a day, then days for the pile."
          ],
          "example": "200 − 160 = 40 yards short."
        },
        "problems": [
          {
            "q": "The wall is 350 yards away and the first stone went 300. How many yards short was it?",
            "answer": "50",
            "hint": "350 − 300.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The crew spent 1/2 of the morning loading and 1/3 of it tuning the sling. How much of the morning is that? (write a fraction)",
            "answer": "5/6",
            "hint": "Make the bottoms the same: 1/2 is 3/6 and 1/3 is 2/6. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The crew throws a stone every 4 minutes. How many throws in an hour?",
            "answer": "15",
            "hint": "60 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "At 15 throws an hour for 10 hours, how many stones a day?",
            "answer": "150",
            "hint": "15 × 10.",
            "skill": "Multiplying"
          },
          {
            "q": "The engineer bent the hook open 2 more degrees, then 1 more. The hook started at 20 degrees. What is it now?",
            "answer": "23",
            "hint": "20 + 2 + 1.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Neither one says it alone",
            "points": [
              "The last question is never answered in one place. Plan on one fact from one paragraph and one from another.",
              "Say the two facts out loud, then say 'so'. Whatever comes after 'so' is usually sitting there in the choices.",
              "A choice that needs something the report never mentions is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the pass closes with the first snow. Paragraph three: the last supply cart leaves in October. So October is the deadline. Neither line says that by itself."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The first throw is a guess corrected by the nine after it, and the whole build was an order of steps that ends in patience.",
                "The first stone landed three hundred yards away, fifty yards short of the wall.",
                "Stone walls were the strongest defense that anyone in those years ever built, and no machine that could be carted to a siege was really a match for one.",
                "A trebuchet brings a wall down with one great blow, and the throws that come after the first are only there to clear what is left standing."
              ],
              "answer": 0,
              "hint": "The first stone, the tenth, and the list of reasons at the end. One choice is a distance from the opening paragraph, and one is exactly what the middle paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "A trebuchet does not win by one great blow."
            },
            {
              "q": "Claim: a wall comes down through repetition rather than through one lucky hit. Which sentence from the report best supports that claim?",
              "choices": [
                "It wins by patience: one stone every few minutes, the same spot, all day, every day, until the wall decides it would rather be a pile.",
                "The second stone lands twenty yards short.",
                "The third hits the base of the wall.",
                "The crew reloads in the time it takes to eat an apple."
              ],
              "answer": 0,
              "hint": "The claim is about doing the same thing over and over. Find the sentence that spells out how often, for how long and where.",
              "skill": "Finding details",
              "evidence": "It wins by patience: one stone every few minutes, the same spot, all day, every day, until the wall decides it would rather be a pile."
            },
            {
              "q": "What job does the last paragraph do in this report?",
              "choices": [
                "It gives instructions for building a second machine from nothing.",
                "It describes what the castle wall looked like at the end of the day.",
                "It looks back over five days and gives the reason each step had to fall where it did.",
                "It lists the tools the carpenters used on the first day."
              ],
              "answer": 2,
              "hint": "Nothing in that paragraph is new. Ask what a paragraph is for when everything in it has already happened.",
              "skill": "Author's purpose and structure",
              "evidence": "The build went in the only order it could."
            },
            {
              "q": "The report says the stones keep landing 'until the wall decides it would rather be a pile'. What does that phrase mean?",
              "choices": [
                "The defenders give up and take the wall down themselves.",
                "The same spot is hit so many times that the wall finally gives way.",
                "The wall is rebuilt afterward as a heap of loose stones.",
                "The thrown stones pile up at the foot of the wall until the whole thing is buried."
              ],
              "answer": 1,
              "hint": "A wall does not decide anything. The writer has given it a mind for one moment; say plainly what happens to it instead.",
              "skill": "Word meanings",
              "evidence": "It wins by patience: one stone every few minutes, the same spot, all day, every day, until the wall decides it would rather be a pile."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the first throw could not have come any earlier in the build. Why not?",
              "choices": [
                "The crew were not allowed onto the field until dawn on the fifth day.",
                "The stones were not cut round until the morning of the fifth day, and until they were all one shape and weight there was nothing worth throwing.",
                "The wall was too far away to reach until the beam had been lengthened, and the beam was not brought up to its full fifty feet until the fifth morning.",
                "Every part has to be standing before the machine can throw at all, and only a throw can show whether the hook angle is right."
              ],
              "answer": 3,
              "hint": "Paragraph one shows what the first stone taught the engineer. The last paragraph gives the reason for the order. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "And the first throw last, because a machine that has not thrown is a guess."
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
            "example": "4 × 3 = 12, so 12 shared into 4 equal groups is 3 each."
          },
          "problems": [
            {
              "q": "The engineer counts 6 volleys with 7 throws in each. How many throws is that?",
              "answer": "42",
              "hint": "6 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "42 throws are shared equally among 6 volleys. How many throws in each volley?",
              "answer": "7",
              "hint": "How many 6s make 42?",
              "skill": "Dividing"
            },
            {
              "q": "The engineer counted 138 throws, then found 156 more, then 46 more. How many throws in all?",
              "answer": "340",
              "hint": "138 + 156 first. Then add 46.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The engineer finished 1/6 of the day's work before the break and 3/6 after. What fraction is done? (write a fraction)",
              "answer": "4/6",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A platform is 7 squares wide and 3 squares long. How many squares is that?",
              "answer": "21",
              "hint": "7 rows of 3, so 7 × 3.",
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
              "q": "The plan allows 40.5 hours. The engineer uses 9.35 hours on the first beam and 10.85 on the second. How many hours are left?",
              "answer": "20.3",
              "hint": "Add the two amounts used first, then take that from 40.5. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Of 60 throws, 20% are set aside. How many is that?",
              "answer": "12",
              "hint": "20% of 60: 20% is 20/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Hits and throws are kept in the ratio 2 to 3. If there are 12 hits, how many throws?",
              "answer": "18",
              "hint": "12 ÷ 2 = 6 groups. Each group has 3 throws.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out 6 × (6 − 2) + 7. What is it?",
              "answer": "31",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the hoist's load hung 10 feet below the wall walk. By noon it hung 12 feet above the wall walk. How far did it rise, in feet?",
              "answer": "22",
              "hint": "From −10 up to the wall walk is 10, then 12 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total shared out: 18 hours for 8 jobs is 18 ÷ 8 = 2.25 hours a job.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "3x + 7 = 31, so 3x = 24, so x = 8."
          },
          "problems": [
            {
              "q": "12 beams needed 42 hours altogether. How many hours is that for one beam?",
              "answer": "3.5",
              "hint": "A rate is the total shared out: 42 ÷ 12.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew made 200 throws in the first month. In the second month the number rose by 10%. How many throws is that?",
              "answer": "220",
              "hint": "10% of 200 is 20. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "At dawn the hoist's load hung 11 feet below the wall walk. It was hauled up 17 feet by noon, then let down 12 feet by dark. Where does it hang at dark? Type below the wall walk as a minus number.",
              "answer": "-6",
              "accept": [
                "−6"
              ],
              "hint": "Start at −11, go up 17 to 6, then down 12.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 4x + 10 = 58",
              "answer": "12",
              "hint": "Take 10 off both sides first, then divide by 4.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 5 feet. The marked length measures 11 inches on the plan. How long is it really, in feet?",
              "answer": "55",
              "hint": "Every inch is 5 feet, so 11 × 5.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A small 2 means a number times itself: 4² is 4 × 4 = 16. Work out the power first, then multiply.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start at 6 and add 5 each hour: after 3 hours, y = 5 × 3 + 6 = 21."
          },
          "problems": [
            {
              "q": "The engineer starts with 15 throws and adds 4 more every hour. After 8 hours, how many throws are there?",
              "answer": "47",
              "hint": "This is the straight-line rule y = mx + b: 4 × 8 + 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each pile holds 6² stones. There are 6 piles. How many stones in all?",
              "answer": "216",
              "hint": "6² means 6 × 6 = 36. Then × 6.",
              "skill": "Powers and roots"
            },
            {
              "q": "The engineer runs a rope from the top of an 8-foot pole to a point 15 feet away on the ground. How long is the rope, in feet?",
              "answer": "17",
              "hint": "Right triangle: a² + b² = c². 8² + 15² = 64 + 225 = 289. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x + 12 = 2x + 72",
              "answer": "10",
              "hint": "Take 2x off both sides to get 6x + 12 = 72, then take 12 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The engineer writes the total number of throws as 5 × 10^3. Written out in full, what number is that?",
              "answer": "5000",
              "hint": "10^3 is 1 with 3 zeros after it: 1,000. Then × 5.",
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
          "example": "'Start with 40. Take off 6. Ignore that, and add 3 to 40 instead.' You end on 43."
        },
        "skill": "Following directions",
        "steps": [
          "Write the distance of the first throw in yards: 300.",
          "Divide by the weight of one stone in hundreds of pounds: 3.",
          "Subtract the yards that first stone fell short of the wall: 50.",
          "Add the number of the throw that opened the crack: 10.",
          "Ignore step 3. The engineer measures to where the stone landed, not to the wall, so those fifty yards stay in. Add the throw number to your step 2 answer instead.",
          "Type the number the plans end with."
        ],
        "prompt": "Your answer:",
        "answer": "110",
        "hint": "Step 5 cancels the fifty. The throw number goes onto the total you had at the end of step 2."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
