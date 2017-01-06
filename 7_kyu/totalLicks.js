//https://www.codewars.com/kata/80-s-kids-number-1-how-many-licks-does-it-take/
function totalLicks(env) {
  var licks = 252,
    max = 0,
    result = "",
    toughest = "";
  for (var propt in env) {
    if (env.hasOwnProperty(propt)) {
      licks += env[propt];
      if (max < env[propt]) {
        max = env[propt];
        toughest = propt;
      }
    }
  }

  result = "It took " + licks + " licks to get to the tootsie roll center of a tootsie pop.";
  if (!(max < 0)) {
    result += ` The toughest challenge was ${toughest}.`;
  }
  return result;
}
