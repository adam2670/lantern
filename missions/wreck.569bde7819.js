// ODYSSEY — campaign "wreck". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "wreck",
  "ready": true,
  "kind": "climb",
  "readingLevel": {
    "fk": 5.7,
    "cl": 5.7
  },
  "grade": "5",
  "kindLabel": "Dive",
  "form": "sealion",
  "title": "Shipwreck Dive",
  "subtitle": "A cold lake, a hundred feet down",
  "pitch": "A steamship that sank in a storm more than a century ago is sitting upright on the bottom, almost perfect, in water so cold it never rots. Five dives, one deck at a time, from the mooring line to the engine room, with a sea lion who knows the hatches.",
  "scene": "assets/scene-wreck.jpg",
  "waypoints": [
    [
      1120,
      120
    ],
    [
      1170,
      430
    ],
    [
      1000,
      590
    ],
    [
      860,
      645
    ],
    [
      700,
      355
    ],
    [
      812,
      515
    ]
  ],
  "progress": {
    "unit": "ft",
    "total": 110
  },
  "dayNoun": "Dive",
  "stageNoun": "Deck",
  "finalNoun": "Engine room",
  "stages": [
    "The Mooring Line",
    "The Pilothouse",
    "The Main Deck",
    "The Cargo Hold",
    "Engine room"
  ],
  "reconNoun": "Dive Plan",
  "legs": {
    "recon": "Dive plan",
    "nav": "Dive math",
    "orders": "Dive rules",
    "debrief": "Boat"
  },
  "fact": "In the deep cold fresh water of the big lakes, wood does not rot and iron rusts slowly. Ships that sank in the 1800s still have their masts, their wheels, and sometimes the dishes in the galley.",
  "finale": {
    "prompt": "The ship's bell is on the boat and the wreck is behind you. Which color ribbon goes on the bell for the museum?",
    "options": [
      {
        "label": "Navy",
        "color": "#1B2A5C"
      },
      {
        "label": "Brass",
        "color": "#C9A24A"
      },
      {
        "label": "Red",
        "color": "#FF6B6B"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      }
    ],
    "done": "Tie it on. Then say the ship's name out loud, once. That is the whole point of finding it."
  },
  "patrols": [
    {
      "id": "wreck-1",
      "title": "The Mooring Line",
      "recon": {
        "lesson": {
          "title": "Questions first, then the plan",
          "points": [
            "Read the five questions before the plan. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Depths and temperatures are numbers. Circle them.",
            "The answer is always in the plan. You never have to guess."
          ],
          "example": "Question: 'How hot was the oven?' Hunt for 'degrees', then read that sentence."
        },
        "title": "Dive Plan: A Ship That Never Rotted",
        "passage": [
          "The ship went down in 1898, in a November storm. She was a wooden steamer carrying a cargo of grain. She sank so fast that she landed upright on the bottom, a hundred and ten feet down, with her masts still standing and her wheel still in the pilothouse. In the ocean she would be gone by now. Salt water and the animals that live in it eat wood and iron in a few decades. But this is a deep, cold, fresh lake, thirty-nine degrees at the bottom all year, with almost nothing living down there that eats wood, and a ship that sinks here is kept, not destroyed.",
          "The dive boat ties up to a mooring line, a rope that runs from a buoy on the surface straight down to the wreck. That way no anchor is ever dropped on the ship, and divers have a line to follow down and back up in water where the light fades to green and then to black. The first dive is the line and nothing else. Divers go down it hand over hand, stop at twenty feet to check that every piece of gear works in the cold, and stop again at sixty. There the wreck appears below them as a long dark shape with two masts reaching up.",
          "Cold is the whole problem. A diver in thirty-nine-degree water wears a dry suit. It is a sealed suit that keeps the water out completely. Under it goes thick underwear, and the diver adds thick gloves and a hood. Even so, forty minutes is about the limit before hands stop working well enough to be safe. So every dive is short, planned to the minute, and ends with air to spare. The rule on the boat is written on the ladder. Nobody comes up with less than a third of a tank."
        ],
        "questions": [
          {
            "q": "How deep is the wreck?",
            "choices": [
              "A hundred and ten feet",
              "Twenty feet",
              "Sixty feet, where the wreck first appears",
              "Thirty-nine feet, down the mooring line"
            ],
            "answer": 0,
            "hint": "The third sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How cold is the water at the bottom?",
            "choices": [
              "Sixty degrees",
              "Freezing",
              "Thirty-nine degrees",
              "Eighty degrees"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the sentence with 'fresh lake'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'mooring line'?",
            "choices": [
              "The thin cord that a diver ties on at the hatch and unwinds behind her when she goes inside the wreck",
              "A rope from a surface buoy straight down to the wreck that the boat ties to and divers follow",
              "The chain that the dive boat drops from its own anchor down onto the deck of the wreck a hundred feet below",
              "The line of divers going down hand over hand, who stop at twenty feet and then again at sixty feet"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is the ship still in one piece after more than a century?",
            "choices": [
              "Because it was built of iron",
              "Because the deep cold fresh water has almost nothing living in it that eats wood",
              "Because no anchor is ever dropped on her",
              "Because it sank slowly"
            ],
            "answer": 1,
            "hint": "The last two sentences of paragraph 1.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the cold limits every dive and what the diver wears against it",
              "The ladder",
              "The grain cargo",
              "The masts"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 3 is 'Cold is the whole problem.'",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Dive math",
          "points": [
            "Hundredths as decimals: 8/100 is 0.08 and 30/100 is 0.30.",
            "A third of a tank: divide by 3.",
            "Feet per minute: depth ÷ minutes.",
            "A whole trip in three parts: add all three."
          ],
          "example": "A third of a 2,400-pound tank is 2,400 ÷ 3 = 800 pounds."
        },
        "problems": [
          {
            "q": "The dive computer shows how much of the dive time is used, in hundredths. It shows 45/100. Write that as a decimal.",
            "answer": "0.45",
            "hint": "45 hundredths: two places after the point.",
            "skill": "Decimals"
          },
          {
            "q": "A tank holds 3,000 pounds of air. Nobody comes up with less than a third. How many pounds is a third of a tank?",
            "answer": "1000",
            "accept": [
              "1,000"
            ],
            "hint": "3,000 ÷ 3.",
            "skill": "Fractions"
          },
          {
            "q": "The diver descends 110 feet in 5 minutes. How many feet a minute is that?",
            "answer": "22",
            "hint": "110 ÷ 5.",
            "skill": "Dividing"
          },
          {
            "q": "The diver stops at 20 feet and again at 60 feet. How many feet between the two stops?",
            "answer": "40",
            "hint": "60 − 20.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The dive is 5 minutes going down, 25 on the wreck and 10 coming up. How many minutes is the whole dive?",
            "answer": "40",
            "hint": "5 + 25 + 10.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Cover every paragraph",
            "points": [
              "Read all three, then say what the report is about in one sentence, before you read a single choice.",
              "One wrong answer will be a true fact from the middle of the report. Another will be a statement so big the report never made it. Learn to spot both on sight.",
              "After that: prove a claim with a single line, name what a paragraph is for, read a word off its own sentence, and put two paragraphs together."
            ],
            "example": "Three paragraphs about a lighthouse: why it was built, how the lamp works, who keeps it now. 'The lamp turns once a minute' is one paragraph. 'Lighthouses save lives' is a slogan, not this report."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The same cold that kept this ship whole for a century is what limits every dive made on her.",
                "Divers stop at twenty feet on the way down to check that every piece of gear still works in the cold.",
                "Lakes are far better places to explore than oceans are.",
                "The ship survived because salt water preserves wood far better than fresh water does, which is why so little of her has rotted."
              ],
              "answer": 0,
              "hint": "The cold turns up in the first paragraph and again in the last, doing opposite favors each time. Find the choice that holds both of them.",
              "skill": "Central idea and evidence",
              "evidence": "But this is a deep, cold, fresh lake, thirty-nine degrees at the bottom all year, with almost nothing living down there that eats wood, and a ship that sinks here is kept, not destroyed."
            },
            {
              "q": "Claim: the mooring line is there for two separate reasons. Which sentence from the report best supports that claim?",
              "choices": [
                "The first dive is the line and nothing else.",
                "Divers go down it hand over hand, stop at twenty feet to check that every piece of gear works in the cold, and stop again at sixty.",
                "That way no anchor is ever dropped on the ship, and divers have a line to follow down and back up in water where the light fades to green and then to black.",
                "So every dive is short, planned to the minute, and ends with air to spare."
              ],
              "answer": 2,
              "hint": "Two reasons means the sentence has to name both of them. Three of these mention the line or the dive without ever saying what the line is for.",
              "skill": "Finding details",
              "evidence": "That way no anchor is ever dropped on the ship, and divers have a line to follow down and back up in water where the light fades to green and then to black."
            },
            {
              "q": "Why does the report describe what would have happened to this ship if she had sunk in the ocean?",
              "choices": [
                "To explain why the ship was carrying a cargo of grain in November, at the end of a season when the storms on the lake are worst.",
                "To set the ocean against this lake, so that a wreck with its masts and wheel still standing stops being surprising.",
                "To warn divers about the animals living on the wreck that eat away at the wood and iron of any ship that sinks in cold water.",
                "To list the other places where wooden steamers have been found, so that a reader can compare this wreck with the ones already known."
              ],
              "answer": 1,
              "hint": "Two sentences in the middle of the first paragraph are about somewhere this ship is not. Then look at the word that opens the sentence after them.",
              "skill": "Author's purpose and structure",
              "evidence": "In the ocean she would be gone by now."
            },
            {
              "q": "The report says a ship that sinks in this lake 'is kept, not destroyed'. What does kept mean as it is used here?",
              "choices": [
                "Guarded by people who watch over the site",
                "Preserved as she was, instead of breaking down",
                "Held in one place by the mooring line",
                "Owned by the museum that studies her"
              ],
              "answer": 1,
              "hint": "The sentence hands you the opposite immediately: not destroyed. And the sentence before it told you what destroys a ship everywhere else.",
              "skill": "Word meanings",
              "evidence": "with almost nothing living down there that eats wood, and a ship that sinks here is kept, not destroyed"
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the first dive goes down the line and no farther. Why is that?",
              "choices": [
                "Cold water gives a diver only about forty usable minutes, so the first dive is spent proving the gear rather than exploring.",
                "The wreck cannot be seen at all from the surface without a light.",
                "The mooring line has to be tied to the wreck before anyone can dive.",
                "The dry suits have to be filled with water first in order to seal."
              ],
              "answer": 0,
              "hint": "One paragraph tells you where the first dive stops. The other tells you how many minutes a diver actually has down there. Lay them side by side.",
              "skill": "Reading between the lines",
              "evidence": "Even so, forty minutes is about the limit before hands stop working well enough to be safe"
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
              "q": "The diver ties 4 pieces of line, each 6 feet long. How many feet of line is that?",
              "answer": "24",
              "hint": "4 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "The diver cuts 24 feet of line into 4 equal pieces. How many feet long is each piece?",
              "answer": "6",
              "hint": "How many 4s make 24?",
              "skill": "Dividing"
            },
            {
              "q": "The diver laid out 320 feet of line, then 38 more, then 55 more. How many feet of line in all?",
              "answer": "413",
              "hint": "320 + 38 first. Then add 55.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The diver finished 2/4 of the day's work before the break and 1/4 after. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A tank platform is 9 squares wide and 8 squares long. How many squares is that?",
              "answer": "72",
              "hint": "9 rows of 8, so 9 × 8.",
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
            "example": "4 × (9 − 3) + 7 = 31: parentheses, then multiply, then add."
          },
          "problems": [
            {
              "q": "A regular deck takes 2.25 minutes. A long one takes 1.2 times as long. How many minutes does the long one take?",
              "answer": "2.7",
              "hint": "Multiply 225 × 12 without the points, then put back 3 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "Of 60 feet, 50% are set aside. How many is that?",
              "answer": "30",
              "hint": "50% of 60: 50% is 50/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Tanks and feet of strap are kept in the ratio 1 to 3. If there are 7 tanks, how many feet of strap?",
              "answer": "21",
              "hint": "7 ÷ 1 = 7 groups. Each group has 3 feet.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The diver works out 6 × (10 − 5) + 2. What is it?",
              "answer": "32",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 357 = 750",
              "answer": "393",
              "hint": "Subtract 357 from both sides.",
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
            "example": "5x + 13 = 48, so 5x = 35, so x = 7."
          },
          "problems": [
            {
              "q": "The diver checked 24 portholes in 36 minutes altogether. How many minutes is that for one porthole?",
              "answer": "1.5",
              "hint": "A rate is the total shared out: 36 ÷ 24.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The diver counted 320 fish on the first pass. On the second pass the number had risen by 25%. How many fish did the diver count on the second pass?",
              "answer": "400",
              "hint": "25% of 320 is 80. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The supply ledger opens at −9 lead weights. The diver adds 11 weights, then takes out 18 weights. What does the ledger read now?",
              "answer": "-16",
              "accept": [
                "−16"
              ],
              "hint": "Start at −9, add 11 to get 2, then subtract 18.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 8x + 11 = 107",
              "answer": "12",
              "hint": "Take 11 off both sides first, then divide by 8.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 10 feet. The wreck measures 15 inches on the plan. How long is it really, in feet?",
              "answer": "150",
              "hint": "Every inch is 10 feet, so 15 × 10.",
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
            "example": "Start at 15 and add 6 each minute: after 4 minutes, 6 × 4 + 15 = 39."
          },
          "problems": [
            {
              "q": "The diver has let out 24 feet of line and lets out 8 more feet every minute. After 5 minutes, how many feet are out?",
              "answer": "64",
              "hint": "This is the straight-line rule y = mx + b: 8 × 5 + 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each row in the hold has 5² crates. There are 3 rows. How many crates in all?",
              "answer": "75",
              "hint": "5² means 5 × 5 = 25. Then × 3.",
              "skill": "Powers and roots"
            },
            {
              "q": "The diver runs a cable from the top of a 5-foot post to a point 12 feet away on the ground. How long is the cable, in feet?",
              "answer": "13",
              "hint": "Right triangle: a² + b² = c². 5² + 12² = 25 + 144 = 169. The cable is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x + 16 = 2x + 28",
              "answer": "4",
              "hint": "Take 2x off both sides to get 3x + 16 = 28, then take 16 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The ship's papers list the cargo as 1.2 × 10^6 pounds. Written out in full, what number is that?",
              "answer": "1200000",
              "hint": "10^6 is 1 with 6 zeros after it: 1,000,000. Then × 1.2.",
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
          "example": "If step 5 says 'type it as a decimal', 47 divided by 10 is 4.7, not 4."
        },
        "skill": "Following directions",
        "steps": [
          "Write the depth the wreck sits at, in feet: 110.",
          "Subtract the depth of the divers' second stop on the line: 60.",
          "Divide by the number of masts still standing: 2.",
          "Add the temperature of the water at the bottom in degrees: 39.",
          "Divide by 10 and type the result as a decimal."
        ],
        "prompt": "Your answer:",
        "answer": "6.4",
        "accept": [
          "6.40"
        ],
        "hint": "Steps 1 to 4 leave you a whole number. Step 5 divides it by ten, so what you type has a decimal point in it."
      }
    },
    {
      "id": "wreck-2",
      "title": "The Pilothouse",
      "recon": {
        "lesson": {
          "title": "What is there and what it means",
          "points": [
            "When the plan lists what the diver sees, each item is a detail.",
            "A word about the ship is defined by what it was for.",
            "A 'why' question wants the reason the plan gives, often right after 'because'."
          ],
          "example": "'The boots by the door are still wet.' What does that tell you? Someone came in from the rain not long ago."
        },
        "title": "Dive Plan: The Wheel",
        "passage": [
          "The pilothouse is the small square room at the front of the top deck where the captain and the wheelsman stood to steer. On this ship it is still there, windows and all, seventy-five feet down. The diver swims to the front window and looks in. The wheel is a big wooden ring with eight spokes, and it is turned hard to the right, held there by a century of stillness. The compass is in its brass box in front of it. On the floor lies a coffee cup. It is on its side, unbroken.",
          "The wheel tells the story of the last minute. Turned hard right means the wheelsman was trying to turn the ship into the waves when she went down, which is what a good wheelsman does in a storm. That is because a ship that takes a big wave on its side rolls and a ship that meets it head-on rides over. It did not work. The historians think a hatch cover on the main deck tore loose, the hold filled with water and grain, and she went down bow first in less than five minutes, upright. That is why the wheel never moved again.",
          "Nothing is touched. The rule on a historic wreck is that everything stays where it is, so that the next diver and the diver a hundred years from now see what this one saw. Photographs only, and no fins near the silt, because a kick stirs up a cloud that takes an hour to settle and can blind a diver inside a room. The diver backs slowly away from the pilothouse window, keeping her fins well clear of the silt, checks her air, and looks along the deck toward the stern, where the next dive begins."
        ],
        "questions": [
          {
            "q": "How many spokes does the wheel have?",
            "choices": [
              "Four",
              "Six",
              "Eight",
              "Twelve"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the sentence describing the wheel.",
            "skill": "Finding details"
          },
          {
            "q": "What do the historians think caused the sinking?",
            "choices": [
              "A fire in the engine room that spread forward into the grain in the hold",
              "A hatch cover tore loose and the hold filled with water and grain",
              "A collision with another steamer in the dark during the November storm",
              "Ice building up on the masts until the ship rolled right over on her side"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'hatch cover'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'pilothouse'?",
            "choices": [
              "The engine room",
              "A house on shore",
              "The small room at the front of the top deck where the ship was steered",
              "The huge open space down below the main deck where all of the ship's cargo rode"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Word meanings"
          },
          {
            "q": "Why would the wheelsman turn the ship into the waves?",
            "choices": [
              "To go faster",
              "To reach the harbor",
              "Because a ship that meets a big wave head-on rides over it, while one hit on the side rolls",
              "Because turning into the waves keeps the grain in the hold from shifting from one side to the other"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the second and third sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The coffee cup",
              "The rule that nothing on a historic wreck is touched, and why",
              "The stern",
              "The wheel turned hard to the right and what it says about the last minute"
            ],
            "answer": 1,
            "hint": "The first two sentences of paragraph 3.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Pilothouse math",
          "points": [
            "Depth difference: wreck depth minus pilothouse depth.",
            "Volume of a box: length × width × height. 6 × 5 × 2 = 60 cubic feet.",
            "Spokes on a wheel: 360 degrees ÷ spokes.",
            "Two-step: photos per minute times minutes."
          ],
          "example": "50 − 20 = 30 feet between two depths."
        },
        "problems": [
          {
            "q": "The bottom is 110 feet down and the pilothouse is 75 feet down. How tall is the ship from the bottom to the pilothouse?",
            "answer": "35",
            "hint": "110 − 75.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The wheel has 8 spokes evenly spaced around 360 degrees. How many degrees between spokes?",
            "answer": "45",
            "hint": "360 ÷ 8.",
            "skill": "Dividing"
          },
          {
            "q": "The pilothouse is about 10 feet long, 8 feet wide and 7 feet tall. How many cubic feet of water fill it?",
            "answer": "560",
            "hint": "Length × width × height: 10 × 8 = 80, then times 7.",
            "skill": "Volume"
          },
          {
            "q": "The diver takes 3 photos a minute for 12 minutes in the pilothouse. How many photos?",
            "answer": "36",
            "hint": "3 × 12.",
            "skill": "Multiplying"
          },
          {
            "q": "The ship sank in less than 5 minutes. How many seconds is 5 minutes?",
            "answer": "300",
            "hint": "5 × 60.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "True is cheap, proof is not",
            "points": [
              "Every choice in that question is a real sentence lifted straight out of the report. Being true earns nothing.",
              "Say the claim, then read your sentence. If someone answered 'that does not prove it', would you have a comeback?",
              "A claim with two halves needs a sentence that carries both. Half a proof is no proof."
            ],
            "example": "Claim: the driver knew the bridge was out. 'He turned around a mile before it' proves it. 'He was driving a red truck' does not."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "On the floor of the pilothouse a coffee cup lies on its side, unbroken, and the ship's compass still sits in its brass box in front of the wheel.",
                "Every shipwreck in the world has a story worth telling.",
                "An untouched wreck can be read: where one object sits explains what the crew was doing as she went down, which is why nothing is moved.",
                "The wheelsman's turn into the waves is what saved the ship from rolling over, so she went down upright with her masts and her wheel still standing."
              ],
              "answer": 2,
              "hint": "A wheel, an explanation of what the wheel means, and a rule about touching. Ask what that rule is protecting.",
              "skill": "Central idea and evidence",
              "evidence": "The wheel tells the story of the last minute."
            },
            {
              "q": "Claim: the wheelsman did the right thing even though the ship was lost anyway. Which sentence from the report best supports that claim?",
              "choices": [
                "The wheel is a big wooden ring with eight spokes, and it is turned hard to the right, held there by a century of stillness.",
                "Turned hard right means the wheelsman was trying to turn the ship into the waves when she went down, which is what a good wheelsman does in a storm.",
                "The diver backs slowly away from the pilothouse window, keeping her fins well clear of the silt, checks her air, and looks along the deck toward the stern, where the next dive begins.",
                "The historians think a hatch cover on the main deck tore loose, the hold filled with water and grain, and she went down bow first in less than five minutes, upright."
              ],
              "answer": 1,
              "hint": "The claim has two halves: the right move, and the loss anyway. One sentence carries both. Describing the wheel is not the same as judging the decision.",
              "skill": "Finding details",
              "evidence": "Turned hard right means the wheelsman was trying to turn the ship into the waves when she went down, which is what a good wheelsman does in a storm."
            },
            {
              "q": "How is the second paragraph organized?",
              "choices": [
                "As a comparison between the pilothouse and the deckhouse.",
                "As a list of the objects visible through the front window, beginning with the wheel and ending with the cup on the floor.",
                "As a chain of causes: one thing gave way, which let in the next, which is why the ship ended up the way she is.",
                "As instructions for backing safely out of a small room."
              ],
              "answer": 2,
              "hint": "Follow the paragraph's own links: a cover tore loose, so the hold filled, so she went down bow first, which is why the wheel never moved. That chain is the shape.",
              "skill": "Author's purpose and structure",
              "evidence": "The historians think a hatch cover on the main deck tore loose, the hold filled with water and grain, and she went down bow first in less than five minutes, upright. That is why the wheel never moved again."
            },
            {
              "q": "The report says the wheel is 'held there by a century of stillness'. What does that phrase mean?",
              "choices": [
                "Something was fitted after the sinking to hold the wheel in place",
                "The wheel has seized solid over the years and could no longer be turned by hand by anybody",
                "Nothing has moved it in a hundred years, so it sits where the wheelsman left it",
                "Divers have been careful to keep the wheel still on purpose"
              ],
              "answer": 2,
              "hint": "Nothing in that room is gripping the wheel. Read the phrase again and ask what a hundred years with nobody aboard does to a wheel that was already turned.",
              "skill": "Word meanings",
              "evidence": "The wheel is a big wooden ring with eight spokes, and it is turned hard to the right, held there by a century of stillness."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the rule about touching nothing matters more on this wreck than a tidy habit would. What is the reason?",
              "choices": [
                "The objects would all be damaged by the change out of the cold water if anybody lifted them up the line to the surface.",
                "Where the objects sit is the only record left of the ship's last minutes, and moving one would rub it out.",
                "The museum has not yet given permission for anything to be raised.",
                "Silt would settle heavily on anything that had been moved."
              ],
              "answer": 1,
              "hint": "Paragraph two shows what one object's position was able to tell the historians. Paragraph three says nothing may move. Ask what would be lost if something did.",
              "skill": "Reading between the lines",
              "evidence": "The rule on a historic wreck is that everything stays where it is, so that the next diver and the diver a hundred years from now see what this one saw."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 3 × 8 means 3 groups of 8.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add or take away the tops; the bottom stays."
            ],
            "example": "3 × 8 = 24."
          },
          "problems": [
            {
              "q": "The diver counted 6 photos yesterday and three times as many today. How many photos today?",
              "answer": "18",
              "hint": "Three times 6: 6 + 6 + 6.",
              "skill": "Multiplying"
            },
            {
              "q": "The diver sorts 36 photos into folders of 6. How many folders is that?",
              "answer": "6",
              "hint": "How many 6s make 36?",
              "skill": "Dividing"
            },
            {
              "q": "The diver starts with 147 photos on the camera and deletes 49. How many are left?",
              "answer": "98",
              "hint": "147 − 49.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "4/8 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "4/8",
              "hint": "The whole job is 8/8. Take 4/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The tally stood at 397 photos and 600 more were added. What is the tally now?",
              "answer": "997",
              "hint": "397 + 600.",
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
            "example": "10 + 4 × 5 = 30: multiply first, then add."
          },
          "problems": [
            {
              "q": "The diver has 5 1/4 yards of line. Each tie-off takes 1 3/4 yards. How many tie-offs can the diver make?",
              "answer": "3",
              "hint": "Make both improper: 21/4 ÷ 7/4. Then multiply by the flip: 21/4 × 4/7.",
              "skill": "Fractions"
            },
            {
              "q": "90 of the 120 photos are set aside. What percent is that? (write just the number)",
              "answer": "75",
              "accept": [
                "75%"
              ],
              "hint": "90 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 3 spokes there are 4 windows. There are 36 windows. How many spokes?",
              "answer": "27",
              "hint": "36 ÷ 4 = 9 groups. Each group has 3 spokes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The diver works out 18 + 6 × 12. What is it?",
              "answer": "90",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 750 − x = 283",
              "answer": "467",
              "hint": "x is what is left when 283 is taken off 750.",
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
            "example": "41 − 5x = 6, so 5x = 35, so x = 7."
          },
          "problems": [
            {
              "q": "One porthole needs 2.25 minutes. How many minutes do 12 portholes need?",
              "answer": "27",
              "hint": "12 × 2.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The diver counted 320 fish on the first pass and 160 on the second. By what percent did the count change? (write just the number)",
              "answer": "50",
              "accept": [
                "50%",
                "-50",
                "−50",
                "-50%",
                "−50%"
              ],
              "hint": "The change is 160. 160 out of 320, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Going down the mooring line, the diver's depth changes by −12 feet every minute. How many feet shallower was the diver 6 minutes ago? Time before now counts as negative. Work it out as (−12) × (−6).",
              "answer": "72",
              "hint": "12 × 6, and two minus signs make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 118 − 9x = 19",
              "answer": "11",
              "hint": "Move 9x to the right and 19 to the left: 9x = 99.",
              "skill": "Equations"
            },
            {
              "q": "A round hatch cover has a radius of 20 inches. Using 3.14 for pi, how many inches is it around the edge?",
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
            "example": "Start with 30 and use 4 a dive: after 6 dives, 30 − 4 × 6 = 6."
          },
          "problems": [
            {
              "q": "The diver starts with 29 glow sticks and uses 3 on every dive. How many are left after 7 dives?",
              "answer": "8",
              "hint": "3 × 7 = 21 used, taken off 29.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 25?",
              "answer": "5",
              "hint": "What number times itself makes 25?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 29-foot ladder runs from the top of a post to a point 21 feet away on the ground. How tall is the post, in feet?",
              "answer": "20",
              "hint": "a² = c² − b² = 841 − 441 = 400. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x = 5x + 16",
              "answer": "8",
              "hint": "Take 5x off both sides: 2x = 16. Then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 5 feet and holds 314 cubic feet. Using 3.14 for pi, how many feet deep is it?",
              "answer": "4",
              "hint": "The floor's area is 3.14 × 5 × 5 = 78.5. Divide the volume by that.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Count the letters",
          "points": [
            "Write the word out and count on paper.",
            "Then follow the arithmetic exactly."
          ],
          "example": "W-H-E-E-L is five letters."
        },
        "skill": "Following directions",
        "steps": [
          "Write the word PILOTHOUSE and count its letters.",
          "Multiply that count by the number of spokes on the ship's wheel: 8.",
          "Subtract the depth of the pilothouse in feet: 75.",
          "Add the number of hours a stirred silt cloud takes to settle: 1.",
          "Change step 3: instead of taking off the depth, take off the number of spokes on the wheel a second time. Step 4 still happens.",
          "Type what your total is now."
        ],
        "prompt": "Your answer:",
        "answer": "73",
        "hint": "PILOTHOUSE has ten letters. Step 5 changes what comes off in step 3, so read it before you subtract anything."
      }
    },
    {
      "id": "wreck-3",
      "title": "The Main Deck",
      "recon": {
        "lesson": {
          "title": "A problem that grew",
          "points": [
            "When the plan describes a change over years, a question will ask what changed and why.",
            "Counts of things (hatches, masts) are details.",
            "A hard word: read the whole sentence it sits in and ask what it must mean there."
          ],
          "example": "'The beetles came in on firewood from out of state.' How did they get here? On firewood."
        },
        "title": "Dive Plan: Ninety Feet of Deck",
        "passage": [
          "The main deck runs ninety feet from the pilothouse to the stern, and the diver swims it slowly at eighty feet down, a foot above the planks, past four cargo hatches in a row. Three are covered. The first, nearest the bow, is open, its cover gone. That is the one the historians think tore loose in the storm. Through it the diver's light drops into the hold and finds nothing but dark. Along the rails the wooden posts still stand, and the deckhouse at the stern still has its door.",
          "The deck has one enemy the cold cannot stop. Since the 1990s a small striped shellfish called the zebra mussel, carried into the lakes in the ballast water of ocean ships, has spread across every hard surface in the lake. The wreck is a hard surface. Mussels coat the rails and the deck in a crust like gravel, an inch thick and growing, and their weight bends thin wood and their shells hide detail. Photographs from thirty years ago show a clean deck. The diver's photographs today show a deck under a blanket of shells.",
          "The dive plan says: swim the whole deck, count the hatches, and photograph each one from the same spot the old survey used, so that next year's photographs can be compared with this year's. And touch nothing. At the stern the diver finds the ship's name, cast in iron letters on the deckhouse, still readable under the mussels if the light is held at an angle. She reads it twice. Then she checks her air, which is at half, and starts back along the deck toward the line."
        ],
        "questions": [
          {
            "q": "How many cargo hatches are on the main deck?",
            "choices": [
              "Two",
              "Four",
              "Three",
              "Eight"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the first sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How did the zebra mussels get into the lake?",
            "choices": [
              "Divers brought them",
              "In the ballast water of ocean ships",
              "They were always there",
              "On the hulls of ocean ships coming into the lakes"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is 'ballast water'?",
            "choices": [
              "Water a ship carries in its hull for weight and balance",
              "The fresh lake water that a wreck's timbers soak up over a century",
              "The cold lake water that keeps the wooden ship from rotting away",
              "The water that poured into the hold through the open hatch cover"
            ],
            "answer": 0,
            "hint": "Ballast is weight carried to keep a ship steady; the plan says the mussels were 'carried into the lakes in the ballast water of ocean ships'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the diver photograph each hatch from the same spot the old survey used?",
            "choices": [
              "Because the mussels grow an inch thick and the old survey needs a matching set of pictures for its files",
              "Because a diver's light held at an angle is the only way to read anything under the crust of shells",
              "Because the dive plan says to swim the whole deck, count the hatches and then leave the wreck alone",
              "So that this year's photographs can be compared with earlier ones to see what has changed"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The zebra mussels and what they are doing to the wreck",
              "The ship's name in iron letters, still readable under the mussels",
              "The four cargo hatches in a row and the one whose cover is gone",
              "How the diver swims the deck a foot above the planks at eighty feet"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 2 says the deck has 'one enemy', and the rest is about the mussels.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Deck math",
          "points": [
            "Feet of deck ÷ feet a minute: minutes to swim it.",
            "Fractions: hatches covered out of all the hatches. Half a tank: divide by 2.",
            "Growing 1/2 inch a year: after 3 years that is 3 halves, 1 and 1/2 inches more.",
            "Different bottoms: make them the same first. 1/3 + 1/4 = 4/12 + 3/12 = 7/12."
          ],
          "example": "60 feet at 5 feet a minute is 12 minutes."
        },
        "problems": [
          {
            "q": "The deck is 90 feet long and the diver swims 10 feet a minute. How many minutes to swim the deck?",
            "answer": "9",
            "hint": "90 ÷ 10.",
            "skill": "Dividing"
          },
          {
            "q": "3 of the 4 hatches are covered. Write that as a fraction.",
            "answer": "3/4",
            "hint": "3 over 4.",
            "skill": "Fractions"
          },
          {
            "q": "The mussel crust is 1 inch thick and grows 1/4 inch a year. In 4 years how thick will it be, in inches?",
            "answer": "2",
            "hint": "4 × 1/4 = 1 more inch. 1 + 1.",
            "skill": "Fractions"
          },
          {
            "q": "A tank starts at 3,000 pounds. At the stern it reads half. How many pounds is that?",
            "answer": "1500",
            "accept": [
              "1,500"
            ],
            "hint": "3,000 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "The diver spent 1/2 of her time on the main deck and 1/5 of it at the stern. How much of her time is that? (write a fraction)",
            "answer": "7/10",
            "hint": "Make the bottoms the same: 1/2 is 5/10 and 1/5 is 2/10. Then add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Why is this here?",
            "points": [
              "Every paragraph, and often every single detail, is in the report to do a job: set up what comes next, explain a cause, compare, put things in order, or answer a problem.",
              "Delete it in your head. What can you no longer work out? That missing thing is the job.",
              "Two sentences with the same shape and different endings are almost always a comparison, whatever they happen to be about."
            ],
            "example": "A report on a bridge stops to say what the river did in 1954. That is not history for its own sake. It is there so the height of the new bridge makes sense."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "Zebra mussels were carried into the lakes in the ballast water of ocean ships and have spread onto every hard surface in the lake since the 1990s.",
                "The cold saved this ship from rotting but not from a newcomer, so the dive is really about recording how fast she is being covered.",
                "Invasive species are the biggest problem facing the natural world.",
                "The mussels grow on the rails only and leave the deck planking clean."
              ],
              "answer": 1,
              "hint": "A deck to swim, a shellfish that will not stop growing, and photographs taken from the same spot as an old survey. Ask what those photographs are for.",
              "skill": "Central idea and evidence",
              "evidence": "The deck has one enemy the cold cannot stop."
            },
            {
              "q": "Claim: the mussels are doing damage, not just making the wreck untidy. Which sentence from the report best supports that claim?",
              "choices": [
                "Since the 1990s a small striped shellfish called the zebra mussel, carried into the lakes in the ballast water of ocean ships, has spread across every hard surface in the lake.",
                "Mussels coat the rails and the deck in a crust like gravel, an inch thick and growing, and their weight bends thin wood and their shells hide detail.",
                "The diver's photographs today show a deck under a blanket of shells.",
                "Photographs from thirty years ago show a clean deck."
              ],
              "answer": 1,
              "hint": "Covered and damaged are two different complaints. Three of these say where the shells came from or how much they cover. One says what they are doing to the ship.",
              "skill": "Finding details",
              "evidence": "Mussels coat the rails and the deck in a crust like gravel, an inch thick and growing, and their weight bends thin wood and their shells hide detail."
            },
            {
              "q": "What job do the last two sentences of the second paragraph do?",
              "choices": [
                "They set a then against a now, so the reader can see how quickly the crust has arrived.",
                "They explain how the zebra mussels were carried into the lake in the first place, in the ballast water of ocean ships.",
                "They list everything the diver is required to photograph on the deck, hatch by hatch, from the spots the old survey used.",
                "They give the reason the ship went down in the storm, naming the hatch cover that tore loose and let the water into the hold."
              ],
              "answer": 0,
              "hint": "Two short sentences with the same shape, one about thirty years ago and one about today. That pairing is the whole job.",
              "skill": "Author's purpose and structure",
              "evidence": "Photographs from thirty years ago show a clean deck. The diver's photographs today show a deck under a blanket of shells."
            },
            {
              "q": "The report says the mussels lie in 'a crust like gravel'. What is that comparison telling you about them?",
              "choices": [
                "The mussels are the same color as the gravel lying on the bottom of the lake",
                "The wood of the deck has itself worn down into loose stones over a century",
                "The shells are scattered thinly enough that the wood of the deck still shows between them",
                "The shells have built into a rough, solid layer lying over the wood"
              ],
              "answer": 3,
              "hint": "Picture gravel first: hard, lumpy, spread over a surface. Then read what the rest of that sentence says about how thick it is.",
              "skill": "Word meanings",
              "evidence": "Mussels coat the rails and the deck in a crust like gravel, an inch thick and growing, and their weight bends thin wood and their shells hide detail."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the diver has to hold her light at an angle to read the ship's name. Why does she?",
              "choices": [
                "The letters are under a layer of shells, and only a low light throws enough shadow to show their shape.",
                "The iron letters have rusted away to almost nothing, so only the deepest parts of them are still left to be read.",
                "The deckhouse door stands open and blocks any light coming from directly above, leaving the letters beside it in shadow.",
                "The name was painted onto the deckhouse rather than cast into iron, and most of the paint has washed away since."
              ],
              "answer": 0,
              "hint": "Paragraph two tells you what the shells do to detail. Paragraph three tells you what the diver has to do to read the letters. The angle is the answer to the first fact.",
              "skill": "Reading between the lines",
              "evidence": "still readable under the mussels if the light is held at an angle"
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
              "Fractions with the same bottom: add the tops."
            ],
            "example": "7 × 4 = 28."
          },
          "problems": [
            {
              "q": "The diver lays the photos out in 6 rows of 8. How many photos is that?",
              "answer": "48",
              "hint": "6 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "40 photos are set out in 5 equal rows. How many photos are in each row?",
              "answer": "8",
              "hint": "40 split into 5 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 269 feet of deck, then 170 more are added and 82 are taken off. What does the log show now?",
              "answer": "357",
              "hint": "Add 269 and 170 first, then take 82 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 4/8 + 2/8 (write a fraction)",
              "answer": "6/8",
              "hint": "Same bottom. 4 + 2 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 4 feet wide and 3 feet long. How many feet is it all the way around the edge?",
              "answer": "14",
              "hint": "Two sides of 4 and two sides of 3: 4 + 4 + 3 + 3.",
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
            "example": "(3 + 4) × 6 = 42: parentheses first, then multiply."
          },
          "problems": [
            {
              "q": "The diver has 31.05 minutes of bottom time. Each deck takes 1.15 minutes. How many decks is that enough for?",
              "answer": "27",
              "hint": "Move both points 2 places to the right: 3105 ÷ 115.",
              "skill": "Decimals"
            },
            {
              "q": "50% of the feet of deck counted is 30. How many were counted in all?",
              "answer": "60",
              "hint": "30 is 50 hundredths of the whole: 30 ÷ 50 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The diver counts 15 hatch bolts and 25 deck planks. In its simplest form, what is the ratio of hatch bolts to deck planks? (write it like 2:3)",
              "answer": "3:5",
              "accept": [
                "3 to 5"
              ],
              "hint": "Divide both by 5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The diver works out (5 + 5) × 8. What is it?",
              "answer": "80",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 3x = 1,011",
              "answer": "337",
              "hint": "Divide both sides by 3.",
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
              "A two-step equation: undo the last step first. In (x + 2) × 5 = 35, divide by 5, then take off 2."
            ],
            "example": "(x + 2) × 5 = 35, so x + 2 = 7, so x = 5."
          },
          "problems": [
            {
              "q": "The diver has 56 minutes to spend and each porthole takes 3.5 minutes. How many portholes is that enough for?",
              "answer": "16",
              "hint": "56 ÷ 3.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The length of deck free of zebra mussels fell by 50% to 45 feet. How many feet of deck were free of mussels before?",
              "answer": "90",
              "hint": "45 is 50% of the old length.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The supply ledger shows 24 lead weights. The diver signs out 37 weights, borrowing the extra from the boat crew. What does the ledger read now?",
              "answer": "-13",
              "accept": [
                "−13"
              ],
              "hint": "24 takes it to 0, and 13 more comes out below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 8) × 3 = 54",
              "answer": "10",
              "hint": "Divide both sides by 3 first, then take 8 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 10. The hatch on the model is 11 inches. How many inches is the real one?",
              "answer": "110",
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
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "y = 6x + 7 when x = 2: 6 × 2 + 7 = 19."
          },
          "problems": [
            {
              "q": "The number of feet of deck the diver has mapped follows the rule y = 5x + 24, where x is the dive number. What is y when x = 4?",
              "answer": "44",
              "hint": "Put 4 in for x: 5 × 4 + 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 5² + 5²?",
              "answer": "50",
              "hint": "5 × 5 = 25 and 5 × 5 = 25. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 37-foot cable reaches the top of a 12-foot post. How far is the bottom end of the cable from the base, in feet?",
              "answer": "35",
              "hint": "b² = c² − a² = 1369 − 144 = 1225. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x + 6 − x = 21",
              "answer": "3",
              "hint": "Collect the x's first: 5x + 6 = 21.",
              "skill": "Equations"
            },
            {
              "q": "What is 6 × 10^4 ÷ 10^3?",
              "answer": "60",
              "hint": "Dividing subtracts the powers: 10^4 ÷ 10^3 = 10^1. So 6 × 10.",
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
          "example": "Step 2 comes to 60 and step 4 comes to 45. 'Type the step 4 total' means 45, even though 60 came first."
        },
        "skill": "Following directions",
        "steps": [
          "Count the cargo hatches on the deck that are still covered.",
          "Multiply that count by the length of the deck in feet: 90.",
          "Now work a second number on its own. Count the hatches whose cover is gone.",
          "Multiply that count by the depth of the deck in feet: 80.",
          "You have a total from step 2 and a total from step 4. The survey keeps only the one belonging to the hatch that tore loose, so type the step 4 total."
        ],
        "prompt": "Your answer:",
        "answer": "80",
        "hint": "Go back to the passage and count the covered hatches and the open ones separately. Step 2 and step 4 are separate sums, and step 5 says which of them the survey writes down."
      }
    },
    {
      "id": "wreck-4",
      "title": "The Cargo Hold",
      "recon": {
        "lesson": {
          "title": "Inside and the rule for it",
          "points": [
            "When the plan describes going inside, the safety rule comes with it. Find both.",
            "Numbers about cargo are details.",
            "'Why' about a rule: the reason is what would happen without it."
          ],
          "example": "'Climbers clip in at every bolt. A fall stops at the last clip.' Why clip in? So a fall stops short."
        },
        "title": "Dive Plan: Twenty Thousand Bushels",
        "passage": [
          "The hold is the inside of the ship, the huge open space below the main deck where the cargo rode. This ship's cargo was grain: about twenty thousand bushels of wheat, enough to cover a school gym floor five feet deep. The grain is still there. In the cold it never rotted, and it lies in a smooth gray mound across the floor of the hold, ten feet deep. The wooden ribs of the ship curve up around it like the inside of a whale.",
          "Going inside a wreck is the most dangerous thing a diver does, and the plan treats it that way. Inside there is no surface to swim to; there is only the way you came in. So the diver ties a line at the open hatch, a reel of thin cord, and unwinds it behind her as she goes. She never goes farther than a third of her air will bring her back. If the silt rises and the light goes gray, she puts a hand on the line and follows it out by touch. Two divers make the dive; one goes in and the other stays at the hatch with a light pointed inward so that the way out is always a glow.",
          "The hold is where the ship tells you what she was. Along one wall a row of wooden shovels hangs on pegs, the tools the crew used to trim the grain level. A lantern hangs from a rib. A ladder goes up to the deck where the crew came down to check the cargo. The diver photographs the shovels and the lantern from the line and goes no deeper into the hold than that, because the plan says so and because her air says so. Then she follows the cord back to the glow at the hatch with exactly the air she planned to have."
        ],
        "questions": [
          {
            "q": "What was the ship's cargo, and how much?",
            "choices": [
              "Coal, ten tons",
              "Lumber, a thousand logs",
              "Iron ore",
              "About twenty thousand bushels of wheat"
            ],
            "answer": 3,
            "hint": "The second sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What does the diver tie at the hatch before going inside?",
            "choices": [
              "Her tank",
              "A reel of thin cord that she unwinds behind her",
              "A light pointed in at the hatch",
              "A camera"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'reel'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'hold'?",
            "choices": [
              "A grip on the hatch cover that a diver can hold on to in a current",
              "The small square room at the front of the top deck where the ship was steered",
              "The rope reel that a diver unwinds behind her when she goes in",
              "The big space below the main deck where cargo was carried"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does one diver stay at the hatch with a light pointed inward?",
            "choices": [
              "To take photographs",
              "To stop the reel of thin cord from unwinding itself too quickly",
              "So the way out is always a glow the inside diver can find",
              "To light up the row of wooden shovels that hang along the wall"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The grain",
              "The wooden shovels, the lantern and the ladder found inside the hold",
              "The rules that make going inside a wreck as safe as it can be",
              "How the grain lies in a smooth gray mound ten feet deep on the floor"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2 names the danger, and the rest is the rules.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Hold math",
          "points": [
            "Thousands: 'thirty thousand' is 30 with three zeros, 30,000.",
            "A third of the air for going in: divide by 3.",
            "Feet of cord unwound: feet a minute times minutes.",
            "Two-step: air used going in, then air for coming out."
          ],
          "example": "A third of 3,000 is 1,000."
        },
        "problems": [
          {
            "q": "Write twenty thousand as a number.",
            "answer": "20000",
            "accept": [
              "20,000"
            ],
            "hint": "20 followed by three zeros.",
            "skill": "Multiplying"
          },
          {
            "q": "The diver goes in with 2,400 pounds of air and may use only a third going in. How many pounds is that?",
            "answer": "800",
            "hint": "2,400 ÷ 3.",
            "skill": "Fractions"
          },
          {
            "q": "The diver unwinds 6 feet of cord a minute for 8 minutes. How many feet of cord is out?",
            "answer": "48",
            "hint": "6 × 8.",
            "skill": "Multiplying"
          },
          {
            "q": "The grain lies 10 feet deep across a hold floor 90 feet long and 20 feet wide. What is the area of the floor in square feet?",
            "answer": "1800",
            "accept": [
              "1,800"
            ],
            "hint": "90 × 20.",
            "skill": "Area and perimeter"
          },
          {
            "q": "The diver has 2,400 pounds of air, uses 800 going in and 800 coming out. How many pounds are left at the hatch?",
            "answer": "800",
            "hint": "2,400 − 800 − 800.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Read the word off its own sentence",
            "points": [
              "Cover the word and read the sentence with a gap in it. What belongs in the gap?",
              "A comparison is not a fact about the thing it names. 'Like the inside of a whale' is telling you about a shape, not about whales.",
              "Put your choice back into the sentence and read the whole thing again. Three of the four will make the report say something new."
            ],
            "example": "'The corridor swallowed the light.' Nothing there has a mouth. The light went in and did not come back, and that is all the sentence is claiming."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The ship was carrying about twenty thousand bushels of wheat, and the grain still lies in the hold.",
                "Diving is a hobby that takes more equipment than most others, and wreck diving takes the most of all.",
                "A diver inside the hold can swim straight up to the surface at any moment if the silt rises.",
                "The inside of the wreck holds the most to see and the least room for error, so every rule here is about getting out again."
              ],
              "answer": 3,
              "hint": "A hold full of things worth seeing, a cord unwound behind, and a diver who stops before she wants to. Ask what all three of those are serving.",
              "skill": "Central idea and evidence",
              "evidence": "Inside there is no surface to swim to; there is only the way you came in."
            },
            {
              "q": "Claim: a diver inside a wreck can lose the way out without anything touching her. Which sentence from the report best supports that claim?",
              "choices": [
                "Inside there is no surface to swim to; there is only the way you came in.",
                "If the silt rises and the light goes gray, she puts a hand on the line and follows it out by touch.",
                "Going inside a wreck is the most dangerous thing a diver does, and the plan treats it that way.",
                "A ladder goes up to the deck where the crew came down to check the cargo."
              ],
              "answer": 1,
              "hint": "Three of these never say how the way out could be lost. Only one names the thing that hides it, and it is not a falling beam.",
              "skill": "Finding details",
              "evidence": "If the silt rises and the light goes gray, she puts a hand on the line and follows it out by touch."
            },
            {
              "q": "What job does the second paragraph do, sitting between the first and the third?",
              "choices": [
                "It describes the cargo the ship was carrying when she sank and the smooth gray mound of grain lying ten feet deep in the hold.",
                "It sets this wreck against the other wrecks in the lake, so that a reader can see which of them are worth going inside.",
                "It lists the objects the diver photographs down in the hold, the shovels on their pegs, the lantern on its rib and the ladder.",
                "It states the problem with going inside and gives the rules that answer it, before the third paragraph goes in."
              ],
              "answer": 3,
              "hint": "Paragraph one shows you a place worth entering. Paragraph three enters it. Ask what has to be settled in between those two.",
              "skill": "Author's purpose and structure",
              "evidence": "Going inside a wreck is the most dangerous thing a diver does, and the plan treats it that way."
            },
            {
              "q": "The report says the wooden ribs curve up around the grain 'like the inside of a whale'. What is that comparison telling you?",
              "choices": [
                "The wood of the hold has been worn perfectly smooth by a century of cold water",
                "There are animals living down in the hold of the ship",
                "The diver is inside a huge ribbed space that closes over her head",
                "The mound of grain is shaped like an animal lying along the floor of the hold"
              ],
              "answer": 2,
              "hint": "You are not being told anything about whales. Picture the shape a comparison like that puts you inside, then check it against the ribs named in the same sentence.",
              "skill": "Word meanings",
              "evidence": "The wooden ribs of the ship curve up around it like the inside of a whale"
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the diver photographs the shovels from where she is rather than swimming over to them. Why?",
              "choices": [
                "The shovels are too fragile for anybody to photograph from close up without damaging them.",
                "Her camera works better at a distance in cloudy water.",
                "The cord and her air each set a limit, and the shovels are on the far side of it.",
                "The second diver at the hatch is holding the only light in the hold that reaches as far as the shovels."
              ],
              "answer": 2,
              "hint": "Paragraph two gives you two limits, one made of cord and one made of air. Paragraph three says she goes no deeper. Say why, using both of them.",
              "skill": "Reading between the lines",
              "evidence": "and goes no deeper into the hold than that, because the plan says so and because her air says so"
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
              "Fractions: the bottom is how many equal parts; the top is how many are done."
            ],
            "example": "6 × 4 = 24."
          },
          "problems": [
            {
              "q": "Every sample bag holds 5 cups of grain, and there are 7 bags. How many cups of grain is that?",
              "answer": "35",
              "hint": "7 groups of 5, so 7 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "The diver splits 70 bushels in half. How many bushels is one half?",
              "answer": "35",
              "hint": "Half of 70.",
              "skill": "Dividing"
            },
            {
              "q": "The diver needs 600 feet of line and has 124. How many more are needed?",
              "answer": "476",
              "hint": "600 − 124.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the diver has finished 7 of them. What fraction is done? (write a fraction)",
              "answer": "7/8",
              "hint": "7 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "The diver counts 124 feet of line, then 40 more. How many is that?",
              "answer": "164",
              "hint": "124 + 40.",
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
            "example": "7 × 4 − 3 × 5 = 13: both multiplications first, then subtract."
          },
          "problems": [
            {
              "q": "The diver's light uses 5/9 of its battery in 2/3 of an hour. At that rate, how much of the battery would it use in one hour? (write a fraction)",
              "answer": "5/6",
              "hint": "For one hour, divide the amount by the time: 5/9 ÷ 2/3 = 5/9 × 3/2. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "Of 200 feet of line, 75% are struck off the list. How many are left on it?",
              "answer": "50",
              "hint": "75% of 200 is 150. Take that off 200.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The diver shares 56 minutes between two teams in the ratio 3 to 5. How many does the smaller share get?",
              "answer": "21",
              "hint": "3 + 5 = 8 parts. 56 ÷ 8 = 7 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The diver works out 8 × 12 − 3 × 2. What is it?",
              "answer": "90",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 272 + 56 = 1,000",
              "answer": "672",
              "hint": "Add 272 and 56 first, then take that off 1,000.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 22 ÷ 4 = 5.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Two minus signs make a plus: (−3) × (−5) = 15, and (−15) ÷ (−3) = 5. One minus sign makes a minus.",
              "A two-step equation: undo the outside step first. In 5(x + 3) = 40, divide by 5, then take off 3."
            ],
            "example": "5(x + 3) = 40, so x + 3 = 8, so x = 5."
          },
          "problems": [
            {
              "q": "The diver checked 16 portholes in 8 minutes. At the same rate, how many minutes would 28 portholes take?",
              "answer": "14",
              "hint": "One porthole takes 8 ÷ 16 = 0.5. Then × 28.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The diver has let out 10% of the 240 feet of line. How many feet of line is that?",
              "answer": "24",
              "hint": "10% of 240: 10/100 × 240.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The diver goes from the surface to the cargo hold, a change of −105 feet, in equal stops of −15 feet. How many stops is that? Work it out as (−105) ÷ (−15).",
              "answer": "7",
              "hint": "105 ÷ 15, and two minus signs make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 6(x + 16) = 108",
              "answer": "2",
              "hint": "Divide both sides by 6 to get x + 16 = 18.",
              "skill": "Equations"
            },
            {
              "q": "A square hatch is drawn at a scale of 1 to 4. On the drawing each side is 5 inches. How many inches is the real hatch around the edge?",
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
            "example": "Start at 6 and add 4 each step: the 5th number is 6 + 4 × 4 = 22."
          },
          "problems": [
            {
              "q": "The feet of line let out go 24, 29, 34, 39, and on. What is the 12th number in the list?",
              "answer": "79",
              "hint": "It starts at 24 and adds 5 each step. The number you want is 11 steps on from 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 11² − 11?",
              "answer": "110",
              "hint": "11 × 11 = 121, then take 11 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 7 and 24 feet. How long is its longest side, in feet?",
              "answer": "25",
              "hint": "7² + 24² = 625. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x − 5x = 18",
              "answer": "6",
              "hint": "8 − 5 = 3, so 3x = 18.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 14 feet across and 2 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (The radius is half the distance across.)",
              "answer": "307.72",
              "hint": "The radius is 14 ÷ 2 = 7. Volume = 3.14 × radius × radius × depth: 3.14 × 7 × 7 × 2.",
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
            "Check the plan before you act."
          ],
          "example": "'Go deeper, unless the silt rises.'"
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of divers who make the dive: 2.",
          "Multiply by the 6 wooden shovels hanging on their pegs.",
          "Add the depth of the grain in feet: 10.",
          "Subtract the number of ladders: 1.",
          "Type the result, unless the plan says the diver went deeper into the hold than the shovels and the lantern, in which case type DEEPER."
        ],
        "prompt": "Your answer:",
        "answer": "21",
        "hint": "Work steps 1 to 4 through. Then check the plan: step 5 only changes your answer if she went deeper than the shovels and the lantern."
      }
    },
    {
      "id": "wreck-5",
      "title": "The Engine Room",
      "recon": {
        "lesson": {
          "title": "Putting the wreck together",
          "points": [
            "The last plan looks back over all five dives. A 'mostly about' question wants the big point, not one detail.",
            "Machinery words are defined by what the parts did.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'The kettle that boils the water sits on the stove.' What does the kettle do? Boils the water."
        },
        "title": "Dive Plan: The Bell",
        "passage": [
          "The engine room is at the stern, the deepest part of the ship, a hundred and five feet down. It is where the ship's power lived. The steam engine here is the size of a small truck. Two cylinders stand upright on it, with a crankshaft between them that turned the propeller. The boiler that made the steam sits ahead of it. It is a riveted iron drum with its firebox door open. The brass gauges on the engine still have their needles. The diver photographs each one from the doorway, because the room is small and the silt is deep and the plan says the doorway is far enough.",
          "The ship's bell is here too, and the bell is the reason the museum asked for these dives. Every ship had one, cast in bronze with the ship's name on it, and the bell is the one object that proves beyond argument which ship a wreck is. The historians were nearly sure from the wheel, the hatches and the iron letters on the deckhouse. The bell settles it. It hangs from its bracket near the engine room door, green with a century underwater. The name on it matches the letters at the stern.",
          "The bell comes up. That is the one exception to the rule that nothing is touched, agreed with the museum in advance, because a bell in a museum tells ten thousand people the ship's story. The diver clips it to a lift bag. Then she fills the bag with air from her spare. Then she follows it up the line at the speed of her smallest bubbles, stopping at twenty feet for three minutes as the plan requires. On the boat the bell goes into a tub of fresh water to soak for a year. The diver's log for the five dives ends with one line. It reads: identified, photographed, bell recovered, all divers up with air to spare."
        ],
        "questions": [
          {
            "q": "How deep is the engine room?",
            "choices": [
              "Seventy-five feet",
              "A hundred and five feet",
              "Eighty feet, the depth of the main deck",
              "Twenty feet, where the diver stops on the way up"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "Why is the bell the most important object on the wreck?",
            "choices": [
              "Because it is made of gold",
              "Because it still rings",
              "Because the wheel, the hatches and the iron letters had already told the historians everything",
              "Because it has the ship's name on it and proves which ship the wreck is"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'boiler'?",
            "choices": [
              "A cooking pot",
              "The propeller",
              "The steam engine the size of a small truck with two upright cylinders",
              "The riveted iron drum that made the steam for the engine"
            ],
            "answer": 3,
            "hint": "The sentence 'The boiler that made the steam...' and the one after it.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is the bell allowed to come up when nothing else is?",
            "choices": [
              "Because it is small",
              "Because the diver wanted a souvenir",
              "Because a bell in a museum tells thousands of people the ship's story, and this was agreed with the museum in advance",
              "Because it was loose"
            ],
            "answer": 2,
            "hint": "The first two sentences of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "Bringing the bell up, carefully, and why",
              "The engine room, its gauges and the boiler ahead of it",
              "The year the bell will spend soaking in a tub of fresh water",
              "The diver's bubbles"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 3 is 'The bell comes up', and the rest is how and why.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Engine room math",
          "points": [
            "Adding decimals: line up the points. 3.5 + 1.75 is 3.50 + 1.75 = 5.25.",
            "Feet ÷ feet a minute = minutes.",
            "Days to weeks: divide by 7 and drop what is left over.",
            "Adding a long list: add two at a time and keep a running total."
          ],
          "example": "51 feet at 17 feet a minute is 51 ÷ 17 = 3 minutes."
        },
        "problems": [
          {
            "q": "The five dives went to 60, 75, 80, 100 and 105 feet. Add all five depths together.",
            "answer": "420",
            "hint": "60 + 75 = 135, + 80 = 215, + 100 = 315, + 105.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The lift bag rose 4.5 feet in the first second and 2.75 feet in the next. How many feet did it rise? (write a decimal)",
            "answer": "7.25",
            "hint": "Line up the points: 4.50 + 2.75.",
            "skill": "Decimals"
          },
          {
            "q": "From the engine room the diver rises 85 feet, at 17 feet a minute. How many minutes does the rise take?",
            "answer": "5",
            "hint": "85 ÷ 17.",
            "skill": "Dividing"
          },
          {
            "q": "The bell will soak for a year, 365 days. How many weeks is that, rounded down?",
            "answer": "52",
            "hint": "365 ÷ 7 is 52 with 1 left over.",
            "skill": "Dividing"
          },
          {
            "q": "The bell weighs 40 pounds. The lift bag lifts 60 pounds. How many extra pounds of lift are there beyond the bell's weight?",
            "answer": "20",
            "hint": "60 − 40.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Bridge the gap between paragraphs",
            "points": [
              "That last question is built so no single paragraph answers it. Expect to use two from the start.",
              "Name the fact from each, then say 'so'. Whatever follows 'so' is what you are looking for among the choices.",
              "A choice that brings in something the report never mentions is out, however reasonable it sounds on its own."
            ],
            "example": "Paragraph one: the shop is shut on Mondays. Paragraph three: the delivery arrives Monday morning. So somebody has to be there while the door is locked. Neither line says that alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The bell hangs from its bracket near the engine room door, green with a century underwater, and the name on it matches the letters at the stern.",
                "The last dive is about proof: one object can settle what everything else only suggested, and it is the one thing allowed to leave.",
                "Museums should be free to take whatever they need from a wreck.",
                "The historians had no idea which ship this was until the bell was found, since the wheel, the hatches and the iron letters told them nothing."
              ],
              "answer": 1,
              "hint": "Gauges photographed from a doorway, a bell that settles an argument, and a single exception to a rule. Ask what this dive was actually for.",
              "skill": "Central idea and evidence",
              "evidence": "the bell is the one object that proves beyond argument which ship a wreck is"
            },
            {
              "q": "Claim: the historians already had good reasons for their identification before the bell was found. Which sentence from the report best supports that claim?",
              "choices": [
                "Every ship had one, cast in bronze with the ship's name on it, and the bell is the one object that proves beyond argument which ship a wreck is.",
                "The bell settles it.",
                "The ship's bell is here too, and the bell is the reason the museum asked for these dives.",
                "The historians were nearly sure from the wheel, the hatches and the iron letters on the deckhouse."
              ],
              "answer": 3,
              "hint": "The claim needs two things: how sure they were, and what they were sure from. Two of these are about what the bell does, not about what the historians already had.",
              "skill": "Finding details",
              "evidence": "The historians were nearly sure from the wheel, the hatches and the iron letters on the deckhouse."
            },
            {
              "q": "Why does the report explain what a bell proves before it says the bell will be brought up?",
              "choices": [
                "So that the diver knows exactly where in the engine room to look for the bell before she starts photographing the gauges.",
                "So that the reader learns how bronze objects are cast.",
                "So that the size of the engine room makes sense.",
                "So that breaking the rule about touching nothing reads as a decision with a reason behind it rather than a slip."
              ],
              "answer": 3,
              "hint": "The third paragraph does the one thing the whole plan has forbidden until now. Ask what the paragraph before it had to establish first.",
              "skill": "Author's purpose and structure",
              "evidence": "That is the one exception to the rule that nothing is touched, agreed with the museum in advance, because a bell in a museum tells ten thousand people the ship's story."
            },
            {
              "q": "The report says the diver follows the bag up 'at the speed of her smallest bubbles'. What does that phrase tell her to do?",
              "choices": [
                "Rise as fast as the lift bag is able to pull her",
                "Blow out small bubbles to mark her way up the line",
                "Rise slowly, no faster than the smallest bubbles are rising",
                "Wait until her air is nearly gone before starting up"
              ],
              "answer": 2,
              "hint": "Small bubbles rise slowly and big ones rise fast. The phrase picks one of those two on purpose, and the three-minute stop tells you which one.",
              "skill": "Word meanings",
              "evidence": "follows it up the line at the speed of her smallest bubbles, stopping at twenty feet for three minutes as the plan requires"
            },
            {
              "q": "Paragraphs 1 and 3 together suggest why the bell could be taken but the brass gauges could not. What is the reason?",
              "choices": [
                "The gauges sit in a small, silty room the plan keeps her out of, and the bell was the one removal settled in advance.",
                "The gauges are far too heavy for a lift bag to raise.",
                "The gauges would be ruined by the year of soaking in fresh water that any object brought up from the wreck has to go through.",
                "The museum asked for the gauges as well, but the diver ran out of air before she could get them off the engine and into a lift bag."
              ],
              "answer": 0,
              "hint": "Paragraph one tells you how close the diver is allowed to get to the engine, and why. Paragraph three tells you what made one object different. Both halves are needed.",
              "skill": "Reading between the lines",
              "evidence": "The diver photographs each one from the doorway, because the room is small and the silt is deep and the plan says the doorway is far enough."
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
              "Fractions with the same bottom: the bigger top is the bigger fraction."
            ],
            "example": "5 × 6 = 30."
          },
          "problems": [
            {
              "q": "The diver carries 3 gauges on each of 3 trips. How many gauges is that?",
              "answer": "9",
              "hint": "3 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "Every dive takes 4 gauges. The diver has 12 gauges. How many dives can be filled?",
              "answer": "3",
              "hint": "How many 4s fit into 12?",
              "skill": "Dividing"
            },
            {
              "q": "The diver counted 233 fish in the morning and 335 in the evening. How many more in the evening?",
              "answer": "102",
              "hint": "335 − 233.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 4/6 or 5/6? (write a fraction)",
              "answer": "5/6",
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
            "example": "(5 − 2) × (3 + 5) = 24: each set of parentheses first."
          },
          "problems": [
            {
              "q": "The plan allows 120.5 minutes. The diver uses 27.95 minutes on the first deck and 33.4 on the second. How many minutes are left?",
              "answer": "59.15",
              "hint": "Add the two amounts used first, then take that from 120.5. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 rivets, 75 are set aside. Out of 200 rivets, how many is that?",
              "answer": "150",
              "hint": "200 is 2 hundreds, so 2 × 75.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The diver divides 12 minutes of work in the ratio 1 to 3. How many minutes is the larger share?",
              "answer": "9",
              "hint": "4 parts in all, so one part is 3 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The diver works out (7 − 1) × (6 + 4). What is it?",
              "answer": "60",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 131 = x − 42",
              "answer": "173",
              "hint": "Add 42 to both sides.",
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
            "example": "x ÷ 3 − 5 = 4, so x ÷ 3 = 9, so x = 27."
          },
          "problems": [
            {
              "q": "The job needs 12 minutes in all, at 0.75 minutes for each porthole. One porthole is already done. How many portholes are left?",
              "answer": "15",
              "hint": "12 ÷ 0.75 = 16 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says the engine's horsepower may change by no more than 50%. Starting from 80 horsepower, what is the highest the rule allows?",
              "answer": "120",
              "hint": "50% of 80 is 40. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The supply ledger starts at 21 lead weights and falls 11 weights on each of 5 days. What does it read at the end? (A minus number means weights owed.)",
              "answer": "-34",
              "accept": [
                "−34"
              ],
              "hint": "11 × 5 comes off 21.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 6 − 24 = 9",
              "answer": "198",
              "hint": "Add 24 to both sides, then multiply by 6.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 4 feet. How many inches are needed for 32 feet?",
              "answer": "8",
              "hint": "32 ÷ 4.",
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
            "example": "A line starts at 4 and climbs 7 each step: after 3 steps it is 7 × 3 + 4 = 25."
          },
          "problems": [
            {
              "q": "A line passes through (0, 5) and (5, 20). What is its slope?",
              "answer": "3",
              "hint": "Slope is the rise over the run: 15 ÷ 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "Two donkey engines on the deck each make 4² horsepower. How many horsepower in all?",
              "answer": "32",
              "hint": "4² is 16. Two engines of 16.",
              "skill": "Powers and roots"
            },
            {
              "q": "The diver goes 8 feet east and then 15 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "17",
              "hint": "The two legs make a right angle: 8² + 15² = 289.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 8x + 2 and 3x + 47 come to the same number?",
              "answer": "9",
              "hint": "Set them equal, take 3x off both sides, then take 2 off.",
              "skill": "Equations"
            },
            {
              "q": "The wreck's cargo list shows 1.2 × 10^6 pounds. A bigger ship carried ten times as much. Written out in full, how many pounds is that?",
              "answer": "12000000",
              "hint": "Ten times adds one to the power: 1.2 × 10^7.",
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
            "When a step cancels an earlier one, keep the total you had before it and do what the new step says."
          ],
          "example": "'Divide by 4. Do not divide; keep your total and take away 2.' 30 becomes 28, not 7.5."
        },
        "skill": "Following directions",
        "steps": [
          "Write the depth of the engine room in feet: 105.",
          "Subtract the depth of the safety stop: 20.",
          "Add the number of cylinders standing in the engine: 2.",
          "Divide by the minutes the diver waits at the safety stop: 3.",
          "Do not divide. Step 4 is canceled, because the stop is a wait and not a share. Keep your step 3 total and subtract the number of objects the museum allowed up: 1.",
          "Type the number you finish on."
        ],
        "prompt": "Your answer:",
        "answer": "86",
        "hint": "Step 5 calls step 4 off, so nothing is divided. Take the total you had at the end of step 3 and do what step 5 asks instead."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
