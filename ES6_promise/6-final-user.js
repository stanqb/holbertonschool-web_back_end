import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.all([
    userPromise.catch((error) => error),
    photoPromise.catch((error) => error),
  ]).then((results) => results.map((result) => ({
    status: result instanceof Error ? 'rejected' : 'fulfilled',
    value: result,
  })));
}
