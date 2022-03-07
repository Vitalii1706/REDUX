const baseUrl = 'https://api.github.com/users';

export const getUserData = userName =>
  fetch(`${baseUrl}/${userName}`).then(response => {
    if (response.ok) {
      console.log(response.json());
      return response.json();
    }
    throw new Error(alert('yoy'));
  });
