interface UserFromUserList {
  id: number;
  fullName: string;
  currentLocation: string;
  profileUrl?: string;
  isActive?: boolean;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  birthdate: Date;
  sex: string;
  currentLocation: string;
  familyStatus: string;
  phoneNumber: string;
  email: string;
  telegram: string;
  hasHouse: boolean;
  isEmployed: boolean;
  profileUrl: string;
}

type UserRole = "admin" | "user" | "organization";

interface LocationHistoryItem {
  regionAbbreviation: string;
  arrivedAt: Date;
  leftAt: Date;
}
