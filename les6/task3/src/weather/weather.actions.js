export const getWeatherData = () => {
  return async function () {
    const response = await fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities');
    if (response.ok) {
      return response.json();
    }
    throw new Error(alert('Yoy'));
  };
};
