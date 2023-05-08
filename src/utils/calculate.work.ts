export function calculateWorkYear(from: string) : String {
    let dateSplit = from.split(" ");
    let dateFrom: Date;
    let dateTo: Date;

    try {
      dateFrom = new Date(dateSplit[0] + " " + dateSplit[1]);
      dateTo = new Date();
    }
    catch(error) {
      throw new Error("Invalid date range format")
    }
    
    // if work date to is not "Present"
    let lastDateSplit = dateSplit.length - 1;
    if (dateSplit[lastDateSplit] !== "Present") {
      dateTo = new Date(dateSplit[lastDateSplit-1] + " " + dateSplit[lastDateSplit]);        
    }  

    // validate
    if (dateSplit[2] !== "-" || dateSplit.length <= 3) {
      throw new Error("Invalid date range format")
    }

    if (dateFrom.getFullYear() > dateTo.getFullYear()) {
        throw new Error("Invalid date range order")
    }

    if (dateFrom.getFullYear() === dateTo.getFullYear()) {
      if (dateFrom.getMonth() > dateTo.getMonth()) {
        throw new Error("Invalid date range order")
      }
    }
  

    // calculate
    let diff = (dateTo.getMonth() - dateFrom.getMonth());
    diff = diff + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
  
    let year = Math.floor(diff / 12);
    let month = diff % 12;

    // more than 11 month
    if (diff < 12 ) {
      return diff.toString() + "m";
    }

    // anniversary 
    if (month === 0) {
      return year.toString() + "y"
    }
  
    return year.toString() + "y" + " " + month.toString() + "m";
  }