type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { userName: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.userName === sentValue.userName && user.password === sentValue.password
  );
};

const bgUser = { userName: "Mario", password: "123456" };
const sentUser = { userName: "Mario", password: "123456" };
const loggedIn = verifyUser(bgUser, sentUser);

console.log(loggedIn);
