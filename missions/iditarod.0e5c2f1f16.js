// ODYSSEY — campaign "iditarod". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "iditarod",
  "ready": true,
  "kind": "climb",
  "readingLevel": {
    "fk": 5.4,
    "cl": 6.4
  },
  "grade": "5",
  "kindLabel": "Expedition",
  "form": "owl",
  "title": "The Trail",
  "subtitle": "Iditarod Trail, Alaska",
  "pitch": "Five legs of the thousand-mile sled dog race from Anchorage to Nome. Fourteen dogs, two thousand booties, a mountain pass, a frozen river, sea ice, and a wooden arch at the end.",
  "scene": "assets/scene-iditarod.jpg",
  "waypoints": [
    [
      380,
      720
    ],
    [
      720,
      648
    ],
    [
      936,
      564
    ],
    [
      1128,
      516
    ],
    [
      1296,
      456
    ],
    [
      1440,
      390
    ]
  ],
  "progress": {
    "unit": "miles",
    "total": 1000
  },
  "dayNoun": "Leg",
  "stageNoun": "Checkpoint",
  "finalNoun": "Nome",
  "stages": [
    "Rainy Pass",
    "McGrath",
    "Yukon River",
    "Norton Sound",
    "Nome"
  ],
  "reconNoun": "Trail Notes",
  "legs": {
    "recon": "Trail notes",
    "nav": "Checkpoint math",
    "orders": "Musher's orders",
    "debrief": "Checkpoint"
  },
  "fact": "In 1925 twenty dog teams carried medicine 674 miles to Nome in five and a half days to stop an outbreak of diphtheria. The race remembers them.",
  "finale": {
    "prompt": "Under the Burled Arch in Nome. Which color goes on the lead dog's harness for the photo?",
    "options": [
      {
        "label": "Red",
        "color": "#FF6B6B"
      },
      {
        "label": "Blue",
        "color": "#4FD1FF"
      },
      {
        "label": "Gold",
        "color": "#FFB454"
      },
      {
        "label": "Green",
        "color": "#4FD18B"
      }
    ],
    "done": "Buckle it. Then feed the dogs first. Always the dogs first."
  },
  "patrols": [
    {
      "id": "iditarod-1",
      "title": "Over Rainy Pass",
      "recon": {
        "lesson": {
          "title": "Questions first",
          "points": [
            "Read the five questions before the notes. You are hunting, not wandering.",
            "A question with a number in it wants a number from the notes. Find it exactly.",
            "'Why' is answered by the sentence right after the thing happens, or the one with 'because' in it."
          ],
          "example": "Question: 'How many eggs did the hen lay?' Scan for 'eggs' and a number."
        },
        "title": "Trail Notes: Fourteen Dogs and a Pass",
        "passage": [
          "The Iditarod is a sled dog race of about a thousand miles, from Anchorage on the coast of southern Alaska to Nome on the Bering Sea. It has been run every March since 1973. The race follows an old trail. Before there were roads or planes, dog teams once carried mail and gold along it. A musher starts with up to fourteen dogs and must finish with at least five. Dogs that are tired or sore are left at checkpoints with the veterinarians and flown home. A musher who takes good care of the team is the one whose dogs are still running at the end.",
          "The first hard part is Rainy Pass, the highest point on the trail. There the route climbs through the Alaska Range at more than three thousand feet. On the far side is the Dalzell Gorge, a narrow canyon. The trail crosses a creek there on ice bridges again and again. A sled that gets going too fast on the downhill can end up in the water. Mushers ride the brake, a steel claw that digs into the snow, and some of them tie a chain under the runners to slow down.",
          "The dogs wear booties. Each one is a little sock of tough cloth with a strip of Velcro at the top, and it keeps ice from building up between the dog's toes and cutting the pads. A team of fourteen has fifty-six feet. A set of booties is changed about every twenty-five miles. A musher may go through two thousand of them before Nome. Putting them on is the first job at every stop and the last thing before every start, one paw at a time, with bare hands, at twenty below."
        ],
        "questions": [
          {
            "q": "About how long is the Iditarod?",
            "choices": [
              "One hundred miles",
              "About a thousand miles",
              "About three hundred and fifty miles",
              "About three thousand miles"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How many dogs must a musher finish with, at least?",
            "choices": [
              "Fourteen",
              "Ten",
              "Five",
              "One"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the sentence with 'must finish with'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is a 'bootie'?",
            "choices": [
              "A small cloth sock that protects a dog's paw",
              "A light sled that a musher tows behind the main sled",
              "A cabin at a checkpoint where the mushers can sleep",
              "A steel claw on the sled that digs into the snow"
            ],
            "answer": 0,
            "hint": "The second sentence of paragraph 3 describes it.",
            "skill": "Word meanings"
          },
          {
            "q": "Why do some mushers tie a chain under the runners in the Dalzell Gorge?",
            "choices": [
              "To make the sled heavier so the dogs work harder",
              "To slow the sled down on the steep downhill",
              "To keep the ice bridges from cracking",
              "To keep the sled from tipping over"
            ],
            "answer": 1,
            "hint": "Paragraph 2 says a sled 'that gets going too fast' can end up in the water, then tells what mushers do about it.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "Booties: what they are, why the dogs wear them, and how many get used",
              "How a musher decides which dogs to leave at a checkpoint with the veterinarians",
              "Everything a team must get through between Anchorage and Nome, in the order it comes",
              "The first year the race was run"
            ],
            "answer": 0,
            "hint": "Every sentence in paragraph 3 is about the same small piece of cloth.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Dogs and feet",
          "points": [
            "Groups of the same size: 12 sleds with 3 bags each is 12 × 3 = 36 bags.",
            "Common multiples: count by both numbers. 4, 8, 12 and 6, 12: they meet at 12.",
            "Same bottom fractions: 1/9 + 4/9 = 5/9. Add the tops, keep the bottom.",
            "Booties for the race: booties in one set times the number of sets."
          ],
          "example": "A sled holds 8 bags of 25 pounds each: 8 × 25 = 200 pounds."
        },
        "problems": [
          {
            "q": "A team has 14 dogs. Each dog has 4 feet. How many booties does one full set take?",
            "answer": "56",
            "hint": "14 × 4.",
            "skill": "Multiplying"
          },
          {
            "q": "The musher snacks the dogs every 3 hours and checks their booties every 8 hours. Both happen at the start. How many hours until the musher does both at the same time again?",
            "answer": "24",
            "hint": "Count by 3s and by 8s. Which number is on both lists first?",
            "skill": "Multiplying"
          },
          {
            "q": "The musher spent 2/7 of the leg climbing to Rainy Pass and 3/7 in the gorge. What fraction of the leg is that together? (write a fraction)",
            "answer": "5/7",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "One set of booties is 56. The musher needs 40 sets for the race. How many booties is that?",
            "answer": "2240",
            "accept": [
              "2,240"
            ],
            "hint": "56 × 4 = 224, then add a zero.",
            "skill": "Multiplying"
          },
          {
            "q": "Rainy Pass is 3,160 feet high. The trail starts at 340 feet. How many feet does the trail climb to the pass?",
            "answer": "2820",
            "accept": [
              "2,820"
            ],
            "hint": "3,160 − 340.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Say it in one line",
            "points": [
              "Before you look at the choices, say what the whole report was about in one sentence of your own. Then find the choice closest to yours.",
              "A choice that is true but covers only one paragraph is a detail wearing the idea's coat.",
              "A choice that says something the report never mentions is out, however big and important it sounds."
            ],
            "example": "Three paragraphs about fixing a bicycle: the brake, the chain, the tire. The idea is not 'the chain needs oil'. It is that the bike only works when every part gets checked."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "A team of fourteen dogs has fifty-six feet, and because a set is changed about every twenty-five miles, a musher may go through two thousand of them.",
                "On this trail the work that decides the race is the care of the dogs, mile after mile, not the speed of the running.",
                "The trail follows an old route that once carried mail and gold before there were roads or planes.",
                "A musher who starts with fourteen dogs must finish with all fourteen, so a team that leaves a tired dog at a checkpoint is out of the race."
              ],
              "answer": 1,
              "hint": "Label the three paragraphs: rules and vets, a dangerous descent, a thousand small jobs with booties. Ask what all three are in service of.",
              "skill": "Central idea and evidence",
              "evidence": "A musher who takes good care of the team is the one whose dogs are still running at the end."
            },
            {
              "q": "Claim: a musher spends a large part of the race handling the dogs' feet. Which sentence from the report best supports that claim?",
              "choices": [
                "Each one is a little sock of tough cloth with a strip of Velcro at the top, and it keeps ice from building up between the dog's toes and cutting the pads.",
                "The dogs wear booties.",
                "Putting them on is the first job at every stop and the last thing before every start, one paw at a time, with bare hands, at twenty below.",
                "A musher starts with up to fourteen dogs and must finish with at least five."
              ],
              "answer": 2,
              "hint": "The claim is about time and repetition, not about equipment. Find the sentence that shows how often the job comes around.",
              "skill": "Finding details",
              "evidence": "Putting them on is the first job at every stop and the last thing before every start, one paw at a time, with bare hands, at twenty below."
            },
            {
              "q": "What job does the second paragraph do in this report?",
              "choices": [
                "It shows a place where the problem is control rather than distance, and gives the two things mushers do about it.",
                "It lists the checkpoints along the trail in the order the teams reach them, from the first one out of Anchorage to the last one before Nome.",
                "It explains why the race was first run in 1973 and how the old mail and gold trail came to be chosen as the route the teams still follow.",
                "It compares the Alaska Range with the flat coast at Nome and says which of the two stretches gives a team more trouble."
              ],
              "answer": 0,
              "hint": "Read the last sentence of the paragraph. When a paragraph ends with what people do about something, look back to find the something.",
              "skill": "Author's purpose and structure",
              "evidence": "Mushers ride the brake, a steel claw that digs into the snow, and some of them tie a chain under the runners to slow down."
            },
            {
              "q": "The report says mushers 'ride the brake' on the descent. What does that phrase mean as it is used here?",
              "choices": [
                "They sit down on the sled so that their weight presses the runners into the snow.",
                "They keep steady pressure on the brake the whole way down.",
                "They take turns riding while the dogs rest.",
                "They let go of the sled and run along beside it."
              ],
              "answer": 1,
              "hint": "Ride here is not about sitting on something. The sentence tells you what the brake is and what it does. What would riding it have to mean for the sentence to make sense?",
              "skill": "Word meanings",
              "evidence": "Mushers ride the brake, a steel claw that digs into the snow, and some of them tie a chain under the runners to slow down."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why a small cloth sock matters more than it looks. Why does it?",
              "choices": [
                "A cut paw makes a sore dog, a sore dog is left at a checkpoint, so booties are part of arriving with a team at all.",
                "Booties give the dogs more grip on hard snow, so a team wearing them can hold a faster pace all the way from Anchorage to Nome.",
                "The rules require every dog to wear booties at all times, and a checkpoint veterinarian will hold a team back until every paw is covered.",
                "Booties keep the dogs warm enough to sleep outside."
              ],
              "answer": 0,
              "hint": "One paragraph says what happens to a sore dog. Another says what booties prevent. Put the two facts side by side and say 'so'.",
              "skill": "Reading between the lines",
              "evidence": "Dogs that are tired or sore are left at checkpoints with the veterinarians and flown home."
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
              "Subtracting: line up the ones, tens and hundreds, and borrow when the top digit is too small.",
              "A fraction is parts done over equal parts in all: 2 of 5 parts is 2/5."
            ],
            "example": "A rug is 7 squares wide and 3 long: 7 × 3 = 21 squares. Cover 7, and 14 are left."
          },
          "problems": [
            {
              "q": "Every dog needs 4 booties, and there are 6 dogs. How many booties is that?",
              "answer": "24",
              "hint": "6 groups of 4, so 6 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "The musher splits 48 booties into two equal piles. How many booties are in one pile?",
              "answer": "24",
              "hint": "Half of 48.",
              "skill": "Dividing"
            },
            {
              "q": "The musher needs 800 booties and has 265. How many more are needed?",
              "answer": "535",
              "hint": "800 − 265.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 4 equal parts and the musher has finished 3 of them. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "3 parts out of 4.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 9 squares wide and 5 squares long. The musher has covered 9 squares. How many squares are left to cover?",
              "answer": "36",
              "hint": "9 × 5 squares in all, then take 9 off.",
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
            "example": "3 × (10 − 4) + 5: parentheses first, 10 − 4 = 6, then 3 × 6 = 18, then 18 + 5 = 23."
          },
          "problems": [
            {
              "q": "Each leg takes 2.45 hours of running. How many hours for 12 legs?",
              "answer": "29.4",
              "hint": "Split it: 12 × 2 plus 12 × 0.45.",
              "skill": "Decimals"
            },
            {
              "q": "Of 160 booties, 50% are struck off the list. How many are left on it?",
              "answer": "80",
              "hint": "50% of 160 is 80. Take that off 160.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The musher shares 35 miles between two teams in the ratio 2 to 3. How many does the smaller share get?",
              "answer": "14",
              "hint": "2 + 3 = 5 parts. 35 ÷ 5 = 7 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The musher works out 4 × 7 − 2 × 3. What is it?",
              "answer": "22",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "The coldest reading was −19 degrees and the warmest was −7 degrees. How many degrees apart are they?",
              "answer": "12",
              "hint": "From −19 up to −7.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 miles in 6 hours is 18 ÷ 6 = 3 miles an hour.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the steps in reverse. For 7x + 2, take off the 2 first; for 7(x + 2), divide by 7 first."
            ],
            "example": "3(x + 2) = 27: divide both sides by 3 to get x + 2 = 9, so x = 7."
          },
          "problems": [
            {
              "q": "24 sections of trail took 12 hours. At the same rate, how many hours would 32 sections take?",
              "answer": "16",
              "hint": "One section takes 12 ÷ 24 = 0.5. Then × 32.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The musher had 80 booties, then added 25% more. How many booties were added?",
              "answer": "20",
              "hint": "25% of 80: 25/100 × 80.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The low was −9 degrees and the high was 6 degrees. How many degrees apart are they?",
              "answer": "15",
              "hint": "9 below zero plus 6 above zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 4(x + 6) = 36",
              "answer": "3",
              "hint": "Divide both sides by 4 to get x + 6 = 9.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 5 inches stand for 20 feet. How many feet does 1 inch stand for?",
              "answer": "4",
              "hint": "20 ÷ 5.",
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
            "example": "A list starts at 9 and adds 4 each step: 9, 13, 17. The 6th number is 5 steps on: 9 + 4 × 5 = 29."
          },
          "problems": [
            {
              "q": "The count of booties goes 12, 17, 22, 27, and on. What is the 8th number in the list?",
              "answer": "47",
              "hint": "It starts at 12 and adds 5 each step. The number you want is 7 steps on from 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (8 × 6)²?",
              "answer": "2304",
              "hint": "8 × 6 = 48 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 3 and 4 feet. How long is its longest side, in feet?",
              "answer": "5",
              "hint": "3² + 4² = 25. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x − 3x = 40",
              "answer": "8",
              "hint": "8 − 3 = 5, so 5x = 40.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 2 × 10^4 or 3 × 10^3? Write the bigger one out in full.",
              "answer": "20000",
              "hint": "2 × 10^4 is ten times 2 × 10^3, and 3 is not ten times 2.",
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
          "example": "If step 5 says 'only count the dogs', the booties were a distraction."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of dogs a team can start with: 14.",
          "Multiply by the number of feet on a dog: 4.",
          "Subtract the smallest number of dogs a team can finish with: 5.",
          "Add the year the race was first run, 1973, to your answer.",
          "Ignore step 4. Take your answer from step 3 and type it."
        ],
        "prompt": "Your answer:",
        "answer": "51",
        "hint": "Step 5 cancels step 4, so the year never gets added. Your answer is whatever step 3 leaves you with."
      }
    },
    {
      "id": "iditarod-2",
      "title": "The Long Rest",
      "recon": {
        "lesson": {
          "title": "Rules in a report",
          "points": [
            "When the notes list rules, each one is a detail a question can ask for.",
            "'Must' and 'at least' are exact. Read the number next to them.",
            "The reason for a rule is often in the same sentence, after 'because', or in the sentence after it."
          ],
          "example": "'Every swimmer must rest ten minutes after lunch.' How long? Ten minutes. Why? Read on."
        },
        "title": "Trail Notes: Twenty-Four Hours in McGrath",
        "passage": [
          "Every team on the Iditarod must take three rests that the rules require: one of twenty-four hours, and one of eight hours somewhere on the Yukon River. The third is eight hours at White Mountain, seventy-seven miles from the finish. The twenty-four-hour rest can be taken at any checkpoint the musher chooses. Many take it at McGrath or Takotna. In those small villages, the whole town turns out to cook for the mushers and hand out pie. The dogs do not care about the pie. They care about straw, food, and sleep, in that order.",
          "At a checkpoint the first thing a musher does is spread straw for the dogs to lie on, because a dog lying on bare snow loses heat through its belly. Then the musher melts snow, cooks a hot meal of kibble, fat and meat, and feeds the team before eating anything. A running sled dog burns about ten thousand calories a day, five times what a person eats, and a dog that does not eat does not run. Veterinarians check every dog at every checkpoint. They check its heart, lungs, feet and weight, and whether it still wants to go.",
          "The rest is also for the musher. Most sleep two or three hours at a time for the whole race, and by the halfway point they are seeing things on the trail that are not there. The twenty-four hours is the one time a musher can sleep in a bed, dry the gear, and think. The team leaves McGrath rested. From there the trail turns north toward the Yukon. Ahead are three hundred miles of flat, windy, empty country. Out there, the checkpoints are a day apart."
        ],
        "questions": [
          {
            "q": "How long is the longest required rest?",
            "choices": [
              "Eight hours",
              "Thirty-six hours in a row",
              "Three hours",
              "Twenty-four hours"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the first sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What does a musher do first at a checkpoint?",
            "choices": [
              "Eat a piece of pie",
              "Spread straw for the dogs",
              "Sleep in a bed",
              "Melt snow and cook a hot meal for the team"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the first sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is 'kibble'?",
            "choices": [
              "Straw",
              "Dry dog food",
              "Raw meat",
              "Fish oil"
            ],
            "answer": 1,
            "hint": "The sentence lists 'kibble, fat and meat' as a hot meal for the dogs.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does a musher spread straw before doing anything else?",
            "choices": [
              "Because a dog on bare snow loses heat through its belly",
              "Because the rules require it at every checkpoint on the trail",
              "Because the dogs will not eat their meal until they can lie down",
              "Because the veterinarians will not check a dog that is standing up"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the first sentence, after 'because'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How much a sled dog eats each day",
              "What the people of McGrath and Takotna cook for the mushers who stop",
              "The three hundred miles of flat and windy country north of the Yukon",
              "Why the long rest matters for the musher, not just the dogs"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 3 says 'The rest is also for the musher.'",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Feeding fourteen dogs",
          "points": [
            "Big times small: 3,000 × 12 is 3 × 12 = 36, then put back the three zeros: 36,000.",
            "Volume of a box: length × width × height. 3 × 2 × 5 = 30 cubic feet.",
            "Adding three numbers: add two, then the third. 15 + 9 + 9 = 33.",
            "Two-step: pounds for one meal for the whole team first, then times the number of meals."
          ],
          "example": "5 bags of 4 pounds for each of 6 sleds: 5 × 4 = 20 pounds a sled, then 20 × 6 = 120 pounds."
        },
        "problems": [
          {
            "q": "One running sled dog burns about 10,000 calories a day. How many calories does a team of 14 burn in a day?",
            "answer": "140000",
            "accept": [
              "140,000"
            ],
            "hint": "10,000 × 14. Think 14 with four zeros.",
            "skill": "Multiplying"
          },
          {
            "q": "The sled bag is 6 feet long, 2 feet wide and 2 feet tall. How many cubic feet of gear can it hold?",
            "answer": "24",
            "hint": "Length × width × height: 6 × 2 first, then times 2.",
            "skill": "Volume"
          },
          {
            "q": "The three required rests are 24 hours, 8 hours and 8 hours. How many hours of required rest is that in all?",
            "answer": "40",
            "hint": "24 + 8 first. Then add 8.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "Each dog eats 2 pounds of kibble a meal. The team of 14 eats 3 meals at the checkpoint. How many pounds of kibble is that?",
            "answer": "84",
            "hint": "2 × 14 = 28 pounds a meal. Then 28 × 3.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The musher slept 3/8 of the long rest and spent 2/8 of it drying gear. What fraction of the rest is that together? (write a fraction)",
            "answer": "5/8",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The sentence that would convince someone",
            "points": [
              "A claim is something a person could argue with. Your job is to find the line that ends the argument.",
              "Say the claim, then say your choice, then ask: does the second one make the first one certain?",
              "Watch for a choice that shares a word with the claim and proves nothing at all. That is the trap almost every time."
            ],
            "example": "Claim: the camp was left in a hurry. 'Plates were still on the table' proves it. 'The camp was near the river' is true and settles nothing."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A running sled dog burns about ten thousand calories a day, five times what a person eats, so the musher cooks a hot meal.",
                "Veterinarians check each dog at the checkpoints: heart, lungs, feet and weight.",
                "The twenty-four-hour rest has to be taken at McGrath.",
                "The long rest is not time off. It is the work that keeps both the team and the musher able to go on."
              ],
              "answer": 3,
              "hint": "Paragraph two is about the dogs' rest, paragraph three about the musher's. The idea has to cover both, and the rules in paragraph one as well.",
              "skill": "Central idea and evidence",
              "evidence": "The rest is also for the musher."
            },
            {
              "q": "Claim: on the trail a musher's own needs come after the team's. Which sentence from the report best supports that claim?",
              "choices": [
                "A running sled dog burns about ten thousand calories a day, five times what a person eats, and a dog that does not eat does not run.",
                "Then the musher melts snow, cooks a hot meal of kibble, fat and meat, and feeds the team before eating anything.",
                "The rest is also for the musher.",
                "The twenty-four hours is the one time a musher can sleep in a bed, dry the gear, and think."
              ],
              "answer": 1,
              "hint": "The claim is about an order: dogs first, musher second. Find the sentence that actually puts two things in that order.",
              "skill": "Finding details",
              "evidence": "Then the musher melts snow, cooks a hot meal of kibble, fat and meat, and feeds the team before eating anything."
            },
            {
              "q": "How is the second paragraph organized?",
              "choices": [
                "It compares the dogs' rest with the musher's rest.",
                "It gives the jobs at a checkpoint in the order a musher does them.",
                "It lists the three rests that the rules require.",
                "It explains why the race is run in March."
              ],
              "answer": 1,
              "hint": "Look for the order words: 'the first thing a musher does', then 'then'. A paragraph built on those is telling you a sequence.",
              "skill": "Author's purpose and structure",
              "evidence": "At a checkpoint the first thing a musher does is spread straw for the dogs to lie on, because a dog lying on bare snow loses heat through its belly."
            },
            {
              "q": "The report says that by the halfway point mushers 'are seeing things on the trail that are not there'. What does that tell you about them?",
              "choices": [
                "They are so short of sleep that their eyes and minds are playing tricks on them.",
                "The wind has blown the trail markers out of position, so what a musher sees is no longer where the trail is.",
                "They are watching carefully for wildlife in the dark, because an animal on the trail is hard to see from a moving sled.",
                "They are imagining what the finish line will be like, and picturing it is what keeps them going through the middle of the race."
              ],
              "answer": 0,
              "hint": "The sentence has two halves joined by 'and'. The first half is the cause of the second. Read them as one thing.",
              "skill": "Word meanings",
              "evidence": "Most sleep two or three hours at a time for the whole race, and by the halfway point they are seeing things on the trail that are not there."
            },
            {
              "q": "Paragraphs 1 and 3 together suggest why so many mushers choose McGrath for the twenty-four-hour rest. What is the reason?",
              "choices": [
                "McGrath is the only checkpoint that has veterinarians.",
                "The rules require the long rest to be taken before the Yukon, so a musher heading for the river has to stop at McGrath whether they want to or not.",
                "McGrath is exactly halfway between Anchorage and Nome, and the rules time the long rest so that it falls at the midpoint of every musher's race.",
                "The long rest can be taken anywhere, and three hundred miles of empty country come next, so this is a sensible place to be fully rested."
              ],
              "answer": 3,
              "hint": "One paragraph tells you the rest can be taken at any checkpoint the musher picks. Another tells you what the trail does after McGrath. A choice is a choice about what is coming.",
              "skill": "Reading between the lines",
              "evidence": "The twenty-four-hour rest can be taken at any checkpoint the musher chooses."
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
              "Subtracting: line up the ones, tens and hundreds, and borrow when the top digit is too small.",
              "Fractions with the same bottom: the bigger top is the bigger fraction."
            ],
            "example": "5 × 6 = 30, so 30 ÷ 6 = 5. A times fact gives you a sharing fact too."
          },
          "problems": [
            {
              "q": "The musher carries 4 bales on each of 4 trips. How many bales is that?",
              "answer": "16",
              "hint": "4 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "The musher leaves 7 bales of straw at each checkpoint. How many checkpoints do 28 bales cover?",
              "answer": "4",
              "hint": "How many 7s fit into 28?",
              "skill": "Dividing"
            },
            {
              "q": "The musher counted 375 pounds of kibble in the morning and 463 in the evening. How many more in the evening?",
              "answer": "88",
              "hint": "463 − 375.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 2/6 or 5/6? (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "The target is 800 pounds of kibble and 498 are logged. How many short is that?",
              "answer": "302",
              "hint": "800 − 498.",
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
            "example": "(9 − 3) × (2 + 5): each set of parentheses first, 6 and 7, then 6 × 7 = 42."
          },
          "problems": [
            {
              "q": "The musher has 10 pounds of dog food. Each dog's meal is 5/8 of a pound. How many dogs can the musher feed?",
              "answer": "16",
              "hint": "Dividing by 5/8 means multiplying by its flip, 8/5: 10 × 8/5.",
              "skill": "Fractions"
            },
            {
              "q": "Out of every 100 pounds of kibble, 75 are set aside. Out of 40 pounds of kibble, how many is that?",
              "answer": "30",
              "hint": "40 is 0.4 hundreds, so 0.4 × 75.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The musher divides 56 minutes of work in the ratio 3 to 5. How many minutes is the larger share?",
              "answer": "35",
              "hint": "8 parts in all, so one part is 7 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The musher works out (12 − 5) × (6 + 6). What is it?",
              "answer": "84",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three readings came in: −15, 1 and −16 degrees. Which is the coldest?",
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
              "A unit rate is the total divided by how many: 45 miles in 9 hours is 45 ÷ 9 = 5 miles an hour.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding or subtracting first, then undo the multiplying or dividing."
            ],
            "example": "x ÷ 3 − 4 = 5: add 4 to both sides to get x ÷ 3 = 9, then multiply by 3, so x = 27."
          },
          "problems": [
            {
              "q": "The job needs 60 hours in all, at 2.5 hours for each leg. One leg is already done. How many legs are left?",
              "answer": "23",
              "hint": "60 ÷ 2.5 = 24 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of pounds of kibble may change by no more than 25%. Starting from 60, what is the highest count the rule allows?",
              "answer": "75",
              "hint": "25% of 60 is 15. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer falls 2 degrees every hour for 8 hours. What is the total change? (Write a fall as a negative number.)",
              "answer": "-16",
              "accept": [
                "−16"
              ],
              "hint": "8 hours of −2 each: 8 × (−2). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 8 − 17 = 6",
              "answer": "184",
              "hint": "Add 17 to both sides, then multiply by 8.",
              "skill": "Equations"
            },
            {
              "q": "A round dog dish measures 31.4 inches around the edge. Using 3.14 for pi, how many inches is it across?",
              "answer": "10",
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
            "example": "A line through (0, 3) and (2, 11) rises 8 while it runs 2, so its slope is 8 ÷ 2 = 4."
          },
          "problems": [
            {
              "q": "A line passes through (0, 5) and (4, 25). What is its slope?",
              "answer": "5",
              "hint": "Slope is the rise over the run: 20 ÷ 4.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 64 square feet. How many feet is it around the edge?",
              "answer": "32",
              "hint": "One side is the square root of 64, then four sides.",
              "skill": "Powers and roots"
            },
            {
              "q": "The musher goes 6 feet east and then 8 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "10",
              "hint": "The two legs make a right angle: 6² + 8² = 100.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 9x + 4 and 3x + 46 come to the same number?",
              "answer": "7",
              "hint": "Set them equal, take 3x off both sides, then take 4 off.",
              "skill": "Equations"
            },
            {
              "q": "Two round tanks each have a radius of 5 feet and are 4 feet deep. Using 3.14 for pi, what is their total volume in cubic feet?",
              "answer": "628",
              "hint": "One tank is 3.14 × 5 × 5 × 4 = 314. Then double it.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Order matters",
          "points": [
            "Do the steps in the order given, even if another order looks easier.",
            "Write each result down before the next step."
          ],
          "example": "'Add 8, then double it' is not the same as 'double it, then add 8'."
        },
        "skill": "Following directions",
        "steps": [
          "Start with the 24 hours of the longest rest the rules require.",
          "Add the 8 hours of the rest on the Yukon.",
          "Add the 8 hours of the rest at White Mountain.",
          "Divide by 5, because a running sled dog burns five times what a person eats.",
          "The checkpoint clerk fills the board in by hand, so type your answer as a word in capital letters, not as digits."
        ],
        "prompt": "Your answer:",
        "answer": "EIGHT",
        "accept": [
          "eight",
          "Eight",
          "eight."
        ],
        "hint": "Add all three required rests together before you divide. Step 5 decides whether the answer goes on the board in digits or letters."
      }
    },
    {
      "id": "iditarod-3",
      "title": "The Yukon",
      "recon": {
        "lesson": {
          "title": "Where the answer hides",
          "points": [
            "A 'how' question is answered by a description, often several sentences long. Find the start of it.",
            "Names of places are details. The notes name them exactly.",
            "When the notes explain a danger, the fix is usually in the next sentence."
          ],
          "example": "'The river floods every spring. Farmers build their houses on the hills.' The danger and the fix, side by side."
        },
        "title": "Trail Notes: A River Made of Wind",
        "passage": [
          "The Yukon is the biggest river in Alaska. In March it is a highway of ice more than a mile wide. The trail runs on the river for about a hundred and fifty miles, through the villages of Ruby, Galena, Nulato and Kaltag. It is the flattest and the coldest part of the race. With nothing to block it, the wind comes straight down the river for days, and the temperature drops to forty below. The snow it blows across the ice fills the trail faster than a team can break it.",
          "Because the trail vanishes, the race marks it. Before the mushers arrive, crews on snowmachines plant wooden stakes with orange tops every few hundred feet. A reflector on each one catches a headlamp from far away. At night on the Yukon, a musher sees nothing but the next stake. Then the one after that, for hours. The lead dogs learn to run from marker to marker. A good leader will find the trail under a foot of fresh snow by smell when the musher cannot see it at all.",
          "Cold is the enemy here, and the answer to it is to keep moving and keep eating. Mushers wear three layers. They also wear a fur ruff around the hood that breaks the wind before it reaches the face. Every hour or two, they stop to snack the dogs on frozen fish and fat. A dog's body burns that food like fuel. The eight-hour Yukon rest is taken in one of the villages, in a warm cabin where the ice on the dogs' faces melts and the musher sleeps like a stone."
        ],
        "questions": [
          {
            "q": "About how far does the trail run on the Yukon River?",
            "choices": [
              "About a hundred and fifty miles",
              "About a mile",
              "About a thousand miles",
              "About forty miles"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the third sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How is the trail marked on the river?",
            "choices": [
              "With bright yellow lines painted right onto the river ice",
              "With wooden stakes with orange tops and reflectors",
              "With small fires that the village crews light along the way",
              "With ropes strung between the villages"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is a 'ruff'?",
            "choices": [
              "A ring of fur around the hood that breaks the wind",
              "A layer of clothing worn under the coat",
              "A frozen fish",
              "A rough patch of ice"
            ],
            "answer": 0,
            "hint": "The sentence with 'fur ruff' says what it does.",
            "skill": "Word meanings"
          },
          {
            "q": "Why can a lead dog find the trail when the musher cannot?",
            "choices": [
              "Because dogs have better eyes",
              "Because the dog has run this stretch before",
              "Because a good leader can smell the trail under the snow",
              "Because the dog is faster"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How mushers and dogs fight the cold",
              "The villages that the trail passes through along the river",
              "How the crews put in the stakes before the race arrives",
              "How wide the Yukon gets and how far the trail runs on it"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 3 says 'Cold is the enemy here, and the answer to it is...'.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Marker math",
          "points": [
            "Adding decimals: line up the points. 2.4 + 1.35 is 2.40 + 1.35 = 3.75.",
            "Miles over hours gives miles per hour: divide.",
            "Subtracting from a round number like 5,000: think of it as 4,999 + 1, so there is no borrowing.",
            "Two-step: find how many stops there are first, then multiply by what each stop needs."
          ],
          "example": "180 miles in 12 hours is 180 ÷ 12 = 15 miles an hour."
        },
        "problems": [
          {
            "q": "The team runs 150 miles of river in 15 hours of running. How many miles an hour is that?",
            "answer": "10",
            "hint": "150 ÷ 15.",
            "skill": "Dividing"
          },
          {
            "q": "The musher ran 4.75 miles on the river before the first snack stop and 2.5 miles after it. How many miles is that? (write a decimal)",
            "answer": "7.25",
            "hint": "Line up the points: 4.75 + 2.50.",
            "skill": "Decimals"
          },
          {
            "q": "The musher snacks the dogs every 2 hours. In 16 hours of running, how many snack stops is that?",
            "answer": "8",
            "hint": "16 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "At each snack stop the 14 dogs each get 1 frozen fish. Over 8 stops, how many fish does the musher hand out?",
            "answer": "112",
            "hint": "14 × 8.",
            "skill": "Multiplying"
          },
          {
            "q": "The musher packed 2,000 pounds of supplies for the race and has used 1,235 pounds by the Yukon. How many pounds are left?",
            "answer": "765",
            "hint": "2,000 − 1,235. Think of 2,000 as 1,999 + 1.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Why here, why now",
            "points": [
              "Ask not only what a paragraph does but why it sits where it sits. What did the paragraph before it leave you needing?",
              "A paragraph that opens with 'because', 'so' or 'that is why' is answering the one in front of it.",
              "Name the shape out loud: cause and effect, comparison, sequence, or problem and solution. One of the four always fits."
            ],
            "example": "A paragraph about a wall being built, placed straight after a paragraph about a flood, is not really about walls. It is the answer to the flood."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "On the river both the trail and the warmth keep disappearing, and everything a team does here is aimed at holding on to them.",
                "Wooden stakes with orange tops are planted every few hundred feet.",
                "Mushers wear three layers and a fur ruff that breaks the wind before it reaches the face.",
                "The river section is the warmest part of the race because it is flat."
              ],
              "answer": 0,
              "hint": "Wind and vanishing trail, stakes and lead dogs, layers and frozen fish. Ask what problem all three paragraphs keep circling.",
              "skill": "Central idea and evidence",
              "evidence": "The snow it blows across the ice fills the trail faster than a team can break it."
            },
            {
              "q": "Claim: a lead dog can do something on the river that the musher cannot. Which sentence from the report best supports that claim?",
              "choices": [
                "A reflector on each one catches a headlamp from far away.",
                "A good leader will find the trail under a foot of fresh snow by smell when the musher cannot see it at all.",
                "With nothing to block it, the wind comes straight down the river for days, and the temperature drops to forty below.",
                "The eight-hour Yukon rest is taken in one of the villages, in a warm cabin where the ice on the dogs' faces melts and the musher sleeps like a stone."
              ],
              "answer": 1,
              "hint": "The claim compares two of them. Only one sentence puts the dog and the musher in the same line and shows the difference.",
              "skill": "Finding details",
              "evidence": "A good leader will find the trail under a foot of fresh snow by smell when the musher cannot see it at all."
            },
            {
              "q": "Why did the author put the paragraph about the orange stakes immediately after the paragraph about the wind?",
              "choices": [
                "Because the wind is what makes the trail vanish, and the stakes are the answer to that problem.",
                "Because the villages are listed in the order the teams reach them.",
                "Because the crews plant the stakes before the mushers ever arrive.",
                "Because snowmachines travel faster than dog teams do."
              ],
              "answer": 0,
              "hint": "The first word of the second paragraph is doing all the work. Read it, then look back at the last sentence of the paragraph before.",
              "skill": "Author's purpose and structure",
              "evidence": "Because the trail vanishes, the race marks it."
            },
            {
              "q": "The report says blown snow 'fills the trail faster than a team can break it'. What does break the trail mean as it is used here?",
              "choices": [
                "Damage the trail so that nobody else can use it",
                "Stop for a rest partway along the trail",
                "Push a path through fresh snow so that there is a trail to follow",
                "Cross the trail and carry on in another direction"
              ],
              "answer": 2,
              "hint": "Break does many jobs. Here it is in a race between snow filling something and a team doing something. What would the team have to be doing for that race to make sense?",
              "skill": "Word meanings",
              "evidence": "The snow it blows across the ice fills the trail faster than a team can break it."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why a musher may end up trusting the lead dog over their own eyes. Why?",
              "choices": [
                "Blown snow can bury the marked trail, and the dog can still find it by smell when there is nothing left to see.",
                "The dogs have run this stretch of the river in earlier years, so the team remembers the way from Ruby to Kaltag without needing to see the trail.",
                "The reflectors on the stakes stop working in very cold weather, so below forty there is nothing left for a headlamp to catch.",
                "The musher keeps the headlamp switched off to save the battery, so out on the river at night there is nothing for a person to steer by at all."
              ],
              "answer": 0,
              "hint": "One paragraph says what the snow does to the trail. Another says what a good leader can do about it. Neither is the whole answer on its own.",
              "skill": "Reading between the lines",
              "evidence": "A good leader will find the trail under a foot of fresh snow by smell when the musher cannot see it at all."
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
            "example": "3 × 8 = 24, so 24 shared into 3 equal groups is 8 each."
          },
          "problems": [
            {
              "q": "The musher passes 5 trail markers each day for 6 days. How many markers is that?",
              "answer": "30",
              "hint": "6 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "The musher passes 30 trail markers in 6 days, the same number each day. How many markers is that each day?",
              "answer": "5",
              "hint": "How many 6s make 30?",
              "skill": "Dividing"
            },
            {
              "q": "The musher counted 291 trail markers, then found 52 more, then 74 more. How many trail markers in all?",
              "answer": "417",
              "hint": "291 + 52 first. Then add 74.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The musher finished 1/4 of the day's work before the break and 2/4 after. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A trail marker platform is 3 squares wide and 4 squares long. How many squares is that?",
              "answer": "12",
              "hint": "3 rows of 4, so 3 × 4.",
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
            "example": "4 × (8 − 3) + 6: parentheses first, 8 − 3 = 5, then 4 × 5 = 20, then 20 + 6 = 26."
          },
          "problems": [
            {
              "q": "The musher has 36 hours of running. Each leg takes 2.4 hours. How many legs is that enough for?",
              "answer": "15",
              "hint": "Move both points 1 place to the right: 360 ÷ 24.",
              "skill": "Decimals"
            },
            {
              "q": "Of 80 trail markers, 75% are set aside. How many is that?",
              "answer": "60",
              "hint": "75% of 80: 75% is 75/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Miles of river and trail markers are kept in the ratio 2 to 5. If there are 18 miles of river, how many trail markers?",
              "answer": "45",
              "hint": "18 ÷ 2 = 9 groups. Each group has 5 trail markers.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The musher works out 9 × (11 − 1) + 7. What is it?",
              "answer": "97",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn it was −5 degrees. By noon it was 12 degrees. By how many degrees did it rise?",
              "answer": "17",
              "hint": "From −5 up to 0 is 5, then 12 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 30 miles in 4 hours is 30 ÷ 4 = 7.5 miles an hour.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "3x + 14 = 47, so 3x = 33, so x = 11."
          },
          "problems": [
            {
              "q": "16 sections of trail needed 24 hours altogether. How many hours is that for one section?",
              "answer": "1.5",
              "hint": "A rate is the total shared out: 24 ÷ 16.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The musher counted 120 trail markers on the first pass. On the second pass the number had risen by 50%. How many trail markers is that?",
              "answer": "180",
              "hint": "50% of 120 is 60. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "At dawn the thermometer read −9 degrees. It rose 15 degrees by noon, then fell 2 degrees by dark. What does it read at dark?",
              "answer": "4",
              "hint": "Start at −9, go up 15 to 6, then down 2.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 2x + 30 = 44",
              "answer": "7",
              "hint": "Take 30 off both sides first, then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 5 feet. The trail section measures 8 inches on the plan. How long is it really, in feet?",
              "answer": "40",
              "hint": "Every inch is 5 feet, so 8 × 5.",
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
            "example": "Start at 20 and add 4 each hour. After 7 hours: y = 4 × 7 + 20 = 48."
          },
          "problems": [
            {
              "q": "The musher starts with 15 trail markers and adds 3 more every hour. After 9 hours, how many trail markers are there?",
              "answer": "42",
              "hint": "This is the straight-line rule y = mx + b: 3 × 9 + 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each row holds 3² trail markers. There are 6 rows. How many trail markers in all?",
              "answer": "54",
              "hint": "3² means 3 × 3 = 9. Then × 6.",
              "skill": "Powers and roots"
            },
            {
              "q": "The musher runs a rope from the top of an 8-foot pole to a point 15 feet away on the ground. How long is the rope, in feet?",
              "answer": "17",
              "hint": "Right triangle: a² + b² = c². 8² + 15² = 64 + 225 = 289. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x + 11 = 5x + 26",
              "answer": "5",
              "hint": "Take 5x off both sides to get 3x + 11 = 26, then take 11 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The musher writes the total number of trail markers as 2 × 10^4. Written out in full, what number is that?",
              "answer": "20000",
              "hint": "10^4 is 1 with 4 zeros after it: 10,000. Then × 2.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Count the letters",
          "points": [
            "Some orders ask you to count letters in a word. Write the word out and count on paper.",
            "Then follow the arithmetic exactly."
          ],
          "example": "Y-U-K-O-N is five letters."
        },
        "skill": "Following directions",
        "steps": [
          "Write the name of the river: YUKON.",
          "Count how many letters it has.",
          "Multiply by the number of villages the trail passes on the river: Ruby, Galena, Nulato and Kaltag.",
          "Add the 8 hours of the required Yukon rest.",
          "Type the result, unless the trail runs more than a hundred miles on the river, in which case type LONG instead."
        ],
        "prompt": "Your answer:",
        "answer": "LONG",
        "accept": [
          "long",
          "Long",
          "long."
        ],
        "hint": "YUKON has five letters and the notes name four villages. Step 5 then asks how far the trail runs on the river."
      }
    },
    {
      "id": "iditarod-4",
      "title": "Norton Sound",
      "recon": {
        "lesson": {
          "title": "Choices between two things",
          "points": [
            "When the notes describe a choice, a question will ask why one option is better.",
            "Find the sentence that gives the reason for each side.",
            "A detail question about distance wants the exact miles in the notes."
          ],
          "example": "'The bridge is faster, but it shakes in high wind.' Why do some drivers take the long road? The wind."
        },
        "title": "Trail Notes: Across the Ice",
        "passage": [
          "At Unalakleet the trail reaches the Bering Sea coast. From here to Nome the race runs along the shore of Norton Sound. Norton Sound is a wide bay that freezes solid in winter. The wind on the coast is the worst on the trail. It comes off the sea with nothing to stop it, and mushers have been pinned down for a day in blowing snow so thick they could not see their lead dogs. Every team carries a sleeping bag, an axe, snowshoes, and enough food for the dogs to wait out a storm, and the rules check that they have them at every checkpoint.",
          "The hardest choice comes at Shaktoolik. From there to the village of Koyuk the trail crosses the sea ice of Norton Bay, more than forty miles of frozen ocean with nothing on it, no trees, no hills, no cabins. The trail markers are the only thing that shows which way is land. On a clear night it is the fastest running on the whole trail. In a storm it is a place where mushers turn around and wait in the village, sometimes for a day. A team that loses the markers on the ice can be walking in circles until the dogs give out.",
          "The dogs feel the finish coming. After nine hundred miles a team that has been running steadily starts to pull harder. Mushers say the dogs know the smell of the sea and know it means Nome. From Koyuk the trail hops from village to village along the coast, Elim, Golovin, White Mountain. At White Mountain the team stops for the last required rest. That rest lasts eight hours, and there are seventy-seven miles to go."
        ],
        "questions": [
          {
            "q": "How far is the sea ice crossing from Shaktoolik to Koyuk?",
            "choices": [
              "Over forty miles",
              "About nine hundred miles",
              "Nearly seventy-seven miles",
              "Four hundred miles"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What must every team carry, according to the notes?",
            "choices": [
              "A tent, a radio and a small stove for melting snow on the trail",
              "A sleeping bag, an axe, snowshoes and dog food for a storm",
              "A spare sled and two spare sets of runners for the rough sea ice",
              "A map of the whole coast, a compass and a flare to signal for help"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the last sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does 'pinned down' mean?",
            "choices": [
              "Stuck in one place, unable to move on",
              "Tied to the sled with a rope so as not to fall off",
              "Running so fast that nobody else can catch up",
              "Asleep in the sled bag while the dogs keep going"
            ],
            "answer": 0,
            "hint": "The sentence says mushers were pinned down 'for a day in blowing snow'. What could they do in that?",
            "skill": "Word meanings"
          },
          {
            "q": "Why do mushers sometimes wait in Shaktoolik instead of crossing the ice?",
            "choices": [
              "Because Shaktoolik is the only village on this stretch of coast where a musher can buy more food for the dogs",
              "Because in a storm a team that loses the markers can wander in circles until the dogs give out",
              "Because the sea ice out on Norton Bay is too thin to hold a sled and a team of fourteen running dogs",
              "Because the rules require every team to take its last eight-hour rest before it crosses the sea ice"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How a storm can pin a team down for a whole day out on the coast ice",
              "The gear that the rules make every team carry, and how it gets checked",
              "How the dogs sense the finish, and the last villages before Nome",
              "How Norton Sound freezes over and how far it stretches along the coast"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 3 says 'The dogs feel the finish coming.'",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Ice math",
          "points": [
            "Different bottoms: make them the same first. 1/4 + 1/3 = 3/12 + 4/12 = 7/12.",
            "So many per mile: multiply. 6 posts a mile over 15 miles is 15 × 6 = 90 posts.",
            "Same bottom: 1/6 + 4/6 = 5/6.",
            "Two-step: miles left after the rest, then hours at the team's speed."
          ],
          "example": "30 miles at 10 miles an hour is 30 ÷ 10 = 3 hours."
        },
        "problems": [
          {
            "q": "The team crossed 1/3 of the ice before the storm and 1/2 of it after. How much of the ice crossing is done? (write a fraction)",
            "answer": "5/6",
            "hint": "Make the bottoms the same: 1/3 is 2/6 and 1/2 is 3/6. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "Markers are planted 10 to a mile on the ice. How many markers are there on the 40-mile crossing?",
            "answer": "400",
            "hint": "40 × 10.",
            "skill": "Multiplying"
          },
          {
            "q": "The musher waited 3/10 of a day for the storm and crossed the ice in 4/10 of a day. What fraction of the day is that together? (write a fraction)",
            "answer": "7/10",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "From White Mountain there are 77 miles to Nome. The team runs 7 miles an hour. How many hours of running is that?",
            "answer": "11",
            "hint": "77 ÷ 7.",
            "skill": "Dividing"
          },
          {
            "q": "The race is about 1,000 miles. At White Mountain the team has 77 miles left. How many miles has the team already run?",
            "answer": "923",
            "hint": "1,000 − 77. Think of 1,000 as 999 + 1.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Words doing an unusual job",
            "points": [
              "A word you know can be doing a job you did not expect. 'The town went quiet' is not really about noise.",
              "Read the sentence before it and the sentence after it. The meaning is usually sitting in one of them.",
              "Choose the meaning that keeps the sentence true. Three of the four will make the report say something it never said."
            ],
            "example": "'The wind had teeth.' No mouth, no biting. The picture is that it hurt to stand in, and that is the only part of teeth that carries over."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "On this stretch the weather sets the pace, and the judgment that matters is knowing when to go and when to wait.",
                "Every team carries a sleeping bag, an axe and a pair of snowshoes, and the rules check that they are in the sled at every checkpoint.",
                "The dogs know the smell of the sea, and after nine hundred miles a team that has been running steadily begins to pull with fresh strength.",
                "The crossing to Koyuk is always the slowest part of the trail, because forty-odd miles of bare sea ice can never be run at any speed."
              ],
              "answer": 0,
              "hint": "Required gear, a crossing that can be fast or impossible, villages near the end. Ask what all three paragraphs are really about deciding.",
              "skill": "Central idea and evidence",
              "evidence": "In a storm it is a place where mushers turn around and wait in the village, sometimes for a day."
            },
            {
              "q": "Claim: the race checks that teams are equipped to survive a storm, not only to travel. Which sentence from the report best supports that claim?",
              "choices": [
                "From there to the village of Koyuk the trail crosses the sea ice of Norton Bay, more than forty miles of frozen ocean with nothing on it, no trees, no hills, no cabins.",
                "Every team carries a sleeping bag, an axe, snowshoes, and enough food for the dogs to wait out a storm, and the rules check that they have them at every checkpoint.",
                "In a storm it is a place where mushers turn around and wait in the village, sometimes for a day.",
                "From Koyuk the trail hops from village to village along the coast, Elim, Golovin, White Mountain."
              ],
              "answer": 1,
              "hint": "The claim has two parts: what is carried, and that somebody checks. Find the sentence that contains both.",
              "skill": "Finding details",
              "evidence": "Every team carries a sleeping bag, an axe, snowshoes, and enough food for the dogs to wait out a storm, and the rules check that they have them at every checkpoint."
            },
            {
              "q": "How is the second paragraph built?",
              "choices": [
                "It puts the same crossing in two different conditions, a clear night and a storm, and shows how differently it turns out.",
                "It lists the coastal villages in the order the teams reach them, from Shaktoolik and Koyuk on to White Mountain near the finish.",
                "It explains what causes the wind along the coast, tracing it from the open water of the Bering Sea to the shore where the teams are running.",
                "It gives the history of the trail across Norton Bay, telling how the route between the two villages was first marked and who has run it since."
              ],
              "answer": 0,
              "hint": "Two sentences near the end are built the same way and finish as opposites. That pairing is the shape of the whole paragraph.",
              "skill": "Author's purpose and structure",
              "evidence": "On a clear night it is the fastest running on the whole trail."
            },
            {
              "q": "The report says mushers 'have been pinned down for a day in blowing snow'. What does pinned down mean as it is used here?",
              "choices": [
                "Held flat to the ground by the weight of the snow",
                "Stuck in one place and unable to travel",
                "Fastened to the sled by a safety line at the waist",
                "Given a time penalty by the judges at the checkpoint"
              ],
              "answer": 1,
              "hint": "Read the rest of the sentence: they could not see their lead dogs. What would a day of that do to a team that wanted to keep moving?",
              "skill": "Word meanings",
              "evidence": "It comes off the sea with nothing to stop it, and mushers have been pinned down for a day in blowing snow so thick they could not see their lead dogs."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why waiting in the village at Shaktoolik is a reasonable choice rather than a disaster. Why is it?",
              "choices": [
                "The rules give back the time a team spends waiting for weather, so a musher who sits out a storm loses nothing on the clock.",
                "The crossing to Koyuk can be skipped altogether in bad weather, and a team that waits is sent around the shore to Koyuk instead.",
                "Every team is already carrying what it needs to sit out a storm, so waiting costs time and not much else.",
                "The wind in the village is always weaker than the wind out on the ice, so a team parked between the houses is out of the weather entirely."
              ],
              "answer": 2,
              "hint": "One paragraph tells you what is in every sled and that it gets checked. Another tells you what happens to a team that loses the markers. Hold both before you choose.",
              "skill": "Reading between the lines",
              "evidence": "Every team carries a sleeping bag, an axe, snowshoes, and enough food for the dogs to wait out a storm, and the rules check that they have them at every checkpoint."
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
              "Subtracting: line up the ones, tens and hundreds, and borrow when the top digit is too small.",
              "Fractions with the same bottom: add or take away the tops. A whole is 5/5, so 5/5 − 2/5 = 3/5."
            ],
            "example": "4 × 7 = 28, so 28 miles cut into legs of 7 is 4 legs."
          },
          "problems": [
            {
              "q": "The musher counted 9 miles yesterday and three times as many today. How many miles today?",
              "answer": "27",
              "hint": "Three times 9: 9 + 9 + 9.",
              "skill": "Multiplying"
            },
            {
              "q": "The musher splits a 45-mile stretch into legs of 9 miles each. How many legs is that?",
              "answer": "5",
              "hint": "How many 9s make 45?",
              "skill": "Dividing"
            },
            {
              "q": "The musher starts with 466 headlamp batteries and uses 55. How many are left?",
              "answer": "411",
              "hint": "466 − 55.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "4/8 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "4/8",
              "hint": "The whole job is 8/8. Take 4/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The tally stood at 405 headlamp batteries and 500 more were added. What is the tally now?",
              "answer": "905",
              "hint": "405 + 500.",
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
            "example": "6 + 2 × 7: multiply first, 2 × 7 = 14, then 6 + 14 = 20. Adding first would give 56, which is wrong."
          },
          "problems": [
            {
              "q": "The musher's pot is 4/5 full of warm broth. Each dog gets 1/10 of a pot. How many dogs get broth?",
              "answer": "8",
              "hint": "Write 4/5 with the same bottom as 1/10: 4/5 = 8/10. How many 1/10s is that?",
              "skill": "Fractions"
            },
            {
              "q": "4 of the 40 headlamp batteries are set aside. What percent is that? (write just the number)",
              "answer": "10",
              "accept": [
                "10%"
              ],
              "hint": "4 out of 40, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 2 miles of sea ice there are 3 headlamp batteries. There are 27 headlamp batteries. How many miles of sea ice?",
              "answer": "18",
              "hint": "27 ÷ 3 = 9 groups. Each group has 2 miles of sea ice.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The musher works out 16 + 7 × 7. What is it?",
              "answer": "65",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the thermometer read 3 degrees. By dark it had fallen to −2 degrees. By how many degrees did it fall?",
              "answer": "5",
              "hint": "From 3 down to 0 is 3, then 2 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 42 miles in 6 hours is 42 ÷ 6 = 7 miles an hour.",
              "Percent change: divide the change by the starting number. From 40 to 50 is 10 out of 40, or 25%.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "50 − 4x = 18, so 4x = 32, so x = 8."
          },
          "problems": [
            {
              "q": "One leg needs 3.5 hours. How many hours do 24 legs need?",
              "answer": "84",
              "hint": "24 × 3.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The musher counted 80 headlamp batteries on the first pass and 64 on the second. By what percent did the count change? (write just the number)",
              "answer": "20",
              "accept": [
                "20%",
                "-20",
                "−20",
                "-20%",
                "−20%"
              ],
              "hint": "The change is 16. 16 out of 80, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 7 hours the thermometer fell 28 degrees in all, the same amount each hour. What was the change each hour? (Write a fall as a negative number.)",
              "answer": "-4",
              "accept": [
                "−4"
              ],
              "hint": "Share −28 into 7 equal parts: −28 ÷ 7. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 97 − 7x = 13",
              "answer": "12",
              "hint": "Move 7x to the right and 13 to the left: 7x = 84.",
              "skill": "Equations"
            },
            {
              "q": "A round cooker pot has a radius of 10 inches. Using 3.14 for pi, how many inches is it around the edge?",
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
            "example": "Start with 50 and use 5 each hour. After 6 hours: 50 − 5 × 6 = 20 are left. Here m is −5."
          },
          "problems": [
            {
              "q": "The musher starts with 39 headlamp batteries and uses 3 every hour. How many are left after 9 hours?",
              "answer": "12",
              "hint": "3 × 9 = 27 used, taken off 39.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 16?",
              "answer": "4",
              "hint": "What number times itself makes 16?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope runs from the top of a pole to a point 15 feet away on the ground. How tall is the pole, in feet?",
              "answer": "8",
              "hint": "a² = c² − b² = 289 − 225 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x = 4x + 28",
              "answer": "7",
              "hint": "Take 4x off both sides: 4x = 28. Then divide by 4.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 feet and holds 1,884 cubic feet. Using 3.14 for pi, how many feet deep is it?",
              "answer": "6",
              "hint": "The floor's area is 3.14 × 10 × 10 = 314. Divide the volume by that.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Two numbers, one answer",
          "points": [
            "Some orders make you work out two numbers and then tell you which one counts.",
            "Make both, then read the step that chooses before you type."
          ],
          "example": "'Make 6 × 5. Make 6 × 7. The judge takes the second one.' Type 42, not 30."
        },
        "skill": "Following directions",
        "steps": [
          "The ice crossing from Shaktoolik to Koyuk is more than 40 miles of frozen ocean. Call it 40.",
          "Make your first number: multiply those 40 miles by the 8 hours of the last required rest.",
          "Make your second number: multiply the same 40 miles by the 4 things the trail notes say every team must carry — sleeping bag, axe, snowshoes and food.",
          "The checker at Shaktoolik times the crossing against the rest, not against the gear. Use your total from step 2, not the one from step 3.",
          "Type the number step 4 leaves you."
        ],
        "prompt": "Your answer:",
        "answer": "320",
        "hint": "Both numbers start from the same 40 miles of ice. Step 4 says which one the checker wants, so read it before you look back."
      }
    },
    {
      "id": "iditarod-5",
      "title": "The Burled Arch",
      "recon": {
        "lesson": {
          "title": "A story inside a report",
          "points": [
            "When the notes tell a story from history, the questions want the facts of the story: who, how far, how long.",
            "Dates and numbers are exact. Write them down as you read.",
            "The last paragraph usually says why the story matters now."
          ],
          "example": "'Six riders carried the mail 300 miles in four days.' Three numbers, three possible questions."
        },
        "title": "Trail Notes: The Serum Run",
        "passage": [
          "In January 1925 children in Nome fell dangerously ill with diphtheria, a disease that closes the throat. The only medicine that could stop it was in Anchorage. That was nearly a thousand miles away. The sea was frozen. No ship could reach the town. The two airplanes in Alaska had been taken apart for the winter. So the serum went by train to the end of the railroad at Nenana. From there it went the only way anything moved in an Alaskan winter: by dog team.",
          "Twenty mushers and about a hundred and fifty dogs ran a relay, each team carrying the twenty-pound package of serum to the next team waiting down the trail. They ran through a storm with the temperature at fifty below and winds that flipped sleds. A musher named Leonhard Seppala and his lead dog Togo ran the longest and most dangerous stretch. Their stretch was ninety-one miles long. Part of it crossed the Norton Sound ice at night. Gunnar Kaasen and his leader Balto carried the serum the last fifty-three miles into Nome. The relay covered 674 miles in five and a half days, and the medicine arrived in time.",
          "The Iditarod remembers that run. The race finishes under the Burled Arch on Front Street in Nome, a wooden arch carved from spruce. Every team that reaches it, first or last, gets the same welcome. The fire siren sounds. People come out of their houses at any hour. The dogs are fed before anybody else. The last musher to finish gets a red lantern, which was once hung out for late teams so they could find the town in the dark. It is the trail's way of saying that finishing is the whole job."
        ],
        "questions": [
          {
            "q": "What disease made children in Nome dangerously ill in 1925?",
            "choices": [
              "Whooping cough",
              "Diphtheria",
              "Mumps",
              "Polio"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How far did the serum relay cover, and in how long?",
            "choices": [
              "91 miles in a single night on the sea ice",
              "53 miles in a day and a half of running",
              "1,000 miles in a month of hard traveling",
              "674 miles in five and a half days"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the last sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'relay'?",
            "choices": [
              "One team of dogs running the whole way from Nenana to Nome alone",
              "Teams taking turns, each handing the package to the next",
              "A kind of winter storm that is strong enough to flip a sled over",
              "A kind of race that mushers run to raise money for a sick town"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 2 explains it right after the word.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the serum have to go by dog team?",
            "choices": [
              "Because the people of Nome had asked for Leonhard Seppala and his lead dog Togo",
              "Because the train broke down",
              "Because the medicine would freeze on a train",
              "Because the sea was frozen and the planes were taken apart for winter"
            ],
            "answer": 3,
            "hint": "Paragraph 1, sentences four, five and six.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How Leonhard Seppala and Gunnar Kaasen ran the hardest stretches of the relay",
              "How the race honors the serum run and treats every finisher the same",
              "What the people of Nome do at any hour of the night when the fire siren sounds",
              "How the Burled Arch was carved from a spruce log and raised on Front Street"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 3 says 'The Iditarod remembers that run', and the rest shows how.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Serum run numbers",
          "points": [
            "Sharing with leftovers: 50 ÷ 8 is 6 with 2 left over, so rounding down gives 6.",
            "Area of a rectangle: width × length. A 6-foot by 8-foot mat is 6 × 8 = 48 square feet.",
            "Subtracting the two longest stretches from the total.",
            "Fraction of the teams: divide by the bottom, multiply by the top."
          ],
          "example": "A 400-mile trip has stretches of 120 and 85 miles. 120 + 85 = 205, then 400 − 205 = 195 miles for the rest."
        },
        "problems": [
          {
            "q": "The relay covered 674 miles. Seppala's stretch was 91 miles and Kaasen's was 53. How many miles did the other teams cover together?",
            "answer": "530",
            "hint": "91 + 53 = 144. Then 674 − 144.",
            "skill": "Multi-step problems"
          },
          {
            "q": "There were 20 mushers and about 150 dogs. If the dogs were shared equally, how many dogs did each team have? (round down)",
            "answer": "7",
            "hint": "How many 20s fit into 150? Leave out what is left over.",
            "skill": "Dividing"
          },
          {
            "q": "The serum package weighed 20 pounds. A team carried it 91 miles. If the package had weighed 3 times as much, how many pounds would it be?",
            "answer": "60",
            "hint": "20 × 3.",
            "skill": "Multiplying"
          },
          {
            "q": "3/4 of the 20 teams ran at night. How many teams is that?",
            "answer": "15",
            "hint": "20 ÷ 4 = 5, then 5 × 3.",
            "skill": "Fractions"
          },
          {
            "q": "The Burled Arch is 20 feet wide and stands 12 feet tall. If you painted a rectangle that size on the ground, what would its area be in square feet?",
            "answer": "240",
            "hint": "20 × 12.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "One fact is not enough",
            "points": [
              "The last question is built so that one paragraph cannot answer it. Expect to need two.",
              "Find the fact that surprises you, then hunt in a different paragraph for the fact that explains it.",
              "Check yourself: could you point at two lines, in two places, and show your working? If not, keep looking."
            ],
            "example": "Paragraph one: the store closes at six. Paragraph three: the bus gets in at ten past. Together: anybody relying on that bus is not shopping today. Neither line says so alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "One musher and his lead dog ran ninety-one miles, the longest stretch of the relay, and crossed the Norton Sound ice at night.",
                "The race is built as a memory of the serum run, and its traditions say that getting there at all is what counts.",
                "The last musher to finish is given a red lantern, once hung out so late teams could find the town.",
                "The serum was flown into Nome as soon as the weather cleared."
              ],
              "answer": 1,
              "hint": "Two paragraphs of history, one paragraph of traditions. Ask what the traditions are made of before you pick.",
              "skill": "Central idea and evidence",
              "evidence": "It is the trail's way of saying that finishing is the whole job."
            },
            {
              "q": "Claim: the relay was run in conditions that put the people doing it in real danger. Which sentence from the report best supports that claim?",
              "choices": [
                "Twenty mushers and about a hundred and fifty dogs ran a relay, each team carrying the twenty-pound package of serum to the next team waiting down the trail.",
                "The race finishes under the Burled Arch on Front Street in Nome, a wooden arch carved from spruce.",
                "In January 1925 children in Nome fell dangerously ill with diphtheria, a disease that closes the throat.",
                "They ran through a storm with the temperature at fifty below and winds that flipped sleds."
              ],
              "answer": 3,
              "hint": "Distance and speed are impressive but they are not danger. Find the sentence about the conditions themselves.",
              "skill": "Finding details",
              "evidence": "They ran through a storm with the temperature at fifty below and winds that flipped sleds."
            },
            {
              "q": "Why does the author spend most of the first paragraph on the frozen sea and the dismantled airplanes?",
              "choices": [
                "To explain how the disease spread from one town to another along the coast before anyone in Nome fell ill.",
                "To make it clear that a dog team was not one option among several. It was the only one left.",
                "To compare the winter of 1925 with the winters of today, when a town cut off by ice can be reached in a few hours.",
                "To describe what Nome looked like in January, with snow banked in the streets and the houses shut tight against the cold."
              ],
              "answer": 1,
              "hint": "Ask what the last sentence of the paragraph needs you to already believe. Everything before it is there to make you believe it.",
              "skill": "Author's purpose and structure",
              "evidence": "From there it went the only way anything moved in an Alaskan winter: by dog team."
            },
            {
              "q": "The report says the mushers 'ran a relay'. What does relay mean as it is used here?",
              "choices": [
                "All the teams ran the trail side by side, keeping together the whole way to Nome",
                "The teams raced against each other for a prize",
                "One team ran the same stretch over and over",
                "Each team carried the load part of the way and handed it to the next team"
              ],
              "answer": 3,
              "hint": "The rest of that sentence explains the word. Read past the comma before you decide.",
              "skill": "Word meanings",
              "evidence": "Twenty mushers and about a hundred and fifty dogs ran a relay, each team carrying the twenty-pound package of serum to the next team waiting down the trail."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the last team into Nome is met the same way as the first. What is the connection?",
              "choices": [
                "The last musher has usually traveled farther than the winner has, because a team that falls behind is sent around a longer version of the trail.",
                "The serum arrived only because twenty separate teams each finished their own stretch, so the race honors finishing rather than winning.",
                "The red lantern given to the last team is worth more to a musher than the trophy is, which is why teams near the back are in no hurry to finish.",
                "The winner is not announced until every team is safely in, so the fire siren on Front Street stays quiet until the last sled has come up the street."
              ],
              "answer": 1,
              "hint": "Paragraph two says how many teams it took to move one package. Paragraph three says who gets the welcome. Ask what the second one borrows from the first.",
              "skill": "Reading between the lines",
              "evidence": "Twenty mushers and about a hundred and fifty dogs ran a relay, each team carrying the twenty-pound package of serum to the next team waiting down the trail."
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
              "Fractions with the same bottom: add the tops."
            ],
            "example": "2 rows of 7 is 2 × 7 = 14 seats, and 14 seats shared into 2 rows is 7 in each."
          },
          "problems": [
            {
              "q": "The musher lays the teams out in 3 rows of 4. How many teams is that?",
              "answer": "12",
              "hint": "3 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "12 teams are set out in 3 equal rows. How many teams are in each row?",
              "answer": "4",
              "hint": "12 split into 3 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 474 miles, then 133 more are added and 26 are taken off. What does the log show now?",
              "answer": "581",
              "hint": "Add 474 and 133 first, then take 26 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 1/4 + 1/4 (write a fraction)",
              "answer": "2/4",
              "hint": "Same bottom. 1 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 9 feet wide and 2 feet long. How many feet is it all the way around the edge?",
              "answer": "22",
              "hint": "Two sides of 9 and two sides of 2: 9 + 9 + 2 + 2.",
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
            "example": "(4 + 6) × 3: parentheses first, 4 + 6 = 10, then 10 × 3 = 30."
          },
          "problems": [
            {
              "q": "The plan allows 60 hours. The musher uses 7.15 hours on the first leg and 6.35 on the second. How many hours are left?",
              "answer": "46.5",
              "hint": "Add the two amounts used first, then take that from 60. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "25% of the miles counted is 50. How many were counted in all?",
              "answer": "200",
              "hint": "50 is 25 hundredths of the whole: 50 ÷ 25 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The musher counts 27 teams and 36 miles. In its simplest form, what is the ratio of teams to miles? (write it like 2:3)",
              "answer": "3:4",
              "accept": [
                "3 to 4"
              ],
              "hint": "Divide both by 9.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The musher works out (8 + 5) × 8. What is it?",
              "answer": "104",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "It was −12 degrees at midnight and rose 10 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "-2",
              "accept": [
                "−2"
              ],
              "hint": "Start at −12 and count 10 steps up.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 54 miles in 6 hours is 54 ÷ 6 = 9 miles an hour.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the steps in reverse. For 3x + 7, take off the 7 first; for 3(x + 7), divide by 3 first."
            ],
            "example": "(x + 9) × 3 = 48: divide both sides by 3 first, x + 9 = 16, so x = 7."
          },
          "problems": [
            {
              "q": "The musher has 28 hours and each leg takes 3.5 hours. How many legs is that enough for?",
              "answer": "8",
              "hint": "28 ÷ 3.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The day's distance rose by 20% to 96 miles. What was it before?",
              "answer": "80",
              "hint": "96 is 120% of the old distance.",
              "skill": "Ratios and percent"
            },
            {
              "q": "It was 22 degrees, then it fell 30 degrees. What does the thermometer read?",
              "answer": "-8",
              "accept": [
                "−8"
              ],
              "hint": "Fall 22 to reach 0, then keep falling: the rest of the 30 degrees takes it below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 6) × 2 = 22",
              "answer": "5",
              "hint": "Divide both sides by 2 first, then take 6 off.",
              "skill": "Equations"
            },
            {
              "q": "A display model of a dog bootie is built at 1 to 2. The bootie on the model is 4 inches long. How many inches long is the real one?",
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
            "example": "For y = 6x + 5, when x = 2: y = 6 × 2 + 5 = 17."
          },
          "problems": [
            {
              "q": "The miles the team has covered follow the rule y = 8x + 10, where x is the hours since the checkpoint. What is y when x = 3?",
              "answer": "34",
              "hint": "Put 3 in for x: 8 × 3 + 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 8² + 3²?",
              "answer": "73",
              "hint": "8 × 8 = 64 and 3 × 3 = 9. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 15-foot rope reaches the top of a 9-foot pole. How far is the foot of the rope from the base, in feet?",
              "answer": "12",
              "hint": "b² = c² − a² = 225 − 81 = 144. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x + 25 − 4x = 45",
              "answer": "4",
              "hint": "Collect the x's first: 5x + 25 = 45.",
              "skill": "Equations"
            },
            {
              "q": "What is 9 × 10^3 ÷ 10^2?",
              "answer": "90",
              "hint": "Dividing subtracts the powers: 10^3 ÷ 10^2 = 10^1. So 9 × 10.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "The last step, again",
          "points": [
            "Read to the end. Then start.",
            "The trap in the last step is the whole test."
          ],
          "example": "Step 5 could throw away steps 1 to 4. Read it first."
        },
        "skill": "Following directions",
        "steps": [
          "Twenty mushers ran the serum relay. Write 20.",
          "Multiply by the days the relay took, rounded down: 5.",
          "Add the 20 pounds the package of serum weighed.",
          "Step 3 goes the wrong way. Return to your total from step 2 and take those 20 pounds off it instead of adding them.",
          "Type what you end with."
        ],
        "prompt": "Your answer:",
        "answer": "80",
        "hint": "Step 4 hands you back the total you had at the end of step 2 and turns the twenty pounds around."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
