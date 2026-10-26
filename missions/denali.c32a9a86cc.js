// ODYSSEY — campaign "denali". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "denali",
  "kind": "climb",
  "readingLevel": {
    "fk": 6.0,
    "cl": 6.5
  },
  "grade": "5",
  "kindLabel": "Expedition",
  "form": "husky",
  "title": "Denali",
  "subtitle": "The High One, Alaska Range",
  "pitch": "The big one. Five camps from the glacier to 20,310 feet. Thin air, big storms, and the longest missions yet.",
  "scene": "assets/scene-denali.jpg",
  "waypoints": [
    [
      330,
      810
    ],
    [
      390,
      640
    ],
    [
      450,
      470
    ],
    [
      560,
      330
    ],
    [
      690,
      210
    ],
    [
      860,
      85
    ]
  ],
  "progress": {
    "unit": "ft",
    "total": 20310
  },
  "dayNoun": "Mission",
  "stageNoun": "Camp",
  "finalNoun": "Summit",
  "stages": [
    "Camp 1",
    "Camp 2",
    "Camp 3",
    "High camp",
    "Summit"
  ],
  "reconNoun": "Field Report",
  "legs": {
    "recon": "Recon",
    "nav": "Navigation",
    "orders": "Orders",
    "debrief": "Debrief"
  },
  "fact": "About half the people who try Denali each year make it to the top. The weather decides.",
  "finale": {
    "prompt": "Summit. Hold up the flag for the photo. Which color flies from the top of North America?",
    "options": [
      {
        "label": "Red",
        "color": "#FF5252"
      },
      {
        "label": "Amber",
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
    "done": "Photo taken, flag packed. Now we go down. Down is the hard part."
  },
  "patrols": [
    {
      "id": "denali-1",
      "title": "The Glacier Landing",
      "recon": {
        "lesson": {
          "title": "Reading a climber's report",
          "points": [
            "Read the five questions first. Two details, one word, one why, one 'mostly about'.",
            "Mountain words are often explained right after they appear, after a comma and 'which is' or 'which are'.",
            "'Why do climbers' questions: the report shows what would go wrong the other way."
          ],
          "example": "If a sign says 'Stay on the path, the cliff edge crumbles', it is telling you why hikers stay on the path, even without the word 'because'."
        },
        "title": "Field Report: The Glacier Landing",
        "passage": [
          "Nobody walks to Denali. The mountain sits in the middle of Alaska with no road within a day's march, so climbers fly in from the town of Talkeetna in small planes fitted with skis instead of wheels. The pilot circles once, drops onto the Kahiltna Glacier, and slides to a stop on the snow at about seven thousand two hundred feet. That is base camp: a scatter of tents on a river of ice, with the mountain rising two and a half miles straight up above it. Going home works the same way, in reverse, and only when the weather allows the plane to come.",
          "The glacier looks flat and it is not safe. Under the snow it is cracked from side to side with crevasses, which are deep splits in the ice, some wide enough to swallow a truck and hidden by a thin snow roof. The roof looks exactly like the ground around it. So before anyone takes a step away from camp, they rope up: three or four climbers tied to one long rope, spaced fifty feet apart. That way, if one falls through a snow roof, the others can dig in and hold. The rope is the first rule of the mountain and the last thing anyone unties.",
          "Everything a team will need for three weeks comes in on the plane and goes up on their backs and on sleds: tents, stoves, fuel, food, and the wands. The wands are thin bamboo stakes with flags that get planted every fifty paces to mark the route back. In a storm the mountain erases every footprint in an hour. The wands are how you find camp again. Old hands plant them without being told. New climbers learn why the first time the cloud comes down."
        ],
        "questions": [
          {
            "q": "How do climbers get to base camp on Denali?",
            "choices": [
              "They walk from a road",
              "They fly in on small planes with skis and land on the glacier",
              "They take a train",
              "They are dropped onto the glacier by a helicopter out of Talkeetna"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentences about Talkeetna and the planes.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'crevasse'?",
            "choices": [
              "A deep split in the ice, often hidden by a thin snow roof",
              "A tent pitched on the glacier at about seven thousand two hundred feet",
              "The long rope that ties three or four climbers together on the ice",
              "A thin bamboo stake with a flag on it, planted every fifty paces"
            ],
            "answer": 0,
            "hint": "The sentence that begins 'Under the snow it is cracked'.",
            "skill": "Word meanings"
          },
          {
            "q": "How far apart are climbers spaced on the rope?",
            "choices": [
              "A foot",
              "Fifty feet",
              "A mile",
              "A yard"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence that starts 'So before anyone'.",
            "skill": "Finding details"
          },
          {
            "q": "Why do climbers plant wands every fifty paces?",
            "choices": [
              "To mark where the crevasses are hidden under the snow",
              "Because the park requires it",
              "So they can find the route back after a storm erases every footprint",
              "So the pilot can spot the route from the air"
            ],
            "answer": 2,
            "hint": "Paragraph 3, the sentences about storms and footprints.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How flat and safe the glacier looks from camp",
              "Why the glacier is dangerous and how the rope protects the team",
              "How wide a crevasse would have to be before it could swallow a truck",
              "How to tie all of the knots that hold a rope team together on the ice"
            ],
            "answer": 1,
            "hint": "Paragraph 2 starts with the danger and ends with the rope. Which answer has both?",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Elevations and rope teams",
          "points": [
            "Subtracting big numbers: line up the place values. 14,520 − 3,100 = 11,420.",
            "Weeks to days: multiply by 7. Two weeks is 2 × 7 = 14 days.",
            "Five tents in a row, 20 feet apart: 4 gaps, so 4 × 20 = 80 feet.",
            "Same bottom: 1/6 + 4/6 = 5/6."
          ],
          "example": "96 stakes shared equally among 4 tents: 96 ÷ 4 = 24 stakes each."
        },
        "problems": [
          {
            "q": "The summit is 20,310 feet. Base camp is at 7,200 feet. How many feet of climbing is that?",
            "answer": "13110",
            "hint": "20,310 − 7,200. Line up the place values.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "A Denali climb takes about 3 weeks. How many days is that?",
            "answer": "21",
            "hint": "3 × 7.",
            "skill": "Multiplying"
          },
          {
            "q": "Four climbers on one rope are spaced 50 feet apart. How many feet from the first climber to the last?",
            "answer": "150",
            "hint": "Four climbers have three gaps between them. 3 × 50.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The team planted wands along 2/8 of the route on day one and 3/8 on day two. How much of the route is marked? (write a fraction)",
            "answer": "5/8",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The team has 105 tent stakes, shared equally among 5 tents. How many stakes does each tent get?",
            "answer": "21",
            "hint": "105 ÷ 5.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The idea underneath",
            "points": [
              "The central idea runs through every paragraph. Label each one in four words, then find the choice that all three labels serve.",
              "The wrong answers are usually true. They cover a single paragraph, or they are a big statement the report never actually makes.",
              "Then four other moves: prove a claim with one line, name what a paragraph is for, work a word out from its sentence, and put two paragraphs together."
            ],
            "example": "Three paragraphs about a harbor: the tide, what the boats do about it, what the town eats in March. 'The tide runs out at noon' covers one paragraph. 'The sea is unpredictable' covers nothing said. 'The tide sets the whole year' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Base camp sits at about seven thousand two hundred feet on the Kahiltna Glacier, a scatter of tents on a river of ice where the ski planes from Talkeetna land.",
                "From the flight in to the last wand, everything at base camp is a way of coping with a place that has no road, no solid ground and no landmarks.",
                "Flying is the safest way to reach any mountain.",
                "The glacier around base camp is flat and safe to walk on."
              ],
              "answer": 1,
              "hint": "The plane, the rope, the wands. Ask what all three are answers to, and cross off the choice the second paragraph denies in its first sentence.",
              "skill": "Central idea and evidence",
              "evidence": "The glacier looks flat and it is not safe."
            },
            {
              "q": "Claim: the real danger of the glacier is that it hides itself. Which sentence from the report best supports that claim?",
              "choices": [
                "Under the snow it is cracked from side to side with crevasses, which are deep splits in the ice, some wide enough to swallow a truck and hidden by a thin snow roof.",
                "The mountain sits in the middle of Alaska with no road within a day's march, so climbers fly in from the town of Talkeetna in small planes fitted with skis instead of wheels.",
                "So before anyone takes a step away from camp, they rope up: three or four climbers tied to one long rope, spaced fifty feet apart.",
                "The rope is the first rule of the mountain and the last thing anyone unties."
              ],
              "answer": 0,
              "hint": "Two of these are about what climbers do in reply to the danger. The claim is about the danger itself. Find the sentence about what the danger looks like.",
              "skill": "Finding details",
              "evidence": "Under the snow it is cracked from side to side with crevasses, which are deep splits in the ice, some wide enough to swallow a truck and hidden by a thin snow roof."
            },
            {
              "q": "Why does the report put the wands at the end of a list of tents, stoves, fuel and food, and then keep writing about them?",
              "choices": [
                "It explains how bamboo is cut and shaped into stakes.",
                "It slips a small item in among the obvious ones, then shows it matters as much as any of them.",
                "It compares today's gear with the gear teams carried in 1913.",
                "It lists the loads in the order they come off the plane."
              ],
              "answer": 1,
              "hint": "Count the sentences given to tents and stoves, then count the ones given to the wands. A writer spends words on what matters.",
              "skill": "Author's purpose and structure",
              "evidence": "The wands are how you find camp again."
            },
            {
              "q": "The report says some crevasses are 'wide enough to swallow a truck'. What does swallow mean as it is used here?",
              "choices": [
                "Eat something the way a living animal does",
                "Cover something over with a layer of fresh snow",
                "Take something in whole, so that nothing of it shows",
                "Carry something slowly downhill inside the ice"
              ],
              "answer": 2,
              "hint": "Nothing on a glacier eats. Take the picture the word gives you, keep the part about disappearing, and drop the part about a mouth.",
              "skill": "Word meanings",
              "evidence": "Under the snow it is cracked from side to side with crevasses, which are deep splits in the ice, some wide enough to swallow a truck and hidden by a thin snow roof."
            },
            {
              "q": "Paragraphs 2 and 3 together show that the rope and the wands are answers to the same problem. What problem?",
              "choices": [
                "Both are ways of carrying more weight up a gentle eleven-mile slope, so that three weeks of tents, stoves, fuel and food move in one trip.",
                "Neither the cracks underfoot nor the way back can be seen when they matter, so climbers tie and mark what their eyes cannot check.",
                "Both are ways of keeping a team warm through a long storm.",
                "Both are rules for the climb high above base camp, and neither one matters while a team is still among the tents pitched on the glacier below."
              ],
              "answer": 1,
              "hint": "Paragraph two is about something hidden under the snow. Paragraph three is about something erased by a storm. Say what those two have in common in one word.",
              "skill": "Reading between the lines",
              "evidence": "In a storm the mountain erases every footprint in an hour."
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
              "Taking away: subtract the ones, then the tens, then the hundreds. Borrow when the top digit is too small. 253 − 48 = 205.",
              "A whole is all the parts: 5/5. To find what is left, take the done part off: 5/5 − 2/5 = 3/5."
            ],
            "example": "A tent floor 3 squares wide and 5 squares long is 3 rows of 5: 3 × 5 = 15 squares."
          },
          "problems": [
            {
              "q": "The team saw 6 climbers at base camp yesterday and three times as many today. How many climbers today?",
              "answer": "18",
              "hint": "Three times 6: 6 + 6 + 6.",
              "skill": "Multiplying"
            },
            {
              "q": "The rangers tie 24 climbers onto ropes, 4 to a rope. How many ropes is that?",
              "answer": "6",
              "hint": "How many 4s make 24?",
              "skill": "Dividing"
            },
            {
              "q": "The team starts with 342 wands and uses 76. How many are left?",
              "answer": "266",
              "hint": "342 − 76.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "2/4 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "2/4",
              "hint": "The whole job is 4/4. Take 2/4 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square tent floor is 6 squares on each side. How many squares is that?",
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
              "Percent: write the part over the whole, then make it out of 100. 14 out of 70 is 1/5, or 20 out of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "From 8 degrees down to −3 degrees: 8 down to 0 is 8, then 3 more, so it fell 11 degrees."
          },
          "problems": [
            {
              "q": "Each meal bag weighs 2.45 pounds. How many pounds do 9 meal bags weigh?",
              "answer": "22.05",
              "hint": "Split it: 9 × 2 plus 9 × 0.45.",
              "skill": "Decimals"
            },
            {
              "q": "30 of the 120 wands are set aside. What percent is that? (write just the number)",
              "answer": "25",
              "accept": [
                "25%"
              ],
              "hint": "30 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 3 rope teams there are 5 wands. There are 40 wands. How many rope teams?",
              "answer": "24",
              "hint": "40 ÷ 5 = 8 groups. Each group has 3 rope teams.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out 4 + 7 × 7. What is it?",
              "answer": "53",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the thermometer read 5 degrees. By dark it had fallen to −10 degrees. By how many degrees did it fall?",
              "answer": "15",
              "hint": "From 5 down to 0 is 5, then 10 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate times how many gives the total: 0.75 pounds each for 12 sleds is 12 × 0.75 = 9 pounds.",
              "Percent change: the change divided by the starting number, then out of 100. From 60 to 75 is a change of 15, and 15 out of 60 is 25%.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "70 − 5x = 25, so 5x = 70 − 25 = 45, so x = 9."
          },
          "problems": [
            {
              "q": "Each sled carries a 0.5-pound repair kit. How many pounds of repair kits do 8 sleds carry?",
              "answer": "4",
              "hint": "8 × 0.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team counted 320 wands on the first pass and 480 on the second. By what percent did the count change? (write just the number)",
              "answer": "50",
              "accept": [
                "50%"
              ],
              "hint": "The change is 160. 160 out of 320, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer read −16 degrees at dawn and −34 degrees at dark. How many degrees did it fall?",
              "answer": "18",
              "hint": "From −16 down to −34.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 59 − 8x = 11",
              "answer": "6",
              "hint": "Move 8x to the right and 11 to the left: 8x = 48.",
              "skill": "Equations"
            },
            {
              "q": "On the map, 1 inch stands for 8 feet. The fixed line is really 64 feet long. How many inches is it on the map?",
              "answer": "8",
              "hint": "64 ÷ 8.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "Powers: 4³ means 4 × 4 × 4 = 64. For 10 to a power, the power counts the zeros: 80,000 is 8 × 10^4.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "A tank starts with 50 liters and drains 4 liters an hour: y = 50 − 4x. After 10 hours, y = 50 − 40 = 10."
          },
          "problems": [
            {
              "q": "The team starts with 72 wands and uses 8 every hour. How many are left after 6 hours?",
              "answer": "24",
              "hint": "8 × 6 = 48 used, taken off 72.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 7 small cubes along every edge. How many small cubes make it up?",
              "answer": "343",
              "hint": "7³ means 7 × 7 × 7.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 13-foot rope runs from the top of a pole to a point 12 feet away on the snow. How tall is the pole, in feet?",
              "answer": "5",
              "hint": "a² = c² − b² = 169 − 144 = 25. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x = x + 36",
              "answer": "9",
              "hint": "Take x off both sides: 4x = 36. Then divide by 4.",
              "skill": "Equations"
            },
            {
              "q": "The team counts 3,000 wands. Written as 3 × 10 to a power, what is the power?",
              "answer": "3",
              "hint": "Count the zeros after 3.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "The rope rule",
          "points": [
            "Do the steps in order and write the running number.",
            "A condition can only be checked after you have the number. Read to the end first."
          ],
          "example": "3 climbers plus 1 guide is 4 on the rope. Four is not more than 4, so nothing changes."
        },
        "skill": "Following directions",
        "steps": [
          "Tie 3 climbers onto the rope.",
          "Add 1 guide to the same rope.",
          "Count everyone on the rope, then double the number for the second rope team following your track.",
          "Throw step 3 away. The second team stayed at base camp, so nothing on the glacier gets doubled.",
          "Add the 2 sleds the team is hauling behind them.",
          "Type how many people and sleds are on the first rope."
        ],
        "prompt": "People and sleds:",
        "answer": "6",
        "hint": "Count the climbers and the guide first. Step 4 cancels the doubling, so work on from the number you had before step 3."
      }
    },
    {
      "id": "denali-2",
      "title": "The Haul",
      "recon": {
        "lesson": {
          "title": "Why go down to go up",
          "points": [
            "Some words are explained in the same sentence, right after a comma. Read the words that follow a new word.",
            "When a report describes something that seems backwards, the why is nearby: what would happen without it?"
          ],
          "example": "Waiting to cut a cake sounds slow, until you read that a hot cake falls apart. The why is what goes wrong without it."
        },
        "title": "Field Report: The Haul",
        "passage": [
          "In 1913 the first team to reach the top of Denali started with dog sleds. Two teams of dogs hauled a winter's worth of food and gear up the lower glaciers while the men walked beside them. The dogs went home with a handler when the ice got too steep to pull. Modern climbers have no dogs. They are the dogs. Each one hauls a plastic sled tied to their waist with sixty pounds in it, plus a pack on their back, and the glacier is not flat: it climbs, gently, for eleven miles.",
          "You do not carry everything at once. A team climbs to the next camp with half its gear and buries it in the snow in a cache, which is a stash of supplies marked with a wand and left to collect later. Then the team walks back down to sleep at the lower camp. The next day they move up for good, dig up the cache, and repeat the whole thing above. It sounds like doing everything twice. It is doing everything twice. There is a reason.",
          "The reason is the air. Above ten thousand feet there is less oxygen in every breath, and a body carried up too fast gets headaches, loses its appetite, and in bad cases fills its own lungs with fluid. The cure is time and going down. So climbers follow a rule that every guide repeats until it is boring: climb high, sleep low. Carry up, come back, sleep, then move. The team that hurries is the team the rangers meet on the way down."
        ],
        "questions": [
          {
            "q": "What did the 1913 team use to haul their gear on the lower glaciers?",
            "choices": [
              "Mules",
              "Dog sleds",
              "Skis",
              "A team of packhorses"
            ],
            "answer": 1,
            "hint": "First sentences of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'cache'?",
            "choices": [
              "The tent a team sleeps in at the lower camp",
              "The plastic sled a climber tows with sixty pounds in it",
              "A stash of supplies buried in the snow, marked with a wand, to collect later",
              "The next camp up the glacier, marked with a wand"
            ],
            "answer": 2,
            "hint": "The sentence with 'which is'.",
            "skill": "Word meanings"
          },
          {
            "q": "What is the guides' rule, repeated until it is boring?",
            "choices": [
              "Climb fast, and rest never",
              "Carry everything up at once",
              "Climb high, sleep low",
              "Sleep up high, then climb low"
            ],
            "answer": 2,
            "hint": "Paragraph 3, the sentence about the rule.",
            "skill": "Finding details"
          },
          {
            "q": "Why do climbers carry a load up and then walk back down to sleep?",
            "choices": [
              "So their bodies have time to adjust to the thin air instead of getting sick",
              "So they get more exercise before the hardest part",
              "Because the upper camp is full until the team above moves on",
              "Because a loaded sled cannot be hauled up and down in one day"
            ],
            "answer": 0,
            "hint": "Paragraph 3 explains what thin air does and what the cure is.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How heavy a sled is",
              "The carry-and-cache method of moving up the mountain in two trips",
              "The 1913 dogs",
              "How long the glacier is, how gently it climbs, and how far the sleds go"
            ],
            "answer": 1,
            "hint": "Paragraph 2 describes a method step by step. Which answer names the method?",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Loads and camps",
          "points": [
            "Equal loads: 5 packs at 30 pounds each is 30 × 5 = 150 pounds.",
            "A fraction times a whole number: 5 × 3/4 is five 3/4s, which is 15/4.",
            "Sharing equally is dividing: 63 pounds among 9 climbers is 63 ÷ 9 = 7 pounds each.",
            "Same bottom: 8/9 − 3/9 = 5/9."
          ],
          "example": "Each of 3 hikers carries a 20-pound pack and a 5-pound bag: 20 + 5 = 25 for one, then 25 × 3 = 75 pounds."
        },
        "problems": [
          {
            "q": "Each of 4 climbers hauls a sled with 60 pounds in it. How many pounds of gear are on the sleds?",
            "answer": "240",
            "hint": "60 × 4.",
            "skill": "Multiplying"
          },
          {
            "q": "Each climber eats 2/3 of a pound of chocolate a day. How many pounds does one climber eat in 6 days?",
            "answer": "4",
            "hint": "Six 2/3s is 12/3. Three thirds make one pound.",
            "skill": "Fractions"
          },
          {
            "q": "The team's food weighs 96 pounds, shared equally among 4 climbers. How many pounds does each carry?",
            "answer": "24",
            "hint": "96 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "The team carried 6/10 of the gear up to the upper camp on day one, then carried 2/10 of all the gear back down. How much of the gear is at the upper camp now? (write a fraction)",
            "answer": "4/10",
            "hint": "Same bottom. Subtract the tops. 4/10 or 2/5 both count.",
            "accept": [
              "2/5"
            ],
            "skill": "Fractions"
          },
          {
            "q": "Each of the 4 climbers hauls a 60-pound sled and carries a 35-pound pack. How many pounds is the team moving in all?",
            "answer": "380",
            "hint": "60 + 35 = 95 for one climber. Then 95 × 4.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Which sentence does the work",
            "points": [
              "A supporting sentence has to settle the claim on its own. Read the claim, read your pick, and ask whether anyone could still argue.",
              "Every choice is a real sentence from the report, so true is not the test. Proof is the test.",
              "Watch for a sentence that shares a word with the claim and proves none of it. That is the usual trap."
            ],
            "example": "Claim: the load is heavier than it looks. 'The sled is plastic' is true and proves nothing. 'There are sixty pounds in it, plus a pack' is proof."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "Each climber hauls a plastic sled with sixty pounds in it.",
                "The climb is deliberately done twice over, because the only thing that lets a body handle the height is time.",
                "Modern equipment has made every mountain easier to climb.",
                "The first team in 1913 climbed the lower glaciers without any animals, hauling a winter's worth of food and gear themselves."
              ],
              "answer": 1,
              "hint": "The dogs, the doubled carry, and the air. Ask which choice needs all three paragraphs, and cross off the one the first paragraph contradicts.",
              "skill": "Central idea and evidence",
              "evidence": "The reason is the air."
            },
            {
              "q": "Claim: going up too fast can do more to a climber than make them uncomfortable. Which sentence from the report best supports that claim?",
              "choices": [
                "Each one hauls a plastic sled tied to their waist with sixty pounds in it, plus a pack on their back, and the glacier is not flat: it climbs, gently, for eleven miles.",
                "The cure is time and going down.",
                "Above ten thousand feet there is less oxygen in every breath, and a body carried up too fast gets headaches, loses its appetite, and in bad cases fills its own lungs with fluid.",
                "So climbers follow a rule that every guide repeats until it is boring: climb high, sleep low."
              ],
              "answer": 2,
              "hint": "A cure tells you there is a problem without saying how bad it gets. Find the sentence whose list ends somewhere far worse than a headache.",
              "skill": "Finding details",
              "evidence": "Above ten thousand feet there is less oxygen in every breath, and a body carried up too fast gets headaches, loses its appetite, and in bad cases fills its own lungs with fluid."
            },
            {
              "q": "Why does the report open in 1913 with two teams of dogs?",
              "choices": [
                "It explains why dogs are no longer allowed anywhere on the mountain, and what became of the two teams that hauled in 1913.",
                "It compares two different routes up the lower glaciers, the one the dog teams took in 1913 and the one climbers haul their sleds along today.",
                "It puts a picture of who used to do the hauling in your head, so that four words about modern climbers land hard.",
                "It lists the supplies a winter on the ice would need, from the food and gear the dogs hauled to the sleds and packs a modern team carries."
              ],
              "answer": 2,
              "hint": "Read the two short sentences that end the first paragraph's turn to the present day. They only work because of what came before them.",
              "skill": "Author's purpose and structure",
              "evidence": "Modern climbers have no dogs."
            },
            {
              "q": "The report says of modern climbers: 'They are the dogs.' What does that sentence mean as it is used here?",
              "choices": [
                "The climbers now do the hauling that the dog teams used to do",
                "The climbers travel with dogs on the lower glacier",
                "The climbers get as tired as the dogs used to get",
                "The climbers move on all fours over the steepest ice"
              ],
              "answer": 0,
              "hint": "Three words cannot be literal. Read the sentence straight after it, about a sled tied to a waist, and let it tell you what the short sentence meant.",
              "skill": "Word meanings",
              "evidence": "Each one hauls a plastic sled tied to their waist with sixty pounds in it, plus a pack on their back, and the glacier is not flat: it climbs, gently, for eleven miles."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why carrying half the gear up and then walking back down is not wasted effort. Why is it not?",
              "choices": [
                "The extra trip means a lighter sled on the steepest part of the glacier, because the sixty pounds gets split into two loads instead of one heavy one.",
                "The extra trip is how a team climbs high and sleeps low, and time at each height is the only thing that helps a body cope with the air.",
                "The extra trip is how the route above camp gets marked with wands.",
                "The extra trip lets the team check that the cache is still buried."
              ],
              "answer": 1,
              "hint": "Paragraph two describes the doubled work and says there is a reason. Paragraph three gives the reason but not the shape of the work. Put the two halves together.",
              "skill": "Reading between the lines",
              "evidence": "So climbers follow a rule that every guide repeats until it is boring: climb high, sleep low."
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
              "Add and take away in order: 210 + 35 = 245, then 245 − 20 = 225.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "27 cups set out in 3 equal rows: 3 × 9 = 27, so each row has 9."
          },
          "problems": [
            {
              "q": "The team lays the food bags out in 2 rows of 8. How many bags is that?",
              "answer": "16",
              "hint": "2 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "56 pounds of food are set out in 7 equal rows. How many pounds of food are in each row?",
              "answer": "8",
              "hint": "56 split into 7 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 295 loads, then 143 more are added and 86 are taken off. What does the log show now?",
              "answer": "352",
              "hint": "Add 295 and 143 first, then take 86 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 1/4 + 1/4 (write a fraction)",
              "answer": "2/4",
              "hint": "Same bottom. 1 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "The plan calls for 700 loads. 261 are done and 86 more are under way. How many are still untouched?",
              "answer": "353",
              "hint": "Take 261 off 700, then take 86 off that.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Dividing by a fraction: 3 ÷ 1/5 asks how many fifths fit in 3. Each whole holds 5, so 3 × 5 = 15.",
              "Finding the whole: if 10% of a number is 7, the whole is 7 × 10 = 70.",
              "To simplify a ratio, divide both numbers by the biggest number that goes into both: 10:25 is 2:5.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "It is −5 degrees and warms up 9 degrees: count up 5 steps to 0, then 4 more, so it reads 4 degrees."
          },
          "problems": [
            {
              "q": "The team has 3 pounds of trail mix. Each snack bag holds 1/4 of a pound. How many snack bags can the team fill?",
              "answer": "12",
              "hint": "Dividing by 1/4 is the same as multiplying by 4: 3 × 4.",
              "skill": "Fractions"
            },
            {
              "q": "50% of the loads counted is 100. How many were counted in all?",
              "answer": "200",
              "hint": "100 is 50 hundredths of the whole: 100 ÷ 50 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team counts 12 sleds and 16 loads. In its simplest form, what is the ratio of sleds to loads? (write it like 2:3)",
              "answer": "3:4",
              "accept": [
                "3 to 4"
              ],
              "hint": "Divide both by 4.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out (8 + 2) × 6. What is it?",
              "answer": "60",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "It was −10 degrees at midnight and rose 12 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "2",
              "hint": "Start at −10 and count 12 steps up.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: the total divided by the size of one. 15 pounds in 1.25-pound bags is 15 ÷ 1.25 = 12 bags.",
              "Undoing a percent change: after a 25% rise, the new number is 125% of the old one. If 125% is 50, the old number is 50 ÷ 1.25 = 40.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "With parentheses, undo the outside first: in (x + 3) × 4 = 32, divide by 4 to get x + 3 = 8, so x = 5."
            ],
            "example": "A round mat has a radius of 2 feet. Area = 3.14 × 2 × 2 = 12.56 square feet."
          },
          "problems": [
            {
              "q": "The team has 45 pounds of fuel to load, and each sled gets 2.25 pounds. How many sleds can be loaded?",
              "answer": "20",
              "hint": "45 ÷ 2.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of loads rose by 20% to 240. What was it before?",
              "answer": "200",
              "hint": "240 is 120% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer falls 5 degrees every hour for 8 hours. What is the total change? (Write a fall as a negative number.)",
              "answer": "-40",
              "accept": [
                "−40"
              ],
              "hint": "8 hours of −5 each: 8 × (−5). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 24) × 6 = 186",
              "answer": "7",
              "hint": "Divide both sides by 6 first, then take 24 off.",
              "skill": "Equations"
            },
            {
              "q": "A round plate has a radius of 10 inches. Using 3.14 for pi, what is its area in square inches?",
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
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A cube root undoes cubing. If a cube has volume 1,000, its edge is 10, since 10 × 10 × 10 = 1,000.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first, even when they are on the same side: 8x − 5x = 3x. Then deal with the plain numbers."
            ],
            "example": "The rule y = 7x + 2 at x = 8: 7 × 8 + 2 = 58."
          },
          "problems": [
            {
              "q": "The count of loads follows the rule y = 6x + 15, where x is the hour. What is y when x = 9?",
              "answer": "69",
              "hint": "Put 9 in for x: 6 × 9 + 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube of packed snow has a volume of 2,744 cubic feet. How long is one edge, in feet?",
              "answer": "14",
              "hint": "What number × itself × itself makes 2,744? Try numbers in the teens.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 5-foot rope reaches the top of a 3-foot pole. How far is the foot of the rope from the base of the pole, in feet?",
              "answer": "4",
              "hint": "b² = c² − a² = 25 − 9 = 16. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x + 10 − 2x = 26",
              "answer": "4",
              "hint": "Collect the x's first: 4x + 10 = 26.",
              "skill": "Equations"
            },
            {
              "q": "A box-shaped snow pit has a square floor of 5² square feet and is 3 feet deep. What is its volume in cubic feet?",
              "answer": "75",
              "hint": "5² = 25 square feet of floor. Then × 3 for the depth.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Twice on purpose",
          "points": [
            "A later step can change an earlier one. Go back, redo it the new way, and work the total out again.",
            "Write the running total after every step."
          ],
          "example": "Carry 20 up, then 20 more: 40. If a later step swaps the second load for 50, the total is 20 + 50 = 70."
        },
        "skill": "Following directions",
        "steps": [
          "Carry 30 pounds up to the cache.",
          "Walk back down to camp with nothing.",
          "Carry another 30 pounds up to the cache.",
          "Add up everything now at the cache.",
          "Change step 3: instead of carrying a second 30 pounds, haul the 60-pound sled up in one go. The first 30 pounds is already at the cache, so work the cache total out again with those two loads.",
          "Add the 15 pounds of food already buried at the cache and type the final total."
        ],
        "prompt": "Pounds at the upper camp:",
        "answer": "105",
        "hint": "Step 5 sends you back to step 3 and swaps the second load for a heavier one. The buried food comes in last."
      }
    },
    {
      "id": "denali-3",
      "title": "The Thin Air",
      "recon": {
        "lesson": {
          "title": "Bodies at altitude",
          "points": [
            "Some words are explained in the same sentence, right after the word. Read what follows a new word.",
            "'Why' questions: look for what an action gets you in return, or what goes wrong without it.",
            "Main idea: what would you title the paragraph?"
          ],
          "example": "If a paragraph about a zoo talks only about what the lions eat, its main idea is the lions' food, not the zoo."
        },
        "title": "Field Report: The Thin Air",
        "passage": [
          "Camp three sits at fourteen thousand two hundred feet in a wide snow basin, and most teams stay there longer than anywhere else on the mountain. It is not laziness. It is the place where bodies catch up. Above about ten thousand feet a person has to acclimatize, which means to let the body slowly adjust to having less oxygen in every breath. Blood changes. Breathing changes. It cannot be rushed, and it cannot be skipped, and it takes days.",
          "The signs of a body that has not caught up are the same for everyone, and every guide can recite them: a headache that will not go away, no appetite, poor sleep, and clumsiness. The clumsiness means that a climber who could tie a knot with gloves on yesterday fumbles it today. The rule is simple. If the signs get worse instead of better, you go down. Not tomorrow. Now. Going down is the only medicine that always works, and the mountain will still be there.",
          "So at camp three the team does something that looks like nothing. They eat, they drink far more water than they want, they sleep, and they take one or two short walks up toward the next camp and back, carrying loads to a cache. Two extra days here buy a body that can think clearly at seventeen thousand feet, and thinking clearly is what keeps a rope team alive on the ridge above. The climbers who skipped those days are the ones who write the stories about turning back."
        ],
        "questions": [
          {
            "q": "At what elevation is camp three?",
            "choices": [
              "7,200 feet",
              "14,200 feet",
              "10,000 feet",
              "20,310 feet"
            ],
            "answer": 1,
            "hint": "First sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does 'acclimatize' mean?",
            "choices": [
              "To climb faster than the weather can change",
              "To set up a camp in the wide snow basin and stay in it for several days",
              "To let the body slowly adjust to having less oxygen in every breath",
              "To go down as soon as the warning signs appear"
            ],
            "answer": 2,
            "hint": "The sentence with 'which means'.",
            "skill": "Word meanings"
          },
          {
            "q": "According to the report, what is the only medicine that always works at altitude?",
            "choices": [
              "Going down",
              "Water",
              "Sleep",
              "Eating"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the last two sentences.",
            "skill": "Finding details"
          },
          {
            "q": "Why does the team spend two extra days at camp three doing what looks like nothing?",
            "choices": [
              "They are waiting for the plane",
              "They are waiting at camp three for a clear morning before making the push for the summit above",
              "Those days let their bodies adjust so they can think clearly on the dangerous ridge above",
              "Camp three is the widest and most comfortable place on the whole mountain, so teams stay as long as they can"
            ],
            "answer": 2,
            "hint": "Paragraph 3, the sentence that starts 'Two extra days'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How to tie a knot with gloves on, and why that gets harder the higher up you go",
              "The warning signs of a body that has not adjusted, and the rule to go down",
              "Why the mountain will still be standing there next year for anybody who turns back",
              "The words that guides use when they talk to a whole team about altitude sickness"
            ],
            "answer": 1,
            "hint": "Paragraph 2 lists the signs and then gives the rule.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Days, water and platforms",
          "points": [
            "Elevation gained: subtract the lower from the higher. From 9,500 to 12,800 is 12,800 − 9,500 = 3,300 feet.",
            "Leftovers count: 26 loads at 4 a trip is 6 trips with 2 left, so it takes 7 trips.",
            "Perimeter of the tent platform: add all four sides.",
            "Same bottom: 2/5 + 2/5 = 4/5."
          ],
          "example": "2,800 feet in 4 equal carries: think 28 ÷ 4 = 7, then put the zeros back: 700 feet."
        },
        "problems": [
          {
            "q": "Camp three is at 14,200 feet and high camp is at 17,200 feet. How many feet of climbing is that?",
            "answer": "3000",
            "hint": "17,200 − 14,200.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The team has 38 fuel cans to haul up, 4 cans to a sled. How many sled trips does it take to carry all of them?",
            "answer": "10",
            "hint": "38 ÷ 4 is 9 with some left over. The leftover cans still need a trip.",
            "skill": "Dividing"
          },
          {
            "q": "The team stamps out a tent platform 8 feet long and 6 feet wide. What is its perimeter in feet?",
            "answer": "28",
            "hint": "8 + 6 + 8 + 6.",
            "skill": "Area and perimeter"
          },
          {
            "q": "By day two at camp three, 1/4 of the team's loads are cached above. By day three, 2/4 more are up. How much is cached above now? (write a fraction)",
            "answer": "3/4",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The 3,000 feet from camp three to high camp are covered in 5 equal carries. How many feet is each carry?",
            "answer": "600",
            "hint": "3,000 ÷ 5. Think 30 ÷ 5, then put the zeros back.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Why this is here",
            "points": [
              "Every paragraph has a job: to set up a fact, to give the signs of something, to answer an objection, or to show what a rule looks like in practice.",
              "Find the job by deleting the paragraph in your head. What would you no longer know? That missing thing is the job.",
              "A choice that only retells the paragraph has named nothing. Look for the one that says why the paragraph is in the report."
            ],
            "example": "A report on a ferry adds a paragraph on how ice forms in the channel. Its job is not to teach science. It is to make the next paragraph, about the winter timetable, make sense."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Camp three sits at fourteen thousand two hundred feet in a wide snow basin.",
                "The quiet days at camp three are the real work, because only time lets a body adjust to the height.",
                "Rest matters in every sport a person can take up.",
                "A body can be made to adjust faster if the team pushes hard enough."
              ],
              "answer": 1,
              "hint": "Waiting, the warning signs, and two extra days that buy something. Ask what all three are about, and cross off the choice the first paragraph directly denies.",
              "skill": "Central idea and evidence",
              "evidence": "It is the place where bodies catch up."
            },
            {
              "q": "Claim: a body that has not caught up shows it in what a climber can do, not only in how they feel. Which sentence from the report best supports that claim?",
              "choices": [
                "Above about ten thousand feet a person has to acclimatize, which means to let the body slowly adjust to having less oxygen in every breath.",
                "It cannot be rushed, and it cannot be skipped, and it takes days.",
                "The clumsiness means that a climber who could tie a knot with gloves on yesterday fumbles it today.",
                "If the signs get worse instead of better, you go down."
              ],
              "answer": 2,
              "hint": "The claim turns on something you could watch from outside. Find the sentence that ends with a job a climber could do yesterday and cannot do today.",
              "skill": "Finding details",
              "evidence": "The clumsiness means that a climber who could tie a knot with gloves on yesterday fumbles it today."
            },
            {
              "q": "Why does the report say the team 'does something that looks like nothing' and then list eating, drinking and sleeping?",
              "choices": [
                "It puts the obvious objection into words and then shows what those quiet days are actually buying.",
                "It gives the order of the climb from camp three to the summit.",
                "It compares camp three with high camp above it.",
                "It explains how a cache is buried in the snow and marked."
              ],
              "answer": 0,
              "hint": "Somebody in that sentence is being accused of doing nothing. Ask who, and then ask what the rest of the paragraph does about the accusation.",
              "skill": "Author's purpose and structure",
              "evidence": "Two extra days here buy a body that can think clearly at seventeen thousand feet, and thinking clearly is what keeps a rope team alive on the ridge above."
            },
            {
              "q": "The report calls camp three 'the place where bodies catch up'. What does catch up mean as it is used here?",
              "choices": [
                "Get back the weight that was lost hauling sleds up the eleven miles of glacier below",
                "Reach the rest of the team, who have already gone on up toward the next camp",
                "Finish adjusting to a height the climbers have already reached",
                "Make up the days that were lost waiting out bad weather"
              ],
              "answer": 2,
              "hint": "Nobody is chasing anybody. Read the sentence in the same paragraph that explains what a body has to do above ten thousand feet, and use it.",
              "skill": "Word meanings",
              "evidence": "Above about ten thousand feet a person has to acclimatize, which means to let the body slowly adjust to having less oxygen in every breath."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why fumbling a knot is treated as serious rather than as ordinary tiredness. Why is it?",
              "choices": [
                "It is always the very first of the signs to appear in any climber, so a fumbled knot means the trouble has only just now started.",
                "It is one of the named signs, and being able to think and move clearly is exactly what keeps a roped team alive higher up.",
                "It means the climber has not eaten enough food that day, and a meal and a rest at camp three will steady their hands again by the evening.",
                "It shows the gloves a climber brought are the wrong size for the cold up there, and that better gloves would stop the fumbling by themselves."
              ],
              "answer": 1,
              "hint": "Paragraph two lists it as a sign. Paragraph three says what the whole stay at camp three is buying. Put the sign next to what is at stake.",
              "skill": "Reading between the lines",
              "evidence": "Two extra days here buy a body that can think clearly at seventeen thousand feet, and thinking clearly is what keeps a rope team alive on the ridge above."
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
              "Taking away from a round number: 600 − 250 = 350. Count up from 250 to 600 to check.",
              "A fraction is parts done over equal parts in all. 3 parts done out of 5 is 3/5."
            ],
            "example": "A rug 4 squares wide and 3 squares long is 4 × 3 = 12 squares. If 2 are covered, 12 − 2 = 10 are left."
          },
          "problems": [
            {
              "q": "Every tent needs 7 quarts, and there are 7 tents. How many quarts is that?",
              "answer": "49",
              "hint": "7 groups of 7, so 7 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "The team splits 98 quarts in half. How many quarts is one half?",
              "answer": "49",
              "hint": "Half of 98.",
              "skill": "Dividing"
            },
            {
              "q": "The team needs 800 quarts of water and has 310. How many more are needed?",
              "answer": "490",
              "hint": "800 − 310.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the team has finished 7 of them. What fraction is done? (write a fraction)",
              "answer": "7/8",
              "hint": "7 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 6 squares wide and 5 squares long. The team has covered 6 squares. How many squares are left to cover?",
              "answer": "24",
              "hint": "6 × 5 squares in all, then take 6 off.",
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
              "Sharing in a ratio: add the parts, divide the total by that, then multiply. 45 in the ratio 1 to 4 is 5 parts of 9, so 9 and 36.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "From −13 up to −5: count the steps between them, so they are 8 degrees apart."
          },
          "problems": [
            {
              "q": "7 meal bags weigh 17.15 pounds altogether, and each weighs the same. How many pounds does each one weigh?",
              "answer": "2.45",
              "hint": "17.15 ÷ 7. Divide as with whole numbers and keep the point in place.",
              "skill": "Decimals"
            },
            {
              "q": "Of 240 quarts of water, 10% are crossed off the list. How many are left on it?",
              "answer": "216",
              "hint": "10% of 240 is 24. Take that off 240.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team splits 49 loads between two rope teams in the ratio 2 to 5. How many loads does the smaller share get?",
              "answer": "14",
              "hint": "2 + 5 = 7 parts. 49 ÷ 7 = 7 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out 3 × 9 − 2 × 3. What is it?",
              "answer": "21",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "The coldest reading was −15 degrees and the warmest was −4 degrees. How many degrees apart are they?",
              "answer": "11",
              "hint": "From −15 up to −4.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 15 pounds on 10 sleds is 15 ÷ 10 = 1.5 pounds each.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, undo the outside first: in 2(x + 7) = 26, divide by 2 to get x + 7 = 13, so x = 6."
            ],
            "example": "On a map, 5 inches stands for 60 feet. So 1 inch stands for 60 ÷ 5 = 12 feet."
          },
          "problems": [
            {
              "q": "12 sleds carried 6 pounds of spare fuel in all. At the same rate, how many pounds would 16 sleds carry?",
              "answer": "8",
              "hint": "One sled takes 6 ÷ 12 = 0.5. Then × 16.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team had 80 quarts of water, then melted 25% more from snow. How many quarts of water were added?",
              "answer": "20",
              "hint": "25% of 80: 25/100 × 80.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The low was −17 degrees and the high was 19 degrees. How many degrees apart are they?",
              "answer": "36",
              "hint": "17 below zero plus 19 above zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 3(x + 19) = 69",
              "answer": "4",
              "hint": "Divide both sides by 3 to get x + 19 = 23.",
              "skill": "Equations"
            },
            {
              "q": "On the map, 9 inches stands for 72 feet. How many feet does 1 inch stand for?",
              "answer": "8",
              "hint": "72 ÷ 9.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "Work inside the parentheses first, then the power: (3 × 4)² = 12² = 144.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's that are on the same side first: 9x − 2x = 7x. Then divide."
            ],
            "example": "A list starts at 3 and adds 4 each step: 3, 7, 11 and on. The 9th number is 8 steps on: 3 + 8 × 4 = 35."
          },
          "problems": [
            {
              "q": "The count of quarts of water goes 10, 15, 20, 25, and on. What is the 11th number in the list?",
              "answer": "60",
              "hint": "It starts at 10 and adds 5 each step. The number you want is 10 steps on from 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (8 × 7)²?",
              "answer": "3136",
              "hint": "8 × 7 = 56 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 9 and 12 feet. How long is its longest side, in feet?",
              "answer": "15",
              "hint": "9² + 12² = 225. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x − 3x = 10",
              "answer": "5",
              "hint": "5 − 3 = 2, so 2x = 10.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 8 × 10^4 or 7 × 10^5? Write the bigger one out in full.",
              "answer": "700000",
              "hint": "7 × 10^5 is ten times 7 × 10^4, and 8 is not ten times 7.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Compare before you type",
          "points": [
            "A word answer: read what the last step says to type in each case before you decide.",
            "Compare the two numbers before choosing."
          ],
          "example": "Headache score 6 yesterday, 4 today. Better, so the 'unless' does not apply and the number stands."
        },
        "skill": "Following directions",
        "steps": [
          "Yesterday a climber rated their headache 3 out of 10.",
          "Today they rate it 5 out of 10.",
          "Take yesterday's number away from today's to see how much it changed.",
          "Add the 2 extra days the team has already spent at camp three.",
          "Type the result, unless today's rating is higher than yesterday's, in which case type DOWN instead, because going down is the only medicine that always works."
        ],
        "prompt": "Your answer:",
        "answer": "DOWN",
        "accept": [
          "down",
          "Down",
          "down.",
          "DOWN."
        ],
        "hint": "Work the numbers first, then read step 5. It asks you to put today's rating next to yesterday's before you type anything."
      }
    },
    {
      "id": "denali-4",
      "title": "High Camp",
      "recon": {
        "lesson": {
          "title": "Weather words",
          "points": [
            "Some words are explained in the same sentence, right after the word. Read what follows a new word.",
            "'Why does the team wait' questions: the report tells you what the wait protects.",
            "Count the sentences on each idea for the main-idea question."
          ],
          "example": "Five sentences about wind and one about tents means the paragraph is about wind."
        },
        "title": "Field Report: High Camp",
        "passage": [
          "High camp is a shelf of snow at seventeen thousand two hundred feet, and from it the summit looks close enough to touch. It is not. Between the camp and the top are three thousand more feet of ridge and slope, a whole day's climb, and the weather up here decides whether that day happens at all. Denali is so far north and so tall that it makes its own weather. Storms arrive faster than a forecast can, winds over a hundred miles an hour have blown climbers off their feet, and the cold on a clear night can drop far below zero even in June.",
          "The thing the guides fear most is not wind. It is a whiteout, which is a condition where cloud, snow and ground all turn the same white and a climber cannot tell up from down or see their own boots. In a whiteout the wands are the only thing left. Teams have stood ten feet from their tents and not found them. So the rule at high camp is that nobody goes for the summit unless the morning is clear, and nobody keeps going if it clouds over, no matter how close the top looks.",
          "That means waiting, and waiting is the hardest thing on the mountain. Teams have sat in tents at high camp for five days while the wind screamed, eating into the food they need for the way down, watching the clear morning never come. Some run out of days and go home without the summit. About half the people who try Denali each year do not reach the top, and weather is the reason for most of them. The ones who make it are usually the ones who were willing to wait."
        ],
        "questions": [
          {
            "q": "How much climbing is left between high camp and the summit?",
            "choices": [
              "Three hundred and fifty feet",
              "Three thousand feet",
              "One thousand two hundred feet",
              "Ten thousand five hundred feet"
            ],
            "answer": 1,
            "hint": "Paragraph 1, second and third sentences.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'whiteout'?",
            "choices": [
              "A storm that arrives on the mountain faster than any forecast could ever warn a team about it",
              "A tent so completely covered in blown snow that the team standing beside it cannot find it",
              "A condition where cloud, snow and ground all turn the same white and you cannot see",
              "A wind strong enough to blow a climber off their feet, which happens above a hundred miles an hour"
            ],
            "answer": 2,
            "hint": "The sentence with 'which is'.",
            "skill": "Word meanings"
          },
          {
            "q": "About what fraction of people who try Denali each year reach the top?",
            "choices": [
              "Almost every one",
              "About one in ten",
              "A few",
              "About half"
            ],
            "answer": 3,
            "hint": "Paragraph 3, near the end.",
            "skill": "Finding details"
          },
          {
            "q": "Why does the rule say nobody keeps going if it clouds over, even when the top looks close?",
            "choices": [
              "Because the cold on a clear night can drop far below zero",
              "Because in a whiteout a team can lose the route entirely, even ten feet from a tent",
              "Because the guides get tired",
              "Because the wind above high camp gets stronger once cloud comes in"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentences about wands and tents.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "Waiting for weather, and how it decides who reaches the top",
              "How much food a team carries and how fast it eats into it while waiting",
              "How the wind sounds",
              "How to go home"
            ],
            "answer": 0,
            "hint": "Paragraph 3 begins with waiting and ends with who makes it.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Waiting math",
          "points": [
            "Common multiples: count by both numbers. 2, 4, 6 and 3, 6: they meet at 6.",
            "Food for 14 days minus 9 days used: 14 − 9 = 5 days left.",
            "Money in whole dollars: 4 climbers at $40 each is 4 × 40 = $160.",
            "Same bottom: 7/8 − 4/8 = 3/8."
          ],
          "example": "A tent floor 8 feet long and 5 feet wide has an area of 8 × 5 = 40 square feet."
        },
        "problems": [
          {
            "q": "The weather report comes every 3 hours and the radio check every 4 hours. Both happened at noon. How many hours until both happen together again?",
            "answer": "12",
            "hint": "Count by 3s and by 4s. Which number is on both lists first?",
            "skill": "Multiplying"
          },
          {
            "q": "The team brought food for 21 days and has used 15 days of it. How many days of food are left?",
            "answer": "6",
            "hint": "21 − 15.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The round-trip ski plane flight costs $800 per climber. What does it cost to fly a team of 6?",
            "answer": "4800",
            "hint": "6 × 800.",
            "accept": [
              "$4800",
              "4,800",
              "$4,800",
              "4800.00",
              "$4,800.00"
            ],
            "skill": "Money and decimals"
          },
          {
            "q": "The fuel can was 5/6 full when the team reached high camp. Five days of melting snow used 3/6 of it. How full is it now? (write a fraction)",
            "answer": "2/6",
            "hint": "Same bottom. Subtract the tops. 2/6 or 1/3 both count.",
            "accept": [
              "1/3"
            ],
            "skill": "Fractions"
          },
          {
            "q": "The cook tent's floor is 9 feet long and 7 feet wide. What is its area in square feet?",
            "answer": "63",
            "hint": "Area is length × width: 9 × 7.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Read around the word",
            "points": [
              "Cover the word and read the sentence with a hole in it. What would you put in the hole?",
              "Some phrases are painting a picture instead of stating a fact. Ask what the picture shows, then put it in plain words.",
              "Test your pick by reading it back into the sentence. If it now says something the report never said, it is the wrong pick."
            ],
            "example": "'The wind screamed all night.' Nothing screamed. The word is telling you how loud it was and how it felt to lie there listening to it."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "High camp is a shelf of snow at seventeen thousand two hundred feet, with three thousand more feet of ridge and slope above it.",
                "At high camp the summit is close, but what decides the climb is the weather and whether a team can bear to wait for it.",
                "Patience is the most valuable quality a person can have, in the mountains and everywhere else, whatever it is a person is trying to do.",
                "Teams go for the summit whenever the top looks close enough to touch, and keep going even after the cloud has come down on the ridge."
              ],
              "answer": 1,
              "hint": "The three thousand feet left, the whiteout rule, and the five days in a tent. Ask what all three come down to, and cross off the choice the second paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "The ones who make it are usually the ones who were willing to wait."
            },
            {
              "q": "Claim: the thing the guides fear most is dangerous because of what it does to what a climber can see. Which sentence from the report best supports that claim?",
              "choices": [
                "Between the camp and the top are three thousand more feet of ridge and slope, a whole day's climb, and the weather up here decides whether that day happens at all.",
                "Storms arrive faster than a forecast can, winds over a hundred miles an hour have blown climbers off their feet, and the cold on a clear night can drop far below zero even in June.",
                "It is a whiteout, which is a condition where cloud, snow and ground all turn the same white and a climber cannot tell up from down or see their own boots.",
                "Teams have sat in tents at high camp for five days while the wind screamed, eating into the food they need for the way down, watching the clear morning never come."
              ],
              "answer": 2,
              "hint": "One of these is about distance, one is about force, and one is about waiting. The claim is about seeing. Find the sentence that describes what the eyes are given.",
              "skill": "Finding details",
              "evidence": "It is a whiteout, which is a condition where cloud, snow and ground all turn the same white and a climber cannot tell up from down or see their own boots."
            },
            {
              "q": "Why does the report say the summit 'looks close enough to touch' and then immediately say 'It is not'?",
              "choices": [
                "It explains how far a person can see from high camp on a clear day, when the top three thousand feet above looks near enough to reach out and touch.",
                "It compares high camp with camp three lower down the mountain, where the air is thicker and the snow basin is sheltered.",
                "It lists the stages of the last day's climb in order.",
                "It raises a false impression and knocks it down at once, which is the point the whole paragraph then builds on."
              ],
              "answer": 3,
              "hint": "Two words on their own, right after a long sentence. Ask what a writer is doing when they interrupt themselves that fast.",
              "skill": "Author's purpose and structure",
              "evidence": "Between the camp and the top are three thousand more feet of ridge and slope, a whole day's climb, and the weather up here decides whether that day happens at all."
            },
            {
              "q": "The report says Denali 'makes its own weather'. What is that phrase telling you?",
              "choices": [
                "The mountain is always warmer than the country around it",
                "The mountain's own size and position create the storms rather than only receiving them",
                "The weather on the mountain matches the forecast for the region",
                "The mountain stands high enough to sit above all the clouds"
              ],
              "answer": 1,
              "hint": "No mountain manufactures anything. Read the sentence after it and ask why storms there would arrive faster than a forecast could reach them.",
              "skill": "Word meanings",
              "evidence": "Storms arrive faster than a forecast can, winds over a hundred miles an hour have blown climbers off their feet, and the cold on a clear night can drop far below zero even in June."
            },
            {
              "q": "Paragraphs 2 and 3 together explain how the rule about a clear morning ends up costing some teams the summit. How does it?",
              "choices": [
                "Waiting for a clear morning eats the days and the food the team came up with, and some run out before the sky turns.",
                "Teams that wait too long at high camp are sent back down the mountain by the rangers before they are allowed to make an attempt.",
                "A clear morning never arrives at high camp in the month of June.",
                "The rule allows each team only one attempt at the summit."
              ],
              "answer": 0,
              "hint": "Paragraph two gives the rule. Paragraph three gives what obeying it costs, in days and in food. Follow the cost to its end.",
              "skill": "Reading between the lines",
              "evidence": "Teams have sat in tents at high camp for five days while the wind screamed, eating into the food they need for the way down, watching the clear morning never come."
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
              "How many more: take the smaller number from the bigger one. 568 − 235 = 333.",
              "Fractions with the same bottom: the bigger top is the bigger fraction. 4/6 is bigger than 1/6."
            ],
            "example": "35 apples go in bags of 5. How many 5s make 35? 7 bags."
          },
          "problems": [
            {
              "q": "The team carries 9 meals on each of 6 trips. How many meals is that?",
              "answer": "54",
              "hint": "6 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "Every day takes 9 meals. The team has 81 meals. How many days will the meals last?",
              "answer": "9",
              "hint": "How many 9s fit into 81?",
              "skill": "Dividing"
            },
            {
              "q": "The team counted 344 meals in the morning and 477 in the evening. How many more in the evening?",
              "answer": "133",
              "hint": "477 − 344.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 2/4 or 3/4? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "The target is 500 meals and 156 are logged. How many short is that?",
              "answer": "344",
              "hint": "500 − 156.",
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
              "Sharing in a ratio: add the parts, then find one part. 42 in the ratio 3 to 4 is 7 parts of 6, so 18 and 24.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(7 − 1) × (2 + 4): each set of parentheses first, then 6 × 6 = 36."
          },
          "problems": [
            {
              "q": "At high camp there is 4/5 of a gallon of melted snow, shared equally among 4 climbers. What fraction of a gallon does each climber get? (write a fraction)",
              "answer": "1/5",
              "hint": "Sharing among 4 is the same as multiplying by 1/4: 4/5 × 1/4.",
              "skill": "Fractions"
            },
            {
              "q": "Out of every 100 meals, 25 are set aside. Out of 240 meals, how many is that?",
              "answer": "60",
              "hint": "240 is 2.4 hundreds, so 2.4 × 25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team divides 20 minutes of work in the ratio 2 to 3. How many minutes is the larger share?",
              "answer": "12",
              "hint": "5 parts in all, so one part is 4 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out (9 − 5) × (5 + 3). What is it?",
              "answer": "32",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three readings came in: −17, −14 and 3 degrees. Which is the coldest?",
              "answer": "-17",
              "accept": [
                "−17"
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
              "How many fit: the total divided by the size of one. 13.5 pounds at 1.5 pounds each is 13.5 ÷ 1.5 = 9.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "A wheel is 5 feet across. Around the edge: 3.14 × 5 = 15.7 feet. Going back, 15.7 ÷ 3.14 = 5 across."
          },
          "problems": [
            {
              "q": "The team has 45 pounds of fuel to load, at 2.25 pounds for each sled. One sled is already loaded. How many sleds are left to load?",
              "answer": "19",
              "hint": "45 ÷ 2.25 = 20 in all, then take the loaded one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of meals may change by no more than 10%. Starting from 40, what is the highest count the rule allows?",
              "answer": "44",
              "hint": "10% of 40 is 4. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 8 hours the thermometer fell 32 degrees in all, the same amount each hour. What was the change each hour? (Write a fall as a negative number.)",
              "answer": "-4",
              "accept": [
                "−4"
              ],
              "hint": "Share −32 into 8 equal parts: −32 ÷ 8. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 7 − 26 = 12",
              "answer": "266",
              "hint": "Add 26 to both sides, then multiply by 7.",
              "skill": "Equations"
            },
            {
              "q": "A round plate measures 62.8 inches around the edge. Using 3.14 for pi, how many inches is it across?",
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
            "example": "A line through (0, 1) and (6, 43): rise 42, run 6, slope 42 ÷ 6 = 7."
          },
          "problems": [
            {
              "q": "A line passes through (0, 5) and (4, 41). What is its slope?",
              "answer": "9",
              "hint": "Slope is the rise over the run: 36 ÷ 4.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square tent platform has an area of 100 square feet. How many feet is it around the edge?",
              "answer": "40",
              "hint": "One side is the square root of 100, then four sides.",
              "skill": "Powers and roots"
            },
            {
              "q": "The team goes 3 feet east and then 4 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "5",
              "hint": "The two legs make a right angle: 3² + 4² = 25.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 7x + 18 and 3x + 30 come to the same number?",
              "answer": "3",
              "hint": "Set them equal, take 3x off both sides, then take 18 off.",
              "skill": "Equations"
            },
            {
              "q": "Two round snow pits each have a radius of 5 feet and are 3 feet deep. Using 3.14 for pi, what is their total volume in cubic feet?",
              "answer": "471",
              "hint": "One pit is 3.14 × 5 × 5 × 3 = 235.5. Then double it.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Two totals, pick one",
          "points": [
            "Two steps can use the same starting number and build two different totals. Keep both on paper, labeled.",
            "A later step picks one and drops the other. Read it before you take anything away."
          ],
          "example": "Start with 4. Times 6 is 24; times 5 is 20. If the next step picks the second, 20 goes on and 24 is dropped."
        },
        "skill": "Following directions",
        "steps": [
          "Ten climbers are waiting at high camp, and about half of them will reach the top. Work out how many that is.",
          "Multiply that number by the 6 letters in the name DENALI, and keep the number.",
          "Multiply the same number by the 5 days a team has sat in its tents waiting, and keep that number as well.",
          "The guide looks at your two numbers, from step 2 and from step 3, and picks the step 3 one. Do not use the step 2 number.",
          "Take away the 10 climbers you started with.",
          "Type what is left."
        ],
        "prompt": "Your answer:",
        "answer": "15",
        "hint": "Half of the ten climbers is the number both step 2 and step 3 use. Step 4 names which of the two totals goes on."
      }
    },
    {
      "id": "denali-5",
      "title": "Summit Day",
      "recon": {
        "lesson": {
          "title": "The summit report",
          "points": [
            "Some words are explained in the same sentence, right after the word. Read what follows a new word.",
            "'Why might' questions about people: look at what the report tells you about that person just before they act.",
            "Match the earlier reports: rope, wands, weather, waiting. Summit day is where they pay off."
          ],
          "example": "A report says a girl was first to finish the race, then tells you she trained every morning. The why hides in what you were just told about her."
        },
        "title": "Field Report: Summit Day",
        "passage": [
          "Denali means the high one in the language of the Koyukon people, who have lived in its shadow for thousands of years. On June 7, 1913, four men made the first ascent, which is the first climb ever to reach a summit. They were Hudson Stuck, a church leader who organized the trip; Harry Karstens, a mail carrier who ran dog teams; and Robert Tatum, a young student. The fourth was Walter Harper, twenty years old, whose mother was Koyukon and who had grown up on the rivers below the mountain. When the four reached the last slope, Stuck stopped and sent Harper ahead. Harper was the first person ever to stand on the top of North America.",
          "Summit day today follows a route those four never saw, but the shape of it is the same. The team leaves high camp early on a clear morning, roped, with the turnaround time agreed and written down. The ridge above high camp is narrow, with a long drop on either side, and then the slope eases to a broad rise that goes on longer than anyone expects. The last bit is called the summit ridge, and it is the only place on the mountain where you can look down on everything else in Alaska. Most teams spend ten minutes there. Then they turn around.",
          "The way down is where climbers get hurt, because they are tired and the mountain is not. So the rope stays on, the wands get counted, the water gets drunk, and nobody celebrates until high camp. The flag comes back down in a pack. The rest of the story, the one you tell for the rest of your life, starts at base camp when the plane comes. You read every report. You waited when the mountain said wait. That is the whole climb, and you did it."
        ],
        "questions": [
          {
            "q": "On what date was the first ascent of Denali?",
            "choices": [
              "July 4, 1900",
              "June 7, 1953",
              "May 1, 1913",
              "June 7, 1913"
            ],
            "answer": 3,
            "hint": "Second sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is an 'ascent'?",
            "choices": [
              "A sled for hauling gear",
              "A storm near the top",
              "A rope tying a team",
              "A climb that reaches a summit"
            ],
            "answer": 3,
            "hint": "The sentence with 'which is the first climb'.",
            "skill": "Word meanings"
          },
          {
            "q": "Who was the first person to stand on the top of Denali?",
            "choices": [
              "Hudson Stuck",
              "Harry Karstens",
              "Walter Harper",
              "Robert Tatum"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "Why might Stuck have sent Harper ahead to be first on the summit?",
            "choices": [
              "Harper was the strongest of the four and broke the trail up the last slope",
              "Harper's mother was Koyukon and he had grown up below the mountain, so the first step belonged to him",
              "Stuck had organized the trip and wanted Harper to test the last slope",
              "Harper was the youngest of the four at twenty years old, and the first ascent of a mountain always goes to the youngest"
            ],
            "answer": 1,
            "hint": "Paragraph 1 tells you who Harper was and where he grew up, right before Stuck sends him ahead.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How to plant a flag",
              "The plane at base camp",
              "Why the descent is the dangerous part and how the team handles it",
              "The ten minutes most teams spend on the summit ridge before turning around"
            ],
            "answer": 2,
            "hint": "Paragraph 3 starts with the way down and lists what the team does on it.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Summit numbers",
          "points": [
            "Years since: this year minus the year it happened. From 1969 to 2026 is 2026 − 1969 = 57 years.",
            "Wands per hour times hours: 9 × 4 = 36.",
            "Up and back down the same way is double: 4,250 + 4,250 = 8,500 feet.",
            "Same bottom: 2/5 + 3/5 = 5/5, a whole."
          ],
          "example": "Climb 200 feet an hour for 4 hours, then 150 feet more: 200 × 4 = 800, then 800 + 150 = 950 feet."
        },
        "problems": [
          {
            "q": "The first ascent was in 1913. How many years ago was that, if this year is 2026?",
            "answer": "113",
            "hint": "2026 − 1913.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The team passes 12 wands every hour for 6 hours. How many wands is that?",
            "answer": "72",
            "hint": "12 × 6.",
            "skill": "Multiplying"
          },
          {
            "q": "The climb from base camp to the summit is 13,110 feet. Going back down is the same. How many feet up and down together?",
            "answer": "26220",
            "hint": "13,110 + 13,110.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "By the summit ridge the team had climbed 3/8 of the day's route before sunrise and 5/8 after. What fraction of the route is that? (write a fraction)",
            "answer": "8/8",
            "hint": "Same bottom. Add the tops. 8/8 or 1 both count.",
            "accept": [
              "1"
            ],
            "skill": "Fractions"
          },
          {
            "q": "On summit day the team climbs 400 feet an hour for 7 hours, then pushes 200 feet more to the top. How many feet did they climb?",
            "answer": "3000",
            "hint": "400 × 7 first. Then add 200.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Neither one alone",
            "points": [
              "The last question is built so that no single paragraph answers it. Plan on using two.",
              "Say a fact from one paragraph, then a fact from another, then say 'so'. What follows 'so' is your answer.",
              "If a choice needs something the report never gives you, it is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the bakery opens at five. Paragraph two: the bread takes three hours to rise. So the bakers start work around two, and neither paragraph says that by itself."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Walter Harper was the first person ever to stand on top of North America.",
                "History is the most interesting thing about any mountain.",
                "Teams celebrate on the summit before they start the way down, and stay up on the ridge as long as they like, looking down on everything else in Alaska from up there.",
                "Summit day has the same shape now as it did in 1913: get up on a clear morning, stand there briefly, and treat the way down as the part that counts."
              ],
              "answer": 3,
              "hint": "The four men, today's route, and the rules for the descent. Ask what runs through all three, and cross off the choice the last paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "Summit day today follows a route those four never saw, but the shape of it is the same."
            },
            {
              "q": "Claim: the descent, not the summit, is treated as the dangerous part of the day. Which sentence from the report best supports that claim?",
              "choices": [
                "Most teams spend ten minutes there.",
                "Then they turn around.",
                "Harper was the first person ever to stand on the top of North America.",
                "The way down is where climbers get hurt, because they are tired and the mountain is not."
              ],
              "answer": 3,
              "hint": "Turning around is what they do; it is not a reason. Find the sentence that names where the harm happens and why.",
              "skill": "Finding details",
              "evidence": "The way down is where climbers get hurt, because they are tired and the mountain is not."
            },
            {
              "q": "Why does the report name all four of the 1913 climbers and say what each of them did?",
              "choices": [
                "It explains why dog teams were needed on the lower glaciers, where a winter's worth of food and gear had to be hauled before the ice got too steep.",
                "It lists the jobs that somebody joining a climbing trip could be given, from organizing the whole trip to running the dog teams up the glacier.",
                "It makes the first ascent belong to particular people, which is what gives weight to the moment one of them is sent ahead.",
                "It compares the route of 1913 with the route teams use today."
              ],
              "answer": 2,
              "hint": "Read the two sentences that follow the list. They only land because you have just been told who these men were.",
              "skill": "Author's purpose and structure",
              "evidence": "When the four reached the last slope, Stuck stopped and sent Harper ahead."
            },
            {
              "q": "The report says climbers get hurt on the way down 'because they are tired and the mountain is not'. What is that phrase telling you?",
              "choices": [
                "The mountain gets easier to climb later in the day",
                "The danger has not dropped at all; the only thing that has changed is the climbers",
                "The mountain is more dangerous going up than coming down, so the rope can come off at the top",
                "The climbers stop being careful once they have reached the top"
              ],
              "answer": 1,
              "hint": "A mountain cannot be tired, so the second half of the phrase is doing something else. Ask what it is telling you has stayed the same while something else changed.",
              "skill": "Word meanings",
              "evidence": "The way down is where climbers get hurt, because they are tired and the mountain is not."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the turnaround time is agreed and written down before the team leaves high camp. Why is it?",
              "choices": [
                "The rangers require a written turnaround time from every team before that team is allowed to leave high camp for the summit ridge.",
                "The turnaround time is what tells the plane when to come.",
                "The decision has to be made while everyone is rested, because the tired half of the day is the half where judgment fails.",
                "The summit ridge can only be crossed at one particular hour."
              ],
              "answer": 2,
              "hint": "Paragraph two says when the time is written down. Paragraph three says what the climbers are like a few hours later. Ask why the order of those two matters.",
              "skill": "Reading between the lines",
              "evidence": "The team leaves high camp early on a clear morning, roped, with the turnaround time agreed and written down."
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
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "3 × 9 = 27, so 27 shared among 3 is 9 each."
          },
          "problems": [
            {
              "q": "The team counts 4 rope teams with 8 wands in each. How many wands is that?",
              "answer": "32",
              "hint": "4 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "32 wands are shared equally among 4 rope teams. How many wands in each rope team?",
              "answer": "8",
              "hint": "How many 4s make 32?",
              "skill": "Dividing"
            },
            {
              "q": "The team counted 452 wands, then found 173 more, then 65 more. How many wands in all?",
              "answer": "690",
              "hint": "452 + 173 first. Then add 65.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The team climbed 2/4 of the day's route before the break and 1/4 after. What fraction of the route is done? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A tent platform is 6 squares wide and 6 squares long. How many squares is that?",
              "answer": "36",
              "hint": "6 rows of 6, so 6 × 6.",
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
            "example": "4 × (11 − 5) + 9: parentheses first, 6; then 4 × 6 = 24; then 24 + 9 = 33."
          },
          "problems": [
            {
              "q": "The team logs 2.4 pounds for the first meal bag, 3.15 for the second and 0.95 for the third. How many pounds is that in total?",
              "answer": "6.5",
              "hint": "Line the points up, writing a missing place as 0, then add all three.",
              "skill": "Decimals"
            },
            {
              "q": "Of 240 wands, 75% are set aside. How many is that?",
              "answer": "180",
              "hint": "75% of 240: 75% is 75/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Rope teams and wands are kept in the ratio 1 to 3. If there are 6 rope teams, how many wands?",
              "answer": "18",
              "hint": "6 ÷ 1 = 6 groups. Each group has 3 wands.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out 5 × (8 − 1) + 16. What is it?",
              "answer": "51",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn it was −15 degrees. By noon it was 7 degrees. By how many degrees did it rise?",
              "answer": "22",
              "hint": "From −15 up to 0 is 15, then 7 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 28 pounds on 8 sleds is 28 ÷ 8 = 3.5 pounds each.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "6x + 4 = 52, so 6x = 48, so x = 8."
          },
          "problems": [
            {
              "q": "24 sleds carried 36 pounds of spare fuel altogether. How many pounds is that for one sled?",
              "answer": "1.5",
              "hint": "A rate is the total shared out: 36 ÷ 24.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team counted 60 wands on the first pass. On the second pass the number had risen by 50%. How many wands is that?",
              "answer": "90",
              "hint": "50% of 60 is 30. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "At dawn the thermometer read −10 degrees. It rose 16 degrees by noon, then fell 16 degrees by dark. What does it read at dark?",
              "answer": "-10",
              "accept": [
                "−10"
              ],
              "hint": "Start at −10, go up 16 to 6, then down 16.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 7x + 5 = 89",
              "answer": "12",
              "hint": "Take 5 off both sides first, then divide by 7.",
              "skill": "Equations"
            },
            {
              "q": "On the map, 1 inch stands for 10 feet. The fixed line measures 5 inches on the map. How long is it really, in feet?",
              "answer": "50",
              "hint": "Every inch is 10 feet, so 5 × 10.",
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
            "example": "Start at 10 and add 4 each hour: y = 4x + 10. After 3 hours, y = 4 × 3 + 10 = 22."
          },
          "problems": [
            {
              "q": "The team starts with 15 wands and adds 9 more every hour. After 5 hours, how many wands are there?",
              "answer": "60",
              "hint": "This is the straight-line rule y = mx + b: 9 × 5 + 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each row holds 8² wands. There are 7 rows. How many wands in all?",
              "answer": "448",
              "hint": "8² means 8 × 8 = 64. Then × 7.",
              "skill": "Powers and roots"
            },
            {
              "q": "The team runs a rope from the top of an 8-foot pole to a point 15 feet away on the snow. How long is the rope, in feet?",
              "answer": "17",
              "hint": "Right triangle: a² + b² = c². 8² + 15² = 64 + 225 = 289. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x + 7 = 5x + 19",
              "answer": "6",
              "hint": "Take 5x off both sides to get 2x + 7 = 19, then take 7 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The team takes about 6 × 10^5 steps on the whole climb. Written out in full, what number is that?",
              "answer": "600000",
              "hint": "10^5 is 1 with 5 zeros after it: 100,000. Then × 6.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Count, compare, multiply",
          "points": [
            "Count letters on paper: S-U-M-M-I-T is six, H-A-R-P-E-R is six.",
            "Larger minus smaller can be zero. Then add the camps."
          ],
          "example": "B-E-A-R is four, W-O-L-F is four: 4 − 4 = 0. Zero plus 3 is 3."
        },
        "skill": "Following directions",
        "steps": [
          "Count the letters in the word SUMMIT.",
          "Count the letters in the name HARPER.",
          "Take the HARPER count away from the SUMMIT count.",
          "Add the 5 camps the team set on the way up to your step 3 answer.",
          "Call that total a number of hours.",
          "There are 60 minutes in an hour. Type the total in minutes."
        ],
        "prompt": "Minutes:",
        "answer": "300",
        "hint": "Count the letters in SUMMIT and in HARPER — they come out the same. Step 6 asks for minutes, and an hour holds 60 of them."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
