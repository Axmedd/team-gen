const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
  const testGithub = "AhmedAbdi";
  const employeeInstance = new Engineer(
    "Ahmed",
    2,
    "ahmedabdibg@gmail.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "AhmedAbdi";
  const employeeInstance = new Engineer("Ahmed", 2, "ahmedabdibg@gmail.com", testGithub);
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Ahmed",
    2,
    "ahmedabdibg@gmail.com",
    "Axmedd"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
