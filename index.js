function scuberGreetingForFeet(sumNumber){
  if (sumNumber <= 400) {
    return 'This one is on me!'
  } else if (sumNumber > 400 && sumNumber < 2000){
    return 'That will be twenty bucks.'
  } else if (sumNumber > 2000 && sumNumber < 2500){
    return 'I will gladly take your thirty bucks.'
  } else if (sumNumber > 2500){
    return 'No can do.'
  }
  }

function ternaryCheckCity(city){
  return city == "NYC" ? "Ok, sounds good." : 'No go.';
}

function switchOnCharmFromTip(isGenerous){
  switch (isGenerous){
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default: 
    return "Bye."   
  }
}