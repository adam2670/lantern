// ODYSSEY — campaign "glades". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "glades",
  "ready": true,
  "kind": "shift",
  "readingLevel": {
    "fk": 5.8,
    "cl": 6.2
  },
  "grade": "5",
  "kindLabel": "Patrol",
  "form": "heron",
  "title": "Everglades Run",
  "subtitle": "Everglades National Park, Florida",
  "pitch": "Five airboat runs through a river of grass fifty miles wide and a few inches deep, with a ranger who counts alligators, checks water gauges and knows why the whole thing is slowly being put back the way it was. Home ground.",
  "scene": "assets/scene-glades.jpg",
  "progress": {
    "unit": "runs",
    "total": 5
  },
  "dayNoun": "Run",
  "stageNoun": "Run",
  "finalNoun": "Florida Bay",
  "stages": [
    "Run 1",
    "Run 2",
    "Run 3",
    "Run 4",
    "Florida Bay"
  ],
  "reconNoun": "Ranger's Log",
  "legs": {
    "recon": "Ranger's log",
    "nav": "Glades math",
    "orders": "Boat orders",
    "debrief": "Dock"
  },
  "fact": "The Everglades is not a swamp. It is a river, fifty miles wide and a few inches deep, flowing so slowly from the big lake to the sea that a leaf can take a year to make the trip.",
  "finale": {
    "prompt": "Florida Bay, where the river of grass meets the sea. Which color goes on the channel marker at the mouth?",
    "options": [
      {
        "label": "Sawgrass green",
        "color": "#4FD18B"
      },
      {
        "label": "Heron blue",
        "color": "#4FD1FF"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      },
      {
        "label": "Sunset orange",
        "color": "#F28C28"
      }
    ],
    "done": "Paint it. Then cut the fan and listen. That quiet is what all the work was for."
  },
  "patrols": [
    {
      "id": "glades-1",
      "title": "A River of Grass",
      "recon": {
        "lesson": {
          "title": "Questions first, then the log",
          "points": [
            "Read the five questions before the log. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Widths and depths are details. Circle them.",
            "The answer is always in the log. You never have to guess."
          ],
          "example": "Question: 'How wide is the river of grass?' Hunt for 'miles'."
        },
        "title": "Ranger's Log: Fifty Miles Wide, Six Inches Deep",
        "passage": [
          "The Everglades looks like a swamp and is not one. It is a river, the widest and slowest in the country. The river begins at Lake Okeechobee and flows south across a plain of sawgrass fifty miles wide. The plain is so flat that the water drops only about two inches every mile. In most places it is six inches to two feet deep. It moves at about a quarter of a mile a day. A leaf that falls in at the lake can take a year to reach Florida Bay, in a field of grass taller than a person.",
          "The grass is sawgrass, which is not a grass but a sedge, with edges of tiny teeth that cut skin. It grows in water on a bed of limestone that was a sea floor. Islands of trees, called hammocks, stand in the grass where the rock rises a foot or two, and a foot is enough to change everything. On the hammock there are oaks, palms, ferns and orchids, and in the grass a foot lower there is only grass and water and the animals that live in both. The ranger's map is a map of inches.",
          "The airboat is the only boat that works here. It is a flat aluminum hull with a car engine. A fan the size of a door sits at the back. It slides over water, mud and grass alike on a few inches of nothing, at forty miles an hour, with a noise like a plane. The ranger wears ear protection and follows a channel marked with white poles. The channel matters because an airboat off it cuts a scar in the sawgrass that shows from the air for twenty years. Run one is the channel from the dock to the first gauge, nine miles. The log's first line is: water at the gauge, fourteen inches, normal for the season."
        ],
        "questions": [
          {
            "q": "How much does the water drop for every mile it flows?",
            "choices": [
              "Two feet",
              "About twenty inches a mile",
              "About two inches",
              "It does not drop at all, being flat"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the fourth sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What did the gauge read at the end of run one?",
            "choices": [
              "Six inches",
              "Two feet",
              "Two inches",
              "Fourteen inches"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 3.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'hammock'?",
            "choices": [
              "A bed of rope",
              "A kind of sawgrass",
              "The flat aluminum boat with a car engine and a fan the size of a door",
              "An island of trees standing on a slight rise of rock in the grass"
            ],
            "answer": 3,
            "hint": "The sentence 'Islands of trees, called hammocks'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the ranger stay on the marked channel?",
            "choices": [
              "Because the channel is faster",
              "Because the water outside the channel is too shallow",
              "Because an airboat off the channel scars the sawgrass for twenty years",
              "Because the sawgrass has edges of tiny teeth that will cut the skin of anyone in it"
            ],
            "answer": 2,
            "hint": "Paragraph 3, the sentence with 'a scar in the sawgrass'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The Everglades as a very wide, very slow river",
              "The airboat",
              "Sawgrass teeth",
              "The gauge"
            ],
            "answer": 0,
            "hint": "Paragraph 1 describes the width, depth and speed of the river of grass.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Slow river math",
          "points": [
            "Leftovers: 40 ÷ 6 is 6 with 4 left over, because 6 × 6 = 36.",
            "A quarter of a mile a day: divide the days by 4. 40 days is 40 ÷ 4 = 10 miles.",
            "Miles at a speed: minutes.",
            "Same bottom: add the tops, so 1/8 + 4/8 = 5/8."
          ],
          "example": "50 markers over 8 miles: 8 × 6 = 48, so 2 are left over."
        },
        "problems": [
          {
            "q": "The ranger places 100 channel markers along 9 miles, the same number on each mile, as many as possible. How many markers are left over?",
            "answer": "1",
            "hint": "9 × 11 = 99. How many are left after 99?",
            "skill": "Dividing"
          },
          {
            "q": "The water moves about a quarter of a mile a day. How many miles in 20 days?",
            "answer": "5",
            "hint": "20 quarters: 20 ÷ 4.",
            "skill": "Multiplying"
          },
          {
            "q": "Run one is 9 miles. The airboat does 40 miles an hour on the straights, but the ranger averages 18. How many minutes does 9 miles take at 18 miles an hour?",
            "answer": "30",
            "hint": "9 is half of 18, so half an hour.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The water at the gauge is 14 inches. Two feet is 24 inches. How many inches below two feet is it?",
            "answer": "10",
            "hint": "24 − 14.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The ranger passed 2/9 of the channel markers before the first hammock and 4/9 after. What fraction of the markers is that? (write a fraction)",
            "answer": "6/9",
            "accept": [
              "2/3"
            ],
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Name the idea that holds it all",
            "points": [
              "Read all three paragraphs, then put the whole thing into one sentence of your own before you look at the choices.",
              "The wrong answers are usually true but the wrong size: one paragraph's worth, or a statement so large the report never made it.",
              "Then four more moves: prove a claim with one line, name a paragraph's job, read a phrase off its own sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a marsh: what the water does, what grows in it, how people cross it. 'The grass has teeth' is one paragraph. 'Nature is amazing' is not in the report."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "Sawgrass is not a grass at all but a sedge, with edges of tiny teeth that cut skin, and it grows in water on a bed of limestone.",
                "Wetlands are the most important habitats anywhere in the world.",
                "In a place this flat, tiny differences in depth decide everything, from what grows where to how a boat is allowed to travel.",
                "The Everglades is a swamp rather than a river, with water that stands still where it falls instead of moving south across the plain."
              ],
              "answer": 2,
              "hint": "Two inches of drop in a mile, a foot of rock that changes what grows, and a gauge read in inches. Find the choice that covers all three.",
              "skill": "Central idea and evidence",
              "evidence": "The ranger's map is a map of inches."
            },
            {
              "q": "Claim: the water moves so slowly that a trip across the whole system takes a year. Which sentence from the log best supports that claim?",
              "choices": [
                "The Everglades looks like a swamp and is not one.",
                "In most places it is six inches to two feet deep.",
                "The ranger's map is a map of inches.",
                "A leaf that falls in at the lake can take a year to reach Florida Bay, in a field of grass taller than a person."
              ],
              "answer": 3,
              "hint": "A speed is not a journey. The claim names how long a trip from one end to the other takes, so find the sentence that follows something the whole way down.",
              "skill": "Finding details",
              "evidence": "A leaf that falls in at the lake can take a year to reach Florida Bay, in a field of grass taller than a person."
            },
            {
              "q": "Why does the log open by saying what the Everglades is not?",
              "choices": [
                "To explain why an airboat is used here instead of an ordinary boat with a propeller in the water.",
                "To describe the way sawgrass cuts a person's skin.",
                "To give the depth of the water at the first gauge.",
                "To clear away a wrong idea first, so that everything after it can be read as a river."
              ],
              "answer": 3,
              "hint": "The very first sentence takes something away and puts something else in its place. Ask how the rest of that paragraph would read without the swap.",
              "skill": "Author's purpose and structure",
              "evidence": "The Everglades looks like a swamp and is not one."
            },
            {
              "q": "The log says that where the rock rises, 'a foot is enough to change everything'. What does that phrase mean?",
              "choices": [
                "A person standing a foot taller than the sawgrass can see out across the plain",
                "The water rises and falls by about a foot each season",
                "A rise of one foot produces a completely different set of living things",
                "The airboat needs a foot of water underneath it to float"
              ],
              "answer": 2,
              "hint": "Read the next sentence: what is up on the hammock, and what is a foot lower down. That contrast is what 'everything' stands for.",
              "skill": "Word meanings",
              "evidence": "a foot is enough to change everything. On the hammock there are oaks, palms, ferns and orchids, and in the grass a foot lower there is only grass and water and the animals that live in both"
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the airboat is the only boat that works here. Why is it?",
              "choices": [
                "The water is mostly inches deep and full of grass, so a boat has to slide over the top instead of sitting in it.",
                "The water moves too fast across the plain for any boat with a propeller to hold its course.",
                "The channel marked with white poles is too narrow for any boat wider than an airboat.",
                "An airboat is quiet enough to slip past the animals without frightening any of them."
              ],
              "answer": 0,
              "hint": "Paragraph one tells you how deep the water is and what grows in it. Paragraph three tells you what the airboat rides on. Put the water and the hull side by side.",
              "skill": "Reading between the lines",
              "evidence": "It slides over water, mud and grass alike on a few inches of nothing"
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
              "Fractions with the same bottom: the bigger top is the bigger fraction."
            ],
            "example": "4 × 8 = 32."
          },
          "problems": [
            {
              "q": "The ranger carries 7 markers on each of 6 trips. How many markers is that?",
              "answer": "42",
              "hint": "6 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "Every channel takes 9 markers. The ranger has 63 markers. How many channels can be filled?",
              "answer": "7",
              "hint": "How many 9s fit into 63?",
              "skill": "Dividing"
            },
            {
              "q": "The ranger counted 346 birds in the morning and 467 in the evening. How many more in the evening?",
              "answer": "121",
              "hint": "467 − 346.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 4/6 or 1/6? (write a fraction)",
              "answer": "4/6",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 6 feet on each side. How many feet is it all the way around?",
              "answer": "24",
              "hint": "Four sides of 6.",
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
            "example": "(7 − 2) × (2 + 5) = 35: each set of parentheses first."
          },
          "problems": [
            {
              "q": "A regular run takes 3.75 hours. A long one takes 2.4 times as long. How many hours does the long one take?",
              "answer": "9",
              "hint": "Multiply 375 × 24 without the points, then put back 3 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 miles, 20 are set aside. Out of 160 miles, how many is that?",
              "answer": "32",
              "hint": "160 is 1.6 hundreds, so 1.6 × 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ranger divides 54 minutes of work in the ratio 4 to 5. How many minutes is the larger share?",
              "answer": "30",
              "hint": "9 parts in all, so one part is 6 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ranger works out (6 − 2) × (8 + 3). What is it?",
              "answer": "44",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three readings came in from the station's sample freezer: −21, −11 and 10 degrees. Which is the coldest?",
              "answer": "-21",
              "accept": [
                "−21"
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
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "x ÷ 3 − 5 = 4, so x ÷ 3 = 9, so x = 27."
          },
          "problems": [
            {
              "q": "The whole job, start to finish, takes 8 minutes, at 0.5 minutes for each water sample. One sample is already done. How many samples are left?",
              "answer": "15",
              "hint": "8 ÷ 0.5 = 16 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The park expects the wading-bird count to grow by no more than 50% this season. It starts at 240. What is the highest count they expect?",
              "answer": "360",
              "hint": "50% of 240 is 120. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The water gauge read −13 inches (below the normal mark), then the water fell 15 more inches. What does the gauge read now?",
              "answer": "-28",
              "accept": [
                "−28"
              ],
              "hint": "Falling takes it further below zero: start at −13 and go down 15 more.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 4 − 19 = 2",
              "answer": "84",
              "hint": "Add 19 to both sides, then multiply by 4.",
              "skill": "Equations"
            },
            {
              "q": "A map uses 1 inch for every 8 feet. How many inches are needed for 128 feet?",
              "answer": "16",
              "hint": "128 ÷ 8.",
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
            "example": "A line starts at 4 and climbs 5 each step: after 3 steps it is 5 × 3 + 4 = 19."
          },
          "problems": [
            {
              "q": "A line passes through (0, 12) and (6, 30). What is its slope?",
              "answer": "3",
              "hint": "Slope is the rise over the run: 18 ÷ 6.",
              "skill": "Linear relationships"
            },
            {
              "q": "The ranger drove the airboat 5² miles last week and twice as far this week. How many miles is that this week?",
              "answer": "50",
              "hint": "5² is 25. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The ranger goes 8 feet east and then 15 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "17",
              "hint": "The two legs make a right angle: 8² + 15² = 289.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 5x + 22 and 2x + 46 come to the same number?",
              "answer": "8",
              "hint": "Set them equal, take 2x off both sides, then take 22 off.",
              "skill": "Equations"
            },
            {
              "q": "The ranger writes down 4 × 10^5. Then the ranger needs a number ten times as big. Written out in full, what is the new number?",
              "answer": "4000000",
              "hint": "Ten times adds one to the power: 4 × 10^6.",
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
          "example": "If step 5 says 'go back to step 2 and leave step 3 out', step 3 never counts."
        },
        "skill": "Following directions",
        "steps": [
          "Write the width of the river of grass in miles: 50.",
          "Divide by the inches the water drops in a mile: 2.",
          "Add the miles of run one: 9.",
          "Subtract the gauge reading in inches: 14.",
          "The ranger's tally leaves run one out. Go back to your answer from step 2, take the gauge reading of 14 inches off that instead, and type what is left."
        ],
        "prompt": "Your answer:",
        "answer": "11",
        "hint": "Step 5 sends you back to before run one was added. The gauge reading comes off your step 2 total, not off the one you finished with."
      }
    },
    {
      "id": "glades-2",
      "title": "Gator Count",
      "recon": {
        "lesson": {
          "title": "An animal that builds",
          "points": [
            "When the log explains what an animal does for the place it lives, that is the detail a 'why' question wants.",
            "Lengths and counts are exact.",
            "A word about the animal is defined by what it makes."
          ],
          "example": "'A beaver dam holds back a pond.' What does the dam do? Holds back water."
        },
        "title": "Ranger's Log: The Engineer With Teeth",
        "passage": [
          "The second run is the gator count. The ranger does it the way it has been done for fifty years. The method is to idle slowly down a marked stretch of channel at the same hour on the same day each month. The ranger counts every alligator seen. Each length is guessed from the distance between the eyes and the tip of the snout, which is about an inch for every foot of gator. Fourteen today, from a three-footer sunning on a log to a ten-footer that sank without a ripple as the boat came around the bend.",
          "An alligator in the Everglades is a builder. In the dry season the sawgrass plain goes dry for months. Then a gator uses its snout, feet and tail to dig a pond, a gator hole, down to the water that is still there under the mud. The hole fills. Fish, turtles, snails and frogs crowd into it, and wading birds come to eat them. The gator eats some of everything, but the hole keeps hundreds of animals alive through the dry months that would otherwise die. When the rains come they spread back out across the plain. No gator holes, no dry-season life. The ranger's count is a count of ponds as much as of animals.",
          "The rules for the count are the rules for the boat: never closer than thirty feet, never between a gator and the water, and never, ever, feed one. That is because a gator that has been fed by a person learns that people mean food, and that gator ends up dead. The ranger logs fourteen gators, four holes, and two nests from last summer with the eggshells still in them. There is also a note: the ten-footer by the bend is the same one as last month. It has been the same one for eleven years."
        ],
        "questions": [
          {
            "q": "How does the ranger guess a gator's length?",
            "choices": [
              "By its color",
              "By counting its teeth",
              "About an inch from eyes to snout tip for every foot of gator",
              "By idling slowly past at the same hour on the same day of each month"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the fifth sentence, near the end.",
            "skill": "Finding details"
          },
          {
            "q": "How many gators did the ranger count?",
            "choices": [
              "Fourteen",
              "Four",
              "Ten",
              "Two"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sixth sentence, and the log line in paragraph 3.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'gator hole'?",
            "choices": [
              "A den a gator digs to sleep through the winter",
              "A pond a gator digs down to the water in the dry season",
              "A nest",
              "A cave"
            ],
            "answer": 1,
            "hint": "The third sentence of paragraph 2.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does feeding a gator end with the gator dead?",
            "choices": [
              "Because people food is poisonous",
              "Because it stops hunting for itself and starves later on",
              "Because a gator that comes within thirty feet of a boat has to be moved away to another part of the park",
              "Because a fed gator learns people mean food and becomes dangerous, and then it has to be removed"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the sentence with 'learns that people mean food'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "Turtles",
              "How gator holes keep the marsh's animals alive through the dry season",
              "The ten-footer",
              "The rules"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 2 calls the gator a builder, and the rest explains the hole.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Gator math",
          "points": [
            "Inches eye-to-snout equals feet of gator.",
            "Gators per mile: count ÷ miles.",
            "Months in a number of years: years × 12.",
            "Volume of a box: length × width × height. 3 × 3 × 2 = 18 cubic feet."
          ],
          "example": "A snout of 10 inches means a gator about 10 feet long."
        },
        "problems": [
          {
            "q": "A gator's eyes are 7 inches from the tip of its snout. About how long is the gator, in feet?",
            "answer": "7",
            "hint": "An inch per foot.",
            "skill": "Multiplying"
          },
          {
            "q": "The ranger counted 14 gators on a 7-mile stretch. How many gators per mile?",
            "answer": "2",
            "hint": "14 ÷ 7.",
            "skill": "Dividing"
          },
          {
            "q": "The ranger's gear box on the airboat is 4 feet long, 2 feet wide and 2 feet tall. How many cubic feet does it hold?",
            "answer": "16",
            "hint": "Length × width × height: 4 × 2 first, then times 2.",
            "skill": "Volume"
          },
          {
            "q": "The count has been done every month for 50 years. How many counts is that?",
            "answer": "600",
            "hint": "50 × 12.",
            "skill": "Multiplying"
          },
          {
            "q": "The rule is never closer than 30 feet. The boat is 22 feet from a gator. How many more feet back should it be?",
            "answer": "8",
            "hint": "30 − 22.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "One line, not four",
            "points": [
              "All four choices are real sentences from the log. Being true earns nothing at all.",
              "If the claim weighs two things against each other, the sentence you want has to name both of them.",
              "Read the claim and your pick one after the other, and ask whether anything is still missing between them."
            ],
            "example": "Claim: the ferry costs more than it earns. 'It carries forty cars' is true and settles nothing. 'The fares cover half the fuel' settles it."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "An alligator's length can be judged at about an inch for every foot.",
                "Every animal has some part to play in the world around it.",
                "Counting alligators is really counting the ponds they dig, because those ponds are what carries the marsh through the dry season.",
                "The count is made at a different hour on a different day each month, so that the ranger catches more of the alligators that happen to be out."
              ],
              "answer": 2,
              "hint": "A count done the same way every month, a paragraph about digging, and four holes written into the log. Ask what the count is really measuring.",
              "skill": "Central idea and evidence",
              "evidence": "The ranger's count is a count of ponds as much as of animals."
            },
            {
              "q": "Claim: a gator hole does far more for other animals than it does for the gator. Which sentence from the log best supports that claim?",
              "choices": [
                "The gator eats some of everything, but the hole keeps hundreds of animals alive through the dry months that would otherwise die.",
                "An alligator in the Everglades is a builder.",
                "In the dry season the sawgrass plain goes dry for months.",
                "The ranger's count is a count of ponds as much as of animals."
              ],
              "answer": 0,
              "hint": "The claim weighs two things against each other: what the gator takes, and what survives. Find the sentence that has both in it.",
              "skill": "Finding details",
              "evidence": "The gator eats some of everything, but the hole keeps hundreds of animals alive through the dry months that would otherwise die."
            },
            {
              "q": "Why does the log give the reason behind the rule 'never, ever, feed one'?",
              "choices": [
                "To explain how the ranger works out a gator's length from a distance.",
                "Because the reason is not the one a reader expects: the rule is protecting the alligator, not only the person.",
                "To describe what a gator nest looks like a summer later.",
                "To show why the count has to be made from thirty feet away."
              ],
              "answer": 1,
              "hint": "Read the clause that comes after 'because'. Ask who ends up worse off by the end of that sentence.",
              "skill": "Author's purpose and structure",
              "evidence": "because a gator that has been fed by a person learns that people mean food, and that gator ends up dead"
            },
            {
              "q": "The log calls an alligator 'a builder'. What does that mean as it is used here?",
              "choices": [
                "It piles mud and grass into a nest that keeps its eggs warm until they hatch",
                "It shapes a path through the grass as it moves",
                "It makes the channel that the airboat follows",
                "It digs something that a great many other animals depend on"
              ],
              "answer": 3,
              "hint": "The paragraph opens with that word and then spends the rest of itself showing you what gets built and who uses it.",
              "skill": "Word meanings",
              "evidence": "a gator uses its snout, feet and tail to dig a pond, a gator hole, down to the water that is still there under the mud"
            },
            {
              "q": "Paragraphs 1 and 3 together explain why it matters that the count is made at the same hour on the same day every month. Why does it?",
              "choices": [
                "Alligators only come out of the water at one particular hour of the day and stay hidden the rest.",
                "Counting the same way each time turns single numbers into a record, which is how the log can say one gator has been there eleven years.",
                "The ranger is only allowed onto the water once a month, on one fixed day, by the park's rules.",
                "The count has to be finished before the dry season starts and the plain dries out for months."
              ],
              "answer": 1,
              "hint": "Paragraph one tells you what is held steady about the count. Paragraph three shows what the log can say after doing it for years. Put the method and the result together.",
              "skill": "Reading between the lines",
              "evidence": "It has been the same one for eleven years."
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
              "q": "The ranger counts 8 holes with 9 gators in each. How many gators is that?",
              "answer": "72",
              "hint": "8 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "72 gators are shared equally among 8 holes. How many gators in each hole?",
              "answer": "9",
              "hint": "How many 8s make 72?",
              "skill": "Dividing"
            },
            {
              "q": "The airboat went 389 feet up the channel, then 59 more, then 24 more. How many feet in all?",
              "answer": "472",
              "hint": "389 + 59 first. Then add 24.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The ranger finished 5/8 of the day's work before the break and 2/8 after. What fraction is done? (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "There were 900 feet of rope at the start. 628 feet have been used. How many feet are left?",
              "answer": "272",
              "hint": "900 − 628.",
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
            "example": "3 × (9 − 4) + 6 = 21: parentheses, then multiply, then add."
          },
          "problems": [
            {
              "q": "The airboat has 6 2/3 gallons of fuel. Each run uses 5/6 of a gallon. How many runs can the ranger make?",
              "answer": "8",
              "hint": "Make 6 2/3 an improper fraction, 20/3. Then multiply by the flip of 5/6: 20/3 × 6/5.",
              "skill": "Fractions"
            },
            {
              "q": "Of 160 feet, 75% are set aside. How many is that?",
              "answer": "120",
              "hint": "75% of 160: 75% is 75/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 4 gators the ranger counts, there are 5 turtles. If there are 20 gators, how many turtles?",
              "answer": "25",
              "hint": "20 ÷ 4 = 5 groups. Each group has 5 turtles.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ranger works out 4 × (12 − 5) + 7. What is it?",
              "answer": "35",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the sample freezer read −3 degrees. By noon, after a power cut, it read 6 degrees. By how many degrees did it rise?",
              "answer": "9",
              "hint": "From −3 up to 0 is 3, then 6 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 14 ÷ 4 = 3.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Count the minus signs. An even number gives a plus answer, an odd number a minus: (−2) × (−3) × (−5) = −30.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "6x + 5 = 41, so 6x = 36, so x = 6."
          },
          "problems": [
            {
              "q": "12 water samples needed 18 minutes altogether. How many minutes is that for one sample?",
              "answer": "1.5",
              "hint": "A rate is the total shared out: 18 ÷ 12.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ranger counted 60 alligators on the first pass. On the second pass the count had fallen by 20%. How many alligators is that?",
              "answer": "48",
              "hint": "20% of 60 is 12. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Each of the park's 4 airboats burns 3 gallons of fuel every hour. Write that as −3 an hour for each boat. How many more gallons did the 4 boats have 6 hours ago? Time before now counts as negative. Work it out as 4 × (−3) × (−6).",
              "answer": "72",
              "hint": "4 × 3 × 6, then count the minus signs. Two make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 9x + 27 = 126",
              "answer": "11",
              "hint": "Take 27 off both sides first, then divide by 9.",
              "skill": "Equations"
            },
            {
              "q": "A round cover is 10 inches across. Using 3.14 for pi, how many inches is it around the edge?",
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
            "example": "Start at 30 and add 4 each hour: after 6 hours, 4 × 6 + 30 = 54."
          },
          "problems": [
            {
              "q": "The ranger has counted 20 alligators and counts 7 more every hour. After 5 hours, how many alligators has the ranger counted?",
              "answer": "55",
              "hint": "This is the straight-line rule y = mx + b: 7 × 5 + 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 225 square feet. How long is one side, in feet?",
              "answer": "15",
              "hint": "A square's area is side × side. What number times itself makes 225?",
              "skill": "Powers and roots"
            },
            {
              "q": "The ranger runs a rope from the top of a 5-foot gauge post to a point 12 feet away on the ground. How long is the rope, in feet?",
              "answer": "13",
              "hint": "Right triangle: a² + b² = c². 5² + 12² = 25 + 144 = 169. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x + 1 = 2x + 37",
              "answer": "9",
              "hint": "Take 2x off both sides to get 4x + 1 = 37, then take 1 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 feet and is 3 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (volume = pi × radius × radius × depth)",
              "answer": "942",
              "hint": "3.14 × 10 × 10 = 314, then × 3.",
              "skill": "Area and perimeter"
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
          "example": "'Count only the gators over six feet' means read the sizes."
        },
        "skill": "Following directions",
        "steps": [
          "The gators the ranger measured today, in feet: 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9, 9, 10.",
          "Count only the ones that measured 8 feet or more.",
          "Multiply that count by the gator holes in the log: 4.",
          "Take away the nests from last summer: 2.",
          "The ranger's tally is written out in full. Type your answer as a word, in capital letters, with a dash where one belongs. (31 would be THIRTY-ONE.)"
        ],
        "prompt": "Your answer:",
        "answer": "TWENTY-TWO",
        "accept": [
          "twenty-two",
          "Twenty-two",
          "TWENTY TWO",
          "twenty two",
          "TWENTY-TWO.",
          "twentytwo",
          "TWENTYTWO"
        ],
        "hint": "The eight-footers count as 8 feet or more. Once the number is worked out, step 5 decides how it gets typed."
      }
    },
    {
      "id": "glades-3",
      "title": "The Gauge",
      "recon": {
        "lesson": {
          "title": "A problem people made",
          "points": [
            "When the log tells a history, the order matters: what was done, what happened, what is being done now.",
            "Numbers of miles of canal are details.",
            "'Why' about the fix: the reason is the problem it solves."
          ],
          "example": "'The dam blocked the salmon. Now it is coming down.' Why take it down? So the salmon can swim upstream again."
        },
        "title": "Ranger's Log: Putting the River Back",
        "passage": [
          "Run three is the water gauges. The gauges are how the Everglades is being put back together. A hundred years ago people decided the river of grass was wasted land and dug canals and built levees, fourteen hundred miles of them, to drain it for sugar farms and towns. It worked. Half the Everglades became farms and cities. The other half began to die, because the water that had flowed south for five thousand years now went east and west through the canals to the sea. The marsh went dry, and the fires came, and the wading birds that had nested here dropped by nine out of every ten.",
          "The fix is to send the water south again. It began in the year 2000 and will take longer than the ranger's whole career. Canals are being filled in. A highway that crossed the marsh like a dam has been lifted onto bridges so the water can pass under it. Huge shallow reservoirs are being built to hold the summer rains and let them out slowly through the winter. That is what the marsh used to do. It is the biggest repair of a natural place anyone has ever tried, and it is measured in inches, at gauges, by rangers, month after month.",
          "The gauge is a white post standing in the water beside the channel. It has a scale painted on it. The ranger reads it through binoculars: fourteen and a half inches. That is up half an inch from last month, the right direction for this time of year. Twenty gauges on the run, two hours. Every reading goes into a table that people in an office in a city will use to decide how much water to let out of which gate next week. The ranger's part of the biggest repair in the world is a number on a post. The heron watches from the next post along."
        ],
        "questions": [
          {
            "q": "How many miles of canals and levees were built?",
            "choices": [
              "Fourteen",
              "A hundred and forty in all",
              "Fourteen thousand of them",
              "Fourteen hundred"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the third sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What was done to the highway that crossed the marsh?",
            "choices": [
              "It was closed",
              "It was lifted onto bridges so water can pass under it",
              "It was widened",
              "It was filled in with rock so that the marsh could grow over it"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the fourth sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'reservoir'?",
            "choices": [
              "A canal",
              "A kind of bridge",
              "A white post with a scale painted on it, read through binoculars",
              "A place built to hold water and release it slowly"
            ],
            "answer": 3,
            "hint": "The sentence 'shallow reservoirs are being built to hold the summer rains and let them out slowly'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did half the Everglades begin to die after the canals were dug?",
            "choices": [
              "Because the sugar farms and the towns that replaced it took all of the water they needed out of the marsh",
              "Because the water that had flowed south now went east and west to the sea, and the marsh dried out",
              "Because the wading birds that had nested there dropped by nine out of every ten and then stopped coming",
              "Because the fires that came through the dry marsh burned away the limestone bed that the sawgrass grows on"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the last two sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "Binoculars",
              "How the canals were dug a hundred years ago and what they ended up doing to the river of grass",
              "Reading the gauges, and how a number on a post is part of the biggest repair in the world",
              "The repair that began in the year 2000 and the shallow reservoirs being built to hold the rains"
            ],
            "answer": 2,
            "hint": "Paragraph 3 describes the gauge, the reading, and where the number goes.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Gauge math",
          "points": [
            "Subtracting decimals: line up the points, so 7.5 − 6 = 1.5.",
            "Gauges over hours: rate.",
            "Years since 2000: subtract from the current year.",
            "Two-step: readings a month, then a year."
          ],
          "example": "24 posts in 3 hours is 8 an hour."
        },
        "problems": [
          {
            "q": "The gauge reads 14.5 inches, up from 14 last month. How many inches did it rise? (write a decimal)",
            "answer": "0.5",
            "accept": [
              ".5",
              "1/2",
              "half"
            ],
            "hint": "14.5 − 14.",
            "skill": "Decimals"
          },
          {
            "q": "The ranger reads 20 gauges in 2 hours. How many gauges an hour?",
            "answer": "10",
            "hint": "20 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "The repair began in 2000. How many years has it been running, if this year is 2026?",
            "answer": "26",
            "hint": "2026 − 2000.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "Twenty gauges are read once a month. How many readings in a year?",
            "answer": "240",
            "hint": "20 × 12.",
            "skill": "Multiplying"
          },
          {
            "q": "Suppose 1/4 of the 1,400 miles of canals and levees were taken out. How many miles would that be?",
            "answer": "350",
            "hint": "1,400 ÷ 4.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Sentences do jobs too",
            "points": [
              "It is not only paragraphs that have jobs. A sentence set on its own, or two words in a row, can be doing the most important work on the page.",
              "Find the job by asking what the sentences on either side of it need. A short sentence between two long ones is usually a hinge.",
              "A choice that only repeats what the sentence says has not named a job."
            ],
            "example": "'They built the wall in a year. It held. Then the river changed course.' The two-word sentence in the middle is what makes the third one land."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "Fourteen hundred miles of canals and levees were built across the Everglades to drain the land for the sugar farms and the towns that were built on it.",
                "People always ruin the natural places they choose to live beside.",
                "The repair of the Everglades was begun and finished in the year 2000, when the canals were filled in and the water went south across the plain again.",
                "A hundred years of draining is being undone by sending the water south again, and the whole repair is judged in inches read off posts."
              ],
              "answer": 3,
              "hint": "What was dug, what is being undone, and what the ranger does with a pair of binoculars. Find the choice that covers all three.",
              "skill": "Central idea and evidence",
              "evidence": "It is the biggest repair of a natural place anyone has ever tried, and it is measured in inches, at gauges, by rangers, month after month."
            },
            {
              "q": "Claim: the canals sent the water in the wrong direction for the marsh. Which sentence from the log best supports that claim?",
              "choices": [
                "A hundred years ago people decided the river of grass was wasted land and dug canals and built levees, fourteen hundred miles of them, to drain it for sugar farms and towns.",
                "The other half began to die, because the water that had flowed south for five thousand years now went east and west through the canals to the sea.",
                "Half the Everglades became farms and cities.",
                "A highway that crossed the marsh like a dam has been lifted onto bridges so the water can pass under it."
              ],
              "answer": 1,
              "hint": "The claim is about direction. The others say what was dug, what it did, or what is being fixed. Only one says which way the water went afterward.",
              "skill": "Finding details",
              "evidence": "The other half began to die, because the water that had flowed south for five thousand years now went east and west through the canals to the sea."
            },
            {
              "q": "Why does the log put 'It worked' as a sentence on its own between the digging and the dying?",
              "choices": [
                "To show that the canals were the work of highly skilled engineers, who managed to drain half of a river fifty miles wide and turn it into farms.",
                "To explain how the water is being sent south again today.",
                "To give the number of miles of canal that were dug.",
                "To make the reader stop on the fact that the plan succeeded, which is exactly what caused the damage described next."
              ],
              "answer": 3,
              "hint": "Two words standing alone. Read the sentence before it and the sentence after it, and ask what the short one is standing between.",
              "skill": "Author's purpose and structure",
              "evidence": "It worked."
            },
            {
              "q": "The log says a highway 'crossed the marsh like a dam'. What is that comparison telling you?",
              "choices": [
                "The road was built out of the same poured concrete that the walls of a dam are made of",
                "The road stopped the water that was trying to flow south across it",
                "The road held a lake back behind it so the water could be piped away for drinking",
                "The road went under water every time the summer rains came and the marsh rose around it"
              ],
              "answer": 1,
              "hint": "Read the rest of that sentence: what has been done to the highway now, and what the water can do as a result. The fix tells you what the problem was.",
              "skill": "Word meanings",
              "evidence": "A highway that crossed the marsh like a dam has been lifted onto bridges so the water can pass under it."
            },
            {
              "q": "Paragraphs 2 and 3 together explain how one ranger reading a post is part of something enormous. How does it connect?",
              "choices": [
                "The ranger is one of the engineers who design the new reservoirs, and the readings from the post go straight into the plans drawn for them.",
                "Every gauge post has to be built by the ranger who reads it.",
                "The repair is judged in inches, and these readings are the inches that the people deciding how much water to release actually use.",
                "The ranger's readings are what the office in the city uses to decide which of the canals will be filled in and which bridges built next year."
              ],
              "answer": 2,
              "hint": "Paragraph two says what the whole repair is measured in. Paragraph three says where the ranger's numbers go and who uses them. Join those two facts.",
              "skill": "Reading between the lines",
              "evidence": "Every reading goes into a table that people in an office in a city will use to decide how much water to let out of which gate next week"
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
              "Fractions with the same bottom: add or take away the tops; the bottom stays."
            ],
            "example": "5 × 6 = 30."
          },
          "problems": [
            {
              "q": "The ranger counted 4 inches yesterday and three times as many today. How many inches today?",
              "answer": "12",
              "hint": "Three times 4: 4 + 4 + 4.",
              "skill": "Multiplying"
            },
            {
              "q": "The ranger's water gauge is 36 inches tall, marked in sections of 4 inches. How many sections is that?",
              "answer": "9",
              "hint": "How many 4s make 36?",
              "skill": "Dividing"
            },
            {
              "q": "The ranger has 250 trail maps and hands out 159. How many maps are left?",
              "answer": "91",
              "hint": "250 − 159.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "4/6 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "2/6",
              "hint": "The whole job is 6/6. Take 4/6 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square gauge mat is 3 squares on each side. How many squares is that?",
              "answer": "9",
              "hint": "3 rows of 3.",
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
            "example": "12 + 4 × 6 = 36: multiply first, then add."
          },
          "problems": [
            {
              "q": "The ranger has 68.9 hours on the water. Each run takes 2.65 hours. How many runs is that enough for?",
              "answer": "26",
              "hint": "Move both points 2 places to the right: 6890 ÷ 265.",
              "skill": "Decimals"
            },
            {
              "q": "24 of the 240 inches are set aside. What percent is that? (write just the number)",
              "answer": "10",
              "accept": [
                "10%"
              ],
              "hint": "24 out of 240, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 1 gauge there are 3 inches. There are 27 inches. How many gauges?",
              "answer": "9",
              "hint": "27 ÷ 3 = 9 groups. Each group has 1 gauge.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ranger works out 20 + 3 × 10. What is it?",
              "answer": "50",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the sample freezer read 7 degrees. By dark it had fallen to −2 degrees. By how many degrees did it fall?",
              "answer": "9",
              "hint": "From 7 down to 0 is 7, then 2 more.",
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
            "example": "47 − 7x = 5, so 7x = 42, so x = 6."
          },
          "problems": [
            {
              "q": "One water sample needs 2.5 minutes. How many minutes do 16 samples need?",
              "answer": "40",
              "hint": "16 × 2.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The water at the gauge was 40 inches deep on the first check and 36 inches deep on the second. By what percent did the depth change? (write just the number)",
              "answer": "10",
              "accept": [
                "10%",
                "-10",
                "−10",
                "-10%",
                "−10%"
              ],
              "hint": "The change is 4. 4 out of 40, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The water gauge read −16 inches at dawn and −28 inches at dark. How many inches did the water fall?",
              "answer": "12",
              "hint": "From −16 down to −28.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 40 − 5x = 30",
              "answer": "2",
              "hint": "Move 5x to the right and 30 to the left: 5x = 10.",
              "skill": "Equations"
            },
            {
              "q": "On the map, 1 inch stands for 20 feet. The boardwalk is really 100 feet long. How many inches is it on the map?",
              "answer": "5",
              "hint": "100 ÷ 20.",
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
            "example": "Start with 60 and use 7 an hour: after 5 hours, 60 − 7 × 5 = 25."
          },
          "problems": [
            {
              "q": "The ranger starts with 89 bird bands and uses 9 every hour. How many are left after 9 hours?",
              "answer": "8",
              "hint": "9 × 9 = 81 used, taken off 89.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 9 small cubes along every edge. How many small cubes make it up?",
              "answer": "729",
              "hint": "9³ means 9 × 9 × 9.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope runs from the top of an observation post to a point 15 feet away on the ground. How tall is the post, in feet?",
              "answer": "8",
              "hint": "a² = c² − b² = 289 − 225 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x = x + 54",
              "answer": "9",
              "hint": "Take x off both sides: 6x = 54. Then divide by 6.",
              "skill": "Equations"
            },
            {
              "q": "The ranger's boat trail is 9,000 feet long. Written as 9 × 10 to a power, what is the power?",
              "answer": "3",
              "hint": "Count the zeros after 9.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Two totals",
          "points": [
            "Some orders build two separate totals.",
            "The last step says which one to keep."
          ],
          "example": "'Keep this total' means stop and write it down. The last step picks which total you type."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of gauges on run three: 20.",
          "Multiply by the hours the run takes: 2. Keep this total.",
          "Now start a second total from the miles of canal, counted in hundreds: 14.",
          "Add the gauge reading in inches, rounded down: 14.",
          "The office wants the run's own figures. Type the total from step 2, not the one from step 4."
        ],
        "prompt": "Your answer:",
        "answer": "40",
        "hint": "Two totals get built, one at step 2 and one at step 4. Step 5 says which of them goes into the table."
      }
    },
    {
      "id": "glades-4",
      "title": "The Rookery",
      "recon": {
        "lesson": {
          "title": "Counting from far away",
          "points": [
            "When the log describes a method for counting, the steps are details.",
            "Big numbers from the past versus now are a comparison. Read both.",
            "'Why from a distance' wants the reason in the log."
          ],
          "example": "'The deer are watched from a tower so they do not run.' Why the tower? So the deer are not disturbed."
        },
        "title": "Ranger's Log: Ten Thousand Wings",
        "passage": [
          "Run four goes to the rookery, an island of mangroves in a wide pond where the wading birds nest: herons, egrets, ibis, wood storks, spoonbills the color of bubblegum. From half a mile away the island looks covered in snow. It is birds, thousands, on every branch, with the noise of a stadium. More than a hundred years ago there were rookeries like this all over the Everglades. They held a million birds between them. Then the plume hunters came. They shot the birds for the feathers on their backs, which went on hats. After that the canals came and dried up the fish, and the million became a few thousand.",
          "The birds are coming back slowly, because the water is, and the rookery count is how the park knows. It is done from a small plane at five hundred feet, once a week in nesting season, by two people with cameras and a tally counter. That is because a boat close to a rookery makes the parents fly and leaves the eggs to the sun and the crows for the minutes they are gone, and minutes are enough. The ranger's job today is to stop the boat half a mile out, drop a marker for the plane crew, and count what can be counted from there with the scope. From there it is about two thousand nests on the near side.",
          "The log records it in the same words the count has used since the 1930s: rookery active, wood storks nesting, no disturbance, water level good. Wood storks are the ones the park watches hardest. They nest only when the water is dropping at the right speed. That crowds fish into the shrinking pools where the storks can catch them. A stork that cannot find fish gives up on its nest. This year the water is dropping right. The storks are sitting. The ranger writes it down and does not go one boat-length closer."
        ],
        "questions": [
          {
            "q": "How is the rookery counted?",
            "choices": [
              "By walking through it",
              "By boat, up close",
              "By two people with cameras and a tally counter sitting in a boat half a mile out",
              "From a small plane at five hundred feet, once a week in nesting season"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "About how many nests did the ranger count on the near side?",
            "choices": [
              "Two hundred",
              "A million",
              "Fifty",
              "About two thousand"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'rookery'?",
            "choices": [
              "A wide pond in the mangroves",
              "A kind of tree",
              "The feathers on a bird's back that went onto hats",
              "A place where many birds nest together"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the ranger stop the boat half a mile from the rookery?",
            "choices": [
              "Because the water is shallow",
              "Because a boat close to the rookery makes the parents fly and leaves the eggs exposed",
              "Because the wood storks only nest when the water is dropping at the right speed for fishing",
              "Because a marker has to be dropped there for the plane crew before anyone can get any closer"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'leaves the eggs to the sun and the crows'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The spoonbills, the ibis and the wood storks standing on every branch",
              "The plane that flies over the rookery once a week in nesting season",
              "The rookery, and how the million birds became a few thousand",
              "The hats that the plume hunters' feathers were sold to be put on"
            ],
            "answer": 2,
            "hint": "Paragraph 1 describes the rookery and then the plume hunters and the canals.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Rookery math",
          "points": [
            "A million to a few thousand: a big drop. Use the numbers given.",
            "Subtracting decimals: line up the points. 4.3 − 1.65 is 4.30 − 1.65 = 2.65.",
            "Half of a number: divide by 2.",
            "Once a week for a season: one count a week times the weeks. 10 weeks is 10 counts."
          ],
          "example": "An egg 2.5 inches long and one 1.75 inches long: 2.50 − 1.75 = 0.75 inch longer."
        },
        "problems": [
          {
            "q": "There were about 1,000,000 birds a hundred years ago and about 5,000 at the lowest point. How many fewer is that?",
            "answer": "995000",
            "accept": [
              "995,000"
            ],
            "hint": "1,000,000 − 5,000.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "A great egret's egg is 2.2 inches long and a small heron's egg is 1.85 inches long. How much longer is the egret's egg? (write a decimal)",
            "answer": "0.35",
            "hint": "Line up the points: 2.20 − 1.85.",
            "skill": "Decimals"
          },
          {
            "q": "The plane counts once a week for a 16-week nesting season. How many counts?",
            "answer": "16",
            "hint": "1 × 16.",
            "skill": "Multiplying"
          },
          {
            "q": "The ranger stops half a mile out. A mile is 5,280 feet. How many feet is half a mile?",
            "answer": "2640",
            "accept": [
              "2,640"
            ],
            "hint": "5,280 ÷ 2.",
            "skill": "Fractions"
          },
          {
            "q": "The count has used the same words since the 1930s. Using 1935, how many years is that to 2026?",
            "answer": "91",
            "hint": "2026 − 1935.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What the comparison is borrowing",
            "points": [
              "A comparison borrows one quality and leaves the rest behind. Work out which quality is being borrowed before you choose.",
              "The sentences on either side usually spell it out. Read past the comparison before deciding what it means.",
              "Put your choice back into the sentence. Three of the four will make the log say something it never said."
            ],
            "example": "'The crowd was a river.' Nobody is wet. Only one quality has been borrowed: a lot of things moving one way at once."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "The rookery count is done from a small plane at five hundred feet.",
                "Birds are the best measure of whether a country is healthy.",
                "The ranger takes the boat right up to the mangrove island so that every nest on the near side can be counted through the scope.",
                "The rookery is recovering along with the water, and every part of how it is counted is arranged to avoid disturbing it."
              ],
              "answer": 3,
              "hint": "A million birds lost, a plane used instead of a boat, and a ranger who stops half a mile out. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "The birds are coming back slowly, because the water is, and the rookery count is how the park knows."
            },
            {
              "q": "Claim: a few minutes of disturbance can cost a nest. Which sentence from the log best supports that claim?",
              "choices": [
                "The ranger's job today is to stop the boat half a mile out, drop a marker for the plane crew, and count what can be counted from there with the scope.",
                "The log records it in the same words the count has used since the 1930s: rookery active, wood storks nesting, no disturbance, water level good.",
                "It is done from a small plane at five hundred feet, once a week in nesting season, by two people with cameras and a tally counter.",
                "That is because a boat close to a rookery makes the parents fly and leaves the eggs to the sun and the crows for the minutes they are gone, and minutes are enough."
              ],
              "answer": 3,
              "hint": "Two of these describe what is done about the problem. The claim is about the problem itself. Find the sentence that says what happens while the parents are off the nest.",
              "skill": "Finding details",
              "evidence": "That is because a boat close to a rookery makes the parents fly and leaves the eggs to the sun and the crows for the minutes they are gone, and minutes are enough."
            },
            {
              "q": "Why does the log explain what wood storks need before they will nest?",
              "choices": [
                "To explain why the plume hunters chose storks over other birds.",
                "To describe how a wood stork builds its nest in the mangroves and how long the parents sit on the eggs before they hatch.",
                "To give the number of storks counted from the plane this week.",
                "Because it turns the storks into a test: if they are nesting, the water is doing what the marsh needs it to do."
              ],
              "answer": 3,
              "hint": "Read the two very short sentences near the end of paragraph 3: this year's water, then this year's storks.",
              "skill": "Author's purpose and structure",
              "evidence": "They nest only when the water is dropping at the right speed. That crowds fish into the shrinking pools where the storks can catch them. A stork that cannot find fish gives up on its nest"
            },
            {
              "q": "The log says that from half a mile away the island 'looks covered in snow'. What is that comparison telling you?",
              "choices": [
                "The island is noticeably colder than the water and the sawgrass that surrounds it",
                "There are so many white birds on it that the branches disappear under them",
                "The leaves of the mangroves have been bleached white by the sun and the salt air",
                "The birds have not arrived on the island yet this season"
              ],
              "answer": 1,
              "hint": "The next sentence tells you what the white actually is and how much noise it makes. Snow is only lending two things here: color, and covering.",
              "skill": "Word meanings",
              "evidence": "From half a mile away the island looks covered in snow. It is birds, thousands, on every branch, with the noise of a stadium."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why the water matters to this count as much as the birds do. Why does it?",
              "choices": [
                "The count can only be made when the water is high enough to float the boat out to the pond and drop the marker for the plane crew.",
                "The plane cannot fly over the rookery during the wet season, so the whole count has to be made from a boat half a mile out instead.",
                "The birds collapsed when the canals dried up the fish, so their numbers are really a reading of how much water there is.",
                "The birds will nest only on islands that are completely surrounded by water, and the canals left too few of those islands standing."
              ],
              "answer": 2,
              "hint": "Paragraph one names two things that cut the birds down, and one of them is about water. Paragraph two says why they are coming back. Follow that thread through both.",
              "skill": "Reading between the lines",
              "evidence": "the canals came and dried up the fish, and the million became a few thousand"
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
              "q": "The ranger lays the nests out in 4 rows of 4. How many nests is that?",
              "answer": "16",
              "hint": "4 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "32 nests are set out in 8 equal rows. How many nests are in each row?",
              "answer": "4",
              "hint": "32 split into 8 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 413 birds, then 127 more are added and 60 are taken off. What does the log show now?",
              "answer": "480",
              "hint": "Add 413 and 127 first, then take 60 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 3/8 + 1/8 (write a fraction)",
              "answer": "4/8",
              "hint": "Same bottom. 3 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "The ranger plans to count 900 birds. 398 are counted and 60 more are being counted now. How many are not counted yet?",
              "answer": "442",
              "hint": "Take 398 off 900, then take 60 off that.",
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
            "example": "(3 + 2) × 9 = 45: parentheses first, then multiply."
          },
          "problems": [
            {
              "q": "The ranger paddles 8/15 of a mile in 2/3 of an hour. At that pace, how many miles is that in one hour? (write a fraction)",
              "answer": "4/5",
              "hint": "For one hour, divide the amount by the time: 8/15 ÷ 2/3 = 8/15 × 3/2. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "20% of the birds counted is 16. How many were counted in all?",
              "answer": "80",
              "hint": "16 is 20 hundredths of the whole: 16 ÷ 20 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ranger counts 8 nests and 20 birds. In its simplest form, what is the ratio of nests to birds? (write it like 2:3)",
              "answer": "2:5",
              "accept": [
                "2 to 5"
              ],
              "hint": "Divide both by 4.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ranger works out (6 + 1) × 8. What is it?",
              "answer": "56",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "The sample freezer read −7 degrees at midnight and rose 5 degrees by dawn. What does it read at dawn?",
              "answer": "-2",
              "accept": [
                "−2"
              ],
              "hint": "Start at −7 and count 5 steps up.",
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
              "A two-step equation: undo the last step first. In (x + 3) × 6 = 42, divide by 6, then take off 3."
            ],
            "example": "(x + 3) × 6 = 42, so x + 3 = 7, so x = 4."
          },
          "problems": [
            {
              "q": "The ranger has 8 minutes to spend and each water sample takes 0.5 minutes. How many samples is that enough for?",
              "answer": "16",
              "hint": "8 ÷ 0.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of birds fell by 20% to 256. What was it before?",
              "answer": "320",
              "hint": "256 is 80% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "In the dry season the water at the gauge falls 5 inches a week. Write that as −5 a week. When was it 55 inches higher than it is now? Work it out as 55 ÷ (−5), and write weeks before now as a negative number.",
              "answer": "-11",
              "accept": [
                "−11"
              ],
              "hint": "55 ÷ 5, and one minus sign makes the answer negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 5) × 7 = 49",
              "answer": "2",
              "hint": "Divide both sides by 7 first, then take 5 off.",
              "skill": "Equations"
            },
            {
              "q": "A round cover has a radius of 5 inches. Using 3.14 for pi, what is its area in square inches?",
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
            "example": "y = 4x + 6 when x = 7: 4 × 7 + 6 = 34."
          },
          "problems": [
            {
              "q": "The count of birds follows the rule y = 5x + 20, where x is the hour. What is y when x = 9?",
              "answer": "65",
              "hint": "Put 9 in for x: 5 × 9 + 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube has a volume of 216 cubic feet. How long is one edge, in feet?",
              "answer": "6",
              "hint": "Find the number n where n × n × n = 216.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope reaches the top of an 8-foot post. How far is the foot of the rope from the base, in feet?",
              "answer": "15",
              "hint": "b² = c² − a² = 289 − 64 = 225. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x + 18 − x = 42",
              "answer": "8",
              "hint": "Collect the x's first: 3x + 18 = 42.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 feet and is 5 feet deep. Using 3.14 for pi, what is its volume in cubic feet?",
              "answer": "1570",
              "hint": "Volume = 3.14 × radius × radius × depth: 3.14 × 10 × 10 × 5.",
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
          "example": "'Move closer, unless the storks are sitting.'"
        },
        "skill": "Following directions",
        "steps": [
          "Write the nests counted from the boat, in hundreds: 20.",
          "Multiply by the people counting from the plane: 2.",
          "Add the plane's height in hundreds of feet: 5.",
          "Subtract the kinds of wading bird named in the passage's first sentence about the rookery: 5.",
          "Type the result, unless the log says the wood storks are sitting on their nests, in which case type NESTING instead."
        ],
        "prompt": "Your answer:",
        "answer": "NESTING",
        "accept": [
          "nesting",
          "Nesting",
          "nesting.",
          "NESTING."
        ],
        "hint": "Work the four sums through, then read the log's line about the storks before step 5 lets you type anything."
      }
    },
    {
      "id": "glades-5",
      "title": "Florida Bay",
      "recon": {
        "lesson": {
          "title": "The whole river, in order",
          "points": [
            "The last log looks back over the five runs. A 'mostly about' question wants the big point, not one detail.",
            "Distances and counts are details.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'The trail is nine miles long and crosses four bridges.' How many bridges? Four."
        },
        "title": "Ranger's Log: Where the Grass Meets the Sea",
        "passage": [
          "The last run follows the water all the way down. The sawgrass thins, the channel widens, and the water turns from tea-brown to green and then to clear. The trees change from hammock oaks to mangroves standing on their roots in the salt like people holding up their skirts. Then the mangroves open and there is nothing ahead but Florida Bay, shallow and bright, with the Keys a smudge on the horizon. A manatee, gray and slow and the size of a sofa, rolls once beside the boat and sinks. The fresh water that left the lake a year ago arrives here, and the sea takes it.",
          "The five runs, in order, were the river's whole story. The channel: a river fifty miles wide and inches deep, moving a quarter of a mile a day. The gator count: the animal that digs the ponds that keep the dry season alive. The gauges: the canals that drained it and the repair that is sending the water south again, an inch at a time. The rookery: the birds that were a million, and are coming back. And the bay: where the fresh water meets the salt. There a fisherman in the Keys catches a fish that ate a shrimp that grew in water that fell as rain on the lake a year before.",
          "The ranger cuts the fan at the mouth of the channel and the silence comes down like a lid. A pelican folds and drops. The log's last line is the same line the park has been writing for eighty years, with one number that changes: freshwater reaching the bay, gauges up, storks nesting, gators fourteen, all well. It is home ground. The ranger grew up on this water, and the thing about home ground is that it needs someone to count it. The heron on the last marker does not move as the boat goes by."
        ],
        "questions": [
          {
            "q": "What kind of tree stands in the salt water near the bay?",
            "choices": [
              "Oaks",
              "Palms",
              "Cypress trees",
              "Mangroves"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the third sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How long ago did the water reaching the bay leave the lake?",
            "choices": [
              "A day",
              "A week",
              "A year",
              "Ten years"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'manatee'?",
            "choices": [
              "A kind of boat",
              "A large, slow, gray sea animal",
              "A bird",
              "A fish"
            ],
            "answer": 1,
            "hint": "The sentence describes it as 'gray and slow and the size of a sofa'.",
            "skill": "Word meanings"
          },
          {
            "q": "What does the log mean by 'home ground needs someone to count it'?",
            "choices": [
              "A place has to be counted before it can be home ground",
              "The five runs of the week each ended with a number that had to be written down in the log book",
              "A ranger who grew up on this water is the only person who should ever be allowed to count it",
              "A place you love still has to be measured and watched, month after month, to be kept"
            ],
            "answer": 3,
            "hint": "The last three sentences of paragraph 3, read with the gauges and counts from the week.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The Keys, lying as a smudge on the horizon beyond the bay",
              "The five runs as the river's whole story, in order",
              "The pelican folding its wings and dropping into the bay",
              "The fisherman in the Keys and the shrimp that his fish ate"
            ],
            "answer": 1,
            "hint": "Paragraph 2 lists the five runs and what each one showed.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Bay math",
          "points": [
            "Miles from lake to bay: about 100.",
            "Different bottoms: make them the same first. 1/4 + 1/2 = 1/4 + 2/4 = 3/4.",
            "Runs and hours: total time on the water.",
            "Two-step: feet in a mile, then a quarter of that."
          ],
          "example": "1/4 + 2/3 = 3/12 + 8/12 = 11/12 of the run."
        },
        "problems": [
          {
            "q": "The ranger spent 1/3 of the last run in the mangroves and 1/2 of it in open bay. How much of the run is that? (write a fraction)",
            "answer": "5/6",
            "hint": "Make the bottoms the same: 1/3 is 2/6 and 1/2 is 3/6. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "A quarter of a mile is how many feet? A mile is 5,280 feet.",
            "answer": "1320",
            "accept": [
              "1,320"
            ],
            "hint": "5,280 ÷ 4. Half is 2,640, half again.",
            "skill": "Dividing"
          },
          {
            "q": "The five runs took 3, 2, 2, 4 and 5 hours. How many hours on the water?",
            "answer": "16",
            "hint": "3 + 2 + 2 + 4 + 5.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The park has written the same last line for 80 years, once a month. How many times is that?",
            "answer": "960",
            "hint": "80 × 12.",
            "skill": "Multiplying"
          },
          {
            "q": "The lake is about 100 miles from the bay. If a leaf takes a year, how many miles a month is that, rounded down?",
            "answer": "8",
            "hint": "100 ÷ 12 is 8 with 4 left over.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Join the two paragraphs",
            "points": [
              "The last question needs a fact from one paragraph and a fact from another. Neither one answers it alone.",
              "Say the two facts, then say 'so'. Whatever comes after 'so' is the answer you are hunting for.",
              "If a choice needs something the log never mentions, it is out, however sensible it sounds by itself."
            ],
            "example": "Paragraph one: the pond is fed by one spring. Paragraph three: the spring stopped in July. So the pond is on its way down. Neither line says that alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "A manatee rolled once beside the boat and then sank out of sight.",
                "Everything in nature is connected to everything else somehow.",
                "The fresh water stops at the mangroves and never reaches the bay, so the water in Florida Bay is all salt that came in off the open sea.",
                "The last run shows the system joined up end to end: one year of water, one chain of life, and a log line kept for eighty years."
              ],
              "answer": 3,
              "hint": "A journey that ends in salt water, a list of the five runs, and a line the park has been writing for eighty years. Ask what those three add up to.",
              "skill": "Central idea and evidence",
              "evidence": "The five runs, in order, were the river's whole story."
            },
            {
              "q": "Claim: rain that falls on the lake eventually shows up in what a fisherman catches. Which sentence from the log best supports that claim?",
              "choices": [
                "The log's last line is the same line the park has been writing for eighty years, with one number that changes: freshwater reaching the bay, gauges up, storks nesting, gators fourteen, all well.",
                "The five runs, in order, were the river's whole story.",
                "There a fisherman in the Keys catches a fish that ate a shrimp that grew in water that fell as rain on the lake a year before.",
                "The channel: a river fifty miles wide and inches deep, moving a quarter of a mile a day."
              ],
              "answer": 2,
              "hint": "The claim runs from rain all the way to a fish on a line. Only one sentence follows that whole chain without a break in it.",
              "skill": "Finding details",
              "evidence": "There a fisherman in the Keys catches a fish that ate a shrimp that grew in water that fell as rain on the lake a year before."
            },
            {
              "q": "Why does the second paragraph list all five runs in order?",
              "choices": [
                "To give directions for anybody repeating the runs next month.",
                "To show that five separate days were really one story about where the water goes.",
                "To explain which of the five runs took the ranger the longest.",
                "To list the animals that were seen on each of the five days."
              ],
              "answer": 1,
              "hint": "Nothing in that paragraph is new; every run in it has already happened. Read its opening sentence and ask what the list is building.",
              "skill": "Author's purpose and structure",
              "evidence": "The five runs, in order, were the river's whole story."
            },
            {
              "q": "The log says the silence 'comes down like a lid' when the fan is cut. What is that comparison telling you?",
              "choices": [
                "The boat has been covered over and tied up at the dock for the night",
                "The engine has broken down without any warning",
                "The sound of the birds along the channel becomes louder than it was before",
                "The noise stops all at once and the quiet closes over everything"
              ],
              "answer": 3,
              "hint": "A lid does not arrive gradually. Think about what a lid does to whatever is under it, then read what had been making the noise a moment before.",
              "skill": "Word meanings",
              "evidence": "The ranger cuts the fan at the mouth of the channel and the silence comes down like a lid."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the last line of the log has stayed the same for eighty years with only one number changing. Why keep the wording?",
              "choices": [
                "The park has no room in its logbook for anything longer than a single line, so the wording has had to stay exactly as it is now.",
                "Written the same way each year, the line lets one year be set beside another, which is the whole point of counting a place.",
                "Rangers are not permitted to alter any wording the park has used before, and this last line of the log was fixed eighty years ago.",
                "The five runs are always carried out in exactly the same week of the year, so the same words will fit whatever the ranger finds."
              ],
              "answer": 1,
              "hint": "Paragraph two shows what the five runs are when they are put together. Paragraph three tells you the line has not changed in eighty years, and ends on why the place needs counting.",
              "skill": "Reading between the lines",
              "evidence": "the thing about home ground is that it needs someone to count it"
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
              "Fractions: the bottom is how many equal parts; the top is how many are done."
            ],
            "example": "4 × 6 = 24."
          },
          "problems": [
            {
              "q": "The ranger checks 7 bays and boats 5 miles in each. How many miles is that?",
              "answer": "35",
              "hint": "7 groups of 5, so 7 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "The ranger splits 70 miles in half. How many miles is one half?",
              "answer": "35",
              "hint": "Half of 70.",
              "skill": "Dividing"
            },
            {
              "q": "The ranger wants to count 900 wading birds and has counted 620. How many more are needed?",
              "answer": "280",
              "hint": "900 − 620.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 4 equal parts and the ranger has finished 2 of them. What fraction is done? (write a fraction)",
              "answer": "2/4",
              "hint": "2 parts out of 4.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 9 squares wide and 4 squares long. The ranger has covered 9 squares. How many squares are left to cover?",
              "answer": "27",
              "hint": "9 × 4 squares in all, then take 9 off.",
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
            "example": "5 × 7 − 3 × 4 = 23: both multiplications first, then subtract."
          },
          "problems": [
            {
              "q": "The plan allows 50.25 hours. The ranger uses 8.4 hours on the first run and 12.65 on the second. How many hours are left?",
              "answer": "29.2",
              "hint": "Add the two amounts used first, then take that from 50.25. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "The ranger listed 60 manatees, but 10% were counted twice and are struck off the list. How many are left on it?",
              "answer": "54",
              "hint": "10% of 60 is 6. Take that off 60.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ranger shares 48 runs between two teams in the ratio 3 to 5. How many does the smaller share get?",
              "answer": "18",
              "hint": "3 + 5 = 8 parts. 48 ÷ 8 = 6 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ranger works out 6 × 6 − 2 × 2. What is it?",
              "answer": "32",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "The sample freezer's coldest reading was −16 degrees and its warmest was −6 degrees. How many degrees apart are they?",
              "answer": "10",
              "hint": "From −16 up to −6.",
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
              "A two-step equation: undo the outside step first. In 3(x + 2) = 27, divide by 3, then take off 2."
            ],
            "example": "3(x + 2) = 27, so x + 2 = 9, so x = 7."
          },
          "problems": [
            {
              "q": "12 water samples took 15 minutes. At the same rate, how many minutes would 16 samples take?",
              "answer": "20",
              "hint": "One sample takes 15 ÷ 12 = 1.25 minutes. Then × 16.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Last winter 240 manatees were counted. This winter the count grew by 25%. How many more manatees is that?",
              "answer": "60",
              "hint": "25% of 240: 25/100 × 240.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The lowest water gauge reading was −11 inches and the highest was 12 inches. How many inches apart are they?",
              "answer": "23",
              "hint": "11 below zero plus 12 above zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 4(x + 21) = 100",
              "answer": "4",
              "hint": "Divide both sides by 4 to get x + 21 = 25.",
              "skill": "Equations"
            },
            {
              "q": "On the map, 3 inches stands for 6 feet. How many feet does 1 inch stand for?",
              "answer": "2",
              "hint": "6 ÷ 3.",
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
            "example": "Start at 4 and add 5 each step: the 6th number is 4 + 5 × 5 = 29."
          },
          "problems": [
            {
              "q": "The count of manatees goes 10, 13, 16, 19, and on. What is the 10th number in the list?",
              "answer": "37",
              "hint": "It starts at 10 and adds 3 each step. The number you want is 9 steps on from 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (7 × 5)²?",
              "answer": "1225",
              "hint": "7 × 5 = 35 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 12 and 35 feet. How long is its longest side, in feet?",
              "answer": "37",
              "hint": "12² + 35² = 1369. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x − 2x = 8",
              "answer": "4",
              "hint": "4 − 2 = 2, so 2x = 8.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 10 × 10^3 or 9 × 10^4? Write the bigger one out in full.",
              "answer": "90000",
              "hint": "10 × 10^3 is the same as 1 × 10^4, or 10,000. Now write out 9 × 10^4 and compare.",
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
          "Write the gators in the log's last line: 14.",
          "Multiply by the number of runs: 5.",
          "Add the miles of run one, dock to the first gauge: 9.",
          "Ignore step 3. Run one's nine miles belong in run one's log, so take away the width of the river of grass in miles instead: 50.",
          "Type what remains."
        ],
        "prompt": "Your answer:",
        "answer": "20",
        "hint": "Step 4 puts run one's nine miles back where they came from. Work from your step 2 total and take the river's width off that."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
