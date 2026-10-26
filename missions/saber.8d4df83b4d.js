// ODYSSEY — campaign "saber". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "saber",
  "kind": "build",
  "readingLevel": {
    "fk": 5.4,
    "cl": 6.3
  },
  "grade": "5",
  "kindLabel": "Build",
  "form": "droid",
  "title": "The Saber Workshop",
  "subtitle": "Kessa's bench, off the star charts",
  "pitch": "Five sessions, five parts, one saber. Power cell, crystal chamber, emitter, switch, hilt. Then you choose the blade.",
  "scene": "assets/scene-workshop.jpg",
  "buildArt": "saber",
  "progress": {
    "unit": "parts",
    "total": 5
  },
  "dayNoun": "Session",
  "stageNoun": "Part",
  "finalNoun": "Ignition",
  "stages": [
    "Power cell",
    "Crystal chamber",
    "Emitter",
    "Activation switch",
    "Hilt sleeve"
  ],
  "reconNoun": "Schematic",
  "legs": {
    "recon": "Schematics",
    "nav": "Calibration",
    "orders": "Assembly",
    "debrief": "Bench check"
  },
  "rules": [
    "Stuck on a value? <b>Flag it</b> and move on. Pending items come back at the bench check.",
    "Schematics: read the questions <b>before</b> the sheet.",
    "Assembly: read <b>every</b> step before you fit anything."
  ],
  "fact": "Every saber is built in the same order. Skip a step and it ignites for exactly one second, once.",
  "finale": {
    "prompt": "Kessa sets four crystals on the bench. Which one hums?",
    "options": [
      {
        "label": "Blue",
        "color": "#4FD1FF"
      },
      {
        "label": "Green",
        "color": "#4FD18B"
      },
      {
        "label": "Amber",
        "color": "#FFB454"
      },
      {
        "label": "Violet",
        "color": "#B57BFF"
      }
    ],
    "done": "Ignite it."
  },
  "patrols": [
    {
      "id": "saber-1",
      "title": "The Power Cell",
      "recon": {
        "lesson": {
          "title": "Reading like an engineer",
          "points": [
            "Read the five questions first. Two ask for details, one asks what a word means, one asks why, and one asks what a paragraph is mostly about.",
            "For a word question, read the sentence before and after the word. The schematic explains it nearby.",
            "For a 'mostly about' question, ask: what would I call this paragraph if I had to give it a title?"
          ],
          "example": "'Sailors call the left side of a ship port.' The meaning, the left side of a ship, sits right next to the word."
        },
        "title": "Schematic: The Power Cell",
        "passage": [
          "Every saber begins with the power cell, and Kessa will not let anyone touch a crystal until the cell is right. A power cell is a sealed metal cylinder about the size of a thumb. Inside, layers of charged plates store energy the way a dam stores water. When the switch is pressed, the cell releases that energy in one steady stream. Engineers call this steady release the discharge, and a good cell can discharge for hours without dropping.",
          "Cells are rated by how much energy they hold and how fast they can let it go. Kessa keeps her cells on a rack, sorted by rating, with the strongest at the top. A cell that is rated too low for its crystal cannot feed it enough energy, and the blade flickers, dims, and finally winks out mid-swing. A cell rated too high runs hot, and a hot cell warps the hilt around it. The right cell is not the biggest one. It is the one that matches.",
          "Kessa's first rule is written above the rack in chalk: test the cell before you trust it. Every cell that comes into the workshop, new or salvaged, goes on the bench meter. She has seen too many builders skip the test because a cell looked fine. A cell that looks fine and reads empty is worse than no cell at all, because you will not find out until the moment you need it."
        ],
        "questions": [
          {
            "q": "What does a power cell do?",
            "choices": [
              "Focuses the beam into a blade with an edge and a rounded tip",
              "Cools the hilt and the emitter by carrying heat into the air",
              "Sets the color of the blade by the spacing of its lattice",
              "Stores energy and releases it in a steady stream"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentences about the dam and the switch.",
            "skill": "Finding details"
          },
          {
            "q": "What happens when a cell is rated too low for its crystal?",
            "choices": [
              "The emitter's cooling fins bend out of shape",
              "The blade flickers, dims and winks out",
              "The crystal cracks along the lines of its lattice",
              "The cell runs hot and warps the hilt around it"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence that starts 'A cell that is rated too low'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does the word 'discharge' mean?",
            "choices": [
              "Turning the saber off",
              "A crack in the sealed metal cylinder of the cell",
              "The steady release of stored energy",
              "The rating that tells you how much energy a cell holds"
            ],
            "answer": 2,
            "hint": "The sentence right before the word explains it.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does Kessa say a cell that looks fine but reads empty is 'worse than no cell at all'?",
            "choices": [
              "Because empty cells are expensive",
              "Because you would trust it and not find out until you needed it",
              "Because it warps the hilt",
              "Because an empty cell will crack the crystal it feeds"
            ],
            "answer": 1,
            "hint": "Paragraph 3, the last sentence gives her reason.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How to test a cell",
              "How Kessa sorts her cells on the rack with the strongest at the top",
              "How the layers of charged plates inside a cell store energy the way a dam stores water",
              "Why the cell has to match the crystal, not just be the biggest"
            ],
            "answer": 3,
            "hint": "Read the last two sentences of paragraph 2. They sum it up.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Rate and time",
          "points": [
            "Energy divided by the rate gives the time. 180 units at 9 per minute is 180 ÷ 9 = 20.",
            "Common multiples: count by both numbers. 3, 6, 9, 12 and 4, 8, 12: they meet at 12.",
            "Two-step: multiply first, then add. Three boxes of 11 is 3 × 11, then add the extra."
          ],
          "example": "7 rows × 13 seats: 7 × 10 = 70 and 7 × 3 = 21, so 91."
        },
        "problems": [
          {
            "q": "A cell holds 240 units of energy and discharges 8 units every minute. How many minutes will it run?",
            "answer": "30",
            "hint": "240 ÷ 8.",
            "skill": "Dividing"
          },
          {
            "q": "Kessa's rack has 6 shelves with 14 cells on each. How many cells are on the rack?",
            "answer": "84",
            "hint": "6 × 10 plus 6 × 4.",
            "skill": "Multiplying"
          },
          {
            "q": "Kessa checks the red cell every 4 minutes and the blue cell every 6 minutes. She checks both at the start. After how many minutes does she next check both at the same time?",
            "answer": "12",
            "hint": "Count by 4s and by 6s. Which number is on both lists first?",
            "skill": "Multiplying"
          },
          {
            "q": "Two cells are rated 12 units each, and a spare is rated 5. What is the total rating of all three?",
            "answer": "29",
            "hint": "2 × 12 first. Then add 5.",
            "skill": "Multi-step problems"
          },
          {
            "q": "A cell is full at 1,000 units. The one on Kessa's bench holds 465 units. How many more units until it is full?",
            "answer": "535",
            "hint": "1,000 − 465. Think of 1,000 as 999 + 1.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Name the whole thing",
            "points": [
              "The central idea is spread across the paragraphs, not parked in one sentence. Say what the schematic is about in your own words before you read a choice.",
              "The wrong answers here are usually true. They are one paragraph's worth, or a saying about workshops in general, or the exact opposite of what the page says.",
              "After that the questions ask four other moves: prove a claim with one line, name what a paragraph is for, work a word out from its sentence, and join two paragraphs."
            ],
            "example": "Three paragraphs about a bicycle: what the chain is, why the wrong length skips, why you check it before a ride. 'A chain is a loop of links' covers one paragraph. 'Bicycles are useful' covers nothing. 'A chain only works when it is the right one and has been checked' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole schematic?",
              "choices": [
                "A power cell is a sealed metal cylinder about the size of a thumb, with layers of charged plates inside that store energy the way a dam stores water.",
                "Good tools matter more than skill in any workshop, whatever is being built there, because a builder can only ever be as good as the equipment on the bench.",
                "The strongest cell on the rack is the correct cell for any build, so a builder should always reach for the top of the rack and work downward from there.",
                "A cell has to be matched to the crystal it feeds and proved on the meter, because looking right is not the same as being right."
              ],
              "answer": 3,
              "hint": "Label the paragraphs: what a cell is, what happens when it is wrong, and the rule in chalk. One choice covers only the first label, and one says the opposite of the page.",
              "skill": "Central idea and evidence",
              "evidence": "The right cell is not the biggest one."
            },
            {
              "q": "Claim: a cell with too much in it damages the saber itself, not just the blade. Which sentence from the schematic best supports that claim?",
              "choices": [
                "A cell that is rated too low for its crystal cannot feed it enough energy, and the blade flickers, dims, and finally winks out mid-swing.",
                "A cell rated too high runs hot, and a hot cell warps the hilt around it.",
                "Cells are rated by how much energy they hold and how fast they can let it go.",
                "Kessa keeps her cells on a rack, sorted by rating, with the strongest at the top."
              ],
              "answer": 1,
              "hint": "One of these describes the opposite fault, and one states a conclusion without proving anything. Find the sentence that follows the heat into a part of the saber.",
              "skill": "Finding details",
              "evidence": "A cell rated too high runs hot, and a hot cell warps the hilt around it."
            },
            {
              "q": "What job does the third paragraph do in this schematic?",
              "choices": [
                "It lists the tools kept on the workbench.",
                "It compares power cells with the crystals they feed, and says which of the two decides how long a blade will last.",
                "It turns everything said about cells into one rule, and explains why the rule keeps getting broken.",
                "It describes how a power cell is manufactured, from the sealed metal cylinder to the layers of charged plates stacked inside it."
              ],
              "answer": 2,
              "hint": "The paragraph introduces no new part. Ask what a paragraph is for when everything it needs has already been explained.",
              "skill": "Author's purpose and structure",
              "evidence": "Kessa's first rule is written above the rack in chalk: test the cell before you trust it."
            },
            {
              "q": "The schematic says an underfed blade 'flickers, dims, and finally winks out mid-swing'. What does winks out mean as it is used here?",
              "choices": [
                "Burns brighter for a moment",
                "Goes out suddenly and completely",
                "Switches on and off forever",
                "Shrinks to half its length"
              ],
              "answer": 1,
              "hint": "The three words are in an order, and each one is worse than the last. Whatever the end of that order is, it is not something the blade recovers from.",
              "skill": "Word meanings",
              "evidence": "A cell that is rated too low for its crystal cannot feed it enough energy, and the blade flickers, dims, and finally winks out mid-swing."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the rack is sorted by rating and not by which cells look newest. Why is it?",
              "choices": [
                "Salvaged cells are always weaker than cells that came in new.",
                "The strongest cells get used most often, so they are kept at the top of the rack where a builder can reach for them first without looking.",
                "A sorted rack keeps the cells from getting hot in storage, since the strongest sit apart at the top where the air can move around them.",
                "The rating is the only thing that decides whether a cell fits a build, and how a cell looks tells you nothing at all."
              ],
              "answer": 3,
              "hint": "One paragraph tells you which property decides a build. Another tells you what a builder gets wrong when they trust their eyes. Put the two side by side.",
              "skill": "Reading between the lines",
              "evidence": "She has seen too many builders skip the test because a cell looked fine."
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
            "example": "3 groups of 7: 7 + 7 + 7 = 21. So 3 × 7 = 21."
          },
          "problems": [
            {
              "q": "Kessa counts 4 shelves with 4 cells in each. How many cells is that?",
              "answer": "16",
              "hint": "4 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "16 cells are shared equally among 4 shelves. How many cells go on each shelf?",
              "answer": "4",
              "hint": "How many 4s make 16?",
              "skill": "Dividing"
            },
            {
              "q": "Kessa counted 251 power cells, then found 38 more, then 33 more. How many power cells in all?",
              "answer": "322",
              "hint": "251 + 38 first. Then add 33.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Kessa finished 4/6 of the day's work before the break and 1/6 after. What fraction is done? (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A rack platform is 5 squares wide and 6 squares long. How many squares is that?",
              "answer": "30",
              "hint": "5 rows of 6, so 5 × 6.",
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
            "example": "3 × (10 − 4) + 7 = 3 × 6 + 7 = 25."
          },
          "problems": [
            {
              "q": "Each part takes 1.65 minutes to fit. How many minutes for 8 parts?",
              "answer": "13.2",
              "hint": "Split it: 8 × 1 plus 8 × 0.65.",
              "skill": "Decimals"
            },
            {
              "q": "Of 200 power cells, 20% are set aside. How many is that?",
              "answer": "40",
              "hint": "20% of 200: 20% is 20/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Racks and power cells are kept in the ratio 2 to 3. If there are 12 racks, how many power cells?",
              "answer": "18",
              "hint": "12 ÷ 2 = 6 groups. Each group has 3 power cells.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Kessa works out 4 × (8 − 5) + 9. What is it?",
              "answer": "21",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 249 = 1,000",
              "answer": "751",
              "hint": "Subtract 249 from both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 7 ÷ 2 = 3.5.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "3x + 14 = 50, so 3x = 36, so x = 12."
          },
          "problems": [
            {
              "q": "8 parts needed 6 minutes altogether. How many minutes is that for one part?",
              "answer": "0.75",
              "hint": "A rate is the total shared out: 6 ÷ 8.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Kessa counted 160 power cells on the first pass. On the second pass the number had fallen by 25%. How many power cells is that?",
              "answer": "120",
              "hint": "25% of 160 is 40. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The supply ledger opens at −17 cells. Kessa adds 11 cells, then takes out 20 cells. What does the ledger read now?",
              "answer": "-26",
              "accept": [
                "−26"
              ],
              "hint": "Start at −17, add 11 to get −6, then subtract 20.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 9x + 27 = 81",
              "answer": "6",
              "hint": "Take 27 off both sides first, then divide by 9.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 cm stands for 20 meters. The workshop yard measures 6 cm on the plan. How long is it really, in meters?",
              "answer": "120",
              "hint": "Every cm is 20 m, so 6 × 20.",
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
            "example": "Start at 8 and add 3 each hour: after 10 hours, y = 3 × 10 + 8 = 38."
          },
          "problems": [
            {
              "q": "Kessa starts with 5 power cells and adds 7 more every hour. After 5 hours, how many power cells are there?",
              "answer": "40",
              "hint": "This is the straight-line rule y = mx + b: 7 × 5 + 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each row holds 4² power cells. There are 3 rows. How many power cells in all?",
              "answer": "48",
              "hint": "4² means 4 × 4 = 16. Then × 3.",
              "skill": "Powers and roots"
            },
            {
              "q": "Kessa runs a ladder from the top of a 5-meter post to a point 12 meters away on the ground. How long is the ladder, in meters?",
              "answer": "13",
              "hint": "Right triangle: a² + b² = c². 5² + 12² = 25 + 144 = 169. The ladder is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x + 22 = x + 67",
              "answer": "9",
              "hint": "Take x off both sides to get 5x + 22 = 67, then take 22 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "Kessa writes a full power cell's charge as 6 × 10^5 units. Written out in full, what number is that?",
              "answer": "600000",
              "hint": "10^5 is 1 with 5 zeros after it: 100,000. Then × 6.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Conditions",
          "points": [
            "Some steps are conditions: 'if this, ignore that.' You can only check a condition after you have read every step.",
            "Write each number down as you go. Do not hold them in your head."
          ],
          "example": "If step 4 says to ignore step 3 when a number is over 20, you need step 2's number written in front of you."
        },
        "skill": "Following directions",
        "steps": [
          "Take the cell's rating from the bench meter: 12.",
          "Double it, because the meter reads at half scale.",
          "Subtract 4 for the energy a cell loses sitting on the rack.",
          "Cross step 3 out. Kessa tested this cell on the bench today, so it lost nothing on the rack.",
          "Add 1 for the plate the meter cannot see.",
          "Type the reading."
        ],
        "prompt": "Meter reading:",
        "answer": "25",
        "hint": "Double the 12 first. Step 4 cancels the subtraction, so carry your step 2 number straight into step 5."
      }
    },
    {
      "id": "saber-2",
      "title": "The Crystal Chamber",
      "recon": {
        "lesson": {
          "title": "Why questions, and 'mostly about'",
          "points": [
            "'Why does Kessa...' questions: the schematic gives a reason or shows one. Look at the sentence right before or after the action.",
            "'Mostly about' means the whole paragraph, not one sentence. If an answer only matches one sentence, it is a detail, not the main idea."
          ],
          "example": "Paragraph 3 spends every sentence on alignment. So its main idea is alignment, not the brass pin."
        },
        "title": "Schematic: The Crystal Chamber",
        "passage": [
          "The crystal is the heart of a saber, and the chamber is its cradle. Kessa's crystals are called ember crystals, dug from cooled lava tubes on the moon you can see through her window. Each one is about the size of a fingertip. When energy from the power cell passes through an ember crystal, the crystal focuses it, the way a magnifying glass focuses sunlight into a single bright point. Without the crystal, the cell's energy just spills out as heat.",
          "The color of the blade comes from the crystal, not the cell. Every ember crystal has a lattice, a pattern of tiny lines inside it, and the spacing of the lattice decides the color. Tight lattices burn blue. Wider ones burn green, then amber. The rarest, with a lattice so wide it is almost a spiral, burn violet. Kessa does not let builders choose by color. She sets three crystals on the bench and asks which one hums when you hold it. That one is yours.",
          "The chamber holds the crystal in exact alignment with the emitter above it. Alignment means the crystal's lattice points straight up the hilt. If the crystal sits even slightly crooked, the energy leaves at an angle, and the blade wobbles like a bent rod. Kessa checks alignment with a thin brass pin and a steady hand. It takes her a minute. It takes new builders an hour, and she lets them take it."
        ],
        "questions": [
          {
            "q": "What does an ember crystal do with the cell's energy?",
            "choices": [
              "Stores it",
              "Cools it",
              "Focuses it into a single point",
              "Turns it into the sound the blade makes"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the sentence with the magnifying glass.",
            "skill": "Finding details"
          },
          {
            "q": "According to the schematic, what decides a blade's color?",
            "choices": [
              "How much energy the power cell is rated to hold",
              "The spacing of the crystal's lattice",
              "The width of the aperture at the top of the emitter",
              "Whichever color the builder asks Kessa for"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what does 'alignment' mean?",
            "choices": [
              "The color of the crystal",
              "The weight of the hilt",
              "The thin brass pin Kessa uses to check the crystal chamber",
              "The crystal's lattice pointing straight up the hilt"
            ],
            "answer": 3,
            "hint": "The sentence that begins 'Alignment means'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does Kessa let new builders take an hour on alignment instead of doing it for them?",
            "choices": [
              "She is too busy",
              "Her hands are no longer steady",
              "So they learn to do it right themselves",
              "She has already checked the alignment herself with the pin"
            ],
            "answer": 2,
            "hint": "Paragraph 3 ends with 'she lets them take it.' Why would a teacher do that?",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "Where the ember crystals are dug from and how big each one of them is",
              "How to align a crystal",
              "How the energy from the cell passes through the crystal and is focused into a point",
              "How the lattice decides the color, and how Kessa picks a crystal"
            ],
            "answer": 3,
            "hint": "Every sentence in paragraph 2 is about color and choosing. Which answer covers all of it?",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Share equally, and change",
          "points": [
            "Sharing equally is division. 42 beads in 6 bags is 42 ÷ 6.",
            "Making change: count up from the price to what you paid.",
            "Two-step: do what the story says in order. Add, then double, then subtract."
          ],
          "example": "7 red and 4 gold is 11. Doubled is 22. Give away 6 and you have 16."
        },
        "problems": [
          {
            "q": "Kessa has 36 ember crystals and shares them equally among 4 trays. How many go in each tray?",
            "answer": "9",
            "hint": "36 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "A tray holds 12 crystals. How many crystals fit in 8 trays?",
            "answer": "96",
            "hint": "12 × 8.",
            "skill": "Multiplying"
          },
          {
            "q": "Kessa buys 4 crystals at $9 each and pays with a $50 bill. How much change does she get?",
            "answer": "14",
            "accept": [
              "$14",
              "14.00",
              "$14.00"
            ],
            "hint": "4 × 9 = 36 first. Then 50 − 36.",
            "skill": "Money and decimals"
          },
          {
            "q": "Kessa has 9 blue crystals and 3 green ones. She doubles her stock, then sells 5. How many crystals does she have now?",
            "answer": "19",
            "hint": "9 + 3 = 12. Double it: 24. Then subtract 5.",
            "skill": "Multi-step problems"
          },
          {
            "q": "A crystal tray is 8 centimeters long and 5 centimeters wide. What is its area in square centimeters?",
            "answer": "40",
            "hint": "Area is length × width: 8 × 5.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Find the line that proves it",
            "points": [
              "A supporting sentence has to settle the claim on its own. Read the claim, read your pick, and ask whether anyone could still argue.",
              "All four choices are real sentences from the page, so true is worth nothing here. Only proof counts.",
              "Beware the sentence that shares a word with the claim and proves none of it. That is the usual trap."
            ],
            "example": "Claim: the workshop is busy in winter. 'The workshop has two windows' is true and proves nothing. 'The bench is booked solid from November to March' is proof."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole schematic?",
              "choices": [
                "Tight lattices burn blue, wider lattices burn green and then amber, and the rarest of all, so wide the pattern is almost a spiral, burn violet.",
                "Choosing the right materials is the hardest part of any craft.",
                "The crystal turns loose energy into a blade, and everything about that blade comes from the crystal and from how carefully it is set.",
                "The color of the blade is decided by the power cell behind it."
              ],
              "answer": 2,
              "hint": "The paragraphs go: what the crystal does, what decides its color, how it has to sit. Find the choice that holds all three, and cross off the one the page directly denies.",
              "skill": "Central idea and evidence",
              "evidence": "The crystal is the heart of a saber, and the chamber is its cradle."
            },
            {
              "q": "Claim: without a crystal, the energy in the cell would be wasted rather than simply unused. Which sentence from the schematic best supports that claim?",
              "choices": [
                "When energy from the power cell passes through an ember crystal, the crystal focuses it, the way a magnifying glass focuses sunlight into a single bright point.",
                "Without the crystal, the cell's energy just spills out as heat.",
                "If the crystal sits even slightly crooked, the energy leaves at an angle, and the blade wobbles like a bent rod.",
                "The crystal is the heart of a saber, and the chamber is its cradle."
              ],
              "answer": 1,
              "hint": "Calling the crystal the heart is a picture, not a proof. Wasted means the energy still goes somewhere. Find the sentence that says where.",
              "skill": "Finding details",
              "evidence": "Without the crystal, the cell's energy just spills out as heat."
            },
            {
              "q": "What job does the third paragraph do in this schematic?",
              "choices": [
                "It explains where the ember crystals are dug from: the cooled lava tubes on the moon that can be seen from the workshop window.",
                "It compares a blue blade with a violet one.",
                "It lists the tools kept on the workshop bench.",
                "It shows that a good crystal is not enough by itself, because how it sits decides whether the blade comes out straight."
              ],
              "answer": 3,
              "hint": "Delete the paragraph in your head. Two paragraphs would still tell you what a crystal does and what color it burns. What would you no longer know?",
              "skill": "Author's purpose and structure",
              "evidence": "If the crystal sits even slightly crooked, the energy leaves at an angle, and the blade wobbles like a bent rod."
            },
            {
              "q": "The schematic calls the chamber the crystal's 'cradle'. What does that word tell you about the chamber's job?",
              "choices": [
                "It rocks the crystal gently while the saber is lit",
                "It keeps the crystal warm and out of the cold while the saber is switched off",
                "It holds the crystal steady in exactly the position it needs to be in",
                "It is the place where a new crystal is grown"
              ],
              "answer": 2,
              "hint": "Do not stop at the picture of a baby's cradle. Read on to the third paragraph, which says in plain words what the chamber is actually doing to the crystal.",
              "skill": "Word meanings",
              "evidence": "The chamber holds the crystal in exact alignment with the emitter above it."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why a slightly crooked crystal gives a poor blade even when the crystal itself is perfect. Why does it?",
              "choices": [
                "A crooked crystal cools down faster than a straight one.",
                "The chamber squeezes a crooked crystal until its lattice widens, and a widened lattice burns a color the builder never chose.",
                "A crooked crystal pulls more energy out of the cell than a straight one, and the cell runs down before the blade is up to full length.",
                "A crystal focuses the energy in whatever direction it is pointing, so tilting the crystal tilts the beam."
              ],
              "answer": 3,
              "hint": "Paragraph one compares the crystal to a magnifying glass. Paragraph three says alignment is about which way the lattice points. Hold those two facts together and the answer follows.",
              "skill": "Reading between the lines",
              "evidence": "Alignment means the crystal's lattice points straight up the hilt."
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
              "Subtracting: line up the ones, tens and hundreds. 275 − 142 = 133.",
              "What is left: the whole job is 6/6. Take away 2/6 and 4/6 is left."
            ],
            "example": "6 groups of 3: 3 + 3 + 3 + 3 + 3 + 3 = 18. So 6 × 3 = 18."
          },
          "problems": [
            {
              "q": "Kessa counted 4 crystals yesterday and three times as many today. How many crystals today?",
              "answer": "12",
              "hint": "Three times 4: 4 + 4 + 4.",
              "skill": "Multiplying"
            },
            {
              "q": "Kessa packs 32 crystals into trays of 4. How many trays is that?",
              "answer": "8",
              "hint": "How many 4s make 32?",
              "skill": "Dividing"
            },
            {
              "q": "Kessa starts with 168 ember crystals and uses 158. How many are left?",
              "answer": "10",
              "hint": "168 − 158.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "1/8 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "7/8",
              "hint": "The whole job is 8/8. Take 1/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The tally stood at 471 ember crystals and 500 more were added. What is the tally now?",
              "answer": "971",
              "hint": "471 + 500.",
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
            "example": "2 × (10 − 3) + 8 = 2 × 7 + 8 = 22."
          },
          "problems": [
            {
              "q": "Kessa has 6 feet of silver wire. Each crystal clip takes 1/4 of a foot of wire. How many clips can Kessa make?",
              "answer": "24",
              "hint": "Dividing by 1/4 is the same as multiplying by 4: 6 × 4.",
              "skill": "Fractions"
            },
            {
              "q": "40 of the 80 ember crystals are set aside. What percent is that? (write just the number)",
              "answer": "50",
              "accept": [
                "50%"
              ],
              "hint": "40 out of 80, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 3 trays there are 5 ember crystals. There are 15 ember crystals. How many trays?",
              "answer": "9",
              "hint": "15 ÷ 5 = 3 groups. Each group has 3 trays.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Kessa works out 3 + 6 × 12. What is it?",
              "answer": "75",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 900 − x = 146",
              "answer": "754",
              "hint": "x is what is left when 146 is taken off 900.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 14 ÷ 4 = 3.5.",
              "Percent change: divide the change by the starting number. From 80 to 92 is 12 ÷ 80 = 0.15, so 15%.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "7x + 11 = 60, so 7x = 49, so x = 7."
          },
          "problems": [
            {
              "q": "One part needs 1.5 minutes. How many minutes do 24 parts need?",
              "answer": "36",
              "hint": "24 × 1.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Kessa counted 200 ember crystals on the first pass and 220 on the second. By what percent did the count change? (write just the number)",
              "answer": "10",
              "accept": [
                "10%"
              ],
              "hint": "The change is 20. 20 out of 200, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The gauge drops 4 every hour for 6 hours. What is the total change? (Write a drop as a negative number.)",
              "answer": "-24",
              "accept": [
                "−24"
              ],
              "hint": "6 hours of −4 each: 6 × (−4). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 50 − 4x = 30",
              "answer": "5",
              "hint": "Move 4x to the right and 30 to the left: 4x = 20.",
              "skill": "Equations"
            },
            {
              "q": "A round window has a radius of 10 centimeters. Using 3.14 for pi, how many centimeters is it around the edge?",
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
            "example": "A tank holds 70 liters and drains 8 each hour. After 7 hours: y = 70 − 8 × 7 = 14."
          },
          "problems": [
            {
              "q": "Kessa starts with 54 ember crystals and uses 5 every hour. How many are left after 6 hours?",
              "answer": "24",
              "hint": "5 × 6 = 30 used, taken off 54.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 81?",
              "answer": "9",
              "hint": "What number times itself makes 81?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 5-meter cable runs from the top of a post to a point 4 meters away on the ground. How tall is the post, in meters?",
              "answer": "3",
              "hint": "a² = c² − b² = 25 − 16 = 9. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x = 4x + 16",
              "answer": "4",
              "hint": "Take 4x off both sides: 4x = 16. Then divide by 4.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 5 meters and holds 235.5 cubic meters. Using 3.14 for pi, how many meters deep is it?",
              "answer": "3",
              "hint": "The floor's area is 3.14 × 5 × 5 = 78.5. Divide the volume by that.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Two totals, keep one",
          "points": [
            "Some steps build two different numbers. Write each one down and label it: step 2, step 3.",
            "A later step picks which one goes on. Read it before you add anything to either."
          ],
          "example": "Step 2 gives 15 and step 3 gives 8. If step 4 taps the step 2 number, 15 is the one you carry on with."
        },
        "skill": "Following directions",
        "steps": [
          "Kessa sets three ember crystals on the bench: blue, green and amber.",
          "Count the letters in the word BLUE, multiply that count by 3, and keep the number.",
          "Count the letters in the word AMBER, multiply that count by 2, and keep that number as well.",
          "Kessa points at your two numbers, the step 2 one and the step 3 one, and taps the step 3 number. That is the one you keep.",
          "Add the number of crystals on the bench.",
          "Type the number for the crystal tag."
        ],
        "prompt": "Your answer:",
        "answer": "13",
        "hint": "BLUE has four letters and AMBER has five. Step 4 taps one of your two numbers, and that is the one step 5 works on."
      }
    },
    {
      "id": "saber-3",
      "title": "The Emitter",
      "recon": {
        "lesson": {
          "title": "Comparisons and sayings",
          "points": [
            "When the schematic says 'X is like Y', a question will ask what that means. Ask yourself: what do the two things have in common?",
            "Word questions: the word is usually defined in the same sentence or the next one. 'The top of a tree is called the crown.'"
          ],
          "example": "'A good teacher is like a lighthouse.' A lighthouse shows ships the safe way in. So a good teacher shows you the safe way through."
        },
        "title": "Schematic: The Emitter",
        "passage": [
          "The emitter is the top of the hilt, the part the blade comes out of. Kessa calls it the mouth. Energy leaves the crystal as a tight beam, but a beam with no shape would spread out and fade a few centimeters up. The emitter shapes it. Inside the emitter is a ring of small magnets that squeeze the beam into a blade with a firm edge and a rounded tip. Turn the ring one way and the blade grows longer. Turn it the other way and it shortens.",
          "The opening at the very top is called the aperture. Its width sets how thick the blade is. A narrow aperture makes a thin, quick blade. A wide one makes a heavy blade that is slower to swing but harder to push aside. Most builders start in the middle and adjust after their first practice. Kessa says an aperture is like a boot size: nobody else can tell you yours.",
          "Heat is the emitter's enemy. All that squeezed energy warms the metal, and a hot emitter slowly melts its own magnets. So every emitter has cooling fins, thin metal blades around the outside that carry heat away into the air. Kessa counts the fins on every emitter she builds and files each one until it rings when she flicks it. A fin that does not ring is bent, and a bent fin holds heat instead of letting it go."
        ],
        "questions": [
          {
            "q": "What does the ring of magnets inside the emitter do?",
            "choices": [
              "Stores the energy until the switch under the thumb is pressed",
              "Carries heat away from the emitter and out into the surrounding air",
              "Sets the color of the blade by how tightly its lines are spaced",
              "Squeezes the beam into a blade with an edge and a tip"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentence that starts 'Inside the emitter'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is the 'aperture'?",
            "choices": [
              "The opening at the top of the emitter",
              "A kind of magnet",
              "A cooling fin",
              "The rounded tip of the blade"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 2 defines it.",
            "skill": "Word meanings"
          },
          {
            "q": "What happens to a bent cooling fin?",
            "choices": [
              "It holds heat instead of letting it go",
              "It rings clearly when Kessa flicks it with a finger",
              "It makes the blade grow longer when the ring is turned",
              "It squeezes the beam too hard"
            ],
            "answer": 0,
            "hint": "The last sentence of paragraph 3.",
            "skill": "Finding details"
          },
          {
            "q": "What does Kessa mean when she says an aperture is 'like a boot size'?",
            "choices": [
              "A wider aperture always makes the better blade",
              "Every builder should start with the widest aperture",
              "An aperture wears down and has to be reset each year",
              "The right width is personal, and only the builder can find it"
            ],
            "answer": 3,
            "hint": "What do boot sizes and apertures have in common? Read the words right after the comparison.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How turning the ring of magnets one way or the other changes the blade's length",
              "Why heat is dangerous to the emitter and how the fins deal with it",
              "How the width of the aperture sets the thickness and the speed of the blade",
              "How Kessa counts and files each cooling fin until it rings when she flicks it"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 3 names the topic. Every sentence after it is about the same thing.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Multiply, subtract, and area",
          "points": [
            "32 bolts at 3 minutes each: 32 × 3.",
            "Making something shorter is subtraction: 80 − 27.",
            "Area of a rectangle: length × width. A 4 cm by 9 cm card is 4 × 9 square centimeters."
          ],
          "example": "1/6 + 4/6: same bottom, add the tops, 5/6."
        },
        "problems": [
          {
            "q": "An emitter has 24 cooling fins. Kessa files each one in 2 minutes. How many minutes does she spend on all of them?",
            "answer": "48",
            "hint": "24 × 2.",
            "skill": "Multiplying"
          },
          {
            "q": "A blade is 90 cm long. Turning the ring shortens it by 36 cm. How long is it now?",
            "answer": "54",
            "hint": "90 − 36.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "An emitter's cooling plate is 3 cm wide and 12 cm long. What is its area in square centimeters?",
            "answer": "36",
            "hint": "3 × 12.",
            "skill": "Area and perimeter"
          },
          {
            "q": "Kessa has filed 5/8 of the fins. After lunch she files 2/8 more. What fraction is filed now? (write a fraction)",
            "answer": "7/8",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "A spare emitter ring costs $7.50. Kessa buys 2 of them. How much do they cost? (write it like 3.25)",
            "answer": "15",
            "hint": "7.50 + 7.50, or 7.50 × 2.",
            "accept": [
              "$15",
              "15.00",
              "$15.00"
            ],
            "skill": "Money and decimals"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The shape of a paragraph",
            "points": [
              "Paragraphs are built in a few shapes: a cause and its effects, two things compared, steps in order, or a problem and what was done about it.",
              "Signpost words give the shape away. 'Because' and 'so' mean cause and effect. 'But' and 'while' mean comparison. 'First, then, finally' means order.",
              "Naming the shape is not the same as retelling the content. A choice that only repeats what the paragraph said has named nothing."
            ],
            "example": "'The metal warms. Warm metal expands. Expanding metal jams the hinge.' Three sentences, each one caused by the one before it. That paragraph is cause and effect and nothing else."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole schematic?",
              "choices": [
                "The width of the aperture sets how thick the blade is, a narrow one making a thin, quick blade and a wide one making a heavy blade that is slower to swing.",
                "Metal parts in any machine need cooling of some kind, and a machine with no way of getting rid of its heat will always wear out sooner than one that has.",
                "The emitter melts its own magnets on purpose to shape the blade, and the cooling fins are there to keep that melting going at a steady, even speed.",
                "Everything in the emitter is about controlling the energy passing through it, and about surviving the heat that all that control creates."
              ],
              "answer": 3,
              "hint": "Magnets that squeeze, an opening that sets thickness, fins that carry heat away. Ask what all three of those are dealing with before you pick.",
              "skill": "Central idea and evidence",
              "evidence": "Heat is the emitter's enemy."
            },
            {
              "q": "Claim: without the emitter there would be no blade to speak of, only a beam that dies a short way up. Which sentence from the schematic best supports that claim?",
              "choices": [
                "Energy leaves the crystal as a tight beam, but a beam with no shape would spread out and fade a few centimeters up.",
                "The emitter is the top of the hilt, the part the blade comes out of.",
                "Turn the ring one way and the blade grows longer.",
                "All that squeezed energy warms the metal, and a hot emitter slowly melts its own magnets."
              ],
              "answer": 0,
              "hint": "Saying where a part sits is not saying what would happen without it. Find the sentence that describes the beam left to itself.",
              "skill": "Finding details",
              "evidence": "Energy leaves the crystal as a tight beam, but a beam with no shape would spread out and fade a few centimeters up."
            },
            {
              "q": "Why does the schematic end with a paragraph about cooling fins?",
              "choices": [
                "The first two paragraphs create a problem, all that squeezed energy, and this paragraph gives the part built to solve it.",
                "It explains how the aperture at the top is widened and narrowed, and how a builder settles on the one width that suits their own hand.",
                "It compares the emitter with the power cell below it.",
                "It describes the sound a finished blade makes when it lights, and the different note it gives off once the emitter has warmed through."
              ],
              "answer": 0,
              "hint": "Ask what the earlier paragraphs left unresolved. A last paragraph often exists to close something the ones before it opened.",
              "skill": "Author's purpose and structure",
              "evidence": "All that squeezed energy warms the metal, and a hot emitter slowly melts its own magnets."
            },
            {
              "q": "The schematic says 'an aperture is like a boot size: nobody else can tell you yours'. What is that comparison telling you?",
              "choices": [
                "An aperture has to be measured in the same units as a shoe",
                "A wide aperture is always the better choice of the two",
                "Only an experienced builder can pick an aperture correctly",
                "The right setting depends on the person holding it, so it has to be found rather than recommended"
              ],
              "answer": 3,
              "hint": "Two people can both have the right boots and the wrong sizes for each other. Carry that idea across to the opening at the top of a hilt.",
              "skill": "Word meanings",
              "evidence": "Kessa says an aperture is like a boot size: nobody else can tell you yours."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why a bent cooling fin is a problem for the blade and not only for the metal. Why is it?",
              "choices": [
                "A bent fin lets the blade grow longer than the builder set it, because the ring of magnets loosens as the metal warms.",
                "Heat that stays in the emitter melts the magnets, and it is the magnets that give the blade its shape.",
                "A bent fin leans across part of the aperture and blocks it, so the blade comes out thinner than the width the builder chose.",
                "A bent fin holds heat instead of letting it go, so the hilt slowly grows too hot for anyone to keep hold of."
              ],
              "answer": 1,
              "hint": "Paragraph three tells you what heat does to the magnets. Paragraph one tells you what the magnets are for. Follow the damage one step further than the paragraph does.",
              "skill": "Reading between the lines",
              "evidence": "Inside the emitter is a ring of small magnets that squeeze the beam into a blade with a firm edge and a rounded tip."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 5 × 9 means 5 groups of 9.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "5 groups of 9: 9 + 9 + 9 + 9 + 9 = 45. So 5 × 9 = 45."
          },
          "problems": [
            {
              "q": "Kessa lays the fins out in 4 rows of 7. How many fins is that?",
              "answer": "28",
              "hint": "4 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "21 fins are set out in 3 equal rows. How many fins are in each row?",
              "answer": "7",
              "hint": "21 split into 3 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 154 cooling fins, then 149 more are added and 36 are taken off. What does the log show now?",
              "answer": "267",
              "hint": "Add 154 and 149 first, then take 36 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 2/4 + 1/4 (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. 2 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "An emitter mat is 6 meters wide and 4 meters long. How many meters is it all the way around the edge?",
              "answer": "20",
              "hint": "Two sides of 6 and two sides of 4: 6 + 6 + 4 + 4.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Dividing a decimal by a whole number: divide as usual and keep the point in place. 8.4 ÷ 4 = 2.1.",
              "Finding the whole: if 25% is 12, the whole is 12 ÷ 25 × 100 = 48.",
              "Simplest ratio: divide both numbers by the biggest number that goes into both. 12:16 becomes 3:4.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(6 + 2) × 4: parentheses first, so 8 × 4 = 32."
          },
          "problems": [
            {
              "q": "9 parts took 13.05 minutes altogether, and each took the same. How many minutes did each one take?",
              "answer": "1.45",
              "hint": "13.05 ÷ 9. Divide as with whole numbers and keep the point in place.",
              "skill": "Decimals"
            },
            {
              "q": "75% of the cooling fins counted is 90. How many were counted in all?",
              "answer": "120",
              "hint": "90 is 75 hundredths of the whole: 90 ÷ 75 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Kessa counts 6 emitters and 9 cooling fins. In its simplest form, what is the ratio of emitters to cooling fins? (write it like 2:3)",
              "answer": "2:3",
              "accept": [
                "2 to 3"
              ],
              "hint": "Divide both by 3.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Kessa works out (5 + 3) × 7. What is it?",
              "answer": "56",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 5x = 1,925",
              "answer": "385",
              "hint": "Divide both sides by 5.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many. To see how many fit, divide by the size of one: 7 ÷ 0.25 = 28.",
              "Working backward: after a 20% rise, the new number is 120% of the old one, so divide by 1.2 to go back.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the last thing done to x first. If a set of parentheses is multiplied, divide first."
            ],
            "example": "(x + 9) × 4 = 52, so x + 9 = 13, so x = 4."
          },
          "problems": [
            {
              "q": "Kessa has 8 minutes to spend, and each part takes 0.5 minutes. How many parts is that enough for?",
              "answer": "16",
              "hint": "8 ÷ 0.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of cooling fins rose by 10% to 88. What was it before?",
              "answer": "80",
              "hint": "88 is 110% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ledger reads 21 fins. Kessa takes out 36 fins. What does it read now?",
              "answer": "-15",
              "accept": [
                "−15"
              ],
              "hint": "21 takes it to 0, and 15 more comes out below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 21) × 6 = 138",
              "answer": "2",
              "hint": "Divide both sides by 6 first, then take 21 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 25. The workbench on the model is 5 cm long. How many cm long is the real one?",
              "answer": "125",
              "hint": "Every cm on the model is 25 cm for real.",
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
            "example": "y = 2x + 11 when x = 9: 2 × 9 + 11 = 18 + 11 = 29."
          },
          "problems": [
            {
              "q": "The count of cooling fins follows the rule y = 9x + 5, where x is the hour. What is y when x = 3?",
              "answer": "32",
              "hint": "Put 3 in for x: 9 × 3 + 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 6² + 7²?",
              "answer": "85",
              "hint": "6 × 6 = 36 and 7 × 7 = 49. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 10-meter ladder reaches the top of a 6-meter post. How far is the foot of the ladder from the base, in meters?",
              "answer": "8",
              "hint": "b² = c² − a² = 100 − 36 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 10x + 30 − 5x = 55",
              "answer": "5",
              "hint": "Collect the x's first: 5x + 30 = 55.",
              "skill": "Equations"
            },
            {
              "q": "What is 5 × 10^3 ÷ 10^2?",
              "answer": "50",
              "hint": "Dividing subtracts the powers: 10^3 ÷ 10^2 = 10^1. So 5 × 10.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "A condition with a number to check",
          "points": [
            "Do the steps in order and write the running number after each one.",
            "When a step says 'if the number is less than', compare your running number to it before doing anything else."
          ],
          "example": "70 + 20 − 15 = 75. Is 75 less than 80? Yes. So the condition applies."
        },
        "skill": "Following directions",
        "steps": [
          "Set the blade length to 90 cm.",
          "Turn the emitter ring one way to add 15 cm.",
          "Turn it back the other way to take off 25 cm.",
          "If the length after step 3 is under 85 cm, Kessa's bench rule adds 10 cm. Apply that rule if your length needs it.",
          "There are 10 millimeters in every centimeter. Type the final length in millimeters."
        ],
        "prompt": "Final length (mm):",
        "answer": "900",
        "hint": "Work steps 2 and 3 on the 90 first, then check step 4. Step 5 wants millimeters, and each centimeter holds ten of them."
      }
    },
    {
      "id": "saber-4",
      "title": "The Activation Switch",
      "recon": {
        "lesson": {
          "title": "Instead of, and counting sentences",
          "points": [
            "'Why does she do X instead of Y' questions are about her reason. Find the sentence that shows what X leads to.",
            "For 'mostly about', count how many sentences are about each idea. The idea with the most sentences wins."
          ],
          "example": "A paragraph has six sentences. Five are about how bees make honey and one is about a beekeeper's hat. So it is mostly about how bees make honey."
        },
        "title": "Schematic: The Activation Switch",
        "passage": [
          "The activation switch is the smallest part of a saber and the one Kessa worries about most. It sits in the hilt under the thumb. Press it and the cell discharges, the crystal focuses, the emitter shapes, and the blade appears in less than a blink. Release it and the blade is gone. A switch that sticks, or fires when it is bumped, is not a saber. It is an accident waiting in a pocket.",
          "So every switch Kessa builds has an interlock. An interlock is a second, hidden catch that has to be released before the main switch will work. On her sabers it is a small slide under the thumb: push the slide forward, then press. Two motions, in order. A saber knocked off a table cannot do two motions in order. A careless hand cannot either. That is the whole point.",
          "New builders sometimes ask to skip the interlock because it slows them down. Kessa shows them the burn scar on her workbench, a black oval the size of a plate, from a saber that fired while she was reaching past it thirty years ago. Then she asks how much slower they would like to be. Nobody has ever asked twice."
        ],
        "questions": [
          {
            "q": "Where does the activation switch sit?",
            "choices": [
              "In the hilt under the thumb",
              "At the emitter's top",
              "In the crystal chamber",
              "On the cooling fins"
            ],
            "answer": 0,
            "hint": "Paragraph 1, second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is an 'interlock'?",
            "choices": [
              "A second, hidden catch that must be released before the switch works",
              "The main switch",
              "The moment between the thumb pressing the switch and the blade appearing",
              "A catch inside the emitter that locks the blade at full length once it is lit"
            ],
            "answer": 0,
            "hint": "The second sentence of paragraph 2 defines it.",
            "skill": "Word meanings"
          },
          {
            "q": "What two motions, in order, ignite one of Kessa's sabers?",
            "choices": [
              "Twist the ring, then pull back",
              "Press, then twist the ring",
              "Tap the switch twice, fast",
              "Push the slide forward, then press"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with the colon.",
            "skill": "Finding details"
          },
          {
            "q": "Why does Kessa show new builders the burn scar instead of just saying no?",
            "choices": [
              "She likes telling the story of her old workshop to everyone who comes in through the door",
              "Seeing what happens without an interlock convinces them better than an argument",
              "She wants them to work out for themselves how much slower an interlock really makes them",
              "Thirty years ago she promised to show the scar to every builder who asks to skip it"
            ],
            "answer": 1,
            "hint": "Paragraph 3 ends with 'Nobody has ever asked twice.' What does the scar do to their question?",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How quickly the blade appears once the thumb presses the switch",
              "The burn scar on Kessa's workbench",
              "How the interlock works and why it makes the saber safe",
              "Where a thumb goes on the hilt"
            ],
            "answer": 2,
            "hint": "Count how many sentences in paragraph 2 are about the interlock.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Across zeros, and two steps",
          "points": [
            "1,000 − 27: think of 1,000 as 999 + 1. 999 − 27 = 972, plus 1 is 973.",
            "Two-step: add the two motions first, then multiply by how many times.",
            "Leftovers: 100 ÷ 8 is 12 with 4 left over, because 12 × 8 = 96."
          ],
          "example": "3 notebooks at $2.25: $2.25 + $2.25 = $4.50, and $4.50 + $2.25 = $6.75."
        },
        "problems": [
          {
            "q": "A switch is pressed 1,000 times on the test rig. It fails 6 times. How many times does it work?",
            "answer": "994",
            "hint": "1,000 − 6. Think of 1,000 as 999 + 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The slide moves 4 mm and the button presses 6 mm. Kessa does the two motions 3 times. How many millimeters of travel in all?",
            "answer": "30",
            "hint": "4 + 6 first. Then × 3.",
            "skill": "Multi-step problems"
          },
          {
            "q": "Kessa packs 150 switches into boxes of 8. After filling as many boxes as she can, how many switches are left over?",
            "answer": "6",
            "hint": "8 × 18 = 144. How far is 144 from 150?",
            "skill": "Dividing"
          },
          {
            "q": "Switch parts cost $3.50 each. How much do 4 of them cost? (write it like 2.25)",
            "answer": "14",
            "accept": [
              "14.00",
              "$14",
              "$14.00"
            ],
            "hint": "$3.50 + $3.50 = $7. Then $7 + $7.",
            "skill": "Money and decimals"
          },
          {
            "q": "The test rig ran 3/10 of its checks before lunch and 4/10 after. What fraction of the checks has run? (write a fraction)",
            "answer": "7/10",
            "hint": "Same bottom. Add the tops: 3 + 4.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The word in that sentence",
            "points": [
              "A word is doing one job in one sentence. Work out the job it is doing there, not the entry it would have in a dictionary.",
              "Some phrases are painting a picture rather than stating a fact. Ask what the picture is showing you, then say it in plain words.",
              "Put your pick back into the sentence. If the sentence now claims something the page never claimed, it is the wrong pick."
            ],
            "example": "'The old rope was an argument waiting to happen.' Nobody is arguing. The phrase is telling you the rope will cause trouble later, and that everyone knows it."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole schematic?",
              "choices": [
                "The smallest part gets the most care, because the cost of it going wrong is not a poor blade but an accident.",
                "An interlock is a second catch that has to be released before the switch works.",
                "Safety rules slow down every job worth doing.",
                "The switch is the largest part of a saber and the simplest to build."
              ],
              "answer": 0,
              "hint": "Paragraph one says what a bad switch is. Paragraph two says what she does about it. Paragraph three says what happened once. Find the choice that holds all three, not just the middle one.",
              "skill": "Central idea and evidence",
              "evidence": "The activation switch is the smallest part of a saber and the one Kessa worries about most."
            },
            {
              "q": "Claim: the interlock is designed against accidents rather than against people trying to fire the saber. Which sentence from the schematic best supports that claim?",
              "choices": [
                "A saber knocked off a table cannot do two motions in order.",
                "An interlock is a second, hidden catch that has to be released before the main switch will work.",
                "On her sabers it is a small slide under the thumb: push the slide forward, then press.",
                "Two motions, in order."
              ],
              "answer": 0,
              "hint": "Two of these say what an interlock is or that it exists. The claim is about what it is aimed at. Find the sentence naming something that has no intentions at all.",
              "skill": "Finding details",
              "evidence": "A saber knocked off a table cannot do two motions in order."
            },
            {
              "q": "Why does the schematic end with the story of the burn scar instead of another instruction?",
              "choices": [
                "It explains how a workbench is put together.",
                "It gives the order in which the switch is assembled.",
                "It compares an old saber with a newly built one.",
                "The paragraph raises a complaint about the interlock, and the scar answers it."
              ],
              "answer": 3,
              "hint": "Read the first sentence of the last paragraph. Somebody complains. Then ask what the rest of the paragraph is doing to that complaint.",
              "skill": "Author's purpose and structure",
              "evidence": "Kessa shows them the burn scar on her workbench, a black oval the size of a plate, from a saber that fired while she was reaching past it thirty years ago."
            },
            {
              "q": "The schematic says a switch that sticks 'is an accident waiting in a pocket'. What is that phrase telling you?",
              "choices": [
                "It is only dangerous while the saber is shut away inside somebody's pocket, out of sight",
                "It has not caused harm yet, and it will as soon as somebody carries it around",
                "It is too small a fault to be worth fixing, since the switch is the cheapest part of the whole saber",
                "It stops the blade from lighting at the moment you need it most, so the saber fails you when it matters"
              ],
              "answer": 1,
              "hint": "Nothing is literally waiting in anybody's pocket. Split the picture in two: what does waiting tell you about time, and what does the pocket tell you about where the saber is?",
              "skill": "Word meanings",
              "evidence": "A switch that sticks, or fires when it is bumped, is not a saber."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why the answer is two motions rather than simply a stiffer switch. Why is it?",
              "choices": [
                "A stiff switch would be too slow for a practiced builder, who needs the blade to arrive the very moment the thumb comes down on it.",
                "Two motions draw less energy out of the cell.",
                "The blade appears the instant the switch goes down, so the only protection worth having is one a bump cannot carry out.",
                "A stiff switch would wear the interlock slide out too quickly."
              ],
              "answer": 2,
              "hint": "Paragraph one tells you how fast the blade arrives once the switch moves. Paragraph two tells you the one thing a falling saber cannot do. Put those together.",
              "skill": "Reading between the lines",
              "evidence": "Press it and the cell discharges, the crystal focuses, the emitter shapes, and the blade appears in less than a blink."
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
              "Subtracting: line up the ones, tens and hundreds. 600 − 315 = 285.",
              "A fraction is parts out of the whole: 3 slices out of 5 is 3/5."
            ],
            "example": "6 groups of 7: 7 + 7 + 7 + 7 + 7 + 7 = 42. So 6 × 7 = 42."
          },
          "problems": [
            {
              "q": "Every test rig needs 3 switches, and there are 8 test rigs. How many switches is that?",
              "answer": "24",
              "hint": "8 groups of 3, so 8 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "Kessa splits 48 switches in half. How many switches is one half?",
              "answer": "24",
              "hint": "Half of 48.",
              "skill": "Dividing"
            },
            {
              "q": "Kessa needs 500 test presses and has 209. How many more are needed?",
              "answer": "291",
              "hint": "500 − 209.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and Kessa has finished 4 of them. What fraction is done? (write a fraction)",
              "answer": "4/8",
              "hint": "4 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "Kessa counts 209 test presses, then 65 more. How many is that?",
              "answer": "274",
              "hint": "209 + 65.",
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
            "example": "9 × 4 − 2 × 5: do both multiplications first, so 36 − 10 = 26."
          },
          "problems": [
            {
              "q": "Kessa has 3/4 of a tube of contact paste and spreads it equally over 3 switch pads. What fraction of the tube goes on each pad? (write a fraction)",
              "answer": "1/4",
              "hint": "Sharing among 3 is the same as multiplying by 1/3: 3/4 × 1/3.",
              "skill": "Fractions"
            },
            {
              "q": "Of 200 test presses, 10% are crossed off the list. How many are left on it?",
              "answer": "180",
              "hint": "10% of 200 is 20. Take that off 200.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Kessa shares 48 slides between two teams in the ratio 3 to 5. How many does the smaller share get?",
              "answer": "18",
              "hint": "3 + 5 = 8 parts. 48 ÷ 8 = 6 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Kessa works out 6 × 6 − 1 × 3. What is it?",
              "answer": "33",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 295 + 23 = 750",
              "answer": "432",
              "hint": "Add 295 and 23 first, then take that off 750.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 9 ÷ 12 = 0.75.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the last thing done to x first. If a set of parentheses is multiplied, divide first."
            ],
            "example": "3(x + 4) = 33, so x + 4 = 11, so x = 7."
          },
          "problems": [
            {
              "q": "16 parts took 8 minutes. At the same rate, how many minutes would 20 parts take?",
              "answer": "10",
              "hint": "One part takes 8 ÷ 16 = 0.5. Then × 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Kessa planned 60 test presses, then added 50% more. How many extra test presses was that?",
              "answer": "30",
              "hint": "50% of 60: 50/100 × 60.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 6 hours the gauge dropped 54 in all, the same amount each hour. What was the change each hour? (Write a drop as a negative number.)",
              "answer": "-9",
              "accept": [
                "−9"
              ],
              "hint": "Share −54 into 6 equal parts: −54 ÷ 6. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 5(x + 22) = 135",
              "answer": "5",
              "hint": "Divide both sides by 5 to get x + 22 = 27.",
              "skill": "Equations"
            },
            {
              "q": "A square sheet has an area of 25 square centimeters. How many centimeters is it around the edge?",
              "answer": "20",
              "hint": "Find one side first: what number times itself makes 25? Then add four sides.",
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
            "example": "A list goes 6, 13, 20, 27. It starts at 6 and adds 7 each step, so the 10th number is 6 + 9 × 7 = 69."
          },
          "problems": [
            {
              "q": "The count of test presses goes 24, 32, 40, 48, and on. What is the 12th number in the list?",
              "answer": "112",
              "hint": "It starts at 24 and adds 8 each step. The number you want is 11 steps on from 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 11² − 11?",
              "answer": "110",
              "hint": "11 × 11 = 121, then take 11 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 9 and 12 meters. How long is its longest side, in meters?",
              "answer": "15",
              "hint": "9² + 12² = 225. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x − 3x = 6",
              "answer": "3",
              "hint": "5 − 3 = 2, so 2x = 6.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 6 meters across and 2 meters deep. Using 3.14 for pi, what is its volume in cubic meters? (The radius is half the distance across.)",
              "answer": "56.52",
              "hint": "The radius is 6 ÷ 2 = 3. Volume = 3.14 × radius × radius × depth: 3.14 × 3 × 3 × 2.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Find the numbers in the schematic",
          "points": [
            "Some steps send you back to the schematic for a number. Find it, write it down, then follow the steps.",
            "Check each number against the sheet, not your memory."
          ],
          "example": "The interlock needs 2 motions. Kessa's bench burned 30 years ago. Both are in the schematic."
        },
        "skill": "Following directions",
        "steps": [
          "Kessa's interlock takes two motions in order, slide then press. Write down 2.",
          "Multiply it by the number of years since her bench burned. The schematic gives that number.",
          "Take away the 2 motions from step 1 again.",
          "Add 1 for the switch itself, sitting in the hilt under the thumb.",
          "Type the result, unless it is more than 40, in which case type INTERLOCK instead."
        ],
        "prompt": "Your answer:",
        "answer": "INTERLOCK",
        "accept": [
          "interlock",
          "Interlock",
          "interlock.",
          "INTERLOCK."
        ],
        "hint": "The schematic says how long ago the bench burned. Read step 5 before you type: it sets a limit on the number you worked out."
      }
    },
    {
      "id": "saber-5",
      "title": "The Hilt Sleeve",
      "recon": {
        "lesson": {
          "title": "Put it all together",
          "points": [
            "Detail, word, why, mostly about. You have done all four this week. Same moves, one more time.",
            "When a question says 'as the schematic uses it', the everyday meaning of the word may be wrong. Use the schematic's definition."
          ],
          "example": "'Bark' in everyday life is the sound a dog makes. In a report about trees it means the hard outer skin of a trunk."
        },
        "title": "Schematic: The Hilt Sleeve",
        "passage": [
          "The last part is the hilt sleeve, the outer shell you actually hold. Everything else, cell, chamber, emitter, switch, sits inside it. Kessa makes sleeves from a dull gray alloy that does not get slippery when your hands sweat. She wraps the grip in leather cord, one turn at a time, and pulls each turn tight against the last. A sleeve that is loose anywhere rattles, and a rattle means a part is moving that should not.",
          "The sleeve also gives the saber its balance. Balance is the point where the saber would rest level on one finger. Too much weight in the emitter and the blade drags the tip down. Too much in the pommel, the bottom cap, and the saber feels dead in the hand. Kessa adds or removes small brass weights inside the pommel until the balance point sits one finger's width above the switch. She says a balanced saber feels lighter than it is.",
          "When the sleeve closes, the saber is finished, and Kessa does one last thing. She hands it to the builder unlit and asks for its name. Not a fancy name. A real one. She says a thing you built with your own hands in the right order deserves to be called something, and that a builder who cannot name it was not paying attention. Then, and only then, she steps back and says: ignite it."
        ],
        "questions": [
          {
            "q": "Why does Kessa make sleeves from the dull gray alloy?",
            "choices": [
              "It is the cheapest alloy on the moon",
              "It is lighter than any other alloy",
              "It keeps the leather cord from slipping loose over time",
              "It does not get slippery when hands sweat"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentence about the alloy.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does 'balance' mean as the schematic uses it?",
            "choices": [
              "The saber's color",
              "The point where the saber would rest level on one finger",
              "How evenly the leather cord has been wrapped around the whole grip",
              "How much the whole saber weighs once the sleeve has been closed"
            ],
            "answer": 1,
            "hint": "The second sentence of paragraph 2 defines it.",
            "skill": "Word meanings"
          },
          {
            "q": "What does Kessa put inside the pommel to adjust the balance?",
            "choices": [
              "Two spare ember crystals",
              "Lengths of leather cord",
              "Small brass weights",
              "Cooling fins"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence that starts 'Kessa adds or removes'.",
            "skill": "Finding details"
          },
          {
            "q": "Why might a balanced saber 'feel lighter than it is'?",
            "choices": [
              "Because it weighs less",
              "Because the weight is spread evenly, so the hand is not fighting one heavy end",
              "Because a leather grip takes some of the weight off the hand",
              "Because Kessa keeps removing brass weights from the pommel until the saber really is lighter"
            ],
            "answer": 1,
            "hint": "Paragraph 2 describes what happens when one end is too heavy. A balanced saber avoids that.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How to wrap a grip",
              "How Kessa sets the balance point with the small brass weights inside the pommel",
              "The order in which every part goes into the hilt, from the power cell to the sleeve",
              "Naming the finished saber before it is lit, and why Kessa insists on it"
            ],
            "answer": 3,
            "hint": "Every sentence in paragraph 3 is about the name and the moment before ignition.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Finishing touches",
          "points": [
            "36 turns at 9 cm each: 36 × 9 = 30 × 9 + 6 × 9 = 270 + 54.",
            "Meters to centimeters: 1 meter is 100 cm, so 3 meters is 300 cm.",
            "Hundredths: 7/100 is 0.07 and 25/100 is 0.25. Two places after the point.",
            "A quarter of the way up is dividing by 4."
          ],
          "example": "A quarter of 44 is 44 ÷ 4 = 11."
        },
        "problems": [
          {
            "q": "The grip takes 48 turns of cord. Each turn uses 7 cm. How many centimeters of cord does the grip need?",
            "answer": "336",
            "hint": "40 × 7 plus 8 × 7.",
            "skill": "Multiplying"
          },
          {
            "q": "Kessa starts with a 5-meter cord and uses 360 centimeters. How many centimeters are left?",
            "answer": "140",
            "hint": "5 meters is 500 cm. Then 500 − 360.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "Kessa's scale reads in hundredths of a kilogram. The pommel weighs 64/100 of a kilogram. Write that as a decimal.",
            "answer": "0.64",
            "hint": "64 hundredths: two places after the point.",
            "skill": "Decimals"
          },
          {
            "q": "A hilt is 28 cm long. Its balance point is a quarter of the way up from the bottom. How many centimeters from the bottom is that?",
            "answer": "7",
            "hint": "28 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "The grip takes 48 turns of cord and the pommel takes 12 more. Each turn uses 7 centimeters. How many centimeters of cord is that in all?",
            "answer": "420",
            "hint": "48 + 12 = 60 turns first. Then 60 × 7.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Hold two paragraphs at once",
            "points": [
              "The last question is built so that no single paragraph answers it. Expect to use two.",
              "State a fact from one paragraph, then a fact from another, then say 'so'. What follows 'so' is the answer you are looking for.",
              "If a choice needs something the page never mentions, it is out, however reasonable it sounds by itself."
            ],
            "example": "Paragraph one: the library closes at five. Paragraph two: the bus from school gets in at five thirty. So a student on that bus cannot get there in time, and neither paragraph says that on its own."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole schematic?",
              "choices": [
                "Balance is the point where the saber would rest level on one finger, and small brass weights in the pommel move it to where it belongs.",
                "Making things by hand is more satisfying than any other work.",
                "The sleeve goes on first so that the other parts can be dropped into it.",
                "The last part is the one that turns a set of working pieces into something a person can hold, feel and call their own."
              ],
              "answer": 3,
              "hint": "Grip, balance, and a name. Ask what those three have in common that the parts inside the sleeve do not.",
              "skill": "Central idea and evidence",
              "evidence": "The last part is the hilt sleeve, the outer shell you actually hold."
            },
            {
              "q": "Claim: the sleeve tells a builder about parts they can no longer see. Which sentence from the schematic best supports that claim?",
              "choices": [
                "She wraps the grip in leather cord, one turn at a time, and pulls each turn tight against the last.",
                "A sleeve that is loose anywhere rattles, and a rattle means a part is moving that should not.",
                "Kessa adds or removes small brass weights inside the pommel until the balance point sits one finger's width above the switch.",
                "Everything else, cell, chamber, emitter, switch, sits inside it."
              ],
              "answer": 1,
              "hint": "The claim is about getting information out of the sleeve. Three of these describe the sleeve. Find the one where the sleeve reports something.",
              "skill": "Finding details",
              "evidence": "A sleeve that is loose anywhere rattles, and a rattle means a part is moving that should not."
            },
            {
              "q": "How is the second paragraph organized?",
              "choices": [
                "It lists the steps of wrapping the grip in the order they are done, one turn of leather cord at a time, each one pulled tight against the last.",
                "It explains what causes brass to be heavier than alloy.",
                "It sets two opposite faults against each other, too much weight at the top and too much at the bottom, and puts the fix between them.",
                "It tells the story of one saber that came out badly balanced, and of the builder who had to open the sleeve again and move the brass weights around."
              ],
              "answer": 2,
              "hint": "Two sentences in a row begin with the same two words and then say opposite things. That pairing is the shape of the paragraph.",
              "skill": "Author's purpose and structure",
              "evidence": "Too much weight in the emitter and the blade drags the tip down."
            },
            {
              "q": "The schematic says a bottom-heavy saber 'feels dead in the hand'. What does dead mean as it is used here?",
              "choices": [
                "Cold to the touch after a long swing",
                "Dull and slow to answer the hand that moves it",
                "No longer able to light at all, because a part inside it has failed",
                "Completely silent when it is switched on"
              ],
              "answer": 1,
              "hint": "Nothing has died. Read the sentence before it, about a tip that drags down, and ask what the opposite complaint would feel like.",
              "skill": "Word meanings",
              "evidence": "Too much in the pommel, the bottom cap, and the saber feels dead in the hand."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why a saber that is perfect inside can still feel wrong to hold. Why can it?",
              "choices": [
                "The parts inside shift about once the sleeve has been closed, and a cell or a chamber that has moved a little changes where the whole saber's weight sits.",
                "A blade set too long pulls the whole hilt out of the hand.",
                "Leather cord stretches and loosens after a few days of use, so a grip that felt right on the bench will feel wrong in the hand only a week or so later.",
                "Grip and balance are both the sleeve's own work, the leather wrap and the weights in its pommel, so a sleeve made badly feels wrong in the hand."
              ],
              "answer": 3,
              "hint": "Paragraph one gives the sleeve one job you can feel. Paragraph two gives it a second. Ask whether either of those jobs is done by anything inside.",
              "skill": "Reading between the lines",
              "evidence": "The sleeve also gives the saber its balance."
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
              "Subtracting: line up the ones, tens and hundreds. 642 − 318 = 324.",
              "Comparing fractions with the same bottom: the bigger top is the bigger fraction. 4/6 is more than 3/6."
            ],
            "example": "3 groups of 9: 9 + 9 + 9 = 27. So 3 × 9 = 27."
          },
          "problems": [
            {
              "q": "Kessa wraps 6 turns of cord on each of 5 hilts. How many turns of cord is that?",
              "answer": "30",
              "hint": "5 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "Every hilt takes 4 turns of cord. Kessa has 24 turns of cord. How many hilts can she wrap?",
              "answer": "6",
              "hint": "How many 4s fit into 24?",
              "skill": "Dividing"
            },
            {
              "q": "Kessa counted 375 turns of cord in the morning and 457 in the evening. How many more in the evening?",
              "answer": "82",
              "hint": "457 − 375.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 7/8 or 5/8? (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 5 meters on each side. How many meters is it all the way around?",
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
              "Adding decimals: line up the points, and write 2.5 as 2.50 if it helps. 1.25 + 2.5 + 0.75 = 4.5.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "Sharing in a ratio: 2 to 3 makes 5 parts. 25 split 2 to 3 is 10 and 15.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(8 − 3) × (2 + 4): each set of parentheses first, so 5 × 6 = 30."
          },
          "problems": [
            {
              "q": "Kessa logs 0.65 minutes for the first part, 2.6 for the second and 1.35 for the third. How many minutes is that in total?",
              "answer": "4.6",
              "hint": "Line the points up, writing a missing place as 0, then add all three.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 turns of cord, 75 are set aside. Out of 240 turns of cord, how many is that?",
              "answer": "180",
              "hint": "240 is 2.4 hundreds, so 2.4 × 75.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Kessa divides 14 minutes of work in the ratio 3 to 4. How many minutes is the larger share?",
              "answer": "8",
              "hint": "7 parts in all, so one part is 2 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Kessa works out (7 − 4) × (9 + 16). What is it?",
              "answer": "75",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 230 = x − 51",
              "answer": "281",
              "hint": "Add 51 to both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many. To see how many fit, divide by the size of one: 9 ÷ 0.25 = 36.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "x ÷ 3 − 5 = 6, so x ÷ 3 = 11, so x = 33."
          },
          "problems": [
            {
              "q": "The job needs 6 minutes in all, at 0.5 minutes for each part. One part is already done. How many parts are left?",
              "answer": "11",
              "hint": "6 ÷ 0.5 = 12 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of turns of cord may change by no more than 25%. Starting from 240, what is the highest count the rule allows?",
              "answer": "300",
              "hint": "25% of 240 is 60. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The cord ledger starts at 7 turns. Each of 4 days, 12 turns are signed out, more than are on the spool. What does the ledger read at the end?",
              "answer": "-41",
              "accept": [
                "−41"
              ],
              "hint": "12 × 4 comes off 7.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 4 − 23 = 10",
              "answer": "132",
              "hint": "Add 23 to both sides, then multiply by 4.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 cm for every 5 meters. How many cm are needed for 120 meters?",
              "answer": "24",
              "hint": "120 ÷ 5.",
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
            "example": "A line goes through (0, 2) and (6, 44). It rises 42 over a run of 6, so the slope is 42 ÷ 6 = 7."
          },
          "problems": [
            {
              "q": "A line passes through (0, 5) and (3, 14). What is its slope?",
              "answer": "3",
              "hint": "Slope is the rise over the run: 9 ÷ 3.",
              "skill": "Linear relationships"
            },
            {
              "q": "One spool holds 6² turns of cord. Kessa has two full spools. How many turns of cord is that?",
              "answer": "72",
              "hint": "6² is 36. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "Kessa goes 3 meters east and then 4 meters north. In a straight line, how far is that from the start, in meters?",
              "answer": "5",
              "hint": "The two legs make a right angle: 3² + 4² = 25.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 4x + 9 and x + 18 come to the same number?",
              "answer": "3",
              "hint": "Set them equal, take x off both sides, then take 9 off.",
              "skill": "Equations"
            },
            {
              "q": "Kessa writes down 9 × 10^4. Then she finds the number ten times as big. Written out in full, what is the new number?",
              "answer": "900000",
              "hint": "Ten times adds one to the power: 9 × 10^5.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Count carefully",
          "points": [
            "When a step says count, count on paper, not in your head.",
            "Two-word names have a space in them: 'power cell' has two words, 'emitter' has one."
          ],
          "example": "EMITTER: E-M-I-T-T-E-R, seven letters."
        },
        "skill": "Following directions",
        "steps": [
          "Write the five parts in build order: power cell, crystal chamber, emitter, activation switch, hilt sleeve.",
          "Count the letters in the word EMITTER.",
          "Count how many of the five part names are two words long.",
          "Multiply the two counts together.",
          "Cross out the multiplying in step 4. Go back to your step 2 count and add the step 3 count to it instead.",
          "Type the number you end with."
        ],
        "prompt": "Your answer:",
        "answer": "11",
        "hint": "EMITTER has seven letters. Step 5 swaps the multiplying in step 4 for adding, so read it before you type."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
