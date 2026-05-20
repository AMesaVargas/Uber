const Vehicle_Categories = {
economic: { name: 'Economic', basePrice: 5000, pricePerKm: 1000 },
  xl: { name: 'XL', basePrice: 8000, pricePerKm: 1500 },
  premium: { name: 'Premium', basePrice: 12000, pricePerKm: 2000 },
};

export const validateTripForm = (formData) => {
    const {origin, destination, vehicleCategory} = formData;
    if(!origin || origin.trim() === '')  {  
        return { isValid: false, error: 'Origin is required' };
    }
      if (!destination || destination.trim() === '') {
    return { isValid: false, error: 'Destination is required' };
  }

  if (origin.trim() === destination.trim()) {
    return { isValid: false, error: 'Origin and destination cannot be the same' };
  }

  if (!vehicleCategory || vehicleCategory.trim() === '') {
    return { isValid: false, error: 'Vehicle category is required' };
  }
  if (!Vehicle_Categories[vehicleCategory]) {
    return { isValid: false, error: 'Vehicle category is not valid' };
  }

  return { isValid: true, error: null };

};

export const calculateFare = (vehicleCategory, distanceKm) => {

  const category = Vehicle_Categories[vehicleCategory];

  if (!category) {
    return { success: false, error: 'Vehicle category is not valid' };
  }

  const fare = category.basePrice + (distanceKm * category.pricePerKm);

  return {
    success: true,
    vehicleName: category.name,
    distanceKm,
    fare,
  };

};

export const getVehicleCategories = () => {
  return Vehicle_Categories;
};
