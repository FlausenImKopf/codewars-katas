const number = function (busStops) {
  //declare variables
  let sumGetOn = 0;
  let sumGetOff = 0;
  //loop through array
  for (let i = 0; i < busStops.length; i++) {
    sumGetOn += busStops[i][0];
    sumGetOff += busStops[i][1];
  }
  return sumGetOn - sumGetOff;
};
