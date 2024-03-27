function killer(suspectInfo, dead) {
  let murderer = "";
  let count = 0;
  //loop through object to get to the array with contacts stored as the value
  for (const suspect in suspectInfo) {
    //store array with the suspects contacts in const contacts
    const contacts = suspectInfo[suspect];
    //loop through array of murder victims and check, if contacs include all murder victims
    for (let i = 0; i < dead.length; i++) {
      if (contacts.includes(dead[i])) {
        // count keeps track whether all dead people are in suspect's contacts
        count++;
        if (count === dead.length) {
          murderer = suspect;
          break;
        }
      }
    }
  }
  return murderer;
}
