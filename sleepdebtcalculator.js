const getSleepHours = day =>{
  
    switch(day){
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 3;
        break;
      case 'wednesday':
        return 5;
        break;
      case 'thursday':
        return 6;
        break;
      case 'friday':
        return 4;
        break;
      case 'saturday':
        return 7;
        break;
      case 'sunday':
        return 9;
        break;
        
      default:
        return 'Error!';
        
    }
  };
  
  
  
  const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  //console.log(getSleepHours('monday'));
  //console.log(getActualSleepHours());
  
  const getIdealSleepHours = () =>{
    const idealHours = 7;
    return idealHours * 7;
  };
  
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
      console.log('ideal sleep');
    }else if (actualSleepHours > idealSleepHours){
      console.log('user got more sleep' + (actualSleepHours - idealSleepHours) + 'hr!');
    }else{
      console.log('user got more sleep ' + (idealSleepHours - actualSleepHours) + 'hr!');
    }
  };
  
  calculateSleepDebt();
  