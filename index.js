function findMatching(driversNames, searchString) {
    const searchLowerCase = searchString.toLowerCase();
    const matchingDrivers = driversNames.filter(driver => driver.toLowerCase() === searchLowerCase);
    return matchingDrivers;
  }

function fuzzyMatch(driversNames, query) {
  const queryLowerCase = query.toLowerCase();

  const matchingDrivers = driversNames.filter(driver => {
    const driverLowerCase = driver.toLowerCase();
    return driverLowerCase.startsWith(queryLowerCase);
  });

  return matchingDrivers;
}
function matchName(driverObjects, query) {
    const queryLowerCase = query.toLowerCase();
  
    const matchingDrivers = driverObjects.filter(driver => {
      const driverNameLowerCase = driver.name.toLowerCase();
      return driverNameLowerCase === queryLowerCase;
    });
  
    return matchingDrivers;
  }