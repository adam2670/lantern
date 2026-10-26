// ODYSSEY — campaign "dig". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "dig",
  "ready": true,
  "kind": "build",
  "readingLevel": {
    "fk": 5.6,
    "cl": 5.7
  },
  "grade": "5",
  "kindLabel": "Build",
  "form": "trowel",
  "title": "Dinosaur Dig",
  "subtitle": "The North Slope, Alaska",
  "pitch": "Five days digging dinosaur bones out of a frozen river bluff at the top of the world, and putting a skeleton together one part at a time. Skull, spine, ribs, legs, tail. The skeleton is the progress bar.",
  "scene": "assets/scene-dig.jpg",
  "buildArt": "skeleton",
  "progress": {
    "unit": "parts",
    "total": 5
  },
  "dayNoun": "Day",
  "stageNoun": "Part",
  "finalNoun": "Standing",
  "stages": [
    "Skull",
    "Spine",
    "Ribs",
    "Legs",
    "Tail"
  ],
  "reconNoun": "Field Notes",
  "legs": {
    "recon": "Field notes",
    "nav": "Dig math",
    "orders": "Lab orders",
    "debrief": "Tent"
  },
  "rules": [
    "Stuck on a bone? <b>Flag it</b> and move on. Pending bones come back in the tent.",
    "Field notes: read the questions <b>before</b> the sheet.",
    "Lab orders: read <b>every</b> step before you glue anything."
  ],
  "fact": "Dinosaurs lived at the top of Alaska seventy million years ago, in forests that went dark for months every winter. They are among the few dinosaurs known to have lived through polar night.",
  "finale": {
    "prompt": "The skeleton is standing. Which color goes on the label card under it?",
    "options": [
      {
        "label": "Bone white",
        "color": "#F4F8FF"
      },
      {
        "label": "Amber",
        "color": "#FFB454"
      },
      {
        "label": "Slate blue",
        "color": "#4FD1FF"
      },
      {
        "label": "Moss green",
        "color": "#4FD18B"
      }
    ],
    "done": "Print it. Then write the date it stood up. That is the day it stops being a pile of rocks."
  },
  "patrols": [
    {
      "id": "dig-1",
      "title": "The Skull",
      "recon": {
        "lesson": {
          "title": "Questions first, then the notes",
          "points": [
            "Read the five questions before the notes. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Big numbers of years are details. Read them exactly.",
            "The answer is always in the notes. You never have to guess."
          ],
          "example": "Question: 'How long was the dinosaur?' Hunt for 'feet' and a number."
        },
        "title": "Field Notes: A Bluff Above the Colville",
        "passage": [
          "The dig is a bluff of gray mud and sandstone on the bank of the Colville River, more than two hundred miles north of the Arctic Circle. Up here the ground is frozen most of the year. The sun does not set from May to late July. The bones in the bluff are about seventy million years old. Every summer the river cuts a little more of the bluff away and drops bones onto the gravel bar below it. The crew walks that bar every morning before they dig, because the river has already done half the work.",
          "The bones belong mostly to a duck-billed dinosaur about thirty feet long, a plant-eater with hundreds of teeth packed behind a broad flat beak. It lived here in herds when this ground was a warm forest at the edge of a sea. The surprise is not that dinosaurs lived in Alaska. It is that they lived here through the winter, when the forest went dark for months and the temperature dropped near freezing. Nobody thought dinosaurs could do that until these bones came out of this bluff.",
          "The crew found the skull on the second day. A skull is the prize of any dig. The skull tells you what the animal was. Most of them are crushed flat or missing, and this one is neither. It comes out the way every bone comes out. The dirt is brushed away a few grains at a time. Then the bone that shows is painted with glue that soaks in and hardens it. Then the whole block, bone and rock together, is wrapped in strips of burlap dipped in plaster, like a cast on a broken arm, and left to set. The crew calls that a jacket. The skull's jacket weighs two hundred pounds and takes four people to lift."
        ],
        "questions": [
          {
            "q": "About how old are the bones?",
            "choices": [
              "Seventy million years",
              "About seven hundred thousand years",
              "Seventy thousand years, since the last ice age",
              "A million years"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the fourth sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What was surprising about these dinosaurs?",
            "choices": [
              "That whole herds of them lived here when the ground was a warm forest",
              "That they lived through the dark, cold Alaskan winter",
              "That a plant-eater could carry hundreds of teeth behind a broad flat beak",
              "That the river cuts new bones out of the bluff every single summer"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentences about the surprise.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is a 'jacket'?",
            "choices": [
              "The glue painted onto exposed bone to harden it",
              "A wrapping of plaster and burlap around a bone and its rock",
              "The strips of burlap before they go into plaster",
              "The block of rock left standing under a bone before it is lifted"
            ],
            "answer": 1,
            "hint": "The sentences about burlap and plaster, ending 'The crew calls that a jacket.'",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the crew walk the gravel bar every morning before digging?",
            "choices": [
              "Because the gravel bar freezes solid later in the day",
              "Because the river has already cut bones out of the bluff and dropped them there",
              "Because the gravel bar is the flattest way down to the bluff",
              "Because the sun does not set in summer and the gravel bar is easiest to search early"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the river cuts the bluff and drops bones onto the gravel bar",
              "The duck-billed dinosaur's herds and the warm forest at the edge of a sea",
              "How much the skull's jacket weighs",
              "The skull and how a bone is taken out of the ground"
            ],
            "answer": 3,
            "hint": "Paragraph 3 starts with finding the skull and then describes the whole process of removing it.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Dig math",
          "points": [
            "Pounds per person: jacket weight ÷ people.",
            "Millions: a million has six zeros, so 5 million is 5,000,000.",
            "Factors: the numbers that divide evenly. 12 makes equal rows of 2, 3, 4 or 6.",
            "Same bottom: add the tops. 1/3 + 1/3 = 2/3."
          ],
          "example": "120 pounds ÷ 3 people = 40 pounds each."
        },
        "problems": [
          {
            "q": "The skull's jacket weighs 200 pounds and 4 people lift it. How many pounds does each carry?",
            "answer": "50",
            "hint": "200 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "Write seventy million as a number.",
            "answer": "70000000",
            "accept": [
              "70,000,000"
            ],
            "hint": "A million has six zeros. 70 followed by six zeros.",
            "skill": "Multiplying"
          },
          {
            "q": "The crew lays out 36 bone tags in equal rows, with at least 2 rows and at least 2 tags in each row. How many different numbers of tags could go in each row?",
            "answer": "7",
            "hint": "List the numbers that divide 36 evenly. Leave out 1 and 36.",
            "skill": "Multiplying"
          },
          {
            "q": "The dinosaur was 30 feet long. A foot is 12 inches. How many inches long was it?",
            "answer": "360",
            "hint": "30 × 12.",
            "skill": "Multiplying"
          },
          {
            "q": "The crew brushed 2/5 of the skull clean on Monday and 2/5 on Tuesday. What fraction is clean? (write a fraction)",
            "answer": "4/5",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What holds all three together",
            "points": [
              "The central idea is not sitting in any one sentence. Give each paragraph a four-word label and find what all three labels serve.",
              "The wrong answers are usually true. They cover one paragraph, or they are wider than anything the report says, or they go against a line you have already read.",
              "Four more moves follow: prove a claim with one sentence, say what a paragraph is for, work a word out from its sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about an old orchard: who planted it, what happened to the farm, what grows there now. 'The farm was sold in 1974' covers one paragraph. 'Apples are healthy' covers nothing. 'A planting nobody has tended for fifty years still feeds the valley' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "This bluff is worth a summer of work because the river keeps opening it up and handing over an animal nobody believed could survive a dark polar winter.",
                "The skull's jacket weighs two hundred pounds and takes four people to lift it off the gravel bar, which is why every bone here is wrapped in plaster before it moves.",
                "Alaska holds more fossils than any other part of the country, and ground that stays frozen most of the year keeps them in better shape than warmer ground does.",
                "Dinosaur skulls are always found crushed flat or missing pieces."
              ],
              "answer": 0,
              "hint": "The place, the surprise, the skull. Ask which choice covers all three, then check the others: one is a weight, one is a claim the report never makes, and one is denied in the last paragraph.",
              "skill": "Central idea and evidence",
              "evidence": "Nobody thought dinosaurs could do that until these bones came out of this bluff."
            },
            {
              "q": "Claim: the river does part of the crew's searching for them. Which sentence from the report best supports that claim?",
              "choices": [
                "The bones belong mostly to a duck-billed dinosaur about thirty feet long, a plant-eater with hundreds of teeth packed behind a broad flat beak.",
                "The crew walks that bar every morning before they dig, because the river has already done half the work.",
                "Then the whole block, bone and rock together, is wrapped in strips of burlap dipped in plaster, like a cast on a broken arm, and left to set.",
                "The dig is a bluff of gray mud and sandstone on the bank of the Colville River, more than two hundred miles north of the Arctic Circle."
              ],
              "answer": 1,
              "hint": "All four are true, but only one says what the river does and what the crew does about it. Look for that one.",
              "skill": "Finding details",
              "evidence": "The crew walks that bar every morning before they dig, because the river has already done half the work."
            },
            {
              "q": "The second paragraph says what the surprise is not before it says what the surprise is. Why write it that way?",
              "choices": [
                "It shows that the crew was disappointed by what they found in the bluff, having hoped for an animal nobody had dug up before.",
                "It clears away the thing a reader would guess first, so the real finding lands on its own.",
                "It lists the other places where duck-billed dinosaurs have been dug up.",
                "It explains how a plant-eater uses hundreds of teeth at once."
              ],
              "answer": 1,
              "hint": "Delete the sentence that begins 'The surprise is not'. What would a reader now be likely to think the point was? That is what the sentence was heading off.",
              "skill": "Author's purpose and structure",
              "evidence": "The surprise is not that dinosaurs lived in Alaska."
            },
            {
              "q": "The crew calls the plaster and burlap wrapping a 'jacket'. What does that name tell you about it?",
              "choices": [
                "It is a heavy coat the crew wears out on the gravel bar, zipped up against the cold coming off the river.",
                "It is a hard covering put around the bone to hold it together while it travels.",
                "It is the layer of glue that soaks into the surface of the bone.",
                "It is the block of rock the bone was buried in."
              ],
              "answer": 1,
              "hint": "The sentence just before the name compares the whole thing to something on a broken arm. Let that comparison do the work for you.",
              "skill": "Word meanings",
              "evidence": "the whole block, bone and rock together, is wrapped in strips of burlap dipped in plaster, like a cast on a broken arm, and left to set"
            },
            {
              "q": "Paragraphs 1 and 2 together explain why living here through the winter is the surprising part. What made winter so hard?",
              "choices": [
                "The bones lie in mud and sandstone, the kind of rock that forms under water, so the herds must have spent each winter out in the sea instead of in the forest.",
                "Seventy million years ago this ground was frozen most of the year, just as it is now, so a plant-eater would have found nothing green to eat once the short summer ended.",
                "The river flooded the forest every winter and drove the herds away.",
                "This far north the forest went dark for months every winter and the temperature dropped near freezing, though it was warm forest the rest of the year."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you how far north this place is and what the sun does there in summer. Paragraph two tells you what happened to the forest in winter. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "It is that they lived here through the winter, when the forest went dark for months and the temperature dropped near freezing."
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
              "q": "Each of 6 bluffs has 7 bones sticking out. How many bones is that?",
              "answer": "42",
              "hint": "6 groups of 7, so 6 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "The crew splits 84 bones in half. How many bones is one half?",
              "answer": "42",
              "hint": "Half of 84.",
              "skill": "Dividing"
            },
            {
              "q": "The crew needs 600 buckets of dirt and has 234. How many more are needed?",
              "answer": "366",
              "hint": "600 − 234.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the crew has finished 6 of them. What fraction is done? (write a fraction)",
              "answer": "6/8",
              "hint": "6 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 9 squares wide and 5 squares long. The crew has covered 9 squares. How many squares are left to cover?",
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
              "Decimal × decimal: multiply without the points, then count the decimal places in both numbers. 1.3 × 2.1: 13 × 21 = 273, two places, so 2.73.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "Brushing a regular bone takes 2.5 hours. A big one takes 1.6 times as long. How many hours does the big one take?",
              "answer": "4",
              "hint": "Multiply 25 × 16 without the points, then put back 2 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "Of 200 buckets of dirt, 50% are struck off the list. How many are left on it?",
              "answer": "100",
              "hint": "50% of 200 is 100. Take that off 200.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew shares 24 brushes between two teams in the ratio 1 to 3. How many does the smaller share get?",
              "answer": "6",
              "hint": "1 + 3 = 4 parts. 24 ÷ 4 = 6 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out 6 × 10 − 5 × 3. What is it?",
              "answer": "45",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "In one winter week the coldest reading was −11 degrees and the warmest was −9 degrees. How many degrees apart are they?",
              "answer": "2",
              "hint": "From −11 up to −9.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "Find the rate for one first: 3 jobs in 7.5 hours is 7.5 ÷ 3 = 2.5 hours each, so 7 jobs take 17.5 hours.",
              "Percent of a number: turn the percent into a fraction of 100, then multiply.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "5(x + 2) = 45, so x + 2 = 9, so x = 7."
          },
          "problems": [
            {
              "q": "24 bones took 36 hours. At the same rate, how many hours would 32 bones take?",
              "answer": "48",
              "hint": "One bone takes 36 ÷ 24 = 1.5. Then × 32.",
              "skill": "Ratios and percent"
            },
            {
              "q": "20% of the 40 buckets of dirt were lost. How many buckets of dirt was that?",
              "answer": "8",
              "hint": "20% of 40: 20/100 × 40.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter day the low was −12 degrees and the high was 7 degrees. How many degrees apart are they?",
              "answer": "19",
              "hint": "12 below zero plus 7 above zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 4(x + 29) = 160",
              "answer": "11",
              "hint": "Divide both sides by 4 to get x + 29 = 40.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 7 inches stand for 28 feet. How many feet does 1 inch stand for?",
              "answer": "4",
              "hint": "28 ÷ 7.",
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
              "Collect the x's first: 10x − 7x is 3x, and an x on its own means 1x."
            ],
            "example": "5, 11, 17, … adds 6 each step. The 6th number is 5 steps on: 5 + 5 × 6 = 35."
          },
          "problems": [
            {
              "q": "The count of buckets of dirt goes 24, 28, 32, 36, and on. What is the 10th number in the list?",
              "answer": "60",
              "hint": "It starts at 24 and adds 4 each step. The number you want is 9 steps on from 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (6 × 6)²?",
              "answer": "1296",
              "hint": "6 × 6 = 36 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 5 and 12 feet. How long is its longest side, in feet?",
              "answer": "13",
              "hint": "5² + 12² = 169. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x − x = 20",
              "answer": "5",
              "hint": "x is the same as 1x, so 5 − 1 = 4, so 4x = 20.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 10 × 10^3 or 9 × 10^4? Write the bigger one out in full.",
              "answer": "90000",
              "hint": "10 × 10^3 is the same as 1 × 10^4. Now both use 10^4, so compare 1 with 9.",
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
          "example": "If the last step says 'write it as a word', 7 becomes SEVEN."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of people it takes to lift the skull's jacket: 4.",
          "Multiply by the weight of that jacket in pounds: 200.",
          "Divide by 100.",
          "Add the hundreds of miles the dig lies north of the Arctic Circle: 2.",
          "Do not type digits. Write your answer as a word, in capital letters. (12 would be TWELVE.)"
        ],
        "prompt": "Your answer:",
        "answer": "TEN",
        "accept": [
          "ten",
          "Ten",
          "ten.",
          "TEN.",
          "Ten."
        ],
        "hint": "Step 5 asks for letters, not digits. Work steps 1 to 4 through first, then spell the number you land on."
      }
    },
    {
      "id": "dig-2",
      "title": "The Spine",
      "recon": {
        "lesson": {
          "title": "Counting in the notes",
          "points": [
            "When the notes count something, the count is a detail. Write it down.",
            "A word for a body part is defined by where it is and what it does.",
            "'How do they know' questions want the evidence in the notes."
          ],
          "example": "'About twenty jackets, each one labeled.' How many? About twenty."
        },
        "title": "Field Notes: A Hundred Bones in a Row",
        "passage": [
          "A backbone is not one bone. It is a chain of many, called vertebrae, each one a stubby spool of bone with a hole through the middle for the nerve cord. The duck-billed dinosaur had about a hundred of them from the back of the skull to the tip of the tail. They lie in the bluff in a line, most of them still touching, because this animal was buried quickly by a river flood before its body could fall apart. That is why the crew is here. A skeleton in one piece is rare. A skeleton in one piece in the Arctic is rarer.",
          "Each vertebra is numbered as it comes out, with a marker on the jacket and a line in the notebook. That is because a bone without a number is a bone that will never go back in the right place. The crew works down the spine from the neck. The vertebrae change shape as they go. They are small and round in the neck, tall in the back where the ribs attach, long and flat in the tail. A crew member who knows the animal can pick up a single vertebra and say where in the spine it belongs, the way a mechanic can name a part by its shape.",
          "Between some of the bones the crew finds thin, dark threads of stone. Those are tendons, the cords that once held the tail stiff and straight out behind the animal as it walked. They turned to bone while the dinosaur was alive. That is why they fossilized. Their pattern tells the crew the tail did not drag on the ground. Twenty-four vertebrae come out today, each one jacketed, numbered and stacked in the tent. The crew leader writes the last number in the notebook and underlines it: thirty-eight."
        ],
        "questions": [
          {
            "q": "About how many vertebrae did the dinosaur have?",
            "choices": [
              "Six",
              "About a hundred",
              "Sixteen",
              "Close to six hundred"
            ],
            "answer": 1,
            "hint": "The third sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "Why is every vertebra numbered?",
            "choices": [
              "Because a museum will not accept a skeleton that has the wrong number of bones",
              "Because the crew works down the spine from the neck and has to know where it stopped",
              "Because a bone without a number can never be put back in the right place",
              "So that a crew member can pick up a single bone and say where in the spine it belongs"
            ],
            "answer": 2,
            "hint": "The first two sentences of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what are 'tendons'?",
            "choices": [
              "Small bones in the neck",
              "Threads the crew uses to tie jackets",
              "Nerve cords that run inside the spine",
              "Cords that held the tail stiff and straight"
            ],
            "answer": 3,
            "hint": "The second sentence of paragraph 3.",
            "skill": "Word meanings"
          },
          {
            "q": "How does the crew know the skeleton was buried quickly?",
            "choices": [
              "Because the vertebrae still lie in a line, most of them touching",
              "Because a skeleton in one piece is rare in the Arctic",
              "Because the river is fast",
              "Because the tail tendons had turned into stone"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence with 'still touching'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How the tendons turned to bone and what their pattern says about the animal's tail",
              "Why a skeleton found in one piece in the Arctic is rarer than one found anywhere else",
              "The twenty-four vertebrae that came out today, jacketed, numbered and stacked in the tent",
              "How the vertebrae are numbered and how their shapes change along the spine"
            ],
            "answer": 3,
            "hint": "Paragraph 2 explains numbering and then the changing shapes.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Spine math",
          "points": [
            "Vertebrae left: total minus those out.",
            "Vertebrae an hour: today's count ÷ the hours worked.",
            "Fraction of the spine out: out over total.",
            "Two-step: bones out over two days."
          ],
          "example": "90 − 35 = 55 still in the bluff."
        },
        "problems": [
          {
            "q": "The spine has 100 vertebrae and 38 are out. How many are still in the bluff?",
            "answer": "62",
            "hint": "100 − 38.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "24 vertebrae came out today in 8 hours of work. How many an hour is that?",
            "answer": "3",
            "hint": "24 ÷ 8.",
            "skill": "Dividing"
          },
          {
            "q": "38 out of 100 vertebrae are out. Write that as a fraction with 100 on the bottom.",
            "answer": "38/100",
            "accept": [
              "19/50"
            ],
            "hint": "Out over total: 38 over 100.",
            "skill": "Fractions"
          },
          {
            "q": "Each vertebra jacket weighs 15 pounds. How much do today's 24 jackets weigh together?",
            "answer": "360",
            "hint": "15 × 24: 15 × 20 = 300, 15 × 4 = 60.",
            "skill": "Multiplying"
          },
          {
            "q": "Yesterday 14 vertebrae came out and today 24. How many over the two days?",
            "answer": "38",
            "hint": "14 + 24.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Which line would stop the argument",
            "points": [
              "Say the claim, then read your pick straight after it. If someone could still shrug, the sentence has not done its job.",
              "Sharing words with the claim is not proof. Watch for the choice that echoes the claim without ever backing it up.",
              "Every choice is a real sentence from the report, so true is not enough, and on this question it never will be."
            ],
            "example": "Claim: the cabin has stood empty for years. 'The cabin has a tin roof' is true and proves nothing. 'A birch is growing up through the porch boards' settles it."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "A vertebra is a stubby spool of bone with a hole through the middle for the nerve cord, and this animal had about a hundred of them from skull to tail.",
                "This skeleton is rare because it stayed in order in the ground, and everything the crew does is aimed at keeping that order.",
                "The tail tendons turned to bone while the animal was alive, which is why they lasted long enough to fossilize.",
                "A vertebra can be put back in the right place even if nobody wrote a number on it."
              ],
              "answer": 1,
              "hint": "Why the bones are still in a line, why every one gets a number, what the tendons prove. Ask what all three of those are protecting.",
              "skill": "Central idea and evidence",
              "evidence": "That is because a bone without a number is a bone that will never go back in the right place."
            },
            {
              "q": "Claim: this animal was covered over very quickly after it died. Which sentence from the report best supports that claim?",
              "choices": [
                "It is a chain of many, called vertebrae, each one a stubby spool of bone with a hole through the middle for the nerve cord.",
                "They are small and round in the neck, tall in the back where the ribs attach, long and flat in the tail.",
                "They lie in the bluff in a line, most of them still touching, because this animal was buried quickly by a river flood before its body could fall apart.",
                "Those are tendons, the cords that once held the tail stiff and straight out behind the animal as it walked."
              ],
              "answer": 2,
              "hint": "The claim is about speed. Find the sentence that says what the bones look like in the ground and gives the reason they look that way.",
              "skill": "Finding details",
              "evidence": "They lie in the bluff in a line, most of them still touching, because this animal was buried quickly by a river flood before its body could fall apart."
            },
            {
              "q": "Why does the second paragraph compare a crew member with a mechanic?",
              "choices": [
                "To explain how the crew repairs its equipment out at camp.",
                "To show that fossil work is simpler than working on engines.",
                "To list the tools used for lifting a vertebra out of the rock.",
                "To show that the shape of a vertebra is a kind of label anyone with enough practice can read."
              ],
              "answer": 3,
              "hint": "The comparison comes right after a sentence about shapes changing down the spine. Ask what the mechanic makes easier to believe.",
              "skill": "Author's purpose and structure",
              "evidence": "A crew member who knows the animal can pick up a single vertebra and say where in the spine it belongs, the way a mechanic can name a part by its shape."
            },
            {
              "q": "The report calls each vertebra 'a stubby spool of bone'. What does spool tell you about its shape?",
              "choices": [
                "Short and round, with a hole running through the middle",
                "Flat and wide, like a plate",
                "Long and thin, like a length of rope",
                "Sharp and pointed at both ends"
              ],
              "answer": 0,
              "hint": "The rest of the same sentence describes the hole. Picture the thing thread is wound onto and match it against what the sentence has already told you.",
              "skill": "Word meanings",
              "evidence": "It is a chain of many, called vertebrae, each one a stubby spool of bone with a hole through the middle for the nerve cord."
            },
            {
              "q": "Paragraphs 1 and 3 together let you work out what the underlined thirty-eight in the notebook means. What does it tell you?",
              "choices": [
                "Thirty-eight is the total number of vertebrae this animal had, counted from the back of the skull to the tip of the tail.",
                "Thirty-eight is the number of vertebrae still left in the ground, waiting to be dug out of the bluff over the next few days.",
                "Thirty-eight is the number of days the crew has spent at the bluff, one line in the notebook for every single day of digging.",
                "Thirty-eight of the animal's roughly a hundred vertebrae are now out, so the crew is not yet halfway down the spine."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you how many vertebrae the animal had altogether. The last line tells you the number the crew reached tonight. Set one against the other.",
              "skill": "Reading between the lines",
              "evidence": "The crew leader writes the last number in the notebook and underlines it: thirty-eight."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 2 × 7 means 2 groups of 7.",
              "Sharing equally is dividing.",
              "Taking away big numbers: line up the ones, tens and hundreds, and regroup when the top digit is too small.",
              "Fractions with the same bottom: the bigger top is the bigger fraction. 2/3 is bigger than 1/3."
            ],
            "example": "2 × 7 = 14, so 14 shared into 2 equal groups is 7 each."
          },
          "problems": [
            {
              "q": "The crew carries 3 vertebrae on each of 5 trips. How many vertebrae is that?",
              "answer": "15",
              "hint": "5 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "Every row takes 8 vertebrae. The crew has 24 vertebrae. How many rows can be filled?",
              "answer": "3",
              "hint": "How many 8s fit into 24?",
              "skill": "Dividing"
            },
            {
              "q": "The crew counted 203 jackets in the morning and 353 in the evening. How many more in the evening?",
              "answer": "150",
              "hint": "353 − 203.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 3/4 or 1/4? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "The target is 600 jackets and 239 are logged. How many short is that?",
              "answer": "361",
              "hint": "600 − 239.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Mixed number ÷ fraction: make it improper first. 2 1/2 ÷ 5/6 = 5/2 × 6/5 = 30/10 = 3.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The crew has 3 1/3 hours of daylight left. Brushing each bone clean takes 5/6 of an hour. How many bones can the crew finish?",
              "answer": "4",
              "hint": "Make 3 1/3 an improper fraction, 10/3. Then multiply by the flip of 5/6: 10/3 × 6/5.",
              "skill": "Fractions"
            },
            {
              "q": "Out of every 100 jackets, 75 are set aside. Out of 120 jackets, how many is that?",
              "answer": "90",
              "hint": "120 is 1.2 hundreds, so 1.2 × 75.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew divides 36 minutes of work in the ratio 4 to 5. How many minutes is the larger share?",
              "answer": "20",
              "hint": "9 parts in all, so one part is 4 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out (11 − 3) × (7 + 12). What is it?",
              "answer": "152",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three winter readings came in: −21, −15 and 6 degrees. Which is the coldest?",
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
              "How many in all, then take off the ones done: 9 hours at 1.5 hours a job is 6 jobs, so with 2 done, 4 are left.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the taking away first, then undo the dividing by multiplying."
            ],
            "example": "x ÷ 7 − 11 = 2, so x ÷ 7 = 13, so x = 91."
          },
          "problems": [
            {
              "q": "The job needs 56 hours in all, at 3.5 hours for each bone. One bone is already done. How many bones are left?",
              "answer": "15",
              "hint": "56 ÷ 3.5 = 16 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of jackets may change by no more than 25%. Starting from 80, what is the highest count the rule allows?",
              "answer": "100",
              "hint": "25% of 80 is 20. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer falls 3 degrees every hour for 15 hours. What is the total change? (Write a fall as a negative number.)",
              "answer": "-45",
              "accept": [
                "−45"
              ],
              "hint": "15 hours of −3 each: 15 × (−3). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 9 − 6 = 2",
              "answer": "72",
              "hint": "Add 6 to both sides, then multiply by 9.",
              "skill": "Equations"
            },
            {
              "q": "A round wheel measures 31.4 centimeters around the edge. Using 3.14 for pi, how many centimeters is it across?",
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
              "Slope is the rise over the run: how much y goes up, divided by how much x goes across.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Through (0, 6) and (4, 34): y rises 28 while x runs 4, so the slope is 28 ÷ 4 = 7."
          },
          "problems": [
            {
              "q": "A line passes through (0, 12) and (5, 57). What is its slope?",
              "answer": "9",
              "hint": "Slope is the rise over the run: 45 ÷ 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 196 square feet. How many feet is it around the edge?",
              "answer": "56",
              "hint": "One side is the square root of 196, then four sides.",
              "skill": "Powers and roots"
            },
            {
              "q": "The crew goes 7 feet east and then 24 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "25",
              "hint": "The two legs make a right angle: 7² + 24² = 625.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 6x + 20 and 3x + 26 come to the same number?",
              "answer": "2",
              "hint": "Set them equal, take 3x off both sides, then take 20 off.",
              "skill": "Equations"
            },
            {
              "q": "Two round tanks each have a radius of 10 feet and are 3 feet deep. Using 3.14 for pi, what is their total volume in cubic feet?",
              "answer": "1884",
              "hint": "One tank is 3.14 × 10 × 10 × 3 = 942. Then double it.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Two numbers, type one",
          "points": [
            "Some orders build two numbers, one after the other. Label each as you go: step 2, step 4.",
            "The last step says which one to type. Read it before you type anything."
          ],
          "example": "Step 2 comes to 40 and step 4 comes to 55. 'Type the smaller one' means 40."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of vertebrae in the whole backbone: 100.",
          "Take away the vertebrae that came out of the bluff today: 24.",
          "Now build a second number. Write the last number in the crew leader's notebook: 38.",
          "Add today's vertebrae to that: 24.",
          "You have two numbers, one from step 2 and one from step 4. Type the smaller one."
        ],
        "prompt": "Your answer:",
        "answer": "62",
        "hint": "Step 5 does not want the number you worked out last. Set the step 2 number beside the step 4 number and compare them."
      }
    },
    {
      "id": "dig-3",
      "title": "The Ribs",
      "recon": {
        "lesson": {
          "title": "Left and right",
          "points": [
            "When the notes talk about pairs, a question may ask for the total or for one side.",
            "Weather in the notes is a detail: temperature, wind, light.",
            "'Why' about the crew's hours wants the reason in the notes."
          ],
          "example": "'Six pairs of boots by the door.' How many boots? Twelve. How many pairs? Six."
        },
        "title": "Field Notes: Midnight Sun",
        "passage": [
          "The crew works until midnight because it can. The sun circles the sky without setting, dipping toward the northern horizon around midnight and climbing again. The bluff is lit all night by a low gold light that throws long shadows into every crack and makes bone stand out from rock. Digging by that light is easier than digging at noon. The crew sleeps from two until eight with eye masks on, in tents that never get dark, and nobody minds.",
          "The ribs come out today, in pairs, one from each side of the spine. The duck-billed dinosaur had about eighteen pairs, curving down from the back vertebrae to make a chest the size of a small car. Most of them here are broken into two or three pieces that will be glued together in the lab. A rib is thin and long and easy to snap. So each one gets a splint of wood taped along it before the jacket goes on, the way a broken arm gets a splint before a cast.",
          "The wind is the enemy today. It comes down the river at thirty miles an hour and dries the exposed rock so fast that it cracks, and a cracked rock takes the bone with it. The crew keeps every open bone under a wet cloth and works one at a time. By midnight thirty ribs are jacketed, and the other six will wait for a calmer day. The crew leader counts them twice. Thirty. A skeleton with the wrong number of ribs is a skeleton that a museum will send back."
        ],
        "questions": [
          {
            "q": "Why is it easier to dig at midnight than at noon?",
            "choices": [
              "Because it is cooler",
              "Because at noon the wind comes down the river at thirty miles an hour and dries the rock",
              "Because the sun dips toward the northern horizon at midnight and the tents never get dark",
              "Because the low gold light throws long shadows that make bone stand out from rock"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentence with 'long shadows'.",
            "skill": "Finding details"
          },
          {
            "q": "About how many pairs of ribs did the dinosaur have?",
            "choices": [
              "Eighteen",
              "Ten",
              "About thirty pairs",
              "Six"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'splint'?",
            "choices": [
              "A splinter of bone",
              "A kind of glue",
              "A piece of wood taped along a bone to keep it from snapping",
              "A wet cloth laid over an open bone to keep the rock from drying"
            ],
            "answer": 2,
            "hint": "The sentence about the wooden splint and the broken arm.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the crew keep every open bone under a wet cloth?",
            "choices": [
              "To soften the rock so the dirt brushes away more easily",
              "To keep the plaster from setting before the jacket is on",
              "Because the wind dries the rock so fast it cracks and takes the bone with it",
              "Because the crew works one bone at a time and the rest wait"
            ],
            "answer": 2,
            "hint": "The first two sentences of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "Why the wind is the enemy today and how the crew protects each open bone",
              "How the ribs come out in pairs and get a wooden splint before the jacket",
              "How the midnight sun shapes the crew's hours and helps the digging",
              "How the crew sleeps from two until eight in tents that never get dark at all"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1 is 'The crew works until midnight because it can.'",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Rib math",
          "points": [
            "Different bottoms: make them the same first. 1/4 + 1/2 = 1/4 + 2/4 = 3/4.",
            "Ribs jacketed plus ribs waiting: the total.",
            "Hours between two times: count up. From 9 to 1 is 4 hours.",
            "Two-step: pieces per rib times ribs, then glue joints."
          ],
          "example": "10 ribs, each glued with 2 joints: 10 × 2 = 20 glue joints."
        },
        "problems": [
          {
            "q": "Of the 36 ribs, the crew glued 1/2 on Monday and 1/3 on Tuesday. What fraction of the ribs is glued? (write a fraction)",
            "answer": "5/6",
            "hint": "Make the bottoms the same: 1/2 is 3/6 and 1/3 is 2/6. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "30 ribs are jacketed and 6 are waiting. How many ribs is that in all?",
            "answer": "36",
            "hint": "30 + 6.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The crew sleeps from 2 in the morning until 8 in the morning. How many hours is that?",
            "answer": "6",
            "hint": "From 2 to 8.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "Each rib is broken into 3 pieces. Gluing 3 pieces takes 2 joints. How many glue joints for 30 ribs?",
            "answer": "60",
            "hint": "2 joints per rib × 30 ribs.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The wind is 30 miles an hour. The crew stops work if it reaches 45. How many more miles an hour can the wind rise before they stop?",
            "answer": "15",
            "hint": "45 − 30.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Jobs a paragraph can hold",
            "points": [
              "Name the job: setting a scene, giving a cause, comparing two things, walking through an order, or naming a problem and what was done about it.",
              "If a paragraph opens with a problem and closes with what got done, that is problem and solution, and saying so is the whole answer.",
              "Retelling the paragraph is not naming its job. If your choice only repeats the content, keep looking."
            ],
            "example": "A report on a ferry crossing opens with 'The fog came in at nine' and closes with 'They ran on radar and docked at noon.' Problem, then solution. The paragraph is doing nothing else."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The duck-billed dinosaur had about eighteen pairs of ribs, curving down from the back vertebrae to make a chest roughly the size of a small car.",
                "Summer is the best season for fieldwork anywhere in the world, because the days run long enough to keep a crew digging well past supper every evening.",
                "The crew stops digging when the sun goes down each evening.",
                "Working here means taking what this place gives, light all night, and working around what it takes away, like a wind that ruins bone."
              ],
              "answer": 3,
              "hint": "The light, the ribs, the wind. Two of those are the place helping and hurting the same work. One choice is a count, and one the report flatly denies.",
              "skill": "Central idea and evidence",
              "evidence": "The crew works until midnight because it can."
            },
            {
              "q": "Claim: it is the low angle of the light, not just the length of the day, that helps the crew see bone. Which sentence from the report best supports that claim?",
              "choices": [
                "The bluff is lit all night by a low gold light that throws long shadows into every crack and makes bone stand out from rock.",
                "The crew works until midnight because it can.",
                "The crew sleeps from two until eight with eye masks on, in tents that never get dark, and nobody minds.",
                "The duck-billed dinosaur had about eighteen pairs, curving down from the back vertebrae to make a chest the size of a small car."
              ],
              "answer": 0,
              "hint": "Length of day is not the claim. Look for the sentence that says what a low light does to the surface of the rock.",
              "skill": "Finding details",
              "evidence": "The bluff is lit all night by a low gold light that throws long shadows into every crack and makes bone stand out from rock."
            },
            {
              "q": "How is the last paragraph organized?",
              "choices": [
                "It sets today's weather against yesterday's, and then explains why a calm day is better for this work than a windy one.",
                "It lists the ribs in the order they came out of the rock.",
                "It names a problem, gives what the crew does about it, and then counts what got finished anyway.",
                "It explains what causes wind to run down a river valley."
              ],
              "answer": 2,
              "hint": "Read the first sentence, then the middle, then the count at the end. Three moves in that order have a name.",
              "skill": "Author's purpose and structure",
              "evidence": "The wind is the enemy today."
            },
            {
              "q": "The report says 'The wind is the enemy today.' What does calling the wind an enemy tell you?",
              "choices": [
                "It is strong enough to blow the crew's tents down.",
                "It carries dust that hides the bone from view.",
                "It is working against the crew, drying the rock until it cracks and takes bone with it.",
                "It is colder than the crew expected it to be in summer."
              ],
              "answer": 2,
              "hint": "Nothing here is fighting anybody. The next sentence says exactly what the wind does and what it costs. Match the word to that.",
              "skill": "Word meanings",
              "evidence": "It comes down the river at thirty miles an hour and dries the exposed rock so fast that it cracks, and a cracked rock takes the bone with it."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the crew leader counts the ribs twice at midnight. Why does that number matter so much?",
              "choices": [
                "The wind has blown some of the finished jackets off the bluff and down onto the gravel bar, so the crew counts what is left before it packs up.",
                "Every rib has to be counted before it can be glued back together in the lab, and the lab will not start work on a skeleton until the count is in.",
                "The animal had about eighteen pairs, and a skeleton that reaches a museum with the wrong number of ribs is a skeleton that comes back.",
                "The museum pays the dig by the rib, so every jacket has to be counted twice before the bill for the whole summer's work can be sent off to it."
              ],
              "answer": 2,
              "hint": "One paragraph tells you how many pairs of ribs the animal had. The other tells you how many are jacketed tonight and what a museum does with a wrong count. Neither one alone explains the second count.",
              "skill": "Reading between the lines",
              "evidence": "A skeleton with the wrong number of ribs is a skeleton that a museum will send back."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 2 × 7 means 2 groups of 7.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "2 × 7 = 14, so 14 shared into 2 equal groups is 7 each."
          },
          "problems": [
            {
              "q": "The crew packs 4 crates with 3 ribs in each. How many ribs is that?",
              "answer": "12",
              "hint": "4 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "12 ribs are packed equally into 4 crates. How many ribs in each crate?",
              "answer": "3",
              "hint": "How many 4s make 12?",
              "skill": "Dividing"
            },
            {
              "q": "The crew counted 436 bone chips, then found 166 more, then 86 more. How many chips in all?",
              "answer": "688",
              "hint": "436 + 166 first. Then add 86.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The crew finished 5/8 of the day's work before the break and 1/8 after. What fraction is done? (write a fraction)",
              "answer": "6/8",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A rib platform is 5 squares wide and 6 squares long. How many squares is that?",
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
              "Dividing by a decimal: move the point in both numbers the same number of places until you divide by a whole number. 7.2 ÷ 0.8 is 72 ÷ 8 = 9.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "3 × (12 − 5) + 8: parentheses first, 12 − 5 = 7; then 3 × 7 = 21; then add 8 to get 29."
          },
          "problems": [
            {
              "q": "The crew has 17.5 hours of brushing. Each bone takes 1.75 hours. How many bones is that enough for?",
              "answer": "10",
              "hint": "Move both points 2 places to the right: 1750 ÷ 175.",
              "skill": "Decimals"
            },
            {
              "q": "Of 120 bone chips, 50% are set aside. How many is that?",
              "answer": "60",
              "hint": "50% of 120: 50% is 50/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Ribs and jackets are kept in the ratio 1 to 3. If there are 8 ribs, how many jackets?",
              "answer": "24",
              "hint": "8 ÷ 1 = 8 groups. Each group has 3 jackets.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out 6 × (11 − 4) + 2. What is it?",
              "answer": "44",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day it was −15 degrees at dawn. By noon it was 9 degrees. By how many degrees did it rise?",
              "answer": "24",
              "hint": "From −15 up to 0 is 15, then 9 more.",
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
            "example": "6x + 5 = 59, so 6x = 54, so x = 9."
          },
          "problems": [
            {
              "q": "16 bones needed 40 hours altogether. How many hours is that for one bone?",
              "answer": "2.5",
              "hint": "A rate is the total shared out: 40 ÷ 16.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew counted 240 bone chips on the first pass. On the second pass the number had fallen by 50%. How many bone chips is that?",
              "answer": "120",
              "hint": "50% of 240 is 120. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter day the thermometer read −7 degrees at dawn. It rose 11 degrees by noon, then fell 7 degrees by dark. What does it read at dark?",
              "answer": "-3",
              "accept": [
                "−3"
              ],
              "hint": "Start at −7, go up 11 to 4, then down 7.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 3x + 3 = 24",
              "answer": "7",
              "hint": "Take 3 off both sides first, then divide by 3.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 25 feet. The bluff measures 11 inches on the plan. How long is it really, in feet?",
              "answer": "275",
              "hint": "Every inch is 25 feet, so 11 × 25.",
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
            "example": "Start at 11 and add 6 each hour: after 2 hours, y = 6 × 2 + 11 = 23."
          },
          "problems": [
            {
              "q": "The crew starts with 8 bone chips bagged and bags 4 more every hour. After 3 hours, how many bone chips are bagged?",
              "answer": "20",
              "hint": "This is the straight-line rule y = mx + b: 4 × 3 + 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each tray holds 9² bone chips. There are 7 trays. How many bone chips in all?",
              "answer": "567",
              "hint": "9² means 9 × 9 = 81. Then × 7.",
              "skill": "Powers and roots"
            },
            {
              "q": "The crew runs a rope from the top of a 20-foot pole to a point 21 feet away on the ground. How long is the rope, in feet?",
              "answer": "29",
              "hint": "Right triangle: a² + b² = c². 20² + 21² = 400 + 441 = 841. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x + 24 = 4x + 51",
              "answer": "9",
              "hint": "Take 4x off both sides to get 3x + 24 = 51, then take 24 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The crew writes the number of grains of sand sifted from the rib bed as 7 × 10^5. Written out in full, what number is that?",
              "answer": "700000",
              "hint": "10^5 is 1 with 5 zeros after it: 100,000. Then × 7.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Pairs",
          "points": [
            "A pair is two. If the orders say pairs, double before you go on.",
            "Then do the steps in order."
          ],
          "example": "'Three pairs' is six."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of pairs of ribs: 18.",
          "Turn that into a number of ribs. Every pair is two.",
          "Subtract the ribs jacketed today: 30.",
          "Multiply by the wind speed in miles an hour: 30.",
          "Type the result, unless the crew jacketed more than half of all the ribs today, in which case type WIND instead."
        ],
        "prompt": "Your answer:",
        "answer": "WIND",
        "accept": [
          "wind",
          "Wind",
          "wind.",
          "WIND."
        ],
        "hint": "Eighteen pairs means two ribs in each. Then weigh step 5: how many ribs are there in all, and how many went into jackets?"
      }
    },
    {
      "id": "dig-4",
      "title": "The Legs",
      "recon": {
        "lesson": {
          "title": "Weight and size",
          "points": [
            "When the notes compare an animal to something familiar, the comparison is a detail.",
            "'How much did it weigh' wants the number in the notes.",
            "'How do they know' wants the evidence, which is usually the bone itself."
          ],
          "example": "'The thigh bone is as long as a person is tall.' How long? A person's height."
        },
        "title": "Field Notes: A Thigh Bone as Long as You",
        "passage": [
          "The thigh bone comes out today, and it would reach the hip of the tallest person on the crew. The duck-billed dinosaur spent most of its time on all fours. It rose onto its back legs when it needed to move faster. Its back legs carried an animal that weighed about three tons, as much as a pickup truck. The thigh bone is thick as a fence post, and the hollow inside it, where the marrow was, is the size of a coffee can. From the length of that bone the crew can work out how tall the animal stood at the hip: about eight feet.",
          "The leg bones also say how the animal moved. The joint at the knee is broad and flat, built for walking, not running, and the foot bones end in three broad toes with blunt hooves, like a cow's, not claws. This was not a fast animal. It did not need to be. In a herd of a hundred, with tens of thousands of teeth between them, the danger was not the predator so much as the winter. The leg bones of the young ones, found in the same bluff, show growth rings that stopped every year when the food ran out.",
          "The jackets are too heavy to carry now. The thigh bone's jacket alone weighs six hundred pounds. There are two of them, plus the shin bones and the feet. So a helicopter comes up the river from the camp forty miles south and hovers over the gravel bar with a cable hanging down. It lifts the jackets out one at a time in a net, a thousand pounds a load, back to the camp. The crew stands back from the rotor wash and watches seventy million years go up in the air."
        ],
        "questions": [
          {
            "q": "About how much did the dinosaur weigh?",
            "choices": [
              "Three hundred pounds",
              "Thirty tons",
              "About three tons, as much as a pickup truck",
              "As much as a car"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the fourth sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How tall did the animal stand at the hip?",
            "choices": [
              "Three feet",
              "Thirty feet",
              "About eight feet",
              "Ten feet"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is 'rotor wash'?",
            "choices": [
              "The strong wind blown down by a helicopter's spinning blades",
              "The noise a helicopter makes over the gravel bar",
              "The spinning part on top of the helicopter",
              "The net on the end of the cable that the helicopter lowers for a jacket"
            ],
            "answer": 0,
            "hint": "The crew 'stands back from the rotor wash' as the helicopter hovers.",
            "skill": "Word meanings"
          },
          {
            "q": "How does the crew know the animal was not a fast runner?",
            "choices": [
              "Because a herd of a hundred plant-eaters grazing together would never have had any reason to move quickly",
              "Because the knee joint is broad and flat, built for walking, and the toes end in hooves, not claws",
              "Because the growth rings in the leg bones of the young ones stopped every single year when the food ran out",
              "Because an animal that weighed three tons and stood eight feet at the hip is far too heavy to run anywhere"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The weight of the animal",
              "How the heavy jackets are flown out by helicopter",
              "The growth rings",
              "What the knee joint and the toes say about how the animal moved"
            ],
            "answer": 1,
            "hint": "Paragraph 3 begins with the jackets being too heavy and describes the helicopter.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Leg math",
          "points": [
            "Volume of a box: length × width × height. 5 × 3 × 2 = 30 cubic feet.",
            "Flying time: miles ÷ miles an hour gives hours; × 60 gives minutes.",
            "Feet to inches: × 12.",
            "Two-step: jacket weights added, then loads."
          ],
          "example": "6 feet is 6 × 12 = 72 inches."
        },
        "problems": [
          {
            "q": "The thigh bone goes in a crate 6 feet long, 2 feet wide and 2 feet tall. How many cubic feet is the crate?",
            "answer": "24",
            "hint": "Length × width × height: 6 × 2 first, then times 2.",
            "skill": "Volume"
          },
          {
            "q": "Two thigh-bone jackets weigh 600 pounds each. How many pounds together?",
            "answer": "1200",
            "accept": [
              "1,200"
            ],
            "hint": "2 × 600.",
            "skill": "Multiplying"
          },
          {
            "q": "The small helicopter that came first lifts 500 pounds a load. A 600-pound jacket is too heavy for one load, so the crew splits it in half. How many pounds is each half?",
            "answer": "300",
            "hint": "600 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "The animal stood 8 feet at the hip. A foot is 12 inches. How many inches is that?",
            "answer": "96",
            "hint": "8 × 12.",
            "skill": "Multiplying"
          },
          {
            "q": "The camp is 40 miles south. The helicopter flies at 120 miles an hour. How many minutes does the flight take?",
            "answer": "20",
            "hint": "40 miles at 120 an hour is a third of an hour: 60 ÷ 3.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The picture inside the phrase",
            "points": [
              "Cover the word with a finger and read the sentence with a gap in it. What fits the gap?",
              "Some phrases are pictures. 'The whole street came out to watch' is not about the road getting up; it is about the people who live on it.",
              "Slot each choice into the sentence. Three of them will make the report say something it never said."
            ],
            "example": "'The old truck ate that hill.' Nothing was eaten. It means the truck went up without struggling, and the sentence handed you that without any dictionary."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "The thigh bone is thick as a fence post and would reach the hip of the tallest person on the crew.",
                "Dinosaurs that walked on two legs were always slow movers, and this one was the slowest of them.",
                "The leg bones tell how big the animal was and how it moved, and they are so heavy that getting them out takes a helicopter.",
                "The animal's feet ended in sharp claws rather than hooves, the kind of feet built for running."
              ],
              "answer": 2,
              "hint": "Size, movement, weight. Find the choice that covers all three paragraphs. One of these the report says the opposite of, in so many words.",
              "skill": "Central idea and evidence",
              "evidence": "The leg bones also say how the animal moved."
            },
            {
              "q": "Claim: this animal was not built for speed. Which sentence from the report best supports that claim?",
              "choices": [
                "The thigh bone is thick as a fence post, and the hollow inside it, where the marrow was, is the size of a coffee can.",
                "From the length of that bone the crew can work out how tall the animal stood at the hip: about eight feet.",
                "The joint at the knee is broad and flat, built for walking, not running, and the foot bones end in three broad toes with blunt hooves, like a cow's, not claws.",
                "The leg bones also say how the animal moved."
              ],
              "answer": 2,
              "hint": "One of these only says the leg bones tell how the animal moved, without saying what they tell. Look instead for the sentence that describes the parts of the leg and says what they were built for.",
              "skill": "Finding details",
              "evidence": "The joint at the knee is broad and flat, built for walking, not running, and the foot bones end in three broad toes with blunt hooves, like a cow's, not claws."
            },
            {
              "q": "What job do the two short sentences 'This was not a fast animal. It did not need to be.' do in the second paragraph?",
              "choices": [
                "They turn a description of bones into a claim about the animal's life, which the rest of the paragraph then explains.",
                "They compare this animal with a faster one found in the same bluff, whose narrow knee joints and clawed feet show it was built for running.",
                "They list the parts of the leg that came out of the ground today.",
                "They explain why the knee joint is broad and flat."
              ],
              "answer": 0,
              "hint": "Look at what the sentence after them is doing. Two short lines that raise a question the next line answers are there to hand the paragraph over.",
              "skill": "Author's purpose and structure",
              "evidence": "In a herd of a hundred, with tens of thousands of teeth between them, the danger was not the predator so much as the winter. The leg bones of the young ones, found in the same bluff, show growth rings that stopped every year when the food ran out."
            },
            {
              "q": "The report says the crew 'watches seventy million years go up in the air'. What does that phrase mean here?",
              "choices": [
                "The crew has been working at this bluff for so many summers that the years have started to run together.",
                "The jackets going up in the net hold bones that are seventy million years old.",
                "The helicopter kicks up dust from the gravel bar that has not been stirred in ages.",
                "The lift will take many hours to finish, because the net carries only a thousand pounds at a time."
              ],
              "answer": 1,
              "hint": "Read the sentence before it: what exactly is going up on the cable? The writer has swapped the thing for its age.",
              "skill": "Word meanings",
              "evidence": "The crew stands back from the rotor wash and watches seventy million years go up in the air."
            },
            {
              "q": "Paragraphs 1 and 2 together explain how the crew can describe an animal nobody has ever watched walking. How can they?",
              "choices": [
                "Other complete duck-billed dinosaurs have been filmed in museums.",
                "The length of a bone gives the animal's height, and the shape of its joints gives the way it moved, so the skeleton does the describing.",
                "The growth rings in the young bones show what color the animal was.",
                "The herd left tracks in the bluff alongside the bones, and the spacing between those tracks shows the crew how fast the animals walked and how they held their legs."
              ],
              "answer": 1,
              "hint": "One paragraph turns a length into a height. The other turns a joint into a way of walking. Put those two moves side by side.",
              "skill": "Reading between the lines",
              "evidence": "From the length of that bone the crew can work out how tall the animal stood at the hip: about eight feet."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 2 × 7 means 2 groups of 7.",
              "Sharing equally is dividing.",
              "Taking away big numbers: line up the ones, tens and hundreds, and regroup when the top digit is too small.",
              "A whole is all its parts, like 3/3. If 1/3 is done, 2/3 is still to do."
            ],
            "example": "2 × 7 = 14, so 14 shared into 2 equal groups is 7 each."
          },
          "problems": [
            {
              "q": "The crew counted 4 bones yesterday and three times as many today. How many bones today?",
              "answer": "12",
              "hint": "Three times 4: 4 + 4 + 4.",
              "skill": "Multiplying"
            },
            {
              "q": "The crew packs 16 bones into loads of 4. How many loads is that?",
              "answer": "4",
              "hint": "How many 4s make 16?",
              "skill": "Dividing"
            },
            {
              "q": "The crew starts with 425 pounds of plaster and uses 113 pounds. How many pounds are left?",
              "answer": "312",
              "hint": "425 − 113.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "1/4 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "3/4",
              "hint": "The whole job is 4/4. Take 1/4 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The plaster tally stood at 755 pounds and 200 more pounds were added. How many pounds is the tally now?",
              "answer": "955",
              "hint": "755 + 200.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Fraction ÷ fraction: flip the second one and multiply. 4/5 ÷ 2/5 = 4/5 × 5/2 = 20/10 = 2.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The bucket of plaster is 3/4 full. Each bone jacket takes 3/8 of a bucket. How many jackets can the crew make?",
              "answer": "2",
              "hint": "Flip the second fraction and multiply: 3/4 × 8/3. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "60 of the 120 tons are set aside. What percent is that? (write just the number)",
              "answer": "50",
              "accept": [
                "50%"
              ],
              "hint": "60 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 3 leg bones there are 4 tons of rock to clear. There are 16 tons of rock. How many leg bones?",
              "answer": "12",
              "hint": "16 ÷ 4 = 4 groups. Each group has 3 leg bones.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out 3 + 5 × 7. What is it?",
              "answer": "38",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day the thermometer read 5 degrees at dawn. By dark it had fallen to −7 degrees. By how many degrees did it fall?",
              "answer": "12",
              "hint": "From 5 down to 0 is 5, then 7 more.",
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
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: get the x part on its own first, then undo the multiplying."
            ],
            "example": "20 − 3x = 8, so 3x = 20 − 8 = 12, so x = 4."
          },
          "problems": [
            {
              "q": "One bone needs 2.5 hours. How many hours do 16 bones need?",
              "answer": "40",
              "hint": "16 × 2.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew moved 240 tons of rock in the first week and 216 tons in the second. By what percent did the amount change? (write just the number)",
              "answer": "10",
              "accept": [
                "10%",
                "-10",
                "−10",
                "-10%",
                "−10%"
              ],
              "hint": "The change is 24. 24 out of 240, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 13 hours the thermometer fell 26 degrees in all, the same amount each hour. What was the change each hour? (Write a fall as a negative number.)",
              "answer": "-2",
              "accept": [
                "−2"
              ],
              "hint": "Share −26 into 13 equal parts: −26 ÷ 13. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 41 − 7x = 27",
              "answer": "2",
              "hint": "Move 7x to the right and 27 to the left: 7x = 14.",
              "skill": "Equations"
            },
            {
              "q": "A round wheel has a radius of 5 centimeters. Using 3.14 for pi, how many centimeters is it around the edge?",
              "answer": "31.4",
              "hint": "Across is 2 × 5 = 10. Then × 3.14.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is the change each step. If it goes down each step, take m away each time.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start with 40 and use 6 an hour: after 3 hours, 40 − 6 × 3 = 22 are left."
          },
          "problems": [
            {
              "q": "The crew has 64 bags of plaster and uses 7 bags every hour. How many bags are left after 7 hours?",
              "answer": "15",
              "hint": "7 × 7 = 49 used, taken off 64.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 225?",
              "answer": "15",
              "hint": "What number times itself makes 225?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope runs from the top of a pole to a point 15 feet away on the ground. How tall is the pole, in feet?",
              "answer": "8",
              "hint": "a² = c² − b² = 289 − 225 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 11x = 5x + 30",
              "answer": "5",
              "hint": "Take 5x off both sides: 6x = 30. Then divide by 6.",
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
          "title": "Instead",
          "points": [
            "'Instead' throws away the step before it.",
            "Read to the end before you calculate."
          ],
          "example": "'Divide by 5. Instead, multiply by 5' means multiply."
        },
        "skill": "Following directions",
        "steps": [
          "Write the weight of the dinosaur in tons: 3.",
          "Multiply by the height at the hip in feet: 8.",
          "Divide by the number of thigh bones: 2.",
          "Instead of dividing in step 3, go back to your answer from step 2 and multiply by 2.",
          "Type the result."
        ],
        "prompt": "Your answer:",
        "answer": "48",
        "hint": "Step 4 switches the divide off. Go back to your step 2 total and double it instead of dividing."
      }
    },
    {
      "id": "dig-5",
      "title": "The Tail, and Standing Up",
      "recon": {
        "lesson": {
          "title": "Putting the dig together",
          "points": [
            "The last notes look back over the whole dig. Questions will ask for a count, a time, a word and a reason.",
            "Times in months and years are details.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'The boat trip took three days.' Asked how long? Three days, not 'a while'."
        },
        "title": "Field Notes: On Its Feet",
        "passage": [
          "The tail came out last, on the fifth day, sixty long flat vertebrae stiffened by those bony tendons. With it the dig was done: skull, spine, ribs, legs, tail, one animal, in order, in a hundred and forty jackets. The rest of the work happens in a lab a thousand miles south. It takes longer than the dig. A jacket is opened with a saw, and the rock is picked off the bone with needles and tiny air-powered chisels, a few grains at a time. A single vertebra can take a week. The whole skeleton took the lab two years.",
          "Then it stands up. A steel frame is bent to fit each bone. Every one is held in the position the animal held it in life. The frame is welded together into an armature that carries the skeleton's weight, so that the bones themselves carry none. Bones that were never found, a few toes, half a rib, are cast in plastic from the matching bone on the other side. They are painted a slightly different color, so that anyone who looks closely can see which parts are real. Nothing on a good mount is faked. The missing parts are simply marked, and honest about it.",
          "The day it stood up, the crew came to the museum and stood under it. Eight feet at the hip, thirty feet nose to tail, head down as if grazing, in a hall with a window that looks north. Seventy million years ago it walked through a dark winter at the top of the world and died in a flood. It lay in the mud until a river cut a bluff and a crew with brushes found a rib in the gravel. The label under it gives the place and the year it was found. The crew leader's name is not on it, and the crew leader says that is exactly right."
        ],
        "questions": [
          {
            "q": "How many jackets did the whole animal fill?",
            "choices": [
              "A hundred and forty",
              "Fourteen",
              "Forty",
              "A thousand"
            ],
            "answer": 0,
            "hint": "The second sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How long did the lab take to prepare the whole skeleton?",
            "choices": [
              "About a week for a single vertebra",
              "Two years",
              "Five days, the same as the dig",
              "Seventy years"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is an 'armature'?",
            "choices": [
              "The plaster and burlap wrapping that protects each bone on the way to the lab",
              "The position the animal held each bone in during life",
              "A steel frame that holds the skeleton in position and carries its weight",
              "A bone cast in plastic from the matching bone on the other side of the animal"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence with 'welded' explains it before the word.",
            "skill": "Word meanings"
          },
          {
            "q": "Why are the plastic replacement bones painted a slightly different color?",
            "choices": [
              "Because a bone cast from the matching bone on the other side is never quite exact",
              "So anyone who looks closely can see which parts are real and which are cast",
              "Because the steel frame has to hold every bone in the position the animal held it in life",
              "Because a jacket has to be opened with a saw before the rock can be picked off the bone"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the two sentences about the cast bones.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How a jacket is opened and the rock picked off with needles",
              "The day the skeleton stood in the museum and the long story behind it",
              "The crew leader's name",
              "How the steel frame is bent and welded so that the bones themselves carry no weight"
            ],
            "answer": 1,
            "hint": "Paragraph 3 describes the standing skeleton and then tells its whole story in two sentences.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Lab math",
          "points": [
            "Years to weeks: × 52.",
            "Subtracting decimals: line up the points. 6.4 − 2.75 is 6.40 − 2.75 = 3.65.",
            "Miles south times two: round trip.",
            "A share as a fraction: the part over the whole. 30 out of 100 is 30/100."
          ],
          "example": "3 years is 3 × 52 = 156 weeks."
        },
        "problems": [
          {
            "q": "The lab took 2 years. A year has 52 weeks. How many weeks is that?",
            "answer": "104",
            "hint": "2 × 52.",
            "skill": "Multiplying"
          },
          {
            "q": "The tail's last bone is 1.75 inches long and the bone next to it is 2.3 inches long. How much longer is the bigger bone? (write a decimal)",
            "answer": "0.55",
            "hint": "Line up the points: 2.30 − 1.75.",
            "skill": "Decimals"
          },
          {
            "q": "The lab is 1,000 miles south of the dig. How many miles is the round trip?",
            "answer": "2000",
            "accept": [
              "2,000"
            ],
            "hint": "1,000 × 2.",
            "skill": "Multiplying"
          },
          {
            "q": "The tail has 60 vertebrae and the whole spine has 100. Write the tail's share as a fraction with 100 on the bottom.",
            "answer": "60/100",
            "accept": [
              "3/5"
            ],
            "hint": "60 over 100.",
            "skill": "Fractions"
          },
          {
            "q": "The skeleton is 30 feet long and 8 feet tall at the hip. If you drew a rectangle around it, what would its area be in square feet?",
            "answer": "240",
            "hint": "30 × 8.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Build it out of two facts",
            "points": [
              "The last question is never answered in one place. Plan on one fact from one paragraph and one from another.",
              "Say both facts out loud, then say 'so'. Whatever comes after 'so' is usually sitting there in the choices.",
              "A choice that needs something the report never mentions is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the bridge is closed to trucks. Paragraph three: everything in the store arrives by boat. So the closure is the reason the boat matters. Neither line says that by itself."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The dig was only the beginning: two years of lab work, a frame that tells the truth about what is real, and a mount that belongs to the animal rather than to the people who found it.",
                "A single vertebra can take a week to clean in the lab.",
                "Standing a skeleton up takes a steel frame bent to fit each bone, welded so that the bones themselves carry no weight.",
                "Missing bones are cast in plastic and painted to match the real ones exactly."
              ],
              "answer": 0,
              "hint": "The lab, the frame, the label. Ask what all three have in common besides the same skeleton. One of these choices changes a single word of the report and becomes false.",
              "skill": "Central idea and evidence",
              "evidence": "Nothing on a good mount is faked."
            },
            {
              "q": "Claim: a visitor can tell which parts of the skeleton are real bone. Which sentence from the report best supports that claim?",
              "choices": [
                "The frame is welded together into an armature that carries the skeleton's weight, so that the bones themselves carry none.",
                "They are painted a slightly different color, so that anyone who looks closely can see which parts are real.",
                "Eight feet at the hip, thirty feet nose to tail, head down as if grazing, in a hall with a window that looks north.",
                "A jacket is opened with a saw, and the rock is picked off the bone with needles and tiny air-powered chisels, a few grains at a time."
              ],
              "answer": 1,
              "hint": "The claim is about what a visitor can see. Find the sentence that describes something done to the fake parts on purpose, and says who it was done for.",
              "skill": "Finding details",
              "evidence": "They are painted a slightly different color, so that anyone who looks closely can see which parts are real."
            },
            {
              "q": "Why is the animal's whole story packed into two sentences near the end, running from seventy million years ago to a crew with brushes?",
              "choices": [
                "To explain how a river cuts a bluff away over many summers, taking a little more of the bank each year until the bones drop out of it.",
                "To list the places the skeleton has been on display.",
                "To put the whole journey in one breath, so the skeleton in the hall and the rib in the gravel read as one thing.",
                "To show that the lab work took longer than anyone expected, since a single vertebra alone can take a full week to clean."
              ],
              "answer": 2,
              "hint": "Try spreading those two sentences out into six short ones in your head. Something is lost. Ask what the compression was buying.",
              "skill": "Author's purpose and structure",
              "evidence": "Seventy million years ago it walked through a dark winter at the top of the world and died in a flood. It lay in the mud until a river cut a bluff and a crew with brushes found a rib in the gravel."
            },
            {
              "q": "The report says 'The missing parts are simply marked, and honest about it.' What does honest mean as it is used here?",
              "choices": [
                "Truthful in the way a person can be truthful, able to choose whether to tell the truth",
                "Not disguised as anything else, so nobody is misled about what is real",
                "Made out of the same material as the real bones, so the cast pieces match the ones around them",
                "Strong enough to hold the weight of the whole mount without any help from the steel frame"
              ],
              "answer": 1,
              "hint": "A plastic toe cannot tell the truth on its own. Ask what the lab did to it so that a visitor is not fooled.",
              "skill": "Word meanings",
              "evidence": "They are painted a slightly different color, so that anyone who looks closely can see which parts are real."
            },
            {
              "q": "Paragraphs 2 and 3 together suggest why the crew leader is glad not to be named on the label. What does the mount say about whose it is?",
              "choices": [
                "The crew leader did not do enough of the work at the bluff to be named on the label, since it took four people just to lift one jacket.",
                "The whole method is about showing the animal truthfully, so the label carries the place and the year rather than the people.",
                "The label names the place and the year, so there is no room left on it for a person's name.",
                "The mount belongs to the museum that paid for the two years of lab work."
              ],
              "answer": 1,
              "hint": "One paragraph is about a mount that hides nothing. The other tells you what the label does say. Put the two together and ask what the whole thing is for.",
              "skill": "Reading between the lines",
              "evidence": "The crew leader's name is not on it, and the crew leader says that is exactly right."
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
            "example": "5 × 4 = 20, so 20 shared into 5 equal groups is 4 each."
          },
          "problems": [
            {
              "q": "The crew lays the bones out in 3 rows of 3. How many bones is that?",
              "answer": "9",
              "hint": "3 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "15 bones are set out in 5 equal rows. How many bones are in each row?",
              "answer": "3",
              "hint": "15 split into 5 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 153 steel rods, then 123 more are added and 21 are taken off. What does the log show now?",
              "answer": "255",
              "hint": "Add 153 and 123 first, then take 21 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 2/6 + 3/6 (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom. 2 + 3 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 9 feet wide and 6 feet long. How many feet is it all the way around the edge?",
              "answer": "30",
              "hint": "Two sides of 9 and two sides of 6: 9 + 9 + 6 + 6.",
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
            "example": "5 × (10 − 6) + 9: parentheses first, 10 − 6 = 4; then 5 × 4 = 20; then add 9 to get 29."
          },
          "problems": [
            {
              "q": "The plan allows 60.5 hours. The crew uses 9.45 hours on the first bone and 15.65 on the second. How many hours are left?",
              "answer": "35.4",
              "hint": "Add the two amounts used first, then take that from 60.5. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "25% of the steel rods counted is 60. How many were counted in all?",
              "answer": "240",
              "hint": "60 is 25 hundredths of the whole: 60 ÷ 25 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew counts 10 bolts and 25 steel rods. In its simplest form, what is the ratio of bolts to steel rods? (write it like 2:3)",
              "answer": "2:5",
              "accept": [
                "2 to 5"
              ],
              "hint": "Divide both by 5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out (5 + 2) × 8. What is it?",
              "answer": "56",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "One winter night it was −8 degrees at midnight and rose 10 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "2",
              "hint": "Start at −8 and count 10 steps up.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: the time you have ÷ the time each one takes. 11 hours at 2.75 hours each is 11 ÷ 2.75 = 4.",
              "Working backward: if a count rose by a quarter, the new count is 125% of the old one, so divide by 1.25 to get back to the start.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "3(x + 7) = 33, so x + 7 = 11, so x = 4."
          },
          "problems": [
            {
              "q": "The crew has 20 hours to spend and each bone takes 1.25. How many bones is that enough for?",
              "answer": "16",
              "hint": "20 ÷ 1.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of steel rods rose by 20% to 144. What was it before?",
              "answer": "120",
              "hint": "144 is 120% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "One winter evening it was 8 degrees, then it fell 17 degrees. What does the thermometer read?",
              "answer": "-9",
              "accept": [
                "−9"
              ],
              "hint": "From 8 down to 0 is 8, and there are 9 left to fall.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 20) × 5 = 160",
              "answer": "12",
              "hint": "Divide both sides by 5 first, then take 20 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 8. The steel rod on the model is 10 cm. How many cm is the real one?",
              "answer": "80",
              "hint": "Every cm on the model is 8 cm for real.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A small 2 means a number times itself: 7² is 7 × 7 = 49. Work out each power first, then add or subtract.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first: 6x − 2x is 4x. Then undo the plain number."
            ],
            "example": "y = 4x + 3 when x = 5: 4 × 5 + 3 = 23."
          },
          "problems": [
            {
              "q": "The count of steel rods follows the rule y = 9x + 12, where x is the hour. What is y when x = 8?",
              "answer": "84",
              "hint": "Put 8 in for x: 9 × 8 + 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 3² + 4²?",
              "answer": "25",
              "hint": "3 × 3 = 9 and 4 × 4 = 16. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 25-foot rope reaches the top of a 7-foot pole. How far is the foot of the rope from the base, in feet?",
              "answer": "24",
              "hint": "b² = c² − a² = 625 − 49 = 576. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x + 11 − 3x = 29",
              "answer": "9",
              "hint": "Collect the x's first: 2x + 11 = 29.",
              "skill": "Equations"
            },
            {
              "q": "What is 2 × 10^5 ÷ 10^4?",
              "answer": "20",
              "hint": "Dividing subtracts the powers: 10^5 ÷ 10^4 = 10^1. So 2 × 10.",
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
          "example": "'Start with 30. Add 4. Take away 6. Ignore the add step.' Go back to 30 and take away 6: you end on 24."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of jackets the dig filled: 140.",
          "Divide by the number of days the dig took: 5.",
          "Subtract the feet the skeleton stands at the hip: 8.",
          "Multiply by the years the lab worked on the skeleton: 2.",
          "Ignore step 3 completely. The hip height has nothing to do with jackets. Go back to your step 2 answer and do step 4 to it: multiply it by the lab's 2 years, once.",
          "Type the number you finish with."
        ],
        "prompt": "Your answer:",
        "answer": "56",
        "hint": "Step 5 cancels the subtraction. The number you double is the one you were holding at the end of step 2."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
