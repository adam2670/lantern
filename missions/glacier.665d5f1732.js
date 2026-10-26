// ODYSSEY — campaign "glacier". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "glacier",
  "ready": true,
  "kind": "climb",
  "readingLevel": {
    "fk": 6.2,
    "cl": 6.2
  },
  "grade": "5",
  "kindLabel": "Expedition",
  "form": "otter",
  "title": "Glacier Bay",
  "subtitle": "Glacier Bay National Park, Alaska",
  "pitch": "Five days by sea kayak from Bartlett Cove to the face of a tidewater glacier. Otters, tides, whales, seals on the ice, and a wall of ice that talks.",
  "scene": "assets/scene-glacier.jpg",
  "waypoints": [
    [
      960,
      800
    ],
    [
      1130,
      700
    ],
    [
      1040,
      590
    ],
    [
      915,
      505
    ],
    [
      820,
      435
    ],
    [
      790,
      365
    ]
  ],
  "progress": {
    "unit": "miles",
    "total": 65
  },
  "dayNoun": "Mission",
  "stageNoun": "Camp",
  "finalNoun": "Glacier face",
  "stages": [
    "Bartlett Cove",
    "Beardslee Islands",
    "Whale Water",
    "Seal Ice",
    "Glacier face"
  ],
  "reconNoun": "Field Report",
  "legs": {
    "recon": "Recon",
    "nav": "Chart work",
    "orders": "Paddle orders",
    "debrief": "Beach debrief"
  },
  "fact": "The ice here has pulled back 65 miles since 1750, the fastest glacier retreat ever written down. In 1750, about ten generations ago, the bay you paddle was solid ice.",
  "finale": {
    "prompt": "The glacier calves and the wave rolls under the kayak. Which flag goes on the bow for the paddle home?",
    "options": [
      {
        "label": "Turquoise",
        "color": "#2FB6C8"
      },
      {
        "label": "Orange",
        "color": "#F28C28"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      },
      {
        "label": "Green",
        "color": "#4FD18B"
      }
    ],
    "done": "Tie it on. Home is downhill from here, the tide says so."
  },
  "patrols": [
    {
      "id": "glacier-1",
      "title": "Bartlett Cove",
      "recon": {
        "lesson": {
          "title": "Questions first, then the report",
          "points": [
            "Read the five questions before the report. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "When a question asks what a word means, cover the word and read the sentence around it.",
            "The answer is always in the report. You never have to guess."
          ],
          "example": "Question: 'When do the rangers count the otters?' Hunt for 'rangers'. Then read the whole sentence it sits in."
        },
        "title": "Field Report: The Otters of Bartlett Cove",
        "passage": [
          "Bartlett Cove is where every trip into Glacier Bay begins. It is a quiet inlet of dark green water at the mouth of the bay, ringed by spruce and hemlock forest. It is the only place in the whole park with a dock, a ranger station, and a beach where kayaks can be packed. Two hundred and fifty years ago this cove was under ice. The glacier that filled the bay reached almost to the ocean. The forest you camp in tonight has grown up on the bare gravel it left behind.",
          "The first animals most paddlers meet are sea otters. They float on their backs in rafts of a dozen or more, wrapped in kelp so they do not drift away while they sleep. A sea otter has the thickest fur of any animal on Earth, about a million hairs in a patch the size of a postage stamp. That fur is the only thing keeping it warm, because unlike seals and whales an otter has no layer of fat. To eat, an otter dives for clams and crabs, comes up, lays a flat rock on its chest, and smashes the shell against it. The rock is a tool, and a good one gets kept.",
          "Otters vanished from this coast in the 1800s, hunted for that fur until almost none were left. They were brought back to southeast Alaska in the 1960s and reached Glacier Bay in the 1990s. Today there are more than eight thousand of them in the bay. There are so many that the clam beds have thinned, and the rangers count them from the air every summer. The crew's first job is to pack the kayaks and get them above the tide line before dark. The otters will be watching."
        ],
        "questions": [
          {
            "q": "What makes Bartlett Cove different from every other place in the park?",
            "choices": [
              "It has the biggest glacier",
              "It is the one part of the bay the ice did not reach",
              "It is the only place with a dock, a ranger station and a packing beach",
              "It has no otters"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the sentence that begins 'It is the only place'.",
            "skill": "Finding details"
          },
          {
            "q": "What does a sea otter use a flat rock for?",
            "choices": [
              "To smash open clam and crab shells",
              "To float on while it sleeps",
              "To keep its fur warm and dry",
              "To help it dive deeper"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence with 'lays a flat rock on its chest'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does 'raft' mean when it says otters float in rafts?",
            "choices": [
              "A small wooden boat tied up at the cove dock",
              "A patch of kelp that otters wrap themselves in",
              "A flat rock an otter carries on its chest",
              "A group of otters floating together"
            ],
            "answer": 3,
            "hint": "The sentence says rafts 'of a dozen or more'. A dozen or more what?",
            "skill": "Word meanings"
          },
          {
            "q": "Why does an otter need such thick fur?",
            "choices": [
              "Because it dives for clams and crabs",
              "Because it sleeps on the beach above the tide line at night",
              "Because it has to swim against the tide",
              "Because it has no layer of fat to keep it warm"
            ],
            "answer": 3,
            "hint": "Paragraph 2 says the fur is 'the only thing keeping it warm, because...'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How to pack a kayak",
              "How an otter opens a clam with a flat rock",
              "The size of Bartlett Cove and its forest",
              "How otters disappeared from the coast and came back"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 3 says 'Otters vanished'. The rest tells what happened after.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Packing the boats",
          "points": [
            "Big multiplication: split one number into easy pieces. 32 × 14 = 32 × 10 + 32 × 4.",
            "Sharing equally is dividing. 91 ÷ 7 asks how many 7s fit in 91.",
            "Leftovers: 60 ÷ 7 is 8 with 4 left over, because 8 × 7 = 56.",
            "Big adding and subtracting: line up the ones, tens and hundreds, then work from the right."
          ],
          "example": "32 × 10 = 320 and 32 × 4 = 128, so 32 × 14 = 448."
        },
        "problems": [
          {
            "q": "The trip is 5 days, but the crew packs food for 15 days in case weather pins them down. At 24 pounds a day, how many pounds of food is that?",
            "answer": "360",
            "hint": "24 × 10, then 24 × 5, then add.",
            "skill": "Multiplying"
          },
          {
            "q": "The crew has 96 dry bags to share equally among 8 kayaks. How many dry bags go in each kayak?",
            "answer": "12",
            "hint": "How many 8s make 96?",
            "skill": "Dividing"
          },
          {
            "q": "The crew packs 75 meals into 8 kayaks, the same number in each kayak, as many as fit. How many meals are left over?",
            "answer": "3",
            "hint": "8 × 9 = 72. How many meals are left after 72?",
            "skill": "Dividing"
          },
          {
            "q": "A kayak weighs 55 pounds empty. It is loaded with its share of the food, 45 pounds, and 85 pounds of gear. How much does the loaded kayak weigh?",
            "answer": "185",
            "hint": "Add all three. 55 + 45 first.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The rangers counted 8,200 otters in the bay this year and 7,650 last year. How many more otters were counted this year?",
            "answer": "550",
            "hint": "8,200 − 7,650. Line up the columns.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Where the idea lives",
            "points": [
              "The central idea is not sitting in any one sentence. Give each paragraph a four-word label, then ask what all three labels serve.",
              "The wrong answers here are usually true. They are just too small, one paragraph's worth, or bigger than anything the report actually says.",
              "Then four more moves: find the sentence that proves a claim, say what a paragraph is for, work a word out from its sentence, and put two paragraphs together."
            ],
            "example": "Three paragraphs about a bridge: how long it took, what it cost, who uses it now. 'The bridge was expensive' covers one paragraph. 'Bridges are useful' covers nothing in the report. 'The bridge was slow and costly to build, and the town now depends on it' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A sea otter lays a flat rock on its chest, smashes clam and crab shells against it, and keeps a good rock.",
                "Alaska's national parks protect more wildlife than parks anywhere else in the country.",
                "Bartlett Cove and its otters are both recent arrivals: the ice left two and a half centuries ago, and the otters came back only in the last few decades.",
                "Otters survive the cold water of the bay because of a thick layer of fat under the skin, the same as seals and whales."
              ],
              "answer": 2,
              "hint": "Label each paragraph in four words, then find the choice that covers all three labels. One of these covers only the second paragraph, and one says the opposite of what the report says.",
              "skill": "Central idea and evidence",
              "evidence": "Two hundred and fifty years ago this cove was under ice."
            },
            {
              "q": "Claim: sea otters depend on their fur in a way that seals and whales do not. Which sentence from the report best supports that claim?",
              "choices": [
                "That fur is the only thing keeping it warm, because unlike seals and whales an otter has no layer of fat.",
                "They were brought back to southeast Alaska in the 1960s and reached Glacier Bay in the 1990s.",
                "The first animals most paddlers meet are sea otters.",
                "Otters vanished from this coast in the 1800s, hunted for that fur until almost none were left."
              ],
              "answer": 0,
              "hint": "Do not pick the sentence just because it shares a word with the claim. Pick the one you could read out loud to someone who said 'prove it'.",
              "skill": "Finding details",
              "evidence": "That fur is the only thing keeping it warm, because unlike seals and whales an otter has no layer of fat."
            },
            {
              "q": "Why did the author include the third paragraph?",
              "choices": [
                "To explain the method an otter uses to open a clam, diving for it and then smashing the shell against a flat rock laid on its chest, keeping the rock if it is a good one.",
                "To report how many otters live in the bay today, and to explain how the rangers count them from the air each summer to see how the clam beds are doing.",
                "To describe the spruce and hemlock forest that rings the cove, and to explain how it grew up out of the bare gravel that the glacier left behind.",
                "To show that the otters a paddler sees today are the result of being hunted out and then brought back, not something that was always there."
              ],
              "answer": 3,
              "hint": "Delete the paragraph in your head. What would you no longer know? Cross off any choice that only repeats a fact from a different paragraph.",
              "skill": "Author's purpose and structure",
              "evidence": "Otters vanished from this coast in the 1800s, hunted for that fur until almost none were left."
            },
            {
              "q": "The second paragraph says the otters float 'in rafts of a dozen or more'. What does the word rafts mean as it is used here?",
              "choices": [
                "Small boats built out of logs",
                "Beds of kelp growing at the surface of the water",
                "The flat rocks otters keep",
                "Groups of otters floating together"
              ],
              "answer": 3,
              "hint": "The everyday meaning of raft is a boat. Cover the word and read the sentence again: what is the thing that comes in twelves and sleeps?",
              "skill": "Word meanings",
              "evidence": "They float on their backs in rafts of a dozen or more, wrapped in kelp so they do not drift away while they sleep."
            },
            {
              "q": "Paragraphs 2 and 3 held together suggest something about why otters were hunted almost to nothing. What is it?",
              "choices": [
                "Hunters were competing with the otters for the clam beds.",
                "Otters were hunted because they were easy to find asleep in rafts.",
                "Otters were hunted because there were too many of them in the bay.",
                "The fur that is an otter's only protection from the cold is also the thing that made it worth hunting."
              ],
              "answer": 3,
              "hint": "One paragraph says what the otters were hunted for. A different paragraph says what that same thing does for the otter. Put those two facts side by side and say 'so'.",
              "skill": "Reading between the lines",
              "evidence": "Otters vanished from this coast in the 1800s, hunted for that fur until almost none were left."
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
            "example": "4 × 7: 7 + 7 + 7 + 7 = 28."
          },
          "problems": [
            {
              "q": "The crew lays the dry bags out in 6 rows of 5. How many dry bags is that?",
              "answer": "30",
              "hint": "6 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "15 dry bags are set out in 3 equal rows. How many dry bags are in each row?",
              "answer": "5",
              "hint": "15 split into 3 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 292 pounds of gear, then 122 more are added and 82 are taken off. What does the log show now?",
              "answer": "332",
              "hint": "Add 292 and 122 first, then take 82 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 3/6 + 2/6 (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom. 3 + 2 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 3 feet wide and 8 feet long. How many feet is it all the way around the edge?",
              "answer": "22",
              "hint": "Two sides of 3 and two sides of 8: 3 + 3 + 8 + 8.",
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
            "example": "4 × (8 − 2) + 5: parentheses first, 8 − 2 = 6; then 4 × 6 = 24; then 24 + 5 = 29."
          },
          "problems": [
            {
              "q": "Each crossing takes 3.15 hours of paddling. How many hours for 14 crossings?",
              "answer": "44.1",
              "hint": "Split it: 14 × 3 plus 14 × 0.15.",
              "skill": "Decimals"
            },
            {
              "q": "50% of the dry bags counted is 100. How many were counted in all?",
              "answer": "200",
              "hint": "100 is 50 hundredths of the whole: 100 ÷ 50 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew counts 12 kayaks and 18 dry bags. In its simplest form, what is the ratio of kayaks to dry bags? (write it like 2:3)",
              "answer": "2:3",
              "accept": [
                "2 to 3"
              ],
              "hint": "Divide both by 6.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out (9 + 3) × 11. What is it?",
              "answer": "132",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "One winter night it was −12 degrees at midnight and rose 3 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "-9",
              "accept": [
                "−9"
              ],
              "hint": "Start at −12 and count 3 steps up.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: divide the total by the size of one. 9 ÷ 0.25 = 36, because 0.25 fits 4 times in every 1.",
              "Percent change backward: after a 10% rise, the new number is 110% of the old one. 66 ÷ 1.1 = 60.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the last step first. If x had a number added and then got multiplied, divide first, then take the number off."
            ],
            "example": "(x + 6) × 3 = 27, so x + 6 = 9, so x = 3."
          },
          "problems": [
            {
              "q": "The crew has 6 hours of paddling and each crossing takes 0.5 hours. How many crossings is that enough for?",
              "answer": "12",
              "hint": "6 ÷ 0.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of dry bags fell by 25% to 120. What was it before?",
              "answer": "160",
              "hint": "120 is 75% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "One winter evening it was 23 degrees, then it fell 32 degrees. What does the thermometer read?",
              "answer": "-9",
              "accept": [
                "−9"
              ],
              "hint": "Fall 23 to reach 0, then keep falling: the rest of the 32 degrees takes it below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 13) × 2 = 48",
              "answer": "11",
              "hint": "Divide both sides by 2 first, then take 13 off.",
              "skill": "Equations"
            },
            {
              "q": "A model paddle is built at 1 to 2. The blade on the model is 4 inches wide. How many inches wide is the real one?",
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
              "A square root undoes squaring. If a square has area 121, its side is 11.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Rule y = 4x + 11. When x = 3, y = 4 × 3 + 11 = 23."
          },
          "problems": [
            {
              "q": "The number of dry bags packed follows the rule y = 3x + 8, where x is the hour. What is y when x = 6?",
              "answer": "26",
              "hint": "Put 6 in for x: 3 × 6 + 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 7² + 5²?",
              "answer": "74",
              "hint": "7 × 7 = 49 and 5 × 5 = 25. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 15-foot rope reaches the top of a 9-foot pole. How far is the foot of the rope from the base, in feet?",
              "answer": "12",
              "hint": "b² = c² − a² = 225 − 81 = 144. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x + 4 − x = 28",
              "answer": "6",
              "hint": "Collect the x's first: 4x + 4 = 28.",
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
            "Count the steps. The last one often changes everything."
          ],
          "example": "If step 5 says 'only count the red ones', steps 2 to 4 were about the red ones all along."
        },
        "skill": "Following directions",
        "steps": [
          "Write down the number of otters in a raft from the report: a dozen.",
          "Add the number of days the crew has food for: 15.",
          "Subtract the number of kayaks: 8.",
          "Multiply by 2.",
          "If your answer is more than 30, write the word HIGH instead of the number. Otherwise type the number."
        ],
        "prompt": "Your answer:",
        "answer": "HIGH",
        "accept": [
          "high",
          "high."
        ],
        "hint": "A dozen is 12. Add the food days, take the kayaks off, then double what you have. Now read step 5 again before you type."
      }
    },
    {
      "id": "glacier-2",
      "title": "The Beardslee Islands",
      "recon": {
        "lesson": {
          "title": "Cause and effect in a report",
          "points": [
            "Reports about nature often say what happens and then why. Look for 'because', 'so', and 'which means'.",
            "The answer to a 'why' question is often in the same sentence, right after 'because'. If not, read the next sentence.",
            "Numbers in a report are details. Circle them as you read; a question will want one."
          ],
          "example": "'The tide drops twenty feet, so a kayak left on the beach ends up far from the water.' Why is the kayak far from the water? The tide dropped."
        },
        "title": "Field Report: Twenty-Five Feet of Tide",
        "passage": [
          "North of Bartlett Cove the bay is scattered with the Beardslee Islands, low and wooded and so close together that a kayak can slip between them out of the wind. They are new land. The ground here is still rising, about an inch a year, because the enormous weight of the glacier that pressed it down is gone. Islands that were underwater when the park was mapped are now dry. Channels the old charts show as open water are now too shallow to paddle at low tide.",
          "The tide is the crew's clock. In Glacier Bay the water rises and falls as much as twenty-five feet twice a day, one of the biggest tidal ranges in North America. That means a kayak pulled up onto a beach at high tide can be sitting a hundred yards from the water six hours later. A camp made at low tide can be underwater by midnight. Paddlers learn to read the tide tables the way other people read a bus schedule. They carry their boats above the line of dried seaweed that marks the highest water.",
          "The tide is also a free ride. When it floods, it pushes water up the bay at two or three miles an hour, and a kayak going the same way gets that speed for nothing. When it ebbs, the same water comes back out, and paddling against it is like walking up a moving staircase the wrong way. Today's crossing to the islands is timed to leave on the flood and land before it turns. Miss the window and the crew paddles twice as hard to go half as far."
        ],
        "questions": [
          {
            "q": "How much can the water rise and fall in Glacier Bay?",
            "choices": [
              "As much as twenty-five feet",
              "About two feet on the biggest tides",
              "Ten feet",
              "About a hundred yards, twice a day"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence with 'twice a day'.",
            "skill": "Finding details"
          },
          {
            "q": "Why is the ground in the Beardslee Islands still rising?",
            "choices": [
              "Because earthquakes under the bay push the sea floor a little higher each year",
              "Because the weight of the glacier that pressed it down is gone",
              "Because the tide rises and falls twenty-five feet and lifts the islands with it",
              "Because the spruce and hemlock growing on the islands hold the soil and build it up"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence with 'about an inch a year, because'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what does 'ebbs' mean?",
            "choices": [
              "The tide goes out",
              "The tide comes in and floods",
              "The wind drops away to nothing",
              "The sea calms"
            ],
            "answer": 0,
            "hint": "The sentence says 'when it ebbs, the same water comes back out'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why do paddlers carry their boats above the line of dried seaweed?",
            "choices": [
              "Because dried seaweed is slippery underfoot and a loaded kayak is hard to drag across it",
              "Because the seaweed line is the easiest thing to find in the dark",
              "Because the seaweed marks how high the water reaches, so above it the boat is safe",
              "Because the rangers require every kayak to be tied down above the seaweed line at night"
            ],
            "answer": 2,
            "hint": "Paragraph 2 says the line of seaweed 'marks the highest water'. What does that tell you about a boat above it?",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the tide can help or fight a kayak",
              "How the Beardslee Islands rose out of the water",
              "How to pack a kayak and carry it up the beach",
              "Reading the tide tables like a bus schedule"
            ],
            "answer": 0,
            "hint": "The first sentence calls the tide 'a free ride'. The rest explains when it helps and when it fights.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Tide math",
          "points": [
            "Feet of tide over hours: divide the total by the hours to get feet per hour.",
            "Distance with a push: your speed plus the tide's speed, times the hours.",
            "Common multiples: count by both numbers. 6, 12, 18 and 9, 18: they meet at 18.",
            "Two-step: work out the speed first, then the distance."
          ],
          "example": "35 feet of tide in 7 hours is 35 ÷ 7 = 5 feet an hour."
        },
        "problems": [
          {
            "q": "The tide rises 24 feet in 6 hours. How many feet does it rise each hour?",
            "answer": "4",
            "hint": "24 ÷ 6.",
            "skill": "Dividing"
          },
          {
            "q": "The crew paddles at 3 miles an hour and the flood tide adds 2 miles an hour. How far do they go in 4 hours?",
            "answer": "20",
            "hint": "3 + 2 = 5 miles an hour. Then 5 × 4.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The crew checks the tide every 4 hours and calls the ranger station every 10 hours. They do both at the start of the trip. How many hours until they next do both at the same time?",
            "answer": "20",
            "hint": "Count by 4s and by 10s. Which number is on both lists first?",
            "skill": "Multiplying"
          },
          {
            "q": "The tide table says low water is at 9:00 and high water is 6 hours later. The crew wants to land 2 hours before high water, before the tide turns. What time should they land? (write the hour on a 24-hour clock)",
            "answer": "13",
            "accept": [
              "1",
              "1:00",
              "13:00",
              "1pm",
              "1 pm",
              "1:00pm",
              "1:00 pm",
              "1p.m.",
              "1 p.m."
            ],
            "hint": "9 + 6 = 15, which is 3 in the afternoon. Now count back 2 hours.",
            "skill": "Multi-step problems"
          },
          {
            "q": "A camp beach is 45 feet long and 12 feet wide above the seaweed line. What is its area in square feet?",
            "answer": "540",
            "hint": "45 × 12: 45 × 10 = 450, 45 × 2 = 90.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Proof, not echo",
            "points": [
              "When a question asks which sentence supports a claim, you are hunting for proof, not for matching words.",
              "Read your pick and the claim back to back. If someone said 'prove it', would that sentence do the job on its own?",
              "All four choices will be real sentences from the report. Being true is not the same as being proof."
            ],
            "example": "Claim: the town runs out of fuel in winter. 'The road closes in November' is proof. 'The town has four hundred people' is true and proves nothing at all."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "In this part of the bay both the land and the water are moving, so a paddler has to plan around them instead of around the map.",
                "The tide in Glacier Bay rises and falls as much as twenty-five feet twice a day, one of the biggest tidal ranges in all of North America.",
                "Kayaking is the best way for a visitor to see a national park.",
                "The old charts are the most reliable guide to where the water is deep enough to paddle, because the channels they show as open have not changed."
              ],
              "answer": 0,
              "hint": "Paragraph one is about the land, paragraphs two and three are about the water. The central idea has to hold all three, not just the biggest number in the report.",
              "skill": "Central idea and evidence",
              "evidence": "Paddlers learn to read the tide tables the way other people read a bus schedule."
            },
            {
              "q": "Claim: in this part of the bay the old charts can no longer be trusted. Which sentence from the report best supports that claim?",
              "choices": [
                "North of Bartlett Cove the bay is scattered with the Beardslee Islands, low and wooded and so close together that a kayak can slip between them out of the wind.",
                "Channels the old charts show as open water are now too shallow to paddle at low tide.",
                "That means a kayak pulled up onto a beach at high tide can be sitting a hundred yards from the water six hours later.",
                "In Glacier Bay the water rises and falls as much as twenty-five feet twice a day, one of the biggest tidal ranges in North America."
              ],
              "answer": 1,
              "hint": "Three of these are true and none of those three mention a chart doing anything wrong. Find the one that shows the map and the water disagreeing.",
              "skill": "Finding details",
              "evidence": "Channels the old charts show as open water are now too shallow to paddle at low tide."
            },
            {
              "q": "How is the third paragraph organized?",
              "choices": [
                "It sets two opposite cases side by side: paddling with the tide, and paddling against it.",
                "It lists the steps of a crossing in the order they happen, from loading the boats to landing on the islands.",
                "It states a problem and then gives the solution the rangers use.",
                "It traces the causes of the bay's unusually large tides, beginning with the shape of the bay and ending with the pull of the moon."
              ],
              "answer": 0,
              "hint": "Look for the pair. A paragraph that says 'when this happens' and then 'when the opposite happens' is built as a comparison.",
              "skill": "Author's purpose and structure",
              "evidence": "When it floods, it pushes water up the bay at two or three miles an hour, and a kayak going the same way gets that speed for nothing."
            },
            {
              "q": "The report says that paddling against the ebb 'is like walking up a moving staircase the wrong way'. What is that comparison telling you?",
              "choices": [
                "The water carries you along at two or three miles an hour with no effort at all.",
                "The route climbs steeply uphill out of the water and over the rocks of the island.",
                "You spend a great deal of effort and still make very little progress.",
                "The tide changes direction without any warning."
              ],
              "answer": 2,
              "hint": "Picture it literally first: an escalator running down while a person walks up it. What happens to that person? Now move the picture onto the water.",
              "skill": "Word meanings",
              "evidence": "When it ebbs, the same water comes back out, and paddling against it is like walking up a moving staircase the wrong way."
            },
            {
              "q": "Using paragraphs 1 and 3 together, why does today's crossing have to start on the flood rather than at any hour the crew likes?",
              "choices": [
                "The rising water both carries the kayaks along and covers channels that are too shallow to paddle when the tide is out.",
                "The flood is the only time of day when the wind drops between the islands, and a kayak cannot be paddled across open water in a wind.",
                "The rangers allow crossings only while the tide is coming in, and they close the channels between the islands as soon as it turns.",
                "The islands can be reached only at low tide, when the ground that has been rising by an inch a year finally stands clear of the water."
              ],
              "answer": 0,
              "hint": "One paragraph tells you what a flood tide does for a boat. A different one tells you what those channels are like when the water is low. Neither paragraph is enough on its own.",
              "skill": "Reading between the lines",
              "evidence": "Channels the old charts show as open water are now too shallow to paddle at low tide."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 2 × 9 means 2 groups of 9.",
              "Sharing equally is dividing.",
              "Subtracting: line up the ones, tens and hundreds, and borrow when the top digit is too small.",
              "A fraction counts parts of a whole: 3 parts out of 5 is 3/5."
            ],
            "example": "2 × 9: 9 + 9 = 18."
          },
          "problems": [
            {
              "q": "The crew paddles 3 miles to each of 5 islands. How many miles is that?",
              "answer": "15",
              "hint": "5 groups of 3, so 5 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "The crew splits 30 miles in half. How many miles is one half?",
              "answer": "15",
              "hint": "Half of 30.",
              "skill": "Dividing"
            },
            {
              "q": "The crew needs 700 feet of rope and has 445 feet. How many more feet are needed?",
              "answer": "255",
              "hint": "700 − 445.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the crew has finished 6 of them. What fraction is done? (write a fraction)",
              "answer": "6/8",
              "hint": "6 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "The crew paddles 445 feet along the shore, then 46 feet more. How many feet is that?",
              "answer": "491",
              "hint": "445 + 46.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Dividing by a fraction: multiply by its flip. 4 ÷ 2/5 = 4 × 5/2 = 20/2 = 10.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "9 × 9 − 16 ÷ 4: multiply and divide first, 81 and 4; then 81 − 4 = 77."
          },
          "problems": [
            {
              "q": "The crew has 6 hours of good weather. Each crossing takes 3/4 of an hour. How many crossings can the crew make?",
              "answer": "8",
              "hint": "Dividing by 3/4 means multiplying by its flip, 4/3: 6 × 4/3.",
              "skill": "Fractions"
            },
            {
              "q": "Of 40 dry bags on the packing list, 50% are struck off the list. How many are left on it?",
              "answer": "20",
              "hint": "50% of 40 is 20. Take that off 40.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew shares 64 miles between two teams in the ratio 3 to 5. How many does the smaller share get?",
              "answer": "24",
              "hint": "3 + 5 = 8 parts. 64 ÷ 8 = 8 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out 6 × 7 − 4 × 2. What is it?",
              "answer": "34",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "In one winter week the coldest reading was −23 degrees and the warmest was −11 degrees. How many degrees apart are they?",
              "answer": "12",
              "hint": "From −23 up to −11.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 27 miles in 6 hours is 27 ÷ 6 = 4.5 miles an hour.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the last step first. In 4(x + 3), divide by 4 before you take 3 off."
            ],
            "example": "4(x + 3) = 36, so x + 3 = 9, so x = 6."
          },
          "problems": [
            {
              "q": "16 crossings took 40 hours. At the same rate, how many hours would 28 crossings take?",
              "answer": "70",
              "hint": "One crossing takes 40 ÷ 16 = 2.5. Then × 28.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew had 40 pounds of food, and 50% of it was eaten. How many pounds was that?",
              "answer": "20",
              "hint": "50% of 40: 50/100 × 40.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer falls 4 degrees every hour for 9 hours. What is the total change? (Write a fall as a negative number.)",
              "answer": "-36",
              "accept": [
                "−36"
              ],
              "hint": "9 hours of −4 each: 9 × (−4). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 5(x + 21) = 155",
              "answer": "10",
              "hint": "Divide both sides by 5 to get x + 21 = 31.",
              "skill": "Equations"
            },
            {
              "q": "A round frame has a radius of 5 inches. Using 3.14 for pi, what is its area in square inches?",
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
            "example": "A list goes 6, 11, 16, 21, and on. It starts at 6 and adds 5, so the 8th number is 6 + 7 × 5 = 41."
          },
          "problems": [
            {
              "q": "The tide gauge reads 8, 11, 14, 17 feet, and on, one reading each hour. What is the 7th reading?",
              "answer": "26",
              "hint": "It starts at 8 and adds 3 each step. The number you want is 6 steps on from 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 11² − 11?",
              "answer": "110",
              "hint": "11 × 11 = 121, then take 11 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 3 and 4 feet. How long is its longest side, in feet?",
              "answer": "5",
              "hint": "3² + 4² = 25. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x − x = 36",
              "answer": "6",
              "hint": "7x − x is 6x, so 6x = 36.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 6 feet across and 4 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (The radius is half the distance across.)",
              "answer": "113.04",
              "hint": "The radius is 6 ÷ 2 = 3. Volume = 3.14 × radius × radius × depth: 3.14 × 3 × 3 × 4.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Watch for the flip",
          "points": [
            "Words like 'ignore', 'instead', 'only' and 'unless' change the job.",
            "Do the steps in order and write each result down."
          ],
          "example": "If step 4 says 'ignore step 2', then step 2 never happened."
        },
        "skill": "Following directions",
        "steps": [
          "Start with the biggest tidal range in the report, in feet: 25.",
          "Add the number of times a day the tide rises and falls: 2.",
          "Multiply by the tide's speed in miles an hour from the report: use 3.",
          "Ignore step 2. Go back to 25 and multiply by 3 instead.",
          "Type the result."
        ],
        "prompt": "Your answer:",
        "answer": "75",
        "hint": "Step 4 cancels step 2 and sends you back to the 25. Only one multiplication is left to do."
      }
    },
    {
      "id": "glacier-3",
      "title": "Whale Water",
      "recon": {
        "lesson": {
          "title": "Hunting for the right sentence",
          "points": [
            "A new word is often explained in the same sentence. Read past the word to the end of the sentence.",
            "A 'why' question may not use 'because'. Look for the part of the report that gives a reason.",
            "Big numbers in a report are exact. Use them exactly."
          ],
          "example": "'A camel can go a week without water, so it is built for the desert.' Why is it built for the desert? It can go a week without water."
        },
        "title": "Field Report: Bubble Nets",
        "passage": [
          "Every summer humpback whales swim about three thousand miles from Hawaii to Glacier Bay to eat. They eat almost nothing all winter in the warm water where their calves are born, and by the time they reach Alaska they are hungry. A humpback is about forty-five feet long and weighs about thirty tons, and it has no teeth. Instead its mouth is lined with baleen, hundreds of stiff plates like the bristles of a giant brush, which strain small fish and krill out of huge mouthfuls of water.",
          "The whales in the bay have a trick that has been seen in only a few places on Earth. A group dives together beneath a school of herring. One whale swims in a rising spiral, blowing a steady stream of bubbles from its blowhole. The bubbles form a curtain, a net of air that the fish will not swim through. The others drive the fish up into the shrinking circle. Then all the whales rise through the net at once with their mouths open. For a moment a dozen heads the size of trucks burst out of the water side by side. It is called bubble-net feeding, and the whales learn it from each other.",
          "The crew's rule on whale water is simple: a kayak never chases a whale. Boats must stay a quarter of a mile away, and if a whale surfaces closer than that, the paddlers stop and let it pass. A humpback breathing sounds like a door slamming in an empty house. The first time it happens behind a kayak, every paddler in the crew forgets to paddle."
        ],
        "questions": [
          {
            "q": "How far do the humpbacks travel from Hawaii to Glacier Bay?",
            "choices": [
              "About three thousand miles",
              "About four hundred miles",
              "Forty miles up the coast",
              "Four miles"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is 'baleen'?",
            "choices": [
              "The school of herring the whales drive upward",
              "The blowhole on a whale's back that the stream of bubbles comes from",
              "Stiff plates in the whale's mouth that strain food from water",
              "A warm current that carries the whales north from Hawaii each summer"
            ],
            "answer": 2,
            "hint": "The sentence that begins 'Instead its mouth is lined with baleen'.",
            "skill": "Word meanings"
          },
          {
            "q": "What do the bubbles do during bubble-net feeding?",
            "choices": [
              "They warm the water so that the herring gather in one place",
              "They form a curtain the fish will not swim through",
              "They hide the whales from the herring until the last moment",
              "They carry the whales upward through the shrinking circle"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'a net of air'.",
            "skill": "Finding details"
          },
          {
            "q": "Why do the whales eat so much in Alaska?",
            "choices": [
              "Because their calves are born in the warm water",
              "Because they eat almost nothing all winter and arrive hungry",
              "Because the water is colder",
              "Because the herring only run in summer"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence with 'almost nothing all winter'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How the whales work together to catch fish with bubbles",
              "How big a humpback grows and how far it swims to reach Alaska",
              "The rules that keep a kayak a quarter of a mile from a whale",
              "The three-thousand-mile trip from Hawaii"
            ],
            "answer": 0,
            "hint": "Paragraph 2 describes one 'trick' from start to finish.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Whale numbers",
          "points": [
            "Tons to pounds: 1 ton is 2,000 pounds, so multiply by 2,000.",
            "Miles over days: divide the distance by the days for miles per day.",
            "Fraction of a number: divide by the bottom, multiply by the top.",
            "'Twice as many' means times 2. 'In all' means add the counts together."
          ],
          "example": "An 8-ton truck weighs 8 × 2,000 = 16,000 pounds."
        },
        "problems": [
          {
            "q": "A humpback weighs 30 tons. One ton is 2,000 pounds. How many pounds is the whale?",
            "answer": "60000",
            "accept": [
              "60,000"
            ],
            "hint": "30 × 2,000. Think 3 × 2 with three zeros.",
            "skill": "Multiplying"
          },
          {
            "q": "The whales swim 3,000 miles in 30 days. How many miles a day is that?",
            "answer": "100",
            "hint": "3,000 ÷ 30. How many 30s in 3,000?",
            "skill": "Dividing"
          },
          {
            "q": "A pod of 12 whales dives together. 3/4 of them blow bubbles. How many whales blow bubbles?",
            "answer": "9",
            "hint": "12 ÷ 4 = 3, then 3 × 3.",
            "skill": "Fractions"
          },
          {
            "q": "A mile is 5,280 feet. Kayaks must stay a quarter of a mile from a whale. How many feet is that?",
            "answer": "1320",
            "accept": [
              "1,320"
            ],
            "hint": "5,280 ÷ 4. Half is 2,640, half again.",
            "skill": "Dividing"
          },
          {
            "q": "The crew counted 7 whales in the morning and twice as many in the afternoon. How many whales did they count in all?",
            "answer": "21",
            "hint": "Twice 7 is 14. Then 7 + 14.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What is this paragraph for?",
            "points": [
              "Every paragraph is in the report on purpose: to set the scene, to give an example, to explain a cause, to compare two things, or to show a problem and what was done about it.",
              "Find the job by deleting the paragraph in your head. What would you no longer know? That missing thing is the job.",
              "Shape words give it away. 'Because' and 'so' mean cause and effect. 'But' and 'while' mean comparison. 'First, then, by morning' means sequence."
            ],
            "example": "A report about a bakery adds a paragraph on how yeast works. Its job is not to teach science. It is there so that the next paragraph, about the bread failing on a cold morning, makes sense."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Everything in the report follows from one fact: the bay is where these whales come to eat.",
                "A humpback blows a rising curtain of bubbles that the herring will not swim through, and the other whales drive the fish up into it.",
                "Whales are the most intelligent animals in the ocean.",
                "Humpbacks catch herring with rows of small teeth, taking the fish one at a time as they rise through the bubbles."
              ],
              "answer": 0,
              "hint": "The journey, the baleen, the bubble net, the kayak rule. Ask what all four of those are in service of before you pick.",
              "skill": "Central idea and evidence",
              "evidence": "Every summer humpback whales swim about three thousand miles from Hawaii to Glacier Bay to eat."
            },
            {
              "q": "Claim: bubble-net feeding is not something a humpback is born knowing. Which sentence from the report best supports that claim?",
              "choices": [
                "One whale swims in a rising spiral, blowing a steady stream of bubbles from its blowhole.",
                "For a moment a dozen heads the size of trucks burst out of the water side by side.",
                "It is called bubble-net feeding, and the whales learn it from each other.",
                "The others drive the fish up into the shrinking circle."
              ],
              "answer": 2,
              "hint": "Rare is not the same as taught. Find the sentence that says where the skill comes from.",
              "skill": "Finding details",
              "evidence": "It is called bubble-net feeding, and the whales learn it from each other."
            },
            {
              "q": "What job does the detail about baleen do in the first paragraph?",
              "choices": [
                "It shows how far the whales travel from Hawaii each year, and how little they eat all winter in the warm water where the calves are born.",
                "It explains how a whale with no teeth can catch a mouthful of small fish, which is exactly what the bubble net delivers.",
                "It explains why the whales make so little noise when they surface, since a mouth lined with baleen lets the air out slowly and softly.",
                "It compares the humpbacks with the orcas that hunt the same herring, and shows why only one of the two can strain a mouthful of water."
              ],
              "answer": 1,
              "hint": "Ask what the next paragraph needs you to already know. A detail is often there to set up the paragraph after it.",
              "skill": "Author's purpose and structure",
              "evidence": "Instead its mouth is lined with baleen, hundreds of stiff plates like the bristles of a giant brush, which strain small fish and krill out of huge mouthfuls of water."
            },
            {
              "q": "The report says the bubbles form 'a curtain, a net of air'. What does curtain mean as it is used here?",
              "choices": [
                "A piece of cloth hung up to keep the light out",
                "A wall the fish will not cross, even though it is made only of bubbles",
                "A thick sheet of ice lying on the surface",
                "A crowd of whales pressed close together"
              ],
              "answer": 1,
              "hint": "The sentence itself tells you what this curtain does. Read the words right after it before you decide.",
              "skill": "Word meanings",
              "evidence": "The bubbles form a curtain, a net of air that the fish will not swim through."
            },
            {
              "q": "Paragraphs 2 and 3 together suggest why a quarter of a mile is not an overcautious distance for a kayak. Why is it not?",
              "choices": [
                "Whales feeding this way come up from underneath all at once, so a paddler on the surface has no way of seeing them coming.",
                "Whales can swim faster than any kayak can be paddled, so a paddler who sees one coming still has no way of getting out of its path.",
                "The noise of a whale breathing close by can damage a paddler's hearing, which is why the rangers set the rule at a quarter of a mile.",
                "Boats of every kind are banned from the bay in summer."
              ],
              "answer": 0,
              "hint": "Hold two things together: how the whales arrive at the surface, and where the paddlers happen to be sitting. The report never uses the word danger.",
              "skill": "Reading between the lines",
              "evidence": "Then all the whales rise through the net at once with their mouths open."
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
              "All the way around a shape: add up every side. A square has four sides the same.",
              "Fractions with the same bottom: the bigger top is the bigger fraction. 5/6 is more than 1/6."
            ],
            "example": "6 × 3: 3 + 3 + 3 + 3 + 3 + 3 = 18."
          },
          "problems": [
            {
              "q": "The crew spots 9 whales on each of 4 trips. How many whales is that?",
              "answer": "36",
              "hint": "4 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "The crew counts 81 whales swimming in pods of 9. How many pods is that?",
              "answer": "9",
              "hint": "How many 9s fit into 81?",
              "skill": "Dividing"
            },
            {
              "q": "The crew counted 460 gallons of water in the morning and 502 in the evening. How many more in the evening?",
              "answer": "42",
              "hint": "502 − 460.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 2/4 or 3/4? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 7 feet on each side. How many feet is it all the way around?",
              "answer": "28",
              "hint": "Four sides of 7.",
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
            "example": "(9 − 2) × (1 + 3): each set of parentheses first, 7 and 4; then 7 × 4 = 28."
          },
          "problems": [
            {
              "q": "The crew has 6.4 hours of paddling. Each crossing takes 0.8 hours. How many crossings is that enough for?",
              "answer": "8",
              "hint": "Move both points 1 place to the right: 64 ÷ 8.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 gallons of water, 10 are set aside. Out of 120 gallons of water, how many is that?",
              "answer": "12",
              "hint": "120 is 1.2 hundreds, so 1.2 × 10.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew divides 54 minutes of work in the ratio 4 to 5. How many minutes is the larger share?",
              "answer": "30",
              "hint": "9 parts in all, so one part is 6 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out (10 − 1) × (7 + 2). What is it?",
              "answer": "81",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three winter readings came in: −15, 1 and −16 degrees. Which is the coldest?",
              "answer": "-16",
              "accept": [
                "−16"
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
              "A unit rate is the total divided by how many: 45 miles in 2 hours is 45 ÷ 2 = 22.5 miles an hour.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "5x + 9 = 44, so 5x = 35, so x = 7."
          },
          "problems": [
            {
              "q": "The trip needs 84 hours of paddling in all, at 3.5 hours for each crossing. One crossing is already done. How many crossings are left?",
              "answer": "23",
              "hint": "84 ÷ 3.5 = 24 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a load may change by no more than 25%. Starting from 320 pounds of gear, what is the heaviest load the rule allows, in pounds?",
              "answer": "400",
              "hint": "25% of 320 is 80. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter night the thermometer fell 11 degrees from −12 degrees. What does it read?",
              "answer": "-23",
              "accept": [
                "−23"
              ],
              "hint": "Start at −12 and go 11 more degrees below zero: −12 − 11.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 6 − 3 = 3",
              "answer": "36",
              "hint": "Add 3 to both sides, then multiply by 6.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 8 feet. How many inches are needed for 112 feet?",
              "answer": "14",
              "hint": "112 ÷ 8.",
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
            "example": "A line through (0, 3) and (5, 23) rises 20 over a run of 5, so its slope is 20 ÷ 5 = 4."
          },
          "problems": [
            {
              "q": "A line passes through (0, 15) and (4, 43). What is its slope?",
              "answer": "7",
              "hint": "Slope is the rise over the run: 28 ÷ 4.",
              "skill": "Linear relationships"
            },
            {
              "q": "The crew has taken 8² photos and doubles that by dark. How many photos is that?",
              "answer": "128",
              "hint": "8² is 64. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The crew goes 9 feet east and then 12 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "15",
              "hint": "The two legs make a right angle: 9² + 12² = 225.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 6x + 23 and 2x + 31 come to the same number?",
              "answer": "2",
              "hint": "Set them equal, take 2x off both sides, then take 23 off.",
              "skill": "Equations"
            },
            {
              "q": "The crew writes 4 × 10^3, then counts ten times as many. Written out in full, what is the new number?",
              "answer": "40000",
              "hint": "Ten times adds one to the power: 4 × 10^4.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Only the ones that match",
          "points": [
            "'Only' means most of what you are given does not count.",
            "Count carefully before you calculate."
          ],
          "example": "'Count only the words with an E' means skip the rest, even if they are on the list."
        },
        "skill": "Following directions",
        "steps": [
          "Five words from the whale notes: HUMPBACK, BALEEN, HERRING, BUBBLE, KRILL.",
          "Count the words that contain the letter B, then multiply that count by the whale's length in feet: 45.",
          "Count the words that contain the letter R, then multiply that count by the whale's weight in tons: 30.",
          "The ranger's log records this whale by its length, not its weight. Use the number from step 2, not the one from step 3.",
          "Type the number step 4 chose."
        ],
        "prompt": "Your answer:",
        "answer": "135",
        "hint": "HUMPBACK, BALEEN and BUBBLE carry a B; HERRING and KRILL carry an R. Step 4 says which of your two totals the log wants."
      }
    },
    {
      "id": "glacier-4",
      "title": "Seal Ice",
      "recon": {
        "lesson": {
          "title": "The word they define for you",
          "points": [
            "When a report uses a new word, it usually explains it in the same sentence or the next.",
            "Look for 'called', 'known as', or a dash.",
            "A 'why' question can have its answer a whole sentence away. Keep reading."
          ],
          "example": "'A baby kangaroo, called a joey, rides in its mother's pouch.' What is a joey? A baby kangaroo. 'Called' points right at it."
        },
        "title": "Field Report: Harbor Seals on the Ice",
        "passage": [
          "Johns Hopkins Inlet is the quietest water in the bay, and in June it is closed to every boat, including kayaks. The reason is lying on the ice. Harbor seals haul out onto the floating chunks of glacier ice here to give birth. In a good year there can be more than a thousand of them, gray and spotted, each mother with one pup. The ice is a safer nursery than any beach: no bear or wolf can reach it, and an orca cannot follow between the packed bergs.",
          "Ice that breaks off the front of a glacier and floats away is called a berg, and a berg is nine-tenths underwater. What you see is the top tenth. That is why the crew never paddles close to one. A berg the size of a house can roll over without warning as the underwater part melts and the balance shifts, and the wave it throws can flip a kayak from fifty feet away. The rangers' rule is to stay as far from a berg as the berg is tall.",
          "The seals are the reason the crew is here in July and not June. By now the pups are swimming, and the inlet opens again, but the paddlers still keep their distance. A seal that is startled off the ice burns energy it needs, and a pup that loses its mother in the water may not find her again. The crew paddles slowly along the far shore, counting seals for the ranger log. The seals watch back with round black eyes, unbothered, from their own private ice."
        ],
        "questions": [
          {
            "q": "Why is Johns Hopkins Inlet closed to boats in June?",
            "choices": [
              "Because the bergs can roll without warning",
              "Because the water is too shallow",
              "Because harbor seals are giving birth on the ice",
              "Because the glacier is melting"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the second and third sentences.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'berg'?",
            "choices": [
              "Ice that breaks off a glacier and floats away",
              "A mountain",
              "The front wall of the glacier",
              "A crack in the face of the glacier"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 2 says what it is called.",
            "skill": "Word meanings"
          },
          {
            "q": "How much of a berg is underwater?",
            "choices": [
              "About one tenth of it",
              "Half",
              "None",
              "Nine tenths"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the first sentence. Read it to the end.",
            "skill": "Finding details"
          },
          {
            "q": "Why is the ice a safer nursery than a beach?",
            "choices": [
              "Because the ice is warmer than a beach for a newborn pup",
              "Because predators like bears, wolves and orcas cannot reach the seals there",
              "Because it is closer to the glacier face",
              "Because the rangers keep watch over it"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the last sentence.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How a berg the size of a house can roll over without warning and throw a wave",
              "Why the crew comes in July and how they keep from disturbing the seals",
              "How many harbor seals haul out on the ice in a good year, and how they are counted",
              "The gray and spotted seal mothers on the ice, each one of them with a single pup"
            ],
            "answer": 1,
            "hint": "The first sentence says why the crew is here in July, and the rest is about keeping their distance.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Ice and seals",
          "points": [
            "Nine tenths of a number: divide by 10, multiply by 9.",
            "Counting in groups: rows of seals times seals per row.",
            "Subtracting across zeros: for 600 − 248, think of 600 as 599 + 1.",
            "Area of a berg's top: length × width."
          ],
          "example": "9/10 of 50 feet: 50 ÷ 10 = 5, then 5 × 9 = 45 feet underwater."
        },
        "problems": [
          {
            "q": "A berg is 60 feet tall from bottom to top. 9/10 of it is underwater. How many feet are underwater?",
            "answer": "54",
            "hint": "60 ÷ 10 = 6. Then 6 × 9.",
            "skill": "Fractions"
          },
          {
            "q": "The crew counts 14 rows of seals on the ice with 8 seals in each row. How many seals is that?",
            "answer": "112",
            "hint": "14 × 8: 10 × 8 = 80, 4 × 8 = 32.",
            "skill": "Multiplying"
          },
          {
            "q": "The rangers expected 1,000 seals. The crew counted 235 fewer than that. How many seals did they count?",
            "answer": "765",
            "hint": "1,000 − 235. Think of 1,000 as 999 + 1: do 999 − 235, then add 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The flat top of a berg is 30 feet long and 12 feet wide. What is its area in square feet?",
            "answer": "360",
            "hint": "30 × 12.",
            "skill": "Area and perimeter"
          },
          {
            "q": "A berg is 40 feet tall. The rule is to stay as far away as the berg is tall. The crew is 25 feet away. How many more feet back should they move?",
            "answer": "15",
            "hint": "40 − 25.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The word the sentence wants",
            "points": [
              "Cover the word with a finger and read the sentence with a hole in it. What would you put in the hole?",
              "Some words are doing a picture job, not a dictionary job. A 'river of ice' is not water. Ask what the picture is showing you.",
              "Try each choice in the sentence. Three of them will make the sentence say something the report never said."
            ],
            "example": "'The wind combed the grass flat.' Combed has nothing to do with hair here. Put the picture in: something passed over the grass in one direction and left it lying down."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "A berg is nine-tenths underwater, so only the top tenth of it shows, and it can roll over without warning.",
                "Alaska's wildlife is best watched from a kayak, which is why the crew paddles the far shore counting seals.",
                "The floating ice is both what makes this inlet a safe nursery and what makes it risky to paddle, so the rules keep boats well back.",
                "The inlet is closed to kayaks all year round to protect the seal pups, so the seals can only be counted from the air."
              ],
              "answer": 2,
              "hint": "The ice turns up in all three paragraphs, doing a different job each time. The central idea is the one that holds all three of those jobs.",
              "skill": "Central idea and evidence",
              "evidence": "The ice is a safer nursery than any beach: no bear or wolf can reach it, and an orca cannot follow between the packed bergs."
            },
            {
              "q": "Claim: a berg can be dangerous to a boat that never touches it. Which sentence from the report best supports that claim?",
              "choices": [
                "A berg the size of a house can roll over without warning as the underwater part melts and the balance shifts, and the wave it throws can flip a kayak from fifty feet away.",
                "Johns Hopkins Inlet is the quietest water in the bay, and in June it is closed to every boat, including kayaks.",
                "Ice that breaks off the front of a glacier and floats away is called a berg, and a berg is nine-tenths underwater.",
                "What you see is the top tenth."
              ],
              "answer": 0,
              "hint": "A rule is not proof; it is what people do about the proof. Find the sentence that says what actually happens to a boat that is not touching the ice.",
              "skill": "Finding details",
              "evidence": "A berg the size of a house can roll over without warning as the underwater part melts and the balance shifts, and the wave it throws can flip a kayak from fifty feet away."
            },
            {
              "q": "The second paragraph is about ice, in a report about seals. What job is it doing there?",
              "choices": [
                "It explains how a glacier is formed in the mountains and how it moves down to the water where the bergs break off it.",
                "It compares harbor seals with orcas.",
                "It gives the history of how the inlet came to be closed.",
                "It explains the danger in the same ice the seals are lying on, which is why the crew stays away from both."
              ],
              "answer": 3,
              "hint": "Ask what would be missing without it. If a choice names something the paragraph never mentions, cross it off first and save yourself the work.",
              "skill": "Author's purpose and structure",
              "evidence": "That is why the crew never paddles close to one."
            },
            {
              "q": "The report says the seals 'haul out onto the floating chunks of glacier ice'. What does haul out mean as it is used here?",
              "choices": [
                "Drag a heavy load over the ice",
                "Climb up out of the water onto the ice",
                "Leave the inlet for the open sea",
                "Dive down to feed on the bottom"
              ],
              "answer": 1,
              "hint": "You know haul from hauling a sled. Now read what comes straight after it: onto the ice. Where were the seals before that?",
              "skill": "Word meanings",
              "evidence": "Harbor seals haul out onto the floating chunks of glacier ice here to give birth."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the inlet is shut in June but open in July. What is the reason?",
              "choices": [
                "In June the bergs are larger and far more likely to roll over, so the wave one throws would reach a kayak from much farther off.",
                "In June the pups are newborn and need the ice and their mothers, so scaring a mother off costs far more then than later.",
                "By July there are no seals left anywhere in the inlet, so there is nothing left on the floating ice for a passing kayak to disturb.",
                "The rangers need the whole month of June to count the seals from the air, and no boat may be on the water while that count is made."
              ],
              "answer": 1,
              "hint": "Paragraph one tells you what is happening on the ice in June. Paragraph three tells you what has changed by July. The reason is the difference between them.",
              "skill": "Reading between the lines",
              "evidence": "By now the pups are swimming, and the inlet opens again, but the paddlers still keep their distance."
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
              "Fractions with the same bottom: add the tops."
            ],
            "example": "3 × 8: 8 + 8 + 8 = 24."
          },
          "problems": [
            {
              "q": "The crew counts 7 icebergs with 5 seals in each. How many seals is that?",
              "answer": "35",
              "hint": "7 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "35 seals are shared equally among 7 icebergs. How many seals are on each iceberg?",
              "answer": "5",
              "hint": "How many 7s make 35?",
              "skill": "Dividing"
            },
            {
              "q": "The crew counted 156 seals, then found 53 more, then 35 more. How many seals in all?",
              "answer": "244",
              "hint": "156 + 53 first. Then add 35.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The crew finished 1/4 of the day's work before the break and 1/4 after. What fraction is done? (write a fraction)",
              "answer": "2/4",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "The crew has 500 seals to count. 337 have been counted. How many are left to count?",
              "answer": "163",
              "hint": "500 − 337.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "How many small parts fit: 1/2 ÷ 1/6 = 3/6 ÷ 1/6 = 3.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × (11 − 6) + 9: parentheses first, 11 − 6 = 5; then 4 × 5 = 20; then 20 + 9 = 29."
          },
          "problems": [
            {
              "q": "The crew has 3/4 of a bag of trail mix. Each snack stop uses 1/8 of a bag. How many snack stops is that?",
              "answer": "6",
              "hint": "Write 3/4 with the same bottom as 1/8: 3/4 = 6/8. How many 1/8s is that?",
              "skill": "Fractions"
            },
            {
              "q": "Of 160 seals, 25% are set aside. How many is that?",
              "answer": "40",
              "hint": "25% of 160: 25% is 25/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Icebergs and seals are kept in the ratio 3 to 5. If there are 24 icebergs, how many seals?",
              "answer": "40",
              "hint": "24 ÷ 3 = 8 groups. Each group has 5 seals.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out 8 × (7 − 3) + 13. What is it?",
              "answer": "45",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day it was −10 degrees at dawn. By noon it was 6 degrees. By how many degrees did it rise?",
              "answer": "16",
              "hint": "From −10 up to 0 is 10, then 6 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 22 miles in 4 hours is 22 ÷ 4 = 5.5 miles an hour.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "2x + 13 = 29, so 2x = 16, so x = 8."
          },
          "problems": [
            {
              "q": "12 crossings needed 18 hours altogether. How many hours is that for one crossing?",
              "answer": "1.5",
              "hint": "A rate is the total shared out: 18 ÷ 12.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew counted 60 seals on the first pass. On the second pass the number had fallen by 50%. How many seals is that?",
              "answer": "30",
              "hint": "50% of 60 is 30. Then take it off.",
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
              "q": "Solve for x: 6x + 24 = 78",
              "answer": "9",
              "hint": "Take 24 off both sides first, then divide by 6.",
              "skill": "Equations"
            },
            {
              "q": "A round dial is 20 inches across. Using 3.14 for pi, how many inches is it around the edge?",
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
              "A square root undoes squaring. If a square has area 100, its side is 10.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start at 5 and add 4 each hour. After 7 hours, y = 4 × 7 + 5 = 33."
          },
          "problems": [
            {
              "q": "The crew has counted 12 seals on the ice, and 6 more haul out every hour. After 9 hours, how many seals are there?",
              "answer": "66",
              "hint": "This is the straight-line rule y = mx + b: 6 × 9 + 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 49 square feet. How long is one side, in feet?",
              "answer": "7",
              "hint": "A square's area is side × side. What number times itself makes 49?",
              "skill": "Powers and roots"
            },
            {
              "q": "The crew runs a rope from the top of an 8-foot pole to a point 15 feet away on the ground. How long is the rope, in feet?",
              "answer": "17",
              "hint": "Right triangle: a² + b² = c². 8² + 15² = 64 + 225 = 289. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x + 13 = x + 58",
              "answer": "9",
              "hint": "Take x off both sides to get 5x + 13 = 58, then take 13 off both sides and divide.",
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
          "title": "The last step is the boss",
          "points": [
            "Read every step before you start.",
            "If the last step changes the units or the rule, it wins."
          ],
          "example": "If step 5 says 'give your answer in tens', 120 becomes 12."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of seals the report says can be on the ice in a good year: more than 1,000, so use 1,000.",
          "Divide by 10.",
          "Subtract the number of pups each mother has: 1.",
          "Add the number of tenths of a berg that are underwater: 9.",
          "Type your answer as a word, not a number, in capital letters, and leave the word AND out of it. (45 would be FORTY-FIVE; 132 would be ONE HUNDRED THIRTY-TWO.)"
        ],
        "prompt": "Your answer:",
        "answer": "ONE HUNDRED EIGHT",
        "accept": [
          "one hundred eight",
          "one hundred and eight",
          "ONE HUNDRED AND EIGHT",
          "one-hundred-eight"
        ],
        "hint": "Work steps 2, 3 and 4 on the 1,000 in order. Then step 5 wants that number spelled out in capital letters, not digits."
      }
    },
    {
      "id": "glacier-5",
      "title": "The Face of Margerie",
      "recon": {
        "lesson": {
          "title": "Numbers that describe a thing",
          "points": [
            "Height, width, length: a report often gives three numbers for one thing. Keep them apart.",
            "For a word question, look for 'is called'. The sentence names the thing, then gives the word.",
            "For a 'why' question, look for 'because' or 'reason'. The explanation is in that sentence or the next one or two."
          ],
          "example": "'The barn is 40 feet tall, 60 feet long and 30 feet wide.' Which number answers 'how long'? 60."
        },
        "title": "Field Report: White Thunder",
        "passage": [
          "Margerie Glacier is the wall at the end of the bay. Its face rises about two hundred and fifty feet straight out of the water, a mile wide, blue and white and cracked into towers. Behind it the river of ice runs twenty-one miles back into the mountains. The ice at the face fell as snow about two hundred years ago. It was pressed into ice by the weight of more snow, then slid downhill a few feet a day for two centuries to arrive here, at the sea, today.",
          "Glacier ice looks blue for a real reason. Snow is full of air and scatters every color of light, which is why it looks white. Glacier ice has had the air squeezed out of it, and thick, dense ice absorbs the red end of the light and lets the blue pass through. The deeper the crack, the bluer it looks. The Tlingit people, whose homeland this bay has been for thousands of years, called the sound of the glacier breaking 'white thunder'. Once the crew hears it, no other name will do.",
          "The breaking is called calving. A tower of ice the size of an apartment building leans, cracks, and drops into the water with a roar that arrives a few seconds after the splash, because sound travels slower than light. The wave spreads out across the inlet, and a kayak a mile away rises and falls on it. That is why the crew rafts up a mile from the face and no closer, paddles locked across each other's boats, and waits. This is the end of the expedition. Sixty-five miles of paddling brought the crew here, to a wall that was not here when the bay was mapped."
        ],
        "questions": [
          {
            "q": "How high does the face of Margerie Glacier rise out of the water?",
            "choices": [
              "About twenty-five feet above the water",
              "About two hundred and fifty feet",
              "About a mile, the same as the face is wide",
              "Twenty-one miles, back into the mountains"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the second sentence. Height, not width.",
            "skill": "Finding details"
          },
          {
            "q": "Why does glacier ice look blue?",
            "choices": [
              "Because the dark green water of the bay shows through the ice from below",
              "Because snow is full of air and air scatters the blue light back out",
              "Because dense ice absorbs red light and lets blue pass through",
              "Because the sky over the bay reflects off the smooth face of the glacier"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence with 'absorbs'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what does 'calving' mean?",
            "choices": [
              "The wave from a falling tower spreading out across the inlet",
              "The crew locking paddles across each other's boats to raft up",
              "Ice breaking off the glacier and falling into the water",
              "The tide going out and leaving the bergs stranded on the gravel"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 3.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the roar arrive after the splash?",
            "choices": [
              "Because sound travels slower than light",
              "Because the ice muffles the sound",
              "Because the wave blocks it",
              "Because the tower of ice cracks before it drops into the water"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the sentence with 'a few seconds after the splash, because'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "Why glacier ice looks blue while snow looks white in the very same light",
              "The Tlingit people, their homeland, and the name they gave the sound",
              "How the crew rafts up a mile from the face and waits for the calving",
              "The size of the glacier and how long its ice took to get here"
            ],
            "answer": 3,
            "hint": "Paragraph 1 gives the glacier's measurements and then the two-hundred-year journey of its ice.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Ice numbers",
          "points": [
            "Feet a day over a year: multiply by 365.",
            "Two-step: find what is used up first, then take it off the total.",
            "A fraction times a whole number: 3 × 3/4 is three 3/4s, which is 9/4.",
            "Two-step with a wave: distance ÷ speed = time."
          ],
          "example": "3 feet a day for a year is 3 × 365: 3 × 300 = 900 and 3 × 65 = 195, so 1,095 feet."
        },
        "problems": [
          {
            "q": "The ice moves 2 feet a day. How many feet does it move in a year of 365 days?",
            "answer": "730",
            "hint": "2 × 365: 2 × 300, 2 × 60, 2 × 5, then add.",
            "skill": "Multiplying"
          },
          {
            "q": "The glacier is 21 miles long. If the ice moves 1 mile every 10 years, how many years does ice take to travel the whole glacier?",
            "answer": "210",
            "hint": "21 miles × 10 years each.",
            "skill": "Multiplying"
          },
          {
            "q": "Each of the 5 paddlers eats 3/5 of a pound of trail mix on the last day. How many pounds is that in all?",
            "answer": "3",
            "hint": "Five 3/5s is 15/5. Five fifths make one pound.",
            "skill": "Fractions"
          },
          {
            "q": "The calving wave travels 1,320 feet every minute. The crew is 5,280 feet from the face. How many minutes until the wave reaches them?",
            "answer": "4",
            "hint": "5,280 ÷ 1,320. How many 1,320s make 5,280?",
            "skill": "Dividing"
          },
          {
            "q": "The expedition was 65 miles. The crew paddled 12 miles on each of the first four days. How many miles were left for the last day?",
            "answer": "17",
            "hint": "4 × 12 = 48 first. Then 65 − 48.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Two paragraphs, one conclusion",
            "points": [
              "The last question is never answered in one place. It needs one fact from one paragraph and another fact from somewhere else.",
              "Say the two facts out loud, then say 'so'. If the sentence that comes after 'so' is one of the choices, you have found it.",
              "If a choice needs something the report never mentions, it is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the ferry stops running in November. Paragraph three: the store orders a year of flour in October. So the store is stocking up before the ferry stops. Neither paragraph says that by itself."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Glacier ice looks blue because the air has been squeezed out of it, and the deeper the crack in the ice the bluer it looks.",
                "The wall at the end of the bay looks solid, but everything in the report shows it moving and changing.",
                "Alaska has more glaciers than any other state, and the biggest of them reach the sea and break into the water in the same way.",
                "The ice at the face of the glacier fell as snow only a few weeks before the crew arrived and froze at the water's edge."
              ],
              "answer": 1,
              "hint": "Where the ice came from, why it is blue, what happens when it breaks, what will be here when the crew is old. Ask what all four of those have in common.",
              "skill": "Central idea and evidence",
              "evidence": "It was pressed into ice by the weight of more snow, then slid downhill a few feet a day for two centuries to arrive here, at the sea, today."
            },
            {
              "q": "Claim: the crew sees a piece of ice fall before they hear it. Which sentence from the report best supports that claim?",
              "choices": [
                "Its face rises about two hundred and fifty feet straight out of the water, a mile wide, blue and white and cracked into towers.",
                "The breaking is called calving.",
                "A tower of ice the size of an apartment building leans, cracks, and drops into the water with a roar that arrives a few seconds after the splash, because sound travels slower than light.",
                "The wave spreads out across the inlet, and a kayak a mile away rises and falls on it."
              ],
              "answer": 2,
              "hint": "Naming a thing is not proving anything about it. Find the sentence that puts the sound and the sight in an order.",
              "skill": "Finding details",
              "evidence": "A tower of ice the size of an apartment building leans, cracks, and drops into the water with a roar that arrives a few seconds after the splash, because sound travels slower than light."
            },
            {
              "q": "Why did the author include the second paragraph, about the color of the ice?",
              "choices": [
                "To warn the crew about the danger of going close to the face, where a tower of ice can lean, crack and drop into the water with no warning at all.",
                "To list the places in the bay where blue ice can be seen, so that a crew knows which of the inlets to paddle into and which cracks to look into.",
                "To explain a cause: the ice is blue because it has been pressed dense, which is the same pressing described in the paragraph before it.",
                "To compare this glacier with the other glaciers of Alaska, and to show that the ice at its face is bluer than the ice at any of the others."
              ],
              "answer": 2,
              "hint": "Read the last two sentences of paragraph one, then the middle of paragraph two. Both describe the same thing happening to the ice, in different words.",
              "skill": "Author's purpose and structure",
              "evidence": "Glacier ice has had the air squeezed out of it, and thick, dense ice absorbs the red end of the light and lets the blue pass through."
            },
            {
              "q": "The Tlingit name for the sound of the glacier breaking is 'white thunder'. What makes it a good name for that sound?",
              "choices": [
                "It is as loud as thunder, and it comes out of ice instead of out of a storm.",
                "It is the sound the wave makes as it crosses the inlet.",
                "The ice at the top of the tower turns white in the moment just before it drops into the water.",
                "It is a warning that lightning is somewhere close."
              ],
              "answer": 0,
              "hint": "Two words, two jobs. One word says what the sound is like. The other says what it is coming from.",
              "skill": "Word meanings",
              "evidence": "The Tlingit people, whose homeland this bay has been for thousands of years, called the sound of the glacier breaking 'white thunder'."
            },
            {
              "q": "Paragraphs 1 and 3 together let you work out something about the wall the crew is looking at. What is it?",
              "choices": [
                "The face of the wall is a mile wide and rises about two hundred and fifty feet straight out of the water at the end of the bay.",
                "The ice at the face has stopped moving, and it has stood in that same spot ever since the bay was first mapped long ago.",
                "The ice at the face is the newest ice anywhere in the glacier, having formed at the water's edge long after the ice behind it.",
                "All of it is on its way into the sea, and it is being replaced from behind by ice that fell as snow centuries ago."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you where the ice at the face came from and how long the journey took. Paragraph three tells you where it goes next. Put the two ends of that journey together.",
              "skill": "Reading between the lines",
              "evidence": "It was pressed into ice by the weight of more snow, then slid downhill a few feet a day for two centuries to arrive here, at the sea, today."
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
              "Subtracting: when the top digit is too small, borrow 1 ten. 52 − 18: 12 − 8 = 4, then 4 − 1 = 3, so 34.",
              "Fractions with the same bottom: add or take away the tops. A whole is 6/6, so 6/6 − 2/6 = 4/6."
            ],
            "example": "4 × 7: 7 + 7 + 7 + 7 = 28."
          },
          "problems": [
            {
              "q": "The ice moved 3 feet yesterday and three times as far today. How many feet did it move today?",
              "answer": "9",
              "hint": "Three times 3: 3 + 3 + 3.",
              "skill": "Multiplying"
            },
            {
              "q": "The ice moves 3 feet a day. How many days does it take to move 24 feet?",
              "answer": "8",
              "hint": "How many 3s make 24?",
              "skill": "Dividing"
            },
            {
              "q": "The crew has 133 feet of rope and uses 37. How many are left?",
              "answer": "96",
              "hint": "133 − 37.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "3/8 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "5/8",
              "hint": "The whole job is 8/8. Take 3/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square mat is 9 squares on each side. How many squares is that?",
              "answer": "81",
              "hint": "9 rows of 9.",
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
            "example": "2 + 8 × 6: multiply first, 8 × 6 = 48; then 2 + 48 = 50."
          },
          "problems": [
            {
              "q": "The plan allows 30 hours. The crew uses 9.85 hours on the first crossing and 5.45 on the second. How many hours are left?",
              "answer": "14.7",
              "hint": "Add the two amounts used first, then take that from 30. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "90 of the 120 photos of the glacier are set aside. What percent is that? (write just the number)",
              "answer": "75",
              "accept": [
                "75%"
              ],
              "hint": "90 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 3 calvings there are 5 big waves. There are 25 big waves. How many calvings?",
              "answer": "15",
              "hint": "25 ÷ 5 = 5 groups. Each group has 3 calvings.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out 4 + 7 × 12. What is it?",
              "answer": "88",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day the thermometer read 9 degrees at dawn. By dark it had fallen to −6 degrees. By how many degrees did it fall?",
              "answer": "15",
              "hint": "From 9 down to 0 is 9, then 6 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 33 miles in 6 hours is 33 ÷ 6 = 5.5 miles an hour.",
              "Percent change: divide the change by the starting number. From 50 to 65 the change is 15, and 15 ÷ 50 = 0.3, so 30%.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "9x + 6 = 51, so 9x = 45, so x = 5."
          },
          "problems": [
            {
              "q": "One crossing needs 2.5 hours. How many hours do 20 crossings need?",
              "answer": "50",
              "hint": "20 × 2.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew measured 40 feet of open water between the ice floes on the first pass and 48 on the second. By what percent did the gap change? (write just the number)",
              "answer": "20",
              "accept": [
                "20%"
              ],
              "hint": "The change is 8. 8 out of 40, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter day the thermometer read −4 degrees at dawn and −7 degrees at dark. How many degrees did it fall?",
              "answer": "3",
              "hint": "From −4 down to −7.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 35 − 7x = 7",
              "answer": "4",
              "hint": "Move 7x to the right and 7 to the left: 7x = 28.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 25 feet. The beach is really 175 feet long. How many inches is it on the plan?",
              "answer": "7",
              "hint": "175 ÷ 25.",
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
            "example": "Start with 40 and use 6 each hour. After 3 hours, y = 40 − 6 × 3 = 22."
          },
          "problems": [
            {
              "q": "The crew starts with 50 hand warmers and uses 7 every hour. How many are left after 5 hours?",
              "answer": "15",
              "hint": "7 × 5 = 35 used, taken off 50.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 3 small cubes along every edge. How many small cubes make it up?",
              "answer": "27",
              "hint": "3³ means 3 × 3 × 3.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 10-foot rope runs from the top of a pole to a point 8 feet away on the ground. How tall is the pole, in feet?",
              "answer": "6",
              "hint": "a² = c² − b² = 100 − 64 = 36. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x = 3x + 18",
              "answer": "6",
              "hint": "Take 3x off both sides: 3x = 18. Then divide by 3.",
              "skill": "Equations"
            },
            {
              "q": "The crew reads that the glacier is about 100,000 feet long. Written as 1 × 10 to a power, what is the power?",
              "answer": "5",
              "hint": "Count the zeros after 1.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Every step, then the trap",
          "points": [
            "Read all the steps. The trap is usually near the end.",
            "Keep the units the report used."
          ],
          "example": "If step 5 says 'answer in miles', do not answer in feet."
        },
        "skill": "Following directions",
        "steps": [
          "Write the height of the glacier face in feet from the report: 250.",
          "Write how many miles wide it is: 1.",
          "Write how many miles long it is: 21.",
          "Add the three numbers together.",
          "Ignore steps 1 to 4. Type the number of miles the expedition covered, from the last paragraph."
        ],
        "prompt": "Your answer:",
        "answer": "65",
        "accept": [
          "sixty-five",
          "sixty five",
          "sixty-five."
        ],
        "hint": "Step 5 throws away steps 1 to 4. The last paragraph says how many miles the expedition covered."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
