import tap from 'tap';
import User from 'user';
import userService from "./user.service";

tap.test('User Service: Get User By ID', async childtest => {
  let user: User | null = await userService.getById(1);

  childtest.strictSame(user, {
    "id": 1,
    "pfp": "1",
    "name": "James",
    "bio": "",
    "followers": [],
    "following": []
  })
});

// tap.test('User Service: getById() returns data')