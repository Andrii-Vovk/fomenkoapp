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

type UserRole = admin | user | organization;

interface LocationHistoryItem {
  regionAbbreviation: string;
  arrivedAt: Date;
  leftAt: Date;
}

interface TypeAndDesc {
  type: string;
  description: string;
}
type DocumentItem = TypeAndDesc;

type RequestItem = {
  id: number;
  name: string;
  status: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

type RefugeeRequestStatus = "fulfilled" | "approved" | "in review" | "declined";

interface SalaryHistoryItem {
  id: number;
  salaryIncome: number;
  aidIncome: number;
  onDate: Date;
}

interface AverageSalaryItem {
  salaryIncome: number;
  aidIncome: number;
}

interface AverageSalaryRequest {
  fromDate: string;
  toDate: string;
}
