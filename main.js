function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  //to generate randomly
  
  const fortunes = {
    signs: ['star', 'moon', 'sun', 'fire'],
    fortuneOutput: ['your luck is crap', 'yikes...', 'meh', 'outlook looks rad!', 'yup, you are in luck'],
    advice: ['go streaking!', 'color the duck blue', 'go back to the future', 'jump around']
  }
  

  let newArray = []
  
  for(let prop in fortunes) {
    let optionId = generateRandomNumber(fortunes[prop].length)

    
    switch(prop) {
      case 'signs':
        newArray.push(`Your sign right now is a "${fortunes[prop][optionId]}".`)
        break
      case 'fortuneOutput':
        newArray.push(`You are having: "${fortunes[prop][optionId]}".`)
        break
      case 'advice':
        newArray.push(`You should: "${fortunes[prop][optionId]}".`)
        break
      default:
        newArray.push('Outlook not so good my friend')
    }
  }
  
  function fortuneFormat(wisdom) {
    const formatted = newArray.join('\n')
    console.log(formatted)
  }
  
  fortuneFormat(newArray);
  //call function to format newArray