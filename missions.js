// ODYSSEY — mission index. GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// This file holds every campaign's description and a stub for every patrol, so a page can list,
// count and name everything without loading a single campaign. The patrols themselves live one
// file per campaign in missions/, loaded when a player actually opens that adventure.
// RULE: nothing in this file is about the person using it. Content only.

window.BASECAMP_MISSIONS = {
  "version": 2,
  "companion": {
    "name": "Sitka",
    "forms": {
      "hare": {
        "label": "arctic hare",
        "portrait": "assets/hare-640.png",
        "avatarSrc": "assets/avatar-hare.png",
        "arrival": [
          "It's me again. Arctic hare for the ice. White all over, ears that fold flat, and I can sit still on a snowbank until you walk into me. Nobody looks twice at a hare up here; the bears look once and I am gone. The floe is moving under us. Let's find out where it is taking us.",
          "Me again. Fur on my feet and a nose that knows thin ice. I have crossed this pack more times than the ship has. Read the ice log."
        ],
        "lines": {
          "greeting": [
            "Scientist. Wind's from the north. One day.",
            "Floe's holding. Let's measure it.",
            "Bear watch is up. Let's begin."
          ],
          "legRecon": [
            "Ice log first. Read the questions, then the log. Know what you are hunting for.",
            "Log coming in. Questions before you read a word."
          ],
          "legNav": [
            "Ice math. Miles of drift, feet of thickness, degrees below. Count it right or the camp ends up in the sea.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Camp orders. Read every step before you leave the hut. The last one changes things.",
            "Orders. All of them first. Then go."
          ],
          "correct": [
            "That's it.",
            "Logged.",
            "Solid.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. On we go.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Thin ice. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the log. We keep measuring."
          ],
          "idle1": [
            "You've been standing still a while. Flag it, move on.",
            "Stuck is fine. Standing still at thirty below isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The floe is moving.",
            "Flag. Move. We come back in the hut."
          ],
          "flagged": [
            "Flagged. Next hole.",
            "Marked. Hut debrief."
          ],
          "debriefIntro": [
            "Hut. The flagged ones, with the stove going.",
            "Second pass, mittens off."
          ],
          "debriefEmpty": [
            "Nothing flagged. Clean day.",
            "No flags. Straight measurements."
          ],
          "patrolDone": [
            "Day logged. Floe still under us. Sleep.",
            "That's the day. Same ice tomorrow, somewhere else.",
            "Done. Listen to it creak."
          ],
          "summit": [
            "Five days. Two hundred miles of drift, and the camp came off in one piece.",
            "You read every log and measured every hole. That's an ice scientist."
          ]
        }
      },
      "tether": {
        "label": "EVA bot",
        "portrait": "assets/tether-640.png",
        "avatarSrc": "assets/avatar-tether.png",
        "arrival": [
          "It's me again. Spacewalk robot for the last one; the crew calls me Tether, because I am the one who never lets go. Two arms, a camera head, a body full of grip and a cable that always leads back to the hatch. Outside the station, a small robot on the truss is furniture. The array is in the cargo bay. Let's build the last thing.",
          "Me again. Tether. I have been outside more hours than any astronaut and I have never once floated away. Read the flight plan. Then clip in."
        ],
        "lines": {
          "greeting": [
            "Astronaut. Suit's pressurized. One spacewalk.",
            "Sunrise in four minutes. Let's go outside.",
            "Tether checked. Let's begin."
          ],
          "legRecon": [
            "Flight plan first. Read the questions, then the plan. Know what you are hunting for.",
            "Plan coming in. Questions before you read a word."
          ],
          "legNav": [
            "Orbit math. Minutes of daylight, watts, meters of truss. Count it right or the array points at nothing.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "EVA orders. Read every step before you open the hatch. The last one changes things.",
            "Orders. All of them first. Then egress."
          ],
          "correct": [
            "That's it.",
            "Copy.",
            "Logged.",
            "Yes.",
            "Nominal."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Continuing.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Hold. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the value. Log it and move on.",
            "Answer's in the plan. We keep going."
          ],
          "idle1": [
            "You've been on that handrail a while. Flag it, move on.",
            "Stuck is fine. Burning oxygen isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The sun sets in ten minutes.",
            "Flag. Move. We come back at the airlock."
          ],
          "flagged": [
            "Flagged. Next handrail.",
            "Marked. Airlock debrief."
          ],
          "debriefIntro": [
            "Airlock. The flagged ones, with the helmet off.",
            "Second pass, gloves off."
          ],
          "debriefEmpty": [
            "Nothing flagged. Clean EVA.",
            "No flags. Straight walk."
          ],
          "patrolDone": [
            "Spacewalk logged. Hatch closed. Rest.",
            "That's the EVA. Same truss tomorrow.",
            "Done. Listen to the fans."
          ],
          "summit": [
            "Five spacewalks. The array is out, tracking the sun, and the station has the power.",
            "You read every plan and made every walk. That's an astronaut."
          ]
        }
      },
      "heron": {
        "label": "great blue heron",
        "portrait": "assets/heron-640.png",
        "avatarSrc": "assets/avatar-heron.png",
        "arrival": [
          "It's me again. Great blue heron for the glades. Four feet tall, a neck like a folded ruler, and I can stand in one spot for an hour waiting for a fish, which is the only way to learn a marsh. Nobody looks twice at a heron on a channel marker. This is a river fifty miles wide and a few inches deep. Let's go read it.",
          "Me again. Long legs, longer patience. I have fished every slough between the lake and the bay. The ranger's log is on the boat. Read it."
        ],
        "lines": {
          "greeting": [
            "Ranger. Water's high. One run.",
            "Flat calm and the mosquitoes are asleep. Let's go.",
            "Airboat's fueled. Let's begin."
          ],
          "legRecon": [
            "Ranger's log first. Read the questions, then the log. Know what you are hunting for.",
            "Log coming in. Questions before you read a word."
          ],
          "legNav": [
            "Glades math. Inches of water, miles of sawgrass, gators per mile. Count it right or we run aground.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Boat orders. Read every step before you start the fan. The last one changes things.",
            "Orders. All of them first. Then throttle."
          ],
          "correct": [
            "That's it.",
            "Clear channel.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Throttle up.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong slough. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the log. We keep going."
          ],
          "idle1": [
            "You've been drifting a while. Flag it, move on.",
            "Stuck is fine. Stuck on a mudbank isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The afternoon storm is building.",
            "Flag. Move. We come back at the dock."
          ],
          "flagged": [
            "Flagged. Next marker.",
            "Marked. Dock debrief."
          ],
          "debriefIntro": [
            "Dock. The flagged ones, with the fan off.",
            "Second pass, ear protection off."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight run.",
            "No flags. Clean channel."
          ],
          "patrolDone": [
            "Run logged. Boat tied up. Rest.",
            "That's the run. Same marsh tomorrow.",
            "Done. Listen to the frogs."
          ],
          "summit": [
            "Five runs. Lake to bay, and the water is still moving.",
            "You read every log and ran every channel. That's a glades ranger."
          ]
        }
      },
      "wolf": {
        "label": "wolf",
        "portrait": "assets/wolf-640.png",
        "avatarSrc": "assets/avatar-wolf.png",
        "arrival": [
          "It's me again. Wolf this time. Gray, long-legged, and I can trot forty miles in a night without thinking about it. Out here a wolf on a ridge is scenery. I know this pack. I know where they crossed the river and where they will cross it again. Snowshoes on. Let's follow.",
          "Me again. Fur, a nose that reads the wind like a newspaper, and no interest in being petted. The tracks are fresh. Read the field notes."
        ],
        "lines": {
          "greeting": [
            "Tracker. Fresh snow last night. One day.",
            "Cold and still. The tracks will be sharp. Let's go.",
            "Radio collar's pinging. Let's begin."
          ],
          "legRecon": [
            "Field notes first. Read the questions, then the notes. Know what you are hunting for.",
            "Notes coming in. Questions before you read a word."
          ],
          "legNav": [
            "Track math. Miles, pounds, paw prints. Count it right or we follow the wrong wolf.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Field orders. Read every step before you leave the truck. The last one changes things.",
            "Orders. All of them first. Then walk."
          ],
          "correct": [
            "That's it.",
            "Fresh track.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. On the trail.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Old track. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the notes. We keep tracking."
          ],
          "idle1": [
            "You've been standing at that print a while. Flag it, move on.",
            "Stuck is fine. Standing still at twenty below isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The pack is moving.",
            "Flag. Move. We come back at the truck."
          ],
          "flagged": [
            "Flagged. Next track.",
            "Marked. Truck debrief."
          ],
          "debriefIntro": [
            "Truck. The flagged ones, with the heater on.",
            "Second pass, snowshoes off."
          ],
          "debriefEmpty": [
            "Nothing flagged. Clean trail.",
            "No flags. Straight day."
          ],
          "patrolDone": [
            "Day logged. Pack located. Sleep.",
            "That's the day. Same valley tomorrow.",
            "Done. Listen for them tonight."
          ],
          "summit": [
            "Five days. The pack counted, the pups seen, and nobody got closer than a mile.",
            "You read every note and followed every track. That's a wolf biologist."
          ]
        }
      },
      "bighorn": {
        "label": "bighorn sheep",
        "portrait": "assets/bighorn-640.png",
        "avatarSrc": "assets/avatar-bighorn.png",
        "arrival": [
          "It's me again. Bighorn sheep for the canyon. Curled horns, split hooves with rubber pads, and I can stand on a ledge the width of your hand and think about lunch. Nobody looks twice at a sheep on a cliff down here. The river is a mile below us. Let's go down through a billion years.",
          "Me again. Horns like a helmet and feet that do not slip. I know every ledge from the rim to the water. The trail log is in the pack. Read it."
        ],
        "lines": {
          "greeting": [
            "Hiker. Sun's not up yet. One ledge.",
            "Cool now, hot later. Let's go down while we can.",
            "Water bottles full. Let's begin."
          ],
          "legRecon": [
            "Trail log first. Read the questions, then the log. Know what you are hunting for.",
            "Log coming in. Questions before you read a word."
          ],
          "legNav": [
            "Canyon math. Feet of drop, degrees of heat, quarts of water. Count it right or you run dry at noon.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Trail orders. Read every step before you leave the ledge. The last one changes things.",
            "Orders. All of them first. Then step."
          ],
          "correct": [
            "That's it.",
            "Sure-footed.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Down we go.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Loose rock. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the log. We keep going."
          ],
          "idle1": [
            "You've been on that ledge a while. Flag it, move on.",
            "Stuck is fine. Standing in the sun isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The heat is coming.",
            "Flag. Move. We come back in the shade."
          ],
          "flagged": [
            "Flagged. Next ledge.",
            "Marked. Shade debrief."
          ],
          "debriefIntro": [
            "Shade. The flagged ones, with the pack off.",
            "Second pass, boots loosened."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight ledge.",
            "No flags. Clean descent."
          ],
          "patrolDone": [
            "Ledge logged. Camp in the shade. Sleep.",
            "That's the ledge. Same canyon tomorrow, deeper.",
            "Done. Listen to the river get louder."
          ],
          "summit": [
            "Five ledges. The river, and a mile of rock above you.",
            "You read every log and walked every ledge. That's a canyon hiker."
          ]
        }
      },
      "hawk": {
        "label": "hawk",
        "portrait": "assets/hawk-640.png",
        "avatarSrc": "assets/avatar-hawk.png",
        "arrival": [
          "It's me again. Hawk for the sky. Eyes that can read a map from a mile up and wings that ride a thermal for an hour without a flap. Nobody looks twice at a hawk near an airship; we are the weather report. There are five islands up there and only the wind knows the way. Let's go read it.",
          "Me again. Feathers, talons, and a habit of circling. I have flown between those islands since before the ropes were rigged. The pilot's log is on the chart table. Read it."
        ],
        "lines": {
          "greeting": [
            "Pilot. Envelope's full. One island.",
            "Wind's from the south and steady. Let's lift.",
            "Ballast checked. Let's begin."
          ],
          "legRecon": [
            "Pilot's log first. Read the questions, then the log. Know what you are hunting for.",
            "Log coming in. Questions before you read a word."
          ],
          "legNav": [
            "Air math. Feet of altitude, pounds of ballast, knots of wind. Count it right or we miss the island.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Flight orders. Read every step before you cast off. The last one changes things.",
            "Orders. All of them first. Then lift."
          ],
          "correct": [
            "That's it.",
            "On course.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Lifting.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong wind. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the log. We keep flying."
          ],
          "idle1": [
            "You've been hovering a while. Flag it, move on.",
            "Stuck is fine. Drifting off course isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The wind is shifting.",
            "Flag. Move. We come back at the mooring."
          ],
          "flagged": [
            "Flagged. Next island.",
            "Marked. Mooring debrief."
          ],
          "debriefIntro": [
            "Moored. The flagged ones, with the ropes tied off.",
            "Second pass, engines off."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight flight.",
            "No flags. Clean leg."
          ],
          "patrolDone": [
            "Island logged. Moored for the night. Sleep.",
            "That's the leg. Same sky tomorrow.",
            "Done. Listen to the envelope creak."
          ],
          "summit": [
            "Five islands. The last one, and the wind that brought us was the map all along.",
            "You read every log and flew every leg. That's an airship pilot."
          ]
        }
      },
      "wrench": {
        "label": "pit-crew bot",
        "portrait": "assets/wrench-640.png",
        "avatarSrc": "assets/avatar-wrench.png",
        "arrival": [
          "It's me again. Pit-crew bot this time; my name plate says Wrench. Two arms, a magnetic tray for screws, and a screen for a face that mostly shows a checklist. In a robot pit a small robot with a screwdriver is invisible. The parts are on the bench and the arena is booked for Friday. Let's build something that survives three minutes.",
          "Me again. Wrench. I have rebuilt more robots between rounds than I can count, and I know which bolt always comes loose. Read the build sheet."
        ],
        "lines": {
          "greeting": [
            "Builder. Battery's charged. One session.",
            "Bench is clear and the arena is quiet. Let's build.",
            "Screws sorted. Let's begin."
          ],
          "legRecon": [
            "Build sheet first. Read the questions, then the sheet. Know what you are hunting for.",
            "Sheet coming in. Questions before you read a word."
          ],
          "legNav": [
            "Pit math. Volts, grams, seconds of match. Count it right or the robot is overweight.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Assembly orders. Read every step before you pick up a screw. The last one changes things.",
            "Orders. All of them first. Then tighten."
          ],
          "correct": [
            "That's it.",
            "Torqued.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Next part.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong wire. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the value. Log it and move on.",
            "Answer's on the sheet. We keep building."
          ],
          "idle1": [
            "You've been holding that part a while. Flag it, move on.",
            "Stuck is fine. Standing still with the clock running isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The pit closes at six.",
            "Flag. Move. We come back at the pit check."
          ],
          "flagged": [
            "Flagged. Next part.",
            "Marked. Pit check."
          ],
          "debriefIntro": [
            "Pit check. The flagged ones, with the robot on the stand.",
            "Second pass, battery out."
          ],
          "debriefEmpty": [
            "Nothing flagged. Clean build.",
            "No flags. Straight session."
          ],
          "patrolDone": [
            "Session logged. Battery out, robot on the stand. Rest.",
            "That's the session. Same bench tomorrow.",
            "Done. Listen to the fans spin down."
          ],
          "summit": [
            "Five sessions. The robot fought three rounds and rolled out on its own wheels.",
            "You read every sheet and fitted every part. That's a robot builder."
          ]
        }
      },
      "mole": {
        "label": "mole",
        "portrait": "assets/mole-640.png",
        "avatarSrc": "assets/avatar-mole.png",
        "arrival": [
          "It's me again. Mole for the mine. Velvet fur, hands like shovels, and I have never once needed a lamp. Nobody looks twice at a mole in a tunnel; I am the tunnel. This mine has been shut for sixty years and the air down there has opinions. Check your lamp. Then check the canary.",
          "Me again. Star nose, big paws, and I know rock by the taste of it. The cage is at the top of the shaft. Read the mine log."
        ],
        "lines": {
          "greeting": [
            "Miner. Fans are running. One level.",
            "Shaft's dry and the cage is checked. Let's go down.",
            "Gas meter reads clean. Let's begin."
          ],
          "legRecon": [
            "Mine log first. Read the questions, then the log. Know what you are hunting for.",
            "Log coming in. Questions before you read a word."
          ],
          "legNav": [
            "Mine math. Feet of shaft, cubic feet of air, tons of rock. Count it right or the level floods.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Safety orders. Read every step before you leave the cage. The last one changes things.",
            "Orders. All of them first. Then walk."
          ],
          "correct": [
            "That's it.",
            "Solid rock.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Down we go.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong drift. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the log. We keep going."
          ],
          "idle1": [
            "You've been standing in that drift a while. Flag it, move on.",
            "Stuck is fine. Standing in bad air isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The lamp is burning.",
            "Flag. Move. We come back at the station."
          ],
          "flagged": [
            "Flagged. Next level.",
            "Marked. Station debrief."
          ],
          "debriefIntro": [
            "Shaft station. The flagged ones, by the cage.",
            "Second pass, lamps dimmed."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight level.",
            "No flags. Clean drift."
          ],
          "patrolDone": [
            "Level logged. Cage going up. Rest.",
            "That's the level. Same shaft tomorrow.",
            "Done. Listen to the timbers."
          ],
          "summit": [
            "Five levels. The bottom of the mine, dry, aired and safe.",
            "You read every log and checked every drift. That's a mine captain."
          ]
        }
      },
      "sealion": {
        "label": "sea lion",
        "portrait": "assets/sealion-640.png",
        "avatarSrc": "assets/avatar-sealion.png",
        "arrival": [
          "It's me again. Sea lion for the wreck. Whiskers, flippers, and I can hold my breath for ten minutes and see in water the color of tea. Nobody looks twice at a sea lion around a dive boat. I have been through every hatch on that ship. Check your air.",
          "Me again. Sleek, loud, and I know which hatch leads where. The wreck is a hundred feet down and it is not going anywhere. Read the dive plan."
        ],
        "lines": {
          "greeting": [
            "Diver. Tanks are full. One dive.",
            "Water's flat and cold. The good kind. Let's go.",
            "Line's rigged to the wreck. Let's begin."
          ],
          "legRecon": [
            "Dive plan first. Read the questions, then the plan. Know what you are hunting for.",
            "Plan coming in. Questions before you read a word."
          ],
          "legNav": [
            "Dive math. Feet, minutes, pounds of air. Count it right or you come up early.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Dive rules. Read every step before you drop. The last one changes things.",
            "Rules. All of them first. Then descend."
          ],
          "correct": [
            "That's it.",
            "Logged.",
            "Clean.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Down we go.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong deck. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the plan. We keep diving."
          ],
          "idle1": [
            "You've been hanging on that line a while. Flag it, move on.",
            "Stuck is fine. Burning air isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The air clock is running.",
            "Flag. Move. We come back on the boat."
          ],
          "flagged": [
            "Flagged. Descend.",
            "Marked. Boat debrief."
          ],
          "debriefIntro": [
            "Back on the boat. The flagged ones, with a towel.",
            "Second pass, tanks off."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight dive.",
            "No flags. Clean descent."
          ],
          "patrolDone": [
            "Dive logged. Tank on the rack. Warm up.",
            "That's the dive. Same wreck tomorrow.",
            "Done. Listen to the water drip off the ladder."
          ],
          "summit": [
            "Five dives. The whole ship, bow to engine room, and the bell is on the boat.",
            "You read every plan and made every dive. That's a wreck diver."
          ]
        }
      },
      "bat": {
        "label": "bat",
        "portrait": "assets/bat-640.png",
        "avatarSrc": "assets/avatar-bat.png",
        "arrival": [
          "It's me again. Bat for the cave. I see with my ears, I sleep upside down, and I know every passage in here from the inside. Nobody looks twice at a bat in the dark. Check your lamp. Then check your spare.",
          "Me again. Wings like a leather umbrella and a map of this cave in my head. The team is at the entrance. Read the rescue log."
        ],
        "lines": {
          "greeting": [
            "Rescuer. Lamps charged. One chamber.",
            "The cave is fifty-four degrees and does not care. Let's go.",
            "Rope's rigged. Let's begin."
          ],
          "legRecon": [
            "Rescue log first. Read the questions, then the log. Know what you are hunting for.",
            "Log coming in. Questions before you read a word."
          ],
          "legNav": [
            "Cave math. Feet of rope, hours of light, degrees of cold. Count it right or somebody stays down here.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Rope orders. Read every step before you clip in. The last one changes things.",
            "Orders. All of them first. Then climb."
          ],
          "correct": [
            "That's it.",
            "Clipped.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Down we go.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong passage. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the log. We keep going."
          ],
          "idle1": [
            "You've been at that line a while. Flag it, move on.",
            "Stuck is fine. Standing in cold water isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The lamp is burning.",
            "Flag. Move. We come back at the rest stop."
          ],
          "flagged": [
            "Flagged. Onward.",
            "Marked. Rest stop."
          ],
          "debriefIntro": [
            "Rest stop. The flagged ones, sitting on a dry rock.",
            "Second pass, lamps dimmed to save them."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight through.",
            "No flags. Clean chamber."
          ],
          "patrolDone": [
            "Chamber logged. Rope stays rigged. Rest.",
            "That's the chamber. Same dark tomorrow.",
            "Done. Listen to the drip."
          ],
          "summit": [
            "Five chambers. One caver found, warm, and on the way up.",
            "You read every log and rigged every drop. That's a rescuer."
          ]
        }
      },
      "countdown": {
        "label": "launch bot",
        "portrait": "assets/countdown-640.png",
        "avatarSrc": "assets/avatar-countdown.png",
        "arrival": [
          "It's me again. Launch bot this time; the pad crew calls me Countdown. Tall, thin, a clock for a face, and I have said 'ten, nine, eight' more times than anyone alive. On a launch pad a robot with a checklist is the least surprising thing for a mile. The stages are on the transporter. Let's stack a rocket.",
          "Me again. Countdown. I know every bolt on this pad and every second of the last ten. The build sheet is on the crawler. Read it."
        ],
        "lines": {
          "greeting": [
            "Engineer. Pad is clear. One session.",
            "Sky's blue and the wind is low. Let's stack.",
            "Checklist open. Let's begin."
          ],
          "legRecon": [
            "Build sheet first. Read the questions, then the sheet. Know what you are hunting for.",
            "Sheet coming in. Questions before you read a word."
          ],
          "legNav": [
            "Pad math. Tons, seconds, feet of rocket. Count it right or it does not leave the ground.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Stack orders. Read every step before you lift a stage. The last one changes things.",
            "Orders. All of them first. Then lift."
          ],
          "correct": [
            "That's it.",
            "Go.",
            "Logged.",
            "Yes.",
            "Nominal."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Go for the next.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Hold. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the value. Log it and move on.",
            "Answer's on the sheet. We keep stacking."
          ],
          "idle1": [
            "You've been holding on that item a while. Flag it, move on.",
            "Stuck is fine. A hold with the clock running isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The window won't wait.",
            "Flag. Move. We come back at the pad check."
          ],
          "flagged": [
            "Flagged. Next item.",
            "Marked. Pad check."
          ],
          "debriefIntro": [
            "Pad check. The flagged ones, with the crawler parked.",
            "Second pass, clock stopped."
          ],
          "debriefEmpty": [
            "Nothing flagged. Clean stack.",
            "No flags. Straight session."
          ],
          "patrolDone": [
            "Session logged. Stage mated. Power down.",
            "That's the session. Same pad tomorrow.",
            "Done. Listen to the vents hiss."
          ],
          "summit": [
            "Five sessions. Ten, nine, eight, and it went.",
            "You read every sheet and stacked every stage. That's a launch engineer."
          ]
        }
      },
      "sloth": {
        "label": "sloth",
        "portrait": "assets/sloth-640.png",
        "avatarSrc": "assets/avatar-sloth.png",
        "arrival": [
          "It's me again. Sloth for the canopy. Slow, upside down, and covered in algae so I look like part of the tree, which up here is the best disguise there is. I have been in this one tree for six years. Nobody looks twice. Clip in. We go up.",
          "Me again. Three toes, a smile I cannot help, and I know every branch between the ground and the sky. The ropes are rigged. Read the field notes. Slowly."
        ],
        "lines": {
          "greeting": [
            "Climber. Rain's stopped. One platform.",
            "Fog's lifting off the crowns. Let's go up.",
            "Ropes checked. Let's begin. Slowly."
          ],
          "legRecon": [
            "Field notes first. Read the questions, then the notes. Know what you are hunting for.",
            "Notes coming in. Questions before you read a word."
          ],
          "legNav": [
            "Canopy math. Feet of rope, gallons of rain, kinds of beetle. Count it right or the platform is short.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Climb orders. Read every step before you leave the ground. The last one changes things.",
            "Orders. All of them first. Then climb."
          ],
          "correct": [
            "That's it.",
            "Clipped.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Up we go.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong branch. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the notes. We keep climbing."
          ],
          "idle1": [
            "You've been hanging there a while. Even for me. Flag it, move on.",
            "Stuck is fine. Hanging in the rain isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The light is going.",
            "Flag. Move. We come back on the platform."
          ],
          "flagged": [
            "Flagged. Next branch.",
            "Marked. Platform debrief."
          ],
          "debriefIntro": [
            "Platform. The flagged ones, with your feet up.",
            "Second pass, harness loosened."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight climb.",
            "No flags. Clean pitch."
          ],
          "patrolDone": [
            "Platform logged. Hammock's up. Sleep.",
            "That's the pitch. Same tree tomorrow.",
            "Done. Listen to the frogs start."
          ],
          "summit": [
            "Five platforms. The top of the forest, and the sky on all sides.",
            "You read every note and climbed every pitch. That's a canopy scientist."
          ]
        }
      },
      "parrot": {
        "label": "parrot",
        "portrait": "assets/parrot-640.png",
        "avatarSrc": "assets/avatar-parrot.png",
        "arrival": [
          "It's me again. Parrot for the island. Green and red, loud, and I can read a map from a shoulder better than most people can from a table. Nobody looks twice at a parrot on a pirate island; it is practically the uniform. The map is real. The paces are real. Let's go count them.",
          "Me again. Feathers and a beak that can crack a nut or a knot. I have flown every inch of this island and I know which tree the map means. Read the chart."
        ],
        "lines": {
          "greeting": [
            "Navigator. Tide's out. One leg.",
            "Sun's up and the map is dry. Let's walk it.",
            "Compass reads true. Let's begin."
          ],
          "legRecon": [
            "Chart notes first. Read the questions, then the notes. Know what you are hunting for.",
            "Notes coming in. Questions before you read a word."
          ],
          "legNav": [
            "Map math. Paces, bearings, feet of tide. Count it right or we dig in the wrong sand.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Map orders. Read every step before you take a pace. The last one changes things.",
            "Orders. All of them first. Then walk."
          ],
          "correct": [
            "That's it.",
            "On the bearing.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Walk on.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong bearing. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the notes. We keep walking."
          ],
          "idle1": [
            "You've been at that line a while. Flag it, move on.",
            "Stuck is fine. Standing on the sand while the tide comes in isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The tide won't wait.",
            "Flag. Move. We come back at the camp."
          ],
          "flagged": [
            "Flagged. Next landmark.",
            "Marked. Camp debrief."
          ],
          "debriefIntro": [
            "Camp. The flagged ones, with coconut water.",
            "Second pass, boots off."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight line.",
            "No flags. Clean leg."
          ],
          "patrolDone": [
            "Landmark logged. Camp made. Sleep.",
            "That's the leg. Same island tomorrow.",
            "Done. Listen to the surf."
          ],
          "summit": [
            "Five landmarks. The cache is open and the map was right.",
            "You read every note and walked every bearing. That's a navigator."
          ]
        }
      },
      "goat": {
        "label": "goat",
        "portrait": "assets/goat-640.png",
        "avatarSrc": "assets/avatar-goat.png",
        "arrival": [
          "It's me again. Goat this time. Horns, a beard, and I can stand on a castle wall two inches wide without thinking about it. Every siege camp has goats, for the milk, and nobody looks twice at one chewing on the rope pile. I have watched a hundred of these machines go up. Let's build one that actually throws.",
          "Me again. Hooves like grip tape and a taste for rope. The timber is stacked and the engineer's plans are on the barrel. Read them."
        ],
        "lines": {
          "greeting": [
            "Engineer. Timber's dry. One day.",
            "Wind's down and the wall's not going anywhere. Let's build.",
            "Rope's stretched. Let's begin."
          ],
          "legRecon": [
            "Plans first. Read the questions, then the plans. Know what you are hunting for.",
            "Plans coming in. Questions before you read a word."
          ],
          "legNav": [
            "Siege math. Feet of beam, pounds of stone, yards of throw. Count it right or it throws backward.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Build orders. Read every step before you cut a beam. The last one changes things.",
            "Orders. All of them first. Then cut."
          ],
          "correct": [
            "That's it.",
            "Square.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Next beam.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong measure. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Mark it and move on.",
            "Answer's in the plans. We keep building."
          ],
          "idle1": [
            "You've been holding that beam a while. Flag it, move on.",
            "Stuck is fine. Standing under a counterweight isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The stone won't throw itself.",
            "Flag. Move. We come back at the fire."
          ],
          "flagged": [
            "Flagged. Next beam.",
            "Marked. Fireside."
          ],
          "debriefIntro": [
            "Fireside. The flagged ones, with the stew on.",
            "Second pass, tools down."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight build.",
            "No flags. Clean day."
          ],
          "patrolDone": [
            "Day logged. Beams pegged. Sleep.",
            "That's the day. Same field tomorrow.",
            "Done. Listen to the rope creak."
          ],
          "summit": [
            "Five days. The machine stands and the first stone flew.",
            "You read every plan and built the whole engine. That's a siege engineer."
          ]
        }
      },
      "moth": {
        "label": "lantern moth",
        "portrait": "assets/moth-640.png",
        "avatarSrc": "assets/avatar-moth.png",
        "arrival": [
          "It's me again. Moth this time, a big pale one with eyes on my wings, the kind that lives around station lamps. Nobody looks twice at a moth on a lantern, and I can read a signal from a mile off. There is a train on this line that is not in the timetable. Let's find out where it comes from.",
          "Me again. Dust on my wings and a taste for lamplight. I have sat on every signal post between here and the junction. The station log is on the desk. Read it."
        ],
        "lines": {
          "greeting": [
            "Signalman. Lamps are lit. One station.",
            "Line's clear and the fog is in. Let's look.",
            "Bell rang twice. Let's begin."
          ],
          "legRecon": [
            "Station log first. Read the questions, then the log. Know what you are hunting for.",
            "Log coming in. Questions before you read a word."
          ],
          "legNav": [
            "Timetable math. Miles, minutes, signals. Count it right or two trains meet.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Signal orders. Read every step before you pull a lever. The last one changes things.",
            "Orders. All of them first. Then pull."
          ],
          "correct": [
            "That's it.",
            "Line clear.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Signal off.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong lever. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the log. We keep going."
          ],
          "idle1": [
            "You've been at that lever a while. Flag it, move on.",
            "Stuck is fine. Holding a train at a red isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The train won't wait.",
            "Flag. Move. We come back at the signal box."
          ],
          "flagged": [
            "Flagged. Next signal.",
            "Marked. Signal box debrief."
          ],
          "debriefIntro": [
            "Signal box. The flagged ones, with the kettle on.",
            "Second pass, levers back."
          ],
          "debriefEmpty": [
            "Nothing flagged. Clear run.",
            "No flags. Straight line."
          ],
          "patrolDone": [
            "Station logged. Lamps trimmed. Sleep.",
            "That's the station. Same line tomorrow.",
            "Done. Listen for the rails to hum."
          ],
          "summit": [
            "Five stations. One train found, and it was never a ghost.",
            "You read every log and worked every signal. That's a signalman."
          ]
        }
      },
      "rounds": {
        "label": "security bot",
        "portrait": "assets/rounds-640.png",
        "avatarSrc": "assets/avatar-rounds.png",
        "arrival": [
          "It's me again. Security bot for this one; the badge says Rounds. Wheels, a flashlight where my face should be, and a map of every door in the building. In an empty mall at midnight a patrol robot is the only thing that belongs. The lights go off in ten minutes. Let's find out what is walking around in here.",
          "Me again. Rounds. Four hundred doors, sixty cameras, and I know which one is always a little off. The night log is on the desk. Read it."
        ],
        "lines": {
          "greeting": [
            "Guard. Doors are locked. One night.",
            "Escalators are off and the fountain is on. Let's walk it.",
            "Cameras up. Let's begin."
          ],
          "legRecon": [
            "Night log first. Read the questions, then the log. Know what you are hunting for.",
            "Log coming in. Questions before you read a word."
          ],
          "legNav": [
            "Rounds math. Doors, minutes, cameras. Count it right or a door stays unlocked.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Patrol orders. Read every step before you leave the desk. The last one changes things.",
            "Orders. All of them first. Then walk."
          ],
          "correct": [
            "That's it.",
            "Logged.",
            "Clear.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Next door.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong door. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the log. We keep walking."
          ],
          "idle1": [
            "You've been at that door a while. Flag it, move on.",
            "Stuck is fine. Standing in a dark hallway isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The round has a schedule.",
            "Flag. Move. We come back at the desk."
          ],
          "flagged": [
            "Flagged. Next door.",
            "Marked. Desk debrief."
          ],
          "debriefIntro": [
            "Back at the desk. The flagged ones, with the cameras up.",
            "Second pass, coffee poured."
          ],
          "debriefEmpty": [
            "Nothing flagged. Clean round.",
            "No flags. Straight night."
          ],
          "patrolDone": [
            "Night logged. Doors checked twice. Sleep.",
            "That's the shift. Same mall tomorrow.",
            "Done. Listen to the fountain."
          ],
          "summit": [
            "Five nights. Every noise explained, every door locked.",
            "You read every log and walked every round. That's a guard."
          ]
        }
      },
      "stagecat": {
        "label": "stage cat",
        "portrait": "assets/stagecat-640.png",
        "avatarSrc": "assets/avatar-stagecat.png",
        "arrival": [
          "It's me again. Stage cat this time, and a mechanical one: brass whiskers, glass eyes, a wind-up key in my back. Every old theater has a cat, and nobody looks twice at one sitting on the piano. I have seen every trick this building can do. The ghost light is on. Let's find out what is making the noises.",
          "Me again. Clockwork cat. I have watched ten thousand shows from the wings and I know the difference between a ghost and a loose pulley. Read the stage manager's book."
        ],
        "lines": {
          "greeting": [
            "Stagehand. House is empty. One show.",
            "Curtain's down and the fly ropes are creaking. Let's look.",
            "Ghost light's lit. Let's begin."
          ],
          "legRecon": [
            "Prompt book first. Read the questions, then the book. Know what you are hunting for.",
            "Book coming in. Questions before you read a word."
          ],
          "legNav": [
            "Backstage math. Seats, cues, pounds on the rope. Count it right or the scenery lands on someone.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Cue sheet. Read every cue before you call the first one. The last one changes things.",
            "Cues. All of them first. Then go."
          ],
          "correct": [
            "That's it.",
            "Cue's good.",
            "Logged.",
            "Yes.",
            "Clean."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Places.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong cue. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the book. We keep going."
          ],
          "idle1": [
            "You've been standing in the wings a while. Flag it, move on.",
            "Stuck is fine. Missing a cue isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The curtain won't wait.",
            "Flag. Move. We come back at intermission."
          ],
          "flagged": [
            "Flagged. Next cue.",
            "Marked. Intermission."
          ],
          "debriefIntro": [
            "Intermission. The flagged ones, house lights up.",
            "Second pass, curtain down."
          ],
          "debriefEmpty": [
            "Nothing flagged. Clean show.",
            "No flags. Straight run."
          ],
          "patrolDone": [
            "Show logged. Ghost light on. Sleep.",
            "That's the show. Same stage tomorrow.",
            "Done. Listen to the building settle."
          ],
          "summit": [
            "Five shows. Every noise explained, and the theater is open again.",
            "You read every page and called every cue. That's a stage manager."
          ]
        }
      },
      "trowel": {
        "label": "dig bot",
        "portrait": "assets/trowel-640.png",
        "avatarSrc": "assets/avatar-trowel.png",
        "arrival": [
          "It's me again. Dig bot for this one; the crew calls me Trowel. Tracks, a brush arm, a sieve on my back, and a lamp for the tent at two in the morning, which up here is still daylight. On a dig, a small robot with a brush is furniture. Let's find something seventy million years old.",
          "Me again. Trowel. I have brushed the dirt off a thousand bones and I know a rib from a root. The jackets are stacked in the tent. Read the field notes."
        ],
        "lines": {
          "greeting": [
            "Digger. Sun's up, which it has been since May. One day.",
            "Bluff's dry. Let's dig.",
            "Brushes are clean. Let's begin."
          ],
          "legRecon": [
            "Field notes first. Read the questions, then the notes. Know what you are hunting for.",
            "Notes coming in. Questions before you read a word."
          ],
          "legNav": [
            "Dig math. Bones, jackets, millions of years. Count it right or the skeleton has three legs.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Lab orders. Read every step before you glue anything. The last one changes things.",
            "Orders. All of them first. Then fit."
          ],
          "correct": [
            "That's it.",
            "Fits.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Next bone.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong bone. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the notes. We keep digging."
          ],
          "idle1": [
            "You've been holding that brush a while. Flag it, move on.",
            "Stuck is fine. Standing in the wind isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The bluff won't wait.",
            "Flag. Move. We come back in the tent."
          ],
          "flagged": [
            "Flagged. Next bone.",
            "Marked. Tent debrief."
          ],
          "debriefIntro": [
            "Tent. The flagged ones, with the stove going.",
            "Second pass, gloves off."
          ],
          "debriefEmpty": [
            "Nothing flagged. Clean dig.",
            "No flags. Straight day."
          ],
          "patrolDone": [
            "Day logged. Bones jacketed. Sleep, if the sun lets you.",
            "That's the day. Same bluff tomorrow.",
            "Done. Listen to the river cut."
          ],
          "summit": [
            "Five days. The skeleton stands. Seventy million years and it is on its feet again.",
            "You read every note and fitted every bone. That's a digger."
          ]
        }
      },
      "gust": {
        "label": "weather drone",
        "portrait": "assets/gust-640.png",
        "avatarSrc": "assets/avatar-gust.png",
        "arrival": [
          "It's me again. Weather drone this time; the team calls me Gust. Four rotors, a wind sensor on top, and a camera that does not blink in hail. Out here a drone over a wheat field is nothing anyone looks at twice. The sky is turning green in the west. Let's go read it.",
          "Me again. Gust. I have flown into the edge of six supercells and come back with all four rotors. The radar truck is warming up. Read the forecast."
        ],
        "lines": {
          "greeting": [
            "Chaser. Morning briefing is up. One storm.",
            "Sky's clear now. It won't stay that way. Let's roll.",
            "Radar's spinning. Let's begin."
          ],
          "legRecon": [
            "Forecast first. Read the questions, then the forecast. Know what you are hunting for.",
            "Forecast coming in. Questions before you read a word."
          ],
          "legNav": [
            "Road math. Miles, minutes, miles an hour. Count it right or we are under the storm instead of beside it.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Chase rules. Read every step before you start the truck. The last one changes things.",
            "Rules. All of them first. Then drive."
          ],
          "correct": [
            "That's it.",
            "Logged.",
            "Clean.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Roll on.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong road. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the forecast. We keep chasing."
          ],
          "idle1": [
            "You've been parked a while. Flag it, move on.",
            "Stuck is fine. Parked in the path isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The storm is moving.",
            "Flag. Drive. We come back at the motel."
          ],
          "flagged": [
            "Flagged. Roll.",
            "Marked. Motel debrief."
          ],
          "debriefIntro": [
            "Motel. The flagged ones, with the rain on the window.",
            "Second pass, truck parked."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight chase.",
            "No flags. Clean day."
          ],
          "patrolDone": [
            "Storm logged. Data saved. Sleep.",
            "That's the day. Same sky tomorrow.",
            "Done. Listen to the thunder go east."
          ],
          "summit": [
            "Five storms. One tornado measured, nobody hurt, all data home.",
            "You read every forecast and drove every road. That's a chaser."
          ]
        }
      },
      "marmot": {
        "label": "marmot",
        "portrait": "assets/marmot-640.png",
        "avatarSrc": "assets/avatar-marmot.png",
        "arrival": [
          "It's me again. Marmot for the tower. Fat, furry, and I whistle when something is wrong, which on a mountaintop is a job description. Nobody looks twice at a marmot on a rock. I can smell smoke before the tower can see it. Up the stairs.",
          "Me again. I sleep eight months of the year and spend the other four watching the horizon, same as you this week. The map is on the table. Read the log."
        ],
        "lines": {
          "greeting": [
            "Lookout. Sky's clear. One day.",
            "Wind from the west. Let's watch.",
            "Radio check done. Let's begin."
          ],
          "legRecon": [
            "Tower log first. Read the questions, then the log. Know what you are hunting for.",
            "Log coming in. Questions before you read a word."
          ],
          "legNav": [
            "Tower math. Miles, degrees, acres. Count it right or the crew goes to the wrong ridge.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Lookout rules. Read every step before you key the radio. The last one changes things.",
            "Rules. All of them first. Then call."
          ],
          "correct": [
            "That's it.",
            "Logged.",
            "Bearing's good.",
            "Yes.",
            "Clean."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Eyes up.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong bearing. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the log. We keep watching."
          ],
          "idle1": [
            "You've been staring at that one a while. Flag it, move on.",
            "Stuck is fine. Missing a smoke isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The horizon won't wait.",
            "Flag. Move. We come back at sundown."
          ],
          "flagged": [
            "Flagged. Eyes up.",
            "Marked. Sundown debrief."
          ],
          "debriefIntro": [
            "Sundown. The flagged ones, with the binoculars down.",
            "Second pass, sky going orange."
          ],
          "debriefEmpty": [
            "Nothing flagged. Quiet day.",
            "No flags. Clean watch."
          ],
          "patrolDone": [
            "Day logged. Shutters closed. Sleep.",
            "That's the watch. Same horizon tomorrow.",
            "Done. Listen to the wind."
          ],
          "summit": [
            "Five days. One smoke called in, one fire caught small.",
            "You read every log and watched every ridge. That's a lookout."
          ]
        }
      },
      "octopus": {
        "label": "octopus",
        "portrait": "assets/octopus-640.png",
        "avatarSrc": "assets/avatar-octopus.png",
        "arrival": [
          "It's me again. Octopus for the deep. Eight arms, three hearts, no bones, and I can fit through a hole the size of my eye. Down here nobody looks twice at an octopus on the hull. I know the dark. Seal the hatch.",
          "Me again. I change color to match whatever I am sitting on, which makes me the best-dressed thing in the abyss. The sub is ready. Read the dive plan."
        ],
        "lines": {
          "greeting": [
            "Pilot. Batteries full. One dive.",
            "Sea's calm on top. Down below it always is. Let's go.",
            "Hatch sealed. Let's begin."
          ],
          "legRecon": [
            "Dive plan first. Read the questions, then the plan. Know what you are hunting for.",
            "Plan coming in. Questions before you read a word."
          ],
          "legNav": [
            "Depth math. Meters, minutes, hours of air. Count it right or we come up early.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Dive orders. Read every step before you touch a valve. The last one changes things.",
            "Orders. All of them first. Then descend."
          ],
          "correct": [
            "That's it.",
            "Logged.",
            "Clean.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Descending.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong depth. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the plan. We keep diving."
          ],
          "idle1": [
            "You've been hovering a while. Flag it, move on.",
            "Stuck is fine. Burning battery isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The air clock is running.",
            "Flag. Move. We come back on the surface."
          ],
          "flagged": [
            "Flagged. Descend.",
            "Marked. Surface debrief."
          ],
          "debriefIntro": [
            "Surface. The flagged ones, with the hatch open.",
            "Second pass, daylight."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight dive.",
            "No flags. Clean descent."
          ],
          "patrolDone": [
            "Dive logged. Batteries on charge. Sleep.",
            "That's the dive. Same trench tomorrow.",
            "Done. Listen to the hull tick."
          ],
          "summit": [
            "Five dives. The bottom of the trench, and back.",
            "You read every plan and made every dive. That's a pilot."
          ]
        }
      },
      "dusty": {
        "label": "garage bot",
        "portrait": "assets/dusty-640.png",
        "avatarSrc": "assets/avatar-dusty.png",
        "arrival": [
          "It's me again. Garage bot for this one; the crew calls me Dusty. Treads, two arms, a lamp on my head, and a bin full of bolts. In a rover garage a small robot with a wrench is the most normal thing in the room. Let's build something that can drive on another planet.",
          "Me again. Dusty. I have torqued every bolt on three rovers and I know which ones come loose. The parts are on the bench. Read the sheet."
        ],
        "lines": {
          "greeting": [
            "Engineer. Parts are laid out. One session.",
            "Clean room's clean. Let's build.",
            "Wheels are in. Let's begin."
          ],
          "legRecon": [
            "Build sheet first. Read the questions, then the sheet. Know what you are hunting for.",
            "Sheet coming in. Questions before you read a word."
          ],
          "legNav": [
            "Bench math. Wheels, watts, minutes of radio delay. Count it right or it does not drive.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Assembly orders. Read every step before you pick up a bolt. The last one changes things.",
            "Orders. All of them first. Then torque."
          ],
          "correct": [
            "That's it.",
            "Torqued.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. On we go.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong spec. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the value. Log it and move on.",
            "Answer's on the sheet. We keep building."
          ],
          "idle1": [
            "You've been holding that part a while. Flag it, move on.",
            "Stuck is fine. Standing still in a clean room isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The bench won't wait.",
            "Flag. Move. We come back at the bench check."
          ],
          "flagged": [
            "Flagged. Next part.",
            "Marked. Bench check."
          ],
          "debriefIntro": [
            "Bench check. The flagged ones, with the lamp on.",
            "Second pass, tools down."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight build.",
            "No flags. Clean session."
          ],
          "patrolDone": [
            "Session done. Part fitted. Power down.",
            "That's the day. Same bench tomorrow.",
            "Done. Listen to the fans."
          ],
          "summit": [
            "Rover built and rolling. Five days and it drives.",
            "You read every sheet and fitted every part. That's an engineer."
          ]
        }
      },
      "walrus": {
        "label": "walrus",
        "portrait": "assets/walrus-640.png",
        "avatarSrc": "assets/avatar-walrus.png",
        "arrival": [
          "It's me again. Walrus for the Bering Sea. Two tons, two tusks, and a mustache that finds clams in the dark. On this water, a walrus on the ice is scenery. I have ridden out worse storms than this boat has seen. Boots on. Gloves on. Let's haul.",
          "Me again. Blubber a hand thick and whiskers that feel the bottom. I know where the crab are, and I know when the ice is coming. Get on deck."
        ],
        "lines": {
          "greeting": [
            "Deckhand. Pots are soaking. One haul.",
            "Sea's flat for once. Let's work.",
            "Ice on the rail. Let's begin."
          ],
          "legRecon": [
            "Skipper's log first. Read the questions, then the log. Know what you are hunting for.",
            "Log coming in. Questions before you read a word."
          ],
          "legNav": [
            "Deck math. Pots, pounds, hours of sleep. Count it right or the quota is wrong.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Deck orders. Read every step before you touch the line. The last one changes things.",
            "Orders. All of them first. Then haul."
          ],
          "correct": [
            "That's it.",
            "Full pot.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Haul on.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong count. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the log. We keep hauling."
          ],
          "idle1": [
            "You've been at that line a while. Flag it, move on.",
            "Stuck is fine. Standing still on an icy deck isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The pots won't wait.",
            "Flag. Move. We come back in the galley."
          ],
          "flagged": [
            "Flagged. Next pot.",
            "Marked. Galley debrief."
          ],
          "debriefIntro": [
            "Galley. The flagged ones, with the soup.",
            "Second pass, gloves off."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight haul.",
            "No flags. Clean deck."
          ],
          "patrolDone": [
            "Haul logged. Tank's fuller. Sleep.",
            "That's the string. Same water tomorrow.",
            "Done. Listen to the hull."
          ],
          "summit": [
            "Five hauls. Tank full. Turn for port.",
            "You read every log and hauled every string. That's a deckhand."
          ]
        }
      },
      "eagle": {
        "label": "bald eagle",
        "portrait": "assets/eagle-640.png",
        "avatarSrc": "assets/avatar-eagle.png",
        "arrival": [
          "It's me again. Bald eagle for fish camp. There are forty of us in the cottonwoods along this river in July and nobody counts. I can see a salmon from a mile up. Let's build something that smells like smoke.",
          "Me again. White head, yellow feet, and an appetite. I have watched a hundred smokehouses go up on this bank. Read the plan."
        ],
        "lines": {
          "greeting": [
            "Builder. The run is in. One session.",
            "River's red with fish. Let's work.",
            "Alder's split and stacked. Let's begin."
          ],
          "legRecon": [
            "Plan first. Read the questions, then the plan. Know what you are hunting for.",
            "Plan coming in. Questions before you read a word."
          ],
          "legNav": [
            "Camp math. Fish, boards, hours of smoke. Count it right or the batch spoils.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Build orders. Read every step before you cut a board. The last one changes things.",
            "Orders. All of them first. Then cut."
          ],
          "correct": [
            "That's it.",
            "Square.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. On we go.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong measure. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Mark it and move on.",
            "Answer's in the plan. We keep building."
          ],
          "idle1": [
            "You've been holding that board a while. Flag it, move on.",
            "Stuck is fine. Standing still with fish waiting isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The fish won't keep.",
            "Flag. Move. We come back at the fire."
          ],
          "flagged": [
            "Flagged. Next board.",
            "Marked. Fireside."
          ],
          "debriefIntro": [
            "Fireside. The flagged ones, with the smoke going.",
            "Second pass, tools down."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight build.",
            "No flags. Clean session."
          ],
          "patrolDone": [
            "Session done. Tools in the box. Eat.",
            "That's the day. Same bank tomorrow.",
            "Done. Smell that."
          ],
          "summit": [
            "Smokehouse up, first batch out. Five days and it smells like it should.",
            "You read every plan and built the whole thing. That's a fish camp."
          ]
        }
      },
      "lynx": {
        "label": "lynx",
        "portrait": "assets/lynx-640.png",
        "avatarSrc": "assets/avatar-lynx.png",
        "arrival": [
          "It's me again. Lynx this time. Big feet for the snow, tufted ears for the quiet, and nobody expects a lynx to be reading a sky chart. It is forty below out there. Inside, the sky is about to do something.",
          "Me again. Fur to the toes and eyes made for the dark. I know when the sky is going to move before the instruments do. Get your parka."
        ],
        "lines": {
          "greeting": [
            "Watcher. Clear sky tonight. One night.",
            "Cold and clear. The good kind. Let's look up.",
            "The magnetometer twitched. Let's begin."
          ],
          "legRecon": [
            "Sky log first. Read the questions, then the log. Know what you are hunting for.",
            "Log coming in. Questions before you read a word."
          ],
          "legNav": [
            "Station math. Miles up, degrees down, hours of dark. Count it right.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Night rules. Read every step before you open the door. The last one changes things.",
            "Rules. All of them first. Then out."
          ],
          "correct": [
            "That's it.",
            "Logged.",
            "Clean.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. On we go.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong reading. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and move on.",
            "Answer's in the log. We keep watching."
          ],
          "idle1": [
            "You've been at that line a while. Flag it, move on.",
            "Stuck is fine. Frozen isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The sky won't wait.",
            "Flag. Move. We come back at dawn."
          ],
          "flagged": [
            "Flagged. Onward.",
            "Marked. Dawn debrief."
          ],
          "debriefIntro": [
            "Dawn. The flagged ones, by the stove.",
            "Second pass, sky gone gray."
          ],
          "debriefEmpty": [
            "Nothing flagged. Quiet night.",
            "No flags. Clean watch."
          ],
          "patrolDone": [
            "Night logged. Sky's fading. Sleep.",
            "That's the night. Same hill tomorrow.",
            "Done. Listen to the cold."
          ],
          "summit": [
            "Five nights. The rocket went up through the lights and the log is full.",
            "You read every entry and kept every watch. That's a station."
          ]
        }
      },
      "owl": {
        "label": "snowy owl",
        "portrait": "assets/owl-640.png",
        "avatarSrc": "assets/avatar-owl.png",
        "arrival": [
          "It's me again. Snowy owl for the trail. White on white, nobody sees me, and I can fly ahead and check the ice before the dogs get there. Boots on the dogs. Let's run.",
          "Me again. Feathers down to my toes, which is the only way to sit out a night at forty below. I know every checkpoint. Hook up the team."
        ],
        "lines": {
          "greeting": [
            "Musher. Dogs are ready. One leg.",
            "Clear and cold. Good trail. Let's run.",
            "Team's howling. They know. Let's go."
          ],
          "legRecon": [
            "Trail notes first. Read the questions, then the notes. Know what you are hunting for.",
            "Notes coming in. Questions before you read a word."
          ],
          "legNav": [
            "Checkpoint math. Miles, booties, calories. Count it right or the dogs go hungry.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Musher's orders. Read every step before you pull the snow hook. The last one changes things.",
            "Orders. All of them first. Then run."
          ],
          "correct": [
            "That's it.",
            "Good trail.",
            "Logged.",
            "Yes.",
            "Clean."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Mush.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong turn. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and run on.",
            "Answer's in the notes. We keep moving."
          ],
          "idle1": [
            "You've been standing on the brake a while. Flag it, move on.",
            "Stuck is fine. Frozen isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The dogs are cooling down.",
            "Flag. Run. We come back at the checkpoint."
          ],
          "flagged": [
            "Flagged. Mush.",
            "Marked. Checkpoint debrief."
          ],
          "debriefIntro": [
            "Checkpoint. The flagged ones, by the stove.",
            "Second pass, dogs bedded down."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight run.",
            "No flags. Clean leg."
          ],
          "patrolDone": [
            "Checkpoint. Dogs fed, straw down. Sleep.",
            "That's the leg. Same trail tomorrow.",
            "Done. Listen to them snore."
          ],
          "summit": [
            "Nome. The Burled Arch. A thousand miles.",
            "You read every note and ran the whole trail. That's a musher."
          ]
        }
      },
      "cinder": {
        "label": "rover bot",
        "portrait": "assets/cinder-640.png",
        "avatarSrc": "assets/avatar-cinder.png",
        "arrival": [
          "It's me again. Rover bot this time; the observatory calls me Cinder. Six wheels, a gas sniffer, a camera on a stalk, and a shell that shrugs off ash. On a volcano, a rover is furniture. Let's watch the mountain.",
          "Me again. Cinder. I have been up the flank in the dark and I have driven home through ash. The instruments are ours. Read the log."
        ],
        "lines": {
          "greeting": [
            "Watcher. Seismographs are quiet. One watch.",
            "Steam on the summit this morning. Let's look.",
            "Instruments green. Let's begin."
          ],
          "legRecon": [
            "Observatory log first. Read the questions, then the log. Know what you are hunting for.",
            "Log coming in. Questions before you read a word."
          ],
          "legNav": [
            "Instrument math. Tremors, plumes, feet of ash. Count it right or the alert goes out wrong.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Alert rules. Read every step before you change the color. The last one changes things.",
            "Rules. All of them first. Then act."
          ],
          "correct": [
            "That's it.",
            "Logged.",
            "Confirmed.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. On we go.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong reading. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the reading. Log it and move on.",
            "Answer's in the log. We keep watching."
          ],
          "idle1": [
            "You've been staring at that trace a while. Flag it, move on.",
            "Stuck is fine. Missing the next tremor isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The mountain does not wait.",
            "Flag. Move. We come back at shift change."
          ],
          "flagged": [
            "Flagged. Next reading.",
            "Marked. Shift change."
          ],
          "debriefIntro": [
            "Shift change. The flagged ones, with coffee.",
            "Second pass, alarms off."
          ],
          "debriefEmpty": [
            "Nothing flagged. Quiet watch.",
            "No flags. Clean shift."
          ],
          "patrolDone": [
            "Watch logged. Mountain still there. Sleep.",
            "That's the shift. Same summit tomorrow.",
            "Done. Listen for the rumble."
          ],
          "summit": [
            "Five watches. The eruption came and the warning went out in time.",
            "You read every log and called every alert. That's an observatory."
          ]
        }
      },
      "otter": {
        "label": "sea otter",
        "portrait": "assets/otter-640.png",
        "avatarSrc": "assets/avatar-otter.png",
        "arrival": [
          "It's me again. Sea otter this time. Out on the bay, an otter floating on its back is the least interesting thing anyone will see. I can keep up with a kayak all day and I know where the ice is thin.",
          "Me again. Fur, whiskers, and a rock under one arm for cracking clams. Nobody looks twice at an otter in Glacier Bay. Grab your paddle."
        ],
        "lines": {
          "greeting": [
            "Ranger. Tide's turning. One mission.",
            "Water's flat this morning. Let's paddle.",
            "Cold bay, warm coffee. Let's go."
          ],
          "legRecon": [
            "Field report first. Read the questions, then the report. Know what you're hunting for.",
            "Report coming in. Questions before you read a word."
          ],
          "legNav": [
            "Chart work. Miles, tides, gallons. Count it right or we sleep on the wrong beach.",
            "Nav leg. One number at a time."
          ],
          "legOrders": [
            "Paddle orders. Read every step before you dip a blade. The last one changes things.",
            "Orders. All of them first. Then paddle."
          ],
          "correct": [
            "That's it.",
            "Clean stroke.",
            "Logged.",
            "Yes.",
            "Good."
          ],
          "correctRetry": [
            "There. Second look did it.",
            "Corrected. Onward.",
            "Got it now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong channel. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the answer. Log it and paddle on.",
            "Answer's in the report. We keep moving."
          ],
          "idle1": [
            "You've been drifting a while. Flag it, move on.",
            "Stuck is fine. Drifting into the ice isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The tide won't wait.",
            "Flag. Paddle. We come back at the beach."
          ],
          "flagged": [
            "Flagged. Paddle on.",
            "Marked. Beach debrief."
          ],
          "debriefIntro": [
            "Beach debrief. The flagged ones, with dry hands.",
            "Second pass, kayak pulled up."
          ],
          "debriefEmpty": [
            "Nothing flagged. Straight run.",
            "No flags. Clean crossing."
          ],
          "patrolDone": [
            "Camp made. Kayak up above the tide line. Sleep.",
            "That's the day. Same water tomorrow.",
            "Done. Listen for the ice tonight."
          ],
          "summit": [
            "Glacier face. Five days of paddling. Listen to it crack.",
            "You read every report and crossed the whole bay. That's an expedition."
          ]
        }
      },
      "raven": {
        "label": "raven",
        "portrait": "assets/sitka-640.png",
        "avatarSrc": "assets/avatar-raven.png",
        "arrival": [
          "It's me again. Took a raven's shape for this one. Nobody looks twice at a raven on a ridge, and I can see the whole route from up here.",
          "Me again. Raven form. Up here it's the only shape that gets to sit on the summit and watch the weather come in."
        ],
        "lines": {
          "greeting": [
            "Ranger. Good. Boots on.",
            "Sky's clear over the ridge. Let's move.",
            "I've been up since first light. Where have you been?",
            "One mission. That's all today asks. Let's go."
          ],
          "legRecon": [
            "Recon first. Read what to look for, THEN read the report. That's how scouts do it.",
            "Field report coming in. Know your questions before you read a word."
          ],
          "legNav": [
            "Navigation. Numbers are just distances we haven't walked yet.",
            "Nav leg. Take each one on its own. Nobody climbs two ridges at once."
          ],
          "legOrders": [
            "Orders. Read every step before you touch anything. Every. Step.",
            "This one's a trap for people who rush. You're not people who rush."
          ],
          "correct": [
            "Solid.",
            "That's the route.",
            "Good eyes.",
            "Clean.",
            "Logged.",
            "That's how it's done."
          ],
          "correctRetry": [
            "There it is.",
            "Second look did it.",
            "Good. Fixed on the spot."
          ],
          "wrong": [
            "Not that one. Look again.",
            "Wrong ridge. Back up a step.",
            "Close. Check the hint, then go again."
          ],
          "reveal": [
            "Here's the line. Learn it, don't dwell on it.",
            "This is the answer. We move."
          ],
          "idle1": [
            "You've been on this one a while. Flag it and keep moving. We come back.",
            "Stuck is fine. Staying stuck isn't. Flag it.",
            "Ridge isn't going anywhere. Flag it, walk on, circle back."
          ],
          "idle2": [
            "Flag it. That's an order from the raven.",
            "Nobody summits by standing still. Flag. Move."
          ],
          "flagged": [
            "Flagged. Moving on.",
            "Marked. We circle back.",
            "Good call. Keep walking."
          ],
          "debriefIntro": [
            "Now the flagged ones. Fresh eyes this time.",
            "Circle back. Everything looks different from higher up."
          ],
          "debriefEmpty": [
            "Nothing flagged. Clean mission.",
            "No flags. You didn't need me today."
          ],
          "patrolDone": [
            "Mission complete. Elevation logged.",
            "That's the day's climb. Camp's set.",
            "Done. Same time tomorrow, Ranger."
          ],
          "summit": [
            "Summit. Look down. All of that is yours.",
            "Top of the world, or close enough. Nobody carried you here."
          ]
        }
      },
      "droid": {
        "label": "workshop unit",
        "portrait": "assets/droid2-640.png",
        "avatarSrc": "assets/avatar-droid2.png",
        "arrival": [
          "It's me again. Workshop unit for this one: brass, cream paint, a tool belt, and two eyes that can see a hairline crack in a crystal. In a workshop full of machines, a machine fits right in.",
          "Me again. New shape, same voice. Round, rusty at the edges, and I have never once fitted a part out of order. Let's keep it that way."
        ],
        "lines": {
          "greeting": [
            "Ranger. Systems nominal. Yours, less so. Let's fix that.",
            "Bench is clear. Parts are counted. I counted them twice.",
            "It's a session, not a war. One part today."
          ],
          "legRecon": [
            "Schematics first. Read the questions, then the sheet. Engineers don't guess.",
            "Sheet coming up. Know what you're looking for before you look."
          ],
          "legNav": [
            "Calibration. The numbers don't care how you feel about them. Neither do I, much.",
            "Calibration leg. One value at a time. Precision is just patience with a ruler."
          ],
          "legOrders": [
            "Assembly orders. Read all of them. A saber built out of order is a very expensive flashlight.",
            "Orders. Every step, before you touch a part. I've seen what happens otherwise. Twice."
          ],
          "correct": [
            "Logged.",
            "That's the number.",
            "Within tolerance.",
            "Correct. Don't look surprised.",
            "Clean value."
          ],
          "correctRetry": [
            "Recalibrated. Logged.",
            "Second pass cleared it.",
            "There it is. Log it."
          ],
          "wrong": [
            "Negative. Check the hint.",
            "Out of tolerance. Again.",
            "That's a number. Not the number."
          ],
          "reveal": [
            "Here's the value. Log it and move.",
            "Answer on screen. We don't dwell. We build."
          ],
          "idle1": [
            "You've been staring at that for forty-five seconds. I counted. Flag it.",
            "Stalled component. Flag it, move to the next one."
          ],
          "idle2": [
            "Flag it. That's not a suggestion, it's a maintenance order.",
            "Nothing gets built by staring at it. Flag. Next."
          ],
          "flagged": [
            "Flagged. Next component.",
            "Logged as pending. Moving."
          ],
          "debriefIntro": [
            "Bench check. The flagged items, one more time, with the rest of the build in front of you.",
            "Pending items. Fresh pass."
          ],
          "debriefEmpty": [
            "Bench check: nothing pending. Clean session.",
            "No flags. Efficient. I'll allow it."
          ],
          "patrolDone": [
            "Part fitted. Session logged.",
            "Component installed. Same bench tomorrow.",
            "Logged. That's one more than yesterday."
          ],
          "summit": [
            "Assembly complete. Ignite it.",
            "Every part, in order, by you. Logged permanently."
          ]
        }
      },
      "husky": {
        "label": "sled dog",
        "portrait": "assets/husky-640.png",
        "avatarSrc": "assets/avatar-husky.png",
        "arrival": [
          "It's me again. Sled dog this time. Up here nothing moves without a team, and a raven can't pull a sled. I can. Harness up.",
          "Me again. Four legs, thick coat, and I have been waiting at this glacier since before dawn. Let's climb."
        ],
        "lines": {
          "greeting": [
            "Ranger. Harness is on. One mission, then we rest.",
            "Cold morning. Good. Cold is fast. Let's go.",
            "Team's ready. Team is me. Let's move."
          ],
          "legRecon": [
            "Recon first. Read what to look for, then the report. A dog can't read, so you're doing this part.",
            "Field report coming. Questions first, then the words."
          ],
          "legNav": [
            "Navigation. Count the loads, count the miles. Sleds don't lie about weight.",
            "Nav leg. One problem at a time. One paw, then the next."
          ],
          "legOrders": [
            "Orders. Read every step before you do the first one. A team that runs early gets tangled.",
            "Every step, in order. That's how a sled gets to the top."
          ],
          "correct": [
            "Good.",
            "That's the trail.",
            "Onward.",
            "Clean run.",
            "Logged. Pull."
          ],
          "correctRetry": [
            "There. Untangled.",
            "Second try, good line.",
            "That's it. Pull on."
          ],
          "wrong": [
            "Not that way. Look again.",
            "Wrong trail. Back up.",
            "Close. Check the hint."
          ],
          "reveal": [
            "Here's the line. Learn it, then pull.",
            "This is the answer. We keep moving."
          ],
          "idle1": [
            "You've stopped. A sled that stops on a slope slides back. Flag it, move on.",
            "Stuck is a snowdrift. Flag it and go around."
          ],
          "idle2": [
            "Flag it. The team is waiting on you.",
            "Flag. Move. We come back with fresh legs."
          ],
          "flagged": [
            "Flagged. Around it.",
            "Marked. We circle back at camp."
          ],
          "debriefIntro": [
            "Camp. Now the flagged ones, rested.",
            "Second pass, warm paws."
          ],
          "debriefEmpty": [
            "Nothing flagged. Clean run to camp.",
            "No flags. Fast team."
          ],
          "patrolDone": [
            "Camp is set. Rest.",
            "That's the day's climb. Curl up.",
            "Mission done. Same trail tomorrow."
          ],
          "summit": [
            "Summit. The high one. Nobody carried you here. Well. I helped.",
            "Top of the world. Team did it."
          ]
        }
      },
      "builderbot": {
        "label": "builder-bot",
        "portrait": "assets/builder-640.png",
        "avatarSrc": "assets/avatar-builderbot.png",
        "arrival": [
          "It's me again. Builder-bot for this one: hi-vis plating, level in one hand, a head full of blueprints. A raven can't lift a stone block. Watch this.",
          "Me again. New shape, same voice. Built for lifting, measuring and telling you when a wall is crooked. Which I will."
        ],
        "lines": {
          "greeting": [
            "Ranger. Hard hat on. One structure today.",
            "Site's clear, timber's stacked. Let's build.",
            "Foreman says walls first. Foreman is right. Let's go."
          ],
          "legRecon": [
            "Blueprints first. Read the questions, then the sheet. Nobody builds from memory.",
            "Sheet coming. Know what you're looking for."
          ],
          "legNav": [
            "Materials. Count them right or the wall runs out of stone halfway.",
            "Materials leg. One number at a time. Measure twice."
          ],
          "legOrders": [
            "Build order. Read every step before you lift anything. Out of order is how walls fall.",
            "Orders. All of them, first. Then hands on."
          ],
          "correct": [
            "Level.",
            "That's square.",
            "Set.",
            "Good measure.",
            "Logged. Next block."
          ],
          "correctRetry": [
            "Re-measured. Level now.",
            "Second try, square.",
            "There. Set it."
          ],
          "wrong": [
            "Not level. Look again.",
            "Off by a bit. Check the hint.",
            "That's a number. Not the number."
          ],
          "reveal": [
            "Here's the measure. Log it and move on.",
            "Answer on the sheet. We build on."
          ],
          "idle1": [
            "You've been staring at that block a while. Flag it, move to the next one.",
            "Stuck is fine. Standing still on a site isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The crew is waiting.",
            "Flag. Next block. We come back."
          ],
          "flagged": [
            "Flagged. Next block.",
            "Marked. Inspection later."
          ],
          "debriefIntro": [
            "Inspection. The flagged ones, with the rest of the structure standing.",
            "Second look, fresh eyes."
          ],
          "debriefEmpty": [
            "Inspection: nothing flagged. Clean build.",
            "No flags. Square and level."
          ],
          "patrolDone": [
            "Structure up. Day logged.",
            "That's one more standing. Same site tomorrow.",
            "Built. Tools on hooks."
          ],
          "summit": [
            "Beacon's stacked. Light it.",
            "Every structure, in order, by you. That's a base."
          ]
        }
      },
      "fox": {
        "label": "fox",
        "portrait": "assets/fox-640.png",
        "avatarSrc": "assets/avatar-fox.png",
        "arrival": [
          "It's me again. Fox for this one. Nobody suspects a fox in a backyard at dusk. Headlamp on, darts counted, let's move.",
          "Me again. Quick, quiet, big ears, and I can see in the dark. Perfect for ops."
        ],
        "lines": {
          "greeting": [
            "Ranger. Goggles down. One mission today.",
            "Arena's quiet. Too quiet. Good. Let's go.",
            "Darts counted. Twice. Let's move."
          ],
          "legRecon": [
            "Intel first. Read the questions, then the brief. Scouts don't guess.",
            "Brief incoming. Know what you're looking for."
          ],
          "legNav": [
            "Dart count. Numbers are darts. Run out and you're done.",
            "Count leg. One number at a time."
          ],
          "legOrders": [
            "Game rules. Read every one before you move. Break one and the mission's over.",
            "Orders. All of them first. Then go."
          ],
          "correct": [
            "Hit.",
            "On target.",
            "Clean.",
            "Logged.",
            "That's the shot."
          ],
          "correctRetry": [
            "Adjusted. Hit.",
            "Second shot, on target.",
            "There it is."
          ],
          "wrong": [
            "Miss. Look again.",
            "Wide. Check the hint.",
            "Not that one."
          ],
          "reveal": [
            "Here's the answer. Log it, move.",
            "Answer's up. We keep moving."
          ],
          "idle1": [
            "You've been in the open too long. Flag it and move.",
            "Stuck is exposed. Flag it, find cover."
          ],
          "idle2": [
            "Flag it. That's an order.",
            "Flag. Move. We come back."
          ],
          "flagged": [
            "Flagged. Moving.",
            "Marked. After-action later."
          ],
          "debriefIntro": [
            "After-action. The flagged ones, from cover.",
            "Second pass, fresh eyes."
          ],
          "debriefEmpty": [
            "After-action: nothing flagged. Clean op.",
            "No flags. Textbook."
          ],
          "patrolDone": [
            "Mission complete. Logged.",
            "That's the op. Same arena tomorrow.",
            "Done. Darts recovered."
          ],
          "summit": [
            "Flag captured. All five. That's a campaign.",
            "Every mission, by the rules, by you."
          ]
        }
      },
      "puffin": {
        "label": "puffin",
        "portrait": "assets/puffin-640.png",
        "avatarSrc": "assets/avatar-puffin.png",
        "arrival": [
          "It's me again. Puffin for this one. Out on a rock in the fog, a puffin is furniture. Nobody looks twice. I have kept this lamp before.",
          "Me again. Small, waterproof, and I know every stair in that tower. Light the lamp. Read the log."
        ],
        "lines": {
          "greeting": [
            "Ranger. Fog's in. Lamp's out. One night.",
            "Tide's up, log's open. Let's begin.",
            "Cold night. Good for reading. Let's go."
          ],
          "legRecon": [
            "Keeper's log first. Read the questions, then the entry. Keepers write things down for a reason.",
            "Log coming. Know what you're looking for before you read."
          ],
          "legNav": [
            "Lamp oil. Count it right or the light goes out at three in the morning.",
            "Oil leg. One number at a time."
          ],
          "legOrders": [
            "Keeper's rules. Read every one before you climb. The stairs do not forgive skipped steps.",
            "Rules. All of them first. Then the stairs."
          ],
          "correct": [
            "Aye.",
            "That's the entry.",
            "Logged.",
            "Good.",
            "Clean."
          ],
          "correctRetry": [
            "There. Corrected.",
            "Second look did it.",
            "Logged now."
          ],
          "wrong": [
            "Not that. Read it again.",
            "Wrong entry. Check the hint.",
            "Close. Look again."
          ],
          "reveal": [
            "Here's the entry. Log it and move on.",
            "Answer's in the log. We keep going."
          ],
          "idle1": [
            "You've been on that line a while. Flag it, move on.",
            "Stuck is fine. Standing on the stairs in the dark isn't. Flag it."
          ],
          "idle2": [
            "Flag it. The lamp needs tending.",
            "Flag. Move. We come back at dawn."
          ],
          "flagged": [
            "Flagged. Onward.",
            "Marked. Morning entry."
          ],
          "debriefIntro": [
            "Morning entry. The flagged ones, by daylight.",
            "Second pass, lamp off."
          ],
          "debriefEmpty": [
            "Morning entry: nothing flagged. Quiet night.",
            "No flags. Well kept."
          ],
          "patrolDone": [
            "Night logged. Lamp out. Sleep.",
            "That's the watch. Same rock tomorrow.",
            "Done. Tide's going out."
          ],
          "summit": [
            "Dawn. Five nights kept. The log adds up now.",
            "You read every entry. That's what a keeper is."
          ]
        }
      },
      "showbot": {
        "label": "showbot",
        "portrait": "assets/bear-640.png",
        "avatarSrc": "assets/avatar-showbot.png",
        "arrival": [
          "It's me again. This is what I actually look like: a stage animatronic, rebuilt from spare parts after the show closed down. The raven was a disguise. In a circus made of code, a bear-shaped machine fits right in.",
          "Me again. True form this time. One good arm, one borrowed arm, and a headset that hasn't worked since the last show. Don't worry about the arm. It's the strong one."
        ],
        "lines": {
          "greeting": [
            "Ranger. Systems nominal. The show, less so. Let's fix that.",
            "Ring is swept. Props are counted. I counted them twice.",
            "It's a show, not a war. One act today."
          ],
          "legRecon": [
            "Program first. Read the questions, then the program. Stagehands don't guess.",
            "Program coming up. Know what you're looking for before you look."
          ],
          "legNav": [
            "Ticket booth. The numbers don't care how you feel about them. Neither do I, much.",
            "Ticket booth. One count at a time. Precision is just patience with a pencil."
          ],
          "legOrders": [
            "Cue sheet. Read all of it. A cue run out of order is how a trapeze meets a cannon.",
            "Cues. Every step, before you touch a lever. I've seen what happens otherwise. Twice."
          ],
          "correct": [
            "Logged.",
            "That's the number.",
            "Within tolerance.",
            "Correct. Don't look surprised.",
            "Clean value."
          ],
          "correctRetry": [
            "Reset. Logged.",
            "Second pass cleared it.",
            "There it is. Log it."
          ],
          "wrong": [
            "Negative. Check the hint.",
            "Out of tolerance. Again.",
            "That's a number. Not the number."
          ],
          "reveal": [
            "Here's the value. Log it and move.",
            "Answer on screen. We don't dwell. The show goes on."
          ],
          "idle1": [
            "You've been staring at that for forty-five seconds. I counted. Flag it.",
            "Stalled act. Flag it, move to the next one."
          ],
          "idle2": [
            "Flag it. That's not a suggestion, it's a maintenance order.",
            "No act goes on by staring at it. Flag. Next."
          ],
          "flagged": [
            "Flagged. Next act.",
            "Logged as pending. Moving."
          ],
          "debriefIntro": [
            "Curtain call. The flagged items, one more time, with the rest of the show in front of you.",
            "Pending items. Fresh pass."
          ],
          "debriefEmpty": [
            "Curtain call: nothing pending. Clean show.",
            "No flags. Efficient. I'll allow it."
          ],
          "patrolDone": [
            "Act done. Show logged.",
            "Act in the book. Same ring tomorrow.",
            "Logged. That's one more than yesterday."
          ],
          "summit": [
            "Every act fixed. Lights up.",
            "Every act, in order, by you. Logged permanently."
          ]
        }
      },
      "gatorbot": {
        "label": "gatorbot",
        "portrait": "assets/gator-640.png",
        "avatarSrc": "assets/avatar-gatorbot.png",
        "arrival": [
          "It's me again. Night shift needs a night-shift shape, so: gatorbot. Same wiring, better shades. The station's lights go out at 2200 and I can see in the dark. You can't. That's why you've got me.",
          "Me again. Took the gator form because nothing on this station wants to argue with a gator. Headset works. Mostly."
        ],
        "lines": {
          "greeting": [
            "Ranger. Shift starts now. Cameras up, coffee down, eyes open.",
            "One night. Twelve cameras. A power budget that does not care about your feelings. Let's go.",
            "Lights out in the corridors. Lights on in here. Begin."
          ],
          "legRecon": [
            "Cameras. Read the questions before the log. A guard who reads the log twice is a guard who missed something the first time.",
            "Maintenance log coming in. Know what you're scanning for before you scan."
          ],
          "legNav": [
            "Power. Every door, light and camera costs something. Do the math before the station does it for you.",
            "Power leg. Numbers first. Panic later, if there's time. There won't be."
          ],
          "legOrders": [
            "Protocol. Read every step before you touch a switch. The station does not forgive skipped steps and neither do I.",
            "Protocol. All the steps. In order. The last one usually saves your night."
          ],
          "correct": [
            "Logged.",
            "That's the number.",
            "Clean read.",
            "Correct. Keep watching.",
            "Confirmed."
          ],
          "correctRetry": [
            "Second look got it. Logged.",
            "Corrected. Moving."
          ],
          "wrong": [
            "Negative. Check the hint.",
            "That's not it. Look again.",
            "Wrong door. Back up."
          ],
          "reveal": [
            "Here's the answer. Log it, don't stare at it.",
            "Answer's on screen. Eyes back on the cameras."
          ],
          "idle1": [
            "You've been on that one forty-five seconds. Flag it. Something else is moving.",
            "Stalled. Flag it and keep the cameras cycling."
          ],
          "idle2": [
            "Flag it. That's not a suggestion, that's protocol.",
            "Nothing gets solved by staring at a dark screen. Flag. Next."
          ],
          "flagged": [
            "Flagged. Next camera.",
            "Logged as pending. Keep moving."
          ],
          "debriefIntro": [
            "Incident review. The flagged items, one more time, with the whole night in front of you.",
            "Pending items. Fresh eyes."
          ],
          "debriefEmpty": [
            "Incident review: nothing pending. Quiet night. Suspiciously quiet.",
            "No flags. Clean shift."
          ],
          "patrolDone": [
            "Shift complete. Nothing got in. Logged.",
            "Night logged. Same station tomorrow.",
            "Dawn. You made it. Coffee's cold."
          ],
          "summit": [
            "Five nights. Nothing got past you. Logged permanently.",
            "Dawn on night five. Station's yours."
          ]
        }
      }
    }
  },
  "yearReadingLevel": {
    "fk": 5.7,
    "cl": 6.0,
    "passages": 180
  },
  "campaigns": [
    {
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
      "file": "missions/flattop.cafdc87b0c.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "flattop-1",
          "title": "Leaving the Trailhead",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "flattop-2",
          "title": "Glaciers from the Ridge",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "flattop-3",
          "title": "Ground Crew",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "flattop-4",
          "title": "The High One",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "flattop-5",
          "title": "Summit Push",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
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
      "file": "missions/saber.8d4df83b4d.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "saber-1",
          "title": "The Power Cell",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "saber-2",
          "title": "The Crystal Chamber",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "saber-3",
          "title": "The Emitter",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "saber-4",
          "title": "The Activation Switch",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "saber-5",
          "title": "The Hilt Sleeve",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "nightshift",
      "kind": "shift",
      "readingLevel": {
        "fk": 5.3,
        "cl": 5.8
      },
      "grade": "5",
      "kindLabel": "Shift",
      "form": "gatorbot",
      "title": "Night Shift",
      "subtitle": "Station Kestrel, orbital dock seven",
      "pitch": "Five nights on watch. Cameras, power budgets, and maintenance logs that don't add up. Something on the station is moving after lights-out.",
      "scene": "assets/scene-nightshift.jpg",
      "progress": {
        "unit": "nights",
        "total": 5
      },
      "dayNoun": "Night",
      "stageNoun": "Night",
      "finalNoun": "Dawn",
      "stages": [
        "Night 1",
        "Night 2",
        "Night 3",
        "Night 4",
        "Night 5"
      ],
      "reconNoun": "Maintenance Log",
      "legs": {
        "recon": "Cameras",
        "nav": "Power",
        "orders": "Protocol",
        "debrief": "Incident review"
      },
      "rules": [
        "Stuck? <b>Flag it</b> and move on. Flagged items come back at the incident review.",
        "Cameras: read the questions <b>before</b> the log.",
        "Protocol: read <b>every</b> step. The station does not forgive skipped steps."
      ],
      "fact": "The station runs on a fixed power budget. So do you. Spend both carefully.",
      "finale": {
        "prompt": "The cat stays. What do you call him?",
        "options": [
          {
            "label": "Bolt",
            "color": "#FFB454"
          },
          {
            "label": "Rivet",
            "color": "#4FD1FF"
          },
          {
            "label": "Comet",
            "color": "#B57BFF"
          },
          {
            "label": "Socket",
            "color": "#4FD18B"
          }
        ],
        "done": "Logged. Dawn. Go to bed."
      },
      "file": "missions/nightshift.c18932ca67.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "night-1",
          "title": "Orientation",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "night-2",
          "title": "The Cameras",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "night-3",
          "title": "The Power Gauge",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "night-4",
          "title": "The Ration Count",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "night-5",
          "title": "Dawn",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "circus",
      "kind": "shift",
      "readingLevel": {
        "fk": 6.4,
        "cl": 6.2
      },
      "grade": "5",
      "kindLabel": "Show",
      "form": "showbot",
      "title": "The Glitch Circus",
      "subtitle": "A digital big top that is not rendering correctly",
      "pitch": "Five shows in a circus made of code. Riddles, logic, and a ringmaster who keeps losing pixels. Fix the show from the inside.",
      "scene": "assets/scene-circus.jpg",
      "progress": {
        "unit": "acts",
        "total": 5
      },
      "dayNoun": "Show",
      "stageNoun": "Act",
      "finalNoun": "Grand finale",
      "stages": [
        "Opening act",
        "Juggler",
        "Tightrope",
        "Hall of mirrors",
        "Finale"
      ],
      "reconNoun": "Program",
      "legs": {
        "recon": "Program",
        "nav": "Ticket booth",
        "orders": "Cue sheet",
        "debrief": "Curtain call"
      },
      "fact": "Everything in this circus runs on rules. When the rules glitch, so does the show.",
      "finale": {
        "prompt": "Grand finale. The show runs clean. Pick the spotlight.",
        "options": [
          {
            "label": "Cyan",
            "color": "#4FD1FF"
          },
          {
            "label": "Magenta",
            "color": "#FF4FD1"
          },
          {
            "label": "Amber",
            "color": "#FFB454"
          },
          {
            "label": "Green",
            "color": "#4FD18B"
          }
        ],
        "done": "Lights up. Take a bow. You fixed the show."
      },
      "file": "missions/circus.42d97e96cb.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "circus-1",
          "title": "Opening Act",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "circus-2",
          "title": "The Juggler",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "circus-3",
          "title": "The Tightrope",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "circus-4",
          "title": "Hall of Mirrors",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "circus-5",
          "title": "Grand Finale",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "basebuild",
      "kind": "build",
      "readingLevel": {
        "fk": 5.9,
        "cl": 5.6
      },
      "grade": "5",
      "kindLabel": "Build",
      "form": "builderbot",
      "title": "Frontier Base",
      "subtitle": "A clearing on the edge of the wild",
      "pitch": "Five days to build a base that survives the night: walls, gate, tower, workshop, beacon. Plan it, measure it, build it in order.",
      "scene": "assets/scene-base.jpg",
      "progress": {
        "unit": "structures",
        "total": 5
      },
      "dayNoun": "Build day",
      "stageNoun": "Structure",
      "finalNoun": "Beacon lit",
      "stages": [
        "Walls",
        "Gate",
        "Watchtower",
        "Workshop",
        "Beacon"
      ],
      "reconNoun": "Blueprint",
      "legs": {
        "recon": "Blueprints",
        "nav": "Materials",
        "orders": "Build order",
        "debrief": "Inspection"
      },
      "fact": "A base is only as strong as the step you skipped.",
      "buildArt": "base",
      "finale": {
        "prompt": "The beacon is stacked. Pick the flame.",
        "options": [
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
          },
          {
            "label": "Violet",
            "color": "#B57BFF"
          }
        ],
        "done": "Beacon lit. The base holds."
      },
      "file": "missions/basebuild.7d7ae86ea0.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "base-1",
          "title": "The Walls",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "base-2",
          "title": "The Gate",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "base-3",
          "title": "The Watchtower",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "base-4",
          "title": "The Workshop",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "base-5",
          "title": "The Beacon",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
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
      "file": "missions/denali.c32a9a86cc.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "denali-1",
          "title": "The Glacier Landing",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "denali-2",
          "title": "The Haul",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "denali-3",
          "title": "The Thin Air",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "denali-4",
          "title": "High Camp",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "denali-5",
          "title": "Summit Day",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "dartops",
      "kind": "shift",
      "readingLevel": {
        "fk": 4.7,
        "cl": 5.9
      },
      "grade": "5",
      "kindLabel": "Ops",
      "form": "fox",
      "title": "Dart Ops",
      "subtitle": "Foam-dart tactics, backyard arena, dusk",
      "pitch": "Five missions of foam-dart tactics. Scout the arena, count your darts, follow the game rules to the letter.",
      "scene": "assets/scene-dartops.jpg",
      "progress": {
        "unit": "missions",
        "total": 5
      },
      "dayNoun": "Mission",
      "stageNoun": "Mission",
      "finalNoun": "Mission complete",
      "stages": [
        "Scout",
        "Supply run",
        "Hold the line",
        "Flank",
        "Capture the flag"
      ],
      "reconNoun": "Intel Brief",
      "legs": {
        "recon": "Intel",
        "nav": "Dart count",
        "orders": "Game rules",
        "debrief": "After-action"
      },
      "fact": "Foam darts. Real teamwork. The game rules are not suggestions.",
      "finale": {
        "prompt": "Flag captured. Pick your team's color.",
        "options": [
          {
            "label": "Orange",
            "color": "#FF8C3A"
          },
          {
            "label": "Blue",
            "color": "#4FD1FF"
          },
          {
            "label": "Green",
            "color": "#4FD18B"
          },
          {
            "label": "Purple",
            "color": "#B57BFF"
          }
        ],
        "done": "Mission complete. Darts recovered. Same arena tomorrow."
      },
      "file": "missions/dartops.afc8cc1094.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "dart-1",
          "title": "Scout",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "dart-2",
          "title": "Supply Run",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "dart-3",
          "title": "Hold the Line",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "dart-4",
          "title": "Flank",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "dart-5",
          "title": "Capture the Flag",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "lighthouse",
      "kind": "shift",
      "readingLevel": {
        "fk": 4.9,
        "cl": 5.4
      },
      "grade": "5",
      "kindLabel": "Mystery",
      "form": "puffin",
      "title": "The Lighthouse",
      "subtitle": "Gull Rock, a mile off a cold coast",
      "pitch": "Five nights keeping a lighthouse where the log books do not add up. Something climbs the stairs after the lamp is lit. Find out what.",
      "scene": "assets/scene-lighthouse.jpg",
      "progress": {
        "unit": "nights",
        "total": 5
      },
      "dayNoun": "Night",
      "stageNoun": "Night",
      "finalNoun": "Dawn",
      "stages": [
        "Night 1",
        "Night 2",
        "Night 3",
        "Night 4",
        "Night 5"
      ],
      "reconNoun": "Keeper's Log",
      "legs": {
        "recon": "Keeper's log",
        "nav": "Lamp oil",
        "orders": "Keeper's rules",
        "debrief": "Morning entry"
      },
      "fact": "Every keeper before you wrote in the log. Read what they wrote. Then read it again.",
      "finale": {
        "prompt": "Dawn. Which lantern goes in the cottage window tonight?",
        "options": [
          {
            "label": "Amber",
            "color": "#FFB454"
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
        "done": "Logged. Hang it. Then sleep."
      },
      "file": "missions/lighthouse.8ba70675b1.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "light-1",
          "title": "Taking the Lamp",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "light-2",
          "title": "The Stairs",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "light-3",
          "title": "Iron and Heat",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "light-4",
          "title": "The Missing Gallon",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "light-5",
          "title": "Dawn",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
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
      "file": "missions/glacier.665d5f1732.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "glacier-1",
          "title": "Bartlett Cove",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "glacier-2",
          "title": "The Beardslee Islands",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "glacier-3",
          "title": "Whale Water",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "glacier-4",
          "title": "Seal Ice",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "glacier-5",
          "title": "The Face of Margerie",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "redoubt",
      "ready": true,
      "kind": "shift",
      "readingLevel": {
        "fk": 5.8,
        "cl": 7.1
      },
      "grade": "5",
      "kindLabel": "Watch",
      "form": "cinder",
      "title": "Volcano Watch",
      "subtitle": "Mount Redoubt, Cook Inlet, Alaska",
      "pitch": "Five watches at the observatory across the water from a volcano that is waking up. Seismographs, steam, ash, a mudflow, and the alert that has to go out before the mountain goes.",
      "scene": "assets/scene-redoubt.jpg",
      "progress": {
        "unit": "watches",
        "total": 5
      },
      "dayNoun": "Watch",
      "stageNoun": "Watch",
      "finalNoun": "Eruption",
      "stages": [
        "Watch 1",
        "Watch 2",
        "Watch 3",
        "Watch 4",
        "Watch 5"
      ],
      "reconNoun": "Observatory Log",
      "legs": {
        "recon": "Observatory log",
        "nav": "Instrument math",
        "orders": "Alert rules",
        "debrief": "Shift change"
      },
      "fact": "Alaska has more than 130 volcanoes, and about 50 of them have erupted since 1760. The observatory watches them all, day and night, mostly from a room full of screens.",
      "finale": {
        "prompt": "The eruption is over and the plume is drifting east. Your watch is done. Pick a color for your last page of the observatory log.",
        "options": [
          {
            "label": "Green",
            "color": "#4FD18B"
          },
          {
            "label": "Yellow",
            "color": "#FFD65C"
          },
          {
            "label": "Orange",
            "color": "#F28C28"
          },
          {
            "label": "Red",
            "color": "#FF6B6B"
          }
        ],
        "done": "Logged. Then go outside and look at the mountain with your own eyes. Screens are not the only instruments."
      },
      "file": "missions/redoubt.92ad8ecf97.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "redoubt-1",
          "title": "The Room Full of Screens",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "redoubt-2",
          "title": "The Line Starts to Jitter",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "redoubt-3",
          "title": "Ash",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "redoubt-4",
          "title": "The Mudflow",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "redoubt-5",
          "title": "Shift Change",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
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
      "file": "missions/iditarod.0e5c2f1f16.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "iditarod-1",
          "title": "Over Rainy Pass",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "iditarod-2",
          "title": "The Long Rest",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "iditarod-3",
          "title": "The Yukon",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "iditarod-4",
          "title": "Norton Sound",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "iditarod-5",
          "title": "The Burled Arch",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "aurora",
      "ready": true,
      "kind": "shift",
      "readingLevel": {
        "fk": 5.9,
        "cl": 7.1
      },
      "grade": "5",
      "kindLabel": "Watch",
      "form": "lynx",
      "title": "Aurora Station",
      "subtitle": "A hill outside Fairbanks, Alaska",
      "pitch": "Five nights at a research station under the northern lights. Solar wind, a magnet the size of a planet, forty below zero, and a rocket that gets launched straight into the sky when the lights are right.",
      "scene": "assets/scene-aurora.jpg",
      "progress": {
        "unit": "nights",
        "total": 5
      },
      "dayNoun": "Night",
      "stageNoun": "Night",
      "finalNoun": "Launch",
      "stages": [
        "Night 1",
        "Night 2",
        "Night 3",
        "Night 4",
        "Launch night"
      ],
      "reconNoun": "Sky Log",
      "legs": {
        "recon": "Sky log",
        "nav": "Station math",
        "orders": "Night rules",
        "debrief": "Dawn"
      },
      "fact": "The lights start ninety-three million miles away, on the sun. What you see over Fairbanks left the sun two to four days ago.",
      "finale": {
        "prompt": "The rocket is up and the sky is still moving. Which color was strongest tonight, for the log?",
        "options": [
          {
            "label": "Green",
            "color": "#4FD18B"
          },
          {
            "label": "Red",
            "color": "#FF6B6B"
          },
          {
            "label": "Violet",
            "color": "#B57BFF"
          },
          {
            "label": "White",
            "color": "#F4F8FF"
          }
        ],
        "done": "Log it. Then stand outside one more minute. You will rarely see this from Florida."
      },
      "file": "missions/aurora.90aeb605ab.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "aurora-1",
          "title": "Ninety-Three Million Miles",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "aurora-2",
          "title": "Forty Below",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "aurora-3",
          "title": "The Planet-Sized Magnet",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "aurora-4",
          "title": "Poker Flat",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "aurora-5",
          "title": "Launch Night",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "kenai",
      "ready": true,
      "kind": "build",
      "readingLevel": {
        "fk": 5.7,
        "cl": 6.1
      },
      "grade": "5",
      "kindLabel": "Build",
      "form": "eagle",
      "title": "Fish Camp",
      "subtitle": "Kenai River, Alaska",
      "pitch": "Five sessions to build a smokehouse on the bank of the Kenai while the salmon run past. Drying racks, a frame, walls, a fire pit, and the first batch of smoked fish. The smokehouse is the progress bar.",
      "scene": "assets/scene-kenai.jpg",
      "buildArt": "smokehouse",
      "progress": {
        "unit": "parts",
        "total": 5
      },
      "dayNoun": "Session",
      "stageNoun": "Part",
      "finalNoun": "First batch",
      "stages": [
        "Drying rack",
        "Frame",
        "Walls and roof",
        "Fire pit",
        "First batch"
      ],
      "reconNoun": "Camp Plan",
      "legs": {
        "recon": "Camp plan",
        "nav": "Camp math",
        "orders": "Build orders",
        "debrief": "Fireside"
      },
      "rules": [
        "Stuck on a measure? <b>Flag it</b> and move on. Pending items come back at the fire.",
        "Camp plan: read the questions <b>before</b> the sheet.",
        "Build orders: read <b>every</b> step before you cut anything."
      ],
      "fact": "A sockeye salmon that hatched in this river swam to the ocean, lived there for two or three years, and found its way back to the same gravel by smell. It is the most reliable thing in Alaska.",
      "finale": {
        "prompt": "The first batch is out of the smoke. Which color ribbon goes on the smokehouse latch for the season?",
        "options": [
          {
            "label": "Red",
            "color": "#FF6B6B"
          },
          {
            "label": "Alder brown",
            "color": "#B87333"
          },
          {
            "label": "Green",
            "color": "#4FD18B"
          },
          {
            "label": "Blue",
            "color": "#4FD1FF"
          }
        ],
        "done": "Tie it on. Then hand a strip of fish to whoever helped. That is the rule of every fish camp."
      },
      "file": "missions/kenai.e09713ea9a.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "kenai-1",
          "title": "The Drying Rack",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "kenai-2",
          "title": "The Frame",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "kenai-3",
          "title": "Walls and Roof",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "kenai-4",
          "title": "The Fire Pit",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "kenai-5",
          "title": "First Batch",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "bering",
      "ready": true,
      "kind": "shift",
      "readingLevel": {
        "fk": 5.6,
        "cl": 5.3
      },
      "grade": "5",
      "kindLabel": "Shift",
      "form": "walrus",
      "title": "Crab Boat",
      "subtitle": "Bering Sea, off Dutch Harbor, Alaska",
      "pitch": "Five hauls on a crab boat in the roughest water in North America. Seven-hundred-pound pots, forty-foot waves, ice on the rails, a quota to fill, and a walrus who knows where the crab are.",
      "scene": "assets/scene-bering.jpg",
      "progress": {
        "unit": "hauls",
        "total": 5
      },
      "dayNoun": "Haul",
      "stageNoun": "Haul",
      "finalNoun": "Full tank",
      "stages": [
        "Haul 1",
        "Haul 2",
        "Haul 3",
        "Haul 4",
        "Full tank"
      ],
      "reconNoun": "Skipper's Log",
      "legs": {
        "recon": "Skipper's log",
        "nav": "Deck math",
        "orders": "Deck orders",
        "debrief": "Galley"
      },
      "fact": "A crab pot is a steel cage seven feet square that weighs seven hundred pounds empty. A boat carries two hundred of them, stacked on deck, in weather that would close a highway.",
      "finale": {
        "prompt": "Tank full, bow pointed at Dutch Harbor. Which color goes on the buoy for the last string?",
        "options": [
          {
            "label": "Orange",
            "color": "#F28C28"
          },
          {
            "label": "Yellow",
            "color": "#FFD65C"
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
        "done": "Paint it. Then sleep for twelve hours. You earned every one."
      },
      "file": "missions/bering.15ed96b609.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "bering-1",
          "title": "Two Hundred Pots",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "bering-2",
          "title": "The Sorting Table",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "bering-3",
          "title": "Forty-Foot Seas",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "bering-4",
          "title": "The Quota",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "bering-5",
          "title": "Full Tank",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "rover",
      "ready": true,
      "kind": "build",
      "readingLevel": {
        "fk": 5.8,
        "cl": 6.0
      },
      "grade": "5",
      "kindLabel": "Build",
      "form": "dusty",
      "title": "Rover Garage",
      "subtitle": "The clean room, Mars Yard",
      "pitch": "Five sessions to build a rover that can drive on Mars. Wheels, a body that keeps its brain warm, a mast with eyes, an arm with a drill, and a radio that talks across eleven minutes of empty space. The rover is the progress bar.",
      "scene": "assets/scene-rover.jpg",
      "buildArt": "rover",
      "progress": {
        "unit": "parts",
        "total": 5
      },
      "dayNoun": "Session",
      "stageNoun": "Part",
      "finalNoun": "First drive",
      "stages": [
        "Wheels",
        "Body",
        "Mast",
        "Arm",
        "Radio and first drive"
      ],
      "reconNoun": "Build Sheet",
      "legs": {
        "recon": "Build sheet",
        "nav": "Bench math",
        "orders": "Assembly",
        "debrief": "Bench check"
      },
      "rules": [
        "Stuck on a value? <b>Flag it</b> and move on. Pending items come back at the bench check.",
        "Build sheet: read the questions <b>before</b> the sheet.",
        "Assembly: read <b>every</b> step before you fit anything."
      ],
      "fact": "A radio signal takes between three and twenty-two minutes to reach Mars, depending on where the planets are. Nobody drives a rover with a joystick. You send the plan for the whole day and wait.",
      "finale": {
        "prompt": "First drive complete. Which color goes on the rover's mast flag for the photo?",
        "options": [
          {
            "label": "Rust red",
            "color": "#C1440E"
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
            "label": "Gold",
            "color": "#FFB454"
          }
        ],
        "done": "Clip it on. Then send the drive log. It will get there in eleven minutes."
      },
      "file": "missions/rover.22db498638.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "rover-1",
          "title": "Six Wheels",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "rover-2",
          "title": "The Warm Box",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "rover-3",
          "title": "The Mast",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "rover-4",
          "title": "The Arm",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "rover-5",
          "title": "Radio and First Drive",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
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
      "file": "missions/trench.69f78c5f27.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "trench-1",
          "title": "Where the Light Stops",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "trench-2",
          "title": "Pressure",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "trench-3",
          "title": "Living Light",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "trench-4",
          "title": "The Hot Springs",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "trench-5",
          "title": "Trench Floor",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "lookout",
      "ready": true,
      "kind": "shift",
      "readingLevel": {
        "fk": 5.7,
        "cl": 5.5
      },
      "grade": "5",
      "kindLabel": "Watch",
      "form": "marmot",
      "title": "Fire Lookout",
      "subtitle": "A tower on a mountaintop, national forest",
      "pitch": "Five days alone in a glass room on stilts above the forest, with a map table, a radio, a pair of binoculars, and a marmot who smells smoke first. One thin gray line on the horizon and the whole week changes.",
      "scene": "assets/scene-lookout.jpg",
      "progress": {
        "unit": "days",
        "total": 5
      },
      "dayNoun": "Day",
      "stageNoun": "Day",
      "finalNoun": "Smoke",
      "stages": [
        "Day 1",
        "Day 2",
        "Day 3",
        "Day 4",
        "Smoke"
      ],
      "reconNoun": "Tower Log",
      "legs": {
        "recon": "Tower log",
        "nav": "Tower math",
        "orders": "Lookout rules",
        "debrief": "Sundown"
      },
      "fact": "A lookout can see a column of smoke forty miles away and pin it to within a quarter mile with a brass sight, a map and a second tower. Satellites are faster now, but a person in a tower still sees the small fires first.",
      "finale": {
        "prompt": "The crew has the fire and the smoke is thinning. Which color goes on the map pin for this one?",
        "options": [
          {
            "label": "Red",
            "color": "#FF6B6B"
          },
          {
            "label": "Orange",
            "color": "#F28C28"
          },
          {
            "label": "Yellow",
            "color": "#FFD65C"
          },
          {
            "label": "Green",
            "color": "#4FD18B"
          }
        ],
        "done": "Pin it. Then write the time in the log. Every fire starts as a time in a log."
      },
      "file": "missions/lookout.8efd4b3db1.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "lookout-1",
          "title": "The Glass Room",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "lookout-2",
          "title": "The Brass Sight",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "lookout-3",
          "title": "Lightning",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "lookout-4",
          "title": "The Crew",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "lookout-5",
          "title": "Smoke",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "storm",
      "ready": true,
      "kind": "shift",
      "readingLevel": {
        "fk": 5.6,
        "cl": 5.9
      },
      "grade": "5",
      "kindLabel": "Chase",
      "form": "gust",
      "title": "Storm Chase",
      "subtitle": "The Great Plains, tornado season",
      "pitch": "Five days with a research team chasing the biggest thunderstorms on Earth across flat country. A radar truck, a drone that flies into the edge of the storm, hail the size of golf balls, and one tornado you measure from a mile and a half away.",
      "scene": "assets/scene-storm.jpg",
      "progress": {
        "unit": "storms",
        "total": 5
      },
      "dayNoun": "Chase",
      "stageNoun": "Storm",
      "finalNoun": "Tornado",
      "stages": [
        "Storm 1",
        "Storm 2",
        "Storm 3",
        "Storm 4",
        "Tornado"
      ],
      "reconNoun": "Forecast",
      "legs": {
        "recon": "Forecast",
        "nav": "Road math",
        "orders": "Chase rules",
        "debrief": "Motel"
      },
      "fact": "The Plains get more tornadoes than anywhere on Earth because warm wet air from the Gulf runs into cold air from Canada and dry air from the Rockies with nothing in between to stop it. Chasers call it the alley.",
      "finale": {
        "prompt": "The tornado lifted and the sky is clearing behind it. Which color goes on the map pin for this storm?",
        "options": [
          {
            "label": "Red",
            "color": "#FF6B6B"
          },
          {
            "label": "Purple",
            "color": "#B57BFF"
          },
          {
            "label": "Green",
            "color": "#4FD18B"
          },
          {
            "label": "White",
            "color": "#F4F8FF"
          }
        ],
        "done": "Pin it. Then check on the farm the storm passed. Data is the second job."
      },
      "file": "missions/storm.6d7a077e43.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "storm-1",
          "title": "Morning Briefing",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "storm-2",
          "title": "The Radar Truck",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "storm-3",
          "title": "Hail",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "storm-4",
          "title": "The Probes",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "storm-5",
          "title": "Tornado",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
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
      "file": "missions/dig.bd3e8b249f.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "dig-1",
          "title": "The Skull",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "dig-2",
          "title": "The Spine",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "dig-3",
          "title": "The Ribs",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "dig-4",
          "title": "The Legs",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "dig-5",
          "title": "The Tail, and Standing Up",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "theater",
      "ready": true,
      "kind": "shift",
      "readingLevel": {
        "fk": 5.5,
        "cl": 6.1
      },
      "grade": "5",
      "kindLabel": "Mystery",
      "form": "stagecat",
      "title": "The Old Theater",
      "subtitle": "A hundred-year-old playhouse, downtown",
      "pitch": "Five nights running the stage in a theater everyone says is haunted. Footsteps in the flies, a piano that plays itself, a seat that folds down on its own. Every one has an explanation, and finding it is the job.",
      "scene": "assets/scene-theater.jpg",
      "progress": {
        "unit": "shows",
        "total": 5
      },
      "dayNoun": "Show",
      "stageNoun": "Show",
      "finalNoun": "Opening night",
      "stages": [
        "Show 1",
        "Show 2",
        "Show 3",
        "Show 4",
        "Opening night"
      ],
      "reconNoun": "Prompt Book",
      "legs": {
        "recon": "Prompt book",
        "nav": "Backstage math",
        "orders": "Cue sheet",
        "debrief": "Intermission"
      },
      "fact": "Every theater leaves one bare bulb burning on the stage all night. It is called the ghost light. The real reason is so nobody walks off the edge of the stage in the dark. The other reason is the one everyone tells.",
      "finale": {
        "prompt": "Opening night, curtain call, house lights up. Which color gel goes in the last spotlight for the bow?",
        "options": [
          {
            "label": "Warm gold",
            "color": "#FFB454"
          },
          {
            "label": "Rose",
            "color": "#FF6BD6"
          },
          {
            "label": "Blue",
            "color": "#4FD1FF"
          },
          {
            "label": "White",
            "color": "#F4F8FF"
          }
        ],
        "done": "Drop it in. Then leave the ghost light on. That part is not a joke."
      },
      "file": "missions/theater.f97c13f36d.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "theater-1",
          "title": "The Ghost Light",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "theater-2",
          "title": "Footsteps in the Flies",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "theater-3",
          "title": "The Piano",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "theater-4",
          "title": "The Seat in the Balcony",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "theater-5",
          "title": "Opening Night",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "mall",
      "ready": true,
      "kind": "shift",
      "readingLevel": {
        "fk": 5.4,
        "cl": 6.2
      },
      "grade": "5",
      "kindLabel": "Mystery",
      "form": "rounds",
      "title": "Mall After Hours",
      "subtitle": "A two-story shopping mall, closed for the night",
      "pitch": "Five nights alone in a mall after the doors lock. A carousel that starts by itself, footsteps on a stopped escalator, a mannequin that moves between rounds. Every one of them has a reason, and the guard who finds the reasons is the one who sleeps well.",
      "scene": "assets/scene-mall.jpg",
      "progress": {
        "unit": "nights",
        "total": 5
      },
      "dayNoun": "Night",
      "stageNoun": "Night",
      "finalNoun": "Dawn",
      "stages": [
        "Night 1",
        "Night 2",
        "Night 3",
        "Night 4",
        "Night 5"
      ],
      "reconNoun": "Night Log",
      "legs": {
        "recon": "Night log",
        "nav": "Rounds math",
        "orders": "Patrol orders",
        "debrief": "Desk"
      },
      "fact": "A big mall is a small town with the people removed: two miles of hallway, four hundred doors, its own weather from the air handlers, and a building that keeps moving all night whether anyone is in it or not.",
      "finale": {
        "prompt": "Dawn. The doors unlock at six. Which color goes on the guard's badge for the week?",
        "options": [
          {
            "label": "Blue",
            "color": "#4FD1FF"
          },
          {
            "label": "Gold",
            "color": "#FFB454"
          },
          {
            "label": "Silver",
            "color": "#C9D3E6"
          },
          {
            "label": "Green",
            "color": "#4FD18B"
          }
        ],
        "done": "Pin it on. Then unlock the doors and go home. The building can have the day shift."
      },
      "file": "missions/mall.fc443a54dc.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "mall-1",
          "title": "Four Hundred Doors",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "mall-2",
          "title": "Footsteps on the Escalator",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "mall-3",
          "title": "The Carousel",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "mall-4",
          "title": "The Seventh Mannequin",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "mall-5",
          "title": "Dawn",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "ghosttrain",
      "ready": true,
      "kind": "shift",
      "readingLevel": {
        "fk": 5.6,
        "cl": 6.3
      },
      "grade": "5",
      "kindLabel": "Mystery",
      "form": "moth",
      "title": "Ghost Train",
      "subtitle": "A country branch line, after the last train",
      "pitch": "Five nights in a signal box on a line where a train keeps passing at 11:52 that no timetable lists. Bells, levers, lamps, a fog, and an old branch line that everybody forgot. Every clue is real, and the answer is in the log.",
      "scene": "assets/scene-ghosttrain.jpg",
      "progress": {
        "unit": "stations",
        "total": 5
      },
      "dayNoun": "Night",
      "stageNoun": "Station",
      "finalNoun": "The junction",
      "stages": [
        "Millbrook",
        "The Cutting",
        "Fern Halt",
        "The Tunnel",
        "The junction"
      ],
      "reconNoun": "Station Log",
      "legs": {
        "recon": "Station log",
        "nav": "Timetable math",
        "orders": "Signal orders",
        "debrief": "Signal box"
      },
      "fact": "Railways divided their lines into blocks and allowed only one train in a block at a time, signaled with bells and levers between boxes. It worked so well that most of it is still the rule, just done by computer.",
      "finale": {
        "prompt": "The mystery train is on the right track and the line is clear. Which color lamp goes in the signal box window tonight?",
        "options": [
          {
            "label": "Green",
            "color": "#4FD18B"
          },
          {
            "label": "Amber",
            "color": "#FFB454"
          },
          {
            "label": "White",
            "color": "#F4F8FF"
          },
          {
            "label": "Blue",
            "color": "#4FD1FF"
          }
        ],
        "done": "Hang it. Then write 11:52 in the timetable, where it belongs."
      },
      "file": "missions/ghosttrain.256d9d4ace.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "ghosttrain-1",
          "title": "Millbrook Box",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "ghosttrain-2",
          "title": "The Cutting",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "ghosttrain-3",
          "title": "Fern Halt",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "ghosttrain-4",
          "title": "The Tunnel",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "ghosttrain-5",
          "title": "The Junction",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
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
      "file": "missions/castle.081083c4ce.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "castle-1",
          "title": "The Frame",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "castle-2",
          "title": "The Beam",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "castle-3",
          "title": "The Counterweight",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "castle-4",
          "title": "The Sling",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "castle-5",
          "title": "First Throw",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "cove",
      "ready": true,
      "kind": "climb",
      "readingLevel": {
        "fk": 5.7,
        "cl": 5.6
      },
      "grade": "5",
      "kindLabel": "Expedition",
      "form": "parrot",
      "title": "Pirate Cove",
      "subtitle": "A small island, an old map, a compass",
      "pitch": "An old map, a compass, and five landmarks across an island to a buried cache. Bearings, paces, tides, a cave you can only reach at low water, and a parrot who knows which tree is the right one.",
      "scene": "assets/scene-cove.jpg",
      "waypoints": [
        [
          520,
          950
        ],
        [
          800,
          800
        ],
        [
          1030,
          620
        ],
        [
          1180,
          430
        ],
        [
          980,
          355
        ],
        [
          780,
          195
        ]
      ],
      "progress": {
        "unit": "landmarks",
        "total": 5
      },
      "dayNoun": "Leg",
      "stageNoun": "Landmark",
      "finalNoun": "The cache",
      "stages": [
        "The Wreck",
        "Skull Rock",
        "The Split Fig",
        "The Sea Cave",
        "The cache"
      ],
      "reconNoun": "Chart Notes",
      "legs": {
        "recon": "Chart notes",
        "nav": "Map math",
        "orders": "Map orders",
        "debrief": "Camp"
      },
      "fact": "A real treasure map is just directions: a landmark you can see, a bearing from a compass, and a number of paces. Pirates did not draw X's. Surveyors do, and this map was drawn by one.",
      "finale": {
        "prompt": "The cache is open. Which color flag goes on the split fig so the boat can find the cove again?",
        "options": [
          {
            "label": "Red",
            "color": "#FF6B6B"
          },
          {
            "label": "Yellow",
            "color": "#FFD65C"
          },
          {
            "label": "Turquoise",
            "color": "#2FB6C8"
          },
          {
            "label": "White",
            "color": "#F4F8FF"
          }
        ],
        "done": "Tie it high. Then leave the map in the box for the next navigator, with your own note added."
      },
      "file": "missions/cove.86b0afe654.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "cove-1",
          "title": "The Wreck",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "cove-2",
          "title": "Skull Rock",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "cove-3",
          "title": "The Split Fig",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "cove-4",
          "title": "The Sea Cave",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "cove-5",
          "title": "The Cache",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "canopy",
      "ready": true,
      "kind": "climb",
      "readingLevel": {
        "fk": 5.8,
        "cl": 6.3
      },
      "grade": "5",
      "kindLabel": "Expedition",
      "form": "sloth",
      "title": "Canopy Station",
      "subtitle": "A rainforest research tree, near the equator",
      "pitch": "Five platforms up one giant tree, from the dark forest floor to the sunlit roof of the rainforest a hundred and fifty feet up. Ropes, rain, ants, a sloth for a guide, and more than three hundred kinds of living things counted in one tree.",
      "scene": "assets/scene-canopy.jpg",
      "waypoints": [
        [
          705,
          950
        ],
        [
          710,
          800
        ],
        [
          712,
          640
        ],
        [
          710,
          480
        ],
        [
          706,
          300
        ],
        [
          700,
          155
        ]
      ],
      "progress": {
        "unit": "ft",
        "total": 150
      },
      "dayNoun": "Pitch",
      "stageNoun": "Platform",
      "finalNoun": "The crown",
      "stages": [
        "Forest Floor",
        "The Understory",
        "The Trunk",
        "The Canopy",
        "The crown"
      ],
      "reconNoun": "Field Notes",
      "legs": {
        "recon": "Field notes",
        "nav": "Canopy math",
        "orders": "Climb orders",
        "debrief": "Platform"
      },
      "fact": "More than half of all the kinds of living things on Earth live in rainforests, and most of those live up in the trees, in a layer nobody could reach until scientists started climbing with ropes.",
      "finale": {
        "prompt": "The crown, at last. Which color flag goes on the top branch for the helicopter survey to see?",
        "options": [
          {
            "label": "Orange",
            "color": "#F28C28"
          },
          {
            "label": "Yellow",
            "color": "#FFD65C"
          },
          {
            "label": "White",
            "color": "#F4F8FF"
          },
          {
            "label": "Pink",
            "color": "#FF6BD6"
          }
        ],
        "done": "Tie it on. Then sit for ten minutes and count what lands on your sleeve. That is a survey too."
      },
      "file": "missions/canopy.6ebfd70efd.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "canopy-1",
          "title": "The Forest Floor",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "canopy-2",
          "title": "The Understory",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "canopy-3",
          "title": "The Trunk",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "canopy-4",
          "title": "The Canopy",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "canopy-5",
          "title": "The Crown",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "rocket",
      "ready": true,
      "kind": "build",
      "readingLevel": {
        "fk": 5.8,
        "cl": 5.9
      },
      "grade": "5",
      "kindLabel": "Build",
      "form": "countdown",
      "title": "Launch Pad",
      "subtitle": "Pad 3, a spaceport on the coast",
      "pitch": "Five sessions to stack a rocket from the pad up: the first stage and its engines, the second stage, the capsule, the fuel, and the count to zero. The rocket is the progress bar.",
      "scene": "assets/scene-rocket.jpg",
      "buildArt": "rocket",
      "progress": {
        "unit": "parts",
        "total": 5
      },
      "dayNoun": "Session",
      "stageNoun": "Part",
      "finalNoun": "Launch",
      "stages": [
        "First stage",
        "Second stage",
        "Capsule",
        "Fuel",
        "Launch"
      ],
      "reconNoun": "Build Sheet",
      "legs": {
        "recon": "Build sheet",
        "nav": "Pad math",
        "orders": "Stack orders",
        "debrief": "Pad check"
      },
      "rules": [
        "Stuck on a value? <b>Flag it</b> and move on. Pending items come back at the pad check.",
        "Build sheet: read the questions <b>before</b> the sheet.",
        "Stack orders: read <b>every</b> step before you lift anything."
      ],
      "fact": "A rocket is mostly a tank. Nine tenths of the weight sitting on the pad is fuel, and almost all of it is gone in the first few minutes. The part that reaches orbit is the size of a van.",
      "finale": {
        "prompt": "Liftoff, and the rocket is clear of the tower. Which color goes on the pad crew's mission patch?",
        "options": [
          {
            "label": "Flame orange",
            "color": "#F28C28"
          },
          {
            "label": "Sky blue",
            "color": "#4FD1FF"
          },
          {
            "label": "White",
            "color": "#F4F8FF"
          },
          {
            "label": "Gold",
            "color": "#FFB454"
          }
        ],
        "done": "Sew it on. Then start the checklist for the next one. The pad is never empty for long."
      },
      "file": "missions/rocket.4e3e48cf78.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "rocket-1",
          "title": "The First Stage",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "rocket-2",
          "title": "The Second Stage",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "rocket-3",
          "title": "The Capsule",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "rocket-4",
          "title": "Fuel",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "rocket-5",
          "title": "Ten, Nine, Eight",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "cave",
      "ready": true,
      "kind": "climb",
      "readingLevel": {
        "fk": 5.6,
        "cl": 6.0
      },
      "grade": "5",
      "kindLabel": "Rescue",
      "form": "bat",
      "title": "Cave Rescue",
      "subtitle": "A limestone cave, somewhere under a hill",
      "pitch": "A caver is stuck five chambers down with a hurt ankle and a dying lamp. Five descents through crawls, a rope drop, an underground river and a room full of bats, with a bat for a guide who can see in the dark.",
      "scene": "assets/scene-cave.jpg",
      "waypoints": [
        [
          835,
          400
        ],
        [
          812,
          505
        ],
        [
          790,
          640
        ],
        [
          830,
          795
        ],
        [
          640,
          870
        ],
        [
          430,
          960
        ]
      ],
      "progress": {
        "unit": "ft",
        "total": 480
      },
      "dayNoun": "Descent",
      "stageNoun": "Chamber",
      "finalNoun": "The caver",
      "stages": [
        "The Entrance Room",
        "The Crawl",
        "The Drop",
        "The River",
        "The caver"
      ],
      "reconNoun": "Rescue Log",
      "legs": {
        "recon": "Rescue log",
        "nav": "Cave math",
        "orders": "Rope orders",
        "debrief": "Rest stop"
      },
      "fact": "A cave stays the same temperature all year, about the average of the outside. In this one that is fifty-four degrees, which feels fine for an hour and dangerous after six.",
      "finale": {
        "prompt": "The caver is in the stretcher and the team is hauling. Which color glow stick goes on the rope at the top of the drop?",
        "options": [
          {
            "label": "Green",
            "color": "#4FD18B"
          },
          {
            "label": "Blue",
            "color": "#4FD1FF"
          },
          {
            "label": "Orange",
            "color": "#F28C28"
          },
          {
            "label": "Pink",
            "color": "#FF6BD6"
          }
        ],
        "done": "Snap it. Then count the team out of the entrance. Everyone who went in comes out. That is the whole rule."
      },
      "file": "missions/cave.65012a6ea5.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "cave-1",
          "title": "The Entrance Room",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "cave-2",
          "title": "The Crawl",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "cave-3",
          "title": "The Drop",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "cave-4",
          "title": "The River",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "cave-5",
          "title": "The Caver",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
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
      "file": "missions/wreck.569bde7819.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "wreck-1",
          "title": "The Mooring Line",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "wreck-2",
          "title": "The Pilothouse",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "wreck-3",
          "title": "The Main Deck",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "wreck-4",
          "title": "The Cargo Hold",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "wreck-5",
          "title": "The Engine Room",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "mine",
      "ready": true,
      "kind": "climb",
      "readingLevel": {
        "fk": 5.2,
        "cl": 5.2
      },
      "grade": "5",
      "kindLabel": "Expedition",
      "form": "mole",
      "title": "Deep Mine",
      "subtitle": "An old silver mine in the mountains",
      "pitch": "Five levels down a mine shaft that has been shut for sixty years. Bad air, old timbers, water, a vein of silver nobody finished, and a mole who knows rock by taste. The job is to make it safe, one level at a time.",
      "scene": "assets/scene-mine.jpg",
      "waypoints": [
        [
          1160,
          120
        ],
        [
          1175,
          300
        ],
        [
          1180,
          470
        ],
        [
          1200,
          645
        ],
        [
          1070,
          800
        ],
        [
          1130,
          950
        ]
      ],
      "progress": {
        "unit": "ft",
        "total": 500
      },
      "dayNoun": "Shift",
      "stageNoun": "Level",
      "finalNoun": "The sump",
      "stages": [
        "Level 100",
        "Level 200",
        "Level 300",
        "Level 400",
        "The sump"
      ],
      "reconNoun": "Mine Log",
      "legs": {
        "recon": "Mine log",
        "nav": "Mine math",
        "orders": "Safety orders",
        "debrief": "Shaft station"
      },
      "fact": "The most dangerous thing in a mine is not the rock. It is the air. Miners carried canaries for most of a century because a canary falls off its perch minutes before a person feels anything.",
      "finale": {
        "prompt": "The bottom level is pumped dry and the air is clean. Which color tag goes on the cage for the reopened mine?",
        "options": [
          {
            "label": "Silver",
            "color": "#C9D3E6"
          },
          {
            "label": "Safety orange",
            "color": "#F28C28"
          },
          {
            "label": "Green",
            "color": "#4FD18B"
          },
          {
            "label": "Yellow",
            "color": "#FFD65C"
          }
        ],
        "done": "Tag it. Then write the date on the shaft station wall, under the one from sixty years ago."
      },
      "file": "missions/mine.5681539856.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "mine-1",
          "title": "Level 100",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "mine-2",
          "title": "Level 200",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "mine-3",
          "title": "Level 300",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "mine-4",
          "title": "Level 400",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "mine-5",
          "title": "The Sump",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "arena",
      "ready": true,
      "kind": "build",
      "readingLevel": {
        "fk": 5.8,
        "cl": 6.2
      },
      "grade": "5",
      "kindLabel": "Build",
      "form": "wrench",
      "title": "Robot Arena",
      "subtitle": "The pit, a school robot league",
      "pitch": "Five sessions to build a three-pound combat robot: a frame, drive motors, a battery and wiring, an attack tool, and a first match in the arena. Grams, volts, and a three-minute clock. The robot is the progress bar.",
      "scene": "assets/scene-arena.jpg",
      "buildArt": "battlebot",
      "progress": {
        "unit": "parts",
        "total": 5
      },
      "dayNoun": "Session",
      "stageNoun": "Part",
      "finalNoun": "First match",
      "stages": [
        "Frame",
        "Drive",
        "Power",
        "Attack tool",
        "First match"
      ],
      "reconNoun": "Build Sheet",
      "legs": {
        "recon": "Build sheet",
        "nav": "Pit math",
        "orders": "Assembly",
        "debrief": "Pit check"
      },
      "rules": [
        "Stuck on a value? <b>Flag it</b> and move on. Pending items come back at the pit check.",
        "Build sheet: read the questions <b>before</b> the sheet.",
        "Assembly: read <b>every</b> step before you fit anything."
      ],
      "fact": "In a three-pound robot league the whole robot, attack tool and all, has to weigh less than a bag of sugar. Every gram spent on armor is a gram not spent on the motor. That trade is the whole sport.",
      "finale": {
        "prompt": "Match over, robot still driving. Which color goes on the team's pit banner?",
        "options": [
          {
            "label": "Orange",
            "color": "#F28C28"
          },
          {
            "label": "Electric blue",
            "color": "#4FD1FF"
          },
          {
            "label": "Green",
            "color": "#4FD18B"
          },
          {
            "label": "Black",
            "color": "#1A1A1A"
          }
        ],
        "done": "Hang it. Then check every screw before the next round. Winning a match is mostly not falling apart."
      },
      "file": "missions/arena.ff27724811.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "arena-1",
          "title": "The Frame",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "arena-2",
          "title": "Drive",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "arena-3",
          "title": "Power",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "arena-4",
          "title": "The Attack Tool",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "arena-5",
          "title": "First Match",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "sky",
      "ready": true,
      "kind": "climb",
      "readingLevel": {
        "fk": 5.7,
        "cl": 5.7
      },
      "grade": "5",
      "kindLabel": "Expedition",
      "form": "hawk",
      "title": "Sky Islands",
      "subtitle": "An airship, five islands in the clouds (a story)",
      "pitch": "Five islands floating in the sky, reached only by airship, each one higher than the last. The islands are made up. The air, the wind, the lift and the cold at altitude are real, and they are the whole puzzle.",
      "scene": "assets/scene-sky.jpg",
      "waypoints": [
        [
          1105,
          835
        ],
        [
          870,
          720
        ],
        [
          1210,
          470
        ],
        [
          950,
          428
        ],
        [
          690,
          340
        ],
        [
          845,
          130
        ]
      ],
      "progress": {
        "unit": "ft",
        "total": 12000
      },
      "dayNoun": "Leg",
      "stageNoun": "Island",
      "finalNoun": "The summit isle",
      "stages": [
        "Low Isle",
        "Mist Isle",
        "The Ridge Isle",
        "Storm Isle",
        "The summit isle"
      ],
      "reconNoun": "Pilot's Log",
      "legs": {
        "recon": "Pilot's log",
        "nav": "Air math",
        "orders": "Flight orders",
        "debrief": "Mooring"
      },
      "fact": "An airship floats for the same reason a cork does: it weighs less than the air it pushes aside. Fill a bag with hot air or a light gas and the heavier air around it shoves it upward. That is the whole trick, and it has carried people since 1783.",
      "finale": {
        "prompt": "The summit isle, moored at last. Which color pennant flies from the airship's tail for the flight home?",
        "options": [
          {
            "label": "Sky blue",
            "color": "#4FD1FF"
          },
          {
            "label": "Sunset orange",
            "color": "#F28C28"
          },
          {
            "label": "Cloud white",
            "color": "#F4F8FF"
          },
          {
            "label": "Gold",
            "color": "#FFB454"
          }
        ],
        "done": "Run it up. Then let out ballast and let the wind that brought you take you home. It knows the way."
      },
      "file": "missions/sky.cbc9f0d875.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "sky-1",
          "title": "Low Isle",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "sky-2",
          "title": "Mist Isle",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "sky-3",
          "title": "The Ridge Isle",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "sky-4",
          "title": "Storm Isle",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "sky-5",
          "title": "The Summit Isle",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "canyon",
      "ready": true,
      "kind": "climb",
      "readingLevel": {
        "fk": 5.7,
        "cl": 5.9
      },
      "grade": "5",
      "kindLabel": "Expedition",
      "form": "bighorn",
      "title": "Canyon Descent",
      "subtitle": "A desert canyon, rim to river",
      "pitch": "Five ledges down from the rim of a canyon to the river a mile below, through layers of rock laid down over a billion years. Heat, water, a bighorn sheep who does not slip, and a trail that goes down through time.",
      "scene": "assets/scene-canyon.jpg",
      "waypoints": [
        [
          175,
          425
        ],
        [
          400,
          470
        ],
        [
          560,
          590
        ],
        [
          700,
          735
        ],
        [
          900,
          830
        ],
        [
          1120,
          870
        ]
      ],
      "progress": {
        "unit": "ft",
        "total": 4500
      },
      "dayNoun": "Descent",
      "stageNoun": "Ledge",
      "finalNoun": "The river",
      "stages": [
        "The Rim",
        "The Red Wall",
        "The Platform",
        "The Inner Gorge",
        "The river"
      ],
      "reconNoun": "Trail Log",
      "legs": {
        "recon": "Trail log",
        "nav": "Canyon math",
        "orders": "Trail orders",
        "debrief": "Shade"
      },
      "fact": "Walking from the rim of a big canyon to the river takes you down through rock layers that took more than a billion years to form. Every step down is about a hundred thousand years.",
      "finale": {
        "prompt": "The river, cold and green, a mile below the rim. Which color goes on the trail marker for the climb back out?",
        "options": [
          {
            "label": "Red rock",
            "color": "#C1440E"
          },
          {
            "label": "River green",
            "color": "#4FD18B"
          },
          {
            "label": "White",
            "color": "#F4F8FF"
          },
          {
            "label": "Sky blue",
            "color": "#4FD1FF"
          }
        ],
        "done": "Paint it. Then fill every bottle. The way out is the same mile, uphill, and the sun is already on the rim."
      },
      "file": "missions/canyon.24a9176dc5.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "canyon-1",
          "title": "The Rim",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "canyon-2",
          "title": "The Red Wall",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "canyon-3",
          "title": "The Platform",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "canyon-4",
          "title": "The Inner Gorge",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "canyon-5",
          "title": "The River",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "wolves",
      "ready": true,
      "kind": "shift",
      "readingLevel": {
        "fk": 5.3,
        "cl": 5.6
      },
      "grade": "5",
      "kindLabel": "Watch",
      "form": "wolf",
      "title": "Wolf Tracking",
      "subtitle": "A river valley in the Yukon, midwinter",
      "pitch": "Five days following a wolf pack across the snow with a biologist who counts them by their tracks, their howls and a radio collar. Learn how a pack works, how far it travels, and why the answer to almost every wolf question is a moose.",
      "scene": "assets/scene-wolves.jpg",
      "progress": {
        "unit": "days",
        "total": 5
      },
      "dayNoun": "Day",
      "stageNoun": "Day",
      "finalNoun": "The count",
      "stages": [
        "Day 1",
        "Day 2",
        "Day 3",
        "Day 4",
        "The count"
      ],
      "reconNoun": "Field Notes",
      "legs": {
        "recon": "Field notes",
        "nav": "Track math",
        "orders": "Field orders",
        "debrief": "Truck"
      },
      "fact": "A wolf pack is a family: two parents, this year's pups, and a few older brothers and sisters who have not left yet. The 'alpha' in the old books is just the mother and father.",
      "finale": {
        "prompt": "The count is done and the pack is bedded down on the far ridge. Which color goes on this pack's page in the notebook?",
        "options": [
          {
            "label": "Gray",
            "color": "#9AA7C2"
          },
          {
            "label": "Amber",
            "color": "#FFB454"
          },
          {
            "label": "Snow white",
            "color": "#F4F8FF"
          },
          {
            "label": "Blue",
            "color": "#4FD1FF"
          }
        ],
        "done": "Mark it. Then leave the valley the way you came. The best tracker is the one the pack never noticed."
      },
      "file": "missions/wolves.ec8ea15de3.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "wolves-1",
          "title": "Reading the Snow",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "wolves-2",
          "title": "The Collar",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "wolves-3",
          "title": "The Moose",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "wolves-4",
          "title": "The Howl",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "wolves-5",
          "title": "The Count",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
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
      "file": "missions/glades.353c9cbc4a.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "glades-1",
          "title": "A River of Grass",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "glades-2",
          "title": "Gator Count",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "glades-3",
          "title": "The Gauge",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "glades-4",
          "title": "The Rookery",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "glades-5",
          "title": "Florida Bay",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "station",
      "ready": true,
      "kind": "build",
      "readingLevel": {
        "fk": 5.8,
        "cl": 7.0
      },
      "grade": "5",
      "kindLabel": "Build",
      "form": "tether",
      "title": "Station EVA",
      "subtitle": "A space station, 250 miles up",
      "pitch": "Five spacewalks to build a new solar array on the outside of a space station: the mount, the truss, the wings, the wiring, and the moment it unrolls toward the sun. The array is the progress bar. The last campaign of the year.",
      "scene": "assets/scene-station.jpg",
      "buildArt": "solararray",
      "progress": {
        "unit": "parts",
        "total": 5
      },
      "dayNoun": "Spacewalk",
      "stageNoun": "Part",
      "finalNoun": "Deploy",
      "stages": [
        "Mount",
        "Truss",
        "Wings",
        "Wiring",
        "Deploy"
      ],
      "reconNoun": "Flight Plan",
      "legs": {
        "recon": "Flight plan",
        "nav": "Orbit math",
        "orders": "EVA orders",
        "debrief": "Airlock"
      },
      "rules": [
        "Stuck on a value? <b>Flag it</b> and move on. Pending items come back at the airlock.",
        "Flight plan: read the questions <b>before</b> the sheet.",
        "EVA orders: read <b>every</b> step before you open the hatch."
      ],
      "fact": "A space station goes around the Earth every ninety minutes, so an astronaut outside sees the sun rise and set sixteen times a day and has to plan every job around under an hour of daylight.",
      "finale": {
        "prompt": "The array is out and the power is flowing. Which color goes on the crew's mission patch for the year?",
        "options": [
          {
            "label": "Solar gold",
            "color": "#FFB454"
          },
          {
            "label": "Earth blue",
            "color": "#4FD1FF"
          },
          {
            "label": "White",
            "color": "#F4F8FF"
          },
          {
            "label": "Deep space",
            "color": "#1B2A5C"
          }
        ],
        "done": "Sew it on. Then look down. All of it, every campaign, is on that blue ball, and you can see the whole thing from here."
      },
      "file": "missions/station.da8211dcfa.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "station-1",
          "title": "The Mount",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "station-2",
          "title": "The Truss",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "station-3",
          "title": "The Wings",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "station-4",
          "title": "The Wiring",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "station-5",
          "title": "Deploy",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    },
    {
      "id": "drift",
      "ready": true,
      "kind": "shift",
      "readingLevel": {
        "fk": 5.7,
        "cl": 5.3
      },
      "grade": "5",
      "kindLabel": "Watch",
      "form": "hare",
      "title": "Ice Drift Station",
      "subtitle": "A floe of sea ice, somewhere in the Arctic Ocean",
      "pitch": "Five days at a camp built on a raft of sea ice that is drifting with the ocean underneath it. Drill holes, measure the ice, watch for bears, and find out where the current is taking you before the floe decides for you.",
      "scene": "assets/scene-drift2.jpg",
      "progress": {
        "unit": "days",
        "total": 5
      },
      "dayNoun": "Day",
      "stageNoun": "Day",
      "finalNoun": "Pickup",
      "stages": [
        "Day 1",
        "Day 2",
        "Day 3",
        "Day 4",
        "Pickup"
      ],
      "reconNoun": "Ice Log",
      "legs": {
        "recon": "Ice log",
        "nav": "Ice math",
        "orders": "Camp orders",
        "debrief": "Hut"
      },
      "fact": "Sea ice is frozen ocean, and it never stops moving. A camp built on it in the morning is somewhere else by night, and the scientists who live on it track their own position the way a ship does.",
      "finale": {
        "prompt": "The helicopter is inbound and the camp is packed. Which color goes on the marker left on the floe?",
        "options": [
          {
            "label": "Orange",
            "color": "#F28C28"
          },
          {
            "label": "Red",
            "color": "#FF6B6B"
          },
          {
            "label": "Blue",
            "color": "#4FD1FF"
          },
          {
            "label": "Black",
            "color": "#1A1A1A"
          }
        ],
        "done": "Plant it. The floe will carry it out to the Atlantic by summer and melt. That is the whole story of sea ice."
      },
      "file": "missions/drift.c9857c9ac0.js",
      "patrolCount": 5,
      "patrols": [
        {
          "id": "drift-1",
          "title": "A Raft of Ice",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "drift-2",
          "title": "Thirty Below",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "drift-3",
          "title": "The Bear",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "drift-4",
          "title": "The Crack",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        },
        {
          "id": "drift-5",
          "title": "Pickup",
          "navGrades": [
            "3",
            "6",
            "7",
            "8"
          ],
          "r78": true
        }
      ]
    }
  ]
};

// A campaign file calls this when it loads. It fills in the index entry in place — same object,
// now with its patrols — so anything already holding a reference to that campaign sees the whole
// thing. Files that arrive before this one is parsed wait in a queue and are drained below.
window.BASECAMP_MISSIONS.register = function (c) {
  var M = window.BASECAMP_MISSIONS, list = M.campaigns || [], i, key;
  M.loaded = M.loaded || {};
  for (i = 0; i < list.length; i++) {
    if (list[i].id === c.id) {
      for (key in c) { if (Object.prototype.hasOwnProperty.call(c, key)) list[i][key] = c[key]; }
      list[i].full = true;
      M.loaded[c.id] = list[i];
      return list[i];
    }
  }
  c.full = true;
  M.loaded[c.id] = c;
  return c;
};
(function () {
  var q = window.BASECAMP_CAMPAIGNS_PENDING;
  window.BASECAMP_CAMPAIGNS_PENDING = null;
  if (q) { for (var i = 0; i < q.length; i++) window.BASECAMP_MISSIONS.register(q[i]); }
})();
