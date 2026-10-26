// ODYSSEY — campaign "flattop". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "flattop",
  "free": true,
  "kind": "climb",
  "readingLevel": {
    "fk": 7.3,
    "cl": 7.3
  },
  "grade": "5",
  "kindLabel": "Expedition",
  "form": "raven",
  "title": "Flattop Mountain",
  "subtitle": "Chugach Mountains, Alaska",
  "pitch": "Five missions up the most-climbed mountain in Alaska. Ravens, glaciers seen from the ridge, earthworms, Denali, and a compass you can trust.",
  "scene": "assets/scene-flattop.jpg",
  "waypoints": [
    [
      250,
      790
    ],
    [
      335,
      675
    ],
    [
      415,
      565
    ],
    [
      490,
      470
    ],
    [
      575,
      385
    ],
    [
      690,
      255
    ]
  ],
  "progress": {
    "unit": "ft",
    "total": 3510
  },
  "dayNoun": "Mission",
  "stageNoun": "Stop",
  "finalNoun": "Summit",
  "stages": [
    "Trailhead",
    "Blueberry Knoll",
    "The Saddle",
    "The Scramble",
    "Summit"
  ],
  "reconNoun": "Field Report",
  "legs": {
    "recon": "Recon",
    "nav": "Navigation",
    "orders": "Orders",
    "debrief": "Debrief"
  },
  "fact": "The most-climbed mountain in Alaska. From the top you can see Anchorage, Cook Inlet, and on a clear day, Denali.",
  "patrols": [
    {
      "id": "flattop-1",
      "title": "Leaving the Trailhead",
      "recon": {
        "lesson": {
          "title": "Scout's trick: questions first",
          "points": [
            "Read the five questions before the report. Now you are hunting, not wandering.",
            "When a question asks 'one way X is different from Y', find the sentence that talks about both.",
            "The answer is always in the report. You never have to guess."
          ],
          "example": "Question: 'What is one way a moose is different from a deer?' Hunt for the word 'deer' and read the sentence it sits in. That sentence names both animals."
        },
        "title": "Field Report: The Raven",
        "passage": [
          "Ravens are the largest members of the crow family, and in Alaska they are everywhere: on lampposts, on rooftops, and riding the wind above mountain ridges. A raven can be more than two feet long from beak to tail, with glossy black feathers and a heavy, curved bill. Its call is a deep croak, very different from the sharp caw of a crow.",
          "Scientists who study ravens keep finding new evidence of how clever they are. In experiments, ravens have pulled up strings to reach food tied to the end, solved puzzles with several steps, and worked out how to use a stick to poke at something out of reach. They remember people who were unkind to them, sometimes for years. They also seem to plan ahead, hiding food and coming back for it later.",
          "On a mountain, a raven is a useful companion. It sees the whole ridge from above, it notices weather changing before you do, and it is never in a hurry. Old climbers in Alaska say that if a raven leaves the summit, you should think about leaving too."
        ],
        "questions": [
          {
            "q": "What is one way a raven is different from a crow?",
            "choices": [
              "Ravens are smaller",
              "Ravens cannot fly high",
              "Ravens have a deep croaking call",
              "Ravens have brown feathers on their wings in winter"
            ],
            "answer": 2,
            "skill": "Finding details",
            "hint": "Look at the last sentence of paragraph 1."
          },
          {
            "q": "Which of these did the report give as evidence that ravens are clever?",
            "choices": [
              "They build nests on high ridges",
              "They solved puzzles with several steps",
              "They can copy human speech",
              "They live longer than any other bird in the crow family"
            ],
            "answer": 1,
            "skill": "Finding details",
            "hint": "Paragraph 2 lists the experiments."
          },
          {
            "q": "What does the old climbers' saying about a raven leaving the summit suggest?",
            "choices": [
              "Ravens get bored easily",
              "Ravens will not fly that high",
              "The weather may be about to change",
              "Ravens are afraid of climbers"
            ],
            "answer": 2,
            "skill": "Reading between the lines",
            "hint": "Paragraph 3 says what a raven notices before you do."
          },
          {
            "q": "In paragraph 2 the report says ravens 'seem to plan ahead.' What does plan ahead mean here?",
            "choices": [
              "Fly in a straight line",
              "Copy whatever another bird does",
              "Remember someone unkind to them",
              "Do something now that will help them later"
            ],
            "answer": 3,
            "skill": "Word meanings",
            "hint": "The rest of that sentence gives you the example: hiding food and coming back for it later."
          },
          {
            "q": "What is the whole report mostly about?",
            "choices": [
              "What ravens are like, how clever they are, and why climbers watch them",
              "The experiments scientists have run to find out how ravens solve problems and remember people",
              "How the whole crow family has spread across Alaska and learned to live near people",
              "Why climbers in Alaska should ignore a raven that leaves the summit and keep going"
            ],
            "answer": 0,
            "skill": "Main idea",
            "hint": "Give each paragraph a short label, then pick the choice that covers all three without claiming more than the report says."
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Break it apart",
          "points": [
            "Big multiplication: split one number into easy pieces. 32 × 14 = 32 × 10 + 32 × 4.",
            "A fraction times a whole number: 3 × 2/5 is three 2/5s, which is 6/5.",
            "Adding three numbers: add two, then add the third."
          ],
          "example": "32 × 10 = 320 and 32 × 4 = 128, so 32 × 14 = 448."
        },
        "problems": [
          {
            "q": "The trail to the first stop is 24 sections long. Each section is 15 feet. How many feet is the trail?",
            "answer": "360",
            "hint": "24 × 10 first, then 24 × 5, and add.",
            "skill": "Multiplying"
          },
          {
            "q": "Each of the 4 climbers drinks 3/4 of a quart of water at the first stop. How many quarts do they drink in all?",
            "answer": "3",
            "hint": "Four 3/4s: 3/4 + 3/4 + 3/4 + 3/4 = 12/4. How many wholes is 12/4?",
            "skill": "Fractions"
          },
          {
            "q": "Your pack weighs 12 pounds. You add a tent that weighs 9 pounds and a stove that weighs 4 pounds. What does the pack weigh now?",
            "answer": "25",
            "hint": "12 + 9 first, then add 4.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "You carry 3 water bottles that weigh 2 pounds each, plus a 12-pound pack. How many pounds are you carrying?",
            "answer": "18",
            "hint": "First find what 3 bottles weigh: 3 × 2. Then add the pack.",
            "skill": "Multi-step problems"
          },
          {
            "q": "96 energy bars are split evenly among 8 climbers. How many bars does each climber get?",
            "answer": "12",
            "hint": "How many 8s make 96?",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The idea that covers all three",
            "points": [
              "Read all three paragraphs, then say what the report is about in one sentence, before you look at a single choice.",
              "Most of the wrong answers here are true. They are just one paragraph's worth, or bigger than anything the report actually claims.",
              "Then four more moves: prove a claim with one line, say what a paragraph is for, work a word out from its sentence, and put two paragraphs together."
            ],
            "example": "Three paragraphs about a dog: what it looks like, what it can be trained to do, why a shepherd keeps one. 'It has a thick coat' covers one paragraph. 'Dogs are loyal' covers nothing the report said. 'A dog bred for the hills is clever enough to be worth a shepherd's time' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Ravens have solved puzzles with several steps in experiments, and have pulled up strings to reach food tied to the end.",
                "Birds are far more intelligent than most people are willing to admit.",
                "Ravens are common in Alaska, unusually clever for a bird, and worth watching if you are on a mountain.",
                "A raven's call is the same sharp caw a crow makes."
              ],
              "answer": 2,
              "hint": "Give each paragraph a short label: what it looks like, how clever it is, what it means to a climber. Then find the choice that covers all three labels.",
              "skill": "Central idea and evidence",
              "evidence": "On a mountain, a raven is a useful companion."
            },
            {
              "q": "Claim: a raven does not only react to what is in front of it, it thinks about what is coming. Which sentence from the report best supports that claim?",
              "choices": [
                "Scientists who study ravens keep finding new evidence of how clever they are.",
                "They also seem to plan ahead, hiding food and coming back for it later.",
                "They remember people who were unkind to them, sometimes for years.",
                "On a mountain, a raven is a useful companion."
              ],
              "answer": 1,
              "hint": "Remembering points backward. The claim points forward. Find the sentence about something the bird has not done yet.",
              "skill": "Finding details",
              "evidence": "They also seem to plan ahead, hiding food and coming back for it later."
            },
            {
              "q": "Why does the report end with a paragraph about climbers instead of stopping after the experiments?",
              "choices": [
                "It explains how ravens build their nests on a mountain.",
                "It compares the raven with the crow one more time.",
                "It turns facts about the bird into something a climber on a ridge can use.",
                "It lists the experiments scientists have run on ravens."
              ],
              "answer": 2,
              "hint": "Delete the last paragraph in your head. What would you no longer know? Two of these choices describe paragraphs that come earlier.",
              "skill": "Author's purpose and structure",
              "evidence": "On a mountain, a raven is a useful companion."
            },
            {
              "q": "The report says ravens can be seen 'riding the wind above mountain ridges'. What does riding mean as it is used here?",
              "choices": [
                "Sitting on the back of a larger animal",
                "Flapping hard to push straight into the wind",
                "Being blown off course and unable to steer",
                "Staying up in the air by letting the moving air carry them"
              ],
              "answer": 3,
              "hint": "You know riding from a bike or a horse, where something solid carries you. Here the only thing under the bird is moving air. Keep the carrying, drop the saddle.",
              "skill": "Word meanings",
              "evidence": "Ravens are the largest members of the crow family, and in Alaska they are everywhere: on lampposts, on rooftops, and riding the wind above mountain ridges."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the old climbers' advice about a raven leaving the summit is worth taking. Why is it?",
              "choices": [
                "A bird clever enough to plan ahead, and high enough to see weather coming, is not leaving for no reason.",
                "Ravens are too large to fly safely once the wind picks up, so they come down off the ridge whenever the air starts moving.",
                "Ravens hide food near the summit and come back for it later, so a bird leaving has only gone to fetch what it hid.",
                "Ravens leave the summit at the same hour every day, so a climber who knows that hour can use them instead of a watch."
              ],
              "answer": 0,
              "hint": "One paragraph tells you how much the bird works out for itself. Another tells you what it can see from up there. Put the two together and ask what its leaving means.",
              "skill": "Reading between the lines",
              "evidence": "It sees the whole ridge from above, it notices weather changing before you do, and it is never in a hurry."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Adding up the pack",
            "points": [
              "Adding three numbers: add two, then add the third. 7 + 8 + 6.",
              "Multiplication facts: 3 × 5 is three fives.",
              "Fractions with the same bottom: 1/5 + 3/5 = 4/5."
            ],
            "example": "7 + 8 = 15, then 15 + 6 = 21 rocks."
          },
          "problems": [
            {
              "q": "Your pack weighs 12 pounds. You add a tent that weighs 9 pounds and a stove that weighs 4 pounds. What does the pack weigh now?",
              "answer": "25",
              "hint": "12 + 9 first. Then add 4.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "You carry 3 water bottles. Each weighs 2 pounds. How many pounds is that?",
              "answer": "6",
              "hint": "3 × 2.",
              "skill": "Multiplying"
            },
            {
              "q": "You drank 1/4 of your water bottle on the way up and 2/4 at the first stop. How much is gone? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "24 energy bars are shared equally among 4 climbers. How many bars does each climber get?",
              "answer": "6",
              "hint": "How many 4s make 24?",
              "skill": "Dividing"
            },
            {
              "q": "The trail has 5 sections. Each section is 10 feet. How many feet long is the trail?",
              "answer": "50",
              "hint": "5 × 10.",
              "skill": "Multiplying"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Rates, ratios and decimals",
            "points": [
              "A rate: 16 sections at 4.5 feet each is 16 × 4.5.",
              "Unlike bottoms: 2/3 + 1/6 = 4/6 + 1/6.",
              "Percent of a number: 20% of 45 is 45 × 0.2.",
              "A ratio of ropes to tents of 5:3 with 20 ropes means 20 ÷ 5 × 3 tents."
            ],
            "example": "16 × 4.5 = 16 × 4 + 16 × 0.5 = 64 + 8 = 72."
          },
          "problems": [
            {
              "q": "The trail has 24 sections of 15.5 feet each. How long is the trail in feet?",
              "answer": "372",
              "hint": "24 × 15 plus 24 × 0.5.",
              "skill": "Decimals"
            },
            {
              "q": "Add: 3/4 + 1/8 (answer as a fraction)",
              "answer": "7/8",
              "hint": "Change 3/4 into eighths first.",
              "skill": "Fractions"
            },
            {
              "q": "Your pack weighs 12.5 pounds. You add 3 bottles at 1.25 pounds each. What does it weigh now?",
              "answer": "16.25",
              "hint": "3 × 1.25 first. Then add.",
              "skill": "Decimals"
            },
            {
              "q": "The team packs water and food in the ratio 3 to 2. If they pack 15 bottles of water, how many food packs?",
              "answer": "10",
              "hint": "15 ÷ 3 = 5 groups. Each group has 2 packs.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A 240-bar box has 25% eaten on day one. How many bars were eaten?",
              "answer": "60",
              "hint": "25% is one quarter. 240 ÷ 4.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many. To see how many fit, divide by the size of one: 7 ÷ 0.25 = 28.",
              "Working backward: after a 10% rise, the new number is 110% of the old one, so divide by 1.1 to go back.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the last thing done to x first. If a set of parentheses is multiplied, divide first."
            ],
            "example": "(x + 7) × 3 = 39, so x + 7 = 13, so x = 6."
          },
          "problems": [
            {
              "q": "The team has 12 feet of rope, and each section of fixed line takes 1.5 feet. How many sections is that enough for?",
              "answer": "8",
              "hint": "12 ÷ 1.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of energy bars rose by 25% to 100. What was it before?",
              "answer": "80",
              "hint": "100 is 125% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "It was 9 degrees, then it fell 17 degrees. What does the thermometer read?",
              "answer": "-8",
              "accept": [
                "−8"
              ],
              "hint": "From 9 down to 0 is 9, and there are 8 left to fall.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 4) × 9 = 117",
              "answer": "9",
              "hint": "Divide both sides by 9 first, then take 4 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 5. The tent on the model is 11 inches long. How many inches long is the real one?",
              "answer": "55",
              "hint": "Every inch on the model is 5 inches for real.",
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
            "example": "y = 3x + 8 when x = 6: 3 × 6 + 8 = 18 + 8 = 26."
          },
          "problems": [
            {
              "q": "The count of energy bars follows the rule y = 5x + 12, where x is the hour. What is y when x = 7?",
              "answer": "47",
              "hint": "Put 7 in for x: 5 × 7 + 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 3² + 5²?",
              "answer": "34",
              "hint": "3 × 3 = 9 and 5 × 5 = 25. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 13-foot rope reaches the top of a 5-foot pole. How far is the foot of the rope from the base of the pole, in feet?",
              "answer": "12",
              "hint": "b² = c² − a² = 169 − 25 = 144. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x + 22 − 5x = 28",
              "answer": "3",
              "hint": "Collect the x's first: 2x + 22 = 28.",
              "skill": "Equations"
            },
            {
              "q": "What is 7 × 10^3 ÷ 10^2?",
              "answer": "70",
              "hint": "Dividing subtracts the powers: 10^3 ÷ 10^2 = 10^1. So 7 × 10.",
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
            "Count how many steps there are. The last one often changes everything."
          ],
          "example": "If step 4 says 'ignore steps 1 to 3', then steps 1 to 3 were a trap, and you just saved yourself the work."
        },
        "skill": "Following directions",
        "steps": [
          "Write down the word RAVEN.",
          "Count how many letters it has.",
          "Count how many of those letters are vowels: A, E, I, O and U.",
          "Add the two counts together.",
          "Add 2 more, because a raven can be more than two feet long from beak to tail.",
          "Type your answer as a word, not a number, in capital letters. (A total of 12 would be TWELVE.)"
        ],
        "prompt": "Your answer:",
        "answer": "NINE",
        "accept": [
          "nine",
          "Nine",
          "nine.",
          "NINE."
        ],
        "hint": "RAVEN has five letters, and two of them are vowels. Step 6 asks for the total spelled out, not written in digits."
      }
    },
    {
      "id": "flattop-2",
      "title": "Glaciers from the Ridge",
      "recon": {
        "lesson": {
          "title": "Cause, effect, and 'called'",
          "points": [
            "'What makes X happen' questions: look for 'because', 'so', or a sentence that says what causes what.",
            "When a report says 'these are called ___', that word's definition is right before it."
          ],
          "example": "'Baby kangaroos are called joeys' tells you exactly what a joey is: a baby kangaroo."
        },
        "title": "Field Report: Rivers of Ice",
        "passage": [
          "A glacier is a river of ice. It begins high in the mountains, where more snow falls each winter than melts each summer. Year after year the snow piles up, and the weight of the new snow squeezes the old snow underneath into solid ice. When the ice gets thick enough, something surprising happens: it starts to move.",
          "Glaciers move slowly, usually a few inches to a few feet a day. The ice at the bottom is under so much pressure that it bends and flows, a little like very cold honey. As the glacier creeps downhill it drags rocks and gravel along with it, scraping the valley floor. Over thousands of years this carves a wide valley with a rounded bottom, shaped like the letter U. A valley cut by a river, by contrast, is narrow and shaped like a V.",
          "Alaska has around 100,000 glaciers, more than any other state. Some are so large that the U-shaped valleys they carved are now filled with seawater. These flooded valleys are called fjords, and boats can sail right up to the face of the ice."
        ],
        "questions": [
          {
            "q": "What turns old snow into ice?",
            "choices": [
              "Sunlight warming it in summer",
              "Wind blowing across the top",
              "The weight of new snow pressing down on it",
              "Rain soaking down into it"
            ],
            "answer": 2,
            "skill": "Finding details",
            "hint": "Paragraph 1, the sentence about the weight of new snow."
          },
          {
            "q": "How can you tell a valley carved by a glacier from one cut by a river?",
            "choices": [
              "Glacier valleys are always dry, and river valleys always hold water",
              "River valleys are wider at the bottom because water spreads out",
              "There is no difference in shape, only in how long each one took to form",
              "Glacier valleys are U-shaped; river valleys are V-shaped"
            ],
            "answer": 3,
            "skill": "Finding details",
            "hint": "The end of paragraph 2 compares the two letter shapes."
          },
          {
            "q": "What is a fjord?",
            "choices": [
              "A kind of glacier",
              "A mountain peak",
              "A glacier-carved valley filled with seawater",
              "A narrow valley cut by a river and later flooded by the sea"
            ],
            "answer": 2,
            "skill": "Word meanings",
            "hint": "Paragraph 3 defines it right after the word 'called'."
          },
          {
            "q": "The report says the ice at the bottom 'bends and flows, a little like very cold honey.' Why does it use honey to explain the ice?",
            "choices": [
              "To show that ice can move even though it is solid, and moves slowly",
              "To show that a glacier picks up rocks and gravel and carries them along",
              "To show that the ice is warm inside",
              "To show that the ice is made of more than one thing"
            ],
            "answer": 0,
            "skill": "Reading between the lines",
            "hint": "Picture cold honey coming out of a jar. What is it doing, and how fast?"
          },
          {
            "q": "Which title fits the report best?",
            "choices": [
              "Winter Snowfall in the Mountains of Alaska",
              "Rivers, Valleys, and the Shapes They Cut Into the Land",
              "Rivers of Ice: How Glaciers Form, Move, and Shape the Land",
              "Alaska's Flooded Valleys and the Boats That Visit Them"
            ],
            "answer": 2,
            "skill": "Main idea",
            "hint": "Three paragraphs: how the ice is made, how it moves, what it leaves behind. A good title covers all three, not just one of them."
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Share equally, then two steps",
          "points": [
            "Sharing equally is division. 42 ropes shared by 6 teams is 42 ÷ 6.",
            "Two-step problems: do the multiplying first, then the adding. 6 miles a day for 9 days is 6 × 9, then add the extra.",
            "Fractions with the same bottom: 2/9 + 4/9 = 6/9."
          ],
          "example": "4,200 − 2,700: take away 2,000 to get 2,200, then take away 700 to get 1,500."
        },
        "problems": [
          {
            "q": "There are 27 hand warmers in the gear bag, shared equally among 3 hikers. How many does each hiker get?",
            "answer": "9",
            "hint": "27 ÷ 3.",
            "skill": "Dividing"
          },
          {
            "q": "A climber walks 5 miles a day for 8 days, then 4 more miles the next morning. How many miles in all?",
            "answer": "44",
            "hint": "5 × 8 first. Then add 4.",
            "skill": "Multi-step problems"
          },
          {
            "q": "A glacier moved 1,250 centimeters in 5 days. How many centimeters did it move each day?",
            "answer": "250",
            "hint": "1,250 ÷ 5.",
            "skill": "Dividing"
          },
          {
            "q": "The ridge trail is 3,600 feet long. You have walked 1,900 feet. How many feet are left?",
            "answer": "1700",
            "hint": "3,600 − 1,900. Line up the place values.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "2/6 of the ridge trail is snow and 3/6 is bare rock. What fraction is snow or rock together? (write a fraction)",
            "answer": "5/6",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Which line proves it",
            "points": [
              "A supporting sentence has to do the whole job of the claim on its own. Say the claim, then read your pick, and ask whether anyone could still argue.",
              "Every choice will be a real sentence from the report, so being true earns nothing. Only proving counts.",
              "Watch for a sentence that shares a word with the claim and proves nothing. That is the trap in almost every one of these."
            ],
            "example": "Claim: the bridge is unsafe for heavy trucks. 'The bridge was built in 1890' is true and proves nothing. 'A sign at each end limits it to three tons' is proof."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "Alaska has more glaciers than any other state in the country.",
                "Ice is the most powerful force at work anywhere on Earth.",
                "Snow packed hard enough becomes ice that moves, and moving ice reshapes the land it crosses.",
                "A glacier is a solid block that stays frozen in one place."
              ],
              "answer": 2,
              "hint": "Label the paragraphs: how ice is made, how it moves and carves, what it left behind in Alaska. One choice covers only the last of those, and one says the opposite of the report.",
              "skill": "Central idea and evidence",
              "evidence": "When the ice gets thick enough, something surprising happens: it starts to move."
            },
            {
              "q": "Claim: the ice deep inside a glacier does not behave the way you expect solid ice to behave. Which sentence from the report best supports that claim?",
              "choices": [
                "Year after year the snow piles up, and the weight of the new snow squeezes the old snow underneath into solid ice.",
                "Glaciers move slowly, usually a few inches to a few feet a day.",
                "As the glacier creeps downhill it drags rocks and gravel along with it, scraping the valley floor.",
                "The ice at the bottom is under so much pressure that it bends and flows, a little like very cold honey."
              ],
              "answer": 3,
              "hint": "Slow is still solid. Look for the sentence that says the ice does something solid things are not supposed to do.",
              "skill": "Finding details",
              "evidence": "The ice at the bottom is under so much pressure that it bends and flows, a little like very cold honey."
            },
            {
              "q": "Why does a paragraph about glaciers stop to mention a valley cut by a river?",
              "choices": [
                "It explains why rivers move faster downhill than glaciers do.",
                "It gives an example of a valley that later filled with seawater.",
                "It sets the glacier's U shape against a shape the reader already knows, so the difference is easy to see.",
                "It shows that rivers carve their valleys more quickly than ice does, since a river runs downhill in a day and a glacier moves inches."
              ],
              "answer": 2,
              "hint": "The words 'by contrast' are a signpost. When a writer holds two things next to each other, ask which one is the real subject and which one is there to make it clear.",
              "skill": "Author's purpose and structure",
              "evidence": "A valley cut by a river, by contrast, is narrow and shaped like a V."
            },
            {
              "q": "The report opens by calling a glacier 'a river of ice'. What is that phrase telling you?",
              "choices": [
                "It is solid ice, and yet it flows downhill the way a river does",
                "It is a river of water that freezes over solid every winter and thaws again each spring",
                "It is the meltwater running off the front of the ice",
                "It is a river that runs along underneath the ice"
              ],
              "answer": 0,
              "hint": "A phrase like this puts two ideas in your hand at once. Keep what a river does, drop what a river is made of, and check your answer against the last sentence of the first paragraph.",
              "skill": "Word meanings",
              "evidence": "When the ice gets thick enough, something surprising happens: it starts to move."
            },
            {
              "q": "Paragraphs 1 and 3 together let you work out something about Alaska. What is it?",
              "choices": [
                "Its glaciers move faster than glaciers anywhere else.",
                "Its valleys were all shaped like a V before the ice arrived.",
                "It has a great many places high and cold enough that more snow falls each winter than melts each summer.",
                "Every one of its glaciers reaches the sea and becomes a fjord."
              ],
              "answer": 2,
              "hint": "Paragraph one tells you the one condition a glacier needs to start at all. Paragraph three tells you how many Alaska has. Put the count together with the condition.",
              "skill": "Reading between the lines",
              "evidence": "It begins high in the mountains, where more snow falls each winter than melts each summer."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Sharing and two steps",
            "points": [
              "Sharing equally is dividing: 16 ÷ 2.",
              "Two steps: multiply, then add. 6 × 2, then add 7.",
              "Same bottom: 1/8 + 6/8 = 7/8."
            ],
            "example": "28 cookies, 7 in each bag: how many 7s make 28? 4 bags."
          },
          "problems": [
            {
              "q": "There are 27 hand warmers and each team takes 9. How many teams get hand warmers?",
              "answer": "3",
              "hint": "How many 9s make 27?",
              "skill": "Dividing"
            },
            {
              "q": "A climber walks 5 miles a day for 4 days, then 3 more miles the next morning. How many miles in all?",
              "answer": "23",
              "hint": "5 × 4 first. Then add 3.",
              "skill": "Multi-step problems"
            },
            {
              "q": "The glacier moved 45 centimeters in 5 days. How many centimeters each day?",
              "answer": "9",
              "hint": "45 ÷ 5.",
              "skill": "Dividing"
            },
            {
              "q": "A snowfield on the trail is 360 feet across, and you are 190 feet in. How far is it to the other side?",
              "answer": "170",
              "hint": "360 − 190.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "2/6 of the trail is snow and 3/6 is rock. What fraction is snow or rock? (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Order of operations and negatives",
            "points": [
              "Parentheses first, then multiply and divide left to right, then add and subtract.",
              "Temperatures below zero are negative: from −6 to 9 is a rise of 15.",
              "Dividing: 1,800 ÷ 40 = 45. Subtracting decimals: line up the points, 5.20 − 2.75 = 2.45."
            ],
            "example": "3 × (10 − 4) + 2 = 3 × 6 + 2 = 20."
          },
          "problems": [
            {
              "q": "Solve: 5 × (8 − 3) + 4",
              "answer": "29",
              "hint": "Parentheses first.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn on the ridge it was −8 degrees. By noon it was 5 degrees. By how many degrees did it rise?",
              "answer": "13",
              "hint": "From −8 up to 0 is 8, then 5 more.",
              "skill": "Negative numbers"
            },
            {
              "q": "A glacier moved 1,250 centimeters in 25 days. How many centimeters per day?",
              "answer": "50",
              "hint": "1,250 ÷ 25.",
              "skill": "Dividing"
            },
            {
              "q": "The whole trail is 3.6 miles. You have walked 1.85. How far is left, in miles?",
              "answer": "1.75",
              "hint": "3.60 − 1.85.",
              "skill": "Decimals"
            },
            {
              "q": "Solve: 2/3 of 27, then subtract 1/3 of 27",
              "answer": "9",
              "hint": "Find 2/3 of 27 and 1/3 of 27 first. Then subtract.",
              "skill": "Fractions"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 45 ÷ 10 = 4.5.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the last thing done to x first. If a set of parentheses is multiplied, divide first."
            ],
            "example": "3(x + 4) = 33, so x + 4 = 11, so x = 7."
          },
          "problems": [
            {
              "q": "Fixing 20 sections of line took 70 feet of rope. At the same rate, how many feet of rope would 24 sections take?",
              "answer": "84",
              "hint": "One section takes 70 ÷ 20 = 3.5. Then × 24.",
              "skill": "Ratios and percent"
            },
            {
              "q": "20% of the 60 hand warmers were lost. How many hand warmers was that?",
              "answer": "12",
              "hint": "20% of 60: 20/100 × 60.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer falls 4 degrees every hour for 4 hours. What is the total change? (Write a fall as a negative number.)",
              "answer": "-16",
              "accept": [
                "−16"
              ],
              "hint": "4 hours of −4 each: 4 × (−4). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 2(x + 9) = 34",
              "answer": "8",
              "hint": "Divide both sides by 2 to get x + 9 = 17.",
              "skill": "Equations"
            },
            {
              "q": "A square board has an area of 400 square inches. How many inches is it around the edge?",
              "answer": "80",
              "hint": "Find one side first: what number times itself makes 400? Then add four sides.",
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
            "example": "A list goes 7, 11, 15, 19. It starts at 7 and adds 4 each step, so the 10th number is 7 + 9 × 4 = 43."
          },
          "problems": [
            {
              "q": "The count of hand warmers goes 5, 8, 11, 14, and on. What is the 13th number in the list?",
              "answer": "41",
              "hint": "It starts at 5 and adds 3 each step. The number you want is 12 steps on from 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 9² − 9?",
              "answer": "72",
              "hint": "9 × 9 = 81, then take 9 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 6 and 8 feet. How long is its longest side, in feet?",
              "answer": "10",
              "hint": "6² + 8² = 100. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x − x = 40",
              "answer": "10",
              "hint": "x is the same as 1x, so 5 − 1 = 4, and 4x = 40.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 4 feet across and 3 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (The radius is half the distance across.)",
              "answer": "37.68",
              "hint": "The radius is 4 ÷ 2 = 2. Volume = 3.14 × radius × radius × depth: 3.14 × 2 × 2 × 3.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "A step can cancel other steps",
          "points": [
            "Some steps tell you to ignore earlier steps. You only find out by reading to the end.",
            "Do exactly what the steps say. Not more."
          ],
          "example": "Read the whole list. Then decide what actually needs doing."
        },
        "skill": "Following directions",
        "steps": [
          "Write down the 10 feet the survey measured the glacier moving in week one.",
          "Double it for week two.",
          "Add 6 feet for week three.",
          "Ignore step 3 completely. Week three's reading came from a V-shaped river valley, not from the glacier, so those 6 feet do not count.",
          "Add your step 1 number back on for the week the survey started.",
          "Type how many feet the glacier moved."
        ],
        "prompt": "Feet moved:",
        "answer": "30",
        "hint": "Step 4 crosses week three out, so go back to your week two number before you add anything else."
      }
    },
    {
      "id": "flattop-3",
      "title": "Ground Crew",
      "recon": {
        "lesson": {
          "title": "'Why' questions",
          "points": [
            "'Why' questions: the report answers them in its own words. Look for 'which is why' or 'because'.",
            "'What is a ___?' questions: find the word 'called'. The meaning is often in the words just before it."
          ],
          "example": "'Owls hunt at night, which is why they have huge eyes.' Why do owls have huge eyes? The answer sits right before 'which is why'."
        },
        "title": "Field Report: Lumbricus terrestris",
        "passage": [
          "The common earthworm has a grand scientific name: Lumbricus terrestris. It has no eyes, no ears, and no lungs, yet it is one of the most important animals on Earth. An earthworm breathes through its skin, which is why it must stay moist, and why you see so many on the sidewalk after rain. Instead of one heart it has five pairs of pumping tubes near its head that push blood through its body.",
          "Earthworms eat their way through the soil, swallowing dirt and dead leaves and leaving behind tiny crumbs called castings. Those castings are packed with the nutrients plants need. The worms' tunnels let air and water reach plant roots. A single acre of good farmland can hold more than a million earthworms, all quietly plowing the ground.",
          "Charles Darwin, the scientist famous for his ideas about evolution, spent nearly forty years studying earthworms. He worked out that they could slowly bury whole fields, and even the floors of old buildings, under fresh soil. He decided that few other animals had played such an important part in the history of the world."
        ],
        "questions": [
          {
            "q": "Why must an earthworm stay moist?",
            "choices": [
              "It drinks water through its mouth all day",
              "It has no heart",
              "It lives underwater",
              "It breathes through its skin"
            ],
            "answer": 3,
            "skill": "Finding details",
            "hint": "Paragraph 1, the sentence with the word 'breathes'."
          },
          {
            "q": "What are castings?",
            "choices": [
              "The eggs a worm leaves in its tunnels",
              "The nutrient-rich crumbs worms leave behind",
              "The tunnels worms dig that let air and water down to roots",
              "A kind of packed soil that is too hard for worms to swallow"
            ],
            "answer": 1,
            "skill": "Word meanings",
            "hint": "Paragraph 2, right after the word 'called'."
          },
          {
            "q": "How long did Darwin study earthworms?",
            "choices": [
              "About a year",
              "Nearly all of his childhood",
              "Nearly forty years",
              "The report does not say"
            ],
            "answer": 2,
            "skill": "Finding details",
            "hint": "First sentence of paragraph 3."
          },
          {
            "q": "The report says a million earthworms are 'quietly plowing the ground.' What does that tell you about what worms do to soil?",
            "choices": [
              "They break the soil into hard clumps a farmer has to plow again",
              "They turn and loosen the soil the way a plow does",
              "They cut plant roots as they tunnel, the way a plow blade does",
              "They press the soil down flat so that water runs off the surface"
            ],
            "answer": 1,
            "skill": "Reading between the lines",
            "hint": "Paragraph 2 says what the eating and the tunnels do. A plow does the same job to a field."
          },
          {
            "q": "What is the report mostly about?",
            "choices": [
              "How Charles Darwin spent nearly forty years proving that his ideas about evolution were right",
              "How an earthworm breathes and pumps blood without lungs",
              "Why soil animals matter more than animals above ground",
              "Why the earthworm matters so much, even though it seems small and simple"
            ],
            "answer": 3,
            "skill": "Main idea",
            "hint": "Label each paragraph: the body, the work it does, the reason it matters. One choice is only paragraph 1, and two say things the report never says."
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Hundredths, area, and making change",
          "points": [
            "Hundredths as a decimal: 45/100 is 0.45. The second place after the point is hundredths.",
            "Area of a rectangle: length × width. A 6 cm by 8 cm card is 6 × 8 = 48 square centimeters.",
            "Making change: count up from the price to what you paid. From $4.98 to $5 is 2 cents, then to $10 is $5 more."
          ],
          "example": "43 × 15: 43 × 10 = 430 and 43 × 5 = 215, so 645."
        },
        "problems": [
          {
            "q": "The soil grid has 100 squares, and worms turned up in 37 of them. Write 37/100 as a decimal.",
            "answer": "0.37",
            "hint": "Hundredths take two places after the point.",
            "skill": "Decimals"
          },
          {
            "q": "A field has 36 rows, and each row has 25 worm tunnels. How many tunnels in all?",
            "answer": "900",
            "hint": "36 × 20 plus 36 × 5.",
            "skill": "Multiplying"
          },
          {
            "q": "A soil sample tray is 4 cm wide and 5 cm long. What is its area in square centimeters?",
            "answer": "20",
            "hint": "Area = length × width.",
            "skill": "Area and perimeter"
          },
          {
            "q": "One earthworm is 30 cm long. Four worms lie end to end. How long is the line, in centimeters?",
            "answer": "120",
            "hint": "4 × 30.",
            "skill": "Multiplying"
          },
          {
            "q": "A field guide costs $9.99. You pay with a $20 bill. How much change do you get? (write it like 4.25)",
            "answer": "10.01",
            "accept": [
              "$10.01"
            ],
            "hint": "Count up: $9.99 to $10.00 is one cent. $10 to $20 is ten dollars.",
            "skill": "Money and decimals"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What a paragraph is for",
            "points": [
              "Every paragraph is doing a job: setting the scene, giving a cause, comparing two things, or backing up something claimed earlier.",
              "Find the job by deleting the paragraph in your head. What would you no longer know? That missing thing is the job.",
              "A choice that only retells the paragraph has not named a job. Look for the one that says why it is in the report at all."
            ],
            "example": "A report on a bakery ends with a paragraph about a customer who has come every morning for thirty years. Its job is not to describe a customer. It is to back up the claim in paragraph one that the place is part of the street."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "An earthworm has five pairs of pumping tubes instead of a single heart, and it breathes through its skin, which is why it must stay moist.",
                "Soil is the most valuable resource on the planet.",
                "Earthworms interest scientists but do very little to the soil itself.",
                "An animal that seems to have almost nothing to work with turns out to do work important enough to matter to the whole world."
              ],
              "answer": 3,
              "hint": "Paragraph one is what the worm has not got. Paragraph two is what it does anyway. Paragraph three is somebody spending forty years on that. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "It has no eyes, no ears, and no lungs, yet it is one of the most important animals on Earth."
            },
            {
              "q": "Claim: an earthworm changes the soil in a way that has nothing to do with what passes through its body. Which sentence from the report best supports that claim?",
              "choices": [
                "An earthworm breathes through its skin, which is why it must stay moist, and why you see so many on the sidewalk after rain.",
                "The worms' tunnels let air and water reach plant roots.",
                "Instead of one heart it has five pairs of pumping tubes near its head that push blood through its body.",
                "Earthworms eat their way through the soil, swallowing dirt and dead leaves and leaving behind tiny crumbs called castings."
              ],
              "answer": 1,
              "hint": "Two of these are about the worm's own body, and one is about what it eats and leaves behind. The claim rules all of that out. What is left that a worm makes?",
              "skill": "Finding details",
              "evidence": "The worms' tunnels let air and water reach plant roots."
            },
            {
              "q": "Why does the report end with a paragraph about Charles Darwin?",
              "choices": [
                "It explains how the theory of evolution actually works, using the worms burying a whole field a little at a time as the example of slow change adding up.",
                "It describes what the ground looked like where Darwin worked.",
                "It puts a famous scientist's forty years behind the claim made in the first paragraph, that this is one of the most important animals on Earth.",
                "It shows that earthworms were first discovered in the 1800s, when a famous scientist spent nearly forty years working out what they were really doing in the soil."
              ],
              "answer": 2,
              "hint": "Read the last sentence of the report and the second sentence of the report side by side. They say close to the same thing. Ask why a writer would want that said twice, by two different voices.",
              "skill": "Author's purpose and structure",
              "evidence": "He decided that few other animals had played such an important part in the history of the world."
            },
            {
              "q": "The report says a million earthworms in an acre are 'all quietly plowing the ground'. What does plowing mean as it is used here?",
              "choices": [
                "Dragging a farm machine along behind them",
                "Breaking up and turning over the soil",
                "Planting seeds in long straight rows in a field",
                "Pressing the soil down until it is flat and hard"
              ],
              "answer": 1,
              "hint": "You have seen a plow behind a tractor. Ask what the plow does to the field, not what pulls it, and check that against the two sentences before this one.",
              "skill": "Word meanings",
              "evidence": "A single acre of good farmland can hold more than a million earthworms, all quietly plowing the ground."
            },
            {
              "q": "Paragraphs 2 and 3 together explain how earthworms could bury the floor of an old building. How could they?",
              "choices": [
                "They dig under the walls until the whole building settles into the ground, sinking a little lower every year.",
                "They drag dead leaves indoors and pack them across the floor.",
                "They eat the stone of the floor itself and leave crumbs in its place.",
                "The fresh soil that covers it is the castings they leave behind, arriving year after year."
              ],
              "answer": 3,
              "hint": "Paragraph three says buildings get buried under fresh soil but never says where the soil comes from. Paragraph two tells you what a worm leaves behind. That is the missing half.",
              "skill": "Reading between the lines",
              "evidence": "He worked out that they could slowly bury whole fields, and even the floors of old buildings, under fresh soil."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Same bottoms and counting squares",
            "points": [
              "5/8 − 1/8: same bottom, subtract the tops.",
              "Area by counting: a 3 by 9 rectangle has 3 rows of 9 squares, so 3 × 9.",
              "Money: two things at $3 and $4 is $7."
            ],
            "example": "3 rows of 9 squares is 27 squares."
          },
          "problems": [
            {
              "q": "Subtract: 7/10 − 4/10 (write a fraction)",
              "answer": "3/10",
              "hint": "Same bottom. Subtract the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A field has 6 rows with 7 worm tunnels in each row. How many tunnels?",
              "answer": "42",
              "hint": "6 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "A worm bin is 4 squares wide and 5 squares long. How many squares is its floor?",
              "answer": "20",
              "hint": "4 rows of 5.",
              "skill": "Area and perimeter"
            },
            {
              "q": "One earthworm is 30 cm long. Four worms lie end to end. How long is the line, in centimeters?",
              "answer": "120",
              "hint": "4 × 30.",
              "skill": "Multiplying"
            },
            {
              "q": "A field guide costs $6 and a pencil costs $2. How much do they cost together?",
              "answer": "8",
              "accept": [
                "$8",
                "8.00",
                "$8.00"
              ],
              "hint": "6 + 2.",
              "skill": "Money and decimals"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Area, volume and unit rates",
            "points": [
              "Area of a triangle: half of base times height.",
              "Volume: length × width × height.",
              "Unit rate: 560 seeds in 16 rows is 560 ÷ 16 = 35 per row.",
              "Percent: 40% of 85 is 85 × 0.4 = 34."
            ],
            "example": "A triangle with base 10 and height 7: half of 10 × 7 is half of 70, so the area is 35."
          },
          "problems": [
            {
              "q": "A triangular worm bed has a base of 6 meters and a height of 4 meters. What is its area in square meters?",
              "answer": "12",
              "hint": "Half of 6 × 4.",
              "skill": "Area and perimeter"
            },
            {
              "q": "A soil sample box is 4 cm by 3 cm by 5 cm. What is its volume in cubic centimeters?",
              "answer": "60",
              "hint": "4 × 3 × 5.",
              "skill": "Volume"
            },
            {
              "q": "A field has 900 tunnels spread evenly over 36 rows. How many tunnels per row?",
              "answer": "25",
              "hint": "900 ÷ 36.",
              "skill": "Dividing"
            },
            {
              "q": "Of 120 worms in a bin, 30% are on the surface after rain. How many is that?",
              "answer": "36",
              "hint": "10% of 120 is 12, so 30% is 36.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A field guide costs $9.99 and tax adds $0.70. You pay with $20. How much change? (write it like 4.25)",
              "answer": "9.31",
              "hint": "9.99 + 0.70 = 10.69. Then 20 − 10.69.",
              "skill": "Decimals"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many. To see how many fit, divide by the size of one: 7 ÷ 0.25 = 28.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "x ÷ 4 − 3 = 5, so x ÷ 4 = 8, so x = 32."
          },
          "problems": [
            {
              "q": "The job needs 10 feet of garden row in all, at 0.5 feet for each section. One section is already done. How many sections are left?",
              "answer": "19",
              "hint": "10 ÷ 0.5 = 20 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of worm tunnels may change by no more than 25%. Starting from 120, what is the highest count the rule allows?",
              "answer": "150",
              "hint": "25% of 120 is 30. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer fell 8 degrees from −18 degrees. What does it read?",
              "answer": "-26",
              "accept": [
                "−26"
              ],
              "hint": "Falling from −18 takes it further below zero: 18 + 8 degrees below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 9 − 21 = 6",
              "answer": "243",
              "hint": "Add 21 to both sides, then multiply by 9.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 2 feet. How many inches are needed for 44 feet?",
              "answer": "22",
              "hint": "44 ÷ 2.",
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
            "example": "A line goes through (0, 2) and (5, 17). It rises 15 over a run of 5, so the slope is 15 ÷ 5 = 3."
          },
          "problems": [
            {
              "q": "A line passes through (0, 12) and (4, 28). What is its slope?",
              "answer": "4",
              "hint": "Slope is the rise over the run: 16 ÷ 4.",
              "skill": "Linear relationships"
            },
            {
              "q": "One garden bed has 6² worm tunnels. A second bed has the same number. How many worm tunnels in all?",
              "answer": "72",
              "hint": "6² is 36. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The crew goes 5 feet east and then 12 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "13",
              "hint": "The two legs make a right angle: 5² + 12² = 169.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 8x + 21 and 2x + 63 come to the same number?",
              "answer": "7",
              "hint": "Set them equal, take 2x off both sides, then take 21 off.",
              "skill": "Equations"
            },
            {
              "q": "The crew writes down 9 × 10^4. Then they find the number ten times as big. Written out in full, what is the new number?",
              "answer": "900000",
              "hint": "Ten times adds one to the power: 9 × 10^5.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Write it down",
          "points": [
            "Do the steps in order. Write each result down instead of holding it in your head.",
            "When a step names one of two totals, carry that one forward and drop the other."
          ],
          "example": "Totals of 9 and 14 are on the page. If a step says carry the second one forward, 14 goes on and 9 is dropped."
        },
        "skill": "Following directions",
        "steps": [
          "Three sample squares of soil hold 3, 8 and 5 earthworms. Write the three numbers down.",
          "Add all three together and keep that total.",
          "Take the smallest of the three numbers, multiply it by 4, and keep that total too.",
          "Two totals are on the page now: the one from step 2 and the one from step 3. Carry the step 3 total forward, not the step 2 one.",
          "Add the number of pairs of pumping tubes a worm has instead of a heart. The field report gives it.",
          "Type your total."
        ],
        "prompt": "Your answer:",
        "answer": "17",
        "hint": "A worm has five pairs of pumping tubes. Step 4 names which of your two totals goes on into step 5."
      }
    },
    {
      "id": "flattop-4",
      "title": "The High One",
      "recon": {
        "lesson": {
          "title": "The main reason",
          "points": [
            "'What is the main reason' questions: the report usually says it straight, often in the first sentence of a paragraph.",
            "If two answer choices seem possible, pick the one the report actually names."
          ],
          "example": "In a report about farming, 'Rain is the biggest worry' names the main reason straight out, in five words."
        },
        "title": "Field Report: Denali",
        "passage": [
          "Denali rises 20,310 feet above sea level, making it the highest mountain in North America. It stands in the middle of Alaska, and on a clear day you can see it from more than 150 miles away. Its name comes from the Koyukon people, who have lived near the mountain for thousands of years, and it means 'the high one' or 'the great one.'",
          "Climbing Denali is not like hiking a normal mountain. Most climbers fly in a small plane and land on a glacier, where they set up base camp at about 7,200 feet. From there they haul sleds loaded with food and fuel, moving camp higher every few days so their bodies can get used to the thin air. A trip to the top and back usually takes about three weeks.",
          "The weather is the real danger. Because Denali is so far north and so tall, storms can bring winds over 100 miles per hour and temperatures far below zero, even in summer. Climbers may wait in their tents for days for a storm to pass. The first team reached the summit in 1913, and today only about half the people who try each year make it to the top."
        ],
        "questions": [
          {
            "q": "Where does the name Denali come from?",
            "choices": [
              "An explorer's last name",
              "A Russian word for snow",
              "The Koyukon people's word for 'the high one'",
              "The name of a nearby river"
            ],
            "answer": 2,
            "skill": "Finding details",
            "hint": "Last sentence of paragraph 1."
          },
          {
            "q": "Why do climbers move camp higher a little at a time?",
            "choices": [
              "So they can carry less food and fuel on each trip up",
              "Because the small planes cannot land any higher than base camp",
              "So they can reach the summit and get back down in under three weeks",
              "So their bodies can get used to the thin air"
            ],
            "answer": 3,
            "skill": "Finding details",
            "hint": "Paragraph 2, the sentence about moving camp."
          },
          {
            "q": "Based on the report, what is the main reason only about half of the climbers reach the summit?",
            "choices": [
              "They get lost",
              "The mountain is too steep",
              "Dangerous weather",
              "Broken sleds"
            ],
            "answer": 2,
            "skill": "Reading between the lines",
            "hint": "Paragraph 3 opens by naming the real danger."
          },
          {
            "q": "What is a base camp?",
            "choices": [
              "The last camp a team sets up before making a push for the summit",
              "The camp climbers set up low on the mountain to start from",
              "The small ski plane that lands climbers down on the glacier below",
              "A shelter stocked with food and fuel that climbers use only in storms"
            ],
            "answer": 1,
            "skill": "Word meanings",
            "hint": "Paragraph 2 says where they set it up and what they do from there."
          },
          {
            "q": "Which sentence best states what the report is mostly about?",
            "choices": [
              "The report explains how small planes land on glaciers.",
              "The report compares the world's tallest mountains and their dangers.",
              "The report describes North America's highest mountain and what climbing it takes.",
              "The report tells the story of the Koyukon people who named the mountain."
            ],
            "answer": 2,
            "skill": "Main idea",
            "hint": "Paragraph 1 is the mountain, paragraph 2 is the climb, paragraph 3 is the danger. Only one sentence covers all three and claims nothing extra."
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Line it up",
          "points": [
            "Subtracting big numbers: line up the place values. Thousands under thousands, hundreds under hundreds.",
            "Leftovers: 38 ÷ 5 is 7 with 3 left over, because 7 × 5 = 35.",
            "Perimeter is the distance all the way around: add all four sides. 10 + 4 + 10 + 4."
          ],
          "example": "4 boxes at 35 pounds each is 4 × 35 = 140. Add a 12-pound tent: 152."
        },
        "problems": [
          {
            "q": "Denali's summit is 20,310 feet. Base camp is at 7,200 feet. How many feet do climbers climb from base camp to the summit?",
            "answer": "13110",
            "hint": "20,310 − 7,200. Line up the place values.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The team packs 45 energy bars into bags of 6 for the climb to high camp. After filling as many bags as it can, how many bars are left over?",
            "answer": "3",
            "hint": "How many 6s fit in 45? Take that many 6s away and see what is left.",
            "skill": "Dividing"
          },
          {
            "q": "A team climbs 1,200 feet each day. How many feet do they climb in 5 days?",
            "answer": "6000",
            "hint": "1,200 × 5.",
            "skill": "Multiplying"
          },
          {
            "q": "Three sleds weigh 45 pounds each. The team adds a 15-pound stove. What is the total weight?",
            "answer": "150",
            "hint": "3 × 45 first. Then add 15.",
            "skill": "Multi-step problems"
          },
          {
            "q": "A tent platform is 8 feet long and 6 feet wide. What is its perimeter in feet?",
            "answer": "28",
            "hint": "Add all four sides: 8 + 6 + 8 + 6.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Put the word back in",
            "points": [
              "Cover the word with a finger and read the sentence with a hole in it. What would you put in the hole?",
              "The sentence almost always hands you the answer. Something right beside the word tells you what job it is doing.",
              "Test your pick by putting it back in. If the sentence now says something the report never said, it is the wrong pick."
            ],
            "example": "'The wind scoured the ridge bare.' You do not need a dictionary. The word bare is sitting right there, and it tells you what the scouring left behind."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "Most climbers fly in and set up base camp at about 7,200 feet.",
                "Mountain climbing is the most dangerous sport there is.",
                "Denali's height and far-north position make it a slow climb ruled by the weather.",
                "Denali is usually climbed and descended in a single long day."
              ],
              "answer": 2,
              "hint": "Paragraph one is the size of it, paragraph two is how long the climb takes, paragraph three is the weather. Ask what one fact about the mountain is behind all three.",
              "skill": "Central idea and evidence",
              "evidence": "Because Denali is so far north and so tall, storms can bring winds over 100 miles per hour and temperatures far below zero, even in summer."
            },
            {
              "q": "Claim: the way a Denali climb is planned is decided by what the air does to a body. Which sentence from the report best supports that claim?",
              "choices": [
                "Its name comes from the Koyukon people, who have lived near the mountain for thousands of years, and it means 'the high one' or 'the great one.'",
                "Because Denali is so far north and so tall, storms can bring winds over 100 miles per hour and temperatures far below zero, even in summer.",
                "Most climbers fly in a small plane and land on a glacier, where they set up base camp at about 7,200 feet.",
                "From there they haul sleds loaded with food and fuel, moving camp higher every few days so their bodies can get used to the thin air."
              ],
              "answer": 3,
              "hint": "Saying the climb is unusual is not saying why. Find the sentence that gives a decision about the plan and the reason for it in the same breath.",
              "skill": "Finding details",
              "evidence": "From there they haul sleds loaded with food and fuel, moving camp higher every few days so their bodies can get used to the thin air."
            },
            {
              "q": "The third paragraph opens with 'The weather is the real danger.' What job does that sentence do?",
              "choices": [
                "It repeats the point of the second paragraph in different words, saying again that a climb up and back takes about three weeks.",
                "It sets up a comparison between Denali and other mountains.",
                "It names a cause, and the rest of the paragraph lays out the effects, right down to how many climbers turn back.",
                "It gives the last step in the order of a climb."
              ],
              "answer": 2,
              "hint": "Read what comes after it: winds, cold, days in a tent, half the climbers. Ask what a first sentence is doing when everything after it is a consequence.",
              "skill": "Author's purpose and structure",
              "evidence": "The weather is the real danger."
            },
            {
              "q": "The report says climbers 'haul sleds loaded with food and fuel'. What does haul mean as it is used here?",
              "choices": [
                "Load supplies into a small waiting plane",
                "Drag a heavy load along behind them",
                "Lift something straight up over the head",
                "Push a sled ahead of them down a long slope"
              ],
              "answer": 1,
              "hint": "The rest of the sentence tells you the sleds are loaded and the camp is moving higher. Whatever the word means, it has to fit weight going uphill.",
              "skill": "Word meanings",
              "evidence": "From there they haul sleds loaded with food and fuel, moving camp higher every few days so their bodies can get used to the thin air."
            },
            {
              "q": "Paragraphs 2 and 3 together explain how a three-week trip can end without anyone reaching the top. How can it?",
              "choices": [
                "The plane cannot land on the glacier once the middle of summer has passed.",
                "Base camp is too low for anyone to see the summit from it.",
                "A slow climb plus days stuck waiting out storms can use up the whole trip before the summit.",
                "The sleds turn out to be too heavy to haul above base camp."
              ],
              "answer": 2,
              "hint": "Paragraph two tells you why the climb cannot be rushed. Paragraph three tells you what the weather adds. Neither is enough on its own; hold the two together.",
              "skill": "Reading between the lines",
              "evidence": "Climbers may wait in their tents for days for a storm to pass."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Big subtraction, small pieces",
            "points": [
              "Subtracting within 1,000: line up the place values. 700 − 250.",
              "What is left: the whole is 6/6. Take away 1/6 and 5/6 is left.",
              "Perimeter is all the sides added: 10 + 4 + 10 + 4."
            ],
            "example": "700 − 250 = 450 feet still to go."
          },
          "problems": [
            {
              "q": "The climb today is 900 feet. You have climbed 350. How many feet are left?",
              "answer": "550",
              "hint": "900 − 350.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The team has climbed 5/8 of the way to high camp. What fraction is still ahead? (write a fraction)",
              "answer": "3/8",
              "hint": "The whole climb is 8/8. Take 5/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A team climbs 200 feet each day. How many feet in 4 days?",
              "answer": "800",
              "hint": "200 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "Three sleds weigh 40 pounds each. The team adds a 15-pound stove. What is the total?",
              "answer": "135",
              "hint": "3 × 40 first. Then add 15.",
              "skill": "Multi-step problems"
            },
            {
              "q": "A tent platform is 8 feet long and 6 feet wide. What is its perimeter in feet?",
              "answer": "28",
              "hint": "8 + 6 + 8 + 6.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Mean, elevation and exponents",
            "points": [
              "The mean is the total divided by how many: (700 + 1,100 + 900) ÷ 3.",
              "Exponents: 3 to the power of 4 is 3 × 3 × 3 × 3.",
              "Dividing fractions: 2/3 ÷ 1/6 asks how many sixths fit in two thirds."
            ],
            "example": "(700 + 1,100 + 900) ÷ 3 = 2,700 ÷ 3 = 900 feet a day on average."
          },
          "problems": [
            {
              "q": "Denali's summit is 20,310 feet and base camp is 7,200. A team climbs it in 6 equal days. How many feet per day?",
              "answer": "2185",
              "hint": "20,310 − 7,200 = 13,110. Then ÷ 6.",
              "skill": "Multi-step problems"
            },
            {
              "q": "The team climbed 1,200 feet, then 1,400, then 1,000 on three days. What was the mean feet per day?",
              "answer": "1200",
              "hint": "Add the three, then divide by 3.",
              "skill": "Statistics"
            },
            {
              "q": "Solve: 2 to the power of 5",
              "answer": "32",
              "hint": "2 × 2 × 2 × 2 × 2.",
              "skill": "Order of operations"
            },
            {
              "q": "How many 1/8-mile sections fit in 3/4 of a mile?",
              "answer": "6",
              "hint": "3/4 is 6/8. Six eighths.",
              "skill": "Fractions"
            },
            {
              "q": "A tent platform is 8.5 feet by 6 feet. What is its area in square feet?",
              "answer": "51",
              "hint": "8.5 × 6.",
              "skill": "Decimals"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 27 ÷ 6 = 4.5.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "6x + 11 = 47, so 6x = 36, so x = 6."
          },
          "problems": [
            {
              "q": "16 sections of line needed 24 feet of rope altogether. How many feet is that for one section?",
              "answer": "1.5",
              "hint": "A rate is the total shared out: 24 ÷ 16.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team counted 200 sleds on the first pass. On the second pass the number had fallen by 20%. How many sleds is that?",
              "answer": "160",
              "hint": "20% of 200 is 40. Then take it off.",
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
              "q": "Solve for x: 8x + 19 = 43",
              "answer": "3",
              "hint": "Take 19 off both sides first, then divide by 8.",
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
            "example": "Start at 8 and add 7 each hour: after 9 hours, y = 7 × 9 + 8 = 71."
          },
          "problems": [
            {
              "q": "The team starts with 10 sleds and adds 4 more every hour. After 6 hours, how many sleds are there?",
              "answer": "34",
              "hint": "This is the straight-line rule y = mx + b: 4 × 6 + 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square tent pad has an area of 25 square feet. How long is one side, in feet?",
              "answer": "5",
              "hint": "A square's area is side × side. What number times itself makes 25?",
              "skill": "Powers and roots"
            },
            {
              "q": "The team runs a rope from the top of a 3-foot pole to a point 4 feet away on the ground. How long is the rope, in feet?",
              "answer": "5",
              "hint": "Right triangle: a² + b² = c². 3² + 4² = 9 + 16 = 25. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x + 9 = x + 29",
              "answer": "4",
              "hint": "Take x off both sides to get 5x + 9 = 29, then take 9 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 feet and is 5 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (volume = pi × radius × radius × depth)",
              "answer": "1570",
              "hint": "3.14 × 10 × 10 = 314, then × 5.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Find it, then follow",
          "points": [
            "When a step points you to the report, get the number first. Then start the steps.",
            "Adding digits means each digit on its own: 1 + 9 + 1 + 3, not 19 + 13."
          ],
          "example": "1913 → 1 + 9 + 1 + 3 = 14 → 14 − 4 = 10."
        },
        "skill": "Following directions",
        "steps": [
          "Take the year the first team reached Denali's summit: 1913.",
          "Add its four digits together.",
          "Subtract 4 from that total.",
          "Add the number of weeks a trip to the top and back usually takes. The field report gives it.",
          "Type the result, unless the field report says storms on Denali can bring winds over 100 miles an hour, in which case type STORM instead."
        ],
        "prompt": "Your answer:",
        "answer": "STORM",
        "accept": [
          "storm",
          "Storm",
          "storm.",
          "STORM."
        ],
        "hint": "Add the digits one at a time, then carry the total through step 4. Step 5 sends you back to the field report before you type."
      }
    },
    {
      "id": "flattop-5",
      "title": "Summit Push",
      "recon": {
        "lesson": {
          "title": "Lists and definitions",
          "points": [
            "'Is called' introduces a definition: 'A baby frog is called a tadpole.'",
            "When the report gives a list ('apples, pears, or plums'), one answer choice may be an item from that list."
          ],
          "example": "Question: 'Which of these does a beaver use to build?' Find the list of building things and match one item to a choice."
        },
        "title": "Field Report: Trust the Needle",
        "passage": [
          "A compass works because the Earth itself is a giant magnet. Deep inside the planet, melted iron slowly churns, and this creates a magnetic field that wraps around the whole globe. A compass needle is a tiny magnet balanced on a pin, so it swings around until it lines up with that field and points toward magnetic north.",
          "Here is the tricky part: magnetic north and true north are not the same place. True north is the North Pole, the very top of the globe on a map. Magnetic north is a spot in the Arctic Ocean that wanders many miles every year. The difference between the two, measured in degrees, is called declination. In Florida the difference is small. In Alaska it can be more than 15 degrees, enough to send a hiker far off course over a long day.",
          "Good navigators check the declination for the area before setting out and adjust their compass to match. They also know a compass can be fooled: a metal water bottle, a phone, or even a belt buckle held too close will pull the needle away from north. The rule on a mission is simple. Hold the compass flat, keep metal away from it, and trust the needle over your gut."
        ],
        "questions": [
          {
            "q": "Why does a compass needle point north?",
            "choices": [
              "It is pulled by the moon",
              "It is heavier on one end",
              "Cold air pushes it",
              "It lines up with Earth's magnetic field"
            ],
            "answer": 3,
            "skill": "Finding details",
            "hint": "Last sentence of paragraph 1."
          },
          {
            "q": "What is declination?",
            "choices": [
              "The distance in miles to the true North Pole",
              "A compass that corrects for the local area",
              "The difference in degrees between magnetic north and true north",
              "How many miles the magnetic north spot wanders across the Arctic Ocean each year"
            ],
            "answer": 2,
            "skill": "Word meanings",
            "hint": "Paragraph 2, the sentence with 'is called'."
          },
          {
            "q": "Which of these could fool a compass?",
            "choices": [
              "A metal water bottle",
              "A cloudy sky",
              "Walking uphill",
              "Cold weather"
            ],
            "answer": 0,
            "skill": "Finding details",
            "hint": "Paragraph 3 lists three things that pull the needle."
          },
          {
            "q": "The report says to trust the needle over your gut. What does that suggest about a person's own sense of direction?",
            "choices": [
              "It can be wrong, so the compass is the safer guide",
              "It gets sharper in cold weather",
              "It works only when you can see the sun or the stars overhead",
              "It improves with practice until it is as good as a compass"
            ],
            "answer": 0,
            "skill": "Reading between the lines",
            "hint": "If the report tells you to believe the needle instead, what is it quietly saying about your gut?"
          },
          {
            "q": "What is the report mostly about?",
            "choices": [
              "How melted iron deep inside the Earth creates the planet's magnetic field",
              "Why hikers get lost in Alaska more than anywhere else",
              "Everything a navigator needs to know about maps, routes, and finding the way outdoors",
              "How a compass works and how to use one without being fooled"
            ],
            "answer": 3,
            "skill": "Main idea",
            "hint": "The iron and the declination are both real, but each is one part of one paragraph. Pick the choice the whole report is building toward."
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Subtracting across zeros",
          "points": [
            "1,000 − 478: think of 1,000 as 999 + 1. 999 − 478 = 521, plus 1 is 522.",
            "Dividing tens: 240 ÷ 6 is 24 tens ÷ 6 = 4 tens, so 40.",
            "2/7 + 3/7: same bottom, so 5/7."
          ],
          "example": "3 hikers × 5 cups = 15 cups, plus 4 spare = 19."
        },
        "problems": [
          {
            "q": "A full circle on a compass is 360 degrees. It is split into 4 equal quarters. How many degrees is each quarter?",
            "answer": "90",
            "hint": "360 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "Of the 6 hours of daylight left, the team spends 1 hour on the ridge and 2 hours on the summit block. What fraction of the daylight is that? (write a fraction)",
            "answer": "3/6",
            "accept": [
              "1/2"
            ],
            "hint": "1 hour and 2 hours out of 6.",
            "skill": "Fractions"
          },
          {
            "q": "The team fixes 4 anchors in each of the summit ridge's 18 sections. How many anchors is that?",
            "answer": "72",
            "hint": "18 × 4.",
            "skill": "Multiplying"
          },
          {
            "q": "Each of 4 climbers needs 2 quarts of water, and the team carries 2 spare quarts. How many quarts in all?",
            "answer": "10",
            "hint": "4 × 2 first. Then add the spare.",
            "skill": "Multi-step problems"
          },
          {
            "q": "You started with 1,000 feet to climb and have climbed 356 feet. How many feet are left?",
            "answer": "644",
            "hint": "1,000 − 356. Think of 1,000 as 999 + 1.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Nothing says it alone",
            "points": [
              "The last question is built so that no single paragraph answers it. Plan on using two.",
              "Say one fact from one paragraph, then a fact from another, then say 'so'. Whatever comes after 'so' is your answer.",
              "If a choice needs a fact the report never gives, it is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the bus runs only on weekdays. Paragraph two: the clinic opens on Saturday. So somebody without a car cannot get to the Saturday clinic. Neither paragraph says that by itself."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Magnetic north is a spot in the Arctic Ocean that moves a few miles a year.",
                "A map is the most useful thing a hiker can carry.",
                "A compass needle points straight at the North Pole on the map.",
                "A compass only helps if you know what it really points at and keep metal away from it."
              ],
              "answer": 3,
              "hint": "The report explains how the needle works, then two ways it can mislead you, then what to do about both. Find the choice that holds the explanation and the warnings together.",
              "skill": "Central idea and evidence",
              "evidence": "Hold the compass flat, keep metal away from it, and trust the needle over your gut."
            },
            {
              "q": "Claim: the gap between magnetic north and true north can be big enough to matter over a single day's walk. Which sentence from the report best supports that claim?",
              "choices": [
                "They also know a compass can be fooled: a metal water bottle, a phone, or even a belt buckle held too close will pull the needle away from north.",
                "The difference between the two, measured in degrees, is called declination.",
                "In Alaska it can be more than 15 degrees, enough to send a hiker far off course over a long day.",
                "In Florida the difference is small."
              ],
              "answer": 2,
              "hint": "Naming a thing is not proving anything about it. The claim has two parts, a size and a consequence. Find the sentence carrying both.",
              "skill": "Finding details",
              "evidence": "In Alaska it can be more than 15 degrees, enough to send a hiker far off course over a long day."
            },
            {
              "q": "How is the second paragraph organized?",
              "choices": [
                "It sets two things side by side, true north and magnetic north, and then names the gap between them.",
                "It lists the steps of taking a bearing in the order you do them.",
                "It states a problem and then gives the solution navigators use.",
                "It explains what causes the Earth to have a magnetic field at all."
              ],
              "answer": 0,
              "hint": "Two sentences in the middle of the paragraph begin almost the same way and then say different things. That pairing is the shape. The other choices describe paragraphs one and three.",
              "skill": "Author's purpose and structure",
              "evidence": "Here is the tricky part: magnetic north and true north are not the same place."
            },
            {
              "q": "The report says a compass 'can be fooled'. What does fooled mean as it is used here?",
              "choices": [
                "Pulled off north by something lying close to it",
                "Broken so badly that the needle will not turn at all",
                "Tricked on purpose by somebody else out on the trail",
                "Set to the wrong declination for the area"
              ],
              "answer": 0,
              "hint": "The colon after the word is doing the work. Read the list that follows it: a bottle, a phone, a buckle. Whatever fooled means, those are the things that do it.",
              "skill": "Word meanings",
              "evidence": "They also know a compass can be fooled: a metal water bottle, a phone, or even a belt buckle held too close will pull the needle away from north."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the last rule says to trust the needle instead of your own sense of direction. Why should you?",
              "choices": [
                "The needle points at true north, so there is never anything to adjust and the declination for the area makes no difference.",
                "A hiker's sense of direction gets sharper over a long day.",
                "The needle can only be relied on in places where the declination is small, which is why a compass works in Florida but not in Alaska.",
                "Once the declination is set and the metal is out of the way, the needle is right even on a day when it feels wrong."
              ],
              "answer": 3,
              "hint": "Paragraph two gives you the one thing the needle cannot know by itself. Paragraph three tells you who fixes it, and what else to keep clear. If both are handled, what is left to doubt?",
              "skill": "Reading between the lines",
              "evidence": "Good navigators check the declination for the area before setting out and adjust their compass to match."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Quarters and hundreds",
            "points": [
              "Multiplying tens: 4 × 70 is 4 × 7 tens, which is 28 tens, or 280.",
              "A fraction is parts out of the whole: 2 slices eaten out of 8 is 2/8.",
              "1,000 − 725: count up from 725 to 800, then to 1,000."
            ],
            "example": "725 up to 800 is 75, then 200 more: 275."
          },
          "problems": [
            {
              "q": "A compass has 4 quarters of 90 degrees each. How many degrees all the way around?",
              "answer": "360",
              "hint": "90 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "The ridge has 6 sections and the team has done 3 of them. What fraction of the ridge is done? (write a fraction)",
              "answer": "3/6",
              "accept": [
                "1/2"
              ],
              "hint": "3 sections out of 6.",
              "skill": "Fractions"
            },
            {
              "q": "The summit ridge has 8 sections, each 9 feet long. How many feet long is the ridge?",
              "answer": "72",
              "hint": "8 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "Each of 4 climbers needs 2 quarts of water, and the team carries 2 spare. How many quarts?",
              "answer": "10",
              "hint": "4 × 2 first. Then add 2.",
              "skill": "Multi-step problems"
            },
            {
              "q": "You started with 1,000 feet to climb and have climbed 356. How many feet are left?",
              "answer": "644",
              "hint": "Count up from 356: to 400 is 44, then 600 more.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Angles, equations and percent",
            "points": [
              "A right angle is 90 degrees; 360 ÷ 4 = 90.",
              "One-step equation: x + 245 = 600 means x = 600 − 245.",
              "Percent: 9 out of 25 is 36%, because 9 ÷ 25 = 0.36.",
              "Unlike bottoms: 1/4 + 1/3 = 3/12 + 4/12."
            ],
            "example": "x + 245 = 600, so x = 355."
          },
          "problems": [
            {
              "q": "A compass turns 3 quarter-turns to the right from north. How many degrees is that?",
              "answer": "270",
              "hint": "3 × 90.",
              "skill": "Order of operations"
            },
            {
              "q": "Add: 1/2 + 1/3 (write a fraction)",
              "answer": "5/6",
              "hint": "Sixths: 3/6 + 2/6.",
              "skill": "Fractions"
            },
            {
              "q": "Solve for x: x + 356 = 1,000",
              "answer": "644",
              "hint": "Subtract 356 from both sides.",
              "skill": "Equations"
            },
            {
              "q": "Each climber needs 2.5 quarts of water. How many quarts do 4 climbers need?",
              "answer": "10",
              "hint": "2.5 × 4.",
              "skill": "Decimals"
            },
            {
              "q": "The team reached 15 of the 20 waypoints before the fog. What percent is that?",
              "answer": "75",
              "accept": [
                "75%"
              ],
              "hint": "15 ÷ 20 = 0.75.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5.",
              "Percent change: divide the change by the starting number. From 80 to 92 is 12 ÷ 80 = 0.15, so 15%.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "4x + 13 = 61, so 4x = 48, so x = 12."
          },
          "problems": [
            {
              "q": "One section of line needs 1.25 feet of rope. How many feet do 8 sections need?",
              "answer": "10",
              "hint": "8 × 1.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team counted 120 climbers on the first pass and 144 on the second. By what percent did the count change? (write just the number)",
              "answer": "20",
              "accept": [
                "20%"
              ],
              "hint": "The change is 24. 24 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer read −17 degrees at dawn and −31 degrees at dark. How many degrees did it fall?",
              "answer": "14",
              "hint": "From −17 down to −31.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 71 − 5x = 21",
              "answer": "10",
              "hint": "Move 5x to the right and 21 to the left: 5x = 50.",
              "skill": "Equations"
            },
            {
              "q": "On the map, 1 inch stands for 25 feet. The ridge section is really 225 feet long. How many inches is it on the map?",
              "answer": "9",
              "hint": "225 ÷ 25.",
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
            "example": "A tank holds 50 gallons and drains 4 each hour. After 9 hours: y = 50 − 4 × 9 = 14."
          },
          "problems": [
            {
              "q": "52 climbers start up the trail, and 6 turn back every hour. How many are still climbing after 7 hours?",
              "answer": "10",
              "hint": "6 × 7 = 42 turn back, taken off 52.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 4 small cubes along every edge. How many small cubes make it up?",
              "answer": "64",
              "hint": "4³ means 4 × 4 × 4.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 13-foot rope runs from the top of a pole to a point 12 feet away on the ground. How tall is the pole, in feet?",
              "answer": "5",
              "hint": "a² = c² − b² = 169 − 144 = 25. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 11x = 5x + 48",
              "answer": "8",
              "hint": "Take 5x off both sides: 6x = 48. Then divide by 6.",
              "skill": "Equations"
            },
            {
              "q": "The team takes about 300,000 steps on the whole trip. Written as 3 × 10 to a power, what is the power?",
              "answer": "5",
              "hint": "Count the zeros after 3.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Track the turns",
          "points": [
            "Facing North, a right turn faces East. Another right faces South. A left from South faces East again.",
            "Put a finger on the table and actually turn it. Your finger does not get confused."
          ],
          "example": "W → right → N → right → E. If a step undoes that last turn, you are back at N."
        },
        "skill": "Following directions",
        "steps": [
          "Stand facing north.",
          "Turn right 90 degrees.",
          "Turn right 90 degrees again.",
          "Step 3 was wrong. Instead of turning right, go back to the heading step 2 left you on and turn left 90 degrees.",
          "Now turn right 90 degrees.",
          "Type the single letter for the direction you are facing: N, E, S or W."
        ],
        "prompt": "Direction (N, E, S or W):",
        "answer": "E",
        "accept": [
          "e",
          "east",
          "EAST",
          "East"
        ],
        "hint": "Step 4 undoes the turn in step 3 and sends you the other way from your step 2 heading. Turn a pencil on a drawn compass."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
