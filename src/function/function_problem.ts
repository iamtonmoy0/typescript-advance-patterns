interface User {
  id: string;
  name: string;
}

interface Admin extends User {
  role: "Admin";
  organizations: string[];
}
interface NormalUser extends User {
  role: "User";
}

function assertUser(user: NormalUser | Admin) {
  if (user.role !== "Admin") {
    throw new Error("not an admin user");
  }
}
