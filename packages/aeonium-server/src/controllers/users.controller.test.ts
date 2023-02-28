import tap from 'tap';
import User from 'user';
import userService from "../services/user.service";

tap.pass('This is ok!');

tap.test('User Service: Get User By ID', async childtest => {
  let user: User | null = await userService.getById(1);

  childtest.strictSame(user, {
    "id": 1,
    "name": "James",
    "bio": "",
    "followers": [],
    "following": []
  })
});