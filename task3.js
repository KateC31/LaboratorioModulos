
export function ageCalculator(year, month, day) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); 
  
    let age = today.getFullYear() - birthDate.getFullYear();
    
    con
  const monthDifference = today.getMonth() - birthDate.getMonth();
  
    // Si aún no cumplió años este año, restamos 1 a la edad
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }