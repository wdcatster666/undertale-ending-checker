// Variables

let torielInfo;
let papyrusInfo;
let undyneInfo;
let mettatonInfo;
let sansInfo;
let killCount;
let name;
let betrayal;
let undyneDate;
let alphysDate;
let completedTrueLab;
let soldYourSoul;
let genoCheck;
let stayWithTori;
let eraseTheWorld;
let neverUsedItems;
let wearingTheBandage;
let neverSaved;
let hasTheSnowmanPiece;
let level1;

// Variables setup

function setup() {
  createCanvas(1000, 400);
  createElement("h2", "Your actions");
  createSpan("How many kills?  ");
  killCount = createInput("0");
  name = createCheckbox("Named yourself Frisk");
  level1 = createCheckbox("Is at LV1");
  torielInfo = createCheckbox("Killed Toriel");
  betrayal = createCheckbox("Betrayal killed Toriel");
  papyrusInfo = createCheckbox("Killed Papyrus");
  undyneInfo = createCheckbox("Killed Undyne");
  mettatonInfo = createCheckbox("Killed Mettaton");
  sansInfo = createCheckbox("Killed Sans");
  undyneDate = createCheckbox("Dated Undyne");
  alphysDate = createCheckbox("Dated Alphys");
  completedTrueLab = createCheckbox("Completed True Lab");
  soldYourSoul = createCheckbox("Sold your soul");
  genoCheck = createCheckbox(
    "Killed Muffet, Royal Guards and at least 40 monsters in Hotland"
  );
  stayWithTori = createCheckbox("Stay with Toriel (True Pacifist Endning)");

  eraseTheWorld = createCheckbox("Erase the world (Genocide Ending)");
  neverUsedItems = createCheckbox("Never used consumables");
  wearingTheBandage = createCheckbox("Wearing the bandage");
  neverSaved = createCheckbox("Never saved");
  hasTheSnowmanPiece = createCheckbox("Has the snowman piece");
}

// Variables names

function draw() {
  background("black");
  let kills = killCount.value();
  let hardMode = name.checked();
  let lv = level1.checked();
  let killedToriel = torielInfo.checked();
  let betrayalKill = betrayal.checked();
  let killedPapyrus = papyrusInfo.checked();
  let killedUndyne = undyneInfo.checked();
  let killedMettaton = mettatonInfo.checked();
  let killedSans = sansInfo.checked();
  let datedUndyne = undyneDate.checked();
  let datedAlphys = alphysDate.checked();
  let trueLab = completedTrueLab.checked();
  let soldSoul = soldYourSoul.checked();
  let geno = genoCheck.checked();
  let stayWithToriel = stayWithTori.checked();
  let erased = eraseTheWorld.checked();
  let noItems = neverUsedItems.checked();
  let bandage = wearingTheBandage.checked();
  let noSave = neverSaved.checked();
  let snowman = hasTheSnowmanPiece.checked();
  let ending = endingChecker(
    hardMode,
    kills,
    killedToriel,
    betrayalKill,
    killedPapyrus,
    killedUndyne,
    killedMettaton,
    killedSans,
    datedUndyne,
    datedAlphys,
    trueLab,
    soldSoul,
    geno,
    stayWithToriel,
    erased,
    noItems,
    bandage,
    noSave,
    snowman,
    lv
  );
  fill(color("white"));
  textAlign(CENTER, CENTER);
  textSize(30);
  text(ending, width / 2, height / 2);
}

function endingChecker(
  hardMode,
  kills,
  killedToriel,
  betrayalKill,
  killedPapyrus,
  killedUndyne,
  killedMettaton,
  killedSans,
  datedUndyne,
  datedAlphys,
  trueLab,
  soldSoul,
  geno,
  stayWithToriel,
  erased,
  noItems,
  bandage,
  noSave,
  snowman,
  lv
) {
  // General config
  if (kills >= 2 && lv) {
    return "Ain't no way you are in LV 1";
  }
  if (betrayalKill) {
    killedToriel = true;
  }
  if (datedAlphys === true && datedUndyne === false) {
    return "No specific ending found";
  }
  if (trueLab === true && datedUndyne === false) {
    return "No specific ending found";
  }
  if (trueLab === true && datedAlphys === false) {
    return "No specific ending found";
  }
  if (trueLab === true && lv === false) {
    return "No specific ending found";
  }
  if (trueLab === true && geno === true) {
    return "No specific ending found";
  }

  // Hard Mode
  if (hardMode) {
    if (hardMode) {
      if (
        killedPapyrus ||
        killedUndyne ||
        killedMettaton ||
        killedSans ||
        datedUndyne ||
        datedAlphys ||
        trueLab ||
        stayWithToriel ||
        erased ||
        snowman
      ) {
        return "That's 100% not hard mode";
      }
      if (kills >= 1 && lv) {
        return "Ain't no way you are in LV 1";
      }
      if (betrayalKill) {
        if (kills >= 1 && lv) {
          return "Ain't no way you are in LV 1";
        }
        if (kills >= 1 && killedToriel && lv) {
          return "Ain't no way you are in LV 1";
        }
        return "Hard Mode Betrayal Kill";
      }
      if (kills >= 1 && killedToriel && lv) {
        return "Ain't no way you are in LV 1";
      }
      if (kills >= 20 && killedToriel) {
        return "Hard Mode Genocide";
      }
      if (killedToriel) {
        return "Hard Mode w/o Toriel";
      }
      return "Hard Mode w/Toriel";
    }
  }

  // Genocide
  if (
    killedToriel &&
    killedPapyrus &&
    killedUndyne &&
    killedMettaton &&
    killedSans &&
    geno &&
    kills >= 95
  ) {
    if (soldSoul) {
      if (erased) {
        return "Soulless Genocide w/ Erase";
      }
      return "Soulless Genocide w/o Erase";
    }
    if (erased) {
      return "Genocide Ending w/ Erase";
    }
    return "Genocide Ending w/o Erasing";
  }

  // Others
  if (
    killedToriel &&
    killedPapyrus &&
    killedUndyne &&
    killedMettaton &&
    kills >= 5 &&
    killedSans === false &&
    geno === false
  ) {
    return "Alphys Ending";
  }
  if (
    killedToriel &&
    killedPapyrus &&
    killedUndyne &&
    killedMettaton &&
    kills >= 4 &&
    kills <= 4
  ) {
    return "Dog Ending";
  }

  // True Pacifist
  if (
    kills <= 0 &&
    lv &&
    datedUndyne &&
    datedAlphys &&
    trueLab &&
    killedToriel === false &&
    betrayalKill === false &&
    killedPapyrus === false &&
    killedUndyne === false &&
    killedMettaton === false
  ) {
    if (soldSoul) {
      if (stayWithToriel) {
        return "Soulless Pacifist Ending w/ Toriel";
      }
      return "Soulless Pacifist Ending w/o Toriel";
    }
    if (stayWithToriel) {
      return "True Pacifist Ending w/ Toriel";
    }
    return "True Pacifist Ending w/o Toriel";
  }

  // Leaderless
  if (
    killedToriel &&
    killedPapyrus &&
    killedUndyne &&
    killedMettaton &&
    geno === false
  ) {
    if (kills >= 5 && kills <= 19) {
      return "No King Ending";
    }
    if (kills >= 20) {
      return "No King Ending w/ 20 kills";
    }
  }

  // Neutral Papyrus
  if (
    killedToriel &&
    killedUndyne &&
    killedMettaton &&
    killedPapyrus === false
  ) {
    if (noItems) {
      return "Papyrus Ending w/o Consumables";
    }
    if (bandage) {
      return "Papyrus Ending w/ Bandage";
    }
    if (noSave) {
      return "Papyrus Ending w/o Saving";
    }
    if (snowman) {
      return "Papyrus Ending w/ Snowman Piece";
    }
    return "Papyrus Ending";
  }

  // Neutral Metaton
  if (killedToriel && killedUndyne && killedMettaton === false) {
    if (killedPapyrus) {
      return "Mettaton Ending w/o Papyrus";
    }
    if (noItems) {
      return "Mettaton Ending w/ Papyrus and w/o Consumables";
    }
    if (bandage) {
      return "Mettaton Ending w/ Papyrus and Bandage";
    }
    if (noSave) {
      return "Mettaton Ending w/ Papyrus and w/o Saving";
    }
    if (snowman) {
      return "Mettaton Ending w/ Papyrus and Snowman Piece";
    }
    return "Mettaton Ending w/ Papyrus";
  }

  // Neutral Undyne
  if (killedToriel && killedUndyne === false) {
    if (killedPapyrus) {
      return "Undyne Ending w/o Papyrus";
    }
    if (noItems) {
      return "Undyne Ending w/ Papyrus and w/o Consumables";
    }
    if (bandage) {
      return "Undyne Ending w/ Papyrus and Bandage";
    }
    if (noSave) {
      return "Undyne Ending w/ Papyrus and w/o Saving";
    }
    if (snowman) {
      return "Undyne Ending w/ Papyrus and Snowman Piece";
    }
    return "Undyne Ending w/ Papyrus";
  }

  // Exiled Queen
  if (killedToriel === false) {
    if (kills >= 10) {
      if (killedPapyrus) {
        if (killedUndyne) {
          return "Exiled Queen w/o Papyrus or Undyne and w/ 10 kills";
        }
        if (killedMettaton) {
          return "Exiled Queen w/o Papyrus or Alphys and w/ 10 kills";
        }
        return "Exiled Queen w/o Papyrus and w/ 10 kills";
      }
      if (killedUndyne) {
        if (noItems) {
          return "Exiled Queen w/o Undyne or Consumables and w/ 10 kills";
        }
        if (bandage) {
          return "Exiled Queen w/o Undyne and w/10 kills and Bandage";
        }
        if (noSave) {
          return "Exiled Queen w/o Undyne or Saving and w/ 10 kills";
        }
        if (snowman) {
          return "Exiled Queen w/o Undyne and w/ 10 kills and Snowman Piece";
        }
        return "Exiled Queen w/o Undyne and w/ 10 kills";
      }
      if (killedMettaton) {
        if (noItems) {
          return "Exiled Queen w/o Alphys or Consumables";
        }
        if (bandage) {
          return "Exiled Queen w/o Alphys and w/ Bandage";
        }
        if (noSave) {
          return "Exiled Queen w/o Alphys or Saving";
        }
        if (snowman) {
          return "Exiled Queen w/o Alphys and w/ Snowman Piece";
        }
        return "Exiled Queen w/o Alphys";
      }
      if (noItems) {
        return "Exiled Queen w/o Consumables";
      }
      if (bandage) {
        return "Exiled Queen w/ Bandage";
      }
      if (noSave) {
        return "Exiled Queen w/o Saving";
      }
      if (snowman) {
        return "Exiled Queen w/ Snowman Piece";
      }
      return "Exiled Queen";
    }
    if (kills <= 9) {
      if (killedPapyrus) {
        if (killedUndyne) {
          return "Exiled Queen w/o Papyrus or Undyne";
        }
        if (killedMettaton) {
          return "Exiled Queen w/o Papyrus or Alphys";
        }
        return "Exiled Queen w/o Papyrus";
      }
      if (killedUndyne) {
        if (noItems) {
          return "Exiled Queen w/o Undyne or Consumables";
        }
        if (bandage) {
          return "Exiled Queen w/o Undyne and w/ Bandage";
        }
        if (noSave) {
          return "Exiled Queen w/o Undyne or Saving";
        }
        if (snowman) {
          return "Exiled Queen w/o Undyne and w/ Snowman Piece";
        }
        return "Exiled Queen w/o Undyne";
      }
    }
  }
  // Flawed Pacifist
  if (
    kills <= 9 &&
    killedToriel === false &&
    killedPapyrus === false &&
    killedUndyne === false
  ) {
    if (datedUndyne) {
      if (kills <= 0) {
        if (datedAlphys) {
          if (noItems) {
            if (bandage) {
              return "Family Ending w/ Alphys and Challenge";
            } else {
              return "Family Ending w/ Alphys and w/o Consumables";
            }
          }
          if (bandage) {
            return "Family Ending w/ Alphys and Bandage";
          }
          if (noSave) {
            return "Family Ending w/ Alphys and w/o Saving";
          }
          if (snowman) {
            return "Family Ending w/ Alphys and Snowman Piece";
          }
          return "Family Ending w/ Alphys";
        }
        if (noItems) {
          if (bandage) {
            return "Family Ending w/o Alphys and w/ Challenge";
          } else {
            return "Family Ending w/o Alphys or Consumables";
          }
        }
        if (bandage) {
          return "Family Ending w/o Alphys and w/ Bandage";
        }
        if (noSave) {
          return "Family Ending w/o Alphys or Saving";
        }
        if (snowman) {
          return "Family Ending w/o Alphys and w/ Snowman Piece";
        }
        return "Family Ending w/o Alphys";
      }
      if (kills >= 1) {
        if (killedMettaton) {
          if (noItems) {
            return "Betrayed Undyne w/o Alphys or Consumables and w/ Date";
          }
          if (bandage) {
            return "Betrayed Undyne w/o Alphys and w/ Date and Bandage";
          }
          if (noSave) {
            return "Betrayed Undyne w/o Alphys or Saving and w/ Date";
          }
          if (snowman) {
            return "Betrayed Undyne w/o Alphys and w/ Date and Snowman Piece";
          }
          return "Betrayed Undyne w/o Alphys and w/ Date";
        }
        if (noItems) {
          if (bandage) {
            if (lv) {
              return "Betrayed Undyne w/ Date and Challenge";
            }
            return "Betrayed Undyne w/ Date and w/o Consumables";
          }
          return "Betrayed Undyne w/ Date and w/o Consumables";
        }
        if (bandage) {
          return "Betrayed Undyne w/ Date and Bandage";
        }
        if (noSave) {
          return "Betrayed Undyne w/ Date and w/o Saving";
        }
        if (snowman) {
          return "Betrayed Undyne w/ Date and Snowman Piece";
        }
        return "Betrayed Undyne w/ Date";
      }
    }
    if (killedMettaton) {
      if (noItems) {
        return "Betrayed Undyne w/o Alphys or Consumables";
      }
      if (bandage) {
        return "Betrayed Undyne w/o Alphys and w/ Bandage";
      }
      if (noSave) {
        return "Betrayed Undyne w/o Alphys or Saving";
      }
      if (snowman) {
        return "Betrayed Undyne w/o Alphys and w/ Snowman Piece";
      }
      return "Betrayed Undyne w/o Alphys";
    }
    if (noItems) {
      if (bandage) {
        if (lv) {
          return "Betrayed Undyne w/ Challenge";
        }
        return "Betrayed Undyne w/o Consumables";
      }
      return "Betrayed Undyne w/o Consumables";
    }
    if (bandage) {
      return "Betrayed Undyne w/ Bandage";
    }
    if (noSave) {
      return "Betrayed Undyne w/o Saving";
    }
    if (snowman) {
      return "Betrayed Undyne w/ Snowman Piece";
    }
    return "Betrayed Undyne";
  } else {
    return "No specific ending found";
  }
}
