// ODYSSEY — campaign "trench". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "trench",
  "ready": true,
  "kind": "shift",
  "readingLevel": {
    "fk": 5.6,
    "cl": 6.7
  },
  "grade": "5",
  "kindLabel": "Dive",
  "form": "octopus",
  "title": "Deep Station",
  "subtitle": "A research ship over an ocean trench",
  "pitch": "Five dives in a three-person submersible, each one deeper. Sunlight fading by two hundred meters, animals that make their own light, pressure that would crush a car, and a trench floor nobody has touched.",
  "scene": "assets/scene-trench.jpg",
  "progress": {
    "unit": "dives",
    "total": 5
  },
  "dayNoun": "Dive",
  "stageNoun": "Dive",
  "finalNoun": "Trench floor",
  "stages": [
    "Dive 1",
    "Dive 2",
    "Dive 3",
    "Dive 4",
    "Trench floor"
  ],
  "reconNoun": "Dive Plan",
  "legs": {
    "recon": "Dive plan",
    "nav": "Depth math",
    "orders": "Dive orders",
    "debrief": "Surface"
  },
  "fact": "Until a few years ago, more people had stood on the Moon than had been to the bottom of the deepest trench. The trench is closer. It is just harder to get to.",
  "finale": {
    "prompt": "Trench floor. The lights are on the mud. Which color goes on the sample flag you leave down there?",
    "options": [
      {
        "label": "Orange",
        "color": "#F28C28"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
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
    "done": "Plant it. Nobody will ever see it but the fish. That is the best kind of flag."
  },
  "patrols": [
    {
      "id": "trench-1",
      "title": "Where the Light Stops",
      "recon": {
        "lesson": {
          "title": "Questions first, then the plan",
          "points": [
            "Read the five questions before the plan. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Depths are numbers with 'meters' after them. Circle each one.",
            "The answer is always in the plan. You never have to guess."
          ],
          "example": "Question: 'How many seats does the sub have?' Hunt for 'seats' and a number."
        },
        "title": "Dive Plan: Layers",
        "passage": [
          "The submersible is a titanium sphere two meters across with three seats, three small windows and a wall of switches. It is bolted inside a frame. The frame carries the batteries, the lights, the robot arm and the sample basket. It has no engine to speak of, only small electric thrusters. The sub goes down by being heavy. Steel weights on the frame pull it to the bottom; at the end of the dive the pilot drops the weights and the sphere floats up on its own. Nothing on board can be repaired at depth, so everything is checked twice on deck.",
          "The ocean is not one place. In the first two hundred meters there is light and there are plants, and almost everything people think of as the sea lives there. Below that the light fades to a deep blue and then to nothing. By a thousand meters it is as black as the inside of a rock, and it stays that way to the bottom. The water gets colder as the sub goes down until it is a few degrees above freezing. It stays that cold all the way to the trench floor.",
          "Today's dive is a shallow one, to five hundred meters, to test everything. The pilot watches the windows go from green to blue to black, and at about two hundred meters switches on the outside lights for the first time. Small things drift through the beams: bits of dead plankton falling from the surface like slow snow, which is exactly what the crews call it, marine snow. It is the only food most of the deep sea ever gets. The dive takes an hour down, an hour on the bottom, and an hour up."
        ],
        "questions": [
          {
            "q": "How does the submersible go down?",
            "choices": [
              "By running its small electric thrusters straight downward",
              "By being heavy: steel weights pull it to the bottom",
              "It is lowered from the ship on a long steel cable and winch",
              "It fills the space inside its frame with seawater until it sinks"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence with 'goes down by being heavy'.",
            "skill": "Finding details"
          },
          {
            "q": "By what depth is the ocean completely dark?",
            "choices": [
              "Two meters",
              "By a thousand meters",
              "By about two hundred meters",
              "At the trench floor only"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'as black as the inside of a rock'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is 'marine snow'?",
            "choices": [
              "Bits of dead plankton drifting down from the surface",
              "Frozen seawater",
              "Bubbles rising from the submersible's thrusters and lights",
              "Plants from the first two hundred meters"
            ],
            "answer": 0,
            "hint": "The sentence with 'falling from the surface like slow snow'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is everything on the sub checked twice on deck?",
            "choices": [
              "Because nothing can be repaired once the sub is at depth",
              "Because the sub has no engine and cannot turn back on its own",
              "Because the ship's crew has to sign off on every switch twice",
              "Because the wall of switches is easy to mix up"
            ],
            "answer": 0,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The three small windows that the pilot watches through",
              "Marine snow and why it is the only food the deep sea gets",
              "The floor of the trench and how cold the water is there",
              "How the ocean changes with depth: light and cold"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 2 says 'The ocean is not one place', and the rest describes the layers.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Descent math",
          "points": [
            "Meters ÷ minutes = meters a minute.",
            "Hours to minutes: add up the hours, then × 60.",
            "Hundredths as decimals: 3/100 is 0.03 and 20/100 is 0.20.",
            "Same bottom: add the tops. 1/5 + 2/5 = 3/5."
          ],
          "example": "300 meters in 20 minutes is 300 ÷ 20 = 15 meters a minute."
        },
        "problems": [
          {
            "q": "On the way down, the sub sank the first 200 meters in 20 minutes. How many meters a minute is that?",
            "answer": "10",
            "hint": "200 ÷ 20.",
            "skill": "Dividing"
          },
          {
            "q": "The dive is an hour down, an hour on the bottom and an hour up. How many minutes is that in all?",
            "answer": "180",
            "hint": "3 hours × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "The sub's oxygen gauge reads in hundredths of a full tank. It reads 85/100. Write that as a decimal.",
            "answer": "0.85",
            "hint": "85 hundredths: two places after the point.",
            "skill": "Decimals"
          },
          {
            "q": "The sub has 3 seats and each person has 72 hours of air. The dive lasts 3 hours. How many hours of air are left for each person after the dive?",
            "answer": "69",
            "hint": "72 − 3.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The pilot spent 1/3 of the dive going down and 1/3 on the bottom. What fraction of the dive is that together? (write a fraction)",
            "answer": "2/3",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Cover the whole dive",
            "points": [
              "The central idea has to cover every paragraph. Label each one in four words, then find the choice all three labels serve.",
              "The wrong answers are usually true. They cover one paragraph, or they are a big statement about the sea that the plan never makes.",
              "Then four other moves: prove a claim with one line, name what a paragraph is for, work a word out from its sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a cave: how the rope is rigged, what the passage is like further in, what the first short trip is for. 'The rope is doubled' covers one paragraph. 'Caves are dark' covers none of it. 'Everything is checked above ground because nothing can be fixed below it' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole dive plan?",
              "choices": [
                "The sub sinks by carrying steel weights on its frame and rises again when the pilot drops them at the end of the dive, an hour up to the light.",
                "The sub is built for a place that is dark, cold and impossible to repair, and the first dive is about proving every part of it works.",
                "The ocean is the least explored place anywhere on the planet, and there is more still to be learned about it than about anything else people study.",
                "The sea stays warm all the way down to the floor of the trench, so the sub is built to keep its crew cool rather than to keep any cold out."
              ],
              "answer": 1,
              "hint": "A machine checked twice on deck, an ocean that turns black and cold, and a test dive to five hundred meters. Ask what all three serve, and cross off the choice the second paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "Nothing on board can be repaired at depth, so everything is checked twice on deck."
            },
            {
              "q": "Claim: the trip back up needs nothing switched on at all. Which sentence from the plan best supports that claim?",
              "choices": [
                "Small things drift through the beams: bits of dead plankton falling from the surface like slow snow, which is exactly what the crews call it, marine snow.",
                "Steel weights on the frame pull it to the bottom; at the end of the dive the pilot drops the weights and the sphere floats up on its own.",
                "The pilot watches the windows go from green to blue to black, and at about two hundred meters switches on the outside lights for the first time.",
                "The dive takes an hour down, an hour on the bottom, and an hour up."
              ],
              "answer": 1,
              "hint": "Two of these are about what the pilot sees on the way down and say nothing about coming back. The claim is about the return. Find the sentence that says how the sphere gets back to the surface.",
              "skill": "Finding details",
              "evidence": "Steel weights on the frame pull it to the bottom; at the end of the dive the pilot drops the weights and the sphere floats up on its own."
            },
            {
              "q": "The second paragraph opens: 'The ocean is not one place.' What job does that sentence do?",
              "choices": [
                "It states the point that the rest of the paragraph then proves, layer by layer, with light and cold.",
                "It compares this ocean with another ocean somewhere else, so that a reader can see which of the two the sub is diving into.",
                "It gives the depth that today's test dive will reach.",
                "It explains how the sub's outside lights are switched on."
              ],
              "answer": 0,
              "hint": "Read the sentences that come after it. Each one describes a different band of water. Ask what the first sentence is doing at the head of a list like that.",
              "skill": "Author's purpose and structure",
              "evidence": "The ocean is not one place."
            },
            {
              "q": "The crews call what drifts past the lights 'marine snow'. What does the name describe?",
              "choices": [
                "Bits of dead plankton drifting slowly down from the surface",
                "Ice forming on the outside of the sub as the water around it drops toward freezing",
                "Bubbles rising from the sub's electric thrusters",
                "A pale layer of sand lying on the floor of the trench, stirred up into the water by the sub"
              ],
              "answer": 0,
              "hint": "Nothing that deep is frozen. The sentence tells you what the drifting things are before it tells you what they are called. Read it in that order.",
              "skill": "Word meanings",
              "evidence": "Small things drift through the beams: bits of dead plankton falling from the surface like slow snow, which is exactly what the crews call it, marine snow."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why that falling material is the only food most of the deep sea ever gets. Why is it?",
              "choices": [
                "The water below a thousand meters is too cold for anything to grow in, so no plant can take root down there and nothing has any food.",
                "The sub's lights are the only light most deep animals ever see, so they gather in the beams and feed on whatever the lights bring in.",
                "The trench floor is too far down for any plankton to reach it, so the falling snow runs out long before the bottom and feeds nothing.",
                "Light and plants stop in the first two hundred meters, so everything living below that has to eat what drifts down from above."
              ],
              "answer": 3,
              "hint": "Paragraph two tells you where the plants stop. Paragraph three tells you what falls past the windows below that. Put the boundary next to the falling.",
              "skill": "Reading between the lines",
              "evidence": "In the first two hundred meters there is light and there are plants, and almost everything people think of as the sea lives there."
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
            "example": "5 × 4 = 20, so 20 shared into 5 equal groups is 4 each."
          },
          "problems": [
            {
              "q": "The sub drops 3 meters on each of 3 dives. How many meters is that?",
              "answer": "9",
              "hint": "3 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "Each dive uses 7 sample jars. The pilot has 21 jars. How many dives can the pilot make?",
              "answer": "3",
              "hint": "How many 7s fit into 21?",
              "skill": "Dividing"
            },
            {
              "q": "The pilot counted 452 fish on the morning dive and 501 on the evening dive. How many more on the evening dive?",
              "answer": "49",
              "hint": "501 − 452.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 4/8 or 5/8? (write a fraction)",
              "answer": "5/8",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 6 meters on each side. How many meters is it all the way around?",
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
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "A regular dive takes 3.5 hours. A long one takes 1.2 times as long. How many hours does the long one take?",
              "answer": "4.2",
              "hint": "Multiply 35 × 12 without the points, then put back 2 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 hours of air, 20 are set aside. Out of 120 hours of air, how many is that?",
              "answer": "24",
              "hint": "120 is 1.2 hundreds, so 1.2 × 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot divides 12 minutes of work in the ratio 1 to 3. How many minutes is the larger share?",
              "answer": "9",
              "hint": "4 parts in all, so one part is 3 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot works out (7 − 4) × (4 + 14). What is it?",
              "answer": "54",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 479 = x − 30",
              "answer": "509",
              "hint": "Add 30 to both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many in all, then take off the ones done: 11 hours at 2.75 hours a job is 4 jobs, so with 1 done, 3 are left.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the taking away first, then undo the dividing by multiplying."
            ],
            "example": "x ÷ 4 − 3 = 6, so x ÷ 4 = 9, so x = 36."
          },
          "problems": [
            {
              "q": "The job needs 6 minutes in all, at 0.75 minutes for each water sample. One sample is already done. How many samples are left?",
              "answer": "7",
              "hint": "6 ÷ 0.75 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says the planned hours of air may be raised by no more than 25%. Starting from 60 hours, what is the most the rule allows?",
              "answer": "75",
              "hint": "25% of 60 is 15. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A sensor starts 12 meters above a marker on the station wall and is lowered 6 meters on each of 5 days. Where is it now, in meters (above is +, below is −)?",
              "answer": "-18",
              "accept": [
                "−18"
              ],
              "hint": "6 × 5 comes off 12.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 2 − 8 = 7",
              "answer": "30",
              "hint": "Add 8 to both sides, then multiply by 2.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 cm for every 10 meters. How many cm are needed for 240 meters?",
              "answer": "24",
              "hint": "240 ÷ 10.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "Slope is the rise over the run: how much y goes up, divided by how much x goes across.",
              "A small 2 means a number times itself: 10² is 10 × 10 = 100. Work out the power first, then multiply.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Through (0, 2) and (6, 14): y rises 12 while x runs 6, so the slope is 12 ÷ 6 = 2."
          },
          "problems": [
            {
              "q": "A line passes through (0, 12) and (7, 33). What is its slope?",
              "answer": "3",
              "hint": "Slope is the rise over the run: 21 ÷ 7.",
              "skill": "Linear relationships"
            },
            {
              "q": "The pilot doubles 5² hours of air. How many hours of air is that?",
              "answer": "50",
              "hint": "5² is 25. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The pilot goes 5 meters east and then 12 meters north. In a straight line, how far is that from the start, in meters?",
              "answer": "13",
              "hint": "The two legs make a right angle: 5² + 12² = 169.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 4x + 22 and x + 34 come to the same number?",
              "answer": "4",
              "hint": "Set them equal, take x off both sides, then take 22 off.",
              "skill": "Equations"
            },
            {
              "q": "The pilot writes a number as 3 × 10^3. What number is ten times as big? Write it out in full.",
              "answer": "30000",
              "hint": "Ten times adds one to the power: 3 × 10^4.",
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
          "example": "If step 5 says 'answer in hours', 180 minutes becomes 3."
        },
        "skill": "Following directions",
        "steps": [
          "Write today's dive depth in meters: 500.",
          "The plants stop at 200 meters. Divide the 500 by 200 and write the answer as two and a half.",
          "Multiply by the number of seats in the sphere: 3.",
          "Add the number of windows: 3.",
          "Type your answer as a decimal, not as a mixed number. (Two and a half would be 2.5.)"
        ],
        "prompt": "Your answer:",
        "answer": "10.5",
        "accept": [
          "10.50"
        ],
        "hint": "Steps 3 and 4 leave you with a half. Step 5 says which way to write it — the example shows the form."
      }
    },
    {
      "id": "trench-2",
      "title": "Pressure",
      "recon": {
        "lesson": {
          "title": "A number that grows",
          "points": [
            "When the plan gives a rule like 'one more for every ten meters', a question may ask you to use it.",
            "'Why can one do it when another cannot' questions want the difference the plan names.",
            "A word about force is defined by what it does."
          ],
          "example": "'The pressure doubles by ten meters down.' What is it at ten meters? Double."
        },
        "title": "Dive Plan: The Weight of Water",
        "passage": [
          "At the surface the air presses on you. That push is called one atmosphere. You never notice it. You have lived in it your whole life. Water is heavier than air. Every ten meters of depth adds another atmosphere of pressure, so at ten meters down there are two atmospheres pressing on the sub, and at a hundred meters there are eleven. At the floor of the trench, eight thousand meters down, there are about eight hundred. That is the weight of three cars pressing on every square inch of the hull.",
          "The sphere is the only shape that can take it. Pressure pushes in from every direction equally, and a sphere spreads that push evenly over its whole surface, with no corner or flat side to buckle. The hull is titanium, a metal as strong as steel but lighter, nine centimeters thick, and the windows are cones of thick acrylic that press tighter into their frames the deeper the sub goes. A styrofoam cup tied to the outside of the frame comes back up the size of a thimble, crushed by the water, and every crew brings one down to prove it.",
          "Inside, the pressure never changes. The sphere is sealed at the surface with plain air. The three people inside breathe it at one atmosphere all the way to the bottom and back. That is why they can come straight up without stopping. A scuba diver breathing pressurized air has to rise slowly or the gas in the blood bubbles. The sub's crew feels nothing at all. Today's dive is to two thousand meters. That is two hundred atmospheres. The only sign of it is the tick of the hull as it cools and tightens."
        ],
        "questions": [
          {
            "q": "How much pressure is there at the floor of the trench, eight thousand meters down?",
            "choices": [
              "About eight hundred atmospheres",
              "Two atmospheres, the same as ten meters",
              "Eleven atmospheres, as at a hundred meters",
              "One atmosphere, the same as at the surface"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence with 'eight thousand meters'.",
            "skill": "Finding details"
          },
          {
            "q": "What is the hull made of, and how thick is it?",
            "choices": [
              "Titanium, nine centimeters",
              "Steel, twenty-five centimeters",
              "Acrylic, a meter",
              "Aluminum, thirty centimeters thick"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence with 'The hull is titanium'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does 'buckle' mean?",
            "choices": [
              "To fasten something tightly, the way a belt does",
              "To press into the frame",
              "To spread a push evenly",
              "To bend or collapse under force"
            ],
            "answer": 3,
            "hint": "The sentence says a sphere has 'no corner or flat side to buckle' under pressure.",
            "skill": "Word meanings"
          },
          {
            "q": "Why can the sub's crew come straight up without stopping, when a scuba diver cannot?",
            "choices": [
              "Because the crew breathes air at one atmosphere the whole dive, so no gas bubbles in their blood",
              "Because the sub rises far faster than any diver could ever swim, so the gas has no time to bubble at all",
              "Because the thick titanium hull keeps the pressure inside the sphere the same as the pressure outside it",
              "Because the crew has been breathing pressurized air the whole way down"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the second, third, fourth and fifth sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The styrofoam cup that comes back the size of a thimble",
              "How deep the trench is and how much pressure is down there",
              "Why the sub is a sphere and what it is made of",
              "The ordinary air the crew breathes all the way down"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2 says 'The sphere is the only shape that can take it', and the rest explains the hull.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Pressure math",
          "points": [
            "Atmospheres at a depth: depth ÷ 10, plus 1 for the air.",
            "A fraction of a length: '1/3 as tall' means divide by 3.",
            "Centimeters to millimeters: × 10.",
            "Two-step: find the atmospheres, then compare."
          ],
          "example": "At 300 meters: 300 ÷ 10 = 30, plus 1 = 31 atmospheres."
        },
        "problems": [
          {
            "q": "Every 10 meters adds 1 atmosphere, plus 1 for the air at the surface. How many atmospheres are there at 400 meters?",
            "answer": "41",
            "hint": "400 ÷ 10 = 40. Then add 1.",
            "skill": "Multi-step problems"
          },
          {
            "q": "At 2,000 meters, how many atmospheres of water pressure are there (not counting the air)?",
            "answer": "200",
            "hint": "2,000 ÷ 10.",
            "skill": "Dividing"
          },
          {
            "q": "The hull is 9 centimeters thick. A centimeter is 10 millimeters. How many millimeters thick is the hull?",
            "answer": "90",
            "hint": "9 × 10.",
            "skill": "Multiplying"
          },
          {
            "q": "A styrofoam cup is 12 centimeters tall on deck. It comes back 1/4 as tall. How tall is it now, in centimeters?",
            "answer": "3",
            "hint": "12 ÷ 4.",
            "skill": "Fractions"
          },
          {
            "q": "The trench floor is at 800 atmospheres and today's dive reached 200. How many more atmospheres would the sub feel at the floor?",
            "answer": "600",
            "hint": "800 − 200.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Which sentence proves it",
            "points": [
              "A supporting sentence has to settle the claim by itself. Read the claim, read your pick, and ask whether anyone could still argue.",
              "All four choices are real sentences from the plan, so being true earns nothing. Only proving counts.",
              "A sentence that states the same idea as the claim without giving any reason is not proof. Look for the one that shows why."
            ],
            "example": "Claim: the windows get safer the deeper the sub goes. 'The windows are thick acrylic' is true and proves nothing. 'They press tighter into their frames the deeper it goes' is proof."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole dive plan?",
              "choices": [
                "The push of the water becomes enormous with depth, so the sub is shaped and built to spread it while the crew inside never feel any of it.",
                "The hull is titanium and nine centimeters thick, and the windows are cones of acrylic that press tighter into their frames the deeper the sub goes.",
                "Water is the most powerful force anywhere on the planet, and every machine that goes into it has to be built stronger than anything used on land.",
                "The people inside feel the pressure rise as the sub goes down, and they have to rise slowly, stopping on the way, so the gas in the blood does not bubble."
              ],
              "answer": 0,
              "hint": "The arithmetic of depth, the shape of the hull, and three people who feel nothing. Ask what holds all three, and cross off the choice the last paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "Inside, the pressure never changes."
            },
            {
              "q": "Claim: a sphere survives because of the way it shares the push out over itself. Which sentence from the plan best supports that claim?",
              "choices": [
                "Pressure pushes in from every direction equally, and a sphere spreads that push evenly over its whole surface, with no corner or flat side to buckle.",
                "The hull is titanium, a metal as strong as steel but lighter, nine centimeters thick, and the windows are cones of thick acrylic that press tighter into their frames the deeper the sub goes.",
                "Every ten meters of depth adds another atmosphere of pressure, so at ten meters down there are two atmospheres pressing on the sub, and at a hundred meters there are eleven.",
                "That is the weight of three cars pressing on every square inch of the hull."
              ],
              "answer": 0,
              "hint": "Two of these are about how strong the hull is or how hard the water pushes, not about the shape. Find the sentence that explains how the sharing happens.",
              "skill": "Finding details",
              "evidence": "Pressure pushes in from every direction equally, and a sphere spreads that push evenly over its whole surface, with no corner or flat side to buckle."
            },
            {
              "q": "Why does the plan mention a styrofoam cup tied to the outside of the frame?",
              "choices": [
                "It explains what the frame around the sphere is for.",
                "It compares styrofoam with titanium as a material for hulls.",
                "It describes a souvenir the crew hand out on the surface once the dive is over, so everybody on the ship has something to take home.",
                "It gives one small object anybody can picture, so a number like eight hundred atmospheres turns into something you can see."
              ],
              "answer": 3,
              "hint": "The paragraph has already given you the numbers. Ask what the cup adds that a number cannot, and why every crew bothers to bring one.",
              "skill": "Author's purpose and structure",
              "evidence": "A styrofoam cup tied to the outside of the frame comes back up the size of a thimble, crushed by the water, and every crew brings one down to prove it."
            },
            {
              "q": "The plan says a sphere has 'no corner or flat side to buckle'. What does buckle mean as it is used here?",
              "choices": [
                "Bend and give way under the push",
                "Fasten shut with a metal clasp, like a belt",
                "Crack into separate pieces",
                "Bulge outward when the metal is heated"
              ],
              "answer": 0,
              "hint": "The word has a second life on a belt, and that is the trap. Read the first half of the same sentence, about a push spread evenly, and ask what happens where it is not spread.",
              "skill": "Word meanings",
              "evidence": "Pressure pushes in from every direction equally, and a sphere spreads that push evenly over its whole surface, with no corner or flat side to buckle."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why eight hundred atmospheres outside is not eight hundred atmospheres inside. Why is it not?",
              "choices": [
                "The pressure falls again once the sub is below six thousand meters, so the deepest part of the dive is the easiest part for the sphere and its air.",
                "The crew's air is pumped down from the ship through a hose as they descend, which keeps the air inside the sphere as heavy as the water outside.",
                "The sphere is sealed at the surface with ordinary air and the hull holds the water's push out, so the air inside stays at one atmosphere.",
                "The titanium hull lets the pressure through a little at a time, so the air inside the sphere grows slowly heavier over the hours of the dive."
              ],
              "answer": 2,
              "hint": "Paragraph one gives you the number pressing on the outside. The last paragraph tells you when the air inside was put there and what it has done since. Compare the two.",
              "skill": "Reading between the lines",
              "evidence": "The sphere is sealed at the surface with plain air. The three people inside breathe it at one atmosphere all the way to the bottom and back."
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
              "q": "The pilot counts 3 dives with 7 gauges in each. How many gauges is that?",
              "answer": "21",
              "hint": "3 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "21 gauges are shared equally among 3 dives. How many gauges in each dive?",
              "answer": "7",
              "hint": "How many 3s make 21?",
              "skill": "Dividing"
            },
            {
              "q": "The pilot counted 156 fish, then 72 more, then 46 more. How many fish in all?",
              "answer": "274",
              "hint": "156 + 72 first. Then add 46.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The pilot finished 2/6 of the day's work before the break and 1/6 after. What fraction is done? (write a fraction)",
              "answer": "3/6",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "There were 600 sample bags at the start. 248 have been used. How many are left?",
              "answer": "352",
              "hint": "600 − 248.",
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
              "q": "The sub's battery holds 4 1/2 hours of power. Each dive to the vents takes 3/4 of an hour. How many dives can the pilot make on one charge?",
              "answer": "6",
              "hint": "Make 4 1/2 an improper fraction, 9/2. Then multiply by the flip of 3/4: 9/2 × 4/3.",
              "skill": "Fractions"
            },
            {
              "q": "Of 80 sample bags, 50% are set aside. How many is that?",
              "answer": "40",
              "hint": "50% of 80: 50% is 50/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The sample rack holds 5 bags beside every 4 jars. With 28 jars on the rack, how many bags are there?",
              "answer": "35",
              "hint": "28 ÷ 4 = 7 groups. Each group has 5 bags.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot works out 7 × (7 − 4) + 4. What is it?",
              "answer": "25",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 224 = 750",
              "answer": "526",
              "hint": "Subtract 224 from both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total shared out: 21 hours for 6 jobs is 21 ÷ 6 = 3.5 hours a job.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "5x + 4 = 39, so 5x = 35, so x = 7."
          },
          "problems": [
            {
              "q": "20 water samples needed 15 minutes altogether. How many minutes is that for one sample?",
              "answer": "0.75",
              "hint": "A rate is the total shared out: 15 ÷ 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot counted 320 shrimp on the first pass. On the second pass the number had fallen by 20%. How many shrimp is that?",
              "answer": "256",
              "hint": "20% of 320 is 64. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ship's water tank drops 14 liters every hour for 8 hours. What is the total change? (Write a drop as a negative number.)",
              "answer": "-112",
              "accept": [
                "−112"
              ],
              "hint": "8 hours of −14 each: 8 × (−14). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 2x + 11 = 27",
              "answer": "8",
              "hint": "Take 11 off both sides first, then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "A round cover is 20 centimeters across. Using 3.14 for pi, how many centimeters is it around the edge?",
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
              "A square root undoes squaring. If a square has area 25, its side is 5.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start at 11 and add 6 each hour: after 2 hours, y = 6 × 2 + 11 = 23."
          },
          "problems": [
            {
              "q": "The pilot has logged 10 animals and logs 4 more every hour. After 3 hours, how many animals are logged?",
              "answer": "22",
              "hint": "This is the straight-line rule y = mx + b: 4 × 3 + 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 49 square meters. How long is one side, in meters?",
              "answer": "7",
              "hint": "A square's area is side × side. What number times itself makes 49?",
              "skill": "Powers and roots"
            },
            {
              "q": "The pilot runs a cable from the top of an 8-meter post to a point 15 meters away on the seafloor. How long is the cable, in meters?",
              "answer": "17",
              "hint": "Right triangle: a² + b² = c². 8² + 15² = 64 + 225 = 289. The cable is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 10x + 5 = 4x + 29",
              "answer": "4",
              "hint": "Take 4x off both sides to get 6x + 5 = 29, then take 5 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 meters and is 6 meters deep. Using 3.14 for pi, what is its volume in cubic meters? (volume = pi × radius × radius × depth)",
              "answer": "1884",
              "hint": "3.14 × 10 × 10 = 314, then × 6.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Use the rule",
          "points": [
            "When the plan gives a rule, the orders may ask you to apply it.",
            "Do each step and write it down."
          ],
          "example": "'One atmosphere per ten meters' is a rule you can multiply with."
        },
        "skill": "Following directions",
        "steps": [
          "Write a depth of 300 meters.",
          "Every 10 meters of depth adds one atmosphere. Divide the 300 by 10.",
          "Add the 9 centimeters of titanium in the hull.",
          "Step 3 belongs to the hull, not to the water. Take the number from step 2 again and add 1 for the atmosphere of air at the surface instead.",
          "Multiply by the number of people in the sphere: 3. Type the result."
        ],
        "prompt": "Your answer:",
        "answer": "93",
        "hint": "Step 4 replaces what step 3 added. Take your step 2 number, add the surface atmosphere, then go on to step 5."
      }
    },
    {
      "id": "trench-3",
      "title": "Living Light",
      "recon": {
        "lesson": {
          "title": "Why animals do what they do",
          "points": [
            "When a plan gives three reasons for something, a question may ask for one. Any of the three counts only if the choices match the plan.",
            "A long word is defined the first time it is used. Find that sentence.",
            "A 'why' question about the pilot's choice wants the reason in the plan."
          ],
          "example": "'Birds sing to call a mate, to warn of a hawk, or to claim a tree.' Three reasons."
        },
        "title": "Dive Plan: Lights Off",
        "passage": [
          "At fifteen hundred meters the pilot switches off every light on the sub and waits. For a minute there is nothing. Then the dark begins to sparkle. Tiny blue flashes drift past the windows. A jellyfish pulses with a ring of light. Something long and thin lights up along its whole length like a string of beads, then goes dark again. Most of the animals that live in the deep sea make their own light. It is called bioluminescence, living light, made by a chemical reaction inside the animal's body with almost no heat.",
          "The light has jobs. Some animals flash to find a mate in the dark. Some hang a glowing lure in front of their mouths and eat whatever swims up to look, which is what the anglerfish does with the light on the stalk above its head. Some squirt a cloud of glowing liquid and escape behind it, the way a squid squirts ink. And some fish have lights on their bellies so that, seen from below against the faint blue of the surface, they have no shadow and cannot be seen at all.",
          "Nearly all of the light is blue, because blue is the color that travels farthest through water. Red light is gone within a few meters of the surface, which is why many deep-sea animals are red: in a world with no red light, a red animal is invisible. The pilot keeps the lights off for twenty minutes. All that time, the pilot counts the flashes through the front window for the log. The count tonight is two hundred and forty. Then the lights go back on, the animals vanish, and the sub goes down."
        ],
        "questions": [
          {
            "q": "What is bioluminescence?",
            "choices": [
              "Living light made by a chemical reaction inside an animal's body",
              "Light from the sub's outside lamps, switched on at two hundred meters",
              "Sunlight reaching the deep",
              "Heat given off by an animal's body"
            ],
            "answer": 0,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What does the anglerfish do with its light?",
            "choices": [
              "It finds a mate",
              "It squirts a cloud of glowing liquid and escapes behind it, the way a squid does",
              "It shines on its belly so that it casts no shadow from below",
              "It hangs a glowing lure in front of its mouth and eats what comes to look"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'anglerfish'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'lure'?",
            "choices": [
              "A flash in the dark",
              "Something used to attract prey",
              "A light on the belly that hides an animal's shadow",
              "A cloud of glowing liquid squirted to escape"
            ],
            "answer": 1,
            "hint": "The sentence says the animal eats 'whatever swims up to look' at the lure.",
            "skill": "Word meanings"
          },
          {
            "q": "Why are many deep-sea animals red?",
            "choices": [
              "Because red is the color of the light the animals make",
              "Because there is no red light in the deep, so a red animal cannot be seen",
              "Because the food they eat down there is red, and the color passes into their skin",
              "Because the sub's lights are red, and red is the color that travels farthest through water"
            ],
            "answer": 1,
            "hint": "Paragraph 3, the second sentence.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The reason nearly all of the light in the deep sea is blue",
              "The different jobs that living light does for animals",
              "How the pilot counts the flashes through the front window for the log",
              "The jellyfish that pulses past the window with a ring of light"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 2 is 'The light has jobs', and each sentence after it gives one.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Flash math",
          "points": [
            "Flashes over minutes: divide for flashes a minute.",
            "Flashes a minute times a longer time: multiply.",
            "Fraction of the flashes: divide by the bottom, multiply by the top.",
            "Subtracting decimals: line up the points. 4.1 − 2.55 is 4.10 − 2.55 = 1.55."
          ],
          "example": "150 flashes in 10 minutes is 150 ÷ 10 = 15 a minute."
        },
        "problems": [
          {
            "q": "The pilot counted 240 flashes in 20 minutes. How many flashes a minute is that?",
            "answer": "12",
            "hint": "240 ÷ 20.",
            "skill": "Dividing"
          },
          {
            "q": "At 12 flashes a minute, how many flashes would there be in an hour?",
            "answer": "720",
            "hint": "12 × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "Of the 240 flashes, 5/6 were blue. How many blue flashes is that?",
            "answer": "200",
            "hint": "240 ÷ 6 = 40, then 40 × 5.",
            "skill": "Fractions"
          },
          {
            "q": "A glowing jellyfish is 2.35 inches long and a glowing shrimp is 1.6 inches long. How much longer is the jellyfish? (write a decimal)",
            "answer": "0.75",
            "hint": "Line up the points: 2.35 − 1.60.",
            "skill": "Decimals"
          },
          {
            "q": "The pilot turns the lights off 3 times in the dive, 20 minutes each time. How many minutes in the dark is that?",
            "answer": "60",
            "hint": "3 × 20.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "How this one is built",
            "points": [
              "Paragraphs come in shapes: a claim and its examples, a cause and its effects, two cases compared, or steps in order.",
              "Look at how the sentences sit together, not only at what they are about. Three sentences that all begin the same way are a list of examples.",
              "Naming the shape is not retelling the paragraph. A choice that only repeats the content has named nothing."
            ],
            "example": "'Some animals hide. Some animals run. Some animals fight.' Same opening three times. That paragraph is a list of examples of one idea, whatever the animals happen to be."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole dive plan?",
              "choices": [
                "In a place with no sunlight most animals make their own light, and each one is using it for a particular job.",
                "The pilot counted two hundred and forty flashes through the front window and wrote that number into the log for the night.",
                "The ocean is full of creatures nobody has ever given a name.",
                "Deep-sea animals make their light from the heat of their own bodies."
              ],
              "answer": 0,
              "hint": "The dark that sparkles, the list of jobs, and the color almost all of it is. Ask what all three are about, and cross off the choice the first paragraph denies in a few words.",
              "skill": "Central idea and evidence",
              "evidence": "It is called bioluminescence, living light, made by a chemical reaction inside the animal's body with almost no heat."
            },
            {
              "q": "Claim: some animals use their light to avoid being seen. Which sentence from the plan best supports that claim?",
              "choices": [
                "Some hang a glowing lure in front of their mouths and eat whatever swims up to look, which is what the anglerfish does with the light on the stalk above its head.",
                "Some animals flash to find a mate in the dark.",
                "The light has jobs.",
                "And some fish have lights on their bellies so that, seen from below against the faint blue of the surface, they have no shadow and cannot be seen at all."
              ],
              "answer": 3,
              "hint": "Two of these are about being noticed on purpose, which is the opposite of the claim. Find the sentence that ends with something not being seen.",
              "skill": "Finding details",
              "evidence": "And some fish have lights on their bellies so that, seen from below against the faint blue of the surface, they have no shadow and cannot be seen at all."
            },
            {
              "q": "How is the second paragraph organized?",
              "choices": [
                "It follows a single animal through one night from dusk to dawn.",
                "It states that the light has jobs and then gives one example of each job in turn.",
                "It compares life in the deep sea with life near the surface, setting the two side by side.",
                "It explains what causes nearly all of the light down there to be blue rather than some other color."
              ],
              "answer": 1,
              "hint": "Look at how three sentences in a row begin. When a paragraph opens with a short claim and then repeats a word like some, the shape is already decided.",
              "skill": "Author's purpose and structure",
              "evidence": "The light has jobs."
            },
            {
              "q": "The plan says some animals 'hang a glowing lure in front of their mouths'. What does lure mean as it is used here?",
              "choices": [
                "A light the animal uses simply to see its own way through the dark water",
                "Something dangled on purpose to draw an animal in close",
                "A warning that keeps other animals away",
                "A trail of light the animal leaves behind it in the water as it swims"
              ],
              "answer": 1,
              "hint": "The rest of the sentence tells you what happens to whatever swims up to look. Work backward from that ending to what the light was for.",
              "skill": "Word meanings",
              "evidence": "Some hang a glowing lure in front of their mouths and eat whatever swims up to look, which is what the anglerfish does with the light on the stalk above its head."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why almost every flash the pilot counted was blue. Why was it?",
              "choices": [
                "The sub's own lights tint everything outside the window blue, so every flash the pilot counted came back the same color.",
                "The animals make the light themselves, and blue is the color that carries furthest through water.",
                "Blue is the only color that survives the cold at that depth, because every other color fades out of water as it gets near freezing.",
                "Red light is made only by animals living near the surface, so none of it ever reaches as far down as the window the pilot counted through."
              ],
              "answer": 1,
              "hint": "Paragraph one tells you where the light down there comes from. Paragraph three tells you which color gets furthest through water. Put the maker next to the choice of color.",
              "skill": "Reading between the lines",
              "evidence": "Nearly all of the light is blue, because blue is the color that travels farthest through water."
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
            "example": "5 × 4 = 20, so 20 shared into 5 equal groups is 4 each."
          },
          "problems": [
            {
              "q": "The pilot counted 5 flashes yesterday and three times as many today. How many flashes today?",
              "answer": "15",
              "hint": "Three times 5: 5 + 5 + 5.",
              "skill": "Multiplying"
            },
            {
              "q": "The pilot sees 5 flashes on each dive, 15 flashes in all. How many dives is that?",
              "answer": "3",
              "hint": "How many 5s make 15?",
              "skill": "Dividing"
            },
            {
              "q": "The pilot starts with 245 sample jars and uses 86. How many are left?",
              "answer": "159",
              "hint": "245 − 86.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "6/8 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "2/8",
              "hint": "The whole job is 8/8. Take 6/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square mat is 3 squares on each side. How many squares is that?",
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
            "example": "3 × (8 − 1) + 8 = 29."
          },
          "problems": [
            {
              "q": "The pilot has 13.75 hours. Each dive takes 1.25 hours. How many dives is that enough for?",
              "answer": "11",
              "hint": "Move both points 2 places to the right: 1375 ÷ 125.",
              "skill": "Decimals"
            },
            {
              "q": "60 of the 80 animals seen give off light. What percent is that? (write just the number)",
              "answer": "75",
              "accept": [
                "75%"
              ],
              "hint": "60 out of 80, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 1 flash there are 3 animals. There are 6 animals. How many flashes?",
              "answer": "2",
              "hint": "6 ÷ 3 = 2 groups. Each group has 1 flash.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot works out 8 + 3 × 8. What is it?",
              "answer": "32",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 900 − x = 361",
              "answer": "539",
              "hint": "x is what is left when 361 is taken off 900.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A rate times a count: if one job takes 2.75 hours, 4 jobs take 4 × 2.75 = 11 hours.",
              "Percent change: the change ÷ the starting number, then × 100.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: get the x part on its own first, then undo the multiplying."
            ],
            "example": "50 − 4x = 14, so 4x = 50 − 14 = 36, so x = 9."
          },
          "problems": [
            {
              "q": "One water sample needs 1.5 minutes. How many minutes do 12 samples need?",
              "answer": "18",
              "hint": "12 × 1.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot counted 240 animals on the first pass and 288 on the second. By what percent did the count change? (write just the number)",
              "answer": "20",
              "accept": [
                "20%"
              ],
              "hint": "The change is 48. 48 out of 240, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The sub is 16 meters below its target depth, written −16. How many meters must it rise to reach the target?",
              "answer": "16",
              "hint": "From −16 up to 0.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 40 − 2x = 30",
              "answer": "5",
              "hint": "Move 2x to the right and 30 to the left: 2x = 10.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 cm stands for 8 meters. The marked length is really 96 meters long. How many cm is it on the plan?",
              "answer": "12",
              "hint": "96 ÷ 8.",
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
            "example": "Start with 40 and use 6 an hour: after 3 hours, 40 − 6 × 3 = 22 are left."
          },
          "problems": [
            {
              "q": "The pilot starts with 69 sample jars and uses 9 every hour. How many are left after 5 hours?",
              "answer": "24",
              "hint": "9 × 5 = 45 used, taken off 69.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 5 small cubes along every edge. How many small cubes make it up?",
              "answer": "125",
              "hint": "5³ means 5 × 5 × 5.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-meter cable runs from the top of a post to a point 15 meters away on the ground. How tall is the post, in meters?",
              "answer": "8",
              "hint": "a² = c² − b² = 289 − 225 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x = 2x + 4",
              "answer": "2",
              "hint": "Take 2x off both sides: 2x = 4. Then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "The pilot counts 90,000 animals. Written as 9 × 10 to a power, what is the power?",
              "answer": "4",
              "hint": "Count the zeros after 9.",
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
            "Count carefully, then calculate."
          ],
          "example": "'Count only the animals that glow' means skip the rest."
        },
        "skill": "Following directions",
        "steps": [
          "With every light off for 20 minutes, the pilot counted 240 flashes through the front window.",
          "Divide the 240 flashes by the 20 minutes to get the flashes in a single minute. Write that down.",
          "Now work a second number. The plan names three animals that make their own light — the jellyfish, the anglerfish and the fish with lights on their bellies. Multiply those 3 by the 20 minutes the lights were off.",
          "One of those two numbers belongs in the log and one does not.",
          "The log keeps flashes a minute, so type your step 2 number and not your step 3 number."
        ],
        "prompt": "Your answer:",
        "answer": "12",
        "hint": "Step 2 and step 3 are two different counts. Step 5 says which one the log keeps, so read it first."
      }
    },
    {
      "id": "trench-4",
      "title": "The Hot Springs",
      "recon": {
        "lesson": {
          "title": "Something that should not be possible",
          "points": [
            "When a plan says something is surprising, the next sentences explain how it works. Read them in order.",
            "Temperatures are details. Read the number and the word 'degrees'.",
            "'What do they eat' is a detail question with a specific answer in the plan."
          ],
          "example": "'No roads, yet the island gets mail every day.' How? Read on."
        },
        "title": "Dive Plan: Chimneys on the Sea Floor",
        "passage": [
          "At three thousand meters, on a ridge where the sea floor is splitting apart, the sub's lights find chimneys. They are made of black rock, some as tall as a house. Out of their tops pours water so hot it would melt the sub's plastic if the pilot went close: nearly four hundred degrees Celsius, kept from boiling only by the pressure. The water is black with dissolved minerals, and the crews call the chimneys black smokers. They are hydrothermal vents, hot springs at the bottom of the sea. Water seeped into cracks in the crust. The rock below heated it and pushed it back out.",
          "The surprise is that the vents are crowded with life. Everywhere else in the deep, animals live on the thin snow of scraps falling from the surface. Here there are tube worms two meters long in white tubes with red plumes, clams as big as dinner plates, blind white crabs, and shrimp by the thousand. All of them are packed around water that would cook them if they touched it. None of them has ever seen sunlight. None of them needs it.",
          "They live on the chemicals. Bacteria in the vent water can turn the minerals in it into food, the way a plant turns sunlight into food. The tube worms have no mouths at all: they keep the bacteria inside their bodies and let them do the eating. When the vents were found in 1977, it was the first time anyone had seen life that did not depend on the sun, and it changed what scientists think is possible on other worlds. Today the pilot uses the robot arm to bag a clam, a tube worm and a bottle of vent water. The sub stays a full arm's length from the chimney."
        ],
        "questions": [
          {
            "q": "About how hot is the water coming out of the chimneys?",
            "choices": [
              "Forty degrees, warm as bath water",
              "Nearly four hundred degrees",
              "Four degrees, like the water around it",
              "Boiling point, a hundred degrees exactly"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence with 'melt the sub's plastic'.",
            "skill": "Finding details"
          },
          {
            "q": "When were the vents discovered?",
            "choices": [
              "1977",
              "1877",
              "2007",
              "1777"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the sentence with 'were found'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what are 'hydrothermal vents'?",
            "choices": [
              "Underwater volcanoes that pour out lava onto the ridge",
              "Cold caves",
              "Beds of clams and tube worms",
              "Hot springs at the bottom of the sea"
            ],
            "answer": 3,
            "hint": "The sentence 'They are hydrothermal vents, hot springs at the bottom of the sea'.",
            "skill": "Word meanings"
          },
          {
            "q": "How do the tube worms eat, if they have no mouths?",
            "choices": [
              "Bacteria inside them turn the vent chemicals into food",
              "They do not need to eat at all",
              "The blind white crabs feed them",
              "They soak up sunlight like plants"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the second and third sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How hot the vent water is and why the pressure keeps it from boiling",
              "The robot arm",
              "The surprising crowd of animals living around the vents",
              "The year 1977"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2 says 'the vents are crowded with life', and the rest lists the animals.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Vent math",
          "points": [
            "Years since 1977: subtract from the current year.",
            "Volume of a box: length × width × height. 4 × 3 × 3 = 36 cubic feet.",
            "Tube worms in meters to centimeters: × 100.",
            "Two-step: samples per dive, then over the dives."
          ],
          "example": "From 1969 to 2026: 2026 − 1969 = 57 years."
        },
        "problems": [
          {
            "q": "The vents were found in 1977. How many years ago was that, if this year is 2026?",
            "answer": "49",
            "hint": "2026 − 1977.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The sample box on the sub's arm is 3 feet long, 2 feet wide and 2 feet tall. How many cubic feet does it hold?",
            "answer": "12",
            "hint": "Length × width × height: 3 × 2 first, then times 2.",
            "skill": "Volume"
          },
          {
            "q": "A tube worm is 2 meters long. How many centimeters is that?",
            "answer": "200",
            "hint": "2 × 100.",
            "skill": "Multiplying"
          },
          {
            "q": "The pilot bags 3 samples on each of 4 dives. How many samples is that?",
            "answer": "12",
            "hint": "3 × 4.",
            "skill": "Multiplying"
          },
          {
            "q": "A chimney is 12 meters tall. The sub hovers off to one side, 2 meters higher than the chimney's top. How far above the sea floor is the sub?",
            "answer": "14",
            "hint": "12 + 2.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The word in its own sentence",
            "points": [
              "A word is doing one job in one sentence. Work out that job, not the entry it would get in a dictionary.",
              "Names people invent for things, like the ones crews give, usually describe what the thing looks like or does. Ask which.",
              "Put your pick back into the sentence. If the sentence now says something the plan never said, it is the wrong pick."
            ],
            "example": "'They call it the kettle.' Nobody is making tea. The name is telling you the water there boils and moves the way water in a kettle does."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole dive plan?",
              "choices": [
                "The chimneys are made of black rock, some of them as tall as a house, and the water pouring out of their tops is nearly four hundred degrees.",
                "A place that ought to be empty is crowded, because the life there runs on chemicals out of the sea floor instead of on sunlight.",
                "The sea floor is the most dangerous place a person can visit, and nothing that lives down there could survive anywhere else in the world.",
                "The animals at the vents live on scraps falling from the surface, the same thin snow of dead plankton that feeds the rest of the deep sea."
              ],
              "answer": 1,
              "hint": "Hot water out of the rock, a crowd of animals, and bacteria doing the eating. Ask what all three build to, and cross off the choice the second paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "The surprise is that the vents are crowded with life."
            },
            {
              "q": "Claim: the tube worms do not feed themselves in any ordinary sense. Which sentence from the plan best supports that claim?",
              "choices": [
                "The tube worms have no mouths at all: they keep the bacteria inside their bodies and let them do the eating.",
                "Here there are tube worms two meters long in white tubes with red plumes, clams as big as dinner plates, blind white crabs, and shrimp by the thousand.",
                "Everywhere else in the deep, animals live on the thin snow of scraps falling from the surface.",
                "When the vents were found in 1977, it was the first time anyone had seen life that did not depend on the sun, and it changed what scientists think is possible on other worlds."
              ],
              "answer": 0,
              "hint": "Saying what they live on is not saying how they take it in. Find the sentence that mentions a mouth, or the lack of one.",
              "skill": "Finding details",
              "evidence": "The tube worms have no mouths at all: they keep the bacteria inside their bodies and let them do the eating."
            },
            {
              "q": "Why does the second paragraph stop to remind you what animals live on everywhere else in the deep?",
              "choices": [
                "It explains how the thin snow of scraps comes down from the surface and how far it has to fall before an animal in the deep can eat it.",
                "It lists the animals at the vent in order of size.",
                "It compares two different vents on the same ridge.",
                "It sets the ordinary case against this one, so that a crowd of animals here reads as the surprise the paragraph says it is."
              ],
              "answer": 3,
              "hint": "The sentence is about somewhere the sub is not. Ask why a writer would leave the scene for one sentence, and what the sentence after it gains from that.",
              "skill": "Author's purpose and structure",
              "evidence": "Everywhere else in the deep, animals live on the thin snow of scraps falling from the surface."
            },
            {
              "q": "The crews call the chimneys 'black smokers'. What does that name tell you?",
              "choices": [
                "The water pouring out of them is dark with minerals and pours like smoke",
                "The chimneys are burning somewhere down inside the rock",
                "The rock the chimneys are built of has been charred black",
                "The water leaves a black stain on the outside of the sub"
              ],
              "answer": 0,
              "hint": "Nothing burns underwater. The sentence right before the name tells you what color the water is and why. Use that half, and use the shape of a chimney for the rest.",
              "skill": "Word meanings",
              "evidence": "The water is black with dissolved minerals, and the crews call the chimneys black smokers."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the discovery in 1977 changed what scientists think about other worlds. Why did it?",
              "choices": [
                "It showed that water can stay liquid at nearly four hundred degrees when the pressure on it is great enough to keep it from boiling.",
                "It showed that a tube worm can grow two meters long without a mouth.",
                "It showed life running on heat and chemicals that come out of a planet itself, which needs no sun at all.",
                "It showed that the sea floor is splitting apart in certain places."
              ],
              "answer": 2,
              "hint": "Paragraph one says where the heat in the vent water comes from. The last paragraph says what the animals live on and why that was a first. Join the source to the surprise.",
              "skill": "Reading between the lines",
              "evidence": "When the vents were found in 1977, it was the first time anyone had seen life that did not depend on the sun, and it changed what scientists think is possible on other worlds."
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
              "Some added, some taken away: do the adding first, then the taking away.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "2 × 7 = 14, so 14 shared into 2 equal groups is 7 each."
          },
          "problems": [
            {
              "q": "The pilot lays the samples out in 2 rows of 6. How many samples is that?",
              "answer": "12",
              "hint": "2 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "42 samples are set out in 7 equal rows. How many samples are in each row?",
              "answer": "6",
              "hint": "42 split into 7 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 144 samples, then 168 more are added and 49 are taken off. What does the log show now?",
              "answer": "263",
              "hint": "Add 144 and 168 first, then take 49 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 3/6 + 2/6 (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom. 3 + 2 on top.",
              "skill": "Fractions"
            },
            {
              "q": "The plan calls for 600 temperature readings. 300 are done and 49 more are under way. How many have not been started?",
              "answer": "251",
              "hint": "Take 300 off 600, then take 49 off that.",
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
            "example": "7 × (7 − 2) + 13 = 48."
          },
          "problems": [
            {
              "q": "The oxygen supply is 9/10 full. Each dive uses 3/10 of a full supply. How many dives can the pilot make?",
              "answer": "3",
              "hint": "Flip the second fraction and multiply: 9/10 × 10/3. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "75% of the samples counted is 45. How many were counted in all?",
              "answer": "60",
              "hint": "45 is 75 hundredths of the whole: 45 ÷ 75 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot counts 18 vents and 30 tube worms. In its simplest form, what is the ratio of vents to tube worms? (write it like 2:3)",
              "answer": "3:5",
              "accept": [
                "3 to 5"
              ],
              "hint": "Divide both by 6.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot works out (7 + 2) × 7. What is it?",
              "answer": "63",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 3x = 738",
              "answer": "246",
              "hint": "Divide both sides by 3.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: the time you have ÷ the time each one takes. 9 hours at 1.5 hours each is 9 ÷ 1.5 = 6.",
              "Working backward: if a count fell by a tenth, the new count is 90% of the old one, so divide by 0.9 to get back to the start.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "3(x + 7) = 33, so x + 7 = 11, so x = 4."
          },
          "problems": [
            {
              "q": "The pilot has 50 minutes to spend and each water sample takes 2.5 minutes. How many samples is that enough for?",
              "answer": "20",
              "hint": "50 ÷ 2.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The water temperature fell by 25% to 45 degrees. What was it before?",
              "answer": "60",
              "hint": "45 is 75% of the old temperature.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 7 hours the ship's water tank dropped 91 liters in all, the same amount each hour. What was the change each hour? (Write a drop as a negative number.)",
              "answer": "-13",
              "accept": [
                "−13"
              ],
              "hint": "Share −91 into 7 equal parts: −91 ÷ 7. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 9) × 2 = 28",
              "answer": "5",
              "hint": "Divide both sides by 2 first, then take 9 off.",
              "skill": "Equations"
            },
            {
              "q": "A round cover has a radius of 20 centimeters. Using 3.14 for pi, what is its area in square centimeters?",
              "answer": "1256",
              "hint": "Area = 3.14 × radius × radius: 3.14 × 20 × 20.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A cube root undoes cubing: 4 × 4 × 4 = 64, so the cube root of 64 is 4.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first: 6x − 2x is 4x. Then undo the plain number."
            ],
            "example": "y = 6x + 7 when x = 3: 6 × 3 + 7 = 25."
          },
          "problems": [
            {
              "q": "The water temperature, in degrees, follows the rule y = 8x + 24, where x is the hour. What is y when x = 4?",
              "answer": "56",
              "hint": "Put 4 in for x: 8 × 4 + 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube-shaped tank has a volume of 2,744 cubic meters. How long is one edge, in meters?",
              "answer": "14",
              "hint": "What number times itself, times itself again, makes 2,744?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-meter cable reaches the top of an 8-meter post. How far is the foot of the cable from the base, in meters?",
              "answer": "15",
              "hint": "b² = c² − a² = 289 − 64 = 225. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x + 1 − 3x = 51",
              "answer": "10",
              "hint": "Collect the x's first: 5x + 1 = 51.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 meters and is 3 meters deep. Using 3.14 for pi, what is its volume in cubic meters?",
              "answer": "942",
              "hint": "Volume = 3.14 × radius × radius × depth: 3.14 × 10 × 10 × 3.",
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
            "Check the plan before you type the number."
          ],
          "example": "'Type the total, unless the sub touched the chimney, in which case type TOO CLOSE.'"
        },
        "skill": "Following directions",
        "steps": [
          "Write the depth of the vents in thousands of meters: 3.",
          "Multiply by the number of samples the pilot bagged today — a clam, a tube worm and a bottle of vent water: 3.",
          "Add the length of a tube worm in meters: 2.",
          "Multiply by the temperature of the vent water in hundreds of degrees: 4.",
          "Type the result, unless the plan says the tube worms have no mouths at all, in which case type WORMS instead."
        ],
        "prompt": "Your answer:",
        "answer": "WORMS",
        "accept": [
          "worms",
          "Worms",
          "worms.",
          "WORMS."
        ],
        "hint": "Work steps 2, 3 and 4 in order from the 3. Then step 5 asks about tube worms — paragraph 3 says whether they have mouths."
      }
    },
    {
      "id": "trench-5",
      "title": "Trench Floor",
      "recon": {
        "lesson": {
          "title": "Putting the dives together",
          "points": [
            "The last plan looks back over all five dives. Questions will ask for a time, a name, a word and a reason.",
            "Look for 'first', 'then', 'by the fourth dive', 'at last'.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'The climb takes two hours.' Asked how long? Give the exact time the plan says: two hours."
        },
        "title": "Dive Plan: Eight Thousand Meters",
        "passage": [
          "The last dive goes to the floor of the trench, eight thousand meters down, and it takes four hours just to get there. The pilot watches the depth gauge tick past every number from the week. Five hundred was where the test dive turned around; fifteen hundred, where the lights went off and the dark sparkled; two thousand, where the hull began to tick; three thousand, the black smokers. Below that is new. Below six thousand meters the water belongs to the trenches alone, and almost nobody has been there.",
          "The floor, when it comes, is soft gray mud, flat as a table, and it is not empty. A pale sea cucumber the length of a forearm plows slowly through it. A small pink fish with a wide head, a snailfish, drifts past the window, the kind of fish filmed deeper than any other. The pilot lands the sub on its skids, and the mud puffs up in a slow cloud that takes ten minutes to settle. Eight hundred atmospheres press on the sphere. Inside, the three people eat sandwiches.",
          "The sub cannot stay long. The batteries have a limit, the cold creeps into the sphere, and the ascent takes as long as the descent. The pilot plants a small flag on a weighted stake, takes a scoop of mud for the lab, and drops the steel weights. The sub begins to rise, four hours back to the light. On the surface the ship's crew is waiting on deck. The log gets its last line: five dives, one trench, all hands, and a piece of mud from the bottom of the world."
        ],
        "questions": [
          {
            "q": "How long does it take to reach the trench floor?",
            "choices": [
              "Fifteen minutes",
              "Four hours",
              "A day",
              "A week"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What kind of fish has been filmed deeper than any other, according to the plan?",
            "choices": [
              "A snailfish",
              "A giant anglerfish",
              "A shark",
              "An eel"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence with 'wide head'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is the 'ascent'?",
            "choices": [
              "The way down",
              "The trip back up",
              "The mud",
              "The flag"
            ],
            "answer": 1,
            "hint": "The sentence says 'the ascent takes as long as the descent', and the descent was the trip down.",
            "skill": "Word meanings"
          },
          {
            "q": "Why can the sub not stay long on the floor?",
            "choices": [
              "Because the batteries have a limit, the cold creeps in, and the trip up takes hours",
              "Because the mud that the sub lands on takes a full ten minutes to settle and hides the windows",
              "Because eight hundred atmospheres of pressure would begin to crush the sphere if the sub stayed",
              "Because the mud is soft"
            ],
            "answer": 0,
            "hint": "The first two sentences of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The descent past every depth from the week's dives into water almost nobody has visited",
              "The sandwiches that the three people eat while eight hundred atmospheres press on the sphere",
              "The pale sea cucumber and the small pink snailfish that live down on the floor of the trench",
              "The ship's crew waiting up on the deck and the last line that gets written into the dive log"
            ],
            "answer": 0,
            "hint": "Paragraph 1 follows the gauge down through each earlier dive's depth.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Trench math",
          "points": [
            "Meters ÷ hours = meters an hour.",
            "Down plus bottom plus up: total hours.",
            "Different bottoms: make them the same first. 1/3 + 1/6 = 2/6 + 1/6 = 3/6.",
            "Times as long: multiply. 4 times as long as 5 minutes is 20 minutes."
          ],
          "example": "600 meters in 3 hours is 600 ÷ 3 = 200 meters an hour."
        },
        "problems": [
          {
            "q": "The sub sinks 8,000 meters in 4 hours. How many meters an hour is that?",
            "answer": "2000",
            "accept": [
              "2,000"
            ],
            "hint": "8,000 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "Four hours down, 2 hours on the bottom, 4 hours up. How many hours is the whole dive?",
            "answer": "10",
            "hint": "4 + 2 + 4.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "On the bottom, the pilot spent 1/2 of the time taking pictures and 1/4 of it scooping mud. How much of the bottom time is that? (write a fraction)",
            "answer": "3/4",
            "hint": "Make the bottoms the same: 1/2 is 2/4. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "Almost nobody has been below 6,000 meters. The trench floor is at 8,000. How many meters of today's dive were below 6,000?",
            "answer": "2000",
            "accept": [
              "2,000"
            ],
            "hint": "8,000 − 6,000.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The mud takes 10 minutes to settle. The sub waits 3 times that long before taking the scoop. How many minutes does it wait?",
            "answer": "30",
            "hint": "3 × 10.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Two paragraphs, one answer",
            "points": [
              "The last question is built so that no single paragraph answers it. Plan on using two.",
              "State a fact from one paragraph, then a fact from another, then say 'so'. What follows 'so' is your answer.",
              "If a choice needs something the plan never mentions, it is out, however sensible it sounds by itself."
            ],
            "example": "Paragraph one: the shop opens at nine. Paragraph three: the baker starts at five. So the bread is made before anyone comes in. Neither paragraph says that on its own."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole dive plan?",
              "choices": [
                "A pale sea cucumber about the length of a forearm plows through the soft gray mud on the floor, and a small pink fish with a wide head drifts past the window.",
                "The last dive goes past everything the week has covered into water almost nobody has visited, and even there the sub can stay only a short while.",
                "Exploring is the most worthwhile thing that people do.",
                "The floor of the trench turns out to be completely empty."
              ],
              "answer": 1,
              "hint": "The gauge ticking past the week, a floor that is not empty, and a list of things that end the visit. Ask what covers all three, and cross off the choice the middle paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "Below six thousand meters the water belongs to the trenches alone, and almost nobody has been there."
            },
            {
              "q": "Claim: three separate things put a limit on how long the sub can stay down there. Which sentence from the plan best supports that claim?",
              "choices": [
                "The batteries have a limit, the cold creeps into the sphere, and the ascent takes as long as the descent.",
                "The pilot plants a small flag on a weighted stake, takes a scoop of mud for the lab, and drops the steel weights.",
                "The sub cannot stay long.",
                "Eight hundred atmospheres press on the sphere."
              ],
              "answer": 0,
              "hint": "One of these says the sub cannot stay long without giving a single reason, which is the claim again. Count the reasons in each choice.",
              "skill": "Finding details",
              "evidence": "The batteries have a limit, the cold creeps into the sphere, and the ascent takes as long as the descent."
            },
            {
              "q": "Why does the first paragraph list the depths from earlier in the week as the gauge ticks past them?",
              "choices": [
                "It explains how a depth gauge is built and read.",
                "It sums up the week's dives so that everything past six thousand meters reads as new.",
                "It lists the dives in the order they were originally planned.",
                "It compares this trench with other trenches in the ocean."
              ],
              "answer": 1,
              "hint": "Four short words follow the list. Read them, and ask what the list was there to set up.",
              "skill": "Author's purpose and structure",
              "evidence": "Below that is new."
            },
            {
              "q": "The plan says a sea cucumber 'plows slowly through' the mud. What does plows mean as it is used here?",
              "choices": [
                "Pushes through the mud, turning it over as it goes",
                "Swims just above the mud without ever touching the floor of the trench",
                "Digs down into the mud and stays buried there out of sight",
                "Farms the mud and stores food from it"
              ],
              "answer": 0,
              "hint": "Picture what a plow does to a field, then keep only the part that could be true of an animal the length of a forearm crossing soft mud.",
              "skill": "Word meanings",
              "evidence": "A pale sea cucumber the length of a forearm plows slowly through it."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why a dive this long leaves so little time on the floor. Why does it?",
              "choices": [
                "Four hours down and four hours back take up almost the whole dive before the batteries and the cold end what is left.",
                "The mud puffed up by the sub's skids takes ten minutes to settle before anything outside the window can be seen clearly at all.",
                "The trip back up is slower than the trip down, so the pilot has to leave the floor long before the batteries are anywhere near empty.",
                "The flag has to be planted and the scoop of mud taken before the outside lights fail, and that work fills the whole stay on the floor."
              ],
              "answer": 0,
              "hint": "Paragraph one times the way down. The last paragraph tells you how the way up compares and what else is running out. Add the two journeys together first.",
              "skill": "Reading between the lines",
              "evidence": "The batteries have a limit, the cold creeps into the sphere, and the ascent takes as long as the descent."
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
              "q": "Every dive needs 6 sample jars, and there are 5 dives. How many sample jars is that?",
              "answer": "30",
              "hint": "5 groups of 6, so 5 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "The pilot cuts 60 meters of rope into two equal pieces. How many meters long is each piece?",
              "answer": "30",
              "hint": "Half of 60.",
              "skill": "Dividing"
            },
            {
              "q": "The pilot needs 800 hours and has 157. How many more are needed?",
              "answer": "643",
              "hint": "800 − 157.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the pilot has finished 7 of them. What fraction is done? (write a fraction)",
              "answer": "7/8",
              "hint": "7 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 7 squares wide and 8 squares long. The pilot has covered 7 squares. How many squares are left to cover?",
              "answer": "49",
              "hint": "7 × 8 squares in all, then take 7 off.",
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
            "example": "3 × (12 − 5) + 8: parentheses first, 12 − 5 = 7; then 3 × 7 = 21; then add 8 to get 29."
          },
          "problems": [
            {
              "q": "The plan allows 38.5 hours. The pilot uses 15.65 hours on the first dive and 12.35 on the second. How many hours are left?",
              "answer": "10.5",
              "hint": "Add the two amounts used first, then take that from 38.5. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Of 160 hours, 25% are struck off the list. How many are left on it?",
              "answer": "120",
              "hint": "25% of 160 is 40. Take that off 160.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot shares 28 sample jars between two teams in the ratio 2 to 5. How many does the smaller share get?",
              "answer": "8",
              "hint": "2 + 5 = 7 parts. 28 ÷ 7 = 4 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot works out 3 × 7 − 4 × 2. What is it?",
              "answer": "13",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 127 + 58 = 600",
              "answer": "415",
              "hint": "Add 127 and 58 first, then take that off 600.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "Find the rate for one first: 6 jobs in 9 hours is 9 ÷ 6 = 1.5 hours each, so 10 jobs take 15 hours.",
              "Percent of a number: turn the percent into a fraction of 100, then multiply.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "9(x + 17) = 171, so x + 17 = 19, so x = 2."
          },
          "problems": [
            {
              "q": "16 water samples took 20 minutes. At the same rate, how many minutes would 28 samples take?",
              "answer": "35",
              "hint": "One sample takes 20 ÷ 16 = 1.25. Then × 28.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The mission was planned at 320 hours, and 20% more time was added. How many hours were added?",
              "answer": "64",
              "hint": "20% of 320: 20/100 × 320.",
              "skill": "Ratios and percent"
            },
            {
              "q": "One sensor sits at −13 meters and another at −25 meters. How many meters apart are they?",
              "answer": "12",
              "hint": "From −25 up to −13.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 7(x + 6) = 70",
              "answer": "4",
              "hint": "Divide both sides by 7 to get x + 6 = 10.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 4 cm stands for 80 meters. How many meters does 1 cm stand for?",
              "answer": "20",
              "hint": "80 ÷ 4.",
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
              "q": "The hours in the pilot's logbook go 20, 27, 34, 41, and on. What is the 9th number in the list?",
              "answer": "76",
              "hint": "It starts at 20 and adds 7 each step. The number you want is 8 steps on from 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (9 × 4)²?",
              "answer": "1296",
              "hint": "9 × 4 = 36 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 7 and 24 meters. How long is its longest side, in meters?",
              "answer": "25",
              "hint": "7² + 24² = 625. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x − 2x = 30",
              "answer": "5",
              "hint": "8 − 2 = 6, so 6x = 30.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 6 × 10^3 or 7 × 10^2? Write the bigger one out in full.",
              "answer": "6000",
              "hint": "6 × 10^3 is ten times 6 × 10^2, and 7 is not ten times 6.",
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
            "If the last step asks for words, numbers are wrong."
          ],
          "example": "'Type the name of the fish' means a word."
        },
        "skill": "Following directions",
        "steps": [
          "Write the depth of the trench floor in meters: 8,000.",
          "Divide by the hours the descent took: 4.",
          "Take away the atmospheres pressing on the sphere at the floor: 800.",
          "Step 3 does not count here. Pressure is not a distance, so carry your step 2 number on untouched.",
          "Divide by the minutes the mud cloud takes to settle: 10. Type the result."
        ],
        "prompt": "Your answer:",
        "answer": "200",
        "hint": "Step 4 cancels step 3 before it can happen. Your step 2 number is the one that goes into step 5."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
